import { style } from "@vanilla-extract/css"
import { tokens } from "@viriditas/theme/theme.css"

export const container = style({
  position: "relative",
  background: tokens.color.background,
  transition: tokens.motion.colorModeTransition,
  minHeight: "100vh",
})
