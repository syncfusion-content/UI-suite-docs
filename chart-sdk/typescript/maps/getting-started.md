---
layout: post
title: Getting started with TypeScript Maps component | Syncfusion
description:  Checkout and learn about Getting started with TypeScript Maps component of Syncfusion Essential JS 2 and more details.
platform: chart-sdk
control: Getting started 
publishingplatform: chart-sdk
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---

# Getting started with TypeScript Maps component

This section explains how to create a Maps component and configure its available functionalities in TypeScript using the Essential<sup style="font-size:70%">&reg;</sup> JS 2 [quickstart](https://github.com/SyncfusionExamples/ej2-quickstart-webpack-) seed repository.

> This application is integrated with the `webpack.config.js` configuration and uses the latest version of the [webpack-cli](https://webpack.js.org/api/cli/#commands). It requires node `v14.15.0` or higher. For more information about webpack and its features, refer to the [webpack documentation](https://webpack.js.org/guides/getting-started).

You can explore some useful features in the Maps component using the following video.

{% youtube "https://www.youtube.com/watch?v=kwE6ikF7QYQ" %}

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

* [Node.js](https://nodejs.org/en) (v14.15.0 or higher)
* [Visual Studio Code](https://code.visualstudio.com) (or any text editor)
* [Git](https://git-scm.com/) (for cloning the quickstart repository)
* A web browser to view the result
* Basic knowledge of TypeScript and webpack

## Dependencies

The Maps component requires the following minimum dependencies:

```javascript
|-- @syncfusion/ej2-maps
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-data
    |-- @syncfusion/ej2-pdf-export
    |-- @syncfusion/ej2-svg-base
```

Note: @syncfusion/ej2-pdf-export and @syncfusion/ej2-data are optional—required only for PDF export and data binding features respectively.

## Quick Setup

### Step 1: Create a Project Folder

Create a folder named `my-maps` in your desired location. This folder will contain your Syncfusion Maps TypeScript project.

### Step 2: Open Command Prompt

Open the command prompt and navigate to your desired directory where you want to create the project. You can do this by:

* **For Windows**: Open Command Prompt (cmd) or PowerShell
* **For macOS/Linux**: Open Terminal

### Step 3: Clone the Quickstart Repository

Run the following command to clone the Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript (Essential<sup style="font-size:70%">&reg;</sup> JS 2) quickstart project from [GitHub](https://github.com/SyncfusionExamples/ej2-quickstart-webpack-).

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

Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript (Essential<sup style="font-size:70%">&reg;</sup> JS 2) packages are available on the [npmjs.com](https://www.npmjs.com/~syncfusionorg) public registry. You can install all Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript (Essential<sup style="font-size:70%">&reg;</sup> JS 2) controls in a single [@syncfusion/ej2](https://www.npmjs.com/package/@syncfusion/ej2) package or individual packages for each control.

The quickstart application is already preconfigured with the dependent [@syncfusion/ej2](https://www.npmjs.com/package/@syncfusion/ej2) package in the `~/package.json` file. Use the following command to install all the dependent npm packages from the command prompt.

{% tabs %}
{% highlight bash tabtitle="NPM" %}

npm install

{% endhighlight %}
{% endtabs %}

This command will download and install all necessary dependencies for your project.

### Step 6: Update the HTML Template

Open the `ej2-quickstart` folder in Visual Studio Code or any text editor of your choice.

> Note: Code snippets here use webpack for local development. For online demos or StackBlitz, SystemJS may be used—ignore loader/helper scripts in rendered previews.

Locate the `~/src/index.html` file in the project. Add the HTML div tag with its `id` attribute as `container` to initialize the Maps container.

{% tabs %}
{% highlight html tabtitle="index.html" %}

<!DOCTYPE html>
<html lang="en">

<head>
    <title>EJ2 Maps</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Typescript UI Controls" />
    <meta name="author" content="Syncfusion" />
</head>

<body>
    <h1>Syncfusion Maps</h1>
    <!--container which is going to render the Map-->
    <div id='container'>
    </div>
</body>

</html>

{% endhighlight %}
{% endtabs %}

### Step 7: Create the Maps Component with GeoJSON Data

Locate the `src/app/app.ts` file in your project and add the Maps component with geographic data. The Maps component renders shapes based on GeoJSON data loaded from a remote URL.

**Load GeoJSON Data**: The Maps component uses GeoJSON format to display geographic shapes. You can load this data from a CDN URL or include it as a local data source.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}

import { Maps } from '@syncfusion/ej2-maps';

// Define GeoJSON data source (loading from CDN)
const shapeData: object = { 
    dataOptions: { 
        type: 'GET', 
        url: 'https://cdn.syncfusion.com/maps/map-data/world-map.json'
    } 
};

// Initialize and render Maps
const map: Maps = new Maps({
    layers: [
        {
            shapeData: shapeData
        }
    ]
});

// Append Maps to container
map.appendTo('#container');

{% endhighlight %}
{% endtabs %}

### Step 8: Run the Application

Open the integrated terminal in Visual Studio Code or use your command prompt to run the application. Use the `npm start` command:

{% tabs %}
{% highlight bash tabtitle="NPM" %}

npm start

{% endhighlight %}
{% endtabs %}

The application will compile and automatically start in your default web browser. The application typically runs at `http://localhost:4000`. You should see the Syncfusion<sup style="font-size:70%">&reg;</sup> Maps control displaying the world map.

### Step 9: View Your Map

Wait for the webpack dev server to complete the build process. Once completed, you will see the Maps control rendering in your browser with the geographic shapes loaded from the GeoJSON data. The map is now successfully initialized and ready for further customization.

## Output

The following screenshot shows the output of the Syncfusion Maps quick start application:

![Syncfusion Maps Quick Start Output](../maps/images/MapProviders/maps.png)