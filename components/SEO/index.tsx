import Head from "next/head"

import { author, site } from "@data"

type SEOData =
  | {
      type: "home"
    }
  | {
      type: "article"
      datePublished: string
      description: string
      title: string
    }
  | {
      type: "other"
      description: string
      title: string
    }

type SEOProps = {
  data: SEOData
  pathname: string
}

// TODO: Should this be `next/seo`?
// TODO: Ensure PWA stuff works
/**
 * Generates meta content and SEO tags for any page.
 */
export const SEO: React.FC<SEOProps> = ({ data, pathname }) => {
  const pageUrl = site.url + pathname

  const pageName = (() => {
    switch (data.type) {
      case "article":
        return data.title
      case "home":
        return site.name
      case "other":
      default:
        return `${data.title} | ${site.shortName}`
    }
  })()

  const pageDescription = (() => {
    switch (data.type) {
      case "article":
        return data.description
      case "other":
        return data.description
      case "home":
      default:
        return site.description
    }
  })()

  /** This chunk of schema is shared between all pages. */
  const alwaysHereSchema = `    {
      "@type": "WebSite",
      "@id": "${site.url}/#website",
      "url": "${site.url}",
      "name": "${site.name}",
      "description": "${site.description}",
      "inLanguage": "en-US"
    },
    {
      "@type": "ImageObject",
      "@id": "${pageUrl}/#primaryimage",
      "inLanguage": "en-US",
      "url": "${site.defaultPreview.src}",
      "width": ${site.defaultPreview.width},
      "height": ${site.defaultPreview.height}
    }`

  /** This schema is used only for the home page. */
  const homeSchema = `{
  "@context": "https://schema.org",
  "@graph": [
    ${alwaysHereSchema},
    {
      "@type": [
        "WebPage"
      ],
      "@id": "${site.url}/#webpage",
      "url": "${site.url}",
      "name": "${pageName}",
      "isPartOf": {
        "@id": "${site.url}/#website"
      },
      "description": "${pageDescription}",
      "inLanguage": "en-US"
    },
    {
      "@type": "BreadcrumbList",
      "description": "Breadcrumbs list",
      "itemListElement": [
        {
          "@type": "ListItem",
          "item": "${site.name}",
          "name": "Home",
          "position": "1"
        }
      ],
      "name": "Breadcrumbs"
    }
  ]
}
`

  // TODO: Get rid of the gross type assertions
  /** This schema is used only for the blog articles. */
  const articleSchema = `{
  "@context": "https://schema.org",
  "@graph": [
    ${alwaysHereSchema},
    {
      "@type": [
        "WebPage"
      ],
      "@id": "${pageUrl}/#webpage",
      "url": "${pageUrl}",
      "name": "${pageName}",
      "isPartOf": {
        "@id": "${site.url}/#website"
      },
      "primaryImageOfPage": {
        "@id": "${pageUrl}/#primaryimage"
      },
      "datePublished": "${(data as { type: "article"; datePublished: string }).datePublished}",
      "description": "${pageDescription}",
      "breadcrumb": {
        "@id": "${pageUrl}/#breadcrumb"
      },
      "inLanguage": "en-US"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "${pageUrl}/#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "item": {
            "@type": "WebPage",
            "@id": "${site.url}",
            "url": "${site.url}",
            "name": "Home"
          }
        },
        {
          "@type": "ListItem",
          "position": 2,
          "item": {
            "@type": "WebPage",
            "@id": "${site.url}/blog/#webpage",
            "url": "${site.url}/blog",
            "name": "Blog | ${site.shortName}"
          }
        },
        {
          "@type": "ListItem",
          "position": 3,
          "item": {
            "@type": "WebPage",
            "@id": "${pageUrl}/#webpage",
            "url": "${pageUrl}",
            "name": "${pageName}"
          }
        }
      ],
      "name": "Breadcrumbs"
    },
    {
      "@type": "Article",
      "@id": "${pageUrl}/#article",
      "isPartOf": {
        "@id": "${pageUrl}/#webpage"
      },
      "author": {
        "@id": "${site.url}/#${author.id}"
      },
      "headline": "${pageName}",
      "datePublished": "${(data as { type: "article"; datePublished: string }).datePublished}",
      "mainEntityOfPage": {
        "@id": "${pageUrl}/#webpage"
      },
      "publisher": {
        "@id": "${site.url}/#${author.id}"
      },
      "image": {
        "@id": "${pageUrl}/#primaryimage"
      },
      "inLanguage": "en-US"
    },
    {
      "@type": [
        "Person"
      ],
      "@id": "${site.url}/#${author.id}",
      "name": "${author.name}",
      "image": {
        "@type": "ImageObject",
        "@id": "${site.url}/#personlogo",
        "inLanguage": "en-US",
        "caption": "${author.avatar.alt}"
      },
      "description": "${author.bio}",
      "sameAs": [
        "${author.socials.twitter}",
        "${author.socials.github}",
        "${author.socials.linkedin}",
      ]
    },
    {
      "@type": "ImageObject",
      "@id": "${site.url}/#personlogo",
      "inLanguage": "en-US",
      "url": "${author.avatar.image.src}",
      "width": ${author.avatar.image.width},
      "height": ${author.avatar.image.height}
    },
  ]
}
`

  /** This schema is used for all other pages. */
  const otherSchema = `{
  "@context": "https://schema.org",
  "@graph": [
    ${alwaysHereSchema},
    {
      "@type": [
        "WebPage"
      ],
      "@id": "${pageUrl}/#webpage",
      "url": "${pageUrl}",
      "name": "${pageName}",
      "isPartOf": {
        "@id": "${site.url}/#website"
      },
      "primaryImageOfPage": {
        "@id": "${pageUrl}/#primaryimage"
      },
      "description": "${pageDescription}",
      "breadcrumb": {
        "@id": "${pageUrl}/#breadcrumb"
      },
      "inLanguage": "en-US"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "${pageUrl}/#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "item": {
            "@type": "WebPage",
            "@id": "${site.url}",
            "url": "${site.url}",
            "name": "Home"
          }
        },
        {
          "@type": "ListItem",
          "position": 2,
          "item": {
            "@type": "WebPage",
            "@id": "${pageUrl}/#webpage",
            "url": "${pageUrl}",
            "name": "${pageName}"
          }
        }
      ],
      "name": "Breadcrumbs"
    },
  ]
}
`
  /** Schema.org structured metadata for the page. */
  const schema = (() => {
    switch (data.type) {
      case "article":
        return articleSchema
      case "home":
        return homeSchema
      case "other":
      default:
        return otherSchema
    }
  })()

  return (
    <Head>
      {/** Title-y stuff */}
      <title>{pageName}</title>
      <meta name="name" content={pageName} />
      <meta itemProp="name" content={pageName} />
      <meta name="description" content={pageDescription} />
      <meta itemProp="description" content={pageDescription} />
      <meta itemProp="image" content={site.defaultPreview.src} />

      {/** Schema.org structured metadata */}
      <script type="application/ld+json">{schema}</script>

      {/** Boilerplatey stuff */}
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/** PWA & Icon stuff */}
      <meta name="application-name" content={site.name} />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content={site.name} />
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="shortcut icon" href="/favicon.ico" />
      <link rel="manifest" href="/manifest.json" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000" />
      <meta name="msapplication-config" content="/browserconfig.xml" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="msapplication-tap-highlight" content="no" />
      <meta name="theme-color" content="#000000" />

      {/** Twitter tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={site.url} />
      <meta name="twitter:title" content={pageName} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:creator" content={author.socials.twitter} />
      <meta name="twitter:image" content={site.defaultPreview.src} />

      {/** OpenGraph tags */}
      <meta
        property="og:type"
        content={data.type === "article" ? "article" : "website"}
      />
      <meta property="og:title" content={pageName} />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:image" content={site.defaultPreview.src} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:site_name" content={site.name} />
      <meta property="article:author" content={site.url} />
      {data.type === "article" && (
        <meta name="article:published_time" content={data.datePublished} />
      )}
    </Head>
  )
}
