export type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "outline" | "ghost";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

function getVariant(
  variant: ButtonProps["variant"],
  disabled: ButtonProps["disabled"]
) {
  switch (variant) {
    case "primary":
      return disabled
        ? "bg-disabled tex-disabled"
        : "bg-primary text-white hover:bg-hover dark:bg-primary dark:hover:bg-hover";
    case "outline":
      return disabled
        ? "bg-disabled tex-disabled"
        : "border border-zinc-300 text-zinc-700 hover:bg-zinc-50 dark:text-zinc-400";
    case "ghost":
      return disabled
        ? "bg-disabled tex-disabled"
        : "rounded-md px-2 hover:bg-zinc-50 shadow-none text-zinc-500 dark:hover:bg-zinc-800 dark:text-zinc-400 dark:border-zinc-700 dark:text-zinc-400 dark:hover:bg-zinc-800";

    default:
      break;
  }
}

const Button = ({
  children,
  variant = "primary",
  className,
  disabled,
  ...rest
}: ButtonProps) => {
  const defaultStyle =
    "rounded-md px-sm py-2xs font-semibold outline-none shadow-sm focus:ring-2 focus:ring-offset-2 focus:ring-green-500 active:opacity-80 cursor-pointer";
  return (
    <button
      className={`${defaultStyle} ${getVariant(
        variant,
        disabled
      )} tablet:text-sm desktop:text-xs ${className}`}
      disabled
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
