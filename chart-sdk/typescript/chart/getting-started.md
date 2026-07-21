---
layout: post
title: Getting started with TypeScript Chart control | Syncfusion
description:  Check out and learn about Getting started with TypeScript Chart control of Syncfusion Essential JS 2 and more details.
platform: chart-sdk
control: Chart
publishingplatform: chart-sdk
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---

# Getting started with TypeScript Chart control

This document explains how to create a simple Chart and configure its features in TypeScript using the Essential JS 2 webpack [quickstart](https://github.com/SyncfusionExamples/ej2-quickstart-webpack) seed repository.

> This application is integrated with the `webpack.config.js` configuration and uses the latest version of the [webpack-cli](https://webpack.js.org/api/cli/#commands). It requires node `v14.15.0` or higher. For more information about webpack and its features, refer to the [webpack getting-started guide](https://webpack.js.org/guides/getting-started/).

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

* [Node.js](https://nodejs.org/) (v14.15.0 or higher)
* [Visual Studio Code](https://code.visualstudio.com) (or any text editor)
* [Git](https://git-scm.com/) (for cloning the quickstart repository)
* A web browser to view the result

## Dependencies

Below is the list of minimum dependencies required to use the Chart.

```
|-- @syncfusion/ej2-charts
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-data
    |-- @syncfusion/ej2-pdf-export
    |-- @syncfusion/ej2-file-utils
    |-- @syncfusion/ej2-compression
    |-- @syncfusion/ej2-svg-base
```
Note: @syncfusion/ej2-pdf-export, @syncfusion/ej2-file-utils, and @syncfusion/ej2-compression are optional—required only for PDF export features. Omit if not using exports.

## Quick Setup

### Step 1: Create a Project Folder

Create a folder named `my-chart` in your desired location. This folder will contain your Syncfusion Chart TypeScript project.

### Step 2: Open Command Prompt

Open the command prompt and navigate to your desired directory where you want to create the project. You can do this by:

* **For Windows**: Open Command Prompt (cmd) or PowerShell and use `cd` command to navigate to your desired directory
* **For macOS/Linux**: Open Terminal and use `cd` command to navigate to your desired directory

### Step 3: Clone the Quickstart Repository

Run the following command to clone the Syncfusion JavaScript (Essential JS 2) quickstart project from [GitHub](https://github.com/SyncfusionExamples/ej2-quickstart-webpack).

{% tabs %}
{% highlight bash tabtitle="CMD" %}

git clone https://github.com/SyncfusionExamples/ej2-quickstart-webpack ej2-quickstart

{% endhighlight %}
{% endtabs %}

### Step 4: Navigate to Project Folder

After cloning the application in the `ej2-quickstart` folder, run the following command to navigate to the project directory.

{% tabs %}
{% highlight bash tabtitle="CMD" %}

cd ej2-quickstart

{% endhighlight %}
{% endtabs %}

### Step 5: Install Required Packages

Syncfusion JavaScript (Essential JS 2) packages are available on the [npmjs.com](https://www.npmjs.com/~syncfusionorg) public registry. You can install all Syncfusion JavaScript (Essential JS 2) controls in a single [@syncfusion/ej2](https://www.npmjs.com/package/@syncfusion/ej2) package or individual packages for each control.

The quickstart application is already preconfigured with the dependent [@syncfusion/ej2](https://www.npmjs.com/package/@syncfusion/ej2) package in the `~/package.json` file. Use the following command to install all the dependent npm packages from the command prompt.

{% tabs %}
{% highlight bash tabtitle="NPM" %}

npm install

{% endhighlight %}
{% endtabs %}

This command will download and install all necessary dependencies for your project.

### Step 6: Update the HTML Template

> Note: Code snippets here use webpack for local development. For online demos or StackBlitz, SystemJS may be used—ignore loader/helper scripts in rendered previews.

Open the `ej2-quickstart` folder in Visual Studio Code or any text editor of your choice.

Locate the `~/src/index.html` file in the project. Add the HTML div tag with its `id` attribute as `element` to initialize the Chart container.

{% tabs %}
{% highlight html tabtitle="index.html" %}

<!DOCTYPE html>
<html lang="en">

<head>
    <title>Essential JS 2 Chart</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Typescript UI Controls" />
    <meta name="author" content="Syncfusion" />
    ....
    ....
</head>

<body>
     <h1>Syncfusion Chart</h1>
     <!--container which is going to render the Chart-->
     <div id='element'>
     </div>
</body>

</html>

{% endhighlight %}
{% endtabs %}

### Step 7: Create the Chart Component with Data

Locate the `src/app/app.ts` file in your project and add the Chart component with module injection and sample data.

**Module Injection**: The Chart component requires specific feature modules to be injected. For displaying data with a line series and category axis, we need to inject the `LineSeries` and `Category` modules.

**Populate Chart with Data**: 
Add a series object to the chart by using the [`series`](../api/chart/series) property. Map the JSON fields `month` and `sales` to the series [`xName`](../api/chart/series#xname) and [`yName`](../api/chart/series#yname) properties, and set the JSON array as the [`dataSource`](../api/chart/series#datasource) property.

Since the JSON contains category data, set the [`valueType`](../api/chart/axisModel#valuetype) for the horizontal axis (primaryXAxis) to `Category`. By default, the axis valueType is `Numeric`.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}

import { Chart, LineSeries, Category } from '@syncfusion/ej2-charts';

// Inject required modules
Chart.Inject(LineSeries, Category);

// Sample data for the chart
let chartData: Object[] = [
    { month: 'Jan', sales: 35 }, { month: 'Feb', sales: 28 },
    { month: 'Mar', sales: 34 }, { month: 'Apr', sales: 32 },
    { month: 'May', sales: 40 }, { month: 'Jun', sales: 32 },
    { month: 'Jul', sales: 35 }, { month: 'Aug', sales: 55 },
    { month: 'Sep', sales: 38 }, { month: 'Oct', sales: 30 },
    { month: 'Nov', sales: 25 }, { month: 'Dec', sales: 32 }
];

// Initialize and render Chart
let chart: Chart = new Chart({
    primaryXAxis: {
        valueType: 'Category'
    },
    series: [{
        // Data source for chart series
        dataSource: chartData,
        xName: 'month',
        yName: 'sales',
        type: 'Line'
    }],
    title: 'Sales Data'
}, '#element');

{% endhighlight %}
{% endtabs %}

### Step 8: Run the Application

Open the integrated terminal in Visual Studio Code or use your command prompt to run the application. Use the `npm run start` command:

{% tabs %}
{% highlight bash tabtitle="NPM" %}

npm run start

{% endhighlight %}
{% endtabs %}

The application will compile and automatically start in your default web browser. The application typically runs at `http://localhost:4000`. You should see the Syncfusion<sup style="font-size:70%">&reg;</sup> Chart control displayed on the page.

### Step 9: View Your Chart

Wait for the webpack dev server to complete the build process. Once completed, you will see the Chart control rendering in your browser. The chart is now successfully initialized and ready for further customization.

## Output

The following screenshot shows the output of the Syncfusion Chart quick start application:

![Syncfusion Chart Quick Start Output](./images/chart.png)
