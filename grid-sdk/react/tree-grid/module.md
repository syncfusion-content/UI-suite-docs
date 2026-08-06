---
layout: post
title: Module in React Treegrid | Syncfusion
description: Learn here all about Module in Syncfusion React Treegrid component of Syncfusion Essential JS 2 and more.
control: Module 
platform: grid-sdk
documentation: ug
domainurl: https://help.syncfusion.com/grid-sdk
---

# Module in React Treegrid component

Syncfusion react TreeGrid modules help optimize application bundle size by including only the required features. To enable a specific TreeGrid feature, import and inject the corresponding feature module into the TreeGrid configuration. The available TreeGrid feature modules include:

| Module | Description |
|------|-------------|
| [`Page`](../treegrid/paging)| Inject this module to use paging feature.|
| [`Sort`](../treegrid/sorting)| Inject this module to use sorting feature.|
| [`Filter`](../treegrid/filtering/filtering)| Inject this module to use filtering feature.|
| [`Edit`](../treegrid/editing/edit)| Inject this module to use editing feature.|
| [`Aggregate`](../treegrid/aggregates/aggregates)| Inject this module to use aggregate feature.|
| [`ColumnChooser`](../treegrid/columns/columns#column-chooser)| Inject this module to use column chooser feature.|
| [`ColumnMenu`](../treegrid/columns/columns#column-menu)| Inject this module to use column menu feature.|
| [`CommandColumn`](../treegrid/editing/edit#command-column)| Inject this module to use command column feature.|
| [`ContextMenu`](../treegrid/context-menu)| Inject this module to use context menu feature.|
| [`DetailRow`](../treegrid/row/detail-template)| Inject this module to use detail template feature.|
| [`Resize`](../treegrid/columns/columns#column-resizing)| Inject this module to use resize feature.|
| [`Reorder`](../treegrid/columns/columns#reorder)| Inject this module to use reorder feature.|
| [`RowDD`](../treegrid/row/row-drag-and-drop)| Inject this module to use row drag and drop feature.|
| [`Search`](../treegrid/searching)| Inject this module to use search feature and this is a default injected module.|
| [`Toolbar`](../treegrid/tool-bar/tool-bar)| Inject this module to use toolbar feature.|
| [`VirtualScroll`](../treegrid/virtual-scroll)| Inject this module to use virtual scroll feature.|
| [`InfiniteScroll`](../treegrid/infinite-scroll)| Inject this module to use infinite scroll feature.|
| [`ExcelExport`](../treegrid/excel-export/excel-export)| Inject this module to use excel export feature.|
| [`PdfExport`](../treegrid/pdf-export/pdf-export)| Inject this module to use PDF export feature.|

Inject these modules into the TreeGrid using the `Inject` directive to enable these functionalities.

> [`React Tree Grid`](https://www.syncfusion.com/react-ui-components/react-tree-grid) feature tour page for its groundbreaking feature representations. [`React Tree Grid example`](https://ej2.syncfusion.com/react/demos/#/material/treegrid/treegrid-overview) to understand data presentation and interaction within a structured hierarchical grid.

## Enabling basic features

The following example demonstrates how to enable basic features such as Paging, Sorting, Filtering, Toolbar and Editing by importing required modules from `@syncfusion/ej2-react-treegrid` and injecting them into the treegrid component.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid-sdk/react/treegrid/getting-started-cs4/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid-sdk/react/treegrid/getting-started-cs4/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="data.jsx" %}
{% include code-snippet/grid-sdk/react/treegrid/getting-started-cs4/app/data.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="data.tsx" %}
{% include code-snippet/grid-sdk/react/treegrid/getting-started-cs4/app/data.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/react/treegrid/getting-started-cs4" %}
