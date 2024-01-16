import React, { ComponentProps } from "react";
import { tv, VariantProps } from "tailwind-variants";

const text = tv({
  base: ["text-gray-primary font-normal"],
  variants: {
    variant: {
      primary: "text-gray-primary",
      secondary: "text-gray-secondary",
      tertiary: "text-gray-tertiary",
    },
    size: {
      xs: "text-xs",
      sm: "text-sm",
      md: "text-md",
      lg: "text-lg",
      xl: "text-xl",
      "2xl": "text-2xl",
      "4xl": "text-4xl",
      title1: "text-txl",
      title2: "text-tlg",
      title3: "text-tmd",
    },
  },

  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

export type TypographyProps = ComponentProps<"p"> & {
  variant?: "primary" | "secondary" | "tertiary";
  size:
    | "xs"
    | "sm"
    | "md"
    | "xl"
    | "2xl"
    | "4xl"
    | "title1"
    | "title2"
    | "title3";
  children: React.ReactNode;
  element?: keyof JSX.IntrinsicElements;
} & JSX.IntrinsicElements["p"];
const Typography = ({
  children,
  element = "p",
  variant = "primary",
  size,
  className,
  ...rest
}: TypographyProps) => {
  const Element = element as any;
  return (
    <Element className={text({ variant, size, className })} {...rest}>
      {children}
    </Element>
  );
};

export default Typography;
