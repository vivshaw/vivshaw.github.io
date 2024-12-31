import { style } from "@vanilla-extract/css"

import { breakpoints, tokens } from "@vivshaw/viriditas/theme"

export const tableCell = style({
  background: tokens.color.card,
  borderTop: `1px solid ${tokens.color.horizontalRule}`,
  fontSize: "16px",
  padding: "15px 30px",
  wordBreak: "keep-all",

  "@media": {
    [breakpoints.desktop]: {
      padding: "14px 20px",
    },
    [breakpoints.tablet]: {
      fontSize: "14px",
    },
  },
})
