import classNames from "classnames";

export type BoxProps = {
  rounded?: boolean;
  border?: boolean;
  filledBackground?: boolean;
  type?:
    | "primary"
    | "secondary"
    | "dark"
    | "info"
    | "alert"
    | "success"
    | "error";
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

const boxClassMap = {
  primary: "bg-primary",
  secondary: "bg-tertiary",
  dark: "bg-dark",
  info: "bg-blue-100 text-blue-800",
  alert: "bg-yellow-100 text-yellow-800",
  success: "bg-green-100 text-green-800",
  error: "bg-red-100 text-red-800",
};

const Box = ({
  rounded = false,
  border = false,
  filledBackground = false,
  type = "primary",
  children,
  className,
  ...rest
}: BoxProps) => {
  const classes = classNames({
    "rounded-sm": rounded,
    "border border-gray-100": border,
    "bg-dark": filledBackground,
    [boxClassMap[type]]: type,
  });

  return (
    <div className={`p-1 ${classes}`} {...rest}>
      {children}
    </div>
  );
};

export default Box;
