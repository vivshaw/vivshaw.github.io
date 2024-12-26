import { style } from "@vanilla-extract/css"
import { tokens } from "@viriditas/theme/theme.css"

export const centeringWrapper = style({
  alignItems: "center",
  display: "flex",
  flexDirection: "column",
})

export const mainpageLink = style({
  color: tokens.color.accent,
  opacity: 0.7,
  textDecoration: "underline",
  textDecorationColor: tokens.color.accent,
  textDecorationThickness: "1px",
  textUnderlineOffset: "2px",
  transition: tokens.motion.hoverTransition,

  ":hover": {
    opacity: 1,
  },
})
