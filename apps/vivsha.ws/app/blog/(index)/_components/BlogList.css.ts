import { style } from "@vanilla-extract/css"
import { focusRing } from "@vivshaw/viriditas/helpers"
import { tokens } from "@vivshaw/viriditas"

export const blogListItemLink = style([
  {
    display: "block",
    marginBottom: tokens.sizing["12"],
  },
  focusRing,
])

export const blogListItemHeading = style({
  marginBottom: tokens.sizing["1"],
})

export const blogListItemBlurb = style({
  color: tokens.color.grey,
  marginBottom: tokens.sizing["2"],
})

export const blogListItemDate = style({
  color: tokens.color.grey,
})

