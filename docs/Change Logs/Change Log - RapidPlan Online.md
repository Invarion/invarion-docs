---
keywords:
  - docs
  - rapidonline
  - new features
  - release notes
description: RapidOnline change log
---

# What's new in RapidOnline

This document contains short description of RapidOnline product monthly releases.

## February 2024

- Add Auto orientation mode of print regions.
- Add configurable date formats for different locales other than US (e.g. CA, NZ, AU, GB).
- Different cursor types are shown on resize handles displaying different action states.
- When selecting multiple signs the property panel shows incorrect value for ``Code``.
- Fix problem when objects are snapped to print regions even if they are invisible.
- Add new tool: 'Number Stamp'.
- Add new tool: 'Combined Offset Distance Marker'.
- Bug fixes:
  - Exported plan does not respect updates in Print dialog
  - When right clicking when context menu has already been opened opens native browser context menu;
  - Scratchpad preview is broken on mobile devices.
  - Code property of sign works incorrectly when selecting multiple signs.
- Job Start/Job End dates can be emptied. New plan start with empty start and end job dates.
- QR Code creating modal has a button which allows to create public link to the plan and use it as QR Code value.

## January 2024

- Snapping is now available on touch devices.
- Add indicator when starting drawing polyline-like objects (roads, paths, etc.) so that it's clearly visible that you're placing control points.
- Uploading entire folder with plans in Invarion Cloud.
- One can manage public link directly in side panel in Invarion Cloud.
- Add new tool: 'QR Code'.
- Quick access for different actions for Print Regions directly from Print Regions panel:
  1. 'Fit to page' - fits the region to the page size;
  1. 'Fit all to page' - fits all regions to the page size;
  1. Change page size and orientation.
- New feature: 'Title block gallery'. It contains the old title block as first element along with new provided by Invarion. One can modify those title blocks to suit one's needs and save them to scratchpad for later use.
- Fix bug when last used print settings are not saved.

## December 2023

- Imported images have cap on the size of 2500x2500 pixels. If image is larger than that, it will be scaled down to fit the limit.
- Improve performance when selecting large objects.
- New feature: 'Snapping'. It allows you to snap objects to each other and to the geometries which other objects are made of. It's possible to enable/disable snapping in the top right tool panel by clicking on 'Magnet' button. Swept path snapping and snapping on touch devices are not supported yet.
- New tool: 'Rich text'. Full support of rich text. In addition pasting from other sources (e.g. MS Word, Excel, Google Spreadsheets) is supported.
- Page border is shown in print preview.
- Minor UI fixes.

## November 2023

- UI improvements in the print dialog. Now it's possible to select multiple pages and reorder them at once.
- Fix issue where some old plans cannot be opened.
- If something goes wrong during exporting a plan, the user can share plan for investigation immediately.

## October 2023

- Introduce new print service.
- Multi message sign tools now is shown only in Australia (because it's only used in Australia).
- New tool: Lane Status Sign (only for Australia).
- Styles are now allowed for signs and sign stands.
- Fix bug when incorrect map type is selected during switching between map providers.
- Optimize bundle size. Startup bundle is 20% smaller.
- Add new option in right click menu: 'Open street view'. It opens Google Street View in a new tab.
- Fix `Shared with me` section when Map view is selected in Invarion Cloud.
- Fix bug when location search panel works incorrectly when user changes plan location multiple times.
- Add confirmation dialog when user tries to create a style with the same name as existing style.

## September 2023

- All objects have opacity property now. It's possible to make objects semi-transparent.
- Add the preview of selection state.
- Add option for moving objects to another layer.
- Bug fixes:
  - Styles options for Signs are disabled because signs do not support styles.
  - Fix styling of revisions panel.
  - Improve stability of the application on iPhone.

## August 2023

- New tool: Buffered delineator
- Add collapsible panels in the property grid
- Add reverse arrows style for all types of distance markers
- One can apply style to many objects in the selection if those objects are of the same type
- Add interactive onboarding tutorial for new users. Old users also can see it through main menu of RapidOnline
- Android devices have 'Download PDF' button instead of preview in print dialog
- Legend and manifest got 'Custom dimensions' mode where one can resize the size of the box thus having a multi-column layout
- Add ``wepb`` support for image primitives and Title boxes
- Fix bug when *Text Outline* property was not applied properly to text objects

## July 2023

- Default paper size in print dialog is selected based on the user license country.
- New feature: Object Styles: one can save object style properties as style for later reuse, in addition any saved style can be saved as default for new objects of given type.

## June 2023

- New feature: Sign codes. One can show sign codes on the canvas. It can be enabled globally per plan or individually per sign.

## May 2023

- Progress dialog when engine is booting. Engine booting may take substantial time on mobile devices, now there's an indication that application is not frozen but does actual work.
- New feature: adjust plan location. It's possible now to move basemap origin for existing plan. The option is available in main menu.
- Bug fixes:
  - Small portion of the bottom screen was not touchable on mobile devices.
  - For some objects 'contains' mode selection (from left to right) picked the object anyway even if only part of the object was selected.
- Add links to video tutorials.
- Read-only mode for the users without Rapid Online / Rapid Path Online subscription.

## April 2023

- Small bug fixes:
  - Lane mask sometimes is dislocated on the export.
  - Preview images are not being generated sometimes.
- Improve stability for mobile devices (application could not open plan)
- New capabilities for road tool, one can assign end types - none, flat, round or cul-de-sac.
- New tool: 'VMS Board' - allows you to draw VMS boards on the plan. The tool is integrated with Sign Stand tool.
- Fix critical bug when units of measure of distance markers are saved incorrectly.
- Progress bar shows exact percentage of the plan loading progress.

## March 2023

- New tool: 'Marked path' - allows you to draw a path with markings on it.
- Change application title.
- Update manual links in the application menu to point to different manuals for RapidOnline and RapidPath Online.
- Improve progress bar on application startup.
- RapidPath Online - increase maximum speed limit to 120 km/h.
- Bug fixes:
  - Sign stand looses connection after refresh
  - UI glitches when focusing sign search input field
  - Delineator drawing style resets after refresh.
- New feature: 'Edit text' - allows you to edit text inside groups and signs without ungrouping them.
- Drag and drop support for adding images to the plan.

## February 2023

- Performance improvements.
- New tool: 'Path text' - allows you to add text along a path.
- New tool: 'Bicycle lane'.
- Selection floating window hides beyond panels when you click somewhere outside of the canvas and goes on top of panels
when you click on the canvas.
- New tool: 'Callout box'.
- Delineator tool may no longer have zero spacing. Entering zero value causes application to crash.
- Fix the bug when centering plan after loading using 'Zoom to objects' when total bounds of the plan are near zero causes
the application to crash.
- Significantly reduced size of the application.
- Improve user experience on iPhones: focus on input fields do not trigger zooming in.
- New tool: 'Arrow Text' - allows you to add text with arrow pointing to a specific location on the map.
- Implement 'Add To Home Screen' functionality for mobile devices.
  - Add 'Home' page which opens when you open RapidOnline from Home screen of mobile device.
- Add +/- buttons into Transform -> Custom panel input fields for touch devices
so that one can change the value without using virtual keyboard.
- Add completely new UI layout for narrow screens i.e. narrower than 1024px (e.g. mobile phones).
- Buttons for showing/hiding tool columns moved to the side of each panel respectively.

## January 2023

- Fix behavior of 'Fit vertically' and 'Fit horizontally' buttons in the print preview dialog.
- Complete rework of live save functionality:
  - Significantly improved reliability;
  - Add local backups of unsaved changes;
  - Add ability to restore unsaved changes from local backup;
  - Application no longer crashes when you try to save a plan and rename it at the same time.
- Change in default behavior of Work Zone and Delineator: they are shown in legend by default.
- New tools added:
  - Roundabout
  - Scale marker
- Fine grained zoom control: allows for precise zoom configuration in the print preview dialog.
It also shows proper page scale and allows for setting scale 100%. If you export a plan with scale 100%,
the printed plan will have correct dimensions. E.g. 1 unit of metric Scale Marker will be exactly 1 cm on the paper.
- Linz basemap provider (only for NZ users).

## December 2022

- Add option to show/hide coordinates on the map.
- Custom plan scale allows you to set any scale outside of the pop-up list.
- Improve example objects showing plan scale.

## November 2022

- Scratchpad tabs: ability to create custom tabs under scratchpad.
- Improve print region preview, added page preview.

## October 2022

- Paste improvements:
  - Add support for pasting plain text as text object from clipboard.
  - Add support for pasting images as raster.

## September 2022

- Map bearing: Ability to rotate the map which allows you to draw better looking plans.
North arrow object and north arrow within title block are automatically rotated to match the map bearing.
