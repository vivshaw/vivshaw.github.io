import {
  assignVars,
  createGlobalTheme,
  createGlobalThemeContract,
  globalFontFace,
  globalStyle,
} from "@vanilla-extract/css"
import {
  DARK_COLOR_MODE_CLASS,
  LIGHT_COLOR_MODE_CLASS,
  SYSTEM_COLOR_MODE_SELECTOR,
} from "../config"

export const FALLBACK_FONT_SERIF = "vvv-serif-fallback"
export const FALLBACK_FONT_SANS = "vvv-sans-fallback"

globalFontFace("vvv-serif", [
  {
    src: "url(https://fonts.vivsha.ws/fonts/Equity_B/equity_ot_b_regular.woff2)",
    fontDisplay: "swap",
    fontStyle: "normal",
    fontWeight: "400",
  },
  {
    src: "url(https://fonts.vivsha.ws/fonts/Equity_B/equity_ot_b_italic.woff2)",
    fontDisplay: "swap",
    fontStyle: "italic",
    fontWeight: "400",
  },
  {
    src: "url(https://fonts.vivsha.ws/fonts/Equity_B/equity_ot_b_bold.woff2)",
    fontDisplay: "swap",
    fontStyle: "normal",
    fontWeight: "700",
  },
  {
    src: "url(https://fonts.vivsha.ws/fonts/Equity_B/equity_ot_b_bold_italic.woff2)",
    fontDisplay: "swap",
    fontStyle: "italic",
    fontWeight: "700",
  },
])

globalFontFace("vvv-sans", [
  {
    src: "url(https://fonts.vivsha.ws/fonts/Concourse_3/concourse_3_regular.woff2)",
    fontDisplay: "swap",
    fontStyle: "normal",
    fontWeight: "400",
  },
  {
    src: "url(https://fonts.vivsha.ws/fonts/Concourse_3/concourse_3_italic.woff2)",
    fontDisplay: "swap",
    fontStyle: "italic",
    fontWeight: "400",
  },
  {
    src: "url(https://fonts.vivsha.ws/fonts/Concourse_3/concourse_3_bold.woff2)",
    fontDisplay: "swap",
    fontStyle: "normal",
    fontWeight: "700",
  },
  {
    src: "url(https://fonts.vivsha.ws/fonts/Concourse_3/concourse_3_bold_italic.woff2)",
    fontDisplay: "swap",
    fontStyle: "italic",
    fontWeight: "700",
  },
])

/**
 * fallback font for serifs
 */
globalFontFace(FALLBACK_FONT_SERIF, {
  src: "local(Times New Roman)",
  sizeAdjust: "102%",
  ascentOverride: "normal",
  descentOverride: "normal",
  lineGapOverride: "normal",
})

/**
 * fallback font for sans-serif
 */
globalFontFace(FALLBACK_FONT_SANS, {
  src: "local(Arial)",
  sizeAdjust: "89%",
  ascentOverride: "106%",
  descentOverride: "25%",
  lineGapOverride: "normal",
})

/**
 * underlying neutral color scale, from lightest (50) to darkest (900).
 * these are static values that don't change between light/dark modes.
 */
const palette = {
  "base-50": "#ffffff",
  "base-100": "#f5f5f4",
  "base-200": "#c7ccd1",
  "base-300": "#b7bdb4",
  "base-400": "#73737a",
  "base-500": "#484a53",
  "base-550": "#28282b",
  "base-600": "#1d2126",
  "base-700": "#111214",
  "base-800": "#08080a",
  "base-900": "#000000",
} as const

/**
 * theme contract for the Basalt design system.
 * all tokens used in the system are defined here.
 */
export const tokens = createGlobalThemeContract(
  {
    color: {
      /**
       * semantic color tokens
       * naming convention: <color>-<role>
       */
      accentDefault: null,
      backgroundDefault: null,
      backgroundSecondary: null,
      borderDefault: null,
      borderMuted: null,
      textDefault: null,
      textMuted: null,

      /** neutral color scale, from lightest (50) to darkest (900). */
      "base-50": null,
      "base-100": null,
      "base-200": null,
      "base-300": null,
      "base-400": null,
      "base-500": null,
      "base-550": null,
      "base-600": null,
      "base-700": null,
      "base-800": null,
      "base-900": null,
    },

    easing: {
      easeInQuad: null,
      easeInQuart: null,
      easeOutQuad: null,
      easeOutQuart: null,
      easeInOutQuad: null,
      easeInOutQuart: null,
    },

    /**
     * typography tokens.
     */
    font: {
      serif: null,
      sans: null,
      monospace: null,
    },
    fontFeatureSettings: {
      serif: null,
      serifSmallCaps: null,
      sans: null,
      monospace: null,
    },
    fontWeight: {
      normal: null,
      bold: null,
    },
    fontSize: {
      "100": null,
      "200": null,
      "300": null,
      "400": null,
      "500": null,
      "600": null,
      "700": null,
    },
    lineHeight: {
      body: null,
      heading: null,
    },

    /**
     * motion tokens.
     */
    motion: {
      colorModeTransition: null,
      hoverTransition: null,
    },

    /**
     * sizing tokens.
     * based on Tailwind's spacing scale, where 1 unit = 0.25rem (4px).
     */
    sizing: {
      "0": null,
      half: null,
      "1": null,
      "1-half": null,
      "2": null,
      "2-half": null,
      "3": null,
      "3-half": null,
      "4": null,
      "5": null,
      "6": null,
      "7": null,
      "8": null,
      "9": null,
      "10": null,
      "11": null,
      "12": null,
      "14": null,
      "16": null,
      "20": null,
      "24": null,
      "28": null,
      "32": null,
      "36": null,
      "40": null,
      "44": null,
      "48": null,
      "52": null,
      "56": null,
      "60": null,
      "64": null,
      "72": null,
      "80": null,
      "96": null,
      "168": null,
    },
  },
  (_value, path) => path.join("-"),
)

const sharedTheme = {
  /**
   * easing thanks to Benjamin De Cock
   * https://gist.github.com/bendc/ac03faac0bf2aee25b49e5fd260a727d
   */
  easing: {
    easeInQuad: "cubic-bezier(0.55, 0.085, 0.68, 0.53)",
    easeInQuart: "cubic-bezier(0.895, 0.03, 0.685, 0.22)",
    easeOutQuad: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
    easeOutQuart: "cubic-bezier(0.165, 0.84, 0.44, 1)",
    easeInOutQuad: "cubic-bezier(0.455, 0.03, 0.515, 0.955)",
    easeInOutQuart: "cubic-bezier(0.77, 0, 0.175, 1)",
  },
  font: {
    serif: `vvv-serif, ${FALLBACK_FONT_SERIF}, serif`,
    sans: `vvv-sans, ${FALLBACK_FONT_SANS}, sans-serif`,
    monospace: `Consolas, Menlo, Monaco, source-code-pro, Courier New, monospace`,
  },
  fontFeatureSettings: {
    serif: "'calt', 'kern', 'liga', 'onum'",
    serifSmallCaps: '"c2sc", "calt", "kern", "liga", "onum", "smcp"',
    sans: "'calt', 'kern', 'liga', 'onum'",
    monospace: "normal",
  },
  fontSize: {
    "100": "1rem", // 16px
    "200": "1.125rem", // 18px
    "300": "1.25rem", // 20px
    "400": "1.375rem", // 22px
    "500": "1.5rem", // 24px
    "600": "1.75rem", // 28px
    "700": "2rem", // 32px
  },
  lineHeight: {
    body: "1.4",
    heading: "1.3",
  },
  fontWeight: {
    normal: "400",
    bold: "700",
  },

  motion: {
    colorModeTransition: `background 0.25s ${tokens.easing.easeInOutQuad}, color 0.25s ${tokens.easing.easeInOutQuad}`,
    hoverTransition: `border-color 0.2s ${tokens.easing.easeInQuad}, opacity 0.2s ${tokens.easing.easeInQuad}`,
  },

  /**
   * spacing scale based on Tailwind CSS.
   * one spacing unit equals 0.25rem (4px).
   */
  sizing: {
    "0": "0px",
    half: "0.125rem", // 2px
    "1": "0.25rem", // 4px
    "1-half": "0.375rem", // 6px
    "2": "0.5rem", // 8px
    "2-half": "0.625rem", // 10px
    "3": "0.75rem", // 12px
    "3-half": "0.875rem", // 14px
    "4": "1rem", // 16px
    "5": "1.25rem", // 20px
    "6": "1.5rem", // 24px
    "7": "1.75rem", // 28px
    "8": "2rem", // 32px
    "9": "2.25rem", // 36px
    "10": "2.5rem", // 40px
    "11": "2.75rem", // 44px
    "12": "3rem", // 48px
    "14": "3.5rem", // 56px
    "16": "4rem", // 64px
    "20": "5rem", // 80px
    "24": "6rem", // 96px
    "28": "7rem", // 112px
    "32": "8rem", // 128px
    "36": "9rem", // 144px
    "40": "10rem", // 160px
    "44": "11rem", // 176px
    "48": "12rem", // 192px
    "52": "13rem", // 208px
    "56": "14rem", // 224px
    "60": "15rem", // 240px
    "64": "16rem", // 256px
    "72": "18rem", // 288px
    "80": "20rem", // 320px
    "96": "24rem", // 384px
    "168": "42rem", // 672px
  },
}

const lightVars = {
  ...sharedTheme,
  color: {
    ...palette,
    accentDefault: palette["base-550"],
    backgroundDefault: palette["base-100"],
    backgroundSecondary: palette["base-50"],
    borderDefault: palette["base-800"],
    borderMuted: palette["base-400"],
    textDefault: palette["base-900"],
    textMuted: palette["base-400"],
  },
}

/**
 * dark mode, applied via placing the class `LIGHT_COLOR_MODE_CLASS` at the top of the document tree.
 */
export const lightColorMode = createGlobalTheme(
  `.${LIGHT_COLOR_MODE_CLASS}:root`,
  tokens,
  lightVars,
)

const darkVars = {
  ...sharedTheme,
  color: {
    ...palette,
    accentDefault: palette["base-300"],
    backgroundDefault: palette["base-700"],
    backgroundSecondary: palette["base-600"],
    borderDefault: palette["base-200"],
    borderMuted: palette["base-400"],
    textDefault: palette["base-200"],
    textMuted: palette["base-400"],
  },
}

/**
 * dark mode, applied via placing the class `DARK_COLOR_MODE_CLASS` at the top of the document tree.
 */
export const darkColorMode = createGlobalTheme(
  `.${DARK_COLOR_MODE_CLASS}:root`,
  tokens,
  darkVars,
)

/**
 * system mode, the default (active when no color mode class has been applied).
 * in this mode, the user's `prefers-color-scheme` setting will determine the color mode.
 */
export const systemColorMode = globalStyle(`${SYSTEM_COLOR_MODE_SELECTOR}`, {
  "@media": {
    "(prefers-color-scheme: light)": {
      vars: assignVars(tokens, lightVars),
    },
    "(prefers-color-scheme: dark)": {
      vars: assignVars(tokens, darkVars),
    },
  },
})

export const breakpoints = {
  tablet: "(min-width: 541px)",
  desktop: "(min-width: 736px)",
}
