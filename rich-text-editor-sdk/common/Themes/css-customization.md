---
layout: post
title: CSS Customization | Syncfusion Rich Text Editor SDK
description: Learn how to customize Rich Text Editor appearance using CSS selectors and classes
platform: rich-text-editor-sdk
control: Themes
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# CSS Customization

The Rich Text Editor provides extensive CSS selectors and classes that enable fine-grained customization of its appearance. This guide covers all available CSS hooks for styling the editor components.

## CSS Structure Overview

The Rich Text Editor uses a hierarchical CSS class structure that allows targeted styling at multiple levels:

```
.e-richtexteditor (main container)
├── .e-rte-toolbar (toolbar)
├── .e-rte-content (content area)
├── .e-rte-character-count (character counter)
└── .e-rte-container (border container)
```

## Main Container Styling

### Style the Main Container

Customize the overall Rich Text Editor container including borders, padding, and spacing:

```css
.e-richtexteditor {
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    padding: 4px;
}
```

### Container Border Customization

Modify the editor container border style and color:

```css
.e-richtexteditor .e-rte-container {
    border: 2px solid #454bc1;
    border-radius: 4px;
    transition: border-color 0.3s ease;
}

.e-richtexteditor .e-rte-container:focus-within {
    border-color: #3730a3;
}
```

### Container Shadow and Elevation

Add shadow effects for depth:

```css
.e-richtexteditor .e-rte-container {
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
}

.e-richtexteditor .e-rte-container:focus-within {
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}
```

## Placeholder Styling

### Customize Placeholder Text

Style the placeholder text that appears when the editor is empty:

```css
.e-richtexteditor .e-rte-placeholder {
    color: #999;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 14px;
    font-style: italic;
    opacity: 0.7;
}
```

### Placeholder with Different Font Weight

```css
.e-richtexteditor .e-rte-placeholder {
    color: #aaa;
    font-weight: 300;
    letter-spacing: 0.5px;
}
```

### Placeholder State

```css
/* Placeholder when focused */
.e-richtexteditor .e-rte-container:focus-within .e-rte-placeholder {
    color: #ccc;
    opacity: 0.5;
}
```

## Content Area Styling

### Style Content Font

Modify the font family, size, and styling of editor content:

```css
/* Font family and size for both rich text and HTML source */
.e-richtexteditor .e-rte-content .e-content,
.e-richtexteditor .e-source-content .e-content {
    font-size: 16px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight: 400;
    line-height: 1.6;
}
```

### Content Background and Text Color

Customize the background and text colors:

```css
/* Background and text color */
.e-richtexteditor .e-rte-content,
.e-richtexteditor .e-source-content {
    background-color: #ffffff;
    color: #333333;
}

/* For dark mode */
.e-dark .e-richtexteditor .e-rte-content {
    background-color: #1e1e1e;
    color: #e0e0e0;
}
```

### Content Padding and Margins

Adjust spacing inside the content area:

```css
.e-richtexteditor .e-rte-content .e-content,
.e-richtexteditor .e-source-content .e-content {
    padding: 12px 16px;
    margin: 0;
}
```

### Content Line Height

```css
.e-richtexteditor .e-rte-content .e-content {
    line-height: 1.8;
    letter-spacing: 0.3px;
}
```

### Content Scrolling Area

Style the scrolling container for content:

```css
.e-richtexteditor .e-rte-content {
    min-height: 300px;
    max-height: 600px;
    overflow-y: auto;
    border: 1px solid #e0e0e0;
}
```

### Selection Highlighting

Customize text selection appearance:

```css
.e-richtexteditor .e-rte-content .e-content ::selection {
    background-color: #4338ca;
    color: #ffffff;
}

.e-richtexteditor .e-rte-content .e-content ::-moz-selection {
    background-color: #4338ca;
    color: #ffffff;
}
```

## Toolbar Styling

### Toolbar Container

Customize the overall toolbar appearance:

```css
.e-richtexteditor .e-rte-toolbar {
    background-color: #f8f9fa;
    border-bottom: 1px solid #e9ecef;
    padding: 8px;
}
```

### Toolbar Icons

Style toolbar icons and their states:

```css
/* Default toolbar icons */
.e-richtexteditor .e-rte-toolbar .e-toolbar-item .e-icons,
.e-richtexteditor .e-rte-toolbar .e-toolbar-item .e-icons:active {
    color: #495057;
    font-size: 16px;
}

/* Toolbar icons on hover */
.e-richtexteditor .e-rte-toolbar .e-toolbar-item .e-icons:hover {
    color: #0d6efd;
    transition: color 0.2s ease;
}
```

### Toolbar Buttons

Customize button styling in the toolbar:

```css
/* Toolbar button styling */
.e-toolbar .e-tbar-btn,
.e-toolbar .e-tbar-btn:active,
.e-toolbar .e-tbar-btn:hover {
    color: #495057;
    background-color: transparent;
    border: 1px solid transparent;
    border-radius: 4px;
    transition: all 0.2s ease;
}

/* Toolbar button on hover */
.e-toolbar .e-tbar-btn:hover {
    background-color: #e9ecef;
    color: #0d6efd;
}
```

### Active Toolbar Items

Style active/selected toolbar items:

```css
/* Active dropdown button */
.e-richtexteditor .e-rte-toolbar .e-toolbar-item .e-dropdown-btn.e-active .e-icons,
.e-richtexteditor .e-rte-toolbar .e-toolbar-item .e-dropdown-btn.e-active .e-rte-dropdown-btn-text {
    color: #0d6efd;
    font-weight: 600;
}

/* Active button background */
.e-toolbar .e-tbar-btn.e-active {
    background-color: #e7f1ff;
    border-color: #0d6efd;
}
```

### Expanded Toolbar Items

Style items in expanded toolbar sections:

```css
/* Expanded toolbar items */
.e-richtexteditor .e-rte-toolbar .e-toolbar-extended .e-toolbar-item .e-tbar-btn .e-icons {
    color: #495057;
}

.e-toolbar.e-extended-toolbar .e-toolbar-extended .e-toolbar-item .e-tbar-btn {
    padding: 6px 8px;
}

/* Extended toolbar on dark mode */
.e-dark .e-richtexteditor .e-rte-toolbar .e-toolbar-extended {
    background-color: #2d2d2d;
    border-top: 1px solid #3d3d3d;
}
```

### Toolbar Separator

Customize the divider between toolbar groups:

```css
.e-toolbar .e-toolbar-separator {
    background-color: #dee2e6;
    height: 24px;
    margin: 0 8px;
}
```

### Toolbar Dropdown Menu

Style the dropdown menus that appear from toolbar items:

```css
.e-toolbar .e-dropdown-popup {
    border: 1px solid #e9ecef;
    border-radius: 4px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    background-color: #ffffff;
}

.e-toolbar .e-dropdown-popup .e-list-item {
    padding: 8px 12px;
    color: #333333;
}

.e-toolbar .e-dropdown-popup .e-list-item:hover {
    background-color: #f1f3f5;
    color: #0d6efd;
}

.e-toolbar .e-dropdown-popup .e-list-item.e-active {
    background-color: #e7f1ff;
    color: #0d6efd;
    font-weight: 600;
}
```

## Character Count Display

### Customize Character Count Styling

Style the character count display at the bottom of the editor:

```css
/* Character count styling */
.e-richtexteditor .e-rte-character-count {
    color: #6c757d;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 12px;
    padding-bottom: 2px;
    padding-right: 14px;
    opacity: 0.7;
}
```

### Character Count Colors

Change colors based on content length:

```css
/* Default state */
.e-richtexteditor .e-rte-character-count {
    color: #6c757d;
}

/* When character limit is approaching */
.e-richtexteditor.e-rte-warning .e-rte-character-count {
    color: #ff9800;
}

/* When character limit is exceeded */
.e-richtexteditor.e-rte-error .e-rte-character-count {
    color: #d13438;
}
```

### Character Count Animation

Add fade-in effect to character count:

```css
.e-richtexteditor .e-rte-character-count {
    animation: fadeIn 0.3s ease-in-out;
}

@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 0.7;
    }
}
```

## Focused State Styling

### Focus Styles

Customize the appearance when the editor is focused:

```css
/* Container focus state */
.e-richtexteditor .e-rte-container:focus-within {
    border-color: #0d6efd;
    box-shadow: 0 0 0 3px rgba(13, 110, 253, 0.25);
    outline: none;
}

/* Content focus state */
.e-richtexteditor .e-rte-content:focus {
    outline: none;
}
```

## Disabled State Styling

### Disabled Editor Appearance

Style the editor when it's disabled:

```css
.e-richtexteditor.e-disabled {
    opacity: 0.6;
    pointer-events: none;
}

.e-richtexteditor.e-disabled .e-rte-toolbar {
    background-color: #f8f9fa;
    opacity: 0.5;
}

.e-richtexteditor.e-disabled .e-rte-content {
    background-color: #f8f9fa;
    color: #adb5bd;
}
```

## Read-Only State Styling

### Read-Only Editor

Style when the editor is in read-only mode:

```css
.e-richtexteditor.e-readonly {
    background-color: #f8f9fa;
}

.e-richtexteditor.e-readonly .e-rte-toolbar {
    display: none;
}

.e-richtexteditor.e-readonly .e-rte-content {
    background-color: #f8f9fa;
    border: 1px solid #e9ecef;
}
```

## Source Code View Styling

### HTML Source Editor

Customize the appearance of the HTML source view:

```css
/* Source code content area */
.e-richtexteditor .e-source-content .e-content {
    font-family: 'Monaco', 'Courier New', monospace;
    font-size: 13px;
    background-color: #f5f5f5;
    color: #333333;
}

/* Source code syntax highlighting */
.e-richtexteditor .e-source-content .e-content code {
    background-color: #f5f5f5;
    padding: 2px 4px;
}
```

## Responsive Adjustments

### Mobile View Customization

Adjust styles for smaller screens:

```css
@media (max-width: 768px) {
    .e-richtexteditor .e-rte-toolbar {
        flex-wrap: wrap;
        padding: 4px;
    }
    
    .e-richtexteditor .e-rte-content {
        min-height: 200px;
    }
    
    .e-richtexteditor .e-rte-placeholder {
        font-size: 13px;
    }
}
```

## Dark Mode Customization

### Dark Mode Styles

Apply custom styles for dark mode:

```css
.e-dark .e-richtexteditor {
    background-color: #1e1e1e;
}

.e-dark .e-richtexteditor .e-rte-toolbar {
    background-color: #2d2d2d;
    border-bottom-color: #3d3d3d;
}

.e-dark .e-richtexteditor .e-rte-content {
    background-color: #1e1e1e;
    color: #e0e0e0;
}

.e-dark .e-richtexteditor .e-rte-placeholder {
    color: #666666;
}

.e-dark .e-richtexteditor .e-rte-character-count {
    color: #999999;
}
```

## Advanced Customization

### Animation and Transitions

Add smooth transitions:

```css
.e-richtexteditor .e-rte-container,
.e-richtexteditor .e-rte-toolbar,
.e-richtexteditor .e-rte-content {
    transition: all 0.3s ease;
}
```

### Custom Color Themes

Create custom color schemes:

```css
/* Blue theme */
.e-richtexteditor.e-theme-blue .e-rte-container:focus-within {
    border-color: #0d6efd;
}

.e-richtexteditor.e-theme-blue .e-toolbar .e-tbar-btn:hover {
    background-color: #e7f1ff;
}

/* Green theme */
.e-richtexteditor.e-theme-green .e-rte-container:focus-within {
    border-color: #198754;
}

.e-richtexteditor.e-theme-green .e-toolbar .e-tbar-btn:hover {
    background-color: #d1e7dd;
}
```

## CSS Class Reference

| Class | Purpose |
|-------|---------|
| `.e-richtexteditor` | Main container |
| `.e-rte-container` | Border and shadow container |
| `.e-rte-toolbar` | Toolbar wrapper |
| `.e-rte-content` | Content area wrapper |
| `.e-content` | Editable content |
| `.e-source-content` | HTML source view |
| `.e-rte-placeholder` | Placeholder text |
| `.e-rte-character-count` | Character counter |
| `.e-toolbar-item` | Individual toolbar item |
| `.e-tbar-btn` | Toolbar button |
| `.e-dropdown-btn` | Dropdown button |
| `.e-active` | Active/selected state |
| `.e-dark` | Dark mode indicator |
| `.e-disabled` | Disabled state |
| `.e-readonly` | Read-only state |

## Best Practices

1. **Use CSS Variables**: Leverage theme variables instead of hardcoding colors
2. **Maintain Specificity**: Use appropriate selector specificity to avoid conflicts
3. **Test Dark Mode**: Ensure customizations work in both light and dark modes
4. **Optimize Performance**: Minimize CSS file size and use efficient selectors
5. **Accessibility**: Ensure sufficient contrast and readable font sizes
6. **Browser Support**: Test across different browsers for compatibility

## Performance Tips

- Minimize CSS selectors depth
- Avoid using `!important` unless necessary
- Group related styles together
- Use CSS variables for dynamic values
- Remove unused CSS rules

## Common Issues

### Styles Not Applied

Ensure the CSS is loaded after the theme CSS:

```css
/* Theme CSS loaded first */
@import "@syncfusion/ej2-material3-theme/styles/material3.css";

/* Custom CSS loaded after */
@import "your-custom-styles.css";
```

### Conflicts with Other CSS

Use more specific selectors to override conflicting styles:

```css
/* Less specific - may be overridden */
.e-richtexteditor .e-rte-content {
    background-color: white;
}

/* More specific - less likely to be overridden */
body .wrapper .e-richtexteditor .e-rte-content {
    background-color: white;
}
```

## Related Topics

- [Available Themes](available-themes.md)
- [Color Customization](color-customization.md)
- [Dark Mode](dark-mode.md)
- [Theme Studio](theme-studio.md)

## See Also

- [Getting Started with Themes](getting-started.md)
- [Performance Optimization](performance-optimization.md)
- [Troubleshooting](troubleshooting.md)
