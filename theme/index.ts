import merge from "lodash/merge";
import { Merriweather } from "next/font/google";

import colors from "./colors";
import tags from "./tags";

const breakpoints = [
  ["phone_small", 320],
  ["phone", 376],
  ["phablet", 540],
  ["tablet", 735],
  ["desktop", 1070],
  ["desktop_medium", 1280],
  ["desktop_large", 1440],
];

const merriweather = Merriweather({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
});

const fonts = {
  serif: `${merriweather.style.fontFamily}, Georgia, Serif`,
  sansSerif:
    "'SF Pro Display', '-apple-system', 'BlinkMacSystemFont', 'San Francisco', 'Helvetica Neue', 'Helvetica', 'Ubuntu', 'Roboto', 'Noto', 'Segoe UI', 'Arial', sans-serif",
  monospace: `"Operator Mono", Consolas, Menlo, Monaco, source-code-pro, Courier New, monospace`,
};

const colorModeTransition =
  "background 0.25s var(--ease-in-out-quad), color 0.25s var(--ease-in-out-quad)";

export default merge({
  initialColorMode: "light",
  useCustomProperties: true,
  colorModeTransition,
  colors,
  fonts,
  breakpoints,
  tags,
});
