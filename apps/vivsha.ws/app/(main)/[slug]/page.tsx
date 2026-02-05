import { MdxBody } from "@vivshaw/basalt-mdx"
import type { Metadata } from "next"

import { metadataHelper, schemaHelper } from "#lib/metadataHelpers"
import { importPage, listAllPageSlugs } from "#lib/postHelpers"
import { Hero } from "../../_components/Hero"

type PageParams = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const slugs = await listAllPageSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: PageParams): Promise<Metadata> {
  const { slug } = await params
  const { meta } = await importPage(slug)

  return metadataHelper({
    type: "topLevel",
    description: meta.description,
    slug,
    title: meta.title,
  })
}

/**
 * generic page component for standalone MDX pages.
 */
export default async function Page({ params }: PageParams) {
  const { slug } = await params
  const { PageContent, meta } = await importPage(slug)

  const jsonLdSchema = schemaHelper({
    type: "topLevel",
    description: meta.description,
    slug,
    title: meta.title,
  })

  return (
    <>
      <Hero title={meta.title} />

      <MdxBody>
        <PageContent />
      </MdxBody>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
      />
    </>
  )
}
