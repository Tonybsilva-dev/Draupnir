/**
 * Border Tokens do Draupnir
 * Tokens para bordas seguindo o design minimalista
 */

export const borders = {
  none: '0px',
  sm: '1px',
  md: '2px',
  lg: '4px',
} as const;

export const borderRadius = {
  none: '0px',
  sm: '4px',
  md: '8px',
  lg: '12px',
  xl: '16px',
  full: '9999px',
} as const;

export const borderStyles = {
  solid: 'solid',
  dashed: 'dashed',
  dotted: 'dotted',
  none: 'none',
} as const;

// Função helper para obter border
export const getBorder = (size: keyof typeof borders = 'none') => borders[size];

// Função helper para obter border radius
export const getBorderRadius = (size: keyof typeof borderRadius = 'none') => borderRadius[size];

// Tipos
export type BorderToken = keyof typeof borders;
export type BorderRadiusToken = keyof typeof borderRadius;
export type BorderStyleToken = keyof typeof borderStyles; 