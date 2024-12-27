import { style } from "@vanilla-extract/css"

import { tokens } from "@viriditas/theme/theme.css"

export const anchor = style({
  color: tokens.color.accent,
  transition: tokens.motion.colorModeTransition,

  selectors: {
    "&:visited": {
      color: tokens.color.accent,
      opacity: 0.85,
    },
    "&:hover, &:focus": {
      textDecoration: "underline",
    },
  },
})
