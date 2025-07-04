import { render, screen } from '@testing-library/react';
import { Input } from './Input';

describe('Input', () => {
  it('renderiza label e input', () => {
    render(
      <Input.Root label="Nome">
        <Input.Control placeholder="Digite seu nome" />
      </Input.Root>
    );
    expect(screen.getByText('Nome')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Digite seu nome')).toBeInTheDocument();
  });
}); 