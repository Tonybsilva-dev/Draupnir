import { Meta, StoryObj } from '@storybook/react';
import { Header } from './Header';

const meta: Meta<typeof Header> = {
  title: 'Components/Organisms/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
## Header

Functional header component with user name on the left, centered logo, and login/logout button on the right.

- Shows "Hello, Antonio!" when logged in and "Visitor" when logged out.
- The button toggles between "Login" and "Logout".
        `,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: () => <Header />,
  parameters: {
    docs: {
      description: {
        story: 'Functional header with login/logout toggle.',
      },
    },
  },
};

export const WithNavigation: Story = {
  render: () => <Header />,
  parameters: {
    docs: {
      description: {
        story: 'Header with navigation menu.',
      },
    },
  },
};

export const WithUserMenu: Story = {
  render: () => <Header />,
  parameters: {
    docs: {
      description: {
        story: 'Header with user dropdown menu.',
      },
    },
  },
}; 