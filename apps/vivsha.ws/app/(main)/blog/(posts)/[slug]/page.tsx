import { MdxBody } from "@vivshaw/basalt-mdx"

import { prettyPrintDate } from "#lib"
import { metadataHelper, schemaHelper } from "#lib/metadataHelpers"
import { importBlogPost, listAllBlogSlugs } from "#lib/postHelpers"
import { Hero } from "../../../../_components/Hero"

/**
 * the page for a single blog post.
 * i fetch them dynamically primarily because I want to maintain a very clean `posts/` directory.
 * i don't want to worry about maintaining Next.js metadata or layout code while writing posts.
 * this allows my MDX files to be pure markdown.
 */
export default async function Post({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const slug = (await params).slug
  const { PostContent, meta } = await importBlogPost(slug)

  const prettyDate = prettyPrintDate(meta.date)

  const jsonLdSchema = schemaHelper({
    type: "post",
    datePublished: prettyDate,
    description: meta.blurb,
    slug: slug,
    tags: meta.tags,
    title: meta.title,
  })

  return (
    <>
      <Hero title={meta.title} subtitle={meta.blurb} />

      <MdxBody leadingSmallCaps>
        <PostContent />
      </MdxBody>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
      />
    </>
  )
}

export async function generateStaticParams() {
  const slugs = await listAllBlogSlugs()
  const params = slugs.map((slug) => ({ slug }))
  return params
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const { meta } = await importBlogPost(slug)
  const prettyDate = prettyPrintDate(meta.date)
  const prettyDateModified = meta.dateModified
    ? prettyPrintDate(meta.dateModified)
    : undefined

  return metadataHelper({
    type: "post",
    dateModified: prettyDateModified,
    datePublished: prettyDate,
    description: meta.blurb,
    slug: slug,
    tags: meta.tags,
    title: meta.title,
  })
}

export const dynamicParams = false
