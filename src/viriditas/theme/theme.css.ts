import {
  createGlobalThemeContract,
  createGlobalTheme,
  globalFontFace,
  globalStyle,
  assignVars,
} from "@vanilla-extract/css"

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

    /**
     * Typography tokens.
     */
    font: {
      display: null,
      book: null,
      sans: null,
      monospace: null,
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

export const ORPHEUS_FALLBACK = "__times_orpheus_fallback"

globalFontFace(ORPHEUS_FALLBACK, {
  src: "local(Times New Roman)",
  sizeAdjust: "98%",
  ascentOverride: "117%",
  descentOverride: "45%",
  lineGapOverride: "normal",
})

const sharedTheme = {
  font: {
    display: `orpheuspro, ${ORPHEUS_FALLBACK}, Serif`,
    book: "Georgia, serif",
    sans: "'SF Pro Display', '-apple-system', 'BlinkMacSystemFont', 'San Francisco', 'Helvetica Neue', 'Helvetica', 'Ubuntu', 'Roboto', 'Noto', 'Segoe UI', 'Arial', sans-serif",
    monospace: `"Operator Mono", Consolas, Menlo, Monaco, source-code-pro, Courier New, monospace`,
  },
  motion: {
    colorModeTransition:
      "background 0.25s var(--ease-in-out-quad), color 0.25s var(--ease-in-out-quad)",
    hoverTransition: "border-color 0.1s ease-in, opacity 0.1s ease-in",
  },
}

export const LIGHT_COLOR_MODE_CLASS = "vvv-light"
export const DARK_COLOR_MODE_CLASS = "vvv-dark"
export const SYSTEM_COLOR_MODE_CLASS = "vvv-prefers"

/**
 * The key in `localStorage` that Viriditas uses to store its color mode
 */
export const COLOR_MODE_STORAGE_KEY = "viriditas-color-theme"

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
 * System mode, applied via placing the class `SYSTEM_COLOR_MODE_CLASS` at the top of the document tree.
 * In this mode, the user's `prefers-color-scheme` setting will determine the color mode.
 */
export const systemColorMode = globalStyle(`.${SYSTEM_COLOR_MODE_CLASS}`, {
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
}
