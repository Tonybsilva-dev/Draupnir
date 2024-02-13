import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import SubtitlePage, { SubtitlePageProps } from "./SubtitlePage";
import { Button } from "../Button/Button";

const meta: Meta<SubtitlePageProps> = {
  title: "Design System/Molecules/SubtitlePage",
  component: SubtitlePage,
  argTypes: {
    subtitle: {
      control: "text",
      description: "The subtitle of the page",
    },
    description: {
      control: "text",
      description: "An optional description for the page",
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: "100%", display: "flex", flexDirection: "column", flex: 1 }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

export const Primary: StoryObj<SubtitlePageProps> = {
  args: {
    subtitle: "Personal Info",
    description: "Update your photo and personal details here.",
  },
  render: (args) => (
    <SubtitlePage {...args}>
      <Button variant="outline">Cancel</Button>
      <Button variant="primary">Save</Button>
    </SubtitlePage>
  ),
};


export const WithoutChildren: StoryObj<SubtitlePageProps> = {
  args: {
    subtitle: "Personal Info",
    description: "Update your photo and personal details here.",
  },
  render: (args) => (
    <SubtitlePage {...args} />
  ),
};
