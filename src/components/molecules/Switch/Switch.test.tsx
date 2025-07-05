import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Switch from './Switch';

describe('Switch', () => {
  const user = userEvent.setup();

  describe('Renderização Básica', () => {
    it('renderiza o switch', () => {
      render(<Switch />);
      expect(screen.getByRole('switch')).toBeInTheDocument();
    });

    it('renderiza com role="switch"', () => {
      render(<Switch />);
      expect(screen.getByRole('switch')).toBeInTheDocument();
    });

    it('renderiza com aria-checked="false" por padrão', () => {
      render(<Switch />);
      expect(screen.getByRole('switch')).toHaveAttribute('aria-checked', 'false');
    });
  });

  describe('Acessibilidade', () => {
    it('deve ter aria-checked="true" quando defaultEnable=true', () => {
      render(<Switch defaultEnable />);
      expect(screen.getByRole('switch')).toHaveAttribute('aria-checked', 'true');
    });

    it('deve ter aria-checked="false" quando defaultEnable=false', () => {
      render(<Switch defaultEnable={false} />);
      expect(screen.getByRole('switch')).toHaveAttribute('aria-checked', 'false');
    });

    it('deve ter aria-label quando label é fornecido', () => {
      render(<Switch label="Toggle notifications" />);
      expect(screen.getByRole('switch')).toHaveAttribute('aria-label');
    });

    it('deve ter aria-label apropriado', () => {
      render(<Switch label="Notifications" />);
      expect(screen.getByRole('switch')).toHaveAttribute('aria-label', 'Notifications deactivated');
    });

    it('deve estar desabilitado quando disabled', () => {
      render(<Switch disabled />);
      expect(screen.getByRole('switch')).toBeDisabled();
    });
  });

  describe('Interação', () => {
    it('deve alternar estado quando clicado', async () => {
      const handleChange = jest.fn();
      render(<Switch onChange={handleChange} />);

      const switchElement = screen.getByRole('switch');
      await user.click(switchElement);

      expect(handleChange).toHaveBeenCalledWith(true);
    });

    it('deve alternar de true para false quando clicado', async () => {
      const handleChange = jest.fn();
      render(<Switch defaultEnable onChange={handleChange} />);

      const switchElement = screen.getByRole('switch');
      await user.click(switchElement);

      expect(handleChange).toHaveBeenCalledWith(false);
    });

    it('não deve chamar onChange quando disabled', async () => {
      const handleChange = jest.fn();
      render(<Switch disabled onChange={handleChange} />);

      const switchElement = screen.getByRole('switch');
      await user.click(switchElement);

      expect(handleChange).not.toHaveBeenCalled();
    });

    it('não deve ser focável quando disabled', async () => {
      render(<Switch disabled />);
      const switchElement = screen.getByRole('switch');

      expect(switchElement).toBeDisabled();
    });
  });

  describe('Estados', () => {
    it('deve estar enabled quando defaultEnable=true', () => {
      render(<Switch defaultEnable />);
      expect(screen.getByRole('switch')).toHaveAttribute('aria-checked', 'true');
    });

    it('deve estar disabled quando defaultEnable=false', () => {
      render(<Switch defaultEnable={false} />);
      expect(screen.getByRole('switch')).toHaveAttribute('aria-checked', 'false');
    });

    it('deve estar disabled por padrão', () => {
      render(<Switch />);
      expect(screen.getByRole('switch')).toHaveAttribute('aria-checked', 'false');
    });

    it('deve estar disabled quando prop disabled=true', () => {
      render(<Switch disabled />);
      expect(screen.getByRole('switch')).toBeDisabled();
    });

    it('deve estar enabled por padrão', () => {
      render(<Switch />);
      expect(screen.getByRole('switch')).not.toBeDisabled();
    });
  });

  describe('Comportamento de Toggle', () => {
    it('deve alternar de false para true', async () => {
      const handleChange = jest.fn();
      render(<Switch onChange={handleChange} />);

      const switchElement = screen.getByRole('switch');
      await user.click(switchElement);

      expect(handleChange).toHaveBeenCalledWith(true);
    });

    it('deve alternar de true para false', async () => {
      const handleChange = jest.fn();
      render(<Switch defaultEnable onChange={handleChange} />);

      const switchElement = screen.getByRole('switch');
      await user.click(switchElement);

      expect(handleChange).toHaveBeenCalledWith(false);
    });

    it('deve manter estado quando clicado múltiplas vezes', async () => {
      const handleChange = jest.fn();
      render(<Switch onChange={handleChange} />);

      const switchElement = screen.getByRole('switch');

      // Primeiro clique
      await user.click(switchElement);
      expect(handleChange).toHaveBeenCalledWith(true);

      // Segundo clique
      await user.click(switchElement);
      expect(handleChange).toHaveBeenCalledWith(false);

      // Terceiro clique
      await user.click(switchElement);
      expect(handleChange).toHaveBeenCalledWith(true);
    });
  });

  describe('Focus e Keyboard', () => {
    it('deve receber foco quando tabulado', async () => {
      render(<Switch />);
      const switchElement = screen.getByRole('switch');

      await user.tab();
      expect(switchElement).toHaveFocus();
    });

    it('deve ter focus ring quando focado', async () => {
      render(<Switch />);
      const switchElement = screen.getByRole('switch');

      switchElement.focus();
      expect(switchElement.className).toContain('outline-none');
    });

    it('não deve ser focável quando disabled', async () => {
      render(<Switch disabled />);
      const switchElement = screen.getByRole('switch');

      expect(switchElement).toBeDisabled();
    });
  });

  describe('Estilos e Classes', () => {
    it('deve ter classes corretas quando disabled', () => {
      render(<Switch />);
      const switchElement = screen.getByRole('switch');

      expect(switchElement.className).toContain('bg-gray-200');
    });

    it('deve ter classes corretas quando enabled', () => {
      render(<Switch defaultEnable />);
      const switchElement = screen.getByRole('switch');

      expect(switchElement.className).toContain('bg-primary');
    });

    it('deve ter classes de disabled', () => {
      render(<Switch disabled />);
      const switchElement = screen.getByRole('switch');

      expect(switchElement.className).toContain('bg-gray-200');
    });

    it('deve ter classes de hover quando enabled', () => {
      render(<Switch />);
      const switchElement = screen.getByRole('switch');

      expect(switchElement.className).toContain('outline-none');
    });
  });

  describe('Variantes', () => {
    it('deve aplicar variante common por padrão', () => {
      render(<Switch />);
      const switchElement = screen.getByRole('switch');
      expect(switchElement.className).toContain('bg-gray-200');
    });

    it('deve aplicar variante contract', () => {
      render(<Switch variant="contract" />);
      const switchElement = screen.getByRole('switch');
      expect(switchElement.className).toContain('bg-gray-200');
    });

    it('deve ter ícones na variante contract quando enabled', () => {
      render(<Switch variant="contract" defaultEnable />);
      const switchElement = screen.getByRole('switch');
      expect(switchElement.querySelector('svg')).toBeInTheDocument();
    });
  });

  describe('Label e Descrição', () => {
    it('deve renderizar label quando fornecido', () => {
      render(<Switch label="Notifications" />);
      expect(screen.getByText('Notifications')).toBeInTheDocument();
    });

    it('deve renderizar descrição quando fornecida', () => {
      render(<Switch description="Enable push notifications" />);
      expect(screen.getByText('Enable push notifications')).toBeInTheDocument();
    });

    it('deve renderizar label e descrição juntos', () => {
      render(
        <Switch
          label="Notifications"
          description="Enable push notifications"
        />
      );
      expect(screen.getByText('Notifications')).toBeInTheDocument();
      expect(screen.getByText('Enable push notifications')).toBeInTheDocument();
    });
  });

  describe('Callbacks', () => {
    it('deve chamar onChange quando alternado', async () => {
      const handleChange = jest.fn();
      render(<Switch onChange={handleChange} />);

      const switchElement = screen.getByRole('switch');
      await user.click(switchElement);

      expect(handleChange).toHaveBeenCalledWith(true);
    });

    it('deve chamar onChange com valor correto', async () => {
      const handleChange = jest.fn();
      render(<Switch defaultEnable onChange={handleChange} />);

      const switchElement = screen.getByRole('switch');
      await user.click(switchElement);

      expect(handleChange).toHaveBeenCalledWith(false);
    });

    it('não deve chamar onChange quando disabled', async () => {
      const handleChange = jest.fn();
      render(<Switch disabled onChange={handleChange} />);

      const switchElement = screen.getByRole('switch');
      await user.click(switchElement);

      expect(handleChange).not.toHaveBeenCalled();
    });
  });
}); 