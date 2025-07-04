import { render, screen } from '@testing-library/react';
import Divider from './Divider';

describe('Divider', () => {
  it('renders without errors', () => {
    render(<Divider />);
    expect(document.querySelector('hr')).toBeInTheDocument();
  });
}); 