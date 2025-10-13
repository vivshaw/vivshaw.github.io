import { style } from "@vanilla-extract/css"

import { breakpoints, tokens } from "@vivshaw/viriditas"
import { blockquote } from "../Blockquote/Blockquote.css"
import { listItem } from "../ListItem/ListItem.css"

/**
 * Will be used to style the first the words as smallcaps
 */
export const firstThree = style({})

export const paragraph = style({
  color: tokens.color.bodyText,
  fontFamily: tokens.font.serif,
  fontFeatureSettings: tokens.fontFeatureSettings.serif,
  fontSize: tokens.fontSize["500"],
  hyphens: "auto",
  lineHeight: tokens.lineHeight.body,
  marginBottom: tokens.sizing["8"],
  marginTop: 0,
  textWrap: "pretty",
  transition: tokens.motion.colorModeTransition,
  width: "100%",

  "@media": {
    [breakpoints.tablet]: {
      fontSize: tokens.fontSize["300"],
      marginBottom: tokens.sizing["6"],
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
      paddingRight: tokens.sizing["24"],
      width: "100%",

      "@media": {
        [breakpoints.tablet]: {
          fontSize: tokens.fontSize["500"],
          lineHeight: tokens.lineHeight.body,
          padding: `${tokens.sizing["0"]} ${tokens.sizing["44"]}`,
        },
        [breakpoints.phablet]: {
          fontSize: tokens.fontSize["500"],
          lineHeight: tokens.lineHeight.body,
          padding: `${tokens.sizing["0"]} ${tokens.sizing["5"]} ${tokens.sizing["0"]} ${tokens.sizing["10"]}`,
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
