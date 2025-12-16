import { style } from "@vanilla-extract/css"
import { breakpoints, tokens } from "@vivshaw/basalt"

export const blockquote = style({
  color: tokens.color.bodyText,
  fontFamily: tokens.font.serif,
  fontStyle: "italic",
  margin: `${tokens.sizing["4"]} auto ${tokens.sizing["12"]}`,
  transition: tokens.motion.colorModeTransition,

  "@media": {
    [breakpoints.tablet]: {
      margin: `${tokens.sizing["2-half"]} auto ${tokens.sizing["9"]}`,
    },
  },
})
