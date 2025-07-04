import { render } from '@testing-library/react';
import Divider from './Divider';

describe('Divider', () => {
  it('renderiza sem erros', () => {
    render(<Divider />);
  });
}); 