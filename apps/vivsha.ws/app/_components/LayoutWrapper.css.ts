import { style } from "@vanilla-extract/css"
import { tokens } from "@vivshaw/basalt"
import { darkModeStyles, lightModeStyles } from "@vivshaw/basalt/helpers"

import { navbarHeight } from "./Navbar.css"

export const root = style({
  backgroundColor: tokens.color.backgroundDefault,
  minHeight: "100vh",
  transition: tokens.motion.colorModeTransition,
})

export const navbarSpacer = style({
  height: navbarHeight,
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
