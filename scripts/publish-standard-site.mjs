// @ts-check

/**
 * publishes my site's standard.site records to my AT Protocol repo.
 *   - upserts one `site.standard.publication` record (the singleton describing the whole blog)
 *   - upserts one `site.standard.document` record per published post, keyed on its slug
 *   - prunes document records whose post no longer exists (deleted, renamed, or now a draft),
 *     so the repo always mirrors the currently-published posts
 *
 * record keys are deterministic, which makes this script idempotent.
 *
 * usage:
 *   BSKY_APP_PASSWORD=xxxx-xxxx-xxxx-xxxx yarn publish:standard-site
 *   BSKY_APP_PASSWORD=xxxx-xxxx-xxxx-xxxx yarn publish:standard-site --dry-run
 *
 * environment variables:
 *   BSKY_APP_PASSWORD  (required)  an app password from Bluesky → Settings → Privacy and
 *                                  Security → App Passwords.
 *   BSKY_HANDLE        (optional)  defaults to `vivsha.ws`.
 *   BSKY_PDS           (optional)  defaults to `https://bsky.social`.
 */

import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { AtpAgent } from "@atproto/api";
import matter from "gray-matter";

const PUBLICATION_COLLECTION = "site.standard.publication";
const DOCUMENT_COLLECTION = "site.standard.document";
const PUBLICATION_RKEY = "self";

/** my DID; a guard against attempting to write to the wrong repo */
const EXPECTED_DID = "did:plc:at3ztgbmp5pdxmxqhx7tp3jo";

/**
 * the publication record. mirrors the relevant fields of `site` in
 * `apps/vivsha.ws/data/index.ts`. required fields per the lexicon: `url`, `name`.
 */
const PUBLICATION = {
  $type: PUBLICATION_COLLECTION,
  url: "https://vivsha.ws",
  name: "vivshaw's webbed sight",
  description: "hannah vivian shaw's personal website & blog",
  preferences: {
    showInDiscover: true,
  },
};

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const postsDir = path.join(repoRoot, "posts");
const dryRun = process.argv.includes("--dry-run");

/** AT Protocol record keys allow a restricted charset; my slugs should always pass. */
function assertValidRkey(rkey) {
  if (!/^[a-zA-Z0-9._~:-]{1,512}$/.test(rkey) || rkey === "." || rkey === "..") {
    throw new Error(`"${rkey}" is not a valid AT Protocol record key`);
  }
}

/**
 * reads every post under `posts/`, returning the document records to publish.
 * skips drafts and any directory without a `post.mdx`.
 */
async function collectDocuments() {
  const entries = await readdir(postsDir, { withFileTypes: true });
  const slugs = entries.filter((entry) => entry.isDirectory()).map((entry) => entry.name);

  const documents = await Promise.all(slugs.toSorted().map(buildDocument));

  return documents.filter((document) => document !== null);
}

/**
 * builds the document record for a single post slug, or returns `null` to skip it
 * (a directory without a `post.mdx`, or a draft).
 */
async function buildDocument(slug) {
  let raw;
  try {
    raw = await readFile(path.join(postsDir, slug, "post.mdx"), "utf8");
  } catch {
    // not a post directory (e.g. the posts README lives at the top level)
    return null;
  }

  const { data: frontmatter } = matter(raw);

  if (frontmatter.draft) {
    console.log(`  · skipping draft: ${slug}`);
    return null;
  }

  if (!frontmatter.title || !frontmatter.date) {
    throw new Error(`post "${slug}" is missing a required title or date`);
  }

  assertValidRkey(slug);

  /** @type {Record<string, unknown>} */
  const record = {
    $type: DOCUMENT_COLLECTION,
    site: `at://${EXPECTED_DID}/${PUBLICATION_COLLECTION}/${PUBLICATION_RKEY}`,
    title: frontmatter.title,
    path: `/blog/${slug}`,
    publishedAt: new Date(frontmatter.date).toISOString(),
  };

  if (frontmatter.blurb) record.description = frontmatter.blurb;
  if (Array.isArray(frontmatter.tags) && frontmatter.tags.length > 0) {
    record.tags = frontmatter.tags;
  }
  if (frontmatter.dateModified) {
    record.updatedAt = new Date(frontmatter.dateModified).toISOString();
  }

  return { rkey: slug, record };
}

/** upserts a single record via `com.atproto.repo.putRecord`. */
async function putRecord(agent, collection, rkey, record) {
  if (dryRun) {
    console.log(`  would put ${collection}/${rkey}:`);
    console.log(`    ${JSON.stringify(record)}`);
    return;
  }

  await agent.com.atproto.repo.putRecord({
    repo: agent.did,
    collection,
    rkey,
    record,
    // these are third-party lexicons the PDS doesn't know, so skip server-side validation
    validate: false,
  });

  console.log(`  ✓ ${collection}/${rkey}`);
}

/** deletes a single record via `com.atproto.repo.deleteRecord`. */
async function deleteRecord(agent, collection, rkey) {
  if (dryRun) {
    console.log(`  would delete ${collection}/${rkey}`);
    return;
  }

  await agent.com.atproto.repo.deleteRecord({ repo: agent.did, collection, rkey });

  console.log(`  ✗ ${collection}/${rkey}`);
}

/**
 * lists every existing `site.standard.document` record key in the repo, following pagination.
 * `listRecords` is an unauthenticated read, so this works in a dry run too.
 */
async function listExistingDocumentRkeys(agent, cursor, accumulated = []) {
  const { data } = await agent.com.atproto.repo.listRecords({
    repo: EXPECTED_DID,
    collection: DOCUMENT_COLLECTION,
    limit: 100,
    cursor,
  });

  const rkeys = [...accumulated, ...data.records.map((rec) => rec.uri.split("/").pop())];

  return data.cursor ? listExistingDocumentRkeys(agent, data.cursor, rkeys) : rkeys;
}

/**
 * prunes document records whose post is no longer published, so the repo mirrors the
 * currently-published posts.
 */
async function reconcile(agent, desiredRkeys) {
  const existing = await listExistingDocumentRkeys(agent);
  const stale = existing.filter((rkey) => !desiredRkeys.has(rkey));

  if (stale.length === 0) {
    console.log("  nothing stale to prune");
    return;
  }

  // safety guard: never prune everything just because `posts/` failed to read.
  if (desiredRkeys.size === 0) {
    throw new Error(
      `refusing to prune ${stale.length} record(s) when no documents were collected (likely a read error)`,
    );
  }

  await Promise.all(stale.map((rkey) => deleteRecord(agent, DOCUMENT_COLLECTION, rkey)));
}

async function main() {
  const documents = await collectDocuments();
  const desiredRkeys = new Set(documents.map((document) => document.rkey));

  const service = process.env.BSKY_PDS ?? "https://bsky.social";
  let agent;

  if (dryRun) {
    // an unauthenticated agent is enough to read existing records for the preview.
    agent = new AtpAgent({ service });
    console.log("dry run — nothing will be written.\n");
  } else {
    const handle = process.env.BSKY_HANDLE ?? "vivsha.ws";
    const password = process.env.BSKY_APP_PASSWORD;

    if (!password) {
      throw new Error(
        "BSKY_APP_PASSWORD is required (create one at Bluesky → Settings → Privacy and Security → App Passwords)",
      );
    }

    agent = new AtpAgent({ service });
    await agent.login({ identifier: handle, password });

    if (agent.did !== EXPECTED_DID) {
      throw new Error(
        `logged in as ${agent.did}, but expected ${EXPECTED_DID}. Refusing to write to the wrong repo.`,
      );
    }

    console.log(`logged in as ${handle} (${agent.did})\n`);
  }

  console.log("publication:");
  await putRecord(agent, PUBLICATION_COLLECTION, PUBLICATION_RKEY, PUBLICATION);

  console.log("\ndocuments:");
  await Promise.all(
    documents.map(({ rkey, record }) => putRecord(agent, DOCUMENT_COLLECTION, rkey, record)),
  );

  console.log("\nstale documents:");
  await reconcile(agent, desiredRkeys);

  console.log(
    `\ndone. ${documents.length} document(s)${dryRun ? " previewed (nothing written)" : " published"}.`,
  );
}

main().catch((error) => {
  console.error("\nfailed:", error.message ?? error);
  process.exit(1);
});
