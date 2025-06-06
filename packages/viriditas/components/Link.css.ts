import { style } from "@vanilla-extract/css"
import { tokens } from "@vivshaw/viriditas"
import { focusRing } from "@vivshaw/viriditas/helpers"

export const link = style([
  {
    color: tokens.color.accent,
    textDecoration: "none",
    transition: tokens.motion.hoverTransition,

    ":hover": {
      opacity: 0.8,
    },
  },
  focusRing,
])
