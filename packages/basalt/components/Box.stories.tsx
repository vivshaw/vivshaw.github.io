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
    sx: { fontFamily: "serif" },
  },
} satisfies Meta<typeof Box>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithSpacing: Story = {
  args: {
    children: "Box with margin and padding",
    sx: {
      m: "4",
      p: "2",
    },
    style: { border: "1px solid currentColor" },
  },
}

export const WithGap: Story = {
  args: {
    sx: {
      gap: "4",
    },
    style: { border: "1px solid currentColor", display: "grid" },
    children: (
      <>
        <Box>First item</Box>
        <Box>Second item</Box>
        <Box>Third item</Box>
      </>
    ),
  },
}

export const WithDimensions: Story = {
  args: {
    sx: {
      width: "32",
      height: "16",
    },
    style: { border: "1px solid currentColor" },
    children: "Box with fixed dimensions",
  },
}
