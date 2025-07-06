import React from "react";
import Box from "../Box/Box";
import Typography from "../Typography/Typography";
import { colors, spacing, typography } from '../../../tokens';

export type TextBlockProps = {
  title?: string;
  type?: "primary" | "secondary" | "dark";
  children: React.ReactNode;
  style?: React.CSSProperties;
} & React.HTMLAttributes<HTMLElement>;

const textColorMap = {
  primary: colors.text.primary,
  secondary: colors.text.secondary,
  dark: colors.background.dark,
};

const TextBlock = ({
  title,
  type = "primary",
  children,
  className,
  style,
  ...rest
}: TextBlockProps) => {
  const textColor = textColorMap[type];
  return (
    <Box
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: spacing[2],
        padding: spacing[5],
        width: '100%',
        ...(style || {}),
      }}
      type={type}
      {...rest}
    >
      <div className={className}>
        <Typography style={{ fontWeight: typography.fontWeight.bold, color: textColor }} size="xl">
          {title}
        </Typography>
        <Typography style={{ marginTop: spacing[1], color: textColor }} size="md">
          {children}
        </Typography>
      </div>
    </Box>
  );
};

export default TextBlock;
