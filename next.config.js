const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    providerImportSource: "@mdx-js/react",
    remarkPlugins: [require("remark-prism")],
  },
});

module.exports = withMDX({
  compiler: {
    emotion: true,
  },
  pageExtensions: ["js", "jsx", "mdx"],
});
