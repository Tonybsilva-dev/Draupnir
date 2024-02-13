import { ComponentProps, forwardRef } from "react";
import { twMerge } from "tailwind-merge";

export type InputPrefixProps = ComponentProps<"div">;

function InputPrefix(props: InputPrefixProps) {
  return <div {...props} />;
}

export type InputControlProps = ComponentProps<"input">;

const InputControl = forwardRef<HTMLInputElement, InputControlProps>(
  ({ className, ...props }, ref) => {
    const classNames = twMerge(
      "flex-1 border-0 bg-transparent p-0 text-zinc-900 placeholder-zinc-600 outline-none truncate dark:text-zinc-100 dark:placeholder-zinc-400",
      className
    );

    return <input ref={ref} type="text" className={classNames} {...props} />;
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
  ...props
}: InputRootProps) {
  return (
    <>
      {label && (
        <label className="block mb-1 text-sm font-medium text-zinc-700 dark:text-zinc-300">
          {label}
        </label>
      )}
      <div
        className={twMerge(
          "flex w-full items-center gap-2 rounded-md border border-zinc-300 px-3 py-2 shadow-sm",
          "focus-within:border-green-300 focus-within:ring-4 focus-within:ring-green-100",
          "dark:border-zinc-700 dark:bg-zinc-800 dark:focus-within:border-green-500 dark:focus-within:ring-green-500/20",
          className
        )}
        {...props}
      />
      {errorMessage && (
        <p className="text-red-500 font-[courier] text-xs mt-1 text-right">
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
