import createBundleAnalyzer from "@next/bundle-analyzer"
import createMDX from "@next/mdx"
import createSerwist from "@serwist/next"
import { createVanillaExtractPlugin } from "@vanilla-extract/next-plugin"
import remarkFrontmatter from "remark-frontmatter"
import remarkGfm from "remark-gfm"
import remarkMdxFrontmatter from "remark-mdx-frontmatter"
import remarkPrism from "remark-prism"

const withBundleAnalyzer = createBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
})

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [
      remarkFrontmatter,
      remarkGfm,
      remarkMdxFrontmatter,
      [
        remarkPrism,
        {
          plugins: ["command-line"],
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
  transpilePackages: ["@vivshaw/viriditas"],
  typescript: {
    ignoreBuildErrors: true,
  },
}

export default withVanillaExtract(
  withSerwist(withMDX(withBundleAnalyzer(nextConfig))),
)
