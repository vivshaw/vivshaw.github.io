import { globalStyle } from "@vanilla-extract/css"

/**
 * Reset thanks to Benjamin De Cock
 * https://gist.github.com/bendc/ac03faac0bf2aee25b49e5fd260a727d
 */

globalStyle("html", {
  vars: {
    "--ease-in-quad": "cubic-bezier(0.55, 0.085, 0.68, 0.53)",
    "--ease-in-quart": "cubic-bezier(0.895, 0.03, 0.685, 0.22)",
    "--ease-out-quad": "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
    "--ease-out-quart": "cubic-bezier(0.165, 0.84, 0.44, 1)",
    "--ease-in-out-quad": "cubic-bezier(0.455, 0.03, 0.515, 0.955)",
    "--ease-in-out-quart": "cubic-bezier(0.77, 0, 0.175, 1)",
  },

  boxSizing: "border-box",
  cursor: "default",
  fontSize: "0.625rem",
  height: "100%",
  lineHeight: "1.4",
  minHeight: "100%",
  textRendering: "optimizeLegibility",

  msOverflowStyle: "-ms-autohiding-scrollbar",
  WebkitFontSmoothing: "antialiased",
  MozOsxFontSmoothing: "grayscale",
})

globalStyle("html *, html *:before, html *:after", {
  boxSizing: "inherit",
  fontSize: "inherit",
  margin: 0,
  padding: 0,
})

globalStyle("body", {
  fontFamily: "orpheuspro",
  fontSize: "1.6rem",
  fontWeight: 400,
  height: "100%",
  margin: 0,
  minHeight: "100%",
})

globalStyle("article", {
  wordBreak: "break-word",
})

globalStyle("button, a", {
  cursor: "pointer",
  textDecoration: "none",
})

globalStyle("a:focus", {
  outline: "none",
})

globalStyle("audio, canvas, iframe, img, svg, video", {
  alignSelf: "center",
  verticalAlign: "middle",
})

globalStyle("input, textarea, select, button", {
  fontFamily: "orpheuspro",
})

globalStyle("input, textarea, select, button", {
  color: "inherit",
  fontFamily: "inherit",
  fontStyle: "inherit",
  fontWeight: "inherit",
})

globalStyle("code, kbd, pre, samp", {
  fontFamily: "monospace",
})

globalStyle("fieldset, button", {
  appearance: "none",
  background: "transparent",
  border: "none",
  outline: "none",
})

globalStyle("table", {
  borderCollapse: "separate",
  borderSpacing: "0",
})

globalStyle("audio:not([controls])", {
  display: "none",
})

globalStyle("details", {
  display: "block",
})

globalStyle("input:focus, input:active", {
  outline: "none",
})

globalStyle("input[type='number']", {
  width: "auto",
})
