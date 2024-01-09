export type ButtonProps = {
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, className, ...rest }: ButtonProps) => {
  return (
    <button
      className={`bg-primary tablet:text-sm text-white font-bold py-xs px-6 rounded-full ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
