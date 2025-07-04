import { render, screen } from '@testing-library/react';
import SubtitlePage from './SubtitlePage';

describe('SubtitlePage', () => {
  it('renders subtitle', () => {
    render(<SubtitlePage subtitle="Test Subtitle" description="Test description" />);
    expect(screen.getByText('Test Subtitle')).toBeInTheDocument();
  });
}); 