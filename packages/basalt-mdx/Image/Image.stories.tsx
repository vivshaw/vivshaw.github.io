import type { Meta, StoryObj } from "@storybook/react";

import placeholderImage from "../.storybook/assets/placeholder.jpg";
import { Image } from "./Image";

const meta = {
  title: "Components/Image",
  component: Image,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
} satisfies Meta<typeof Image>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    src: placeholderImage,
    alt: "A placeholder image",
  },
};
