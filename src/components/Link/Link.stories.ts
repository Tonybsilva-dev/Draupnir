import { Meta, StoryObj } from "@storybook/react";

import Link, { LinkProps } from "./Link";

const meta: Meta<LinkProps> = {
  title: "Design System/Molecules/Link",
  // tags: ["autodocs"],
  component: Link,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    children: {
      type: "string",
    },
    href: {
      type: "string",
    },
    disabled: {
      type: "boolean",
    },
    className: {
      type: "string",
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
