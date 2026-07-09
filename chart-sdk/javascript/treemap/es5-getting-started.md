---
layout: post
title: Es5 getting started with JavaScript TreeMap Component | Syncfusion
description:  Checkout and learn about Es5 getting started with JavaScript TreeMap Component of Syncfusion Essential JS 2 and more details.
platform: chart-sdk
control: Es5 getting started 
publishingplatform: chart-sdk
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---

# Getting started in JavaScript TreeMap Component

The Essential<sup style="font-size:70%">&reg;</sup> JS 2 TreeMap component is a hierarchical data visualization control that displays data as nested rectangular blocks, with sizes proportional to their values. The ES5 version uses global script references, enabling you to integrate the TreeMap directly into HTML pages without a build process.

## Control Initialization

You can initialize the TreeMap component using one of the following methods: 

* Using local script references in an HTML page
* Using CDN links for script references

### Using local script references in an HTML page

**Step 1:** Create an app folder `quickstart` to organize your project files.

**Step 2:** Obtain the global scripts from the [Essential Studio<sup style="font-size:70%">&reg;</sup> JavaScript (Essential<sup style="font-size:70%">&reg;</sup> JS 2)](https://www.syncfusion.com/downloads/essential-js2) installation directory on your machine.

**Syntax:**
> Dependency Script: `**(installed location)**\Syncfusion\Essential Studio\JavaScript - EJ2\{RELEASE_VERSION}\Web (Essential JS 2)\JavaScript\{DEPENDENCY_PACKAGE_NAME}\dist\global\{DEPENDENCY_PACKAGE_NAME}.min.js`
>
> Control Script: `**(installed location)**\Syncfusion\Essential Studio\JavaScript - EJ2\{RELEASE_VERSION}\Web (Essential JS 2)\JavaScript\{PACKAGE_NAME}\dist\global\{PACKAGE_NAME}.min.js`

**Example:**
> Dependency Script: `C:\Program Files (x86)\Syncfusion\Essential Studio\JavaScript - EJ2\20.1.0.58\Web (Essential JS 2)\JavaScript\ej2-base\dist\global\ej2-base.min.js`
>
>`C:\Program Files (x86)\Syncfusion\Essential Studio\JavaScript - EJ2\20.1.0.58\Web (Essential JS 2)\JavaScript\ej2-data\dist\global\ej2-data.min.js`
>
>`C:\Program Files (x86)\Syncfusion\Essential Studio\JavaScript - EJ2\20.1.0.58\Web (Essential JS 2)\JavaScript\ej2-svg-base\dist\global\ej2-svg-base.min.js`
>
> Control Script: `C:\Program Files (x86)\Syncfusion\Essential Studio\JavaScript - EJ2\20.1.0.58\Web (Essential JS 2)\JavaScript\ej2-treemap\dist\global\ej2-treemap.min.js`

The below located script file contains all Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript (ES5) UI control resources in a single file.

> Scripts: `**(installed location)**\Syncfusion\Essential Studio\JavaScript - EJ2\{RELEASE_VERSION}\Web (Essential JS 2)\JavaScript\ej2\dist\ej2.min.js`

For advanced customization, use the [`Custom Resource Generator (CRG)`](https://crg.syncfusion.com/), an online tool that generates custom scripts and styles for selected controls, combining them into a single optimized file.

**Step 3:** Create a folder structure `~/quickstart/resources` with subdirectories for each dependency package (e.g., `~/quickstart/resources/base`, `~/quickstart/resources/data`, `~/quickstart/resources/svg-base`, `~/quickstart/resources/treemap`). Copy the corresponding script files from the installed location to these folders.

**Step 4:** Create a HTML page (index.html) in `~/quickstart/index.html` and add the Essential<sup style="font-size:70%">&reg;</sup> JS 2 script references.

```html
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <title>Essential JS 2</title>
        <!-- Essential JS 2 Base's global script (Dependency Script) -->
        <script src="resources/base/ej2-base.min.js" type="text/javascript"></script>
        <script src="resources/base/ej2-data.min.js" type="text/javascript"></script>
        <script src="resources/base/ej2-svg-base.min.js" type="text/javascript"></script>
        <!-- Essential JS 2 treemap's global script (Control Script) -->
        <script src="resources/treemap/ej2-treemap.min.js" type="text/javascript"></script>
    </head>
    <body>
    </body>
</html>
```

**Step 5:** Initialize the TreeMap component by adding the following code to `~/quickstart/index.html`. This example displays hierarchical data representing international airports across South American countries

```html
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <title>Essential JS 2</title>
        <!-- Essential JS 2 Base's global script (Dependency Script) -->
        <script src="resources/base/ej2-base.min.js" type="text/javascript"></script>
        <script src="resources/base/ej2-data.min.js" type="text/javascript"></script>
        <script src="resources/base/ej2-svg-base.min.js" type="text/javascript"></script>
        <!-- Essential JS 2 treemap's global script (Control Script) -->
        <script src="resources/treemap/ej2-treemap.min.js" type="text/javascript"></script>
    </head>
    <body>
        <div id='element' style="display: block;"></div>
        <script>
            var treemap = new ej.treemap.TreeMap({
                dataSource: [
                    { Title: 'State wise International Airport count in South America', State: "Brazil", Count: 25 },
                    { Title: 'State wise International Airport count in South America', State: "Colombia", Count: 12 },
                    { Title: 'State wise International Airport count in South America', State: "Argentina", Count: 9 },
                    { Title: 'State wise International Airport count in South America', State: "Ecuador", Count: 7 },
                    { Title: 'State wise International Airport count in South America', State: "Chile", Count: 6 },
                    { Title: 'State wise International Airport count in South America', State: "Peru", Count: 3 },
                    { Title: 'State wise International Airport count in South America', State: "Venezuela", Count: 3 },
                    { Title: 'State wise International Airport count in South America', State: "Bolivia", Count: 2 },
                    { Title: 'State wise International Airport count in South America', State: "Paraguay", Count: 2 },
                    { Title: 'State wise International Airport count in South America', State: "Uruguay", Count: 2 },
                    { Title: 'State wise International Airport count in South America', State: "Falkland Islands",Count: 1 },
                    { Title: 'State wise International Airport count in South America', State: "French Guiana", Count:1 },
                    { Title: 'State wise International Airport count in South America', State: "Guyana", Count: 1 },
                    { Title: 'State wise International Airport count in South America', State: "Suriname", Count: 1 },
                ],
                weightValuePath: 'Count',
                leafItemSettings: {
                    labelPath: 'State',
                }
            });
            treemap.appendTo('#element');
        </script>
    </body>
</html>
```

**Step 6:** Now, run the **index.html** in web browser, it will render the **Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript TreeMap** control.

### Using CDN link for script reference

**Step 1:** Create an app folder `quickstart` to organize your project files.

**Step 2:** The Essential<sup style="font-size:70%">&reg;</sup> JS 2 scripts are hosted on a CDN. You can reference them using the following link formats.

**Common Control Scripts:**
> Syntax: `https://cdn.syncfusion.com/ej2/{RELEASE_VERSION}/dist/ej2.min.js`

**Example:**
> Script: [`https://cdn.syncfusion.com/ej2/32.1.19/dist/ej2.min.js`](https://cdn.syncfusion.com/ej2/32.1.19/dist/ej2.min.js)

**or**

**Individual Control Scripts:**

**Syntax**
>`https://cdn.syncfusion.com/ej2/{RELEASE_VERSION}/{PACKAGE_NAME}/dist/global/{PACKAGE_NAME}.min.js`

**Example:**
> TreeMap Script: [`https://cdn.syncfusion.com/ej2/32.1.19/ej2-treemap/dist/global/ej2-treemap.min.js`](https://cdn.syncfusion.com/ej2/32.1.19/ej2-treemap/dist/global/ej2-treemap.min.js)
>
> Dependency Scripts
>
> [`https://cdn.syncfusion.com/ej2/32.1.19/ej2-base/dist/global/ej2-base.min.js`](https://cdn.syncfusion.com/ej2/32.1.19/ej2-base/dist/global/ej2-base.min.js)
>
> [`https://cdn.syncfusion.com/ej2/32.1.19/ej2-data/dist/global/ej2-data.min.js`](https://cdn.syncfusion.com/ej2/32.1.19/ej2-data/dist/global/ej2-data.min.js)
>
> [`https://cdn.syncfusion.com/ej2/32.1.19/ej2-svg-base/dist/global/ej2-svg-base.min.js`](https://cdn.syncfusion.com/ej2/32.1.19/ej2-svg-base/dist/global/ej2-svg-base.min.js)
>
> [`https://cdn.syncfusion.com/ej2/32.1.19/ej2-pdf-export/dist/global/ej2-pdf-export.min.js`](https://cdn.syncfusion.com/ej2/32.1.19/ej2-pdf-export/dist/global/ej2-pdf-export.min.js)

Create a HTML page (**index.html**) in **~/quickstart** location and add the following CDN link references. Now, initiate the **Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript (ES5) TreeMap** control in the **index.html** by using following code.

```html
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <title>Essential JS 2</title>
         <script src="https://cdn.syncfusion.com/ej2/{RELEASE_VERSION}/ej2-base/dist/global/ej2-base.min.js" type="text/javascript"></script>
         <script src="https://cdn.syncfusion.com/ej2/{RELEASE_VERSION}/ej2-svg-base/dist/global/ej2-svg-base.min.js" type="text/javascript"></script>
         <script src="https://cdn.syncfusion.com/ej2/{RELEASE_VERSION}/ej2-data/dist/global/ej2-data.min.js" type="text/javascript"></script>
         <script src="https://cdn.syncfusion.com/ej2/{RELEASE_VERSION}/ej2-treemap/dist/global/ej2-treemap.min.js"></script>
    </head>
    <body>
        <div id='element' style="display: block;"></div>
        <script>
            var treemap = new ej.treemap.TreeMap({
                dataSource: [
                    { Title: 'State wise International Airport count in South America', State: "Brazil", Count: 25 },
                    { Title: 'State wise International Airport count in South America', State: "Colombia", Count: 12 },
                    { Title: 'State wise International Airport count in South America', State: "Argentina", Count: 9 },
                    { Title: 'State wise International Airport count in South America', State: "Ecuador", Count: 7 },
                    { Title: 'State wise International Airport count in South America', State: "Chile", Count: 6 },
                    { Title: 'State wise International Airport count in South America', State: "Peru", Count: 3 },
                    { Title: 'State wise International Airport count in South America', State: "Venezuela", Count: 3 },
                    { Title: 'State wise International Airport count in South America', State: "Bolivia", Count: 2 },
                    { Title: 'State wise International Airport count in South America', State: "Paraguay", Count: 2 },
                    { Title: 'State wise International Airport count in South America', State: "Uruguay", Count: 2 },
                    { Title: 'State wise International Airport count in South America', State: "Falkland Islands",Count: 1 },
                    { Title: 'State wise International Airport count in South America', State: "French Guiana", Count:1 },
                    { Title: 'State wise International Airport count in South America', State: "Guyana", Count: 1 },
                    { Title: 'State wise International Airport count in South America', State: "Suriname", Count: 1 },
                ],
                weightValuePath: 'Count',
                leafItemSettings: {
                    labelPath: 'State',
                }
            });
            treemap.appendTo('#element');
        </script>
    </body>
</html>
```
> Please replace {RELEASE_VERSION} with the latest version number in the script file referred to in the sample.

**Step 3:**  Now, run the index.html in web browser, it will render the Essential<sup style="font-size:70%">&reg;</sup> JS 2 TreeMap Component.

The below example shows a basic TreeMap Component.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/treemap/getting-started-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/treemap/getting-started-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/treemap/getting-started-cs1" %}


## Apply color mapping

Use color mapping to visually represent data values with different colors. The TreeMap automatically assigns colors based on the values in your data source. Specify the field to evaluate using the [`equalColorValuePath`](https://ej2.syncfusion.com/javascript/documentation/api/treemap/index-default#equalcolorvaluepath) property for discrete colors or [`rangeColorValuePath`](https://ej2.syncfusion.com/javascript/documentation/api/treemap/index-default#rangecolorvaluepath) for gradient-based color ranges.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/treemap/getting-started-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/treemap/getting-started-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/treemap/getting-started-cs2" %}

## Enable legend

A legend helps viewers interpret the data represented in the TreeMap. Enable the legend by setting the [`visible`](https://ej2.syncfusion.com/javascript/documentation/api/treemap/legendsettingsmodel#visible) property to `true` in the [`legendSettings`](https://ej2.syncfusion.com/javascript/documentation/api/treemap/legendsettingsmodel)  object to display a visual guide for data categories or color ranges.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/treemap/getting-started-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/treemap/getting-started-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/treemap/getting-started-cs3" %}

## Add labels

Labels display descriptive text directly on TreeMap items, providing immediate context without requiring a legend lookup. Labels are shown by default, but you can customize their visibility and appearance using the [`showLabels`](https://ej2.syncfusion.com/javascript/documentation/api/treemap/leafitemsettingsmodel#showlabels) property in the [`leafItemSettings`](https://ej2.syncfusion.com/javascript/documentation/api/treemap/leafitemsettingsmodel) object.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/treemap/getting-started-cs4/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/treemap/getting-started-cs4/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/treemap/getting-started-cs4" %}

## Enable tooltip

Tooltips provide additional information on demand when users hover over TreeMap items, making them ideal for displaying details that don't fit directly on items. Enable tooltips by setting the [`visible`](https://ej2.syncfusion.com/javascript/documentation/api/treemap/tooltipsettingsmodel#visible) property to `true` in the [`tooltipSettings`](https://ej2.syncfusion.com/javascript/documentation/api/treemap/tooltipsettingsmodel) object.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/treemap/getting-started-cs5/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/treemap/getting-started-cs5/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/treemap/getting-started-cs5" %}
