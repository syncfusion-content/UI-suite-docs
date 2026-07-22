---
layout: post
title: Connectors in Syncfusion® ASP.NET Core Diagram Component
description: Learn here all about Connectors in Syncfusion® ASP.NET Core Diagram component of Syncfusion Essential® JS 2 and more.
platform: diagram-sdk
control: Connectors
publishingplatform: diagram-sdk
documentation: ug
---


# Connector in Diagram

Connectors are objects used to create link between two points, nodes or ports to represent the relationships between them.

## Create connector

Connector can be created by defining the source and target point of the connector. The path to be drawn can be defined with a collection of segments. To explore the properties of a [`connector`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Diagrams.DiagramConnector.html), refer to [`Connector Properties`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Diagrams.DiagramConnector.html#properties).

## Add connectors through connectors collection

The [`sourcePoint`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Diagrams.DiagramConnector.html#Syncfusion_EJ2_Diagrams_DiagramConnector_SourcePoint) and [`targetPoint`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Diagrams.DiagramConnector.html#Syncfusion_EJ2_Diagrams_DiagramConnector_TargetPoint) properties of connector allows to define the end points of a connector.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/diagram-sdk/asp-net-core/asp-net-core/asp-net-core/connectors/default/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Default.cs" %}
{% include code-snippet/diagram-sdk/asp-net-core/asp-net-core/asp-net-core/connectors/default/default.cs %}
{% endhighlight %}
{% endtabs %}
## Add connector at runtime

Connectors can be added at runtime by using public method, `diagram.add` and can be removed at runtime by using public method, `diagram.remove`.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/diagram-sdk/asp-net-core/asp-net-core/asp-net-core/connectors/default/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Default.cs" %}
{% include code-snippet/diagram-sdk/asp-net-core/asp-net-core/asp-net-core/connectors/default/default.cs %}
{% endhighlight %}
{% endtabs %}


```javascript

var connectors = {
    id: "connector2",
    style: {
        strokeColor: '#6BA5D7',
        fill: '#6BA5D7',
        strokeWidth: 2
    },
    targetDecorator: {
        style: {
            fill: '#6BA5D7',
            strokeColor: '#6BA5D7'
        }
    },
    sourcePoint: {
        x: 300,
        y: 100
    },
    targetPoint: {
        x: 400,
        y: 200
    }
}

var diagram = document.getElementById("container").ej2_instances[0];
// Adds to the Diagram
diagram.add(connectors)
// Remove from the diagram
diagram.remove(connectors)

```

## Add collection of connectors at runtime

* The collection of connectors can be dynamically added using `addElements` method.Each time an element is added to the diagram canvas, the `collectionChange` event will be triggered.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/diagram-sdk/asp-net-core/asp-net-core/asp-net-core/connectors/connectorCollection/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="ConnectorCollection.cs" %}
{% include code-snippet/diagram-sdk/asp-net-core/asp-net-core/asp-net-core/connectors/connectorCollection/connectorCollection.cs %}
{% endhighlight %}
{% endtabs %}
## Connectors from palette

Connectors can be predefined and added to the symbol palette. You can drop those connectors into the diagram, when required.

For more information about adding connectors from symbol palette, refer to `Symbol Palette`.

## Draw connectors

Connectors can be interactively drawn by clicking and dragging on the diagram surface by using `drawingObject`.

For more information about drawing connectors, refer to [`Draw Connectors`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Diagrams.Diagram.html#Syncfusion_EJ2_Diagrams_Diagram_DrawingObject).

## Update connector at runtime

Various connector properties such as `sourcePoint`, `targetPoint`, `style`, `sourcePortID`, `targetPortID`, etc., can be updated at the runtime.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/diagram-sdk/asp-net-core/asp-net-core/asp-net-core/connectors/default/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Default.cs" %}
{% include code-snippet/diagram-sdk/asp-net-core/asp-net-core/asp-net-core/connectors/default/default.cs %}
{% endhighlight %}
{% endtabs %}


```javascript

var diagram = document.getElementById("container").ej2_instances[0];
// Update the connector properties at the run time
diagram.connectors[0].style.strokeColor = '#6BA5D7';
diagram.connectors[0].style.fill = '#6BA5D7';
diagram.connectors[0].style.strokeWidth = 2;
diagram.connectors[0].targetDecorator.style.fill = '#6BA5D7';
diagram.connectors[0].targetDecorator.style.strokeColor = '#6BA5D7';
diagram.connectors[0].sourcePoint.x = 150;
diagram.connectors[0].targetPoint.x = 150;
diagram.dataBind();

```

## Connect nodes

* The [`sourceID`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Diagrams.DiagramConnector.html#Syncfusion_EJ2_Diagrams_DiagramConnector_SourceID) and [`targetID`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Diagrams.DiagramConnector.html#Syncfusion_EJ2_Diagrams_DiagramConnector_TargetID) properties allow to define the nodes to be connected.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/diagram-sdk/asp-net-core/asp-net-core/asp-net-core/connectors/connect/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Connect.cs" %}
{% include code-snippet/diagram-sdk/asp-net-core/asp-net-core/asp-net-core/connectors/connect/connect.cs %}
{% endhighlight %}
{% endtabs %}


* When you remove NodeConstraints InConnect from Default, the node accepts only an outgoing connection to dock in it. Similarly, when you remove NodeConstraints OutConnect from Default, the node accepts only an incoming connection to dock in it.

* When you remove both InConnect and OutConnect NodeConstraints from Default, the node restricts connector to establish connection in it.

```javascript

node.constraints =  NodeConstraints.Default & ~NodeConstraints.InConnect,

```

## Connections with ports

The [`sourcePortID`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Diagrams.DiagramConnector.html#Syncfusion_EJ2_Diagrams_DiagramConnector_SourcePortID) and [`targetPortID`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Diagrams.DiagramConnector.html#Syncfusion_EJ2_Diagrams_DiagramConnector_TargetPortID) properties allow to create connections between some specific points of source/target nodes.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/diagram-sdk/asp-net-core/asp-net-core/asp-net-core/connectors/ports/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Ports.cs" %}
{% include code-snippet/diagram-sdk/asp-net-core/asp-net-core/asp-net-core/connectors/ports/ports.cs %}
{% endhighlight %}
{% endtabs %}


Similarly, the `sourcePortID` or `targetPortID` can be changed at the runtime by changing the port [`sourcePortID`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Diagrams.DiagramConnector.html#Syncfusion_EJ2_Diagrams_DiagramConnector_SourcePortID) or [`targetPortID`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Diagrams.DiagramConnector.html#Syncfusion_EJ2_Diagrams_DiagramConnector_TargetPortID).

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/diagram-sdk/asp-net-core/asp-net-core/asp-net-core/connectors/ports/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Ports.cs" %}
{% include code-snippet/diagram-sdk/asp-net-core/asp-net-core/asp-net-core/connectors/ports/ports.cs %}
{% endhighlight %}
{% endtabs %}


```javascript
var diagram = document.getElementById("container").ej2_instances[0];
diagram.appendTo('#element');
// Update the target portID at the run time
diagram.connectors[0].targetPortID = 'newnodeport1'

```

* When you set PortConstraints to InConnect, the port accepts only an incoming connection to dock in it. Similarly, when you set PortConstraints to OutConnect, the port accepts only an outgoing connection to dock in it.
* When you set PortConstraints to None, the port restricts connector to establish connection in it.

```javascript

port.constraints =  PortConstraints.InConnect,

```

## Segments

The path of the connector is defined with a collection of segments. There are three types of segments.

## Straight

To create a straight line, specify the [`type`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Diagrams.DiagramConnector.html#Syncfusion_EJ2_Diagrams_DiagramConnector_Type) of the segment as **straight** and add a straight segment to [`segments`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Diagrams.DiagramConnector.html#Syncfusion_EJ2_Diagrams_DiagramConnector_Segments) collection and need to specify [`type`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Diagrams.DiagramConnector.html#Syncfusion_EJ2_Diagrams_DiagramConnector_Type) for the connector.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/diagram-sdk/asp-net-core/asp-net-core/asp-net-core/connectors/segment/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Segment.cs" %}
{% include code-snippet/diagram-sdk/asp-net-core/asp-net-core/asp-net-core/connectors/segment/segment.cs %}
{% endhighlight %}
{% endtabs %}


The [`point`](https://ej2.syncfusion.com/documentation/api/diagram/straightSegment/#point) property of straight segment allows to define the end point of it.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/diagram-sdk/asp-net-core/asp-net-core/asp-net-core/connectors/segment/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Segment.cs" %}
{% include code-snippet/diagram-sdk/asp-net-core/asp-net-core/asp-net-core/connectors/segment/segment.cs %}
{% endhighlight %}
{% endtabs %}


## Orthogonal

Orthogonal segments is used to create segments that are perpendicular to each other.

Set the segment [`type`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Diagrams.DiagramConnector.html#Syncfusion_EJ2_Diagrams_DiagramConnector_Type) as orthogonal to create a default orthogonal segment and need to specify [`type`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Diagrams.DiagramConnector.html#Syncfusion_EJ2_Diagrams_DiagramConnector_Type).

Multiple segments can be defined one after another. To create a connector with multiple segments, define and add the segments to [`connector.segments`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Diagrams.Segments.html) collection.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/diagram-sdk/asp-net-core/asp-net-core/asp-net-core/connectors/orthogonal/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Orthogonal.cs" %}
{% include code-snippet/diagram-sdk/asp-net-core/asp-net-core/asp-net-core/connectors/orthogonal/orthogonal.cs %}
{% endhighlight %}
{% endtabs %}


The [`length`](https://ej2.syncfusion.com/documentation/api/diagram/orthogonalsegment#length) and [`direction`](https://ej2.syncfusion.com/documentation/api/diagram/orthogonalsegment#direction) properties allows to define the flow and length of segment.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/diagram-sdk/asp-net-core/asp-net-core/asp-net-core/connectors/direction/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Direction.cs" %}
{% include code-snippet/diagram-sdk/asp-net-core/asp-net-core/asp-net-core/connectors/direction/direction.cs %}
{% endhighlight %}
{% endtabs %}


N> You need to mention the segment type as same as what you mentioned in connector type. There should be no contradiction between connector type and segment type.

## How to customize Orthogonal Segment Thumb Size

Orthogonal segment thumbs default to size 10. This can be adjusted globally or for individual connectors using the [`segmentThumbSize`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Diagrams.SegmentThumbShapes.html) property.
To change the thumb size for all Orthogonal connectors, set the [`segmentThumbSize`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Diagrams.SegmentThumbShapes.html) property in the diagram’s model.
To customize the thumb size for a specific connector, disable the [`InheritSegmentThumbSize`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Diagrams.ConnectorConstraints.html#Syncfusion_EJ2_Diagrams_ConnectorConstraints_InheritSegmentThumbSize) constraint, then set the desired [`segmentThumbSize`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Diagrams.SegmentThumbShapes.html).

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/diagram-sdk/asp-net-core/asp-net-core/asp-net-core/connectors/orthogonalThumbSize/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="orthogonal.cs" %}
{% include code-snippet/diagram-sdk/asp-net-core/asp-net-core/asp-net-core/connectors/orthogonalThumbSize/orthogonal.cs %}
{% endhighlight %}
{% endtabs %}
## Avoid overlapping

Orthogonal segments are automatically re-routed, in order to avoid overlapping with the source and target nodes.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/diagram-sdk/asp-net-core/asp-net-core/asp-net-core/connectors/overlapping/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Overlapping.cs" %}
{% include code-snippet/diagram-sdk/asp-net-core/asp-net-core/asp-net-core/connectors/overlapping/overlapping.cs %}
{% endhighlight %}
{% endtabs %}


## Bezier

Bezier segments are used to create curve segments and the curves are configurable either with the control points or with vectors.

To create a bezier segment, the [`segment.type`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Diagrams.Segments.html) is set as `bezier` and need to specify [`type`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Diagrams.Segments.html) for the connector.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/diagram-sdk/asp-net-core/asp-net-core/asp-net-core/connectors/vector/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Vector.cs" %}
{% include code-snippet/diagram-sdk/asp-net-core/asp-net-core/asp-net-core/connectors/vector/vector.cs %}
{% endhighlight %}
{% endtabs %}


The [`point1`](https://ej2.syncfusion.com/documentation/api/diagram/bezierSegment/#point1) and [`point2`](https://ej2.syncfusion.com/documentation/api/diagram/bezierSegment/#point2) properties of bezier segment enables to set the control points.

The [`vector1`](https://ej2.syncfusion.com/documentation/api/diagram/bezierSegment/#vector1) and [`vector2`](https://ej2.syncfusion.com/documentation/api/diagram/bezierSegment/#vector2) properties of bezier segment enable you to define the vectors.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/diagram-sdk/asp-net-core/asp-net-core/asp-net-core/connectors/points/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Points.cs" %}
{% include code-snippet/diagram-sdk/asp-net-core/asp-net-core/asp-net-core/connectors/points/points.cs %}
{% endhighlight %}
{% endtabs %}
## How to customize Bezier Segment Thumb Size

Bezier segment thumbs default to size 10. This can be adjusted globally or for individual connectors using the [`segmentThumbSize`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Diagrams.SegmentThumbShapes.html) property.
To change the thumb size for all Bezier connectors, set the [`segmentThumbSize`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Diagrams.SegmentThumbShapes.html) property in the diagram’s model.
To customize the thumb size for a specific connector, disable the [`InheritSegmentThumbSize`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Diagrams.ConnectorConstraints.html#Syncfusion_EJ2_Diagrams_ConnectorConstraints_InheritSegmentThumbSize)constraint, then set the desired [`segmentThumbSize`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Diagrams.SegmentThumbShapes.html).

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/diagram-sdk/asp-net-core/asp-net-core/asp-net-core/connectors/bezierThumbSize/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="bezier.cs" %}
{% include code-snippet/diagram-sdk/asp-net-core/asp-net-core/asp-net-core/connectors/bezierThumbSize/bezier.cs %}
{% endhighlight %}
{% endtabs %}
## Decorator

* Starting and ending points of a connector can be decorated with some customizable shapes like arrows, circles, diamond, or path. The connection end points can be decorated with the [`sourceDecorator`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Diagrams.DiagramConnector.html#Syncfusion_EJ2_Diagrams_DiagramConnector_SourceDecorator) and [`targetDecorator`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Diagrams.DiagramConnector.html#Syncfusion_EJ2_Diagrams_DiagramConnector_TargetDecorator) properties of the connector.

* The [`shape`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Diagrams.DiagramDecorator.html#Syncfusion_EJ2_Diagrams_DiagramDecorator_Shape) property of `sourceDecorator` allows to define the shape of the decorators. Similarly, the [shape](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Diagrams.DiagramDecorator.html#Syncfusion_EJ2_Diagrams_DiagramDecorator_Shape) property of `targetDecorator` allows to define the shape of the decorators.

* To create custom shape for source decorator, use [`pathData`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Diagrams.DiagramDecorator.html#Syncfusion_EJ2_Diagrams_DiagramDecorator_PathData) property. Similarly, to create custom shape for target decorator, use [`pathData`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Diagrams.DiagramDecorator.html#Syncfusion_EJ2_Diagrams_DiagramDecorator_PathData) property.


{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/diagram-sdk/asp-net-core/asp-net-core/asp-net-core/connectors/srcdecorator/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Srcdecorator.cs" %}
{% include code-snippet/diagram-sdk/asp-net-core/asp-net-core/asp-net-core/connectors/srcdecorator/srcdecorator.cs %}
{% endhighlight %}
{% endtabs %}


## Padding

Padding is used to leave the space between the Connector's end point and the object to where it is connected.

* The [`sourcePadding`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Diagrams.DiagramConnector.html#Syncfusion_EJ2_Diagrams_DiagramConnector_SourcePadding) property of connector defines space between the source point and the source node of the connector.

* The [`targetPadding`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Diagrams.DiagramConnector.html#Syncfusion_EJ2_Diagrams_DiagramConnector_TargetPadding) property of connector defines space between the end point and the target node of the connector.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/diagram-sdk/asp-net-core/asp-net-core/asp-net-core/connectors/padding/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Padding.cs" %}
{% include code-snippet/diagram-sdk/asp-net-core/asp-net-core/asp-net-core/connectors/padding/padding.cs %}
{% endhighlight %}
{% endtabs %}


## Flip

The diagram Provides support to flip the connector. The [`flip`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Diagrams.DiagramConnector.html#Syncfusion_EJ2_Diagrams_DiagramConnector_Flip) is performed to give the mirrored image of the original element.

The flip types are as follows:

* HorizontalFlip - `Horizontal` is used to interchange the connector source and target x points.

* VerticalFlip - `Vertical` is used to interchange the connector source and target y points.

* Both - `Both` is used to interchange the source point as target point and target point as source point.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/diagram-sdk/asp-net-core/asp-net-core/asp-net-core/connectors/flip/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Flip.cs" %}
{% include code-snippet/diagram-sdk/asp-net-core/asp-net-core/asp-net-core/connectors/flip/flip.cs %}
{% endhighlight %}
{% endtabs %}


 N> The flip is not applicable when the connectors connect in nodes.

## Bridging

Line bridging creates a bridge for lines to smartly cross over the other lines, at points of intersection. By default, [`bridgeDirection`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Diagrams.BridgeDirection.html) is set to top. Depending upon the direction given bridging direction appears. Bridging can be enabled or disabled either with the `connector.constraints` or `diagram.constraints`.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/diagram-sdk/asp-net-core/asp-net-core/asp-net-core/connectors/bridging/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Bridging.cs" %}
{% include code-snippet/diagram-sdk/asp-net-core/asp-net-core/asp-net-core/connectors/bridging/bridging.cs %}
{% endhighlight %}
{% endtabs %}


N> You need to inject connector bridging module into the diagram.

The [`bridgeSpace`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Diagrams.DiagramConnector.html#Syncfusion_EJ2_Diagrams_DiagramConnector_BridgeSpace) property of connectors can be used to define the width for line bridging.

Limitation: Bezier segments do not support bridging.

## Corner radius

Corner radius allows to create connectors with rounded corners. The radius of the rounded corner is set with the [`cornerRadius`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Diagrams.DiagramConnector.html#Syncfusion_EJ2_Diagrams_DiagramConnector_CornerRadius) property.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/diagram-sdk/asp-net-core/asp-net-core/asp-net-core/connectors/cornerradius/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Cornerradius.cs" %}
{% include code-snippet/diagram-sdk/asp-net-core/asp-net-core/asp-net-core/connectors/cornerradius/cornerradius.cs %}
{% endhighlight %}
{% endtabs %}


## Appearance

* The connector’s [`strokeWidth`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Diagrams.DiagramStrokeStyle.html#Syncfusion_EJ2_Diagrams_DiagramStrokeStyle_StrokeWidth), [`strokeColor`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Diagrams.DiagramStrokeStyle.html#Syncfusion_EJ2_Diagrams_DiagramStrokeStyle_StrokeColor), [`strokeDashArray`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Diagrams.DiagramStrokeStyle.html#Syncfusion_EJ2_Diagrams_DiagramStrokeStyle_StrokeDashArray), and [`opacity`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Diagrams.DiagramStrokeStyle.html#Syncfusion_EJ2_Diagrams_DiagramStrokeStyle_Opacity) properties are used to customize the appearance of the connector segments.

* The [`visible`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Diagrams.DiagramConnector.html#Syncfusion_EJ2_Diagrams_DiagramConnector_Visible) property of the connector enables or disables the visibility of connector.

* Default values for all the `connectors` can be set using the `getConnectorDefaults` properties. For example, if all connectors have the same type or having the same property then such properties can be moved into `getConnectorDefaults`.

## Segment appearance

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/diagram-sdk/asp-net-core/asp-net-core/asp-net-core/connectors/style/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Style.cs" %}
{% include code-snippet/diagram-sdk/asp-net-core/asp-net-core/asp-net-core/connectors/style/style.cs %}
{% endhighlight %}
{% endtabs %}


## Decorator appearance

* The source decorator’s [`strokeColor`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Diagrams.DiagramShapeStyle.html#Syncfusion_EJ2_Diagrams_DiagramShapeStyle_StrokeColor), [`strokeWidth`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Diagrams.DiagramShapeStyle.html#Syncfusion_EJ2_Diagrams_DiagramShapeStyle_StrokeWidth), and [`strokeDashArray`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Diagrams.DiagramShapeStyle.html#Syncfusion_EJ2_Diagrams_DiagramShapeStyle_StrokeDashArray) properties are used to customize the color, width, and appearance of the decorator.

* To set the border stroke color, stroke width, and stroke dash array for the target decorator, use [`strokeColor`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Diagrams.DiagramShapeStyle.html#Syncfusion_EJ2_Diagrams_DiagramShapeStyle_StrokeColor), [`strokeWidth`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Diagrams.DiagramShapeStyle.html#Syncfusion_EJ2_Diagrams_DiagramShapeStyle_StrokeWidth), and [`strokeDashArray`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Diagrams.DiagramShapeStyle.html#Syncfusion_EJ2_Diagrams_DiagramShapeStyle_StrokeDashArray).

* To set the size for source and target decorator, use width and height property.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/diagram-sdk/asp-net-core/asp-net-core/asp-net-core/connectors/decorator/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Decorator.cs" %}
{% include code-snippet/diagram-sdk/asp-net-core/asp-net-core/asp-net-core/connectors/decorator/decorator.cs %}
{% endhighlight %}
{% endtabs %}


## Interaction

* Diagram allows to edit the connectors at runtime. To edit the connector segments at runtime, refer to [`Connection Editing`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Diagrams.html).

## Automatic line routing

Diagram provides additional flexibility to re-route the diagram connectors. A connector will frequently re-route itself when a shape moves next to it. The following screenshot illustrates how the connector automatically re-routes the segments.

* The line routing constraints must be included to the default diagram constraints to enable automatic line routing support like below.

* The following code block shows how to create the diagram with specifying nodes, connectors, constraints, and necessary modules for line routing.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/diagram-sdk/asp-net-core/asp-net-core/asp-net-core/connectors/linerouting/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Linerouting.cs" %}
{% include code-snippet/diagram-sdk/asp-net-core/asp-net-core/asp-net-core/connectors/linerouting/linerouting.cs %}
{% endhighlight %}
{% endtabs %}


* In some situations, automatic line routing enabled diagram needs to ignore a specific connector from automatic line routing. So, in this case, auto routing feature can be disabled to the specific connector using the [`constraints`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Diagrams.ConnectorConstraints.html) property of the connector.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/diagram-sdk/asp-net-core/asp-net-core/asp-net-core/connectors/linerouting1/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Linerouting1.cs" %}
{% include code-snippet/diagram-sdk/asp-net-core/asp-net-core/asp-net-core/connectors/linerouting1/linerouting1.cs %}
{% endhighlight %}
{% endtabs %}


## Constraints

* The [`constraints`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Diagrams.ConnectorConstraints.html) property of connector allows to enable or disable certain features of connectors.

* To enable or disable the constraints, refer [`constraints`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Diagrams.ConnectorConstraints.html).

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/diagram-sdk/asp-net-core/asp-net-core/asp-net-core/connectors/constraints/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Constraints.cs" %}
{% include code-snippet/diagram-sdk/asp-net-core/asp-net-core/asp-net-core/connectors/constraints/constraints.cs %}
{% endhighlight %}
{% endtabs %}


## Custom properties

* The [`addInfo`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Diagrams.DiagramConnector.html#Syncfusion_EJ2_Diagrams_DiagramConnector_AddInfo) property of connectors allows to maintain additional information to the connectors.

```javascript

var connectors = {
    id: 'connector1',
    // Defines the information about the connector
    addInfo:'centralconnector',
    type: 'Straight',
    sourceID: 'Transaction',
    targetID: 'Verification'
};

```

## Stack order

The connectors [`zIndex`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Diagrams.DiagramConnector.html#Syncfusion_EJ2_Diagrams_DiagramConnector_ZIndex) property specifies the stack order of the connector. A connector with greater stack order is always in front of a connector with a lower stack order.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/diagram-sdk/asp-net-core/asp-net-core/asp-net-core/connectors/zindex/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Zindex.cs" %}
{% include code-snippet/diagram-sdk/asp-net-core/asp-net-core/asp-net-core/connectors/zindex/zindex.cs %}
{% endhighlight %}
{% endtabs %}
## Undo/Redo support for connector segments

The Diagram control provides comprehensive undo and redo functionality for all connector segment operations. This includes reversible actions such as dragging, resizing, and rotating source or target nodes, as well as modifying segment points and endpoints.

Key undo/redo capabilities include:

* Modifying and adjusting segment points.
* Changing connector endpoints between nodes or ports.
* Performing node operations that affect connected segments.
* Adding, removing, or reordering segments.

This functionality ensures consistent editing behavior across all connector types and interactions, enabling users to experiment with complex routing configurations while retaining the ability to revert changes.

The following example demonstrates undo and redo functionality for connector segments:

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/diagram-sdk/asp-net-core/asp-net-core/asp-net-core/connectors/connectors-segundo/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="segment.cs" %}
{% include code-snippet/diagram-sdk/asp-net-core/asp-net-core/asp-net-core/connectors/connectors-segundo/segment.cs %}
{% endhighlight %}
{% endtabs %}
``` javascript
function undo(){
    var diagram = document.getElementById("container").ej2_instances[0];
    diagram.undo();
};
function redo(){
    var diagram = document.getElementById("container").ej2_instances[0];
    diagram.redo();
};
```


## See Also

* [How to add annotations to the connector](./labels)
* [How to enable/disable the behavior of the node](./constraints)
* [How to add connectors to the symbol palette](./symbol-palette)
* [How to perform the interaction on the connector](./interaction)
* [How to create diagram connectors using drawing tools](./tools#tools)
