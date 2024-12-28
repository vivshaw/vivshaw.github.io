const { createVanillaExtractPlugin } = require("@vanilla-extract/next-plugin")
const createMDX = require("@next/mdx")
const createPWA = require("next-pwa")

const withVanillaExtract = createVanillaExtractPlugin()

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [require("remark-prism")],
  },
})

const withPWA = createPWA({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  output: "export",
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  typescript: {
    ignoreBuildErrors: true,
  },
}

module.exports = withVanillaExtract(withPWA(withMDX(nextConfig)))
