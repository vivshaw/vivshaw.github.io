import { style } from "@vanilla-extract/css"
import { breakpoints, tokens } from "@vivshaw/viriditas"

import { heading1 } from "@vivshaw/mdx/Headings/Headings.css"

export const root = style({
  margin: "100px auto 70px",
  maxWidth: "calc(749px - 68px)",
  position: "relative",
  width: "100%",

  "@media": {
    [breakpoints.desktop]: {
      maxWidth: "calc(507px + 53px)",
      margin: "100px auto 70px",
    },
    [breakpoints.tablet]: {
      margin: "100px auto 0px",
      maxWidth: "480px",
      paddingLeft: "0",
    },
    [breakpoints.phablet]: {
      margin: "100px auto 0px",
      padding: "0 40px",
    },
    "screen and (max-height: 700px)": {
      margin: "100px auto 0px",
    },
  },
})

// TODO: Stop sharing the MDX headings like this!
export const title = style([
  heading1,
  {
    fontFamily: tokens.font.display,
    fontSize: "48px",
    marginBottom: "18px",

    "@media": {
      [breakpoints.tablet]: {
        fontSize: "36px",
        marginBottom: "20px",
      },
      [breakpoints.phablet]: {
        fontSize: "32px",
      },
    },
  },
])

export const date = style({
  marginLeft: "0",
  position: "relative",
  display: "flex",
  fontSize: "18px",
  color: tokens.color.grey,

  "@media": {
    [breakpoints.phablet]: {
      flexDirection: "column",
      fontSize: "14px",
    },
  },
})
