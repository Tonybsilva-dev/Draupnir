import { Meta, StoryObj } from "@storybook/react";

import Avatar, { type AvatarProps } from "./Avatar";

const meta: Meta<AvatarProps> = {
  title: "Design System/Atoms/Avatar",
  parameters: {
    layout: "centered",
    parameters: {
      notes: "These are notes for the Avatar stories",
      info: "This is info for the Avatar stories",
    },
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
    image: "https://placehold.co/100x100/png",
  },
};

export const AvatarSmall: StoryObj<AvatarProps> = {
  args: {
    size: "sm",
    image: "https://placehold.co/150x150/png",
  },
};

export const AvatarMedium: StoryObj<AvatarProps> = {
  args: {
    size: "md",
    image: "https://placehold.co/200x200/png",
  },
};

export const AvatarLarge: StoryObj<AvatarProps> = {
  args: {
    size: "lg",
    image: "https://placehold.co/250x250/png",
  },
};
