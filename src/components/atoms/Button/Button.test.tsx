import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
  it('renderiza o texto do botão', () => {
    render(<Button>Meu Botão</Button>);
    expect(screen.getByRole('button')).toHaveTextContent('Meu Botão');
  });

  it('dispara o evento onClick', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Clique</Button>);
    screen.getByRole('button').click();
    expect(handleClick).toHaveBeenCalled();
  });
}); 