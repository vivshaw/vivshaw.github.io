import type { Meta, StoryObj } from "@storybook/react"

import { Box } from "./Box"

const meta = {
  title: "Components/Box",
  component: Box,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: {
    children: "Lorem ipsum dolor sit amet.",
    fontFamily: "serif",
  },
} satisfies Meta<typeof Box>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const Big: Story = {
  args: {
    children: "Lorem ipsum dolor sit amet.",
    fontFamily: "serif",
    text: "4xl",
  },
}
