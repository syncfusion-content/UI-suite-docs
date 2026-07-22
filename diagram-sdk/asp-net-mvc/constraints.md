---
layout: post
title: Constraints in ASP.NET MVC Diagram Component | Syncfusion®
description: Learn here all about Constraints in Syncfusion® ASP.NET MVC Diagram component of Syncfusion Essential® JS 2 and more.
platform: diagram-sdk
control: Constraints
publishingplatform: diagram-sdk
documentation: ug
---


# Constraints in ASP.NET MVC Diagram Component

Constraints are used to enable or disable certain behaviors of the diagram, nodes and connectors. Constraints are provided as flagged enumerations, so that multiple behaviors can be enabled or disabled using Bitwise operators (`&, |, ~, <<, etc.`).

To know more about Bitwise operators, refer to [`Bitwise Operations`](#bitwise-operations).

## Diagram constraints

Diagram constraints allows to enable or disable the following behaviors:

* Page editing
* Bridging
* Zoom and pan
* Undo/redo
* Tooltip

{% tabs %}
{% highlight c# tabtitle="Default.cs" %}
{% include code-snippet/diagram-sdk/asp-net-mvc/asp-net-mvc/asp-net-mvc/constraints/default/default.cs %}
{% endhighlight %}
{% endtabs %}



For more information about diagram constraints, refer to [`DiagramConstraints`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Diagrams.DiagramConstraints.html).

## Node constraints

Node constraints allows to enable or disable the following behaviors of node. They are as follows:

* Selection
* Deletion
* Drag
* Resize
* Rotate
* Connect
* Shadow
* Tooltip

{% tabs %}
{% highlight c# tabtitle="Node.cs" %}
{% include code-snippet/diagram-sdk/asp-net-mvc/asp-net-mvc/asp-net-mvc/constraints/node/node.cs %}
{% endhighlight %}
{% endtabs %}



For more information about node constraints, refer to [`NodeConstraints`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Diagrams.NodeConstraints.html).

## Connector constraints

Connector constraints allows to enable or disable certain behaviors of connectors.

* Selection
* Deletion
* Drag
* Segment editing
* Tooltip
* Bridging

{% tabs %}
{% highlight c# tabtitle="Connector.cs" %}
{% include code-snippet/diagram-sdk/asp-net-mvc/asp-net-mvc/asp-net-mvc/constraints/connector/connector.cs %}
{% endhighlight %}
{% endtabs %}



For more information about connector constraints, refer to [`ConnectorConstraints`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Diagrams.ConnectorConstraints.html).

## Port constraints

You can enable or disable certain behaviors of port. They are as follows:

* Connect
* ConnectOnDrag

{% tabs %}
{% highlight c# tabtitle="Port.cs" %}
{% include code-snippet/diagram-sdk/asp-net-mvc/asp-net-mvc/asp-net-mvc/constraints/port/port.cs %}
{% endhighlight %}
{% endtabs %}



For more information about port constraints, refer to [`PortConstraints`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Diagrams.PortConstraints.html).

## Annotation constraints

You can enable or disable read-only mode for the annotations by using the annotation constraints.

{% tabs %}
{% highlight c# tabtitle="Annotation.cs" %}
{% include code-snippet/diagram-sdk/asp-net-mvc/asp-net-mvc/asp-net-mvc/constraints/annotation/annotation.cs %}
{% endhighlight %}
{% endtabs %}



For more details about annotation constraints, refer to [`AnnotationConstraints`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Diagrams.AnnotationConstraints.html).

## Selector constraints

Selector visually represents the selected elements with certain editable thumbs. The visibility of the thumbs can be controlled with selector constraints. The part of selector is categorized as follows:

* Resizer
* Rotator
* User handles

{% tabs %}
{% highlight c# tabtitle="Selector.cs" %}
{% include code-snippet/diagram-sdk/asp-net-mvc/asp-net-mvc/asp-net-mvc/constraints/selector/selector.cs %}
{% endhighlight %}
{% endtabs %}



For more information about selector constraints, refer to [`SelectorConstraints`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Diagrams.SelectorConstraints.html).

## Snap constraints

Snap constraints control the visibility of gridlines and enable or disable snapping. Snap constraints allow to set the following behaviors.

* Show only horizontal or vertical gridlines.
* Show both horizontal and vertical gridlines.
* Snap to either horizontal or vertical gridlines.
* Snap to both horizontal and vertical gridlines.

{% tabs %}
{% highlight c# tabtitle="Snap.cs" %}
{% include code-snippet/diagram-sdk/asp-net-mvc/asp-net-mvc/asp-net-mvc/constraints/snap/snap.cs %}
{% endhighlight %}
{% endtabs %}



For more information about snap constraints, refer to [`SnapConstraints`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Diagrams.SnapConstraints.html).

## Boundary constraints

Boundary constraints defines a boundary for the diagram inside which the interaction should be done. Boundary constraints allow to set the following behaviors.

* Infinite boundary
* Diagram sized boundary
* Page sized boundary

{% tabs %}
{% highlight c# tabtitle="Page.cs" %}
{% include code-snippet/diagram-sdk/asp-net-mvc/asp-net-mvc/asp-net-mvc/constraints/page/page.cs %}
{% endhighlight %}
{% endtabs %}



For more information about selector constraints, refer to [`BoundaryConstraints`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Diagrams.BoundaryConstraints.html).

## Inherit behaviors

Some of the behaviors can be defined through both the specific object (node/connector) and diagram. When the behaviors are contradictorily defined through both, the actual behavior is set through inherit options.

{% tabs %}
{% highlight c# tabtitle="Bridging.cs" %}
{% include code-snippet/diagram-sdk/asp-net-mvc/asp-net-mvc/asp-net-mvc/constraints/bridging/bridging.cs %}
{% endhighlight %}
{% endtabs %}



## Bitwise operations

Bitwise operations are used to manipulate the flagged enumerations [enum]. In this section, Bitwise operations are illustrated by using node constraints. The same is applicable while working with node constraints, connector constraints, or port constraints.

## Add operation

You can add or enable multiple values at a time by using Bitwise ‘|’ (OR) operator.

```typescript
node.constraints = NodeConstraints.Select | NodeConstraints.Rotate;
```

In the previous example, you can do both the selection and rotation operation.

## Remove Operation

You can remove or disable values by using Bitwise ‘&~’ (XOR) operator.

```typescript
node.constraints = node.constraints & ~(NodeConstraints.Rotate);
```

In the previous example, rotation is disabled but other constraints are enabled.

## Check operation

You can check any value by using Bitwise ‘&’ (AND) operator.

```typescript
if ((node.constraints & (NodeConstraints.Rotate)) == (NodeConstraints.Rotate));
```

In the previous example, check whether the rotate constraints are enabled in a node. When node constraints have rotate constraints, the expression returns a rotate constraint.