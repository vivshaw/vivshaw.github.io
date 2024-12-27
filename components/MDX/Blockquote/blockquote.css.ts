import { style } from "@vanilla-extract/css"

import { breakpoints, tokens } from "@viriditas/theme/theme.css"

export const blockquote = style({
  transition: tokens.motion.colorModeTransition,
  margin: "15px auto 50px",
  color: tokens.color.articleText,
  fontFamily: tokens.font.display,
  fontStyle: "italic",

  "@media": {
    [breakpoints.tablet]: {
      margin: "10px auto 35px",
    },
  },
})
