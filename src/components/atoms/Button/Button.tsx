import { ComponentProps, forwardRef } from "react";
import Loading from "../../molecules/Loading/Loading";
import { colors, spacing, borders, borderRadius, typography } from '../../../tokens';

const buttonStyleMap = {
  primary: {
    backgroundColor: colors.primary[500],
    color: colors.text.primary,
    border: borders.none,
  },
  secondary: {
    backgroundColor: colors.secondary[500],
    color: colors.text.primary,
    border: borders.none,
  },
  outline: {
    backgroundColor: colors.background.light,
    color: colors.text.primary,
    border: `${borders.sm} solid ${colors.divider}`,
  },
  ghost: {
    backgroundColor: 'transparent',
    color: colors.text.secondary,
    border: borders.none,
  },
  danger: {
    backgroundColor: colors.error[600],
    color: colors.text.primary,
    border: borders.none,
  },
};

const buttonSizeMap = {
  default: {
    padding: `${spacing[3]} ${spacing[4]}`,
    fontSize: typography.text.sm,
    fontWeight: typography.fontWeight.medium,
  },
  sm: {
    padding: `${spacing[2]} ${spacing[3]}`,
    fontSize: typography.text.xs,
    fontWeight: typography.fontWeight.medium,
  },
  lg: {
    padding: `${spacing[4]} ${spacing[6]}`,
    fontSize: typography.text.md,
    fontWeight: typography.fontWeight.medium,
  },
  full: {
    width: '100%',
    padding: `${spacing[3]} ${spacing[4]}`,
    fontSize: typography.text.sm,
    fontWeight: typography.fontWeight.medium,
  },
};

export type ButtonProps = ComponentProps<"button"> & {
  variant?: keyof typeof buttonStyleMap;
  size?: keyof typeof buttonSizeMap;
  isLoading?: boolean;
  isToggle?: boolean;
  pressed?: boolean;
  loadingText?: string;
  asChild?: boolean;
  style?: React.CSSProperties;
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
  variant = 'primary',
  size = 'default',
  className,
  isLoading,
  isToggle = false,
  pressed = false,
  loadingText = "Loading...",
  asChild = false,
  children,
  style,
  ...props
}, ref) => {
  const isDisabled = props.disabled || isLoading;
  const variantStyle = buttonStyleMap[variant] || buttonStyleMap.primary;
  const sizeStyle = buttonSizeMap[size] || buttonSizeMap.default;

  // Generate descriptive aria-label based on content
  const generateAriaLabel = () => {
    if (isLoading) {
      return `${loadingText} ${children}`;
    }
    if (isToggle) {
      return `${children} ${pressed ? 'activated' : 'deactivated'}`;
    }
    return `${children} button`;
  };

  return (
    <button
      ref={ref}
      {...props}
      disabled={isDisabled}
      style={{
        ...variantStyle,
        ...sizeStyle,
        borderRadius: borderRadius.sm,
        outline: 'none',
        opacity: isDisabled ? 0.5 : 1,
        cursor: isDisabled ? 'not-allowed' : 'pointer',
        transition: 'all 0.2s',
        display: 'flex',
        alignItems: 'center',
        gap: spacing[2],
        ...style,
      }}
      className={className}
      aria-label={asChild ? undefined : generateAriaLabel()}
      aria-describedby={asChild ? undefined : (isLoading ? "loading-description" : undefined)}
      aria-pressed={asChild ? undefined : (isToggle ? pressed : undefined)}
      aria-busy={asChild ? undefined : isLoading}
    >
      {isLoading ? (
        <>
          <Loading color={variant === 'primary' ? colors.text.primary : colors.primary[500]} label={loadingText} />
          <span id="loading-description" className="sr-only">
            {loadingText}
          </span>
        </>
      ) : (
        children
      )}
    </button>
  );
});

Button.displayName = "Button";

export default Button;
