---
layout: post
title: Getting started with TypeScript Sparkline control | Syncfusion
description:  Checkout and learn about Getting started with TypeScript Sparkline control of Syncfusion Essential JS 2 and more details.
platform: chart-sdk
control: Getting started 
publishingplatform: chart-sdk
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---

# Getting started in TypeScript Sparkline control

This document explains the steps to create a simple Sparkline and demonstrates the basic usage of the TreeGrid component using the Essential<sup style="font-size:70%">&reg;</sup> JS 2 [quickstart](https://github.com/SyncfusionExamples/ej2-quickstart-webpack-) seed repository. This seed repository is pre-configured with the Essential<sup style="font-size:70%">&reg;</sup> JS 2 package.

> This application is integrated with the `webpack.config.js` configuration and uses the latest version of the [webpack-cli](https://webpack.js.org/api/cli/#commands). It requires node `v14.15.0` or higher. For more information about webpack and its features, refer to the [webpack documentation](https://webpack.js.org/guides/getting-started/).

## Dependencies

The following list of minimum dependencies are required to use the sparkline:

```javascript
|-- @syncfusion/ej2-charts
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-data
    |-- @syncfusion/ej2-svg-base
```

## Set up development environment

Open the command prompt from the required directory, and run the following command to clone the Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript (Essential<sup style="font-size:70%">&reg;</sup> JS 2) quickstart project from [GitHub](https://github.com/SyncfusionExamples/ej2-quickstart-webpack-).

{% tabs %}
{% highlight bash tabtitle="CMD" %}

git clone https://github.com/SyncfusionExamples/ej2-quickstart-webpack ej2-quickstart

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

## Add sparkline to project

Add an HTML div element for map into your `index.html`. `[src/index.html]`

{% tabs %}
{% highlight html tabtitle="index.html" %}

<!DOCTYPE html>
<html lang="en">

<head>
    <title>EJ2 Sparkline</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Typescript UI Controls" />
    <meta name="author" content="Syncfusion" />
</head>

<body>
     <!--container which is going to render the Sparkline-->
     <div id='element'>
     </div>
</body>

</html>

{% endhighlight %}
{% endtabs %}

Next, import the sparkline control into `index.ts`, create a sparkline instance, and append it to the `#container`.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}

import { Sparkline } from '@syncfusion/ej2-charts';

// Initialize the sparkline control
let sparkline: Sparkline = new Sparkline();

// Render initialized sparkline
sparkline.appendTo('#element');

{% endhighlight %}
{% endtabs %}

Now, use the `npm run start` command to run the application in browser.

{% tabs %}
{% highlight bash tabtitle="NPM" %}

npm run start

{% endhighlight %}
{% endtabs %}

{% tabs %}
{% highlight ts tabtitle="app.ts" %}

import { Sparkline } from '@syncfusion/ej2-charts';

let sparkline: Sparkline = new Sparkline();

sparkline.appendTo('#element');

{% endhighlight %}
{% endtabs %}

Since the data source has not been specified to the sparkline, no shapes will be rendered. Only an empty SVG element is appended to the sparkline container.

## Module injection

The sparkline component is segregated into individual feature-wise modules. To use a particular feature, inject its feature module using the `Sparkline.Inject()` method. The module available in sparkline and its description is as follows.

* SparklineTooltip - Inject this provider to use tooltip series.

In this application, the basic sparkline is modified to demonstrate various sparkline types.

In this application, the tooltip feature of the sparkline is used. Now, import the SparklineTooltip module from the sparkline package, and inject it into the sparkline control using the `Sparkline.Inject` method.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}

import { Sparkline, SparklineTooltip } from '@syncfusion/ej2-charts';
Sparkline.Inject(SparklineTooltip);

{% endhighlight %}
{% endtabs %}

## Bind data source to sparkline

The `dataSource` property enables data binding for the sparkline. It accepts a collection of values as input, such as a list of objects.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/sparkline-charts/getting-started-cs4/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/sparkline-charts/getting-started-cs4/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/sparkline-charts/getting-started-cs4" %}

## Change the type of sparkline

The sparkline type can be configured using the `type` property, which supports `Line`, `Column`, `WinLoss`, `Pie`, and `Area`. Here, the `area` type is applied.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/sparkline-charts/getting-started-cs5/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/sparkline-charts/getting-started-cs5/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/sparkline-charts/getting-started-cs5" %}

## Enable tooltip for sparkline

The sparkline provides additional information through a tooltip that appears when the mouse pointer hovers over the chart. You can enable tooltip by setting the [`visible`] property to true in [`tooltipSettings`] and injecting `SparklineTooltip` module using the `Sparkline.Inject(SparklineTooltip )` method.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/sparkline-charts/getting-started-cs6/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/sparkline-charts/getting-started-cs6/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/sparkline-charts/getting-started-cs6" %}