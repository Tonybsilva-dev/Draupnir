import { Meta, StoryObj } from '@storybook/react';
import Sidebar from './Sidebar';

const meta: Meta<typeof Sidebar> = {
  title: 'Components/Organisms/Sidebar',
  component: Sidebar,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
## Sidebar

The Sidebar component provides a vertical navigation menu with logo, navigation links, notification badge, and logout action. It is fully styled with Draupnir tokens and ready for use in dashboards and applications.
        `,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Sidebar>;

export const Basic: Story = {
  render: () => <Sidebar />,
  parameters: {
    docs: {
      description: {
        story: 'Basic sidebar with logo, navigation, notification badge, and logout button.'
      }
    }
  }
}; 