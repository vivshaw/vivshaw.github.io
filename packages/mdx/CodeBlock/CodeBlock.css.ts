import { globalStyle } from "@vanilla-extract/css"
import { breakpoints, tokens } from "@vivshaw/viriditas"

export const CODE_BLOCK_CLASS = "prism-code"

/**
 * Have to use a global here along with a gross specificity hack to get this to override Prism's
 * default margins/padding/border radius, etc.
 */
globalStyle(`.${CODE_BLOCK_CLASS}.${CODE_BLOCK_CLASS}`, {
  borderRadius: tokens.spacing["1"],
  fontSize: tokens.fontSize["100"],
  lineHeight: tokens.lineHeight.body,
  margin: `${tokens.spacing["4"]} auto ${tokens.spacing["12"]}`,
  overflow: "auto",
  padding: tokens.spacing["8"],
  width: "100%",

  "@media": {
    [breakpoints.phablet]: {
      borderRadius: "0",
      margin: `0 auto ${tokens.spacing["6"]}`,
      padding: `${tokens.spacing["6"]} ${tokens.spacing["5"]}`,
      position: "relative",
      textSizeAdjust: "none",
      width: "100%",
    },
  },
})
