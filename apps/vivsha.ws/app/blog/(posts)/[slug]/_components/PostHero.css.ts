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
    fontFamily: tokens.font.serif,
    fontSize: tokens.fontSize["5xl"],
    lineHeight: tokens.lineHeight["5xl"],
    marginBottom: "18px",

    "@media": {
      [breakpoints.tablet]: {
        fontSize: tokens.fontSize["4xl"],
        lineHeight: tokens.lineHeight["4xl"],
        marginBottom: "20px",
      },
      [breakpoints.phablet]: {
        fontSize: tokens.fontSize["3xl"],
        lineHeight: tokens.lineHeight["3xl"],
      },
    },
  },
])

export const date = style({
  marginLeft: "0",
  position: "relative",
  display: "flex",
  fontSize: tokens.fontSize.lg,
  lineHeight: tokens.lineHeight.lg,
  color: tokens.color.grey,

  "@media": {
    [breakpoints.phablet]: {
      flexDirection: "column",
      fontSize: tokens.fontSize.sm,
      lineHeight: tokens.lineHeight.sm,
    },
  },
})
