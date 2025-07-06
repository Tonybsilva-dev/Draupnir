import type { Meta, StoryObj } from '@storybook/react';
import Card, { CardCompound } from './Card';
import Typography from '../../atoms/Typography/Typography';
import { Heart, Share, MoreVertical } from 'lucide-react';

const meta: Meta<typeof Card> = {
  title: 'COMPONENTS/Organisms/Card',
  component: Card,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'elevated', 'outlined', 'flat'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    disabled: {
      control: { type: 'boolean' },
    },
    loading: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Card Básico
export const Default: Story = {
  args: {
    children: (
      <>
        <CardCompound.Header>
          <Typography size="xl" className="font-semibold">Card Title</Typography>
          <Typography size="sm" className="text-gray-600">Card subtitle</Typography>
        </CardCompound.Header>
        <CardCompound.Content>
          <p>This is a basic card with some content. It can contain any type of content including text, images, and other components.</p>
        </CardCompound.Content>
      </>
    ),
  },
};

// Variantes
export const Variants: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-6 max-w-4xl mx-auto">
      <Card variant="default" className="h-full">
        <CardCompound.Header>
          <Typography size="xl" className="font-semibold">Default</Typography>
        </CardCompound.Header>
        <CardCompound.Content>
          <p className="text-gray-600">Design limpo com sombra sutil, ideal para uso geral.</p>
        </CardCompound.Content>
        <CardCompound.Footer>
          <CardCompound.Action size="sm">Ação</CardCompound.Action>
        </CardCompound.Footer>
      </Card>

      <Card variant="elevated" className="h-full">
        <CardCompound.Header>
          <Typography size="xl" className="font-semibold">Elevated</Typography>
        </CardCompound.Header>
        <CardCompound.Content>
          <p className="text-gray-600">Sombra mais pronunciada para destacar conteúdo importante.</p>
        </CardCompound.Content>
        <CardCompound.Footer>
          <CardCompound.Action size="sm">Ação</CardCompound.Action>
        </CardCompound.Footer>
      </Card>

      <Card variant="outlined" className="h-full">
        <CardCompound.Header>
          <Typography size="xl" className="font-semibold">Outlined</Typography>
        </CardCompound.Header>
        <CardCompound.Content>
          <p className="text-gray-600">Borda mais grossa, perfeita para formulários e inputs.</p>
        </CardCompound.Content>
        <CardCompound.Footer>
          <CardCompound.Action size="sm" variant="outline">Ação</CardCompound.Action>
        </CardCompound.Footer>
      </Card>

      <Card variant="flat" className="h-full">
        <CardCompound.Header>
          <Typography size="xl" className="font-semibold">Flat</Typography>
        </CardCompound.Header>
        <CardCompound.Content>
          <p className="text-gray-600">Fundo sutil sem sombra, ideal para listas e grids.</p>
        </CardCompound.Content>
        <CardCompound.Footer>
          <CardCompound.Action size="sm" variant="ghost">Ação</CardCompound.Action>
        </CardCompound.Footer>
      </Card>
    </div>
  ),
};

// Tamanhos
export const Sizes: Story = {
  render: () => (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div className="grid grid-cols-3 gap-6">
        <div className="text-center">
          <Card size="sm" className="mb-4">
            <CardCompound.Header>
              <Typography size="md" className="font-semibold">Small</Typography>
            </CardCompound.Header>
            <CardCompound.Content>
              <p className="text-sm text-gray-600">Design compacto</p>
            </CardCompound.Content>
            <CardCompound.Footer>
              <CardCompound.Action size="sm">Ação</CardCompound.Action>
            </CardCompound.Footer>
          </Card>
          <div className="text-sm text-gray-500">
            <strong>Padding:</strong> 12px<br />
            <strong>Uso:</strong> Cards compactos
          </div>
        </div>

        <div className="text-center">
          <Card size="md" className="mb-4">
            <CardCompound.Header>
              <Typography size="xl" className="font-semibold">Medium</Typography>
            </CardCompound.Header>
            <CardCompound.Content>
              <p className="text-gray-600">Tamanho padrão</p>
            </CardCompound.Content>
            <CardCompound.Footer>
              <CardCompound.Action>Ação</CardCompound.Action>
            </CardCompound.Footer>
          </Card>
          <div className="text-sm text-gray-500">
            <strong>Padding:</strong> 16px<br />
            <strong>Uso:</strong> Uso padrão
          </div>
        </div>

        <div className="text-center">
          <Card size="lg" className="mb-4">
            <CardCompound.Header>
              <Typography size="2xl" className="font-semibold">Large</Typography>
            </CardCompound.Header>
            <CardCompound.Content>
              <p className="text-gray-600">Layout espaçoso</p>
            </CardCompound.Content>
            <CardCompound.Footer>
              <CardCompound.Action size="default">Ação</CardCompound.Action>
            </CardCompound.Footer>
          </Card>
          <div className="text-sm text-gray-500">
            <strong>Padding:</strong> 24px<br />
            <strong>Uso:</strong> Cards espaçosos
          </div>
        </div>
      </div>
    </div>
  ),
};

export const CompleteExample: Story = {
  render: () => (
    <div className="max-w-sm mx-auto">
      <Card variant="default" size="md" className="p-0 overflow-hidden">
        <CardCompound.Image
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&q=80"
          alt="Produto Premium"
          aspectRatio="square"
          className="rounded-none m-0"
        />
        <div className="p-6">
          <CardCompound.Header className="mb-2 p-0">
            <Typography size="xl" className="font-semibold">Produto Premium</Typography>
          </CardCompound.Header>
          <Typography size="sm" className="text-gray-500 mb-2">Categoria: Eletrônicos</Typography>
          <CardCompound.Content className="p-0 mb-4">
            <p className="text-gray-700">Descrição detalhada do produto e seus benefícios.</p>
          </CardCompound.Content>
          <CardCompound.Action size="full">Comprar Agora</CardCompound.Action>
        </div>
      </Card>
    </div>
  ),
}; 