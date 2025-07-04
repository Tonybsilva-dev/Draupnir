import { Meta, StoryObj } from "@storybook/react";

import TitlePage, { type TitlePageProps } from "./TitlePage";

const meta: Meta<TitlePageProps> = {
  title: "Components/Organisms/TitlePage",
  component: TitlePage,
  parameters: {
    parameters: {
      notes: "These are notes for the Title Page",
      info: "This is info for the Title Page",
    },
  },
  argTypes: {
    title: {
      control: {
        type: "text",
      },
      description: "Title Page",
    },
    description: {
      control: {
        type: "text",
      },
      description: "Optional description",
    },
  },
};

export default meta;

export const Primary: StoryObj<TitlePageProps> = {
  args: {
    title: "Dashboard",
    description: "Hi, [user.name]",
  },
};
