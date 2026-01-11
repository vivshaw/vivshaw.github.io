import { style } from "@vanilla-extract/css"
import { tokens } from "@vivshaw/basalt"

export const root = style({
  backgroundColor: tokens.color.background,
  backgroundImage: `url("/jb-1610.jpg")`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundAttachment: "fixed",
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
