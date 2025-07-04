import { Meta, StoryFn, StoryObj } from "@storybook/react";
import { Loading } from "./Loading";

const meta: Meta<typeof Loading> = {
  title: "Components/Molecules/Loading",
  parameters: {
    layout: "centered",
    parameters: {
      notes: "These are notes for the Loading stories",
      info: "This is info for the Loading stories",
    },
  },
  component: Loading,
  argTypes: {
    color: {
      control: { type: "select" },
      options: ["bg-primary", "bg-secondary", "bg-white", "bg-gray-500"],
      description: "Color of the loading indicator",
    },
    label: {
      control: { type: "text" },
      description: "Descriptive text for screen readers",
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
      description: "Size of the loading indicator",
    },
  },
} as Meta<typeof Loading>;

export default meta;
type Story = StoryObj<typeof Loading>;

export const Pulse: Story = {
  args: {
    color: "bg-primary",
    label: "Loading content",
    size: "md",
  },
};

export const Small: Story = {
  args: {
    color: "bg-primary",
    label: "Loading content",
    size: "sm",
  },
  parameters: {
    docs: {
      description: {
        story: "Small loading indicator for compact spaces.",
      },
    },
  },
};

export const Large: Story = {
  args: {
    color: "bg-primary",
    label: "Loading content",
    size: "lg",
  },
  parameters: {
    docs: {
      description: {
        story: "Large loading indicator for prominent display.",
      },
    },
  },
};

export const White: Story = {
  args: {
    color: "bg-white",
    label: "Loading content",
    size: "md",
  },
  parameters: {
    docs: {
      description: {
        story: "White loading indicator for dark backgrounds.",
      },
    },
  },
};

export const Secondary: Story = {
  args: {
    color: "bg-secondary",
    label: "Loading content",
    size: "md",
  },
  parameters: {
    docs: {
      description: {
        story: "Secondary color loading indicator.",
      },
    },
  },
};
