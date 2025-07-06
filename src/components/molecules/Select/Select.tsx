import { ComponentProps, forwardRef, ReactNode } from 'react';
import * as SelectPrimitive from '@radix-ui/react-select';
import { ChevronDown, Check } from 'lucide-react';
import { colors, spacing, borders } from '../../../tokens';

export type SelectTriggerProps = ComponentProps<typeof SelectPrimitive.Trigger>;
export type SelectContentProps = ComponentProps<typeof SelectPrimitive.Content>;
export type SelectItemProps = ComponentProps<typeof SelectPrimitive.Item> & {
  indented?: boolean;
};
export type SelectValueProps = ComponentProps<typeof SelectPrimitive.Value>;
export type SelectLabelProps = ComponentProps<typeof SelectPrimitive.Label>;
export type SelectGroupProps = ComponentProps<typeof SelectPrimitive.Group>;

const SelectTrigger = forwardRef<HTMLButtonElement, SelectTriggerProps>(({ className, children, style, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    style={{
      display: 'flex',
      height: spacing[6],
      width: '100%',
      alignItems: 'center',
      justifyContent: 'space-between',
      border: `${borders.sm} solid ${colors.divider.default}`,
      background: colors.background.light,
      padding: `${spacing[2]} ${spacing[3]}`,
      fontSize: '14px',
      borderRadius: '0',
      outline: 'none',
      transition: 'border-color 0.2s',
      ...(style || {}),
    }}
    className={className}
    {...props}
  >
    {children}
    <SelectPrimitive.Icon asChild>
      <ChevronDown style={{ height: 16, width: 16, opacity: 0.5 }} />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
));

SelectTrigger.displayName = 'SelectTrigger';

const SelectContent = forwardRef<HTMLDivElement, SelectContentProps>(({ className, children, position = "popper", style, ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      style={{
        position: 'relative',
        zIndex: 50,
        minWidth: 'var(--radix-select-trigger-width)',
        overflow: 'hidden',
        border: `${borders.sm} solid ${colors.divider.default}`,
        background: colors.background.light,
        color: colors.text.primary,
        borderRadius: '0',
        ...(style || {}),
      }}
      className={className}
      position={position}
      {...props}
    >
      <SelectPrimitive.Viewport style={{ padding: spacing[1] }}>
        {children}
      </SelectPrimitive.Viewport>
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
));

SelectContent.displayName = 'SelectContent';

const SelectLabel = forwardRef<HTMLDivElement, SelectLabelProps>(({ className, style, ...props }, ref) => (
  <SelectPrimitive.Label
    ref={ref}
    style={{
      padding: `${spacing[1]} ${spacing[3]} ${spacing[1]} ${spacing[2]}`,
      fontSize: '14px',
      fontWeight: 600,
      color: colors.text.primary,
      ...(style || {}),
    }}
    className={className}
    {...props}
  />
));

SelectLabel.displayName = 'SelectLabel';

const SelectGroup = forwardRef<HTMLDivElement, SelectGroupProps>(({ className, ...props }, ref) => (
  <SelectPrimitive.Group
    ref={ref}
    className={className}
    {...props}
  />
));

SelectGroup.displayName = 'SelectGroup';

const SelectItem = forwardRef<HTMLDivElement, SelectItemProps>(({ className, children, indented, style, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    style={{
      position: 'relative',
      width: '100%',
      cursor: 'default',
      userSelect: 'none',
      display: 'flex',
      alignItems: 'center',
      padding: `${spacing[1]} ${spacing[3]} ${spacing[1]} ${indented ? spacing[4] : spacing[3]}`,
      fontSize: '14px',
      outline: 'none',
      borderRadius: '0',
      transition: 'background 0.2s, color 0.2s',
      ...(style || {}),
    }}
    className={className}
    {...props}
  >
    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    <span style={{ position: 'absolute', right: spacing[2], display: 'flex', height: 14, width: 14, alignItems: 'center', justifyContent: 'center' }}>
      <SelectPrimitive.ItemIndicator>
        <Check style={{ height: 16, width: 16 }} />
      </SelectPrimitive.ItemIndicator>
    </span>
  </SelectPrimitive.Item>
));

SelectItem.displayName = 'SelectItem';

const SelectValue = forwardRef<HTMLDivElement, SelectValueProps>(({ className, style, ...props }, ref) => (
  <SelectPrimitive.Value
    ref={ref}
    style={{ color: colors.text.primary, ...(style || {}) }}
    className={className}
    {...props}
  />
));

SelectValue.displayName = 'SelectValue';

export type SelectProps = {
  children: ReactNode;
  value?: string;
  onValueChange?: (value: string) => void;
  defaultValue?: string;
  disabled?: boolean;
};

export const Select = ({ children, value, onValueChange, defaultValue, disabled }: SelectProps) => (
  <SelectPrimitive.Root value={value} onValueChange={onValueChange} defaultValue={defaultValue} disabled={disabled}>
    {children}
  </SelectPrimitive.Root>
);

Select.Trigger = SelectTrigger;
Select.Content = SelectContent;
Select.Label = SelectLabel;
Select.Group = SelectGroup;
Select.Item = SelectItem;
Select.Value = SelectValue;

export default Select; 