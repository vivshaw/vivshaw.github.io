import { style } from "@vanilla-extract/css"
import { heading2 } from "@vivshaw/mdx/Headings/Headings.css"
import { breakpoints, tokens } from "@vivshaw/viriditas"
import { focusRing } from "@vivshaw/viriditas/helpers"

export const root = style({
  transition: "opacity 0.25s",
})

export const postLink = style([
  {
    borderRadius: "5px",
    display: "block",
    height: "100%",
    left: "0",
    marginBottom: "50px",
    position: "relative",
    transition: `transform 0.33s ${tokens.easing.easeOutQuart}`,
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
  },
  focusRing,
])

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
    marginBottom: "4px",
    transition: "color 0.3s ease-in-out",

    selectors: {
      [`${postLink}:hover &, ${postLink}:focus-visible &`]: {
        color: tokens.color.accent,
      },
    },

    "@media": {
      [breakpoints.phablet]: {
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
    fontFamily: tokens.font.serif,
    fontSize: tokens.fontSize.xl,
    lineHeight: tokens.lineHeight.xl,
    marginBottom: "8px",

    "@media": {
      [breakpoints.phablet]: {
        padding: "0 20px",

        WebkitLineClamp: "3",
      },
      [breakpoints.tablet]: {
        fontSize: tokens.fontSize.lg,
        lineHeight: tokens.lineHeight.lg,
      },
    },
  },
])

export const postDate = style({
  color: tokens.color.grey,
  fontFamily: tokens.font.serif,
  fontSize: tokens.fontSize.base,
  fontWeight: tokens.fontWeight.normal,
  lineHeight: tokens.lineHeight.base,
  opacity: "0.33",

  "@media": {
    [breakpoints.phablet]: {
      padding: "0 20px",
    },
  },
})
