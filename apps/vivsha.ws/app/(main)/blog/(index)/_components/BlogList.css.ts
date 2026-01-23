import { style } from "@vanilla-extract/css"
import { focusRing } from "@vivshaw/basalt/helpers"
import { tokens } from "@vivshaw/basalt"

export const blogListItemLink = style([
  {
    display: "block",
    marginBottom: tokens.sizing["12"],
  },
  focusRing,
])

export const blogListItemHeading = style({
  marginBottom: tokens.sizing["2"],
})

export const blogListItemDate = style({
  color: tokens.color.textMuted,
})
