/**
 * syncs my site's standard.site records to my AT Protocol repo.
 *
 * the records are derived at build time and published as a static manifest at
 * `/standard-site-records.json` (see `apps/vivsha.ws/app/standard-site-records.json/route.ts`).
 * this script reads that manifest and makes the PDS match it: upserting every record in it,
 * and pruning any record that isn't. that keeps publishing idempotent and the repo a mirror
 * of what's live.
 *
 * the manifest defaults to the live site; pass --manifest to sync a local build instead.
 *
 * usage:
 *   yarn publish:standard-site
 *   yarn publish:standard-site --dry-run
 *   yarn publish:standard-site --dry-run --manifest apps/vivsha.ws/out/standard-site-records.json
 *
 * environment variables:
 *   BSKY_APP_PASSWORD  (required unless --dry-run)  an app password from Bluesky → Settings →
 *                                                   Privacy and Security → App Passwords.
 *   BSKY_HANDLE        (optional)  defaults to `vivsha.ws`.
 *   BSKY_PDS           (optional)  defaults to `https://bsky.social`.
 */

import { readFile } from "node:fs/promises";

import { AtpAgent, type BlobRef } from "@atproto/api";
import { z } from "zod";

const PUBLICATION_COLLECTION = "site.standard.publication";
const DOCUMENT_COLLECTION = "site.standard.document";

/** my DID */
const EXPECTED_DID = "did:plc:at3ztgbmp5pdxmxqhx7tp3jo";

/** where to read the records manifest from when --manifest isn't passed */
const DEFAULT_MANIFEST = "https://vivsha.ws/standard-site-records.json";

/** a `site.standard.document` record */
const documentRecord = z.object({
  $type: z.literal(DOCUMENT_COLLECTION),
  site: z.string(),
  title: z.string(),
  publishedAt: z.string(),
  path: z.string().optional(),
  description: z.string().optional(),
  tags: z.array(z.string()).optional(),
  updatedAt: z.string().optional(),
});

/** an RGB color, per `site.standard.theme.color#rgb` */
const rgbColor = z.object({
  $type: z.literal("site.standard.theme.color#rgb"),
  r: z.number().int().min(0).max(255),
  g: z.number().int().min(0).max(255),
  b: z.number().int().min(0).max(255),
});

/** the publication theme, per `site.standard.theme.basic` */
const basicThemeSchema = z.object({
  $type: z.literal("site.standard.theme.basic"),
  background: rgbColor,
  foreground: rgbColor,
  accent: rgbColor,
  accentForeground: rgbColor,
});

/** the `site.standard.publication` record */
const publicationRecord = z.object({
  $type: z.literal(PUBLICATION_COLLECTION),
  url: z.string(),
  name: z.string(),
  description: z.string().optional(),
  basicTheme: basicThemeSchema.optional(),
  preferences: z.object({ showInDiscover: z.boolean().optional() }).optional(),
  icon: z.custom<BlobRef>().optional(),
});

const manifestSchema = z.object({
  publication: z.object({
    rkey: z.string(),
    /** an asset URL whose bytes will be uploaded as the publication's `icon` blob */
    iconUrl: z.string().optional(),
    record: publicationRecord,
  }),
  documents: z.array(z.object({ rkey: z.string(), record: documentRecord })),
});

type Manifest = z.infer<typeof manifestSchema>;

const dryRun = process.argv.includes("--dry-run");

/** the manifest location: `--manifest <path-or-url>`, else the live site. */
function manifestSource(): string {
  const inline = process.argv.find((arg) => arg.startsWith("--manifest="));
  if (inline) return inline.slice("--manifest=".length);

  const flag = process.argv.indexOf("--manifest");
  if (flag !== -1 && process.argv[flag + 1]) return process.argv[flag + 1];

  return DEFAULT_MANIFEST;
}

/** validates a freshly parsed value against the manifest schema, narrowing it to `Manifest`. */
function parseManifest(value: unknown, source: string): Manifest {
  const result = manifestSchema.safeParse(value);
  if (!result.success) {
    const detail = result.error.issues
      .map((issue) => `${issue.path.join(".") || "(root)"}: ${issue.message}`)
      .join("; ");
    throw new Error(`the manifest at ${source} is malformed: ${detail}`);
  }
  return result.data;
}

/** reads and validates the records manifest from a URL or a local file path. */
async function loadManifest(): Promise<Manifest> {
  const source = manifestSource();

  let text: string;
  if (source.startsWith("http")) {
    const response = await fetch(source);
    if (!response.ok) {
      throw new Error(`could not fetch the manifest from ${source} (${response.status})`);
    }
    text = await response.text();
  } else {
    text = await readFile(source, "utf8");
  }

  const manifest = parseManifest(JSON.parse(text), source);

  console.log(`manifest: ${source} (${manifest.documents.length} document(s))\n`);
  return manifest;
}

/** upserts a single record via `com.atproto.repo.putRecord`. */
async function putRecord(
  agent: AtpAgent,
  collection: string,
  rkey: string,
  record: Record<string, unknown>,
): Promise<void> {
  if (dryRun) {
    console.log(`  would put ${collection}/${rkey}`);
    return;
  }

  await agent.com.atproto.repo.putRecord({
    repo: agent.assertDid,
    collection,
    rkey,
    record,
    // these are third-party lexicons the PDS doesn't know, so skip server-side validation
    validate: false,
  });

  console.log(`  ✓ ${collection}/${rkey}`);
}

/** deletes a single record via `com.atproto.repo.deleteRecord`. */
async function deleteRecord(agent: AtpAgent, collection: string, rkey: string): Promise<void> {
  if (dryRun) {
    console.log(`  would delete ${collection}/${rkey}`);
    return;
  }

  await agent.com.atproto.repo.deleteRecord({ repo: agent.assertDid, collection, rkey });

  console.log(`  ✗ ${collection}/${rkey}`);
}

/** fetches an asset and uploads it as a blob, returning the ref to embed in a record. */
async function uploadIcon(agent: AtpAgent, url: string): Promise<BlobRef> {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`could not fetch the icon from ${url} (${response.status})`);
  }

  const bytes = new Uint8Array(await response.arrayBuffer());
  const mimeType = response.headers.get("content-type") ?? "image/png";
  const { data } = await agent.com.atproto.repo.uploadBlob(bytes, { encoding: mimeType });

  return data.blob;
}

/**
 * lists every existing record key in a collection, following pagination.
 * `listRecords` is an unauthenticated read, so this works in a dry run too.
 */
async function listExistingRkeys(
  agent: AtpAgent,
  collection: string,
  cursor?: string,
  accumulated: string[] = [],
): Promise<string[]> {
  const { data } = await agent.com.atproto.repo.listRecords({
    repo: EXPECTED_DID,
    collection,
    limit: 100,
    cursor,
  });

  const rkeys = [...accumulated, ...data.records.map((rec) => rec.uri.split("/").pop() ?? "")];

  return data.cursor ? listExistingRkeys(agent, collection, data.cursor, rkeys) : rkeys;
}

/** upserts every manifest entry in a collection, then deletes anything else in it. */
async function syncCollection(
  agent: AtpAgent,
  collection: string,
  entries: { rkey: string; record: Record<string, unknown> }[],
): Promise<void> {
  await Promise.all(entries.map((entry) => putRecord(agent, collection, entry.rkey, entry.record)));

  const desired = new Set(entries.map((entry) => entry.rkey));
  const existing = await listExistingRkeys(agent, collection);
  const stale = existing.filter((rkey) => !desired.has(rkey));

  if (stale.length === 0) {
    console.log("  nothing stale to prune");
    return;
  }

  await Promise.all(stale.map((rkey) => deleteRecord(agent, collection, rkey)));
}

async function main(): Promise<void> {
  const manifest = await loadManifest();

  const service = process.env.BSKY_PDS ?? "https://bsky.social";
  let agent: AtpAgent;

  if (dryRun) {
    // an unauthenticated agent is enough to read existing records for the preview.
    agent = new AtpAgent({ service });
    console.log("dry run, nothing will be written.\n");
  } else {
    const handle = process.env.BSKY_HANDLE ?? "vivsha.ws";
    const password = process.env.BSKY_APP_PASSWORD;

    if (!password) {
      throw new Error("BSKY_APP_PASSWORD is required");
    }

    agent = new AtpAgent({ service });
    await agent.login({ identifier: handle, password });

    console.log(`logged in as ${handle} (${agent.did})\n`);
  }

  console.log("publication:");
  const { publication } = manifest;
  if (publication.iconUrl) {
    if (dryRun) {
      console.log(`  would upload icon from ${publication.iconUrl}`);
    } else {
      publication.record.icon = await uploadIcon(agent, publication.iconUrl);
      console.log(`  ✓ uploaded icon from ${publication.iconUrl}`);
    }
  }
  await syncCollection(agent, PUBLICATION_COLLECTION, [publication]);

  console.log("\ndocuments:");
  await syncCollection(agent, DOCUMENT_COLLECTION, manifest.documents);

  console.log(
    `\ndone. ${manifest.documents.length} document(s)${dryRun ? " previewed (nothing written)" : " synced"}.`,
  );
}

main().catch((error: unknown) => {
  console.error("\nfailed:", error instanceof Error ? error.message : error);
  process.exit(1);
});
