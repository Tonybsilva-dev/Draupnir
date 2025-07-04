import React, { useCallback } from "react";
import { Meta, StoryObj } from "@storybook/react";
import Notice, { NoticeProps } from "./Notice";
import { NotificationsProvider, NotificationsContainer, useNotifications } from "../../../hooks/useNotifications";
import { Button } from "../../atoms/Button/Button";

const meta: Meta<typeof Notice> = {
  title: "Components/Molecules/Notice",
  component: Notice,
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ["success", "alert", "error", "info"],
    },
    message: { control: 'text' },
    position: {
      control: { type: 'select' },
      options: ["center-top", "center-bottom"],
    },
    autoCloseMs: { control: 'number' },
  },
};

export default meta;

export const Default = (args: NoticeProps) => (
  <NotificationsProvider>
    <NotificationsContainer />
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <NoticeTriggerButton {...args} />
    </div>
  </NotificationsProvider>
);

const NoticeTriggerButton = (args: NoticeProps) => {
  const { notify } = useNotifications();
  const handleClick = useCallback(() => {
    notify({
      notificationType: "notice",
      type: args.type || "info",
      message: args.message || "This is a button-triggered notice!",
      position: args.position || "center-top",
      autoCloseMs: args.autoCloseMs ?? 3000,
    });
  }, [notify, args]);
  return (
    <Button onClick={handleClick}>Show Notice</Button>
  );
};

export const WithControls: StoryObj<NoticeProps> = {
  args: {
    type: "info",
    message: "Customizable message",
    position: "center-top",
    autoCloseMs: 3000,
  },
  render: (args) => <Notice {...args} />,
}; 