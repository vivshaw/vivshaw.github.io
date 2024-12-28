import { style } from "@vanilla-extract/css"

import { breakpoints, tokens } from "@viriditas/theme/theme.css"

export const blockquote = style({
  color: tokens.color.articleText,
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
