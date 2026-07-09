---
layout: post
title: Gauge pointers in JavaScript Circular gauge control | Syncfusion
description: Learn here all about Gauge pointers in Syncfusion JavaScript Circular gauge control of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Gauge pointers 
publishingplatform: chart-sdk
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---


# Gauge pointers in JavaScript Circular gauge control

Pointers are used to indicate values on the axis. Value of the pointer can be modified using the [`value`](../api/circular-gauge/pointer/#value-number) property.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/javascript/circular-gauge/gauge-pointers-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/circular-gauge/gauge-pointers-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/circular-gauge/gauge-pointers-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/circular-gauge/gauge-pointers-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/circular-gauge/gauge-pointers-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/circular-gauge/gauge-pointers-cs1" %}
{% endif %}

Gauge supports 3 types of pointers such as `Needle`, `RangeBar` and `Marker`. You can choose any one of the pointer by using [`type`](../api/circular-gauge/pointer/#type-string) property.

## Needle Pointers

A needle pointer contains three parts, a needle, a cap / knob and a tail. The length of the needle can be customized by using [`radius`](../api/circular-gauge/pointer/#radius-string) property. The length of the tail can be
customized by using [`length`](../api/circular-gauge/needleTailModel/#length-string) property. The radius of the cap can be customized by using [`radius`](../api/circular-gauge/capModel/#radius-number) in cap object. The needle and tail
length takes value either in `percentage` or `pixel`.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/javascript/circular-gauge/gauge-pointers-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/circular-gauge/gauge-pointers-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/circular-gauge/gauge-pointers-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/circular-gauge/gauge-pointers-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/circular-gauge/gauge-pointers-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/circular-gauge/gauge-pointers-cs2" %}
{% endif %}


**Customization**

Needle color and width can be customized by using [`color`](../api/circular-gauge/pointer/#color-string) and [`pointerWidth`](../api/circular-gauge/pointer/#pointerwidth-number) property.
Cap and tails can be customized by using [`cap`](../api/circular-gauge/pointer/#cap-capmodel) and [`needleTail`](../api/circular-gauge/pointer/#needletail-needletailmodel) object.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/javascript/circular-gauge/gauge-pointers-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/circular-gauge/gauge-pointers-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/circular-gauge/gauge-pointers-cs3" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/circular-gauge/gauge-pointers-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/circular-gauge/gauge-pointers-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/circular-gauge/gauge-pointers-cs3" %}
{% endif %}

The appearance of the needle pointer can be customized by using [`needleStartWidth`](../api/circular-gauge/pointer/#needlestartwidth) and [`needleEndWidth`](../api/circular-gauge/pointer/#needleendwidth).

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/javascript/circular-gauge/gauge-pointers-cs4/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/circular-gauge/gauge-pointers-cs4/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/circular-gauge/gauge-pointers-cs4" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/circular-gauge/gauge-pointers-cs4/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/circular-gauge/gauge-pointers-cs4/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/circular-gauge/gauge-pointers-cs4" %}
{% endif %}

## RangeBar Pointer

RangeBar pointer is like ranges in an axis, that can be placed on gauge to mark the pointer value.
RangeBar starts from the beginning of the gauge and ends at the pointer value.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/javascript/circular-gauge/gauge-pointers-cs5/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/circular-gauge/gauge-pointers-cs5/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/circular-gauge/gauge-pointers-cs5" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/circular-gauge/gauge-pointers-cs5/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/circular-gauge/gauge-pointers-cs5/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/circular-gauge/gauge-pointers-cs5" %}
{% endif %}

**Customization**

RangeBar can be customized in terms of color, border and thickness by using
[`color`](../api/circular-gauge/pointer/#color-string), [`border`](../api/circular-gauge/pointer/#border-bordermodel) and [`pointerWidth`](../api/circular-gauge/pointer/#pointerwidth-number) property.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/javascript/circular-gauge/gauge-pointers-cs6/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/circular-gauge/gauge-pointers-cs6/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/circular-gauge/gauge-pointers-cs6" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/circular-gauge/gauge-pointers-cs6/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/circular-gauge/gauge-pointers-cs6/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/circular-gauge/gauge-pointers-cs6" %}
{% endif %}

## Rounded corner for range bar pointer

The start and end pointers of range bar in the circular gauge are rounded to form arc gauges.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/javascript/circular-gauge/gauge-pointers-cs7/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/circular-gauge/gauge-pointers-cs7/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/circular-gauge/gauge-pointers-cs7" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/circular-gauge/gauge-pointers-cs7/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/circular-gauge/gauge-pointers-cs7/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/circular-gauge/gauge-pointers-cs7" %}
{% endif %}

## Marker Pointer

Different type of marker shape can be used to mark the pointer value in axis.  You can change the marker shape using [`markerShape`](../api/circular-gauge/pointer/#markershape-string) property in pointer. Gauge supports the below marker shape.
* Circle
* Rectangle
* Triangle
* InvertedTriangle
* Diamond

We can use image instead of rendering marker shape to denote the pointer value. It can be achieved by setting [`markerShape`](../api/circular-gauge/pointer/#markershape-string) to Image and assigning  image path to [`imageUrl`](../api/circular-gauge/pointer/#imageurl-string) in pointer.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/javascript/circular-gauge/gauge-pointers-cs8/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/circular-gauge/gauge-pointers-cs8/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/circular-gauge/gauge-pointers-cs8" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/circular-gauge/gauge-pointers-cs8/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/circular-gauge/gauge-pointers-cs8/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/circular-gauge/gauge-pointers-cs8" %}
{% endif %}

**Customization**

The marker can be customized in terms of color, border, width and height by using
[`color`](../api/circular-gauge/pointer/#color-string),
[`border`](../api/circular-gauge/pointer/#border-bordermodel),
[`markerWidth`](../api/circular-gauge/pointer/#markerwidth-number) and
[`markerHeight`](../api/circular-gauge/pointer/#markerheight-number) property in
[`pointer`](../api/circular-gauge/pointer).

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/javascript/circular-gauge/gauge-pointers-cs9/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/circular-gauge/gauge-pointers-cs9/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/circular-gauge/gauge-pointers-cs9" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/circular-gauge/gauge-pointers-cs9/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/circular-gauge/gauge-pointers-cs9/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/circular-gauge/gauge-pointers-cs9" %}
{% endif %}

## Dragging pointer

The pointers can be dragged along the axis line by clicking and dragging them. To enable or disable the drag functionality for all pointers across all axes, use the [enablePointerDrag](../api/circular-gauge/circularGaugeModel/#enablepointerdrag) property. When this property is set to **true**, all pointers can be dynamically adjusted by dragging. Setting it to **false** keeps all pointers fixed in their specified positions.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/javascript/circular-gauge/gauge-pointers-cs10/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/circular-gauge/gauge-pointers-cs10/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/circular-gauge/gauge-pointers-cs10" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/circular-gauge/gauge-pointers-cs10/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/circular-gauge/gauge-pointers-cs10/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/circular-gauge/gauge-pointers-cs10" %}
{% endif %}

### Enabling drag functionality for a specific pointer

To enable or disable the drag functionality for specific pointers along the axis line, use the [enableDrag](../api/circular-gauge/pointerModel/#enabledrag) property in the required pointer model.

>When the `enableDrag` property is enabled for any individual pointer model, the `enablePointerDrag` property becomes ineffective.

The following example demonstrates how to enable the drag functionality for multiple pointers individually.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/javascript/circular-gauge/gauge-pointers-drag-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/circular-gauge/gauge-pointers-drag-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/circular-gauge/gauge-pointers-drag-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/circular-gauge/gauge-pointers-cs10/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/circular-gauge/gauge-pointers-cs10/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/circular-gauge/gauge-pointers-cs10" %}
{% endif %}

## Multiple Pointers

In addition to the default pointer, you can add n number of pointer to an axis by using `pointers` property.

 {% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/javascript/circular-gauge/gauge-pointers-cs11/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/circular-gauge/gauge-pointers-cs11/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/circular-gauge/gauge-pointers-cs11" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/circular-gauge/gauge-pointers-cs11/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/circular-gauge/gauge-pointers-cs11/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/circular-gauge/gauge-pointers-cs11" %}
{% endif %}

## Animation

Pointer will get animate on loading the gauge, this can be handled by using
[`animation`](../api/circular-gauge/pointer/#animation-animationmodel) property in pointer.
The [`enable`](../api/circular-gauge/animationModel/#enable-boolean) property in animation allows you to enable or disable the animation.
The [`duration`](../api/circular-gauge/animationModel/#duration-number) property specify the duration of the animation in milliseconds.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/javascript/circular-gauge/gauge-pointers-cs12/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/circular-gauge/gauge-pointers-cs12/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/circular-gauge/gauge-pointers-cs12" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/circular-gauge/gauge-pointers-cs12/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/circular-gauge/gauge-pointers-cs12/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/circular-gauge/gauge-pointers-cs12" %}
{% endif %}

## Gradient Color

Gradient support allows to add multiple colors in the ranges and pointers of the circular gauge. The following gradient types are supported in the circular gauge.

* Linear Gradient
* Radial Gradient

### Linear Gradient

Using linear gradient, colors will be applied in a linear progression. The start value of the linear gradient can be set using the [`startValue`](../api/circular-gauge/linearGradient/#startvalue) property. The end value of the linear gradient will be set using the [`endValue`](../api/circular-gauge/linearGradient/#endvalue) property. The color stop values such as color, opacity and offset are set using [`colorStop`](../api/circular-gauge/linearGradient/#colorstop) property.

The linear gradient can be applied to all pointer types like marker, range bar and needle. To do so, follow the below code sample.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/javascript/circular-gauge/gauge-pointers-cs13/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/circular-gauge/gauge-pointers-cs13/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/circular-gauge/gauge-pointers-cs13" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/circular-gauge/gauge-pointers-cs13/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/circular-gauge/gauge-pointers-cs13/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/circular-gauge/gauge-pointers-cs13" %}
{% endif %}

### Radial Gradient

Using radial gradient, colors will be applied in circular progression. The inner circle position of the radial gradient will be set using the [`innerPosition`](../api/circular-gauge/radialGradient/#innerposition) property. The outer circle position of the radial gradient can be set using the [`outerPosition`](../api/circular-gauge/radialGradient/#outerposition) property. The color stop values such as color, opacity and offset are set using [`colorStop`](../api/circular-gauge/radialGradient/#colorstop) property.

The radial gradient can be applied to all pointer types like marker, range bar and needle. To do so, follow the below code sample.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/javascript/circular-gauge/gauge-pointers-cs14/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/circular-gauge/gauge-pointers-cs14/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/circular-gauge/gauge-pointers-cs14" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/circular-gauge/gauge-pointers-cs14/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/circular-gauge/gauge-pointers-cs14/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/circular-gauge/gauge-pointers-cs14" %}
{% endif %}