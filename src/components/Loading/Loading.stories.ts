import { Meta, StoryFn, StoryObj } from "@storybook/react";
import { Loading } from "./Loading";

const meta: Meta<typeof Loading> = {
  title: "Design System/Atoms/Loading",
  parameters: {
    layout: "centered",
    parameters: {
      notes: "These are notes for the Loading stories",
      info: "This is info for the Loading stories",
    },
  },
  component: Loading,
} as Meta<typeof Loading>;

export default meta;
type Story = StoryObj<typeof Loading>;

export const Pulse: Story = {
  args: {},
};
