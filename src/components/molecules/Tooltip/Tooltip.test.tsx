import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Tooltip } from './Tooltip';

describe('Tooltip', () => {
  it('renders child and does not show tooltip by default', () => {
    render(<Tooltip content="Tooltip text"><button>Hover me</button></Tooltip>);
    expect(screen.getByText('Hover me')).toBeInTheDocument();
    expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();
  });

  it('shows tooltip on hover', async () => {
    render(<Tooltip content="Tooltip text"><button>Hover me</button></Tooltip>);
    fireEvent.mouseEnter(screen.getByText('Hover me'));
    expect(await screen.findByRole('tooltip')).toBeInTheDocument();
    expect(screen.getByText('Tooltip text')).toBeInTheDocument();
  });

  it('shows tooltip on focus', async () => {
    render(<Tooltip content="Tooltip text"><button>Focus me</button></Tooltip>);
    fireEvent.focus(screen.getByText('Focus me'));
    expect(await screen.findByRole('tooltip')).toBeInTheDocument();
  });

  it('hides tooltip on blur', async () => {
    render(<Tooltip content="Tooltip text"><button>Focus me</button></Tooltip>);
    const btn = screen.getByText('Focus me');
    fireEvent.focus(btn);
    expect(await screen.findByRole('tooltip')).toBeInTheDocument();
    fireEvent.blur(btn);
    await waitFor(() => {
      const tooltip = screen.queryByRole('tooltip');
      expect(tooltip).not.toBeNull();
      expect(tooltip).toHaveStyle('opacity: 0');
    });
  });

  it('respects delay', async () => {
    jest.useFakeTimers();
    render(<Tooltip content="Tooltip text" delay={500}><button>Hover me</button></Tooltip>);
    fireEvent.mouseEnter(screen.getByText('Hover me'));
    expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();
    jest.advanceTimersByTime(500);
    expect(await screen.findByRole('tooltip')).toBeInTheDocument();
    jest.useRealTimers();
  });

  it('renders custom content', async () => {
    render(<Tooltip content={<span><b>Custom</b> <i>content</i></span>}><button>Hover me</button></Tooltip>);
    fireEvent.mouseEnter(screen.getByText('Hover me'));
    expect(await screen.findByRole('tooltip')).toBeInTheDocument();
    expect(screen.getByText('Custom')).toBeInTheDocument();
    expect(screen.getByText('content')).toBeInTheDocument();
  });
}); 