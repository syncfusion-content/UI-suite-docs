---
layout: post
title: Getting Started with Angular Block Editor Component | Syncfusion
description: Checkout and learn about getting started with Syncfusion Essential Angular Block Editor component, its elements, and more details.
platform: rich-text-editor-sdk
control: Block Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# Getting Started with the Angular Block Editor Component

This guide explains how to create a default Block Editor component in a new Angular application.

## Prerequisites

Before you begin, ensure the following are installed:

- **Node.js** (v18 or later) — required by the Angular CLI.
- **Angular CLI** (v14 or later) — required for the standalone components used in this guide.

## Set up Angular Environment

Use the [Angular CLI](https://github.com/angular/angular-cli) to set up your Angular applications. Angular CLI requires Node.js v18 or later. To install the Angular CLI globally, run the following command.

```
npm install -g @angular/cli
```

## Create an Angular Application

1. Run the following Angular CLI command to create a new application:

    ```bash
    ng new my-app
    ```

    To skip the interactive prompts, run a non-interactive command such as:

    ```bash
    ng new my-app --style=css --ssr=false --skip-git
    ```

2. When prompted for the stylesheet format, accept the default (CSS) or choose another option:

    ![Angular CLI initial setup prompt](images/getting-started/Initial-setup.png)

3. When prompted to enable Server-Side Rendering (SSR) and Static Site Generation (SSG), select the appropriate configuration:

    ![Angular CLI Server-Side Rendering prompt](images/getting-started/SSR.png)

4. When prompted to configure AI tooling, select any preferred option based on the development workflow:

    ![Angular CLI AI tooling prompt](images/getting-started/AI-Tool.png)

5. Navigate to the project folder:

    ```bash
    cd my-app
    ```
## Add Syncfusion Block Editor package

All available Essential JS 2 packages are published in the [npmjs.com](https://www.npmjs.com/~syncfusionorg) registry. The `@syncfusion/ej2-angular-blockeditor` package supports Angular 14 and later. Install the Block Editor component with the following command:

```bash
npm install @syncfusion/ej2-angular-blockeditor
```

## Add CSS Reference

Install a Syncfusion theme package to provide the required styles and icon assets. The following example installs the [Tailwind 3](https://www.npmjs.com/package/@syncfusion/ej2-tailwind3-theme) theme:

```bash
npm install @syncfusion/ej2-tailwind3-theme --save
```

> Use a theme package whose major version matches `@syncfusion/ej2-angular-blockeditor`. Other available themes include `@syncfusion/ej2-material-theme`, `@syncfusion/ej2-bootstrap-theme`, and `@syncfusion/ej2-fabric-theme`.

To render the BlockEditor component, add the following import in the [src/styles.css] file to load all required dependency styles:

```css
@import "../node_modules/@syncfusion/ej2-tailwind3-theme/styles/blockeditor/index.css";
```

> The theme package does not require any Tailwind configuration to work.

## Add Syncfusion Block Editor Component

Modify the template in the [src/app/app.ts] file to render the Block Editor component. Add the Angular Block Editor by using the `<ejs-blockeditor>` selector in the `template` section of the `app.ts` file.

>  **Note:** Angular CLI 21 and later generates the root component as `src/app/app.ts`. Earlier Angular CLI versions use `src/app/app.component.ts`.

The following example shows a default Block Editor component.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/rich-text-editor-sdk/angular/block-editor/getting-started/src/app.component.ts %}
{% endhighlight %}

{% highlight css tabtitle="styles.css" %}
{% include code-snippet/rich-text-editor-sdk/angular/block-editor/getting-started/src/styles.css %}
{% endhighlight %}
{% endtabs %}

## Run the Application

Run the application in the browser using the following command:

```
ng serve --open
```

The application will be available at `http://localhost:4200/`.

{% previewsample "https://help.syncfusion.com/samples/rich-text-editor-sdk/angular/block-editor/getting-started" %}