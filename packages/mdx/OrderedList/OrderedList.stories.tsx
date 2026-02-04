import type { Meta, StoryObj } from "@storybook/react"
import { OrderedList } from "./OrderedList"

const meta = {
  title: "Components/OrderedList",
  component: OrderedList,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
} satisfies Meta<typeof OrderedList>

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
