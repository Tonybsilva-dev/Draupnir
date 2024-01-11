import { Meta, StoryObj } from "@storybook/react";

import Input, { InputProps } from "./Input";

const meta: Meta<InputProps> = {
  title: "Design System/Molecules/Input",
  parameters: {
    layout: "centered",
  },
  component: Input,
  argTypes: {},
};

export default meta;

export const Primary: StoryObj<InputProps> = {
  args: {
    value: "Input",
  },
};

export const Disabled: StoryObj<InputProps> = {
  args: {
    value: "Input",
    disabled: true,
  },
};

export const Multiline: StoryObj<InputProps> = {
  args: {
    value: "Input",
    multiline: true,
  },
};
