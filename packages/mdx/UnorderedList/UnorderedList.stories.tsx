import type { Meta, StoryObj } from "@storybook/react"

import { UnorderedList } from "./UnorderedList"

const meta = {
  title: "Components/UnorderedList",
  component: UnorderedList,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
} satisfies Meta<typeof UnorderedList>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: (
      <>
        <li>First item</li>
        <li>Second item</li>
        <li>Third item</li>
      </>
    ),
  },
}
