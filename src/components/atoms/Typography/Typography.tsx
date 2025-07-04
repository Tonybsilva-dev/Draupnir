import React, { ComponentProps } from "react";
import { tv, VariantProps } from "tailwind-variants";

const text = tv({
  base: ["text-gray-900 font-normal"],
  variants: {
    variant: {
      primary: "text-gray-900",
      secondary: "text-gray-600",
      tertiary: "text-gray-500",
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
  semantic?: "heading" | "paragraph" | "list" | "listitem" | "emphasis" | "strong";
  level?: 1 | 2 | 3 | 4 | 5 | 6;
} & JSX.IntrinsicElements["p"];

const Typography = ({
  children,
  element = "p",
  variant = "primary",
  size,
  className,
  semantic,
  level,
  ...rest
}: TypographyProps) => {
  // Determina o elemento semântico correto
  const getSemanticElement = () => {
    if (semantic === "heading" && level) {
      return `h${level}` as keyof JSX.IntrinsicElements;
    }
    if (semantic === "list") return "ul";
    if (semantic === "listitem") return "li";
    if (semantic === "emphasis") return "em";
    if (semantic === "strong") return "strong";
    return element;
  };

  // Determina o role ARIA apropriado
  const getAriaRole = () => {
    if (semantic === "heading") return "heading";
    if (semantic === "paragraph") return "text";
    if (semantic === "list") return "list";
    if (semantic === "listitem") return "listitem";
    return undefined;
  };

  const semanticElement = getSemanticElement();
  const ariaRole = getAriaRole();
  const Element = semanticElement as any;

  return (
    <Element
      className={text({ variant, size, className })}
      role={ariaRole}
      aria-level={semantic === "heading" && level ? level : undefined}
      {...rest}
    >
      {children}
    </Element>
  );
};

export default Typography;
