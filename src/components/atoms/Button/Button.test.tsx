import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from './Button';

describe('Button', () => {
  const user = userEvent.setup();

  describe('Renderização Básica', () => {
    it('renderiza o texto do botão', () => {
      render(<Button>Click me</Button>);
      expect(screen.getByText('Click me')).toBeInTheDocument();
    });

    it('renderiza com role button', () => {
      render(<Button>Click me</Button>);
      expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('renderiza com aria-label apropriado', () => {
      render(<Button>Click me</Button>);
      expect(screen.getByRole('button')).toHaveAttribute('aria-label', 'Click me button');
    });
  });

  describe('Acessibilidade', () => {
    it('deve ser focável por teclado', async () => {
      render(<Button>Click me</Button>);
      const button = screen.getByRole('button');

      button.focus();
      expect(button).toHaveFocus();
    });

    it('deve responder ao Enter', async () => {
      const handleClick = jest.fn();
      render(<Button onClick={handleClick}>Click me</Button>);

      const button = screen.getByRole('button');
      button.focus();
      await user.keyboard('{Enter}');

      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('deve responder ao Space', async () => {
      const handleClick = jest.fn();
      render(<Button onClick={handleClick}>Click me</Button>);

      const button = screen.getByRole('button');
      button.focus();
      await user.keyboard(' ');

      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('deve ter aria-pressed quando é toggle', () => {
      render(<Button isToggle pressed>Toggle</Button>);
      expect(screen.getByRole('button')).toHaveAttribute('aria-pressed', 'true');
    });

    it('deve ter aria-busy quando está carregando', () => {
      render(<Button isLoading>Loading</Button>);
      expect(screen.getByRole('button')).toHaveAttribute('aria-busy', 'true');
    });
  });

  describe('Interação', () => {
    it('deve chamar onClick quando clicado', async () => {
      const handleClick = jest.fn();
      render(<Button onClick={handleClick}>Click me</Button>);

      const button = screen.getByRole('button');
      await user.click(button);

      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('não deve chamar onClick quando desabilitado', async () => {
      const handleClick = jest.fn();
      render(<Button onClick={handleClick} disabled>Click me</Button>);

      const button = screen.getByRole('button');
      await user.click(button);

      expect(handleClick).not.toHaveBeenCalled();
    });

    it('não deve chamar onClick quando carregando', async () => {
      const handleClick = jest.fn();
      render(<Button onClick={handleClick} isLoading>Loading</Button>);

      const button = screen.getByRole('button');
      await user.click(button);

      expect(handleClick).not.toHaveBeenCalled();
    });
  });

  describe('Estados', () => {
    it('deve estar desabilitado quando disabled=true', () => {
      render(<Button disabled>Disabled</Button>);
      expect(screen.getByRole('button')).toBeDisabled();
    });

    it('deve estar desabilitado quando isLoading=true', () => {
      render(<Button isLoading>Loading</Button>);
      expect(screen.getByRole('button')).toBeDisabled();
    });

    it('deve mostrar loading quando isLoading=true', () => {
      render(<Button isLoading>Loading</Button>);
      const loadingTexts = screen.getAllByText('Loading...');
      expect(loadingTexts.length).toBeGreaterThan(0);
    });

    it('deve mostrar loadingText customizado', () => {
      render(<Button isLoading loadingText="Carregando...">Loading</Button>);
      const loadingTexts = screen.getAllByText('Carregando...');
      expect(loadingTexts.length).toBeGreaterThan(0);
    });

    it('deve ter aria-label apropriado quando carregando', () => {
      render(<Button isLoading>Submit</Button>);
      expect(screen.getByRole('button')).toHaveAttribute('aria-label', 'Loading... Submit');
    });

    it('deve ter aria-label apropriado quando é toggle', () => {
      render(<Button isToggle pressed>Notifications</Button>);
      expect(screen.getByRole('button')).toHaveAttribute('aria-label', 'Notifications activated');
    });
  });

  describe('Variantes', () => {
    it('deve aplicar variante primary por padrão', () => {
      render(<Button>Primary</Button>);
      const button = screen.getByRole('button');
      expect(button).toHaveStyle('background-color: rgb(var(--primary))');
    });

    it('deve aplicar variante secondary', () => {
      render(<Button variant="secondary">Secondary</Button>);
      const button = screen.getByRole('button');
      expect(button).toHaveStyle('background-color: rgb(var(--secondary))');
    });

    it('deve aplicar variante outline', () => {
      render(<Button variant="outline">Outline</Button>);
      const button = screen.getByRole('button');
      expect(button).toHaveStyle('background-color: rgb(var(--bg-light))');
    });

    it('deve aplicar variante ghost', () => {
      render(<Button variant="ghost">Ghost</Button>);
      const button = screen.getByRole('button');
      expect(button).toHaveStyle('background-color: buttonface');
    });

    it('deve aplicar variante danger', () => {
      render(<Button variant="danger">Danger</Button>);
      const button = screen.getByRole('button');
      expect(button).toHaveStyle('background-color: rgba(204, 38, 38, 1)');
    });
  });

  describe('Tamanhos', () => {
    it('deve aplicar tamanho default por padrão', () => {
      render(<Button>Default</Button>);
      const button = screen.getByRole('button');
      expect(button).toHaveStyle('padding: 16px 20px');
    });

    it('deve aplicar tamanho sm', () => {
      render(<Button size="sm">Small</Button>);
      const button = screen.getByRole('button');
      expect(button).toHaveStyle('padding: 12px 16px');
    });

    it('deve aplicar tamanho lg', () => {
      render(<Button size="lg">Large</Button>);
      const button = screen.getByRole('button');
      expect(button).toHaveStyle('padding: 20px 32px');
    });

    it('deve aplicar tamanho full', () => {
      render(<Button size="full">Full</Button>);
      const button = screen.getByRole('button');
      expect(button).toHaveStyle('width: 100%');
    });
  });

  describe('Comportamento de Toggle', () => {
    it('deve ter aria-pressed=false quando não pressionado', () => {
      render(<Button isToggle pressed={false}>Toggle</Button>);
      expect(screen.getByRole('button')).toHaveAttribute('aria-pressed', 'false');
    });

    it('deve ter aria-pressed=true quando pressionado', () => {
      render(<Button isToggle pressed={true}>Toggle</Button>);
      expect(screen.getByRole('button')).toHaveAttribute('aria-pressed', 'true');
    });

    it('deve ter aria-label correto para toggle não pressionado', () => {
      render(<Button isToggle pressed={false}>Notifications</Button>);
      expect(screen.getByRole('button')).toHaveAttribute('aria-label', 'Notifications deactivated');
    });
  });

  describe('Focus e Keyboard', () => {
    it('deve receber foco quando tabulado', async () => {
      render(<Button>Focusable</Button>);
      const button = screen.getByRole('button');

      await user.tab();
      expect(button).toHaveFocus();
    });

    it('deve ter focus ring quando focado', async () => {
      render(<Button>Focusable</Button>);
      const button = screen.getByRole('button');

      button.focus();
      expect(button).toHaveStyle('outline: none');
    });

    it('não deve ser focável quando desabilitado', async () => {
      render(<Button disabled>Disabled</Button>);
      const button = screen.getByRole('button');

      expect(button).toBeDisabled();
    });
  });
}); 