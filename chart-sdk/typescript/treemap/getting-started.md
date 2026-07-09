---
layout: post
title: Getting started with TypeScript TreeMap Component | Syncfusion
description:  Checkout and learn about Getting started with TypeScript TreeMap Component of Syncfusion Essential JS 2 and more details.
platform: chart-sdk
control: Getting started 
publishingplatform: chart-sdk
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---


# Getting started in TypeScript TreeMap Component

This section explains the steps to create a simple TreeMap and demonstrates the basic usage of the TreeMap component using the Essential<sup style="font-size:70%">&reg;</sup> JS 2 [quickstart](https://github.com/SyncfusionExamples/ej2-quickstart-webpack-) seed repository. This seed repository is pre-configured with the Essential<sup style="font-size:70%">&reg;</sup> JS 2 package.

> This application is integrated with the `webpack.config.js` configuration and uses the latest version of the [webpack-cli](https://webpack.js.org/api/cli/#commands). It requires node `v14.15.0` or higher. For more information about webpack and its features, refer to the [webpack documentation](https://webpack.js.org/guides/getting-started/).

## Dependencies

The following list of minimum dependencies are required to use the TreeMap Component:

```javascript
|-- @syncfusion/ej2-treemap
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-data
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

## Add TreeMap Component to the project

The Essential<sup style="font-size:70%">&reg;</sup> JS2 TreeMap Component can be added to the application. To get started, add the TreeMap Component to the **app.ts** and **index.html** files using the following code.

Add an HTML div element to act as the TreeMap element in the **index.html** file using the following code.

{% tabs %}
{% highlight html tabtitle="index.html" %}

<!DOCTYPE html>
<html lang="en">

<head>
    <title>EJ2 TreeMap</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Typescript UI Controls" />
    <meta name="author" content="Syncfusion" />
</head>

<body>
    <!--container which is going to render the TreeMap-->
    <div id='container'>
    </div>
</body>

</html>

{% endhighlight %}
{% endtabs %}

Import the TreeMap Component in the `app.ts` to initialize the TreeMap. The following properties are used in this example:

* [`dataSource`](https://ej2.syncfusion.com/documentation/api/treemap/index-default#datasource): Binds the data array containing hierarchical information about companies and sales.
* [`weightValuePath`](https://ej2.syncfusion.com/documentation/api/treemap/index-default#weightvaluepath): Specifies which data property ("Sales") determines the size of each item in the TreeMap.
* [`leafItemSettings`](https://ej2.syncfusion.com/documentation/api/treemap/index-default#leafitemsettings): Configures the appearance of leaf items (car companies), including label path, border color, and font styling.
* [`levels`](https://ej2.syncfusion.com/documentation/api/treemap/index-default#levels): Defines hierarchical grouping levels. This example groups data by "Continent" and applies border settings.
* [`palette`](https://ej2.syncfusion.com/documentation/api/treemap/index-default#palette): Sets a custom color palette to visualize the items based on their hierarchical position.

The TreeMap is rendered using `treemap.appendTo('#container')`, which displays the control within the HTML element with the ID "container".

{% tabs %}
{% highlight ts tabtitle="app.ts" %}

import { TreeMap } from '@syncfusion/ej2-treemap';

const data: Object[] = [
    { Continent: "China", Company: "Volkswagen", Sales: 3005994 },
    { Continent: "China", Company: "General Motors", Sales: 1230044 },
    { Continent: "China", Company: "Honda", Sales: 1197023 },
    { Continent: "United States", Company: "General Motors", Sales:3042775  },
    { Continent: "United States", Company: "Ford", Sales:2599193  },
    { Continent: "United States", Company: "Toyota", Sales:2449587  },
    { Continent: "Japan",Company: "Toyota", Sales:1527977  },
    { Continent: "Japan", Company: "Honda", Sales:706982 },
    { Continent: "Japan", Company: "Suzuki", Sales:623041  },
    { Continent: "Germany",Company: "Volkswagen", Sales:655977  },
    { Continent: "Germany", Company: "Mercedes", Sales:310845  },
    { Continent: "Germany", Company: "BMW", Sales:261931  },
    { Continent: "United Kingdom", Company: "Ford ", Sales:319442  },
    { Continent: "United Kingdom", Company: "Vauxhall", Sales: 251146 },
    { Continent: "United Kingdom", Company: "Volkswagen", Sales:206994  },
    { Continent: "India", Company: "Maruti Suzuki", Sales:1443654  },
    { Continent: "India", Company: "Hyundai", Sales:476241  },
    { Continent: "India", Company: "Mahindra", Sales:205041  },
    { Continent: "France", Company: "Renault", Sales:408183 },
    { Continent: "France", Company: "Peugeot", Sales:336242 },
    { Continent: "France", Company: "Citroen", Sales:194986  },
    { Continent: "Brazil", Company: "Flat Chrysler", Sales:368842  },
    { Continent: "Brazil", Company: "General Motors", Sales: 348351 },
    { Continent: "Brazil", Company: "Volkswagen", Sales: 245895 },
    { Continent: "Italy", Company: "Flat Chrysler", Sales:386260  },
    { Continent: "Italy", Company: "Volkswagen", Sales: 138984 },
    { Continent: "Italy", Company: "Ford", Sales: 125144 },
    { Continent: "Canada", Company: "Ford", Sales:305086},
    { Continent: "Canada", Company: "FCA", Sales:278011 },
    { Continent: "Canada", Company: "GM", Sales: 266884 }
];
// Initialize the tree map control
let treemap: TreeMap = new TreeMap({
    dataSource: data,
    weightValuePath: 'Sales',
    leafItemSettings: {
        labelPath: 'Company',
        border: { color: 'white', width: 0.5 },
        labelStyle: {
            fontFamily: 'Segoe UI'
        }
    },
    levels: [
        {
            groupPath: 'Continent', border: { color: 'white', width: 0.5 },
        }
    ],
    palette: ['#C33764', '#AB3566', '#993367', '#853169', '#742F6A', '#632D6C', '#532C6D', '#412A6F', '#312870', '#1D2671'],
});

// Render the initialized tree map
treemap.appendTo('#container');

{% endhighlight %}
{% endtabs %}

This example renders a hierarchical TreeMap with the provided data source. The items are sized proportionally based on their sales values and grouped by continent.

## Run the application

The quickstart project is configured to compile and run the application in the browser. Use the following command to run the application.

{% tabs %}
{% highlight bash tabtitle="NPM" %}

npm start

{% endhighlight %}
{% endtabs %}

## Module injection

The TreeMap Component is segregated into individual feature-wise modules. To enable additional functionality beyond basic rendering, inject the required feature modules using the `TreeMap.Inject()` method. The following modules are available:

* TreeMapHighlight - Inject this provider to use highlight feature.
* TreeMapSelection - Inject this provider to use selection feature.
* TreeMapLegend - Inject this provider to use legend feature.
* TreeMapTooltip - Inject this provider to use tooltip series.

In current application, the above basic tree map is modified to visualize international airport counts in South America.

In this demo, the tree map is rendered with labels only. So, you need not to import any modules.

## Render tree map

This section demonstrates how to render a TreeMap with a bound data source.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/treemap/getting-started-cs6/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/treemap/getting-started-cs6/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/treemap/getting-started-cs6" %}

In this example, the TreeMap is bound to a data source with [`weightValuePath`](https://ej2.syncfusion.com/documentation/api/treemap/index-default#weightvaluepath) set to the count property, which determines item sizes. Customize the appearance of leaf-level items using [`leafItemSettings`](https://ej2.syncfusion.com/documentation/api/treemap/index-default#leafitemsettings), where you can modify properties such as [`fill`](https://ej2.syncfusion.com/documentation/api/treemap/leafitemsettingsmodel#fill) (color), [`border`](https://ej2.syncfusion.com/documentation/api/treemap/leafitemsettingsmodel#border), and [`labelPosition`](https://ej2.syncfusion.com/documentation/api/treemap/leafitemsettingsmodel#labelposition).

## Apply color mapping

The color mapping feature enables customization of item colors based on values from the bound data source. Specify the data field to evaluate using either [`equalColorValuePath`](https://ej2.syncfusion.com/documentation/api/treemap/index-default#equalcolorvaluepath) (for discrete values) or [`rangeColorValuePath`](https://ej2.syncfusion.com/documentation/api/treemap/index-default#rangecolorvaluepath) (for continuous ranges). Choose the appropriate property based on whether your data requires exact value matching or range-based color gradients.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/treemap/getting-started-cs7/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/treemap/getting-started-cs7/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/treemap/getting-started-cs7" %}

## Enable legend

Enable the legend feature by setting the [`visible`](https://ej2.syncfusion.com/documentation/api/treemap/legendsettingsmodel#visible) property to `true` in the [`legendSettings`](https://ej2.syncfusion.com/documentation/api/treemap/legendsettingsmodel) object and injecting the `TreeMapLegend` module using `TreeMap.Inject(TreeMapLegend)`.


{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/treemap/getting-started-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/treemap/getting-started-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/treemap/getting-started-cs3" %}

## Add labels

Labels display additional information within TreeMap items and are visible by default. Control label visibility using the [`showLabels`](https://ej2.syncfusion.com/documentation/api/treemap/leafitemsettingsmodel#showlabels) property in [`leafItemSettings`](https://ej2.syncfusion.com/documentation/api/treemap/leafitemsettingsmodel).

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/treemap/getting-started-cs4/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/treemap/getting-started-cs4/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/treemap/getting-started-cs4" %}

## Enable tooltip

Tooltips provide an alternative way to display information when space constraints prevent labels from showing all details. Enable tooltips by setting the [`visible`](https://ej2.syncfusion.com/documentation/api/treemap/tooltipsettingsmodel#visible) property to `true` in the [`tooltipSettings`](https://ej2.syncfusion.com/documentation/api/treemap/tooltipsettingsmodel) object and injecting the `TreeMapTooltip` module using `TreeMap.Inject(TreeMapTooltip)`.


{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/treemap/getting-started-cs5/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/treemap/getting-started-cs5/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/treemap/getting-started-cs5" %}
