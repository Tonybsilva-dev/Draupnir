/**
 * Design Tokens do Draupnir
 * Todos os tokens são baseados nas variáveis CSS definidas em globals.css
 */

// Tokens principais
export { colors, getColor } from './colors';
export { spacing, getSpacing } from './spacing';
export { typography, getTextSize, getTitleSize } from './typography';
export { shadows, getShadow } from './shadows';

// Tipos
export type {
  ColorScale,
  ColorName,
  BackgroundColor,
  TextColor,
} from './colors';

export type {
  SpacingToken,
} from './spacing';

export type {
  TextSize,
  TitleSize,
  FontWeight,
  LineHeight,
} from './typography';

export type {
  ShadowToken,
} from './shadows';

