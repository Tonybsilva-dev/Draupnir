import Typography from "../Typography/Typography";

export interface SubtitlePageProps {
  subtitle: string;
  description?: string;
  children?: React.ReactNode;
}

export default function SubtitlePage({
  subtitle,
  description,
  children,
}: SubtitlePageProps) {
  return (
    <div className="flex lg:flex-row items-center justify-between border-b border-zinc-300 pb-5 dark:border-zinc-700">
      <div className="space-y-1">
      <Typography element="h2" size="xl" variant="primary">
          {subtitle}
        </Typography>
        {description && (
          <Typography element="span" size="sm" variant="secondary">
            {description}
          </Typography>
        )}
      </div>
      {children && <div className="flex items-center gap-2">{children}</div>}
    </div>
  );
}
