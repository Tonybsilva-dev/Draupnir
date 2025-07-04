import { ComponentProps, forwardRef, ReactNode } from 'react';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { twMerge } from 'tailwind-merge';

export type DropdownTriggerProps = ComponentProps<typeof DropdownMenuPrimitive.Trigger>;
export type DropdownContentProps = ComponentProps<typeof DropdownMenuPrimitive.Content>;
export type DropdownItemProps = ComponentProps<typeof DropdownMenuPrimitive.Item>;

const DropdownTrigger = forwardRef<HTMLButtonElement, DropdownTriggerProps>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.Trigger
    ref={ref}
    className={twMerge(
      "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      "disabled:pointer-events-none disabled:opacity-50",
      "bg-white border border-zinc-200 hover:bg-zinc-100 hover:text-zinc-900",
      className
    )}
    {...props}
  />
));

DropdownTrigger.displayName = 'DropdownTrigger';

const DropdownContent = forwardRef<HTMLDivElement, DropdownContentProps>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.Portal>
    <DropdownMenuPrimitive.Content
      ref={ref}
      className={twMerge(
        "z-50 min-w-[8rem] overflow-hidden rounded-md border border-zinc-200 bg-white p-1 text-zinc-950 shadow-md",
        "animate-fade-in",
        className
      )}
      sideOffset={5}
      {...props}
    />
  </DropdownMenuPrimitive.Portal>
));

DropdownContent.displayName = 'DropdownContent';

const DropdownItem = forwardRef<HTMLDivElement, DropdownItemProps>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.Item
    ref={ref}
    className={twMerge(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none",
      "transition-colors focus:bg-zinc-100 focus:text-zinc-900 data-[disabled]:pointer-events-none",
      "data-[disabled]:opacity-50",
      className
    )}
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

export default Dropdown;
