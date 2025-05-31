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
    fontSize: tokens.fontSize["5xl"],
    lineHeight: tokens.lineHeight["5xl"],
    wordBreak: "keep-all",

    "@media": {
      [breakpoints.desktop]: {
        fontSize: tokens.fontSize["4xl"],
        lineHeight: tokens.lineHeight["4xl"],
      },
      [breakpoints.phablet]: {
        fontSize: tokens.fontSize["3xl"],
        lineHeight: tokens.lineHeight["3xl"],
      },
    },
  },
])

export const heading2 = style([
  commonStyles,
  {
    fontSize: tokens.fontSize["3xl"],
    lineHeight: tokens.lineHeight["3xl"],
    wordBreak: "keep-all",

    "@media": {
      [breakpoints.desktop]: {
        fontSize: tokens.fontSize["xl"],
        lineHeight: tokens.lineHeight["xl"],
      },
      [breakpoints.tablet]: {
        fontSize: tokens.fontSize["2xl"],
        lineHeight: tokens.lineHeight["2xl"],
      },
      [breakpoints.phablet]: {
        fontSize: tokens.fontSize["xl"],
        lineHeight: tokens.lineHeight["xl"],
      },
    },
  },
])

export const heading3 = style([
  commonStyles,
  {
    fontSize: tokens.fontSize["2xl"],
    lineHeight: tokens.lineHeight["2xl"],
    wordBreak: "keep-all",

    "@media": {
      [breakpoints.tablet]: {
        fontSize: tokens.fontSize["xl"],
        lineHeight: tokens.lineHeight["xl"],
      },
      [breakpoints.phablet]: {
        fontSize: tokens.fontSize["xl"],
        lineHeight: tokens.lineHeight["xl"],
      },
    },
  },
])

export const heading4 = style([
  commonStyles,
  {
    fontSize: tokens.fontSize.lg,
    lineHeight: tokens.lineHeight.lg,
    wordBreak: "keep-all",

    "@media": {
      [breakpoints.phablet]: {
        fontSize: tokens.fontSize.base,
        lineHeight: tokens.lineHeight.base,
      },
    },
  },
])

export const heading5 = style([
  commonStyles,
  {
    fontSize: tokens.fontSize.lg,
    lineHeight: tokens.lineHeight.lg,
    wordBreak: "keep-all",

    "@media": {
      [breakpoints.phablet]: {
        fontSize: tokens.fontSize.base,
        lineHeight: tokens.lineHeight.base,
      },
    },
  },
])

export const heading6 = style([
  commonStyles,
  {
    fontSize: tokens.fontSize.base,
    lineHeight: tokens.lineHeight.base,
    wordBreak: "keep-all",

    "@media": {
      [breakpoints.phablet]: {
        fontSize: tokens.fontSize.sm,
        lineHeight: tokens.lineHeight.sm,
      },
    },
  },
])
