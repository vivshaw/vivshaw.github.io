import type { Meta, StoryObj } from "@storybook/react"

import { Figcaption } from "./Figcaption"

const meta = {
  title: "Components/Figcaption",
  component: Figcaption,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
  args: {
    children: "Figure 1: An example caption for an image or diagram.",
  },
} satisfies Meta<typeof Figcaption>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
