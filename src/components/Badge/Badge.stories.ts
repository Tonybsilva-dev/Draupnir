import { Meta, StoryObj } from "@storybook/react";
import { Badge, BadgeProps } from "./Badge";

const meta: Meta<BadgeProps> = {
  title: "Design System/Molecules/Badge",
  // tags: ["autodocs"],
  component: Badge,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    children: {
      type: "string",
    },
  },
};

export default meta;

export const Primary: StoryObj<BadgeProps> = {
  args: {
    children: "Badge",
  },
};

export const Success: StoryObj<BadgeProps> = {
  args: {
    children: "Badge",
    variant: "success",
  },
};

export const Warning: StoryObj<BadgeProps> = {
  args: {
    children: "Badge",
    variant: "warning",
  },
};

export const Danger: StoryObj<BadgeProps> = {
  args: {
    children: "Badge",
    variant: "danger",
  },
};
