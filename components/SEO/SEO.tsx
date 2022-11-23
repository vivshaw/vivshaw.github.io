/**
 * This react helmt code is adapted from
 * https://themeteorchef.com/tutorials/reusable-seo-with-react-helmet.
 *
 * A great tutorial explaining how to setup a robust version of an
 * SEO friendly react-helmet instance.
 *
 *
 * Use the Helmt on pages to generate SEO and meta content!
 *
 * Usage:
 * <SEO
 *   title={title}
 *   description={description}
 *   image={image}
 * />
 *
 */

import Head from "next/head";
import React from "react";

interface HelmetProps {
  articlepathName?: string;
  authorName?: string;
  authorsBio?: string;
  authorsSlug?: string;
  canonicalUrl?: string;
  dateforSEO?: string;
  description?: string;
  image?: string;
  isBlogPost?: boolean;
  pathname: string;
  published?: string;
  title?: string;
  children?: React.ReactNode;
}

const themeUIDarkModeWorkaroundScript = [
  {
    type: "text/javascript",
    innerHTML: `
    (function() {
      try {
        var mode = localStorage.getItem('theme-ui-color-mode');
        if (!mode) {
          localStorage.setItem('theme-ui-color-mode', 'light');
        }
      } catch (e) {}
    })();
  `,
  },
];

const SEO: React.FC<HelmetProps> = ({
  articlepathName,
  authorName,
  authorsBio,
  authorsSlug,
  canonicalUrl,
  children,
  dateforSEO,
  description,
  image,
  isBlogPost,
  pathname,
  published,
  title,
}) => {
  const twitter = "www.twitter.com/vvvivshaw";
  const github = "www.github.com/vivshaw";

  const pageUrl = "vivshaw.github.io/" + pathname;

  const fullURL = (path: string) => (path ? `${path}` : "vivshaw.github.io");

  // If no image is provided, use a default
  image = image ? image : `vivshaw.github.io/defaultpreview.jpg`;
  image = fullURL(image);

  let siteSchema = `{
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "vivshaw.github.io/#organization",
        "name": "vivshaw.net",
        "url": "vivshaw.github.io",
        "sameAs": [
          "${twitter}",
          "${github}",
        ],
        "logo": {
          "@type": "ImageObject",
          "@id": "vivshaw.github.io/#logo",
          "inLanguage": "en-US",
          "url": "vivshaw.github.io/icons/icon-512x512.png",
          "width": 512,
          "height": 512,
          "caption": "vivshaw.net"
        },
        "image": {
          "@id": "vivshaw.github.io/#logo"
        }
      },
      {
        "@type": "WebSite",
        "@id": "vivshaw.github.io/#website",
        "url": vivshaw.github.io",
        "name": "vivshaw.net",
        "description": "vivshaw.net",
        "publisher": {
          "@id": "vivshaw.github.io/#organization"
        },
        "inLanguage": "en-US"
      },
      {
        "@type": [
          "WebPage"
        ],
        "@id": "vivshaw.github.io/#webpage",
        "url": "vivshaw.github.io",
        "name": "${title || "vivshaw.net"}",
        "isPartOf": {
          "@id": "vivshaw.github.io/#website"
        },
        "about": {
          "@id": "vivshaw.github.io/#organization"
        },
        "description": "${description || "vivshaw.net"}",
        "inLanguage": "en-US"
      },
      {
        "@type": "BreadcrumbList",
        "description": "Breadcrumbs list",
        "itemListElement": [
          {
            "@type": "ListItem",
            "item": "vivshaw.github.io",
            "name": "Homepage",
            "position": "1"
          }
        ],
        "name": "Breadcrumbs"
      }
    ]
  }
`.replace(/"[^"]+"|(\s)/gm, function (matched, group1) {
    if (!group1) {
      return matched;
    } else {
      return "";
    }
  });

  let blogSchema = `{
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "vivshaw.github.io/#organization",
        "name": "vivshaw.net",
        "url": "vivshaw.github.io",
        "sameAs": [
          "${twitter}",
          "${github}",
        ],
        "logo": {
          "@type": "ImageObject",
          "@id": "vivshaw.github.io/#logo",
          "inLanguage": "en-US",
          "url": "vivshaw.github.io/icons/icon-512x512.png",
          "width": 512,
          "height": 512,
          "caption": "vivshaw.net"
        },
        "image": {
          "@id": "vivshaw.github.io/#logo"
        }
      },
      {
        "@type": "WebSite",
        "@id": "vivshaw.github.io/#website",
        "url": "vivshaw.github.io",
        "name": "vivshaw.net",
        "description": "vivshaw.net",
        "publisher": {
          "@id": "vivshaw.github.io/#organization"
        },
        "inLanguage": "en-US"
      },
      {
        "@type": "ImageObject",
        "@id": "${articlepathName}/#primaryimage",
        "inLanguage": "en-US",
        "url": "${image}",
        "width": 1200,
        "height": 628
      },
      {
        "@type": [
          "WebPage"
        ],
        "@id": "${articlepathName}/#webpage",
        "url": "${articlepathName}",
        "name": "${title}",
        "isPartOf": {
          "@id": "vivshaw.github.io/#website"
        },
        "primaryImageOfPage": {
          "@id": "${articlepathName}/#primaryimage"
        },
        "datePublished": "${dateforSEO}",
        "dateModified": "${dateforSEO}",
        "description": "${description}",
        "breadcrumb": {
          "@id": "${articlepathName}/#breadcrumb"
        },
        "inLanguage": "en-US"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "${articlepathName}/#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "item": {
              "@type": "WebPage",
              "@id": "vivshaw.github.io",
              "url": "vivshaw.github.io",
              "name": "Home"
            }
          },
          {
            "@type": "ListItem",
            "position": 2,
            "item": {
              "@type": "WebPage",
              "@id": "${articlepathName}",
              "url": "${articlepathName}",
              "name": "${title}"
            }
          }
        ]
      },
      {
        "@type": "Article",
        "@id": "${articlepathName}/#article",
        "isPartOf": {
          "@id": "${articlepathName}/#webpage"
        },
        "author": {
          "@id": "vivshaw.github.io/#/schema${authorsSlug}"
        },
        "headline": "${title}",
        "datePublished": "${dateforSEO}",
        "dateModified": "${dateforSEO}",
        "mainEntityOfPage": {
          "@id": "${articlepathName}/#webpage"
        },
        "publisher": {
          "@id": "vivshaw.github.io/#organization"
        },
        "image": {
          "@id": "${articlepathName}/#primaryimage"
        },
        "inLanguage": "en-US"
      },
      {
        "@type": [
          "Person"
        ],
        "@id": "vivshaw.github.io/#/schema${authorsSlug}",
        "name": "${authorName}",
        "image": {
          "@type": "ImageObject",
        "@id": "vivshaw.github.io/#personlogo",
          "inLanguage": "en-US",
          "caption": "${authorName}"
        },
        "description": "${authorsBio}",
        "sameAs": [
          "${twitter}",
          "${github}",
        ]
      }
    ]
  }
`.replace(/"[^"]+"|(\s)/gm, function (matched, group1) {
    if (!group1) {
      return matched;
    } else {
      return "";
    }
  });

  const schema = isBlogPost ? blogSchema : siteSchema;

  const metaTags = [
    { charset: "utf-8" },
    {
      "http-equiv": "X-UA-Compatible",
      content: "IE=edge",
    },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1",
    },
    {
      name: "theme-color",
      content: "#fff",
    },
    { itemprop: "name", content: title || "vivshaw.net" },
    { itemprop: "description", content: description || "vivshaw.net" },
    { itemprop: "image", content: image },
    { name: "description", content: description || "vivshaw.net" },

    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:site", content: "vivshaw.net" },
    { name: "twitter:title", content: title || "vivshaw.net" },
    { name: "twitter:description", content: description || "vivshaw.net" },
    { name: "twitter:creator", content: twitter },
    {
      name: "twitter:image",
      content: image,
    },

    { property: "og:type", content: "website" },
    { property: "og:title", content: title || "vivshaw.net" },
    { property: "og:url", content: articlepathName || pageUrl },
    { property: "og:image", content: image },
    { property: "og:description", content: description || "vivshaw.net" },
    { property: "og:site_name", content: "vivshaw.net" },
  ];

  if (published) {
    metaTags.push({ name: "article:published_time", content: published });
  }

  return (
    <Head>
      <title>{title || "vivshaw.net"}</title>
      <script type="application/ld+json">{schema}</script>
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      {children}
    </Head>
  );
};

export default SEO;
