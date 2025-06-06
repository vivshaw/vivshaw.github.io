import { style } from "@vanilla-extract/css"
import { breakpoints, tokens } from "@vivshaw/viriditas"

export const tableCell = style({
  background: tokens.color.card,
  borderTop: `1px solid ${tokens.color.horizontalRule}`,
  fontSize: tokens.fontSize["100"],
  lineHeight: tokens.lineHeight.body,
  padding: `${tokens.spacing["4"]} ${tokens.spacing["8"]}`,
  wordBreak: "keep-all",

  "@media": {
    [breakpoints.desktop]: {
      padding: `${tokens.spacing["3-half"]} ${tokens.spacing["5"]}`,
    },
    [breakpoints.tablet]: {
      fontSize: tokens.fontSize["100"],
      lineHeight: tokens.lineHeight.body,
    },
  },
})
