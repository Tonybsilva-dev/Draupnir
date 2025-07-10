import { render, screen, fireEvent } from '@testing-library/react';
import Pagination from './Pagination';

describe('Pagination', () => {
  it('não renderiza se totalPages <= 1', () => {
    const { container } = render(<Pagination page={1} totalPages={1} onPageChange={() => { }} />);
    expect(container.firstChild).toBeNull();
  });

  it('renderiza botões de navegação e números', () => {
    render(<Pagination page={2} totalPages={5} onPageChange={() => { }} />);
    expect(screen.getByLabelText('Primeira página')).toBeInTheDocument();
    expect(screen.getByLabelText('Página anterior')).toBeInTheDocument();
    expect(screen.getByLabelText('Próxima página')).toBeInTheDocument();
    expect(screen.getByLabelText('Última página')).toBeInTheDocument();
    expect(screen.getByText('2')).toHaveAttribute('aria-current', 'page');
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('5')).toBeInTheDocument();
  });

  it('chama onPageChange ao clicar nos botões', () => {
    const onPageChange = jest.fn();
    render(<Pagination page={2} totalPages={3} onPageChange={onPageChange} />);
    fireEvent.click(screen.getByText('1'));
    expect(onPageChange).toHaveBeenCalledWith(1);
    fireEvent.click(screen.getByLabelText('Próxima página'));
    expect(onPageChange).toHaveBeenCalledWith(3);
    fireEvent.click(screen.getByLabelText('Página anterior'));
    expect(onPageChange).toHaveBeenCalledWith(1);
    fireEvent.click(screen.getByLabelText('Última página'));
    expect(onPageChange).toHaveBeenCalledWith(3);
    fireEvent.click(screen.getByLabelText('Primeira página'));
    expect(onPageChange).toHaveBeenCalledWith(1);
  });

  it('desabilita botões quando na primeira página', () => {
    render(<Pagination page={1} totalPages={3} onPageChange={() => { }} />);
    expect(screen.getByLabelText('Primeira página')).toBeDisabled();
    expect(screen.getByLabelText('Página anterior')).toBeDisabled();
    expect(screen.getByLabelText('Próxima página')).not.toBeDisabled();
    expect(screen.getByLabelText('Última página')).not.toBeDisabled();
  });

  it('desabilita botões quando na última página', () => {
    render(<Pagination page={3} totalPages={3} onPageChange={() => { }} />);
    expect(screen.getByLabelText('Primeira página')).not.toBeDisabled();
    expect(screen.getByLabelText('Página anterior')).not.toBeDisabled();
    expect(screen.getByLabelText('Próxima página')).toBeDisabled();
    expect(screen.getByLabelText('Última página')).toBeDisabled();
  });

  it('é acessível por padrão', () => {
    render(<Pagination page={1} totalPages={3} onPageChange={() => { }} />);
    const nav = screen.getByLabelText('Paginação');
    expect(nav).toBeInTheDocument();
  });
}); 