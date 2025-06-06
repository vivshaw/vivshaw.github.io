import { style } from "@vanilla-extract/css"
import { breakpoints, tokens } from "@vivshaw/viriditas"

import { orderedList } from "../OrderedList/OrderedList.css"
import { unorderedList } from "../UnorderedList/UnorderedList.css"

/**
 * A styled `<li>` element, for use in MDX.
 */
export const listItem = style({
  paddingBottom: tokens.spacing["4"],
  position: "relative",

  "@media": {
    [breakpoints.tablet]: {
      paddingLeft: tokens.spacing["8"],
    },
    [breakpoints.phablet]: {
      paddingLeft: tokens.spacing["8"],
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
      height: tokens.spacing["2"],
      left: `-${tokens.spacing["8"]}`,
      position: "absolute",
      top: tokens.spacing["2"],
      width: tokens.spacing["2"],

      "@media": {
        [breakpoints.tablet]: {
          left: 0,
        },
      },
    },
  },
})
