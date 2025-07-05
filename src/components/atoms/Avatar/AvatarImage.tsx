export type AvatarImageProps = {
  src: string;
  altDescription: string | "";
  name?: string;
};

const AvatarImage = ({ src, altDescription, name }: AvatarImageProps) => {
  return (
    <div>
      <img
        src={src}
        alt={altDescription}
        className="rounded-full w-full h-full object-cover"
        title={name ? `Avatar de ${name}` : `Avatar ${altDescription}`}
        data-dd-action-name={`${altDescription} avatar`}
      />
    </div>
  );
};

export default AvatarImage;
