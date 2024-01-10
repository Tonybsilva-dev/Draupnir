import { Meta, StoryObj } from "@storybook/react";
import Button, { ButtonProps } from "./Button";

const meta: Meta<ButtonProps> = {
  title: "Design System/Molecules/Button",
  // tags: ['autodocs'],
  component: Button,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    children: {
      type: "string",
    },
    disabled: {
      type: "boolean",
    },
    className: {
      type: "string",
    },
  },
};

export default meta;

export const Primary: StoryObj<ButtonProps> = {
  args: {
    children: "Button",
  },
};

export const Dark: StoryObj<ButtonProps> = {
  args: {
    children: "Button",
    className: "dark-theme",
  },
};
