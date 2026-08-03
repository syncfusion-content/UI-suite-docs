---
layout: post
title: Color Customization | Syncfusion Rich Text Editor SDK
description: Learn how to customize colors in Rich Text Editor themes using CSS variables and theme customization
platform: rich-text-editor-sdk
control: Themes
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# Color Customization

This guide explains how to customize theme colors using CSS variables (custom properties). All Syncfusion themes expose a comprehensive set of color variables that you can override to create your own color scheme.

## Overview

All Syncfusion themes use CSS custom properties (CSS variables) for colors. Instead of hardcoding colors throughout the CSS, variables are used, allowing you to customize theme colors by simply overriding these variables.

## CSS Variables Architecture

Each theme provides variables for:
- **Primary colors** - Main brand color and variants
- **Secondary colors** - Supporting colors
- **Semantic colors** - Success, warning, error, info
- **Surface colors** - Background and text colors
- **State colors** - Hover, active, disabled states

## Basic Color Customization

### Override Primary Color

```css
:root {
    --color-sf-primary: #your-primary-color;
}
```

**Example - Change primary color to blue**:

```css
:root {
    --color-sf-primary: #0066cc;
}
```

### Override Multiple Colors

```css
:root {
    --color-sf-primary: #0066cc;
    --color-sf-secondary: #00b3e6;
    --color-sf-success: #28a745;
    --color-sf-warning: #ffc107;
    --color-sf-danger: #dc3545;
}
```

## Material 3 Theme Colors

### Light Mode Variables

| Variable | Light Mode | Purpose |
|----------|-----------|---------|
| `--color-sf-primary` | rgb(103, 80, 164) | Main brand color |
| `--color-sf-primary-light` | rgb(208, 188, 255) | Light variant for interactions |
| `--color-sf-primary-dark` | rgb(79, 55, 139) | Dark variant for depth |
| `--color-sf-primary-container` | rgb(234, 221, 255) | Container background |
| `--color-sf-success` | rgb(32, 81, 7) | Success state |
| `--color-sf-warning` | rgb(145, 76, 0) | Warning state |
| `--color-sf-error` | rgb(179, 38, 30) | Error state |
| `--color-sf-info` | rgb(1, 87, 155) | Info state |
| `--color-sf-surface` | rgb(255, 255, 255) | Background surface |
| `--color-sf-on-surface` | rgb(28, 27, 31) | Text on surface |

### Dark Mode Variables

```css
@media (prefers-color-scheme: dark) {
    :root {
        --color-sf-primary: rgb(208, 188, 255);
        --color-sf-surface: rgb(28, 27, 31);
        --color-sf-on-surface: rgb(230, 225, 229);
        /* ... other dark mode variables ... */
    }
}
```

## Fluent 2 Theme Colors

### Common Fluent 2 Variables

```css
:root {
    /* Primary colors */
    --color-sf-primary: #0f6cbd;           /* Light mode */
    --color-sf-primary: #115ea3;           /* Dark mode */
    
    /* Status colors */
    --color-sf-success: #0e700e;
    --color-sf-warning: #bc4b09;
    --color-sf-danger: #d13438;
    --color-sf-info: #008aa9;
    
    /* Surface colors */
    --color-sf-surface: #ffffff;           /* Light mode */
    --color-sf-surface: #1f1f1f;           /* Dark mode */
}
```

## Bootstrap 5.3 Theme Colors

### Bootstrap 5.3 Variables

```css
:root {
    /* Primary */
    --color-sf-primary: rgba(13, 110, 253, 1);
    --color-sf-primary-light: #86b7fe;
    --color-sf-primary-dark: #3367d1;
    
    /* Status colors */
    --color-sf-success: rgba(25, 135, 84, 1);
    --color-sf-warning: rgba(255, 193, 7, 1);
    --color-sf-danger: rgba(220, 53, 69, 1);
    --color-sf-info: rgba(13, 202, 240, 1);
}
```

## Tailwind 3.4 Theme Colors

### Tailwind 3.4 Variables

```css
:root {
    /* Primary */
    --color-sf-primary: rgba(79, 70, 229);
    --color-sf-primary-dark: #4338ca;
    --color-sf-primary-darker: #3730a3;
    
    /* Status colors */
    --color-sf-success: #15803d;
    --color-sf-warning: #c2410c;
    --color-sf-danger: #dc2626;
    --color-sf-info: #0e7490;
}
```

## Create Brand-Specific Colors

### Example: Create Blue Brand Theme

```css
:root {
    /* Primary blue */
    --color-sf-primary: #0066cc;
    --color-sf-primary-light: #4d94ff;
    --color-sf-primary-dark: #004d99;
    
    /* Supporting colors */
    --color-sf-success: #00aa00;
    --color-sf-warning: #ff9900;
    --color-sf-danger: #cc0000;
    
    /* Surface colors */
    --color-sf-surface: #ffffff;
    --color-sf-on-surface: #333333;
}
```

### Example: Create Green Brand Theme

```css
:root {
    /* Primary green */
    --color-sf-primary: #28a745;
    --color-sf-primary-light: #66bb6a;
    --color-sf-primary-dark: #1e7e34;
    
    /* Status colors */
    --color-sf-success: #4caf50;
    --color-sf-warning: #ff9800;
    --color-sf-danger: #f44336;
}
```

## Semantic Color Variables

### Use Semantic Colors

```css
:root {
    /* Semantic colors for status */
    --color-sf-success: #22c55e;        /* Green - success/positive */
    --color-sf-success-light: #dcfce7;  /* Light green background */
    --color-sf-success-dark: #166534;   /* Dark green text */
    
    --color-sf-warning: #f97316;        /* Orange - warning/caution */
    --color-sf-warning-light: #ffedd5;  /* Light orange background */
    --color-sf-warning-dark: #9a3412;   /* Dark orange text */
    
    --color-sf-danger: #f87171;         /* Red - error/destructive */
    --color-sf-danger-light: #fee2e2;   /* Light red background */
    --color-sf-danger-dark: #b91c1c;    /* Dark red text */
    
    --color-sf-info: #38bdf8;           /* Cyan - info/neutral */
    --color-sf-info-light: #cffafe;     /* Light cyan background */
    --color-sf-info-dark: #155e75;      /* Dark cyan text */
}
```

## Dark Mode Color Variables

### Override Dark Mode Colors

```css
.e-dark {
    /* Dark mode overrides */
    --color-sf-primary: #4f46e5;
    --color-sf-surface: #1f2937;
    --color-sf-on-surface: #f3f4f6;
    --color-sf-on-background: #e5e7eb;
}
```

### Automatic Dark Mode Detection

```css
@media (prefers-color-scheme: dark) {
    :root {
        /* Colors automatically switch to dark variants */
        --color-sf-primary: #4f46e5;
        --color-sf-surface: #1f2937;
        --color-sf-on-surface: #f3f4f6;
    }
}
```

## Surface and Text Colors

### Background Colors

```css
:root {
    /* Main surface */
    --color-sf-surface: #ffffff;
    
    /* Surface variants */
    --color-sf-surface-variant: #f5f5f5;
    --color-sf-surface-light: #fafafa;
}
```

### Text Colors

```css
:root {
    /* Text on surface */
    --color-sf-on-surface: #212121;
    --color-sf-on-surface-variant: #757575;
    
    /* Text colors by hierarchy */
    --color-sf-text-primary: #212121;      /* 87% opacity */
    --color-sf-text-secondary: #616161;    /* 60% opacity */
    --color-sf-text-tertiary: #9e9e9e;     /* 38% opacity */
    --color-sf-text-disabled: #bdbdbd;     /* 38% opacity */
}
```

## Container and Component Colors

### Button Colors

```css
:root {
    /* Button background */
    --color-sf-button-bg: var(--color-sf-primary);
    --color-sf-button-text: #ffffff;
    
    /* Button hover state */
    --color-sf-button-hover: var(--color-sf-primary-dark);
    
    /* Button active state */
    --color-sf-button-active: var(--color-sf-primary-darker);
    
    /* Button disabled state */
    --color-sf-button-disabled-bg: #e0e0e0;
    --color-sf-button-disabled-text: #9e9e9e;
}
```

### Input and Editor Colors

```css
:root {
    /* Input border */
    --color-sf-input-border: #bdbdbd;
    --color-sf-input-border-focus: var(--color-sf-primary);
    
    /* Input background */
    --color-sf-input-bg: #ffffff;
    --color-sf-input-text: #212121;
    
    /* Input placeholder */
    --color-sf-input-placeholder: #9e9e9e;
}
```

## State-Based Colors

### Interactive States

```css
:root {
    /* Hover state */
    --color-sf-hover-bg: rgba(0, 0, 0, 0.04);
    
    /* Focus state */
    --color-sf-focus-color: var(--color-sf-primary);
    
    /* Active state */
    --color-sf-active-bg: rgba(0, 0, 0, 0.08);
    
    /* Disabled state */
    --color-sf-disabled-bg: #f5f5f5;
    --color-sf-disabled-text: #9e9e9e;
}
```

## Accessibility-Aware Colors

### High Contrast Colors

```css
:root {
    /* Ensure minimum 4.5:1 contrast ratio for text */
    --color-sf-text-primary: #000000;      /* 21:1 on white */
    --color-sf-text-on-primary: #ffffff;   /* 21:1 on dark */
    
    /* Focus indicator */
    --color-sf-focus-ring: #0000ff;        /* High contrast */
}
```

### Color Blindness Considerations

```css
:root {
    /* Avoid red-green only combinations */
    /* Use red (#ff0000) and blue (#0000ff) together */
    --color-sf-danger: #e60000;        /* Red */
    --color-sf-success: #0066cc;       /* Blue */
    --color-sf-warning: #ffc200;       /* Yellow */
}
```

## Using Color Variables in Custom CSS

### Apply Theme Colors to Custom Elements

```css
.custom-element {
    background-color: var(--color-sf-primary);
    color: var(--color-sf-on-surface);
    border-color: var(--color-sf-primary-light);
}

.custom-element:hover {
    background-color: var(--color-sf-primary-dark);
}
```

### Use in Rich Text Editor Customization

```css
.e-richtexteditor .e-rte-placeholder {
    color: var(--color-sf-on-surface-variant);
}

.e-richtexteditor .e-rte-container:focus-within {
    border-color: var(--color-sf-primary);
}

.e-richtexteditor .e-rte-toolbar {
    background-color: var(--color-sf-surface-variant);
}
```

## Dynamic Color Switching

### JavaScript-Based Color Switching

```javascript
function setCustomColors(colorScheme) {
    const root = document.documentElement;
    
    switch(colorScheme) {
        case 'blue':
            root.style.setProperty('--color-sf-primary', '#0066cc');
            root.style.setProperty('--color-sf-success', '#00aa00');
            break;
        case 'green':
            root.style.setProperty('--color-sf-primary', '#28a745');
            root.style.setProperty('--color-sf-success', '#4caf50');
            break;
        case 'purple':
            root.style.setProperty('--color-sf-primary', '#6f42c1');
            root.style.setProperty('--color-sf-success', '#6f42c1');
            break;
    }
}

// Usage
setCustomColors('blue');
```

### Get Current Color Value

```javascript
function getCurrentColor(colorVar) {
    return getComputedStyle(document.documentElement)
        .getPropertyValue(colorVar)
        .trim();
}

// Usage
const primaryColor = getCurrentColor('--color-sf-primary');
console.log(primaryColor); // #0066cc
```

## Color Contrast Checker

### Verify Color Contrast

```javascript
function getContrastRatio(foreground, background) {
    // Convert hex to RGB
    const fgColor = hexToRgb(foreground);
    const bgColor = hexToRgb(background);
    
    // Calculate relative luminance
    const fgLum = getRelativeLuminance(fgColor);
    const bgLum = getRelativeLuminance(bgColor);
    
    // Calculate contrast ratio
    const lighter = Math.max(fgLum, bgLum);
    const darker = Math.min(fgLum, bgLum);
    
    return (lighter + 0.05) / (darker + 0.05);
}

// Check if colors meet WCAG AA standard
const contrastRatio = getContrastRatio('#0066cc', '#ffffff');
if (contrastRatio >= 4.5) {
    console.log('✅ WCAG AA compliant');
} else {
    console.log('❌ Does not meet WCAG AA standard');
}
```

## Common Color Customizations

### Brand Color Customization

```css
:root {
    /* Replace all primary colors with your brand color */
    --color-sf-primary: #your-brand-color;
    --color-sf-primary-light: #light-variant;
    --color-sf-primary-dark: #dark-variant;
}
```

### Green Theme

```css
:root {
    --color-sf-primary: #2e7d32;
    --color-sf-secondary: #43a047;
    --color-sf-success: #4caf50;
}
```

### Red Theme

```css
:root {
    --color-sf-primary: #c62828;
    --color-sf-secondary: #e53935;
    --color-sf-danger: #f44336;
}
```

### Orange Theme

```css
:root {
    --color-sf-primary: #e65100;
    --color-sf-secondary: #ff6f00;
    --color-sf-warning: #ff9800;
}
```

## Related Topics

- [Available Themes](available-themes.md)
- [CSS Customization](css-customization.md)
- [Dark Mode](dark-mode.md)
- [Theme Studio](theme-studio.md)

## See Also

- [Getting Started with Themes](getting-started.md)
- [Performance Optimization](performance-optimization.md)
- [Troubleshooting](troubleshooting.md)

## Additional Resources

- **Theme Studio**: https://ej2.syncfusion.com/themestudio
- **CSS Variables Specification**: https://www.w3.org/TR/css-variables/
- **WCAG Color Contrast**: https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum
