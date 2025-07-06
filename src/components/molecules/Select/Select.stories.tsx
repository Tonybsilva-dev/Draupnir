import type { Meta, StoryObj } from '@storybook/react';
import Select from './Select';
import { colors, spacing } from '../../../tokens';

const meta: Meta<typeof Select> = {
  title: "Components/Molecules/Select",
  component: Select,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: 'text',
      description: 'Currently selected value',
    },
    defaultValue: {
      control: 'text',
      description: 'Default selected value',
    },
    onValueChange: {
      action: 'value changed',
      description: 'Callback called when value changes',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const options = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
  { value: 'option4', label: 'Option 4' },
  { value: 'option5', label: 'Option 5' },
];

export const Default: Story = {
  args: {
    defaultValue: 'option1',
  },
  render: (args) => (
    <div style={{ width: '300px' }}>
      <Select {...args}>
        <Select.Trigger>
          <Select.Value placeholder="Select an option" />
        </Select.Trigger>
        <Select.Content>
          {options.map((option) => (
            <Select.Item key={option.value} value={option.value}>
              {option.label}
            </Select.Item>
          ))}
        </Select.Content>
      </Select>
    </div>
  ),
};

export const WithLabel: Story = {
  args: {
    defaultValue: 'option1',
  },
  render: (args) => (
    <div style={{ width: '300px' }}>
      <label style={{
        fontSize: '14px',
        fontWeight: 500,
        color: colors.text.primary,
        marginBottom: spacing[2],
        display: 'block'
      }}>
        Select an option
      </label>
      <Select {...args}>
        <Select.Trigger>
          <Select.Value placeholder="Choose..." />
        </Select.Trigger>
        <Select.Content>
          <Select.Group>
            <Select.Label>Available options</Select.Label>
            {options.map((option) => (
              <Select.Item key={option.value} value={option.value} indented>
                {option.label}
              </Select.Item>
            ))}
          </Select.Group>
        </Select.Content>
      </Select>
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    defaultValue: 'option1',
  },
  render: (args) => (
    <div style={{ width: '300px' }}>
      <Select {...args} disabled>
        <Select.Trigger>
          <Select.Value placeholder="Select an option" />
        </Select.Trigger>
        <Select.Content>
          {options.map((option) => (
            <Select.Item key={option.value} value={option.value}>
              {option.label}
            </Select.Item>
          ))}
        </Select.Content>
      </Select>
    </div>
  ),
};

export const WithGroups: Story = {
  args: {
    defaultValue: 'fruits-apple',
  },
  render: (args) => (
    <div style={{ width: '300px' }}>
      <Select {...args}>
        <Select.Trigger>
          <Select.Value placeholder="Select a category" />
        </Select.Trigger>
        <Select.Content>
          <Select.Group>
            <Select.Label>Fruits</Select.Label>
            <Select.Item value="fruits-apple" indented>Apple</Select.Item>
            <Select.Item value="fruits-banana" indented>Banana</Select.Item>
            <Select.Item value="fruits-orange" indented>Orange</Select.Item>
          </Select.Group>
          <Select.Group>
            <Select.Label>Vegetables</Select.Label>
            <Select.Item value="vegetables-carrot" indented>Carrot</Select.Item>
            <Select.Item value="vegetables-broccoli" indented>Broccoli</Select.Item>
            <Select.Item value="vegetables-spinach" indented>Spinach</Select.Item>
          </Select.Group>
        </Select.Content>
      </Select>
    </div>
  ),
};

export const Controlled: Story = {
  args: {
    value: 'option1',
  },
  render: (args) => (
    <div style={{ width: '300px' }}>
      <Select {...args}>
        <Select.Trigger>
          <Select.Value placeholder="Select an option" />
        </Select.Trigger>
        <Select.Content>
          {options.map((option) => (
            <Select.Item key={option.value} value={option.value}>
              {option.label}
            </Select.Item>
          ))}
        </Select.Content>
      </Select>
      <p style={{
        fontSize: '14px',
        color: colors.text.secondary,
        marginTop: spacing[4]
      }}>
        Selected value: {args.value || 'None'}
      </p>
    </div>
  ),
};

export const MultipleSizes: Story = {
  render: () => (
    <div style={{ width: '300px' }}>
      <div style={{ marginBottom: spacing[4] }}>
        <label style={{
          fontSize: '14px',
          fontWeight: 500,
          color: colors.text.primary,
          marginBottom: spacing[2],
          display: 'block'
        }}>
          Small
        </label>
        <Select defaultValue="option1">
          <Select.Trigger style={{ height: spacing[4], fontSize: '12px' }}>
            <Select.Value placeholder="Select..." />
          </Select.Trigger>
          <Select.Content>
            {options.map((option) => (
              <Select.Item key={option.value} value={option.value}>
                {option.label}
              </Select.Item>
            ))}
          </Select.Content>
        </Select>
      </div>

      <div style={{ marginBottom: spacing[4] }}>
        <label style={{
          fontSize: '14px',
          fontWeight: 500,
          color: colors.text.primary,
          marginBottom: spacing[2],
          display: 'block'
        }}>
          Medium (default)
        </label>
        <Select defaultValue="option1">
          <Select.Trigger>
            <Select.Value placeholder="Select..." />
          </Select.Trigger>
          <Select.Content>
            {options.map((option) => (
              <Select.Item key={option.value} value={option.value}>
                {option.label}
              </Select.Item>
            ))}
          </Select.Content>
        </Select>
      </div>

      <div>
        <label style={{
          fontSize: '14px',
          fontWeight: 500,
          color: colors.text.primary,
          marginBottom: spacing[2],
          display: 'block'
        }}>
          Large
        </label>
        <Select defaultValue="option1">
          <Select.Trigger style={{ height: spacing[8], fontSize: '16px' }}>
            <Select.Value placeholder="Select..." />
          </Select.Trigger>
          <Select.Content>
            {options.map((option) => (
              <Select.Item key={option.value} value={option.value}>
                {option.label}
              </Select.Item>
            ))}
          </Select.Content>
        </Select>
      </div>
    </div>
  ),
}; 