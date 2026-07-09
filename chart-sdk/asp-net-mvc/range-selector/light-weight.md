---
layout: post
title: Light Weight in ASP.NET MVC Range Navigator Component
description: Learn here all about Light Weight in Syncfusion ASP.NET MVC Range Navigator component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Light Weight
publishingplatform: chart-sdk
documentation: ug
---


# Lightweight range navigator

By default, when the `dataSource` for `series` is empty, a lightweight Range Selector will be shown without Chart.

{% if page.publishingplatform == "aspnet-core" %}

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/range-selector/light-weight/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Light-weight.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/range-selector/light-weight/light-weight.cs %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "aspnet-mvc" %}

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/range-selector/light-weight/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Light-weight.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/range-selector/light-weight/light-weight.cs %}
{% endhighlight %}
{% endtabs %}
{% endif %}



![Lightweight Range Selector](images/light-weight.png)

## See Also

* [Period Selector](./period-selector/)