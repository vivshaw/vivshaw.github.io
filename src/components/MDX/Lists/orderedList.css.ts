import { style } from "@vanilla-extract/css"

import { breakpoints, tokens } from "#viriditas/theme/theme.css"

export const orderedList = style({
  color: tokens.color.bodyText,
  counterReset: "list",
  fontSize: "18px",
  listStyle: "none",
  margin: "0 auto",
  padding: "15px 0 30px 30px",
  position: "relative",
  transition: tokens.motion.colorModeTransition,
  width: "100%",

  "@media": {
    [breakpoints.tablet]: {
      paddingLeft: 0,
    },
    [breakpoints.phablet]: {
      paddingLeft: "20px",
    },
  },
})
