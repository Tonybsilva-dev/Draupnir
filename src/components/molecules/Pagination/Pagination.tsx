import React from 'react';
import { colors, spacing, typography, borders, borderRadius } from '../../../tokens';

export type PaginationProps = {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  showFirstLast?: boolean;
  showNumbers?: boolean;
  className?: string;
  style?: React.CSSProperties;
};

export const Pagination = ({
  page,
  totalPages,
  onPageChange,
  showFirstLast = true,
  showNumbers = true,
  className,
  style,
}: PaginationProps) => {
  if (totalPages <= 1) return null;

  const handleChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages && newPage !== page) {
      onPageChange(newPage);
    }
  };

  const renderNumbers = () => {
    const numbers = [];
    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 ||
        i === totalPages ||
        (i >= page - 1 && i <= page + 1)
      ) {
        numbers.push(
          <button
            key={i}
            aria-current={i === page ? 'page' : undefined}
            onClick={() => handleChange(i)}
            style={{
              minWidth: 32,
              height: 32,
              margin: `0 ${spacing[1]}`,
              border: i === page ? `${borders.sm} solid ${colors.primary[500]}` : `${borders.sm} solid ${colors.divider.default}`,
              background: i === page ? colors.primary[500] : colors.background.light,
              color: i === page ? colors.text.contrast : colors.text.primary,
              borderRadius: borderRadius.sm,
              fontWeight: typography.fontWeight.medium,
              fontSize: typography.text.sm,
              cursor: i === page ? 'default' : 'pointer',
              outline: 'none',
              transition: 'all 0.2s',
            }}
            disabled={i === page}
          >
            {i}
          </button>
        );
      } else if (
        (i === page - 2 && i > 1) ||
        (i === page + 2 && i < totalPages)
      ) {
        numbers.push(
          <span key={`ellipsis-${i}`} style={{ margin: `0 ${spacing[1]}` }}>…</span>
        );
      }
    }
    return numbers;
  };

  return (
    <nav
      aria-label="Paginação"
      className={className}
      style={{ display: 'flex', alignItems: 'center', gap: spacing[1], ...style }}
    >
      {showFirstLast && (
        <button
          onClick={() => handleChange(1)}
          disabled={page === 1}
          aria-label="Primeira página"
          style={{
            minWidth: 32,
            height: 32,
            border: `${borders.sm} solid ${colors.divider.default}`,
            background: colors.background.light,
            color: colors.text.primary,
            borderRadius: borderRadius.sm,
            fontWeight: typography.fontWeight.medium,
            fontSize: typography.text.sm,
            cursor: page === 1 ? 'not-allowed' : 'pointer',
            opacity: page === 1 ? 0.5 : 1,
            transition: 'all 0.2s',
          }}
        >
          «
        </button>
      )}
      <button
        onClick={() => handleChange(page - 1)}
        disabled={page === 1}
        aria-label="Página anterior"
        style={{
          minWidth: 32,
          height: 32,
          border: `${borders.sm} solid ${colors.divider.default}`,
          background: colors.background.light,
          color: colors.text.primary,
          borderRadius: borderRadius.sm,
          fontWeight: typography.fontWeight.medium,
          fontSize: typography.text.sm,
          cursor: page === 1 ? 'not-allowed' : 'pointer',
          opacity: page === 1 ? 0.5 : 1,
          transition: 'all 0.2s',
        }}
      >
        ‹
      </button>
      {showNumbers && renderNumbers()}
      <button
        onClick={() => handleChange(page + 1)}
        disabled={page === totalPages}
        aria-label="Próxima página"
        style={{
          minWidth: 32,
          height: 32,
          border: `${borders.sm} solid ${colors.divider.default}`,
          background: colors.background.light,
          color: colors.text.primary,
          borderRadius: borderRadius.sm,
          fontWeight: typography.fontWeight.medium,
          fontSize: typography.text.sm,
          cursor: page === totalPages ? 'not-allowed' : 'pointer',
          opacity: page === totalPages ? 0.5 : 1,
          transition: 'all 0.2s',
        }}
      >
        ›
      </button>
      {showFirstLast && (
        <button
          onClick={() => handleChange(totalPages)}
          disabled={page === totalPages}
          aria-label="Última página"
          style={{
            minWidth: 32,
            height: 32,
            border: `${borders.sm} solid ${colors.divider.default}`,
            background: colors.background.light,
            color: colors.text.primary,
            borderRadius: borderRadius.sm,
            fontWeight: typography.fontWeight.medium,
            fontSize: typography.text.sm,
            cursor: page === totalPages ? 'not-allowed' : 'pointer',
            opacity: page === totalPages ? 0.5 : 1,
            transition: 'all 0.2s',
          }}
        >
          »
        </button>
      )}
    </nav>
  );
};

export default Pagination; 