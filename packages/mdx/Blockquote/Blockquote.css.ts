import { style } from "@vanilla-extract/css"
import { breakpoints, tokens } from "@vivshaw/viriditas"

export const blockquote = style({
  color: tokens.color.bodyText,
  fontFamily: tokens.font.serif,
  fontStyle: "italic",
  margin: `${tokens.spacing["4"]} auto ${tokens.spacing["12"]}`,
  transition: tokens.motion.colorModeTransition,

  "@media": {
    [breakpoints.tablet]: {
      margin: `${tokens.spacing["2-half"]} auto ${tokens.spacing["9"]}`,
    },
  },
})
