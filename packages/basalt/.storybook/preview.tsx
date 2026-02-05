import {
  DocsContainer as BaseContainer,
  type DocsContainerProps,
} from "@storybook/blocks"
import { addons } from "@storybook/preview-api"
import { type Preview } from "@storybook/react"
import { create, themes } from "@storybook/theming"
import React, { useEffect, useState } from "react"
import { DARK_MODE_EVENT_NAME } from "storybook-dark-mode"

import { DARK_THEME_CLASS, LIGHT_THEME_CLASS } from ".."
// import Basalt CSS (fonts + tokens + reset) to be used to style its own docs
import "../css/index.css"

const channel = addons.getChannel()

// Basalt color palette
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
}

// Basalt Storybook themes
const basaltLight = create({
  ...themes.light,
  base: "light",

  // brand
  colorPrimary: palette["base-550"],
  colorSecondary: palette["base-500"],

  // UI backgrounds
  appBg: palette["base-100"],
  appContentBg: palette["base-100"],
  appPreviewBg: palette["base-100"],
  appBorderColor: palette["base-300"],

  // text
  textColor: palette["base-900"],
  textInverseColor: palette["base-50"],

  // toolbar
  barBg: palette["base-100"],
  barTextColor: palette["base-900"],
  barSelectedColor: palette["base-550"],
  barHoverColor: palette["base-500"],

  // form inputs
  inputBg: palette["base-50"],
  inputBorder: palette["base-300"],
  inputTextColor: palette["base-900"],
})

const basaltDark = create({
  ...themes.dark,
  base: "dark",

  // brand
  colorPrimary: palette["base-300"],
  colorSecondary: palette["base-400"],

  // UI backgrounds
  appBg: palette["base-700"],
  appContentBg: palette["base-700"],
  appPreviewBg: palette["base-700"],
  appBorderColor: palette["base-500"],

  // text
  textColor: palette["base-200"],
  textInverseColor: palette["base-900"],

  // toolbar
  barBg: palette["base-700"],
  barTextColor: palette["base-200"],
  barSelectedColor: palette["base-300"],
  barHoverColor: palette["base-400"],

  // Form inputs
  inputBg: palette["base-600"],
  inputBorder: palette["base-500"],
  inputTextColor: palette["base-200"],
})

/**
 * custom DocsContainer that syncs docs theme with the dark mode toggle.
 * see:https://github.com/hipstersmoothie/storybook-dark-mode/issues/127
 */
function DocsContainer(props: DocsContainerProps) {
  const [darkMode, setDarkMode] = useState(() => {
    let initialDarkMode = false
    channel.emit(DARK_MODE_EVENT_NAME, (isDark: boolean) => {
      initialDarkMode = isDark
    })

    return initialDarkMode
  })

  useEffect(() => {
    const handleDarkMode = (isDark: boolean) => {
      console.log("handleDarkMode", isDark)
      setDarkMode(isDark)
    }

    channel.on(DARK_MODE_EVENT_NAME, handleDarkMode)

    return () => {
      channel.off(DARK_MODE_EVENT_NAME, handleDarkMode)
    }
  }, [])

  return (
    <BaseContainer {...props} theme={darkMode ? basaltDark : basaltLight} />
  )
}

// Basalt breakpoints: phone <= 540px, tablet >= 541px, desktop >= 736px
const basaltViewports = {
  phone: {
    name: "Phone",
    styles: {
      width: "390px",
      height: "844px",
    },
  },
  tablet: {
    name: "Tablet",
    styles: {
      width: "640px",
      height: "900px",
    },
  },
  desktop: {
    name: "Desktop",
    styles: {
      width: "1280px",
      height: "800px",
    },
  },
}

const preview: Preview = {
  parameters: {
    backgrounds: { disable: true },
    darkMode: {
      classTarget: "html",
      darkClass: DARK_THEME_CLASS,
      lightClass: LIGHT_THEME_CLASS,
      stylePreview: true,
      dark: basaltDark,
      light: basaltLight,
    },
    docs: {
      container: DocsContainer,
    },
    viewport: {
      viewports: basaltViewports,
    },
    options: {
      storySort: {
        order: [
          "Tokens",
          ["Colors", "Typography", "Spacing", "Responsive"],
          "Components",
          ["Heading", "Text", "Link", "Pill"],
        ],
      },
    },
  },
}

export default preview
