import createBundleAnalyzer from "@next/bundle-analyzer"
import createMDX from "@next/mdx"
import createSerwist from "@serwist/next"
import rehypeShiki from "@shikijs/rehype"
import {
  transformerNotationDiff,
  transformerNotationHighlight,
} from "@shikijs/transformers"
import rehypeSidenotes from "@vivshaw/rehype-sidenotes"
import rehypeSmallcapWords from "@vivshaw/rehype-smallcap-words"
import rehypeMdxImportMedia from "rehype-mdx-import-media"
import remarkFrontmatter from "remark-frontmatter"
import remarkGfm from "remark-gfm"
import remarkAlert from "remark-github-blockquote-alert"
import remarkMdxFrontmatter from "remark-mdx-frontmatter"

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
