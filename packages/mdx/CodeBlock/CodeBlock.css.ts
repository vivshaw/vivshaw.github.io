import { globalStyle } from "@vanilla-extract/css"
import { breakpoints, tokens } from "@vivshaw/basalt"

export const CODE_BLOCK_CLASS = "prism-code"

/**
 * Have to use a global here along with a gross specificity hack to get this to override Prism's
 * default margins/padding/border radius, etc.
 */
globalStyle(`.${CODE_BLOCK_CLASS}.${CODE_BLOCK_CLASS}`, {
  borderRadius: "0",
  fontSize: tokens.fontSize["100"],
  lineHeight: tokens.lineHeight.body,
  margin: `0 auto ${tokens.sizing["6"]}`,
  overflow: "auto",
  padding: `${tokens.sizing["6"]} ${tokens.sizing["5"]}`,
  position: "relative",
  textSizeAdjust: "none",
  width: "100%",

  "@media": {
    [breakpoints.desktop]: {
      borderRadius: tokens.sizing["1"],
      margin: `${tokens.sizing["4"]} auto ${tokens.sizing["12"]}`,
      padding: tokens.sizing["8"],
    },
  },
})
