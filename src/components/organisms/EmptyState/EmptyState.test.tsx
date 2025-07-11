import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { EmptyState } from './EmptyState';
import { Folder, Inbox } from 'lucide-react';
import { Button } from '../../atoms/Button/Button';

describe('EmptyState', () => {
  const user = userEvent.setup();

  it('renderiza o componente vazio quando não há props', () => {
    render(<EmptyState />);
    const container = screen.getByTestId('empty-state');
    expect(container).toBeInTheDocument();
  });

  it('renderiza ícone quando fornecido', () => {
    render(<EmptyState icon={<Inbox data-testid="test-icon" />} title="Test" />);
    expect(screen.getByTestId('test-icon')).toBeInTheDocument();
  });

  it('renderiza título quando fornecido', () => {
    render(<EmptyState title="Sem dados" />);
    expect(screen.getByText('Sem dados')).toBeInTheDocument();
  });

  it('não renderiza título quando não fornecido', () => {
    render(<EmptyState />);
    expect(screen.queryByRole('heading')).not.toBeInTheDocument();
  });

  it('renderiza descrição quando fornecida', () => {
    render(<EmptyState title="Test" description="Descrição de teste" />);
    expect(screen.getByText('Descrição de teste')).toBeInTheDocument();
  });

  it('permite customizar ícone, título, descrição e ação', () => {
    render(
      <EmptyState
        icon={<Folder data-testid="custom-icon" />}
        title="Sem pastas"
        description="Você ainda não criou nenhuma pasta."
        action={<Button>Nova pasta</Button>}
      />
    );
    expect(screen.getByTestId('custom-icon')).toBeInTheDocument();
    expect(screen.getByText('Sem pastas')).toBeInTheDocument();
    expect(screen.getByText('Você ainda não criou nenhuma pasta.')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /nova pasta/i })).toBeInTheDocument();
  });

  it('aciona ação ao clicar no botão', async () => {
    const handleClick = jest.fn();
    render(
      <EmptyState
        action={<Button onClick={handleClick}>Adicionar</Button>}
      />
    );
    const button = screen.getByRole('button', { name: /adicionar/i });
    await user.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('é acessível: título e descrição são visíveis', () => {
    render(<EmptyState title="Sem dados" description="Nada para mostrar." />);
    expect(screen.getByText('Sem dados')).toBeInTheDocument();
    expect(screen.getByText('Nada para mostrar.')).toBeInTheDocument();
  });

  it('aplica className customizada', () => {
    render(<EmptyState className="custom-class" />);
    const container = screen.getByTestId('empty-state');
    expect(container).toHaveClass('custom-class');
  });
}); 