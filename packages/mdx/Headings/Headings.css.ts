import { style } from "@vanilla-extract/css"
import { breakpoints, tokens } from "@vivshaw/viriditas"

const commonStyles = style({
  color: tokens.color.primary,
  fontFamily: tokens.font.serif,
  fontWeight: "normal",
})

export const heading1 = style([
  commonStyles,
  {
    fontSize: "48px",
    lineHeight: "1.15",
    wordBreak: "keep-all",

    "@media": {
      [breakpoints.desktop]: {
        fontSize: "36px",
        lineHeight: "1.2",
      },
      [breakpoints.phablet]: {
        fontSize: "30px",
        lineHeight: "1.3",
      },
    },
  },
])

export const heading2 = style([
  commonStyles,
  {
    fontSize: "30px",
    lineHeight: "1.333",
    wordBreak: "keep-all",

    "@media": {
      [breakpoints.desktop]: {
        fontSize: "20px",
      },
      [breakpoints.tablet]: {
        fontSize: "24px",
        lineHeight: "1.45",
      },
      [breakpoints.phablet]: {
        fontSize: "20px",
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
        fontSize: "20px",
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
