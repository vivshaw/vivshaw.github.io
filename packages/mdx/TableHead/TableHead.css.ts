import { style } from "@vanilla-extract/css"
import { tokens } from "@vivshaw/basalt"

export const tableHead = style({
  borderCollapse: "collapse",
  color: tokens.color.textDefault,
  fontWeight: tokens.fontWeight.bold,
  position: "relative",
  textAlign: "left",
  transition: tokens.motion.colorModeTransition,
})
