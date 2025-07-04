import { render, screen } from '@testing-library/react';
import TitlePage from './TitlePage';

describe('TitlePage', () => {
  it('renders title', () => {
    render(<TitlePage title="Test Title" description="Test description" />);
    expect(screen.getByText('Test Title')).toBeInTheDocument();
  });
}); 