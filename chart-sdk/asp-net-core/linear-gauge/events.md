---
layout: post
title: Events in ASP.NET Core Linear Gauge Component
description: Learn here all about Events in Syncfusion ASP.NET Core Linear Gauge component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Events
publishingplatform: chart-sdk
documentation: ug
---


# Events in ASP.NET Core Linear Gauge

This section describes the Linear Gauge component's event that gets triggered when corresponding operations are performed.

## AnimationComplete

When the pointer animation is completed, the [`AnimationComplete`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.LinearGauge.LinearGauge.html#Syncfusion_EJ2_LinearGauge_LinearGauge_AnimationComplete) event will be triggered. To know more about the arguments of this event, refer [here](https://ej2.syncfusion.com/documentation/api/linear-gauge/iAnimationCompleteEventArgs/).

{% if page.publishingplatform == "aspnet-core" %}

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/linear-gauge/events/animationComplete/tagHelper %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "aspnet-mvc" %}

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/linear-gauge/events/animationComplete/razor %}
{% endhighlight %}
{% endtabs %}
{% endif %}



## AnnotationRender

Before the annotation is rendered in the Linear Gauge, the [`AnnotationRender`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.LinearGauge.LinearGauge.html#Syncfusion_EJ2_LinearGauge_LinearGauge_AnnotationRender) event will be triggered. To know more about the arguments of this event, refer [here](https://ej2.syncfusion.com/documentation/api/linear-gauge/iAnnotationRenderEventArgs/).

{% if page.publishingplatform == "aspnet-core" %}

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/linear-gauge/events/annotationRender/tagHelper %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "aspnet-mvc" %}

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/linear-gauge/events/annotationRender/razor %}
{% endhighlight %}
{% endtabs %}
{% endif %}



## AxisLabelRender

Before each axis label is rendered in the Linear Gauge, the [`AxisLabelRender`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.LinearGauge.LinearGauge.html#Syncfusion_EJ2_LinearGauge_LinearGauge_AxisLabelRender) event is fired. To know more about the arguments of this event, refer [here](https://ej2.syncfusion.com/documentation/api/linear-gauge/iAxisLabelRenderEventArgs/).

{% if page.publishingplatform == "aspnet-core" %}

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/linear-gauge/events/axisLabelRender/tagHelper %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "aspnet-mvc" %}

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/linear-gauge/events/axisLabelRender/razor %}
{% endhighlight %}
{% endtabs %}
{% endif %}



## BeforePrint

The [`BeforePrint`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.LinearGauge.LinearGauge.html#Syncfusion_EJ2_LinearGauge_LinearGauge_BeforePrint) event is fired before the print begins. To know more about the arguments of this event, refer [here](https://ej2.syncfusion.com/documentation/api/linear-gauge/iPrintEventArgs/).

{% if page.publishingplatform == "aspnet-core" %}

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/linear-gauge/events/beforePrint/tagHelper %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "aspnet-mvc" %}

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/linear-gauge/events/beforePrint/razor %}
{% endhighlight %}
{% endtabs %}
{% endif %}



## DragEnd

The [`DragEnd`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.LinearGauge.LinearGauge.html#Syncfusion_EJ2_LinearGauge_LinearGauge_DragEnd) event will be fired before the pointer drag is completed. To know more about the argument of this event, refer [here](https://ej2.syncfusion.com/documentation/api/linear-gauge/iPointerDragEventArgs/).

{% if page.publishingplatform == "aspnet-core" %}

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/linear-gauge/events/dragEnd/tagHelper %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "aspnet-mvc" %}

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/linear-gauge/events/dragEnd/razor %}
{% endhighlight %}
{% endtabs %}
{% endif %}



## DragMove

The [`DragMove`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.LinearGauge.LinearGauge.html#Syncfusion_EJ2_LinearGauge_LinearGauge_DragMove) event will be fired when the pointer is dragged. To know more about the arguments of this event, refer [here](https://ej2.syncfusion.com/documentation/api/linear-gauge/iPointerDragEventArgs/).

{% if page.publishingplatform == "aspnet-core" %}

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/linear-gauge/events/dragMove/tagHelper %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "aspnet-mvc" %}

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/linear-gauge/events/dragMove/razor %}
{% endhighlight %}
{% endtabs %}
{% endif %}



## DragStart

When the pointer drag begins, the [`DragStart`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.LinearGauge.LinearGauge.html#Syncfusion_EJ2_LinearGauge_LinearGauge_DragStart) event is triggered. To know more about the arguments of this event, refer [here](https://ej2.syncfusion.com/documentation/api/linear-gauge/iPointerDragEventArgs/).

{% if page.publishingplatform == "aspnet-core" %}

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/linear-gauge/events/dragStart/tagHelper %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "aspnet-mvc" %}

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/linear-gauge/events/dragStart/razor %}
{% endhighlight %}
{% endtabs %}
{% endif %}



## GaugeMouseDown

When mouse is pressed down on the gauge, the [`GaugeMouseDown`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.LinearGauge.LinearGauge.html#Syncfusion_EJ2_LinearGauge_LinearGauge_GaugeMouseDown) event is triggered. To know more about the arguments of this event, refer [here](https://ej2.syncfusion.com/documentation/api/linear-gauge/iMouseEventArgs/).

{% if page.publishingplatform == "aspnet-core" %}

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/linear-gauge/events/gaugeMouseDown/tagHelper %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "aspnet-mvc" %}

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/linear-gauge/events/gaugeMouseDown/razor %}
{% endhighlight %}
{% endtabs %}
{% endif %}



## GaugeMouseLeave

When mouse pointer moves over the gauge, the [`GaugeMouseLeave`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.LinearGauge.LinearGauge.html#Syncfusion_EJ2_LinearGauge_LinearGauge_GaugeMouseLeave) event is triggered. To know more about the arguments of this event, refer [here](https://ej2.syncfusion.com/documentation/api/linear-gauge/iMouseEventArgs/).

{% if page.publishingplatform == "aspnet-core" %}

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/linear-gauge/events/gaugeMouseLeave/tagHelper %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "aspnet-mvc" %}

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/linear-gauge/events/gaugeMouseLeave/razor %}
{% endhighlight %}
{% endtabs %}
{% endif %}



## GaugeMouseMove

When mouse pointer leaves the gauge, the [`GaugeMouseMove`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.LinearGauge.LinearGauge.html#Syncfusion_EJ2_LinearGauge_LinearGauge_GaugeMouseMove) event is triggered. To know more about the arguments of this event, refer [here](https://ej2.syncfusion.com/documentation/api/linear-gauge/iMouseEventArgs/).

{% if page.publishingplatform == "aspnet-core" %}

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/linear-gauge/events/gaugeMouseMove/tagHelper %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "aspnet-mvc" %}

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/linear-gauge/events/gaugeMouseMove/razor %}
{% endhighlight %}
{% endtabs %}
{% endif %}



## GaugeMouseUp

When the mouse pointer is released over the Linear Gauge, the [`GaugeMouseUp`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.LinearGauge.LinearGauge.html#Syncfusion_EJ2_LinearGauge_LinearGauge_GaugeMouseUp) event is triggered. To know more about the arguments of this event, refer [here](https://ej2.syncfusion.com/documentation/api/linear-gauge/iMouseEventArgs/).

{% if page.publishingplatform == "aspnet-core" %}

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/linear-gauge/events/gaugeMouseUp/tagHelper %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "aspnet-mvc" %}

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/linear-gauge/events/gaugeMouseUp/razor %}
{% endhighlight %}
{% endtabs %}
{% endif %}



## Load

Before the Linear Gauge is loaded, the [`Load`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.LinearGauge.LinearGauge.html#Syncfusion_EJ2_LinearGauge_LinearGauge_Load) event is fired. To know more about the arguments of this event, refer [here](https://ej2.syncfusion.com/documentation/api/linear-gauge/iLoadEventArgs/).

{% if page.publishingplatform == "aspnet-core" %}

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/linear-gauge/events/load/tagHelper %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "aspnet-mvc" %}

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/linear-gauge/events/load/razor %}
{% endhighlight %}
{% endtabs %}
{% endif %}



## Loaded

After the Linear Gauge has been loaded, the [`Loaded`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.LinearGauge.LinearGauge.html#Syncfusion_EJ2_LinearGauge_LinearGauge_Loaded) event will be triggered. To know more about the arguments of this event, refer [here](https://ej2.syncfusion.com/documentation/api/linear-gauge/iLoadedEventArgs/).

{% if page.publishingplatform == "aspnet-core" %}

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/linear-gauge/events/loaded/tagHelper %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "aspnet-mvc" %}

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/linear-gauge/events/loaded/razor %}
{% endhighlight %}
{% endtabs %}
{% endif %}



## Resized

After the window resizing, the [`Resized`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.LinearGauge.LinearGauge.html#Syncfusion_EJ2_LinearGauge_LinearGauge_Resized) event is triggered. To know more about the arguments of this event, refer [here](https://ej2.syncfusion.com/documentation/api/linear-gauge/iResizeEventArgs/).

{% if page.publishingplatform == "aspnet-core" %}

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/linear-gauge/events/resized/tagHelper %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "aspnet-mvc" %}

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/linear-gauge/events/resized/razor %}
{% endhighlight %}
{% endtabs %}
{% endif %}



## TooltipRender

The [`TooltipRender`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.LinearGauge.LinearGauge.html#Syncfusion_EJ2_LinearGauge_LinearGauge_TooltipRender) event is fired before the tooltip is rendered. To know more about the arguments of this event, refer [here](https://ej2.syncfusion.com/documentation/api/linear-gauge/iTooltipRenderEventArgs/).

{% if page.publishingplatform == "aspnet-core" %}

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/linear-gauge/events/tooltipRender/tagHelper %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "aspnet-mvc" %}

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/linear-gauge/events/tooltipRender/razor %}
{% endhighlight %}
{% endtabs %}
{% endif %}



## ValueChange

The [`ValueChange`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.LinearGauge.LinearGauge.html#Syncfusion_EJ2_LinearGauge_LinearGauge_ValueChange) event is triggered when the pointer is dragged from one value to another. To know more about the arguments of this event, refer [here](https://ej2.syncfusion.com/documentation/ap/linear-gauge/iValueChangeEventArgs/).

{% if page.publishingplatform == "aspnet-core" %}

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/linear-gauge/events/valueChange/tagHelper %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "aspnet-mvc" %}

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/linear-gauge/events/valueChange/razor %}
{% endhighlight %}
{% endtabs %}
{% endif %}

