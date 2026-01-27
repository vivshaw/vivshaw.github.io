import type { Viewport } from "next"
import type { Metadata } from "next/types"
import {
  DARK_COLOR_MODE_CLASS,
  LIGHT_COLOR_MODE_CLASS,
  tokens,
} from "@vivshaw/basalt"

import { author, COLOR_MODE_STORAGE_KEY, site } from "#data"
import { metadataHelper } from "#lib/metadataHelpers"
import { GlobalProviders } from "./_components/GlobalProviders"

export const viewport: Viewport = {
  colorScheme: "dark light",
  themeColor: tokens.color["base-700"],
}

export const metadata: Metadata = {
  ...metadataHelper({ type: "home" }),

  // Next config
  metadataBase: new URL("https://vivsha.ws"),

  // RSS feed
  alternates: {
    types: {
      "application/rss+xml": "/feed.xml",
    },
  },

  // basic tags
  applicationName: site.name,
  authors: [{ name: author.name, url: site.url }],
  creator: author.name,
  generator: "Next.js",

  // PWA & icon tags
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: site.name,
  },
  icons: {
    apple: [{ sizes: "180x180", url: "/apple-touch-icon.png" }],
    icon: [
      { type: "image/svg+xml", url: "/favicon.svg" },
      { sizes: "96x96", type: "image/png", url: "/favicon-96x96.png" },
    ],
    shortcut: "/favicon.ico",
  },
  manifest: "/manifest.json",

  // crawler tags
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  // grab bag!
  other: {
    // don't turn phone numbers into links
    "format-detection": "telephone=no",
  },
}

/**
 * track whether JS is enabled, so we can do progressive enhancement stuff
 */
const JS_DETECTION_SNIPPET = `document.documentElement.classList.replace('no-js','js')`

/**
 * executing this snippet as early as possible in the load of the document will ensure the color theme loads without a flash of unstyled content.
 */
const COLOR_MODE_SNIPPET = `((d)=>{try{var p=localStorage.getItem('${COLOR_MODE_STORAGE_KEY}');if(p==d||(p!='light'&&matchMedia('(prefers-color-scheme:dark)').matches)) {document.documentElement.classList.add('${DARK_COLOR_MODE_CLASS}'); console.warn("dark mode!");} else {document.documentElement.classList.add('${LIGHT_COLOR_MODE_CLASS}'); console.warn("light mode!");}}catch(e){}})('dark')`

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className="no-js"
      suppressHydrationWarning // necessary because the snippets will swap out classes ASAP after page load!
    >
      <head>
        <script>{JS_DETECTION_SNIPPET}</script>
        <script>{COLOR_MODE_SNIPPET}</script>
      </head>
      <body>
        <GlobalProviders>{children}</GlobalProviders>
      </body>
    </html>
  )
}
