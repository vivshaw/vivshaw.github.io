import type { Metadata } from "next"

import { metadataHelper } from "#lib/metadataHelper"
import { BlogList } from "./_components/BlogList"
import { getSortedBlogMetas } from "./_lib/getAllBlogPosts"

export const metadata: Metadata = metadataHelper({
  type: "other",
  description: "vivshaw's blog",
  slug: "blog",
  title: "Blog",
})

/**
 * The index page for the blog. Lists all the posts.
 */
export default async function Blog() {
  const postsDateless = await getSortedBlogMetas()

  const posts = postsDateless.map((item) => ({
    ...item,
    date: new Date(item.date),
  }))

  return <BlogList posts={posts} />
}
