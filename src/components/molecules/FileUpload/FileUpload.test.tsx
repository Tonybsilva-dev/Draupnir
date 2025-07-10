import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { FileUpload } from './FileUpload';
import { FileUploadProvider, useFileUploadContext, FileWithStatus } from '../../../contexts/FileUploadContext';

const MockFileUploadProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <FileUploadProvider>{children}</FileUploadProvider>
);

describe('FileUpload', () => {
  it('renders correctly', () => {
    render(
      <FileUploadProvider>
        <FileUpload />
      </FileUploadProvider>
    );
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByText(/Arraste arquivos aqui/)).toBeInTheDocument();
  });

  it('applies props correctly', () => {
    render(
      <FileUploadProvider>
        <FileUpload accept="image/*" multiple={false} maxSizeMB={5} />
      </FileUploadProvider>
    );
    const input = screen.getByRole('button').querySelector('input');
    expect(input).toHaveAttribute('accept', 'image/*');
    expect(input).not.toHaveAttribute('multiple');
  });

  it('renders disabled when disabled=true', () => {
    render(
      <FileUploadProvider>
        <FileUpload disabled />
      </FileUploadProvider>
    );
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('aria-disabled', 'true');
  });

  it('shows config info', () => {
    render(
      <FileUploadProvider>
        <FileUpload accept="image/*" maxSizeMB={2} />
      </FileUploadProvider>
    );
    expect(screen.getByText(/Tipos permitidos/)).toBeInTheDocument();
    expect(screen.getByText(/Máx: 2MB/)).toBeInTheDocument();
  });

  it('opens file selector on click', () => {
    const mockClick = jest.fn();
    HTMLInputElement.prototype.click = mockClick;
    render(
      <FileUploadProvider>
        <FileUpload />
      </FileUploadProvider>
    );
    fireEvent.click(screen.getByRole('button'));
    expect(mockClick).toHaveBeenCalled();
  });

  it('does not open selector when disabled', () => {
    const mockClick = jest.fn();
    HTMLInputElement.prototype.click = mockClick;
    render(
      <FileUploadProvider>
        <FileUpload disabled />
      </FileUploadProvider>
    );
    fireEvent.click(screen.getByRole('button'));
    expect(mockClick).not.toHaveBeenCalled();
  });

  it('calls onFilesChange when files are selected', () => {
    const mockOnFilesChange = jest.fn();
    render(
      <FileUploadProvider>
        <FileUpload onFilesChange={mockOnFilesChange} />
      </FileUploadProvider>
    );
    const input = screen.getByRole('button').querySelector('input') as HTMLInputElement;
    const file = new File(['test'], 'test.txt', { type: 'text/plain' });
    fireEvent.change(input, { target: { files: [file] } });
    expect(mockOnFilesChange).toHaveBeenCalledWith([file]);
  });

  it('validates max file size', async () => {
    const mockOnFilesChange = jest.fn();
    render(
      <FileUploadProvider>
        <FileUpload maxSizeMB={1} onFilesChange={mockOnFilesChange} />
      </FileUploadProvider>
    );
    const input = screen.getByRole('button').querySelector('input') as HTMLInputElement;
    const largeFile = new File(['x'.repeat(2 * 1024 * 1024)], 'large.txt', { type: 'text/plain' });
    fireEvent.change(input, { target: { files: [largeFile] } });
    await waitFor(() => {
      expect(
        screen.queryByText((content) =>
          content.includes('excede') || content.includes('erro') || content.includes('tamanho máximo')
        )
      ).toBeTruthy();
    });
    expect(mockOnFilesChange).not.toHaveBeenCalled();
  });

  it('supports drag and drop', () => {
    const mockOnFilesChange = jest.fn();
    render(
      <FileUploadProvider>
        <FileUpload onFilesChange={mockOnFilesChange} />
      </FileUploadProvider>
    );
    const dropZone = screen.getByRole('button');
    const file = new File(['test'], 'test.txt', { type: 'text/plain' });
    const fileList = {
      0: file,
      length: 1,
      item: (i: number) => file,
    };
    fireEvent.drop(dropZone, {
      dataTransfer: { files: fileList }
    });
    expect(mockOnFilesChange).toHaveBeenCalledWith([file]);
  });

  it('prevents default on drag over', () => {
    render(
      <FileUploadProvider>
        <FileUpload />
      </FileUploadProvider>
    );
    const dropZone = screen.getByRole('button');
    const event = new Event('dragover', { bubbles: true, cancelable: true });
    Object.defineProperty(event, 'preventDefault', { value: jest.fn() });
    dropZone.dispatchEvent(event);
    expect(event.preventDefault).toHaveBeenCalled();
  });
});

describe('FileUpload.List', () => {
  it('does not render when there are no files', () => {
    render(
      <MockFileUploadProvider>
        <FileUpload.List />
      </MockFileUploadProvider>
    );
    expect(screen.queryByRole('list')).not.toBeInTheDocument();
  });

  it('renders file list', () => {
    const TestComponent = () => {
      const { setFiles } = useFileUploadContext();
      React.useEffect(() => {
        const file1 = new File(['test1'], 'test1.txt', { type: 'text/plain' });
        const file2 = new File(['test2'], 'test2.txt', { type: 'text/plain' });
        const files: FileWithStatus[] = [
          { file: file1, status: 'success', progress: 100 },
          { file: file2, status: 'pending', progress: 0 },
        ];
        setFiles(files);
      }, [setFiles]);
      return <FileUpload.List />;
    };
    render(
      <MockFileUploadProvider>
        <TestComponent />
      </MockFileUploadProvider>
    );
    expect(screen.getByText('test1.txt')).toBeInTheDocument();
    expect(screen.getByText('test2.txt')).toBeInTheDocument();
  });

  it('allows removing files', async () => {
    const TestComponent = () => {
      const { setFiles } = useFileUploadContext();
      React.useEffect(() => {
        const file = new File(['test'], 'test.txt', { type: 'text/plain' });
        setFiles([{ file, status: 'success', progress: 100 }]);
      }, [setFiles]);
      return <FileUpload.List />;
    };
    render(
      <MockFileUploadProvider>
        <TestComponent />
      </MockFileUploadProvider>
    );
    const removeButton = screen.getByLabelText('Remover test.txt');
    fireEvent.click(removeButton);
    await waitFor(() => {
      expect(screen.queryByText('test.txt')).not.toBeInTheDocument();
    });
  });
}); 