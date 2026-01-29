import { createVar, globalStyle, style } from "@vanilla-extract/css"

import {
  breakpoints,
  DARK_COLOR_MODE_CLASS,
  LIGHT_COLOR_MODE_CLASS,
  SYSTEM_COLOR_MODE_SELECTOR,
  tokens,
} from "@vivshaw/basalt"

/**
 * this class must be applied to whatever element wraps the MDX,
 * in order for the global MDX styles to apply correctly.
 */
export const mdxRoot = style({})

/**
 * sidenote width is fluid: fills the available right margin space,
 * clamped between 10rem (160px) min and 20rem (320px) max.
 * available space = (100vw - 42rem content) / 2 - 1.5rem gap - 1rem right padding
 */
const sidenoteWidth = createVar()

/**
 * sidenotes need the content column (42rem) + gap (1.5rem) + min sidenote (10rem)
 * + right padding (1rem) on the right, mirrored on the left since content is centered.
 * that's 42rem + 2 * (1.5rem + 10rem + 1rem) = 67rem
 */
const sidenotesBreakpoint = "(min-width: 67rem)"

/** footnote reference (superscript) styles */

globalStyle(
  `${mdxRoot} sup:has([data-footnote-ref]), ${mdxRoot} sup[data-footnote-ref]`,
  {
    lineHeight: 0,
    verticalAlign: "baseline",
    fontSize: "0.85em",
    position: "relative",
    top: "-0.5em",
    marginLeft: "0.1em",
  },
)

/**
 * toggle between footnote link and plaintext sidenote ref by breakpoint, because i don't
 * want a link to a nonexistent footnote
 * mobile: show the `<a>`, hide the plain text `.sidenote-ref`
 * desktop: hide the `<a>`, show the plain text `.sidenote-ref`
 */
globalStyle(`${mdxRoot} .sidenote-ref`, {
  display: "none",
  "@media": {
    [`screen and ${sidenotesBreakpoint}`]: {
      display: "inline",
    },
  },
})
globalStyle(`${mdxRoot} sup[data-footnote-ref] > a`, {
  "@media": {
    [`screen and ${sidenotesBreakpoint}`]: {
      display: "none",
    },
  },
})

/** footnote backlink styles */

globalStyle(`${mdxRoot} [data-footnote-backref]`, {
  fontSize: "0.75em",
  marginLeft: tokens.sizing["1"],
  opacity: 0.5,
  color: "inherit",
  transition: `opacity 0.15s ${tokens.easing.easeInQuad}`,
})

globalStyle(`${mdxRoot} [data-footnote-backref]:visited`, {
  color: "inherit",
})

globalStyle(`${mdxRoot} [data-footnote-backref]:hover`, {
  opacity: 1,
})

globalStyle(`${mdxRoot} [data-footnote-backref]:focus-visible`, {
  opacity: 1,
  outline: `${tokens.sizing["half"]} solid ${tokens.color.accentDefault}`,
  outlineOffset: tokens.sizing["half"],
  borderRadius: tokens.sizing["1"],
})

/** footnotes section styles */

const hrPatternDark = `url("data:image/svg+xml,%3Csvg width='10' height='15' viewBox='0 0 10 15' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='0.432617' y='13.8564' width='16' height='1' transform='rotate(-60 0.432617 13.8564)' fill='%2350525B'/%3E%3C/svg%3E")`
const hrPatternLight = `url("data:image/svg+xml,%3Csvg width='10' height='15' viewBox='0 0 10 15' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='0.567383' y='14.1777' width='16' height='1' transform='rotate(-60 0.567383 14.1777)' fill='%232D2E33'/%3E%3C/svg%3E")`

globalStyle(`${mdxRoot} .footnotes h2`, {
  marginBottom: tokens.sizing["4"],
  paddingTop: tokens.sizing["10"],
  backgroundPosition: "top",
  backgroundRepeat: "repeat-x",
})

globalStyle(`.${DARK_COLOR_MODE_CLASS} ${mdxRoot} .footnotes h2`, {
  backgroundImage: hrPatternDark,
})

globalStyle(`.${LIGHT_COLOR_MODE_CLASS} ${mdxRoot} .footnotes h2`, {
  backgroundImage: hrPatternLight,
})

globalStyle(`${SYSTEM_COLOR_MODE_SELECTOR} ${mdxRoot} .footnotes h2`, {
  "@media": {
    "(prefers-color-scheme: dark)": {
      backgroundImage: hrPatternDark,
    },
    "(prefers-color-scheme: light)": {
      backgroundImage: hrPatternLight,
    },
  },
})

globalStyle(`${mdxRoot} .footnotes ol`, {
  display: "flex",
  flexDirection: "column",
  gap: tokens.sizing["2"],
})

globalStyle(`${mdxRoot} .footnotes li`, {
  marginBottom: 0,
})

globalStyle(`${mdxRoot} .footnotes li p`, {
  marginBottom: 0,
})

/* hide the footnotes section when sidenotes are visible */
globalStyle(`${mdxRoot} .footnotes`, {
  "@media": {
    [`screen and ${sidenotesBreakpoint}`]: {
      display: "none",
    },
  },
})

/** sidenote styles (Tufte-style margin notes) */

/* mobile: sidenotes hidden */
globalStyle(`${mdxRoot} .sidenote`, {
  display: "none",
})

/*
 * desktop: show sidenotes in margin using float
 */
globalStyle(`${mdxRoot} .sidenote`, {
  "@media": {
    [`screen and ${sidenotesBreakpoint}`]: {
      display: "inline",
      float: "right",
      clear: "right",

      /*
       * width is fluid: fills available margin space, clamped to min/max.
       * margin-right = -(width + gap) so the float takes up zero content space.
       */
      vars: {
        [sidenoteWidth]:
          "clamp(10rem, calc((100vw - 42rem) / 2 - 2.5rem), 20rem)",
      },
      width: sidenoteWidth,
      marginRight: `calc(-1 * ${sidenoteWidth} - 1.5rem)`,
      marginTop: 0,
      marginBottom: "1rem",
      paddingRight: "1rem",

      /* typography */
      color: tokens.color.textMuted,
      fontFamily: tokens.font.sans,
      fontSize: tokens.fontSize["100"],
      lineHeight: tokens.lineHeight.body,
    },
  },
})

/* sidenote number label */
globalStyle(`${mdxRoot} .sidenote-number`, {
  fontWeight: tokens.fontWeight.bold,
  marginRight: tokens.sizing["1"],
})

/** inline code styles */

globalStyle(`${mdxRoot} :not(pre) > code`, {
  background: "rgba(101, 117, 133, 0.16)",
  borderRadius: tokens.sizing["2"],
  fontFamily: tokens.font.monospace,
  fontSize: "0.875em",
  padding: `${tokens.sizing["half"]} ${tokens.sizing["1"]}`,
})

/** image styles */

/* Remove margin from paragraphs that only contain an image */
globalStyle(`${mdxRoot} p:has(> img:only-child)`, {
  marginBottom: 0,
})

/** GitHub-style alert/callout styles */

globalStyle(`${mdxRoot} .markdown-alert`, {
  margin: `0 0 ${tokens.sizing["6"]}`,
  padding: `${tokens.sizing["2"]} ${tokens.sizing["4"]} ${tokens.sizing["2"]} ${tokens.sizing["5"]}`,
  backgroundPosition: "left",
  backgroundRepeat: "repeat-y",
})

const dashedBorderDark = `url("data:image/svg+xml,%3Csvg width='8' height='10' viewBox='0 0 8 10' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='0' y='0' width='12' height='1.5' transform='rotate(60 0 0)' fill='%2350525B'/%3E%3C/svg%3E")`
const dashedBorderLight = `url("data:image/svg+xml,%3Csvg width='8' height='10' viewBox='0 0 8 10' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='0' y='0' width='12' height='1.5' transform='rotate(60 0 0)' fill='%232D2E33'/%3E%3C/svg%3E")`

globalStyle(`.${DARK_COLOR_MODE_CLASS} ${mdxRoot} .markdown-alert`, {
  backgroundImage: dashedBorderDark,
})

globalStyle(`.${LIGHT_COLOR_MODE_CLASS} ${mdxRoot} .markdown-alert`, {
  backgroundImage: dashedBorderLight,
})

globalStyle(`${SYSTEM_COLOR_MODE_SELECTOR} ${mdxRoot} .markdown-alert`, {
  "@media": {
    "(prefers-color-scheme: dark)": {
      backgroundImage: dashedBorderDark,
    },
    "(prefers-color-scheme: light)": {
      backgroundImage: dashedBorderLight,
    },
  },
})

globalStyle(`${mdxRoot} .markdown-alert > :first-child`, {
  marginTop: "0",
})

globalStyle(`${mdxRoot} .markdown-alert > :last-child`, {
  marginBottom: "0",
})

globalStyle(`${mdxRoot} .markdown-alert-title`, {
  display: "flex",
  alignItems: "center",
  gap: tokens.sizing["1-half"],
  fontFamily: `${tokens.font.sans} !important`,
  fontSize: tokens.fontSize["100"],
  fontStyle: "normal",
  fontWeight: tokens.fontWeight.normal,
  textTransform: "none",
  marginBottom: tokens.sizing["2"],
  color: tokens.color.textMuted,
})

globalStyle(`${mdxRoot} .markdown-alert-title svg`, {
  width: "1em",
  height: "1em",
  fill: "currentColor",
  flexShrink: 0,
})
