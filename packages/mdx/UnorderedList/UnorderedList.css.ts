import { style } from "@vanilla-extract/css"
import { breakpoints, tokens } from "@vivshaw/viriditas"

export const unorderedList = style({
  color: tokens.color.bodyText,
  counterReset: "list",
  fontSize: tokens.fontSize["100"],
  lineHeight: tokens.lineHeight.body,
  listStyle: "none",
  margin: "0 auto",
  padding: `${tokens.spacing["4"]} 0 ${tokens.spacing["8"]} ${tokens.spacing["8"]}`,
  position: "relative",
  transition: tokens.motion.colorModeTransition,
  width: "100%",

  "@media": {
    [breakpoints.tablet]: {
      paddingLeft: 0,
    },
    [breakpoints.phablet]: {
      paddingLeft: tokens.spacing["5"],
    },
  },
})
