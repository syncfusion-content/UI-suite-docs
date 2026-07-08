---
layout: post
title: Getting started with JavaScript HeatMap | Syncfusion
description:  Checkout and learn about Getting started with JavaScript HeatMap Chart Component of Syncfusion Essential JS 2 and more details.
platform: chart-sdk
control: Getting started 
publishingplatform: chart-sdk
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---

# Getting started with JavaScript HeatMap Chart Component

The HeatMap component visualizes two-dimensional data with color-coded cells, making it ideal for displaying large datasets, correlation patterns, and performance metrics. Syncfusion's Essential<sup style="font-size:70%">&reg;</sup> JS 2 for JavaScript (global script)  framework provides a pure JavaScript implementation that runs in modern web browsers without dependencies.

## HeatMap Component Initialization

Initialize the HeatMap component using either of the following approaches:

* **Local setup**: Reference scripts and styles hosted locally on your machine
* **CDN approach**: Reference scripts and styles from a Content Delivery Network (faster for most use cases)

### Using local script and style references in a HTML page

**Step 1:** Create an app folder `quickstart` for Essential<sup style="font-size:70%">&reg;</sup> JS 2 JavaScript controls.

**Step 2:** You can get the global scripts and styles from the [Essential Studio<sup style="font-size:70%">&reg;</sup> JavaScript (Essential<sup style="font-size:70%">&reg;</sup> JS 2)](https://www.syncfusion.com/downloads/essential-js2) build installed location.

**Syntax:**
> Script: `**(installed location)**/Syncfusion/Essential Studio/{RELEASE_VERSION}/Essential JS 2/{PACKAGE_NAME}/dist/global/{PACKAGE_NAME}.min.js`

**Example:**

> Script: `C:/Program Files (x86)/Syncfusion/Essential Studio/16.2.45/Essential JS 2/ej2-heatmap/dist/global/ej2-heatmap.min.js`

**Step 3:** Create a folder `quickstart/resources` and copy/paste the dependent scripts and styles from the above installed location to `quickstart/resources` location.

**Step 4:** Create a HTML page (index.html) in `quickstart` location and add the Essential<sup style="font-size:70%">&reg;</sup> JS 2 script and style references.

```html
<!DOCTYPE html>
  <html xmlns="http://www.w3.org/1999/xhtml">
       <head>
            <title>Essential JS 2</title>
            <script src="resources/ej2-base.min.js" type="text/javascript"></script>
            <script src="resources/ej2-data.min.js" type="text/javascript"></script>
            <script src="resources/ej2-svg-base.min.js" type="text/javascript"></script>
            <script src="resources/ej2-heatmap.min.js" type="text/javascript"></script>
       </head>
       <body>
       </body>
  </html>
```

**Step 5:** Now, add the `div` element and initiate the **Essential<sup style="font-size:70%">&reg;</sup> JS 2 HeatMap** component in the **index.html** by using following code

```html
<!DOCTYPE html>
  <html xmlns="http://www.w3.org/1999/xhtml">
       <head>
            <title>Essential JS 2</title>
            <script src="resources/ej2-base.min.js" type="text/javascript"></script>
            <script src="resources/ej2-data.min.js" type="text/javascript"></script>
            <script src="resources/ej2-svg-base.min.js" type="text/javascript"></script>
            <script src="resources/ej2-heatmap.min.js" type="text/javascript"></script>
       </head>
       <body>
            <!-- Add the HTML <div> element  -->
             <div id="container"></div>
            <script>
                // initialize heatmap control
                var heatmap = new ej.heatmap.HeatMap();

                // Render initialized heatmap.
                heatmap.appendTo('#container')
            </script>
       </body>
  </html>
```

**Step 6:** Now, run the **index.html** in web browser, it will render the **Essential<sup style="font-size:70%">&reg;</sup> JS 2 HeatMap** component.

### Using CDN links for script and style reference

**Step 1:** Create an app folder `quickstart` for the Essential<sup style="font-size:70%">&reg;</sup> JS 2 JavaScript controls.

**Step 2:** The Essential<sup style="font-size:70%">&reg;</sup> JS 2 controls' global scripts are already hosted in the below CDN link formats.

**Common Control Script:**
> Syntax: `https://cdn.syncfusion.com/ej2/{RELEASE_VERSION}/dist/ej2.min.js`

**Example:**
> Script: [`https://cdn.syncfusion.com/ej2/32.1.19/dist/ej2.min.js`](https://cdn.syncfusion.com/ej2/32.1.19/dist/ej2.min.js)

**or**

**Individual Control Scripts:**

**Syntax**
>`http://cdn.syncfusion.com/ej2/{RELEASE_VERSION}/{PACKAGE_NAME}/dist/global/{PACKAGE_NAME}.min.js`

**Example:**
> HeatMap Script: [`https://cdn.syncfusion.com/ej2/32.1.19/ej2-heatmap/dist/global/ej2-heatmap.min.js`](https://cdn.syncfusion.com/ej2/32.1.19/ej2-heatmap/dist/global/ej2-heatmap.min.js)
>
>Dependency Scripts
>
> [`https://cdn.syncfusion.com/ej2/32.1.19/ej2-base/dist/global/ej2-base.min.js`](https://cdn.syncfusion.com/ej2/32.1.19/ej2-base/dist/global/ej2-base.min.js)
>
> [`https://cdn.syncfusion.com/ej2/32.1.19/ej2-data/dist/global/ej2-data.min.js`](https://cdn.syncfusion.com/ej2/32.1.19/ej2-data/dist/global/ej2-data.min.js)
>
> [`https://cdn.syncfusion.com/ej2/32.1.19/ej2-svg-base/dist/global/ej2-svg-base.min.js`](https://cdn.syncfusion.com/ej2/32.1.19/ej2-svg-base/dist/global/ej2-svg-base.min.js)

Create a HTML page (**index.html**) in **~/quickstart** location and add the CDN link references. Now, add the **div** element and initiate the **Essential<sup style="font-size:70%">&reg;</sup> JS 2 HeatMap** component in the **index.html** by using following code.

```
<!DOCTYPE html>
  <html xmlns="http://www.w3.org/1999/xhtml">
       <head>
            <title>Essential JS 2</title>
            <script src="https://cdn.syncfusion.com/ej2/{RELEASE_VERSION}/ej2-base/dist/global/ej2-base.min.js" type="text/javascript"></script>
            <script src="https://cdn.syncfusion.com/ej2/{RELEASE_VERSION}/ej2-data/dist/global/ej2-data.min.js" type="text/javascript"></script>
            <script src="https://cdn.syncfusion.com/ej2/{RELEASE_VERSION}/ej2-svg-base/dist/global/ej2-svg-base.min.js" type="text/javascript"></script>
            <script src="https://cdn.syncfusion.com/ej2/{RELEASE_VERSION}/ej2-heatmap/dist/global/ej2-heatmap.min.js" type="text/javascript"></script>
       </head>
       <body>
            <!-- Add the HTML <div> element  -->
             <div id="container"></div>
            <script>
                // initialize heatmap control
                var heatmap = new ej.heatmap.HeatMap();

                // Render initialized heatmap.
                heatmap.appendTo('#container')
            </script>
       </body>
  </html>
```

> Please replace {RELEASE_VERSION} with the latest version number in the script file referred to in the sample.

**Step 3:** Now, run the **index.html** in web browser, it will render the **Essential<sup style="font-size:70%">&reg;</sup> JS 2 HeatMap** component.

The following example demonstrates a basic HeatMap component initialized with default settings.

{% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/heatmap-chart/es5-getting-started-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/heatmap-chart/es5-getting-started-cs1" %}

## Populate HeatMap with data

The HeatMap requires a two-dimensional array where each element represents a data point with its corresponding value. Rows typically represent categories on the Y-axis, and columns represent categories on the X-axis. Values are color-encoded based on the palette settings.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/heatmap-chart/getting-started-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/heatmap-chart/getting-started-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/heatmap-chart/getting-started-cs1" %}

## Enable axis labels

You can add axis labels to the HeatMap and format those labels using the [xAxis](../api/heatmap#xaxis) and [yAxis](../api/heatmap#yaxis) properties. Axis labels provide additional information about the data points populated in the HeatMap.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/heatmap-chart/getting-started-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/heatmap-chart/getting-started-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/heatmap-chart/getting-started-cs2" %}

## Add HeatMap title

Add a title using the [titleSettings](../api/heatmap#titlesettings) property to the HeatMap to provide quick information to the user about the data populated in the HeatMap.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/heatmap-chart/getting-started-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/heatmap-chart/getting-started-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/heatmap-chart/getting-started-cs3" %}

## Enable legend

Use a legend for the HeatMap in the [legendSettings](../api/heatmap#legendsettings) object by setting the [visible](../api/heatmap/legendSettings#visible) property to **true** and injecting the `Legend` module using the `HeatMap.Inject(Legend)` method.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/heatmap-chart/getting-started-cs4/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/heatmap-chart/getting-started-cs4/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/heatmap-chart/getting-started-cs4" %}

## Add data label

Add data labels to improve the readability of the HeatMap. This can be achieved by setting the  [showLabel](../api/heatmap/cellSettings#showlabel) property to **true** in the [cellSettings](../api/heatmap#cellsettings) object.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/heatmap-chart/getting-started-cs5/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/heatmap-chart/getting-started-cs5/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/heatmap-chart/getting-started-cs5" %}

## Add custom cell palette

The default palette settings of the HeatMap cells can be customized by using the [paletteSettings](../api/heatmap#palettesettings) property.
Using the [palette](../api/heatmap/paletteSettings#palette) property in `paletteSettings` object, you can change the color set for the cells.
You can change the color mode of the cells to fixed or gradient mode using the [type](../api/heatmap/paletteSettings#type) property.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/heatmap-chart/getting-started-cs6/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/heatmap-chart/getting-started-cs6/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/heatmap-chart/getting-started-cs6" %}

## Enable tooltip

The tooltip is used when you cannot display information by using the data labels due to space constraints. You can enable the tooltip by setting the [showTooltip](../api/heatmap#showtooltip) property to **true** and injecting the `Tooltip` module using the `HeatMap.Inject(Tooltip)` method.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/heatmap-chart/getting-started-cs7/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/heatmap-chart/getting-started-cs7/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/heatmap-chart/getting-started-cs7" %}
