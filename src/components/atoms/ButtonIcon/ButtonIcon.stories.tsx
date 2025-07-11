import { Meta, StoryObj } from '@storybook/react';
import { ButtonIcon, ButtonIconProps } from './ButtonIcon';
import { Plus, Edit, Trash2 } from 'lucide-react';

const meta: Meta<ButtonIconProps> = {
  title: 'Components/Atoms/ButtonIcon',
  component: ButtonIcon,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `\
## ButtonIcon\n\nBotão de ícone minimalista, ideal para ações rápidas, toolbars e cards.\n\n- Usa apenas ícone, sem texto\n- Suporte a acessibilidade via aria-label\n- Variantes: ghost, outline, primary, danger\n- Tamanhos: sm, md, lg\n        `,
      },
    },
  },
  argTypes: {
    icon: { control: false },
    'aria-label': { control: 'text', description: 'Descrição acessível do botão', table: { category: 'Acessibilidade' } },
    variant: { control: 'select', options: ['ghost', 'outline', 'primary', 'secondary', 'danger'] },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    disabled: { control: 'boolean' },
  },
  args: {
    icon: <Plus />, 'aria-label': 'Adicionar', variant: 'ghost', size: 'md', disabled: false,
  },
};

export default meta;

type Story = StoryObj<ButtonIconProps>;

export const Playground: Story = {
  args: {
    icon: <Plus />, 'aria-label': 'Adicionar',
  },
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 16 }}>
      <ButtonIcon icon={<Plus />} aria-label="Adicionar" variant="primary" />
      <ButtonIcon icon={<Edit />} aria-label="Editar" variant="outline" />
      <ButtonIcon icon={<Trash2 />} aria-label="Excluir" variant="danger" />
      <ButtonIcon icon={<Plus />} aria-label="Ghost" variant="ghost" />
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 16 }}>
      <ButtonIcon icon={<Plus />} aria-label="Pequeno" size="sm" />
      <ButtonIcon icon={<Plus />} aria-label="Médio" size="md" />
      <ButtonIcon icon={<Plus />} aria-label="Grande" size="lg" />
    </div>
  ),
}; 