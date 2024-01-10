import { Meta, StoryObj } from "@storybook/react";

import Typography, { type TypographyProps } from "./Typography";

const meta: Meta<TypographyProps> = {
  title: "Design System/Atoms/Typography",
  component: Typography,
  argTypes: {
    className: {
      type: "string",
    },
  },
};

export default meta;

export const Primary: StoryObj<TypographyProps> = {
  args: {
    children: "A Text Example",
  },
};
