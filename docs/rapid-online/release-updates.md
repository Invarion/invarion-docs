---
keywords:
  - docs
  - rapidonline
  - new features
  - release notes
description: RapidOnline release notes
---

# What's new in RapidOnline

This document contains short description of RapidOnline product monthly releases.

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
