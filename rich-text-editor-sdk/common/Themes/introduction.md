---
layout: post
title: Themes and Appearance | Syncfusion Rich Text Editor SDK
description: Comprehensive guide to theming and customizing the appearance of the Rich Text Editor across all supported platforms
platform: rich-text-editor-sdk
control: Themes
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# Themes and Appearance - Rich Text Editor SDK

The Syncfusion Rich Text Editor provides a comprehensive theming system that enables consistent styling across all supported platforms (Angular, React, Vue, JavaScript, ASP.NET Core, ASP.NET MVC, and Blazor).

## Overview

The Rich Text Editor leverages Syncfusion's unified theme framework to deliver visual consistency and customization capabilities. Whether you're building with modern JavaScript frameworks or traditional server-side platforms, the theming approach remains consistent at the SDK level.

## Key Features

- **Pre-built Themes**: 19+ professional themes including Material, Fluent, Bootstrap, and Tailwind
- **Dark Mode Support**: All themes include dark variants for better accessibility
- **Performance Optimization**: Lite theme files for reduced bundle sizes
- **CSS Customization**: Comprehensive CSS classes for fine-tuned styling
- **Theme Variables**: CSS custom properties (variables) for easy color customization
- **Theme Studio**: Visual tool to create custom themes without coding
- **Responsive Design**: Themes include normal and bigger size modes

## Documentation Structure

This documentation covers theme-related topics applicable to all Rich Text Editor implementations:

### [Getting Started](getting-started.md)
Learn how to include themes in your Rich Text Editor project and understand the available theme packages from npm.

### [Available Themes](available-themes.md)
Comprehensive catalog of all pre-built themes including Material 3, Fluent 2, Bootstrap 5.3, Tailwind 3.4, and more. Compare theme features and choose the right one for your project.

### [CSS Customization](css-customization.md)
Detailed CSS selectors and classes for customizing specific Rich Text Editor components including placeholder, content area, toolbar, and character count.

### [Color Customization](color-customization.md)
Learn to customize theme colors using CSS variables. Reference tables for all theme color values across light and dark modes.

### [Dark Mode](dark-mode.md)
Guidance on implementing dark mode in your Rich Text Editor application using theme variants and the `.e-dark` class.

### [Theme Studio](theme-studio.md)
Step-by-step guide to using Syncfusion Theme Studio for creating custom themes visually with real-time preview and export capabilities.

### [Performance Optimization](performance-optimization.md)
Best practices for optimizing theme loading, including lite theme files and selective component styling.

### [Troubleshooting](troubleshooting.md)
Common issues and solutions for theme implementation, CSS conflicts, and appearance problems.

## Theme Architecture

### Theme Packages (NPM)

All themes are available as npm packages with consistent naming:

```
@syncfusion/ej2-<theme-name>-theme
@syncfusion/ej2-<theme-name>-dark-theme (for dark variants)
```

### CSS File Structure

Each theme package includes:
- **Combined CSS** - All components in one file
- **Component-specific CSS** - Individual component styling
- **Lite variants** - Optimized files for production
- **SCSS source** - For advanced customization

### Theme Variables

All themes expose CSS custom properties (CSS variables) for colors, enabling dynamic customization without recompiling CSS.

## Supported Platforms

| Platform | Theme Support | Version |
|----------|---------------|---------|
| Angular | ✅ Full | All versions |
| React | ✅ Full | All versions |
| Vue | ✅ Full | All versions |
| JavaScript | ✅ Full | All versions |
| ASP.NET Core | ✅ Full | All versions |
| ASP.NET MVC | ✅ Full | All versions |
| Blazor | ✅ Full | All versions |

## Quick Start

### 1. Install Theme Package

```bash
npm install @syncfusion/ej2-material3-theme --save
```

### 2. Import Theme CSS

```css
@import "@syncfusion/ej2-material3-theme/styles/material3.css";
```

### 3. Apply to Rich Text Editor

The Rich Text Editor automatically inherits the imported theme. No additional configuration needed.

### 4. Customize CSS (Optional)

```css
.e-richtexteditor .e-rte-placeholder {
    color: your-custom-color;
    font-family: your-custom-font;
}
```

## Available Themes at a Glance

### Modern Themes (Recommended)
- **Material 3** - Google's Material Design 3
- **Fluent 2** - Microsoft's Fluent 2 Design
- **Bootstrap 5.3** - Latest Bootstrap framework
- **Tailwind 3.4** - Tailwind CSS framework

### Legacy Themes
- Fluent (v1)
- Bootstrap 5
- Bootstrap 4
- Material (v2)
- Tailwind CSS
- Fabric
- High Contrast

## Dark Mode Implementation

All modern themes include dark variants:

```html
<!-- Apply dark mode with e-dark class -->
<div class="e-dark">
    <ejs-richtexteditor></ejs-richtexteditor>
</div>
```

Import dark theme CSS:
```css
@import "@syncfusion/ej2-material3-dark-theme/styles/material3-dark.css";
```

## Common Customization Points

### 1. Placeholder Text
Customize the placeholder color and font styling.

### 2. Content Area
Modify font properties, background, and text color of the editor content.

### 3. Toolbar
Change toolbar icon colors, button styling, and hover effects.

### 4. Character Count
Style the character count display.

### 5. Container Border
Customize the editor container borders and borders.

## CSS Selectors Reference

### Main Classes
- `.e-richtexteditor` - Main container
- `.e-rte-content` - Content area wrapper
- `.e-content` - Actual editable content
- `.e-rte-toolbar` - Toolbar container
- `.e-rte-placeholder` - Placeholder text
- `.e-rte-character-count` - Character count display

### State Classes
- `.e-dark` - Dark mode
- `.e-active` - Active state
- `.e-hover` - Hover state
- `.e-disabled` - Disabled state

## Theme Variables

All themes expose CSS custom properties:

```css
--color-sf-primary          /* Primary color */
--color-sf-primary-light    /* Light variant */
--color-sf-success          /* Success color */
--color-sf-warning          /* Warning color */
--color-sf-danger           /* Error/Danger color */
--color-sf-surface          /* Background color */
```

## Best Practices

1. **Choose Modern Themes** - Use Material 3, Fluent 2, Bootstrap 5.3, or Tailwind 3.4
2. **Use CSS Variables** - Leverage CSS custom properties for dynamic customization
3. **Test Dark Mode** - Ensure your customizations work in both light and dark modes
4. **Optimize Bundle** - Use lite theme files when bigger size mode isn't needed
5. **Maintain Consistency** - Use same theme across all Syncfusion components
6. **Accessibility** - Ensure sufficient color contrast in both modes

## Performance Tips

- Use component-specific CSS for smaller bundle sizes
- Load lite theme files by default
- Lazy load dark theme CSS when needed
- Combine multiple component themes efficiently

## Getting Help

- **Documentation**: Refer to individual topic pages
- **Theme Studio**: https://ej2.syncfusion.com/themestudio
- **Samples**: Platform-specific documentation with code examples
- **Support**: Syncfusion support for enterprise customers

## Related Topics

- [Rich Text Editor Getting Started](https://ej2.syncfusion.com/documentation/rich-text-editor/getting-started)
- [Syncfusion Components Theming](https://ej2.syncfusion.com/documentation/introduction)
- [Theme Studio Documentation](theme-studio.md)

## What's Next?

Start with [Getting Started](getting-started.md) to learn how to implement themes in your Rich Text Editor project.
