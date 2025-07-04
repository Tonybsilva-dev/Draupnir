import { User } from "lucide-react";

export type AvatarIconProps = {
  name?: string;
};

const AvatarIcon = ({ name }: AvatarIconProps) => {
  return (
    <User
      className="absolute w-1/2 h-1/2"
      aria-label={name ? `Avatar of ${name}` : "User avatar"}
    />
  );
};

export default AvatarIcon;
