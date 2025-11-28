import { style } from "@vanilla-extract/css"

import { breakpoints, tokens } from "@vivshaw/viriditas"

export const root = style({
  marginBottom: tokens.sizing["20"],
  marginLeft: "auto",
  marginRight: "auto",
  marginTop: tokens.sizing["48"],
  maxWidth: tokens.sizing["168"],
  position: "relative",
  width: "100%",

  "@media": {
    [breakpoints.tablet]: {
      marginBottom: tokens.sizing["12"],
      marginTop: tokens.sizing["24"],
      maxWidth: "100%",
      paddingLeft: tokens.sizing["5"],
      paddingRight: tokens.sizing["5"],
    },
  },
})
