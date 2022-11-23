const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
});
module.exports = withMDX({
  compiler: {
    emotion: true,
  },
  pageExtensions: ["js", "jsx", "mdx"],
});
