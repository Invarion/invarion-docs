---
sidebar_position: 4
tags:
  - print-export
  - mapping-geospatial
  - import
---

# CAD export

RapidPlan can export plans to CAD when you need to hand work over to AutoCAD-based or GIS-adjacent workflows.

![cad export](../../release-notes/assets/cad_export.png)

## Supported output

RapidPlan supports CAD export to:

- `DWG`
- `DXF`

## What CAD export is for

Use CAD export when you need to:

- share a **traffic control plan** with CAD users
- place RapidPlan output into a wider design drawing set
- preserve georeferenced output for downstream spatial workflows
- export either worksite drawing content or print-frame content

## Modelspace and paperspace

RapidPlan supports both:

- **modelspace** for the main drawing content
- **paperspace** for print-frame based page layouts

That means the exported file can represent either the site geometry itself, the prepared print layout, or both depending on how your plan is set up.

## Import and export georeferenced CAD

Use georeferencing to keep CAD data aligned with its real-world location when moving it between RapidPlan and CAD or GIS software.

### Before you begin

- Open or create a RapidPlan plan with a location and basemap.
- Confirm the coordinate system used by the source or destination workflow. You may need its EPSG code.
- For an import, keep any accompanying `.prj` file in the same folder as the `.dwg` or `.dxf` file.

### Import georeferenced CAD

1. Open **Tools** > **Import** > **Spatial Data**.
2. Select **Add Import Provider**.
3. Set **Provider type** to **CAD**, then open the `.dwg` or `.dxf` file.
4. Review the file path and detected layer count.
5. Set **CAD Layout** to **Model**.
6. Select **Use georeference**.
7. Select the displayed spatial reference to open **GIS Data Spatial Reference Selection**.
8. Search for the required spatial reference by EPSG code and select it.
9. Select or clear **Invert Lat/Long** as required by the coordinate system, then select **Select**.
10. Select **Add**.

![CAD provider and spatial reference settings for a georeferenced import](./assets/import-georeferenced-cad-settings.png)

The CAD preview should appear at its mapped location. If it is outside the current view, select **Scroll to the nearest visible feature** in the **Import Spatial Data** window.

![Scroll to the nearest visible feature button in the Import Spatial Data window](./assets/locate-imported-cad.png)

Select the features you need, then select **Import Selected Data**. Finish the import when the required geometry is on the plan.

### Export a georeferenced print region

1. Open **Preferences** > **Advanced Settings**.
2. Under **CAD export**, set **Use georeference** to **True**.
3. Select **Spatial reference**, then choose the coordinate system required by the destination workflow.

   ![Georeference options under CAD export in Advanced Settings](./assets/cad-export-georeference-settings.png)

4. Return to the plan and activate the required **print region**.
5. Right-click **Print**, then select **Export this region** and the CAD export option.
6. Choose the destination and save the export.

RapidPlan creates a CAD file and a matching `.prj` file containing the spatial reference. Keep both files in the same folder. If you import the CAD file into RapidPlan later, RapidPlan can use the `.prj` file to select its spatial reference automatically.

### Export georeferenced CAD in a batch

1. Open **File** > **Export** > **Batch Export**.
2. Add the required open plans or plan files, then select the regions to export.
3. Set **Format** to **CAD** and choose `DWG` or `DXF`.
4. Optional: Select **Export signs as image** if signs should be rasterized in the CAD output.
5. Select **Use georeference**.
6. Select the spatial reference shown below **Use georeference**, then choose the required coordinate system.
7. Select **Export**.

![CAD format and georeference options in Batch Export](./assets/batch-export-georeference-settings.png)

The exported CAD files use the selected spatial reference. Keep each generated `.prj` file with its matching CAD file.

## When to use other export types instead

Use **PDF** or image export when you mainly need something to print, review, email, or attach to approvals.

Use **CAD export** when the recipient needs editable drawing data or spatially aligned output.

## Related articles

- [Spatial data import](/rapidplan/basemaps-and-spatial-data/importing-external-data/spatial-data-import)
- [Batch print and export](./batch-print-and-export)
- [Printing plans](./printing-plans)
- [Georeferenced image export](./georeferenced-image-export)
