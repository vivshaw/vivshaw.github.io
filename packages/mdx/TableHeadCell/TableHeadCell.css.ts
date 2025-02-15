import { style } from "@vanilla-extract/css"
import { breakpoints, tokens } from "@vivshaw/viriditas"

export const tableHeadCell = style({
  background: tokens.color.card,
  fontSize: "16px",
  padding: "18px 30px",

  "@media": {
    [breakpoints.desktop]: {
      padding: "14px 20px",
    },
    [breakpoints.tablet]: {
      fontSize: "14px",
    },
  },
})
