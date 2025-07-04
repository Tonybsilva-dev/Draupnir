import { render, screen } from '@testing-library/react';
import Box from './Box';

describe('Box', () => {
  it('renderiza children', () => {
    render(<Box>Conteúdo</Box>);
    expect(screen.getByText('Conteúdo')).toBeInTheDocument();
  });
}); 