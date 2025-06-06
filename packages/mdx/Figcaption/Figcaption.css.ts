import { style } from "@vanilla-extract/css"
import { tokens } from "@vivshaw/viriditas"

export const figcaption = style({
  color: tokens.color.grey,
  fontSize: tokens.fontSize["100"],
  lineHeight: tokens.lineHeight.body,
  paddingTop: tokens.spacing["1-half"],
  textAlign: "center",
  width: "100%",
})
