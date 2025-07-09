import React, { ComponentProps, forwardRef, ReactNode } from "react";
import { colors, spacing, typography } from '../../../tokens';
import { ChevronRight, Home } from 'lucide-react';

export type BreadcrumbItemProps = ComponentProps<"li"> & {
  href?: string;
  isCurrent?: boolean;
  children: ReactNode;
};

const BreadcrumbItem = forwardRef<HTMLLIElement, BreadcrumbItemProps>(({
  href,
  isCurrent = false,
  children,
  className,
  style,
  ...props
}, ref) => {
  const isLink = !!href && !isCurrent;

  const itemStyle = {
    display: 'flex',
    alignItems: 'center',
    fontSize: typography.text.sm,
    color: isCurrent ? colors.text.primary : colors.text.secondary,
    fontWeight: isCurrent ? typography.fontWeight.medium : typography.fontWeight.normal,
    ...(isLink ? {
      cursor: 'pointer',
      textDecoration: 'none',
      transition: 'color 0.2s',
    } : {}),
    ...(style || {}),
  };

  const content = (
    <>
      {children}
      {isCurrent && (
        <span className="sr-only">(current page)</span>
      )}
    </>
  );

  return (
    <li
      ref={ref}
      style={itemStyle}
      className={className}
      {...props}
    >
      {isLink ? (
        <a
          href={href}
          style={{
            color: 'inherit',
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
          }}
          aria-current={isCurrent ? 'page' : undefined}
        >
          {content}
        </a>
      ) : (
        <span
          aria-current={isCurrent ? 'page' : undefined}
        >
          {content}
        </span>
      )}
    </li>
  );
});

BreadcrumbItem.displayName = "BreadcrumbItem";

export type BreadcrumbSeparatorProps = ComponentProps<"li"> & {
  children?: ReactNode;
};

const BreadcrumbSeparator = forwardRef<HTMLLIElement, BreadcrumbSeparatorProps>(({
  children,
  className,
  style,
  ...props
}, ref) => {
  return (
    <li
      ref={ref}
      style={{
        display: 'flex',
        alignItems: 'center',
        marginLeft: spacing[2],
        marginRight: spacing[2],
        color: colors.text.tertiary,
        ...(style || {}),
      }}
      className={className}
      aria-hidden="true"
      {...props}
    >
      {children || <ChevronRight size={16} />}
    </li>
  );
});

BreadcrumbSeparator.displayName = "BreadcrumbSeparator";

export type BreadcrumbHomeProps = ComponentProps<"li"> & {
  href?: string;
  children?: ReactNode;
};

const BreadcrumbHome = forwardRef<HTMLLIElement, BreadcrumbHomeProps>(({
  href = '/',
  children,
  className,
  style,
  ...props
}, ref) => {
  return (
    <li
      ref={ref}
      style={{
        display: 'flex',
        alignItems: 'center',
        fontSize: typography.text.sm,
        color: colors.text.secondary,
        cursor: 'pointer',
        transition: 'color 0.2s',
        ...(style || {}),
      }}
      className={className}
      {...props}
    >
      <a
        href={href}
        style={{
          color: 'inherit',
          textDecoration: 'none',
          display: 'flex',
          alignItems: 'center',
        }}
        aria-label="Go to home page"
      >
        {children || <Home size={16} />}
      </a>
    </li>
  );
});

BreadcrumbHome.displayName = "BreadcrumbHome";

export type BreadcrumbRootProps = ComponentProps<"nav"> & {
  children: ReactNode;
  label?: string;
};

const BreadcrumbRoot = forwardRef<HTMLElement, BreadcrumbRootProps>(({
  children,
  label = "Breadcrumb navigation",
  className,
  style,
  ...props
}, ref) => {
  return (
    <nav
      ref={ref}
      aria-label={label}
      style={{
        display: 'flex',
        alignItems: 'center',
        ...(style || {}),
      }}
      className={className}
      {...props}
    >
      <ol
        style={{
          display: 'flex',
          alignItems: 'center',
          listStyle: 'none',
          margin: 0,
          padding: 0,
        }}
      >
        {children}
      </ol>
    </nav>
  );
});

BreadcrumbRoot.displayName = "BreadcrumbRoot";

const Breadcrumb = {
  Root: BreadcrumbRoot,
  Item: BreadcrumbItem,
  Separator: BreadcrumbSeparator,
  Home: BreadcrumbHome,
};

export { Breadcrumb }; 