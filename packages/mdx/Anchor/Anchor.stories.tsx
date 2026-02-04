import type { Meta, StoryObj } from "@storybook/react"

import { Anchor } from "./Anchor"
import { Paragraph } from "../Paragraph/Paragraph"

const meta = {
  title: "Components/Anchor",
  component: Anchor,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
} satisfies Meta<typeof Anchor>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Paragraph>
      <Anchor href="https://example.com">A link to somewhere</Anchor>
    </Paragraph>
  ),
}
