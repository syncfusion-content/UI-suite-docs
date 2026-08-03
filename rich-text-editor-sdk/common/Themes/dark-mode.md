---
layout: post
title: Dark Mode | Syncfusion Rich Text Editor SDK
description: Learn how to implement and customize dark mode in the Rich Text Editor
platform: rich-text-editor-sdk
control: Themes
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# Dark Mode

This guide explains how to implement and configure dark mode in the Syncfusion Rich Text Editor. All modern themes include dark variants that provide a comfortable viewing experience in low-light environments.

## Overview

Dark mode (also called dark theme) is a display mode that uses a dark background with light text and UI elements. It's beneficial for:
- **Eye comfort** - Reduces eye strain in low-light environments
- **Battery life** - Reduces power consumption on OLED screens
- **Accessibility** - Helps users with light sensitivity
- **Modern design** - Expected by users in modern applications

## Available Dark Themes

### Modern Themes with Dark Variants

All modern themes include dark variants:

- **Material 3 Dark** - `@syncfusion/ej2-material3-dark-theme`
- **Fluent 2 Dark** - `@syncfusion/ej2-fluent2-dark-theme`
- **Bootstrap 5.3 Dark** - `@syncfusion/ej2-bootstrap5.3-dark-theme`
- **Tailwind 3.4 Dark** - `@syncfusion/ej2-tailwind3-dark-theme`

See [Available Themes](available-themes.md) for complete list.

## Step 1: Install Dark Theme Package

Install the dark variant of your chosen theme:

```bash
npm install @syncfusion/ej2-material3-dark-theme --save
```

### Install Other Dark Themes

```bash
# Fluent 2 Dark
npm install @syncfusion/ej2-fluent2-dark-theme --save

# Bootstrap 5.3 Dark
npm install @syncfusion/ej2-bootstrap5.3-dark-theme --save

# Tailwind 3.4 Dark
npm install @syncfusion/ej2-tailwind3-dark-theme --save
```

## Step 2: Import Dark Theme CSS

Import the dark theme CSS in your application:

### JavaScript/TypeScript

```javascript
// Import light theme (default)
import '@syncfusion/ej2-material3-theme/styles/material3.css';

// Import dark theme
import '@syncfusion/ej2-material3-dark-theme/styles/material3-dark.css';
```

### HTML

```html
<link rel="stylesheet" href="node_modules/@syncfusion/ej2-material3-theme/styles/material3.css">
<link rel="stylesheet" href="node_modules/@syncfusion/ej2-material3-dark-theme/styles/material3-dark.css">
```

### SCSS

```scss
@import "@syncfusion/ej2-material3-theme/styles/material3.scss";
@import "@syncfusion/ej2-material3-dark-theme/styles/material3-dark.scss";
```

## Step 3: Enable Dark Mode

### Method 1: Add e-dark Class

Add the `.e-dark` class to enable dark mode on any container:

```html
<div class="e-dark">
    <ejs-richtexteditor></ejs-richtexteditor>
</div>
```

### Method 2: Apply to Body

Apply dark mode to entire application:

```html
<body class="e-dark">
    <ejs-richtexteditor></ejs-richtexteditor>
</body>
```

### Method 3: Dynamic Toggle with JavaScript

```javascript
function enableDarkMode() {
    document.body.classList.add('e-dark');
}

function disableDarkMode() {
    document.body.classList.remove('e-dark');
}

function toggleDarkMode() {
    document.body.classList.toggle('e-dark');
}

// Enable dark mode on page load
window.addEventListener('load', () => {
    enableDarkMode();
});
```

## Detecting System Preference

### Automatic Dark Mode Based on System Setting

```javascript
// Check if user prefers dark mode
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.classList.add('e-dark');
}
```

### Listen for System Preference Changes

```javascript
const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');

darkModeQuery.addEventListener('change', (e) => {
    if (e.matches) {
        document.body.classList.add('e-dark');
    } else {
        document.body.classList.remove('e-dark');
    }
});
```

## Dark Mode Toggle UI

### Create a Toggle Button

```html
<button id="darkModeToggle" class="theme-toggle">
    🌙 Dark Mode
</button>

<script>
const toggleButton = document.getElementById('darkModeToggle');

toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('e-dark');
    
    // Update button text
    if (document.body.classList.contains('e-dark')) {
        toggleButton.textContent = '☀️ Light Mode';
    } else {
        toggleButton.textContent = '🌙 Dark Mode';
    }
    
    // Save preference
    localStorage.setItem('theme', 
        document.body.classList.contains('e-dark') ? 'dark' : 'light'
    );
});

// Restore saved preference on page load
window.addEventListener('load', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('e-dark');
        toggleButton.textContent = '☀️ Light Mode';
    }
});
</script>
```

## Platform-Specific Implementation

### React Implementation

```jsx
import React, { useState, useEffect } from 'react';
import { RichTextEditorComponent, Inject, HtmlEditor, Toolbar } from '@syncfusion/ej2-react-richtexteditor';
import '@syncfusion/ej2-material3-theme/styles/material3.css';
import '@syncfusion/ej2-material3-dark-theme/styles/material3-dark.css';

function App() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        // Check system preference
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setIsDarkMode(true);
        }
    }, []);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <div className={isDarkMode ? 'e-dark' : ''}>
            <button onClick={toggleDarkMode}>
                {isDarkMode ? '☀️ Light' : '🌙 Dark'}
            </button>
            <RichTextEditorComponent>
                <Inject services={[HtmlEditor, Toolbar]} />
            </RichTextEditorComponent>
        </div>
    );
}

export default App;
```

### Angular Implementation

```typescript
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RichTextEditorModule } from '@syncfusion/ej2-angular-richtexteditor';
import '@syncfusion/ej2-material3-theme/styles/material3.css';
import '@syncfusion/ej2-material3-dark-theme/styles/material3-dark.css';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RichTextEditorModule],
  template: `
    <div [class.e-dark]="isDarkMode">
      <button (click)="toggleDarkMode()">
        {{ isDarkMode ? '☀️ Light' : '🌙 Dark' }}
      </button>
      <ejs-richtexteditor></ejs-richtexteditor>
    </div>
  `,
  styles: [`
    :host.e-dark {
      background-color: #1e1e1e;
      color: #e0e0e0;
    }
  `]
})
export class AppComponent implements OnInit {
  isDarkMode = false;

  ngOnInit() {
    // Check system preference
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      this.isDarkMode = true;
    }
  }

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
  }
}
```

### Vue Implementation

```vue
<template>
  <div :class="{ 'e-dark': isDarkMode }">
    <button @click="toggleDarkMode">
      {{ isDarkMode ? '☀️ Light' : '🌙 Dark' }}
    </button>
    <ejs-richtexteditor></ejs-richtexteditor>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { RichTextEditorComponent } from '@syncfusion/ej2-vue-richtexteditor';
import '@syncfusion/ej2-material3-theme/styles/material3.css';
import '@syncfusion/ej2-material3-dark-theme/styles/material3-dark.css';

const isDarkMode = ref(false);

const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value;
};

onMounted(() => {
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    isDarkMode.value = true;
  }
});
</script>
```

### ASP.NET Core Implementation

**In your layout file (Razor)**:

```html
<body id="app-body">
    <div id="rte-container" class="@(ViewBag.IsDarkMode ? "e-dark" : "")">
        <ejs-richtexteditor></ejs-richtexteditor>
    </div>

    <script>
        // Check for saved preference
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            document.getElementById('app-body').classList.add('e-dark');
        }
    </script>
</body>
```

## Persistent Dark Mode Preference

### Save User Preference

```javascript
function saveDarkModePreference(isDark) {
    localStorage.setItem('darkMode', isDark ? 'enabled' : 'disabled');
}

function loadDarkModePreference() {
    const saved = localStorage.getItem('darkMode');
    if (saved === 'enabled') {
        document.body.classList.add('e-dark');
        return true;
    } else if (saved === 'disabled') {
        document.body.classList.remove('e-dark');
        return false;
    } else {
        // Fall back to system preference
        return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
}

// On page load
window.addEventListener('load', () => {
    const isDark = loadDarkModePreference();
    updateUI(isDark);
});

// On toggle
function toggleDarkMode() {
    const isDark = !document.body.classList.contains('e-dark');
    if (isDark) {
        document.body.classList.add('e-dark');
    } else {
        document.body.classList.remove('e-dark');
    }
    saveDarkModePreference(isDark);
}
```

## Customizing Dark Mode Colors

### Override Dark Mode Variables

```css
.e-dark {
    --color-sf-primary: #4f46e5;
    --color-sf-surface: #1f2937;
    --color-sf-on-surface: #f3f4f6;
    --color-sf-on-background: #e5e7eb;
}
```

### Dark Mode with Media Query

```css
@media (prefers-color-scheme: dark) {
    :root {
        --color-sf-primary: #4f46e5;
        --color-sf-surface: #1f2937;
        --color-sf-on-surface: #f3f4f6;
    }
}
```

## Scheduled Dark Mode

### Enable Dark Mode on Schedule

```javascript
function enableScheduledDarkMode() {
    const now = new Date();
    const hour = now.getHours();
    
    // Enable dark mode from 6 PM to 6 AM
    if (hour >= 18 || hour < 6) {
        document.body.classList.add('e-dark');
    } else {
        document.body.classList.remove('e-dark');
    }
}

// Check on page load
window.addEventListener('load', enableScheduledDarkMode);

// Check every hour
setInterval(enableScheduledDarkMode, 3600000);
```

## Partial Dark Mode

### Apply Dark Mode to Specific Component Only

```html
<!-- Light mode for entire page -->
<body>
    <header>Header content</header>
    
    <!-- Dark mode only for editor -->
    <div class="e-dark editor-container">
        <ejs-richtexteditor></ejs-richtexteditor>
    </div>
    
    <footer>Footer content</footer>
</body>
```

## Dark Mode Animation

### Smooth Theme Transition

```css
.e-richtexteditor,
.e-richtexteditor .e-rte-toolbar,
.e-richtexteditor .e-rte-content {
    transition: background-color 0.3s ease, color 0.3s ease;
}
```

## Testing Dark Mode

### Test in Browser DevTools

1. Open DevTools (F12)
2. Press Ctrl+Shift+P (Cmd+Shift+P on Mac)
3. Type "Render with media feature prefers-color-scheme"
4. Select "dark" or "light" to test

### Create Test Scenarios

```javascript
function testDarkMode() {
    console.log('Testing dark mode...');
    
    // Test 1: Enable dark mode
    document.body.classList.add('e-dark');
    console.log('✅ Dark mode enabled');
    
    // Test 2: Check if dark mode is applied
    const isDark = document.body.classList.contains('e-dark');
    console.log('✅ Dark mode applied:', isDark);
    
    // Test 3: Disable dark mode
    document.body.classList.remove('e-dark');
    console.log('✅ Dark mode disabled');
    
    // Test 4: Toggle dark mode
    document.body.classList.toggle('e-dark');
    console.log('✅ Dark mode toggled');
}

testDarkMode();
```

## Common Dark Mode Issues

### Issue: Dark Mode Not Applying

**Solution**: Ensure dark theme CSS is imported:

```javascript
// ❌ Missing
// import '@syncfusion/ej2-material3-dark-theme/styles/material3-dark.css';

// ✅ Correct
import '@syncfusion/ej2-material3-theme/styles/material3.css';
import '@syncfusion/ej2-material3-dark-theme/styles/material3-dark.css';
```

### Issue: Flickering When Toggling Dark Mode

**Solution**: Prevent layout shift with min-height:

```css
body {
    min-height: 100vh;
    transition: background-color 0.3s ease;
}
```

### Issue: Custom Styles Not Following Dark Mode

**Solution**: Use CSS variables instead of hardcoded colors:

```css
/* ❌ Won't follow dark mode */
.custom-element {
    background-color: white;
    color: black;
}

/* ✅ Follows dark mode */
.custom-element {
    background-color: var(--color-sf-surface);
    color: var(--color-sf-on-surface);
}
```

## Performance Tips

1. **Lazy load dark theme CSS** - Load only when user enables dark mode
2. **Use system preference** - Respect user's OS setting by default
3. **Cache preference** - Save user choice in localStorage
4. **Avoid layout shift** - Use smooth transitions for theme changes
5. **Optimize CSS** - Use minified dark theme files in production

## Best Practices

1. **Always provide both themes** - Light and dark modes
2. **Respect system preference** - Default to OS setting
3. **Allow user override** - Provide toggle option
4. **Test both modes** - Ensure consistency
5. **Use semantic colors** - Define colors by purpose, not value
6. **Sufficient contrast** - Meet WCAG accessibility standards
7. **Smooth transitions** - Add transitions for better UX

## Related Topics

- [Available Themes](available-themes.md)
- [Color Customization](color-customization.md)
- [CSS Customization](css-customization.md)
- [Theme Studio](theme-studio.md)

## See Also

- [Getting Started with Themes](getting-started.md)
- [Performance Optimization](performance-optimization.md)
- [Troubleshooting](troubleshooting.md)

## Additional Resources

- **CSS Media Queries**: https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme
- **Web Accessibility Guidelines**: https://www.w3.org/WAI/
- **Theme Studio**: https://ej2.syncfusion.com/themestudio
