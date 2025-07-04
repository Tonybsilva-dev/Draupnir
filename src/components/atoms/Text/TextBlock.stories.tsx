import { Meta, StoryObj } from "@storybook/react";

import TextBlock, { type TextBlockProps } from "./TextBlock";

const meta: Meta<TextBlockProps> = {
  title: "Components/Atoms/Text",
  component: TextBlock,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'dark'],
      description: 'Variação de cor do bloco de texto',
      table: {
        type: { summary: '"primary" | "secondary" | "dark"' },
        defaultValue: { summary: 'primary' },
      },
    },
    title: {
      type: "string",
    },
    children: {
      type: "string",
    },
  },
};

export default meta;

export const Primary: StoryObj<TextBlockProps> = {
  args: {
    title: "Title",
    children: "Hi, I'm a standard Text block",
  },
};

export const TextBlockPrimary: StoryObj<TextBlockProps> = {
  args: {
    title: "Title",
    children: "Hi, I'm a Primary Text block",
    type: "primary",
  },
};

export const TextBlockSecondary: StoryObj<TextBlockProps> = {
  args: {
    title: "Title",
    children: "Hello, I am a Secondary Text block",
    type: "secondary",
  },
};

export const TextBlockTertiary: StoryObj<TextBlockProps> = {
  args: {
    title: "Title",
    children: "Hello, I am a Tertiary Text block",
    type: "dark",
  },
};
