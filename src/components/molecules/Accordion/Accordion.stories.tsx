import { Meta, StoryObj } from "@storybook/react";
import {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionTrigger,
  AccordionContent,
} from "./Accordion";

const meta = {
  title: "Components/Molecules/Accordion",
  component: Accordion,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
## Accordion

O Accordion utiliza a estrutura e subcomponentes do Radix UI, garantindo acessibilidade, animação e flexibilidade total de estilos via CSS externo.

### Exemplo de uso
\`\`\`tsx
<Accordion type="single" defaultValue="item-1" collapsible>
  <AccordionItem value="item-1">
    <AccordionHeader>
      <AccordionTrigger>Getting Started</AccordionTrigger>
    </AccordionHeader>
    <AccordionContent>
      Conteúdo...
    </AccordionContent>
  </AccordionItem>
</Accordion>
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    type: {
      description: "Tipo do Accordion (single ou multiple)",
      control: { type: "select" },
      options: ["single", "multiple"],
      table: {
        type: { summary: "single | multiple" },
        defaultValue: { summary: "single" },
      },
    },
    defaultValue: {
      description: "Item(s) aberto(s) por padrão",
      control: { type: "text" },
      table: {
        type: { summary: "string | string[]" },
      },
    },
    collapsible: {
      description: "Permite fechar todos os itens (apenas single)",
      control: { type: "boolean" },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: true },
      },
    },
  },
  args: {
    type: "single",
    defaultValue: "item-1",
    collapsible: true,
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: (args) => (
    <div style={{ width: '400px' }}>
      <Accordion {...args}>
        <AccordionItem value="item-1">
          <AccordionHeader>
            <AccordionTrigger>Getting Started</AccordionTrigger>
          </AccordionHeader>
          <AccordionContent>
            <p>Aprenda como começar a usar a plataforma.</p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionHeader>
            <AccordionTrigger>Installation</AccordionTrigger>
          </AccordionHeader>
          <AccordionContent>
            <p>Siga os passos para instalar e configurar corretamente.</p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionHeader>
            <AccordionTrigger>Configuration</AccordionTrigger>
          </AccordionHeader>
          <AccordionContent>
            <p>Configure suas preferências e opções avançadas.</p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Basic accordion with three sections, following the Radix UI structure.",
      },
    },
  },
}; 