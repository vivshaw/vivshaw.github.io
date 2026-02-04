import type { Meta, StoryObj } from "@storybook/react"

import { MdxBody } from "./MdxBody"
import { Anchor } from "../Anchor/Anchor"
import { Blockquote } from "../Blockquote/Blockquote"
import { CodeBlock } from "../CodeBlock/CodeBlock"
import { Figcaption } from "../Figcaption/Figcaption"
import { H1, H2, H3 } from "../Headings/Headings"
import { HorizontalRule } from "../HorizontalRule/HorizontalRule"
import { Image } from "../Image/Image"
import { OrderedList } from "../OrderedList/OrderedList"
import { Paragraph } from "../Paragraph/Paragraph"
import { Table } from "../Table/Table"
import { TableCell } from "../TableCell/TableCell"
import { TableHead } from "../TableHead/TableHead"
import { TableHeadCell } from "../TableHeadCell/TableHeadCell"
import { UnorderedList } from "../UnorderedList/UnorderedList"

import placeholderImage from "../.storybook/assets/placeholder.jpg"

const meta: Meta<typeof MdxBody> = {
  title: "Layout/MdxBody",
  component: MdxBody,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "a wrapper component that applies all MDX root styles. this kitchen sink demo shows how all the MDX components look together in context.",
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

/* Shiki token style helpers */
const token = (light: string, dark: string) =>
  ({ "--shiki-light": light, "--shiki-dark": dark }) as React.CSSProperties

const keyword = token("#AB5959", "#E46876")
const fn = token("#59873A", "#E6C384")
const punct = token("#999999", "#9A9A9A")
const variable = token("#B07D48", "#E6C384")
const type = token("#2E8F82", "#7AA89F")
const returnKw = token("#1E754F", "#E46876")
const string = token("#B5695977", "#D27E99")
const comment = token("#A0ADA0", "#737C73")

const shikiBg = {
  "--shiki-light-bg": "#ffffff",
  "--shiki-dark-bg": "#181616",
} as React.CSSProperties

export const KitchenSink: Story = {
  render: () => (
    <MdxBody>
      <H1>basalt-mdx Kitchen Sink</H1>

      <Paragraph>
        This story demonstrates every <code>basalt-mdx</code> component in
        context, rendered inside an <code>&lt;MdxBody&gt;</code> wrapper — just
        like a real blog post.
      </Paragraph>

      <HorizontalRule />

      {/* headings */}
      <H2>Headings</H2>

      <Paragraph>The following heading levels are available:</Paragraph>

      <H1>First-Level Heading</H1>
      <H2>Second-Level Heading</H2>
      <H3>Third-Level Heading</H3>

      <HorizontalRule />

      {/* paragraphs and inline formatting */}
      <H2>Paragraphs and Inline Formatting</H2>

      <Paragraph>
        It is a truth universally acknowledged, that a single man in possession
        of a good fortune, <strong>must be in want of a wife</strong>. However
        little known the feelings or views of such a man may be on his first
        entering a neighbourhood, this truth is so well fixed in the minds of
        the surrounding families, that he is considered as the{" "}
        <em>rightful property</em> of some one or other of their daughters.
      </Paragraph>

      <Paragraph>
        You can combine{" "}
        <strong>
          bold and <em>italic</em> text
        </strong>{" "}
        together, or use <del>strikethrough</del> for deleted content. Inline{" "}
        <code>code</code> looks like this, useful for referencing things like{" "}
        <code>useState</code> or <code>className</code> in technical writing.
      </Paragraph>

      <HorizontalRule />

      {/* links */}
      <H2>Links</H2>

      <Paragraph>
        Here is{" "}
        <Anchor href="https://example.com">a link to an external site</Anchor>{" "}
        and here is{" "}
        <Anchor href="https://example.com" title="Example Domain">
          a link with a title
        </Anchor>
        .
      </Paragraph>

      <HorizontalRule />

      {/* blockquotes */}
      <H2>Blockquotes</H2>

      <Blockquote>
        <Paragraph>
          We hold these truths to be self-evident, that all men are created
          equal, that they are endowed by their Creator with certain unalienable
          Rights, that among these are Life, Liberty and the pursuit of
          Happiness.
        </Paragraph>
        <Paragraph>
          — <em>Declaration of Independence</em>, 1776
        </Paragraph>
      </Blockquote>

      <HorizontalRule />

      {/* lists */}
      <H2>Lists</H2>

      <H3>Unordered List</H3>

      <UnorderedList>
        <li>Call me Ishmael</li>
        <li>Some years ago — never mind how long precisely</li>
        <li>Having little or no money in my purse</li>
        <li>And see the watery part of the world</li>
      </UnorderedList>

      <H3>Ordered List</H3>

      <OrderedList>
        <li>In the beginning God created the heaven and the earth</li>
        <li>And the earth was without form, and void</li>
        <li>And darkness was upon the face of the deep</li>
        <li>And there was light</li>
      </OrderedList>

      <HorizontalRule />

      {/* code blocks */}
      <H2>Code Blocks</H2>

      <Paragraph>
        Inline code like <code>const x = 42</code> appears with a subtle
        background.
      </Paragraph>

      <Paragraph>Here is a code block with syntax highlighting:</Paragraph>

      <CodeBlock
        data-language="typescript"
        className="shiki shiki-themes vitesse-light kanagawa-dragon"
        style={shikiBg}
      >
        <code>
          <span className="line">
            <span style={keyword}>function</span>
            <span style={punct}> </span>
            <span style={fn}>fibonacci</span>
            <span style={punct}>(</span>
            <span style={variable}>n</span>
            <span style={punct}>: </span>
            <span style={type}>number</span>
            <span style={punct}>): </span>
            <span style={type}>number</span>
            <span style={punct}> {"{"}</span>
          </span>
          {"\n"}
          <span className="line">
            <span style={punct}>{"  "}</span>
            <span style={keyword}>if</span>
            <span style={punct}> (</span>
            <span style={variable}>n</span>
            <span style={punct}> {"<="} </span>
            <span style={variable}>1</span>
            <span style={punct}>) </span>
            <span style={returnKw}>return</span>
            <span style={punct}> </span>
            <span style={variable}>n</span>
          </span>
          {"\n"}
          <span className="line">
            <span style={punct}>{"  "}</span>
            <span style={returnKw}>return</span>
            <span style={punct}> </span>
            <span style={fn}>fibonacci</span>
            <span style={punct}>(</span>
            <span style={variable}>n</span>
            <span style={punct}> - </span>
            <span style={variable}>1</span>
            <span style={punct}>) + </span>
            <span style={fn}>fibonacci</span>
            <span style={punct}>(</span>
            <span style={variable}>n</span>
            <span style={punct}> - </span>
            <span style={variable}>2</span>
            <span style={punct}>)</span>
          </span>
          {"\n"}
          <span className="line">
            <span style={punct}>{"}"}</span>
          </span>
          {"\n\n"}
          <span className="line">
            <span style={keyword}>const</span>
            <span style={punct}> </span>
            <span style={variable}>result</span>
            <span style={punct}> = </span>
            <span style={fn}>fibonacci</span>
            <span style={punct}>(</span>
            <span style={variable}>10</span>
            <span style={punct}>)</span>
          </span>
          {"\n"}
          <span className="line">
            <span style={variable}>console</span>
            <span style={punct}>.</span>
            <span style={fn}>log</span>
            <span style={punct}>(</span>
            <span style={variable}>result</span>
            <span style={punct}>) </span>
            <span style={comment}>// 55</span>
          </span>
        </code>
      </CodeBlock>

      <HorizontalRule />

      {/* tables */}
      <H2>Tables</H2>

      <Table>
        <TableHead>
          <tr>
            <TableHeadCell>Author</TableHeadCell>
            <TableHeadCell>Work</TableHeadCell>
            <TableHeadCell>Year</TableHeadCell>
          </tr>
        </TableHead>
        <tbody>
          <tr>
            <TableCell>Jane Austen</TableCell>
            <TableCell>Pride and Prejudice</TableCell>
            <TableCell>1813</TableCell>
          </tr>
          <tr>
            <TableCell>Herman Melville</TableCell>
            <TableCell>Moby-Dick</TableCell>
            <TableCell>1851</TableCell>
          </tr>
          <tr>
            <TableCell>Lewis Carroll</TableCell>
            <TableCell>Alice&apos;s Adventures in Wonderland</TableCell>
            <TableCell>1865</TableCell>
          </tr>
          <tr>
            <TableCell>Mary Shelley</TableCell>
            <TableCell>Frankenstein</TableCell>
            <TableCell>1818</TableCell>
          </tr>
        </tbody>
      </Table>

      <HorizontalRule />

      {/* images */}
      <H2>Images</H2>

      <Image src={placeholderImage} alt="A placeholder image" />

      <Figcaption>Figure 1: A placeholder image.</Figcaption>

      <HorizontalRule />

      <Paragraph>
        That concludes this kitchen sink of MDX components. If something looks
        wrong, there&apos;s probably a bug in the styles!
      </Paragraph>
    </MdxBody>
  ),
}
