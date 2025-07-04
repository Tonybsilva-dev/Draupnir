import { Meta, StoryObj } from "@storybook/react";
import { Button, ButtonProps } from "./Button";

const meta: Meta<ButtonProps> = {
  title: "Atoms/Button",
  component: Button,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
## Botão

O componente Button é um elemento fundamental do Draupnir Design System, oferecendo diferentes variantes visuais e estados para ações do usuário.

### Características
- **Acessibilidade**: Suporte completo a ARIA labels e roles
- **Estados**: Normal, hover, focus, disabled e loading
- **Variantes**: Primary, Outline e Ghost
- **Responsivo**: Adapta-se a diferentes tamanhos de tela
- **Performance**: Otimizado com Tailwind Variants

### Uso
\`\`\`tsx
import { Button } from '@/components/atoms/Button';

<Button variant="primary" onClick={handleClick}>
  Clique aqui
</Button>
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    children: {
      description: "Conteúdo do botão",
      control: { type: "text" },
      table: {
        type: { summary: "ReactNode" },
        defaultValue: { summary: "Button" },
      },
    },
    variant: {
      description: "Variante visual do botão",
      control: { type: "select" },
      options: ["primary", "outline", "ghost"],
      table: {
        type: { summary: "primary | outline | ghost" },
        defaultValue: { summary: "primary" },
      },
    },
    isLoading: {
      description: "Exibe um indicador de carregamento",
      control: { type: "boolean" },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false },
      },
    },
    disabled: {
      description: "Desabilita o botão",
      control: { type: "boolean" },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false },
      },
    },
    className: {
      description: "Classes CSS adicionais",
      control: { type: "text" },
      table: {
        type: { summary: "string" },
      },
    },
    onClick: {
      description: "Função executada ao clicar",
      action: "clicked",
      table: {
        type: { summary: "() => void" },
      },
    },
  },
  args: {
    children: "Button",
    variant: "primary",
    isLoading: false,
    disabled: false,
  },
};

export default meta;

type Story = StoryObj<ButtonProps>;

/**
 * ## Variante Primary
 * 
 * Botão principal com fundo verde e texto branco. Ideal para ações principais da interface.
 */
export const Primary: Story = {
  args: {
    children: "Primary Button",
    variant: "primary",
  },
  parameters: {
    docs: {
      description: {
        story: "Botão principal com destaque visual máximo. Use para ações importantes como 'Salvar', 'Confirmar' ou 'Enviar'.",
      },
    },
  },
};

/**
 * ## Variante Outline
 * 
 * Botão com borda e fundo transparente. Mantém a hierarquia visual sem ser intrusivo.
 */
export const Outline: Story = {
  args: {
    children: "Outline Button",
    variant: "outline",
  },
  parameters: {
    docs: {
      description: {
        story: "Botão secundário com borda. Ideal para ações complementares ou cancelamentos.",
      },
    },
  },
};

/**
 * ## Variante Ghost
 * 
 * Botão discreto sem bordas ou fundo. Perfeito para ações sutis e navegação.
 */
export const Ghost: Story = {
  args: {
    children: "Ghost Button",
    variant: "ghost",
  },
  parameters: {
    docs: {
      description: {
        story: "Botão discreto para ações menos importantes ou navegação interna.",
      },
    },
  },
};

/**
 * ## Estado Loading
 * 
 * Botão com indicador de carregamento. Desabilita automaticamente durante o processo.
 */
export const Loading: Story = {
  args: {
    children: "Loading Button",
    variant: "outline",
    isLoading: true,
  },
  parameters: {
    docs: {
      description: {
        story: "Use este estado quando a ação do botão requer tempo de processamento. O botão fica automaticamente desabilitado.",
      },
    },
  },
};

/**
 * ## Estado Disabled
 * 
 * Botão desabilitado. Não responde a interações do usuário.
 */
export const Disabled: Story = {
  args: {
    children: "Disabled Button",
    variant: "primary",
    disabled: true,
  },
  parameters: {
    docs: {
      description: {
        story: "Use quando a ação não está disponível no momento atual.",
      },
    },
  },
};

/**
 * ## Tema Escuro
 * 
 * Botão adaptado para o tema escuro da aplicação.
 */
export const DarkTheme: Story = {
  args: {
    children: "Dark Theme Button",
    className: "dark-theme",
  },
  parameters: {
    docs: {
      description: {
        story: "Botão com classes específicas para o tema escuro.",
      },
    },
  },
}; 