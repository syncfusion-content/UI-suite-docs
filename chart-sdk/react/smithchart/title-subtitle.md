---
layout: post
title: Title subtitle in React Smithchart component | Syncfusion
description: Learn here all about Title subtitle in Syncfusion React Smithchart component of Syncfusion Essential JS 2 and more.
control: Title subtitle 
platform: chart-sdk
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---

# Title subtitle in React Smithchart component

## Enable title

The title and subtitle are used to describe the information about the data being plotted in the Smith chart. You can set the title and subtitle of the Smith chart using the [`text`] property. By default, the visibility of the title and subtitle is enabled. The following code sample demonstrates how to simply set text to title and subtitle.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart-sdk/react/smith-chart/code-path/getting-started-cs28/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart-sdk/react/smith-chart/code-path/getting-started-cs28/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/react/smith-chart/getting-started-cs28" %}

## Trim title

Both the title and subtitle of the Smith chart can be trimmed if they exceed the certain length. Trimming is enabled using the [`enableTrim`] property for title and subtitle. The length for title and subtitle can be changed using the [`maximumWidth`] property. You can also customize the font, alignment, and visibility of title and subtitle using the [`font`], [`textAlignment`], and [`visibility`] properties.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart-sdk/react/smith-chart/code-path/getting-started-cs29/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart-sdk/react/smith-chart/code-path/getting-started-cs29/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/react/smith-chart/getting-started-cs29" %}