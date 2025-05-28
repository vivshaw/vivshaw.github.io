import type { Meta, StoryObj } from "@storybook/react"

import { Link } from "./Link"

const meta = {
  title: "Components/Link",
  component: Link,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
  args: {
    href: "/",
    children: "Post Link",
  },
} satisfies Meta<typeof Link>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
