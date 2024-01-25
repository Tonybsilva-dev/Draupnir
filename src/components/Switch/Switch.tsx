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
} & RadixSwitchProps;

const Switch = ({
  defaultEnable: enabledByDefault,
  variant = "common",
  disabled,
  onChange,
  ...rest
}: SwitchProps) => {
  const [enabled, setEnabled] = useState(enabledByDefault);
  const style = useStyleSwitch({ variant, enabled, disabled });

  const toggle = () => {
    const newState = !enabled;
    setEnabled(newState);
    onChange?.(newState);
  };

  return (
    <RadixSwitch
      checked={enabled}
      onClick={toggle}
      disabled={disabled}
      className={style.Container}
      {...rest}
    >
      <span className="sr-only">switch toggle</span>
      {variant === "common" && <span className={style.Switch} />}
      {variant === "contract" && (
        <span className={style.Switch}>
          {enabled && <Check className={`${style.Icon} w-4 h-4`} aria-disabled={disabled} />}
          {enabled || <X className={`${style.Icon} w-4 h-4`} aria-disabled={disabled} />}
        </span>
      )}
    </RadixSwitch>
  );
};

export default Switch;
