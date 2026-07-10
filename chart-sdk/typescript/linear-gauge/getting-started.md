---
layout: post
title: Getting started with TypeScript Linear Gauge | Syncfusion
description:  Checkout and learn about Getting started with TypeScript Linear Gauge Component of Syncfusion Essential JS 2 and more details.
platform: chart-sdk
control: Getting started 
publishingplatform: chart-sdk
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---

# Getting started with TypeScript Linear Gauge Component

This section walks you through creating a **Linear Gauge** component and configuring its available functionalities in TypeScript using the Essential<sup style="font-size:70%">&reg;</sup> JS 2 [quickstart](https://github.com/SyncfusionExamples/ej2-quickstart-webpack-) seed repository. By the end of this guide, you will have a fully functional Linear Gauge integrated into a webpack-based TypeScript project.

> This application uses the `webpack.config.js` configuration and the latest version of the [webpack-cli](https://webpack.js.org/api/cli/#commands). It requires Node.js `v14.15.0` or higher. For more information about webpack and its features, see the [webpack documentation](https://webpack.js.org/guides/getting-started/).

## Dependencies

The following lists the minimum dependencies required to use the Linear Gauge:

```javascript
|-- @syncfusion/ej2-lineargauge
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-pdf-export
    |-- @syncfusion/ej2-svg-base
```

## Set up development environment

Open the command prompt from the required directory, and run the following command to clone the Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript (Essential<sup style="font-size:70%">&reg;</sup> JS 2) quickstart project from [GitHub](https://github.com/SyncfusionExamples/ej2-quickstart-webpack-).

{% tabs %}
{% highlight bash tabtitle="CMD" %}

git clone https://github.com/SyncfusionExamples/ej2-quickstart-webpack- ej2-quickstart

{% endhighlight %}
{% endtabs %}

After cloning the application in the `ej2-quickstart` folder, run the following command line to navigate to the `ej2-quickstart` folder.

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

## Adding Linear Gauge component to the project

The Essential<sup style="font-size:70%">&reg;</sup> JS2 Linear Gauge component can be added to the application. To get started, add the Linear Gauge component to the **app.ts** and **index.html** files using the following code.

Add an HTML div element to act as the Linear Gauge element in the **index.html** file using the following code.

{% tabs %}
{% highlight html tabtitle="index.html" %}

<!DOCTYPE html>
<html lang="en">

<head>
    <title>EJ2 Linear gauge</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Typescript UI Controls" />
    <meta name="author" content="Syncfusion" />
</head>

<body>
    <!-- container which is going to render the linear gauge -->
    <div id='container'>
    </div>
</body>

</html>

{% endhighlight %}
{% endtabs %}

Import the LinearGauge component in the **app.ts** file to initialize the Linear Gauge and append the Linear Gauge instance to the `#container`.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}

import { LinearGauge } from '@syncfusion/ej2-lineargauge';

// initialize linear gauge component
let gauge: LinearGauge = new LinearGauge();

// render initialized linear gauge
gauge.appendTo('#container');

{% endhighlight %}
{% endtabs %}

## Run the application

The quickstart project is configured to compile and run the application in the browser.

{% tabs %}
{% highlight bash tabtitle="NPM" %}

npm start

{% endhighlight %}
{% endtabs %}

The following example demonstrates a basic Linear Gauge component.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/linear-gauge/getting-started-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/linear-gauge/getting-started-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/linear-gauge/getting-started-cs2" %}

## Module Injection

The Linear Gauge component uses modular architecture to optimize bundle size. Features are provided as individual modules that must be explicitly injected to enable them. This approach allows you to include only the features your application requires.

**Available Feature Modules:**

  * Annotation -  Inject this module to use the annotation features.
  * GaugeTooltip - Inject this module to use the tooltip features.

Import the required feature modules from the Linear Gauge package and inject them using **LinearGauge.Inject()**.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}

import { GaugeTooltip, Annotations } from '@syncfusion/ej2-lineargauge';
LinearGauge.Inject(Annotations, GaugeTooltip);

{% endhighlight %}
{% endtabs %}

## Adding the Linear Gauge Title

Add a title to the Linear Gauge component using the [`title`](../api/linear-gauge/linearGaugeModel#title) property.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/linear-gauge/getting-started-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/linear-gauge/getting-started-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/linear-gauge/getting-started-cs3" %}

## Axis Range

Configure the axis range using the [`minimum`](../api/linear-gauge/axis#minimum) and [`maximum`](../api/linear-gauge/axis#maximum) properties to define the scale of your Linear Gauge.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/linear-gauge/getting-started-cs4/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/linear-gauge/getting-started-cs4/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/linear-gauge/getting-started-cs4" %}

To add units like °C to axis labels, set the [`format`](../api/linear-gauge/labelModel#format) property in the [`labelStyle`](../api/linear-gauge/axis#labelstyle) object of the axis to **{value}°C**. The **{value}** placeholder is replaced with each axis label. To customize the pointer position, set the [`value`](../api/linear-gauge/pointer#value) property in the [`pointers`](../api/linear-gauge/pointerModel) array of the axis.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/linear-gauge/getting-started-cs5/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/linear-gauge/getting-started-cs5/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/linear-gauge/getting-started-cs5" %}

## Setting the value of the pointer

Modify the pointer value using the [`value`](../api/linear-gauge/pointer#value) property in the [`pointers`](../api/linear-gauge/pointer) array of the axis.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/linear-gauge/getting-started-cs6/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/linear-gauge/getting-started-cs6/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/linear-gauge/getting-started-cs6" %}
