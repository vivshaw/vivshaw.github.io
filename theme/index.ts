import merge from "lodash/merge";
import colors from "./colors";
import tags from "./tags";

const breakpoints = [
  ["phone", 376],
  ["phablet", 540],
  ["tablet", 735],
  ["desktop", 1070],
  ["desktop_medium", 1280],
];

const fonts = {
  serif: "orpheuspro, Georgia, Serif",
  book: "Georgia, serif",
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
