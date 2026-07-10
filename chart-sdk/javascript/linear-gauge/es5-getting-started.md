---
layout: post
title: Es5 getting started with JavaScript Linear Gauge | Syncfusion
description:  Checkout and learn about Es5 getting started with JavaScript Linear Gauge Component of Syncfusion Essential JS 2 and more details.
platform: chart-sdk
control: Es5 getting started 
publishingplatform: chart-sdk
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---

# Getting started with JavaScript Linear Gauge Component

This section walks you through the steps to create a simple Linear Gauge and demonstrates the basic usage of the Linear Gauge component. By the end of this guide, you will have a functioning Linear Gauge with custom axes, pointers, and labels.

## Control Initialization

The Essential<sup style="font-size:70%">&reg;</sup> JS 2 JavaScript controls can be initialized by using either of the following approaches:

* Using local script references in an HTML page.
* Using a CDN link for script reference.

### Using local script references in an HTML page

**Step 1:** Create an app folder named **quickstart** for your project.

**Step 2:** Obtain the global scripts from the [Essential Studio<sup style="font-size:70%">&reg;</sup> JavaScript (Essential<sup style="font-size:70%">&reg;</sup> JS 2)](https://www.syncfusion.com/downloads/essential-js2) build installed location.

**Syntax:**
> Dependency Script: `**(installed location)**\Syncfusion\Essential Studio\JavaScript - EJ2\{RELEASE_VERSION}\Web (Essential JS 2)\JavaScript\{DEPENDENCY_PACKAGE_NAME}\dist\global\{DEPENDENCY_PACKAGE_NAME}.min.js`
>
> Control Script: `**(installed location)**\Syncfusion\Essential Studio\JavaScript - EJ2\{RELEASE_VERSION}\Web (Essential JS 2)\JavaScript\{PACKAGE_NAME}\dist\global\{PACKAGE_NAME}.min.js`

**Example:**
> Dependency Script: `C:\Program Files (x86)\Syncfusion\Essential Studio\JavaScript - EJ2\32.1.19\Web (Essential JS 2)\JavaScript\ej2-base\dist\global\ej2-base.min.js`
>
> Control Script: `C:\Program Files (x86)\Syncfusion\Essential Studio\JavaScript - EJ2\32.1.19\Web (Essential JS 2)\JavaScript\ej2-lineargauge\dist\global\ej2-lineargauge.min.js`

Alternatively, you can reference the comprehensive script file that contains all Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript (ES5) UI control resources in a single file:

> Scripts: `**(installed location)**\Syncfusion\Essential Studio\JavaScript - EJ2\{RELEASE_VERSION}\Web (Essential JS 2)\JavaScript\ej2\dist\ej2.min.js`

For optimized bundles containing only your required controls, use the [`Custom Resource Generator (CRG)`](https://crg.syncfusion.com/), an online web tool that generates custom scripts for specific Syncfusion controls.

**Step 3:** Create a folder **~/quickstart/resources** and copy the global scripts from the installed location into **~/quickstart/resources/package** directories that match their corresponding package names.

**Step 4:** Create an HTML page (**index.html**) in **~/quickstart/index.html** and add the Essential<sup style="font-size:70%">&reg;</sup> JS 2 script references.

```html
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <title>Essential JS 2</title>

        <!-- Essential JS 2 Base's global script (Dependency Script) -->
        <script src="resources/base/ej2-base.min.js" type="text/javascript"></script>
        <!-- Essential JS 2 lineargauge's global script (Control Script) -->
        <script src="resources/lineargauge/ej2-lineargauge.min.js" type="text/javascript"></script>
    </head>
    <body>
    </body>
</html>
```

**Step 5:** Initialize the **Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript (ES5) LinearGauge** component in the **~/quickstart/index.html** file using the following code.

```html
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <title>Essential JS 2</title>

        <!-- Essential JS 2 Base's global script (Dependency Script) -->
        <script src="resources/base/ej2-base.min.js" type="text/javascript"></script>
        <!-- Essential JS 2 lineargauge's global script (Control Script) -->
        <script src="resources/lineargauge/ej2-lineargauge.min.js" type="text/javascript"></script>
    </head>
    <body>
        <!-- Add the HTML <lineargauge> element  -->
        <div id="element" style="display: block;">Linear Gauge</div>
        <script>
            // initialize lineargauge control
            var lineargauge = new ej.lineargauge.LinearGauge({ height: '400px' });
            // Render initialized lineargauge.
            lineargauge.appendTo('#element');
        </script>
    </body>
</html>
```

**Step 6:** Run the **index.html** file in a web browser. The page will render the **Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript Linear Gauge** control.

### Using CDN link for script reference

**Step 1:** Create an app folder named **quickstart** for your project.

**Step 2:** The Essential<sup style="font-size:70%">&reg;</sup> JS 2 controls' global scripts are already hosted in the CDN. You can reference them using either a common bundled script or individual control scripts.

**Common Control Script:**
> Syntax: `https://cdn.syncfusion.com/ej2/{RELEASE_VERSION}/dist/ej2.min.js`

**Example:**
> Script: [`https://cdn.syncfusion.com/ej2/32.1.19/dist/ej2.min.js`](https://cdn.syncfusion.com/ej2/32.1.19/dist/ej2.min.js)

**or**

**Individual Control Scripts:**

**Syntax**
>`http://cdn.syncfusion.com/ej2/{RELEASE_VERSION}/{PACKAGE_NAME}/dist/global/{PACKAGE_NAME}.min.js`

**Example:**
> Linear Gauge Script: [`https://cdn.syncfusion.com/ej2/32.1.19/ej2-lineargauge/dist/global/ej2-lineargauge.min.js`](https://cdn.syncfusion.com/ej2/32.1.19/ej2-lineargauge/dist/global/ej2-lineargauge.min.js)
>
>Dependency Scripts
>
> [`https://cdn.syncfusion.com/ej2/32.1.19/ej2-base/dist/global/ej2-base.min.js`](https://cdn.syncfusion.com/ej2/32.1.19/ej2-base/dist/global/ej2-base.min.js)
>
> [`https://cdn.syncfusion.com/ej2/32.1.19/ej2-svg-base/dist/global/ej2-svg-base.min.js`](https://cdn.syncfusion.com/ej2/32.1.19/ej2-svg-base/dist/global/ej2-svg-base.min.js)
>
> [`https://cdn.syncfusion.com/ej2/32.1.19/ej2-pdf-export/dist/global/ej2-pdf-export.min.js`](https://cdn.syncfusion.com/ej2/32.1.19/ej2-pdf-export/dist/global/ej2-pdf-export.min.js)

Create an HTML page (**index.html**) in the **~/quickstart** location and add the CDN link references. Then, initialize the **Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript (ES5) Linear Gauge** control in the **index.html** file using the following code.

```html
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <title>Essential JS 2</title>
        <script src="https://cdn.syncfusion.com/ej2/{Release_Version}/ej2-base/dist/global/ej2-base.min.js" type="text/javascript"></script>
        <script src="https://cdn.syncfusion.com/ej2/{Release_Version}/ej2-svg-base/dist/global/ej2-svg-base.min.js" type="text/javascript"></script>
        <script src="https://cdn.syncfusion.com/ej2/{Release_Version}/ej2-pdf-export/dist/global/ej2-pdf-export.min.js" type="text/javascript"></script>
        <script src="https://cdn.syncfusion.com/ej2/{Release_Version}/ej2-lineargauge/dist/global/ej2-lineargauge.min.js" type="text/javascript"></script>
    </head>
    <body>
        <!-- Add the HTML <lineargauge> element  -->
        <div id="element" style="display: block;">Linear Gauge</div>
        <script>
            // initialize lineargauge control
            var lineargauge = new ej.lineargauge.LinearGauge({ height: '400px' });
            // Render initialized lineargauge.
            lineargauge.appendTo('#element');
        </script>
    </body>
</html>
```

> Replace {RELEASE_VERSION} with the latest version number in the script file references.

**Step 3:** Open the **index.html** file in a web browser. The page will render the **Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript Linear Gauge** control.

The following example demonstrates a basic Linear Gauge Component.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/linear-gauge/es5-getting-started-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/linear-gauge/es5-getting-started-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/linear-gauge/es5-getting-started-cs1" %}

## Adding the Linear Gauge Title

Add a title to the Linear Gauge component using the [`title`](../api/linear-gauge/linearGaugeModel#title) property.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/linear-gauge/es5-getting-started-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/linear-gauge/es5-getting-started-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/linear-gauge/es5-getting-started-cs2" %}

## Setting the start and end of the axis line

Define the range of the axis using the [`minimum`](../api/linear-gauge/axis#minimum) and [`maximum`](../api/linear-gauge/axis#maximum) properties.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/linear-gauge/es5-getting-started-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/linear-gauge/es5-getting-started-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/linear-gauge/es5-getting-started-cs3" %}

To add units like °C to axis labels, set the [`format`](../api/linear-gauge/labelModel#format) property in the [`labelStyle`](../api/linear-gauge/axis#labelstyle) object of the axis to **{value}°C**. The **{value}** placeholder is replaced with each axis label. To customize the pointer position, set the [`value`](../api/linear-gauge/pointer#value) property in the [`pointers`](../api/linear-gauge/pointerModel) array of the axis.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/linear-gauge/es5-getting-started-cs4/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/linear-gauge/es5-getting-started-cs4/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/linear-gauge/es5-getting-started-cs4" %}

## Setting the value of the pointer

Modify the pointer value using the [`value`](../api/linear-gauge/pointer#value) property in the [`pointers`](../api/linear-gauge/pointer) array of the axis.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/linear-gauge/es5-getting-started-cs5/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/linear-gauge/es5-getting-started-cs5/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/linear-gauge/es5-getting-started-cs5" %}
