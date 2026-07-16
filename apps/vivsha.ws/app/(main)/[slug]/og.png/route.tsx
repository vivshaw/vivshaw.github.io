import { renderOgImage } from "#lib/ogImage";
import { importPage, listAllPageSlugs } from "#lib/postHelpers";

/**
 * the social preview image for a standalone page
 */
export async function GET(_request: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const { meta } = await importPage(slug);

  return renderOgImage({ title: meta.title });
}

export async function generateStaticParams() {
  const slugs = await listAllPageSlugs();
  return slugs.map((slug) => ({ slug }));
}

export const dynamicParams = false;
