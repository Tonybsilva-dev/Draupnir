import React, { forwardRef, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';
import { Button } from '../../atoms/Button/Button';
import Typography from '../../atoms/Typography/Typography';
import Avatar from '../../atoms/Avatar/Avatar';

export type CardVariant = 'default' | 'elevated' | 'outlined' | 'flat';
export type CardSize = 'sm' | 'md' | 'lg';

export type CardProps = {
  children: ReactNode;
  variant?: CardVariant;
  size?: CardSize;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

export type CardHeaderProps = {
  children: ReactNode;
  avatar?: string;
  avatarName?: string;
  actions?: ReactNode;
  className?: string;
} & React.HTMLAttributes<HTMLDivElement>;

export type CardContentProps = {
  children: ReactNode;
  className?: string;
} & React.HTMLAttributes<HTMLDivElement>;

export type CardFooterProps = {
  children: ReactNode;
  className?: string;
} & React.HTMLAttributes<HTMLDivElement>;

export type CardImageProps = {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: 'square' | 'video' | 'wide';
} & React.ImgHTMLAttributes<HTMLImageElement>;

export type CardActionProps = {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'default' | 'sm' | 'lg' | 'full';
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const cardVariants = {
  default: 'bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow',
  elevated: 'bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-shadow',
  outlined: 'bg-white border-2 border-gray-300 shadow-none hover:border-gray-400 transition-colors',
  flat: 'bg-gray-50 border border-gray-100 shadow-none hover:bg-gray-100 transition-colors',
};

const cardSizes = {
  sm: 'p-3',
  md: 'p-4',
  lg: 'p-6',
};

const Card = forwardRef<HTMLDivElement, CardProps>(({
  children,
  variant = 'default',
  size = 'md',
  className,
  onClick,
  disabled = false,
  loading = false,
  ...props
}, ref) => {
  const isClickable = !!onClick && !disabled && !loading;

  return (
    <div
      ref={ref}
      className={twMerge(
        'rounded-lg transition-all duration-300 ease-in-out',
        cardVariants[variant],
        cardSizes[size],
        isClickable && 'cursor-pointer hover:scale-103',
        disabled && 'opacity-50 cursor-not-allowed',
        loading && 'animate-pulse',
        className
      )}
      onClick={isClickable ? onClick : undefined}
      role={isClickable ? 'button' : undefined}
      tabIndex={isClickable ? 0 : undefined}
      onKeyDown={isClickable ? (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      } : undefined}
      aria-disabled={disabled}
      {...props}
    >
      {loading && (
        <div className="absolute inset-0 bg-white bg-opacity-75 flex items-center justify-center rounded-lg">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
        </div>
      )}
      {children}
    </div>
  );
});

Card.displayName = 'Card';

const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(({
  children,
  avatar,
  avatarName,
  actions,
  className,
  ...props
}, ref) => {
  return (
    <div
      ref={ref}
      className={twMerge(
        'flex items-start justify-between gap-3 mb-4',
        className
      )}
      {...props}
    >
      <div className="flex items-center gap-3 flex-1 min-w-0">
        {avatar && (
          <Avatar
            size="md"
            image={avatar}
            name={avatarName}
            className="flex-shrink-0"
          />
        )}
        <div className="flex-1 min-w-0">
          {children}
        </div>
      </div>
      {actions && (
        <div className="flex items-center gap-2 flex-shrink-0">
          {actions}
        </div>
      )}
    </div>
  );
});

CardHeader.displayName = 'CardHeader';

const CardContent = forwardRef<HTMLDivElement, CardContentProps>(({
  children,
  className,
  ...props
}, ref) => {
  return (
    <div
      ref={ref}
      className={twMerge('space-y-3', className)}
      {...props}
    >
      {children}
    </div>
  );
});

CardContent.displayName = 'CardContent';

const CardFooter = forwardRef<HTMLDivElement, CardFooterProps>(({
  children,
  className,
  ...props
}, ref) => {
  return (
    <div
      ref={ref}
      className={twMerge(
        'flex items-center justify-between gap-3 pt-4 mt-4 border-t border-gray-100',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
});

CardFooter.displayName = 'CardFooter';

const CardImage = forwardRef<HTMLImageElement, CardImageProps>(({
  src,
  alt,
  className,
  aspectRatio = 'square',
  ...props
}, ref) => {
  const aspectClasses = {
    square: 'aspect-square',
    video: 'aspect-video',
    wide: 'aspect-[16/9]',
  };

  return (
    <div className={twMerge('overflow-hidden rounded-t-lg -mt-4 -mx-4', className)}>
      <img
        ref={ref}
        src={src}
        alt={alt}
        className={twMerge(
          'w-full h-full object-cover',
          aspectClasses[aspectRatio]
        )}
        {...props}
      />
    </div>
  );
});

CardImage.displayName = 'CardImage';

const CardAction = forwardRef<HTMLButtonElement, CardActionProps>(({
  children,
  variant = 'primary',
  size = 'sm',
  onClick,
  disabled,
  className,
  ...props
}, ref) => {
  return (
    <Button
      ref={ref}
      variant={variant}
      size={size}
      onClick={onClick}
      disabled={disabled}
      className={className}
      {...props}
    >
      {children}
    </Button>
  );
});

CardAction.displayName = 'CardAction';

const CardCompound = {
  Header: CardHeader,
  Content: CardContent,
  Footer: CardFooter,
  Image: CardImage,
  Action: CardAction,
};

export { Card, CardCompound };
export default Card; 