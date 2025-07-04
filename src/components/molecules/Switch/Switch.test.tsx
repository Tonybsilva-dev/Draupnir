import { render, screen } from '@testing-library/react';
import Switch from './Switch';

describe('Switch', () => {
  it('renderiza o switch', () => {
    render(<Switch checked={false} onCheckedChange={() => { }} />);
    expect(screen.getByRole('switch')).toBeInTheDocument();
  });
}); 