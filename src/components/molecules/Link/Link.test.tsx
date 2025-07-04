import { render, screen } from '@testing-library/react';
import Link from './Link';

describe('Link', () => {
  it('renderiza o texto do link', () => {
    render(<Link href="/teste">Clique aqui</Link>);
    expect(screen.getByText('Clique aqui')).toBeInTheDocument();
  });
}); 