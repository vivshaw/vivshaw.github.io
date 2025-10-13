import { style } from "@vanilla-extract/css"

import { focusRing } from "@vivshaw/viriditas/helpers"

export const link = style([
  {
    color: "inherit",
    textDecoration: "none",
  },
  focusRing,
])
