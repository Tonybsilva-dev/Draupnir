import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { FileUpload, FileUploadProps } from './FileUpload';
import { FileUploadProvider } from '../../../contexts/FileUploadContext';

const meta: Meta<FileUploadProps> = {
  title: 'Components/Molecules/FileUpload',
  component: FileUpload,
  parameters: {
    controls: { expanded: true },
  },
};
export default meta;

type Story = StoryObj<FileUploadProps>;

export const Padrao: Story = {
  args: {},
  render: (args) => (
    <FileUploadProvider>
      <FileUpload {...args} />
    </FileUploadProvider>
  ),
};

export const ComLista: Story = {
  args: {},
  render: (args) => (
    <FileUploadProvider>
      <FileUpload {...args} />
      <FileUpload.List />
    </FileUploadProvider>
  ),
};

export const AceitaImagens: Story = {
  args: { accept: 'image/*' },
  render: (args) => (
    <FileUploadProvider>
      <FileUpload {...args} />
    </FileUploadProvider>
  ),
};

export const Desabilitado: Story = {
  args: { disabled: true },
  render: (args) => (
    <FileUploadProvider>
      <FileUpload {...args} />
    </FileUploadProvider>
  ),
};

export const Maximo2MB: Story = {
  args: { maxSizeMB: 2 },
  render: (args) => (
    <FileUploadProvider>
      <FileUpload {...args} />
    </FileUploadProvider>
  ),
};

export const UnicoArquivo: Story = {
  args: { multiple: false },
  render: (args) => (
    <FileUploadProvider>
      <FileUpload {...args} />
    </FileUploadProvider>
  ),
}; 