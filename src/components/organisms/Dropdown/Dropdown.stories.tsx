import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Dropdown } from "./Dropdown";
import { ChevronDown, User, Settings, LogOut } from "lucide-react";

const meta: Meta = {
  title: "Components/Organisms/Dropdown",
  component: Dropdown,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
## Dropdown

O componente Dropdown oferece um menu suspenso interativo com suporte completo a acessibilidade e temas.

### Características
- **Acessível**: Suporte completo a ARIA e navegação por teclado
- **Temático**: Suporte a tema claro e escuro
- **Animado**: Transições suaves de entrada e saída
- **Flexível**: Composição baseada em componentes (Trigger, Content, Item)
- **Responsivo**: Adapta-se a diferentes tamanhos de tela

### Uso
\`\`\`tsx
import { Dropdown } from '@/components/organisms/Dropdown';
import { Button } from '@/components/atoms/Button';

<Dropdown>
  <Dropdown.Trigger asChild>
    <Button variant="outline">Abrir Menu</Button>
  </Dropdown.Trigger>
  <Dropdown.Content>
    <Dropdown.Item>Opção 1</Dropdown.Item>
    <Dropdown.Item>Opção 2</Dropdown.Item>
  </Dropdown.Content>
</Dropdown>
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    buttonText: {
      description: "Texto do botão trigger",
      control: "text",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "Dropdown" },
      },
    },
    item1Text: {
      description: "Texto do primeiro item",
      control: "text",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "Item 1" },
      },
    },
    item2Text: {
      description: "Texto do segundo item",
      control: "text",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "Item 2" },
      },
    },
  },
  args: {
    buttonText: "Dropdown",
    item1Text: "Item 1",
    item2Text: "Item 2",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * ## Dropdown Simples
 * 
 * Dropdown básico para teste.
 */
export const Simple: Story = {
  render: () => (
    <Dropdown>
      <Dropdown.Trigger asChild>
        <button className="px-4 py-2 bg-blue-500 text-black rounded">
          Abrir Menu
        </button>
      </Dropdown.Trigger>
      <Dropdown.Content>
        <Dropdown.Item>Opção 1</Dropdown.Item>
        <Dropdown.Item>Opção 2</Dropdown.Item>
        <Dropdown.Item>Opção 3</Dropdown.Item>
      </Dropdown.Content>
    </Dropdown>
  ),
};

/**
 * ## Dropdown Básico
 * 
 * Dropdown simples com duas opções.
 */
export const Basic: Story = {
  render: ({ buttonText, item1Text, item2Text }) => (
    <Dropdown>
      <Dropdown.Trigger asChild>
        <button className="px-4 py-2 bg-white border border-zinc-300 text-zinc-700 rounded-md hover:bg-zinc-50">
          {buttonText}
        </button>
      </Dropdown.Trigger>
      <Dropdown.Content>
        <Dropdown.Item onSelect={() => console.log(`${item1Text} selected`)}>
          {item1Text}
        </Dropdown.Item>
        <Dropdown.Item onSelect={() => console.log(`${item2Text} selected`)}>
          {item2Text}
        </Dropdown.Item>
      </Dropdown.Content>
    </Dropdown>
  ),
  parameters: {
    docs: {
      description: {
        story: "Dropdown básico com trigger e duas opções simples.",
      },
    },
  },
};

/**
 * ## Dropdown com Ícones
 * 
 * Dropdown com ícones para melhor identificação visual.
 */
export const WithIcons: Story = {
  render: () => (
    <Dropdown>
      <Dropdown.Trigger asChild>
        <button className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-zinc-300 text-zinc-700 rounded-md hover:bg-zinc-50">
          Perfil
          <ChevronDown className="h-4 w-4" />
        </button>
      </Dropdown.Trigger>
      <Dropdown.Content>
        <Dropdown.Item onSelect={() => console.log("Profile selected")}>
          <User className="mr-2 h-4 w-4" />
          Perfil
        </Dropdown.Item>
        <Dropdown.Item onSelect={() => console.log("Settings selected")}>
          <Settings className="mr-2 h-4 w-4" />
          Configurações
        </Dropdown.Item>
        <Dropdown.Item onSelect={() => console.log("Logout selected")}>
          <LogOut className="mr-2 h-4 w-4" />
          Sair
        </Dropdown.Item>
      </Dropdown.Content>
    </Dropdown>
  ),
  parameters: {
    docs: {
      description: {
        story: "Dropdown com ícones para melhor identificação visual das opções.",
      },
    },
  },
};

/**
 * ## Dropdown de Ações
 * 
 * Dropdown com diferentes tipos de ações.
 */
export const Actions: Story = {
  render: () => (
    <Dropdown>
      <Dropdown.Trigger asChild>
        <button className="px-4 py-2 bg-primary text-black rounded-md hover:bg-hover">
          Ações
        </button>
      </Dropdown.Trigger>
      <Dropdown.Content>
        <Dropdown.Item onSelect={() => console.log("Edit selected")}>
          Editar
        </Dropdown.Item>
        <Dropdown.Item onSelect={() => console.log("Duplicate selected")}>
          Duplicar
        </Dropdown.Item>
        <Dropdown.Item onSelect={() => console.log("Archive selected")}>
          Arquivar
        </Dropdown.Item>
        <Dropdown.Item onSelect={() => console.log("Delete selected")} className="text-red-600 focus:text-red-600">
          Excluir
        </Dropdown.Item>
      </Dropdown.Content>
    </Dropdown>
  ),
  parameters: {
    docs: {
      description: {
        story: "Dropdown com diferentes tipos de ações, incluindo ações destrutivas.",
      },
    },
  },
};
