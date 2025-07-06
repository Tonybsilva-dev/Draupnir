import { ComponentProps, forwardRef, ReactNode } from 'react';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { colors, spacing, borders, borderRadius, typography } from '../../../tokens';

export type DropdownTriggerProps = ComponentProps<typeof DropdownMenuPrimitive.Trigger>;

const DropdownTrigger = forwardRef<HTMLButtonElement, DropdownTriggerProps>(({ className, children, style, ...props }, ref) => (
  <DropdownMenuPrimitive.Trigger
    ref={ref}
    style={{
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: typography.text.sm,
      fontWeight: typography.fontWeight.medium,
      background: 'none',
      border: 'none',
      outline: 'none',
      cursor: 'pointer',
      transition: 'color 0.2s',
      ...(style || {}),
    }}
    className={className}
    {...props}
  >
    {children}
  </DropdownMenuPrimitive.Trigger>
));

DropdownTrigger.displayName = 'DropdownTrigger';

const DropdownContent = forwardRef<HTMLDivElement, ComponentProps<typeof DropdownMenuPrimitive.Content>>(({ className, children, style, ...props }, ref) => (
  <DropdownMenuPrimitive.Portal>
    <DropdownMenuPrimitive.Content
      ref={ref}
      style={{
        zIndex: 9999,
        minWidth: 128,
        overflow: 'hidden',
        border: `${borders.sm} solid ${colors.divider.default}`,
        background: colors.background.light,
        color: colors.text.primary,
        padding: spacing[1],
        borderRadius: borderRadius.md,
        boxShadow: '0 4px 24px rgba(0,0,0,0.10)',
        fontSize: typography.text.sm,
        fontFamily: typography.fontFamily.primary,
        ...style,
      }}
      className={className}
      sideOffset={5}
      {...props}
    >
      {children}
    </DropdownMenuPrimitive.Content>
  </DropdownMenuPrimitive.Portal>
));

DropdownContent.displayName = 'DropdownContent';

const DropdownItem = forwardRef<HTMLDivElement, ComponentProps<typeof DropdownMenuPrimitive.Item>>(({ className, children, style, ...props }, ref) => (
  <DropdownMenuPrimitive.Item
    ref={ref}
    style={{
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      cursor: 'pointer',
      userSelect: 'none',
      paddingLeft: spacing[2],
      paddingRight: spacing[2],
      paddingTop: spacing[2],
      paddingBottom: spacing[2],
      fontSize: typography.text.sm,
      outline: 'none',
      borderRadius: borderRadius.sm,
      transition: 'background 0.2s, color 0.2s',
      ...(style || {}),
    }}
    className={className}
    {...props}
  >
    {children}
  </DropdownMenuPrimitive.Item>
));

DropdownItem.displayName = 'DropdownItem';

const DropdownSeparator = forwardRef<HTMLDivElement, ComponentProps<typeof DropdownMenuPrimitive.Separator>>(({ className, style, ...props }, ref) => (
  <DropdownMenuPrimitive.Separator
    ref={ref}
    style={{
      height: 1,
      background: colors.divider.default,
      marginTop: spacing[1],
      marginBottom: spacing[1],
      border: 'none',
      ...style,
    }}
    className={className}
    {...props}
  />
));

DropdownSeparator.displayName = 'DropdownSeparator';

const DropdownLabel = forwardRef<HTMLDivElement, ComponentProps<typeof DropdownMenuPrimitive.Label>>(({ className, style, ...props }, ref) => (
  <DropdownMenuPrimitive.Label
    ref={ref}
    style={{
      paddingLeft: spacing[2],
      paddingRight: spacing[2],
      paddingTop: spacing[2],
      paddingBottom: spacing[2],
      fontSize: typography.text.sm,
      fontWeight: typography.fontWeight.semibold,
      color: colors.text.secondary,
      ...style,
    }}
    className={className}
    {...props}
  />
));

DropdownLabel.displayName = 'DropdownLabel';

export type DropdownProps = {
  children: ReactNode;
  onOpenChange?: (open: boolean) => void;
};

export const Dropdown = ({ children, onOpenChange }: DropdownProps) => (
  <DropdownMenuPrimitive.Root onOpenChange={onOpenChange}>
    {children}
  </DropdownMenuPrimitive.Root>
);

Dropdown.Trigger = DropdownTrigger;
Dropdown.Content = DropdownContent;
Dropdown.Item = DropdownItem;
Dropdown.Separator = DropdownSeparator;
Dropdown.Label = DropdownLabel;

export default Dropdown;
