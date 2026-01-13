import { style } from "@vanilla-extract/css"
import { tokens } from "@vivshaw/basalt"

export const root = style({
  backgroundColor: tokens.color.background,
  minHeight: "100vh",
  transition: tokens.motion.colorModeTransition,
})

export const imageBackground = style({
  backgroundImage: `url("/jb-1610.jpg")`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundAttachment: "fixed",
})
