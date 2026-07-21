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

# Getting started with TypeScript File Manager control

This section explains how to create a simple File Manager and demonstrates the basic usage of the [File Manager](https://www.syncfusion.com/javascript-ui-controls/js-file-manager) control.

## Prerequisites

Before getting started, ensure the following tools are installed on your machine:

| Tool | Version / Notes |
|------|----------------|
| Node.js | v14.15.0 or higher |
| npm | Bundled with Node.js |
| Git | Required to clone the quickstart repository |
| Visual Studio Code | Recommended code editor |

You can verify your Node.js and npm versions by running:

```
node -v
npm -v
```

## Registering the license key

Syncfusion<sup style="font-size:70%">&reg;</sup> Essential<sup style="font-size:70%">&reg;</sup> JS 2 components require a valid license key from version **16.2.0.41** onwards. Using the components without a license key will display a **license validation message** in the browser console.

**Steps to register the license key:**

1. Sign in to the [Syncfusion License Portal](https://www.syncfusion.com/account/downloads) and copy your license key.
2. Register the key in your **src/app/app.ts** file, before instantiating any Syncfusion component:

```ts
import { registerLicense } from '@syncfusion/ej2-base';

registerLicense('YOUR_LICENSE_KEY_HERE');
```

> For more details on obtaining and registering a license key, refer to the [License Key Generation](https://ej2.syncfusion.com/documentation/licensing/license-key-generation) and [License Key Registration](https://ej2.syncfusion.com/documentation/licensing/license-key-registration) documentation.

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

All the available Essential<sup style="font-size:70%">&reg;</sup> JS 2 packages are published in the [npmjs.com](https://www.npmjs.com/~syncfusionorg) public registry. To install the File Manager package, use the following command.

```
npm install @syncfusion/ej2-filemanager
```

## Adding CSS reference

Themes for Syncfusion<sup style="font-size:70%">&reg;</sup> File Manager components can be applied using CSS files provided through [npm theme packages](https://www.npmjs.com/package/@syncfusion/ej2-tailwind3-theme). For available themes, refer to the [Themes](https://ej2.syncfusion.com/react/documentation/appearance/theme) documentation.

Install the **Tailwind 3** theme package using the following command:
 
{% tabs %}
{% highlight bash tabtitle="npm" %}
 
npm install @syncfusion/ej2-tailwind3-theme --save
 
{% endhighlight %}
{% endtabs %}
 
Then add the following CSS reference to the **~src/style.css** file:
 
{% tabs %}
{% highlight css tabtitle="style.css" %}
 
@import "../node_modules/@syncfusion/ej2-tailwind3-theme/styles/file-manager/index.css";
 
{% endhighlight %}
{% endtabs %}

## Adding File Manager control

To get started, add the [File Manager](https://www.syncfusion.com/javascript-ui-controls/js-file-manager) control in `main.ts` and `index.html` files. File Manager can be initialized through div element.

{% tabs %}
{% highlight ts tabtitle="main.ts" %}

import { FileManager, Toolbar, NavigationPane, DetailsView } from '@syncfusion/ej2-filemanager';
import './style.css';

FileManager.Inject(Toolbar, NavigationPane, DetailsView);

let hostUrl: string = 'https://physical-service.syncfusion.com/';
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

### Server-side setup

The sample uses `https://physical-service.syncfusion.com` as the `url` endpoint in `ajaxSettings`.

To use your own files, host a File Manager service and replace the `url` value with your service endpoint. See the [File System Provider](../file-system-provider) documentation for setup details.

>Note: The [`ajaxSettings`](../api/file-manager#ajaxsettings) property must be defined while initializing the File Manager. File Manager utilizes the URLs mentioned in `ajaxSettings` to send file operation requests to the server. The File Manager service link is provided in the `hostUrl` variable.

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