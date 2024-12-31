import { style } from "@vanilla-extract/css"

import { breakpoints, tokens } from "@vivshaw/viriditas/theme"

export const blockquote = style({
  color: tokens.color.bodyText,
  fontFamily: tokens.font.display,
  fontStyle: "italic",
  margin: "15px auto 50px",
  transition: tokens.motion.colorModeTransition,

  "@media": {
    [breakpoints.tablet]: {
      margin: "10px auto 35px",
    },
  },
})
