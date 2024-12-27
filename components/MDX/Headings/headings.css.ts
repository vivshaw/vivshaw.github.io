import { style } from "@vanilla-extract/css"

import { breakpoints, tokens } from "@viriditas/theme/theme.css"

const commonStyles = style({
  fontWeight: "normal",
  color: tokens.color.primary,
  fontFamily: tokens.font.serif,
})

export const heading1 = style([
  commonStyles,
  {
    fontSize: "52px",
    lineHeight: "1.15",
    wordBreak: "keep-all",

    "@media": {
      [breakpoints.desktop]: {
        fontSize: "38px",
        lineHeight: "1.2",
      },
      [breakpoints.phablet]: {
        fontSize: "32px",
        lineHeight: "1.3",
      },
    },
  },
])

export const heading2 = style([
  commonStyles,
  {
    fontSize: "32px",
    lineHeight: "1.333",
    wordBreak: "keep-all",

    "@media": {
      [breakpoints.desktop]: {
        fontSize: "21px",
      },
      [breakpoints.tablet]: {
        fontSize: "24px",
        lineHeight: "1.45",
      },
      [breakpoints.phablet]: {
        fontSize: "22px",
      },
    },
  },
])

export const heading3 = style([
  commonStyles,
  {
    fontSize: "24px",
    lineHeight: "1.45",
    wordBreak: "keep-all",

    "@media": {
      [breakpoints.tablet]: {
        fontSize: "22px",
      },
      [breakpoints.phablet]: {
        fontSize: "20px",
      },
    },
  },
])

export const heading4 = style([
  commonStyles,
  {
    fontSize: "18px",
    lineHeight: "1.45",
    wordBreak: "keep-all",

    "@media": {
      [breakpoints.phablet]: {
        fontSize: "16px",
      },
    },
  },
])

export const heading5 = style([
  commonStyles,
  {
    fontSize: "18px",
    lineHeight: "1.45",
    wordBreak: "keep-all",

    "@media": {
      [breakpoints.phablet]: {
        fontSize: "16px",
      },
    },
  },
])

export const heading6 = style([
  commonStyles,
  {
    fontSize: "16px",
    lineHeight: "1.45",
    wordBreak: "keep-all",

    "@media": {
      [breakpoints.phablet]: {
        fontSize: "14px",
      },
    },
  },
])
