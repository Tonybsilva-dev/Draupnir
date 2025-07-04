import { Meta, StoryObj } from "@storybook/react";
import { Badge, BadgeProps } from "./Badge";

const meta: Meta<BadgeProps> = {
  title: "Components/Atoms/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
## Badge

O componente Badge é usado para exibir informações de status, contadores ou labels de forma compacta e visualmente atrativa.

### Características
- **Variantes**: Primary, Success, Warning e Danger
- **Compacto**: Design minimalista para não interferir no layout
- **Semântico**: Cores que comunicam significado (verde=sucesso, vermelho=erro)
- **Flexível**: Aceita qualquer conteúdo como children
- **Acessível**: Alto contraste para boa legibilidade

### Uso
\`\`\`tsx
import { Badge } from '@/components/atoms/Badge';

<Badge variant="success">Ativo</Badge>
<Badge variant="warning">Pendente</Badge>
<Badge variant="danger">Erro</Badge>
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    children: {
      description: "Conteúdo do badge",
      control: { type: "text" },
      table: {
        type: { summary: "ReactNode" },
        defaultValue: { summary: "Badge" },
      },
    },
    variant: {
      description: "Variante visual do badge",
      control: { type: "select" },
      options: ["primary", "success", "warning", "danger"],
      table: {
        type: { summary: "primary | success | warning | danger" },
        defaultValue: { summary: "primary" },
      },
    },
  },
  args: {
    children: "Badge",
    variant: "primary",
  },
};

export default meta;

type Story = StoryObj<BadgeProps>;

/**
 * ## Variante Primary
 * 
 * Badge azul para informações gerais e neutras.
 */
export const Primary: Story = {
  args: {
    children: "Primary",
    variant: "primary",
  },
  parameters: {
    docs: {
      description: {
        story: "Badge azul para informações gerais, status neutros ou contadores.",
      },
    },
  },
};

/**
 * ## Variante Success
 * 
 * Badge verde para estados positivos e sucessos.
 */
export const Success: Story = {
  args: {
    children: "Sucesso",
    variant: "success",
  },
  parameters: {
    docs: {
      description: {
        story: "Badge verde para indicar sucesso, conclusão ou status positivo.",
      },
    },
  },
};

/**
 * ## Variante Warning
 * 
 * Badge amarelo para avisos e estados de atenção.
 */
export const Warning: Story = {
  args: {
    children: "Atenção",
    variant: "warning",
  },
  parameters: {
    docs: {
      description: {
        story: "Badge amarelo para avisos, pendências ou estados que requerem atenção.",
      },
    },
  },
};

/**
 * ## Variante Danger
 * 
 * Badge vermelho para erros e estados críticos.
 */
export const Danger: Story = {
  args: {
    children: "Erro",
    variant: "danger",
  },
  parameters: {
    docs: {
      description: {
        story: "Badge vermelho para erros, falhas ou estados críticos que requerem ação imediata.",
      },
    },
  },
};

/**
 * ## Badge Numérico
 * 
 * Badge usado para exibir contadores e números.
 */
export const Numeric: Story = {
  args: {
    children: "42",
    variant: "primary",
  },
  parameters: {
    docs: {
      description: {
        story: "Badge numérico ideal para contadores, notificações ou indicadores de quantidade.",
      },
    },
  },
};

/**
 * ## Badge de Status
 * 
 * Badge usado para indicar status de entidades.
 */
export const Status: Story = {
  args: {
    children: "Ativo",
    variant: "success",
  },
  parameters: {
    docs: {
      description: {
        story: "Badge de status perfeito para indicar o estado atual de usuários, pedidos, sistemas ou qualquer entidade.",
      },
    },
  },
}; 