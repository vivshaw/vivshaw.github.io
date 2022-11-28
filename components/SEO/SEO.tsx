import Head from "next/head";
import { useRouter } from "next/router";

import { author, extractAuthorSocialUrlIfPresent, site } from "@data";

interface SeoProps {
  articlepathName?: string;
  authorName?: string;
  authorsBio?: string;
  authorsSlug?: string;
  dateforSEO?: string;
  description?: string;
  image?: string;
  isBlogPost?: boolean;
  published?: string;
  title?: string;
  children?: React.ReactNode;
}

// TODO: Should this be `next/seo`?
// TODO: Ensure PWA stuff works
/**
 * Generates meta content and SEO tags for any page.
 */
const SEO: React.FC<SeoProps> = ({
  // TODO: Tighten up types around page type
  articlepathName,
  authorName,
  authorsBio,
  authorsSlug,
  children,
  dateforSEO,
  description,
  image,
  isBlogPost,
  published,
  title,
}) => {
  const router = useRouter();

  // TODO: Make this safer & more automagic!
  const twitter = extractAuthorSocialUrlIfPresent(author, "twitter");
  const github = extractAuthorSocialUrlIfPresent(author, "github");
  const linkedin = extractAuthorSocialUrlIfPresent(author, "linkedin");

  const pageUrl = site.url + router.pathname;

  const fullURL = (path: string) => (path ? `${path}` : site.url);

  // If no image is provided, use a default
  // TODO: Provide an image here, and on pages that use this!!
  image = image ? image : `vivshaw.net/defaultpreview.jpg`;
  image = fullURL(image);

  // TODO: Add icons so this works!
  let siteSchema = `{
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "${site.name}/#organization",
        "name": "${site.name}",
        "url": "${site.url}",
        "sameAs": [
          "${twitter}",
          "${github}",
          "${linkedin}",
        ],
        "logo": {
          "@type": "ImageObject",
          "@id": "${site.name}/#logo",
          "inLanguage": "en-US",
          "url": "${site.url}/icons/icon-512x512.png",
          "width": 512,
          "height": 512,
          "caption": "${site.name} logo"
        },
        "image": {
          "@id": "${site.name}/#logo"
        }
      },
      {
        "@type": "WebSite",
        "@id": "${site.name}/#website",
        "url": "${site.url}",
        "name": "${site.name}",
        "description": "${site.description}",
        "publisher": {
          "@id": "${site.name}/#organization"
        },
        "inLanguage": "en-US"
      },
      {
        "@type": [
          "WebPage"
        ],
        "@id": "${site.name}/#webpage",
        "url": "${site.url}",
        "name": "${title || site.name}",
        "isPartOf": {
          "@id": "${site.name}/#website"
        },
        "about": {
          "@id": "${site.name}/#organization"
        },
        "description": "${description || site.description}",
        "inLanguage": "en-US"
      },
      {
        "@type": "BreadcrumbList",
        "description": "Breadcrumbs list",
        "itemListElement": [
          {
            "@type": "ListItem",
            "item": "${site.name}",
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

  // TODO get a real logo image in here
  let blogSchema = `{
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "${site.name}/#organization",
        "name": "${site.name}",
        "url": "${site.url}",
        "sameAs": [
          "${twitter}",
          "${github}",
          "${linkedin}",
        ],
        "logo": {
          "@type": "ImageObject",
          "@id": "${site.name}/#logo",
          "inLanguage": "en-US",
          "url": "${site.url}/icons/icon-512x512.png",
          "width": 512,
          "height": 512,
          "caption": "${site.name} logo"
        },
        "image": {
          "@id": "${site.name}/#logo"
        }
      },
      {
        "@type": "WebSite",
        "@id": "${site.name}/#website",
        "url": "${site.url}",
        "name": "${site.name}",
        "description": "${site.description}",
        "publisher": {
          "@id": "${site.name}/#organization"
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
          "@id": "${site.name}/#website"
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
              "@id": "${site.name}",
              "url": "${site.url}",
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
          "@id": "${site.name}/#/schema${authorsSlug}"
        },
        "headline": "${title}",
        "datePublished": "${dateforSEO}",
        "dateModified": "${dateforSEO}",
        "mainEntityOfPage": {
          "@id": "${articlepathName}/#webpage"
        },
        "publisher": {
          "@id": "${site.name}/#organization"
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
        "@id": "${site.name}/#/schema${authorsSlug}",
        "name": "${authorName}",
        "image": {
          "@type": "ImageObject",
        "@id": "${site.name}/#personlogo",
          "inLanguage": "en-US",
          "caption": "${authorName}"
        },
        "description": "${authorsBio}",
        "sameAs": [
          "${twitter}",
          "${github}",
          "${linkedin}",
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

  return (
    <Head>
      {/** Title-y stuff */}
      <title>{title || site.name}</title>
      <meta name="name" content={title || site.name} />
      <meta itemProp="name" content={title || site.name} />
      <meta name="description" content={description || site.description} />
      <meta itemProp="description" content={description || site.description} />
      <meta itemProp="image" content={image} />

      {/** Schema.org structured metadata */}
      <script type="application/ld+json">{schema}</script>

      {/** Boilerplatey stuff */}
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/** PWA & Icon stuff */}
      <meta name="application-name" content="vivshaw.net" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="vivshaw.net" />
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

      {/** Twiter tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={site.url} />
      <meta name="twitter:title" content={title || site.name} />
      <meta
        name="twitter:description"
        content={description || site.description}
      />
      <meta name="twitter:creator" content={twitter} />
      <meta name="twitter:image" content={image} />

      {/** OpenGraph tags */}
      <meta property="og:type" content={isBlogPost ? "article" : "website"} />
      <meta property="og:title" content={title || site.name} />
      <meta property="og:url" content={articlepathName || pageUrl} />
      <meta property="og:image" content={image} />
      <meta
        property="og:description"
        content={description || site.description}
      />
      <meta property="og:site_name" content={site.name} />
      <meta property="article:author" content={site.url} />
      {published && <meta name="article:published_time" content={published} />}

      {children}
    </Head>
  );
};

export default SEO;
