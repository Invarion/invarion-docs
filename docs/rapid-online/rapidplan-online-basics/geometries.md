---

sidebar_position: 5

---
# Geometries

Geometries apply to the path either the edge of an object or the span of a line-based object takes between two control points.

There are three geometry types:

## Line

Simply the shortest path between two points - straight.

## Spline

Spline applies a curve based on the **Tension** value you input in the object's **Properties**.

-**Tension** values can be any value less than 1.
- A lower value will apply less smoothing - making the line more direct and less curved.
- A higher value will smooth the path more - creating more curvature.

## Bezier

**Bezier** provides the most control when shaping a line item or object - allowing you to create precise curvature where needed without disturbing sections you would prefer to keep straight.

Initially an object set to **Bezier** will be straight.

### Using Bezier

Select the object, you will see Control Points are *Aqua* colored rather than the usual *Red*. Clicking and dragging these points will create **Tangent Points**.

Two **Tangent Points** can exist for each Control Point. 
Moving the Tangent Points will alter the shape of the curve - sharpening it if pulled closer to the Control Point, smoothing it if pulled further away.

If you need to alter the location of a Control Point, hold **shift** to reveal the normal *Red* Control Point. This can be clicked and dragged to change its location.
