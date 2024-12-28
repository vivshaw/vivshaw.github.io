import { style } from "@vanilla-extract/css"

import { tokens } from "@viriditas/theme/theme.css"

export const container = style({
  background: tokens.color.background,
  minHeight: "100vh",
  position: "relative",
  transition: tokens.motion.colorModeTransition,
})

export const content = style({
  zIndex: 1,
})
