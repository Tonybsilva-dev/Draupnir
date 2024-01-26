import { Meta, StoryObj } from "@storybook/react";

import Divider, { type DividerProps } from "./Divider";

const meta: Meta<DividerProps> = {
  title: "Design System/Atoms/Divider",
  component: Divider,
  parameters: {
    parameters: {
      notes: "These are notes for the Divider stories",
      info: "This is info for the Divider stories",
    },
  },
  argTypes: {
    children: {
      type: "string",
      options: ["string"],
      description: "Text of the divider.",
    },
    bgColor: {
      control: { type: "control" },
      options: ["dark", "light", "black"],
      description: "background color of the divider.",
    },
    width: {
      type: "string",
      options: ["string"],
      description: "width of the divider.",
    },
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
