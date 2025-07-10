import React, { createContext, useContext, useState, ReactNode } from 'react';

export type FileStatus = 'pending' | 'uploading' | 'success' | 'error';

export interface FileWithStatus {
  file: File;
  status: FileStatus;
  progress: number; // 0-100
  error?: string;
}

export interface FileUploadContextType {
  files: FileWithStatus[];
  setFiles: (files: FileWithStatus[]) => void;
  addFiles: (files: FileList | File[]) => void;
  removeFile: (index: number) => void;
  clearFiles: () => void;
  setFileStatus: (index: number, status: FileStatus, progress?: number, error?: string) => void;
  error?: string;
  setError: (msg?: string) => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
}

const FileUploadContext = createContext<FileUploadContextType | undefined>(undefined);

export function useFileUploadContext() {
  const ctx = useContext(FileUploadContext);
  if (!ctx) throw new Error('useFileUploadContext must be used within a FileUploadProvider');
  return ctx;
}

export function FileUploadProvider({ children }: { children: ReactNode }) {
  const [files, setFiles] = useState<FileWithStatus[]>([]);
  const [error, setError] = useState<string | undefined>(undefined);
  const [loading, setLoading] = useState(false);

  const addFiles = (input: FileList | File[]) => {
    const arr = Array.from(input).map(file => ({ file, status: 'pending' as FileStatus, progress: 0 }));
    setFiles(prev => [...prev, ...arr]);
  };

  const removeFile = (index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
  };

  const clearFiles = () => setFiles([]);

  const setFileStatus = (index: number, status: FileStatus, progress?: number, errorMsg?: string) => {
    setFiles(prev => prev.map((f, i) =>
      i === index ? { ...f, status, progress: progress ?? f.progress, error: errorMsg } : f
    ));
  };

  return (
    <FileUploadContext.Provider value={{ files, setFiles, addFiles, removeFile, clearFiles, setFileStatus, error, setError, loading, setLoading }}>
      {children}
    </FileUploadContext.Provider>
  );
} 