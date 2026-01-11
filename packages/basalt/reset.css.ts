import { globalStyle } from "@vanilla-extract/css"
import { tokens } from "./theme/index.css"

globalStyle("html", {
  /**
   * Set explicit background to override browser's default dark mode background.
   * This affects "pull to refresh" areas, margin bleed-through, etc.
   */
  backgroundColor: tokens.color.background,
  boxSizing: "border-box",
  cursor: "default",
  fontFamily: tokens.font.serif,
  height: "100%",
  minHeight: "100%",
  textRendering: "optimizeLegibility",
  transition: tokens.motion.colorModeTransition,

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
  fontFamily: "inherit",
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
