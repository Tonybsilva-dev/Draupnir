import Image from "next/image";

export type AvatarImageProps = {
  src: string;
  altDescription: string | "";
  name?: string;
};

const AvatarImage = ({ src, altDescription, name }: AvatarImageProps) => {
  return (
    <div>
      <Image
        src={src}
        alt={altDescription}
        className="rounded-full"
        width={100}
        height={100}
        title={name ? `Avatar de ${name}` : `Avatar ${altDescription}`}
        data-dd-action-name={`${altDescription} avatar`}
      />
    </div>
  );
};

export default AvatarImage;
