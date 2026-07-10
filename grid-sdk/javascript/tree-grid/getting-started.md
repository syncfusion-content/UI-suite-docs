---
layout: post
title: Getting started with JavaScript Tree Grid control | Syncfusion
description: Checkout and learn about Getting started with JavaScript Tree Grid control of Syncfusion Essential JS 2 and more details.
platform: grid-sdk
control: Getting started 
publishingplatform: grid-sdk
documentation: ug
domainurl: https://help.syncfusion.com/grid-sdk
---

# Getting started in JavaScript Tree Grid control

This section explains the steps required to create a simple Essential<sup style="font-size:70%">&reg;</sup> JS 2 Tree Grid and demonstrates the basic usage of the Tree Grid control in a JavaScript application.

## Dependencies

The Tree Grid control requires several packages to function properly. These packages provide the core functionality and supporting components needed for the Tree Grid to work.

Following is the list of dependencies to use the Tree Grid with all features:

```javascript
	|-- @syncfusion/ej2-treegrid
     |-- @syncfusion/ej2-treegrid
          |-- @syncfusion/ej2-base
          |-- @syncfusion/ej2-data
          |-- @syncfusion/ej2-buttons
          |-- @syncfusion/ej2-popups
          |-- @syncfusion/ej2-navigations
          |-- @syncfusion/ej2-dropdowns
          |-- @syncfusion/ej2-lists
          |-- @syncfusion/ej2-inputs
          |-- @syncfusion/ej2-splitbuttons
          |-- @syncfusion/ej2-calendars
          |-- @syncfusion/ej2-excel-export
          |-- @syncfusion/ej2-pdf-export
          |-- @syncfusion/ej2-file-utils
          |-- @syncfusion/ej2-compression
          |-- @syncfusion/ej2-grids
```

## Setup for local environment

Refer to the following steps to set up your local environment.

**Step 1:** Create a root folder named **my-app** for your application.

**Step 2:** Open Visual Studio Code and create **my-app/index.js** and **my-app/index.html** files to initialize the Essential<sup style="font-size:70%">&reg;</sup> JS 2 Tree Grid control.

## Adding Syncfusion<sup style="font-size:70%">&reg;</sup> Tree Grid CDN resources

The Essential<sup style="font-size:70%">&reg;</sup> JS 2 Tree Grid control can be initialized by the following way.

This setup includes additional dependencies required for more advanced functionalities of the tree grid, such as buttons, dropdowns, navigations and other components. Use this setup when you need to integrate additional features like filtering, paging, column menu and more.

```html
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
    <title>Essential JS 2 Tree Grid</title>

    <!-- Essential JS 2 Tree Grid's dependent material theme -->
    <link href="https://cdn.syncfusion.com/ej2/33.2.3/ej2-base/styles/material.css" rel="stylesheet" type="text/css" />
    <link href="https://cdn.syncfusion.com/ej2/33.2.3/ej2-popups/styles/material.css" rel="stylesheet" type="text/css" />
    <link href="https://cdn.syncfusion.com/ej2/33.2.3/ej2-buttons/styles/material.css" rel="stylesheet" type="text/css" />
    <link href="https://cdn.syncfusion.com/ej2/33.2.3/ej2-navigations/styles/material.css" rel="stylesheet" type="text/css" />
    <link href="https://cdn.syncfusion.com/ej2/33.2.3/ej2-dropdowns/styles/material.css" rel="stylesheet" type="text/css" />
    <link href="https://cdn.syncfusion.com/ej2/33.2.3/ej2-lists/styles/material.css" rel="stylesheet" type="text/css" />
    <link href="https://cdn.syncfusion.com/ej2/33.2.3/ej2-inputs/styles/material.css" rel="stylesheet" type="text/css" />
    <link href="https://cdn.syncfusion.com/ej2/33.2.3/ej2-calendars/styles/material.css" rel="stylesheet" type="text/css" />
    <link href="https://cdn.syncfusion.com/ej2/33.2.3/ej2-notifications/styles/material.css" rel="stylesheet" type="text/css" />
    <link href="https://cdn.syncfusion.com/ej2/33.2.3/ej2-splitbuttons/styles/material.css" rel="stylesheet" type="text/css" />
    <link href="https://cdn.syncfusion.com/ej2/33.2.3/ej2-grids/styles/material.css" rel="stylesheet" type="text/css" />
    <link href="https://cdn.syncfusion.com/ej2/33.2.3/ej2-treegrid/styles/material.css" rel="stylesheet" type="text/css" />

    <!-- Essential JS 2 Tree Grid's dependent scripts -->
    <script src="https://cdn.syncfusion.com/ej2/33.2.3/ej2-base/dist/global/ej2-base.min.js" type="text/javascript"></script>
    <script src="https://cdn.syncfusion.com/ej2/33.2.3/ej2-data/dist/global/ej2-data.min.js" type="text/javascript"></script>
    <script src="https://cdn.syncfusion.com/ej2/33.2.3/ej2-popups/dist/global/ej2-popups.min.js" type="text/javascript"></script>
    <script src="https://cdn.syncfusion.com/ej2/33.2.3/ej2-buttons/dist/global/ej2-buttons.min.js" type="text/javascript"></script>
    <script src="https://cdn.syncfusion.com/ej2/33.2.3/ej2-navigations/dist/global/ej2-navigations.min.js" type="text/javascript"></script>
    <script src="https://cdn.syncfusion.com/ej2/33.2.3/ej2-dropdowns/dist/global/ej2-dropdowns.min.js" type="text/javascript"></script>
    <script src="https://cdn.syncfusion.com/ej2/33.2.3/ej2-lists/dist/global/ej2-lists.min.js" type="text/javascript"></script>
    <script src="https://cdn.syncfusion.com/ej2/33.2.3/ej2-inputs/dist/global/ej2-inputs.min.js" type="text/javascript"></script>
    <script src="https://cdn.syncfusion.com/ej2/33.2.3/ej2-calendars/dist/global/ej2-calendars.min.js" type="text/javascript"></script>
    <script src="https://cdn.syncfusion.com/ej2/33.2.3/ej2-notifications/dist/global/ej2-notifications.min.js" type="text/javascript"></script>
    <script src="https://cdn.syncfusion.com/ej2/33.2.3/ej2-splitbuttons/dist/global/ej2-splitbuttons.min.js" type="text/javascript"></script>
    <script src="https://cdn.syncfusion.com/ej2/33.2.3/ej2-grids/dist/global/ej2-grids.min.js" type="text/javascript"></script>
    <script src="https://cdn.syncfusion.com/ej2/33.2.3/ej2-treegrid/dist/global/ej2-treegrid.min.js" type="text/javascript"></script>
</head>

<body>
</body>

</html>
```
> To include all required Essential JS 2 styles and scripts, use the following CDN links.
>
> <!-- Essential JS 2 combined material theme (all components) -->
> <!-- <link href="https://cdn.syncfusion.com/ej2/33.2.3/material.css" rel="stylesheet" type="text/css" /> -->
>
> <!-- Essential JS 2 combined script (all components) -->
> <!-- <script src="https://cdn.syncfusion.com/ej2/33.2.3/dist/ej2.min.js" type="text/javascript"></script> -->

## Adding Tree Grid control

Add the Tree Grid control in **index.js** file using the following code.

{% tabs %}
{% highlight ts tabtitle="index.js" %}

var data = [
    { 
        TaskID: 1, TaskName: 'Planning', StartDate: new Date('02/04/2025'), EndDate: new Date('02/07/2025'), Duration: 4,
        subtasks: [
            { TaskID: 2, TaskName: 'Plan timeline', StartDate: new Date('02/04/2025'), EndDate: new Date('02/07/2025'), Duration: 4, },
            { TaskID: 3, TaskName: 'Plan budget', StartDate: new Date('02/04/2025'), EndDate: new Date('02/07/2025'), Duration: 4, },
        ],
    },
    {
        TaskID: 4, TaskName: 'Design', StartDate: new Date('02/10/2025'), EndDate: new Date('02/14/2025'), Duration: 5,
        subtasks: [
            { TaskID: 5, TaskName: 'Software Specification', StartDate: new Date('02/10/2025'), EndDate: new Date('02/12/2025'), Duration: 3, },
            { TaskID: 6, TaskName: 'Design Documentation', StartDate: new Date('02/13/2025'), EndDate: new Date('02/14/2025'), Duration: 2, },
            { TaskID: 7, TaskName: 'Design complete', StartDate: new Date('02/14/2025'), EndDate: new Date('02/14/2025'), Duration: 1 },
        ],
    },
];

var treeGridObj = new ej.treegrid.TreeGrid({
    dataSource: data,
    childMapping: 'subtasks',
    treeColumnIndex: 1,
    columns: [
        { field: 'TaskID', headerText: 'Task ID', width: 70, textAlign: 'Right' },
        { field: 'TaskName', headerText: 'Task Name', width: 200 },
        {
            field: 'StartDate', 
            headerText: 'Start Date', 
            width: 90, 
            textAlign: 'Right', 
            type: 'date',
            format: 'yMd'
        },
        {
            field: 'EndDate', 
            headerText: 'End Date', 
            width: 90, 
            textAlign: 'Right', 
            type: 'date',
            format: 'yMd'
        },
        { field: 'Duration', headerText: 'Duration', width: 80, textAlign: 'Right' }
    ]
});

treeGridObj.appendTo('#TreeGrid');

{% endhighlight %}

{% highlight html tabtitle="index.html" %}

<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <title>Essential JS 2 Tree Grid</title>

    <!-- Essential JS 2 combined material theme (all components) -->
    <link href="https://cdn.syncfusion.com/ej2/33.2.3/material.css" rel="stylesheet" type="text/css" />
    <!-- Essential JS 2 combined script (all components) -->
    <script src="https://cdn.syncfusion.com/ej2/33.2.3/dist/ej2.min.js" type="text/javascript"></script>
</head>
<body>
    <!-- Add the HTML <div> element for Tree Grid  -->
    <div id="TreeGrid"></div>
    
    <!-- Your Tree Grid initialization script -->
    <script src="index.js" type="text/javascript"></script>
</body>
</html>

{% endhighlight %}

{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/javascript/tree-grid/help.syncfusion.com/code-snippet/grid-sdk/javascript/tree-grid/help.syncfusion.com/code-snippet/grid-sdk/javascript/tree-grid/tree-grid-cs4" %}

## Run the application

Now, run the **index.html** in web browser, it will render the Essential<sup style="font-size:70%">&reg;</sup> JS 2 Tree Grid control.

## See Also

* [Tree Grid Feature Modules](https://ej2.syncfusion.com/javascript/documentation/treegrid/module)
* [Getting Started with Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript documentation](https://ej2.syncfusion.com/documentation/treegrid/getting-started)
* [Getting Started with Syncfusion<sup style="font-size:70%">&reg;</sup> Angular documentation](https://ej2.syncfusion.com/angular/documentation/treegrid/getting-started)
* [Getting Started with Syncfusion<sup style="font-size:70%">&reg;</sup> React documentation](https://ej2.syncfusion.com/react/documentation/treegrid/getting-started)
* [Getting Started with Syncfusion<sup style="font-size:70%">&reg;</sup> Vue documentation](https://ej2.syncfusion.com/vue/documentation/treegrid/getting-started)
* [Getting Started with Syncfusion<sup style="font-size:70%">&reg;</sup> ASP.NET Core documentation](https://ej2.syncfusion.com/aspnetcore/documentation/tree-grid/getting-started-core)
* [Getting Started with Syncfusion<sup style="font-size:70%">&reg;</sup> ASP.NET MVC documentation](https://ej2.syncfusion.com/aspnetmvc/documentation/tree-grid/getting-started-mvc)
* [Getting Started with Syncfusion<sup style="font-size:70%">&reg;</sup> Blazor documentation](https://blazor.syncfusion.com/documentation/treegrid/getting-started-webapp)