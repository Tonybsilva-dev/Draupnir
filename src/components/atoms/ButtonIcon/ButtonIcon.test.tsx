import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ButtonIcon } from './ButtonIcon';
import { Plus, Edit, Trash2 } from 'lucide-react';

describe('ButtonIcon', () => {
  const user = userEvent.setup();

  it('renderiza o ícone corretamente', () => {
    render(<ButtonIcon icon={<Plus data-testid="icon-plus" />} aria-label="Adicionar" />);
    expect(screen.getByTestId('icon-plus')).toBeInTheDocument();
  });

  it('aplica aria-label corretamente', () => {
    render(<ButtonIcon icon={<Plus />} aria-label="Adicionar item" />);
    expect(screen.getByRole('button')).toHaveAttribute('aria-label', 'Adicionar item');
  });

  it('aplica variante visual', () => {
    render(<ButtonIcon icon={<Edit />} aria-label="Editar" variant="primary" />);
    const button = screen.getByRole('button');
    expect(button).toHaveStyle('background-color: rgb(var(--primary))');
  });

  it('aplica tamanho md por padrão', () => {
    render(<ButtonIcon icon={<Plus />} aria-label="Adicionar" />);
    const button = screen.getByRole('button');
    expect(button).toHaveStyle('width: 40px');
    expect(button).toHaveStyle('height: 40px');
  });

  it('aplica tamanho sm', () => {
    render(<ButtonIcon icon={<Plus />} aria-label="Pequeno" size="sm" />);
    const button = screen.getByRole('button');
    expect(button).toHaveStyle('width: 32px');
    expect(button).toHaveStyle('height: 32px');
  });

  it('aplica tamanho lg', () => {
    render(<ButtonIcon icon={<Plus />} aria-label="Grande" size="lg" />);
    const button = screen.getByRole('button');
    expect(button).toHaveStyle('width: 48px');
    expect(button).toHaveStyle('height: 48px');
  });

  it('fica desabilitado quando disabled', () => {
    render(<ButtonIcon icon={<Trash2 />} aria-label="Excluir" disabled />);
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
    expect(button).toHaveStyle('opacity: 0.5');
  });

  it('chama onClick quando clicado', async () => {
    const handleClick = jest.fn();
    render(<ButtonIcon icon={<Plus />} aria-label="Adicionar" onClick={handleClick} />);
    const button = screen.getByRole('button');
    await user.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('não chama onClick quando desabilitado', async () => {
    const handleClick = jest.fn();
    render(<ButtonIcon icon={<Plus />} aria-label="Adicionar" onClick={handleClick} disabled />);
    const button = screen.getByRole('button');
    await user.click(button);
    expect(handleClick).not.toHaveBeenCalled();
  });

  it('é focável por teclado', async () => {
    render(<ButtonIcon icon={<Plus />} aria-label="Foco" />);
    const button = screen.getByRole('button');
    button.focus();
    expect(button).toHaveFocus();
  });
}); 