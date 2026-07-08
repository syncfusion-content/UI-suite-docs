---
layout: post
title: Stock events in JavaScript Stock chart control | Syncfusion
description: Learn here all about Stock events in Syncfusion JavaScript Stock chart control of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Stock events 
publishingplatform: chart-sdk
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---

<!-- markdownlint-disable MD036 -->

# Stock events in JavaScript Stock chart control

Stock Events visualizes stock events in stock chart. 'SplineSeries' is used to represent selected data value. You can customize the specific data value using `stockEvents` event.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/javascript/stock-chart/getting-started-cs25/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/stock-chart/getting-started-cs25/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/stock-chart/getting-started-cs25" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight ts tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/stock-chart/getting-started-cs25/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/stock-chart/getting-started-cs25/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/stock-chart/getting-started-cs25" %}
{% endif %}


**Stock Events for individual series**

By default, stock events will be showed for all series. Now, you can set the stock events for particular series using `seriesIndexes` property.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/javascript/stock-chart/getting-started-cs26/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/stock-chart/getting-started-cs26/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/stock-chart/getting-started-cs26" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight ts tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/stock-chart/getting-started-cs26/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/stock-chart/getting-started-cs26/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/stock-chart/getting-started-cs26" %}
{% endif %}

## See Also

* [Series Types](./series-types/)