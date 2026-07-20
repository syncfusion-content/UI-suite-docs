---
layout: post
title: Getting started with TypeScript 3D Chart control | Syncfusion
description:  Check out and learn about Getting started with TypeScript 3D Chart control of Syncfusion Essential JS 2 and more details.
platform: chart-sdk
control: 3D Chart 
publishingplatform: chart-sdk
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---

# Getting started with TypeScript 3D Chart control

This document explains how to create a simple 3D Chart and configure its features in TypeScript using the Essential JS 2 webpack [quickstart](https://github.com/SyncfusionExamples/ej2-quickstart-webpack) seed repository.

> This application is integrated with the `webpack.config.js` configuration and uses the latest version of the [webpack-cli](https://webpack.js.org/api/cli/#commands). It requires node `v14.15.0` or higher. For more information about webpack and its features, refer to the [webpack getting-started guide](https://webpack.js.org/guides/getting-started/).

## Dependencies

Below is the list of minimum dependencies required to use the 3D Chart.

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

## Add 3D Chart to the project

Open the project in Visual Studio Code and add the 3D Chart to the application.

Add the HTML div tag with its `id` attribute as `element` in your `~/src/index.html` file to initialize the 3D Chart.

{% tabs %}
{% highlight html tabtitle="index.html" %}

<!DOCTYPE html>
<html lang="en">

<head>
    <title>EJ2 3D Chart</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Typescript UI Controls" />
    <meta name="author" content="Syncfusion" />
    ....
    ....
</head>

<body>
     <!--container which is going to render the 3D Chart-->
     <div id='element'>
     </div>
</body>

</html>

{% endhighlight %}
{% endtabs %}

Import the 3D Chart component in `src/app/app.ts` to instantiate and render the 3D Chart.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}

import { Chart3D } from '@syncfusion/ej2-charts';

// initialize 3D Chart component
let chart: Chart3D = new Chart3D();

// render initialized 3D Chart
chart.appendTo('#element');

{% endhighlight %}
{% endtabs %}

Now use the `npm run start` command to run the application in the browser.

{% tabs %}
{% highlight bash tabtitle="NPM" %}

npm run start

{% endhighlight %}
{% endtabs %}

The below example shows a basic 3D Chart.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/3d-charts/getting-started-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/3d-charts/getting-started-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/3d-charts/getting-started-cs1" %}

## Module injection

The 3D Chart component is segregated into individual feature modules. In order to use a particular feature, you need to inject its feature module using the `Chart3D.Inject()` method. The relevant feature modules are:

* ColumnSeries3D - Inject this module to use column series.
* Legend3D - Inject this module to use the legend.
* Tooltip3D - Inject this module to use the tooltip.
* DataLabel3D - Inject this module to use data labels.
* Category3D - Inject this module to use the category axis.

Now import the above-mentioned modules from the chart package and inject them into the Chart3D component using `Chart3D.Inject` method.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}

import { Chart3D, ColumnSeries3D, Legend3D, DataLabel3D, Category3D, Tooltip3D } from '@syncfusion/ej2-charts';
Chart3D.Inject(ColumnSeries3D, Legend3D, DataLabel3D, Category3D, Tooltip3D);

{% endhighlight %}
{% endtabs %}

## Populate 3D Chart with data

This section explains how to plot the following JSON data to the 3D Chart.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}

let chartData: Object[] = [
    { month: 'Jan', sales: 35 }, { month: 'Feb', sales: 28 },
    { month: 'Mar', sales: 34 }, { month: 'Apr', sales: 32 },
    { month: 'May', sales: 40 }, { month: 'Jun', sales: 32 },
    { month: 'Jul', sales: 35 }, { month: 'Aug', sales: 55 },
    { month: 'Sep', sales: 38 }, { month: 'Oct', sales: 30 },
    { month: 'Nov', sales: 25 }, { month: 'Dec', sales: 32 }
];

{% endhighlight %}
{% endtabs %}

Add a series object to the 3D Chart by using the [`series`](../api/chart3d/chart3dseriesmodel) property. Map the JSON fields `month` and `sales` to the series [`xName`](../api/chart3d/chart3dseriesmodel#xname) and [`yName`](../api/chart3d/chart3dseriesmodel#yname) properties, and set the JSON array as the [`dataSource`](../api/chart3d/chart3dseriesmodel#datasource) property.

Since the JSON contains category data, set the [`valueType`](../api/chart3d/chart3daxismodel#valuetype) for the horizontal axis (primaryXAxis) to `Category`. By default, the axis valueType is `Numeric`.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/3d-charts/getting-started-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/3d-charts/getting-started-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/3d-charts/getting-started-cs2" %}

The sales values are in thousands, so format the vertical axis label by adding `$` as a prefix and `K` as a suffix to each label. This can be achieved by setting `${value}K` to the [`labelFormat`](../api/chart3d/chart3daxismodel#labelformat) property of the axis. Here, `{value}` acts as a placeholder for each axis label.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/3d-charts/getting-started-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/3d-charts/getting-started-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/3d-charts/getting-started-cs3" %}

## Add 3D Chart title

You can add a title using the [`title`](../api/chart3d/chart3DModel#title) property to the 3D Chart to provide quick information to the user about the data plotted in the 3D Chart.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/3d-charts/getting-started-cs4/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/3d-charts/getting-started-cs4/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/3d-charts/getting-started-cs4" %}

## Enable legend

You can enable the legend for the 3D Chart by setting the [`visible`](../api/chart3d/chart3dlegendsettingsmodel#visible) property to `true` in the [`legendSettings`](../api/chart3d/chart3DModel#legendsettings) object and by injecting the `Legend3D` module using `Chart3D.Inject(Legend3D)`.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/3d-charts/getting-started-cs5/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/3d-charts/getting-started-cs5/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/3d-charts/getting-started-cs5" %}

## Add data label

You can add data labels to improve the readability of the 3D Chart. This can be achieved by setting the [`visible`](../api/chart3d/chart3ddatalabelsettingsmodel#visible) property to `true` in the [`dataLabel`](../api/chart3d/chart3dseriesmodel#datalabel) object and by injecting the `DataLabel3D` module using `Chart3D.Inject(DataLabel3D)`. Now, the data labels are arranged smartly based on the series.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/3d-charts/getting-started-cs6/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/3d-charts/getting-started-cs6/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/3d-charts/getting-started-cs6" %}

## Enable tooltip

The tooltip is useful when you cannot display information by using the data labels due to space constraints. You can enable the tooltip by setting the [`enable`](../api/chart3d/chart3dtooltipsettingsmodel#enable) property to `true` in the [`tooltip`](../api/chart3d/chart3DModel#tooltip) object and by injecting the `Tooltip3D` module using `Chart3D.Inject(Tooltip3D)`.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/3d-charts/getting-started-cs7/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/3d-charts/getting-started-cs7/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/3d-charts/getting-started-cs7" %}

> You can refer to our [JavaScript 3D Charts](https://www.syncfusion.com/javascript-ui-controls/js-3d-charts) feature tour page for its groundbreaking feature representations. You can also explore our [JavaScript 3D Charts example](https://ej2.syncfusion.com/demos/#/bootstrap5/three-dimension-chart/column.html) that shows various 3D Chart types and how to represent time-dependent data, showing trends in data at equal intervals.
