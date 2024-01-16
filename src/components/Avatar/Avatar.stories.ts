import { Meta, StoryObj } from "@storybook/react";

import Avatar, { type AvatarProps } from "./Avatar";

const meta: Meta<AvatarProps> = {
  title: "Design System/Atoms/Avatar",
  parameters: {
    layout: "centered",
  },
  component: Avatar,
  argTypes: {
    className: { type: "string" },
    size: { type: "string" },
  },
};

export default meta;

export const Primary: StoryObj<AvatarProps> = {
  args: {
    size: "sm"
  },
};

export const AvatarImage: StoryObj<AvatarProps> = {
  args: {
    size: "lg",
    image: "https://avatars.githubusercontent.com/u/54373473?v=4",
  },
};