---
layout: post
title: Working with data in TypeScript Heatmap chart control | Syncfusion
description: Learn here all about Working with data in Syncfusion TypeScript Heatmap chart control of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Working with data 
publishingplatform: chart-sdk
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---

# Working with data in TypeScript Heatmap chart control

Heat map visualizes the JSON data and two-dimensional array data. Using the data adaptor support, data can be bound to the heat map.

## Data adaptor

Heat map supports the following types of data binding with the adaptor support.

* Array
    * Table binding
    * Cell binding
* JSON data
    * Table binding
    * Cell binding

### Array - table binding

This data type is a collection of one dimensional array objects, at which each inner array contains data points for an X-axis data label.
This is the default data binding type for heat map. You can also directly bind the array object to the [dataSource](../api/heatmap/#datasource) property.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/heatmap-chart/working-with-data-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/heatmap-chart/working-with-data-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/heatmap-chart/working-with-data-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/typescript/heatmap-chart/working-with-data-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/heatmap-chart/working-with-data-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/heatmap-chart/working-with-data-cs1" %}
{% endif %}

### Array - cell binding

This data type is a collection of array objects that contain information about the row index, column index, and data value for each cell. You can bind the data to heat map by using the [data](../api/heatmap/data/#data) property in the [dataSource](../api/heatmap/#datasource) and setting the [adaptorType](../api/heatmap/data/#adaptortype) property to **Cell**.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/heatmap-chart/working-with-data-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/heatmap-chart/working-with-data-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/heatmap-chart/working-with-data-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/typescript/heatmap-chart/working-with-data-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/heatmap-chart/working-with-data-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/heatmap-chart/working-with-data-cs2" %}
{% endif %}

### JSON data - table binding

In JSON table data binding, each JSON object contains an X-axis data point as row header and all the corresponding Y-axis data values.
You can bind the JSON table data to the heat map using the [data](../api/heatmap/data/#data) property in [dataSource](../api/heatmap/#datasource). To achieve this, you should enable the [isJsonData](../api/heatmap/data/#isjsondata) property and  define the [adaptorType](../api/heatmap/data/#adaptortype)property as **Table**. The [xDataMapping](../api/heatmap/data/#xdatamapping) property is used to map the row header in JSON data.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/heatmap-chart/working-with-data-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/heatmap-chart/working-with-data-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/heatmap-chart/working-with-data-cs3" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/typescript/heatmap-chart/working-with-data-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/heatmap-chart/working-with-data-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/heatmap-chart/working-with-data-cs3" %}
{% endif %}

### JSON data - Cell binding

In JSON cell data binding, each JSON object consists a value for each cell along with a mapping value for row and column. You can bind the JSON cell data having information for each cell to the heat map using the [data](../api/heatmap/data/#data) property in [dataSource](../api/heatmap/#datasource). To achieve this, you should define the [adaptorType](../api/heatmap/data/#adaptortype) property as **Cell**, and enable the [isJsonData](../api/heatmap/data/#isjsondata) property. Now, map the fields of data by using the [valueMapping](../api/heatmap/data/#valuemapping), [xDataMapping](../api/heatmap/data/#xdatamapping) and [yDataMapping](../api/heatmap/data/#ydatamapping) properties.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/heatmap-chart/working-with-data-cs4/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/heatmap-chart/working-with-data-cs4/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/heatmap-chart/working-with-data-cs4" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/typescript/heatmap-chart/working-with-data-cs4/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/heatmap-chart/working-with-data-cs4/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/heatmap-chart/working-with-data-cs4" %}
{% endif %}

## Empty points

The data points that use the **null** or **undefined** or empty string as value are considered as empty points. Empty data points are ignored and not displayed in the heat map, and these points are rendered with default palette. You can customize the empty data point color value using the [emptyPointColor](../api/heatmap/paletteSettings/#emptypointcolor) property.
{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/heatmap-chart/working-with-data-cs5/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/heatmap-chart/working-with-data-cs5/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/heatmap-chart/working-with-data-cs5" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/typescript/heatmap-chart/working-with-data-cs5/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/heatmap-chart/working-with-data-cs5/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/heatmap-chart/working-with-data-cs5" %}
{% endif %}

## Binding nested JSON data

In complex data binding, you can bind the nested JSON data to the data points in the heat map. The nested data can be mapped using the [xDataMapping](../api/heatmap/data/#xdatamapping), [yDataMapping](../api/heatmap/data/#ydatamapping), [valueMapping](../api/heatmap/data/#valuemapping) and [bubbleDataMapping](../api/heatmap/data/#bubbledatamapping) properties as string value concatenated by a dot.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/heatmap-chart/working-with-data-cs6/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/heatmap-chart/working-with-data-cs6/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/heatmap-chart/working-with-data-cs6" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/typescript/heatmap-chart/working-with-data-cs6/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/heatmap-chart/working-with-data-cs6/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/heatmap-chart/working-with-data-cs6" %}
{% endif %}

## See Also

* [To bind data for bubble heat map with size and color attributes](./bubble-heatmap/#binding-data-for-bubble-heat-map-with-size-and-color-attributes)
