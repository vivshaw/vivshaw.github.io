import type { MetadataRoute } from "next"

import { prettyPrintDate } from "#lib"
import { importBlogPost, listAllBlogSlugs } from "#lib/postHelpers"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const postSlugs = await listAllBlogSlugs()
  const posts = await Promise.all(postSlugs.map((post) => importBlogPost(post)))
  const postSitemapEntries = posts.map((post) => ({
    url: `https://vivsha.ws/blog/${post.meta.slug}`,
    lastModified: prettyPrintDate(post.meta.date),
  }))

  return [
    {
      url: "https://vivsha.ws",
    },
    {
      url: "https://vivsha.ws/about",
    },
    {
      url: "https://vivsha.ws/blog",
    },
    ...postSitemapEntries,
  ]
}

export const dynamic = "force-static"
