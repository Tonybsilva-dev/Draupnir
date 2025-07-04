import { ComponentProps, forwardRef } from "react";
import { twMerge } from "tailwind-merge";

export type InputPrefixProps = ComponentProps<"div">;

function InputPrefix(props: InputPrefixProps) {
  return <div {...props} />;
}

export type InputControlProps = ComponentProps<"input">;

const InputControl = forwardRef<HTMLInputElement, InputControlProps>(
  ({ className, disabled, ...props }, ref) => {
    const classNames = twMerge(
      "flex-1 border-0 bg-transparent p-0 text-gray-900 placeholder-gray-500 outline-none truncate",
      disabled && "cursor-not-allowed opacity-60",
      className
    );
    return <input ref={ref} type="text" className={classNames} disabled={disabled} {...props} />;
  }
);

InputControl.displayName = "InputControl";

export type InputRootProps = ComponentProps<"div"> & {
  errorMessage?: string;
  label?: string;
};

function InputRoot({
  label,
  errorMessage,
  className,
  children,
  ...props
}: InputRootProps) {
  const hasError = !!errorMessage;
  return (
    <>
      {label && (
        <label className="block mb-1 text-sm font-medium text-gray-700">
          {label}
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
        <p className="text-red-500 font-mono text-xs mt-1 text-right">
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
