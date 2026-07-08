---
layout: post
title: Layout in JavaScript Treemap control | Syncfusion
description: Learn here all about Layout in Syncfusion JavaScript Treemap control of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Layout 
publishingplatform: chart-sdk
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---

# Layout in JavaScript Treemap control

Determine the visual representation of nodes belonging to all the TreeMap levels using the `layoutType` property.

## Types of layout

The available layout types are,

* Squarified
* SliceAndDiceVertical
* SliceAndDiceHorizontal
* SliceAndDiceAuto

### Squarified

The `Squarified` layout displays the nested rectangles based on aspect ratio in the TreeMap. The rectangles will be split based on the height and width of the parent. The default rendering type of layout is `Squarified`.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/javascript/treemap/layout-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/treemap/layout-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/treemap/layout-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/treemap/layout-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/treemap/layout-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/treemap/layout-cs1" %}
{% endif %}

### SliceAndDiceVertical

The `SliceAndDiceVertical` layout creates rectangles with high aspect ratio and displays items in a vertically sorted order.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/javascript/treemap/layout-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/treemap/layout-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/treemap/layout-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/treemap/layout-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/treemap/layout-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/treemap/layout-cs2" %}
{% endif %}

### SliceAndDiceHorizontal

The `SliceAndDiceHorizontal` layout creates rectangles with high aspect ratio and displays items in a horizontally sorted order.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/javascript/treemap/layout-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/treemap/layout-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/treemap/layout-cs3" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/treemap/layout-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/treemap/layout-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/treemap/layout-cs3" %}
{% endif %}

### SliceAndDiceAuto

The `SliceAndDiceAuto` layout creates rectangles with high aspect ratio and display items sorted both horizontally and vertically.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/javascript/treemap/layout-cs4/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/treemap/layout-cs4/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/treemap/layout-cs4" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/treemap/layout-cs4/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/treemap/layout-cs4/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/treemap/layout-cs4" %}
{% endif %}