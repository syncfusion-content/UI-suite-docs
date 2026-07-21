---
layout: post
title: Getting Started with ASP.NET MVC Diagram Control | Syncfusion®
description: Checkout and learn about getting started with ASP.NET MVC Diagram control of Syncfusion Essential® JS 2 and more details.
platform: diagram-sdk
control: Getting Started
publishingplatform: diagram-sdk
documentation: ug
---

# Getting Started with ASP.NET MVC Diagram Control

This section explains the steps required to create a simple diagram and demonstrates the basic usage of the ASP.NET MVC Diagram control.

> **Ready to streamline your Syncfusion<sup style="font-size:70%">&reg;</sup> ASP.NET MVC development?** Discover the full potential of Syncfusion<sup style="font-size:70%">&reg;</sup> ASP.NET MVC controls with Syncfusion<sup style="font-size:70%">&reg;</sup> AI Coding Assistant. Effortlessly integrate, configure, and enhance your projects with intelligent, context-aware code suggestions, streamlined setups, and real-time insights—all seamlessly integrated into your preferred AI-powered IDEs like Visual Studio, Visual Studio Code, Cursor, Syncfusion<sup style="font-size:70%">&reg;</sup> CodeStudio, and more. [Explore Syncfusion<sup style="font-size:70%">&reg;</sup> AI Coding Assistant](https://ej2.syncfusion.com/aspnetmvc/documentation/ai-coding-assistant/overview).

## Prerequisites

This guide targets **ASP.NET MVC5 on the .NET Framework** (not ASP.NET Core MVC). Before getting started, ensure that your development environment meets the [system requirements for Syncfusion<sup style="font-size:70%">&reg;</sup> ASP.NET MVC controls](https://ej2.syncfusion.com/aspnetmvc/documentation/system-requirements).

* **Visual Studio 2019 or later** with the **.NET desktop development** and **ASP.NET and web development** workloads.
* **.NET Framework 4.6.2 or later**.
* For command-line builds, install **MSBuild** (included with Visual Studio) and use **IIS Express** for local hosting.
* Installer scripts requiring elevation (Visual Studio or .NET Framework setup) require **administrator privileges**.

## Before You Begin

This guide uses the ASP.NET MVC5 application structure with HTML helpers, targeting **System.Web.Mvc 5.2 or later** for .NET Framework 4.6.2+.

The main files used in this guide are:

- `~/Views/Web.config` — Registers the Syncfusion<sup style="font-size:70%">&reg;</sup> namespace for HTML helpers.
- `~/Views/Shared/_Layout.cshtml` — Contains shared layout, style, and script references.
- `~/Views/Home/Index.cshtml` — Hosts the Diagram control.
- `~/Controllers/HomeController.cs` — Defines the nodes and connectors data passed to the view.

## Step 1: Create an ASP.NET MVC5 application

Create a new **ASP.NET MVC5 (.NET Framework)** application (not ASP.NET Core MVC) using one of the following options:

* [Create a Project using Microsoft Templates](https://learn.microsoft.com/en-us/aspnet/mvc/overview/getting-started/introduction/getting-started#create-your-first-app)

* [Create a Project using Syncfusion<sup style="font-size:70%">&reg;</sup> ASP.NET MVC Extension](https://ej2.syncfusion.com/aspnetmvc/documentation/visual-studio-integration/create-project)

> The Visual Studio template "ASP.NET Web Application (.NET Framework) → MVC" provides the project structure used in this guide.

## Step 2: Install the Syncfusion® ASP.NET MVC Diagram package

All Syncfusion<sup style="font-size:70%">&reg;</sup> ASP.NET MVC packages are available on [nuget.org](https://www.nuget.org/packages?q=syncfusion.EJ2).

To add ASP.NET MVC controls to the application, open the NuGet package manager in Visual Studio (Tools → NuGet Package Manager → Manage NuGet Packages for Solution), search for [Syncfusion.EJ2.MVC5](https://www.nuget.org/packages/Syncfusion.EJ2.MVC5) and then install it.

Install the package using the Package Manager Console:

```powershell
Install-Package Syncfusion.EJ2.MVC5 -Version {{ site.ej2version }}
```

> Replace `{{ site.ej2version }}` with the Syncfusion Essential JS 2 release version you are targeting (for example, `28.1.33`). Refer to the [Syncfusion NuGet packages list](https://www.nuget.org/packages/Syncfusion.EJ2.MVC5) for available versions and the [NuGet packages topic](https://ej2.syncfusion.com/aspnetmvc/documentation/nuget-packages) for installing in other OS environments.

N> The `Syncfusion.EJ2.MVC5` package has dependencies, [Newtonsoft.Json](https://www.nuget.org/packages/Newtonsoft.Json/) for JSON serialization and [Syncfusion.Licensing](https://www.nuget.org/packages/Syncfusion.Licensing/) for validating Syncfusion<sup style="font-size:70%">&reg;</sup> license key.

## Step 3: Register the Syncfusion® license key

Register the Syncfusion license key in `Global.asax` `Application_Start()` so the controls render without a license warning. Obtain a key from the [Syncfusion licensing portal](https://www.syncfusion.com/my-community/license).

```csharp
using Syncfusion.Licensing;

protected void Application_Start()
{
    // ... existing startup code ...
    SyncfusionLicenseProvider.RegisterLicense("YOUR_LICENSE_KEY");
}
```

> Replace `YOUR_LICENSE_KEY` with your license key. This step uses the `Syncfusion.Licensing` dependency installed in Step 2.

## Step 4: Register the Syncfusion® namespace

Add the **Syncfusion.EJ2** namespace reference in **~/Views/Web.config** under the `<namespaces>` section.

```xml
<namespaces>
    <add namespace="Syncfusion.EJ2"/>
</namespaces>
```

> To use the strongly-typed diagram types (for example, `DiagramNode`) directly inside `.cshtml` views, add `Syncfusion.EJ2.Diagrams` to the `<namespaces>` section as well. The diagrams namespace is already available in `HomeController.cs` via the `using Syncfusion.EJ2.Diagrams;` directive.

This makes the `@Html.EJS()` HTML helpers available in all views.

## Step 5: Add the required style and script references

Add the Syncfusion<sup style="font-size:70%">&reg;</sup> theme and script references inside the `<head>` of the **~/Views/Shared/_Layout.cshtml** file along with the existing content.

```html
<head>
    ...
    <!-- Syncfusion® ASP.NET MVC controls styles -->
    <link rel="stylesheet" href="https://cdn.syncfusion.com/ej2/{{ site.ej2version }}/tailwind3.css" />
    <!-- Syncfusion® ASP.NET MVC controls scripts -->
    <script src="https://cdn.syncfusion.com/ej2/{{ site.ej2version }}/dist/ej2.min.js"></script>
</head>
```

> Replace `{{ site.ej2version }}` with the Syncfusion Essential JS 2 release version you are targeting (for example, `28.1.33`); it must match the `Syncfusion.EJ2.MVC5` package version installed in Step 2.

> The `ej2.min.js` all-in-one CDN bundle includes the Diagram control scripts. If you use a [Custom Resource Generator (CRG)](https://ej2.syncfusion.com/aspnetmvc/documentation/common/custom-resource-generator) or a selective script approach instead, ensure the Diagram-specific script is included separately.

N> Syncfusion<sup style="font-size:70%">&reg;</sup> provides multiple built-in themes. To use a different theme, replace **tailwind3.css** with the corresponding theme file, such as **material3.css** or **fluent.css**. See the [Themes topic](https://ej2.syncfusion.com/aspnetmvc/documentation/appearance/theme) to learn different ways (CDN, NPM package, and [CRG](https://ej2.syncfusion.com/aspnetmvc/documentation/common/custom-resource-generator)) to reference styles in an ASP.NET MVC application.

N> Refer to the [Adding Script Reference](https://ej2.syncfusion.com/aspnetmvc/documentation/common/adding-script-references) topic to learn different approaches for adding script references in your ASP.NET MVC application.

## Step 6: Register the Syncfusion® Script Manager

Add `@Html.EJS().ScriptManager()` at the end of the `<body>` element in **~/Views/Shared/_Layout.cshtml**. The script manager renders the scripts required for Syncfusion<sup style="font-size:70%">&reg;</sup> controls to function correctly.

```html
<body>
    ...
    <!-- Syncfusion® ASP.NET MVC Script Manager -->
    @Html.EJS().ScriptManager()
</body>
```

## Step 7: Add the Diagram control

Add the Syncfusion<sup style="font-size:70%">&reg;</sup> ASP.NET MVC Diagram control in the **~/Views/Home/Index.cshtml** file using the `@Html.EJS().Diagram()` HTML helper.

```cshtml
@Html.EJS().Diagram("diagram").Width("100%").Height("580px").Render()
```

This renders an empty diagram in the application.

N> The Diagram control must have a valid height. If the height is not set, the Diagram canvas may not be visible. The parent container that holds the diagram must also have defined dimensions (for example, `width: 100%; height: 580px;`), otherwise the diagram may not render at the expected size.

N> Step 8 builds on this baseline by binding nodes and connectors; its code fully replaces the contents of `Index.cshtml` shown here.

## Step 8: Create your first diagram with nodes and connectors

This section explains how to create a simple flowchart by adding nodes, customizing their appearance, and connecting them using connectors.

The following example creates a flowchart with four nodes: **Start**, **Process**, **Decision**, and **End**. Nodes and connectors are defined in **HomeController.cs** and passed to the view through `ViewBag`. The view then binds them to the `@Html.EJS().Diagram()` HTML helper.

### Define nodes and connectors

Open **~/Controllers/HomeController.cs** and populate the nodes and connectors in the `Index` action method, then pass them to the view using `ViewBag`.

> Build the project after installing `Syncfusion.EJ2.MVC5` so the `Syncfusion.EJ2.Diagrams` namespace resolves in the editor before adding this code.

```csharp
using System.Web.Mvc;
using Syncfusion.EJ2.Diagrams;
using System.Collections.Generic;

public class HomeController : Controller
{
    public ActionResult Index()
    {
        // Define nodes
        List<DiagramNode> nodes = new List<DiagramNode>()
        {
            new DiagramNode()
            {
                Id = "node1", OffsetX = 300, OffsetY = 100,
                Shape = new DiagramFlowShape() { Type = Shapes.Flow, Shape = FlowShapes.Terminator },
                Annotations = new List<DiagramNodeAnnotation>()
                {
                    new DiagramNodeAnnotation() { Content = "Start" }
                }
            },
            new DiagramNode()
            {
                Id = "node2", OffsetX = 300, OffsetY = 200,
                Shape = new DiagramFlowShape() { Type = Shapes.Flow, Shape = FlowShapes.Process },
                Annotations = new List<DiagramNodeAnnotation>()
                {
                    new DiagramNodeAnnotation() { Content = "Process" }
                }
            },
            new DiagramNode()
            {
                Id = "node3", OffsetX = 300, OffsetY = 300,
                Shape = new DiagramFlowShape() { Type = Shapes.Flow, Shape = FlowShapes.Decision },
                Annotations = new List<DiagramNodeAnnotation>()
                {
                    new DiagramNodeAnnotation() { Content = "Decision?" }
                }
            },
            new DiagramNode()
            {
                Id = "node4", OffsetX = 300, OffsetY = 400,
                Shape = new DiagramFlowShape() { Type = Shapes.Flow, Shape = FlowShapes.Terminator },
                Annotations = new List<DiagramNodeAnnotation>()
                {
                    new DiagramNodeAnnotation() { Content = "End" }
                }
            }
        };

        // Define connectors
        List<DiagramConnector> connectors = new List<DiagramConnector>()
        {
            new DiagramConnector() { Id = "connector1", SourceID = "node1", TargetID = "node2" },
            new DiagramConnector() { Id = "connector2", SourceID = "node2", TargetID = "node3" },
            new DiagramConnector() { Id = "connector3", SourceID = "node3", TargetID = "node4" }
        };

        ViewBag.Nodes = nodes;
        ViewBag.Connectors = connectors;
        ViewBag.getNodeDefaults = "getNodeDefaults";
        ViewBag.getConnectorDefaults = "getConnectorDefaults";
        return View();
    }
}
```

### Bind the data

Replace the entire contents of **~/Views/Home/Index.cshtml** with the following code to bind `ViewBag.Nodes` and `ViewBag.Connectors` to the `@Html.EJS().Diagram()` HTML helper.

```cshtml
@Html.EJS().Diagram("diagram")
    .Width("100%")
    .Height("580px")
    .Nodes((List<Syncfusion.EJ2.Diagrams.DiagramNode>)ViewBag.Nodes)
    .Connectors((List<Syncfusion.EJ2.Diagrams.DiagramConnector>)ViewBag.Connectors)
    .GetNodeDefaults("getNodeDefaults")
    .GetConnectorDefaults("getConnectorDefaults")
    .Render()

<script>
    function getNodeDefaults(node) {
        node.width = 140;
        node.height = 50;
        node.style = {
            fill: '#E8F4FF',
            strokeColor: '#357BD2'
        };
        return node;
    }

    function getConnectorDefaults(connector) {
        connector.type = 'Orthogonal';
        connector.targetDecorator = {
            shape: 'Arrow',
            width: 10,
            height: 10
        };
        return connector;
    }
</script>
```

In this example:

* Nodes and connectors are defined in `HomeController.cs` and passed to the view via `ViewBag`.
* [`OffsetX`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Diagrams.DiagramNode.html#Syncfusion_EJ2_Diagrams_DiagramNode_OffsetX) and [`OffsetY`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Diagrams.DiagramNode.html#Syncfusion_EJ2_Diagrams_DiagramNode_OffsetY) define the position of each node.
* [`Shape`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Diagrams.DiagramNode.html#Syncfusion_EJ2_Diagrams_DiagramNode_Shape) sets the flowchart shape type, such as `Terminator`, `Process`, or `Decision`.
* [`Annotations`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Diagrams.DiagramNode.html#Syncfusion_EJ2_Diagrams_DiagramNode_Annotations) adds a text label inside each node using the [`Content`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Diagrams.DiagramNodeAnnotation.html#Syncfusion_EJ2_Diagrams_DiagramNodeAnnotation_Content) property.
* [`SourceID`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Diagrams.DiagramConnector.html#Syncfusion_EJ2_Diagrams_DiagramConnector_SourceID) and [`TargetID`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Diagrams.DiagramConnector.html#Syncfusion_EJ2_Diagrams_DiagramConnector_TargetID) connect one node to another. Each connector's `SourceID` and `TargetID` must match a defined node `Id`; mismatches cause connectors not to render.
* [`getNodeDefaults`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Diagrams.Diagram.html#Syncfusion_EJ2_Diagrams_Diagram_GetNodeDefaults) applies common width, height, fill color, and stroke color to all nodes.
* [`getConnectorDefaults`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Diagrams.Diagram.html#Syncfusion_EJ2_Diagrams_Diagram_GetConnectorDefaults) applies common connector settings such as orthogonal routing and target arrows.

## Step 9: Run the application

Press <kbd>Ctrl</kbd>+<kbd>F5</kbd> in Visual Studio to build and run the application with IIS Express. Alternatively, build from the command line using MSBuild and run under IIS Express:

```bash
msbuild && "C:\Program Files\IIS Express\iisexpress.exe" /path:"<project-folder>"
```

N> Replace `<project-folder>` with the absolute path to your project folder. ASP.NET MVC5 (.NET Framework) projects are not run with `dotnet run`; build with MSBuild and host with IIS Express (or Visual Studio).

Open the generated local URL in the browser. The application displays the flowchart with four connected nodes.

The output will appear as follows:

![Rendered flowchart with four nodes connected vertically by arrows](./images/Getting-started.png)

N> You can refer to our [ASP.NET MVC Diagram](https://www.syncfusion.com/aspnet-mvc-ui-controls/diagram) feature tour page for its groundbreaking feature representations. You can also explore our [ASP.NET MVC Diagram example](https://ej2.syncfusion.com/aspnetmvc/Diagram/DefaultFunctionalities#/material) that shows how to render the Diagram in ASP.NET MVC.

