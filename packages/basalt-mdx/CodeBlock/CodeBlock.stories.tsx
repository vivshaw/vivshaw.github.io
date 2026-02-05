import type { Meta, StoryObj } from "@storybook/react"

import { CodeBlock } from "./CodeBlock"

const meta = {
  title: "Components/CodeBlock",
  component: CodeBlock,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
} satisfies Meta<typeof CodeBlock>

export default meta
type Story = StoryObj<typeof meta>

/* Shiki token style helpers — just set the CSS custom properties that
   CodeBlock.module.css reads for light/dark theme switching. */
const token = (light: string, dark: string) =>
  ({ "--shiki-light": light, "--shiki-dark": dark }) as React.CSSProperties

const keyword = token("#AB5959", "#E46876")
const fn = token("#59873A", "#E6C384")
const punct = token("#999999", "#9A9A9A")
const variable = token("#B07D48", "#E6C384")
const type = token("#2E8F82", "#7AA89F")
const returnKw = token("#1E754F", "#E46876")
const string = token("#B5695977", "#D27E99")

/**
 * Pre-highlighted HTML matching Shiki's dual-theme output format,
 * using the vitesse-light / kanagawa-dragon themes from the site config.
 */
export const Default: Story = {
  render: () => (
    <CodeBlock
      data-language="typescript"
      className="shiki shiki-themes vitesse-light kanagawa-dragon"
      style={
        {
          "--shiki-light-bg": "#ffffff",
          "--shiki-dark-bg": "#181616",
        } as React.CSSProperties
      }
    >
      <code>
        <span className="line">
          <span style={keyword}>function</span>
          <span style={punct}> </span>
          <span style={fn}>greet</span>
          <span style={punct}>(</span>
          <span style={variable}>name</span>
          <span style={punct}>: </span>
          <span style={type}>string</span>
          <span style={punct}>): </span>
          <span style={type}>string</span>
          <span style={punct}> {"{"}</span>
        </span>
        {"\n"}
        <span className="line">
          <span style={punct}>{"  "}</span>
          <span style={returnKw}>return</span>
          <span style={string}> {"`"}Hello, </span>
          <span style={punct}>{"${"}</span>
          <span style={variable}>name</span>
          <span style={punct}>{"}"}</span>
          <span style={string}>!{"`"}</span>
        </span>
        {"\n"}
        <span className="line">
          <span style={punct}>{"}"}</span>
        </span>
      </code>
    </CodeBlock>
  ),
}
