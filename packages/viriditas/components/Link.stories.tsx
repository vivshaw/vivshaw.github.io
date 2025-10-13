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
    sx: { m: "4" },
  },
}

export const WithPadding: Story = {
  args: {
    children: "Link with padding",
    style: { border: "1px solid currentColor" },
    sx: { p: "2" },
  },
}

export const WithInlineSpacing: Story = {
  render: () => (
    <div>
      <Link sx={{ mr: "4" }} href="/">
        First link
      </Link>
      <Link href="/">Second link</Link>
    </div>
  ),
}

export const WithCustomFont: Story = {
  args: {
    children: "Link with custom font",
    sx: {
      font: "monospace",
      fontSize: "300",
    },
  },
}
