import { Meta, StoryObj } from "@storybook/react";
import { Button, ButtonProps } from "./Button";

const meta = {
  title: "Components/Atoms/Button",
  component: Button,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
## Button

The Button component is a fundamental element of the Draupnir Design System, offering different visual variants and states for user actions.

### Features
- **Accessibility**: Complete ARIA labels and roles support
- **States**: Normal, hover, focus, disabled, and loading
- **Variants**: Primary, Outline, and Ghost
- **Responsive**: Adapts to different screen sizes
- **Performance**: Optimized with Tailwind Variants

### Usage
\`\`\`tsx
import { Button } from '@/components/atoms/Button';

<Button variant="primary" onClick={handleClick}>
  Click here
</Button>
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    children: {
      description: "Button content",
      control: { type: "text" },
      table: {
        type: { summary: "ReactNode" },
        defaultValue: { summary: "Button" },
      },
    },
    variant: {
      description: "Visual variant of the button",
      control: { type: "select" },
      options: ["primary", "secondary", "outline", "ghost", "danger"],
      table: {
        type: { summary: "primary | secondary | outline | ghost | danger" },
        defaultValue: { summary: "primary" },
      },
    },
    size: {
      description: "Button size",
      control: { type: "select" },
      options: ["default", "sm", "lg", "full"],
      table: {
        type: { summary: "default | sm | lg | full" },
        defaultValue: { summary: "default" },
      },
    },
    isLoading: {
      description: "Displays a loading indicator",
      control: { type: "boolean" },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false },
      },
    },
    disabled: {
      description: "Disables the button",
      control: { type: "boolean" },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false },
      },
    },
    className: {
      description: "Additional CSS classes",
      control: { type: "text" },
      table: {
        type: { summary: "string" },
      },
    },
    onClick: {
      description: "Function executed when clicked",
      action: "clicked",
      table: {
        type: { summary: "() => void" },
      },
    },
  },
  args: {
    children: "Button",
    variant: "primary",
    isLoading: false,
    disabled: false,
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * ## Primary Variant
 * 
 * Main button with green background and white text. Ideal for primary interface actions.
 */
export const Primary: Story = {
  args: {
    children: "Primary Button",
    variant: "primary",
  },
  parameters: {
    docs: {
      description: {
        story: "Primary button with maximum visual emphasis. Use for important actions like 'Save', 'Confirm', or 'Send'.",
      },
    },
  },
};

/**
 * ## Outline Variant
 * 
 * Button with border and transparent background. Maintains visual hierarchy without being intrusive.
 */
export const Outline: Story = {
  args: {
    children: "Outline Button",
    variant: "outline",
  },
  parameters: {
    docs: {
      description: {
        story: "Secondary button with border. Ideal for complementary actions or cancellations.",
      },
    },
  },
};

/**
 * ## Ghost Variant
 * 
 * Discreet button without borders or background. Perfect for subtle actions and navigation.
 */
export const Ghost: Story = {
  args: {
    children: "Ghost Button",
    variant: "ghost",
  },
  parameters: {
    docs: {
      description: {
        story: "Discreet button for less important actions or internal navigation.",
      },
    },
  },
};

/**
 * ## Secondary Variant
 * 
 * Secondary button with bluish-gray background and white text. Ideal for alternative or less priority actions.
 */
export const Secondary: Story = {
  args: {
    children: "Secondary Button",
    variant: "secondary",
  },
  parameters: {
    docs: {
      description: {
        story: "Secondary button with bluish-gray background, ideal for alternative or less priority actions.",
      },
    },
  },
};


export const Danger: Story = {
  args: {
    children: "Danger Button",
    variant: "danger",
  },
  parameters: {
    docs: {
      description: {
        story: "Danger button with red background and white text. Ideal for destructive actions.",
      },
    },
  },
};

/**
 * ## Loading State
 * 
 * Button with loading indicator. Automatically disabled during the process.
 */
export const Loading: Story = {
  args: {
    children: "Loading Button",
    variant: "outline",
    isLoading: true,
  },
  parameters: {
    docs: {
      description: {
        story: "Use this state when the button action requires processing time. The button is automatically disabled.",
      },
    },
  },
}; 