import { Meta, StoryObj } from "@storybook/react";
import Table from "./Table";

const meta = {
  title: "Components/Molecules/Table",
  component: Table.Root,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
## Table

Tabela acessível, estilizada com tokens do design system, com suporte a cabeçalho, linhas, células e striping.
        `,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    children: (
      <Table.Root>
        <Table.Head>
          <Table.Row>
            <Table.Cell header>ID</Table.Cell>
            <Table.Cell header>Nome</Table.Cell>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          <Table.Row>
            <Table.Cell>1</Table.Cell>
            <Table.Cell>Antonio</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>2</Table.Cell>
            <Table.Cell>Maria</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table.Root>
    ),
  },
};

export const Striped: Story = {
  args: {
    children: (
      <Table.Root>
        <Table.Head>
          <Table.Row>
            <Table.Cell header>ID</Table.Cell>
            <Table.Cell header>Produto</Table.Cell>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          <Table.Row striped index={0}>
            <Table.Cell>1</Table.Cell>
            <Table.Cell>Notebook</Table.Cell>
          </Table.Row>
          <Table.Row striped index={1}>
            <Table.Cell>2</Table.Cell>
            <Table.Cell>Mouse</Table.Cell>
          </Table.Row>
          <Table.Row striped index={2}>
            <Table.Cell>3</Table.Cell>
            <Table.Cell>Teclado</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table.Root>
    ),
  },
};

export const CustomHeader: Story = {
  args: {
    children: (
      <Table.Root>
        <Table.Head>
          <Table.Row>
            <Table.Cell header>ID</Table.Cell>
            <Table.Cell header>Categoria</Table.Cell>
            <Table.Cell header>Valor</Table.Cell>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          <Table.Row>
            <Table.Cell>1</Table.Cell>
            <Table.Cell>Eletrônicos</Table.Cell>
            <Table.Cell>R$ 2.000,00</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table.Root>
    ),
  },
}; 