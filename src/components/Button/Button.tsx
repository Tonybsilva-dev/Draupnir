export type ButtonProps = {
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, className, ...rest }: ButtonProps) => {
  return (
    <button
      className={`bg-primary tablet:text-sm desktop:text-xs text-white font-bold py-2xs px-sm rounded-full ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
