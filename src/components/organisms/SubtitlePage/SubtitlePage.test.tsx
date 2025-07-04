import { render, screen } from '@testing-library/react';
import SubtitlePage from './SubtitlePage';

describe('SubtitlePage', () => {
  it('renderiza subtítulo', () => {
    render(<SubtitlePage subtitle="Informações" />);
    expect(screen.getByText('Informações')).toBeInTheDocument();
  });
}); 