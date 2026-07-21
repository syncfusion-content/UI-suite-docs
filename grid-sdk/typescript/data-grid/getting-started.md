---
layout: post
title: Getting started with TypeScript DataGrid control | Syncfusion
description:  Checkout and learn about Getting started with TypeScript DataGrid control of Syncfusion Essential JS 2 and more details.
platform: grid-sdk
control: Getting started 
publishingplatform: grid-sdk
documentation: ug
domainurl: https://help.syncfusion.com/grid-sdk
---

# Getting started in TypeScript DataGrid control

This section explains the steps to create a simple DataGrid and demonstrates the basic usage of the DataGrid component using the Essential<sup style="font-size:70%">&reg;</sup> JS 2
[quickstart](https://github.com/SyncfusionExamples/ej2-quickstart-webpack) seed repository. This seed repository is pre-configured with the Essential<sup style="font-size:70%">&reg;</sup> JS 2 package.

> This application is integrated with the **webpack.config.js** configuration and uses the latest version of the [webpack-cli](https://webpack.js.org/api/cli#commands). It requires node **v14.15.0** or higher. For more information about webpack and its features, refer to the [webpack documentation](https://webpack.js.org/guides/getting-started).

## Prerequisites

To get started with application, ensure the following software to be installed in the machine.

| Requirement | Version |
|-------------|---------|
| [git](https://git-scm.com/downloads) | Latest version |
| [Node.js](https://nodejs.org/en/) | 14.15.0 or above |
| [Visual Studio Code](https://code.visualstudio.com/) | Latest version |


### Browser support

| Browser | Supported versions |
|----------|----------|
| Chrome | 63+ |
| Firefox | 58+ |
| Opera | 50+ |
| Edge | 13+ |
| IE | 11+ |
| Safari | 9+ |
| iOS | 9+ |
| Android | 4.4+ |
| Windows Mobile | IE 11+ |

## Setup for local development

Clone the Essential<sup style="font-size:70%">&reg;</sup> JS 2 quickstart application project from [GitHub](https://github.com/SyncfusionExamples/ej2-quickstart-webpack) using the following command line scripts.

```
git clone https://github.com/SyncfusionExamples/ej2-quickstart-webpack
cd ej2-quickstart-webpack
```

## Adding Syncfusion<sup style="font-size:70%">&reg;</sup> TypeScript Grids package

Syncfusion<sup style="font-size:70%">&reg;</sup> TypeScript (Essential<sup style="font-size:70%">&reg;</sup> JS 2) packages are available on the [npmjs.com](https://www.npmjs.com/~syncfusionorg) public registry. You can install all Syncfusion<sup style="font-size:70%">&reg;</sup> TypeScript (Essential<sup style="font-size:70%">&reg;</sup> JS 2) controls in a single [@syncfusion/ej2](https://www.npmjs.com/package/@syncfusion/ej2) package or individual packages for each control.

Use the following command to install the dependent npm packages from the command prompt.

```
npm install
```

## Adding CSS reference

Themes for Syncfusion<sup style="font-size:70%">&reg;</sup> DataGrid components can be applied using CSS files provided through [npm theme packages](https://www.npmjs.com/package/@syncfusion/ej2-material3-theme). For available themes, refer to the [Themes](https://ej2.syncfusion.com/documentation/appearance/theme) documentation.

Install the **Material 3** theme package using the following command:
 
{% tabs %}
{% highlight bash tabtitle="npm" %}
 
npm install @syncfusion/ej2-material3-theme --save
 
{% endhighlight %}
{% endtabs %}
 
Then add the following CSS reference to the **src/styles/styles.css** file:
 
{% tabs %}
{% highlight css tabtitle="style.css" %}
 
@import "../../node_modules/@syncfusion/ej2-material3-theme/grids/grid/index.css";
 
{% endhighlight %}
{% endtabs %}

## Adding DataGrid component

Add the DataGrid component in **app.ts** file using the following code.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}

import { Grid } from '@syncfusion/ej2-grids';

// Defines the data to be displayed in the DataGrid.
const data: object[] = [
    { OrderID: 10248, CustomerName: 'Ana Trujillo', OrderDate: new Date(2025, 0, 12), ShipCountry: 'France', Freight: 32.38 },
    { OrderID: 10249, CustomerName: 'Martin Sommer', OrderDate: new Date(2025, 0, 15), ShipCountry: 'Germany', Freight: 11.61 },
    { OrderID: 10250, CustomerName: 'Thomas Hardy', OrderDate: new Date(2025, 1, 5), ShipCountry: 'Brazil', Freight: 65.83 },
    { OrderID: 10251, CustomerName: 'Elizabeth Lincoln', OrderDate: new Date(2025, 1, 18), ShipCountry: 'France', Freight: 41.34 },
    { OrderID: 10252, CustomerName: 'Victoria Ashworth', OrderDate: new Date(2025, 2, 10), ShipCountry: 'Belgium', Freight: 51.30 },
    { OrderID: 10253, CustomerName: 'Martine Rance', OrderDate: new Date(2025, 2, 22), ShipCountry: 'Brazil', Freight: 58.17 },
]

let grid: Grid = new Grid({
    dataSource: data,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', width: 120, textAlign: 'Right', type: 'number', isPrimaryKey: true },
        { field: 'CustomerName', headerText: 'Customer Name', width: 140, type: 'string' },
        { field: 'OrderDate', headerText: 'Order Date', width: 140, format: 'yMd', textAlign: 'Right' },
        { field: 'Freight', headerText: 'Freight', width: 120, textAlign: 'Right', format: 'C' },
        { field: 'ShipCountry', headerText: 'Ship Country', width: 140, type: 'string' },
    ]
});

grid.appendTo('#Grid');

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
    <link href="/styles/styles.css" rel="stylesheet" />
</head>

<body>
    <div>
        <!--HTML DataGrid element, which is going to render as Essential JS 2 DataGrid-->
        <div id="Grid"></div>
    </div>
</body>

</html>

{% endhighlight %}

{% highlight html tabtitle="styles.css" %}

@import '../../node_modules/@syncfusion/ej2-material3-theme/styles/grid/index.css';

{% endhighlight %}

{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/typescript/data-grid/help.syncfusion.com/code-snippet/grid-sdk/typescript/data-grid/help.syncfusion.com/code-snippet/grid-sdk/typescript/data-grid/grid-cs132" %}

## Run the application

```
npm start
```

## Registering Syncfusion license

Syncfusion<sup style="font-size:70%">&reg;</sup> Essential<sup style="font-size:70%">&reg;</sup> JS 2 components require a valid license key from version **16.2.0.41** onwards. Using the components without a license key will display a **license validation message** in the browser console.

**Steps to register the license key:**

1. Sign in to the [Syncfusion License Portal](https://www.syncfusion.com/account/downloads) and copy your license key.
2. Register the key in your **src/app/app.ts** file, before instantiating any Syncfusion component:

```ts
import { registerLicense } from '@syncfusion/ej2-base';

registerLicense('YOUR_LICENSE_KEY_HERE');
```

> For more details on obtaining and registering a license key, refer to the [License Key Generation](https://ej2.syncfusion.com/documentation/licensing/license-key-generation) and [License Key Registration](https://ej2.syncfusion.com/documentation/licensing/license-key-registration) documentation.

## Troubleshooting

**Grid styles are not applied:** Ensure that the required Syncfusion theme package is installed and the theme CSS is imported correctly in the `src/styles/styles.css` file.

**Trial license warning message:** Register your Syncfusion license key before initializing any Syncfusion<sup style="font-size:70%">&reg;</sup> control. Refer to the [Registering a license key](https://ej2.syncfusion.com/documentation/licensing/license-key-registration#register-syncfusion-license-key-in-the-project) section.

## See also

* [DataGrid Feature Modules](https://ej2.syncfusion.com/documentation/grid/module)
* [How to open PDF document on button click inside a DataGrid](https://support.syncfusion.com/kb/article/10246/how-to-open-pdf-document-on-button-click-inside-a-grid)
