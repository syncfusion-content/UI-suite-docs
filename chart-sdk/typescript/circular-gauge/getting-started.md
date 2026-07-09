---
layout: post
title: Getting started with TypeScript Circular Gauge Component | Syncfusion
description:  Checkout and learn about Getting started with TypeScript Circular Gauge Component of Syncfusion Essential JS 2 and more details.
platform: chart-sdk
control: Getting started 
publishingplatform: chart-sdk
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---


# Getting started in TypeScript Circular Gauge Component

This guide demonstrates how to create and configure a **Circular gauge** component in TypeScript using Syncfusion Essential<sup style="font-size:70%">&reg;</sup> JS 2. The Circular gauge is a data visualization control that displays values on a circular scale, useful for dashboards, monitoring systems, and data presentation applications.

By the end of this guide, you will:
- Set up a TypeScript development environment for Syncfusion components
- Create your first Circular gauge instance
- Configure basic properties like pointer values and axes
- Run the application in your browser

> This guide uses the Syncfusion quickstart repository, preconfigured with webpack for TypeScript compilation. The application requires Node.js `v14.15.0` or higher and leverages the [webpack-cli](https://webpack.js.org/api/cli/#commands) for bundling. Learn more about [webpack configuration and features](https://webpack.js.org/guides/getting-started/).

## Prerequisites

Before getting started, ensure your development environment meets these requirements:

- **Node.js**: Version 14.15.0 or higher (verify with `node --version` in your terminal)
- **npm**: Version 6.0 or higher (included with Node.js)
- **TypeScript**: Basic familiarity with TypeScript syntax
- **Code Editor**: Visual Studio Code or any preferred IDE with TypeScript support

## Dependencies

The Circular gauge requires the following minimum Syncfusion packages:

```javascript
|-- @syncfusion/ej2-circulargauge
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-svg-base
    |-- @syncfusion/ej2-pdf-export
```

These dependencies are automatically installed when you use the quickstart repository.

## Set up the development environment

### Step 1: Clone the quickstart project

Open the command prompt from the required directory, and run the following command to clone the Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript (Essential<sup style="font-size:70%">&reg;</sup> JS 2) quickstart project from [GitHub](https://github.com/SyncfusionExamples/ej2-quickstart-webpack-).

{% tabs %}
{% highlight bash tabtitle="CMD" %}

git clone https://github.com/SyncfusionExamples/ej2-quickstart-webpack- ej2-quickstart

{% endhighlight %}
{% endtabs %}

After cloning the application in the `ej2-quickstart` folder, run the following command line to navigate to the `ej2-quickstart` folder.

### Step 2: Navigate to the project folder

Change to the newly created project directory:

{% tabs %}
{% highlight bash tabtitle="CMD" %}

cd ej2-quickstart

{% endhighlight %}
{% endtabs %}

## Add Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript packages

Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript (Essential<sup style="font-size:70%">&reg;</sup> JS 2) packages are available on the [npmjs.com](https://www.npmjs.com/~syncfusionorg) public registry. You can install all Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript (Essential<sup style="font-size:70%">&reg;</sup> JS 2) controls in a single [@syncfusion/ej2](https://www.npmjs.com/package/@syncfusion/ej2) package or individual packages for each control.

The quickstart application is preconfigured with the dependent [@syncfusion/ej2](https://www.npmjs.com/package/@syncfusion/ej2) package in the `~/package.json` file. Use the following command to install the dependent npm packages from the command prompt.

{% tabs %}
{% highlight bash tabtitle="NPM" %}

npm install

{% endhighlight %}
{% endtabs %}

This command downloads and installs all packages specified in `package.json`, including the Circular gauge and its dependencies.

## Create your first Circular gauge

### Step 1: Define the HTML container

Add a container `<div>` element in the **index.html** file where the Circular gauge will render:

{% tabs %}
{% highlight html tabtitle="index.html" %}

<!DOCTYPE html>
<html lang="en">

<head>
  <title>EJ2 Circular Gauge</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Typescript UI Controls" />
    <meta name="author" content="Syncfusion" />
</head>

<body>
  <!--container which is going to render the Circular gauge-->
  <div id='container'>
  </div>
</body>

</html>

{% endhighlight %}
{% endtabs %}

### Step 2: Initialize the Circular gauge in TypeScript

In your **app.ts** file, import the Circular gauge component and initialize it:

{% tabs %}
{% highlight ts tabtitle="app.ts" %}

import { CircularGauge } from '@syncfusion/ej2-circulargauge';

// initialize CircularGauge component
let gauge: CircularGauge = new CircularGauge();

// render initialized CircularGauge
gauge.appendTo('#container');

{% endhighlight %}
{% endtabs %}

The `appendTo()` method attaches the Circular gauge instance to the DOM element with the ID `container`.

## Build and run the application

The quickstart project uses webpack to compile TypeScript and bundle your application. To start the development server and run the application in your browser:

{% tabs %}
{% highlight bash tabtitle="NPM" %}

npm start

{% endhighlight %}
{% endtabs %}

The build process will compile your TypeScript code and launch the application at `http://localhost:8080/` (or another port if 8080 is busy). Your browser will automatically open to display your Circular gauge.

### View a complete example

The example below demonstrates a basic Circular gauge with default configuration:

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/circular-gauge/getting-started-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/circular-gauge/getting-started-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/circular-gauge/getting-started-cs1" %}

## Set Pointer Value

You can change the pointer value in the above sample using [`value`](../api/circular-gauge/pointer#value-number) property in [`pointers`](../api/circular-gauge/pointer).

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/circular-gauge/getting-started-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/circular-gauge/getting-started-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/circular-gauge/getting-started-cs2" %}
