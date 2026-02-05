import { type PostMetadata } from "#data"
import { importBlogPost, listAllBlogSlugs } from "#lib/postHelpers"

/** the dates have to get munged to and from string to be serialized for `getStaticProps` (｡╯︵╰｡) */
type PostFromServer = Omit<PostMetadata, "date"> & { date: string }

/**
 * fetches all the blog posts that currently exist.
 */
export async function getSortedBlogMetas(): Promise<PostFromServer[]> {
  const allSlugs = await listAllBlogSlugs()
  const blogs = await Promise.all(allSlugs.map((slug) => importBlogPost(slug)))
  const blogMetas = blogs.map((blog) => blog.meta)
  const sortedBlogMetas = blogMetas.sort(
    (a, b) => b.date.getTime() - a.date.getTime(),
  )
  const serializableBlogMetas = sortedBlogMetas.map((blog) => ({
    ...blog,
    date: blog.date.toISOString(),
  }))

  return serializableBlogMetas
}
