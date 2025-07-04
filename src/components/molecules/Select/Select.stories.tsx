import type { Meta, StoryObj } from '@storybook/react';
import Select from './Select';

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
    <div className="w-[300px]">
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
    <div className="w-[300px] space-y-2">
      <label className="text-sm font-medium text-gray-700">Select an option</label>
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
    <div className="w-[300px]">
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
    <div className="w-[300px]">
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
    <div className="w-[300px] space-y-4">
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
      <p className="text-sm text-gray-600">
        Selected value: {args.value || 'None'}
      </p>
    </div>
  ),
};

export const MultipleSizes: Story = {
  render: () => (
    <div className="space-y-4 w-[300px]">
      <div>
        <label className="text-sm font-medium text-gray-700 mb-2 block">Small</label>
        <Select defaultValue="option1">
          <Select.Trigger className="h-8 text-xs">
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
        <label className="text-sm font-medium text-gray-700 mb-2 block">Medium (default)</label>
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
        <label className="text-sm font-medium text-gray-700 mb-2 block">Large</label>
        <Select defaultValue="option1">
          <Select.Trigger className="h-12 text-base">
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