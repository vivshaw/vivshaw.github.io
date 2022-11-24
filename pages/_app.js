import { ThemeProvider } from "theme-ui";
import { ColorModeProvider } from "@theme-ui/color-modes";
import theme from "@theme/index";
import { MDXProvider } from "@mdx-js/react";

import Anchor from "@components/Anchor";
import Blockquote from "@components/Blockquote";
import Code from "@components/Code";
import Headings from "@components/Headings";
import HorizontalRule from "@components/HorizontalRule";
import Lists from "@components/Lists";
import Paragraph from "@components/Paragraph";
import Tables from "@components/Tables";
import { ImageZoom } from "@components/Image";
import Figcaption from "@components/Figcaption";

const components = {
  img: ImageZoom,
  a: Anchor,
  blockquote: Blockquote,
  h1: Headings.h2, // h1 reserved article title
  h2: Headings.h2,
  h3: Headings.h3,
  h4: Headings.h4,
  h5: Headings.h5,
  h6: Headings.h6,
  hr: HorizontalRule,
  ul: Lists.ul,
  ol: Lists.ol,
  p: Paragraph,
  code: Code.Prism,
  pre: Code.Pre,
  table: Tables.Table,
  thead: Tables.Head,
  th: Tables.HeadCell,
  td: Tables.Cell,
  figcaption: Figcaption,
};

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <ColorModeProvider>
        <MDXProvider components={components}>
          <Component {...pageProps} />
        </MDXProvider>
      </ColorModeProvider>
    </ThemeProvider>
  );
}
