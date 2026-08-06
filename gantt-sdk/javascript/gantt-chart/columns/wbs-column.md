---
layout: post
title: Work Breakdown Structure (WBS) in JavaScript Gantt | Syncfusion
description: Learn how to integrate and manage WBS codes in the Syncfusion JavaScript Gantt Chart control to improve task hierarchy visualization and project tracking.
platform: gantt-sdk
control: WBS Column
publishingplatform: gantt-sdk
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Work Breakdown Structure (WBS) in JavaScript Gantt Chart

The Work Breakdown Structure (WBS) organizes project tasks hierarchically by assigning unique codes to each task. This improves task visibility and management, especially in large-scale construction or enterprise-level software projects.

## Configuration and implementation

To enable WBS in the Gantt Chart control:

- **Enable WBS Codes**: Set [enableWBS](https://ej2.syncfusion.com/javascript/documentation/api/gantt#enablewbs) to **true** to automatically generate unique task codes and define their predecessors.
- **Auto-Update Codes**: Set [enableAutoWbsUpdate](https://ej2.syncfusion.com/javascript/documentation/api/gantt#enableautowbsupdate) to **true** to maintain accurate WBS codes during operations such as sorting, editing, or drag-and-drop.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/wbscolumn-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/wbscolumn-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt-chart/wbscolumn-cs1" %}

## Managing WBS code updates

To optimize performance, WBS code updates can be controlled using the [actionBegin](https://help.syncfusion.com/gantt-sdk/javascript/gantt-chart/events#actionbegin) and [dataBound](https://help.syncfusion.com/gantt-sdk/javascript/gantt-chart/events#databound) events. This is especially useful during operations like row drag-and-drop, where auto-update is triggered only during that specific action to ensure efficient and accurate code handling.

In the following example, WBS auto-update is enabled only during the row drag and drop action using these events.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/wbscolumn-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/wbscolumn-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt-chart/wbscolumn-cs2" %}

## Limitations

The WBS feature has a few limitations in the Gantt Chart control:

- Editing of the WBS code and WBS predecessor columns is not supported.
- Load on demand is not supported with the WBS feature.
- WBS Code and WBS Predecessor fields cannot be mapped directly from the data source.
