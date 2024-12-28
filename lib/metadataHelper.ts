import type { Metadata } from "next/types"

import { author, site } from "#data"

type SeoData =
  | {
      type: "home"
    }
  | {
      type: "post"
      datePublished: string
      description: string
      slug: string
      title: string
    }
  | {
      type: "other"
      description: string
      slug: string
      title: string
    }

/**
 * Creates page-dependent metadata, to be used with Next.js's metadata exports.
 * This includes the page title, description, and social tags.
 */
export function metadataHelper(data: SeoData): Metadata {
  const pageName = (() => {
    switch (data.type) {
      case "home":
        return {
          default: site.name,
          template: `%s | ${site.shortName}`,
        }
      case "post":
        // Blog posts should use _only_ the title as their name.
        return {
          absolute: data.title,
        }
      case "other":
      default:
        // Other pages will inherit the `template` from the home page.
        return data.title
    }
  })()

  const pageDescription = (() => {
    switch (data.type) {
      case "post":
      case "other":
        return data.description
      case "home":
      default:
        return site.description
    }
  })()

  const pageType = (() => {
    switch (data.type) {
      case "post":
        return "article"
      case "home":
      case "other":
      default:
        return "website"
    }
  })()

  // TODO: Fix this!
  const pageUrl = (() => {
    switch (data.type) {
      case "home":
        return "/"
      case "post":
        return `/blog/${data.slug}`
      case "other":
      default:
        return `/${data.slug}`
    }
  })()

  return {
    // Basic tags
    description: pageDescription,
    title: pageName,

    // Social tags
    openGraph: {
      authors: site.url,
      description: pageDescription,
      images: site.defaultPreview.src,
      siteName: site.name,
      title: pageName,
      type: pageType,
      url: pageUrl,
    },
    twitter: {
      card: "summary_large_image",
      creator: author.socials.twitter,
      description: pageDescription,
      images: site.defaultPreview.src,
      site: site.url,
      title: pageName,
    },
  }
}
