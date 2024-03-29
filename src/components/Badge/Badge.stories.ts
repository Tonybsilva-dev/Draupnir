import { Meta, StoryObj } from "@storybook/react";
import { Badge, BadgeProps } from "./Badge";

const meta: Meta<BadgeProps> = {
  title: "Design System/Molecules/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
    parameters: {
      notes: "These are notes for the Badge stories",
      info: "This is info for the Badge stories",
    },
  },
  argTypes: {
    children: {
      type: "string",
      description: "Text description",
    },
    variant: {
      control: {
        type: "radio",
      },
      description: "Variant of the Badge",
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
