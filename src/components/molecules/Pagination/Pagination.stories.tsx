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
};

export default meta;

const BasicPagination = () => {
  const [page, setPage] = React.useState(1);
  return <Pagination page={page} onPageChange={setPage} totalPages={5} />;
};

const NoNumbersPagination = () => {
  const [page, setPage] = React.useState(1);
  return <Pagination page={page} onPageChange={setPage} totalPages={5} showNumbers={false} />;
};

const ManyPagesPagination = () => {
  const [page, setPage] = React.useState(10);
  return <Pagination page={page} onPageChange={setPage} totalPages={20} />;
};

export const Basic = { render: () => <BasicPagination />, args: {} };
export const NoNumbers = { render: () => <NoNumbersPagination />, args: {} };
export const ManyPages = { render: () => <ManyPagesPagination />, args: {} }; 