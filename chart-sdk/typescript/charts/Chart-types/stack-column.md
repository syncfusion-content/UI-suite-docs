---
layout: post
title: Stacked Column in TypeScript Charts | Syncfusion
description: Learn here all about Stacked Column in Syncfusion TypeScript Chart control of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Stacked Column 
publishingplatform: chart-sdk
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---
# Stacked Column Chart in TypeScript Charts

## Stacked Column

To render a [stacked column](https://www.syncfusion.com/javascript-ui-controls/js-charts/chart-types/stacked-column-chart) series in your chart, you need to follow a few steps to configure it correctly. Here's a concise guide on how to do this:
 
* **Set the series type**: Define the series [`type`](../../api/chart/series#type) as `StackingColumn` in your chart configuration. This indicates that the data should be represented as a stacked column chart, where each column consists of multiple segments stacked on top of each other.

{% if page.publishingplatform == "typescript" %}

* **Inject the StackingColumnSeries module**: Use the `Chart.Inject(StackingColumnSeries)` method to inject the `StackingColumnSeries` module into your chart. This step is essential, as it ensures that the necessary functionalities for rendering stacked column series are available in your chart.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs140/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs140/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs140/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/chart-types-cs140" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs140/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs140/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/chart-types-cs140" %}
{% endif %}

## Binding data with series

You can bind data to the chart using the [`dataSource`](../../api/chart/series#datasource) property within the series configuration. This allows you to connect a JSON dataset or remote data to your chart. To display the data correctly, map the fields from the data to the chart series [`xName`](../../api/chart/series#xname) and [`yName`](../../api/chart/series#yname) properties.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs307/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs307/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs307/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/chart-types-cs307" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs307/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs307/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/chart-types-cs307" %}
{% endif %}

## Series customization

The following properties can be used to customize the `stacked column` series.

**Fill**

The [fill](../../api/chart/series#fill) property determines the color applied to the series.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs142/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs142/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs142/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/chart-types-cs142" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs142/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs142/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/chart-types-cs142" %}
{% endif %}

The [fill](../../api/chart/series#fill) property can be used to apply a gradient color to the stacked column series. By configuring this property with gradient values, you can create a visually appealing effect in which the color transitions smoothly from one shade to another.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs308/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs308/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs308/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/chart-types-cs308" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs308/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs308/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/chart-types-cs308" %}
{% endif %}

**Opacity**

The [opacity](../../api/chart/series#opacity) property controls the transparency of the fill and affects how the series blends with background or overlapping series.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs309/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs309/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs309/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/chart-types-cs309" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs309/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs309/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/chart-types-cs309" %}
{% endif %}

**Border**

Use the [`border`](../../api/chart/series#border) property to configure the border width, color, and dasharray of the stacked column series.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs311/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs311/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs311/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/chart-types-cs311" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs311/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs311/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/chart-types-cs311" %}
{% endif %}

## Stacking group

Use the [`stackingGroup`](../../api/chart/series#stackinggroup) property to group stacked columns and 100% stacked columns. Columns with the same group name are stacked on top of each other.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs141/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs141/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs141/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/chart-types-cs141" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs141/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs141/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/chart-types-cs141" %}
{% endif %}

## Cylindrical stacked column chart

To render a cylindrical stacked column chart, set the [`columnFacet`](../../api/chart/series#columnfacet) property to `Cylinder` in the chart series. This property transforms the regular stacked columns into cylindrical shapes, enhancing the visual representation of the data.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs176/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs176/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs176/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/chart-types-cs176" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs176/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs176/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/chart-types-cs176" %}
{% endif %}

## Empty points

Data points with `null` or `undefined` values are considered empty. Empty data points are ignored and not plotted on the chart.

**Mode**

Use the [`mode`](../../api/chart/emptyPointSettings#mode) property to control handling of empty points. Available modes: `Gap`, `Drop`, `Zero`, `Average`. The default mode is `Gap`.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs312/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs312/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs312/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/chart-types-cs312" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs312/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs312/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/chart-types-cs312" %}
{% endif %}

**Fill**

Use the [`fill`](../../api/chart/emptyPointSettings#fill) property to set the fill color for empty points.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs313/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs313/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs313/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/chart-types-cs313" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs313/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs313/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/chart-types-cs313" %}
{% endif %}

**Border**

Use the [`border`](../../api/chart/emptyPointSettings#border) property to customize the border width and color for empty points.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs314/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs314/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs314/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/chart-types-cs314" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs314/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs314/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/chart-types-cs314" %}
{% endif %}

## Stack labels

The stack labels in stacked charts display cumulative total values for stack segments directly using data labels. If a stacked point has negative values, the stack labels are displayed below the point.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs490/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs490/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs490/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/chart-types-cs490" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs490/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs490/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/chart-types-cs490" %}
{% endif %}

### Stack labels customization
Stack labels have various properties for customization to enhance the visual based on your requirements:

* [`visible`](../../api/chart/stackLabelSettings#visible) - Specifies whether stack labels are visible. Setting to true will display the labels. Default is false.
* [`fill`](../../api/chart/stackLabelSettings#fill) - Defines the background color of the stack labels. Accepts valid CSS color strings (hex, RGBA, etc.). Default is transparent.
* [`format`](../../api/chart/stackLabelSettings#format) - Formats the text displayed in the stack labels. Supports placeholders like {value}. Default is null.
* [`angle`](../../api/chart/stackLabelSettings#angle) - Specifies the rotation angle for stack labels in degrees. Default is 0.
* [`rx`](../../api/chart/stackLabelSettings#rx) - Defines the rounded corner radius along the X-axis (horizontal direction) for the stack label background. Default is 5.
* [`ry`](../../api/chart/stackLabelSettings#ry) - Defines the rounded corner radius along the Y-axis (vertical direction) for the stack label background. Default is 5.
* [`margin`](../../api/chart/stackLabelSettings#margin) - Configures the margin around the stack label (left, right, top, and bottom).
* [`border`](../../api/chart/stackLabelSettings#border) - Configures the appearance of the stack label's border.
* [`font`](../../api/chart/stackLabelSettings#font) - Customizes the stack label text, including font size, color, style, weight, and family.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs490A/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs490A/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs490A/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/chart-types-cs490A" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs490A/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs490A/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/chart-types-cs490A" %}
{% endif %}

## Corner radius

The [`cornerRadius`](../../api/chart/series#cornerradius) property in the chart series is used to customize the corner radius for stacked column series. This allows you to create stacked columns with rounded corners, giving your chart a more polished appearance. You can customize each corner of the stacked columns using the topLeft, topRight, bottomLeft, and bottomRight properties.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs432A/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs432A/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs432A/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/chart-types-cs432A" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs432A/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs432A/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/chart-types-cs432A" %}
{% endif %}

### Point corner radius

You can customize the corner radius for individual points in the chart series using the [`pointRender`](../../api/chart/iPointRenderEventArgs) event by setting the [`cornerRadius`](../../api/chart/iPointRenderEventArgs#cornerradius) property in its event argument.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs432B/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs432B/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs432B/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/chart-types-cs432B" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs432B/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs432B/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/chart-types-cs432B" %}
{% endif %}

## Events

### Series render

The [`seriesRender`](../../api/chart#seriesrender) event enables modification of series properties (for example, data, fill, or name) immediately before rendering. Use this event to adjust series appearance or to dynamically swap data sources.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs431/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs431/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs431/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/chart-types-cs431" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs431/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs431/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/chart-types-cs431" %}
{% endif %}

### Point render

The [`pointRender`](../../api/chart#pointrender) event provides a hook to customize each data point (for example, marker shape, border, or fill) before it is drawn. Use this to apply per-point styling rules or conditional formatting.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs432/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs432/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs432/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/chart-types-cs432" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs432/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs432/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/chart-types-cs432" %}
{% endif %}


## See also

* [Data label](../data-labels)
* [Tooltip](../tool-tip)
