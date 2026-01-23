import { style } from "@vanilla-extract/css"
import { breakpoints, tokens } from "@vivshaw/basalt"

export const blockquote = style({
  color: tokens.color.textDefault,
  fontFamily: tokens.font.serif,
  fontStyle: "italic",
  margin: `${tokens.sizing["2-half"]} auto ${tokens.sizing["9"]}`,
  transition: tokens.motion.colorModeTransition,

  "@media": {
    [breakpoints.desktop]: {
      margin: `${tokens.sizing["4"]} auto ${tokens.sizing["12"]}`,
    },
  },
})
