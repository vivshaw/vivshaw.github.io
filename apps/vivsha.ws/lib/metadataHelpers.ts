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

/**
 * metadata specs for a page. each page must provide this.
 * it's used to generate metadata such as Next.js metadata, social tags, and Schema.org structured metadata.
 */
type SeoData =
  | {
      type: "home"
    }
  | {
      type: "post"
      dateModified?: string
      datePublished: string
      description?: string
      slug: string
      tags: string[]
      title: string
    }
  | {
      type: "topLevel"
      description: string
      slug: string
      title: string
    }

/**
 * gets the page name for the given page.
 */
function getPageName(data: SeoData): string {
  switch (data.type) {
    case "home":
      return site.name
    case "topLevel":
      return `${data.title} | ${site.shortName}`
    case "post":
      return data.title
  }
}

/**
 * gets the page description for the given page.
 */
function getPageDescription(data: SeoData): string | undefined {
  switch (data.type) {
    case "home":
      return site.description
    case "topLevel":
      return data.description
    case "post":
      return data.description
  }
}

/**
 * gets the page URL for the given page.
 */
function getPageUrl(data: SeoData): string {
  switch (data.type) {
    case "home":
      return "/"
    case "topLevel":
      return `/${data.slug}`
    case "post":
      return `/blog/${data.slug}`
  }
}

/**
 * creates page-dependent metadata, to be used with Next.js's metadata exports.
 * this includes the page title, description, and social tags.
 */
export function metadataHelper(data: SeoData): Metadata {
  const pageName = getPageName(data)
  const pageDescription = getPageDescription(data)
  const pageUrl = getPageUrl(data)

  const pageType = (() => {
    switch (data.type) {
      case "home":
        return "website"
      case "topLevel":
        return "website"
      case "post":
        return "article"
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
      case "home":
        return defaultKeywords
      case "topLevel":
        return defaultKeywords
      case "post":
        return data.tags
    }
  })()

  const pageDates = (() => {
    switch (data.type) {
      case "home":
        return undefined
      case "topLevel":
        return undefined
      case "post":
        return {
          "article:published_time": data.datePublished,
          ...(data.dateModified && {
            "article:modified_time": data.dateModified,
          }),
        }
    }
  })()

  return {
    // basic tags
    description: pageDescription,
    keywords: pageKeywords,
    title: pageName,

    // social tags
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
 * creates Schema.org JSON-LD structured metadata for the pages.
 */
export function schemaHelper(data: SeoData) {
  const pageName = getPageName(data)
  const pageDescription = getPageDescription(data)
  const pageUrl = getPageUrl(data)
  const webSiteId = `${site.url}/#website`
  const authorId = `${site.url}/#${author.id}`
  const authorImageId = `${site.url}/#avatar`

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

  const authorSchema: Person = {
    "@type": "Person",
    "@id": authorId,
    alumniOf: author.alumniOf,
    callSign: author.id,
    description: author.bio,
    email: author.mailto,
    gender: author.gender,
    image: {
      "@type": "ImageObject",
      "@id": authorImageId,
      caption: author.avatar.alt,
      inLanguage: "en-US",
    },
    knowsAbout: author.knowsAbout,
    name: author.name,
    sameAs: [
      author.keybase,
      author.socials.bluesky,
      author.socials.github,
      author.socials.linkedin,
      author.socials.mastodon,
      author.socials.twitter,
    ],
    url: site.url,
    worksFor: author.worksFor,
  }

  const authorImageSchema: ImageObject = {
    "@type": "ImageObject",
    "@id": authorImageId,
    inLanguage: "en-US",
    url: author.avatar.src,
    width: `${author.avatar.width}`,
    height: `${author.avatar.height}`,
  }

  const commonSchema = [
    websiteSchema,
    imageSchema,
    authorSchema,
    authorImageSchema,
  ]

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

  function createTopLevelSchema(
    data: Extract<SeoData, { type: "topLevel" }>,
  ): Graph {
    const pageWebPageId = `${pageUrl}/#webpage`
    const pageBreadcrumbId = `${pageUrl}/#breadcrumb`

    const pageWebPage: WebPage = {
      "@type": data.slug === "about" ? "AboutPage" : "WebPage",
      "@id": pageWebPageId,
      breadcrumb: {
        "@id": pageBreadcrumbId,
      },
      description: pageDescription,
      isPartOf: {
        "@id": webSiteId,
      },
      name: pageName,
      primaryImageOfPage: {
        "@id": `${pageUrl}/#primaryimage`,
      },
      url: pageUrl,
      inLanguage: "en-US",
    }

    const pageBreadcrumb: ListItem = {
      "@type": "ListItem",
      item: {
        "@type": "WebPage",
        "@id": pageWebPageId,
        name: pageName,
        url: pageUrl,
      },
      position: 2,
    }

    const pageBreadcrumbs: BreadcrumbList = {
      "@type": "BreadcrumbList",
      "@id": pageBreadcrumbId,
      itemListElement: [homePageBreadcrumb, pageBreadcrumb],
      name: "Breadcrumbs",
    }

    return {
      "@context": "https://schema.org",
      "@graph": [...commonSchema, pageWebPage, pageBreadcrumbs],
    }
  }

  function createPostSchema(data: Extract<SeoData, { type: "post" }>): Graph {
    const postWebPageId = `${pageUrl}/#webpage`
    const postBreadcrumbId = `${pageUrl}/#breadcrumb`
    const postImageId = `${pageUrl}/#primaryimage`
    const postDatePublished = data.datePublished

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
        "@id": authorId,
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
        "@id": authorId,
      },
    }

    return {
      "@context": "https://schema.org",
      "@graph": [...commonSchema, postWebPage, postBreadcrumbs, postArticle],
    }
  }

  switch (data.type) {
    case "home":
      return createHomeSchema()
    case "topLevel":
      return createTopLevelSchema(data)
    case "post":
      return createPostSchema(data)
  }
}
