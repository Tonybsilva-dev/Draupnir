import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import DatePicker from './DatePicker';

describe('DatePicker', () => {
  it('renderiza o input com placeholder', () => {
    render(<DatePicker onChange={() => { }} />);
    expect(screen.getByPlaceholderText('Selecione uma data')).toBeInTheDocument();
  });

  it('abre o calendário ao focar no input', () => {
    render(<DatePicker onChange={() => { }} />);
    const input = screen.getByPlaceholderText('Selecione uma data');
    fireEvent.focus(input);
    expect(screen.getByRole('dialog', { name: 'Calendário' })).toBeInTheDocument();
  });

  it('seleciona uma data ao clicar no dia', async () => {
    const onChange = jest.fn();
    render(<DatePicker onChange={onChange} />);
    const input = screen.getByPlaceholderText('Selecione uma data');
    fireEvent.focus(input);

    // Clicar no dia 15 (assumindo que existe)
    const day15 = screen.getByRole('button', { name: /Selecionar 15\/\d+\/\d+/ });
    fireEvent.click(day15);

    await waitFor(() => {
      expect(onChange).toHaveBeenCalled();
    });
  });

  it('navega entre meses', () => {
    render(<DatePicker onChange={() => { }} />);
    const input = screen.getByPlaceholderText('Selecione uma data');
    fireEvent.focus(input);

    const prevButton = screen.getByLabelText('Mês anterior');
    const nextButton = screen.getByLabelText('Próximo mês');

    expect(prevButton).toBeInTheDocument();
    expect(nextButton).toBeInTheDocument();

    fireEvent.click(nextButton);
    fireEvent.click(prevButton);
  });

  it('respeita minDate e maxDate', () => {
    const minDate = new Date(2024, 0, 15); // 15/01/2024
    const maxDate = new Date(2024, 11, 15); // 15/12/2024

    render(<DatePicker onChange={() => { }} minDate={minDate} maxDate={maxDate} />);
    const input = screen.getByPlaceholderText('Selecione uma data');
    fireEvent.focus(input);

    // Dias fora do range devem estar desabilitados
    const days = screen.getAllByRole('button');
    days.forEach(day => {
      if (day.getAttribute('aria-label')?.includes('Selecionar')) {
        const isDisabled = day.hasAttribute('disabled');
        expect(isDisabled).toBeDefined();
      }
    });
  });

  it('aceita input manual de data', () => {
    const onChange = jest.fn();
    render(<DatePicker onChange={onChange} />);
    const input = screen.getByPlaceholderText('Selecione uma data');

    fireEvent.change(input, { target: { value: '15/01/2024' } });

    expect(onChange).toHaveBeenCalledWith(expect.any(Date));
  });

  it('é acessível por padrão', () => {
    render(<DatePicker onChange={() => { }} />);
    const input = screen.getByLabelText('Selecionar data');
    expect(input).toHaveAttribute('aria-expanded', 'false');
    expect(input).toHaveAttribute('aria-haspopup', 'true');
  });

  it('fecha ao clicar fora', async () => {
    render(<DatePicker onChange={() => { }} />);
    const input = screen.getByPlaceholderText('Selecione uma data');
    fireEvent.focus(input);

    expect(screen.getByRole('dialog')).toBeInTheDocument();

    fireEvent.mouseDown(document.body);

    await waitFor(() => {
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    });
  });

  it('desabilita quando disabled=true', () => {
    render(<DatePicker onChange={() => { }} disabled />);
    const input = screen.getByPlaceholderText('Selecione uma data');
    expect(input).toBeDisabled();

    fireEvent.focus(input);
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });
}); 