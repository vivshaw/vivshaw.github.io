import { style } from "@vanilla-extract/css"

import { tokens } from "@vivshaw/viriditas/theme"

export const figcaption = style({
  color: tokens.color.grey,
  fontSize: "14px",
  paddingTop: "6px",
  textAlign: "center",
  width: "100%",
})
