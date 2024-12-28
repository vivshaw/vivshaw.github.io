import fs from "fs/promises"
import path from "path"

/**
 * Lists all valid blog post slugs.
 * Each subdirectory under `posts/` contains a blog post. The slugs are the subdirectory names.
 */
export async function listAllBlogSlugs() {
  const root = path.join(process.cwd(), "posts")
  const allSlugs = await fs.readdir(root)

  return allSlugs
}

/**
 * Imports a given blog post, returning both its content and metadata.
 */
export async function importBlogPost(slug: string) {
  const { default: PostContent, meta } = await import(`posts/${slug}/page.mdx`)
  return { PostContent, meta }
}
