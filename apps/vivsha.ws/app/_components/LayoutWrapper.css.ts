import { style } from "@vanilla-extract/css"
import { tokens } from "@vivshaw/basalt"

export const root = style({
  background: tokens.color.background,
  minHeight: "100vh",
  position: "relative",
  transition: tokens.motion.colorModeTransition,
})

/**
 * This exists to ensure all other content on the page appears below the mobile menu.
 */
export const content = style({
  zIndex: 1,
})
