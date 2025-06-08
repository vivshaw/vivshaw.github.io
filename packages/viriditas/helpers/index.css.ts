import { style, StyleRule } from "@vanilla-extract/css"

import {
  DARK_COLOR_MODE_CLASS,
  LIGHT_COLOR_MODE_CLASS,
  SYSTEM_COLOR_MODE_SELECTOR,
} from "../config"
import { tokens } from "../theme/index.css"

/**
 * Utility for writing dark mode styles. These styles will apply both when Viriditas is in dark mode,
 * and when Viriditas is in system mode and `(prefers-color-scheme: dark)`.
 * This creates a normal Vanilla Extract class to be composed with other classes.
 */
export function darkModeStyles(styles: Omit<StyleRule, "@media">) {
  const { selectors, ...restStyles } = styles

  const darkModeSelectors = {}
  const systemModeSelectors = {}

  if (selectors != null) {
    for (const selector of Object.keys(selectors)) {
      darkModeSelectors[`.${DARK_COLOR_MODE_CLASS} ${selector}`] =
        selectors[selector]
      systemModeSelectors[`${SYSTEM_COLOR_MODE_SELECTOR} ${selector}`] =
        selectors[selector]
    }
  }

  return style({
    selectors: {
      [`.${DARK_COLOR_MODE_CLASS} &`]: {
        ...restStyles,
      },
      ...darkModeSelectors,
    },

    "@media": {
      "(prefers-color-scheme: dark)": {
        selectors: {
          [`${SYSTEM_COLOR_MODE_SELECTOR} &`]: {
            ...restStyles,
          },
          ...systemModeSelectors,
        },
      },
    },
  })
}

/**
 * Utility for writing light mode styles. These styles will apply both when Viriditas is in light mode,
 * and when Viriditas is in system mode and `(prefers-color-scheme: light)`.
 * This creates a normal Vanilla Extract class to be composed with other classes.
 */
export function lightModeStyles(styles: Omit<StyleRule, "@media">) {
  const { selectors, ...restStyles } = styles

  const lightModeSelectors = {}
  const systemModeSelectors = {}

  if (selectors != null) {
    for (const selector of Object.keys(selectors)) {
      lightModeSelectors[`.${LIGHT_COLOR_MODE_CLASS} ${selector}`] =
        selectors[selector]
      systemModeSelectors[`${SYSTEM_COLOR_MODE_SELECTOR} ${selector}`] =
        selectors[selector]
    }
  }

  return style({
    selectors: {
      [`.${LIGHT_COLOR_MODE_CLASS} &`]: {
        ...restStyles,
      },
      ...lightModeSelectors,
    },

    "@media": {
      "(prefers-color-scheme: light)": {
        selectors: {
          [`${SYSTEM_COLOR_MODE_SELECTOR} &`]: {
            ...restStyles,
          },
          ...systemModeSelectors,
        },
      },
    },
  })
}

/**
 * A shared style for themed focus rings.
 */
export const focusRing = style({
  borderRadius: tokens.sizing["1"],

  selectors: {
    "&:focus-visible": {
      outline: `${tokens.sizing["0-half"]} solid ${tokens.color.accent}`,
      outlineOffset: tokens.sizing["1"],
    },
  },
})
