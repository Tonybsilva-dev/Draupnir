import { ComponentProps } from "react";
import { tv, VariantProps } from "tailwind-variants";
import Loading from "../../molecules/Loading/Loading";

const button = tv({
  base: [
    "flex items-center gap-2", // alinhamento para texto e ícones
    "px-4 py-2 text-sm font-medium outline-none transition-all duration-200",
    "focus:ring-2 focus:ring-offset-2 focus:ring-primary",
    "active:opacity-80 border-none",
  ],

  variants: {
    variant: {
      primary:
        "bg-primary text-white hover:bg-hover",
      secondary:
        "bg-secondary text-white hover:bg-primary hover:text-primary-contrast",
      outline:
        "bg-white text-gray-900 border border-gray-200 hover:bg-gray-50 hover:border-gray-300",
      ghost:
        "bg-transparent text-gray-700 hover:bg-gray-50",
      danger:
        "bg-red-600 text-white hover:bg-red-700",
    },
    size: {
      default: "px-4 py-2",
      sm: "px-3 py-1.5 text-xs",
      lg: "px-6 py-3 text-base",
      full: "w-full px-4 py-2",
    },
  },

  defaultVariants: {
    variant: "primary",
    size: "default",
  },
});

export type ButtonProps = ComponentProps<"button"> &
  VariantProps<typeof button> & {
    isLoading?: boolean;
    isToggle?: boolean;
    pressed?: boolean;
    loadingText?: string;
    asChild?: boolean;
  };

export function Button({
  variant,
  size,
  className,
  isLoading,
  isToggle = false,
  pressed = false,
  loadingText = "Loading...",
  asChild = false,
  children,
  ...props
}: ButtonProps) {
  const isDisabled = props.disabled || isLoading;
  const loadingColor = variant === "primary" ? "bg-white" : "bg-primary";

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
      {...props}
      disabled={isDisabled}
      className={
        button({ variant, size, className }) +
        (isDisabled ? " opacity-50 cursor-not-allowed pointer-events-none" : "")
      }
      aria-label={asChild ? undefined : generateAriaLabel()}
      aria-describedby={asChild ? undefined : (isLoading ? "loading-description" : undefined)}
      aria-pressed={asChild ? undefined : (isToggle ? pressed : undefined)}
      aria-busy={asChild ? undefined : isLoading}
    >
      {isLoading ? (
        <>
          <Loading color={loadingColor} label={loadingText} />
          <span id="loading-description" className="sr-only">
            {loadingText}
          </span>
        </>
      ) : (
        children
      )}
    </button>
  );
}

export default Button
