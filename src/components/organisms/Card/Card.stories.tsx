import type { Meta, StoryObj } from '@storybook/react';
import Card, { CardCompound } from './Card';
import Typography from '../../atoms/Typography/Typography';
import { Button } from '../../atoms/Button/Button';
import { Heart, Share, MoreVertical } from 'lucide-react';

const meta: Meta<typeof Card> = {
  title: 'Organisms/Card',
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

// Card com Imagem
export const WithImage: Story = {
  args: {
    children: (
      <>
        <CardCompound.Image
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop"
          alt="Mountain landscape"
          aspectRatio="wide"
        />
        <CardCompound.Header>
          <Typography size="xl" className="font-semibold">Mountain Adventure</Typography>
          <Typography size="sm" className="text-gray-600">Explore the great outdoors</Typography>
        </CardCompound.Header>
        <CardCompound.Content>
          <p>Discover breathtaking mountain views and challenging trails that will test your limits.</p>
        </CardCompound.Content>
        <CardCompound.Footer>
          <span className="text-sm text-gray-500">2 hours ago</span>
          <CardCompound.Action>Learn More</CardCompound.Action>
        </CardCompound.Footer>
      </>
    ),
  },
};

// Card com Avatar
export const WithAvatar: Story = {
  args: {
    children: (
      <>
        <CardCompound.Header
          avatar="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
          avatarName="John Doe"
          actions={
            <button className="p-1 hover:bg-gray-100 rounded">
              <MoreVertical className="w-4 h-4" />
            </button>
          }
        >
          <Typography size="xl" className="font-semibold">John Doe</Typography>
          <Typography size="sm" className="text-gray-600">Software Engineer</Typography>
        </CardCompound.Header>
        <CardCompound.Content>
          <p>Passionate about creating amazing user experiences and building scalable applications.</p>
        </CardCompound.Content>
        <CardCompound.Footer>
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-1 text-gray-500 hover:text-red-500">
              <Heart className="w-4 h-4" />
              <span className="text-sm">24</span>
            </button>
            <button className="flex items-center gap-1 text-gray-500 hover:text-blue-500">
              <Share className="w-4 h-4" />
              <span className="text-sm">Share</span>
            </button>
          </div>
          <CardCompound.Action variant="outline">Follow</CardCompound.Action>
        </CardCompound.Footer>
      </>
    ),
  },
};

// Card Clicável
export const Clickable: Story = {
  args: {
    onClick: () => alert('Card clicked!'),
    children: (
      <>
        <CardCompound.Image
          src="https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=400&h=300&fit=crop"
          alt="Product image"
          aspectRatio="square"
        />
        <CardCompound.Header>
          <Typography size="xl" className="font-semibold">Premium Product</Typography>
          <Typography size="sm" className="text-gray-600">High quality design</Typography>
        </CardCompound.Header>
        <CardCompound.Content>
          <p>This is a clickable card that responds to user interaction. Try clicking it!</p>
        </CardCompound.Content>
        <CardCompound.Footer>
          <span className="text-lg font-semibold text-green-600">$99.99</span>
          <CardCompound.Action>Add to Cart</CardCompound.Action>
        </CardCompound.Footer>
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

// Estados
export const States: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-8 max-w-4xl mx-auto">
      <div className="text-center">
        <Card disabled className="mb-4">
          <CardCompound.Header>
            <Typography size="xl" className="font-semibold">Disabled Card</Typography>
          </CardCompound.Header>
          <CardCompound.Content>
            <p className="text-gray-600">Este card está desabilitado e não pode ser interagido.</p>
          </CardCompound.Content>
          <CardCompound.Footer>
            <CardCompound.Action disabled>Ação</CardCompound.Action>
          </CardCompound.Footer>
        </Card>
        <div className="text-sm text-gray-500">
          <strong>Estado:</strong> Desabilitado<br />
          <strong>Comportamento:</strong> Não interativo, visual atenuado
        </div>
      </div>

      <div className="text-center">
        <Card loading className="mb-4">
          <CardCompound.Header>
            <Typography size="xl" className="font-semibold">Loading Card</Typography>
          </CardCompound.Header>
          <CardCompound.Content>
            <p className="text-gray-600">Este card está em estado de carregamento.</p>
          </CardCompound.Content>
          <CardCompound.Footer>
            <CardCompound.Action>Ação</CardCompound.Action>
          </CardCompound.Footer>
        </Card>
        <div className="text-sm text-gray-500">
          <strong>Estado:</strong> Carregando<br />
          <strong>Comportamento:</strong> Spinner, não interativo
        </div>
      </div>
    </div>
  ),
};

// Aspect Ratios
export const AspectRatios: Story = {
  render: () => (
    <div className="space-y-8 max-w-6xl mx-auto">
      <div className="grid grid-cols-3 gap-6">
        <div className="text-center">
          <Card className="mb-4">
            <CardCompound.Image
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop"
              alt="Square image"
              aspectRatio="square"
            />
            <CardCompound.Header>
              <Typography size="xl" className="font-semibold">Square</Typography>
            </CardCompound.Header>
            <CardCompound.Content>
              <p className="text-gray-600">Proporção 1:1</p>
            </CardCompound.Content>
          </Card>
          <div className="text-sm text-gray-500">
            <strong>Proporção:</strong> 1:1<br />
            <strong>Uso:</strong> Avatares, produtos
          </div>
        </div>

        <div className="text-center">
          <Card className="mb-4">
            <CardCompound.Image
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=225&fit=crop"
              alt="Video image"
              aspectRatio="video"
            />
            <CardCompound.Header>
              <Typography size="xl" className="font-semibold">Video</Typography>
            </CardCompound.Header>
            <CardCompound.Content>
              <p className="text-gray-600">Proporção 16:9</p>
            </CardCompound.Content>
          </Card>
          <div className="text-sm text-gray-500">
            <strong>Proporção:</strong> 16:9<br />
            <strong>Uso:</strong> Vídeos, banners
          </div>
        </div>

        <div className="text-center">
          <Card className="mb-4">
            <CardCompound.Image
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=225&fit=crop"
              alt="Wide image"
              aspectRatio="wide"
            />
            <CardCompound.Header>
              <Typography size="xl" className="font-semibold">Wide</Typography>
            </CardCompound.Header>
            <CardCompound.Content>
              <p className="text-gray-600">Proporção 16:9</p>
            </CardCompound.Content>
          </Card>
          <div className="text-sm text-gray-500">
            <strong>Proporção:</strong> 16:9<br />
            <strong>Uso:</strong> Imagens panorâmicas
          </div>
        </div>
      </div>
    </div>
  ),
};

// Ações
export const Actions: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-8 max-w-4xl mx-auto">
      <div className="text-center">
        <Card className="mb-4">
          <CardCompound.Header>
            <Typography size="xl" className="font-semibold">Primary Action</Typography>
          </CardCompound.Header>
          <CardCompound.Content>
            <p className="text-gray-600">Card com botão de ação principal</p>
          </CardCompound.Content>
          <CardCompound.Footer>
            <CardCompound.Action>Primary</CardCompound.Action>
          </CardCompound.Footer>
        </Card>
        <div className="text-sm text-gray-500">
          <strong>Variante:</strong> Primary<br />
          <strong>Uso:</strong> Ação principal
        </div>
      </div>

      <div className="text-center">
        <Card className="mb-4">
          <CardCompound.Header>
            <Typography size="xl" className="font-semibold">Secondary Action</Typography>
          </CardCompound.Header>
          <CardCompound.Content>
            <p className="text-gray-600">Card com botão de ação secundária</p>
          </CardCompound.Content>
          <CardCompound.Footer>
            <CardCompound.Action variant="outline">Secondary</CardCompound.Action>
          </CardCompound.Footer>
        </Card>
        <div className="text-sm text-gray-500">
          <strong>Variante:</strong> Outline<br />
          <strong>Uso:</strong> Ações alternativas
        </div>
      </div>

      <div className="text-center">
        <Card className="mb-4">
          <CardCompound.Header>
            <Typography size="xl" className="font-semibold">Multiple Actions</Typography>
          </CardCompound.Header>
          <CardCompound.Content>
            <p className="text-gray-600">Card com múltiplas ações</p>
          </CardCompound.Content>
          <CardCompound.Footer>
            <div className="flex gap-2 justify-center">
              <CardCompound.Action variant="outline" size="sm">Cancelar</CardCompound.Action>
              <CardCompound.Action size="sm">Confirmar</CardCompound.Action>
            </div>
          </CardCompound.Footer>
        </Card>
        <div className="text-sm text-gray-500">
          <strong>Múltiplas ações</strong><br />
          <strong>Uso:</strong> Formulários complexos
        </div>
      </div>

      <div className="text-center">
        <Card className="mb-4">
          <CardCompound.Header>
            <Typography size="xl" className="font-semibold">Ghost Action</Typography>
          </CardCompound.Header>
          <CardCompound.Content>
            <p className="text-gray-600">Card com ação sutil</p>
          </CardCompound.Content>
          <CardCompound.Footer>
            <CardCompound.Action variant="ghost">Ghost</CardCompound.Action>
          </CardCompound.Footer>
        </Card>
        <div className="text-sm text-gray-500">
          <strong>Variante:</strong> Ghost<br />
          <strong>Uso:</strong> Ações sutis
        </div>
      </div>
    </div>
  ),
};

// Interatividade
export const Interactivity: Story = {
  render: () => (
    <div className="space-y-8 max-w-4xl mx-auto">
      <div className="text-center">
        <h3 className="text-lg font-semibold mb-4">Card Clicável</h3>
        <Card onClick={() => alert('Card clicado!')} className="mb-4">
          <CardCompound.Image
            src="https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=400&h=300&fit=crop"
            alt="Product image"
            aspectRatio="square"
          />
          <CardCompound.Header>
            <Typography size="xl" className="font-semibold">Produto Premium</Typography>
            <Typography size="sm" className="text-gray-600">Design de alta qualidade</Typography>
          </CardCompound.Header>
          <CardCompound.Content>
            <p className="text-gray-600">Este card é clicável e responde à interação do usuário. Experimente clicar nele!</p>
          </CardCompound.Content>
          <CardCompound.Footer>
            <span className="text-lg font-semibold text-green-600">R$ 99,99</span>
            <CardCompound.Action>Adicionar ao Carrinho</CardCompound.Action>
          </CardCompound.Footer>
        </Card>
        <div className="text-sm text-gray-500">
          <strong>Comportamento:</strong> Clique ativa o card<br />
          <strong>Navegação:</strong> Enter/Space para ativar
        </div>
      </div>

      <div className="text-center">
        <h3 className="text-lg font-semibold mb-4">Card com Hover Effects</h3>
        <div className="grid grid-cols-3 gap-6">
          <Card variant="default" className="transition-all duration-300 hover:scale-105">
            <CardCompound.Header>
              <Typography size="xl" className="font-semibold">Default</Typography>
            </CardCompound.Header>
            <CardCompound.Content>
              <p className="text-gray-600">Hover suave</p>
            </CardCompound.Content>
          </Card>

          <Card variant="elevated" className="transition-all duration-300 hover:scale-105">
            <CardCompound.Header>
              <Typography size="xl" className="font-semibold">Elevated</Typography>
            </CardCompound.Header>
            <CardCompound.Content>
              <p className="text-gray-600">Sombra aumentada</p>
            </CardCompound.Content>
          </Card>

          <Card variant="outlined" className="transition-all duration-300 hover:scale-105">
            <CardCompound.Header>
              <Typography size="xl" className="font-semibold">Outlined</Typography>
            </CardCompound.Header>
            <CardCompound.Content>
              <p className="text-gray-600">Borda destacada</p>
            </CardCompound.Content>
          </Card>
        </div>
        <div className="text-sm text-gray-500 mt-4">
          <strong>Efeitos:</strong> Scale, shadow, border changes<br />
          <strong>Duração:</strong> 300ms transition
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