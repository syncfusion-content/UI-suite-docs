---
layout: post
title: Getting started with TypeScript Rich Text Editor | Syncfusion
description: Checkout and learn how to create and run a Rich Text Editor using a Vite-based TypeScript project and Syncfusion Essential JS 2.
canonical_url: "https://www.syncfusion.com/javascript-ui-controls/js-rich-text-editor"
platform: rich-text-editor-sdk
control: Getting started 
publishingplatform: rich-text-editor-sdk
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# Getting started in TypeScript Rich Text Editor control

The Typescript Rich Text Editor is a WYSIWYG (What You See Is What You Get) editor that enables users to create, edit, and format rich text content with features like multimedia insertion, lists, and links. This section explains the steps to create a simple Rich Text Editor and demonstrates the basic usage of the Rich Text Editor control using a Vite-based TypeScript project scaffolded with latest vite version.

## Prerequisites

This guide uses Vite as the bundler and development environment. Install Node.js 24.13.0 or higher before proceeding. For detailed information about Vite’s capabilities and configuration options, refer to the [Vite documentation](https://vitejs.dev/).

## Create a TypeScript application.

To set-up a Typescript application in TypeScript environment, run the following command.

```bash
npm create vite@latest my-app -- --template vanilla-ts
```
This command will prompt you to install the required packages and start the application. Select the options as shown below.

![Rich Text Editor Initial setup](images/svelte-ts/npm_setup.png)

As Syncfusion packages are not installed yet, currently, the `No` option will be selected. Then, navigate to the project directory and install the dependencies using the following commands:

```bash
cd my-app
npm install
```

## Adding Rich Text Editor packages

All the available Essential<sup style="font-size:70%">&reg;</sup> JS 2 packages are published in [`npmjs.com`](https://www.npmjs.com/~syncfusionorg) public registry.
To install Rich Text Editor component, use the following command

```bash
npm install @syncfusion/ej2-richtexteditor
```

## Adding CSS reference

Add the following imports inside the `~/src/styles.css` file to include the `tailwind3` theme styles:

{% tabs %}
{% highlight css tabtitle="style.css" %}

@import '../node_modules/@syncfusion/ej2-base/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-lists/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-richtexteditor/styles/tailwind3.css';

{% endhighlight %}
{% endtabs %}

I> To apply the application-specific styles correctly, import style.css into **src/main.ts** and remove all the default styles from **src/style.css** and use the Rich Text editor styles provided above. You can also refer to the [themes section](https://ej2.syncfusion.com/documentation/appearance/theme) for details about built-in themes and CSS references for individual controls.

## Module Injection

The following modules provide the basic features of the Rich Text Editor.

* `Toolbar` - Inject this module to use Toolbar feature.
* `Link` - Inject this module to use link feature in Rich Text Editor.
* `Image`- Inject this module to use image feature in Rich Text Editor.
* `HtmlEditor` - Inject this module to use Rich Text Editor as html editor.
* `QuickToolbar` - Inject this module to use quick toolbar feature for the target element.

These modules should be injected into the Rich Text Editor using the `RichTextEditor.Inject` method.

T> Additional feature modules are available [here](https://ej2.syncfusion.com/documentation/rich-text-editor/module)

## Adding Rich Text Editor control

To get started, add the Rich Text Editor control in main.ts and index.html files. Rich Text Editor can be initialized through div element or textarea element.

Output will be displayed as follows

{% tabs %}
{% highlight ts tabtitle="main.ts" %}

import './style.css';
import { RichTextEditor, Toolbar, Link, Image, HtmlEditor, QuickToolbar } from '@syncfusion/ej2-richtexteditor';

RichTextEditor.Inject(Toolbar, Link, Image, HtmlEditor, QuickToolbar);
const editor: RichTextEditor = new RichTextEditor({});
editor.appendTo('#editor');

{% endhighlight %}

{% highlight css tabtitle="styles.css" %}

@import '../node_modules/@syncfusion/ej2-base/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-lists/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-richtexteditor/styles/tailwind3.css';

{% endhighlight %}

{% highlight html tabtitle="index.html" %}
<!doctype html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <link rel="icon" type="image/svg+xml" href="/vite.svg" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Syncfusion Typescript Rich Text Editor</title>
</head>

<body>
  <div id="editor"></div>
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

## See also

* [How to change the editor type](https://ej2.syncfusion.com/javascript/documentation/rich-text-editor/editor-types/editor-modes)
* [How to render the iframe](https://ej2.syncfusion.com/javascript/documentation/rich-text-editor/editor-types/iframe)
* [How to render the toolbar in inline mode](https://ej2.syncfusion.com/javascript/documentation/rich-text-editor/editor-types/inline-editing)
* [How to insert Emoticons](https://ej2.syncfusion.com/angular/demos/#/tailwind3/rich-text-editor/insert-emoticons)
* [Blog posting using Rich Text Editor](https://ej2.syncfusion.com/angular/demos/#/tailwind3/rich-text-editor/blog-posting)
* [Reactive Form with Rich Text Editor](https://ej2.syncfusion.com/angular/demos/#/tailwind3/rich-text-editor/reactive-form)
* [Accessibility in Rich text editor](https://ej2.syncfusion.com/documentation/rich-text-editor/accessibility)
* [Keyboard support in Rich text editor](https://ej2.syncfusion.com/documentation/rich-text-editor/keyboard-support)
* [Globalization in Rich text editor](https://ej2.syncfusion.com/documentation/rich-text-editor/globalization)

N> Looking for the full JavaScript Rich Text Editor component overview, features, pricing, and documentation? Visit the [JavaScript Rich Text Editor](https://www.syncfusion.com/javascript-ui-controls/js-rich-text-editor) page.