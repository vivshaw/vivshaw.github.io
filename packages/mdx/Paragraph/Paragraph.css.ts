import { style } from "@vanilla-extract/css"
import { breakpoints, tokens } from "@vivshaw/viriditas"

import { blockquote } from "../Blockquote/Blockquote.css"
import { listItem } from "../ListItem/ListItem.css"

export const paragraph = style({
  color: tokens.color.bodyText,
  fontFamily: tokens.font.serif,
  fontSize: tokens.fontSize["500"],
  lineHeight: tokens.lineHeight.body,
  marginBottom: tokens.spacing["9"],
  marginTop: 0,
  transition: tokens.motion.colorModeTransition,
  width: "100%",

  "@media": {
    [breakpoints.tablet]: {
      marginBottom: tokens.spacing["6"],
      marginTop: 0,
    },
  },

  selectors: {
    [`${blockquote} &`]: {
      fontFamily: tokens.font.serif,
      fontSize: tokens.fontSize["500"],
      fontWeight: tokens.fontWeight.bold,
      lineHeight: tokens.lineHeight.body,
      margin: "0 auto",
      maxWidth: "880px !important",
      paddingBottom: "0",
      paddingRight: tokens.spacing["24"],
      width: "100%",

      "@media": {
        [breakpoints.tablet]: {
          fontSize: tokens.fontSize["500"],
          lineHeight: tokens.lineHeight.body,
          padding: `${tokens.spacing["0"]} ${tokens.spacing["44"]}`,
        },
        [breakpoints.phablet]: {
          fontSize: tokens.fontSize["500"],
          lineHeight: tokens.lineHeight.body,
          padding: `${tokens.spacing["0"]} ${tokens.spacing["5"]} ${tokens.spacing["0"]} ${tokens.spacing["10"]}`,
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
