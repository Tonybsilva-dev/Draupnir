import { Meta, StoryObj } from "@storybook/react";

import Divider, { type DividerProps } from "./Divider";

const meta: Meta<DividerProps> = {
  title: "Design System/Atoms/Divider",
  component: Divider,
  argTypes: {
    children: { type: "string" },
  },
};

export default meta;

export const Default: StoryObj<DividerProps> = {
  args: {},
};

export const Dark: StoryObj<DividerProps> = {
  args: {
    bgColor: "dark",
  },
};

export const DivisorWithProps: StoryObj<DividerProps> = {
  args: {
    children: "Hello, world!",
  },
};

export const ThicknessDivisor: StoryObj<DividerProps> = {
  args: {
    height: "h-[5px]",
  },
};

