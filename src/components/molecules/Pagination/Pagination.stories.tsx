import { Meta, StoryObj } from "@storybook/react";
import Pagination from "./Pagination";
import React from "react";

const meta = {
  title: "Components/Molecules/Pagination",
  component: Pagination,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
## Pagination

Componente de paginação acessível, estilizado com tokens do design system, com suporte a navegação, números e botões de primeira/última página.
        `,
      },
    },
  },
  argTypes: {
    page: {
      description: "Página atual (controlada)",
      control: { type: "number" },
      table: {
        type: { summary: "number" },
        defaultValue: { summary: 1 },
      },
    },
    totalPages: {
      description: "Total de páginas",
      control: { type: "number" },
      table: {
        type: { summary: "number" },
        defaultValue: { summary: 1 },
      },
    },
    onPageChange: {
      description: "Callback ao mudar de página",
      control: false,
      table: {
        type: { summary: "(page: number) => void" },
      },
    },
    showNumbers: {
      description: "Exibe os números das páginas",
      control: { type: "boolean" },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: true },
      },
    },
    showFirstLast: {
      description: "Exibe botões de primeira/última página",
      control: { type: "boolean" },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: true },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: (args) => <Pagination {...args} />,
  args: {
    page: 1,
    totalPages: 5,
    onPageChange: () => { },
    showNumbers: true,
    showFirstLast: true,
  },
};

export const Example: Story = {
  render: () => <PaginationExample />,
  args: {
    page: 1,
    totalPages: 10,
    onPageChange: () => { },
    showNumbers: true,
    showFirstLast: true,
  },
};

function PaginationExample() {
  const [page, setPage] = React.useState(1);
  const [totalPages, setTotalPages] = React.useState(10);
  const [showNumbers, setShowNumbers] = React.useState(true);
  const [showFirstLast, setShowFirstLast] = React.useState(true);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 340 }}>
      <Pagination
        page={page}
        onPageChange={setPage}
        totalPages={totalPages}
        showNumbers={showNumbers}
        showFirstLast={showFirstLast}
      />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <label>
          Página atual: <input type="number" min={1} max={totalPages} value={page} onChange={e => setPage(Number(e.target.value))} />
        </label>
        <label>
          Total de páginas: <input type="number" min={1} max={100} value={totalPages} onChange={e => setTotalPages(Number(e.target.value))} />
        </label>
        <label>
          <input type="checkbox" checked={showNumbers} onChange={e => setShowNumbers(e.target.checked)} /> Exibir números
        </label>
        <label>
          <input type="checkbox" checked={showFirstLast} onChange={e => setShowFirstLast(e.target.checked)} /> Exibir primeira/última página
        </label>
        <div>
          <b>Página selecionada:</b> {page}
        </div>
      </div>
    </div>
  );
} 