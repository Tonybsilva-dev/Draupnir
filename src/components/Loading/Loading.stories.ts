import { Meta, StoryFn, StoryObj } from "@storybook/react";
import { Loading } from "./Loading";

const meta: Meta<typeof Loading> = {
  title: "Design System/Atoms/Loading",
  parameters: {
    layout: "centered",
  },
  component: Loading,
} as Meta<typeof Loading>;

export default meta;
type Story = StoryObj<typeof Loading>;

export const Pulse: Story = {
  args: {},
};
