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
  primary: "bg-gray-50 text-gray-900",
  secondary: "bg-gray-100 text-gray-900",
  dark: "bg-gray-900 text-white",
  alert: "bg-yellow-50 text-yellow-800",
  success: "bg-green-50 text-green-800",
  error: "bg-red-50 text-red-800",
  info: "bg-blue-50 text-blue-800",
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
  const classes = classNames(
    {
      // Borda só se explicitamente requisitada, e sempre clara
      "border border-gray-200": border,
      // Remove qualquer bg escuro padrão
      // "bg-gray-900": filledBackground, // Removido para não poluir visual minimalista
      [boxClassMap[type]]: type,
    },
    className
  );
  return (
    <div className={`p-2 ${classes}`} {...rest}>
      {children}
    </div>
  );
};

export default Box;
