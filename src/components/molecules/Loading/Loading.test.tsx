import { render } from '@testing-library/react';
import Loading from './Loading';

describe('Loading', () => {
  it('renderiza sem erros', () => {
    render(<Loading />);
  });
}); 