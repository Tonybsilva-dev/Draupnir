import classNames from "classnames";
import React from "react";
import { colors, spacing, borders, borderRadius } from '../../../tokens';

export type BoxProps = {
  rounded?: boolean;
  border?: boolean;
  filledBackground?: boolean;
  type?: "primary" | "secondary" | "dark" | "alert" | "success" | "error" | "info";
  children: React.ReactNode;
  style?: React.CSSProperties;
} & React.HTMLAttributes<HTMLDivElement>;

const boxStyleMap: Record<NonNullable<BoxProps['type']>, React.CSSProperties> = {
  primary: {
    backgroundColor: colors.background.light,
    color: colors.text.primary,
  },
  secondary: {
    backgroundColor: colors.background.default,
    color: colors.text.primary,
  },
  dark: {
    backgroundColor: colors.background.dark,
    color: colors.text.secondary,
  },
  alert: {
    backgroundColor: colors.warning[50],
    color: colors.warning[700],
  },
  success: {
    backgroundColor: colors.success[50],
    color: colors.success[700],
  },
  error: {
    backgroundColor: colors.error[50],
    color: colors.error[700],
  },
  info: {
    backgroundColor: colors.info[50],
    color: colors.info[700],
  },
};

const Box = ({
  rounded = false,
  border = false,
  filledBackground = false,
  type = "primary",
  children,
  className,
  style,
  ...rest
}: BoxProps) => {
  const variantStyle = boxStyleMap[type] || boxStyleMap.primary;
  return (
    <div
      style={{
        ...variantStyle,
        padding: spacing[3], // 16px
        border: border ? `${borders.sm} solid ${colors.divider}` : borders.none,
        borderRadius: rounded ? borderRadius.sm : borderRadius.none,
        ...(style || {}),
      }}
      className={className}
      {...rest}
    >
      {children}
    </div>
  );
};

export default Box;
