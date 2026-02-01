import type { Meta, StoryObj } from "@storybook/react"

import { Heading } from "./Heading"

const meta = {
  title: "Components/Heading",
  component: Heading,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
  args: {
    children: "The quick brown fox jumps over the lazy dog",
  },
  argTypes: {
    as: {
      control: { type: "select" },
      description: "Semantic HTML element to render",
      options: ["h1", "h2", "h3", "h4", "h5", "h6"],
    },
    level: {
      control: { type: "select" },
      description:
        "Visual heading level (1-3 have distinct styles, 4-6 match level 3)",
      options: ["1", "2", "3", "4", "5", "6"],
    },
  },
} satisfies Meta<typeof Heading>

export default meta
type Story = StoryObj<typeof meta>

export const Level1: Story = {
  args: {
    level: "1",
  },
}

export const Level2: Story = {
  args: {
    level: "2",
  },
}

export const Level3: Story = {
  args: {
    level: "3",
  },
}

/**
 * all heading levels displayed together for comparison.
 * note that levels 4-6 use the same visual style as level 3.
 */
export const AllLevels: Story = {
  args: {
    level: "1",
  },
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <Heading level="1">Heading Level 1</Heading>
      <Heading level="2">Heading Level 2</Heading>
      <Heading level="3">Heading Level 3</Heading>
      <Heading level="4">Heading Level 4 (same style as 3)</Heading>
      <Heading level="5">Heading Level 5 (same style as 3)</Heading>
      <Heading level="6">Heading Level 6 (same style as 3)</Heading>
    </div>
  ),
}

/**
 * the `as` prop allows you to override the semantic element
 * while keeping the visual style. useful for accessibility
 * when heading hierarchy doesn't match visual hierarchy.
 */
export const SemanticOverride: Story = {
  args: {
    as: "h2",
    children: "Looks like h1, but is an <h2> element",
    level: "1",
  },
}
