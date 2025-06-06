import type { Meta, StoryObj } from "@storybook/react"

import { Link } from "./Link"

const meta = {
  title: "Components/Link",
  component: Link,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  args: {
    href: "/",
    children: "Link Text",
  },
} satisfies Meta<typeof Link>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithSpacing: Story = {
  args: {
    children: "Link with margin",
    m: "4",
  },
}

export const WithPadding: Story = {
  args: {
    children: "Link with padding",
    p: "2",
    style: { border: "1px solid currentColor" },
  },
}

export const WithInlineSpacing: Story = {
  render: () => (
    <div>
      <Link href="/" mr="4">
        First link
      </Link>
      <Link href="/">Second link</Link>
    </div>
  ),
}

export const WithCustomFont: Story = {
  args: {
    children: "Link with custom font",
    font: "monospace",
    fontSize: "300",
  },
}
