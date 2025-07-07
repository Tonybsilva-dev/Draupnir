import { Meta, StoryObj } from "@storybook/react";
import { Dropdown } from "./Dropdown";
import { Button } from "../../atoms/Button/Button";
import { ChevronDown, User, Settings, LogOut } from "lucide-react";

const meta: Meta<typeof Dropdown> = {
  title: "Components/Organisms/Dropdown",
  component: Dropdown,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
## Dropdown

The Dropdown component provides an interactive dropdown menu with complete accessibility and theme support.

### Features
- **Accessible**: Complete ARIA support and keyboard navigation
- **Themed**: Light and dark theme support
- **Animated**: Smooth enter and exit transitions
- **Flexible**: Component-based composition (Trigger, Content, Item)
- **Responsive**: Adapts to different screen sizes

### Usage
\`\`\`tsx
import { Dropdown } from '@/components/organisms/Dropdown';
import { Button } from '@/components/atoms/Button';

<Dropdown>
  <Dropdown.Trigger>
    <Button variant="outline">Open Menu</Button>
  </Dropdown.Trigger>
  <Dropdown.Content>
    <Dropdown.Item>Option 1</Dropdown.Item>
    <Dropdown.Item>Option 2</Dropdown.Item>
  </Dropdown.Content>
</Dropdown>
\`\`\`
        `,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Dropdown>;

/**
 * ## Playground
 *
 * Controllable story to test all Dropdown props.
 */
export const Playground: Story = {
  render: () => (
    <Dropdown>
      <Dropdown.Trigger>
        <Button variant="outline" asChild>
          Open Menu
          <ChevronDown className="h-4 w-4" />
        </Button>
      </Dropdown.Trigger>
      <Dropdown.Content align="center" side="bottom">
        <Dropdown.Item onSelect={() => console.log("Option 1 selected")}>Option 1</Dropdown.Item>
        <Dropdown.Item onSelect={() => console.log("Option 2 selected")}>Option 2</Dropdown.Item>
        <Dropdown.Item onSelect={() => console.log("Option 3 selected")}>Option 3</Dropdown.Item>
      </Dropdown.Content>
    </Dropdown>
  ),
  parameters: {
    docs: {
      description: {
        story: "Controllable playground to test all Dropdown props.",
      },
    },
  },
};

/**
 * ## Test Dropdown
 *
 * Simple test dropdown to verify functionality.
 */
export const Test: StoryObj = {
  render: () => (
    <Dropdown>
      <Dropdown.Trigger>
        Click me
      </Dropdown.Trigger>
      <Dropdown.Content>
        <Dropdown.Item>Option 1</Dropdown.Item>
        <Dropdown.Item>Option 2</Dropdown.Item>
        <Dropdown.Item>Option 3</Dropdown.Item>
      </Dropdown.Content>
    </Dropdown>
  ),
};

/**
 * ## Basic Dropdown
 *
 * Simple dropdown with basic options.
 */
export const Basic: StoryObj = {
  render: () => (
    <Dropdown>
      <Dropdown.Trigger>
        <Button variant="outline" asChild>
          Select Option
          <ChevronDown className="h-4 w-4" />
        </Button>
      </Dropdown.Trigger>
      <Dropdown.Content>
        <Dropdown.Item onSelect={() => console.log("Item 1 selected")}>Item 1</Dropdown.Item>
        <Dropdown.Item onSelect={() => console.log("Item 2 selected")}>Item 2</Dropdown.Item>
        <Dropdown.Item onSelect={() => console.log("Item 3 selected")}>Item 3</Dropdown.Item>
      </Dropdown.Content>
    </Dropdown>
  ),
  parameters: {
    docs: {
      description: {
        story: "Basic dropdown with trigger and simple options.",
      },
    },
  },
};

/**
 * ## Dropdown with Label
 *
 * Dropdown with label and separators for better organization.
 */
export const WithLabel: StoryObj = {
  render: () => (
    <Dropdown>
      <Dropdown.Trigger>
        <Button variant="outline" asChild>
          User Menu
          <ChevronDown className="h-4 w-4" />
        </Button>
      </Dropdown.Trigger>
      <Dropdown.Content>
        <Dropdown.Label>User Options</Dropdown.Label>
        <Dropdown.Item onSelect={() => console.log("Profile selected")}> <User className="mr-2 h-4 w-4" /> Profile </Dropdown.Item>
        <Dropdown.Item onSelect={() => console.log("Settings selected")}> <Settings className="mr-2 h-4 w-4" /> Settings </Dropdown.Item>
        <Dropdown.Separator />
        <Dropdown.Item onSelect={() => console.log("Logout selected")}> <LogOut className="mr-2 h-4 w-4" /> Logout </Dropdown.Item>
      </Dropdown.Content>
    </Dropdown>
  ),
  parameters: {
    docs: {
      description: {
        story: "Dropdown with label and separators for better accessibility.",
      },
    },
  },
};

/**
 * ## Actions Dropdown
 *
 * Dropdown with different types of actions including destructive.
 */
export const Actions: StoryObj = {
  render: () => (
    <Dropdown>
      <Dropdown.Trigger>
        <Button variant="outline" asChild>
          Actions
          <ChevronDown className="h-4 w-4" />
        </Button>
      </Dropdown.Trigger>
      <Dropdown.Content>
        <Dropdown.Item onSelect={() => console.log("Edit selected")}>Edit</Dropdown.Item>
        <Dropdown.Item onSelect={() => console.log("Duplicate selected")}>Duplicate</Dropdown.Item>
        <Dropdown.Item onSelect={() => console.log("Archive selected")}>Archive</Dropdown.Item>
        <Dropdown.Separator />
        <Dropdown.Item onSelect={() => console.log("Delete selected")}
          className="text-red-600 focus:text-red-600"
        >
          Delete
        </Dropdown.Item>
      </Dropdown.Content>
    </Dropdown>
  ),
  parameters: {
    docs: {
      description: {
        story: "Dropdown with different types of actions, including destructive actions.",
      },
    },
  },
};
