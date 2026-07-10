---
layout: post
title: TypeScript Pivot Table with Vite | Syncfusion
description: Learn how to create a Syncfusion TypeScript Pivot Table control using Vite for fast development with optimized builds.
platform: grid-sdk
control: Getting started 
publishingplatform: grid-sdk
documentation: ug
domainurl: https://help.syncfusion.com/grid-sdk
---

# Getting started with TypeScript Pivot Table control in Vite

This section explains the steps to create a simple **Pivot Table** and demonstrates the basic usage of the pivot table component in a Vite-based TypeScript project scaffolded with the latest Vite version.

## Prerequisites

- **Node.js**: 18.0 or later
- **npm**: 8.0 or later

## Setup for local development

Run the following command to create a new [Vite](https://vitejs.dev/) project with TypeScript template:

```bash
npm create vite@latest my-app -- --template vanilla-ts
```
Follow prompts to install packages. Select options as shown:

![Pivot Table Initial setup](images/npm_setup.png)

Select `No` (Syncfusion not installed yet). Navigate to project directory and install dependencies:

```bash
cd my-app
npm install
```

## Adding Syncfusion<sup style="font-size:70%">&reg;</sup> Pivot Table packages

Install Syncfusion Pivot Table from npm:

```bash
npm install @syncfusion/ej2-pivotview --save
```

## Adding CSS reference

Add the following imports inside the `~/src/style.css` file to include the `tailwind3` theme styles:

{% tabs %}
{% highlight css tabtitle="style.css" %}

@import '../node_modules/@syncfusion/ej2-base/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-grids/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-lists/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-calendars/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-pivotview/styles/tailwind3.css';

{% endhighlight %}
{% endtabs %}

I> Make sure to import **style.css** in **src/main.ts** to apply the Syncfusion component styles globally. You can also refer to the [themes section](https://ej2.syncfusion.com/documentation/appearance/theme) for details about built-in themes and CSS references for individual controls.

## Adding Pivot Table control

To get started, add the Pivot Table control in **main.ts** and **index.html** files. Pivot Table can be initialized through `div` element.

{% tabs %}
{% highlight ts tabtitle="main.ts" %}

import './style.css';
import { PivotView, IDataSet } from '@syncfusion/ej2-pivotview';

let pivotData: IDataSet[] = [
    { 'Sold': 31, 'Amount': 52824, 'Country': 'France', 'Products': 'Mountain Bikes', 'Year': 'FY 2025', 'Quarter': 'Q1' },
    { 'Sold': 51, 'Amount': 86904, 'Country': 'France', 'Products': 'Mountain Bikes', 'Year': 'FY 2025', 'Quarter': 'Q2' },
    { 'Sold': 90, 'Amount': 153360, 'Country': 'France', 'Products': 'Mountain Bikes', 'Year': 'FY 2025', 'Quarter': 'Q3' },
    { 'Sold': 25, 'Amount': 42600, 'Country': 'France', 'Products': 'Mountain Bikes', 'Year': 'FY 2025', 'Quarter': 'Q4' }
];

let pivotTableObj: PivotView = new PivotView({
    dataSourceSettings: {
        dataSource: pivotData,
        expandAll: true,
        columns: [{ name: 'Year' }, { name: 'Quarter' }],
        rows: [{ name: 'Country' }, { name: 'Products' }],
        values: [{ name: 'Amount', caption: 'Sold Amount' }, { name: 'Sold', caption: 'Units Sold' }],
        formatSettings: [{ name: 'Amount', format: 'C0' }]
    }
});
pivotTableObj.appendTo('#PivotTable');

{% endhighlight %}

{% highlight html tabtitle="index.html" %}
<!doctype html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <link rel="icon" type="image/svg+xml" href="/vite.svg" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Syncfusion Typescript Pivot Table</title>
</head>

<body>
  <div id="PivotTable"></div>
  <script type="module" src="/src/main.ts"></script>
</body>

</html>

{% endhighlight %}
{% endtabs %}
          
## Run the application

Run the app:

```bash
npm run dev
```

## See also

* [Data Binding](https://ej2.syncfusion.com/documentation/pivotview/data-binding)
* [Field List](https://ej2.syncfusion.com/documentation/pivotview/field-list)
* [Grouping Bar](https://ej2.syncfusion.com/documentation/pivotview/grouping-bar)