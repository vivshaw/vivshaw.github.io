import { style } from "@vanilla-extract/css"
import { tokens } from "@vivshaw/viriditas"

export const tableHead = style({
  borderCollapse: "collapse",
  color: tokens.color.primary,
  fontWeight: tokens.fontWeight.bold,
  position: "relative",
  textAlign: "left",
  transition: tokens.motion.colorModeTransition,
})
