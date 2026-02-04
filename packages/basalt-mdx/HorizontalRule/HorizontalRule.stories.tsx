import type { Meta, StoryObj } from "@storybook/react"

import { HorizontalRule } from "./HorizontalRule"

const meta = {
  title: "Components/HorizontalRule",
  component: HorizontalRule,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
} satisfies Meta<typeof HorizontalRule>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
