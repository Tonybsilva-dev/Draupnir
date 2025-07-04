import { render, screen } from '@testing-library/react';
import Switch from './Switch';

describe('Switch', () => {
  it('renders the switch', () => {
    render(<Switch />);
    expect(screen.getByRole('switch')).toBeInTheDocument();
  });
}); 