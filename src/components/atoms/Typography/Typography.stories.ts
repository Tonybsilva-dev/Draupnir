import { Meta, StoryObj } from "@storybook/react";

import Typography, { type TypographyProps } from "./Typography";

const meta = {
  title: "Components/Atoms/Typography",
  component: Typography,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    className: {
      type: "string",
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "A Text Example",
    size: "md",
  },
};

export const TextHeadingH1: Story = {
  args: {
    children: "Texto",
    element: "h1",
    size: "title1",
    className: "font-extrabold",
  },
};

export const TextHeadingH2: Story = {
  args: {
    children: "Texto",
    element: "h2",
    size: "title2",
    className: "font-extrabold",
  },
};

export const TextHeadingH3: Story = {
  args: {
    children: "Texto",
    element: "h3",
    size: "title3",
    className: "font-extrabold",
  },
};