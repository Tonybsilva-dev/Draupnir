import { render, screen } from '@testing-library/react';
import Select from './Select';

describe('Select', () => {
  it('renders the Select', () => {
    render(<Select options={[{ value: '1', label: 'Option 1' }]} />);
    expect(screen.getByRole('combobox')).toBeInTheDocument();
  });
}); 