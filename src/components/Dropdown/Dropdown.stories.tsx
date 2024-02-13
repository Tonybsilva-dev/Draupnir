import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Dropdown } from "./Dropdown";
import { Button } from "../Button/Button";

const meta: Meta = {
  title: "Design System/Molecules/Dropdown",
  component: Dropdown,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    buttonText: {
      control: "text",
      defaultValue: "Open Dropdown",
    },
    item1Text: {
      control: "text",
      defaultValue: "Item 1",
    },
    item2Text: {
      control: "text",
      defaultValue: "Item 2",
    },
  },
};

export default meta;

const DropdownStory = ({
  buttonText = "Dropdown",
  item1Text,
  item2Text,
}: any) => {
  return (
    <Dropdown>
      <Dropdown.Trigger asChild>
        <Button variant="outline">{buttonText}</Button>
      </Dropdown.Trigger>
      <Dropdown.Content>
        <Dropdown.Item onSelect={() => console.log(`${item1Text} selected`)}>
          {item1Text}
        </Dropdown.Item>
        <Dropdown.Item onSelect={() => console.log(`${item2Text} selected`)}>
          {item2Text}
        </Dropdown.Item>
      </Dropdown.Content>
    </Dropdown>
  );
};

export const Primary: StoryObj = {
  render: (args) => <DropdownStory {...args} />,
};
