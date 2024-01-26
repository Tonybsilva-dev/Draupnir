import { Meta, StoryObj } from "@storybook/react";

import Link, { LinkProps } from "./Link";

const meta: Meta<LinkProps> = {
  title: "Design System/Molecules/Link",
  // tags: ["autodocs"],
  component: Link,
  parameters: {
    layout: "centered",
    parameters: {
      notes: "These are notes for the Link stories",
      info: "This is info for the Link stories",
    },
  },
  argTypes: {
    children: {
      type: "string",
      description: "Text of the link.",
    },
    href: {
      type: "string",
      description: "URL of the link.",
    },
    disabled: {
      control: { type: "boolean" },
      description: "State of the link.",
    },
    className: {
      type: "string",
      description: "Styles of the link.",
    },
  },
};

export default meta;

export const Primary: StoryObj<LinkProps> = {
  args: {
    children: "Link",
    href: "/",
  },
};

export const Disabled: StoryObj<LinkProps> = {
  args: {
    children: "Link",
    href: "/",
    disabled: true,
  },
};

export const Dark: StoryObj<LinkProps> = {
  args: {
    children: "Link",
    href: "/",
    className: "theme-dark",
  },
};
