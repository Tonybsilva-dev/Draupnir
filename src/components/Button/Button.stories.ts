import { Meta, StoryObj } from "@storybook/react";
import Button, { ButtonProps } from "./Button";

const meta: Meta<ButtonProps> = {
  title: "components/Button",
  // tags: ['autodocs'],
  component: Button,
  parameters: {
    layout: "centered",
  },
  argTypes: {},
};

export default meta;

export const Primary: StoryObj<ButtonProps> = {
  args: {
    children: "Button",
  },
};

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    children: "Button",
    className: "dark-theme",
  },
};
