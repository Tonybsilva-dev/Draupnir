# Design Tokens - Draupnir

## 📋 Visão Geral

Os design tokens do Draupnir são **baseados nas variáveis CSS definidas em `globals.css`**, eliminando duplicação e garantindo consistência entre CSS e TypeScript.

## 🏗️ Estrutura

```
src/
├── app/
│   └── globals.css          # Fonte única da verdade (CSS custom properties)
└── tokens/
    ├── colors.ts            # Cores baseadas em --primary, --secondary, etc.
    ├── spacing.ts           # Espaçamentos baseados em --spacing-*
    ├── typography.ts        # Tipografia baseada em --text-*, --title-*
    ├── shadows.ts           # Sombras baseadas em --shadow-*
    └── index.ts             # Exportações centralizadas
```

## 🎨 Como Funciona

### 1. **Fonte Única da Verdade**
- Todos os valores são definidos como CSS custom properties em `globals.css`
- Os arquivos TypeScript apenas referenciam essas variáveis

### 2. **Exemplo de Uso**

```css
/* globals.css */
:root {
  --primary: 22, 163, 74;
  --spacing-md: 24px;
  --text-md: 16px;
}
```

```typescript
// colors.ts
export const colors = {
  primary: {
    500: 'rgb(var(--primary))',  // Referencia a variável CSS
  }
};

// spacing.ts
export const spacing = {
  md: 'var(--spacing-md)',  // Referencia a variável CSS
};

// typography.ts
export const typography = {
  text: {
    md: 'var(--text-md)',  // Referencia a variável CSS
  }
};
```

### 3. **Vantagens**

- ✅ **Sem duplicação** - Valores definidos apenas uma vez
- ✅ **Consistência** - CSS e TypeScript sempre sincronizados
- ✅ **Tema dinâmico** - Mudanças no CSS refletem automaticamente no TypeScript
- ✅ **Performance** - Usa variáveis CSS nativas
- ✅ **Manutenibilidade** - Mudanças centralizadas no `globals.css`

## 🚀 Uso nos Componentes

```tsx
import { colors, spacing, typography } from '@/tokens';

const MyComponent = () => {
  return (
    <div style={{
      backgroundColor: colors.primary[500],
      padding: spacing.md,
      fontSize: typography.text.md,
    }}>
      Conteúdo
    </div>
  );
};
```

## 🔧 Funções Helper

```tsx
import { getColor, getSpacing, getTextSize } from '@/tokens';

// Obtém cores com escala
const primaryColor = getColor('primary', '500');

// Obtém espaçamento
const mediumSpacing = getSpacing('md');

// Obtém tamanho de texto
const mediumText = getTextSize('md');
```

## 📝 Tipos TypeScript

```tsx
import type { ColorScale, SpacingToken, TextSize } from '@/tokens';

// Tipos seguros para uso em componentes
type ButtonProps = {
  color: ColorScale;
  padding: SpacingToken;
  fontSize: TextSize;
};
```

## 🌙 Tema Escuro

O sistema suporta tema escuro através das variáveis CSS:

```css
/* globals.css */
:root {
  --primary: 22, 163, 74;
}

.dark-theme {
  --primary: 34, 197, 94;
}
```

Os tokens TypeScript automaticamente refletem as mudanças de tema!

## 📚 Próximos Passos

1. **Adicionar novos tokens** - Defina no `globals.css` primeiro
2. **Atualizar TypeScript** - Referencie as variáveis CSS
3. **Testar componentes** - Verifique se as mudanças funcionam
4. **Documentar** - Atualize este README se necessário 