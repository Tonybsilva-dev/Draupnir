import type { Meta, StoryObj } from '@storybook/react';
import Avatar from './Avatar';

const meta: Meta<typeof Avatar> = {
  title: 'Components/Atoms/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};
export default meta;
type Story = StoryObj<typeof Avatar>;

export const WithIcon: Story = {
  args: {
    size: 'md',
    description: 'Usuário sem imagem',
  },
  render: (args) => (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 80 }}>
      <Avatar {...args} />
    </div>
  ),
};

export const WithImage: Story = {
  args: {
    size: 'md',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    description: 'Foto de usuário',
  },
  render: (args) => (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 80 }}>
      <Avatar {...args} />
    </div>
  ),
};

export const TodosOsTamanhos: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 24, alignItems: 'center', justifyContent: 'center', height: 100 }}>
      <Avatar size="xs" description="Avatar XS" />
      <Avatar size="sm" description="Avatar SM" />
      <Avatar size="md" description="Avatar MD" />
      <Avatar size="lg" description="Avatar LG" image="https://avatars.githubusercontent.com/u/54373473?v=4" />
    </div>
  ),
}; 