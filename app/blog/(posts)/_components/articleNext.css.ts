import { style } from "@vanilla-extract/css"
import { recipe } from "@vanilla-extract/recipes"

import { heading3 } from "@components/MDX/Headings/headings.css"
import { breakpoints, tokens } from "@viriditas/theme/theme.css"

export const articleNextGrid = recipe({
  base: {
    columnGap: "30px",
    display: "grid",
    margin: "0 auto",
    maxWidth: "680px",
    position: "relative",

    "@media": {
      [breakpoints.desktop]: {
        gridTemplateColumns: "1fr 1fr",
      },
      [breakpoints.tablet]: {
        gridTemplateColumns: "1fr",
      },
    },
  },

  variants: {
    multipleArticles: {
      true: {
        gridTemplateColumns: "1fr 457px",
        gridTemplateRows: "2",
        maxWidth: "100%",
      },
      false: {
        gridTemplateColumns: "1fr",
        gridTemplateRows: "1",
        maxWidth: "680px",
      },
    },
  },
})

export const articleNextLink = style({
  display: "block",
  left: "0",
  height: "100%",
  position: "relative",
  top: "0",
  transition: "transform 0.33s var(--ease-out-quart)",
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
    [breakpoints.tablet]: {
      selectors: {
        /** On small screens, only show one Next Article suggestion to avoid clutter. */
        "&:not(:first-child)": {
          display: "none",
        },
      },
    },
  },
})

// TODO: Stop sharing the MDX headings like this!
export const articleNextTitle = style([
  heading3,
  {
    color: tokens.color.primary,
    fontFamily: tokens.font.display,
    fontSize: "22px",
    lineHeight: "1.4",
    marginBottom: "10px",
    transition: "color 0.3s ease-in-out",

    selectors: {
      [`${articleNextLink}:hover &`]: {
        color: tokens.color.accent,
      },
    },

    "@media": {
      [breakpoints.tablet]: {
        marginBottom: "15px",
      },
      [breakpoints.phablet]: {
        marginBottom: "10px",
        padding: "0 20px 0",
      },
    },
  },
])

// TODO: do I _really_ need these Webkit vendor properties?
export const articleNextExcerpt = style({
  color: tokens.color.grey,
  fontSize: "16px",
  marginBottom: "10px",
  maxWidth: "515px",

  "@media": {
    [breakpoints.desktop]: {
      display: "-webkit-box",
    },
    [breakpoints.tablet]: {
      marginBottom: "15px",
    },
    [breakpoints.phablet]: {
      marginBottom: "20px",
      maxWidth: "100%",
      padding: "0 20px",
      WebkitLineClamp: "3",
    },
  },
})

export const articleNextMetaData = style({
  color: tokens.color.grey,
  fontSize: "16px",
  fontWeight: "600",
  opacity: "0.33",

  "@media": {
    [breakpoints.phablet]: {
      maxWidth: "100%",
      padding: "0 20px 30px",
    },
  },
})
