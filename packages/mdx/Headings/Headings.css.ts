import { style } from "@vanilla-extract/css"

import { breakpoints, tokens } from "@vivshaw/viriditas"

const commonStyles = style({
  color: tokens.color.primary,
  fontFamily: tokens.font.serif,
  fontWeight: tokens.fontWeight.normal,
})

export const heading1 = style([
  commonStyles,
  {
    fontFeatureSettings: tokens.fontFeatureSettings.serif,
    fontSize: tokens.fontSize["700"],
    lineHeight: tokens.lineHeight.heading,
    wordBreak: "keep-all",

    "@media": {
      [breakpoints.tablet]: {
        fontSize: tokens.fontSize["500"],
      },
    },
  },
])

export const heading2 = style([
  commonStyles,
  {
    fontFeatureSettings: tokens.fontFeatureSettings.serif,
    fontSize: tokens.fontSize["500"],
    fontStyle: "italic",
    lineHeight: tokens.lineHeight.heading,
    wordBreak: "keep-all",
  },
])

export const heading3 = style([
  commonStyles,
  {
    fontSize: tokens.fontSize["500"],
    lineHeight: tokens.lineHeight.heading,
    wordBreak: "keep-all",
  },
])
