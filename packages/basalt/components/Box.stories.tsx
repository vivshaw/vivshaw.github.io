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
    sx: { color: "textDefault" },
    style: { border: "1px solid currentColor" },
  },
} satisfies Meta<typeof Box>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithSpacing: Story = {
  args: {
    children: "Box with margin and padding",
    style: { border: "1px solid currentColor" },
    sx: {
      color: "textDefault",
      m: "4",
      p: "2",
    },
  },
}

export const WithGap: Story = {
  args: {
    children: (
      <>
        <Box>First item</Box>
        <Box>Second item</Box>
        <Box>Third item</Box>
      </>
    ),
    style: { border: "1px solid currentColor", display: "grid" },
    sx: {
      color: "textDefault",
      gap: "4",
    },
  },
}

export const WithDimensions: Story = {
  args: {
    children: "Box with fixed dimensions",
    style: { border: "1px solid currentColor" },
    sx: {
      color: "textDefault",
      height: "16",
      width: "32",
    },
  },
}
