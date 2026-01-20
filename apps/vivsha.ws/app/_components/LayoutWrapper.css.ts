import { style } from "@vanilla-extract/css"
import { tokens } from "@vivshaw/basalt"
import { darkModeStyles, lightModeStyles } from "@vivshaw/basalt/helpers"

export const root = style({
  backgroundColor: tokens.color.background,
  minHeight: "100vh",
  transition: tokens.motion.colorModeTransition,
})

export const imageBackground = style([
  {
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
  },
  darkModeStyles({
    backgroundImage: `url("/home-bg-dark-optimized.jpg")`,
  }),
  lightModeStyles({
    backgroundImage: `url("/home-bg-light-optimized.jpg")`,
  }),
])
