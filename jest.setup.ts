import '@testing-library/jest-dom';

// Mock window.open to avoid jsdom navigation errors in tests
if (typeof window !== 'undefined') {
  window.open = jest.fn();
} 