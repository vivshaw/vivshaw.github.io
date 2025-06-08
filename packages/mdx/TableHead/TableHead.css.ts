import { style } from "@vanilla-extract/css"
import { tokens } from "@vivshaw/viriditas"

export const tableHead = style({
  borderCollapse: "collapse",
  lineHeight: "1.756",
  position: "relative",
  textAlign: "left",
  transition: tokens.motion.colorModeTransition,
})
