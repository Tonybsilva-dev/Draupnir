import { Meta, StoryObj } from "@storybook/react";
import DatePicker from "./DatePicker";
import React from "react";

const meta = {
  title: "Components/Molecules/DatePicker",
  component: DatePicker,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
## DatePicker

Componente de seleção de data acessível, com calendário interativo, suporte a range de datas e múltiplos formatos.
        `,
      },
    },
  },
  argTypes: {
    value: {
      description: "Data selecionada (controlada)",
      control: false,
      table: {
        type: { summary: "Date" },
        defaultValue: { summary: undefined },
      },
    },
    onChange: {
      description: "Callback ao selecionar uma data",
      control: false,
      table: {
        type: { summary: "(date: Date | null) => void" },
      },
    },
    placeholder: {
      description: "Placeholder do input",
      control: { type: "text" },
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "Selecione uma data" },
      },
    },
    disabled: {
      description: "Desabilita o input e o calendário",
      control: { type: "boolean" },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false },
      },
    },
    required: {
      description: "Campo obrigatório",
      control: { type: "boolean" },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false },
      },
    },
    minDate: {
      description: "Data mínima permitida",
      control: false,
      table: {
        type: { summary: "Date" },
      },
    },
    maxDate: {
      description: "Data máxima permitida",
      control: false,
      table: {
        type: { summary: "Date" },
      },
    },
    format: {
      description: "Formato da data exibida",
      control: { type: "select", options: ["dd/MM/yyyy", "yyyy-MM-dd"] },
      table: {
        type: { summary: '"dd/MM/yyyy" | "yyyy-MM-dd"' },
        defaultValue: { summary: '"dd/MM/yyyy"' },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: (args) => <DatePicker {...args} />,
  args: {
    value: undefined,
    onChange: () => { },
    placeholder: "Selecione uma data",
    disabled: false,
    required: false,
    format: "dd/MM/yyyy",
  },
};

export const Example: Story = {
  render: () => <DatePickerExample />,
};

function DatePickerExample() {
  const [date, setDate] = React.useState<Date | undefined>(undefined);
  const [format, setFormat] = React.useState<'dd/MM/yyyy' | 'yyyy-MM-dd'>('dd/MM/yyyy');
  const [disabled, setDisabled] = React.useState(false);
  const [required, setRequired] = React.useState(false);
  const [placeholder, setPlaceholder] = React.useState('Selecione uma data');
  const [useRange, setUseRange] = React.useState(false);
  const [minDate, setMinDate] = React.useState<Date | undefined>(undefined);
  const [maxDate, setMaxDate] = React.useState<Date | undefined>(undefined);

  const handleChange = (d: Date | null) => setDate(d || undefined);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 340 }}>
      <DatePicker
        value={date}
        onChange={handleChange}
        format={format}
        disabled={disabled}
        required={required}
        placeholder={placeholder}
        minDate={useRange ? minDate : undefined}
        maxDate={useRange ? maxDate : undefined}
      />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <label>
          <input type="checkbox" checked={disabled} onChange={e => setDisabled(e.target.checked)} /> Desabilitado
        </label>
        <label>
          <input type="checkbox" checked={required} onChange={e => setRequired(e.target.checked)} /> Obrigatório
        </label>
        <label>
          Placeholder: <input type="text" value={placeholder} onChange={e => setPlaceholder(e.target.value)} />
        </label>
        <label>
          Formato:
          <select value={format} onChange={e => setFormat(e.target.value as any)}>
            <option value="dd/MM/yyyy">dd/MM/yyyy</option>
            <option value="yyyy-MM-dd">yyyy-MM-dd</option>
          </select>
        </label>
        <label>
          <input type="checkbox" checked={useRange} onChange={e => setUseRange(e.target.checked)} /> Ativar range de datas
        </label>
        {useRange && (
          <>
            <label>
              Data mínima:
              <input type="date" value={minDate ? minDate.toISOString().slice(0, 10) : ''} onChange={e => setMinDate(e.target.value ? new Date(e.target.value) : undefined)} />
            </label>
            <label>
              Data máxima:
              <input type="date" value={maxDate ? maxDate.toISOString().slice(0, 10) : ''} onChange={e => setMaxDate(e.target.value ? new Date(e.target.value) : undefined)} />
            </label>
          </>
        )}
        <div>
          <b>Data selecionada:</b> {date ? date.toLocaleDateString() : 'Nenhuma'}
        </div>
      </div>
    </div>
  );
} 