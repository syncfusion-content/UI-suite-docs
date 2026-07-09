---
layout: post
title: Getting started with TypeScript Tree Grid control | Syncfusion
description:  Checkout and learn about Getting started with TypeScript Tree Grid control of Syncfusion Essential JS 2 and more details.
platform: grid-sdk
control: Getting started 
publishingplatform: grid-sdk
documentation: ug
domainurl: https://help.syncfusion.com/grid-sdk
---

#  Getting started in TypeScript Tree Grid control

The Tree Grid component is essential for displaying hierarchical data in a tabular format. It is commonly used for project management (displaying tasks and subtasks), organizational structures (displaying company hierarchies), file systems, and any scenario where data has parent-child relationships.

This section explains the steps to create a simple Tree Grid and demonstrates the basic usage of the Tree Grid component using the Essential<sup style="font-size:70%">&reg;</sup> JS 2 [quickstart](https://github.com/SyncfusionExamples/ej2-quickstart-webpack-) seed repository. This seed repository is pre-configured with the Essential<sup style="font-size:70%">&reg;</sup> JS 2 package.

> This application is integrated with the `webpack.config.js` configuration and uses the latest version of the [webpack-cli](https://webpack.js.org/api/cli/#commands). It requires node `v14.15.0` or higher. For more information about webpack and its features, refer to the [webpack documentation](https://webpack.js.org/guides/getting-started/).

## Set up development environment

Clone the Essential<sup style="font-size:70%">&reg;</sup> JS 2 quickstart application project from [GitHub](https://github.com/SyncfusionExamples/ej2-quickstart-webpack-) using the following command line scripts.

```
git clone https://github.com/SyncfusionExamples/ej2-quickstart-webpack-
cd ej2-quickstart-webpack-
```

## Add Syncfusion<sup style="font-size:70%">&reg;</sup> TypeScript Tree Grid package

Syncfusion<sup style="font-size:70%">&reg;</sup> TypeScript (Essential<sup style="font-size:70%">&reg;</sup> JS 2) packages are available in the public registry on [npmjs.com](https://www.npmjs.com/~syncfusionorg). You can install all Syncfusion<sup style="font-size:70%">&reg;</sup> TypeScript (Essential<sup style="font-size:70%">&reg;</sup> JS 2) controls are available either as a single [@syncfusion/ej2](https://www.npmjs.com/package/@syncfusion/ej2) package or as individual packages for each control.

Use the following command to install the dependent npm packages from the command prompt.

```
npm install
```

## Adding CSS reference

You can add the CSS files required for the Syncfusion Tree Grid component using one of the following methods.

### Option 1: Add CSS references from a theme package

Themes for Syncfusion<sup style="font-size:70%">&reg;</sup> Tree Grid component can be applied using CSS files provided through [npm theme packages](https://www.npmjs.com/package/@syncfusion/ej2-material3-theme). For available themes, refer to the [Themes](https://ej2.syncfusion.com/documentation/appearance/theme) documentation.

Install the **Material 3** theme package using the following command:

{% tabs %}
{% highlight bash tabtitle="npm" %}

npm install @syncfusion/ej2-material3-theme --save

{% endhighlight %}
{% endtabs %}

Then add the following CSS reference to the **src/styles/styles.css** file:

{% tabs %}
{% highlight css tabtitle="App.css" %}

@import "../node_modules/@syncfusion/ej2-material3-theme/grids/grid/index.css";

{% endhighlight %}
{% endtabs %}

### Option 2: Add CSS references from component packages

After installing the Tree Grid package, the required CSS files are available in the corresponding Syncfusion packages under the **node_modules/@syncfusion** directory. Add the following CSS references to the **src/styles/styles.css** file:

```css
@import '../node_modules/@syncfusion/ej2-base/styles/material3.css';  
@import '../node_modules/@syncfusion/ej2-buttons/styles/material3.css';  
@import '../node_modules/@syncfusion/ej2-calendars/styles/material3.css';  
@import '../node_modules/@syncfusion/ej2-dropdowns/styles/material3.css';  
@import '../node_modules/@syncfusion/ej2-inputs/styles/material3.css';  
@import '../node_modules/@syncfusion/ej2-navigations/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-notifications/styles/material3.css';
@import "../node_modules/@syncfusion/ej2-grids/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-treegrid/styles/material3.css";
```

## Adding Tree Grid component

Add the Tree Grid component in `[src/app/app.ts]` file using the following code and define a Tree Grid container element in [src/index.html] to render the component.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}

import { TreeGrid } from '@syncfusion/ej2-treegrid';
const data: object[] = [
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

let treeGridObj: TreeGrid = new TreeGrid({
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
<html lang="en">

<head>
    <title>Essential JS 2</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
    <meta name="description" content="Essential JS 2" />
    <meta name="author" content="Syncfusion" />
    <link rel="shortcut icon" href="resources/favicon.ico" />
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" />
    <!-- Syncfusion styling reference -->
    <link href="./styles/styles.css" rel="stylesheet" />
</head>

<body>
    <div>
        <!--HTML Tree Grid element, which is going to render as Essential JS 2 Tree Grid-->
        <div id="TreeGrid"></div>
    </div>
</body>

</html>

{% endhighlight %}

{% highlight html tabtitle="style.css" %}

@import '../../node_modules/@syncfusion/ej2/material.css';

{% endhighlight %}

{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/typescript/tree-grid/tree-grid-cs4" %}

## Run the application

```
npm start
```

## See also

* [Tree Grid Feature Modules](https://ej2.syncfusion.com/documentation/treegrid/module)
* [Getting Started with Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript (ES5) documentation](https://ej2.syncfusion.com/javascript/documentation/treegrid/getting-started)
* [Getting Started with Syncfusion<sup style="font-size:70%">&reg;</sup> Angular documentation](https://ej2.syncfusion.com/angular/documentation/treegrid/getting-started)
* [Getting Started with Syncfusion<sup style="font-size:70%">&reg;</sup> React documentation](https://ej2.syncfusion.com/react/documentation/treegrid/getting-started)
* [Getting Started with Syncfusion<sup style="font-size:70%">&reg;</sup> Vue documentation](https://ej2.syncfusion.com/vue/documentation/treegrid/getting-started)
* [Getting Started with Syncfusion<sup style="font-size:70%">&reg;</sup> ASP.NET Core documentation](https://ej2.syncfusion.com/aspnetcore/documentation/tree-grid/getting-started-core)
* [Getting Started with Syncfusion<sup style="font-size:70%">&reg;</sup> ASP.NET MVC documentation](https://ej2.syncfusion.com/aspnetmvc/documentation/tree-grid/getting-started-mvc)
* [Getting Started with Syncfusion<sup style="font-size:70%">&reg;</sup> Blazor documentation](https://blazor.syncfusion.com/documentation/treegrid/getting-started-webapp)
