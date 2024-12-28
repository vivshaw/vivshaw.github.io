import type { Viewport } from "next"
import type { Metadata } from "next/types"

import { author, site } from "@data"
import { metadataHelper } from "@lib/metadataHelper"
import { GlobalProviders } from "./_components/GlobalProviders"
import { LayoutWrapper } from "./_components/LayoutWrapper"

export const viewport: Viewport = {
  colorScheme: "dark light",
  themeColor: "#000000",
}

export const metadata: Metadata = {
  ...metadataHelper({ type: "home" }),

  // Next config
  metadataBase: new URL("https://vivsha.ws"),

  // Basic tages
  applicationName: site.name,
  authors: [{ name: author.name, url: site.url }],
  creator: author.name,
  generator: "Next.js",
  // TODO: Make this depends on the blog post tags!!
  keywords: [
    "engineering",
    "software",
    "engineering manager",
    "leadership",
    "technology",
  ],

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
      { sizes: "32x32", type: "image/png", url: "/favicon-32x32.png" },
      { sizes: "16x16", type: "image/png", url: "/favicon-16x16.png" },
    ],
    other: [
      { rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#000000" },
    ],
    shortcut: "/favicon.ico",
  },
  manifest: "/manifest.json",

  // Crawler tags
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  // Grab bag!
  other: {
    // Don't turn phone numbers into links
    "format-detection": "telephone=no",
    // Windows tile config
    "msapplication-TileColor": "#da532c",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/dracula-prism/dist/css/dracula-prism.css"
        />
        <link rel="stylesheet" href="https://use.typekit.net/isa7scp.css" />
      </head>
      <body>
        <GlobalProviders>
          <LayoutWrapper>{children}</LayoutWrapper>
        </GlobalProviders>
      </body>
    </html>
  )
}
