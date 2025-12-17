import { style } from "@vanilla-extract/css"

import { breakpoints, tokens } from "@vivshaw/basalt"

export const root = style({
  marginBottom: tokens.sizing["12"],
  marginLeft: "auto",
  marginRight: "auto",
  marginTop: tokens.sizing["24"],
  maxWidth: "100%",
  paddingLeft: tokens.sizing["5"],
  paddingRight: tokens.sizing["5"],
  position: "relative",
  width: "100%",

  "@media": {
    [breakpoints.desktop]: {
      marginBottom: tokens.sizing["20"],
      marginTop: tokens.sizing["48"],
      maxWidth: tokens.sizing["168"],
      paddingLeft: 0,
      paddingRight: 0,
    },
  },
})
