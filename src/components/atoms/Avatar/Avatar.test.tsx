import { render, screen } from '@testing-library/react';
import Avatar from './Avatar';

describe('Avatar', () => {
  it('renders avatar', () => {
    render(<Avatar description="User" />);
    // Checks if the component renders (has the SVG icon)
    expect(document.querySelector('svg')).toBeInTheDocument();
  });
}); 