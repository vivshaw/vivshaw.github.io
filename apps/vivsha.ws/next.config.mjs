import createBundleAnalyzer from "@next/bundle-analyzer"
import createMDX from "@next/mdx"
import createSerwist from "@serwist/next"
import { createVanillaExtractPlugin } from "@vanilla-extract/next-plugin"
import rehypeShiki from "@shikijs/rehype"
import {
  transformerNotationDiff,
  transformerNotationHighlight,
} from "@shikijs/transformers"
import remarkAlert from "remark-github-blockquote-alert"
import remarkFrontmatter from "remark-frontmatter"
import remarkGfm from "remark-gfm"
import remarkMdxFrontmatter from "remark-mdx-frontmatter"

/** custom Shiki transformer that wraps code blocks in a container with a language label */
const transformerLanguageLabel = () => ({
  name: "language-label",
  root(root) {
    const pre = root.children[0]
    // wrap the pre in a container div with the language as a data attribute
    root.children[0] = {
      type: "element",
      tagName: "div",
      properties: {
        class: "shiki-container",
        "data-language": this.options.lang,
      },
      children: [pre],
    }
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

const withVanillaExtract = createVanillaExtractPlugin()

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

export default withVanillaExtract(
  withSerwist(withMDX(withBundleAnalyzer(nextConfig))),
)
