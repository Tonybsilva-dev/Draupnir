import { render, screen } from '@testing-library/react';
import { Dropdown } from './Dropdown';

describe('Dropdown', () => {
  it('renderiza trigger', () => {
    render(
      <Dropdown>
        <Dropdown.Trigger asChild>
          <button>Menu</button>
        </Dropdown.Trigger>
        <Dropdown.Content>
          <Dropdown.Item>Item 1</Dropdown.Item>
        </Dropdown.Content>
      </Dropdown>
    );
    expect(screen.getByText('Menu')).toBeInTheDocument();
    // O item não aparece porque o dropdown está fechado por padrão
    expect(screen.queryByText('Item 1')).not.toBeInTheDocument();
  });
}); 