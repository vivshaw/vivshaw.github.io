import { style } from "@vanilla-extract/css"
import { breakpoints, tokens } from "@vivshaw/basalt"

export const unorderedList = style({
  color: tokens.color.textDefault,
  counterReset: "list",
  fontSize: tokens.fontSize["100"],
  lineHeight: tokens.lineHeight.body,
  listStyle: "none",
  margin: "0 auto",
  padding: `${tokens.sizing["4"]} 0 ${tokens.sizing["8"]} ${tokens.sizing["5"]}`,
  position: "relative",
  transition: tokens.motion.colorModeTransition,
  width: "100%",

  "@media": {
    [breakpoints.tablet]: {
      paddingLeft: 0,
    },
    [breakpoints.desktop]: {
      paddingLeft: tokens.sizing["8"],
    },
  },
})
