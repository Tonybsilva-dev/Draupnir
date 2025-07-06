import { render, screen, act, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Notice from './Notice';

describe('Notice', () => {
  const user = userEvent.setup();

  describe('Renderização Básica', () => {
    it('renderiza mensagem', () => {
      render(<Notice type="success" message="Success message" />);
      expect(screen.getByText('Success message')).toBeInTheDocument();
    });

    it('renderiza com role="alert"', () => {
      render(<Notice type="success" message="Success message" />);
      expect(screen.getByRole('alert')).toBeInTheDocument();
    });

    it('renderiza com role="alert" para todos os tipos', () => {
      render(<Notice type="info" message="Info message" />);
      expect(screen.getByRole('alert')).toBeInTheDocument();
    });
  });

  describe('Acessibilidade', () => {
    it('deve ter role="alert" para tipos críticos', () => {
      render(<Notice type="error" message="Error message" />);
      expect(screen.getByRole('alert')).toBeInTheDocument();
    });

    it('deve ter role="alert" para alert', () => {
      render(<Notice type="alert" message="Alert message" />);
      expect(screen.getByRole('alert')).toBeInTheDocument();
    });

    it('deve ter role="alert" para tipos informativos', () => {
      render(<Notice type="info" message="Info message" />);
      expect(screen.getByRole('alert')).toBeInTheDocument();
    });

    it('deve ter role="alert" para success', () => {
      render(<Notice type="success" message="Success message" />);
      expect(screen.getByRole('alert')).toBeInTheDocument();
    });

    it('deve ter aria-live="assertive" para alertas', () => {
      render(<Notice type="error" message="Error message" />);
      expect(screen.getByRole('alert')).toHaveAttribute('aria-live', 'assertive');
    });

    it('deve ter aria-live="polite" para status', () => {
      render(<Notice type="info" message="Info message" />);
      expect(screen.getByRole('alert')).toHaveAttribute('aria-live', 'polite');
    });

    it('deve ter aria-label apropriado', () => {
      render(<Notice type="success" message="Success message" />);
      expect(screen.getByRole('alert')).toHaveAttribute('aria-describedby');
    });

    it('deve ter aria-label para error', () => {
      render(<Notice type="error" message="Error message" />);
      expect(screen.getByRole('alert')).toHaveAttribute('aria-describedby');
    });
  });

  describe('Tipos de Notice', () => {
    it('deve aplicar estilo de success', () => {
      render(<Notice type="success" message="Success message" />);
      const notice = screen.getByRole('alert');
      expect(notice.className).toContain('bg-green-50');
    });

    it('deve aplicar estilo de error', () => {
      render(<Notice type="error" message="Error message" />);
      const notice = screen.getByRole('alert');
      expect(notice.className).toContain('bg-red-50');
    });

    it('deve aplicar estilo de alert', () => {
      render(<Notice type="alert" message="Alert message" />);
      const notice = screen.getByRole('alert');
      expect(notice.className).toContain('bg-yellow-50');
    });

    it('deve aplicar estilo de info', () => {
      render(<Notice type="info" message="Info message" />);
      const notice = screen.getByRole('alert');
      expect(notice.className).toContain('bg-blue-50');
    });
  });

  describe('Ícones', () => {
    it('deve renderizar ícone de success', () => {
      render(<Notice type="success" message="Success message" />);
      // Verifica se o ícone está presente (SVG)
      const notice = screen.getByRole('alert');
      expect(notice.querySelector('svg')).toBeInTheDocument();
    });

    it('deve renderizar ícone de error', () => {
      render(<Notice type="error" message="Error message" />);
      const notice = screen.getByRole('alert');
      expect(notice.querySelector('svg')).toBeInTheDocument();
    });

    it('deve renderizar ícone de alert', () => {
      render(<Notice type="alert" message="Alert message" />);
      const notice = screen.getByRole('alert');
      expect(notice.querySelector('svg')).toBeInTheDocument();
    });

    it('deve renderizar ícone de info', () => {
      render(<Notice type="info" message="Info message" />);
      const notice = screen.getByRole('alert');
      expect(notice.querySelector('svg')).toBeInTheDocument();
    });
  });

  describe('Interação', () => {
    it('deve ser focável quando tem botão de fechar', () => {
      render(<Notice type="success" message="Success message" onClose={() => { }} />);
      const closeButton = screen.getByRole('button');
      expect(closeButton).toBeInTheDocument();
    });

    it('deve chamar onClose quando clica no botão de fechar', async () => {
      const handleClose = jest.fn();
      render(<Notice type="success" message="Success message" onClose={handleClose} />);

      const closeButton = screen.getByRole('button');

      await act(async () => {
        await user.click(closeButton);
      });

      // Aguarda a animação de saída (300ms) antes de verificar
      await waitFor(() => {
        expect(handleClose).toHaveBeenCalledTimes(1);
      }, { timeout: 1000 });
    });

    it('deve ter aria-label no botão de fechar', () => {
      render(<Notice type="success" message="Success message" onClose={() => { }} />);
      const closeButton = screen.getByRole('button');
      expect(closeButton).toHaveAttribute('aria-label');
      // Verifica se o aria-label contém informações sobre fechar
      const ariaLabel = closeButton.getAttribute('aria-label');
      expect(ariaLabel).toMatch(/fechar|close|button/i);
    });

    it('não deve renderizar botão de fechar quando onClose não é fornecido', () => {
      render(<Notice type="success" message="Success message" />);
      expect(screen.queryByRole('button')).not.toBeInTheDocument();
    });
  });

  describe('Estados', () => {
    it('deve estar visível por padrão', () => {
      render(<Notice type="success" message="Success message" />);
      expect(screen.getByText('Success message')).toBeInTheDocument();
    });

    it('deve ter classes de layout corretas', () => {
      render(<Notice type="success" message="Success message" />);
      const notice = screen.getByRole('alert');
      expect(notice.className).toContain('border-none');
      expect(notice.className).toContain('min-w-[320px]');
      expect(notice.className).toContain('max-w-[480px]');
    });

    it('deve ter classes de animação', () => {
      render(<Notice type="success" message="Success message" />);
      const notice = screen.getByRole('alert');
      expect(notice.className).toContain('animate-fade-in');
    });
  });

  describe('Cores por Tipo', () => {
    it('deve ter cores corretas para success', () => {
      render(<Notice type="success" message="Success message" />);
      const notice = screen.getByRole('alert');
      expect(notice.className).toContain('text-green-800');
      expect(notice.className).toContain('bg-green-50');
    });

    it('deve ter cores corretas para error', () => {
      render(<Notice type="error" message="Error message" />);
      const notice = screen.getByRole('alert');
      expect(notice.className).toContain('text-red-800');
      expect(notice.className).toContain('bg-red-50');
    });

    it('deve ter cores corretas para alert', () => {
      render(<Notice type="alert" message="Alert message" />);
      const notice = screen.getByRole('alert');
      expect(notice.className).toContain('text-yellow-800');
      expect(notice.className).toContain('bg-yellow-50');
    });

    it('deve ter cores corretas para info', () => {
      render(<Notice type="info" message="Info message" />);
      const notice = screen.getByRole('alert');
      expect(notice.className).toContain('text-blue-800');
      expect(notice.className).toContain('bg-blue-50');
    });
  });

  describe('Estrutura do Conteúdo', () => {
    it('deve ter ícone e texto', () => {
      render(<Notice type="success" message="Success message" />);
      const notice = screen.getByRole('alert');

      expect(notice.querySelector('svg')).toBeInTheDocument();
      expect(screen.getByText('Success message')).toBeInTheDocument();
    });

    it('deve ter flex-1 na div do texto', () => {
      render(<Notice type="success" message="Success message" />);
      const notice = screen.getByRole('alert');
      const textDiv = notice.querySelector('.flex-1');
      expect(textDiv).toBeInTheDocument();
    });

    it('deve ter gap-2 entre ícone e texto', () => {
      render(<Notice type="success" message="Success message" />);
      const notice = screen.getByRole('alert');
      const iconContainer = notice.querySelector('.gap-2');
      expect(iconContainer).toBeInTheDocument();
    });
  });

  describe('Responsividade', () => {
    it('deve ter classes responsivas', () => {
      render(<Notice type="success" message="Success message" />);
      const notice = screen.getByRole('alert');
      expect(notice.className).toContain('mx-auto');
    });
  });

  describe('Integração com Formulários', () => {
    it('deve funcionar dentro de formulários', () => {
      render(
        <form>
          <Notice type="error" message="Please fix the errors" />
        </form>
      );

      expect(screen.getByRole('alert')).toBeInTheDocument();
      expect(screen.getByText('Please fix the errors')).toBeInTheDocument();
    });

    it('deve ser anunciado por screen readers', () => {
      render(<Notice type="error" message="Critical error occurred" />);

      const alert = screen.getByRole('alert');
      expect(alert).toHaveAttribute('aria-live', 'assertive');
    });
  });

  describe('Callbacks', () => {
    it('deve chamar onClose quando fornecido', async () => {
      const handleClose = jest.fn();
      render(<Notice type="success" message="Success message" onClose={handleClose} />);

      const closeButton = screen.getByRole('button');

      await act(async () => {
        await user.click(closeButton);
      });

      // Aguarda a animação de saída (300ms) antes de verificar
      await waitFor(() => {
        expect(handleClose).toHaveBeenCalledTimes(1);
      }, { timeout: 1000 });
    });

    it('não deve chamar onClose quando não fornecido', () => {
      render(<Notice type="success" message="Success message" />);
      expect(screen.queryByRole('button')).not.toBeInTheDocument();
    });
  });
}); 