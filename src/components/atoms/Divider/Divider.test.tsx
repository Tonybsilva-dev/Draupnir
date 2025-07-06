import { render, screen } from '@testing-library/react';
import Divider from './Divider';

describe('Divider', () => {
  describe('Renderização Básica', () => {
    it('renderiza sem erros', () => {
      render(<Divider data-testid="divider" />);
      const divider = screen.getByTestId('divider');
      expect(divider).toBeInTheDocument();
    });

    it('renderiza com estrutura correta', () => {
      render(<Divider data-testid="divider" />);
      const divider = screen.getByTestId('divider');
      expect(divider).toHaveStyle('display: flex');
      expect(divider).toHaveStyle('align-items: center');
      expect(divider).toHaveStyle('justify-content: center');
    });

    it('renderiza com altura padrão', () => {
      render(<Divider data-testid="divider" />);
      const divider = screen.getByTestId('divider');
      const bars = divider.querySelectorAll('div');
      expect(bars?.[0]).toHaveStyle('height: 1px');
      expect(bars?.[1]).toHaveStyle('height: 1px');
    });
  });

  describe('Props e Configuração', () => {
    it('deve aplicar width customizado', () => {
      render(<Divider width="100%" data-testid="divider" />);
      const divider = screen.getByTestId('divider');
      expect(divider).toHaveStyle('width: 100%');
    });

    it('deve aplicar height customizado', () => {
      render(<Divider height="8px" data-testid="divider" />);
      const divider = screen.getByTestId('divider');
      const bars = divider.querySelectorAll('div');
      expect(bars?.[0]).toHaveStyle('height: 8px');
      expect(bars?.[1]).toHaveStyle('height: 8px');
    });

    it('deve aplicar bgColor light', () => {
      render(<Divider bgColor="light" data-testid="divider" />);
      const divider = screen.getByTestId('divider');
      const bars = divider.querySelectorAll('div');
      expect(bars?.[0]).toHaveStyle('background: rgb(var(--divider-light))');
      expect(bars?.[1]).toHaveStyle('background: rgb(var(--divider-light))');
    });

    it('deve aplicar bgColor dark', () => {
      render(<Divider bgColor="dark" data-testid="divider" />);
      const divider = screen.getByTestId('divider');
      const bars = divider.querySelectorAll('div');
      expect(bars?.[0]).toHaveStyle('background: rgb(var(--divider-dark))');
      expect(bars?.[1]).toHaveStyle('background: rgb(var(--divider-dark))');
    });

    it('deve aplicar bgColor default por padrão', () => {
      render(<Divider data-testid="divider" />);
      const divider = screen.getByTestId('divider');
      const bars = divider.querySelectorAll('div');
      expect(bars?.[0]).toHaveStyle('background: rgb(var(--divider))');
      expect(bars?.[1]).toHaveStyle('background: rgb(var(--divider))');
    });
  });

  describe('Comportamento com Children', () => {
    it('deve renderizar children quando fornecido', () => {
      render(<Divider>Texto</Divider>);
      expect(screen.getByText('Texto')).toBeInTheDocument();
    });

    it('deve ter largura 33% quando tem children', () => {
      render(<Divider data-testid="divider">Texto</Divider>);
      const divider = screen.getByTestId('divider');
      const bars = divider.querySelectorAll('div');
      expect(bars?.[0]).toHaveStyle('width: 33%');
      expect(bars?.[2]).toHaveStyle('width: 33%');
    });

    it('deve ter largura 50% quando não tem children', () => {
      render(<Divider data-testid="divider" />);
      const divider = screen.getByTestId('divider');
      const bars = divider.querySelectorAll('div');
      expect(bars?.[0]).toHaveStyle('width: 50%');
      expect(bars?.[1]).toHaveStyle('width: 50%');
    });

    it('deve ter padding no container de children', () => {
      render(<Divider data-testid="divider">Texto</Divider>);
      const divider = screen.getByTestId('divider');
      const childrenContainer = divider.children[1];
      expect(childrenContainer).toHaveStyle('padding-left: 16px');
      expect(childrenContainer).toHaveStyle('padding-right: 16px');
    });
  });

  describe('Estrutura do Componente', () => {
    it('deve ter duas barras quando não tem children', () => {
      render(<Divider data-testid="divider" />);
      const divider = screen.getByTestId('divider');
      const bars = divider.querySelectorAll('div');
      expect(bars).toHaveLength(2); // Duas barras
    });

    it('deve ter estrutura correta com children', () => {
      render(<Divider data-testid="divider">Texto</Divider>);
      const divider = screen.getByTestId('divider');
      const divs = divider.children;
      expect(divs).toHaveLength(3); // Duas barras + container de children
    });

    it('deve ter flexbox layout', () => {
      render(<Divider data-testid="divider" />);
      const divider = screen.getByTestId('divider');
      expect(divider).toHaveStyle('display: flex');
      expect(divider).toHaveStyle('align-items: center');
      expect(divider).toHaveStyle('justify-content: center');
    });
  });

  describe('Estilos e Classes', () => {
    it('deve aplicar estilos corretos no container', () => {
      render(<Divider data-testid="divider" />);
      const divider = screen.getByTestId('divider');
      expect(divider).toHaveStyle('display: flex');
      expect(divider).toHaveStyle('align-items: center');
      expect(divider).toHaveStyle('justify-content: center');
    });

    it('deve aplicar estilos corretos nas barras', () => {
      render(<Divider data-testid="divider" />);
      const divider = screen.getByTestId('divider');
      const bars = divider.querySelectorAll('div');

      // Verificar se as barras existem
      expect(bars?.[0]).toBeDefined();
      expect(bars?.[1]).toBeDefined();

      // Verificar estilos das barras usando toHaveStyle
      expect(bars?.[0]).toHaveStyle('width: 50%');
      expect(bars?.[0]).toHaveStyle('height: 1px');
      expect(bars?.[0]).toHaveStyle('background: rgb(var(--divider))');
    });
  });

  describe('Integração com Outros Componentes', () => {
    it('deve funcionar com texto simples', () => {
      render(<Divider>Separador</Divider>);
      expect(screen.getByText('Separador')).toBeInTheDocument();
    });

    it('deve funcionar com elementos JSX', () => {
      render(
        <Divider>
          <span>Texto</span>
        </Divider>
      );
      expect(screen.getByText('Texto')).toBeInTheDocument();
    });

    it('deve aceitar props HTML padrão', () => {
      render(<Divider data-testid="custom-divider" />);
      expect(screen.getByTestId('custom-divider')).toBeInTheDocument();
    });
  });
}); 