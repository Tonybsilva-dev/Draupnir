import { render, screen } from '@testing-library/react';
import Typography from './Typography';

describe('Typography', () => {
  it('renders children', () => {
    render(<Typography>Hello World</Typography>);
    expect(screen.getByText('Hello World')).toBeInTheDocument();
  });
}); 