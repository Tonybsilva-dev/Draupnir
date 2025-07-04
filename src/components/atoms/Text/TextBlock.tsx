import React from "react";
import Box from "../Box/Box";
import Typography from "../Typography/Typography";

export type TextBlockProps = {
  title?: string;
  type?: "primary" | "secondary" | "dark";
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLElement>;

const TextBlock = ({
  title,
  type = "primary",
  children,
  className,
  ...rest
}: TextBlockProps) => {
  const textClass = type === "primary" ? "text-gray-900" : type === "dark" ? "text-white" : "text-gray-700";
  return (
    <Box
      className={`flex flex-col gap-2 p-5 w-full`}
      type={type}
      {...rest}
    >
      <div className={className}>
        <Typography className={`font-bold ${textClass}`} size="xl">
          {title}
        </Typography>
        <Typography className={`mt-1 ${textClass}`} size="md">
          {children}
        </Typography>
      </div>
    </Box>
  );
};

export default TextBlock;
