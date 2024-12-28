import fs from "fs/promises"
import path from "path"

import type { Article } from "@data"

/** The dates have to get munged to and from string to be serialized for `getStaticProps` 😔 */
type ArticleFromServer = Omit<Article, "date"> & { date: string }

/**
 * Fetches all the blog posts that currently exist.
 */
export async function getAllBlogPosts(): Promise<ArticleFromServer[]> {
  const root = path.join(process.cwd(), "app/blog/(posts)")

  const allPages = await fs.readdir(root)
  const withoutIndex = allPages.filter(
    (item) =>
      item !== "layout.tsx" &&
      item !== "layout.css.ts" &&
      item !== "_components",
  )
  const blogs = await Promise.all(
    withoutIndex.map((item) => import(`@app/blog/(posts)/${item}/page.mdx`)),
  )
  const blogMetas = blogs.map((blog) => blog.meta)
  const sortedBlogMetas = blogMetas.sort((a, b) => b.date - a.date)
  const serializableBlogMetas = sortedBlogMetas.map((blog) => ({
    ...blog,
    date: blog.date.toISOString(),
  }))

  return serializableBlogMetas
}
