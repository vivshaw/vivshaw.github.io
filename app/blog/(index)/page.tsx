import type { Metadata } from "next"

import { metadataHelper } from "@lib/metadataHelper"
import { getAllBlogPosts } from "./_lib/getAllBlogPosts"

import { BlogList } from "./_components/BlogList"

export const metadata: Metadata = metadataHelper({
  type: "other",
  title: "Blog",
  description: "vivshaw's blog",
  slug: "blog",
})

/**
 * The index page for the blog. Lists all the posts.
 */
export default async function Blog() {
  const postsDateless = await getAllBlogPosts()

  const posts = postsDateless.map((item) => ({
    ...item,
    date: new Date(item.date),
  }))

  return <BlogList posts={posts} />
}
