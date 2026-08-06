---
layout: post
title: Content Security Policy in ASP.NET MVC Rich Text Editor Component
description: Learn here all about Content Security Policy in Syncfusion ASP.NET MVC Rich Text Editor component of Syncfusion Essential JS 2 and more.
platform: rich-text-editor-sdk
control: Content Security Policy
publishingplatform: rich-text-editor-sdk
documentation: ug
---

# Content Security Policy (CSP) in ASP.NET MVC Rich Text Editor Control

Content Security Policy (CSP) is a security standard that helps prevent cross-site scripting (XSS) and other code-injection attacks by restricting the sources from which content can be loaded and executed in a web application. When integrating the Syncfusion ASP.NET MVC Rich Text Editor into an application that enforces a strict CSP, appropriate directives should be configured to support all editor features.

> For full functionality, the Rich Text Editor is recommended to be used with `style-src 'unsafe-inline'`, because the component dynamically applies inline styles to render and edit rich-text content.

> Important:
> For complete Rich Text Editor feature support, Syncfusion recommends including `style-src 'unsafe-inline'` in your Content Security Policy. Removing this directive may limit features that depend on dynamically generated inline styles.

## Recommended CSP Configuration

The following example shows a recommended CSP configuration for an ASP.NET MVC application that hosts the Syncfusion Rich Text Editor. The CSP is typically supplied as a response header from the ASP.NET MVC pipeline or set via a meta tag in `Views/Shared/_Layout.cshtml`.

### Using a response header in `Global.asax.cs` / `FilterConfig.cs` (recommended for production)

```csharp
public class FilterConfig
{
    public static void RegisterGlobalFilters(GlobalFilterCollection filters)
    {
        // ...existing code...
    }
}

protected void Application_BeginRequest(object sender, EventArgs e)
{
    Response.Headers.Add("Content-Security-Policy",
        "default-src 'self'; " +
        "script-src 'self'; " +
        "style-src 'self' 'unsafe-inline'; " +
        "font-src 'self' data:; " +
        "img-src 'self' data: blob: https:; " +
        "connect-src 'self';");
}
```

### Using a meta tag in `_Layout.cshtml`

```html
<meta http-equiv="Content-Security-Policy"
      content="default-src 'self';
               script-src 'self';
               style-src 'self' 'unsafe-inline';
               font-src 'self' data:;
               img-src 'self' data: blob: https:;
               connect-src 'self';" />
```

### Key directives

| Directive | Value | Purpose |
|---|---|---|
| `default-src` | `'self'` | Restricts all resource loading to the same origin by default. |
| `script-src` | `'self'` | Allows scripts from the same origin, including the editor's JavaScript runtime. |
| `style-src` | `'self' 'unsafe-inline'` | Permits inline styles used by inline-style-based rich-text formatting. |
| `font-src` | `'self' data:` | Allows fonts loaded from the same origin and inline data URIs. |
| `img-src` | `'self' data: blob: https:` | Permits images from the same origin, data URIs, blob URLs, and HTTPS sources (useful for image insertion). |
| `connect-src` | `'self'` | Restricts network connections (for example, AJAX) to the same origin. |

> Note: Additional CSP directives may be required depending on enabled Rich Text Editor features such as image upload, media embedding, external resources, custom fonts, or server-side integrations.

## Why is `'unsafe-inline'` recommended?

The Rich Text Editor applies styles in two primary ways, and it is important to understand the distinction:

* **Semantic (HTML) formatting:** Common formatting such as **bold**, *italic*, underline, headings, and lists are represented using semantic HTML elements (for example, `<strong>`, `<em>`, `<u>`, `<h1>`–`<h6>`, `<ul>`, `<ol>`). These do not depend on inline styles.
* **Inline-style formatting:** Features such as **font color**, **background color**, **font family**, **font size**, **text alignment**, custom **style formats**, and other dynamically generated visual formatting may rely on inline styles applied at runtime through the browser's content-editable engine.

For these reasons, `style-src 'unsafe-inline'` is recommended to ensure complete feature support. Without it, the features that depend on dynamically generated inline styles may not render or function as expected.

## Feature Impact

The following Rich Text Editor features are most likely to depend on inline styles:

* **Font color** — Applying a color to selected text.
* **Background color** — Applying a highlight or background color to text.
* **Font family** — Setting the typeface for selected content.
* **Font size** — Setting the text size for selected content.
* **Text alignment** — Left, center, right, and justify alignment.
* **Style formats** — Preset and custom paragraph/character style formats.
* **Custom formatting features** — User-defined styles applied through the toolbar or programmatically.

These features typically rely on inline styles or dynamically applied styling to represent and render formatting within the editor content. When inline styles are blocked by the browser's Content Security Policy, the visual formatting associated with these features may not be applied or displayed as expected.

## Impact of CSP Restrictions

When `style-src 'unsafe-inline'` is removed from the policy (or not included), features that rely on dynamically generated inline styles may be affected. The following issues may occur:

* **Inline-style formatting not rendering correctly:** Font color, background color, font family, font size, text alignment, and style formats may not be visually applied to the editor content.
* **Toolbar actions producing incomplete visual results:** Applying inline-style-based formatting through the toolbar may have no visible effect on the editor's content.
* **Dynamic formatting styles being blocked by the browser:** Browsers that enforce CSP may silently or actively block any inline style applied at runtime, which can cause formatting changes to fail.
* **Loss of expected editing experience:** Features that rely on inline styles may behave differently or be unavailable, while HTML-based semantic formatting is generally unaffected.

> Allowing `'unsafe-inline'` under `style-src` enables inline CSS only and does not allow inline JavaScript execution. Applications that enforce a strict CSP without `'unsafe-inline'` should thoroughly validate Rich Text Editor functionality and formatting behavior.

## Strict CSP Considerations

Applications that enforce a strict CSP using only:

```http
style-src 'self'
```

without `'unsafe-inline'`, can generally still load the Syncfusion Rich Text Editor. The editor may continue to function for basic content entry and certain semantic HTML formatting features. However, features that depend on inline styles may have reduced functionality or may not render as expected when inline styles are blocked.

If a strict CSP is needed for your application, consider:

* Validating which Rich Text Editor features are essential to your use case.
* Testing the editor thoroughly under your CSP configuration.
* Reviewing organizational CSP requirements and validating whether alternative CSP mechanisms satisfy both security and functional requirements. Depending on the Rich Text Editor features used, inline-style-dependent functionality may still need the inclusion of `style-src 'unsafe-inline'`.

## See also

* [XHTML validation](./xhtml-validation)
* [Form support](./form-support)
* [Read-only mode](./read-only-mode)
