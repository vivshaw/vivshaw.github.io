import type { MDXComponents } from "mdx/types"

import { Anchor } from "#components/MDX/Anchor/Anchor"
import { Blockquote } from "#components/MDX/Blockquote/Blockquote"
import { CodeBlock } from "#components/MDX/CodeBlock/CodeBlock"
import { headings } from "#components/MDX/Headings/Headings"
import { Figcaption } from "#components/MDX/Figcaption/Figcaption"
import { HorizontalRule } from "#components/MDX/HorizontalRule/HorizontalRule"
import { ListItem } from "#components/MDX/ListItem/ListItem"
import { OrderedList } from "#components/MDX/OrderedList/OrderedList"
import { Paragraph } from "#components/MDX/Paragraph/Paragraph"
import { Table } from "#components/MDX/Table/Table"
import { TableCell } from "#components/MDX/TableCell/TableCell"
import { TableHead } from "#components/MDX/TableHead/TableHead"
import { TableHeadCell } from "#components/MDX/TableHeadCell/TableHeadCell"
import { UnorderedList } from "#components/MDX/UnorderedList/UnorderedList"

const customComponents = {
  a: Anchor,
  blockquote: Blockquote,
  figcaption: Figcaption,
  h1: headings.h2, // h1 reserved for blog post title
  h2: headings.h2,
  h3: headings.h3,
  h4: headings.h4,
  h5: headings.h5,
  h6: headings.h6,
  hr: HorizontalRule,
  li: ListItem,
  ol: OrderedList,
  p: Paragraph,
  pre: CodeBlock,
  table: Table,
  td: TableCell,
  th: TableHeadCell,
  thead: TableHead,
  ul: UnorderedList,
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    ...customComponents,
  }
}
