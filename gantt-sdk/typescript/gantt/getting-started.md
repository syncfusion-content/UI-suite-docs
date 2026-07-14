---
layout: post
title: Getting Started with TypeScript Gantt Chart Control | Syncfusion
description: Checkout and learn about Getting started with TypeScript Gantt control of Syncfusion Essential JS 2 and more details.
platform: gantt-sdk
control: Getting started
publishingplatform: gantt-sdk
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Getting Started in TypeScript Gantt Chart Control

The [JavaScript Gantt Chart](https://www.syncfusion.com/javascript-ui-controls/js-gantt-chart) is a UI component used to visualize and manage project schedules using a timeline view. It supports hierarchical task data, scheduling, and rich interactive features.

This section explains the steps to create a simple Gantt and demonstrates the basic usage of the gantt component using the Essential<sup style="font-size:70%">&reg;</sup> JS 2 [quickstart](https://github.com/SyncfusionExamples/ej2-quickstart-webpack-) seed repository. This seed repository is pre-configured with the Essential<sup style="font-size:70%">&reg;</sup> JS 2 package.

> This application is integrated with the **webpack.config.js** configuration and uses the latest version of the [webpack-cli](https://webpack.js.org/api/cli#commands). It requires node **v14.15.0** or higher. For more information about webpack and its features, refer to the [webpack documentation](https://webpack.js.org/guides/getting-started).

## Setup development environment

Open the command prompt from the required directory, and run the following command to clone the Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript (Essential<sup style="font-size:70%">&reg;</sup> JS 2) quickstart project from [GitHub](https://github.com/SyncfusionExamples/ej2-quickstart-webpack-).

{% tabs %}
{% highlight bash tabtitle="CMD" %}

git clone https://github.com/SyncfusionExamples/ej2-quickstart-webpack

{% endhighlight %}
{% endtabs %}

After cloning the application in the `ej2-quickstart` folder, run the following command line to navigate to the `ej2-quickstart` folder.

{% tabs %}
{% highlight bash tabtitle="CMD" %}

cd ej2-quickstart-webpack

{% endhighlight %}
{% endtabs %}

## Add Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript packages

Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript (Essential<sup style="font-size:70%">&reg;</sup> JS 2) packages are available on the [npmjs.com](https://www.npmjs.com/~syncfusionorg) public registry. You can install all Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript (Essential<sup style="font-size:70%">&reg;</sup> JS 2) controls in a single [@syncfusion/ej2](https://www.npmjs.com/package/@syncfusion/ej2) package or individual packages for each control.

The quickstart application is preconfigured with the dependent [@syncfusion/ej2](https://www.npmjs.com/package/@syncfusion/ej2) package in the `~/package.json` file. Use the following command to install the dependent npm packages from the command prompt.

{% tabs %}
{% highlight bash tabtitle="NPM" %}

npm install

{% endhighlight %}
{% endtabs %}

## Import the Syncfusion<sup style="font-size:70%">&reg;</sup> CSS styles

Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript controls come with [built-in themes](https://ej2.syncfusion.com/documentation/appearance/theme), which are available in the installed packages. It's easy to adapt the Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript controls to match the style of your application by referring to one of the built-in themes.

The quickstart application is preconfigured to use the **Tailwind3** theme in the `~/src/styles/styles.css` file, as shown below:

{% tabs %}
{% highlight css tabtitle="style.css" %}

@import '../../node_modules/@syncfusion/ej2/tailwind3.css';

{% endhighlight %}
{% endtabs %}

> You can check out the [themes](https://ej2.syncfusion.com/documentation/appearance/theme) section to know more about built-in themes and CSS reference for individual controls.

### How styles are applied

The imported CSS is added to the global stylesheet (`~/src/styles/styles.css`) and styles automatically applied to all components during application runtime.

No additional configuration is required in the TypeScript (`.ts`) file.

## Create sample task data

Define a simple task list with hierarchical relationships. Each task must have a `StartDate` and either a `Duration` or `EndDate` to render properly.

```typescript
data = [
  {
    TaskID: 1,
    TaskName: "Project initiation",
    StartDate: new Date("2024-04-01"),
    EndDate: new Date("2024-04-15"),
  },
  {
    TaskID: 2,
    TaskName: "Identify site location",
    StartDate: new Date("2024-04-01"),
    Duration: 4,
    ParentID: 1,
  },
  {
    TaskID: 3,
    TaskName: "Perform site survey",
    StartDate: new Date("2024-04-01"),
    Duration: 4,
    ParentID: 1,
  },
  {
    TaskID: 4,
    TaskName: "Soil testing",
    StartDate: new Date("2024-04-01"),
    Duration: 3,
    ParentID: 1,
  },
  {
    TaskID: 5,
    TaskName: "Project estimation",
    StartDate: new Date("2024-04-15"),
    EndDate: new Date("2024-04-25"),
  },
  {
    TaskID: 6,
    TaskName: "Develop floor plan",
    StartDate: new Date("2024-04-15"),
    Duration: 5,
    ParentID: 5,
  },
  {
    TaskID: 7,
    TaskName: "Estimate project cost",
    StartDate: new Date("2024-04-15"),
    Duration: 5,
    ParentID: 5,
  },
];
```

## Configure task fields mapping

Map the data fields to Gantt Chart properties using [taskFields](https://ej2.syncfusion.com/documentation/api/gantt#taskfields):

```typescript
taskSettings = {
  id: "TaskID",
  name: "TaskName",
  startDate: "StartDate",
  duration: "Duration",
  parentID: "ParentID",
};
```

### Field mapping reference

| Property    | Description                  | Required |
| ----------- | ---------------------------- | -------- |
| `id`        | Unique task identifier       | Yes      |
| `name`      | Task display name            | Yes      |
| `startDate` | Task start date              | Yes      |
| `duration`  | Task duration in days        | Yes      |
| `parentID`  | Parent task ID for hierarchy | No       |

## Render the Gantt component

Put everything together by adding the following code in the **app.ts** and **index.html** file

Place the following code in the `app.ts` file to create and configure the Gantt Chart component.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}

import { Gantt } from '@syncfusion/ej2-gantt';

let gantt: Gantt = new Gantt({
dataSource: [
{TaskID: 1, TaskName: 'Project initiation', StartDate: new Date('2024-04-01'), EndDate: new Date('2024-04-15')},
{TaskID: 2, TaskName: 'Identify site location', StartDate: new Date('2024-04-01'), Duration: 4, ParentID: 1},
{TaskID: 3, TaskName: 'Perform site survey', StartDate: new Date('2024-04-01'), Duration: 4, ParentID: 1},
{TaskID: 4, TaskName: 'Soil testing', StartDate: new Date('2024-04-01'), Duration: 3, ParentID: 1},
{TaskID: 5, TaskName: 'Project estimation', StartDate: new Date('2024-04-15'), EndDate: new Date('2024-04-25')},
{TaskID: 6, TaskName: 'Develop floor plan', StartDate: new Date('2024-04-15'), Duration: 5, ParentID: 5},
{TaskID: 7, TaskName: 'Estimate project cost', StartDate: new Date('2024-04-15'), Duration: 5, ParentID: 5}
],
taskFields: {
id: 'TaskID',
name: 'TaskName',
startDate: 'StartDate',
duration: 'Duration',
parentID: 'ParentID'
}
});

gantt.appendTo('#Gantt');

{% endhighlight %}
{% endtabs %}

Add the following HTML element to the `index.html` file. This element acts as the container for rendering the Gantt Chart component.

{% tabs %}
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
</head>

<body>
    <!--Element which will render as Gantt-->
    <div id="Gantt"></div>
</body>

</html>

{% endhighlight %}
{% endtabs %}

## Run the application

The quickstart project is configured to build and run the application in the browser. Use the following command to start the application.

{% tabs %}
{% highlight bash tabtitle="NPM" %}

npm start

{% endhighlight %}
{% endtabs %}

## Output

The Gantt Chart displays:

- Task hierarchy with parent-child relationships
- Timeline view showing task bars
- Automatically calculated dates based on duration

The chart displays two parent tasks (Project initiation, Project estimation) with subtasks shown in a tree structure. Task bars are rendered on the timeline, sized according to their duration and start dates.

You can preview the following sample by clicking the **Preview Sample** button.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt/getting-started-cs23/index.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/getting-started-cs23" %}

## Error handling

Error handling is used to identify errors, display them and develop recovery strategies to handle errors from gantt. In Gantt, error handling is done by using the [actionFailure](https://ej2.syncfusion.com/documentation/api/gantt#actionfailure) event. Some of the scenarios that this event handles are:

- Invalid duration : The [duration](https://ej2.syncfusion.com/documentation/api/gantt/taskFields#duration) field accepts only numerical values with an optional decimal point. Entering non-numerical values triggers the `actionFailure` event and displays issue information in the event argument.
- Invalid dependency: The [dependency](https://ej2.syncfusion.com/documentation/api/gantt/taskFields#dependency) field accepts only a number followed by a predecessor type (FS, FF, SS, SF). Entering invalid values, such as special characters or incorrect predecessor types, triggers the `actionFailure` event and displays issue information in the event argument.
- Invalid offset : The [offset](https://ej2.syncfusion.com/documentation/api/gantt/iPredecessor#offset) accepts only numerical values or their word equivalents followed by a unit. Entering invalid values, such as special characters triggers `actionFailure` event and displays issue information in the event argument.
- Failure to map task fields : The data source fields necessary for rendering tasks should be mapped to the Gantt control using the [taskFields](https://ej2.syncfusion.com/documentation/api/gantt/taskFields) property. Failure to map `taskFields` in the sample triggers `actionFailure` event and displays issue information in the event argument.
- Failure to map resource fields : To assign resources to a task, resource fields should be mapped to the Gantt control using the [resourceFields](https://ej2.syncfusion.com/documentation/api/gantt/resourceFields). Failure to map `resourceFields` in the sample triggers `actionFailure` event and displays issue information in the event argument.
- Failure to map `isPrimaryKey` : [isPrimaryKey](https://ej2.syncfusion.com/documentation/api/gantt/column#isprimarykey) field is crucial for CRUD operations. Failure to map [id](https://ej2.syncfusion.com/documentation/api/gantt/taskFields#id) column in gantt column collection or [isPrimaryKey](https://ej2.syncfusion.com/documentation/api/gantt/column#isprimarykey) field in one of the columns will trigger `actionFailure` event and display issue information in the event argument.
- Invalid date format : [format](https://ej2.syncfusion.com/documentation/api/gantt/iTimelineFormatter) property under `topTier` and `bottomTier` determines how the timelines are displayed in the top tier and bottom tier of the Gantt chart timeline. If the `format` does not contain a valid standard [date format](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date), it triggers the `actionFailure` event, displaying issue information in the event argument.
- Failure to map `hasChildMapping` : [hasChildMapping](https://ej2.syncfusion.com/documentation/api/gantt/taskFields#haschildmapping) property should configured for [load-on-demand](https://ej2.syncfusion.com/documentation/gantt/data-binding#load-child-on-demand). Ensure it properly configured in the [taskFields](https://ej2.syncfusion.com/documentation/api/gantt/taskFields). Failure to map `hasChildMapping` in the `load-on-demand` sample triggers `actionFailure` event and displays issue information in the event argument.
- Invalid day in event markers : [day](https://ej2.syncfusion.com/documentation/api/gantt/eventMarker#day) should configured in [eventMarkers](https://ej2.syncfusion.com/documentation/api/gantt/eventMarker) to render striplines in a particular day. Failure to configure the `day` in `eventMarkers` triggers `actionFailure` event and displays issue information in the event argument.

> Additionally, TreeGrid side error handling information is also displayed from the Gantt `actionFailure` event. For more details on TreeGrid side error handling, refer [here](https://ej2.syncfusion.com/documentation/treegrid/getting-started#handling-errors).

The following code example shows how to use the [actionFailure](https://ej2.syncfusion.com/documentation/api/gantt#actionfailure) event in the Gantt control to display an exception when `isPrimaryKey` is not configured properly in the Gantt Chart column.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt/exception-handling-cs1/index.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/exception-handling-cs1" %}

The following screenshot represents the Gantt Exception handling in `actionFailure` event.

![Error Handling](./images/error-handling.png)
