---
layout: post
title: Bubble Chart in JavaScript Charts | Syncfusion
description: Learn here all about Bubble in Syncfusion JavaScript Chart control of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Bubble 
publishingplatform: chart-sdk
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---
# Bubble Chart in JavaScript Charts

## Bubble

To render a [bubble](https://www.syncfusion.com/javascript-ui-controls/js-charts/chart-types/bubble-chart) series in your chart, you need to follow a few steps to configure it correctly. Here's a concise guide on how to do this:
 
* **Set the series type**: Define the series [`type`](../../api/chart/series#type) as `Bubble` in your chart configuration. This indicates that the data should be displayed as a bubble series in the chart.

{% if page.publishingplatform == "typescript" %}

* **Inject the BubbleSeries module**: Use the `Chart.Inject(BubbleSeries)` method to inject the `BubbleSeries` module into your chart. This step is essential, as it ensures that the necessary functionalities for rendering the bubble series are available in your chart.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs84/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs84/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs84/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-types-cs84" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs84/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs84/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-types-cs84" %}
{% endif %}

## Binding data with series

You can bind data to the chart using the [`dataSource`](../../api/chart/series#datasource) property within the series configuration. This allows you to connect a JSON dataset or remote data to your chart. To display the data correctly, map the fields from the data to the chart series [`xName`](../../api/chart/series#xname) and [`yName`](../../api/chart/series#yname) properties.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs355/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs355/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs355/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-types-cs355" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs355/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs355/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-types-cs355" %}
{% endif %}

## Series customization

The following properties can be used to customize the `bubble` series.

**Fill**

The [fill](../../api/chart/series#fill) property determines the color applied to the series.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs86/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs86/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs86/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-types-cs86" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs86/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs86/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-types-cs86" %}
{% endif %}

**Opacity**

The [opacity](../../api/chart/series#opacity) property controls the transparency of the fill and affects how the series blends with background or overlapping series.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs356/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs356/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs356/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-types-cs356" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs356/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs356/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-types-cs356" %}
{% endif %}

## Bubble size mapping

Use the [`size`](../../api/chart/series#size) property to map the size of each bubble to the value specified in the data source.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs85/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs85/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs85/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-types-cs85" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs85/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs85/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-types-cs85" %}
{% endif %}

## Empty points

Data points with `null` or `undefined` values are considered empty. Empty data points are ignored and not plotted on the chart.

**Mode**

Use the [`mode`](../../api/chart/emptyPointSettings#mode) property to control handling of empty points. Available modes: `Gap`, `Drop`, `Zero`, `Average`. The default mode is `Gap`.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs357/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs357/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs357/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-types-cs357" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs357/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs357/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-types-cs357" %}
{% endif %}

**Fill**

Use the [`fill`](../../api/chart/emptyPointSettings#fill) property to set the fill color for empty points.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs358/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs358/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs358/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-types-cs358" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs358/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs358/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-types-cs358" %}
{% endif %}

**Border**

Use the [`border`](../../api/chart/emptyPointSettings#border) property to customize the border width and color for empty points.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs359/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs359/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs359/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-types-cs359" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs359/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs359/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-types-cs359" %}
{% endif %}

## Events

### Series render

The [`seriesRender`](../../api/chart#seriesrender) event enables modification of series properties (for example, data, fill, or name) immediately before rendering. Use this event to adjust series appearance or to dynamically swap data sources.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs443/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs443/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs443/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-types-cs443" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs443/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs443/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-types-cs443" %}
{% endif %}

### Point render

The [`pointRender`](../../api/chart#pointrender) event provides a hook to customize each data point (for example, marker shape, border, or fill) before it is drawn. Use this to apply per-point styling rules or conditional formatting.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs444/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs444/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs444/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-types-cs444" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs444/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs444/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-types-cs444" %}
{% endif %}

## See also

* [Data label](../data-labels)
* [Tooltip](../tool-tip)
