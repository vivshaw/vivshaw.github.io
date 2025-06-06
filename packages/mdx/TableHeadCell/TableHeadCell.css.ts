import { style } from "@vanilla-extract/css"
import { breakpoints, tokens } from "@vivshaw/viriditas"

export const tableHeadCell = style({
  background: tokens.color.card,
  fontSize: tokens.fontSize["100"],
  lineHeight: tokens.lineHeight.body,
  padding: "18px 30px",

  "@media": {
    [breakpoints.desktop]: {
      padding: "14px 20px",
    },
    [breakpoints.tablet]: {
      fontSize: tokens.fontSize["100"],
      lineHeight: tokens.lineHeight.body,
    },
  },
})
