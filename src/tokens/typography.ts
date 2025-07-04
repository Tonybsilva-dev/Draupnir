/**
 * Tipografia do Design System Draupnir
 * Baseada nas variáveis CSS definidas em globals.css
 */

export const typography = {
  // Tamanhos de texto
  text: {
    xs: 'var(--text-xs)',
    sm: 'var(--text-sm)',
    md: 'var(--text-md)',
    lg: 'var(--text-lg)',
    xl: 'var(--text-xl)',
    '2xl': 'var(--text-2xl)',
    '4xl': 'var(--text-4xl)',
  },

  // Tamanhos de título
  title: {
    md: 'var(--title-md)',
    lg: 'var(--title-lg)',
    xl: 'var(--title-xl)',
  },

  // Família de fonte
  fontFamily: {
    primary: '"Mulish", sans-serif',
  },

  // Peso da fonte
  fontWeight: {
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  },

  // Altura da linha
  lineHeight: {
    tight: '1.25em',
    normal: '1.5em',
    relaxed: '1.75em',
  },
} as const;

export type TextSize = keyof typeof typography.text;
export type TitleSize = keyof typeof typography.title;
export type FontWeight = keyof typeof typography.fontWeight;
export type LineHeight = keyof typeof typography.lineHeight;

// Função helper para obter tamanho de texto
export const getTextSize = (size: TextSize) => typography.text[size];

// Função helper para obter tamanho de título
export const getTitleSize = (size: TitleSize) => typography.title[size];

// Exportação padrão
export default typography; 