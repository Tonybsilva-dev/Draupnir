import { render, screen } from '@testing-library/react';
import Notice from './Notice';

describe('Notice', () => {
  it('renderiza mensagem', () => {
    render(<Notice type="info" message="Mensagem de teste" />);
    expect(screen.getByText('Mensagem de teste')).toBeInTheDocument();
  });
}); 