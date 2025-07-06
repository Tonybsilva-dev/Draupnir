import React from "react";
import { colors, spacing, borderRadius, typography } from '../../../tokens';

type BadgeVariant = "primary" | "info" | "success" | "warning" | "danger";

export interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  style?: React.CSSProperties;
}

const badgeVariantStyleMap = {
  primary: {
    background: colors.divider.light,
    color: colors.text.primary,
  },
  info: {
    background: colors.info[100],
    color: colors.info[700],
  },
  success: {
    background: colors.success[100],
    color: colors.success[700],
  },
  warning: {
    background: colors.warning[100],
    color: colors.warning[700],
  },
  danger: {
    background: colors.error[100],
    color: colors.error[700],
  },
};

const Badge: React.FC<BadgeProps> = ({ children, variant = "primary", style }) => {
  const variantStyle = badgeVariantStyleMap[variant];
  return (
    <span
      style={{
        fontSize: typography.text.xs,
        padding: `${spacing[1]} ${spacing[2]}`,
        fontWeight: typography.fontWeight.medium,
        borderRadius: borderRadius.sm,
        display: 'inline-block',
        ...variantStyle,
        ...(style || {}),
      }}
    >
      {children}
    </span>
  );
};

export { Badge };
export default Badge;
