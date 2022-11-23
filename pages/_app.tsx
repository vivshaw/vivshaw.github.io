import { ThemeProvider } from "theme-ui";
import { ColorModeProvider } from "@theme-ui/color-modes";
import theme from "@theme/index";

export default function App({ Component, pageProps }) {
  console.log("In custom App...");
  return (
    <ThemeProvider theme={theme}>
      <ColorModeProvider>
        <h1>EY!!!!!!!!!!!!!!!!!!</h1>
        <Component {...pageProps} />
      </ColorModeProvider>
    </ThemeProvider>
  );
}
