import React, { ComponentProps, forwardRef, ReactNode } from "react";
import { colors, spacing, borders, borderRadius, typography } from '../../../tokens';

export type InputPrefixProps = ComponentProps<"div">;

function InputPrefix(props: InputPrefixProps) {
  return <div {...props} />;
}

export type InputControlProps = ComponentProps<"input"> & {
  required?: boolean;
  autocomplete?: "list" | "none" | "inline" | "both";
};

const InputControl = forwardRef<HTMLInputElement, InputControlProps>(
  ({ className, disabled, required, autocomplete, id, style, ...props }, ref) => {
    const hasError = props["aria-invalid"] === "true";
    const errorId = hasError ? `${id}-error` : undefined;
    const describedBy = [errorId, props["aria-describedby"]].filter(Boolean).join(" ");

    return (
      <input
        ref={ref}
        type="text"
        style={{
          flex: 1,
          border: 'none',
          background: 'transparent',
          padding: 0,
          color: colors.text.primary,
          fontSize: typography.text.md,
          fontFamily: typography.fontFamily.primary,
          outline: 'none',
          minWidth: 0,
          ...(disabled ? { cursor: 'not-allowed', opacity: 0.6 } : {}),
          ...(style || {}),
        }}
        className={className}
        disabled={disabled}
        required={required}
        aria-required={required}
        aria-autocomplete={autocomplete}
        aria-describedby={describedBy || undefined}
        id={id}
        {...props}
      />
    );
  }
);

InputControl.displayName = "InputControl";

export type InputRootProps = ComponentProps<"div"> & {
  errorMessage?: string;
  label?: string;
  required?: boolean;
  children: ReactNode;
};

function InputRoot({
  label,
  errorMessage,
  className,
  children,
  required = false,
  style,
  ...props
}: InputRootProps) {
  const hasError = !!errorMessage;

  // Extract id from children (Input.Control)
  const inputElement = React.Children.toArray(children).find(
    (child) => React.isValidElement(child) && child.type === InputControl
  ) as React.ReactElement<InputControlProps> | undefined;

  const inputId = inputElement?.props.id || `input-${Math.random().toString(36).substr(2, 9)}`;
  const errorId = hasError ? `${inputId}-error` : undefined;

  return (
    <>
      {label && (
        <label
          htmlFor={inputId}
          style={{
            display: 'block',
            marginBottom: spacing[1],
            fontSize: typography.text.sm,
            fontWeight: typography.fontWeight.medium,
            color: colors.text.primary,
          }}
        >
          {label}
          {required && <span style={{ color: colors.error[500], marginLeft: spacing[1] }}>*</span>}
        </label>
      )}
      <div
        style={{
          display: 'flex',
          width: '100%',
          alignItems: 'center',
          gap: spacing[2],
          border: `${borders.sm} solid ${hasError ? colors.error[500] : colors.divider.default}`,
          background: colors.background.light,
          height: '44px',
          paddingLeft: spacing[5],
          paddingRight: spacing[5],
          paddingTop: 0,
          paddingBottom: 0,
          borderRadius: borderRadius.sm,
          transition: 'border-color 0.2s',
          boxSizing: 'border-box',
          ...(style || {}),
        }}
        className={className}
        {...props}
      >
        {children}
      </div>
      {hasError && (
        <p
          id={errorId}
          style={{
            color: colors.error[500],
            fontFamily: 'monospace',
            fontSize: typography.text.xs,
            marginTop: spacing[1],
            textAlign: 'right',
          }}
          role="alert"
          aria-live="polite"
        >
          {errorMessage}
        </p>
      )}
    </>
  );
}

const Input = {
  Prefix: InputPrefix,
  Control: InputControl,
  Root: InputRoot,
};

export { Input };
