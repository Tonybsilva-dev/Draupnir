import { ComponentProps, forwardRef, ReactNode } from 'react';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { twMerge } from 'tailwind-merge';

export type DropdownTriggerProps = ComponentProps<typeof DropdownMenuPrimitive.Trigger>;

const DropdownTrigger = forwardRef<HTMLButtonElement, DropdownTriggerProps>(({
  className,
  children,
  ...props
}, ref) => (
  <DropdownMenuPrimitive.Trigger
    ref={ref}
    className={twMerge(
      "inline-flex items-center justify-center text-sm font-medium transition-colors",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
      "disabled:pointer-events-none disabled:opacity-50",
      className
    )}
    {...props}
  >
    {children}
  </DropdownMenuPrimitive.Trigger>
));

DropdownTrigger.displayName = 'DropdownTrigger';

const DropdownContent = forwardRef<HTMLDivElement, ComponentProps<typeof DropdownMenuPrimitive.Content>>(({
  className,
  children,
  ...props
}, ref) => (
  <DropdownMenuPrimitive.Portal>
    <DropdownMenuPrimitive.Content
      ref={ref}
      className={twMerge(
        "z-[9999] min-w-[8rem] overflow-hidden border border-gray-200 bg-white p-1 text-gray-900 shadow-lg",
        "animate-fade-in",
        "w-[var(--radix-dropdown-menu-trigger-width)]",
        className
      )}
      sideOffset={5}
      {...props}
    >
      {children}
    </DropdownMenuPrimitive.Content>
  </DropdownMenuPrimitive.Portal>
));

DropdownContent.displayName = 'DropdownContent';

const DropdownItem = forwardRef<HTMLDivElement, ComponentProps<typeof DropdownMenuPrimitive.Item>>(({
  className,
  children,
  ...props
}, ref) => (
  <DropdownMenuPrimitive.Item
    ref={ref}
    className={twMerge(
      "relative flex cursor-default select-none items-center px-2 py-1.5 text-sm outline-none",
      "transition-colors focus:bg-gray-50 focus:text-gray-900 data-[disabled]:pointer-events-none",
      "data-[disabled]:opacity-50",
      className
    )}
    {...props}
  >
    {children}
  </DropdownMenuPrimitive.Item>
));

DropdownItem.displayName = 'DropdownItem';

const DropdownSeparator = forwardRef<HTMLDivElement, ComponentProps<typeof DropdownMenuPrimitive.Separator>>(({
  className,
  ...props
}, ref) => (
  <DropdownMenuPrimitive.Separator
    ref={ref}
    className={twMerge(
      "h-px bg-gray-200 my-1",
      className
    )}
    {...props}
  />
));

DropdownSeparator.displayName = 'DropdownSeparator';

const DropdownLabel = forwardRef<HTMLDivElement, ComponentProps<typeof DropdownMenuPrimitive.Label>>(({
  className,
  ...props
}, ref) => (
  <DropdownMenuPrimitive.Label
    ref={ref}
    className={twMerge(
      "px-2 py-1.5 text-sm font-semibold text-gray-700",
      className
    )}
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
