---

sidebar_position: 3

---

# Road Marking Tools

## The Lane Marker tool

The automatic lane markings on the road always perfectly follow the curve of the road. Sometimes you will need to create something different, so RapidPath has a custom lane marker tool. In a lot of cases, you will use the Lane Marker tool in conjunction with the lane mask tool. The example below will show you how to combine the two.

In this example we will replace the current dash lane marker with the solid double line lane marker.

Firstly, we need to remove part of the existing lines. We do this with the lane mask tool (see [The Lane Mask tool](./the-lane-marker-tool.md)).

Next we select the lane marker tool and draw in the edge merge the line.

**To create a new lane marking:**

- Hover your cursor over **Markings** in the Tools palette.
- Select the **Lane Marker** tool.
- Click once on your road where you want to start.
- Move the mouse, clicking to place turn points as required.
- When you are finished, right click to stop drawing.
- Right click again to clear the cursor.

    ![Using_a_Lane_Marker](./assets/Using_a_Lane_Marker.png)

You can change the lane marker to any of the standard lane styles (Dashed, Solid, SolidDash, DashSolid and Double) or change its color by accessing its properties screen. You can also set Lane Marker Defaults the same way you set the Road Defaults as specified in section [Setting a Default Road Style](/docs/rapidplan/the-road-tool/setting-a-default-road-style.md).

**To change the properties of a lane marking:**

- Double click on the lane marking
- On its properties screen, make any required alterations to the type and color of the line
- Click Ok to accept the changes

## The Flush Median Tool

This tool works like any Polygon where you click to place each of its corners and can adjust the control points to get the shape you need.

![A_Flush_Median_tool](./assets/A_Flush_Median_tool.png)

## The Chevron Flush Median Tool

This tool also works like a polygon, with the first click forming the tip of the chevron.

**To place the chevron flush median tool:**

- Select the Chevron Flush Median tool from the Markings tab in the Tools Palette
- Your first click will be the top point of the shape (in the direction of the chevron)
- Then click for all other consecutive points
- Right click to finish

    ![Chevron_Flush_Median_tool](./assets/Chevron_Flush_Median_tool.png)
