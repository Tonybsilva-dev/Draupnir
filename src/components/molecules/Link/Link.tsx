import { ComponentProps, forwardRef } from "react";
import { colors, typography } from '../../../tokens';

export type LinkProps = {
  children: React.ReactNode;
  disabled?: boolean;
  external?: boolean;
  description?: string;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

const Link = forwardRef<HTMLAnchorElement, LinkProps>(({
  children,
  href,
  disabled,
  external = false,
  description,
  className,
  style,
  ...rest
}, ref) => {
  const generateAriaLabel = () => {
    if (description) {
      return `${children} ${description}`;
    }
    if (external) {
      return `${children} (abre em nova aba)`;
    }
    return children as string;
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLAnchorElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      if (!disabled && href) {
        window.open(href, external ? '_blank' : '_self');
      }
    }
  };

  return (
    <a
      ref={ref}
      href={disabled ? undefined : href}
      style={{
        color: disabled ? colors.text.disabled : colors.primary[500],
        fontWeight: typography.fontWeight.medium,
        fontSize: typography.text.md,
        textDecoration: 'underline',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.6 : 1,
        outline: 'none',
        transition: 'color 0.2s',
        ...(style || {}),
      }}
      className={className}
      aria-disabled={disabled}
      aria-label={generateAriaLabel()}
      onKeyDown={handleKeyDown}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      tabIndex={disabled ? -1 : 0}
      {...rest}
    >
      {children}
      {external && (
        <span style={{ position: 'absolute', left: '-9999px' }}> (abre em nova aba)</span>
      )}
    </a>
  );
});

Link.displayName = 'Link';

export default Link;
