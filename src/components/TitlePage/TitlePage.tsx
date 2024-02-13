import Typography from "../Typography/Typography";

export interface TitlePageProps {
  title: string;
  description?: string;
}

export default function TitlePage({ title, description }: TitlePageProps) {
  return (
    <>
      <Typography element="h1" size="4xl" variant="primary">
        {title}
      </Typography>
      {description && (
        <Typography size="md" variant="secondary">
          {description}
        </Typography>
      )}
    </>
  );
}
