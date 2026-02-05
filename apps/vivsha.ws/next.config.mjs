import createBundleAnalyzer from "@next/bundle-analyzer"
import createMDX from "@next/mdx"
import createSerwist from "@serwist/next"
import rehypeMdxImportMedia from "rehype-mdx-import-media"
import rehypeShiki from "@shikijs/rehype"
import rehypeSmallcapWords from "@vivshaw/rehype-smallcap-words"
import {
  transformerNotationDiff,
  transformerNotationHighlight,
} from "@shikijs/transformers"
import remarkAlert from "remark-github-blockquote-alert"
import remarkFrontmatter from "remark-frontmatter"
import remarkGfm from "remark-gfm"
import remarkMdxFrontmatter from "remark-mdx-frontmatter"

import rehypeSidenotes from "./lib/rehype-sidenotes.mjs"

/** custom Shiki transformer that adds the language as a data attribute to the pre element */
const transformerLanguageLabel = () => ({
  name: "language-label",
  pre(node) {
    node.properties["data-language"] = this.options.lang
  },
})

const withBundleAnalyzer = createBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
})

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [
      remarkFrontmatter,
      remarkGfm,
      remarkAlert,
      remarkMdxFrontmatter,
    ],
    rehypePlugins: [
      rehypeMdxImportMedia,
      rehypeSmallcapWords,
      rehypeSidenotes,
      [
        rehypeShiki,
        {
          themes: {
            light: "vitesse-light",
            dark: "kanagawa-dragon",
          },
          defaultColor: false,
          transformers: [
            transformerNotationHighlight(),
            transformerNotationDiff(),
            transformerLanguageLabel(),
          ],
        },
      ],
    ],
  },
})

const withSerwist = createSerwist({
  swSrc: "app/sw.ts",
  swDest: "public/sw.js",
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  output: "export",
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  transpilePackages: ["@vivshaw/basalt"],
  typescript: {
    ignoreBuildErrors: true,
  },
}

export default withSerwist(withMDX(withBundleAnalyzer(nextConfig)))
