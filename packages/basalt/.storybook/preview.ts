import type { Preview } from "@storybook/react"
import { withThemeByClassName } from "@storybook/addon-themes"

// import theme first to ensure @font-face declarations are registered
import "../theme/index.css"
import "../reset.css"
import { DARK_COLOR_MODE_CLASS, LIGHT_COLOR_MODE_CLASS } from "../config"

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
    viewport: {
      viewports: basaltViewports,
      defaultViewport: "desktop",
    },
  },
  decorators: [
    withThemeByClassName({
      themes: {
        light: LIGHT_COLOR_MODE_CLASS,
        dark: DARK_COLOR_MODE_CLASS,
      },
      defaultTheme: "light",
    }),
  ],
}

export default preview
