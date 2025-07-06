import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Modal, ModalHeader, ModalBody } from './Modal';

describe('Modal', () => {
  const user = userEvent.setup();

  describe('Renderização Básica', () => {
    it('renderiza quando isOpen=true', () => {
      render(
        <Modal isOpen={true} onClose={() => { }}>
          <div>Modal content</div>
        </Modal>
      );

      expect(screen.getByRole('dialog')).toBeInTheDocument();
      expect(screen.getByText('Modal content')).toBeInTheDocument();
    });

    it('não renderiza quando isOpen=false', () => {
      render(
        <Modal isOpen={false} onClose={() => { }}>
          <div>Modal content</div>
        </Modal>
      );

      expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    });

    it('renderiza com título quando fornecido', () => {
      render(
        <Modal isOpen={true} onClose={() => { }} title="Test Title">
          <ModalHeader>Test Title</ModalHeader>
          <div>Content</div>
        </Modal>
      );

      expect(screen.getByText('Test Title')).toBeInTheDocument();
    });

    it('renderiza com descrição quando fornecida', () => {
      render(
        <Modal isOpen={true} onClose={() => { }} description="Test description">
          <ModalBody description="Test description">
            <div>Content</div>
          </ModalBody>
        </Modal>
      );

      const dialog = screen.getByRole('dialog');
      expect(dialog).toHaveAttribute('aria-describedby', 'modal-description');
    });
  });

  describe('Acessibilidade', () => {
    it('deve ter role="dialog"', () => {
      render(
        <Modal isOpen={true} onClose={() => { }}>
          <div>Content</div>
        </Modal>
      );

      expect(screen.getByRole('dialog')).toBeInTheDocument();
    });

    it('deve ter aria-modal="true"', () => {
      render(
        <Modal isOpen={true} onClose={() => { }}>
          <div>Content</div>
        </Modal>
      );

      const dialog = screen.getByRole('dialog');
      expect(dialog).toHaveAttribute('aria-modal', 'true');
    });

    it('deve ter aria-labelledby quando tem título', () => {
      render(
        <Modal isOpen={true} onClose={() => { }} title="Test Title">
          <div>Content</div>
        </Modal>
      );

      const dialog = screen.getByRole('dialog');
      expect(dialog).toHaveAttribute('aria-labelledby', 'modal-title');
    });

    it('deve ter aria-describedby quando tem descrição', () => {
      render(
        <Modal isOpen={true} onClose={() => { }} description="Test description">
          <div>Content</div>
        </Modal>
      );

      const dialog = screen.getByRole('dialog');
      expect(dialog).toHaveAttribute('aria-describedby', 'modal-description');
    });
  });

  describe('Focus Trap', () => {
    it('deve focar no primeiro elemento focável quando abre', async () => {
      render(
        <Modal isOpen={true} onClose={() => { }}>
          <button>First button</button>
          <button>Second button</button>
        </Modal>
      );

      // Aguarda o foco ser aplicado
      await waitFor(() => {
        expect(screen.getByText('First button')).toHaveFocus();
      }, { timeout: 200 });
    });

    it('deve manter foco dentro do modal com Tab', async () => {
      render(
        <Modal isOpen={true} onClose={() => { }}>
          <button>First button</button>
          <button>Second button</button>
        </Modal>
      );

      const firstButton = screen.getByText('First button');
      const secondButton = screen.getByText('Second button');

      // Aguarda o foco inicial
      await waitFor(() => {
        expect(firstButton).toHaveFocus();
      }, { timeout: 200 });

      // Pressiona Tab
      await user.tab();

      // Aguarda o foco mudar para o segundo botão
      await waitFor(() => {
        expect(secondButton).toHaveFocus();
      }, { timeout: 1000 });

      // Pressiona Tab novamente (deve voltar ao primeiro)
      await user.tab();

      await waitFor(() => {
        expect(firstButton).toHaveFocus();
      }, { timeout: 1000 });
    });

    it('deve manter foco dentro do modal com Shift+Tab', async () => {
      render(
        <Modal isOpen={true} onClose={() => { }}>
          <button>First button</button>
          <button>Second button</button>
        </Modal>
      );

      const firstButton = screen.getByText('First button');
      const secondButton = screen.getByText('Second button');

      // Aguarda o foco inicial
      await waitFor(() => {
        expect(firstButton).toHaveFocus();
      }, { timeout: 200 });

      // Foca no segundo botão primeiro
      secondButton.focus();
      await waitFor(() => {
        expect(secondButton).toHaveFocus();
      }, { timeout: 200 });

      // Pressiona Shift+Tab
      await user.keyboard('{Shift>}{Tab}');

      await waitFor(() => {
        expect(firstButton).toHaveFocus();
      }, { timeout: 1000 });

      // Pressiona Shift+Tab novamente (deve ir para o último)
      await user.keyboard('{Shift>}{Tab}');

      await waitFor(() => {
        expect(secondButton).toHaveFocus();
      }, { timeout: 1000 });
    });
  });

  describe('Teclas de Atalho', () => {
    it('deve fechar com ESC', async () => {
      const handleClose = jest.fn();
      render(
        <Modal isOpen={true} onClose={handleClose}>
          <div>Content</div>
        </Modal>
      );

      await user.keyboard('{Escape}');
      expect(handleClose).toHaveBeenCalledTimes(1);
    });

    it('deve adicionar listener de ESC quando abre', () => {
      const addEventListenerSpy = jest.spyOn(window, 'addEventListener');

      render(
        <Modal isOpen={true} onClose={() => { }}>
          <div>Content</div>
        </Modal>
      );

      expect(addEventListenerSpy).toHaveBeenCalledWith('keydown', expect.any(Function));
      addEventListenerSpy.mockRestore();
    });

    it('deve remover listener de ESC quando fecha', () => {
      const removeEventListenerSpy = jest.spyOn(window, 'removeEventListener');

      const { unmount } = render(
        <Modal isOpen={true} onClose={() => { }}>
          <div>Content</div>
        </Modal>
      );

      unmount();

      expect(removeEventListenerSpy).toHaveBeenCalledWith('keydown', expect.any(Function));
      removeEventListenerSpy.mockRestore();
    });
  });

  describe('Backdrop e Clique', () => {
    it('deve fechar quando clica no backdrop', async () => {
      const handleClose = jest.fn();
      render(
        <Modal isOpen={true} onClose={handleClose}>
          <div>Content</div>
        </Modal>
      );

      const backdrop = screen.getByRole('presentation');
      await user.click(backdrop);

      expect(handleClose).toHaveBeenCalledTimes(1);
    });

    it('não deve fechar quando clica no conteúdo do modal', async () => {
      const handleClose = jest.fn();
      render(
        <Modal isOpen={true} onClose={handleClose}>
          <div>Content</div>
        </Modal>
      );

      const modalContent = screen.getByText('Content');
      await user.click(modalContent);

      expect(handleClose).not.toHaveBeenCalled();
    });

    it('deve ter role="presentation" no backdrop', () => {
      render(
        <Modal isOpen={true} onClose={() => { }}>
          <div>Content</div>
        </Modal>
      );
      expect(screen.getByRole('presentation')).toBeInTheDocument();
    });
  });

  describe('Estados e Variantes', () => {
    it('deve aplicar variante default', () => {
      render(
        <Modal isOpen={true} onClose={() => { }}>
          <div>Content</div>
        </Modal>
      );

      const dialog = screen.getByRole('dialog');
      expect(dialog).toHaveStyle('background-color: rgb(var(--bg-light))');
    });

    it('deve aplicar variante warning', () => {
      render(
        <Modal isOpen={true} onClose={() => { }} variant="warning">
          <div>Content</div>
        </Modal>
      );

      const dialog = screen.getByRole('dialog');
      expect(dialog).toHaveStyle('background-color: rgba(245, 158, 11, 0.05)');
    });

    it('deve aplicar variante success', () => {
      render(
        <Modal isOpen={true} onClose={() => { }} variant="success">
          <div>Content</div>
        </Modal>
      );

      const dialog = screen.getByRole('dialog');
      expect(dialog).toHaveStyle('background-color: rgba(58, 201, 34, 0.05)');
    });
  });

  describe('Gerenciamento de Foco', () => {
    it('deve salvar o elemento que tinha foco antes do modal', () => {
      const previousFocusSpy = jest.spyOn(document, 'activeElement', 'get');

      render(
        <Modal isOpen={true} onClose={() => { }}>
          <div>Content</div>
        </Modal>
      );

      expect(previousFocusSpy).toHaveBeenCalled();
      previousFocusSpy.mockRestore();
    });

    it('deve restaurar o foco quando o modal fecha', () => {
      const mockElement = document.createElement('button');
      const focusSpy = jest.spyOn(mockElement, 'focus');

      // Simula um elemento com foco
      Object.defineProperty(document, 'activeElement', {
        value: mockElement,
        writable: true
      });

      const { unmount } = render(
        <Modal isOpen={true} onClose={() => { }}>
          <div>Content</div>
        </Modal>
      );

      unmount();

      expect(focusSpy).toHaveBeenCalled();
      focusSpy.mockRestore();
    });
  });

  describe('Prevenção de Scroll', () => {
    it('deve prevenir scroll do body quando abre', () => {
      const setPropertySpy = jest.spyOn(document.body.style, 'overflow', 'set');

      render(
        <Modal isOpen={true} onClose={() => { }}>
          <div>Content</div>
        </Modal>
      );

      expect(setPropertySpy).toHaveBeenCalledWith('hidden');
      setPropertySpy.mockRestore();
    });

    it('deve restaurar scroll do body quando fecha', () => {
      const setPropertySpy = jest.spyOn(document.body.style, 'overflow', 'set');

      const { unmount } = render(
        <Modal isOpen={true} onClose={() => { }}>
          <div>Content</div>
        </Modal>
      );

      unmount();

      expect(setPropertySpy).toHaveBeenCalledWith('unset');
      setPropertySpy.mockRestore();
    });
  });

  describe('Animações', () => {
    it('deve ter estilos de animação', () => {
      render(
        <Modal isOpen={true} onClose={() => { }}>
          <div>Content</div>
        </Modal>
      );

      const backdrop = screen.getByRole('presentation');
      const dialog = screen.getByRole('dialog');

      expect(backdrop).toHaveStyle('position: fixed');
      expect(dialog).toHaveStyle('box-shadow: 0 4px 24px rgba(0,0,0,0.10)');
    });
  });

  describe('ModalHeader', () => {
    it('deve renderizar título', () => {
      render(
        <Modal isOpen={true} onClose={() => { }}>
          <ModalHeader onClose={() => { }}>Modal Title</ModalHeader>
          <div>Content</div>
        </Modal>
      );

      expect(screen.getByText('Modal Title')).toBeInTheDocument();
    });

    it('deve ter botão de fechar quando onClose é fornecido', () => {
      render(
        <Modal isOpen={true} onClose={() => { }}>
          <ModalHeader onClose={() => { }}>Modal Title</ModalHeader>
          <div>Content</div>
        </Modal>
      );

      expect(screen.getByLabelText('Fechar modal')).toBeInTheDocument();
    });

    it('deve chamar onClose quando clica no botão de fechar', async () => {
      const handleClose = jest.fn();
      render(
        <Modal isOpen={true} onClose={() => { }}>
          <ModalHeader onClose={handleClose}>Modal Title</ModalHeader>
          <div>Content</div>
        </Modal>
      );

      const closeButton = screen.getByLabelText('Fechar modal');
      await user.click(closeButton);

      expect(handleClose).toHaveBeenCalledTimes(1);
    });
  });

  describe('ModalBody', () => {
    it('deve renderizar descrição quando fornecida', () => {
      render(
        <Modal isOpen={true} onClose={() => { }}>
          <ModalBody description="Modal description">Content</ModalBody>
        </Modal>
      );

      expect(screen.getByText('Modal description')).toBeInTheDocument();
    });

    it('deve ter id para aria-describedby', () => {
      render(
        <Modal isOpen={true} onClose={() => { }}>
          <ModalBody description="Modal description">Content</ModalBody>
        </Modal>
      );

      const description = screen.getByText('Modal description');
      expect(description).toHaveAttribute('id', 'modal-description');
    });
  });
}); 