import { render, screen } from '@testing-library/react';
import TitlePage from './TitlePage';

describe('TitlePage', () => {
  it('renderiza título', () => {
    render(<TitlePage title="Dashboard" />);
    expect(screen.getByText('Dashboard')).toBeInTheDocument();
  });
}); 