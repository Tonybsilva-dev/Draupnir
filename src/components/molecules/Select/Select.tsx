import { ComponentProps, forwardRef, ReactNode } from 'react';
import * as SelectPrimitive from '@radix-ui/react-select';
import { twMerge } from 'tailwind-merge';
import { ChevronDown, Check } from 'lucide-react';

export type SelectTriggerProps = ComponentProps<typeof SelectPrimitive.Trigger>;
export type SelectContentProps = ComponentProps<typeof SelectPrimitive.Content>;
export type SelectItemProps = ComponentProps<typeof SelectPrimitive.Item> & {
  indented?: boolean;
};
export type SelectValueProps = ComponentProps<typeof SelectPrimitive.Value>;
export type SelectLabelProps = ComponentProps<typeof SelectPrimitive.Label>;
export type SelectGroupProps = ComponentProps<typeof SelectPrimitive.Group>;

const SelectTrigger = forwardRef<HTMLButtonElement, SelectTriggerProps>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={twMerge(
      "flex h-10 w-full items-center justify-between border border-gray-200 bg-white px-3 py-2 text-sm",
      "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
      "disabled:cursor-not-allowed disabled:opacity-50",
      "hover:border-gray-300 transition-colors",
      className
    )}
    {...props}
  >
    {children}
    <SelectPrimitive.Icon asChild>
      <ChevronDown className="h-4 w-4 opacity-50" />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
));

SelectTrigger.displayName = 'SelectTrigger';

const SelectContent = forwardRef<HTMLDivElement, SelectContentProps>(({ className, children, position = "popper", ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className={twMerge(
        "relative z-50 min-w-[var(--radix-select-trigger-width)] overflow-hidden border border-gray-200 bg-white text-gray-900 shadow-md",
        "data-[state=open]:animate-in data-[state=closed]:animate-out",
        "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
        "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2",
        "data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className
      )}
      position={position}
      style={{ minWidth: 'var(--radix-select-trigger-width)' }}
      {...props}
    >
      <SelectPrimitive.Viewport className="p-1">
        {children}
      </SelectPrimitive.Viewport>
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
));

SelectContent.displayName = 'SelectContent';

const SelectLabel = forwardRef<HTMLDivElement, SelectLabelProps>(({ className, ...props }, ref) => (
  <SelectPrimitive.Label
    ref={ref}
    className={twMerge("py-1.5 pr-8 pl-2 text-sm font-semibold text-gray-900", className)}
    {...props}
  />
));

SelectLabel.displayName = 'SelectLabel';

const SelectGroup = forwardRef<HTMLDivElement, SelectGroupProps>(({ className, ...props }, ref) => (
  <SelectPrimitive.Group
    ref={ref}
    className={twMerge("", className)}
    {...props}
  />
));

SelectGroup.displayName = 'SelectGroup';

const SelectItem = forwardRef<HTMLDivElement, SelectItemProps>(({ className, children, indented, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={twMerge(
      "relative flex w-full cursor-default select-none items-center py-1.5 pl-8 p-2 text-sm outline-none",
      "focus:bg-gray-50 focus:text-gray-900",
      "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      indented && "pl-6",
      className
    )}
    {...props}
  >
    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    <span className="absolute right-2 flex h-3.5 w-3.5 items-center justify-center">
      <SelectPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </SelectPrimitive.ItemIndicator>
    </span>
  </SelectPrimitive.Item>
));

SelectItem.displayName = 'SelectItem';

const SelectValue = forwardRef<HTMLDivElement, SelectValueProps>(({ className, ...props }, ref) => (
  <SelectPrimitive.Value
    ref={ref}
    className={twMerge("text-gray-900", className)}
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