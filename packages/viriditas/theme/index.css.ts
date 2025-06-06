import {
  assignVars,
  createGlobalTheme,
  createGlobalThemeContract,
  globalFontFace,
  globalStyle,
} from "@vanilla-extract/css"
import { createSprinkles, defineProperties } from "@vanilla-extract/sprinkles"

import {
  DARK_COLOR_MODE_CLASS,
  LIGHT_COLOR_MODE_CLASS,
  SYSTEM_COLOR_MODE_SELECTOR,
} from "../config"

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

// TODO: Create font fallbacks?
// globalFontFace(FALLBACK_FONT, {
//   src: "local(Times New Roman)",
//   sizeAdjust: "98%",
//   ascentOverride: "117%",
//   descentOverride: "45%",
//   lineGapOverride: "normal",
// })

/**
 * Theme contract for the Viriditas design system.
 * All tokens used in the system are defined here.
 */
export const tokens = createGlobalThemeContract(
  {
    color: {
      primary: null,
      grey: null,
      background: null,
      accent: null,
      bodyText: null,
      card: null,
      horizontalRule: null,

      /**
       * Colors for the Prism syntax highlighter.
       */
      prism: {
        token: null,
        languageJavascript: null,
        javascript: null,
        background: null,
        comment: null,
        string: null,
        var: null,
        number: null,
        constant: null,
        plain: null,
        doctype: null,
        tag: null,
        keyword: null,
        boolean: null,
        function: null,
        parameter: null,
        className: null,
        attrName: null,
        attrValue: null,
        interpolation: null,
        punctuation: null,
        ["maybe-class-name"]: null,
        property: null,
        propertyAccess: null,
        namespace: null,
        highlight: null,
        highlightBorder: null,
        dom: null,
        operator: null,
      },
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
     * Typography tokens.
     */
    font: {
      serif: null,
      sans: null,
      monospace: null,
    },
    fontFeatureSettings: {
      serif: null,
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
    },
    lineHeight: {
      body: null,
      heading: null,
    },

    /**
     * Motion tokens.
     */
    motion: {
      colorModeTransition: null,
      hoverTransition: null,
    },
  },
  (_value, path) => path.join("-"),
)

/**
 * Colors for the Prism syntax highlighter.
 * These are shared between the light and dark themes.
 */
const prismColors = {
  token: `#fff`,
  languageJavascript: `#e8696b`,
  javascript: `#e8696b`,
  background: `#292c34`,
  comment: `#5e6a76`,
  string: `#a8e2a8`,
  var: `#b3bac5`,
  number: `#e4854d`,
  constant: `#b3bac5`,
  plain: `#fff`,
  doctype: `#e8696b`,
  tag: `#e8696b`,
  keyword: `#d49fd4`,
  boolean: `#ff5874`,
  function: `#5F8DC3`,
  parameter: `#F9965D`,
  className: `#ffcf74`,
  attrName: `#bf87ba`,
  attrValue: `#a8e2a8`,
  interpolation: `#fff`,
  punctuation: `#5FA8AA`,
  ["maybe-class-name"]: `#fff`,
  property: `#80cbc4`,
  propertyAccess: `#fff`,
  namespace: `#b2ccd6`,
  highlight: `rgba(255,255,255,0.07)`,
  highlightBorder: `#e1bde2`,
  dom: `#5F8DC3`,
  operator: `#5FA8AA`,
}

const sharedTheme = {
  /**
   * Easing thanks to Benjamin De Cock
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
    serif: "vvv-serif, serif",
    sans: "vvv-sans, sans-serif",
    monospace: `Consolas, Menlo, Monaco, source-code-pro, Courier New, monospace`,
  },
  fontFeatureSettings: {
    serif: "'calt', 'kern', 'liga', 'onum'",
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
  },
  lineHeight: {
    body: "1.5",
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
}

const lightVars = {
  ...sharedTheme,
  color: {
    primary: "#000",
    grey: "#73737D",
    background: "#fafafa",
    accent: "#6166DC",
    bodyText: "#08080B",
    card: "#fff",
    horizontalRule: "rgba(8, 8, 11, 0.15)",
    prism: prismColors,
  },
}

/**
 * Dark mode, applied via placing the class `LIGHT_COLOR_MODE_CLASS` at the top of the document tree.
 */
export const lightColorMode = createGlobalTheme(
  `.${LIGHT_COLOR_MODE_CLASS}:root`,
  tokens,
  lightVars,
)

const darkVars = {
  ...sharedTheme,
  color: {
    primary: "#c7ccd5",
    grey: "#73737D",
    background: "#111216",
    accent: "#E9DAAC",
    bodyText: "#c7ccd5",
    card: "#1D2128",
    horizontalRule: "rgba(255, 255, 255, 0.15)",
    prism: prismColors,
  },
}

/**
 * Dark mode, applied via placing the class `DARK_COLOR_MODE_CLASS` at the top of the document tree.
 */
export const darkColorMode = createGlobalTheme(
  `.${DARK_COLOR_MODE_CLASS}:root`,
  tokens,
  darkVars,
)

/**
 * System mode, the default (active when no color mode class has been applied).
 * In this mode, the user's `prefers-color-scheme` setting will determine the color mode.
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
  phone: "(max-width: 376px)",
  phablet: "(max-width: 540px)",
  tablet: "(max-width: 735px)",
  desktop: "(max-width: 1070px)",
  desktopMedium: "(max-width: 1280px)",
  desktopLarge: "(max-width: 1440px)",
}

const unresponiveProperties = defineProperties({
  properties: {
    fontFamily: tokens.font,
    fontFeatureSettings: tokens.fontFeatureSettings,
  },
  shorthands: {
    font: ["fontFamily", "fontFeatureSettings"],
  },
})

const responsiveProperties = defineProperties({
  conditions: {
    phone: { "@media": "screen and (max-width: 376px)" },
    phablet: { "@media": "screen and (max-width: 540px)" },
    tablet: { "@media": "screen and (max-width: 735px)" },
    desktop: { "@media": "screen and (max-width: 1070px)" },
    desktopMedium: { "@media": "screen and (max-width: 1280px)" },
    desktopLarge: { "@media": "screen and (max-width: 1440px)" },
    desktopSuperLarge: {},
  },
  defaultCondition: "desktopSuperLarge",
  properties: {
    fontSize: tokens.fontSize,
    lineHeight: tokens.lineHeight,
    fontWeight: tokens.fontWeight,
  },
  shorthands: {
    text: ["fontSize", "lineHeight"],
  },
})

export const sprinkles = createSprinkles(
  unresponiveProperties,
  responsiveProperties,
)

export type Sprinkles = Parameters<typeof sprinkles>[0]
