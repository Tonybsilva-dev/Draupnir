import { render, screen } from '@testing-library/react';
import Badge from './Badge';

describe('Badge', () => {
  it('renders the badge text', () => {
    render(<Badge variant="success">Active</Badge>);
    expect(screen.getByText('Active')).toBeInTheDocument();
  });
}); 