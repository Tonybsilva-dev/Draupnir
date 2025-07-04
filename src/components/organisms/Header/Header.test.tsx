import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header', () => {
  it('renderiza o Header', () => {
    render(<Header />);
    expect(screen.getByRole('banner')).toBeInTheDocument();
  });
}); 