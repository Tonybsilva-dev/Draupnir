import React, { useState, useRef, useEffect } from 'react';
import { colors, borderRadius, spacing, typography } from '../../../tokens';

export interface TooltipProps {
  content: React.ReactNode;
  position?: 'top' | 'right' | 'bottom' | 'left';
  delay?: number;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const Tooltip: React.FC<TooltipProps> = ({
  content,
  position = 'top',
  delay = 200,
  children,
  className,
  style,
}) => {
  const [visible, setVisible] = useState(false);
  const [coords, setCoords] = useState<{ top: number; left: number }>({ top: 0, left: 0 });
  const timeout = useRef<NodeJS.Timeout | null>(null);
  const triggerRef = useRef<HTMLSpanElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const [animation, setAnimation] = useState<'in' | 'out'>('in');

  const show = () => {
    timeout.current = setTimeout(() => {
      setAnimation('in');
      setVisible(true);
    }, delay);
  };
  const hide = () => {
    if (timeout.current) clearTimeout(timeout.current);
    setAnimation('out');
    setTimeout(() => setVisible(false), 150); // tempo igual ao transition
  };

  useEffect(() => {
    if (visible && triggerRef.current && tooltipRef.current) {
      const triggerRect = triggerRef.current.getBoundingClientRect();
      const tooltipRect = tooltipRef.current.getBoundingClientRect();
      let top = 0, left = 0;
      const gap = 8;
      switch (position) {
        case 'top':
          top = triggerRect.top - tooltipRect.height - gap;
          left = triggerRect.left + triggerRect.width / 2 - tooltipRect.width / 2;
          break;
        case 'bottom':
          top = triggerRect.bottom + gap;
          left = triggerRect.left + triggerRect.width / 2 - tooltipRect.width / 2;
          break;
        case 'left':
          top = triggerRect.top + triggerRect.height / 2 - tooltipRect.height / 2;
          left = triggerRect.left - tooltipRect.width - gap;
          break;
        case 'right':
          top = triggerRect.top + triggerRect.height / 2 - tooltipRect.height / 2;
          left = triggerRect.right + gap;
          break;
      }
      setCoords({ top: Math.max(top, 0), left: Math.max(left, 0) });
    }
  }, [visible, position]);

  // Animação: fade + leve translate
  const getTransform = () => {
    if (!visible) return 'translateY(0)';
    if (position === 'top') return animation === 'in' ? 'translateY(-6px)' : 'translateY(0)';
    if (position === 'bottom') return animation === 'in' ? 'translateY(6px)' : 'translateY(0)';
    if (position === 'left') return animation === 'in' ? 'translateX(-6px)' : 'translateX(0)';
    if (position === 'right') return animation === 'in' ? 'translateX(6px)' : 'translateX(0)';
    return 'none';
  };

  return (
    <span
      ref={triggerRef}
      tabIndex={0}
      aria-describedby={visible ? 'tooltip-content' : undefined}
      onMouseEnter={show}
      onMouseLeave={hide}
      onFocus={show}
      onBlur={hide}
      onKeyDown={e => {
        if (e.key === 'Escape') hide();
      }}
      style={{ outline: 'none', cursor: 'pointer', display: 'inline-block' }}
    >
      {children}
      {(visible || animation === 'out') && (
        <div
          ref={tooltipRef}
          id="tooltip-content"
          role="tooltip"
          style={{
            position: 'fixed',
            top: coords.top,
            left: coords.left,
            zIndex: 9999,
            background: colors.background.dark,
            color: colors.text.contrast,
            borderRadius: borderRadius.sm,
            padding: '6px 12px',
            fontSize: typography.text.sm,
            boxShadow: '0 4px 16px rgba(0,0,0,0.18)',
            pointerEvents: 'none',
            opacity: visible && animation === 'in' ? 1 : 0,
            transition: 'opacity 0.15s, transform 0.15s',
            transform: getTransform(),
            ...style,
          }}
          className={className}
        >
          {content}
        </div>
      )}
    </span>
  );
};

export default Tooltip; 