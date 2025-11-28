import { style } from "@vanilla-extract/css"

import { tokens } from "@vivshaw/viriditas"

const commonStyles = style({
  wordBreak: "keep-all",
})

export const heading1 = style([commonStyles])

export const heading2 = style([
  commonStyles,
  {
    marginBottom: tokens.sizing["5"],
  },
])
