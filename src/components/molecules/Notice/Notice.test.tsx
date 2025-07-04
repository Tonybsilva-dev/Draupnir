import { render, screen } from '@testing-library/react';
import Notice from './Notice';

describe('Notice', () => {
  it('renders message', () => {
    render(<Notice type="success" message="Success message" />);
    expect(screen.getByText('Success message')).toBeInTheDocument();
  });
}); 