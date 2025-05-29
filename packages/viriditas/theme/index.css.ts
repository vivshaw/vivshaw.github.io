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
    fontSize: {
      xs: null,
      sm: null,
      base: null,
      lg: null,
      xl: null,
      "2xl": null,
      "3xl": null,
      "4xl": null,
      "5xl": null,
      "6xl": null,
      "7xl": null,
    },
    lineHeight: {
      xs: null,
      sm: null,
      base: null,
      lg: null,
      xl: null,
      "2xl": null,
      "3xl": null,
      "4xl": null,
      "5xl": null,
      "6xl": null,
      "7xl": null,
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

// TODO: Create a fallback for Alegreya and Alegreya Sans?
// globalFontFace(ORPHEUS_FALLBACK, {
//   src: "local(Times New Roman)",
//   sizeAdjust: "98%",
//   ascentOverride: "117%",
//   descentOverride: "45%",
//   lineGapOverride: "normal",
// })

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
    serif: "Alegreya, serif",
    sans: "'Alegreya Sans', sans-serif",
    monospace: `Consolas, Menlo, Monaco, source-code-pro, Courier New, monospace`,
  },
  fontSize: {
    xs: "0.75rem", // 12px
    sm: "0.875rem", // 14px
    base: "1rem", // 16px
    lg: "1.125rem", // 18px
    xl: "1.25rem", // 20px
    "2xl": "1.5rem", // 24px
    "3xl": "1.875rem", // 30px
    "4xl": "2.25rem", // 36px
    "5xl": "3rem", // 48px
    "6xl": "3.75rem", // 60px
    "7xl": "4.5rem", // 72px
  },
  lineHeight: {
    xs: "calc(1 / 0.75)",
    sm: "calc(1.25 / 0.875)",
    base: "calc(1.5 / 1)",
    lg: "calc(1.75 / 1.125)",
    xl: "calc(1.75 / 1.25)",
    "2xl": "calc(2 / 1.5)",
    "3xl": "calc(2.25 / 1.875)",
    "4xl": "calc(2.5 / 2.25)",
    "5xl": "1",
    "6xl": "1",
    "7xl": "1",
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
    primary: "#fff",
    grey: "#73737D",
    background: "#111216",
    accent: "#E9DAAC",
    bodyText: "#fff",
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
