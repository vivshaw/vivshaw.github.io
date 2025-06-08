import { style } from "@vanilla-extract/css"
import { breakpoints, tokens } from "@vivshaw/viriditas"

export const tableHeadCell = style({
  background: tokens.color.card,
  fontSize: tokens.fontSize["100"],
  lineHeight: tokens.lineHeight.body,
  padding: `${tokens.sizing["5"]} ${tokens.sizing["8"]}`,

  "@media": {
    [breakpoints.desktop]: {
      padding: `${tokens.sizing["3-half"]} ${tokens.sizing["5"]}`,
    },
    [breakpoints.tablet]: {
      fontSize: tokens.fontSize["100"],
      lineHeight: tokens.lineHeight.body,
    },
  },
})
