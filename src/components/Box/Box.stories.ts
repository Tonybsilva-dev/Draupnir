import { Meta, StoryObj } from "@storybook/react";

import Box, { type BoxProps } from "./Box";

const meta: Meta<BoxProps> = {
  title: "Design System/Atoms/Box",
  component: Box,
  argTypes: {
    children: { type: "string" },
    type: { type: "string" },
    rounded: { type: "boolean" },
    border: { type: "boolean" },
    filledBackground: { type: "boolean" },
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
    rounded: true,
    type: "alert",
  },
};

export const BoxSuccess: StoryObj<BoxProps> = {
  args: {
    children: "Operation completed successfully!",
    filledBackground: true,
    rounded: true,
    type: "success",
  },
};

export const BoxError: StoryObj<BoxProps> = {
  args: {
    children: "An error occurred during operation.",
    filledBackground: true,
    rounded: true,
    type: "error",
  },
};
