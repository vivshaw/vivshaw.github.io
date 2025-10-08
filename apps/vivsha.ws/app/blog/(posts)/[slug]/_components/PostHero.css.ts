import { style } from "@vanilla-extract/css"
import { breakpoints, tokens } from "@vivshaw/viriditas"

import { heading1 } from "@vivshaw/mdx/Headings/Headings.css"

export const root = style({
  marginBottom: tokens.sizing["20"],
  marginLeft: "auto",
  marginRight: "auto",
  marginTop: tokens.sizing["48"],
  maxWidth: tokens.sizing["168"],
  position: "relative",
  width: "100%",

  "@media": {
    [breakpoints.desktop]: {
      paddingLeft: "53px",
    },
    [breakpoints.tablet]: {
      maxWidth: "100%",
      paddingLeft: "20px",
      paddingRight: "20px",
    },
    [breakpoints.phablet]: {
      paddingLeft: "20px",
      paddingRight: "20px",
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
