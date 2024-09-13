# Release Notes

## September 2024

### Signs Palette Interface update

The Signs Palette interface has been improved, a large, easy to use screen can now be opened in the center area of the work area.

### New feature: Automated Object Adjustment

The Auto Adjust Objects tool in the Layers palette pins objects in place when rotating the map bearing - keeping their location in comparison to the mapping static.

This can be toggled so that the mapping rotates independent of plan objects if preferred.

### Changed map rotatation point

When changing map bearing the map now rotates around the center of the screen, rather than the origin of a plan.

### Bug fixes

- Issue with point snapping (snapping to the intersect point between two objects) has been resolved.

## August 2024

### Commenting

One can now add comments to a plan and reply to existing comments.
A Comments Palette is shown in the side panel where comments can be placed. Viewers can also create a comment on the Canvas Area by right clicking. Comments are saved in the cloud and are available for all users who have access to the plan.

### Bug fixes

- It was possible to add control points to the object that has fixed number of control points, like insert a control point to the text box.
- Pasted Rich Text objects had watermark in the end of the text.
- Inserting a text object and changing its text did not save the changes.

## May 2024

### Width and height displayed on objects during resizing

Width and height displayed on objects during resizing.

### Hiding context menu when resizing

When performing drag actions like drawing selection box, rotating/resizing selection, the context menu turns opaque and blurs to provide more visible space.

### Potential control point handles

Blue markers between control points are now visible that can be clicked and dragged to easily create new control points.

### New minimized mode for Context Menu

Context menu is now by default displayed in slimmer format below an object, allowing more of the Canvas Area to be displayed.

If preferred the full version of the Context Menu can be returned with a 'maximise' toggle button in the menu.

### Pointer attachment arrows added to objects

Add new arrow features on every side of selection boxes that can be clicked to create a 'pointer' object. 

Pointer objects include arrows, callout boxes, measurements from that object, and arrow text objects.

### Faster Rich Text loading

Rich Text dialog box now loads immediately when opened.

### Bug fixes

- Locale settings are now correctly applied when saving in different browsers.
- Fixed upload folder crash resolved when uploading a folder containing subfolders with plans while root folder has none.
- Fix issue where snapping new object drawing fails sometimes:
  - Arrow to the object;
  - Arrow from the object;
  - Call out box;
  - Etc.

### Arrow button on the corners of selection box has new option to 'Record swept path'

## April 2024

### New object type - Road region

Creates an area of road, often used as the basis for parking lots or for non-uniform drivable areas.

### Updated printing user interface

### Degree of rotation now displayed when rotating object

Small rotation degree indicator is shown when an object is being rotated.

### More changes

- Object transformations applied to objects in the Scratchpad are now preserved when placing object on plan
- Filled Bezier object type can be shown in Legend and Manifest.
- Star icon on the selection has appropriate cursor.

### Bug fixes

- Correct values now shown for Hatch Spacing and Thickness in the property grid for the objects with fill property.
- Invarion Cloud: fix bug when uploading a plan when Shared With Me section is active causes this plan to show up in the section. (It's only UI problem, the actual plan location was correct).
- Proper handling of right click on control point.
- Resolved incorrect zooming in print preview dialog.
- Fix cursor type when dragging append control point handle.
- Resolved plan export crashes when exporting more than 3-4 pages with Linz basemap.

## March 2024

### Rotation handles updated

Change rotation handles style and change cursor style for rotation handles.

### Mouse wheel zooming improved

Mouse wheel scroll over resize and rotation handles triggers zoom in and zoom out.

### Adaptive mouse cursor

Change mouse cursor types to reflect object control points hover/dragging.

### Paste content selector

Added 'paste content' type selector.

### Lane marking tool dimensions fit roads' lane markings

### Parking bay control points updated

Parking bay has 2 control points and Offset now instead of 3 control points.

## February 2024

### Simplified Print Regions

Added Auto Orientation mode of Print Regions.

### Date format options added

Added configurable date formats for different locales other than US (e.g. CA, NZ, AU, GB).

### Updated cursors

Different cursor types are shown on resize handles displaying different action states

### New tool: Number Stamp

Easily stamp a sequential series of numbers on your plan as reference points.

### New tool: Combined Offset Distance Marker

Measure distances with offset values to avoid crowding your work area.

### Create QR code for your plan

QR Code creation modal has a button which allows to create public link to the plan and use it as QR Code value.

### Bug fixes

- Fixed when selecting multiple signs the property panel shows incorrect value for ``Code``.
- Fix problem when objects are snapped to Print Regions even if they are invisible.
- Exported plans now respect updates in Print dialog.
- Right clicking when context menu has been opened now opens RapidPlan Online menu rather than native browser context menu.
- Scratchpad preview issue on mobile devices resolved.
- Code property of sign issue when selecting multiple signs resolved.
- Job Start/Job End dates can be emptied. New plan start with empty start and end job dates.

## January 2024

### Snapping is now available on touch screen devices

### Add control point indicator when starting drawing polyline-like objects (roads, paths, etc.) 

It now clearly indicates that you are placing control points.

### Folder uploading

Upload an entire folder of plans into the Invarion Cloud.

### Plan sharing link management improvement

One can manage a plan's public link directly in its side panel menu in the Invarion Cloud.

### New tool: QR Code

Easily create a QR code on your plan. Place it in the canvas area and type in the URL/link you need the code to link to.

### Print Regions quick access options

New quick access buttons for the following functions featured in the Print Regions panel:

- **Fit to page** - fits the region to the page size;
-  **Fit all to page** - fits all regions to the page size;
-  **Change page size and orientation**.

### New tool: Title block gallery

The Title Block Gallery contains a collection of title blocks available to use. Each with fillable fields, prefilled with text variables that will auto-fill with plan data.

### Bug fixes

- Fix bug when last used print settings are not saved.

## December 2023

### New feature: Snapping

It allows you to snap objects to each other and to the geometries which other objects are made of. It's possible to enable/disable snapping in the top right tool panel by clicking on 'Magnet' button. Swept path snapping and snapping on touch devices are not supported yet.

### New tool: Rich Text

Full support of Rich Text in the Rich Text editing interface.

In addition pasting from other sources (e.g. MS Word, Excel, Google Spreadsheets) is supported.

### Improve performance when selecting large objects.

### Bug fixes

- **Image importing issue resolved** - Imported images now cap in size at 2500x2500 pixels. If image is larger than that, it will be scaled down to fit the limit.
- **Page border in printing preview** - Page border is shown in print preview.
- Minor UI fixes.

## November 2023

### Reordering pages in print dialog

The order of pages can now be clicked to alter their order in the export.

### Error report and share functionality

If something goes wrong during exporting a plan, the user can now share the associated plan for investigation.

### Bug Fixes

- Fixed issue where some old plans cannot be opened.

## October 2023

### Introduce new print service

### New tool: Lane Status Sign 

Addition of lane status sign tool (only for Australia).

### Styles are now allowed for signs and sign stands

### Optimize bundle size

Startup bundle is 20% smaller.

### New feature: Open Street View

Click Open Street view to view Google Street View in a new tab.

### Bug fixes

- Fix bug when incorrect map type is selected during switching between map providers.
- Multi message sign tools now is shown only in Australia (because it's only used in Australia).
- Fix `Shared with me` section when Map view is selected in Invarion Cloud.
- Fix bug when location search panel works incorrectly when user changes plan location multiple times.
- Add confirmation dialog when user tries to create a style with the same name as existing style.

## September 2023

### Opacity property now available for all objects

All objects have opacity property now. It's possible to make objects semi-transparent.

### Add the preview of selection state

### Add option for moving objects to another layer

### Bug fixes

- Styles options for Signs are disabled because signs do not support styles.
- Fix styling of revisions panel.
- Improve stability of the application on iPhone.

## August 2023

### New tool: Buffered Delineator

Create a path of delineators with an offset safety area alongside it.

### Added collapsible panels in the Properties palette

Clicking the small arrow in the sub-headings of an object's Properties will open/close to allow for a more economical use of space.

### Added reverse arrows option for all types of distance markers

### Setting styles of multiple objects

One can now apply style to many objects in the selection if those objects are of the same type.

### Interactive onboarding tutorial for new users

An interactive onboarding tutorial has been added for new users. 

Pre-existing users also can see it through the main menu of RapidPlan Online.

### Android devices have 'Download PDF' button instead of preview in print dialog

### 'Custom dimensions' mode added to Legend and Manifest

One can now resize the size of the box, thus having a multi-column layout.

### Added ``wepb`` support for image Primitives and Title Boxes

### Bug fixes

- **Text Outline** property is now applied properly to text objects.

## July 2023

### Default paper sizes based on user's country

Default paper size in print dialog is selected based on the user license country.

### New feature: Object Styles

One can now save object style Properties as style for later reuse, in addition any saved style can be saved as default for new objects of given type.

## June 2023

### ew feature: Sign Codes

One can show sign codes on the canvas. It can be enabled globally, per plan or individually per sign.

## May 2023

### Progress dialog displayed when engine is booting

Engine booting progress bar displayed to visualise load progress.

### New feature: Adjust Plan Location

It's possible now to move basemap origin for existing plan. The option is available in main menu.

### Read-only mode for those without Rapid Online / Rapid Path Online subscriptions

People who receive a shareable link can now view a read online verions of the plan, allowing the plan to be viewed without needing to export a version.

### Bug fixes

- Small portion of the bottom screen was previously not touchable on mobile devices.
- Object selection boxes pulled from left to right (selecting objects that are entirely within the selection box) had previously selected objects even if only part of the object was selected.
- Added links to video tutorials.

## April 2023

### - New capability for road tool: Add Road Ends

Road ends of different types can now be added in a road's Properties, includingnd flat ends, round ends or cul-de-sac.

### New tool: VMS Board

Allows you to draw VMS boards on the plan. The tool is integrated with Sign Stand tool.

### Bug fixes

- Lane mask occasional dislocated in exports resolved.
- Preview images were not being generated sometimes.
- Improve stability for mobile devices (application could not open plan)
- Fix critical bug when units of measure of distance markers are saved incorrectly.
- Progress bar shows exact percentage of the plan loading progress.

## March 2023

### New tool: Marked Path

Allows you to draw an arrowed path to indicate the direction of travel of something.

### Change application title

### Update manual links

Update manual links in the application menu to point to different manuals for RapidOnline and RapidPath Online.

### Improved progress bar on application startup.

### New feature: Edit text

 Allows you to edit text inside groups and signs without ungrouping them.

 ### Drag and drop support for adding images to a plan

 Images can now be dragged and dropped into plans.

### Bug fixes

- Sign stand no longer loses connection after plan is refreshed.
- UI glitches when focusing sign search input field resolved.
- Delineator drawing style no longer resets after refresh.

## February 2023

### Performance improvements

### New tool: Path Text

Allows you to add text along a given path.

### New tool: Bicycle Lane

Create a bicycle lane.

### Hiding floating selection windows

Selection floating window hides beyond panels when you click somewhere outside of the canvas and goes on top of panels
when you click on the canvas.

### New tool: Callout Box

Creates a callout box or speech bubble.

### Significantly reduced size of the application

### New tool: Arrow Text

Add text with an arrow pointing to a specific location on the map.

### Improve user experience on iPhones

- Implemented 'Add To Home Screen' functionality for mobile devices
- Added 'Home' page which opens when you open RapidOnline from Home screen of mobile device.
- Focus on input fields on iPhones no longer triggers zooming in.
- Added +/- buttons into Transform -> Custom panel input fields for touch devices so that one can change the value without using virtual keyboard.

### Add completely new UI layout for narrow screens 

i.e. narrower than 1024px (e.g. mobile phones).

### Buttons for showing/hiding tool columns moved to the side of each panel respectively.

### Bug fixes

- Delineator tool bug caused by zero value in Spacing has been resolved.
- Fix the bug when centering plan after loading using 'Zoom to objects' when total bounds of the plan are near zero causes
the application to crash.

## January 2023

### Complete rework of live save functionality

- Significantly improved reliability;
- Added local backups of unsaved changes;
- Add ability to restore unsaved changes from local backup.


### Change in default behavior of Work Zone and Delineator

Work Zone and Delineator are now shown in legend by default.

### New tool: Roundabout

Create a roundabout for a road.

### New tool: Scale Marker

Create a scale marker for your plan exports.

### Fine grained zoom control

Allows for precise zoom configuration in the print preview dialog.

It also shows proper page scale and allows for setting scale 100%. If you export a plan with scale 100%,
the printed plan will have correct dimensions (e.g. 1 unit of metric Scale Marker will be exactly 1 cm on the paper).

###  Linz basemap provider implemented (only for NZ users).

Linz map is a New Zealand specific mapping provider that has been implemented.

### Bug fixes

- Application no longer crashes when you try to save a plan and rename it at the same time.
- Fix behavior of 'Fit vertically' and 'Fit horizontally' buttons in the print preview dialog.

## December 2022

### Show/hide coordinates on the map

Added option to show/hide coordinates on the map.

### Custom plan scale

Set your plan to any scale of your choosing.

Example objects shown during the setting of a plan's scale have also been improved.

## November 2022

### Scratchpad tabs

Scratchpad objects can now be organised within labelled tabs.

### Improved print region preview

Added page preview.

## October 2022

### Paste improvements

- Add support for pasting plain text as text object from clipboard.
- Add support for pasting images as raster.

## September 2022

### Map bearing

Ability to rotate the map which allows you to draw better looking plans.

North arrow object and north arrow within title block are automatically rotated to match the map bearing.
