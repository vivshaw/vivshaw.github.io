import type { Meta, StoryObj } from "@storybook/react"

import { Pill } from "./Pill"

const meta = {
  title: "Components/Pill",
  component: Pill,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: {
    children: "Tag",
  },
  argTypes: {
    as: {
      control: { type: "select" },
      description: "HTML element to render (polymorphic)",
      options: ["span", "a", "button"],
    },
  },
} satisfies Meta<typeof Pill>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

/**
 * pills can be used as links by setting `as="a"`.
 */
export const AsLink: Story = {
  args: {
    as: "a",
    children: "Visit site",
    href: "https://example.com",
    rel: "noopener noreferrer",
    target: "_blank",
  },
}

/**
 * pills can be used as buttons by setting `as="button"`.
 */
export const AsButton: Story = {
  args: {
    as: "button",
    children: "Click me",
    onClick: () => alert("Clicked!"),
  },
}

/**
 * multiple pills displayed together, as commonly used for tags or social links.
 */
export const PillGroup: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "0.5rem",
        alignItems: "center",
      }}
    >
      <Pill>TypeScript</Pill>
      <Pill>React</Pill>
      <Pill>Next.js</Pill>
      <Pill>Vanilla Extract</Pill>
    </div>
  ),
}
