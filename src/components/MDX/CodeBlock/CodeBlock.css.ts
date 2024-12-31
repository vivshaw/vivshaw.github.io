import { globalStyle } from "@vanilla-extract/css"

import { breakpoints } from "@vivshaw/viriditas/theme"

export const CODE_BLOCK_CLASS = "prism-code"

/**
 * Have to use a global here along with a gross specificity hack to get this to override Prism's
 * default margins/padding/border radius, etc.
 */
globalStyle(`.${CODE_BLOCK_CLASS}.${CODE_BLOCK_CLASS}`, {
  borderRadius: "5px",
  fontSize: "13px",
  margin: "15px auto 50px",
  overflow: "auto",
  padding: "32px",
  width: "100%",

  "@media": {
    [breakpoints.phablet]: {
      borderRadius: "0",
      margin: "0 auto 25px",
      padding: "25px 20px",
      position: "relative",
      textSizeAdjust: "none",
      width: "100%",
    },
  },
})
