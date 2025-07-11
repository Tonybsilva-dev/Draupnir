import { Meta, StoryObj } from "@storybook/react";
import { Tabs, TabList, TabTrigger, TabContent } from "./Tabs";

const meta = {
  title: "Components/Molecules/Tabs",
  component: Tabs,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
## Tabs

The Tabs component provides a way to organize content into multiple sections that can be switched between.

### Features
- **Accessibility**: Complete ARIA support with proper roles and attributes
- **Orientation**: Horizontal and vertical tab layouts
- **Smooth transitions**: CSS transitions for tab switching
- **Customizable**: Flexible styling and behavior options
- **Keyboard navigation**: Full keyboard support

### Usage
\`\`\`tsx
import { Tabs } from '@/components/molecules/Tabs';

<Tabs defaultActiveTab="tab1">
  <Tabs.List>
    <Tabs.Trigger value="tab1">Tab 1</Tabs.Trigger>
    <Tabs.Trigger value="tab2">Tab 2</Tabs.Trigger>
  </Tabs.List>
  <Tabs.Content value="tab1">Content 1</Tabs.Content>
  <Tabs.Content value="tab2">Content 2</Tabs.Content>
</Tabs>
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    defaultActiveTab: {
      description: "The default active tab value",
      control: { type: "text" },
      table: {
        type: { summary: "string" },
      },
    },
    orientation: {
      description: "Orientation of the tabs",
      control: { type: "select" },
      options: ["horizontal", "vertical"],
      table: {
        type: { summary: "horizontal | vertical" },
        defaultValue: { summary: "horizontal" },
      },
    },
    onTabChange: {
      description: "Callback fired when active tab changes",
      action: "tabChange",
      table: {
        type: { summary: "(activeTab: string) => void" },
      },
    },
    children: {
      description: "Tab content",
      control: { type: "text" },
      table: {
        type: { summary: "ReactNode" },
      },
    },
  },
  args: {
    defaultActiveTab: "tab1",
    orientation: "horizontal",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * ## Basic Tabs
 * 
 * Simple horizontal tabs with default styling.
 */
export const Basic: Story = {
  args: {
    children: null,
  },
  render: (args) => (
    <div style={{ width: '500px' }}>
      <Tabs {...args}>
        <TabList>
          <TabTrigger value="tab1">Overview</TabTrigger>
          <TabTrigger value="tab2">Features</TabTrigger>
          <TabTrigger value="tab3">Documentation</TabTrigger>
        </TabList>
        <TabContent value="tab1">
          <h3>Overview</h3>
          <p>This is the overview content. Here you can find general information about the product.</p>
        </TabContent>
        <TabContent value="tab2">
          <h3>Features</h3>
          <p>Explore the key features and capabilities of our platform.</p>
        </TabContent>
        <TabContent value="tab3">
          <h3>Documentation</h3>
          <p>Access comprehensive documentation and guides.</p>
        </TabContent>
      </Tabs>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Basic horizontal tabs with three sections. Click on any tab to switch between content.",
      },
    },
  },
};

/**
 * ## Vertical Tabs
 * 
 * Tabs arranged vertically for different layouts.
 */
export const Vertical: Story = {
  args: {
    children: null,
    orientation: "vertical",
  },
  render: (args) => (
    <div style={{ width: '600px', height: '300px' }}>
      <Tabs {...args}>
        <TabList>
          <TabTrigger value="tab1">Settings</TabTrigger>
          <TabTrigger value="tab2">Profile</TabTrigger>
          <TabTrigger value="tab3">Security</TabTrigger>
        </TabList>
        <TabContent value="tab1">
          <h3>Settings</h3>
          <p>Configure your application settings and preferences.</p>
        </TabContent>
        <TabContent value="tab2">
          <h3>Profile</h3>
          <p>Manage your user profile and personal information.</p>
        </TabContent>
        <TabContent value="tab3">
          <h3>Security</h3>
          <p>Configure security settings and authentication options.</p>
        </TabContent>
      </Tabs>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Vertical tabs layout, ideal for sidebar navigation or settings panels.",
      },
    },
  },
};

/**
 * ## Rich Content Tabs
 * 
 * Tabs with rich content including lists and formatting.
 */
export const RichContent: Story = {
  args: {
    children: null,
  },
  render: (args) => (
    <div style={{ width: '600px' }}>
      <Tabs {...args}>
        <TabList>
          <TabTrigger value="tab1">Getting Started</TabTrigger>
          <TabTrigger value="tab2">Installation</TabTrigger>
          <TabTrigger value="tab3">Configuration</TabTrigger>
        </TabList>
        <TabContent value="tab1">
          <h3>Getting Started</h3>
          <p>Welcome to our platform! Follow these steps to get started:</p>
          <ol>
            <li>Create your account</li>
            <li>Complete your profile</li>
            <li>Explore the features</li>
            <li>Start building</li>
          </ol>
        </TabContent>
        <TabContent value="tab2">
          <h3>Installation</h3>
          <p>Install and set up the system:</p>
          <ul>
            <li>Download the package</li>
            <li>Run the installer</li>
            <li>Follow the setup wizard</li>
            <li>Verify the installation</li>
          </ul>
        </TabContent>
        <TabContent value="tab3">
          <h3>Configuration</h3>
          <p>Configure your settings:</p>
          <ul>
            <li>Database settings</li>
            <li>API configuration</li>
            <li>Security settings</li>
            <li>User preferences</li>
          </ul>
        </TabContent>
      </Tabs>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Tabs with rich content including headings, lists, and formatted text.",
      },
    },
  },
};

/**
 * ## No Default Tab
 * 
 * Tabs without a default active tab.
 */
export const NoDefaultTab: Story = {
  args: {
    children: null,
    defaultActiveTab: undefined,
  },
  render: (args) => (
    <div style={{ width: '500px' }}>
      <Tabs {...args}>
        <TabList>
          <TabTrigger value="tab1">Tab 1</TabTrigger>
          <TabTrigger value="tab2">Tab 2</TabTrigger>
        </TabList>
        <TabContent value="tab1">Content for Tab 1</TabContent>
        <TabContent value="tab2">Content for Tab 2</TabContent>
      </Tabs>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Tabs without a default active tab. No content is shown until a tab is selected.",
      },
    },
  },
}; 