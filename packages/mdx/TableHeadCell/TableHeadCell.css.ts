import { style } from "@vanilla-extract/css"
import { tokens } from "@vivshaw/basalt"

export const tableHeadCell = style({
  background: tokens.color.card,
  fontSize: tokens.fontSize["100"],
  lineHeight: tokens.lineHeight.body,
  padding: `${tokens.sizing["3-half"]} ${tokens.sizing["5"]}`,
})
