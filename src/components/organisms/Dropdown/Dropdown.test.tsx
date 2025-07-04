import { render, screen } from '@testing-library/react';
import { Dropdown } from './Dropdown';

describe('Dropdown', () => {
  it('renders dropdown trigger', () => {
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
    // Item doesn't appear because dropdown is closed by default
    expect(screen.queryByText('Item 1')).not.toBeInTheDocument();
  });
}); 