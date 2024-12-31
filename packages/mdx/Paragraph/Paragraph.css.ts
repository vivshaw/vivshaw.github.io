import { style } from "@vanilla-extract/css"
import { breakpoints, tokens } from "@vivshaw/viriditas/theme"

import { blockquote } from "../Blockquote/Blockquote.css"
import { listItem } from "../ListItem/ListItem.css"

export const paragraph = style({
  color: tokens.color.bodyText,
  fontFamily: tokens.font.book,
  fontSize: "22px",
  lineHeight: "1.756",
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
      fontFamily: tokens.font.display,
      fontSize: "36px",
      fontWeight: "bold",
      lineHeight: "1.32",
      margin: "0 auto",
      maxWidth: "880px !important",
      paddingBottom: "0",
      paddingRight: "100px",
      width: "100%",

      "@media": {
        [breakpoints.tablet]: {
          fontSize: "26px",
          padding: "0 180px",
        },
        [breakpoints.phablet]: {
          fontSize: "36px",
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
