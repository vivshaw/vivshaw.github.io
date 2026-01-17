import fs from "fs/promises"
import path from "path"

import { BlogFrontmatter, PostMeta } from "#data"

/**
 * lists all valid blog post slugs.
 * each subdirectory under `posts/` contains a blog post. the slugs are the subdirectory names.
 */
export async function listAllBlogSlugs() {
  const root = path.join(process.cwd(), "../../posts")
  const allEntities = await fs.readdir(root, { withFileTypes: true })
  const allDirectories = allEntities.filter((entity) => entity.isDirectory())
  const allSlugs = allDirectories.map((dir) => dir.name)

  return allSlugs
}

/**
 * imports a given blog post, returning both its content and metadata.
 */
export async function importBlogPost(slug: string) {
  const { default: PostContent, frontmatter } = await import(
    `#/../../posts/${slug}/post.mdx`
  )

  const parsedFrontmatter = BlogFrontmatter.parse(frontmatter)
  const postMeta = PostMeta.parse({
    ...parsedFrontmatter,
    date: new Date(frontmatter.date),
    slug,
  })

  return {
    PostContent,
    meta: postMeta,
  }
}
