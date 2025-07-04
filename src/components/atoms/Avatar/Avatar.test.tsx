import { render, screen } from '@testing-library/react';
import Avatar from './Avatar';

describe('Avatar', () => {
  it('renderiza avatar', () => {
    render(<Avatar description="Usuário" />);
    // Verifica se o componente renderiza (tem o ícone SVG)
    expect(document.querySelector('svg')).toBeInTheDocument();
  });
}); 