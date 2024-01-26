import { Meta, StoryObj } from "@storybook/react";

import Notice, { type NoticeProps } from "./Notice";

const meta: Meta<NoticeProps> = {
  title: "Design System/Molecules/Notice",
  parameters: {
    parameters: {
      notes: "These are notes for the Avatar stories",
      info: "This is info for the Avatar stories",
    },
  },
  component: Notice,
  argTypes: {
    type: {
      control: { type: "radio" },
      options: [
        "success",
        "alert",
        "error",
        "info",
        "primary",
        "secondary",
        "dark",
      ],
      description: "Types of the Notice.",
      defaultValue: {
        options: "xs",
      },
    },
    message: {
      control: { type: "text" },
      description: "Message of the notice",
    },
  },
};

export default meta;

export const Primary: StoryObj<NoticeProps> = {
  args: {
    type: "success",
  },
};

export const NoticeSuccess: StoryObj<NoticeProps> = {
  args: {
    type: "success",
    message: "This is a default notice message",
  },
};

export const NoticeAlert: StoryObj<NoticeProps> = {
  args: {
    type: "alert",
    message: "This is an alert!",
  },
};

export const NoticeError: StoryObj<NoticeProps> = {
  args: {
    type: "error",
    message: "Operation not completed!",
  },
};
