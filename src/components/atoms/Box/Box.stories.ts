import { Meta, StoryObj } from "@storybook/react";

import Box, { type BoxProps } from "./Box";

const meta: Meta<BoxProps> = {
  title: "Components/Atoms/Box",
  component: Box,
  parameters: {
    notes: "These are notes for the Box stories",
    info: "This is info for the Box stories",
  },
  argTypes: {
    children: { type: "string" },
    type: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'dark', 'alert', 'success', 'error', 'info'],
      description: "Variação de cor/estilo da Box.",
      table: {
        type: { summary: '"primary" | "secondary" | "dark" | "alert" | "success" | "error" | "info"' },
        defaultValue: { summary: 'primary' },
      },
    },
    rounded: {
      control: {
        type: "boolean",
        description:
          "Determines if the box should have rounded corners for a softer look.",
      },
    },
    border: {
      control: {
        type: "boolean",
        description:
          "Controls the visibility of the box's border, adding definition to its edges.",
      },
    },
    filledBackground: {
      control: {
        type: "boolean",
        description:
          "Indicates whether the box should have a solid background color or be transparent.",
      },
    },
    className: { type: "string" },
  },
};

export default meta;

export const Primary: StoryObj<BoxProps> = {
  args: {},
};

export const Default: StoryObj<BoxProps> = {
  args: {
    children: "This is a Standard Box.",
    filledBackground: true,
    type: "primary",
  },
};

export const BoxAlert: StoryObj<BoxProps> = {
  args: {
    children: "This is a wake-up call!",
    filledBackground: true,
    type: "alert",
  },
};

export const BoxSuccess: StoryObj<BoxProps> = {
  args: {
    children: "Operation completed successfully!",
    filledBackground: true,
    type: "success",
  },
};

export const BoxError: StoryObj<BoxProps> = {
  args: {
    children: "An error occurred during operation.",
    filledBackground: true,
    type: "error",
  },
};
