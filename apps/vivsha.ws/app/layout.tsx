import type { Viewport } from "next"
import { Alegreya, Alegreya_Sans } from "next/font/google"
import type { Metadata } from "next/types"
import {
  DARK_COLOR_MODE_CLASS,
  LIGHT_COLOR_MODE_CLASS,
} from "@vivshaw/viriditas"

import { author, COLOR_MODE_STORAGE_KEY, site } from "#data"
import { metadataHelper } from "#lib/metadataHelpers"
import { GlobalProviders } from "./_components/GlobalProviders"
import { LayoutWrapper } from "./_components/LayoutWrapper"

const alegreya = Alegreya({
  subsets: ["latin"],
  weight: ["400", "700"],
})

const alegreyaSans = Alegreya_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
})

export const viewport: Viewport = {
  colorScheme: "dark light",
  themeColor: "#111216",
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
    "msapplication-TileColor": "#111216",
  },
}

/**
 * Executing this snippet as early as possible in the load of the document will ensure the color theme loads without a flash of unstyled content.
 */
const COLOR_MODE_SNIPPET = `((d)=>{try{var p=localStorage.getItem('${COLOR_MODE_STORAGE_KEY}');if(p==d||(p!='light'&&matchMedia('(prefers-color-scheme:dark)').matches)) {document.documentElement.classList.add('${DARK_COLOR_MODE_CLASS}'); console.warn("dark mode!");} else {document.documentElement.classList.add('${LIGHT_COLOR_MODE_CLASS}'); console.warn("light mode!");}}catch(e){}})('dark')`

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      className={`${alegreya.className} ${alegreyaSans.className}`}
      lang="en"
      suppressHydrationWarning // Necessary because the color mode snippet will swap out the class ASAP after page load!
    >
      <head>
        <script>{COLOR_MODE_SNIPPET}</script>
        <link
          rel="stylesheet"
          href="https://unpkg.com/dracula-prism/dist/css/dracula-prism.css"
        />
        <link rel="stylesheet" href="/prism-cli.css" />
      </head>
      <body>
        <GlobalProviders>
          <LayoutWrapper>{children}</LayoutWrapper>
        </GlobalProviders>
      </body>
    </html>
  )
}
