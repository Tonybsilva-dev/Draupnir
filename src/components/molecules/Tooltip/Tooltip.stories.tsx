import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Tooltip, TooltipProps } from './Tooltip';

const meta: Meta<TooltipProps> = {
  title: 'Components/Molecules/Tooltip',
  component: Tooltip,
  parameters: {
    controls: { expanded: true },
  },
};
export default meta;

type Story = StoryObj<TooltipProps>;

export const Default: Story = {
  args: {
    content: 'Tooltip text',
    children: <button>Hover me</button>,
  },
};

export const Top: Story = {
  args: {
    content: 'Tooltip on top',
    position: 'top',
    children: <button>Top</button>,
  },
};

export const Bottom: Story = {
  args: {
    content: 'Tooltip on bottom',
    position: 'bottom',
    children: <button>Bottom</button>,
  },
};

export const Left: Story = {
  args: {
    content: 'Tooltip on left',
    position: 'left',
    children: <button>Left</button>,
  },
};

export const Right: Story = {
  args: {
    content: 'Tooltip on right',
    position: 'right',
    children: <button>Right</button>,
  },
};

export const WithDelay: Story = {
  args: {
    content: 'Tooltip with delay',
    delay: 800,
    children: <button>Delay 800ms</button>,
  },
};

export const CustomContent: Story = {
  args: {
    content: <span><b>Custom</b> <i>content</i></span>,
    children: <span style={{ textDecoration: 'underline', color: 'blue' }}>Hover custom</span>,
  },
}; 