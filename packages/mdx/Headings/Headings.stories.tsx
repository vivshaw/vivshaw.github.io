import type { Meta, StoryObj } from "@storybook/react"
import { H1, H2, H3, H4, H5, H6 } from "./Headings"

const meta: Meta = {
  title: "Components/Headings",
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "styled heading elements (`<h1>` through `<h6>`), for use in MDX. levels 4–6 use the same visual style as level 3.",
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Heading1: Story = {
  render: () => <H1>Heading Level 1</H1>,
  name: "h1",
}

export const Heading2: Story = {
  render: () => <H2>Heading Level 2</H2>,
  name: "h2",
}

export const Heading3: Story = {
  render: () => <H3>Heading Level 3</H3>,
  name: "h3",
}

export const Heading4: Story = {
  render: () => <H4>Heading Level 4</H4>,
  name: "h4",
}

export const Heading5: Story = {
  render: () => <H5>Heading Level 5</H5>,
  name: "h5",
}

export const Heading6: Story = {
  render: () => <H6>Heading Level 6</H6>,
  name: "h6",
}

export const AllLevels: Story = {
  render: () => (
    <div>
      <H1>Heading Level 1</H1>
      <H2>Heading Level 2</H2>
      <H3>Heading Level 3</H3>
      <H4>Heading Level 4</H4>
      <H5>Heading Level 5</H5>
      <H6>Heading Level 6</H6>
    </div>
  ),
  name: "All Levels",
}
