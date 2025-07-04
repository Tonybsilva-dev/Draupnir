export type LinkProps = {
  children: React.ReactNode;
  disabled?: boolean;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

const Link = ({ children, href, disabled, className, ...rest }: LinkProps) => {
  return (
    <a
      href={disabled ? undefined : href}
      className={`text-primary hover:text-hover transition-colors ${disabled ? 'text-gray-400 cursor-not-allowed' : ''} ${className}`}
      aria-disabled={disabled}
      {...rest}
    >
      {children}
    </a>
  );
};

export default Link;
