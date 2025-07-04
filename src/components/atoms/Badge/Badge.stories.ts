import { Meta, StoryObj } from "@storybook/react";
import { Badge, BadgeProps } from "./Badge";

const meta = {
  title: "Components/Atoms/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
## Badge

The Badge component is used to display status information, counters, or labels in a compact and visually appealing way.

### Features
- **Variants**: Primary, success, warning, and danger
- **Compact**: Minimalist design that doesn't interfere with layout
- **Semantic**: Colors that communicate meaning (green=success, red=error)
- **Flexible**: Accepts any content as children
- **Accessible**: High contrast for good readability

### Usage
\`\`\`tsx
import { Badge } from '@/components/atoms/Badge';

<Badge variant="success">Active</Badge>
<Badge variant="warning">Pending</Badge>
<Badge variant="danger">Error</Badge>
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    children: {
      description: "Badge content",
      control: { type: "text" },
      table: {
        type: { summary: "ReactNode" },
        defaultValue: { summary: "Badge" },
      },
    },
    variant: {
      description: "Visual variant of the badge",
      control: { type: "select" },
      options: ["primary", "success", "warning", "danger"],
      table: {
        type: { summary: "primary | success | warning | danger" },
        defaultValue: { summary: "primary" },
      },
    },
  },
  args: {
    children: "Badge",
    variant: "primary",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * ## Primary Badge
 * 
 * Blue badge for general and neutral information.
 */
export const Primary: Story = {
  args: {
    children: "Primary",
    variant: "primary",
  },
  parameters: {
    docs: {
      description: {
        story: "Blue badge for general information, neutral status, or counters.",
      },
    },
  },
};

/**
 * ## Success Badge
 * 
 * Green badge for positive states and successes.
 */
export const Success: Story = {
  args: {
    children: "Success",
    variant: "success",
  },
  parameters: {
    docs: {
      description: {
        story: "Green badge to indicate success, completion, or positive status.",
      },
    },
  },
};

/**
 * ## Warning Badge
 * 
 * Yellow badge for warnings and attention states.
 */
export const Warning: Story = {
  args: {
    children: "Warning",
    variant: "warning",
  },
  parameters: {
    docs: {
      description: {
        story: "Yellow badge for warnings, pending items, or states that require attention.",
      },
    },
  },
};

/**
 * ## Danger Badge
 * 
 * Red badge for errors and critical states.
 */
export const Danger: Story = {
  args: {
    children: "Error",
    variant: "danger",
  },
  parameters: {
    docs: {
      description: {
        story: "Red badge for errors, failures, or critical states that require immediate action.",
      },
    },
  },
};

/**
 * ## Numeric Badge
 * 
 * Badge used to display counters and numbers.
 */
export const Numeric: Story = {
  args: {
    children: "42",
    variant: "primary",
  },
  parameters: {
    docs: {
      description: {
        story: "Numeric badge ideal for counters, notifications, or quantity indicators.",
      },
    },
  },
};

/**
 * ## Status Badge
 * 
 * Badge used to indicate entity status.
 */
export const Status: Story = {
  args: {
    children: "Active",
    variant: "success",
  },
  parameters: {
    docs: {
      description: {
        story: "Status badge perfect for indicating the current state of users, orders, systems, or any entity.",
      },
    },
  },
}; 