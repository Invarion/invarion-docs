---
sidebar_position: 15.5
tags:
  - markers-devices
  - mapping-geospatial
---

# Chainage markers

The **Chainage Marker** tool creates chainage references along a line, spline, or Bezier path.

![chainage marker](../../release-notes/assets/chainage.png)

## What the tool does

Chainage markers automatically generate:

- Ticks at a chosen spacing.
- Labels showing chainage values.
- A path that can follow linear geometry on the plan.

This is useful for roads, corridors, paths, and other long linear features where you need repeated position references rather than a single measurement.

## Typical workflow

1. Select the **Chainage Marker** tool.
2. Draw or define the path it should follow.
3. Set the tick spacing.
4. Adjust label position, alignment, and orientation in the **Properties palette**.

## Why use chainage instead of distance markers

Use a regular [Distance Marker](./distance-markers) when you need one measured span or a small set of spans.

Use a **Chainage Marker** when you need a continuous sequence of references along a route.

## Related snapping behavior

Chainage markers work best when the source path is drawn accurately. Use [Control points and snapping](/rapidplan/drawing-snapping-and-editing/control-points-and-snapping) to:

- Snap onto existing geometry.
- Follow curved alignments.
- Position labels and ticks more precisely.
