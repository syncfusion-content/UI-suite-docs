---
layout: post
title: Getting started with TypeScript Kanban control | Syncfusion
description:  Checkout and learn about Getting started with TypeScript Kanban control of Syncfusion Essential JS 2 and more details.
platform: gantt-sdk
control: Getting started 
publishingplatform: gantt-sdk
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Getting started with TypeScript Kanban control

This section explains how to create and configure the Kanban component in TypeScript using a Vite project with Essential® JS 2.

## Dependencies

The following list of dependencies are required to use the Kanban component in your application:

```javascript
|-- @syncfusion/ej2-kanban
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-buttons
    |-- @syncfusion/ej2-data
    |-- @syncfusion/ej2-dropdowns
    |-- @syncfusion/ej2-icons
    |-- @syncfusion/ej2-inputs
    |-- @syncfusion/ej2-layouts
    |-- @syncfusion/ej2-lists
    |-- @syncfusion/ej2-navigations
    |-- @syncfusion/ej2-popups
    |-- @syncfusion/ej2-splitbuttons
```

## Set up development environment

Run the following commands to create a TypeScript Vite application and start the development server:

```bash
npm create vite@latest my-app
```
To set up a TypeScript application in a TypeScript environment, run the following command.

```bash
npm create vite@latest my-app -- --template vanilla-ts
cd my-app
npm run dev
```

## Add Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript packages

All the available Essential<sup style="font-size:70%">&reg;</sup> JS 2 packages are published in the Syncfusion npm registry.
To install the Kanban component, use the following command

```
npm install @syncfusion/ej2-kanban
```

## Import the Syncfusion<sup style="font-size:70%">&reg;</sup> CSS styles

Kanban CSS files are available in the ej2-kanban and its sub-component package folder. This can be referenced in the application using the following code.

In Vite project to use the `Tailwind3` theme in the `src/style.css` file follow the code as shown below: 

{% tabs %}
{% highlight css tabtitle="style.css" %}

@import '../node_modules/@syncfusion/ej2-base/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-layouts/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-kanban/styles/tailwind3.css';

{% endhighlight %}
{% endtabs %}

Refer to the themes documentation for built-in themes and CSS references for individual controls: https://ej2.syncfusion.com/documentation/appearance/theme/

## Initialize the Kanban

Add an HTML div element with an `id` attribute to `index.html`, which serves as the host element for the Kanban control.

`[index.html]`

{% tabs %}
{% highlight html tabtitle="index.html" %}

<!DOCTYPE html>
<html lang="en">
<head>
    <title>Kanban Typescript Component</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
    <meta name="description" content="Essential JS 2" />
    <meta name="author" content="Syncfusion" />
    <link rel="shortcut icon" href="resources/favicon.ico" />
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" />
</head>
<body>
    <!--Element where the Kanban will be rendered-->
    <div id="Kanban"></div>
</body>
</html>

{% endhighlight %}
{% endtabs %}

Import the Kanban component to your `main.ts` file as follows and initialize it to the element defined with an id `Kanban` in the `index.html` file.

`[src/main.ts]`

{% tabs %}
{% highlight ts tabtitle="main.ts" %}

import { Kanban } from '@syncfusion/ej2-kanban';

const kanbanObj: Kanban = new Kanban({
    columns: [
        { headerText: 'Backlog', keyField: 'Open' },
        { headerText: 'In Progress', keyField: 'InProgress' },
        { headerText: 'Testing', keyField: 'Testing' },
        { headerText: 'Done', keyField: 'Close' }
    ]
});
kanbanObj.appendTo('#Kanban');

{% endhighlight %}
{% endtabs %}

Now, run the application in the browser using the following command.

{% tabs %}
{% highlight bash tabtitle="NPM" %}

npm run dev

{% endhighlight %}
{% endtabs %}

The output will display the empty Kanban.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/kanban/getting-started-empty-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/kanban/getting-started-empty-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/kanban/getting-started-empty-cs2" %}

## Populating cards

To populate the empty Kanban with cards, define local JSON data or remote data using the `dataSource` property. The data items must include fields relevant to the configured `keyField`. The example below uses default fields such as ID, Summary, and Status.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/kanban/getting-started-key-field-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/kanban/getting-started-key-field-cs3/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/gantt-sdk/typescript/kanban/getting-started-key-field-cs3/datasource.ts %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/kanban/getting-started-key-field-cs3" %}

## Enable swimlane

`Swimlane` can be enabled by mapping the fields `swimlaneSettings.keyField` to appropriate column name in dataSource. This enables the grouping of the cards based on the mapped column values.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/kanban/getting-started-swimlane-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/kanban/getting-started-swimlane-cs2/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/gantt-sdk/typescript/kanban/getting-started-swimlane-cs2/datasource.ts %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/kanban/getting-started-swimlane-cs2" %}