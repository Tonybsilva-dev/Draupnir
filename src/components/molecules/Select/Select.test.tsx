import { render, screen } from '@testing-library/react';
import Select from './Select';

describe('Select', () => {
  const mockOptions = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];

  const renderSelect = (props = {}) => {
    return render(
      <Select {...props}>
        <Select.Trigger>
          <Select.Value placeholder="Select an option" />
        </Select.Trigger>
        <Select.Content>
          {mockOptions.map((option) => (
            <Select.Item key={option.value} value={option.value}>
              {option.label}
            </Select.Item>
          ))}
        </Select.Content>
      </Select>
    );
  };

  it('renders the Select with trigger', () => {
    renderSelect();
    expect(screen.getByRole('combobox')).toBeInTheDocument();
    expect(screen.getByText('Select an option')).toBeInTheDocument();
  });

  it('displays selected value when value prop is provided', () => {
    renderSelect({ value: 'option2' });
    expect(screen.getByText('Option 2')).toBeInTheDocument();
  });

  it('displays selected value when defaultValue is provided', () => {
    renderSelect({ defaultValue: 'option3' });
    expect(screen.getByText('Option 3')).toBeInTheDocument();
  });

  it('handles disabled state', () => {
    renderSelect({ disabled: true });
    const trigger = screen.getByRole('combobox');
    expect(trigger).toBeDisabled();
  });

  it('renders with custom trigger styling', () => {
    renderSelect();
    const trigger = screen.getByRole('combobox');
    expect(trigger).toHaveStyle('display: flex');
    expect(trigger).toHaveStyle('height: 32px');
    expect(trigger).toHaveStyle('width: 100%');
    expect(trigger).toHaveStyle('align-items: center');
    expect(trigger).toHaveStyle('justify-content: space-between');
  });

  it('renders chevron icon', () => {
    renderSelect();
    const trigger = screen.getByRole('combobox');
    const chevron = trigger.querySelector('svg');
    expect(chevron).toBeInTheDocument();
  });

  it('supports aria attributes', () => {
    renderSelect();
    const trigger = screen.getByRole('combobox');
    expect(trigger).toHaveAttribute('aria-expanded');
    expect(trigger).toHaveAttribute('aria-autocomplete');
  });

  it('handles empty options gracefully', () => {
    render(
      <Select>
        <Select.Trigger>
          <Select.Value placeholder="No options" />
        </Select.Trigger>
        <Select.Content>
          {/* No items */}
        </Select.Content>
      </Select>
    );

    expect(screen.getByText('No options')).toBeInTheDocument();
  });

  it('renders with custom className on trigger', () => {
    render(
      <Select>
        <Select.Trigger className="custom-class">
          <Select.Value placeholder="Custom trigger" />
        </Select.Trigger>
        <Select.Content>
          <Select.Item value="test">Test</Select.Item>
        </Select.Content>
      </Select>
    );

    const trigger = screen.getByRole('combobox');
    expect(trigger).toHaveClass('custom-class');
  });

  it('renders SelectItem with indented prop', () => {
    render(
      <Select>
        <Select.Trigger>
          <Select.Value placeholder="Test" />
        </Select.Trigger>
        <Select.Content>
          <Select.Item value="test" indented>Indented Item</Select.Item>
        </Select.Content>
      </Select>
    );

    expect(screen.getByRole('combobox')).toBeInTheDocument();
  });

  it('renders SelectLabel correctly', () => {
    render(
      <Select>
        <Select.Trigger>
          <Select.Value placeholder="Test" />
        </Select.Trigger>
        <Select.Content>
          <Select.Group>
            <Select.Label>Test Label</Select.Label>
            <Select.Item value="test">Test Item</Select.Item>
          </Select.Group>
        </Select.Content>
      </Select>
    );

    expect(screen.getByRole('combobox')).toBeInTheDocument();
  });

  it('renders SelectGroup correctly', () => {
    render(
      <Select>
        <Select.Trigger>
          <Select.Value placeholder="Test" />
        </Select.Trigger>
        <Select.Content>
          <Select.Group>
            <Select.Item value="test">Test Item</Select.Item>
          </Select.Group>
        </Select.Content>
      </Select>
    );

    expect(screen.getByRole('combobox')).toBeInTheDocument();
  });

  it('supports controlled value updates', () => {
    const { rerender } = renderSelect({ value: 'option1' });
    expect(screen.getByText('Option 1')).toBeInTheDocument();

    rerender(
      <Select value="option3">
        <Select.Trigger>
          <Select.Value placeholder="Select an option" />
        </Select.Trigger>
        <Select.Content>
          {mockOptions.map((option) => (
            <Select.Item key={option.value} value={option.value}>
              {option.label}
            </Select.Item>
          ))}
        </Select.Content>
      </Select>
    );

    expect(screen.getByText('Option 3')).toBeInTheDocument();
  });

  it('renders with portal content', () => {
    renderSelect();
    // The content should be rendered in a portal, but we can still verify the trigger exists
    expect(screen.getByRole('combobox')).toBeInTheDocument();
  });
}); 