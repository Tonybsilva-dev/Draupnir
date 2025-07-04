import { render, screen } from '@testing-library/react';
import { Select } from './Select';

describe('Select', () => {
  it('renderiza o Select', () => {
    render(
      <Select>
        <Select.Trigger>
          <Select.Value placeholder="Selecione uma opção" />
        </Select.Trigger>
        <Select.Content>
          <Select.Item value="option1">Opção 1</Select.Item>
        </Select.Content>
      </Select>
    );
    expect(screen.getByText('Selecione uma opção')).toBeInTheDocument();
  });
}); 