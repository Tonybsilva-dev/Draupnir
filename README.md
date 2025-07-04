# Draupnir Design System

<div align="center">

![Draupnir Logo](public/draupnir-logo.png)

**A modern and accessible design system built with React, TypeScript, and Tailwind CSS**

[![npm version](https://badge.fury.io/js/draupnir-ds.svg)](https://badge.fury.io/js/draupnir-ds)
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)
[![Storybook](https://img.shields.io/badge/Storybook-7.6.15-FF4785?logo=storybook)](https://draupnir-ds.vercel.app)

[Documentation](https://draupnir-ds.vercel.app) • [Components](https://draupnir-ds.vercel.app/?path=/story/docs-introduction--page) • [Tokens](https://draupnir-ds.vercel.app/?path=/story/docs-colors--page)

</div>

---

## 🎯 About the Project

**Draupnir** is a design system inspired by the magical ring from Norse mythology that multiplied itself, symbolizing the reusability and scalability of components. Developed with a focus on accessibility, performance, and developer experience.

### ✨ Key Features

- 🎨 **Design Tokens**: Complete system of colors, typography, spacing, and shadows
- 🧩 **Atomic Design**: Hierarchical organization of components (Atoms, Molecules, Organisms)
- ♿ **Accessibility**: Accessible components with ARIA support and keyboard navigation
- 🌙 **Themes**: Native support for light/dark themes
- 📱 **Responsive**: Components adaptable to different screen sizes
- ⚡ **Performance**: Optimized for performance with Tree Shaking
- 🔧 **TypeScript**: Strong typing throughout the project
- 📚 **Storybook**: Interactive documentation and practical examples

## 🚀 Installation

```bash
npm install draupnir-ds
```

or

```bash
yarn add draupnir-ds
```

## 📖 Basic Usage

```tsx
import { Button, Input, Modal, useTheme } from 'draupnir-ds';

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="p-4">
      <Button onClick={toggleTheme}>
        Toggle Theme: {theme}
      </Button>
      
      <Input.Root>
        <Input.Control placeholder="Type something..." />
      </Input.Root>
    </div>
  );
}
```

## 🏗️ Project Structure

```
src/
├── components/
│   ├── atoms/          # Basic components (Button, Avatar, etc.)
│   ├── molecules/      # Simple combinations (Input, Switch, etc.)
│   ├── organisms/      # Complex components (Modal, Dropdown, etc.)
│   └── templates/      # Layouts and page structures
├── tokens/             # Design tokens (colors, typography, etc.)
├── utils/              # Utilities and helpers
└── hooks/              # Custom hooks
```

## 🎨 Design Tokens

### Colors

```tsx
import { colors } from 'draupnir-ds';

// Primary colors
colors.primary[500]  // Main green
colors.secondary[500] // Secondary green
colors.tertiary[500]  // Yellow
colors.quaternary[500] // Red

// Semantic colors
colors.success[500]   // Success green
colors.error[500]     // Error red
colors.info[500]      // Informative blue
colors.warning[500]   // Warning yellow
```

### Typography

```tsx
import { typography } from 'draupnir-ds';

// Font sizes
typography.fontSize.xs    // 12px
typography.fontSize.sm    // 14px
typography.fontSize.md    // 16px
typography.fontSize.lg    // 18px
typography.fontSize.xl    // 20px
typography.fontSize['2xl'] // 24px
typography.fontSize['4xl'] // 28px

// Titles
typography.fontSize.tmd   // 40px
typography.fontSize.tlg   // 48px
typography.fontSize.txl   // 56px
```

### Spacing

```tsx
import { spacing } from 'draupnir-ds';

spacing.xs    // 16px
spacing.sm    // 20px
spacing.md    // 24px
spacing.lg    // 32px
spacing.xl    // 40px
spacing['2xl'] // 48px
spacing['4xl'] // 56px
```

## 🧩 Components

### Atoms

Basic and fundamental components of the design system.

```tsx
import { Button, Avatar, Badge, Box, Typography } from 'draupnir-ds';

// Button with variants
<Button variant="primary">Primary Button</Button>
<Button variant="outline">Outline Button</Button>
<Button variant="ghost">Ghost Button</Button>

// Avatar with different sizes
<Avatar size="sm" image="/avatar.jpg" />
<Avatar size="md" description="John Smith" />

// Badge for status
<Badge variant="success">Active</Badge>
<Badge variant="error">Inactive</Badge>

// Box for layouts
<Box filledBackground type="primary">
  Box content
</Box>

// Typography
<Typography size="lg" weight="semibold">
  Page title
</Typography>
```

### Molecules

Simple combinations of atoms with specific functionalities.

```tsx
import { Input, Switch, Notice, Loading } from 'draupnir-ds';

// Input with prefix
<Input.Root>
  <Input.Prefix>
    <SearchIcon />
  </Input.Prefix>
  <Input.Control placeholder="Search..." />
</Input.Root>

// Switch with variants
<Switch variant="common" defaultEnable />
<Switch variant="contract" onChange={handleToggle} />

// Notice for messages
<Notice type="success" message="Operation completed successfully!" />
<Notice type="error" message="An error occurred!" />

// Loading
<Loading />
```

### Organisms

Complex components that combine multiple molecules and atoms.

```tsx
import { Modal, Dropdown, Header, TitlePage } from 'draupnir-ds';

// Modal with content
<Modal.Root>
  <Modal.Trigger>
    <Button>Open Modal</Button>
  </Modal.Trigger>
  <Modal.Content>
    <Modal.Header>
      <Modal.Title>Modal Title</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      Modal content here
    </Modal.Body>
  </Modal.Content>
</Modal.Root>

// Dropdown menu
<Dropdown>
  <Dropdown.Trigger asChild>
    <Button>Open Menu</Button>
  </Dropdown.Trigger>
  <Dropdown.Content>
    <Dropdown.Item>Option 1</Dropdown.Item>
    <Dropdown.Item>Option 2</Dropdown.Item>
  </Dropdown.Content>
</Dropdown>

// Header with navigation
<Header />

// Page title
<TitlePage title="Dashboard" description="Welcome to your dashboard" />
``` 