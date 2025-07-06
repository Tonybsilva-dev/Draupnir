/**
 * Cores do Design System Draupnir
 * Baseadas nas variáveis CSS definidas em globals.css
 */

// Cores principais (baseadas nas CSS custom properties)
export const colors = {
  // Cores primárias
  primary: {
    50: 'rgba(var(--primary), 0.05)',
    100: 'rgba(var(--primary), 0.1)',
    200: 'rgba(var(--primary), 0.2)',
    300: 'rgba(var(--primary), 0.3)',
    400: 'rgba(var(--primary), 0.4)',
    500: 'rgb(var(--primary))',
    600: 'rgb(var(--hover))',
    700: 'rgb(var(--click))',
    800: 'rgba(var(--primary), 0.8)',
    900: 'rgba(var(--primary), 0.9)',
  },

  // Cores secundárias
  secondary: {
    50: 'rgba(76, 175, 80, 0.05)',
    100: 'rgba(76, 175, 80, 0.1)',
    200: 'rgba(76, 175, 80, 0.2)',
    300: 'rgba(76, 175, 80, 0.3)',
    400: 'rgba(76, 175, 80, 0.4)',
    500: 'rgb(var(--secondary))',
    600: 'rgba(60, 140, 64, 1)',
    700: 'rgba(45, 105, 48, 1)',
    800: 'rgba(30, 70, 32, 1)',
    900: 'rgba(15, 35, 16, 1)',
  },

  // Cores terciárias
  tertiary: {
    50: 'rgba(255, 193, 7, 0.05)',
    100: 'rgba(255, 193, 7, 0.1)',
    200: 'rgba(255, 193, 7, 0.2)',
    300: 'rgba(255, 193, 7, 0.3)',
    400: 'rgba(255, 193, 7, 0.4)',
    500: 'rgb(var(--tertiary))',
    600: 'rgba(204, 154, 6, 1)',
    700: 'rgba(153, 116, 5, 1)',
    800: 'rgba(102, 77, 3, 1)',
    900: 'rgba(51, 39, 2, 1)',
  },

  // Cores quaternárias
  quaternary: {
    50: 'rgba(229, 57, 53, 0.05)',
    100: 'rgba(229, 57, 53, 0.1)',
    200: 'rgba(229, 57, 53, 0.2)',
    300: 'rgba(229, 57, 53, 0.3)',
    400: 'rgba(229, 57, 53, 0.4)',
    500: 'rgb(var(--quaternary))',
    600: 'rgba(183, 46, 42, 1)',
    700: 'rgba(137, 34, 32, 1)',
    800: 'rgba(91, 23, 21, 1)',
    900: 'rgba(46, 11, 11, 1)',
  },

  // Cores semânticas
  success: {
    50: 'rgba(58, 201, 34, 0.05)',
    100: 'rgba(58, 201, 34, 0.1)',
    200: 'rgba(58, 201, 34, 0.2)',
    300: 'rgba(58, 201, 34, 0.3)',
    400: 'rgba(58, 201, 34, 0.4)',
    500: 'rgb(var(--text-success))',
    600: 'rgba(46, 161, 27, 1)',
    700: 'rgba(35, 121, 20, 1)',
    800: 'rgba(23, 80, 14, 1)',
    900: 'rgba(12, 40, 7, 1)',
  },

  error: {
    50: 'rgba(255, 48, 48, 0.05)',
    100: 'rgba(255, 48, 48, 0.1)',
    200: 'rgba(255, 48, 48, 0.2)',
    300: 'rgba(255, 48, 48, 0.3)',
    400: 'rgba(255, 48, 48, 0.4)',
    500: 'rgb(var(--text-error))',
    600: 'rgba(204, 38, 38, 1)',
    700: 'rgba(153, 29, 29, 1)',
    800: 'rgba(102, 19, 19, 1)',
    900: 'rgba(51, 10, 10, 1)',
  },

  info: {
    50: 'rgba(59, 130, 246, 0.05)',
    100: 'rgba(59, 130, 246, 0.1)',
    200: 'rgba(59, 130, 246, 0.2)',
    300: 'rgba(59, 130, 246, 0.3)',
    400: 'rgba(59, 130, 246, 0.4)',
    500: 'rgb(var(--text-info))',
    600: 'rgba(47, 104, 197, 1)',
    700: 'rgba(35, 78, 148, 1)',
    800: 'rgba(24, 52, 99, 1)',
    900: 'rgba(12, 26, 49, 1)',
  },

  warning: {
    50: 'rgba(245, 158, 11, 0.05)',
    100: 'rgba(245, 158, 11, 0.1)',
    200: 'rgba(245, 158, 11, 0.2)',
    300: 'rgba(245, 158, 11, 0.3)',
    400: 'rgba(245, 158, 11, 0.4)',
    500: 'rgb(var(--tertiary))', // Usando tertiary como warning
    600: 'rgba(196, 126, 9, 1)',
    700: 'rgba(147, 95, 7, 1)',
    800: 'rgba(98, 63, 4, 1)',
    900: 'rgba(49, 32, 2, 1)',
  },

  // Cores de fundo
  background: {
    light: 'rgb(var(--bg-light))',
    dark: 'rgb(var(--bg-dark))',
    disabled: 'rgb(var(--bg-disabled))',
    default: 'rgb(var(--background))',
  },

  // Cores de texto
  text: {
    primary: 'rgb(var(--text-primary))',
    secondary: 'rgb(var(--text-secondary))',
    tertiary: 'rgb(var(--text-tertiary))',
    disabled: 'rgb(var(--text-disabled))',
  },

  // Cores de interface
  icon: 'rgb(var(--icon))',
  outline: 'rgb(var(--outline))',
  divider: {
    light: 'rgb(var(--divider-light))',
    default: 'rgb(var(--divider))',
    dark: 'rgb(var(--divider-dark))',
  },

  // Cores de scrollbar
  scrollbar: {
    thumb: 'var(--scrollbar-thumb-color)',
    track: 'var(--scrollbar-track-color)',
  },
} as const;

// Tipos TypeScript
export type ColorScale = keyof typeof colors.primary;
export type ColorName = keyof typeof colors;
export type BackgroundColor = keyof typeof colors.background;
export type TextColor = keyof typeof colors.text;

// Função helper para obter cores
export const getColor = (colorName: ColorName, scale?: ColorScale) => {
  if (scale && colors[colorName] && typeof colors[colorName] === 'object') {
    return (colors[colorName] as any)[scale];
  }
  return colors[colorName];
};

// Exportação padrão
export default colors; 