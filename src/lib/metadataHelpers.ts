import type { Metadata } from "next/types"
import type {
  Article,
  BreadcrumbList,
  Graph,
  ImageObject,
  ListItem,
  Person,
  WebPage,
  WebSite,
} from "schema-dts"

import { author, site } from "#data"
import { Author } from "next/dist/lib/metadata/types/metadata-types"

type SeoData =
  | {
      type: "home"
    }
  | {
      type: "post"
      dateModified?: string
      datePublished: string
      description: string
      slug: string
      tags: string[]
      title: string
    }
  | {
      type: "other"
      description: string
      slug: string
      title: string
      tags?: string[]
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

  const pageKeywords = (() => {
    const defaultKeywords = [
      "engineering",
      "machine learning",
      "software",
      "technology",
    ]
    switch (data.type) {
      case "post":
        return data.tags
      case "other":
        return data.tags ?? defaultKeywords
      case "home":
      default:
        return defaultKeywords
    }
  })()

  const pageDates = (() => {
    switch (data.type) {
      case "post":
        return {
          "article:published_time": data.datePublished,
          ...(data.dateModified && {
            "article:modified_time": data.dateModified,
          }),
        }
      default:
        return undefined
    }
  })()

  return {
    // Basic tags
    description: pageDescription,
    keywords: pageKeywords,
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

    ...(pageDates ? { other: pageDates } : {}),
  }
}

/**
 * Creates Schema.org JSON-LD structured metadata for the pages.
 */
export function schemaHelper(data: SeoData) {
  const pageName = (() => {
    switch (data.type) {
      case "home":
        return site.name
      case "post":
        // Blog posts should use _only_ the title as their name.
        return data.title
      case "other":
      default:
        // Other pages will inherit the `template` from the home page.
        return `${data.title} | ${site.shortName}`
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

  const webSiteId = `${site.url}/#website`

  const websiteSchema: WebSite = {
    "@type": "WebSite",
    "@id": webSiteId,
    url: site.url,
    name: site.name,
    description: site.description,
    inLanguage: "en-US",
  }

  const imageSchema: ImageObject = {
    "@type": "ImageObject",
    "@id": `${pageUrl}/#primaryimage`,
    height: `${site.defaultPreview.height}`,
    inLanguage: "en-US",
    url: site.defaultPreview.src,
    width: `${site.defaultPreview.width}`,
  }

  const commonSchema = [websiteSchema, imageSchema]

  const homePageId = `${site.url}/#home`

  const homePageBreadcrumb: ListItem = {
    "@type": "ListItem",
    "@id": `${site.url}/#breadcrumb`,
    item: {
      "@type": "WebPage",
      "@id": homePageId,
      name: "Home",
      url: site.url,
    },
    position: 1,
  }

  function createHomeSchema(): Graph {
    const homeWebPage: WebPage = {
      "@type": "WebPage",
      "@id": homePageId,
      description: pageDescription,
      inLanguage: "en-US",
      isPartOf: {
        "@id": webSiteId,
      },
      name: pageName,
      url: site.url,
    }

    const homeBreadcrumbs: BreadcrumbList = {
      "@type": "BreadcrumbList",
      description: "Breadcrumb list",
      itemListElement: [homePageBreadcrumb],
    }

    return {
      "@context": "https://schema.org",
      "@graph": [...commonSchema, homeWebPage, homeBreadcrumbs],
    }
  }

  function createTopLevelSchema(): Graph {
    const topLevelWebpageId = `${pageUrl}/#webpage`
    const topLevelBreadcrumbId = `${pageUrl}/#breadcrumb`

    const topLevelWebPage: WebPage = {
      "@type":
        (data as { type: "other"; slug: string }).slug === "about"
          ? "AboutPage"
          : "WebPage",
      "@id": topLevelWebpageId,
      breadcrumb: {
        "@id": topLevelBreadcrumbId,
      },
      description: pageDescription,
      isPartOf: {
        "@id": webSiteId,
      },
      name: `${pageName}`,
      primaryImageOfPage: {
        "@id": `${pageUrl}/#primaryimage`,
      },
      url: `${pageUrl}`,
      inLanguage: "en-US",
    }

    const topLevelBreadcrumb: ListItem = {
      "@type": "ListItem",
      item: {
        "@type": "WebPage",
        "@id": topLevelWebpageId,
        name: pageName,
        url: pageUrl,
      },
      position: 2,
    }

    const topLevelBreadcrumbs: BreadcrumbList = {
      "@type": "BreadcrumbList",
      "@id": topLevelBreadcrumbId,
      itemListElement: [homePageBreadcrumb, topLevelBreadcrumb],
      name: "Breadcrumbs",
    }

    return {
      "@context": "https://schema.org",
      "@graph": [...commonSchema, topLevelWebPage, topLevelBreadcrumbs],
    }
  }

  function createPostSchema(): Graph {
    const postWebPageId = `${pageUrl}/#webpage`
    const postBreadcrumbId = `${pageUrl}/#breadcrumb`
    const postAuthorId = `${site.url}/#${author.id}`
    const postImageId = `${pageUrl}/#primaryimage`
    const postPersonImageId = `${site.url}/#avatar`
    const postDatePublished = (data as { type: "post"; datePublished: string })
      .datePublished

    const postWebPage: WebPage = {
      "@type": "WebPage",
      "@id": postWebPageId,
      breadcrumb: {
        "@id": postBreadcrumbId,
      },
      datePublished: postDatePublished,
      description: pageDescription,
      inLanguage: "en-US",
      isPartOf: {
        "@id": webSiteId,
      },
      name: pageName,
      primaryImageOfPage: {
        "@id": postImageId,
      },
      url: pageUrl,
    }

    const postBreadcrumbs: BreadcrumbList = {
      "@type": "BreadcrumbList",
      "@id": postBreadcrumbId,
      itemListElement: [
        homePageBreadcrumb,
        {
          "@type": "ListItem",
          item: {
            "@type": "WebPage",
            "@id": `${site.url}/blog/#webpage`,
            name: `Blog | ${site.shortName}`,
            url: `${site.url}/blog`,
          },
          position: 2,
        },
        {
          "@type": "ListItem",
          item: {
            "@type": "WebPage",
            "@id": postWebPageId,
            name: pageName,
            url: pageUrl,
          },
          position: 3,
        },
      ],
    }

    const postArticle: Article = {
      "@type": "Article",
      "@id": `${pageUrl}/#article`,
      author: {
        "@id": postAuthorId,
      },
      datePublished: postDatePublished,
      headline: pageName,
      image: {
        "@id": postImageId,
      },
      inLanguage: "en-US",
      isPartOf: {
        "@id": postWebPageId,
      },
      mainEntityOfPage: {
        "@id": postWebPageId,
      },
      publisher: {
        "@id": postAuthorId,
      },
    }

    const postPerson: Person = {
      "@type": "Person",
      "@id": postAuthorId,
      description: author.bio,
      name: author.name,
      image: {
        "@type": "ImageObject",
        "@id": postPersonImageId,
        caption: author.avatar.alt,
        inLanguage: "en-US",
      },
      sameAs: [
        author.keybase,
        author.socials.bluesky,
        author.socials.github,
        author.socials.linkedin,
        author.socials.mastodon,
        author.socials.twitter,
      ],
    }

    const postPersonImage: ImageObject = {
      "@type": "ImageObject",
      "@id": postPersonImageId,
      inLanguage: "en-US",
      url: author.avatar.image.src,
      width: `${author.avatar.image.width}`,
      height: `${author.avatar.image.height}`,
    }

    return {
      "@context": "https://schema.org",
      "@graph": [
        ...commonSchema,
        postWebPage,
        postBreadcrumbs,
        postArticle,
        postPerson,
        postPersonImage,
      ],
    }
  }

  const schema: Graph = (() => {
    switch (data.type) {
      case "post":
        return createPostSchema()
      case "home":
        return createHomeSchema()
      case "other":
      default:
        return createTopLevelSchema()
    }
  })()

  return schema
}
