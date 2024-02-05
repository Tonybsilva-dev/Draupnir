import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import {
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  type ModalProps,
} from "./Modal";
import { Button } from "../Button/Button";
import Typography from "../Typography/Typography";

const meta: Meta<ModalProps> = {
  title: "Design System/Molecules/Modal",
  parameters: {
    layout: "centered",
  },
  component: Modal,
  argTypes: {
    isOpen: {
      control: "boolean",
    },
    variant: {
      control: {
        type: "radio",
      },
    },
    onClose: { action: "closed" },
  },
  decorators: [
    (Story) => (
      <div
        style={{
          minHeight: "50vh",
          minWidth: "50vw",
          display: "flex",
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export default meta;

const ModalStoryChoice = (args: ModalProps) => {
  const [isOpen, setIsOpen] = useState(args.isOpen);
  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
      <Modal {...args} isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <ModalHeader>Your changes will be lost</ModalHeader>
        <ModalBody>
          <Typography size="xl">Your changes will be lost</Typography>
          <div className="space-y-2 my-2">
            <div className="h-4 bg-gray-300 rounded animate-pulse"></div>
            <div className="h-4 bg-gray-300 rounded animate-pulse"></div>
            <div className="h-4 bg-gray-300 rounded animate-pulse"></div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button variant="outline">Don&apos;t save</Button>
          <Button>Save changes</Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export const Primary: StoryObj<ModalProps> = {
  args: {
    isOpen: false,
    variant: "default",
  },
  render: (args: ModalProps) => {
    return <ModalStoryChoice {...args} />;
  },
};
