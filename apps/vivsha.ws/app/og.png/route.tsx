import { renderOgImage } from "#lib/ogImage";

/**
 * the root page's social preview image
 */
export async function GET() {
  return renderOgImage({ title: "" });
}

export const dynamic = "force-static";
