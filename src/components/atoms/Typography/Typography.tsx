import React, { ComponentProps } from "react";
import { colors, typography } from '../../../tokens';

export type TypographyProps = ComponentProps<"p"> & {
  variant?: "primary" | "secondary" | "tertiary";
  size:
  | "xs"
  | "sm"
  | "md"
  | "lg"
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
  style?: React.CSSProperties;
} & JSX.IntrinsicElements["p"];

const variantColorMap = {
  primary: colors.text.primary,
  secondary: colors.text.secondary,
  tertiary: colors.text.tertiary,
};

const sizeFontSizeMap = {
  xs: '12px',
  sm: '14px',
  md: '16px',
  lg: '18px',
  xl: '20px',
  '2xl': '24px',
  '4xl': '32px',
  title1: '28px',
  title2: '24px',
  title3: '20px',
};

const Typography = ({
  children,
  element = "p",
  variant = "primary",
  size,
  className,
  semantic,
  level,
  style,
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
      style={{
        color: variant ? variantColorMap[variant] : 'inherit',
        fontSize: sizeFontSizeMap[size],
        fontWeight: typography.fontWeight.normal,
        lineHeight: typography.lineHeight.normal,
        ...(style || {}),
      }}
      className={className}
      role={ariaRole}
      aria-level={semantic === "heading" && level ? level : undefined}
      {...rest}
    >
      {children}
    </Element>
  );
};

export default Typography;
