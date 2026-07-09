---
layout: post
title: Getting started with TypeScript File Manager control | Syncfusion
description: Learn how to get started with the TypeScript File Manager component using Syncfusion Essential JS 2.
platform: file-manager-sdk
control: File Manager
publishingplatform: file-manager-sdk
documentation: ug
domainurl: https://help.syncfusion.com/file-manager-sdk
---

# Getting started in TypeScript File Manager control

This section explains how to create a simple File Manager and demonstrates the basic usage of the [File Manager](https://www.syncfusion.com/javascript-ui-controls/js-file-manager) control.

## Prerequisites

This guide uses Vite as the bundler and development environment. Install Node.js 24.13.0 or higher before proceeding. For detailed information about Vite's capabilities and configuration options, refer to the [Vite documentation](https://vitejs.dev/).

## Create a TypeScript application.

To set-up a Typescript application in TypeScript environment, run the following command.

```bash
npm create vite@latest my-app -- --template vanilla-ts
```
This command will prompt you to install the required packages and start the application. Select the options as shown below.

![File Manager Initial setup](images/npm_setup.png)

As Syncfusion packages are not installed yet, currently, the `No` option will be selected. Then, navigate to the project directory using the following command:

```bash
cd my-app
```

## Adding File Manager package

All the available Essential<sup style="font-size:70%">&reg;</sup> JS 2 packages are published in [npmjs.com](https://www.npmjs.com/~syncfusionorg) public registry. To install [File Manager](https://www.syncfusion.com/javascript-ui-controls/js-file-manager), use the following command.

```
npm i @syncfusion/ej2-filemanager
```

## Adding CSS reference

To install the [Tailwind3](https://www.npmjs.com/package/@syncfusion/ej2-tailwind3-theme) theme package, use the following command:

```bash
npm i @syncfusion/ej2-tailwind3-theme
```

In this package, the File Manager control includes an `index.css` file that automatically loads all the required dependency styles. Add the following import to the `~/src/styles.css` file.

```css
@import "../node_modules/@syncfusion/ej2-tailwind3-theme/styles/file-manager/index.css";
```

## Adding File Manager control

To get started, add the [File Manager](https://www.syncfusion.com/javascript-ui-controls/js-file-manager) control in `main.ts` and `index.html` files. File Manager can be initialized through div element.

{% tabs %}
{% highlight ts tabtitle="main.ts" %}

import { FileManager, Toolbar, NavigationPane, DetailsView } from '@syncfusion/ej2-filemanager';
import './style.css';

FileManager.Inject(Toolbar, NavigationPane, DetailsView);

let hostUrl: string = 'https://ej2-aspcore-service.azurewebsites.net/';
let filemanagerInstance: FileManager = new FileManager({
  ajaxSettings: {
    url: hostUrl + 'api/FileManager/FileOperations'
  }
});

filemanagerInstance.appendTo('#filemanager');

{% endhighlight %}

{% highlight css tabtitle="styles.css" %}

@import "../node_modules/@syncfusion/ej2-tailwind3-theme/styles/file-manager/index.css";

{% endhighlight %}

{% highlight html tabtitle="index.html" %}
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>my-app</title>
  </head>
  <body>
    <div id="filemanager"></div>
    <script type="module" src="/src/main.ts"></script>
  </body>
</html>

{% endhighlight %}
{% endtabs %}

>Note: The [`ajaxSettings`](../api/file-manager#ajaxsettings) must be defined when initializing the File Manager. The File Manager uses the URLs specified in `ajaxSettings` to send file operation requests to the server. The File Manager service link is provided in `hostUrl`.

## Run the application

Use the following command to run the application in the browser.

```bash
npm run dev
```

## See also

* [Ajax Settings Configuration (uploadUrl, downloadUrl, getImageUrl)](../file-operations.md#ajax-settings-configuration)
* [Injecting Services for Overview](../user-interface#injecting-services-for-overview)
* [File Manager Views](../views)
* [File Manager File Operations](../file-operations)
* [File Manager Upload](../upload)
* [File Manager Customization](../customization)