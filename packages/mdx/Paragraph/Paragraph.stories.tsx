import type { Meta, StoryObj } from "@storybook/react"

import { Paragraph } from "./Paragraph"

const meta = {
  title: "Components/Paragraph",
  component: Paragraph,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
  args: {
    children: (
      <>
        The moment of the rose and the moment of the yew-tree <br />
        Are of equal duration. A people without history <br />
        Is not redeemed from time, for history is a pattern <br />
        Of timeless moments. So, while the light fails <br />
        On a winter's afternoon, in a secluded chapel <br />
        History is now and England. <br />— <em>Little Gidding</em>, T.S. Eliot
      </>
    ),
  },
} satisfies Meta<typeof Paragraph>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
