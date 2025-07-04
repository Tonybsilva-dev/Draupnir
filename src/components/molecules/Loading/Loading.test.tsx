import { render, screen } from '@testing-library/react';
import Loading from './Loading';

describe('Loading', () => {
  it('renders without errors', () => {
    render(<Loading />);
    expect(screen.getByRole('status')).toBeInTheDocument();
  });
}); 