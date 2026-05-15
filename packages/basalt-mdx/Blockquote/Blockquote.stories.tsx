import type { Meta, StoryObj } from "@storybook/react";

import { Paragraph } from "../Paragraph/Paragraph";
import { Blockquote } from "./Blockquote";

const meta = {
  title: "Components/Blockquote",
  component: Blockquote,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
} satisfies Meta<typeof Blockquote>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <Paragraph>
        Experience shows that it is not at all difficult for philosophy to begin. Far from it. It
        begins, in fact, with nothing and therefore can always begin. But it is always difficult for
        philosophy and philosophers to stop.
        <br />— Søren Kierkegaard
      </Paragraph>
    ),
  },
};
