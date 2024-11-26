---

sidebar_position: 4

---
# Preparing Swept Path Analysis

## Adding a vehicle to the plan

The first step in creating the Swept Path Analysis is adding a vehicle to your plan. To do this, open the Vehicle Library by selecting the Vehicle tool from the Tools Palette. In the Vehicle Library window, choose the standard and vehicle you are interested in and click the "Add" button at the bottom of the window. Now place the vehicle onto your plan with the left mouse button.

![Adding Vehicle](./images/Adding_Vehicle.png)

If you want to use different vehicle's parameters you can change them in Vehicle Library before clicking the "Add" button. These changes will not be saved into the Library, they will only apply to the vehicle that will be added to the plan.

Vehicles in RapidPath can be positioned and rotated just like any other object. But, their size is automatically adjusted to the plan's scale and cannot be changed. You can also copy/cut and paste vehicles.

![Vehicle object on the plan](./images/Vehicle_object_on_the_plan.png)

When clicking on a vehicle you can check its most important parameters inside the Object Properties window.

## Editing an existing vehicle

To edit the existing vehicle double click on it with the left mouse button. The Edit Vehicle window will appear. Here you can change all the parameters and save them to the vehicle object on your plan. You can also use the same window to replace the current vehicle with another one.

![Edit Vehicle window](./images/Edit_Vehicle_window.png)

If you want to only edit the "Lock to Lock" parameter you can select the vehicle and do it inside an Object Properties window. Object Properties can also be used to style the vehicle which is very useful when using multiple vehicles with similar shapes on the same plan.

![Vehicle's properties inside the Object Properties window](./images/Vehicle_object_and_its_properties.png)

## Creating a vehicle path

To start drawing a Vehicle Path select the vehicle on your plan and click on the arrow in front of it to begin driving forward, or the smaller rear arrow to reverse. You can also click on the vehicle with the right mouse button and choose "Vehicle" sub-menu and "Draw Path" option.

![Selected Vehicle object with the arrow that indicates forward movement direction](./images/Selected_Vehicle_object_with_the_arrow_that_indicates_forward_movement_direction.png)

Once you have begun to draw a path two things will appear:

- A **Predicted Movement Area Cloud** - Displayed for your reference, displaying how tight an arch the vehicle can turn in, given the constraints that have been applied.
- The **Section Details interface** - Details below.

### The Section Details interface

When in the process of drawing a path, a special window called **Section Details** will appear with settings for:

- **Speed** - Vehicle speed.
- **Friction** - Lateral friction factor dependent on the vehicle speed and calculated according to the chosen standard. To set a custom value disable speed and friction dependency by clicking on the link/unlink toggle button on the left and enter the desired value in the field.
- **Turn on Stop** - Turning this option on ("True") allows the vehicle to make a stop and turn the front wheels between different sections (at control points) of the Vehicle Path.

Information such as:

- **Min radius** - Minimum turning radius (centerline) of the vehicle at the given speed and friction.
- **Max angle** - Maximum turn angle of the vehicle at the given speed and friction.
- **Max speed** - Maximum speed for the vehicle taking into account standard guidelines, given speed, friction and current turn radius.

As well as settings for altering the appearance of the **Predicted Movement Area Cloud**:

- **Show** - Whether the Predicted Movement Area Cloud is visible while drawing.
- **Outline Color** - Alter the outline of the Cloud.
- **Color** - Alter the fill color of the Cloud.
- **Opacity** - Alter the opacity of the fill color of the Cloud.

![Sections details window](./images/Sections_details_window.png)

## Drawing the vehicle path

After setting the speed, friction and "Turn on Stop" option you can start drawing the path. To do this, indicate the points on the canvas area by clicking the left mouse button. These points are called "Control Points" and can be adjusted later. Each point creates another section of the Vehicle Path.
Each section can have different parameters such as speed, friction and turn on stop setting.
You can adjust section parameters before making each point to create a path that consists of sections with different speeds, friction and other parameters.
Alternatively, the section parameters can be adjusted after drawing the path. To do so, select the whole path, then while holding **Ctrl**, click the section you would like to alter to select it. Once a sepecific section of the path is selected, changes made in the **section details** dialog box will apply to that section specifically.

![Drawing a vehicle path](./images/Drawing_a_vehicle_path.png)

You can only create a path within the maneuverability capabilities of the current vehicle at given parameters such as speed, friction, lock to lock time, etc, as shown by the **Predicted Movement Area Cloud**. You'll also note the turn angle indicator will turn red when the maximum turn angle is reached.

![Angle indicator when drawing the path](./images/Angle_indicator_when_drawing_the_path.png)

Use Undo ("Ctrl+z") and Redo ("Ctrl+y") options while creating Vehicle Path to avoid wrongly placed or unwanted points. Additionally, you can edit your path later, when it is finished. Finish drawing the path by clicking with the right mouse button or pressing the "Esc" key.
Once the Vehicle Path is finished it turns into a separate object that can be freely moved and rotated. You can delete the Vehicle Path without deleting the vehicle.

![Finished vehicle path](./images/Finished_vehicle_path.png)

## Editing a vehicle path

After the Vehicle Path is finished you can edit and adjust it using these methods:

1. **Editing the parameters of the path's sections** - You can edit each section's parameters such as Speed, Friction and Turn on Stop. To select a section, first select the path, then click on the section you want to change with the left mouse button while holding "Ctrl" key. Once the section is selected, it will highlight red and a "Section details" window will appear. You can also select multiple sections by clicking on them one by one while holding "Ctrl" key.

![Selected section of the vehicle path](./images/Selected_section_of_the_vehicle_path.png)

1. **Editing control points** - You can change Vehicle Path's geometry by moving control points. Select the path, then click on one of the red circles and drag while holding the left mouse button. It is possible that you won't be able to move it freely because its position can be bounded by vehicle's manoeuvrability capabilities (sections' properties, other control points).
You can also remove the control point by clicking on it with the right mouse button and choosing "Remove control point" option from the context menu.

1. **Continuing the path** - You can continue drawing already finished path. To do this simply click with the right mouse button on the path you want to expand, then choose the "Continue path" option from the "Vehicle path" sub-menu. Continuing the path works the same way as drawing the path.

![Continuing the path option in the context menu](./images/Continuing_the_path_option_in_the_context_menu.png)

## Evaluating a path

Once you are happy with the layout of your path, you can review how it fits through the area you are designing in by carefully reviewing if the **Path Envelope** stays within the bounds of the space you have chosen in the background.

![Evaluation progress bar and sweep envelope](./images/Path-envelope.jpg)

If you need more information - such as whether the vehicle's tires track within certain spaces, whether an amount of **clearance** beyond the vehicle's swept path needs to be added, or other things - you can edit the style of the path in **Properties** before evaluating again.

Changes to a swept path's **Properties** are discussed in the [next section](./swept-path-analysis-properties.md)

## Adding additional vehicles to the path

You can add additional vehicle objects to the path to:

- Better visualize results of your analysis;
- Check position/behavior of the vehicle and trailers at a specific point along the path; and
- Start a new analysis from a selected point on the existing path to make multiple connected analyses or different route variants.
  
To add additional vehicles to the path, click on it with the right mouse button and choose the "Add vehicle" option from the "Vehicle path" sub-menu. Now place the vehicles along the path by clicking with the left mouse button. When finished press the right mouse button or "Esc" key. These are ordinary vehicle objects that can be moved, edited and even replaced with other vehicles. You can also start a new swept path analysis from them.

![Additional vehicles added to the existing vehicle path](./images/Additional_vehicles_added_to_the_existing_vehicle_path.png)

![Swept path analysis with different route variant](./images/Swept_path_analysis_with_different_route_variant.png)
