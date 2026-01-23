import { style } from "@vanilla-extract/css"
import { breakpoints, tokens } from "@vivshaw/basalt"

import { orderedList } from "../OrderedList/OrderedList.css"
import { unorderedList } from "../UnorderedList/UnorderedList.css"

/**
 * A styled `<li>` element, for use in MDX.
 */
export const listItem = style({
  paddingBottom: tokens.sizing["4"],
  paddingLeft: tokens.sizing["8"],
  position: "relative",

  "@media": {
    [breakpoints.desktop]: {
      paddingLeft: 0,
    },
  },

  selectors: {
    [`${orderedList} &::before`]: {
      color: tokens.color.textDefault,
      content: 'counter(list) "."',
      counterIncrement: "list",
      display: "inline-block",
      fontSize: "2rem",
      fontWeight: tokens.fontWeight.bold,
      left: 0,
      position: "absolute",
      top: "-0.3rem",
      width: "3rem",

      "@media": {
        [breakpoints.desktop]: {
          left: "-3rem",
        },
      },
    },
    [`${unorderedList} &::before`]: {
      backgroundColor: tokens.color.textDefault,
      content: '""',
      height: tokens.sizing["2"],
      left: 0,
      position: "absolute",
      top: tokens.sizing["2"],
      width: tokens.sizing["2"],

      "@media": {
        [breakpoints.desktop]: {
          left: `-${tokens.sizing["8"]}`,
        },
      },
    },
  },
})
