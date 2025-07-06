import { colors, spacing } from '../../../tokens';

export type DividerProps = {
  width?: string | number;
  height?: string | number;
  bgColor?: "light" | "default" | "dark" | "black";
  children?: React.ReactNode;
  style?: React.CSSProperties;
} & React.HTMLAttributes<HTMLDivElement>;

const colorMap = {
  light: colors.divider.light,
  default: colors.divider.default,
  dark: colors.divider.dark,
  black: colors.text.primary,
};

const Divider = ({
  width,
  height = '1px',
  children,
  bgColor = "default",
  className,
  style,
  ...rest
}: DividerProps) => {
  const barStyle = {
    width: children ? '33%' : '50%',
    height,
    background: colorMap[bgColor],
    minHeight: '1px',
    borderRadius: spacing.xs,
  };

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width,
        ...(style || {}),
      }}
      className={className}
      {...rest}
    >
      <div style={barStyle}></div>
      {children && <div style={{ paddingLeft: spacing[3], paddingRight: spacing[3] }}>{children} </div>}
      <div style={barStyle}></div>
    </div>
  );
};

export default Divider;
