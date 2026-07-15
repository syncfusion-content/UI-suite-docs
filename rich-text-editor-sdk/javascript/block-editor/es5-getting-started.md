---
layout: post
title: Es5 getting started with ##Platform_Name## BlockEditor | Syncfusion
description:  Checkout and learn about Es5 getting started with ##Platform_Name## BlockEditor control of Syncfusion Essential JS 2 and more details.
canonical_url: "https://www.syncfusion.com/javascript-ui-controls/js-block-editor"
platform: ej2-javascript
control: Es5 getting started
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Es5 getting started in ##Platform_Name## BlockEditor control

The Essential JS 2 for JavaScript (global script) is an ES5 formatted pure JavaScript framework which can be directly used in latest web browsers.

## Dependencies

The following list of dependencies are required to use the `BlockEditor` control in the application.

```javascript
|-- @syncfusion/ej2-blockeditor
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-popups
    |-- @syncfusion/ej2-buttons
    |-- @syncfusion/ej2-splitbuttons
    |-- @syncfusion/ej2-navigations
    |-- @syncfusion/ej2-dropdowns
    |-- @syncfusion/ej2-inputs

```
## Setup for local development

Refer to the following steps to set up your local environment.

**Step 1:** Create an app folder `my-app` for Essential JS 2 JavaScript controls.

**Step 2:** Create a `my-app/resources` folder to store local scripts and styles files.

**Step 3:** Open Visual Studio Code and create `my-app/index.js` and `my-app/index.html` files for initializing the Essential JS 2 BlockEditor control.

## Adding BlockEditor styles

Add the following styles inside the `my-app/index.html` file to include the `tailwind3` theme styles:

{% tabs %}
{% highlight html tabtitle="index.html" %}

<link href="https://cdn.syncfusion.com/ej2/{{site.ej2version}}/ej2-base/styles/tailwind3.css" rel="stylesheet">
<link href="https://cdn.syncfusion.com/ej2/{{site.ej2version}}/ej2-buttons/styles/tailwind3.css" rel="stylesheet">
<link href="https://cdn.syncfusion.com/ej2/{{site.ej2version}}/ej2-inputs/styles/tailwind3.css" rel="stylesheet">
<link href="https://cdn.syncfusion.com/ej2/{{site.ej2version}}/ej2-navigations/styles/tailwind3.css" rel="stylesheet">
<link href="https://cdn.syncfusion.com/ej2/{{site.ej2version}}/ej2-popups/styles/tailwind3.css" rel="stylesheet">
<link href="https://cdn.syncfusion.com/ej2/{{site.ej2version}}/ej2-dropdowns/styles/tailwind3.css" rel="stylesheet">
<link href="https://cdn.syncfusion.com/ej2/{{site.ej2version}}/ej2-splitbuttons/styles/tailwind3.css" rel="stylesheet">
<link href="https://cdn.syncfusion.com/ej2/{{site.ej2version}}/ej2-blockeditor/styles/tailwind3.css" rel="stylesheet">

{% endhighlight %}
{% endtabs %}

I> Ensure that all BlockEditor theme style files are loaded in the exact order shown above. The order is important because these styles have dependencies, and loading them incorrectly may cause styling issues in the controls. You can also refer to the [themes section](https://ej2.syncfusion.com/documentation/appearance/theme) for details about built-in themes and CSS references for individual controls.

## Adding BlockEditor scripts

Add the following scripts inside the `my-app/index.html` file to include the BlockEditor functionality:

{% tabs %}
{% highlight html tabtitle="index.html" %}

<script src="https://cdn.syncfusion.com/ej2/{{site.ej2version}}/ej2-base/dist/global/ej2-base.min.js" type="text/javascript"></script>
<script src="https://cdn.syncfusion.com/ej2/{{site.ej2version}}/ej2-buttons/dist/global/ej2-buttons.min.js" type="text/javascript"></script>
<script src="https://cdn.syncfusion.com/ej2/{{site.ej2version}}/ej2-inputs/dist/global/ej2-inputs.min.js" type="text/javascript"></script>
<script src="https://cdn.syncfusion.com/ej2/{{site.ej2version}}/ej2-popups/dist/global/ej2-popups.min.js" type="text/javascript"></script>
<script src="https://cdn.syncfusion.com/ej2/{{site.ej2version}}/ej2-navigations/dist/global/ej2-navigations.min.js" type="text/javascript"></script>
<script src="https://cdn.syncfusion.com/ej2/{{site.ej2version}}/ej2-dropdowns/dist/global/ej2-dropdowns.min.js" type="text/javascript"></script>
<script src="https://cdn.syncfusion.com/ej2/{{site.ej2version}}/ej2-splitbuttons/dist/global/ej2-splitbuttons.min.js" type="text/javascript"></script>
<script src="https://cdn.syncfusion.com/ej2/{{site.ej2version}}/ej2-blockeditor/dist/global/ej2-blockeditor.min.js" type="text/javascript"></script>

{% endhighlight %}
{% endtabs %}

I> Ensure that all BlockEditor script files are loaded in the correct order and included before initializing the control. The order is important because the scripts have dependencies, and loading them incorrectly may prevent the BlockEditor from working properly or cause runtime errors.
Make sure the required base and dependent scripts are included along with the BlockEditor script.

## Adding BlockEditor control

To get started, add the BlockEditor control in index.js and index.html files. BlockEditor can be initialized through a div element.

BlockEditor can be initialized on div element as shown below

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/block-editor/getting-started/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/block-editor/getting-started/index.html %}
{% endhighlight %}
{% endtabs %}

## Run the application

Now, run the index.html in web browser, it will render the Essential JS 2 BlockEditor control.

Output will be displayed as follows.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/block-editor/getting-started/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/block-editor/getting-started/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/block-editor/getting-started" %}

> You can refer to our [JavaScript BlockEditor](https://www.syncfusion.com/javascript-ui-controls/js-block-editor) feature tour page for its groundbreaking feature representations. You can also explore our [JavaScript BlockEditor example](https://ej2.syncfusion.com/javascript/demos/#/tailwind3/block-editor/overview.html) that shows how to render the block editor.
