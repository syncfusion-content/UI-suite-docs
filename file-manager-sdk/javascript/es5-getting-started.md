---
layout: post
title: Getting started with JavaScript File Manager control | Syncfusion
description: Learn how to get started with the ES5 JavaScript File Manager component using Syncfusion Essential JS 2.
platform: file-manager-sdk
control: File Manager
publishingplatform: file-manager-sdk
documentation: ug
domainurl: https://help.syncfusion.com/file-manager-sdk
---

# Getting started in JavaScript File Manager control

This section explains the steps required to create a simple Essential<sup style="font-size:70%">&reg;</sup> JS 2 File Manager and demonstrate the basic usage of the File Manager control in a JavaScript application.

## Dependencies

A list of dependencies to use the file manager with all features.

```javascript
|-- @syncfusion/ej2-filemanager
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-layouts
    |-- @syncfusion/ej2-popups
    |-- @syncfusion/ej2-data
    |-- @syncfusion/ej2-inputs
    |-- @syncfusion/ej2-lists
    |-- @syncfusion/ej2-buttons
    |-- @syncfusion/ej2-splitbuttons
    |-- @syncfusion/ej2-navigations
    |-- @syncfusion/ej2-grids
```

## Setup for local environment

Refer to the following steps to set up your local environment.

**Step 1:** Create a root folder named **my-app** for your application.

**Step 2:** Create a **my-app/resources** folder to store local scripts and styles files.

**Step 3:** Open Visual Studio Code and create **my-app/index.js** and **my-app/index.html** files to initialize the Essential<sup style="font-size:70%">&reg;</sup> JS 2 File Manager control.

## Adding Syncfusion<sup style="font-size:70%">&reg;</sup> resources

The Essential<sup style="font-size:70%">&reg;</sup> JS 2 File Manager control can be initialized by using either of the following ways.

* Using local script and style.
* Using CDN link for script and style.

### Using local script and style

To use local scripts and styles for File Manager, you can follow these steps:

**1. Download Essential<sup style="font-size:70%">&reg;</sup> Studio<sup style="font-size:70%">&reg;</sup> JavaScript (Essential<sup style="font-size:70%">&reg;</sup> JS 2):** Obtain the global scripts and styles from the [Essential Studio<sup style="font-size:70%">&reg;</sup> JavaScript (Essential<sup style="font-size:70%">&reg;</sup> JS 2)](https://www.syncfusion.com/downloads/essential-js2) build installation location.

**2. Copy Files to Resources Folder:** After installing the Essential<sup style="font-size:70%">&reg;</sup> JS 2 product build, copy the file manager's scripts, and dependencies scripts and style file into the designated folders:

**Scripts:** Copy the scripts to the **resources/scripts** folder.
**Styles:** Copy the styles to the **resources/styles** folder.

**3. Locate Script and Style Files:** Identify the location of the file manager's script and style files. The syntax for the file paths are as follows:

**Syntax:**
>Script: `**(installed location)**/Syncfusion/Essential Studio/{RELEASE_VERSION}/Essential JS 2/{PACKAGE_NAME}/dist/global/{PACKAGE_NAME}.min.js`
>Styles: `**(installed location)**/Syncfusion/Essential Studio/{RELEASE_VERSION}/Essential JS 2/{PACKAGE_NAME}/styles/bootstrap5.3.css`

**Example:**
>Script: `C:/Program Files (x86)/Syncfusion/Essential Studio/25.1.35/Essential JS 2/ej2-filemanager/dist/global/ej2-filemanager.min.js`
>Styles: `C:/Program Files (x86)/Syncfusion/Essential Studio/25.1.35/Essential JS 2/ej2-filemanager/styles/bootstrap5.3.css`

**4. Referencing in HTML File:** Once the files are copied, reference the file manager's scripts and styles into the **index.html** file.

Here's an example of referencing the file manager's scripts and styles in an HTML file:

**a.Essential<sup style="font-size:70%">&reg;</sup> Dependency (Minimal Setup)**

This setup includes only the necessary scripts and styles required to render the File Manager. Use this setup for a lightweight application that requires basic file manager functionality.

```html

<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
    <title>Essential JS 2 File Manager</title>

    <!-- Essential JS 2 File Manager's dependent bootstrap5.3 theme -->
    <link href="resources/base/styles/bootstrap5.3.css" rel="stylesheet" type="text/css" />
    <link href="resources/popups/styles/bootstrap5.3.css" rel="stylesheet" type="text/css" />
    <link href="resources/filemanager/styles/bootstrap5.3.css" rel="stylesheet" type="text/css" />
    <!-- Essential JS 2 File Manager's dependent scripts -->
    <script src="resources/scripts/ej2-base.min.js" type="text/javascript"></script>
    <script src="resources/scripts/ej2-data.min.js" type="text/javascript"></script>
    <script src="resources/scripts/ej2-popups.min.js" type="text/javascript"></script>

    <!-- Essential JS 2 File Manager's global script -->
    <script src="resources/scripts/ej2-filemanager.min.js" type="text/javascript"></script>
</head>

<body>
</body>

</html>

```

**b.Extended Dependency (Additional Controls)**
This setup includes additional dependencies required for more advanced functionalities of the file manager, such as buttons, dropdowns, navigations, and other controls. Use this setup when you need to integrate additional features like filtering, sorting, context menu and more.

```html
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
    <title>Essential JS 2 File Manager</title>

    <!-- Essential JS 2 File Manager's dependent bootstrap5.3 theme -->
    <link href="resources/base/styles/bootstrap5.3.css" rel="stylesheet" type="text/css" />
    <link href="resources/popups/styles/bootstrap5.3.css" rel="stylesheet" type="text/css" />
    <link href="resources/filemanager/styles/bootstrap5.3.css" rel="stylesheet" type="text/css" />
    <link href="resources/buttons/styles/bootstrap5.3.css" rel="stylesheet" type="text/css" />
    <link href="resources/navigations/styles/bootstrap5.3.css" rel="stylesheet" type="text/css" />
    <link href="resources/dropdowns/styles/bootstrap5.3.css" rel="stylesheet" type="text/css" />
    <link href="resources/lists/styles/bootstrap5.3.css" rel="stylesheet" type="text/css" />
    <link href="resources/inputs/styles/bootstrap5.3.css" rel="stylesheet" type="text/css" />
    <link href="resources/splitbuttons/styles/bootstrap5.3.css" rel="stylesheet" type="text/css" />
    <link href="resources/layouts/styles/bootstrap5.3.css" rel="stylesheet" type="text/css" />
    <link href="resources/grids/styles/bootstrap5.3.css" rel="stylesheet" type="text/css" />

    <!-- Essential JS 2 File Manager's dependent scripts -->
    <script src="resources/scripts/ej2-base.min.js" type="text/javascript"></script>
    <script src="resources/scripts/ej2-data.min.js" type="text/javascript"></script>
    <script src="resources/scripts/ej2-popups.min.js" type="text/javascript"></script>

    <!-- Essential JS 2 File Manager's global script -->
    <script src="resources/scripts/ej2-filemanager.min.js" type="text/javascript"></script>

    <!-- Include Essential JS 2 other control's script based on features used -->
    <script src="resources/scripts/ej2-buttons.min.js" type="text/javascript"></script>
    <script src="resources/scripts/ej2-navigations.min.js" type="text/javascript"></script>
    <script src="resources/scripts/ej2-dropdowns.min.js" type="text/javascript"></script>
    <script src="resources/scripts/ej2-lists.min.js" type="text/javascript"></script>
    <script src="resources/scripts/ej2-inputs.min.js" type="text/javascript"></script>
    <script src="resources/scripts/ej2-splitbuttons.min.js" type="text/javascript"></script>
    <script src="resources/scripts/ej2-layouts.min.js" type="text/javascript"></script>
    <script src="resources/scripts/ej2-grids.min.js" type="text/javascript"></script>

</head>

<body>
</body>

</html>
```

**c. Comprehensive Dependency (All Controls)**
This setup includes all possible dependencies for Syncfusion<sup style="font-size:70%">&reg;</sup> controls in a single comprehensive file, ensuring maximum compatibility and functionality. Use this setup for a complex application that utilizes a wide range of Syncfusion<sup style="font-size:70%">&reg;</sup> controls.

```html
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
    <title>Essential JS 2 File Manager</title>

    <!-- Essential JS 2 bootstrap5.3 theme -->
    <link href="resources/styles/bootstrap5.3.css" rel="stylesheet" type="text/css" />
    <!-- Essential JS 2 script -->
    <script src="resources/scripts/ej2.min.js" type="text/javascript"></script>
</head>

<body>
</body>
</html>
```

### Using CDN link for script and style

Using CDN links, you can directly refer the file manager control's script and style into the `index.html`.

Refer the file manager's CDN links as below

**Syntax:**

> Script: `http://cdn.syncfusion.com/ej2/{PACKAGE_NAME}/dist/global/{PACKAGE_NAME}.min.js`
> Styles: `http://cdn.syncfusion.com/ej2/{PACKAGE_NAME}/styles/bootstrap5.3.css`

**Example:**

> Script: [https://cdn.syncfusion.com/ej2/ej2-filemanager/dist/global/ej2-filemanager.min.js](http://cdn.syncfusion.com/ej2/ej2-filemanager/dist/global/ej2-filemanager.min.js)
>
> Styles: [https://cdn.syncfusion.com/ej2/ej2-filemanager/styles/bootstrap5.3.css](http://cdn.syncfusion.com/ej2/ej2-filemanager/styles/bootstrap5.3.css)

Here's an example of referencing the file manager's scripts and styles in an HTML file using CDN links:

**a.Essential<sup style="font-size:70%">&reg;</sup> Dependency (Minimal Setup)**

This setup includes only the necessary scripts and styles required to render the File Manager. Use this setup for a lightweight application that requires basic file manager functionality.

```html
<!DOCTYPE html>
  <html xmlns="http://www.w3.org/1999/xhtml">
       <head>
          <title>Essential JS 2 File Manager</title>
          
          <!-- Essential JS 2 File Manager's dependent bootstrap5.3 theme -->
          <link href="http://cdn.syncfusion.com/ej2/ej2-base/styles/bootstrap5.3.css" rel="stylesheet" type="text/css"/>
          <link href="http://cdn.syncfusion.com/ej2/ej2-popups/styles/bootstrap5.3.css" rel="stylesheet" type="text/css"/>
          <link href="https://cdn.syncfusion.com/ej2/ej2-filemanager/styles/bootstrap5.3.css" rel="stylesheet" type="text/css"/>

          <!-- Essential JS 2 File Manager's dependent script -->
          <script src="http://cdn.syncfusion.com/ej2/ej2-base/dist/global/ej2-base.min.js" type="text/javascript"></script>
          <script src="http://cdn.syncfusion.com/ej2/ej2-data/dist/global/ej2-data.min.js" type="text/javascript"></script>
          <script src="http://cdn.syncfusion.com/ej2/ej2-popups/dist/global/ej2-popups.min.js" type="text/javascript"></script>

          <!-- Essential JS 2 File Manager's global script -->
          <script src="https://cdn.syncfusion.com/ej2/ej2-filemanager/dist/global/ej2-filemanager.min.js" type="text/javascript"></script>
       </head>
       <body>
       </body>
  </html>
```

**b.Extended Dependency (Additional Controls)**

This setup includes additional dependencies required for more advanced functionalities of the file manager, such as buttons, dropdowns, navigations and other controls. Use this setup when you need to integrate additional features like filtering, sorting, context menu and more.

```html
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
    <title>Essential JS 2 File Manager</title>
    <!-- Essential JS 2 File Manager's dependent bootstrap5.3 theme -->
    <link href="http://cdn.syncfusion.com/ej2/ej2-base/styles/bootstrap5.3.css" rel="stylesheet" type="text/css" />
    <link href="http://cdn.syncfusion.com/ej2/ej2-popups/styles/bootstrap5.3.css" rel="stylesheet" type="text/css" />
    <link href="http://cdn.syncfusion.com/ej2/ej2-filemanager/styles/bootstrap5.3.css" rel="stylesheet" type="text/css" />
    <link href="https://cdn.syncfusion.com/ej2/ej2-buttons/styles/bootstrap5.3.css" rel="stylesheet" type="text/css" />
    <link href="https://cdn.syncfusion.com/ej2/ej2-navigations/styles/bootstrap5.3.css" rel="stylesheet" type="text/css" />
    <link href="https://cdn.syncfusion.com/ej2/ej2-dropdowns/styles/bootstrap5.3.css" rel="stylesheet" type="text/css" />
    <link href="https://cdn.syncfusion.com/ej2/ej2-lists/styles/bootstrap5.3.css" rel="stylesheet" type="text/css" />
    <link href="https://cdn.syncfusion.com/ej2/ej2-inputs/styles/bootstrap5.3.css" rel="stylesheet" type="text/css" />
    <link href="https://cdn.syncfusion.com/ej2/ej2-splitbuttons/styles/bootstrap5.3.css" rel="stylesheet" type="text/css" />
    <link href="https://cdn.syncfusion.com/ej2/ej2-layouts/styles/bootstrap5.3.css" rel="stylesheet" type="text/css" />
    <link href="https://cdn.syncfusion.com/ej2/ej2-grids/styles/bootstrap5.3.css" rel="stylesheet" type="text/css" />

    <!-- Essential JS 2 File Manager's dependent scripts -->
    <script src="https://cdn.syncfusion.com/ej2/ej2-base/dist/global/ej2-base.min.js" type="text/javascript"></script>
    <script src="https://cdn.syncfusion.com/ej2/ej2-data/dist/global/ej2-data.min.js" type="text/javascript"></script>
    <script src="https://cdn.syncfusion.com/ej2/ej2-popups/dist/global/ej2-popups.min.js"
        type="text/javascript"></script>

    <!-- Essential JS 2 File Manager's global script -->
    <script src="https://cdn.syncfusion.com/ej2/ej2-filemanager/dist/global/ej2-filemanager.min.js" type="text/javascript"></script>

    <!-- Include Essential JS 2 other control's script based on features used -->
    <script src="https://cdn.syncfusion.com/ej2/ej2-buttons/dist/global/ej2-buttons.min.js"
        type="text/javascript"></script>
    <script src="https://cdn.syncfusion.com/ej2/ej2-navigations/dist/global/ej2-navigations.min.js"
        type="text/javascript"></script>
    <script src="https://cdn.syncfusion.com/ej2/ej2-dropdowns/dist/global/ej2-dropdowns.min.js"
        type="text/javascript"></script>
    <script src="https://cdn.syncfusion.com/ej2/ej2-lists/dist/global/ej2-lists.min.js" type="text/javascript"></script>
    <script src="https://cdn.syncfusion.com/ej2/ej2-inputs/dist/global/ej2-inputs.min.js"
        type="text/javascript"></script>
    <script src="https://cdn.syncfusion.com/ej2/ej2-splitbuttons/dist/global/ej2-splitbuttons.min.js"
        type="text/javascript"></script>
    <script src="https://cdn.syncfusion.com/ej2/ej2-layouts/dist/global/ej2-layouts.min.js"
        type="text/javascript"></script>
    <script src="https://cdn.syncfusion.com/ej2/ej2-grids/dist/global/ej2-grids.min.js"
        type="text/javascript"></script>

</head>

<body>
</body>

</html>

```

**c. Comprehensive Dependency (All Controls)**

This setup includes all possible dependencies for Syncfusion<sup style="font-size:70%">&reg;</sup> controls in a single comprehensive file, ensuring maximum compatibility and functionality. Use this setup for a complex application that utilizes a wide range of Syncfusion<sup style="font-size:70%">&reg;</sup> controls.

```html
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
    <title>Essential JS 2 File Manager</title>

    <!-- Essential JS 2 bootstrap5.3 theme -->
    <link href="https://cdn.syncfusion.com/ej2/bootstrap5.3.css" rel="stylesheet" type="text/css" />
    <!-- Essential JS 2 all script -->
    <script src="https://cdn.syncfusion.com/ej2/dist/ej2.min.js" type="text/javascript"></script>

</head>

<body>
</body>

</html>
```

Based on your requirement, additional dependencies can be included as needed. In this documentation, the common **ej2.min.js** and **bootstrap5.3.css** are used, which include all the Essential<sup style="font-size:70%">&reg;</sup> JS 2 controls and their dependent scripts and theme files.

## Adding File Manager control

You can start adding Essential<sup style="font-size:70%">&reg;</sup> JS 2 file manager control to the application. To get started, add the file manager control in **index.js** file using the following code.

{% tabs %}
{% highlight js tabtitle="index.js" %}
var hostUrl = 'https://ej2-aspcore-service.azurewebsites.net/';
var filemanagerInstance = new ej.filemanager.FileManager({
    ajaxSettings: {
        url: hostUrl + 'api/FileManager/FileOperations'
    }
});
filemanagerInstance.appendTo('#filemanager');
{% endhighlight %}

{% highlight html tabtitle="index.html" %}
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
    <title>Essential JS 2 File Manager</title>

    <!-- Essential JS 2 bootstrap5.3 theme -->
    <link href="https://cdn.syncfusion.com/ej2/33.1.44/bootstrap5.3.css" rel="stylesheet" type="text/css" />
    <!-- Essential JS 2 all script -->
    <script src="https://cdn.syncfusion.com/ej2/33.1.44/dist/ej2.min.js" type="text/javascript"></script>

</head>

<body>
    <!-- Add the HTML <div> element for File Manager  -->
    <div id="filemanager"></div>
    <script src="index.js" type="text/javascript"></script>
</body>

</html>
{% endhighlight %}

{% endtabs %}

>Note: The [`ajaxSettings`](../api/file-manager#ajaxsettings) must be defined when initializing the File Manager. The File Manager uses the URLs specified in `ajaxSettings` to send file operation requests to the server. The File Manager service link is provided in `hostUrl`.

## Run the application

Now, run the **index.html** in web browser, it will render the Essential<sup style="font-size:70%">&reg;</sup> JS 2 File Manager control.

Output will be displayed as follows.

{% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/file-manager-sdk/javascript/javascript/es5-getting-started-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/file-manager-sdk/javascript/help.syncfusion.com/code-snippet/file-manager-sdk/javascript/es5-getting-started-cs1" %}


## See also

* [Ajax Settings Configuration (uploadUrl, downloadUrl, getImageUrl)](../file-operations.md#ajax-settings-configuration)
* [Injecting Services for Overview](../user-interface#injecting-services-for-overview)
* [File Manager Views](../views)
* [File Manager File Operations](../file-operations)
* [File Manager Upload](../upload)
* [File Manager Customization](../customization)