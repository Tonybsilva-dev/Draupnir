import { Meta, StoryObj } from "@storybook/react";

import {
  Input,
  InputRootProps,
  InputControlProps,
  InputPrefixProps,
} from "./Input";
import { UserCircle } from "lucide-react";

const meta: Meta<InputRootProps & InputControlProps> = {
  title: "Design System/Molecules/Input",
  component: Input.Root,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    // Root Props
    label: { control: "object" },
    errorMessage: { control: "object" },

    // Control Props
    disabled: { control: "boolean" },
    type: { control: "text" },
    placeholder: { control: "text" },
  },
};

export default meta;

const InputStoryDefault = ({
  rootProps,
  controlProps,
  prefixProps
}: {
  rootProps?: InputRootProps;
  controlProps?: InputControlProps;
  prefixProps?: InputPrefixProps;
}) => {
  return (
    <Input.Root {...rootProps}>
      <Input.Prefix {...prefixProps}>
        <UserCircle className="h-5 w-5 text-zinc-500" />
      </Input.Prefix>
      <Input.Control {...controlProps} ref={null}/>
    </Input.Root>
  );
};

export const Primary: StoryObj<typeof InputStoryDefault> = {
  args: {
    rootProps: {
      label: "Identifier",
    },
    controlProps: {
      placeholder: "CPF / CNPJ",
    },
  },
  render: (args) => <InputStoryDefault {...args} />,
};

export const Disabled: StoryObj<typeof InputStoryDefault> = {
  args: {
    rootProps: {
      label: "Identifier",
    },
    controlProps: {
      disabled: true,
    },
  },
  render: (args) => <InputStoryDefault {...args} />,
};

export const WithLabel: StoryObj<typeof InputStoryDefault> = {
  args: {
    rootProps: {
      label: "Identifier",
    },
  },
  render: (args) => <InputStoryDefault {...args} />,
};

export const WithMessageError: StoryObj<typeof InputStoryDefault> = {
  args: {
    rootProps: {
      label: "Identifier",
      errorMessage: "Invalid credentials.",
    },
  },
  render: (args) => <InputStoryDefault {...args} />,
};
