---
layout: post
title: Getting Started with ASP.NET Core Scheduler Control| Syncfusion
description: Check out and learn about getting started with ASP.NET Core Scheduler control of Syncfusion Essential JS 2 and more details.
platform: scheduler-sdk
control: Getting Started
publishingplatform: scheduler-sdk
documentation: ug
---


# Getting Started with the ASP.NET Core Scheduler Control

This section briefly explains how to include the [ASP.NET Core Scheduler](https://www.syncfusion.com/scheduler-sdk/aspnet-core-scheduler) control in your ASP.NET Core Web App using [Visual Studio](https://visualstudio.microsoft.com/vs/).

> **Ready to streamline your ASP.NET Core development?** Discover the full potential of ASP.NET Core controls with AI Coding Assistant. Effortlessly integrate, configure, and enhance your projects with intelligent, context-aware code suggestions, streamlined setups, and real-time insights—all seamlessly integrated into your preferred AI-powered IDEs like Visual Studio, Visual Studio Code, Cursor, CodeStudio and more. [Explore AI Coding Assistant](https://ej2.syncfusion.com/aspnetcore/documentation/ai-coding-assistant/overview)

To get started quickly with ASP.NET Core Scheduler control, you can check out this video:

{% youtube
"youtube:https://www.youtube.com/watch?v=1YVOmjid1Ow"%}

## Create an ASP.NET Core web App with Razor Pages

Create an **ASP.NET Core Web App** using Visual Studio via [Microsoft Templates](https://learn.microsoft.com/en-us/aspnet/core/tutorials/razor-pages/razor-pages-start?view=aspnetcore-10.0&tabs=visual-studio#create-a-razor-pages-web-app) or the [ASP.NET Core Extension](https://ej2.syncfusion.com/aspnetcore/documentation/visual-studio-integration/create-project).

## Install the required ASP.NET Core packages

To add **ASP.NET Core Scheduler** control in the app, open the NuGet package manager in Visual Studio (Tools → NuGet Package Manager → Manage NuGet Packages for Solution), then search and install [Syncfusion.AspNetCore.Schedule](https://www.nuget.org/packages/Syncfusion.AspNetCore.Schedule) and [Syncfusion.AspNetCore.Themes](https://www.nuget.org/packages/Syncfusion.AspNetCore.Themes). All Syncfusion ASP.NET Core packages are available in [nuget.org](https://www.nuget.org/packages?q=syncfusion.EJ2). See the [NuGet packages](https://ej2.syncfusion.com/aspnetcore/documentation/nuget-packages) topic for the details.

* [Create a Project using Syncfusion<sup style="font-size:70%">&reg;</sup> ASP.NET Core Extension](https://ej2.syncfusion.com/aspnetcore/documentation/visual-studio-integration/create-project)

## Install ASP.NET Core package in the application

To add `ASP.NET Core` controls in the application, open the NuGet package manager in Visual Studio (Tools → NuGet Package Manager → Manage NuGet Packages for Solution), search for [Syncfusion.EJ2.AspNet.Core](https://www.nuget.org/packages/Syncfusion.EJ2.AspNet.Core/) and then install it. Alternatively, you can utilize the following package manager command to achieve the same.
Alternatively, you can install the same packages using the Package Manager Console with the following commands.

{% tabs %}
{% highlight C# tabtitle="Package Manager Console" %}

Install-Package Syncfusion.AspNetCore.Schedule -Version {{ site.releaseversion }}
Install-Package Syncfusion.AspNetCore.Themes -Version {{ site.releaseversion }}

{% endhighlight %}
{% endtabs %}

After installation completes, verify the package was installed successfully by checking the `*.csproj` file for the package reference or the Manage NuGet Packages dialog.

N> Syncfusion® ASP.NET Core controls are available in [nuget.org](https://www.nuget.org/packages?q=syncfusion.EJ2). Refer to [NuGet packages topic](https://ej2.syncfusion.com/aspnetcore/documentation/nuget-packages) to learn more about installing NuGet packages in various OS environments. The Syncfusion.EJ2.AspNet.Core NuGet package has dependencies: [Newtonsoft.Json](https://www.nuget.org/packages/Newtonsoft.Json/) for JSON serialization and [Syncfusion.Licensing](https://www.nuget.org/packages/Syncfusion.Licensing/) for validating Syncfusion® license keys.

## Add Syncfusion® ASP.NET Core Tag Helper
Open `~/Pages/_ViewImports.cshtml` file and import the `Syncfusion.EJ2` TagHelper.
## Add ASP.NET Core tag helpers

After the packages are installed, open the **~/Pages/_ViewImports.cshtml** file and import the `Syncfusion.AspNetCore.Schedule` and `Syncfusion.AspNetCore.Base` tag helpers.

{% tabs %}
{% highlight C# tabtitle="_ViewImports.cshtml" %}

@addTagHelper *, Syncfusion.AspNetCore.Schedule
@addTagHelper *, Syncfusion.AspNetCore.Base

{% endhighlight %}
{% endtabs %}

## Add stylesheet and script resources

Here, the theme and script are referred using CDN inside the `<head>` of `~/Pages/Shared/_Layout.cshtml` file as follows. The example uses the Fluent theme; you can choose other themes based on your design requirements.
The theme stylesheet and script can be referenced from NuGet through [Static Web Assets](https://ej2.syncfusion.com/aspnetcore/documentation/appearance/theme#static-web-assets). Include the [stylesheet](https://ej2.syncfusion.com/aspnetcore/documentation/appearance/theme) and [script references](https://ej2.syncfusion.com/aspnetcore/documentation/common/adding-script-references) inside the `<head>` of **~/Pages/Shared/_Layout.cshtml** file.

{% tabs %}
{% highlight cshtml tabtitle="_Layout.cshtml" %}

<head>
    ...
    ...
    <link rel="stylesheet" href="_content/Syncfusion.AspNetCore.Themes/styles/fluent2.css" />
    <script src="_content/Syncfusion.AspNetCore.Schedule/scripts/sf-schedule.min.js"></script>
</head>

{% endhighlight %}
{% endtabs %}

N> Check out the [Themes topic](https://ej2.syncfusion.com/aspnetcore/documentation/appearance/theme) to learn different ways ([CDN](https://ej2.syncfusion.com/aspnetcore/documentation/common/adding-script-references#cdn-reference), [NPM package](https://ej2.syncfusion.com/aspnetcore/documentation/common/adding-script-references#node-package-manager-npm), and [CRG](https://ej2.syncfusion.com/aspnetcore/documentation/common/custom-resource-generator)) to refer styles in your ASP.NET Core application and ensure the expected appearance for Syncfusion® ASP.NET Core controls.

N> Check out the [Adding Script Reference](https://ej2.syncfusion.com/aspnetcore/documentation/common/adding-script-references) topic to learn different approaches for adding script references in your ASP.NET Core application.

## Register Syncfusion® Script Manager

Also, register the script manager `<ejs-scripts>` at the end of `<body>` in the ASP.NET Core application as follows.
## Register the script manager

Open the **~/Pages/Shared/_Layout.cshtml** file and register the script manager (`<ejs-scripts>`) at the end of the `<body>` element as shown below.

{% tabs %}
{% highlight cshtml tabtitle="_Layout.cshtml" %}

<body>
    ...
    <!-- Syncfusion ASP.NET Core Script Manager -->
    <ejs-scripts></ejs-scripts>
</body>

{% endhighlight %}
{% endtabs %}

## Add the ASP.NET Core Scheduler control

Now, add the Syncfusion® ASP.NET Core Schedule tag helper in `~/Pages/Index.cshtml` page.
Add the [ASP.NET Core Scheduler](https://www.syncfusion.com/scheduler-sdk/aspnet-core-scheduler) control in the **~/Pages/Index.cshtml** file.

{% tabs %}
{% highlight cshtml tabtitle="Index.cshtml" %}
{% include code-snippet/scheduler-sdk/asp-net-core/schedule/default/data/tagHelper %}
{% endhighlight %}
{% endtabs %}

Press <kbd>Ctrl</kbd>+<kbd>F5</kbd> (Windows) or <kbd>⌘</kbd>+<kbd>F5</kbd> (macOS) to run the app. Then, the Syncfusion® ASP.NET Core Schedule control will be rendered in the default web browser.
Press <kbd>Ctrl</kbd>+<kbd>F5</kbd> (Windows) or <kbd>⌘</kbd>+<kbd>F5</kbd> (macOS) to launch the application. The [ASP.NET Core Schedule](https://www.syncfusion.com/scheduler-sdk/aspnet-core-scheduler) control will render in your default web browser.

![ASP.NET Core Scheduler Control](images/scheduler-control.webp)

## Populating appointments

To populate an empty Scheduler with appointments, bind the event data to it by assigning the [DataSource](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Schedule.ScheduleEventSettings.html#Syncfusion_EJ2_Schedule_ScheduleEventSettings_DataSource) property under `e-schedule-eventsettings` tag Helper. The DataSource accepts a collection of appointment objects with at minimum `Id`, `Subject`, `StartTime`, and `EndTime` properties.

First, create the `AppointmentData` model class in the Models folder (or code-behind of your Razor page):

{% tabs %}
{% highlight c# tabtitle="Models/AppointmentData.cs" %}
{% highlight cshtml tabtitle="Index.cshtml" %}
{% include code-snippet/scheduler-sdk/asp-net-core/schedule/getting-started/data/tagHelper %}
{% endhighlight %}
{% highlight C# tabtitle="Index.cshtml.cs" %}
public class AppointmentData
{
    public int Id { get; set; }
    public string Subject { get; set; }
    public DateTime StartTime { get; set; }
    public DateTime EndTime { get; set; }
}
{% endhighlight %}
{% endtabs %}

Then, populate the Scheduler with appointment data in your Razor page or controller:

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-core/schedule/getting-started/data/tagHelper %}
{% endhighlight %}
{% endtabs %}

![ASP.NET Core Schedule with Appointments](images/appointments.png)

## Setting date

Scheduler usually displays the system date as its current date. To change the current date of the Scheduler to a specific date, define the [`SelectedDate`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Schedule.Schedule.html#Syncfusion_EJ2_Schedule_Schedule_SelectedDate) property on the Scheduler tag helper.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-core/schedule/getting-started/selected-date/tagHelper %}
![ASP.NET Core Scheduler with Appointments](images/appointments.webp)

## Setting date

By default, the Scheduler displays the system date as its current date. To change the current date of the scheduler to a specific date, use the [`selectedDate`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Schedule.Schedule.html#Syncfusion_EJ2_Schedule_Schedule_SelectedDate) property.

{% tabs %}
{% highlight cshtml tabtitle="Index.cshtml" %}
{% include code-snippet/scheduler-sdk/asp-net-core/schedule/getting-started/data/tagHelper %}
{% endhighlight %}
{% highlight C# tabtitle="Index.cshtml.cs" %}
public class AppointmentData
{
    public int Id { get; set; }
    public string Subject { get; set; }
    public DateTime StartTime { get; set; }
    public DateTime EndTime { get; set; }
}
{% endhighlight %}
{% endtabs %}

## Changing the default view

Scheduler displays `Week` view by default. To change the current view, define the applicable view name to the [`CurrentView`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Schedule.Schedule.html#Syncfusion_EJ2_Schedule_Schedule_CurrentView) property. The applicable view names are,
Scheduler displays `Week` view by default. To change the current view, define the applicable view name to the [`currentView`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Schedule.Schedule.html#Syncfusion_EJ2_Schedule_Schedule_CurrentView) property. The applicable view names are;

* Day
* Week
* WorkWeek
* Month
* Year
* Agenda
* MonthAgenda
* TimelineDay
* TimelineWeek
* TimelineWorkWeek
* TimelineMonth
* TimelineYear

{% tabs %}
{% highlight cshtml tabtitle="Index.cshtml" %}
{% include code-snippet/scheduler-sdk/asp-net-core/schedule/views/specific-views/tagHelper %}
{% endhighlight %}
{% endtabs %}

![ASP.NET Core Scheduler with Specific View](images/schedule-with-specific-view.webp)

### Customizing individual views

Each Scheduler view can be individually customized with its own options, such as setting different start and end hours on Week and Work Week views, or hiding weekend days on Month view alone. This is achieved by defining the `Views` property to accept an array of view configuration objects, where each object specifies customization options for that view.
Each individual scheduler view can be customized with its own options such as setting different start and end hours on Week and Work Week views, while hiding weekend days only in Month view. Set the `views` property to a collection of [ScheduleView](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Schedule.ScheduleView.html) objects, where each object defines the customization for an individual view."

{% tabs %}
{% highlight cshtml tabtitle="Index.cshtml" %}
{% include code-snippet/scheduler-sdk/asp-net-core/schedule/views/individual-views/tagHelper %}
{% endhighlight %}
{% endtabs %}

![ASP.NET Core Schedule with Custom Views](images/schedule-with-custom-views.png)

## Troubleshooting

**Issue: Schedule control is not rendering**
- Verify that the CDN links for CSS and JavaScript are correct and accessible.
- Ensure the `<ejs-scripts>` tag is present at the end of the `<body>` tag.
- Check the browser console for any JavaScript errors.

**Issue: Appointments are not displaying**
- Confirm that the `DataSource` property is correctly bound to your appointment data collection.
- Verify that the appointment objects have required properties: `Id`, `Subject`, `StartTime`, and `EndTime`.
- Check that date values are in the correct DateTime format.

**Issue: NuGet package not installing**
- Ensure you have internet connectivity to access nuget.org.
- Try clearing the NuGet cache and reinstalling the package.

N> You can also explore our [ASP.NET Core Scheduler example](https://ej2.syncfusion.com/aspnetcore/Schedule/Overview#/material) that shows how to use the toolbar buttons to interact with Scheduler functionalities.
![ASP.NET Core Scheduler with Custom Views](images/schedule-with-custom-views.webp)

N> [View Sample in GitHub](https://github.com/SyncfusionExamples/ASP-NET-Core-Getting-Started-Examples/tree/main/Schedule/ASP.NET%20Core%20Tag%20Helper%20Examples).

## See also

1. [Getting Started with ASP.NET Core in Visual Studio Code](https://ej2.syncfusion.com/aspnetcore/documentation/getting-started/vscode)
2. [Getting Started with ASP.NET Core MVC using Tag Helper](https://ej2.syncfusion.com/aspnetcore/documentation/getting-started/aspnet-core-mvc-taghelper)
3. [Getting Started with ASP.NET Core in Visual Studio Mac](https://ej2.syncfusion.com/aspnetcore/documentation/getting-started/visual-studio-mac)
