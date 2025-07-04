/**
 * Sombras do Design System Draupnir
 * Baseadas nas variáveis CSS definidas em globals.css
 */

export const shadows = {
  // Base shadows
  sm: 'var(--shadow-sm)',
  md: 'var(--shadow-md)',
  lg: 'var(--shadow-lg)',

  // Focus shadows
  focus: 'var(--shadow-focus)',
  outline: 'var(--shadow-outline)',
  'button-focus': '0px 0px 0px 2px rgba(22, 163, 74, 0.5)', // --shadow-button-focus

  // Custom shadows
  'inner-sm': 'inset 0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  'inner-md': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
  'inner-lg': 'inset 0 4px 6px -1px rgba(0, 0, 0, 0.1)',

  // Elevation shadows
  elevation: {
    1: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    2: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    3: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    4: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    5: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  },
} as const;

export type ShadowToken = keyof typeof shadows;
export type ElevationToken = keyof typeof shadows.elevation;

// Função helper para obter sombra
export const getShadow = (token: ShadowToken) => shadows[token];

// Exportação padrão
export default shadows; 