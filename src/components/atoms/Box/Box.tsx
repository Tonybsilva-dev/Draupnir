import classNames from "classnames";
import React from "react";

export type BoxProps = {
  rounded?: boolean;
  border?: boolean;
  filledBackground?: boolean;
  type?: "primary" | "secondary" | "dark" | "alert" | "success" | "error" | "info";
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

const boxClassMap = {
  primary: "bg-zinc-50 font-bold",
  secondary: "bg-zinc-600 font-bold",
  dark: "bg-dark font-bold",
  alert: "bg-yellow-100 text-zinc-800 font-bold",
  success: "bg-green-100 text-zinc-800 font-bold",
  error: "bg-error text-white font-bold",
  info: "bg-info text-white font-bold",
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
    "rounded-md": rounded,
    "border border-gray-100": border,
    "bg-dark": filledBackground,
    [boxClassMap[type]]: type,
  });
  return (
    <div className={`p-2 ${classes}`} {...rest}>
      {children}
    </div>
  );
};

export default Box;
