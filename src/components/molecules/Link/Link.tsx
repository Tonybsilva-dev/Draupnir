import { ComponentProps, forwardRef } from "react";

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
      className={`
        text-primary hover:text-hover transition-colors 
        focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
        ${disabled ? 'text-gray-400 cursor-not-allowed' : 'cursor-pointer'} 
        ${className || ''}
      `}
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
        <span className="sr-only"> (abre em nova aba)</span>
      )}
    </a>
  );
});

Link.displayName = 'Link';

export default Link;
