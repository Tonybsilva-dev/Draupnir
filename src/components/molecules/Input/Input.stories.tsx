import { Meta, StoryObj } from "@storybook/react";
import { Input, InputRootProps, InputControlProps } from "./Input";
import { UserCircle, Mail, Lock } from "lucide-react";

const meta: Meta<InputRootProps & InputControlProps> = {
  title: "Components/Molecules/Input",
  component: Input.Root,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
## Input

The Input component is a composite text input field that offers flexibility and accessibility for forms.

### Features
- **Composition**: Composition-based architecture (Root, Control, Prefix)
- **Accessibility**: Integrated labels and error messages
- **States**: Normal, focus, disabled, and error
- **Theme**: Complete dark theme support
- **Flexible**: Prefix support and customizations

### Usage
\`\`\`tsx
import { Input } from '@/components/molecules/Input';
import { UserCircle } from 'lucide-react';

<Input.Root label="Name" errorMessage="Name is required">
  <Input.Prefix>
    <UserCircle className="h-5 w-5 text-zinc-500" />
  </Input.Prefix>
  <Input.Control placeholder="Enter your name" />
</Input.Root>
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    label: {
      description: "Input field label",
      control: { type: "text" },
      table: {
        type: { summary: "string" },
        category: "Root",
      },
    },
    errorMessage: {
      description: "Error message displayed below the field",
      control: { type: "text" },
      table: {
        type: { summary: "string" },
        category: "Root",
      },
    },
    className: {
      description: "Additional CSS classes for the container",
      control: { type: "text" },
      table: {
        type: { summary: "string" },
        category: "Root",
      },
    },
    disabled: {
      description: "Disables the input field",
      control: { type: "boolean" },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false },
        category: "Control",
      },
    },
    type: {
      description: "Input field type",
      control: { type: "select" },
      options: ["text", "email", "password", "number", "tel", "url"],
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "text" },
        category: "Control",
      },
    },
    placeholder: {
      description: "Placeholder text",
      control: { type: "text" },
      table: {
        type: { summary: "string" },
        category: "Control",
      },
    },
    value: {
      description: "Controlled field value",
      control: { type: "text" },
      table: {
        type: { summary: "string" },
        category: "Control",
      },
    },
    onChange: {
      description: "Function executed when value changes",
      action: "changed",
      table: {
        type: { summary: "(value: string) => void" },
        category: "Control",
      },
    },
  },
  args: {
    label: "Field label",
    placeholder: "Type here...",
    type: "text",
    disabled: false,
    errorMessage: "",
  },
};

export default meta;

type Story = StoryObj<InputRootProps & InputControlProps>;

/**
 * ## Playground
 *
 * Controllable story to test all Input props.
 */
export const Playground: Story = {
  args: {
    label: "Field label",
    placeholder: "Type here...",
    type: "text",
    disabled: false,
    errorMessage: "",
  },
  render: (props) => (
    <Input.Root label={props.label} errorMessage={props.errorMessage} className="">
      <Input.Control
        placeholder={props.placeholder}
        type={props.type}
        disabled={props.disabled}
        value={props.value}
        onChange={props.onChange}
      />
    </Input.Root>
  ),
  parameters: {
    docs: {
      description: {
        story: "Controllable playground to test all Input props.",
      },
    },
  },
};

/**
 * ## Input with Prefix
 *
 * Example of input with prefix icon, maintaining clean visual.
 */
export const WithPrefix: StoryObj = {
  render: () => (
    <Input.Root label="Email">
      <Input.Prefix>
        <Mail className="h-5 w-5 text-zinc-500" />
      </Input.Prefix>
      <Input.Control placeholder="your@email.com" />
    </Input.Root>
  ),
  parameters: {
    docs: {
      description: {
        story: "Input with prefix icon, maintaining clean visual.",
      },
    },
  },
};

/**
 * ## Disabled Input
 *
 * Example of disabled input, maintaining clean visual.
 */
export const Disabled: StoryObj = {
  render: () => (
    <Input.Root label="User ID">
      <Input.Prefix>
        <UserCircle className="h-5 w-5 text-zinc-500" />
      </Input.Prefix>
      <Input.Control placeholder="USR-12345" disabled />
    </Input.Root>
  ),
  parameters: {
    docs: {
      description: {
        story: "Disabled input, maintaining clean visual.",
      },
    },
  },
};

/**
 * ## Input with Error
 *
 * Example of input with error message, maintaining clean visual.
 */
export const WithError: StoryObj = {
  render: () => (
    <Input.Root label="Password" errorMessage="Password must be at least 8 characters">
      <Input.Prefix>
        <Lock className="h-5 w-5 text-zinc-500" />
      </Input.Prefix>
      <Input.Control placeholder="Enter your password" type="password" />
    </Input.Root>
  ),
  parameters: {
    docs: {
      description: {
        story: "Input with error message, maintaining clean visual.",
      },
    },
  },
};
