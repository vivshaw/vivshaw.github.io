import { publicationUri } from "#lib/standardSite";

/**
 * standard.site: publication verification endpoint
 */
export const dynamic = "force-static";

export function GET() {
  return new Response(`${publicationUri}\n`, {
    headers: { "content-type": "text/plain; charset=utf-8" },
  });
}
