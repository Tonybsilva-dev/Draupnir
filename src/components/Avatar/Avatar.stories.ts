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
    size: {
      control: { type: "radio" },
      options: ["xs", "sm", "md", "lg"],
      description: "Size of the avatar.",
      defaultValue: {
        options: "xs",
      },
    },
    image: {
      control: { type: "text" },
      description: "Image of the avatar",
    },
    description: {
      control: { type: "text" },
      description: "Alt text",
    },
  },
};

export default meta;

export const AvatarExtraSmall: StoryObj<AvatarProps> = {
  args: {
    size: "xs",
    image: "https://avatars.githubusercontent.com/u/54373473?v=4",
  },
};

export const AvatarSmall: StoryObj<AvatarProps> = {
  args: {
    size: "sm",
    image: "https://avatars.githubusercontent.com/u/54373473?v=4",
  },
};

export const AvatarMedium: StoryObj<AvatarProps> = {
  args: {
    size: "md",
    image: "https://avatars.githubusercontent.com/u/54373473?v=4",
  },
};

export const AvatarLarge: StoryObj<AvatarProps> = {
  args: {
    size: "lg",
    image: "https://avatars.githubusercontent.com/u/54373473?v=4",
  },
};
