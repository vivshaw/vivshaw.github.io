import { globalStyle, style } from "@vanilla-extract/css"

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

/** inline code styles */

globalStyle(`${mdxRoot} :not(pre) > code`, {
  background: "rgba(101, 117, 133, 0.16)",
  borderRadius: tokens.sizing["2"],
  fontFamily: tokens.font.monospace,
  fontSize: "0.875em",
  padding: `${tokens.sizing["half"]} ${tokens.sizing["1"]}`,
})

/** image styles */

const IMAGE_WIDTHS = {
  regular: "680px",
  large: "1004px",
  full: "100vw",
}

globalStyle(`${mdxRoot} img`, {
  borderRadius: tokens.sizing["1"],
  display: "inline-block",
  height: "auto",
  margin: `${tokens.sizing["0"]} auto ${tokens.sizing["6"]}`,
  maxWidth: "100%",

  "@media": {
    [breakpoints.tablet]: {
      margin: `${tokens.sizing["2-half"]} auto ${tokens.sizing["11"]}`,
    },
    [breakpoints.desktop]: {
      margin: `${tokens.sizing["4"]} auto ${tokens.sizing["12"]}`,
    },
  },
})

globalStyle(`${mdxRoot} .Image__Small`, {
  margin: `${tokens.sizing["0"]} auto ${tokens.sizing["6"]}`,
  maxWidth: "100%",

  "@media": {
    [breakpoints.desktop]: {
      margin: `${tokens.sizing["4"]} auto ${tokens.sizing["12"]}`,
    },
  },
})

// TODO: why are there necessary? is it just conflict with the `.img` block above?
globalStyle(`${mdxRoot} img.Image__Small`, {
  borderRadius: "0",

  "@media": {
    [breakpoints.tablet]: {
      borderRadius: tokens.sizing["1"],
    },
  },
})

globalStyle(`${mdxRoot} .Image__Medium`, {
  borderRadius: "0",
  left: "0",
  margin: `${tokens.sizing["0"]} auto ${tokens.sizing["6"]}`,
  maxWidth: IMAGE_WIDTHS.large,
  width: "100%",

  "@media": {
    [breakpoints.desktop]: {
      borderRadius: tokens.sizing["1"],
      margin: `${tokens.sizing["4"]} auto ${tokens.sizing["12"]}`,
    },
  },
})

globalStyle(`${mdxRoot} img.Image__Medium`, {
  borderRadius: "0",

  "@media": {
    [breakpoints.desktop]: {
      borderRadius: tokens.sizing["1"],
    },
  },
})

globalStyle(`${mdxRoot} .Image__Large`, {
  left: "0",
  margin: `${tokens.sizing["0"]} auto ${tokens.sizing["6"]}`,
  width: IMAGE_WIDTHS.full,

  "@media": {
    [breakpoints.desktop]: {
      left: `-${tokens.sizing["16"]}`,
      margin: `${tokens.sizing["6"]} auto ${tokens.sizing["14"]}`,
    },
  },
})

globalStyle(`${mdxRoot} img.Image__Large`, {
  borderRadius: "0",
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
