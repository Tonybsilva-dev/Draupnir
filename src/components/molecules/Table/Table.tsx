import React, { ReactNode, TableHTMLAttributes } from 'react';
import { colors, spacing, typography, borders } from '../../../tokens';

export type TableProps = TableHTMLAttributes<HTMLTableElement> & {
  children: ReactNode;
  striped?: boolean;
};

export const Table = ({ children, striped = false, style, ...props }: TableProps) => (
  <table
    style={{
      width: '100%',
      borderCollapse: 'collapse',
      background: colors.background.light,
      fontSize: typography.text.sm,
      ...style,
    }}
    {...props}
  >
    {children}
  </table>
);

export type TableHeadProps = React.HTMLAttributes<HTMLTableSectionElement> & {
  children: ReactNode;
};

export const TableHead = ({ children, style, ...props }: TableHeadProps) => (
  <thead
    style={{
      background: colors.background.dark,
      color: colors.text.contrast,
      ...style,
    }}
    {...props}
  >
    {children}
  </thead>
);

export type TableBodyProps = React.HTMLAttributes<HTMLTableSectionElement> & {
  children: ReactNode;
};

export const TableBody = ({ children, style, ...props }: TableBodyProps) => (
  <tbody style={style} {...props}>
    {children}
  </tbody>
);

export type TableRowProps = React.HTMLAttributes<HTMLTableRowElement> & {
  children: ReactNode;
  striped?: boolean;
  index?: number;
};

export const TableRow = ({ children, striped, index, style, ...props }: TableRowProps) => (
  <tr
    style={{
      background: striped && index !== undefined && index % 2 === 1 ? colors.background.disabled : undefined,
      borderBottom: `${borders.sm} solid ${colors.divider.default}`,
      ...style,
    }}
    {...props}
  >
    {children}
  </tr>
);

export type TableCellProps = React.TdHTMLAttributes<HTMLTableCellElement> & {
  children: ReactNode;
  header?: boolean;
};

export const TableCell = ({ children, header = false, style, ...props }: TableCellProps) => {
  const Tag = header ? 'th' : 'td';
  return (
    <Tag
      style={{
        padding: `${spacing[2]} ${spacing[3]}`,
        textAlign: 'left',
        fontWeight: header ? typography.fontWeight.medium : typography.fontWeight.normal,
        borderBottom: `${borders.sm} solid ${colors.divider.default}`,
        ...style,
      }}
      scope={header ? 'col' : undefined}
      {...props}
    >
      {children}
    </Tag>
  );
};

const TableCompound = {
  Root: Table,
  Head: TableHead,
  Body: TableBody,
  Row: TableRow,
  Cell: TableCell,
};

export default TableCompound; 