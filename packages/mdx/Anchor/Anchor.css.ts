import { style } from "@vanilla-extract/css"
import { focusRing } from "@vivshaw/viriditas/helpers"
import { tokens } from "@vivshaw/viriditas/theme"

export const anchor = style([
  {
    color: tokens.color.accent,
    transition: tokens.motion.colorModeTransition,

    selectors: {
      "&:visited": {
        color: tokens.color.accent,
        opacity: 0.85,
      },
      "&:hover, &:focus-visible": {
        textDecoration: "underline",
      },
    },
  },
  focusRing,
])
