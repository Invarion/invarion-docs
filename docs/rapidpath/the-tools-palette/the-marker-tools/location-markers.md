---

sidebar_position: 10.5

---

# The Location Marker

The Location Marker is an annotion tool in the form of a small labelled pin that can be used to indicate the location of particular points of interests on a plan.

![location marker in use](./assets/location-marker2.png)

The location marker tool is found in Annotation category of the [Tools Palette](./assets/location-marker%20-%20small.png)
Once it's selected, simply click on the Canvas Area where you would like a marker to be located. If a Location Marker is moved, by default the coordinates displayed will adjust in kind.

If you would like to place a marker at a known coordinate rather than placing it on a landmark seen on the plan, the [Dimension Input Panel](/docs/rapidpath/object-properties-and-transformations/dimension-input-panel.md) can be used: Simply select the Location Marker tool, click the letter **C** on your keyboard, and then type or paste your coordinates into the dialog box and click **Enter**.

 ![dimensions input panel - location marker](./assets/location-marker-dim-input.png)

## Properties of the Location Marker

### Icon

- Style: Change the icon type of a pin on the plan (flag, pin, marker icon etc.).
- Size: Size of pin.
- Stroke: Adjust the outline of the pin.
- Fill: Color of the pin.

### Text

- Mode: *Default* will display the coordinates of the pin in text depending on where you place the pin, *Custom Text* allows you to write whatever details you prefer.
- Font: Adjust the font.
- Centered: Toggle whether text is centered or offset.
- Coords format: Toggle whether coordinates displayed are in *Decimal Degress* (**DD**), or *Degrees Minutes Seconds* (**DMS**).

### Box

Adjust appearance of the background box behind the text of the pin.

### Connector

Adjust appearance of the line connecting the text box to the pin.

## Batch Edit Location Markers

In RapidPath coordinates are tracked in the WGS84 coordinate system, in either 'Decimal Degrees', or 'Degrees, Minutes, Seconds'. There are however circumstances in which you might choose to refer to a coordinate point on your plan by a different coordinate system.<br/> The Batch Edit Location Markers tool has been designed for such a scenario.

To use it, first place location markers in your chosen locations, then select them all (perhaps by selecting one and then clicking **Ctrl+Shift+A** to select all 'like' objects).<br/>aThen click **Tools > Advanced Tools > Batch Edit Location Markers**.
![batch edit location markers - toolbar](./assets/batch%20edit%20location%20markers%20-%20menu.png)

The dialog window below will appear, with the existing locations displayed on the left:
![batch edit location markers - dialog box](./assets/batch%20edit%20location%20markers%20-%20batch%20edit.png)

Above the list of locations is a dropdown box which can toggle the means of expression for the existing locations (Degrees Decimal or 'DD' by default).<br/>
To the right of this is a button to Copy the existing coordinates.

In the text box in this view labelled **Marker texts**, one can input anything that you would like to display at the marker location on the same line in the **Locations** field to its left.

As detailed below, one popular use for this functionality in New Zealand is to convert and replace the existing locations with **Mobile Roads** coordinates.

### Importing Mobile Roads coordinates

1. Place your location markers on a plan in your chosen locations, then select them all.<br/>
Click Tools > Advanced Tools > Batch Edit Location Markers. Then click the Copy button in middle of the dialog box.
![mobile roads export](./assets/mobile%20roads%20conversion%200.png)

2. Visit [https://www.mobileroad.org/converter.html](https://www.mobileroad.org/converter.html).<br/>
In the top-left, toggle Input to **WGS84**, and paste the coordinates into the 'Latitude, Longitude' field on the left.
![mobile roads conversion 1](./assets/mobile%20roads%20conversion%201.png)

3. Click **Convert**, before copying Output type required on the right, selecting the entire contents of the text box before copying all of it at once.
![mobile roads conversion 2](./assets/mobile%20roads%20conversion%202.png)

4. Returning to RapidPath, **Paste** the converted coordinates into the field on the right.
![mobile roads conversion 3](./assets/mobile%20roads%20conversion%203.png)

Once you click **Ok**, the converted coordinates will appear above the corresponding location markers.

![mobile roads conversion 4](./assets/mobile%20roads%20conversion%204.png)

**Note:** Once converted, the location marker's coordinates will not update if the marker is moved to a different point on the plan.
