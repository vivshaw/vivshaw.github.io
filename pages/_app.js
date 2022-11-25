import { ThemeProvider } from "theme-ui";
import { ColorModeProvider } from "@theme-ui/color-modes";
import theme from "@theme/index";
import { MDXProvider } from "@mdx-js/react";
import Script from "next/script";

import Anchor from "@components/Anchor";
import Blockquote from "@components/Blockquote";
import Code from "@components/Code";
import Figcaption from "@components/Figcaption";
import Headings from "@components/Headings";
import HorizontalRule from "@components/HorizontalRule";
import Lists from "@components/Lists";
import Paragraph from "@components/Paragraph";
import Tables from "@components/Tables";

const components = {
  a: Anchor,
  blockquote: Blockquote,
  code: Code.Prism,
  figcaption: Figcaption,
  h1: Headings.h2, // h1 reserved for article title
  h2: Headings.h2,
  h3: Headings.h3,
  h4: Headings.h4,
  h5: Headings.h5,
  h6: Headings.h6,
  hr: HorizontalRule,
  ul: Lists.ul,
  ol: Lists.ol,
  p: Paragraph,
  pre: Code.Pre,
  table: Tables.Table,
  th: Tables.HeadCell,
  thead: Tables.Head,
  td: Tables.Cell,
};

const themeUIDarkModeWorkaroundScript = `
    (function() {
      try {
        var mode = localStorage.getItem('theme-ui-color-mode');
        if (!mode) {
          localStorage.setItem('theme-ui-color-mode', 'light');
        }
      } catch (e) {}
    })();
  `;

export default function App({ Component, pageProps }) {
  return (
    <>
      <Script id="theme-ui-dark-mode">{themeUIDarkModeWorkaroundScript}</Script>

      <ThemeProvider theme={theme}>
        <ColorModeProvider>
          <MDXProvider components={components}>
            <Component {...pageProps} />
          </MDXProvider>
        </ColorModeProvider>
      </ThemeProvider>
    </>
  );
}
