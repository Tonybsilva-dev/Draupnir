import { Meta, StoryObj } from "@storybook/react";
import { Input, InputRootProps, InputControlProps } from "./Input";
import { UserCircle, Mail, Lock } from "lucide-react";

const meta: Meta<InputRootProps & InputControlProps> = {
  title: "Components/Molecules/Input",
  component: Input.Root,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
## Input

O componente Input é um campo de entrada de texto composto que oferece flexibilidade e acessibilidade para formulários.

### Características
- **Composição**: Arquitetura baseada em composição (Root, Control, Prefix)
- **Acessibilidade**: Labels e mensagens de erro integradas
- **Estados**: Normal, focus, disabled e error
- **Tema**: Suporte completo a tema escuro
- **Flexível**: Suporte a prefixos e customizações

### Uso
\`\`\`tsx
import { Input } from '@/components/molecules/Input';
import { UserCircle } from 'lucide-react';

<Input.Root label="Nome" errorMessage="Nome é obrigatório">
  <Input.Prefix>
    <UserCircle className="h-5 w-5 text-zinc-500" />
  </Input.Prefix>
  <Input.Control placeholder="Digite seu nome" />
</Input.Root>
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    label: {
      description: "Label do campo de entrada",
      control: { type: "text" },
      table: {
        type: { summary: "string" },
        category: "Root",
      },
    },
    errorMessage: {
      description: "Mensagem de erro exibida abaixo do campo",
      control: { type: "text" },
      table: {
        type: { summary: "string" },
        category: "Root",
      },
    },
    className: {
      description: "Classes CSS adicionais para o container",
      control: { type: "text" },
      table: {
        type: { summary: "string" },
        category: "Root",
      },
    },
    disabled: {
      description: "Desabilita o campo de entrada",
      control: { type: "boolean" },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false },
        category: "Control",
      },
    },
    type: {
      description: "Tipo do campo de entrada",
      control: { type: "select" },
      options: ["text", "email", "password", "number", "tel", "url"],
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "text" },
        category: "Control",
      },
    },
    placeholder: {
      description: "Texto de placeholder",
      control: { type: "text" },
      table: {
        type: { summary: "string" },
        category: "Control",
      },
    },
    value: {
      description: "Valor controlado do campo",
      control: { type: "text" },
      table: {
        type: { summary: "string" },
        category: "Control",
      },
    },
    onChange: {
      description: "Função executada quando o valor muda",
      action: "changed",
      table: {
        type: { summary: "(value: string) => void" },
        category: "Control",
      },
    },
  },
  args: {
    label: "Label do campo",
    placeholder: "Digite aqui...",
    type: "text",
    disabled: false,
    errorMessage: "",
  },
};

export default meta;

type Story = StoryObj<InputRootProps & InputControlProps>;

/**
 * ## Playground
 *
 * Story controlável para testar todas as props do Input.
 */
export const Playground: Story = {
  args: {
    label: "Label do campo",
    placeholder: "Digite aqui...",
    type: "text",
    disabled: false,
    errorMessage: "",
  },
  render: (props) => (
    <Input.Root label={props.label} errorMessage={props.errorMessage} className="">
      <Input.Control
        placeholder={props.placeholder}
        type={props.type}
        disabled={props.disabled}
        value={props.value}
        onChange={props.onChange}
      />
    </Input.Root>
  ),
  parameters: {
    docs: {
      description: {
        story: "Playground controlável para testar todas as props do Input.",
      },
    },
  },
};

/**
 * ## Input com Prefixo
 *
 * Exemplo de input com ícone prefixo, mantendo o visual limpo.
 */
export const WithPrefix: StoryObj = {
  render: () => (
    <Input.Root label="E-mail">
      <Input.Prefix>
        <Mail className="h-5 w-5 text-zinc-500" />
      </Input.Prefix>
      <Input.Control placeholder="seu@email.com" />
    </Input.Root>
  ),
  parameters: {
    docs: {
      description: {
        story: "Input com ícone prefixo, mantendo o visual limpo.",
      },
    },
  },
};

/**
 * ## Input Desabilitado
 *
 * Exemplo de input desabilitado, mantendo o visual limpo.
 */
export const Disabled: StoryObj = {
  render: () => (
    <Input.Root label="ID do usuário">
      <Input.Prefix>
        <UserCircle className="h-5 w-5 text-zinc-500" />
      </Input.Prefix>
      <Input.Control placeholder="USR-12345" disabled />
    </Input.Root>
  ),
  parameters: {
    docs: {
      description: {
        story: "Input desabilitado, mantendo o visual limpo.",
      },
    },
  },
};

/**
 * ## Input com Erro
 *
 * Exemplo de input com mensagem de erro, mantendo o visual limpo.
 */
export const WithError: StoryObj = {
  render: () => (
    <Input.Root label="Senha" errorMessage="A senha deve ter pelo menos 8 caracteres">
      <Input.Prefix>
        <Lock className="h-5 w-5 text-zinc-500" />
      </Input.Prefix>
      <Input.Control placeholder="Digite sua senha" type="password" />
    </Input.Root>
  ),
  parameters: {
    docs: {
      description: {
        story: "Input com mensagem de erro, mantendo o visual limpo.",
      },
    },
  },
};
