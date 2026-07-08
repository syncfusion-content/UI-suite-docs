---
layout: post
title: Dimensions in JavaScript 3D Chart control | Syncfusion
description: Learn here all about dimensions in Syncfusion JavaScript 3D Chart control of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: 3D Chart
publishingplatform: chart-sdk
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---

# Dimensions in JavaScript 3D Chart control

## Size for container

The 3D chart can be rendered to its container size and it can be set via inline or CSS as demonstrated below.

```javascript
    <div id='container'>
        <div id='element' style="width:650px; height:350px;"></div>
    </div>
```

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/javascript/3d-charts/chart-dimension-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/3d-charts/chart-dimension-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/3d-charts/chart-dimension-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/3d-charts/chart-dimension-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/3d-charts/chart-dimension-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/3d-charts/chart-dimension-cs1" %}
{% endif %}
<!-- markdownlint-disable MD036 -->

## Size for chart

<!-- markdownlint-disable MD036 -->

The size of the 3D chart can be set directly through [`width`](../api/chart3d/chart3DModel/#width) and [`height`](../api/chart3d/chart3DModel/#height) properties.

**In Pixel**

The size of the 3D chart can be set in pixel as demonstrated below.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/javascript/3d-charts/chart-dimension-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/3d-charts/chart-dimension-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/3d-charts/chart-dimension-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/3d-charts/chart-dimension-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/3d-charts/chart-dimension-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/3d-charts/chart-dimension-cs2" %}
{% endif %}

**In Percentage**

By setting the value in percentage, 3D chart gets its dimension with respect to its container. For example, when the height is **50%**, chart renders to half of the container height.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/javascript/3d-charts/chart-dimension-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/3d-charts/chart-dimension-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/3d-charts/chart-dimension-cs3" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/3d-charts/chart-dimension-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/3d-charts/chart-dimension-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/3d-charts/chart-dimension-cs3" %}
{% endif %}

>Note: When you do not specify the size, it takes `450px` as the height and window size as its width.