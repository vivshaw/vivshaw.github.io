import { globalStyle } from "@vanilla-extract/css"
import {
  breakpoints,
  tokens,
  DARK_COLOR_MODE_CLASS,
  LIGHT_COLOR_MODE_CLASS,
  SYSTEM_COLOR_MODE_SELECTOR,
} from "@vivshaw/basalt"

export const CODE_BLOCK_CLASS = "shiki"
export const CODE_BLOCK_CONTAINER_CLASS = "shiki-container"

/**
 * container for Shiki code blocks - holds the language label
 */
globalStyle(`.${CODE_BLOCK_CONTAINER_CLASS}`, {
  position: "relative",
  marginBottom: tokens.sizing["6"],

  "@media": {
    [breakpoints.desktop]: {
      marginBottom: tokens.sizing["8"],
    },
  },
})

/**
 * base styles for Shiki code blocks.
 */
globalStyle(`.${CODE_BLOCK_CLASS}`, {
  fontSize: tokens.fontSize["100"],
  lineHeight: tokens.lineHeight.body,
  overflow: "auto",
  padding: tokens.sizing["4"],
  textSizeAdjust: "none",
  width: "100%",

  "@media": {
    [breakpoints.desktop]: {
      borderRadius: tokens.sizing["1"],
    },
  },
})

/** light mode */
globalStyle(`.${LIGHT_COLOR_MODE_CLASS} .${CODE_BLOCK_CLASS}`, {
  backgroundColor: "var(--shiki-light-bg) !important",
})

globalStyle(`.${LIGHT_COLOR_MODE_CLASS} .${CODE_BLOCK_CLASS} span`, {
  color: "var(--shiki-light) !important",
})

/** dark mode */
globalStyle(`.${DARK_COLOR_MODE_CLASS} .${CODE_BLOCK_CLASS}`, {
  backgroundColor: "var(--shiki-dark-bg) !important",
})

globalStyle(`.${DARK_COLOR_MODE_CLASS} .${CODE_BLOCK_CLASS} span`, {
  color: "var(--shiki-dark) !important",
})

/** system preference fallback */
globalStyle(`${SYSTEM_COLOR_MODE_SELECTOR} .${CODE_BLOCK_CLASS}`, {
  "@media": {
    "(prefers-color-scheme: light)": {
      backgroundColor: "var(--shiki-light-bg) !important",
    },
    "(prefers-color-scheme: dark)": {
      backgroundColor: "var(--shiki-dark-bg) !important",
    },
  },
})

globalStyle(`${SYSTEM_COLOR_MODE_SELECTOR} .${CODE_BLOCK_CLASS} span`, {
  "@media": {
    "(prefers-color-scheme: light)": {
      color: "var(--shiki-light) !important",
    },
    "(prefers-color-scheme: dark)": {
      color: "var(--shiki-dark) !important",
    },
  },
})

/** line highlighting - use [!code highlight] in code blocks */
globalStyle(`.${CODE_BLOCK_CLASS} .line.highlighted`, {
  backgroundColor: "rgba(101, 117, 133, 0.2) !important",
})

/** diff notation - use [!code ++] and [!code --] in code blocks */
globalStyle(`.${CODE_BLOCK_CLASS} .line.diff`, {
  position: "relative",
  paddingLeft: tokens.sizing["6"],
})

globalStyle(`.${CODE_BLOCK_CLASS} .line.diff::before`, {
  position: "absolute",
  left: 0,
  width: tokens.sizing["6"],
})

globalStyle(`.${CODE_BLOCK_CLASS} .line.diff.add`, {
  backgroundColor: "rgba(16, 185, 129, 0.2) !important",
})

globalStyle(`.${CODE_BLOCK_CLASS} .line.diff.add::before`, {
  content: "'+'",
  color: "#10b981",
})

globalStyle(`.${CODE_BLOCK_CLASS} .line.diff.remove`, {
  backgroundColor: "rgba(244, 63, 94, 0.2) !important",
})

globalStyle(`.${CODE_BLOCK_CLASS} .line.diff.remove::before`, {
  content: "'-'",
  color: "#f43f5e",
})

/** language label in top right corner - on container so it doesn't scroll */
globalStyle(`.${CODE_BLOCK_CONTAINER_CLASS}::after`, {
  content: "attr(data-language)",
  position: "absolute",
  top: tokens.sizing["2"],
  right: tokens.sizing["2"],
  fontSize: tokens.fontSize["50"],
  fontFamily: tokens.font.sans,
  opacity: 0.5,
  letterSpacing: "0.05em",
  pointerEvents: "none",
})
