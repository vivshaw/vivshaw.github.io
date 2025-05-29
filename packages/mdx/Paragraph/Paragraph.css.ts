import { style } from "@vanilla-extract/css"
import { breakpoints, tokens } from "@vivshaw/viriditas"

import { blockquote } from "../Blockquote/Blockquote.css"
import { listItem } from "../ListItem/ListItem.css"

export const paragraph = style({
  color: tokens.color.bodyText,
  fontFamily: tokens.font.serif,
  fontSize: tokens.fontSize.xl,
  lineHeight: tokens.lineHeight.xl,
  marginBottom: 35,
  marginTop: 0,
  transition: tokens.motion.colorModeTransition,
  width: "100%",

  "@media": {
    [breakpoints.tablet]: {
      marginBottom: 25,
      marginTop: 0,
    },
  },

  selectors: {
    [`${blockquote} &`]: {
      fontFamily: tokens.font.serif,
      fontSize: tokens.fontSize["4xl"],
      fontWeight: "bold",
      lineHeight: tokens.lineHeight["4xl"],
      margin: "0 auto",
      maxWidth: "880px !important",
      paddingBottom: "0",
      paddingRight: "100px",
      width: "100%",

      "@media": {
        [breakpoints.tablet]: {
          fontSize: tokens.fontSize["2xl"],
          lineHeight: tokens.lineHeight["2xl"],
          padding: "0 180px",
        },
        [breakpoints.phablet]: {
          fontSize: tokens.fontSize["4xl"],
          lineHeight: tokens.lineHeight["4xl"],
          padding: "0 20px 0 40px",
        },
      },
    },
    [`${listItem} &`]: {
      "@media": {
        [breakpoints.tablet]: {
          padding: 0,
        },
      },
    },
  },
})
