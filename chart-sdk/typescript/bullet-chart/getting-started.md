---
layout: post
title: Getting started with TypeScript Bullet Chart control | Syncfusion
description:  Check out and learn about Getting started with TypeScript Bullet chart control of Syncfusion Essential JS 2 and more details.
platform: chart-sdk
control: Bullet Chart 
publishingplatform: chart-sdk
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---

# Getting started with TypeScript Bullet chart control

This document explains how to create a simple Bullet Chart and configure its features in TypeScript using the Essential JS 2 webpack [quickstart](https://github.com/SyncfusionExamples/ej2-quickstart-webpack) seed repository.

> This application is integrated with the `webpack.config.js` configuration and uses the latest version of the [webpack-cli](https://webpack.js.org/api/cli/#commands). It requires node `v14.15.0` or higher. For more information about webpack and its features, refer to the [webpack getting-started guide](https://webpack.js.org/guides/getting-started/).

## Dependencies

Below is the list of minimum dependencies required to use the Bullet Chart.

```
|-- @syncfusion/ej2-charts
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-data
    |-- @syncfusion/ej2-pdf-export
    |-- @syncfusion/ej2-file-utils
    |-- @syncfusion/ej2-compression
    |-- @syncfusion/ej2-svg-base
```

## Set up development environment

Open the command prompt from the required directory, and run the following command to clone the Syncfusion JavaScript (Essential JS 2) quickstart project from [GitHub](https://github.com/SyncfusionExamples/ej2-quickstart-webpack).

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

## Add Syncfusion JavaScript packages

Syncfusion JavaScript (Essential JS 2) packages are available on the [npmjs.com](https://www.npmjs.com/~syncfusionorg) public registry. You can install all Syncfusion JavaScript (Essential JS 2) controls in a single [@syncfusion/ej2](https://www.npmjs.com/package/@syncfusion/ej2) package or individual packages for each control.

The quickstart application is preconfigured with the dependent [@syncfusion/ej2](https://www.npmjs.com/package/@syncfusion/ej2) package in the `~/package.json` file. Use the following command to install the dependent npm packages from the command prompt.

{% tabs %}
{% highlight bash tabtitle="NPM" %}

npm install

{% endhighlight %}
{% endtabs %}

## Add Bullet Chart to the Project

Open the project in Visual Studio Code and add the Bullet Chart to the application.

Add the HTML div tag with its `id` attribute as `element` in your `~/src/index.html` file to initialize the Bullet chart.

{% tabs %}
{% highlight html tabtitle="index.html" %}

<!DOCTYPE html>
<html lang="en">

<head>
    <title>EJ2 Bullet Chart</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="TypeScript UI Controls" />
    <meta name="author" content="Syncfusion" />
    ....
    ....
</head>

<body>
     <!--container which is going to render the Bullet Chart-->
     <div id='element'>
     </div>
</body>

</html>

{% endhighlight %}
{% endtabs %}

Import the Bullet Chart component into `src/app/app.ts` to instantiate and render the Bullet Chart.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}

import { BulletChart } from '@syncfusion/ej2-charts';

// initialize BulletChart component
let bulletChart: BulletChart = new BulletChart();

// render initialized Bullet Chart
bulletChart.appendTo('#element');

{% endhighlight %}
{% endtabs %}

Now use the `npm run start` command to run the application in the browser.

{% tabs %}
{% highlight bash tabtitle="NPM" %}

npm run start

{% endhighlight %}
{% endtabs %}

The following example shows a basic Bullet Chart.


{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/bullet-chart/getting-started-cs6/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/bullet-chart/getting-started-cs6/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/bullet-chart/getting-started-cs6" %}

## Module Injection

The Bullet Chart component is segregated into individual feature-wise modules. In order to use a particular feature, you need to inject its feature module using the `BulletChart.Inject()` method. In this application, we use the tooltip feature of the Bullet Chart.

* `BulletTooltip` - Inject this module to use the tooltip feature.

Now import the above-mentioned modules from the chart package and inject them into the Bullet Chart component using `BulletChart.Inject` method.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}

import { BulletChart, BulletTooltip } from '@syncfusion/ej2-charts';
BulletChart.Inject(BulletTooltip);

{% endhighlight %}
{% endtabs %}

## BulletChart With Data

This section explains how to plot the following JSON data to the Bullet Chart.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}

let data: Object[] = [
    { value: 100, target: 80 },
    { value: 200, target: 180 },
    { value: 300, target: 280 },
    { value: 400, target: 380 },
    { value: 500, target: 480 },
];

{% endhighlight %}
{% endtabs %}

Now assign the local data to the `dataSource` property. The `value` and `target` fields should be mapped to `valueField` and `targetField`, respectively.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/bullet-chart/getting-started-cs7/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/bullet-chart/getting-started-cs7/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/bullet-chart/getting-started-cs7" %}

## Add Bullet Chart Title

You can add a title using the `title` property to the Bullet Chart to provide quick information to the user about the data plotted in the Bullet Chart.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/bullet-chart/getting-started-cs8/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/bullet-chart/getting-started-cs8/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/bullet-chart/getting-started-cs8" %}

## Ranges

You can add a range using the `ranges` property to the Bullet Chart.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/bullet-chart/getting-started-cs9/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/bullet-chart/getting-started-cs9/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/bullet-chart/getting-started-cs9" %}

## Tooltip

You can use the tooltip for the Bullet Chart by setting the `enable` property to `true` in the `tooltip` object and by injecting the `BulletTooltip` module using the `BulletChart.Inject(BulletTooltip)` method.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/bullet-chart/getting-started-cs10/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/bullet-chart/getting-started-cs10/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/bullet-chart/getting-started-cs10" %}