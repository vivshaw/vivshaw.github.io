import { style } from "@vanilla-extract/css"
import { tokens } from "@vivshaw/viriditas"
import { focusRing } from "@vivshaw/viriditas/helpers"

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
