import { site } from "#data";
import { importBlogPost, listAllBlogSlugs } from "#lib/postHelpers";
import { documentRkey, PUBLICATION_RKEY, publicationUri } from "#lib/standardSite";

/**
 * standard.site (https://standard.site): the canonical manifest of the records this site
 * should have in its AT Protocol repo — one `site.standard.publication` plus one
 * `site.standard.document` per published post, each with its TID record key.
 *
 * this is the single source of truth for the records: it's generated here at build time from
 * the same post metadata and key derivation the site uses for its <link> tags, and
 * `scripts/publish-standard-site.ts` just syncs it to the PDS (no re-deriving). statically
 * emitted, so it's served at `/standard-site-records.json`.
 */
export const dynamic = "force-static";

const PUBLICATION_COLLECTION = "site.standard.publication";
const DOCUMENT_COLLECTION = "site.standard.document";

type RecordEntry = {
  rkey: string;
  record: Record<string, unknown>;
};

export async function GET() {
  const slugs = await listAllBlogSlugs();

  const documents: RecordEntry[] = (
    await Promise.all(
      slugs.map(async (slug) => {
        const { meta } = await importBlogPost(slug);

        const record: Record<string, unknown> = {
          $type: DOCUMENT_COLLECTION,
          site: publicationUri,
          title: meta.title,
          path: `/blog/${meta.slug}`,
          publishedAt: meta.date.toISOString(),
        };

        if (meta.blurb) record.description = meta.blurb;
        if (meta.tags.length > 0) record.tags = meta.tags;
        if (meta.dateModified) record.updatedAt = meta.dateModified.toISOString();

        return { rkey: documentRkey(meta.date, meta.slug), record };
      }),
    )
  ).toSorted((a, b) => a.rkey.localeCompare(b.rkey));

  const publication: RecordEntry = {
    rkey: PUBLICATION_RKEY,
    record: {
      $type: PUBLICATION_COLLECTION,
      url: site.url,
      name: site.name,
      description: site.description,
      preferences: { showInDiscover: true },
    },
  };

  return new Response(`${JSON.stringify({ publication, documents }, null, 2)}\n`, {
    headers: { "content-type": "application/json; charset=utf-8" },
  });
}
