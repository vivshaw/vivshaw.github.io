const { createVanillaExtractPlugin } = require("@vanilla-extract/next-plugin")

const withVanillaExtract = createVanillaExtractPlugin()

const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    providerImportSource: "@mdx-js/react",
    remarkPlugins: [require("remark-prism")],
  },
})

const withPWA = require("next-pwa")({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    emotion: true,
  },
  images: {
    unoptimized: true,
  },
  output: "export",
  pageExtensions: ["js", "jsx", "mdx"],
  typescript: {
    ignoreBuildErrors: true,
  },
}

module.exports = withVanillaExtract(withPWA(withMDX(nextConfig)))
