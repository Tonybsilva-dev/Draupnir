import { render, screen } from '@testing-library/react';
import Divider from './Divider';

describe('Divider', () => {
  describe('Renderização Básica', () => {
    it('renderiza sem erros', () => {
      render(<Divider />);
      const divider = document.querySelector('.flex.items-center.justify-center');
      expect(divider).toBeInTheDocument();
    });

    it('renderiza com estrutura correta', () => {
      render(<Divider />);
      const divider = document.querySelector('.flex.items-center.justify-center');
      expect(divider).toHaveClass('flex', 'items-center', 'justify-center');
    });

    it('renderiza com altura padrão', () => {
      render(<Divider />);
      const divider = document.querySelector('.flex.items-center.justify-center');
      const bars = divider?.querySelectorAll('div');
      expect(bars?.[0]).toHaveClass('h-[1px]');
      expect(bars?.[1]).toHaveClass('h-[1px]');
    });
  });

  describe('Props e Configuração', () => {
    it('deve aplicar width customizado', () => {
      render(<Divider width="w-full" />);
      const divider = document.querySelector('.flex.items-center.justify-center');
      expect(divider).toHaveClass('w-full');
    });

    it('deve aplicar height customizado', () => {
      render(<Divider height="h-2" />);
      const divider = document.querySelector('.flex.items-center.justify-center');
      const bars = divider?.querySelectorAll('div');
      expect(bars?.[0]).toHaveClass('h-2');
      expect(bars?.[1]).toHaveClass('h-2');
    });

    it('deve aplicar bgColor light', () => {
      render(<Divider bgColor="light" />);
      const divider = document.querySelector('.flex.items-center.justify-center');
      const bars = divider?.querySelectorAll('div');
      expect(bars?.[0]).toHaveClass('bg-gray-200');
      expect(bars?.[1]).toHaveClass('bg-gray-200');
    });

    it('deve aplicar bgColor dark', () => {
      render(<Divider bgColor="dark" />);
      const divider = document.querySelector('.flex.items-center.justify-center');
      const bars = divider?.querySelectorAll('div');
      expect(bars?.[0]).toHaveClass('bg-gray-600');
      expect(bars?.[1]).toHaveClass('bg-gray-600');
    });

    it('deve aplicar bgColor black por padrão', () => {
      render(<Divider />);
      const divider = document.querySelector('.flex.items-center.justify-center');
      const bars = divider?.querySelectorAll('div');
      expect(bars?.[0]).toHaveClass('bg-gray-900');
      expect(bars?.[1]).toHaveClass('bg-gray-900');
    });
  });

  describe('Comportamento com Children', () => {
    it('deve renderizar children quando fornecido', () => {
      render(<Divider>Texto</Divider>);
      expect(screen.getByText('Texto')).toBeInTheDocument();
    });

    it('deve ter largura w-1/3 quando tem children', () => {
      render(<Divider>Texto</Divider>);
      const divider = document.querySelector('.flex.items-center.justify-center');
      const bars = divider?.querySelectorAll('div');
      expect(bars?.[0]).toHaveClass('w-1/3');
      expect(bars?.[2]).toHaveClass('w-1/3');
    });

    it('deve ter largura w-1/2 quando não tem children', () => {
      render(<Divider />);
      const divider = document.querySelector('.flex.items-center.justify-center');
      const bars = divider?.querySelectorAll('div');
      expect(bars?.[0]).toHaveClass('w-1/2');
      expect(bars?.[1]).toHaveClass('w-1/2');
    });

    it('deve ter padding no container de children', () => {
      render(<Divider>Texto</Divider>);
      const divider = document.querySelector('.flex.items-center.justify-center');
      const childrenContainer = divider?.querySelector('.px-3');
      expect(childrenContainer).toBeInTheDocument();
    });
  });

  describe('Estrutura do Componente', () => {
    it('deve ter duas barras quando não tem children', () => {
      render(<Divider />);
      const divider = document.querySelector('.flex.items-center.justify-center');
      const bars = divider?.querySelectorAll('div');
      expect(bars).toHaveLength(2); // Duas barras
    });

    it('deve ter estrutura correta com children', () => {
      render(<Divider>Texto</Divider>);
      const divider = document.querySelector('.flex.items-center.justify-center');
      const divs = divider?.querySelectorAll('div');
      expect(divs).toHaveLength(3); // Duas barras + container de children
    });

    it('deve ter flexbox layout', () => {
      render(<Divider />);
      const divider = document.querySelector('.flex.items-center.justify-center');
      expect(divider).toHaveClass('flex', 'items-center', 'justify-center');
    });
  });

  describe('Estilos e Classes', () => {
    it('deve aplicar classes corretas no container', () => {
      render(<Divider />);
      const divider = document.querySelector('.flex.items-center.justify-center');
      expect(divider?.className).toContain('flex');
      expect(divider?.className).toContain('items-center');
      expect(divider?.className).toContain('justify-center');
    });

    it('deve aplicar classes corretas nas barras', () => {
      render(<Divider />);
      const divider = document.querySelector('.flex.items-center.justify-center');
      const bars = divider?.querySelectorAll('div');
      expect(bars?.[0].className).toContain('w-1/2');
      expect(bars?.[0].className).toContain('h-[1px]');
      expect(bars?.[0].className).toContain('bg-gray-900');
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