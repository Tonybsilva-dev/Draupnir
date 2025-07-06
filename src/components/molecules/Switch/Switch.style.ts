import { colors, spacing } from '../../../tokens';

interface SwitchProps {
  variant: "common" | "contract";
  enabled: boolean;
  disabled: boolean;
}

export default function useStyleSwitch({
  variant,
  enabled,
  disabled,
}: SwitchProps) {
  // Container
  let containerStyle: React.CSSProperties = {
    outline: 'none',
    position: 'relative',
    display: 'inline-flex',
    height: 24,
    width: 64,
    alignItems: 'center',
    borderRadius: 9999,
    background: colors.divider.light,
    transition: 'background 0.2s',
  };
  if (variant === 'common') {
    containerStyle.background = enabled ? colors.primary[500] : colors.divider.light;
  } else if (variant === 'contract') {
    containerStyle.background = enabled ? colors.success[600] : colors.divider.light;
  }
  if (disabled) {
    containerStyle.background = colors.divider.default;
    containerStyle.opacity = 0.6;
    containerStyle.cursor = 'not-allowed';
  }

  // Switch (círculo)
  const switchStyle: React.CSSProperties = {
    display: 'inline-block',
    background: colors.background.light,
    height: 16,
    width: 16,
    borderRadius: 9999,
    transform: enabled ? 'translateX(44px)' : 'translateX(4px)',
    transition: 'transform 0.2s, background 0.2s',
    boxShadow: '0 1px 4px rgba(0,0,0,0.08)',
  };

  // Ícone
  let iconColor: string = colors.divider.dark;
  if (enabled && !disabled) iconColor = colors.success[600];
  if (!enabled && !disabled) iconColor = colors.error[600];
  if (disabled) iconColor = colors.divider.default;
  const iconStyle: React.CSSProperties = {
    color: iconColor,
    width: 16,
    height: 16,
  };

  return {
    Icon: iconStyle,
    Switch: switchStyle,
    Container: containerStyle,
  };
}
