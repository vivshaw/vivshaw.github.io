import { style } from "@vanilla-extract/css"

import { heading2 } from "@components/MDX/Headings/headings.css"
import { breakpoints, tokens } from "@viriditas/theme/theme.css"

export const blogList = style({
  transition: "opacity 0.25s",
})

export const postLink = style({
  borderRadius: "5px",
  display: "block",
  height: "100%",
  left: "0",
  marginBottom: "50px",
  position: "relative",
  transition: "transform 0.33s var(--ease-out-quart)",
  top: "0",
  width: "100%",
  zIndex: "1",

  WebkitTapHighlightColor: "rgba(255, 255, 255, 0)",

  "@media": {
    [breakpoints.phablet]: {
      selectors: {
        "&:active": {
          transform: "scale(0.97) translateY(3px)",
        },
      },
    },
  },
})

const limitLines = style({
  display: "-webkit-box",
  overflow: "hidden",
  overflowWrap: "normal",
  textOverflow: "ellipsis",
  whiteSpace: "normal",

  WebkitLineClamp: "2",
  WebkitBoxOrient: "vertical",

  "@media": {
    [breakpoints.phablet]: {
      WebkitLineClamp: "3",
    },
  },
})

// TODO: Stop sharing the MDX headings like this!
export const postTitle = style([
  heading2,
  limitLines,
  {
    fontFamily: tokens.font.display,
    fontSize: "32px",
    fontWeight: "500",
    marginBottom: "4px",
    transition: "color 0.3s ease-in-out",

    selectors: {
      [`${postLink}:hover &, ${postLink}:focus &`]: {
        color: tokens.color.accent,
      },
    },

    "@media": {
      [breakpoints.desktop]: {
        fontSize: "32px",
      },
      [breakpoints.tablet]: {
        fontSize: "24px",
      },
      [breakpoints.phablet]: {
        fontSize: "22px",
        padding: "0 20px",

        WebkitLineClamp: "3",
      },
    },
  },
])

export const postBlurb = style([
  limitLines,
  {
    color: tokens.color.grey,
    display: "flex",
    fontFamily: tokens.font.book,
    fontSize: "20px",
    marginBottom: "8px",

    "@media": {
      [breakpoints.phablet]: {
        padding: "0 20px",

        WebkitLineClamp: "3",
      },
      [breakpoints.tablet]: {
        fontSize: "18px",
      },
    },
  },
])

export const postDate = style({
  color: tokens.color.grey,
  fontFamily: tokens.font.book,
  fontSize: "16px",
  fontWeight: "400",
  opacity: "0.33",

  "@media": {
    [breakpoints.phablet]: {
      padding: "0 20px",
    },
  },
})
