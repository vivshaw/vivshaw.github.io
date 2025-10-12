import { style } from "@vanilla-extract/css"

import { heading1 } from "@vivshaw/mdx/Headings/Headings.css"
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

// TODO: Stop sharing the MDX headings like this!
export const title = heading1
export const subtitle = style([
  heading1,
  {
    fontStyle: "italic",
  },
])
