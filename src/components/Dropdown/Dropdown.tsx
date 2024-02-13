import { ComponentProps, forwardRef, ReactNode } from 'react';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { twMerge } from 'tailwind-merge';

export type DropdownTriggerProps = ComponentProps<typeof DropdownMenuPrimitive.Trigger>;
export type DropdownContentProps = ComponentProps<typeof DropdownMenuPrimitive.Content>;
export type DropdownItemProps = ComponentProps<typeof DropdownMenuPrimitive.Item>;

const DropdownTrigger = forwardRef<HTMLButtonElement, DropdownTriggerProps>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.Trigger
    ref={ref}
    className={twMerge("dropdown-trigger-classname", className)}
    {...props}
  />
));

DropdownTrigger.displayName = 'DropdownTrigger';

const DropdownContent = forwardRef<HTMLDivElement, DropdownContentProps>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.Content
    ref={ref}
    className={twMerge("dropdown-content-classname", className)}
    {...props}
  />
));

DropdownContent.displayName = 'DropdownContent';

const DropdownItem = forwardRef<HTMLDivElement, DropdownItemProps>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.Item
    ref={ref}
    className={twMerge("dropdown-item-classname", className)}
    {...props}
  />
));

DropdownItem.displayName = 'DropdownItem';

export type DropdownProps = {
  children: ReactNode;
};

export const Dropdown = ({ children }: DropdownProps) => (
  <DropdownMenuPrimitive.Root>
    {children}
  </DropdownMenuPrimitive.Root>
);

Dropdown.Trigger = DropdownTrigger;
Dropdown.Content = DropdownContent;
Dropdown.Item = DropdownItem;
