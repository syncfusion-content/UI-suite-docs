---
layout: post
title: Getting started with ##Platform_Name## BlockEditor control | Syncfusion
description: Checkout and learn how to create and run a BlockEditor using a Vite-based TypeScript project and Syncfusion Essential JS 2.
canonical_url: "https://www.syncfusion.com/rich-text-editor-sdk/javascript-block-editor"
platform: ej2-javascript
control: Getting started 
publishingplatform: ##Platform_Name##
publishingplatform: rich-text-editor-sdk
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# Getting started in ##Platform_Name## BlockEditor control

This section explains the steps to create a simple BlockEditor and demonstrates the basic usage of the BlockEditor control using a Vite-based TypeScript project scaffolded with latest vite version.

## Prerequisites

This guide uses Vite for bundling and development. Scaffold the project with `npm create vite@latest` and choose the `vanilla` framework with the `typescript` variant. It requires Node `24.13.0` or higher. For more information about Vite and its features, refer to the [Vite documentation](https://vitejs.dev/).

## Create a TypeScript application.

To set-up a Typescript application in TypeScript environment, run the following command.

```bash
npm create vite@latest my-app -- --template vanilla-ts
```
This command will prompt you to install the required packages and start the application. Select the options as shown below.

![BlockEditor Initial setup](../images/svelte-ts/npm_setup.png)

As Syncfusion packages are not installed yet, currently, the `No` option will be selected. Then, navigate to the project directory and install the dependencies using the following commands:

```bash
cd my-app
npm install
```

## Adding Syncfusion<sup style="font-size:70%">&reg;</sup> BlockEditor packages

All the available Essential<sup style="font-size:70%">&reg;</sup> JS 2 packages are published in [`npmjs.com`](https://www.npmjs.com/~syncfusionorg) public registry.
To install BlockEditor component, use the following command

```bash
npm install @syncfusion/ej2-blockeditor
```

## Adding CSS reference

Syncfusion provides multiple themes for the BlockEditor control. For a complete list of available themes, refer to the [themes packages](https://ej2.syncfusion.com/documentation/appearance/theme#theme-packages).

To apply the [Tailwind 3](https://www.npmjs.com/package/@syncfusion/ej2-tailwind3-theme) theme, install the corresponding theme package by using the following command:

```bash
npm install @syncfusion/ej2-tailwind3-theme --save
```

The installed theme package includes an `index.css` file that automatically imports all the required dependency styles. Import the following stylesheet into `~/src/styles.css`.

```css
@import '../node_modules/@syncfusion/ej2-tailwind3-theme/styles/blockeditor/index.css';
```

I> To apply the application-specific styles correctly, import style.css into **src/main.ts** and remove all the default styles from **src/style.css** and use the BlockEditor styles provided above. You can also refer to the [themes section](https://ej2.syncfusion.com/documentation/appearance/theme) for details about built-in themes and CSS references for individual controls.

## Adding BlockEditor control

To get started, add the BlockEditor control in main.ts and index.html files. BlockEditor can be initialized through a div element.

Output will be displayed as follows

{% tabs %}
{% highlight ts tabtitle="main.ts" %}

import './style.css';
import { BlockEditor } from '@syncfusion/ej2-blockeditor';

const blockEditor: BlockEditor = new BlockEditor({});
blockEditor.appendTo('#blockeditor_default');

{% endhighlight %}

{% highlight css tabtitle="styles.css" %}

@import '../node_modules/@syncfusion/ej2-tailwind3-theme/styles/blockeditor/index.css';

{% endhighlight %}

{% highlight html tabtitle="index.html" %}

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <link rel="icon" type="image/svg+xml" href="/vite.svg" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Syncfusion Typescript BlockEditor</title>
</head>

<body>
    <div id="container" style="margin-top: 50px;">
        <div id="blockeditor_default"></div>
    </div>
    <script type="module" src="/src/main.ts"></script>
</body>

</html>

{% endhighlight %}
{% endtabs %}

## Run the application

Use the following command to run the application in the browser.

```bash
npm run dev
```

The following example shows a basic BlockEditor control.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rich-text-editor-sdk/typescript/block-editor/typescript/block-editor/getting-started/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/typescript/block-editor/typescript/block-editor/getting-started/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/typescript/block-editor/getting-started/" %}
