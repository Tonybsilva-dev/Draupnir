export type ButtonProps = {
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, className, disabled, ...rest }: ButtonProps) => {
  const defaultStyle = "py-2xs px-sm rounded-full";
  const Btn = (classes: string) => {
    return (
      <button
        className={`${defaultStyle} ${classes} bg-primary tablet:text-sm desktop:text-xs text-white font-bold ${className}`}
        disabled
        {...rest}
      >
        {children}
      </button>
    );
  };

  return Btn(disabled ? 'bg-disabled text-disabled' : 'bg-primary text-white')
};

export default Button;
