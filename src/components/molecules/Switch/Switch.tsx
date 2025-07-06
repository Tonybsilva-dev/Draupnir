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
    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
      <RadixSwitch
        checked={enabled}
        onClick={toggle}
        disabled={disabled}
        style={style.Container}
        aria-checked={enabled}
        aria-label={generateAriaLabel()}
        {...rest}
      >
        <span className="sr-only">
          {label || 'Switch'} {enabled ? 'activated' : 'deactivated'}
        </span>
        {variant === "common" && <span style={style.Switch} />}
        {variant === "contract" && (
          <span style={style.Switch}>
            {enabled && <Check style={style.Icon} aria-hidden="true" />}
            {enabled || <X style={style.Icon} aria-hidden="true" />}
          </span>
        )}
      </RadixSwitch>
      {(label || description) && (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {label && (
            <span style={{ fontSize: 14, fontWeight: 500, color: '#212121' }}>
              {label}
            </span>
          )}
          {description && (
            <span style={{ fontSize: 12, color: '#757575' }}>
              {description}
            </span>
          )}
        </div>
      )}
    </div>
  );
};

export default Switch;
