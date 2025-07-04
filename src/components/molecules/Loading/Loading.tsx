export type LoadingProps = {
  color?: string;
  label?: string;
  size?: "sm" | "md" | "lg";
};

export function Loading({
  color = "bg-primary",
  label = "Loading content",
  size = "md"
}: LoadingProps) {
  const sizeClasses = {
    sm: "w-3 h-3",
    md: "w-5 h-5",
    lg: "w-8 h-8"
  };

  return (
    <div
      className="flex justify-center items-center w-full h-full"
      role="status"
      aria-live="polite"
      aria-label={label}
    >
      <div className="relative inline-flex">
        <div className={`${sizeClasses[size]} ${color} rounded-full`}></div>
        <div className={`${sizeClasses[size]} ${color} absolute top-0 left-0 animate-ping rounded-full`}></div>
        <div className={`${sizeClasses[size]} ${color} absolute top-0 left-0 animate-pulse rounded-full`}></div>
      </div>
      <span className="sr-only">{label}</span>
    </div>
  );
}

export default Loading;

