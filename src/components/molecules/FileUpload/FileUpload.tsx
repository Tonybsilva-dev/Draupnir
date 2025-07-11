import React, { useRef } from 'react';
import { FileWithStatus, FileStatus, useFileUploadContext, FileUploadProvider } from '../../../contexts/FileUploadContext';
import { cn } from '../../../utils/cn';
import { colors, borderRadius, spacing, typography } from '../../../tokens';
import {
  Image as ImageIcon,
  Video as VideoIcon,
  FileText,
  FileSpreadsheet,
  FileBarChart,
  FileArchive,
  File as FileIcon,
  CheckCircle2,
  XCircle,
  Trash2
} from 'lucide-react';

export interface FileUploadProps {
  accept?: string;
  multiple?: boolean;
  disabled?: boolean;
  maxSizeMB?: number;
  onFilesChange?: (files: File[]) => void;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

function FileUploadRoot({
  accept,
  multiple = true,
  disabled = false,
  maxSizeMB = 10,
  onFilesChange,
  className,
  style,
  children,
}: FileUploadProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const {
    files,
    addFiles,
    setError,
    error,
    loading,
    clearFiles,
  } = useFileUploadContext();

  const handleFiles = (fileList: FileList | File[]) => {
    const arr = Array.from(fileList);
    const validFiles = arr.filter(f => f.size <= maxSizeMB * 1024 * 1024);
    const invalidFiles = arr.filter(f => f.size > maxSizeMB * 1024 * 1024);
    if (invalidFiles.length > 0) {
      setError(`O arquivo "${invalidFiles[0].name}" excede o tamanho máximo de ${maxSizeMB}MB.`);
    } else {
      setError(undefined);
    }
    if (validFiles.length > 0) {
      addFiles(validFiles);
      onFilesChange?.([...files, ...validFiles].map(f => ('file' in f ? f.file : f)));
    }
  };

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    if (disabled) return;
    handleFiles(e.dataTransfer.files);
  };

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      handleFiles(e.target.files);
      e.target.value = '';
    }
  };

  const onClick = () => {
    if (!disabled) inputRef.current?.click();
  };

  return (
    <div style={{ width: '100%' }}>
      <div
        tabIndex={0}
        role="button"
        aria-disabled={disabled}
        aria-label="Área de upload de arquivos"
        onClick={onClick}
        onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && onClick()}
        onDrop={onDrop}
        onDragOver={e => e.preventDefault()}
        className={cn('file-upload-drop', className)}
        style={{
          border: `2px dashed ${colors.primary[500]}`,
          borderRadius: borderRadius.md,
          padding: spacing[5],
          background: disabled ? colors.background.light : 'rgb(var(--bg-light))',
          color: colors.text.primary,
          textAlign: 'center',
          cursor: disabled ? 'not-allowed' : 'pointer',
          opacity: disabled ? 0.5 : 1,
          outline: 'none',
          transition: 'border-color 0.2s',
          ...style,
        }}
      >
        <input
          ref={inputRef}
          type="file"
          accept={accept}
          multiple={multiple}
          disabled={disabled}
          style={{ display: 'none' }}
          onChange={onInputChange}
        />
        <div style={{ fontSize: typography.text.md, marginBottom: spacing[2] }}>
          Arraste arquivos aqui ou <span style={{ color: colors.primary[500], textDecoration: 'underline' }}>clique para selecionar</span>
        </div>
        <div style={{ fontSize: typography.text.sm, color: colors.text.secondary }}>
          {accept ? `Tipos permitidos: ${accept}` : 'Qualquer tipo de arquivo'}
          {multiple ? ' | Múltiplos arquivos' : ' | Apenas um arquivo'}
          {maxSizeMB ? ` | Máx: ${maxSizeMB}MB` : ''}
        </div>
        {loading && <div style={{ color: colors.primary[500], marginTop: spacing[2] }}>Carregando...</div>}
        {error && <div style={{ color: colors.error[600], marginTop: spacing[2] }}>{error}</div>}
        {children}
      </div>
      {files.length > 0 && (
        <button
          type="button"
          onClick={clearFiles}
          style={{
            marginTop: spacing[2],
            background: 'none',
            border: 'none',
            color: colors.error[600],
            cursor: 'pointer',
            fontSize: typography.text.sm,
            textDecoration: 'underline',
          }}
        >
          Limpar arquivos
        </button>
      )}
    </div>
  );
}

function getFileIcon(type: string | undefined): React.ReactNode {
  const t = typeof type === 'string' ? type : '';
  if (t.startsWith('image/')) return <ImageIcon size={24} color={colors.primary[500]} />;
  if (t.startsWith('video/')) return <VideoIcon size={24} color={colors.primary[500]} />;
  if (t === 'application/pdf' || t.startsWith('text/')) return <FileText size={24} color={colors.primary[500]} />;
  if (t.includes('spreadsheet') || t.includes('excel')) return <FileSpreadsheet size={24} color={colors.primary[500]} />;
  if (t.includes('presentation') || t.includes('powerpoint')) return <FileBarChart size={24} color={colors.primary[500]} />;
  if (t.includes('zip') || t.includes('rar') || t.includes('compressed')) return <FileArchive size={24} color={colors.primary[500]} />;
  return <FileIcon size={24} color={colors.primary[500]} />;
}

function getStatusIcon(status: FileStatus, error?: string) {
  if (status === 'success') return <CheckCircle2 size={20} color={colors.success[600]} />;
  if (status === 'error') return <XCircle size={20} color={colors.error[600]} />;
  return null;
}

function FileUploadList() {
  const { files, removeFile, setFileStatus } = useFileUploadContext();
  if (files.length === 0) return null;
  return (
    <ul style={{ marginTop: spacing[4], padding: 0, listStyle: 'none', width: '100%' }}>
      {files.map((f, i) => {
        const { file, status, progress, error } = f;
        return (
          <li
            key={file.name + i}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: spacing[3],
              marginBottom: spacing[3],
              border: `1px solid ${status === 'success' ? colors.success[200] : status === 'error' ? colors.error[200] : colors.primary[200]}`,
              borderRadius: borderRadius.md,
              padding: spacing[3],
              background: colors.background.light,
              boxShadow: status === 'success' ? `0 0 0 2px ${colors.success[100]}` : status === 'error' ? `0 0 0 2px ${colors.error[100]}` : undefined,
              position: 'relative',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 40, height: 40, background: colors.primary[50], borderRadius: '50%' }}>
              {getFileIcon(file.type)}
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontWeight: 600, fontSize: typography.text.md, color: colors.text.primary, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{file.name}</div>
              <div style={{ fontSize: typography.text.sm, color: colors.text.secondary }}>{(file.size / 1024 / 1024) >= 1 ? `${(file.size / 1024 / 1024).toFixed(1)} MB` : `${(file.size / 1024).toFixed(1)} KB`}</div>
              <div style={{ marginTop: 6, height: 6, background: colors.primary[100], borderRadius: 3, overflow: 'hidden', position: 'relative' }}>
                <div style={{
                  width: `${progress}%`,
                  height: '100%',
                  background: status === 'error' ? colors.error[500] : status === 'success' ? colors.success[500] : colors.primary[500],
                  transition: 'width 0.3s',
                }} />
              </div>
            </div>
            <div style={{ marginLeft: spacing[2], display: 'flex', alignItems: 'center', gap: spacing[2] }}>
              {getStatusIcon(status, error)}
              {status !== 'uploading' && (
                <button
                  type="button"
                  aria-label={`Remover ${file.name}`}
                  onClick={() => removeFile(i)}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: colors.error[600],
                    cursor: 'pointer',
                    fontSize: 20,
                    marginLeft: 4,
                  }}
                >
                  <Trash2 size={20} color={colors.error[600]} />
                </button>
              )}
            </div>
          </li>
        );
      })}
    </ul>
  );
}

function FileUpload(props: FileUploadProps) {
  return <FileUploadRoot {...props} />;
}

FileUpload.List = FileUploadList;

export { FileUpload };
export default FileUpload; 