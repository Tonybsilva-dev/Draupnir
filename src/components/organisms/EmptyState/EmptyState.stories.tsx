import { Meta, StoryObj } from '@storybook/react';
import EmptyState from './EmptyState';
import { Inbox, Folder, Search } from 'lucide-react';
import { Button } from '../../atoms/Button/Button';

const meta: Meta<typeof EmptyState> = {
  title: 'Components/Organisms/EmptyState',
  component: EmptyState,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
## EmptyState

Component to display empty states in lists, tables, or pages.
- Customizable icon, title, description, and action
- Uses lucide-react icons
- Fully accessible
        `,
      },
    },
  },
  argTypes: {
    icon: { control: false },
    title: { control: 'text' },
    description: { control: 'text' },
    action: { control: false },
  },
  args: {
    icon: <Inbox size={48} />, title: 'No data found', description: 'No results found for your search or no data has been added yet.', action: <Button variant="primary">Add new item</Button>,
  },
};

export default meta;

type Story = StoryObj<typeof EmptyState>;

export const Default: Story = {};

export const CustomIcon: Story = {
  args: {
    icon: <Folder size={48} color="#6c63ff" />,
    title: 'No folders',
    description: 'You have not created any folders yet.',
    action: <Button variant="outline">Create folder</Button>,
  },
};

export const CustomAction: Story = {
  args: {
    icon: <Search size={48} color="#ff6600" />,
    title: 'Nothing found',
    description: 'Try adjusting your search or filters.',
    action: <Button variant="ghost">Clear filters</Button>,
  },
}; 