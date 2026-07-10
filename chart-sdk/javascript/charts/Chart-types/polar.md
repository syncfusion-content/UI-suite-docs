---
layout: post
title: Polar Chart in JavaScript Charts | Syncfusion
description: Learn here all about Polar in Syncfusion JavaScript Chart control of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Polar 
publishingplatform: chart-sdk
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---
# Polar Chart in JavaScript Charts

## Polar Chart

To render a [polar](https://www.syncfusion.com/javascript-ui-controls/js-charts/chart-types/polar-chart) series in your chart, you need to follow a few steps to configure it correctly. Here's a concise guide on how to do this:
 
* **Set the series type**: Define the series [`type`](../../api/chart/series#type) as `Polar` in your chart configuration. This indicates that the data should be represented as a polar chart, which is ideal for plotting data points on a circular graph.

{% if page.publishingplatform == "typescript" %}

* **Inject the PolarSeries module**: Use the `Chart.Inject(PolarSeries)` method to inject the `PolarSeries` module into your chart. This step is essential, as it ensures that the necessary functionalities for rendering polar series are available in your chart.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs369/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs369/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs369/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-types-cs369" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs369/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs369/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-types-cs369" %}
{% endif %}

## Binding data with series

You can bind data to the chart using the [`dataSource`](../../api/chart/series#datasource) property within the series configuration. This allows you to connect a JSON dataset or remote data to your chart. To display the data correctly, map the fields from the data to the chart series [`xName`](../../api/chart/series#xname) and [`yName`](../../api/chart/series#yname) properties.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs368/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs368/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs368/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-types-cs368" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs368/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs368/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-types-cs368" %}
{% endif %}

## Draw types

Use the [`drawType`](../../api/chart/series#drawtype) property to change the series plotting type in a Polar chart to line, column, area, range column, spline, scatter, stacking area, spline area, or stacking column. The default value of `drawType` is `Line`.

### Line

To render a line draw type, you need to follow a few steps to configure it correctly.

* **Set the series type**: Define the series [`drawType`](../../api/chart/series#drawtype) as `Line` in your chart configuration. This indicates that the data should be represented as a polar line chart, with lines connecting each data point.

{% if page.publishingplatform == "typescript" %}

* **Inject the LineSeries module**: Use the `Chart.Inject(LineSeries)` method to inject the `LineSeries` module into your chart. This step is essential, as it ensures that the necessary functionalities for rendering polar line series are available in your chart.

The [`isClosed`](../../api/chart/series#isclosed) property specifies whether to join the start and end points of a line series used in a polar chart to form a closed path. The default value of `isClosed` is **true**.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs108/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs108/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs108/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-types-cs108" %}

{% elsif page.publishingplatform == "javascript" %}

The [`isClosed`](../../api/chart/series#isclosed) property specifies whether to join the start and end points of a line series used in a polar chart to form a closed path. The default value of `isClosed` is **true**.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs108/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs108/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-types-cs108" %}
{% endif %}

### Spline

To render a spline draw type, you need to follow a few steps to configure it correctly.

* **Set the series type**: Define the series [`drawType`](../../api/chart/series#drawtype) as `Spline` in your chart configuration. This indicates that the data should be represented as a polar spline chart, with smooth, curved lines connecting each data point.

{% if page.publishingplatform == "typescript" %}

* **Inject the SplineSeries module**: Use the `Chart.Inject(SplineSeries)` method to inject the `SplineSeries` module into your chart. This step is essential, as it ensures that the necessary functionalities for rendering polar spline series are available in your chart.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs109/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs109/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs109/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-types-cs109" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs109/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs109/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-types-cs109" %}
{% endif %}

### Area

To render an area draw type, you need to follow a few steps to configure it correctly.

* **Set the series type**: Define the series [`drawType`](../../api/chart/series#drawtype) as `Area` in your chart configuration. This indicates that the data should be represented as a polar area chart, with filled areas below the lines connecting each data point.

{% if page.publishingplatform == "typescript" %}

* **Inject the AreaSeries module**: Use the `Chart.Inject(AreaSeries)` method to inject the `AreaSeries` module into your chart. This step is essential, as it ensures that the necessary functionalities for rendering polar area series are available in your chart.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs110/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs110/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs110/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-types-cs110" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs110/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs110/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-types-cs110" %}
{% endif %}

### Stacked area

To render a stacked area draw type, you need to follow a few steps to configure it correctly.

* **Set the series type**: Define the series [`drawType`](../../api/chart/series#drawtype) as `StackingArea` in your chart configuration. This indicates that the data should be represented as a polar stacked area chart, with areas stacked on top of each other, displaying the cumulative value of multiple series.

{% if page.publishingplatform == "typescript" %}

* **Inject the StackingAreaSeries module**: Use the `Chart.Inject(StackingAreaSeries)` method to inject the `StackingAreaSeries` module into your chart. This step is essential, as it ensures that the necessary functionalities for rendering polar stacked area series are available in your chart.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs111/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs111/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs111/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-types-cs111" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs111/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs111/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-types-cs111" %}
{% endif %}

### Column

To render a column draw type, you need to follow a few steps to configure it correctly.

* **Set the series type**: Define the series [`drawType`](../../api/chart/series#drawtype) as `Column` in your chart configuration. This indicates that the data should be represented as a polar column chart, allowing for the comparison of values across categories.

{% if page.publishingplatform == "typescript" %}

* **Inject the ColumnSeries module**: Use the `Chart.Inject(ColumnSeries)` method to inject the `ColumnSeries` module into your chart. This step is essential, as it ensures that the necessary functionalities for rendering polar column series are available in your chart.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs112/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs112/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs112/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-types-cs112" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs112/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs112/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-types-cs112" %}
{% endif %}

### Stacked column

To render a stacked column draw type, you need to follow a few steps to configure it correctly.

* **Set the series type**: Define the series [`drawType`](../../api/chart/series#drawtype) as `StackingColumn` in your chart configuration. This indicates that the data should be represented as a polar stacked column chart, with each column consisting of multiple segments stacked on top of each other.

{% if page.publishingplatform == "typescript" %}

* **Inject the StackingColumnSeries module**: Use the `Chart.Inject(StackingColumnSeries)` method to inject the `StackingColumnSeries` module into your chart. This step is essential, as it ensures that the necessary functionalities for rendering polar stacked column series are available in your chart.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs113/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs113/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs113/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-types-cs113" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs113/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs113/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-types-cs113" %}
{% endif %}

### Range column

To render a range column draw type, you need to follow a few steps to configure it correctly.

* **Set the series type**: Define the series [`drawType`](../../api/chart/series#drawtype) as `RangeColumn` in your chart configuration. This indicates that the data should be represented as a polar range column chart, where each column spans a range of values.

{% if page.publishingplatform == "typescript" %}

* **Inject the RangeColumnSeries module**: Use the `Chart.Inject(RangeColumnSeries)` method to inject the `RangeColumnSeries` module into your chart. This step is essential, as it ensures that the necessary functionalities for rendering polar range column series are available in your chart.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs114/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs114/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs114/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-types-cs114" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs114/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs114/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-types-cs114" %}
{% endif %}

### Scatter

To render a scatter draw type, you need to follow a few steps to configure it correctly.

* **Set the series type**: Define the series [`drawType`](../../api/chart/series#drawtype) as `Scatter` in your chart configuration. This indicates that the data should be represented as a polar scatter chart.

{% if page.publishingplatform == "typescript" %}

* **Inject the ScatterSeries module**: Use the `Chart.Inject(ScatterSeries)` method to inject the `ScatterSeries` module into your chart. This step is essential, as it ensures that the necessary functionalities for rendering polar scatter series are available in your chart.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs115/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs115/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs115/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-types-cs115" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs115/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs115/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-types-cs115" %}
{% endif %}

### Spline area

To render an spline area draw type, you need to follow a few steps to configure it correctly.

* **Set the series type**: Define the series [`drawType`](../../api/chart/series#drawtype) as `SplineArea` in your chart configuration. This indicates that the data should be represented as a polar spline area chart, where the series is drawn with smooth, curved lines connecting each data point, and the area beneath the line is filled with color.

{% if page.publishingplatform == "typescript" %}

* **Inject the SplineAreaSeries module**: Use the `Chart.Inject(SplineAreaSeries)` method to inject the `SplineAreaSeries` module into your chart. This step is essential, as it ensures that the necessary functionalities for rendering polar spline area series are available in your chart.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs360/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs360/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs360/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-types-cs360" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs360/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs360/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-types-cs360" %}
{% endif %}

## Series customization

### Start angle

You can customize the start angle of the polar series using [`startAngle`](../../api/chart/axis#startangle) property. By default, `startAngle` is 0 degree.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs116/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs116/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs116/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-types-cs116" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs116/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs116/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-types-cs116" %}
{% endif %}

### Radius

You can customize the radius of the polar series using [`coefficient`](../../api/chart/axis#coefficient) property. By default, `coefficient` is 100.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs117/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs117/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs117/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-types-cs117" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs117/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs117/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-types-cs117" %}
{% endif %}

## Empty points

Data points with `null` or `undefined` values are considered empty. Empty data points are ignored and not plotted on the chart.

**Mode**

Use the [`mode`](../../api/chart/emptyPointSettings#mode) property to control handling of empty points. Available modes: `Gap`, `Drop`, `Zero`, `Average`. The default mode is `Gap`.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs361/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs361/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs361/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-types-cs361" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs361/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs361/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-types-cs361" %}
{% endif %}

**Fill**

Use the [`fill`](../../api/chart/emptyPointSettings#fill) property to set the fill color for empty points.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs362/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs362/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs362/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-types-cs362" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs362/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs362/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-types-cs362" %}
{% endif %}

**Border**

Use the [`border`](../../api/chart/emptyPointSettings#border) property to customize the border width and color for empty points.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs363/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs363/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs363/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-types-cs363" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs363/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs363/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-types-cs363" %}
{% endif %}

## Events

### Series render

The [`seriesRender`](../../api/chart#seriesrender) event enables modification of series properties (for example, data, fill, or name) immediately before rendering. Use this event to adjust series appearance or to dynamically swap data sources.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs445/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs445/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs445/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-types-cs445" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs445/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs445/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-types-cs445" %}
{% endif %}

### Point render

The [`pointRender`](../../api/chart#pointrender) event provides a hook to customize each data point (for example, marker shape, border, or fill) before it is drawn. Use this to apply per-point styling rules or conditional formatting.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs446/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs446/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs446/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-types-cs446" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs446/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs446/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-types-cs446" %}
{% endif %}

## See also

* [Data label](../data-labels)
* [Tooltip](../tool-tip)
