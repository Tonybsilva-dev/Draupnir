import { render, screen } from '@testing-library/react';
import Link from './Link';

describe('Link', () => {
  it('renders the link text', () => {
    render(<Link href="/test">Test Link</Link>);
    expect(screen.getByText('Test Link')).toBeInTheDocument();
  });
}); 