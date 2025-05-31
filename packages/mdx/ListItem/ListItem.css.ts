import { style } from "@vanilla-extract/css"
import { breakpoints, tokens } from "@vivshaw/viriditas"

import { orderedList } from "../OrderedList/OrderedList.css"
import { unorderedList } from "../UnorderedList/UnorderedList.css"

/**
 * A styled `<li>` element, for use in MDX.
 */
export const listItem = style({
  paddingBottom: "15px",
  position: "relative",

  "@media": {
    [breakpoints.tablet]: {
      paddingLeft: "30px",
    },
    [breakpoints.phablet]: {
      paddingLeft: "30px",
    },
  },

  selectors: {
    [`${orderedList} &::before`]: {
      color: tokens.color.bodyText,
      content: 'counter(list) "."',
      counterIncrement: "list",
      display: "inline-block",
      fontSize: "2rem",
      fontWeight: tokens.fontWeight.bold,
      left: "-3rem",
      position: "absolute",
      top: "-0.3rem",
      width: "3rem",

      "@media": {
        [breakpoints.tablet]: {
          left: 0,
        },
      },
    },
    [`${unorderedList} &::before`]: {
      backgroundColor: tokens.color.bodyText,
      content: '""',
      height: "8px",
      left: "-30px",
      position: "absolute",
      top: "8px",
      width: "8px",

      "@media": {
        [breakpoints.tablet]: {
          left: 0,
        },
      },
    },
  },
})
