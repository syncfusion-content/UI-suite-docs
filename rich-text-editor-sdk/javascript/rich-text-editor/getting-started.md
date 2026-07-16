---
layout: post
title: Getting started with JavaScript Rich text editor | Syncfusion
description:  Checkout and learn about Getting started with JavaScript Rich text editor control of Syncfusion Essential JS 2 and more details.
canonical_url: "https://www.syncfusion.com/javascript-ui-controls/js-rich-text-editor"
platform: rich-text-editor-sdk
control: Getting started 
publishingplatform: rich-text-editor-sdk
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk/
---

# Getting started in JavaScript Rich text editor control

The Essential JS 2 for JavaScript (global script) is an ES5 formatted pure JavaScript framework which can be directly used in latest web browsers.

## Dependencies

The following list of dependencies are required to use the `Rich Text Editor` control in the application.

```javascript
|-- @syncfusion/ej2-richtexteditor
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-buttons
    |-- @syncfusion/ej2-data
    |-- @syncfusion/ej2-inputs
    |-- @syncfusion/ej2-lists
    |-- @syncfusion/ej2-navigations
    |-- @syncfusion/ej2-popups
    |-- @syncfusion/ej2-splitbuttons
    |-- @syncfusion/ej2-filemanager

```
## Setup for local development

Refer to the following steps to set up your local environment.

**Step 1:** Create an app folder `my-app` for Essential JS 2 JavaScript controls.

**Step 2:** Create a `my-app/resources` folder to store local scripts and styles files.

**Step 3:** Open Visual Studio Code and create `my-app/index.js` and `my-app/index.html` files for initializing the Essential JS 2 Rich Text Editor control.

## Adding Rich Text Editor styles

Add the following styles inside the `my-app/index.html` file to include the `tailwind3` theme styles:

{% tabs %}
{% highlight html tabtitle="index.html" %}


<link href="https://cdn.syncfusion.com/ej2/{{site.ej2version}}/ej2-base/styles/tailwind3.css" rel="stylesheet">
<link href="https://cdn.syncfusion.com/ej2/{{site.ej2version}}/ej2-buttons/styles/tailwind3.css" rel="stylesheet">
<link href="https://cdn.syncfusion.com/ej2/{{site.ej2version}}/ej2-inputs/styles/tailwind3.css" rel="stylesheet">
<link href="https://cdn.syncfusion.com/ej2/{{site.ej2version}}/ej2-lists/styles/tailwind3.css" rel="stylesheet">
<link href="https://cdn.syncfusion.com/ej2/{{site.ej2version}}/ej2-navigations/styles/tailwind3.css" rel="stylesheet">
<link href="https://cdn.syncfusion.com/ej2/{{site.ej2version}}/ej2-popups/styles/tailwind3.css" rel="stylesheet">
<link href="https://cdn.syncfusion.com/ej2/{{site.ej2version}}/ej2-splitbuttons/styles/tailwind3.css" rel="stylesheet">
<link href="https://cdn.syncfusion.com/ej2/{{site.ej2version}}/ej2-richtexteditor/styles/tailwind3.css" rel="stylesheet">

{% endhighlight %}
{% endtabs %}

I> Ensure that all Rich Text Editor theme style files are loaded in the exact order shown above. The order is important because these styles have dependencies, and loading them incorrectly may cause styling issues in the controls. You can also refer to the [themes section](https://ej2.syncfusion.com/documentation/appearance/theme) for details about built-in themes and CSS references for individual controls.

## Adding Rich Text Editor scripts

Add the following scripts inside the `my-app/index.html` file to include the Rich Text Editor functionality:

{% tabs %}
{% highlight html tabtitle="index.html" %}

<script src="http://cdn.syncfusion.com/ej2/{{site.ej2version}}/ej2-base/dist/global/ej2-base.min.js" type="text/javascript"></script>
<script src="http://cdn.syncfusion.com/ej2/{{site.ej2version}}/ej2-buttons/dist/global/ej2-buttons.min.js" type="text/javascript"></script>
<script src="http://cdn.syncfusion.com/ej2/{{site.ej2version}}/ej2-inputs/dist/global/ej2-inputs.min.js" type="text/javascript"></script>
<script src="http://cdn.syncfusion.com/ej2/{{site.ej2version}}/ej2-lists/dist/global/ej2-lists.min.js" type="text/javascript"></script>
<script src="http://cdn.syncfusion.com/ej2/{{site.ej2version}}/ej2-popups/dist/global/ej2-popups.min.js" type="text/javascript"></script>
<script src="http://cdn.syncfusion.com/ej2/{{site.ej2version}}/ej2-navigations/dist/global/ej2-navigations.min.js" type="text/javascript"></script>
<script src="http://cdn.syncfusion.com/ej2/{{site.ej2version}}/ej2-splitbuttons/dist/global/ej2-splitbuttons.min.js" type="text/javascript"></script>
<script src="http://cdn.syncfusion.com/ej2/{{site.ej2version}}/ej2-filemanager/dist/global/ej2-filemanager.min.js" type="text/javascript"></script>
<script src="http://cdn.syncfusion.com/ej2/{{site.ej2version}}/ej2-richtexteditor/dist/global/ej2-richtexteditor.min.js" type="text/javascript"></script>

{% endhighlight %}
{% endtabs %}

I> Ensure that all Rich Text Editor script files are loaded in the correct order and included before initializing the control. The order is important because the scripts have dependencies, and loading them incorrectly may prevent the Rich Text Editor from working properly or cause runtime errors.
Make sure the required base and dependent scripts are included along with the Rich Text Editor script.

## Adding Rich Text Editor control

To get started, add the Rich Text Editor control in index.js and index.html files. Rich Text Editor can be initialized through div element or textarea element.

Rich Text Editor can be initialized on div element as shown below

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rich-text-editor-sdk/javascript/rich-text-editor/javascript/rich-text-editor/text-area-sample-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/javascript/rich-text-editor/javascript/rich-text-editor/text-area-sample-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

## Run the application

Now, run the index.html in web browser, it will render the Essential JS 2 Rich Text Editor control.

Output will be displayed as follows.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rich-text-editor-sdk/javascript/rich-text-editor/javascript/rich-text-editor/text-area-sample-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/javascript/rich-text-editor/javascript/rich-text-editor/text-area-sample-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/javascript/rich-text-editor/help.syncfusion.com/code-snippet/rich-text-editor-sdk/javascript/rich-text-editor/text-area-sample-cs3" %}

> You can refer to our [JavaScript Rich Text Editor](https://www.syncfusion.com/rich-text-editor-sdk/javascript-rich-text-editor) feature tour page for its groundbreaking feature representations. You can also explore our [JavaScript Rich Text Editor example](https://ej2.syncfusion.com/javascript/demos/#/tailwind3/rich-text-editor/rich-text-editor.html) that shows how to render the rich text editor tools. 

## See also

* [How to change the editor type](https://ej2.syncfusion.com/javascript/documentation/rich-text-editor/editor-types/editor-modes)
* [How to render the iframe](https://ej2.syncfusion.com/javascript/documentation/rich-text-editor/editor-types/iframe)
* [How to render the toolbar in inline mode](https://ej2.syncfusion.com/javascript/documentation/rich-text-editor/editor-types/inline-editing)
* [How to insert Emoticons](https://ej2.syncfusion.com/demos/#/tailwind3/rich-text-editor/insert-emoticons.html)
* [Blog posting using Rich Text Editor](https://ej2.syncfusion.com/demos/#/tailwind3/rich-text-editor/blog-posting.html)
* [Reactive Form with Rich Text Editor](https://ej2.syncfusion.com/angular/demos/#/tailwind3/rich-text-editor/reactive-form)
* [Accessibility in Rich text editor](https://ej2.syncfusion.com/javascript/documentation/rich-text-editor/accessibility)
* [Keyboard support in Rich text editor](https://ej2.syncfusion.com/javascript/documentation/rich-text-editor/keyboard-support)
* [Globalization in Rich text editor](https://ej2.syncfusion.com/javascript/documentation/rich-text-editor/globalization)