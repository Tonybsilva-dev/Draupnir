import { render, screen } from '@testing-library/react';
import TextBlock from './TextBlock';

describe('TextBlock', () => {
  it('renderiza título e conteúdo', () => {
    render(<TextBlock title="Título">Conteúdo</TextBlock>);
    expect(screen.getByText('Título')).toBeInTheDocument();
    expect(screen.getByText('Conteúdo')).toBeInTheDocument();
  });
}); 