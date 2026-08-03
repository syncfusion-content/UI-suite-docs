---
layout: post
title: Troubleshooting | Syncfusion Rich Text Editor SDK
description: Troubleshoot common issues with themes and appearance customization in the Rich Text Editor
platform: rich-text-editor-sdk
control: Themes
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# Troubleshooting

This guide helps you troubleshoot common theme and appearance issues in the Syncfusion Rich Text Editor.

## Common Issues and Solutions

### Theme Not Applied

#### Issue
The Rich Text Editor appears without theme styling, showing default browser styles.

#### Diagnosis

1. **Check browser console** (F12 → Console):
   - Look for 404 or CORS errors
   - Note any CSS load warnings

2. **Verify CSS import order**:
   - Theme CSS must be imported before Rich Text Editor
   - Check DevTools → Elements → Styles panel

3. **Use Network tab**:
   - DevTools → Network tab
   - Filter by ".css"
   - Check if theme CSS files show 200 status

#### Solutions

**Solution 1: Verify Theme Package Installation**

```bash
# Check if theme package is installed
npm list @syncfusion/ej2-material3-theme

# If missing, reinstall
npm install @syncfusion/ej2-material3-theme --save
```

**Solution 2: Check CSS Import Path**

```javascript
/* ❌ Wrong path */
import '@syncfusion/ej2-material-theme/styles/material.css';

/* ✅ Correct path */
import '@syncfusion/ej2-material3-theme/styles/material3.css';
```

**Solution 3: Import Before Component**

```javascript
// ✅ Correct order
import '@syncfusion/ej2-material3-theme/styles/material3.css';
import { RichTextEditorComponent } from '@syncfusion/ej2-react-richtexteditor';

// ❌ Wrong order
import { RichTextEditorComponent } from '@syncfusion/ej2-react-richtexteditor';
import '@syncfusion/ej2-material3-theme/styles/material3.css';
```

**Solution 4: Clear Browser Cache**

```bash
# Hard refresh browser
Ctrl+Shift+Delete (Windows/Linux)
Cmd+Shift+Delete (Mac)

# Or in DevTools
DevTools → Network → Check "Disable cache"
```

**Solution 5: Check Link HTML Path**

```html
<!-- ❌ Wrong path -->
<link rel="stylesheet" href="ej2-material3-theme/styles/material3.css">

<!-- ✅ Correct path -->
<link rel="stylesheet" href="node_modules/@syncfusion/ej2-material3-theme/styles/material3.css">

<!-- ✅ Correct with CDN -->
<link rel="stylesheet" href="https://cdn.syncfusion.com/ej2/material3/material3.css">
```

---

### Wrong Theme Colors

#### Issue
Theme colors don't match the selected theme or appear incorrect.

#### Diagnosis

1. **Identify which theme is loaded**:
   - DevTools → Elements → Styles panel
   - Search for `--color-sf-primary`
   - Check current value

2. **Verify no CSS conflicts**:
   - Check for other CSS files overriding colors
   - Look for `!important` declarations

#### Solutions

**Solution 1: Verify Correct Theme Imported**

```javascript
/* Check which theme is imported */
const links = document.querySelectorAll('link[rel="stylesheet"]');
links.forEach(link => {
    console.log(link.href);
    if (link.href.includes('theme')) {
        console.log('✅ Theme found:', link.href);
    }
});
```

**Solution 2: Remove Conflicting CSS**

```css
/* ❌ Conflicting CSS with !important */
.e-richtexteditor .e-rte-toolbar {
    background-color: red !important;
}

/* ✅ Remove !important or be more specific */
.e-richtexteditor .e-rte-toolbar {
    background-color: var(--color-sf-surface);
}
```

**Solution 3: Use CSS Variables**

```css
/* ❌ Hardcoded colors won't follow theme */
.e-richtexteditor {
    background-color: white;
}

/* ✅ Use CSS variables */
.e-richtexteditor {
    background-color: var(--color-sf-surface);
}
```

**Solution 4: Check Load Order**

```css
/* Ensure theme CSS loads before custom CSS */
/* In HTML head */
<link rel="stylesheet" href="theme.css">      <!-- First -->
<link rel="stylesheet" href="custom.css">     <!-- Second -->
```

---

### Dark Mode Not Working

#### Issue
Adding `.e-dark` class doesn't apply dark mode styles.

#### Diagnosis

1. **Verify dark theme CSS is imported**:
   ```bash
   npm list @syncfusion/ej2-material3-dark-theme
   ```

2. **Check if .e-dark class is applied**:
   ```javascript
   console.log(document.body.classList.contains('e-dark'));
   ```

3. **Verify styles in DevTools**:
   - Elements → Select element → Search for `.e-dark` styles

#### Solutions

**Solution 1: Install Dark Theme Package**

```bash
npm install @syncfusion/ej2-material3-dark-theme --save
```

**Solution 2: Import Dark Theme CSS**

```javascript
// React/TypeScript
import '@syncfusion/ej2-material3-theme/styles/material3.css';
import '@syncfusion/ej2-material3-dark-theme/styles/material3-dark.css';

// Or in HTML
<link rel="stylesheet" href="node_modules/@syncfusion/ej2-material3-theme/styles/material3.css">
<link rel="stylesheet" href="node_modules/@syncfusion/ej2-material3-dark-theme/styles/material3-dark.css">
```

**Solution 3: Apply .e-dark Class to Container**

```html
<!-- Apply to parent container -->
<div class="e-dark">
    <ejs-richtexteditor></ejs-richtexteditor>
</div>

<!-- Or to body -->
<body class="e-dark">
    <ejs-richtexteditor></ejs-richtexteditor>
</body>
```

**Solution 4: Enable with JavaScript**

```javascript
// Check if class is properly added
function enableDarkMode() {
    const isDarkAdded = document.body.classList.add('e-dark');
    console.log('Dark mode enabled:', document.body.classList.contains('e-dark'));
}

// Verify in console
enableDarkMode();
console.log(getComputedStyle(document.body).getPropertyValue('--color-sf-surface'));
```

---

### CSS Conflicts with Other Frameworks

#### Issue
Theme styles conflict with Bootstrap, Tailwind, or other CSS frameworks.

#### Diagnosis

1. **Identify conflict source**:
   - DevTools → Elements → Styles panel
   - Check which CSS rule is active (highlighted in blue)

2. **Check CSS specificity**:
   - `.e-richtexteditor` (1 element)
   - `body .wrapper .e-richtexteditor` (3 elements - higher specificity)

#### Solutions

**Solution 1: Increase CSS Specificity**

```css
/* ❌ Low specificity - may be overridden */
.e-richtexteditor .e-rte-content {
    color: black;
}

/* ✅ Higher specificity */
body .main-container .e-richtexteditor .e-rte-content {
    color: black;
}
```

**Solution 2: Isolate Theme CSS**

```html
<!-- Use shadow DOM or CSS scope -->
<div class="rte-wrapper">
    <ejs-richtexteditor></ejs-richtexteditor>
</div>

<style>
    .rte-wrapper {
        all: revert; /* Reset inherited styles */
    }
</style>
```

**Solution 3: Use CSS Module or Namespace**

```css
/* Namespace to avoid conflicts */
.ej2-theme .e-richtexteditor {
    /* Specific styles */
}
```

**Solution 4: Check Load Order**

Ensure theme CSS loads after reset CSS but before custom CSS:

```html
<link rel="stylesheet" href="reset.css">           <!-- First -->
<link rel="stylesheet" href="theme.css">           <!-- Second -->
<link rel="stylesheet" href="custom-styles.css">   <!-- Last -->
```

---

### Flash of Unstyled Content (FOUC)

#### Issue
Theme styles briefly don't appear on page load, then suddenly apply.

#### Diagnosis

1. **Reload page and observe initial load**
2. **Check CSS load in Network tab**
   - Network → CSS → Check timing

#### Solutions

**Solution 1: Inline Critical CSS**

```html
<head>
    <style>
        /* Inline critical theme CSS for immediate rendering */
        .e-richtexteditor {
            font-family: system-ui, sans-serif;
            box-sizing: border-box;
        }
        
        .e-rte-toolbar {
            background-color: #f8f9fa;
        }
        
        .e-rte-content {
            background-color: #ffffff;
            color: #333333;
        }
    </style>
    
    <!-- Defer loading full theme CSS -->
    <link rel="stylesheet" href="theme.css" defer>
</head>
```

**Solution 2: Preload Theme CSS**

```html
<head>
    <!-- Preload tells browser to fetch CSS early -->
    <link rel="preload" as="style" href="theme.css">
    <link rel="stylesheet" href="theme.css">
</head>
```

**Solution 3: Use Media Query for Dark Mode**

```css
@media (prefers-color-scheme: dark) {
    :root {
        --color-sf-surface: #1e1e1e;
        --color-sf-text: #e0e0e0;
    }
}
```

---

### Theme Looks Different on Different Devices

#### Issue
Theme appears different on mobile vs. desktop, or different browsers.

#### Diagnosis

1. **Test on multiple devices**:
   - DevTools → Device toolbar (Ctrl+Shift+M)
   - Test different viewport sizes

2. **Check browser compatibility**:
   - Test in Chrome, Firefox, Safari, Edge
   - Check for CSS variable support

#### Solutions

**Solution 1: Use Responsive Theme Variables**

```css
/* Desktop theme */
:root {
    --color-sf-primary: #0066cc;
    --font-size-base: 16px;
}

/* Mobile theme */
@media (max-width: 768px) {
    :root {
        --font-size-base: 14px;
    }
}
```

**Solution 2: Test with Bigger Size Mode**

```html
<!-- Use component-specific CSS that includes bigger mode -->
<link rel="stylesheet" href="theme.css">
```

**Solution 3: Verify Browser Support**

```javascript
// Check if CSS variables are supported
if (CSS.supports('--test', '0')) {
    console.log('✅ CSS variables supported');
} else {
    console.log('❌ CSS variables NOT supported - use fallback');
}
```

---

### Placeholder Text Not Visible

#### Issue
Placeholder text is not visible or hard to read.

#### Solutions

**Solution 1: Check Placeholder Styling**

```javascript
// Inspect placeholder element
const placeholder = document.querySelector('.e-rte-placeholder');
const style = window.getComputedStyle(placeholder);
console.log('Color:', style.color);
console.log('Opacity:', style.opacity);
console.log('Display:', style.display);
```

**Solution 2: Ensure Proper CSS Rules**

```css
/* Correct placeholder styling */
.e-richtexteditor .e-rte-placeholder {
    color: #999;          /* Visible color */
    font-style: italic;
    opacity: 1;           /* Ensure opacity is visible */
}

/* Make sure parent doesn't hide it */
.e-richtexteditor .e-rte-content {
    position: relative;   /* Allow placeholder to appear */
}
```

**Solution 3: Check Z-index**

```css
/* Ensure placeholder is on top */
.e-richtexteditor .e-rte-placeholder {
    z-index: 1;
}
```

---

### Bundle Size Too Large

#### Issue
Theme CSS files are too large and slowing down page load.

#### Solutions

**Solution 1: Use Lite Theme**

```css
/* ❌ Large file */
@import "@syncfusion/ej2-material3-theme/styles/material3.css";

/* ✅ Reduced file size */
@import "@syncfusion/ej2-material3-theme/styles/material3-lite.css";
```

**Solution 2: Use Component-Specific CSS**

```css
/* ❌ All components */
@import "@syncfusion/ej2-material3-theme/styles/material3.css";

/* ✅ Rich Text Editor only */
@import "@syncfusion/ej2-material3-theme/styles/rich-text-editor/index.css";
```

**Solution 3: Enable CSS Minification**

```bash
# Use minified versions
material3.min.css  # Instead of material3.css
```

---

### Theme Breaks After Update

#### Issue
Theme stops working after updating Syncfusion packages.

#### Diagnosis

```bash
# Check installed versions
npm list @syncfusion/ej2-material3-theme
```

#### Solutions

**Solution 1: Update Theme Package**

```bash
npm install @syncfusion/ej2-material3-theme@latest --save
```

**Solution 2: Check Breaking Changes**

Refer to Release Notes for theme changes in your version.

**Solution 3: Reinstall Dependencies**

```bash
# Remove and reinstall
rm -rf node_modules package-lock.json
npm install
```

**Solution 4: Verify CSS Import Paths**

Theme path might change in new versions:

```javascript
// Old version
import '@syncfusion/ej2-material-theme/styles/material.css';

// New version
import '@syncfusion/ej2-material3-theme/styles/material3.css';
```

---

### Toolbar Icons Not Displaying

#### Issue
Toolbar buttons appear but icons are missing or broken.

#### Solutions

**Solution 1: Verify Icon Font is Loaded**

```javascript
// Check if icon font is available
console.log(document.fonts.check('16px Material Design Icons'));
```

**Solution 2: Check Icon CSS**

```css
/* Verify icon classes are defined */
.e-icons::before {
    font-family: 'Material Design Icons';
    content: attr(data-icon);
}
```

**Solution 3: Clear Cache and Reload**

```bash
npm cache clean --force
npm install
```

---

### Performance is Slow

#### Issue
Page load is slow or rendering is sluggish with theme applied.

#### Solutions

**Solution 1: Use Lite Themes**
```css
@import "@syncfusion/ej2-material3-theme/styles/material3-lite.css";
```

**Solution 2: Lazy Load Dark Theme**
```javascript
const link = document.createElement('link');
link.rel = 'stylesheet';
link.href = 'dark-theme.css';
document.head.appendChild(link); // Add when needed
```

**Solution 3: Check Network Tab**
- See Performance Optimization guide for detailed tips

---

## Debugging Tools

### Browser DevTools Inspection

```javascript
// Check applied theme
function inspectTheme() {
    const styles = document.querySelectorAll('link[rel="stylesheet"]');
    styles.forEach(link => {
        if (link.href.includes('theme')) {
            console.log('Theme CSS:', link.href);
        }
    });
}

// Check CSS variables
function inspectVariables() {
    const root = document.documentElement;
    const primary = getComputedStyle(root).getPropertyValue('--color-sf-primary');
    console.log('Primary color:', primary);
}

// Check editor styles
function inspectEditor() {
    const editor = document.querySelector('.e-richtexteditor');
    const style = window.getComputedStyle(editor);
    console.log('Editor color:', style.color);
    console.log('Editor background:', style.backgroundColor);
}
```

### Enable Debug Mode

```javascript
// Log theme operations
localStorage.debug = 'syncfusion:*';
```

## Getting Help

If you can't resolve the issue:

1. **Check Documentation**: Review the specific theme guide
2. **Check GitHub Issues**: Search https://github.com/syncfusion/ej2-* repositories
3. **Community Forum**: Post on Syncfusion forums with:
   - Browser and version
   - Syncfusion package versions
   - Minimal reproduction code
   - Screenshots or error messages
4. **Contact Support**: For enterprise customers

## Related Topics

- [CSS Customization](css-customization.md)
- [Color Customization](color-customization.md)
- [Dark Mode](dark-mode.md)
- [Performance Optimization](performance-optimization.md)

## See Also

- [Getting Started with Themes](getting-started.md)
- [Available Themes](available-themes.md)
- [Theme Studio](theme-studio.md)

## Additional Resources

- **Browser DevTools**: https://developer.chrome.com/docs/devtools/
- **CSS Debugging**: https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Debugging_CSS
- **Performance Tools**: https://web.dev/performance/
