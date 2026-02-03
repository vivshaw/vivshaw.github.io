import type { Metadata } from "next"
import { Heading } from "@vivshaw/basalt"

import { metadataHelper, schemaHelper } from "#lib/metadataHelpers"
import { importPage, listAllPageSlugs } from "#lib/postHelpers"
import { MdxBody } from "../../_components/MdxBody"
import styles from "./page.module.css"

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
 * Generic page component for standalone MDX pages.
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
      <MdxBody className={styles.pageBody}>
        <Heading level="1">{meta.title}</Heading>
        <PageContent />
      </MdxBody>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
      />
    </>
  )
}
