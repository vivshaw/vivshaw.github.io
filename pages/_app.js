import { ThemeProvider } from "theme-ui"
import { ColorModeProvider } from "@theme-ui/color-modes"
import theme from "@theme/index"
import { MDXProvider } from "@mdx-js/react"
import Script from "next/script"

import { CodePre } from "@components/MDX/Code/CodePre"
import { CodePrism } from "@components/MDX/Code/CodePrism"
import { Figcaption } from "@components/MDX/Figcaption"
import { headings } from "@components/MDX/Headings"
import { Anchor } from "@components/MDX/Anchor"
import { Blockquote } from "@components/MDX/Blockquote"
import { HorizontalRule } from "@components/MDX/HorizontalRule"
import { OrderedList } from "@components/MDX/Lists/OrderedList"
import { UnorderedList } from "@components/MDX/Lists/UnorderedList"
import { Paragraph } from "@components/MDX/Paragraph"
import { Table } from "@components/MDX/Tables/Table"
import { TableCell } from "@components/MDX/Tables/TableCell"
import { TableHead } from "@components/MDX/Tables/TableHead"
import { TableHeadCell } from "@components/MDX/Tables/TableHeadCell"
import {
  ViriditasProvider,
  VIRIDITAS_THEME_STORAGE_KEY,
} from "@viriditas/context"

const components = {
  a: Anchor,
  blockquote: Blockquote,
  code: CodePrism,
  figcaption: Figcaption,
  h1: headings.h2, // h1 reserved for article title
  h2: headings.h2,
  h3: headings.h3,
  h4: headings.h4,
  h5: headings.h5,
  h6: headings.h6,
  hr: HorizontalRule,
  ul: UnorderedList,
  ol: OrderedList,
  p: Paragraph,
  pre: CodePre,
  table: Table,
  th: TableHeadCell,
  thead: TableHead,
  td: TableCell,
}

const themeUIDarkModeWorkaroundScript = `
    (function() {
      try {
        var themeUiMode = localStorage.getItem('theme-ui-color-mode');
        if (!themeUiMode) {
          localStorage.setItem('theme-ui-color-mode', 'light');
        }
      } catch (e) {}
    })();
  `

export default function App({ Component, pageProps }) {
  return (
    <>
      <Script id="theme-ui-dark-mode">{themeUIDarkModeWorkaroundScript}</Script>

      <ViriditasProvider>
        <ThemeProvider theme={theme}>
          <ColorModeProvider>
            <MDXProvider components={components}>
              <Component {...pageProps} />
            </MDXProvider>
          </ColorModeProvider>
        </ThemeProvider>
      </ViriditasProvider>
    </>
  )
}
