---

sidebar_position: 4

---

# Creating Turning Lanes, Roundabouts, Parking Lots and Road Arcs

## Turning Lanes

The Turning Lane tool found in Road Tools allows you to add an additional lane to the side of an existing road, and can be placed to merge out of an existing edge lane as a turning lane does.

### Placing the Turning Lane

A turning lane usually needs only 3 control points placed, more can be added if preferred.

**With the Turning Lane tool engaged:**

- Place a control point at the point where two roads intersect, with space between the control point and the edge of the road on which the turning lane will exist.
- Then, place another control point at the other end of straight section of the turning lane.
- Finally place a control point *on top of* the road the turning lane is part of where the turning lane merges with the road.
- Right-click to finish drawing.

You'll see the Turning Lane overlaps the edging of the pre-existing road. **If the Turning Lane's edging is on the wrong side** (not on the far side from the road): Go to its Properties and change **Direction** from Right to Left or vise-versa.

Once drawing of the Turning Lane is complete you can fine-tune its shape by clicking it and adjusting red control points, or adding new control points by clicking and dragging the blue points.

## Roundabouts

To create a Roundabout simple click at the center-point where you'd like it to be placed, then pull your mouse away from that point to enlarge its radius (width).

### Editing the Roundabout

Once created, the radius can be altered again by clicking and dragging the outer red control point. The inner control point can also be moved - this will alter radius and rotate the Roundabout around the outer control point.

**Note** if you would like to remove the white center of the Roundabout: Open its Properties, find the **Inner** sub-heading, and alter the fill color to full transparency.

## Parking Lots

Parking lots consist of two tools: The **Road Region** and the **Parking Bay**, both in the **Road Tools** section.

### Road Region

The road region is a section of road that doesn't classify as a "road" per se, due to it being in a different shape. Most often a Road Region is the base are for a Parking Lot.

Drawing a Road Region is simply a matter of placing control points at the edges of the desired area of the Road Region. For details on how to apply curvature between these points, see the [Geometries](/rapid-online/rapidplan-online-basics/geometries.md) section.

### Parking Bays

The **Parking Bay** tool creates the lines in which cars park.

Place **Parking Bays** in the same way any line-type tool is drawn - two control points at either end.

Once placed, the Properties can be changed to alter the line marking style (eg. just the corners of the bays are marked, or the box area of the parking bay is drawn out entirely).

If you are drawing bays for *parallel parking*: Simply increase the width of the bays (**Properties > Parking Bay > Width**) to the length of the parallel parking desired.
