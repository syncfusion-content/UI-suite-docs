---
layout: post
title: Performance Optimization | Syncfusion Rich Text Editor SDK
description: Learn how to optimize theme loading and rendering performance for the Rich Text Editor
platform: rich-text-editor-sdk
control: Themes
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# Performance Optimization

This guide provides best practices and techniques for optimizing theme loading and rendering performance in the Rich Text Editor.

## Overview

Theme files can significantly impact your application's performance. Optimizing theme delivery improves:
- **Page load time** - Faster initial render
- **Time to interactive** - Users can interact sooner
- **Bundle size** - Reduced network transmission
- **Runtime performance** - Smoother theme switching

## Lite Theme Files

### What Are Lite Themes?

Lite theme files include only the **normal size mode**, removing the bigger size mode styles. This reduces file size by approximately 25%.

### Use Lite Themes

Replace standard theme files with lite versions:

```css
/* ❌ Standard theme - includes both size modes */
@import "@syncfusion/ej2-material3-theme/styles/material3.css";

/* ✅ Lite theme - normal size only */
@import "@syncfusion/ej2-material3-theme/styles/material3-lite.css";
```

### File Size Comparison

| Theme | Standard | Lite | Savings |
|-------|----------|------|---------|
| Fluent 2 | 3.97 MB | 2.96 MB | ~25% |
| Material 3 | 3.85 MB | 2.88 MB | ~25% |
| Bootstrap 5.3 | 3.42 MB | 2.56 MB | ~25% |
| Tailwind 3.4 | 3.21 MB | 2.41 MB | ~25% |

### When to Use Lite Themes

**Use lite themes if:**
- You don't need the bigger size mode
- You're targeting desktop applications
- Bundle size is critical
- Your components have fixed sizes

**Use standard themes if:**
- You need bigger size mode for touch devices
- Your application is responsive
- Accessibility for low-vision users is important

## Component-Specific CSS

### Load Only Required Component Styles

Instead of importing all component styles, import only the Rich Text Editor styles:

```css
/* ❌ All components - larger file size */
@import "@syncfusion/ej2-material3-theme/styles/material3.css";

/* ✅ Rich Text Editor only */
@import "@syncfusion/ej2-material3-theme/styles/rich-text-editor/index.css";
```

### Component-Specific Lite Version

```css
/* Rich Text Editor lite version */
@import "@syncfusion/ej2-material3-theme/styles/rich-text-editor/index-lite.css";
```

### Available Component Paths

```
@syncfusion/ej2-<theme>-theme/styles/<component>/index.css
@syncfusion/ej2-<theme>-theme/styles/<component>/index-lite.css
```

**Common components:**
- `rich-text-editor/index.css` - Rich Text Editor
- `toolbar/index.css` - Toolbar
- `button/index.css` - Button
- `textbox/index.css` - TextBox
- `popup/index.css` - Popup

## Critical CSS

### Inline Critical Theme CSS

Improve first paint by inlining critical theme CSS:

```html
<head>
    <style>
        /* Inline critical theme CSS for above-the-fold content */
        .e-richtexteditor {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            box-sizing: border-box;
        }
        
        .e-rte-toolbar {
            background-color: #f8f9fa;
            border-bottom: 1px solid #e9ecef;
        }
        
        .e-rte-content {
            background-color: #ffffff;
            color: #333333;
        }
        /* ... more critical styles ... */
    </style>
    
    <!-- Load remaining theme CSS asynchronously -->
    <link rel="stylesheet" href="css/material3-theme-non-critical.css" defer>
</head>
```

## Lazy Loading Themes

### Load Dark Theme On Demand

Load the dark theme CSS only when needed:

```javascript
// Check if user prefers dark mode
function loadDarkTheme() {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'node_modules/@syncfusion/ej2-material3-dark-theme/styles/material3-dark.css';
    document.head.appendChild(link);
}

// Load dark theme when user enables it
document.getElementById('darkModeToggle').addEventListener('click', () => {
    if (!document.querySelector('link[href*="material3-dark"]')) {
        loadDarkTheme();
    }
    document.body.classList.toggle('e-dark');
});
```

### Lazy Load Based on System Preference

```javascript
// Load dark theme if system prefers dark mode
if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    loadDarkTheme();
    document.body.classList.add('e-dark');
}
```

## CSS Minification

### Use Minified CSS Files

Minified CSS files are significantly smaller:

```css
/* ❌ Non-minified - larger file size */
@import "@syncfusion/ej2-material3-theme/styles/material3.css";

/* ✅ Minified - smaller file size */
@import "@syncfusion/ej2-material3-theme/styles/material3.min.css";
```

## CSS Caching

### Leverage Browser Caching

Add cache headers to CSS files:

```apache
# .htaccess (Apache)
<FilesMatch "\.(css)$">
    Header set Cache-Control "max-age=31536000, public"
</FilesMatch>
```

```nginx
# nginx.conf (Nginx)
location ~* \.css$ {
    expires 365d;
    add_header Cache-Control "public, immutable";
}
```

### Use Service Worker for CSS Caching

```javascript
// service-worker.js
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('v1').then((cache) => {
            return cache.addAll([
                '/node_modules/@syncfusion/ej2-material3-theme/styles/material3.css'
            ]);
        })
    );
});
```

## Content Delivery Network (CDN)

### Serve Themes from CDN

Use a CDN to serve theme files from locations closer to users:

```html
<!-- CDN delivery for faster load times -->
<link rel="stylesheet" 
      href="https://cdn.syncfusion.com/ej2/ej2-material3-theme/material3.css">
```

### Benefits of CDN
- Faster download speeds from geographically distributed servers
- Reduced bandwidth costs
- Automatic compression and optimization
- Built-in caching

## Code Splitting

### Split Theme CSS by Component

Webpack/Vite configuration to split theme CSS:

```javascript
// webpack.config.js
module.exports = {
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            }
        ]
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                theme: {
                    test: /[\\/]node_modules[\\/].*theme/,
                    name: 'theme',
                    priority: 10,
                    enforce: true
                }
            }
        }
    }
};
```

## Preloading and Prefetching

### Preload Critical Theme CSS

```html
<!-- Preload main theme -->
<link rel="preload" 
      as="style" 
      href="node_modules/@syncfusion/ej2-material3-theme/styles/material3.css">

<!-- Prefetch dark theme for later use -->
<link rel="prefetch" 
      as="style" 
      href="node_modules/@syncfusion/ej2-material3-dark-theme/styles/material3-dark.css">
```

### Benefits
- **Preload**: Ensures critical CSS is available immediately
- **Prefetch**: Loads resources in browser idle time

## Font Optimization

### Use System Fonts

Themes use system fonts by default. System fonts are fastest:

```css
.e-richtexteditor {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
}
```

### Benefits
- **No network requests** - Fonts are already on user's system
- **Faster rendering** - No wait for font download
- **Smaller CSS** - No @font-face declarations

## CSS in JavaScript

### Dynamic Theme Loading

For React/Vue applications using CSS-in-JS:

```javascript
// React example
import { useState, useEffect } from 'react';

export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState('material3');

    useEffect(() => {
        // Dynamically import theme
        import(`@syncfusion/ej2-${theme}-theme/styles/${theme}.css`);
    }, [theme]);

    return (
        <div className="theme-provider">
            {children}
        </div>
    );
}
```

## SCSS Compilation

### Compile SCSS for Smaller Output

```scss
// main.scss
@import "@syncfusion/ej2-material3-theme/styles/material3.scss";

// Override only necessary variables
$primary-color: #your-color;
$success-color: #your-color;

// Compiled CSS will only include used rules
```

### Benefits
- **Tree-shaking** - Remove unused CSS
- **Variable override** - Smaller output CSS
- **Optimization** - Modern browsers support advanced CSS features

## Performance Monitoring

### Measure CSS Load Time

```javascript
// Measure CSS load performance
const styleStart = performance.now();

const link = document.createElement('link');
link.rel = 'stylesheet';
link.href = 'style.css';
link.onload = () => {
    const styleEnd = performance.now();
    console.log(`CSS loaded in ${styleEnd - styleStart}ms`);
};
document.head.appendChild(link);
```

### Monitor with Web Vitals

```javascript
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

// Monitor performance metrics
getCLS(console.log); // Cumulative Layout Shift
getFID(console.log); // First Input Delay
getFCP(console.log); // First Contentful Paint
getLCP(console.log); // Largest Contentful Paint
getTTFB(console.log); // Time to First Byte
```

## Build Optimization

### Remove Unused CSS

Use PurgeCSS or similar tools:

```bash
npm install purgecss --save-dev
```

```javascript
// purgecss.config.js
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    css: ['./node_modules/@syncfusion/ej2-material3-theme/styles/**/*.css'],
    output: './dist/css'
};
```

## Production Checklist

- [ ] Use lite theme files if not using bigger size mode
- [ ] Use component-specific CSS when possible
- [ ] Minify CSS files
- [ ] Implement caching headers
- [ ] Use CDN for CSS delivery
- [ ] Preload critical theme CSS
- [ ] Prefetch secondary theme CSS
- [ ] Implement lazy loading for dark mode
- [ ] Remove unused CSS
- [ ] Monitor CSS load performance
- [ ] Test on slow networks (DevTools throttling)

## Performance Benchmarks

### Typical Load Times (3G Network)

| Approach | Load Time | Savings |
|----------|-----------|---------|
| Full theme | 2.5s | Baseline |
| Lite theme | 1.9s | 24% |
| Component CSS | 1.2s | 52% |
| Component CSS + Lite | 0.8s | 68% |
| Inlined critical CSS | 0.5s | 80% |

## Common Performance Issues

### Issue: Large CSS Bundle

**Solution**: Use lite theme files and component-specific CSS

```css
/* ❌ Large */
@import "@syncfusion/ej2-material3-theme/styles/material3.css";

/* ✅ Optimized */
@import "@syncfusion/ej2-material3-theme/styles/rich-text-editor/index-lite.css";
```

### Issue: Slow Theme Switching

**Solution**: Preload alternative themes

```html
<link rel="prefetch" href="dark-theme.css">
```

### Issue: Flash of Unstyled Content (FOUC)

**Solution**: Use media queries and system preference

```css
@media (prefers-color-scheme: dark) {
    /* Dark mode styles */
}
```

## Related Topics

- [Available Themes](available-themes.md)
- [Getting Started with Themes](getting-started.md)
- [Dark Mode](dark-mode.md)

## See Also

- [Troubleshooting](troubleshooting.md)
- [CSS Customization](css-customization.md)

## Additional Resources

- **Web Performance Working Group**: https://www.w3.org/webperf/
- **Google PageSpeed Insights**: https://pagespeed.web.dev/
- **WebPageTest**: https://www.webpagetest.org/
- **CSS Loading Performance**: https://developer.mozilla.org/en-US/docs/Web/Performance/CSS_performance
