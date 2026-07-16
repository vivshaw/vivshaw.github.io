import { renderOgImage } from "#lib/ogImage";
import { importBlogPost, listAllBlogSlugs } from "#lib/postHelpers";

/**
 * the blog post social preview image
 */
export async function GET(_request: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const { meta } = await importBlogPost(slug);

  return renderOgImage({
    title: meta.title,
    blurb: meta.blurb,
  });
}

export async function generateStaticParams() {
  const slugs = await listAllBlogSlugs();
  return slugs.map((slug) => ({ slug }));
}

export const dynamicParams = false;
