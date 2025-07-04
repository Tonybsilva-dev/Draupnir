# Design Tokens

The Draupnir design tokens are **based on CSS variables defined in `globals.css`**, eliminating duplication and ensuring consistency between CSS and TypeScript.

## 🎯 Purpose

Design tokens provide a **single source of truth** for design decisions, ensuring consistency across the entire application.

## 📦 Structure

```
src/tokens/
├── index.ts          # Main exports
├── colors.ts         # Color tokens
├── typography.ts     # Typography tokens
├── spacing.ts        # Spacing tokens
└── shadows.ts        # Shadow tokens
```

## 🚀 Usage

### 1. **Import Tokens**

```tsx
import { colors, typography, spacing, shadows } from '@/tokens';
```

### 2. **Usage Example**

```tsx
// Using color tokens
const primaryColor = colors.primary;
const textColor = colors.text.primary;

// Using typography tokens
const headingStyle = typography.heading.lg;
const bodyStyle = typography.body.md;

// Using spacing tokens
const padding = spacing.md;
const margin = spacing.lg;

// Using shadow tokens
const cardShadow = shadows.md;
const buttonShadow = shadows.sm;
```

## 🎨 Token Categories

### **Colors**
- **Primary**: Brand colors and main actions
- **Secondary**: Supporting colors and secondary actions
- **Neutral**: Text, backgrounds, and borders
- **Semantic**: Success, warning, error, and info states

### **Typography**
- **Headings**: H1, H2, H3, H4, H5, H6
- **Body**: Different sizes for body text
- **Weights**: Light, regular, medium, semibold, bold

### **Spacing**
- **Scale**: xs, sm, md, lg, xl, 2xl, 3xl
- **Consistent**: Based on 4px base unit

### **Shadows**
- **Elevation**: sm, md, lg, xl
- **Purpose**: Cards, buttons, modals, tooltips

## ✅ Benefits

- ✅ **Single source of truth** - Values defined only once
- ✅ **Type safety** - Full TypeScript support
- ✅ **Consistency** - Same values across CSS and JS
- ✅ **Maintainability** - Easy to update and refactor
- ✅ **Performance** - No runtime overhead
- ✅ **Developer experience** - Autocomplete and IntelliSense

## 🚀 Usage in Components

### **Direct Import**

```tsx
import { colors, typography } from '@/tokens';

const MyComponent = () => (
  <div style={{ 
    color: colors.text.primary,
    fontSize: typography.body.md.fontSize,
    fontWeight: typography.body.md.fontWeight
  }}>
    Content
  </div>
);
```

### **With Tailwind Classes**

```tsx
// Colors are available as CSS variables
<div className="text-primary bg-secondary border-neutral-200">
  Content
</div>
```

### **With CSS-in-JS**

```tsx
import { colors, spacing } from '@/tokens';

const styles = {
  container: {
    backgroundColor: colors.background.primary,
    padding: spacing.md,
    borderRadius: spacing.sm,
  }
};
```

## 🔧 Configuration

### **Adding New Tokens**

1. **Define in CSS variables** (`globals.css`)
2. **Export in TypeScript** (`tokens/*.ts`)
3. **Use in components**

### **Example: Adding a new color**

```css
/* globals.css */
:root {
  --color-brand-new: #ff6b6b;
}
```

```tsx
// tokens/colors.ts
export const colors = {
  // ... existing colors
  brand: {
    new: 'var(--color-brand-new)',
  },
} as const;
```

## 📋 Type Definitions

```tsx
// Safe types for use in components
export type ColorToken = typeof colors;
export type TypographyToken = typeof typography;
export type SpacingToken = typeof spacing;
export type ShadowToken = typeof shadows;
```

## 🎯 Best Practices

1. **Always use tokens** instead of hardcoded values
2. **Import from tokens** for TypeScript components
3. **Use CSS variables** for Tailwind classes
4. **Keep tokens minimal** - only add what's needed
5. **Document changes** when adding new tokens

## 🔄 Migration

When migrating from hardcoded values:

1. **Identify** hardcoded values in components
2. **Replace** with appropriate tokens
3. **Test** visual consistency
4. **Update** documentation

This ensures a **consistent, maintainable, and scalable** design system. 