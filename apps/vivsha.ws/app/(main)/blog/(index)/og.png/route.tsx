import { renderOgImage } from "#lib/ogImage";

/**
 * the blog index's social preview image
 */
export async function GET() {
  return renderOgImage({ title: "Blog" });
}

export const dynamic = "force-static";
