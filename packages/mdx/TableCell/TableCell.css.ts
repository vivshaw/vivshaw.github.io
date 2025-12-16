import { style } from "@vanilla-extract/css"
import { tokens } from "@vivshaw/basalt"

export const tableCell = style({
  background: tokens.color.card,
  borderTop: `1px solid ${tokens.color.horizontalRule}`,
  fontSize: tokens.fontSize["100"],
  lineHeight: tokens.lineHeight.body,
  padding: `${tokens.sizing["3-half"]} ${tokens.sizing["5"]}`,
  wordBreak: "keep-all",
})
