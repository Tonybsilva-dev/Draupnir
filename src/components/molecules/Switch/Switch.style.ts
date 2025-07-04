import { tv } from "tailwind-variants";
import classNames from "classnames";

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
  const containerVariant = tv({
    base: [
      "outline-none relative inline-flex h-6 w-16 items-center rounded-full",
      disabled ? "bg-gray-200" : "bg-gray-200",
    ],
    variants: {
      variant: {
        common: enabled ? "bg-primary" : "bg-gray-200",
        contract: enabled ? "bg-green-600" : "bg-gray-200",
      },
    },
    defaultVariants: {
      variant: "common",
    },
  });

  const containerClasses = containerVariant({ variant });

  const switchClasses = classNames(
    "inline-block bg-white h-4 w-4 rounded-full transform transition-transform duration-200 ease-in-out",
    enabled ? "translate-x-[2.1rem]" : "translate-x-1"
  );

  const iconClasses = classNames(
    "text-gray-400",
    { "text-green-600": enabled && !disabled },
    { "text-red-600": !enabled && !disabled },
    { "text-gray-300": disabled }
  );

  return {
    Icon: iconClasses,
    Switch: switchClasses,
    Container: containerClasses,
  };
}
