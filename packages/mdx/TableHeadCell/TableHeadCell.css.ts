import { style } from "@vanilla-extract/css"
import { breakpoints, tokens } from "@vivshaw/viriditas"

export const tableHeadCell = style({
  background: tokens.color.card,
  fontSize: tokens.fontSize["100"],
  lineHeight: tokens.lineHeight.body,
  padding: `${tokens.spacing["5"]} ${tokens.spacing["8"]}`,

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
