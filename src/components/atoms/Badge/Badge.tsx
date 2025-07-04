import React from "react";

type BadgeVariant = "primary" | "success" | "warning" | "danger";

export interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
}

const badgeVariantClasses = {
  primary: "bg-blue-600 text-white",
  success: "bg-green-600 text-white",
  warning: "bg-yellow-600 text-white",
  danger: "bg-red-600 text-white",
};

const Badge: React.FC<BadgeProps> = ({ children, variant = "primary" }) => {
  const badgeClasses = badgeVariantClasses[variant];
  return (
    <span className={`text-sm px-2 py-1 rounded ${badgeClasses}`}>
      {children}
    </span>
  );
};

export { Badge };
export default Badge;
