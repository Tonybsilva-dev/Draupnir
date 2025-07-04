import { render, screen } from '@testing-library/react';
import Badge from './Badge';

describe('Badge', () => {
  it('renderiza o texto do badge', () => {
    render(<Badge>Ativo</Badge>);
    expect(screen.getByText('Ativo')).toBeInTheDocument();
  });
}); 