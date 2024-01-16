import { Meta, StoryObj } from "@storybook/react";

import Notice, { type NoticeProps } from "./Notice";

const meta: Meta<NoticeProps> = {
  title: "Design System/Molecules/Notice",
  component: Notice,
};

export default meta;

export const Primary: StoryObj<NoticeProps> = {
  args: {},
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