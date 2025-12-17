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

// TODO: create font fallbacks?
// globalFontFace(FALLBACK_FONT, {
//   src: "local(Times New Roman)",
//   sizeAdjust: "98%",
//   ascentOverride: "117%",
//   descentOverride: "45%",
//   lineGapOverride: "normal",
// })

/**
 * theme contract for the Basalt design system.
 * all tokens used in the system are defined here.
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
       * colors for the Prism syntax highlighter.
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

/**
 * colors for the Prism syntax highlighter.
 * these are shared between the light and dark themes.
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
    serif: "vvv-serif, serif",
    sans: "vvv-sans, sans-serif",
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
    primary: "#000",
    grey: "#73737D",
    background: "#fafafa",
    accent: "#28282B",
    bodyText: "#08080B",
    card: "#fff",
    horizontalRule: "rgba(8, 8, 11, 0.15)",
    prism: prismColors,
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
    primary: "#c7ccd5",
    grey: "#73737D",
    background: "#111216",
    accent: "#b7bcb5",
    bodyText: "#c7ccd5",
    card: "#1D2128",
    horizontalRule: "rgba(255, 255, 255, 0.15)",
    prism: prismColors,
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

const unresponsiveProperties = defineProperties({
  properties: {
    color: tokens.color,
    display: ["block", "inline"],
    focusRing: {
      none: {
        outline: "none",
      },
      default: {
        borderRadius: tokens.sizing["1"],

        selectors: {
          "&:focus-visible": {
            outline: `${tokens.sizing["half"]} solid ${tokens.color.accent}`,
            outlineOffset: tokens.sizing["1"],
          },
        },
      },
    },
    fontFamily: tokens.font,
    fontFeatureSettings: tokens.fontFeatureSettings,
    text: {
      small: {
        fontSize: tokens.fontSize["100"],
        lineHeight: tokens.lineHeight["body"],

        "@media": {
          [breakpoints.desktop]: {
            fontSize: tokens.fontSize["200"],
          },
        },
      },
      body: {
        fontSize: tokens.fontSize["300"],
        lineHeight: tokens.lineHeight["body"],

        "@media": {
          [breakpoints.desktop]: {
            fontSize: tokens.fontSize["500"],
          },
        },
      },
      heading1: {
        fontSize: tokens.fontSize["500"],
        lineHeight: tokens.lineHeight["heading"],

        "@media": {
          [breakpoints.desktop]: {
            fontSize: tokens.fontSize["700"],
          },
        },
      },
      heading2: {
        fontSize: tokens.fontSize["400"],
        lineHeight: tokens.lineHeight["heading"],

        "@media": {
          [breakpoints.desktop]: {
            fontSize: tokens.fontSize["600"],
          },
        },
      },
    },
  },
  shorthands: {
    font: ["fontFamily", "fontFeatureSettings"],
  },
})

const responsiveProperties = defineProperties({
  conditions: {
    phone: {},
    tablet: { "@media": `screen and ${breakpoints.tablet}` },
    desktop: { "@media": `screen and ${breakpoints.desktop}` },
  },
  defaultCondition: "phone",
  properties: {
    fontSize: tokens.fontSize,
    lineHeight: tokens.lineHeight,
    fontWeight: tokens.fontWeight,
    margin: tokens.sizing,
    marginTop: tokens.sizing,
    marginRight: tokens.sizing,
    marginBottom: tokens.sizing,
    marginLeft: tokens.sizing,
    padding: tokens.sizing,
    paddingTop: tokens.sizing,
    paddingRight: tokens.sizing,
    paddingBottom: tokens.sizing,
    paddingLeft: tokens.sizing,
    gap: tokens.sizing,
    columnGap: tokens.sizing,
    rowGap: tokens.sizing,
    width: tokens.sizing,
    minWidth: tokens.sizing,
    maxWidth: tokens.sizing,
    height: tokens.sizing,
    minHeight: tokens.sizing,
    maxHeight: tokens.sizing,
    top: tokens.sizing,
    right: tokens.sizing,
    bottom: tokens.sizing,
    left: tokens.sizing,
  },
  shorthands: {
    m: ["margin"],
    mt: ["marginTop"],
    mr: ["marginRight"],
    mb: ["marginBottom"],
    ml: ["marginLeft"],
    mx: ["marginLeft", "marginRight"],
    my: ["marginTop", "marginBottom"],
    p: ["padding"],
    pt: ["paddingTop"],
    pr: ["paddingRight"],
    pb: ["paddingBottom"],
    pl: ["paddingLeft"],
    px: ["paddingLeft", "paddingRight"],
    py: ["paddingTop", "paddingBottom"],
  },
})

export const sprinkles = createSprinkles(
  unresponsiveProperties,
  responsiveProperties,
)

export type Sprinkles = Parameters<typeof sprinkles>[0]
