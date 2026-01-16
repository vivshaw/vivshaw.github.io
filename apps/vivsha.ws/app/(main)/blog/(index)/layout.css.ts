import { style } from "@vanilla-extract/css"
import { breakpoints, tokens } from "@vivshaw/basalt"

export const blogIndexWrapper = style({
  margin: "0 auto",
  maxWidth: tokens.sizing["168"],
  paddingLeft: tokens.sizing["5"],
  paddingRight: tokens.sizing["5"],
  paddingBottom: tokens.sizing["20"],
  paddingTop: tokens.sizing["24"],

  "@media": {
    [breakpoints.desktop]: {
      paddingLeft: tokens.sizing["0"],
      paddingRight: tokens.sizing["0"],
      paddingBottom: tokens.sizing["9"],
      paddingTop: tokens.sizing["48"],
    },
  },
})

export const blogIndexHeading = style({
  marginBottom: tokens.sizing["12"],

  "@media": {
    [breakpoints.desktop]: {
      marginBottom: tokens.sizing["20"],
    },
  },
})
