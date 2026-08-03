---
layout: post
title: Getting Started with Themes | Syncfusion Rich Text Editor SDK
description: Learn how to get started with themes in the Rich Text Editor SDK
platform: rich-text-editor-sdk
control: Themes
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# Getting Started with Themes

This guide will help you get started with theming the Syncfusion Rich Text Editor. By the end of this guide, you'll understand how to select, install, and apply themes to your Rich Text Editor.

## Overview

Syncfusion Rich Text Editor uses a unified theming system that works consistently across all supported platforms:
- Angular
- React
- Vue
- JavaScript
- ASP.NET Core
- ASP.NET MVC
- Blazor

## Step 1: Choose a Theme

First, decide which theme best fits your project needs. Here's a quick guide:

### Modern Themes (Recommended)

- **Material 3** - Best for modern applications with vibrant colors
- **Fluent 2** - Best for enterprise applications with professional appearance
- **Bootstrap 5.3** - Best for Bootstrap-based projects
- **Tailwind 3.4** - Best for Tailwind CSS projects

### See [Available Themes](available-themes.md) for complete list and comparison.

## Step 2: Install Theme Package

Theme packages are available on npm. Install your chosen theme package:

### Install Material 3 Theme

```bash
npm install @syncfusion/ej2-material3-theme --save
```

### Install Dark Theme (Optional)

```bash
npm install @syncfusion/ej2-material3-dark-theme --save
```

### Install Other Themes

```bash
# Fluent 2
npm install @syncfusion/ej2-fluent2-theme --save

# Bootstrap 5.3
npm install @syncfusion/ej2-bootstrap5.3-theme --save

# Tailwind 3.4
npm install @syncfusion/ej2-tailwind3-theme --save
```

## Step 3: Import Theme CSS

Import the theme CSS in your application. The location depends on your platform:

### For JavaScript/TypeScript Projects

Import in your main JavaScript/TypeScript file:

```javascript
import '@syncfusion/ej2-material3-theme/styles/material3.css';
import '@syncfusion/ej2-material3-dark-theme/styles/material3-dark.css'; // Optional
```

### For CSS Projects

Link the theme CSS in your HTML:

```html
<head>
    <link rel="stylesheet" href="node_modules/@syncfusion/ej2-material3-theme/styles/material3.css">
    <link rel="stylesheet" href="node_modules/@syncfusion/ej2-material3-dark-theme/styles/material3-dark.css">
</head>
```

### For SCSS Projects

Import in your main SCSS file:

```scss
@import "@syncfusion/ej2-material3-theme/styles/material3.scss";
@import "@syncfusion/ej2-material3-dark-theme/styles/material3-dark.scss";
```

### For CSS-in-JS (Angular, React, Vue)

#### React Example

```javascript
import '@syncfusion/ej2-material3-theme/styles/material3.css';

function App() {
    return (
        <RichTextEditorComponent />
    );
}
```

#### Angular Example

In `styles.css`:
```css
@import "@syncfusion/ej2-material3-theme/styles/material3.css";
```

Or in `angular.json`:
```json
"styles": [
  "node_modules/@syncfusion/ej2-material3-theme/styles/material3.css"
]
```

#### Vue Example

In `main.js`:
```javascript
import '@syncfusion/ej2-material3-theme/styles/material3.css';
```

### For ASP.NET Projects

Add link to CSS file in your layout/master page:

```html
<head>
    <link rel="stylesheet" href="~/lib/ej2-material3-theme/styles/material3.css">
</head>
```

## Step 4: Verify Theme is Applied

Create a simple Rich Text Editor and verify the theme is applied:

### React Example

```jsx
import React from 'react';
import { RichTextEditorComponent, Inject, HtmlEditor, Toolbar } from '@syncfusion/ej2-react-richtexteditor';
import '@syncfusion/ej2-material3-theme/styles/material3.css';

function App() {
    return (
        <RichTextEditorComponent value="Hello World">
            <Inject services={[HtmlEditor, Toolbar]} />
        </RichTextEditorComponent>
    );
}

export default App;
```

### Angular Example

```typescript
import { Component } from '@angular/core';
import { RichTextEditorModule } from '@syncfusion/ej2-angular-richtexteditor';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RichTextEditorModule],
  template: `<ejs-richtexteditor value="Hello World"></ejs-richtexteditor>`,
  styles: [`@import "@syncfusion/ej2-material3-theme/styles/material3.css";`]
})
export class AppComponent {}
```

### Vue Example

```vue
<template>
  <ejs-richtexteditor value="Hello World"></ejs-richtexteditor>
</template>

<script setup>
import { RichTextEditorComponent as EjsRichtexteditor } from '@syncfusion/ej2-vue-richtexteditor';
import '@syncfusion/ej2-material3-theme/styles/material3.css';
</script>
```

### JavaScript Example

```html
<div id="editor"></div>

<script>
import '@syncfusion/ej2-material3-theme/styles/material3.css';
import { RichTextEditor, Toolbar, HtmlEditor } from '@syncfusion/ej2-richtexteditor';

let rte = new RichTextEditor({
    value: 'Hello World'
});
rte.appendTo('#editor');
</script>
```

## Step 5: Apply Dark Mode (Optional)

If you want to enable dark mode:

### Method 1: Add e-dark Class

```html
<div class="e-dark">
    <ejs-richtexteditor value="Hello World"></ejs-richtexteditor>
</div>
```

### Method 2: Toggle with JavaScript

```javascript
function toggleDarkMode() {
    document.body.classList.toggle('e-dark');
}

// Call the function to enable dark mode
toggleDarkMode();
```

### Method 3: CSS Media Query

```css
/* Automatically enable dark mode based on system preference */
@media (prefers-color-scheme: dark) {
    body {
        color-scheme: dark;
        /* Manually add e-dark class via JavaScript */
    }
}
```

## Step 6: Customize Theme (Optional)

### Override Colors with CSS Variables

```css
:root {
    --color-sf-primary: #your-color-code;
    --color-sf-secondary: #your-color-code;
    --color-sf-success: #your-color-code;
}
```

### Customize CSS Classes

```css
.e-richtexteditor .e-rte-placeholder {
    color: #custom-color;
    font-family: 'Your Font';
}

.e-richtexteditor .e-rte-toolbar {
    background-color: #custom-bg;
}
```

See [CSS Customization](css-customization.md) for more options.

## Common Tasks

### Switch Between Themes

```javascript
function switchTheme(themeName) {
    const link = document.getElementById('theme-link');
    link.href = `node_modules/@syncfusion/ej2-${themeName}-theme/styles/${themeName}.css`;
}

// Usage
switchTheme('fluent2');
switchTheme('bootstrap5.3');
switchTheme('tailwind3');
```

### Use Component-Specific CSS (Optional)

If you only need Rich Text Editor styling:

```bash
npm install @syncfusion/ej2-material3-theme --save
```

Import component-specific CSS:

```css
@import "@syncfusion/ej2-material3-theme/styles/rich-text-editor/index.css";
```

### Use Lite Version for Production

Lite versions include only normal size mode, reducing file size by ~25%:

```css
/* Use lite version */
@import "@syncfusion/ej2-material3-theme/styles/material3-lite.css";
```

### Determine Current Theme

```javascript
function getCurrentTheme() {
    const link = document.querySelector('link[href*="material3"]');
    if (link) return 'material3';
    
    const link2 = document.querySelector('link[href*="fluent2"]');
    if (link2) return 'fluent2';
    
    return 'default';
}

console.log(getCurrentTheme());
```

## Troubleshooting

### Theme Not Applied

**Issue**: Styles are not appearing on the Rich Text Editor.

**Solutions**:
1. Verify npm package is installed: `npm list @syncfusion/ej2-material3-theme`
2. Check browser console for CSS loading errors (F12 → Console)
3. Ensure CSS import is before Rich Text Editor component creation
4. Clear browser cache (Ctrl+Shift+Delete)

### Wrong Theme Colors

**Issue**: Colors don't match the selected theme.

**Solutions**:
1. Check if correct theme package is imported
2. Verify no conflicting CSS is overriding theme styles
3. Ensure only one theme is imported (not multiple)
4. Check for custom CSS that overrides theme colors

### Dark Mode Not Working

**Issue**: Dark mode doesn't apply when adding `.e-dark` class.

**Solutions**:
1. Install dark theme package: `npm install @syncfusion/ej2-<theme>-dark-theme`
2. Import dark theme CSS
3. Ensure `.e-dark` class is on parent container
4. Reload page after applying class

### Bundle Size Too Large

**Issue**: CSS file size is too large.

**Solutions**:
1. Use lite version: `material3-lite.css` instead of `material3.css`
2. Use component-specific CSS: `rich-text-editor/index.css`
3. Enable CSS minification in build process
4. Use only one theme, not multiple

## Performance Tips

1. **Load themes synchronously** - Place theme CSS link in `<head>`
2. **Use critical CSS** - Inline theme CSS for above-the-fold content
3. **Lazy load dark theme** - Load only when user enables dark mode
4. **Use CDN** - Consider using CDN for faster CSS delivery
5. **Minimize CSS** - Use minified `.min.css` files in production

## Next Steps

Now that you have the theme set up:

1. Explore [Available Themes](available-themes.md) to see all options
2. Learn [CSS Customization](css-customization.md) to customize appearance
3. Check [Color Customization](color-customization.md) to adjust colors
4. Review [Dark Mode](dark-mode.md) for advanced dark mode setup
5. Use [Theme Studio](theme-studio.md) to create custom themes

## Related Topics

- [Available Themes](available-themes.md)
- [CSS Customization](css-customization.md)
- [Color Customization](color-customization.md)
- [Dark Mode](dark-mode.md)
- [Theme Studio](theme-studio.md)
- [Performance Optimization](performance-optimization.md)
- [Troubleshooting](troubleshooting.md)

## FAQ

**Q: Can I use multiple themes?**
A: No, load only one theme at a time. To switch themes, remove the old theme CSS and import the new one.

**Q: Are themes free?**
A: Yes, all built-in themes are included free with Syncfusion packages.

**Q: Can I modify theme colors?**
A: Yes, use CSS variables to override colors without changing the theme file.

**Q: Which theme should I use?**
A: Material 3 or Fluent 2 for modern applications. See theme comparison in [Available Themes](available-themes.md).

**Q: Do I need to configure themes in code?**
A: No, just import the CSS and the theme is automatically applied.

**Q: Can I use themes with other Syncfusion components?**
A: Yes, the same theme applies to all Syncfusion components in your project.
