---
layout: post
title: Legend in JavaScript Chart control | Syncfusion
description: Learn here all about Legend in Syncfusion JavaScript Chart control of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Legend 
publishingplatform: chart-sdk
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---
<!-- markdownlint-disable MD036 -->

# Legend in JavaScript Chart control

<!-- markdownlint-disable MD036 -->

The legend provides information about the series rendered in the chart and helps users identify each series by its color, shape, or style.

## Position and alignment

By using the [`position`](../api/chart/legendSettings#position-string) property, the legend can be positioned at the left, right, top, or bottom of the chart. By default, the legend is positioned at the bottom of the chart.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/javascript/charts/legend-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/legend-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/legend-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/legend-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/legend-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/legend-cs2" %}
{% endif %}

Custom positioning allows the legend to be placed anywhere in the chart using `x` and `y` coordinates.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/javascript/charts/legend-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/legend-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/legend-cs3" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/legend-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/legend-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/legend-cs3" %}
{% endif %}

**Legend reverse**

Use the [`reverse`](../api/chart/legendSettings#reverse) property to reverse the order of legend items. By default, the legend item for the first series is placed first.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/javascript/charts/legend-cs4/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/legend-cs4/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/legend-cs4" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/legend-cs4/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/legend-cs4/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/legend-cs4" %}
{% endif %}

**Legend alignment**

Align the legend to `center`, `far`, or `near` using the [`alignment`](../api/chart/legendSettings#alignment-string) property.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/javascript/charts/legend-cs5/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/legend-cs5/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/legend-cs5" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/legend-cs5/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/legend-cs5/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/legend-cs5" %}
{% endif %}

## Customization

To change the legend icon shape, use the [`legendShape`](../api/chart/series#legendshape-string) property in the [`series`](../api/chart/series). By default, the legend icon shape is the `seriesType`.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/javascript/charts/legend-cs6/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/legend-cs6/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/legend-cs6" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/legend-cs6/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/legend-cs6/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/legend-cs6" %}
{% endif %}

### Legend size

By default, the legend occupies approximately 20%–25% of the chart height when positioned at the top or bottom, and 20%–25% of the chart width when positioned at the left or right. Change the default size using the [`width`](../api/chart/legendSettings#width-string) and [`height`](../api/chart/legendSettings#height-string) properties of `legendSettings`.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/javascript/charts/legend-cs7/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/legend-cs7/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/legend-cs7" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/legend-cs7/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/legend-cs7/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/legend-cs7" %}
{% endif %}

### Legend item size

Customize the size of legend items using the [`shapeHeight`](../api/chart/legendSettings#shapeheight-number) and [`shapeWidth`](../api/chart/legendSettings#shapewidth-number) properties.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/javascript/charts/legend-cs8/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/legend-cs8/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/legend-cs8" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/legend-cs8/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/legend-cs8/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/legend-cs8" %}
{% endif %}

### Paging for legend

Paging is enabled automatically when legend items exceed the legend bounds. Navigate between pages using the provided navigation buttons.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/javascript/charts/legend-cs9/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/legend-cs9/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/legend-cs9" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/legend-cs9/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/legend-cs9/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/legend-cs9" %}
{% endif %}

### Legend text wrap

When legend text exceeds the container, enable wrapping using the [`textWrap`](../api/chart/legendSettings#textwrap) property. Wrapping can also be controlled using the [`maximumLabelWidth`](../api/chart/legendSettings#maximumlabelwidth) property.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/javascript/charts/legend-cs10/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/legend-cs10/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/legend-cs10" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/legend-cs10/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/legend-cs10/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/legend-cs10" %}
{% endif %}

### Set the label color based on series color

Set the legend label color based on the series color by using the chart’s [`loaded`](../api/chart#loaded) event.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/javascript/charts/legend-cs11/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/legend-cs11/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/legend-cs11" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/legend-cs11/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/legend-cs11/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/legend-cs11" %}
{% endif %}

## Series selection on Legend

By default, clicking a legend item toggles the visibility of its series. To select a series through a legend click, disable [`toggleVisibility`](../api/chart/legendSettings#togglevisibility-boolean).

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/javascript/charts/legend-cs12/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/legend-cs12/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/legend-cs12" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/legend-cs12/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/legend-cs12/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/legend-cs12" %}
{% endif %}

## Collapsing legend item

By default, the series name is displayed as a legend item. To omit a legend item for a particular series, set the series name to an empty string.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/javascript/charts/legend-cs13/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/legend-cs13/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/legend-cs13" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/legend-cs13/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/legend-cs13/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/legend-cs13" %}
{% endif %}

## Legend title

Set a title for the legend using the `title` property in `legendSettings`. The title can be customized using `fontStyle`, `size`, `fontWeight`, `color`, `textAlignment`, `fontFamily`, `opacity`, and `textOverflow`. Use `titlePosition` to place the title at `Top`, `Left`, or `Right`. The `maximumTitleWidth` property sets the width of the legend title and defaults to `100px`.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/javascript/charts/legend-cs14/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/legend-cs14/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/legend-cs14" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/legend-cs14/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/legend-cs14/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/legend-cs14" %}
{% endif %}

## Arrow page navigation

When legend paging is enabled, page numbers are shown by default. To display only left and right arrows for navigation, set `enablePages` to `false`.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/javascript/charts/legend-cs15/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/legend-cs15/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/legend-cs15" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/legend-cs15/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/legend-cs15/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/legend-cs15" %}
{% endif %}

## Legend item padding

Use the [`itemPadding`](../api/chart/legendSettings#itempadding) property to adjust the spacing between legend items.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/javascript/charts/legend-cs16/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/legend-cs16/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/legend-cs16" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/legend-cs16/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/legend-cs16/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/legend-cs16" %}
{% endif %}

## Legend layout

The [`layout`](../api/chart/legendSettingsModel#layout) property in [`legendSettings`](../api/chart#legendsettings) displays the legend horizontally or vertically. By default, [`layout`](../api/chart/legendSettingsModel#layout) is set to **Auto**. The [`maximumColumns`](../api/chart/legendSettingsModel#maximumcolumns) property defines the maximum number of columns that can be displayed within the available space when using auto layout. Enabling the [`fixedWidth`](../api/chart/legendSettingsModel#fixedwidth) property ensures that all legend items have equal widths, determined by the maximum item width.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/javascript/charts/legend-cs18/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/legend-cs18/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/legend-cs18" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/legend-cs18/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/legend-cs18/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/legend-cs18" %}
{% endif %}

## Legend template

Legend templates allow you to replace default legend icons and text with custom HTML for each series. This enables branded styles, richer content (icons, multi-line text, badges), improved readability, and localization.

You can customize the legend items by using the [`template`](https://ej2.syncfusion.com/documentation/api/chart/legendSettingsModel) property of [`legendSettings`](https://ej2.syncfusion.com/documentation/api/chart/legendSettingsModel). Legend interactions (click to toggle series) remain unless  [`ToggleVisibility`](https://ej2.syncfusion.com/documentation/api/chart/legendsettings#togglevisibility) is set to false. Templates work with all legend positions, alignments, and paging.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/javascript/charts/legend-cs19/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/legend-cs19/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/legend-cs19" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/legend-cs19/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/legend-cs19/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/legend-cs19" %}
{% endif %}

> Note: To use legend features, inject the `Legend` using `Chart.Inject(Legend)` method.


## See also

* [Customize each shape in legend](./how-to#customize-each-shape-in-legend)
* [Customize Legend Text](https://support.syncfusion.com/kb/article/20959/how-to-customize-legend-text-in-javascript-charts)
* [Hide/Show Series by Clicking Single Legend](https://support.syncfusion.com/kb/article/21482/how-to-hideshow-series-by-clicking-single-legend-in-javascript-chart)