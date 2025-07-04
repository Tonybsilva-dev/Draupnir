import classNames from "classnames";
import React from "react";
import AvatarIcon from "./AvatarIcon";
import AvatarImage from "./AvatarImage";

export type AvatarProps = {
  size?: "xs" | "sm" | "md" | "lg";
  image?: string;
  description?: string;
  name?: string;
} & React.HTMLAttributes<HTMLDivElement>;

const avatarSizeMap = {
  xs: "w-5 h-5",
  sm: "w-6 h-6",
  md: "w-8 h-8",
  lg: "w-9 h-9",
};

const Avatar = ({
  image,
  description = "",
  name,
  size = "xs",
  className,
  ...rest
}: AvatarProps) => {
  const avatarSizeClass = avatarSizeMap[size];

  // Generate accessible description
  const getAccessibleDescription = () => {
    if (name) {
      return `Avatar of ${name}`;
    }
    if (description) {
      return `Avatar: ${description}`;
    }
    return "User avatar";
  };

  const accessibleDescription = getAccessibleDescription();

  const AvatarComponent = image ? (
    <AvatarImage
      src={image}
      altDescription={accessibleDescription}
      name={name}
    />
  ) : (
    <AvatarIcon name={name} />
  );

  return (
    <div
      className={classNames(
        "relative bg-gray-100 flex items-center justify-center text-gray-400 hover:bg-gray-50 focus:ring-2 focus:ring-offset-2 focus:ring-primary",
        avatarSizeClass,
        className
      )}
      role="img"
      aria-label={accessibleDescription}
      {...rest}
    >
      {AvatarComponent}
    </div>
  );
};

export default Avatar;
