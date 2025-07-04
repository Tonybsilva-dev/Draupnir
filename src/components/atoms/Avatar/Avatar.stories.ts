import { Meta, StoryObj } from "@storybook/react";
import Avatar, { AvatarProps } from "./Avatar";

const meta: Meta<AvatarProps> = {
  title: "Atoms/Avatar",
  component: Avatar,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
## Avatar

O componente Avatar exibe imagens de perfil ou ícones de usuário de forma circular e responsiva.

### Características
- **Tamanhos**: xs, sm, md, lg para diferentes contextos
- **Fallback**: Ícone padrão quando não há imagem
- **Acessível**: Suporte a descrições alt para leitores de tela
- **Interativo**: Estados hover e focus para melhor UX
- **Flexível**: Aceita imagens ou renderiza ícone padrão

### Uso
\`\`\`tsx
import { Avatar } from '@/components/atoms/Avatar';

// Com imagem
<Avatar 
  image="/path/to/image.jpg" 
  description="Foto de João Silva"
  size="md" 
/>

// Sem imagem (ícone padrão)
<Avatar size="lg" description="Usuário anônimo" />
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    image: {
      description: "URL da imagem do avatar",
      control: { type: "text" },
      table: {
        type: { summary: "string" },
        category: "Props",
      },
    },
    description: {
      description: "Descrição para acessibilidade (alt text)",
      control: { type: "text" },
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "" },
        category: "Props",
      },
    },
    size: {
      description: "Tamanho do avatar",
      control: { type: "select" },
      options: ["xs", "sm", "md", "lg"],
      table: {
        type: { summary: "xs | sm | md | lg" },
        defaultValue: { summary: "xs" },
        category: "Props",
      },
    },
    className: {
      description: "Classes CSS adicionais",
      control: { type: "text" },
      table: {
        type: { summary: "string" },
        category: "Props",
      },
    },
  },
  args: {
    size: "md",
    description: "Avatar do usuário",
  },
};

export default meta;

type Story = StoryObj<AvatarProps>;

/**
 * ## Avatar com Imagem
 * 
 * Avatar exibindo uma imagem de perfil do usuário.
 */
export const WithImage: Story = {
  args: {
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    description: "Foto de João Silva",
    size: "md",
  },
  parameters: {
    docs: {
      description: {
        story: "Avatar com imagem de perfil. Ideal para usuários que possuem foto cadastrada.",
      },
    },
  },
};

/**
 * ## Avatar com Ícone
 * 
 * Avatar exibindo ícone padrão quando não há imagem.
 */
export const WithIcon: Story = {
  args: {
    description: "Usuário sem foto",
    size: "md",
  },
  parameters: {
    docs: {
      description: {
        story: "Avatar com ícone padrão. Usado quando o usuário não possui imagem de perfil.",
      },
    },
  },
};

/**
 * ## Avatar Extra Pequeno
 * 
 * Avatar de tamanho xs para contextos compactos.
 */
export const ExtraSmall: Story = {
  args: {
    size: "xs",
    description: "Avatar extra pequeno",
  },
  parameters: {
    docs: {
      description: {
        story: "Avatar extra pequeno ideal para listas compactas ou elementos de interface densos.",
      },
    },
  },
};

/**
 * ## Avatar Pequeno
 * 
 * Avatar de tamanho sm para contextos moderados.
 */
export const Small: Story = {
  args: {
    size: "sm",
    description: "Avatar pequeno",
  },
  parameters: {
    docs: {
      description: {
        story: "Avatar pequeno para headers, navegação ou elementos secundários.",
      },
    },
  },
};

/**
 * ## Avatar Médio
 * 
 * Avatar de tamanho md para uso geral.
 */
export const Medium: Story = {
  args: {
    size: "md",
    description: "Avatar médio",
  },
  parameters: {
    docs: {
      description: {
        story: "Avatar médio para uso geral em listas de usuários e interfaces principais.",
      },
    },
  },
};

/**
 * ## Avatar Grande
 * 
 * Avatar de tamanho lg para destaque.
 */
export const Large: Story = {
  args: {
    size: "lg",
    description: "Avatar grande",
  },
  parameters: {
    docs: {
      description: {
        story: "Avatar grande para perfis de usuário, cards de destaque ou elementos principais.",
      },
    },
  },
}; 