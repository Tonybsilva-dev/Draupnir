import { Meta, StoryObj } from "@storybook/react";
import Typography from "./Typography";

const meta = {
  title: "Components/Atoms/Typography",
  component: Typography,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'tertiary'],
      description: 'Text color variant',
    },
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '4xl', 'title1', 'title2', 'title3'],
      description: 'Font size',
    },
    element: {
      control: { type: 'select' },
      options: ['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'span', 'div'],
      description: 'HTML element',
    },
    semantic: {
      control: { type: 'select' },
      options: ['heading', 'paragraph', 'list', 'listitem', 'emphasis', 'strong'],
      description: 'Semantic meaning',
    },
    level: {
      control: { type: 'number', min: 1, max: 6 },
      description: 'Heading level (1-6)',
    },
    className: {
      control: { type: 'text' },
      description: 'Additional CSS classes',
    },
    children: {
      control: { type: 'text' },
      description: 'Text content',
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Example text",
    size: "md",
    variant: "primary",
  },
};

export const AllVariants: Story = {
  args: {
    children: "Primary Text",
    size: "md",
    variant: "primary",
  },
};

export const AllSizes: Story = {
  args: {
    children: "Large Text",
    size: "lg",
    variant: "primary",
  },
};

export const Headings: Story = {
  args: {
    children: "Heading Title",
    semantic: "heading",
    level: 1,
    size: "title1",
  },
};

export const SemanticElements: Story = {
  args: {
    children: "Semantic Text",
    semantic: "paragraph",
    size: "md",
  },
};

export const WithCustomStyles: Story = {
  args: {
    children: "Text with custom styles",
    size: "lg",
    variant: "primary",
    style: {
      backgroundColor: '#f0f0f0',
      padding: '16px',
      borderRadius: '8px',
      textAlign: 'center'
    },
  },
}; 