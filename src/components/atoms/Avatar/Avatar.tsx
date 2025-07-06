import React from "react";
import AvatarIcon from "./AvatarIcon";
import AvatarImage from "./AvatarImage";
import { colors, spacing, borderRadius } from '../../../tokens';

export type AvatarProps = {
  size?: "xs" | "sm" | "md" | "lg";
  image?: string;
  description?: string;
  name?: string;
  style?: React.CSSProperties;
} & React.HTMLAttributes<HTMLDivElement>;

const avatarSizeMap = {
  xs: { width: 20, height: 20 },
  sm: { width: 24, height: 24 },
  md: { width: 32, height: 32 },
  lg: { width: 40, height: 40 },
};

const Avatar = ({
  image,
  description = "",
  name,
  size = "xs",
  className,
  style,
  ...rest
}: AvatarProps) => {
  const { width, height } = avatarSizeMap[size];

  // Generate accessible description
  const getAccessibleDescription = () => {
    if (name) {
      return `Avatar de ${name}`;
    }
    if (description) {
      return `Avatar: ${description}`;
    }
    return "Avatar de usuário";
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
      style={{
        position: 'relative',
        background: colors.background.light,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: colors.text.tertiary,
        width,
        height,
        borderRadius: borderRadius.full,
        transition: 'background 0.2s',
        outline: 'none',
        ...(style || {}),
      }}
      className={className}
      role="img"
      aria-label={accessibleDescription}
      tabIndex={0}
      {...rest}
    >
      {AvatarComponent}
    </div>
  );
};

export default Avatar;
