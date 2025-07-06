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
    variant: {
      control: { type: "select" },
      options: ["auto", "light", "dark"],
      description: "Visual variant for contrast/context",
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
    label: "Loading content",
    size: "md",
    variant: "auto",
  },
};

export const Small: Story = {
  args: {
    label: "Loading content",
    size: "sm",
    variant: "auto",
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
    label: "Loading content",
    size: "lg",
    variant: "auto",
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
    label: "Loading content",
    size: "md",
    variant: "light",
  },
  parameters: {
    docs: {
      description: {
        story: "White loading indicator for dark backgrounds.",
      },
    },
  },
};

export const Dark: Story = {
  args: {
    label: "Loading content",
    size: "md",
    variant: "dark",
  },
  parameters: {
    docs: {
      description: {
        story: "Dark loading indicator for light backgrounds.",
      },
    },
  },
};
