import React, { forwardRef, ComponentProps } from 'react';
import { colors, spacing, borderRadius, borders, typography } from '../../../tokens';

const buttonIconStyleMap = {
  primary: {
    backgroundColor: colors.primary[500],
    color: colors.text.contrast,
    border: borders.none,
  },
  secondary: {
    backgroundColor: colors.secondary[500],
    color: colors.text.contrast,
    border: borders.none,
  },
  outline: {
    backgroundColor: colors.background.light,
    color: colors.text.primary,
    border: `${borders.sm} solid ${colors.divider.default}`,
  },
  ghost: {
    color: colors.text.secondary,
    border: borders.none,
    backgroundColor: 'transparent',
  },
  danger: {
    backgroundColor: colors.error[600],
    color: colors.text.contrast,
    border: borders.none,
  },
};

const buttonIconSizeMap = {
  sm: {
    width: 32,
    height: 32,
    padding: 6,
    fontSize: typography.text.sm,
  },
  md: {
    width: 40,
    height: 40,
    padding: 8,
    fontSize: typography.text.md,
  },
  lg: {
    width: 48,
    height: 48,
    padding: 10,
    fontSize: typography.text.lg,
  },
};

export type ButtonIconProps = Omit<ComponentProps<'button'>, 'children'> & {
  icon: React.ReactNode;
  'aria-label': string;
  variant?: keyof typeof buttonIconStyleMap;
  size?: keyof typeof buttonIconSizeMap;
  disabled?: boolean;
  style?: React.CSSProperties;
  className?: string;
};

export const ButtonIcon = forwardRef<HTMLButtonElement, ButtonIconProps>(
  ({
    icon,
    'aria-label': ariaLabel,
    variant = 'ghost',
    size = 'md',
    disabled = false,
    style,
    className,
    ...props
  }, ref) => {
    const variantStyle = buttonIconStyleMap[variant] || buttonIconStyleMap.ghost;
    const sizeStyle = buttonIconSizeMap[size] || buttonIconSizeMap.md;
    return (
      <button
        ref={ref}
        type="button"
        aria-label={ariaLabel}
        disabled={disabled}
        style={{
          ...variantStyle,
          ...sizeStyle,
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: borderRadius.sm,
          outline: 'none',
          opacity: disabled ? 0.5 : 1,
          cursor: disabled ? 'not-allowed' : 'pointer',
          transition: 'background 0.2s, color 0.2s',
          ...style,
        }}
        className={className}
        {...props}
      >
        {icon}
      </button>
    );
  }
);

ButtonIcon.displayName = 'ButtonIcon';

export default ButtonIcon; 