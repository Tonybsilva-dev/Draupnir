"use client"

import {
  Switch as RadixSwitch,
  type SwitchProps as RadixSwitchProps,
} from "@radix-ui/react-switch";
import { Check, X } from "lucide-react";
import { useState } from "react";
import useStyleSwitch from "./Switch.style";

export type SwitchProps = {
  defaultEnable?: boolean;
  variant?: "common" | "contract";
  disabled?: boolean;
  onChange?: (enabled: boolean) => void;
  label?: string;
  description?: string;
} & RadixSwitchProps;

const Switch = ({
  defaultEnable: enabledByDefault,
  variant = "common",
  disabled = false,
  onChange,
  label,
  description,
  ...rest
}: SwitchProps) => {
  const [enabled, setEnabled] = useState(enabledByDefault ?? false);

  const style = useStyleSwitch({ variant, enabled, disabled });

  const toggle = () => {
    const newState = !enabled;
    setEnabled(newState);
    onChange?.(newState);
  };

  const generateAriaLabel = () => {
    if (label) {
      return `${label} ${enabled ? 'activated' : 'deactivated'}`;
    }
    return `Switch ${enabled ? 'activated' : 'deactivated'}`;
  };

  return (
    <div className="flex items-center gap-2">
      <RadixSwitch
        checked={enabled}
        onClick={toggle}
        disabled={disabled}
        className={style.Container}
        aria-checked={enabled}
        aria-label={generateAriaLabel()}
        {...rest}
      >
        <span className="sr-only">
          {label || 'Switch'} {enabled ? 'activated' : 'deactivated'}
        </span>
        {variant === "common" && <span className={style.Switch} />}
        {variant === "contract" && (
          <span className={style.Switch}>
            {enabled && <Check className={`${style.Icon} w-4 h-4`} aria-hidden="true" />}
            {enabled || <X className={`${style.Icon} w-4 h-4`} aria-hidden="true" />}
          </span>
        )}
      </RadixSwitch>
      {(label || description) && (
        <div className="flex flex-col">
          {label && (
            <span className="text-sm font-medium text-gray-900">
              {label}
            </span>
          )}
          {description && (
            <span className="text-xs text-gray-500">
              {description}
            </span>
          )}
        </div>
      )}
    </div>
  );
};

export default Switch;
