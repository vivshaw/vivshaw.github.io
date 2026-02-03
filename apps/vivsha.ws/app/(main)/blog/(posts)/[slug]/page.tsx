import mdxStyles from "@vivshaw/mdx/mdx.module.css"
import clsx from "clsx"

import { prettyPrintDate } from "#lib"
import { metadataHelper, schemaHelper } from "#lib/metadataHelpers"
import { importBlogPost, listAllBlogSlugs } from "#lib/postHelpers"
import { PostHero } from "./_components/PostHero"
import { postBody } from "./page.css"

/**
 * The page for a single blog post.
 * I fetch them dynamically primarily because I want to maintain a very clean `posts/` directory.
 * I don't want to worry about maintaining Next.js metadata or layout code while writing posts.
 * This allows my MDX files to be almost pure markdown.
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
      <PostHero post={meta} />

      <article className={clsx(postBody, mdxStyles.mdxRoot)}>
        <PostContent />
      </article>

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
