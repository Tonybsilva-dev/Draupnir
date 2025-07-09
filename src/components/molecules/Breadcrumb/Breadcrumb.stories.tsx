import { Meta, StoryObj } from "@storybook/react";
import { Breadcrumb } from "./Breadcrumb";

const meta = {
  title: "Components/Molecules/Breadcrumb",
  component: Breadcrumb.Root,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
## Breadcrumb

O componente Breadcrumb fornece contexto de navegação e ajuda o usuário a entender sua localização na hierarquia do site.
        `,
      },
    },
  },
  argTypes: {
    label: {
      description: "Accessibility label for the navigation",
      control: { type: "text" },
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "Breadcrumb navigation" },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * ## Basic
 * Navegação simples com home, separador padrão e página atual.
 */
export const Basic: Story = {
  args: {
    children: (
      <>
        <Breadcrumb.Home />
        <Breadcrumb.Separator />
        <Breadcrumb.Item href="/products">Products</Breadcrumb.Item>
        <Breadcrumb.Separator />
        <Breadcrumb.Item isCurrent>Current Page</Breadcrumb.Item>
      </>
    ),
  },
};