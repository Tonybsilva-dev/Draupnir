import React from 'react';
import { Inbox } from 'lucide-react';
import Typography from '../atoms/Typography/Typography';
import { Button } from '../atoms/Button/Button';
import { colors, spacing, borderRadius, typography } from '../../tokens';

export type EmptyStateProps = {
  icon?: React.ReactNode;
  title?: string;
  description?: string;
  action?: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
};

export const EmptyState = ({
  icon = <Inbox size={48} color={colors.primary[500]} style={{ marginBottom: spacing[2] }} />,
  title = 'Nenhum dado encontrado',
  description = 'Não encontramos nenhum resultado para sua busca ou ainda não há dados cadastrados.',
  action = <Button variant="primary">Adicionar novo item</Button>,
  style,
  className,
}: EmptyStateProps) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: spacing[6],
      background: colors.background.light,
      borderRadius: borderRadius.md,
      boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
      minHeight: 240,
      ...style,
    }}
    className={className}
  >
    {icon}
    <Typography semantic="heading" level={3} size="lg" style={{ marginBottom: spacing[2], fontWeight: typography.fontWeight.bold }}>
      {title}
    </Typography>
    <Typography size="sm" variant="secondary" style={{ marginBottom: spacing[4], textAlign: 'center', maxWidth: 320 }}>
      {description}
    </Typography>
    {action}
  </div>
);

export default EmptyState; 