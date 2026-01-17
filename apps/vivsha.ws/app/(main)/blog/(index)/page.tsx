import type { Metadata } from "next"

import { Heading } from "@vivshaw/basalt/components"

import { metadataHelper, schemaHelper } from "#lib/metadataHelpers"
import { BlogList } from "./_components/BlogList"
import { getSortedBlogMetas } from "./_lib/getSortedBlogMetas"
import { blogIndexHeading } from "./layout.css"

export const metadata: Metadata = metadataHelper({
  type: "topLevel",
  description: "vivshaw's blog",
  slug: "blog",
  title: "Blog",
})

/**
 * the index page for the blog. lists all the posts.
 */
export default async function Blog() {
  const postsDateless = await getSortedBlogMetas()

  const jsonLdSchema = schemaHelper({
    type: "topLevel",
    description: "vivshaw's blog",
    slug: "blog",
    title: "blog",
  })

  const posts = postsDateless.map((item) => ({
    ...item,
    date: new Date(item.date),
  }))

  return (
    <>
      <Heading level="1" className={blogIndexHeading}>
        Blog
      </Heading>

      <BlogList posts={posts} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
      />
    </>
  )
}
