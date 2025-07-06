import Typography from "../../atoms/Typography/Typography";
import { spacing } from '../../../tokens';

export interface TitlePageProps {
  title: string;
  description?: string;
  style?: React.CSSProperties;
}

export default function TitlePage({ title, description, style }: TitlePageProps) {
  return (
    <div style={{ ...(style || {}) }}>
      <Typography element="h1" size="4xl" variant="primary">
        {title}
      </Typography>
      {description && (
        <Typography
          size="md"
          variant="secondary"
          style={{ marginTop: spacing[1] }}
        >
          {description}
        </Typography>
      )}
    </div>
  );
}
