import React from "react";

type BadgeVariant = "primary" | "success" | "warning" | "danger";

export interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
}

const badgeVariantClasses = {
  primary: "bg-blue-100 text-blue-800",
  success: "bg-green-100 text-green-800",
  warning: "bg-yellow-100 text-yellow-800",
  danger: "bg-red-100 text-red-800",
};

const Badge: React.FC<BadgeProps> = ({ children, variant = "primary" }) => {
  const badgeClasses = badgeVariantClasses[variant];
  return (
    <span className={`text-xs px-2 py-1 font-medium ${badgeClasses}`}>
      {children}
    </span>
  );
};

export { Badge };
export default Badge;
