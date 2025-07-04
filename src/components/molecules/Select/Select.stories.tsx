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
      description: 'Valor selecionado atual',
    },
    defaultValue: {
      control: 'text',
      description: 'Valor padrão selecionado',
    },
    onValueChange: {
      action: 'value changed',
      description: 'Callback chamado quando o valor muda',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const options = [
  { value: 'option1', label: 'Opção 1' },
  { value: 'option2', label: 'Opção 2' },
  { value: 'option3', label: 'Opção 3' },
  { value: 'option4', label: 'Opção 4' },
  { value: 'option5', label: 'Opção 5' },
];

export const Default: Story = {
  args: {
    defaultValue: 'option1',
  },
  render: (args) => (
    <div className="w-[300px]">
      <Select {...args}>
        <Select.Trigger>
          <Select.Value placeholder="Selecione uma opção" />
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
      <label className="text-sm font-medium text-gray-700">Selecione uma opção</label>
      <Select {...args}>
        <Select.Trigger>
          <Select.Value placeholder="Escolha..." />
        </Select.Trigger>
        <Select.Content>
          <Select.Group>
            <Select.Label>Opções disponíveis</Select.Label>
            {options.map((option) => (
              <Select.Item key={option.value} value={option.value}>
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
          <Select.Value placeholder="Selecione uma opção" />
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
          <Select.Value placeholder="Selecione uma categoria" />
        </Select.Trigger>
        <Select.Content>
          <Select.Group>
            <Select.Label>Frutas</Select.Label>
            <Select.Item value="fruits-apple">Maçã</Select.Item>
            <Select.Item value="fruits-banana">Banana</Select.Item>
            <Select.Item value="fruits-orange">Laranja</Select.Item>
          </Select.Group>
          <Select.Group>
            <Select.Label>Vegetais</Select.Label>
            <Select.Item value="vegetables-carrot">Cenoura</Select.Item>
            <Select.Item value="vegetables-broccoli">Brócolis</Select.Item>
            <Select.Item value="vegetables-spinach">Espinafre</Select.Item>
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
          <Select.Value placeholder="Selecione uma opção" />
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
        Valor selecionado: {args.value || 'Nenhum'}
      </p>
    </div>
  ),
};

export const MultipleSizes: Story = {
  render: () => (
    <div className="space-y-4 w-[300px]">
      <div>
        <label className="text-sm font-medium text-gray-700 mb-2 block">Pequeno</label>
        <Select defaultValue="option1">
          <Select.Trigger className="h-8 text-xs">
            <Select.Value placeholder="Selecione..." />
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
        <label className="text-sm font-medium text-gray-700 mb-2 block">Médio (padrão)</label>
        <Select defaultValue="option1">
          <Select.Trigger>
            <Select.Value placeholder="Selecione..." />
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
        <label className="text-sm font-medium text-gray-700 mb-2 block">Grande</label>
        <Select defaultValue="option1">
          <Select.Trigger className="h-12 text-base">
            <Select.Value placeholder="Selecione..." />
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