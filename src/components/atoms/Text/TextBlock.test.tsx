import { render, screen } from '@testing-library/react';
import TextBlock from './TextBlock';

describe('TextBlock', () => {
  it('renders title and content', () => {
    render(<TextBlock title="Test Title">Test content</TextBlock>);
    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Test content')).toBeInTheDocument();
  });
}); 