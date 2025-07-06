import Typography from "../../atoms/Typography/Typography";
import { colors, spacing, borders } from '../../../tokens';

export interface SubtitlePageProps {
  subtitle: string;
  description?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export default function SubtitlePage({
  subtitle,
  description,
  children,
  style,
}: SubtitlePageProps) {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderBottom: `${borders.sm} solid ${colors.divider.default}`,
      paddingBottom: spacing[5],
      gap: spacing[2],
      ...(style || {}),
    }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: spacing[1] }}>
        <Typography element="h2" size="xl" variant="primary">
          {subtitle}
        </Typography>
        {description && (
          <Typography element="span" size="sm" variant="secondary">
            {description}
          </Typography>
        )}
      </div>
      {children && (
        <div style={{ display: 'flex', alignItems: 'center', gap: spacing[2] }}>
          {children}
        </div>
      )}
    </div>
  );
}
