const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    providerImportSource: "@mdx-js/react",
    remarkPlugins: [require("remark-prism")],
  },
});

const withPWA = require("next-pwa")({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
});

module.exports = withPWA(
  withMDX({
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
  })
);
