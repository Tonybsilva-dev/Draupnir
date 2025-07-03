/**
 * Espaçamentos do Design System Draupnir
 * Baseados nas variáveis CSS definidas em globals.css
 */

export const spacing = {
  // Base spacing units
  none: 'var(--spacing-none)',      // --spacing-none
  '4xs': 'var(--spacing-4xs)',     // --spacing-4xs
  '2xs': 'var(--spacing-2xs)',    // --spacing-2xs
  xs: 'var(--spacing-xs)',       // --spacing-xs
  sm: 'var(--spacing-sm)',       // --spacing-sm
  md: 'var(--spacing-md)',       // --spacing-md
  lg: 'var(--spacing-lg)',       // --spacing-lg
  xl: 'var(--spacing-xl)',       // --spacing-xl
  '2xl': 'var(--spacing-2xl)',    // --spacing-2xl
  '4xl': 'var(--spacing-4xl)',    // --spacing-4xl

  // Numeric aliases for convenience
  0: '0px',
  1: '8px',
  2: '12px',
  3: '16px',
  4: '20px',
  5: '24px',
  6: '32px',
  7: '40px',
  8: '48px',
  9: '56px',
} as const;

export type SpacingToken = keyof typeof spacing;
export type SpacingValue = typeof spacing[SpacingToken];

// Função helper para obter espaçamento
export const getSpacing = (token: SpacingToken) => spacing[token];

// Exportação padrão
export default spacing; 