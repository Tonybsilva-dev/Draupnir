import { render, screen } from '@testing-library/react';
import Table from './Table';

describe('Table', () => {
  it('renderiza cabeçalho e células corretamente', () => {
    render(
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
    );
    expect(screen.getByText('ID')).toBeInTheDocument();
    expect(screen.getByText('Nome')).toBeInTheDocument();
    expect(screen.getByText('Antonio')).toBeInTheDocument();
    expect(screen.getByText('Maria')).toBeInTheDocument();
  });

  it('aplica font-weight correto para header', () => {
    render(
      <Table.Root>
        <Table.Head>
          <Table.Row>
            <Table.Cell header>ID</Table.Cell>
          </Table.Row>
        </Table.Head>
      </Table.Root>
    );
    const th = screen.getByText('ID').closest('th');
    expect(th).toHaveStyle('font-weight: 500');
  });

  it('aplica font-weight correto para célula normal', () => {
    render(
      <Table.Root>
        <Table.Body>
          <Table.Row>
            <Table.Cell>1</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table.Root>
    );
    const td = screen.getByText('1').closest('td');
    expect(td).toHaveStyle('font-weight: 400');
  });

  it('aplica striping corretamente', () => {
    render(
      <Table.Root>
        <Table.Body>
          <Table.Row striped index={0}>
            <Table.Cell>Primeira</Table.Cell>
          </Table.Row>
          <Table.Row striped index={1}>
            <Table.Cell>Segunda</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table.Root>
    );
    const firstRow = screen.getByText('Primeira').closest('tr');
    const secondRow = screen.getByText('Segunda').closest('tr');
    expect(firstRow).not.toHaveStyle('background: rgb(var(--bg-disabled))');
    expect(secondRow).toHaveStyle('background: rgb(var(--bg-disabled))');
  });

  it('é acessível por padrão', () => {
    render(
      <Table.Root>
        <Table.Head>
          <Table.Row>
            <Table.Cell header>ID</Table.Cell>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          <Table.Row>
            <Table.Cell>1</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table.Root>
    );
    const table = screen.getByRole('table');
    expect(table).toBeInTheDocument();
  });
}); 