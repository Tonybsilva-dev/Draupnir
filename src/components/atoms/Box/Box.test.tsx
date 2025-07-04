import { render, screen } from '@testing-library/react';
import Box from './Box';

describe('Box', () => {
  it('renders children', () => {
    render(<Box>Test content</Box>);
    expect(screen.getByText('Test content')).toBeInTheDocument();
  });
}); 