import { render, screen } from '@testing-library/react';
import Typography from './Typography';

describe('Typography', () => {
  it('renderiza children', () => {
    render(<Typography size="lg">Texto</Typography>);
    expect(screen.getByText('Texto')).toBeInTheDocument();
  });
}); 