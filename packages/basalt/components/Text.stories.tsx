import type { Meta, StoryObj } from "@storybook/react"

import { Text } from "./Text"

const sampleText =
  "The quick brown fox jumps over the lazy dog. Pack my box with five dozen liquor jugs."

const meta = {
  title: "Components/Text",
  component: Text,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
  args: {
    children: sampleText,
  },
  argTypes: {
    font: {
      control: { type: "radio" },
      description: "Font family to use",
      options: ["serif", "sans"],
    },
    size: {
      control: { type: "radio" },
      description: "Text size variant",
      options: ["normal", "small"],
    },
    as: {
      control: { type: "select" },
      description: "HTML element to render (polymorphic)",
      options: ["p", "span", "div", "label"],
    },
  },
} satisfies Meta<typeof Text>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const SerifNormal: Story = {
  args: {
    font: "serif",
    size: "normal",
  },
}

export const SerifSmall: Story = {
  args: {
    font: "serif",
    size: "small",
  },
}

export const SansNormal: Story = {
  args: {
    font: "sans",
    size: "normal",
  },
}

export const SansSmall: Story = {
  args: {
    font: "sans",
    size: "small",
  },
}

/**
 * text supports inline formatting elements like `<strong>` and `<em>`.
 */
export const WithFormatting: Story = {
  args: {
    children: (
      <>
        This text has <strong>bold</strong> and <em>italic</em> formatting, as
        well as{" "}
        <strong>
          <em>bold italic</em>
        </strong>{" "}
        combined.
      </>
    ),
  },
}

/**
 * text can be rendered as different HTML elements using the `as` prop.
 */
export const AsSpan: Story = {
  args: {
    as: "span",
    children: "This is a <span> element",
  },
}
