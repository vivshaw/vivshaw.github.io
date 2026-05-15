// import Basalt CSS (fonts + tokens + reset) to be used to style its own docs
import "../css/index.css";

import { DocsContainer as BaseContainer, type DocsContainerProps } from "@storybook/blocks";
import { addons } from "@storybook/preview-api";
import { type Preview } from "@storybook/react";
import { create, themes } from "@storybook/theming";
import React, { useEffect, useState } from "react";
import { DARK_MODE_EVENT_NAME } from "storybook-dark-mode";

import { DARK_THEME_CLASS, LIGHT_THEME_CLASS } from "..";

const channel = addons.getChannel();

// Basalt color palette
const palette = {
  "base-100": "#fafafb",
  "base-200": "#f5f5f4",
  "base-300": "#c7ccd1",
  "base-400": "#b7bdb4",
  "base-500": "#73737a",
  "base-600": "#484a53",
  "base-700": "#28282b",
  "base-800": "#1d2126",
  "base-900": "#111214",
  "base-1000": "#08080a",
};

// Basalt Storybook themes
const basaltLight = create({
  ...themes.light,
  base: "light",

  // brand
  colorPrimary: palette["base-700"],
  colorSecondary: palette["base-600"],

  // UI backgrounds
  appBg: palette["base-200"],
  appContentBg: palette["base-200"],
  appPreviewBg: palette["base-200"],
  appBorderColor: palette["base-400"],

  // text
  textColor: palette["base-1000"],
  textInverseColor: palette["base-100"],

  // toolbar
  barBg: palette["base-200"],
  barTextColor: palette["base-1000"],
  barSelectedColor: palette["base-700"],
  barHoverColor: palette["base-600"],

  // form inputs
  inputBg: palette["base-100"],
  inputBorder: palette["base-400"],
  inputTextColor: palette["base-1000"],
});

const basaltDark = create({
  ...themes.dark,
  base: "dark",

  // brand
  colorPrimary: palette["base-400"],
  colorSecondary: palette["base-500"],

  // UI backgrounds
  appBg: palette["base-900"],
  appContentBg: palette["base-900"],
  appPreviewBg: palette["base-900"],
  appBorderColor: palette["base-600"],

  // text
  textColor: palette["base-300"],
  textInverseColor: palette["base-1000"],

  // toolbar
  barBg: palette["base-900"],
  barTextColor: palette["base-300"],
  barSelectedColor: palette["base-400"],
  barHoverColor: palette["base-500"],

  // Form inputs
  inputBg: palette["base-800"],
  inputBorder: palette["base-600"],
  inputTextColor: palette["base-300"],
});

/**
 * custom DocsContainer that syncs docs theme with the dark mode toggle.
 * see:https://github.com/hipstersmoothie/storybook-dark-mode/issues/127
 */
function DocsContainer(props: DocsContainerProps) {
  const [darkMode, setDarkMode] = useState(() => {
    let initialDarkMode = false;
    channel.emit(DARK_MODE_EVENT_NAME, (isDark: boolean) => {
      initialDarkMode = isDark;
    });

    return initialDarkMode;
  });

  useEffect(() => {
    const handleDarkMode = (isDark: boolean) => {
      console.log("handleDarkMode", isDark);
      setDarkMode(isDark);
    };

    channel.on(DARK_MODE_EVENT_NAME, handleDarkMode);

    return () => {
      channel.off(DARK_MODE_EVENT_NAME, handleDarkMode);
    };
  }, []);

  return <BaseContainer {...props} theme={darkMode ? basaltDark : basaltLight} />;
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
};

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
};

export default preview;
