import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Breadcrumb } from './Breadcrumb';

describe('Breadcrumb', () => {
  const user = userEvent.setup();

  describe('Renderização Básica', () => {
    it('renderiza o breadcrumb com navegação', () => {
      render(
        <Breadcrumb.Root>
          <Breadcrumb.Home />
          <Breadcrumb.Separator />
          <Breadcrumb.Item href="/products">Products</Breadcrumb.Item>
          <Breadcrumb.Separator />
          <Breadcrumb.Item isCurrent>Current Page</Breadcrumb.Item>
        </Breadcrumb.Root>
      );

      expect(screen.getByRole('navigation')).toBeInTheDocument();
      expect(screen.getByText('Products')).toBeInTheDocument();
      expect(screen.getByText('Current Page')).toBeInTheDocument();
    });

    it('renderiza com aria-label correto', () => {
      render(
        <Breadcrumb.Root label="Custom breadcrumb">
          <Breadcrumb.Home />
        </Breadcrumb.Root>
      );

      expect(screen.getByRole('navigation')).toHaveAttribute('aria-label', 'Custom breadcrumb');
    });

    it('renderiza com aria-label padrão', () => {
      render(
        <Breadcrumb.Root>
          <Breadcrumb.Home />
        </Breadcrumb.Root>
      );

      expect(screen.getByRole('navigation')).toHaveAttribute('aria-label', 'Breadcrumb navigation');
    });
  });

  describe('BreadcrumbItem', () => {
    it('renderiza item como link quando href é fornecido', () => {
      render(
        <Breadcrumb.Root>
          <Breadcrumb.Item href="/test">Test Link</Breadcrumb.Item>
        </Breadcrumb.Root>
      );

      const link = screen.getByRole('link');
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute('href', '/test');
    });

    it('renderiza item como span quando isCurrent é true', () => {
      render(
        <Breadcrumb.Root>
          <Breadcrumb.Item isCurrent>Current Page</Breadcrumb.Item>
        </Breadcrumb.Root>
      );

      expect(screen.getByText('Current Page')).toBeInTheDocument();
      // Verifica se o span tem aria-current
      const currentSpan = screen.getByText('Current Page').closest('span');
      expect(currentSpan).toHaveAttribute('aria-current', 'page');
    });

    it('adiciona texto para screen reader quando isCurrent é true', () => {
      render(
        <Breadcrumb.Root>
          <Breadcrumb.Item isCurrent>Current Page</Breadcrumb.Item>
        </Breadcrumb.Root>
      );

      expect(screen.getByText('(current page)')).toBeInTheDocument();
    });

    it('não adiciona texto para screen reader quando isCurrent é false', () => {
      render(
        <Breadcrumb.Root>
          <Breadcrumb.Item>Regular Page</Breadcrumb.Item>
        </Breadcrumb.Root>
      );

      expect(screen.queryByText('(current page)')).not.toBeInTheDocument();
    });
  });

  describe('BreadcrumbHome', () => {
    it('renderiza ícone de home por padrão', () => {
      render(
        <Breadcrumb.Root>
          <Breadcrumb.Home />
        </Breadcrumb.Root>
      );

      const homeLink = screen.getByRole('link');
      expect(homeLink).toHaveAttribute('aria-label', 'Go to home page');
      expect(homeLink).toHaveAttribute('href', '/');
    });

    it('renderiza conteúdo customizado quando fornecido', () => {
      render(
        <Breadcrumb.Root>
          <Breadcrumb.Home>Home</Breadcrumb.Home>
        </Breadcrumb.Root>
      );

      expect(screen.getByText('Home')).toBeInTheDocument();
    });

    it('aceita href customizado', () => {
      render(
        <Breadcrumb.Root>
          <Breadcrumb.Home href="/custom-home">Home</Breadcrumb.Home>
        </Breadcrumb.Root>
      );

      const homeLink = screen.getByRole('link');
      expect(homeLink).toHaveAttribute('href', '/custom-home');
    });
  });

  describe('BreadcrumbSeparator', () => {
    it('renderiza separador padrão (ChevronRight)', () => {
      render(
        <Breadcrumb.Root>
          <Breadcrumb.Item>First</Breadcrumb.Item>
          <Breadcrumb.Separator />
          <Breadcrumb.Item>Second</Breadcrumb.Item>
        </Breadcrumb.Root>
      );

      // Busca diretamente o <li aria-hidden="true">
      const separator = document.querySelector('li[aria-hidden="true"]');
      expect(separator).toBeInTheDocument();
      expect(separator).toHaveAttribute('aria-hidden', 'true');
    });

    it('renderiza separador customizado', () => {
      render(
        <Breadcrumb.Root>
          <Breadcrumb.Item>First</Breadcrumb.Item>
          <Breadcrumb.Separator>/</Breadcrumb.Separator>
          <Breadcrumb.Item>Second</Breadcrumb.Item>
        </Breadcrumb.Root>
      );

      expect(screen.getByText('/')).toBeInTheDocument();
    });
  });

  describe('Acessibilidade', () => {
    it('deve ser navegável por teclado', async () => {
      render(
        <Breadcrumb.Root>
          <Breadcrumb.Home />
          <Breadcrumb.Separator />
          <Breadcrumb.Item href="/products">Products</Breadcrumb.Item>
        </Breadcrumb.Root>
      );

      const homeLink = screen.getByRole('link', { name: /go to home page/i });
      homeLink.focus();
      expect(homeLink).toHaveFocus();
    });

    it('deve ter estrutura semântica correta', () => {
      render(
        <Breadcrumb.Root>
          <Breadcrumb.Home />
          <Breadcrumb.Separator />
          <Breadcrumb.Item href="/products">Products</Breadcrumb.Item>
          <Breadcrumb.Separator />
          <Breadcrumb.Item isCurrent>Current</Breadcrumb.Item>
        </Breadcrumb.Root>
      );

      const nav = screen.getByRole('navigation');
      const list = nav.querySelector('ol');
      expect(list).toBeInTheDocument();
      expect(list?.children.length).toBe(5); // Home, Separator, Item, Separator, Item
    });

    it('deve ter aria-current apenas no item atual', () => {
      render(
        <Breadcrumb.Root>
          <Breadcrumb.Item href="/products">Products</Breadcrumb.Item>
          <Breadcrumb.Separator />
          <Breadcrumb.Item isCurrent>Current</Breadcrumb.Item>
        </Breadcrumb.Root>
      );

      const currentItem = screen.getByText('Current');
      const regularItem = screen.getByText('Products');

      expect(currentItem).toHaveAttribute('aria-current', 'page');
      expect(regularItem).not.toHaveAttribute('aria-current');
    });
  });

  describe('Interação', () => {
    it('deve permitir clique em links', async () => {
      const mockOnClick = jest.fn();

      render(
        <Breadcrumb.Root>
          <Breadcrumb.Item href="/test" onClick={mockOnClick}>Test Link</Breadcrumb.Item>
        </Breadcrumb.Root>
      );

      const link = screen.getByRole('link');
      await user.click(link);

      expect(mockOnClick).toHaveBeenCalledTimes(1);
    });

    it('deve permitir navegação por teclado', async () => {
      render(
        <Breadcrumb.Root>
          <Breadcrumb.Home />
          <Breadcrumb.Separator />
          <Breadcrumb.Item href="/products">Products</Breadcrumb.Item>
        </Breadcrumb.Root>
      );

      const homeLink = screen.getByRole('link', { name: /go to home page/i });
      const productsLink = screen.getByRole('link', { name: /products/i });

      homeLink.focus();
      expect(homeLink).toHaveFocus();

      await user.tab();
      expect(productsLink).toHaveFocus();
    });
  });

  describe('Estilos', () => {
    it('deve aplicar estilos corretos para item atual', () => {
      render(
        <Breadcrumb.Root>
          <Breadcrumb.Item isCurrent>Current Page</Breadcrumb.Item>
        </Breadcrumb.Root>
      );

      // Busca o elemento <li> que recebe o estilo inline
      const currentItemLi = screen.getByText('Current Page').closest('li');
      expect(currentItemLi).toHaveStyle(`font-weight: ${require('../../../tokens/typography').typography.fontWeight.medium}`);
    });

    it('deve aplicar estilos corretos para item regular', () => {
      render(
        <Breadcrumb.Root>
          <Breadcrumb.Item href="/test">Regular Page</Breadcrumb.Item>
        </Breadcrumb.Root>
      );

      // Busca o elemento <li> que recebe o estilo inline
      const regularItemLi = screen.getByText('Regular Page').closest('li');
      expect(regularItemLi).toHaveStyle(`font-weight: ${require('../../../tokens/typography').typography.fontWeight.normal}`);
    });
  });

  describe('Comportamento de Lista', () => {
    it('deve renderizar múltiplos itens corretamente', () => {
      render(
        <Breadcrumb.Root>
          <Breadcrumb.Home />
          <Breadcrumb.Separator />
          <Breadcrumb.Item href="/products">Products</Breadcrumb.Item>
          <Breadcrumb.Separator />
          <Breadcrumb.Item href="/electronics">Electronics</Breadcrumb.Item>
          <Breadcrumb.Separator />
          <Breadcrumb.Item isCurrent>Smartphones</Breadcrumb.Item>
        </Breadcrumb.Root>
      );

      expect(screen.getByText('Products')).toBeInTheDocument();
      expect(screen.getByText('Electronics')).toBeInTheDocument();
      expect(screen.getByText('Smartphones')).toBeInTheDocument();
    });

    it('deve manter ordem correta dos elementos', () => {
      render(
        <Breadcrumb.Root>
          <Breadcrumb.Home />
          <Breadcrumb.Separator />
          <Breadcrumb.Item href="/products">Products</Breadcrumb.Item>
          <Breadcrumb.Separator />
          <Breadcrumb.Item isCurrent>Current</Breadcrumb.Item>
        </Breadcrumb.Root>
      );

      const list = screen.getByRole('navigation').querySelector('ol');
      const items = list?.children;

      expect(items?.[0]).toHaveTextContent(''); // Home icon
      expect(items?.[2]).toHaveTextContent('Products');
      expect(items?.[4]).toHaveTextContent('Current');
    });
  });
}); 