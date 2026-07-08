---
layout: post
title: Smithchart Print in ASP.NET Core Smithchart Component
description: Learn here all about Smithchart Print in Syncfusion ASP.NET Core Smithchart component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Smithchart Print
publishingplatform: chart-sdk
documentation: ug
---


# Print and Export

## Print

The rendered smithchart can be printed directly from the browser by calling the public method print. ID of the smithchart's div element must be passed as argument to that method.

{% if page.publishingplatform == "aspnet-core" %}

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/smith-chart/print/print/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Print.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/smith-chart/print/print/print.cs %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "aspnet-mvc" %}

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/smith-chart/print/print/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Print.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/smith-chart/print/print/print.cs %}
{% endhighlight %}
{% endtabs %}
{% endif %}



## Export

The rendered smithchart can be exported to JPEG , PNG, SVG or PDF format by using export method in smithchart. Input parameters for this method are Export Type for format and fileName of result.

{% if page.publishingplatform == "aspnet-core" %}

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/smith-chart/print/export/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Export.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/smith-chart/print/export/export.cs %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "aspnet-mvc" %}

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/smith-chart/print/export/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Export.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/smith-chart/print/export/export.cs %}
{% endhighlight %}
{% endtabs %}
{% endif %}

