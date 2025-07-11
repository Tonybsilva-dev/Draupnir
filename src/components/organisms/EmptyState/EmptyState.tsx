import React from 'react';
import { cn } from '../../../utils/cn';
import { colors, spacing, typography } from '../../../tokens';

export interface EmptyStateProps {
  icon?: React.ReactNode;
  title?: string;
  description?: string;
  action?: React.ReactNode;
  className?: string;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  icon,
  title,
  description,
  action,
  className,
}) => {
  return (
    <div
      data-testid="empty-state"
      className={cn(
        'flex flex-col items-center justify-center text-center',
        className
      )}
      style={{
        padding: spacing.lg,
      }}
    >
      {icon && (
        <div
          className="mb-4"
          style={{ color: colors.text.tertiary }}
        >
          {icon}
        </div>
      )}

      {title && (
        <h3
          className="mb-2 font-semibold"
          style={{
            fontSize: typography.text.lg,
            color: colors.text.primary,
            fontWeight: typography.fontWeight.semibold,
          }}
        >
          {title}
        </h3>
      )}

      {description && (
        <p
          className="mb-6 max-w-sm"
          style={{
            fontSize: typography.text.sm,
            color: colors.text.secondary,
            lineHeight: typography.lineHeight.normal,
            marginBottom: spacing.xl,
          }}
        >
          {description}
        </p>
      )}

      {action && (
        <div className="flex justify-center">
          {action}
        </div>
      )}
    </div>
  );
};

export default EmptyState; 