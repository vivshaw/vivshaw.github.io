import type { Metadata } from "next"

import { metadataHelper } from "@lib/metadataHelper"
import { BlogTemplate } from "./_components/BlogTemplate"
import { getAllBlogPosts } from "./_lib/getAllBlogPosts"

export const metadata: Metadata = metadataHelper({
  type: "other",
  title: "Blog",
  description: "vivshaw's blog",
  slug: "blog",
})

/**
 * The index page for the blog. Lists all the articles.
 */
export default async function Blog() {
  const articlesDateless = await getAllBlogPosts()

  const articles = articlesDateless.map((item) => ({
    ...item,
    date: new Date(item.date),
  }))

  return <BlogTemplate articles={articles} />
}
