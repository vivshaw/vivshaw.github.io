import { style } from "@vanilla-extract/css"
import { tokens } from "@vivshaw/viriditas"

export const figcaption = style({
  color: tokens.color.grey,
  fontSize: tokens.fontSize.sm,
  lineHeight: tokens.lineHeight.sm,
  paddingTop: "6px",
  textAlign: "center",
  width: "100%",
})
