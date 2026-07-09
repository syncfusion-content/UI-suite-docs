---
layout: post
title: Axis customization in JavaScript Sparkline control | Syncfusion
description: Learn here all about Axis customization in Syncfusion JavaScript Sparkline control of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Axis customization 
publishingplatform: chart-sdk
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---

# Axis customization in JavaScript Sparkline control

You can customize axis value types and min and max values of the sparkline.

## Change value type of the sparkline

You can change the sparkline value type by setting the [`valueType`] property to [`Numeric`], [`Category`], or [`DateTime`].

**DateTime**

You can assign date-time values to the sparkline by setting the [`valueType`] property to [`DateTime`].

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/javascript/sparkline-charts/axis-customization-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/sparkline-charts/axis-customization-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/sparkline-charts/axis-customization-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/sparkline-charts/axis-customization-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/sparkline-charts/axis-customization-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/sparkline-charts/axis-customization-cs1" %}
{% endif %}

**Category**

You can assign category values to the sparkline by setting [`valueType`] to [`Category`].

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/javascript/sparkline-charts/axis-customization-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/sparkline-charts/axis-customization-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/sparkline-charts/axis-customization-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/sparkline-charts/axis-customization-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/sparkline-charts/axis-customization-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/sparkline-charts/axis-customization-cs2" %}
{% endif %}

**Numeric**

You can assign numeric values to the sparkline by setting [`valueType`] to [`Numeric`].

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/javascript/sparkline-charts/axis-customization-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/sparkline-charts/axis-customization-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/sparkline-charts/axis-customization-cs3" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/sparkline-charts/axis-customization-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/sparkline-charts/axis-customization-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/sparkline-charts/axis-customization-cs3" %}
{% endif %}

## Change min and max values of axis

You can change the min and max values of x-axis by setting the [`minX`] and [`maxX`] values to the [`axisSettings`] property. You can also change the min and max values of y-axis by setting the [`minY`] and [`maxY`] values to the [`axisSettings`] property.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/javascript/sparkline-charts/axis-customization-cs4/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/sparkline-charts/axis-customization-cs4/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/sparkline-charts/axis-customization-cs4" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/sparkline-charts/axis-customization-cs4/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/sparkline-charts/axis-customization-cs4/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/sparkline-charts/axis-customization-cs4" %}
{% endif %}

## Change value of axis

You can set horizontal axis line value of the sparkline by setting [`value`] to the [`axisSettings`] property. The following code example shows this.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/javascript/sparkline-charts/axis-customization-cs5/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/sparkline-charts/axis-customization-cs5/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/sparkline-charts/axis-customization-cs5" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/sparkline-charts/axis-customization-cs5/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/sparkline-charts/axis-customization-cs5/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/sparkline-charts/axis-customization-cs5" %}
{% endif %}

## Axis line customization

Axis of the sparkline can be collapsed using the [`visible`] property in [`lineSettings`]; this is not applicable for win-loss. You can customize the [`color`], [`width`], [`opacity`], and [`dashArray`] of axis line.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/javascript/sparkline-charts/axis-customization-cs6/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/sparkline-charts/axis-customization-cs6/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/sparkline-charts/axis-customization-cs6" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/sparkline-charts/axis-customization-cs6/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/sparkline-charts/axis-customization-cs6/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/sparkline-charts/axis-customization-cs6" %}
{% endif %}
