---
layout: post
title: Getting started with TypeScript HeatMap | Syncfusion
description:  Checkout and learn about Getting started with TypeScript HeatMap Chart Component of Syncfusion Essential JS 2 and more details.
platform: chart-sdk
control: Getting started 
publishingplatform: chart-sdk
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---

# Getting started with TypeScript HeatMap Chart Component

This section explains how to create a HeatMap component in a TypeScript project using Essential<sup style="font-size:70%">&reg;</sup> JS 2 [quickstart](https://github.com/SyncfusionExamples/ej2-quickstart-webpack-) seed repository. The repository comes pre-configured with necessary dependencies and is integrated with webpack for bundling and development workflows.

> The application uses `webpack.config.js` and the latest [webpack-cli](https://webpack.js.org/api/cli#commands). Node.js v14.15.0 or higher is required. Refer to the [webpack documentation](https://webpack.js.org/guides/getting-started/) for more information about webpack features and configuration.

## Prerequisites

Before getting started, ensure the following requirements are met:

- TypeScript knowledge and basic understanding of npm/webpack
- Node.js v14.15.0 or higher installed
- npm or yarn package manager available

## Dependencies

The HeatMap component requires the following npm packages:

```javascript
|-- @syncfusion/ej2-heatmap
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-data
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

## Add HeatMap to the project

Add an HTML container element to your `index.html` file.

{% tabs %}
{% highlight html tabtitle="index.html" %}

<!DOCTYPE html>
<html lang="en">

<head>
    <title>EJ2 HeatMap</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Typescript UI Controls" />
    <meta name="author" content="Syncfusion" />
</head>

<body>
    <!--container which is going to render the HeatMap-->
    <div id='element'>
    </div>
</body>

</html>

{% endhighlight %}
{% endtabs %}

Import the HeatMap component into your `app.ts` file and initialize it with the container element.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}

import { HeatMap } from '@syncfusion/ej2-heatmap';

// initialize HeatMap component
let heatmap: HeatMap = new HeatMap();

// render initialized HeatMap
heatmap.appendTo('#element');

{% endhighlight %}
{% endtabs %}

Use the `npm start` command to run the application in the browser.

{% tabs %}
{% highlight bash tabtitle="NPM" %}

npm start

{% endhighlight %}
{% endtabs %}

The below example shows a basic HeatMap.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/heatmap-chart/getting-started-cs8/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/heatmap-chart/getting-started-cs8/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/heatmap-chart/getting-started-cs8" %}

## Module Injection

The HeatMap component is structured with modular features. To use optional features like Legend and Tooltip, inject the corresponding module using the `HeatMap.Inject()` method. This ensures only necessary modules are bundled, reducing application size.

The following modules are available:

* Legend - Provides the legend feature by injecting it.
* Tooltip - Provides the tooltip feature by injecting it.

Now, import the above-mentioned modules from the heat map package and inject them into the heat map control using the `HeatMap.Inject()` method.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}

import {Legend, Tooltip} from '@syncfusion/ej2-heatmap';
HeatMap.Inject(Legend, Tooltip);

{% endhighlight %}
{% endtabs %}

## Populate HeatMap with data

The HeatMap requires a two-dimensional array where each element represents a data point with its corresponding value. Rows typically represent categories on the Y-axis, and columns represent categories on the X-axis. Values are color-encoded based on the palette settings.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/heatmap-chart/getting-started-cs9/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/heatmap-chart/getting-started-cs9/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/heatmap-chart/getting-started-cs9" %}

## Enable axis labels

You can add axis labels to the heat map and format those labels using the [xAxis](../api/heatmap#xaxis) and [yAxis](../api/heatmap#yaxis) properties. Axis labels provide additional information about the data points populated in the heat map.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/heatmap-chart/getting-started-cs10/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/heatmap-chart/getting-started-cs10/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/heatmap-chart/getting-started-cs10" %}

## Add HeatMap title

Display a title for the HeatMap using the [titleSettings](../api/heatmap#titlesettings) property to describe the data being visualized.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/heatmap-chart/getting-started-cs11/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/heatmap-chart/getting-started-cs11/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/heatmap-chart/getting-started-cs11" %}

## Enable legend

Display a legend for the HeatMap by setting the [visible](../api/heatmap/legendSettings#visible) property to **true** in the [legendSettings](../api/heatmap#legendsettings) object and injecting the `Legend` module using `HeatMap.Inject(Legend)`.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/heatmap-chart/getting-started-cs12/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/heatmap-chart/getting-started-cs12/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/heatmap-chart/getting-started-cs12" %}

## Add data labels

Add data labels to improve the readability of the heat map. This can be achieved by setting the [showLabel](../api/heatmap/cellSettings#showlabel) property to **true** in the [cellSettings](../api/heatmap#cellsettings) object.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/heatmap-chart/getting-started-cs13/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/heatmap-chart/getting-started-cs13/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/heatmap-chart/getting-started-cs13" %}

## Add custom cell palette

The default palette settings of the heat map cells can be customized by using the [paletteSettings](../api/heatmap#palettesettings) property.
Using the [palette](../api/heatmap/paletteSettings#palette) property in `paletteSettings` object, you can change the color set for the cells.
You can change the color mode of the cells to fixed or gradient mode using the [type](../api/heatmap/paletteSettings#type) property.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/heatmap-chart/getting-started-cs14/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/heatmap-chart/getting-started-cs14/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/heatmap-chart/getting-started-cs14" %}

## Enable tooltip

The tooltip is used when you cannot display information by using the data labels due to space constraints. You can enable the tooltip by setting the [showTooltip](../api/heatmap#showtooltip) property to `true` and injecting the `Tooltip` module using the `HeatMap.Inject(Tooltip)` method.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/heatmap-chart/getting-started-cs15/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/heatmap-chart/getting-started-cs15/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/heatmap-chart/getting-started-cs15" %}