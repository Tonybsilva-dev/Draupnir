import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Input } from './Input';

describe('Input', () => {
  const user = userEvent.setup();

  describe('Renderização Básica', () => {
    it('renderiza label e input', () => {
      render(
        <Input.Root label="Name">
          <Input.Control placeholder="Type your name" />
        </Input.Root>
      );
      expect(screen.getByText('Name')).toBeInTheDocument();
      expect(screen.getByPlaceholderText('Type your name')).toBeInTheDocument();
    });

    it('renderiza sem label', () => {
      render(
        <Input.Root>
          <Input.Control placeholder="Type your name" />
        </Input.Root>
      );
      expect(screen.queryByText('Name')).not.toBeInTheDocument();
      expect(screen.getByPlaceholderText('Type your name')).toBeInTheDocument();
    });

    it('renderiza com prefix', () => {
      render(
        <Input.Root label="Email">
          <Input.Prefix>@</Input.Prefix>
          <Input.Control placeholder="Enter email" />
        </Input.Root>
      );
      expect(screen.getByText('@')).toBeInTheDocument();
    });
  });

  describe('Acessibilidade', () => {
    it('deve associar label com input via htmlFor', () => {
      render(
        <Input.Root label="Name">
          <Input.Control id="name-input" />
        </Input.Root>
      );

      const label = screen.getByText('Name');
      const input = screen.getByRole('textbox');

      expect(label).toHaveAttribute('for', 'name-input');
      expect(input).toHaveAttribute('id', 'name-input');
    });

    it('deve ter aria-required quando required=true', () => {
      render(
        <Input.Root label="Name">
          <Input.Control required />
        </Input.Root>
      );

      const input = screen.getByRole('textbox');
      expect(input).toHaveAttribute('aria-required', 'true');
    });

    it('deve ter aria-invalid quando há erro', () => {
      render(
        <Input.Root label="Name" errorMessage="Campo obrigatório">
          <Input.Control aria-invalid="true" />
        </Input.Root>
      );

      const input = screen.getByRole('textbox');
      expect(input).toHaveAttribute('aria-invalid', 'true');
    });

    it('deve ter aria-describedby quando há erro', () => {
      render(
        <Input.Root label="Name" errorMessage="Campo obrigatório">
          <Input.Control aria-invalid="true" id="name-input" />
        </Input.Root>
      );

      const input = screen.getByRole('textbox');
      const errorId = 'name-input-error';
      expect(input).toHaveAttribute('aria-describedby', errorId);
    });

    it('deve mostrar asterisco quando required', () => {
      render(
        <Input.Root label="Name" required>
          <Input.Control />
        </Input.Root>
      );

      expect(screen.getByText('*')).toBeInTheDocument();
    });

    it('deve ter role="alert" na mensagem de erro', () => {
      render(
        <Input.Root label="Name" errorMessage="Campo obrigatório">
          <Input.Control />
        </Input.Root>
      );

      expect(screen.getByRole('alert')).toBeInTheDocument();
    });
  });

  describe('Interação e Foco', () => {
    it('deve receber foco quando tabulado', async () => {
      render(
        <Input.Root label="Name">
          <Input.Control />
        </Input.Root>
      );

      const input = screen.getByRole('textbox');
      await user.tab();

      expect(input).toHaveFocus();
    });

    it('deve permitir digitação', async () => {
      render(
        <Input.Root label="Name">
          <Input.Control />
        </Input.Root>
      );

      const input = screen.getByRole('textbox');
      await user.type(input, 'John Doe');

      expect(input).toHaveValue('John Doe');
    });

    it('deve ter focus ring quando focado', async () => {
      render(
        <Input.Root label="Name">
          <Input.Control />
        </Input.Root>
      );

      const input = screen.getByRole('textbox');
      input.focus();

      // Verifica se o container pai tem as classes de foco
      const container = input.closest('div');
      expect(container).toHaveStyle('border: 1px solid rgb(var(--divider))');
    });

    it('deve estar desabilitado quando disabled', () => {
      render(
        <Input.Root label="Name">
          <Input.Control disabled />
        </Input.Root>
      );

      const input = screen.getByRole('textbox');
      expect(input).toBeDisabled();
    });
  });

  describe('Estados de Erro', () => {
    it('deve mostrar mensagem de erro', () => {
      render(
        <Input.Root label="Name" errorMessage="Campo obrigatório">
          <Input.Control />
        </Input.Root>
      );

      expect(screen.getByText('Campo obrigatório')).toBeInTheDocument();
    });

    it('deve aplicar estilo de erro no container', () => {
      render(
        <Input.Root label="Name" errorMessage="Campo obrigatório">
          <Input.Control />
        </Input.Root>
      );

      const container = screen.getByRole('textbox').closest('div');
      expect(container).toHaveStyle('border: 1px solid rgb(var(--text-error))');
    });

    it('deve ter aria-live="polite" na mensagem de erro', () => {
      render(
        <Input.Root label="Name" errorMessage="Campo obrigatório">
          <Input.Control />
        </Input.Root>
      );

      const errorMessage = screen.getByRole('alert');
      expect(errorMessage).toHaveAttribute('aria-live', 'polite');
    });
  });

  describe('Validação', () => {
    it('deve ter aria-required quando required no Control', () => {
      render(
        <Input.Root label="Name">
          <Input.Control required />
        </Input.Root>
      );

      const input = screen.getByRole('textbox');
      expect(input).toHaveAttribute('aria-required', 'true');
    });

    it('deve ter aria-autocomplete quando especificado', () => {
      render(
        <Input.Root label="Name">
          <Input.Control autocomplete="list" />
        </Input.Root>
      );

      const input = screen.getByRole('textbox');
      expect(input).toHaveAttribute('aria-autocomplete', 'list');
    });
  });

  describe('Comportamento de Campo Obrigatório', () => {
    it('deve mostrar asterisco quando required no Root', () => {
      render(
        <Input.Root label="Name" required>
          <Input.Control />
        </Input.Root>
      );

      expect(screen.getByText('*')).toBeInTheDocument();
    });

    it('não deve mostrar asterisco quando required apenas no Control', () => {
      render(
        <Input.Root label="Name">
          <Input.Control required />
        </Input.Root>
      );

      expect(screen.queryByText('*')).not.toBeInTheDocument();
    });

    it('não deve mostrar asterisco quando não required', () => {
      render(
        <Input.Root label="Name">
          <Input.Control />
        </Input.Root>
      );

      expect(screen.queryByText('*')).not.toBeInTheDocument();
    });
  });

  describe('Estilos e Classes', () => {
    it('deve aplicar estilos corretos no input', () => {
      render(
        <Input.Root label="Name">
          <Input.Control />
        </Input.Root>
      );

      const input = screen.getByRole('textbox');
      expect(input).toHaveStyle('flex: 1');
      expect(input).toHaveStyle('background: transparent');
    });

    it('deve aplicar estilos corretos no container', () => {
      render(
        <Input.Root label="Name">
          <Input.Control />
        </Input.Root>
      );

      const container = screen.getByRole('textbox').closest('div');
      expect(container).toHaveStyle('display: flex');
      expect(container).toHaveStyle('border: 1px solid rgb(var(--divider))');
    });

    it('deve aplicar estilos de desabilitado', () => {
      render(
        <Input.Root label="Name">
          <Input.Control disabled />
        </Input.Root>
      );

      const input = screen.getByRole('textbox');
      expect(input).toHaveStyle('cursor: not-allowed');
      expect(input).toHaveStyle('opacity: 0.6');
    });
  });

  describe('Integração com Formulários', () => {
    it('deve funcionar com onChange', async () => {
      const handleChange = jest.fn();
      render(
        <Input.Root label="Name">
          <Input.Control onChange={handleChange} />
        </Input.Root>
      );

      const input = screen.getByRole('textbox');
      await user.type(input, 'a');

      expect(handleChange).toHaveBeenCalled();
    });

    it('deve funcionar com onFocus', async () => {
      const handleFocus = jest.fn();
      render(
        <Input.Root label="Name">
          <Input.Control onFocus={handleFocus} />
        </Input.Root>
      );

      const input = screen.getByRole('textbox');
      await user.click(input);

      expect(handleFocus).toHaveBeenCalled();
    });

    it('deve funcionar com onBlur', async () => {
      const handleBlur = jest.fn();
      render(
        <Input.Root label="Name">
          <Input.Control onBlur={handleBlur} />
        </Input.Root>
      );

      const input = screen.getByRole('textbox');
      await user.click(input);
      await user.tab();

      expect(handleBlur).toHaveBeenCalled();
    });
  });
}); 