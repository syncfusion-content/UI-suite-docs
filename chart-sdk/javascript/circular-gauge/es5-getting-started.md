---
layout: post
title: Es5 getting started with JavaScript Circular Gauge Component | Syncfusion
description:  Checkout and learn about Es5 getting started with JavaScript Circular Gauge Component of Syncfusion Essential JS 2 and more details.
platform: chart-sdk
control: Es5 getting started 
publishingplatform: chart-sdk
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---

# Getting Started in JavaScript Circular Gauge Component

The Syncfusion Essential<sup style="font-size:70%">&reg;</sup> JS 2 library provides ES5-compatible JavaScript components that work with global script references in modern web browsers. The Circular Gauge Component can be initialized by including script files either from a local installation or via CDN links.

## Control Initialization

The Essential<sup style="font-size:70%">&reg;</sup> JS 2 JavaScript controls can be initialized by using either of the following ways.

* Using local script references in a HTML page.
* Using CDN link for script reference.

### Using local script references in a HTML page

**Step 1:** Create an app folder `quickstart` for getting started.

**Step 2:** Obtain the global scripts from the [Essential Studio<sup style="font-size:70%">&reg;</sup> JavaScript (Essential JS 2)](https://www.syncfusion.com/downloads/essential-js2) installation directory. The paths follow this structure:

**Syntax:**
> Dependency Script: `**(installed location)**\Syncfusion\Essential Studio\JavaScript - EJ2\{RELEASE_VERSION}\Web (Essential JS 2)\JavaScript\{DEPENDENCY_PACKAGE_NAME}\dist\global\{DEPENDENCY_PACKAGE_NAME}.min.js`
>
> Control Script: `**(installed location)**\Syncfusion\Essential Studio\JavaScript - EJ2\{RELEASE_VERSION}\Web (Essential JS 2)\JavaScript\{PACKAGE_NAME}\dist\global\{PACKAGE_NAME}.min.js`

**Example:**
> Dependency Script: `C:\Program Files (x86)\Syncfusion\Essential Studio\JavaScript - EJ2\20.1.0.58\Web (Essential JS 2)\JavaScript\ej2-base\dist\global\ej2-base.min.js`
>
> Control Script: `C:\Program Files (x86)\Syncfusion\Essential Studio\JavaScript - EJ2\20.1.0.58\Web (Essential JS 2)\JavaScript\ej2-circulargauge\dist\global\ej2-circulargauge.min.js`

Alternatively, a single bundled script file is available that contains all Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript UI control resources:

> Scripts: `**(installed location)**\Syncfusion\Essential Studio\JavaScript - EJ2\{RELEASE_VERSION}\Web (Essential JS 2)\JavaScript\ej2\dist\ej2.min.js`

The [`Custom Resource Generator (CRG)`](https://crg.syncfusion.com/) is an online web tool, which can be used to generate the custom script for a set of specific controls. This web tool is useful to combine the required control scripts in a single file.

**Step 3:** Create a folder `~/quickstart/resources` and copy/paste the global scripts from the above installed location to `~/quickstart/resources/package` corresponding package location.

**Step 4:** Create an HTML page named `index.html` in the `~/quickstart/` folder and add the Circular Gauge script references.

```html
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <title>Essential JS 2</title>
        <!-- Essential JS 2 Base's global script (Dependency Script) -->
        <script src="resources/base/ej2-base.min.js" type="text/javascript"></script>
        <!-- Essential JS 2 CircularGauge's global script (Control Script) -->
        <script src="resources/circulargauge/ej2-circulargauge.min.js" type="text/javascript"></script>
    </head>
    <body>
    </body>
</html>
```

**Step 5:** Now, initiate the **Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript (ES5) Circulargauge** control in the `~/quickstart/index.html` by using following code.

```html
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <title>Essential JS 2</title>
        <!-- Essential JS 2 Base's global script (Dependency Script) -->
        <script src="resources/base/ej2-base.min.js" type="text/javascript"></script>
        <!-- Essential JS 2 CircularGauge's global script (Control Script) -->
        <script src="resources/circulargauge/ej2-circulargauge.min.js" type="text/javascript"></script>
    </head>
    <body>
        <!-- Add the HTML <circulargauge> element  -->
        <div id="element" style="display: block;">Circular Gauge</div>
        <script>
            // initialize circulargauge control
            var circulargauge = new ej.circulargauge.CircularGauge({
                height: '400px'
            });
            // Render initialized circulargauge.
            circulargauge.appendTo('#element');
        </script>
    </body>
</html>
```

**Step 6:** Open `index.html` in a web browser to render the Circular Gauge Component.

### Using CDN link for script reference

**Step 1:** Create an app folder `quickstart` for getting started.

**Step 2:** Access the Circular Gauge scripts from the Syncfusion CDN. The following link formats are available:

**Common Control Script:**
> Syntax: `https://cdn.syncfusion.com/ej2/{RELEASE_VERSION}/dist/ej2.min.js`

**Example:**
> Script: [`https://cdn.syncfusion.com/ej2/32.1.19/dist/ej2.min.js`](https://cdn.syncfusion.com/ej2/32.1.19/dist/ej2.min.js)

**or**

**Individual Control Scripts:**

**Syntax**
>`http://cdn.syncfusion.com/ej2/{RELEASE_VERSION}/{PACKAGE_NAME}/dist/global/{PACKAGE_NAME}.min.js`

**Example:**
> Circular Gauge Script: [`https://cdn.syncfusion.com/ej2/32.1.19/ej2-circulargauge/dist/global/ej2-circulargauge.min.js`](https://cdn.syncfusion.com/ej2/32.1.19/ej2-circulargauge/dist/global/ej2-circulargauge.min.js)
>
>Dependency Scripts
>
> [`https://cdn.syncfusion.com/ej2/32.1.19/ej2-base/dist/global/ej2-base.min.js`](https://cdn.syncfusion.com/ej2/32.1.19/ej2-base/dist/global/ej2-base.min.js)
>
> [`https://cdn.syncfusion.com/ej2/32.1.19/ej2-svg-base/dist/global/ej2-svg-base.min.js`](https://cdn.syncfusion.com/ej2/32.1.19/ej2-svg-base/dist/global/ej2-svg-base.min.js)
>
> [`https://cdn.syncfusion.com/ej2/32.1.19/ej2-pdf-export/dist/global/ej2-pdf-export.min.js`](https://cdn.syncfusion.com/ej2/32.1.19/ej2-pdf-export/dist/global/ej2-pdf-export.min.js)

Create a HTML page (**index.html**) in **~/quickstart** location and add the CDN link references. Now, initiate the **Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript (ES5) Circular Gauge** control in the **index.html** by using following code.

```
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <title>Essential JS 2</title>
        <!-- Essential JS 2 Base's global script (Dependency Script) -->
        <script src="https://cdn.syncfusion.com/ej2/{RELEASE_VERSION}/ej2-base/dist/global/ej2-base.min.js" type="text/javascript"></script>
        <script src="https://cdn.syncfusion.com/ej2/{RELEASE_VERSION}/ej2-svg-base/dist/global/ej2-svg-base.min.js" type="text/javascript"></script>
        <script src="https://cdn.syncfusion.com/ej2/{RELEASE_VERSION}/ej2-pdf-export/dist/global/ej2-pdf-export.min.js" type="text/javascript"></script>
        <script src="https://cdn.syncfusion.com/ej2/{RELEASE_VERSION}/ej2-circulargauge/dist/global/ej2-circulargauge.min.js" type="text/javascript"></script>
    </head>
    <body>
        <!-- Add the HTML <circulargauge> element  -->
        <div id="element" style="display: block;">Circular Gauge</div>
        <script>
            // initialize circulargauge control
            var circulargauge = new ej.circulargauge.CircularGauge({
                height: '400px'
            });
            // Render initialized circulargauge.
            circulargauge.appendTo('#element');
        </script>
    </body>
</html>
```
> Replace `{RELEASE_VERSION}` with the latest Syncfusion release version number. Find available versions on the [CDN releases page](https://www.syncfusion.com/downloads/essential-js2).

**Step 3:** Open `index.html` in a web browser to render the Circular Gauge Component.

The following example shows a complete, working Circular Gauge Component implementation.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/circular-gauge/es5-getting-started-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/circular-gauge/es5-getting-started-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/circular-gauge/es5-getting-started-cs1" %}

## Set Pointer Value

The pointer value displayed on the gauge can be controlled using the [value](../api/circular-gauge/pointer#value-number) property of the [pointers](../api/circular-gauge/pointer) API. The following example demonstrates how to set a custom pointer value.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/circular-gauge/es5-getting-started-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/circular-gauge/es5-getting-started-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/circular-gauge/es5-getting-started-cs2" %}
