import { ComponentProps, forwardRef } from "react";
import { twMerge } from "tailwind-merge";

export type InputPrefixProps = ComponentProps<"div">;

function InputPrefix(props: InputPrefixProps) {
  return <div {...props} />;
}

export type InputControlProps = ComponentProps<"input"> & {
  required?: boolean;
  autocomplete?: "list" | "none" | "inline" | "both";
};

const InputControl = forwardRef<HTMLInputElement, InputControlProps>(
  ({ className, disabled, required, autocomplete, id, ...props }, ref) => {
    const hasError = props["aria-invalid"] === "true";
    const errorId = hasError ? `${id}-error` : undefined;
    const describedBy = [errorId, props["aria-describedby"]].filter(Boolean).join(" ");

    const classNames = twMerge(
      "flex-1 border-0 bg-transparent p-0 text-gray-900 placeholder-gray-500 outline-none truncate",
      disabled && "cursor-not-allowed opacity-60",
      className
    );

    return (
      <input
        ref={ref}
        type="text"
        className={classNames}
        disabled={disabled}
        required={required}
        aria-required={required}
        aria-autocomplete={autocomplete}
        aria-describedby={describedBy || undefined}
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
  id?: string;
};

function InputRoot({
  label,
  errorMessage,
  className,
  children,
  required = false,
  id,
  ...props
}: InputRootProps) {
  const hasError = !!errorMessage;
  const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;
  const errorId = hasError ? `${inputId}-error` : undefined;

  return (
    <>
      {label && (
        <label
          htmlFor={inputId}
          className="block mb-1 text-sm font-medium text-gray-700"
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <div
        className={twMerge(
          "flex w-full items-center gap-2 border border-gray-200 bg-white px-3 py-2 transition-colors",
          "focus-within:border-primary focus-within:shadow-focus",
          hasError && "border-red-500",
          className
        )}
        {...props}
      >
        {children}
      </div>
      {hasError && (
        <p
          id={errorId}
          className="text-red-500 font-mono text-xs mt-1 text-right"
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
