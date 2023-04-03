# 5. Preparing Swept Path Analysis

## 5.1 Adding Vehicle to the Plan

The first step in creating the Swept Path Analysis is adding a [vehicle](Definitions) to your plan. To do this, open the Vehicle Library by selecting the Vehicle tool from the Tools Palette. In the Vehicle Library window, choose the standard and vehicle you are interested in and click the "Add" button at the bottom of the window. Now place the [vehicle](Definitions) onto your plan with the left mouse button.

![Adding Vehicle](Resources/Adding_Vehicle.png)

<!-- _Figure 5.1.1 Adding Vehicle_ -->

If you want to use different vehicle's parameters you can change them in Vehicle Library before clicking the "Add" button. These changes will not be saved into the Library, they will only apply to the [vehicle](Definitions) that will be added to the plan. 

[Vehicles](Definitions) in RapidPath can be positioned and rotated just like any other object. But, their size is automatically adjusted to the plan's scale and cannot be changed. You can also copy/cut and paste [vehicles](Definitions).

![Vehicle object on the plan](Resources/Vehicle_object_on_the_plan.png)

<!-- _Figure 5.1.2 Vehicle object on the plan_ -->

When clicking on a [vehicle](Definitions) you can check its most important parameters inside the Object Properties window.

## 5.2 Editing an Existing Vehicle

To edit the existing [vehicle](Definitions) double click on it with the left mouse button. The Edit Vehicle window will appear. Here you can change all the parameters and save them to the [vehicle](Definitions) object on your plan. You can also use the same window to replace the current [vehicle](Definitions) with another one.

![Edit Vehicle window](Resources/Edit_Vehicle_window.png)

<!-- _Figure 5.2.1 Edit Vehicle window_ -->

If you want to only edit the ["Lock to Lock"](Definitions) parameter you can select the [vehicle](Definitions) and do it inside an Object Properties window. Object Properties can also be used to style the [vehicle](Definitions) which is very useful when using multiple vehicles with similar shapes on the same plan.

![Vehicle object and its properties](Resources/Vehicle_object_and_its_properties.png)

<!-- _Figure 5.2.2 Vehicle's properties inside the Object Properties window_ -->

## 5.3 Drawing a Vehicle Path

To start drawing a [Vehicle Path](Definitions) select the [vehicle](Definitions) on your plan and click on the arrow in front of it. Arrow indicates the forward movement direction of the vehicle. You can also click on the [vehicle](Definitions) with the right mouse button and choose "Vehicle" sub-menu and "Draw Path" option.

![Selected Vehicle object with the arrow that indicates forward movement direction](Resources/Selected_Vehicle_object_with_the_arrow_that_indicates_forward_movement_direction.png)

<!-- _Figure 5.3.1 Selected Vehicle object with the arrow that indicates forward movement direction_ -->

When in "Draw Path" mode a special window called "Section details" will appear with settings for:

- **Speed** - Vehicle speed.
- **Friction** - Lateral friction factor dependent on the vehicle speed and calculated according to the chosen standard. To set a custom value disable [speed and friction dependency](Definitions) by clicking on the link/unlink toggle button on the left and enter the desired value in the field.
- **Turn on Stop** - Turning this option on ("True") allows the vehicle to make a stop and turn the front wheels between different [sections](Definitions) (at control points) of the [Vehicle Path](Definitions).

and info such as:

- **Min radius** - Minimum turning radius (centerline) of the vehicle at the given speed and friction.
- **Max angle** - Maximum turn angle of the vehicle at the given speed and friction.
- **Max speed** - Maximum speed for the vehicle taking into account standard guidelines, given speed, friction and current turn radius.

![Sections details window](Resources/Sections_details_window.png)

<!-- _Figure 5.3.2 Sections details window_ -->

After setting the speed, friction and "[Turn on Stop](Definitions)" option you can start drawing the path. To do this, indicate the points on the canvas area by clicking the left mouse button. These points are called "Control Points" and can be adjusted later ([Chapter 5.7 Editing a Vehicle Path](#57-editing-a-vehicle-path)). Each point creates another [section](Definitions) of the [Vehicle Path](Definitions). Each [section](Definitions) can have different parameters such as speed, friction and [turn on stop](Definitions) setting. You can adjust section parameters before making each point to create a path that consists of sections with different speeds, friction and other parameters. Alternatively, the section parameters can be adjusted after drawing the path.

![Drawing a vehicle path](Resources/Drawing_a_vehicle_path.png)

<!-- _Figure 5.3.3 Drawing a vehicle path_ -->

You can only create a path within the maneuverability capabilities of the current [vehicle](Definitions) at given parameters such as speed, friction, [lock to lock time](Definitions), etc. Observing a real-time preview of the [vehicle](Definitions) and turn angle indicator during drawing will help you make the desired path. The turn angle indicator will turn red when the maximum turn angle is reached.

![Angle indicator when drawing the path](Resources/Angle_indicator_when_drawing_the_path.png)

<!-- _Figure 5.3.4 Angle indicator when drawing the path_ -->

Use Undo ("Ctrl+z") and Redo ("Ctrl+y") options while creating [Vehicle Path](Definitions) to avoid wrongly placed or unwanted points. Additionally, you can edit your path later, when it is finished. More about this in [Chapter 5.7 Editing a Vehicle Path](Preparing-Swept-Path-Analysis#57-editing-a-vehicle-path). Finish drawing the path by clicking with the right mouse button or pressing the "Esc" key. Once the [Vehicle Path](Definitions) is finished it turns into a separate object that can be freely moved and rotated. You can delete the [Vehicle Path](Definitions) without deleting the [vehicle](Definitions).

![Finished vehicle path](Resources/Finished_vehicle_path.png)

<!-- _Figure 5.3.5 Finished vehicle path_ -->

## 5.4 Evaluating a Path

In order to obtain [Sweep Envelope](Definitions) (the result of the analysis), the [Vehicle Path](Definitions) needs to be evaluated. To evaluate a path, select it with the right mouse button, choose "Vehicle Path" sub-menu and then "Evaluate" option. You can also use the "Evaluate" button inside the Vehicle Path's properties in the Object Properties window. To do so, search for "Swept path" group and "Show" property.

![Evaluate button in the context menu and Object Properties window](Resources/Evaluate_button_in_the_context_menu_and_Object_Properties_window.png)

<!-- _Figure 5.4.1 Evaluate button in the context menu and Object Properties window_ -->

Note that the evaluation process can take a while for particularly long paths. You can track the green progress bar that goes along the path during the calculation.

![Evaluation progress bar and sweep envelope](Resources/Evaluation_progress_bar_and_sweep_envelope.png)

<!-- _Figure 5.4.2 Evaluation progress bar and sweep envelope_ -->

Making changes to the already [evaluated path](Definitions) will cause the existing [Sweep Envelope](Definitions) (now obsolete) to disappear, requiring the path to be re-evaluated. Sweep Envelopes are not saved to the plan's file but are visible in the print and export upon evaluation. You can evaluate all the [Vehicle Paths](Definitions) in the active diagram by clicking the right mouse button anywhere on the canvas area and choosing the "Evaluate Paths" option. 

[Sweep Envelope](Definitions) can be styled using Vehicle Path's properties in the Object Properties window.

## 5.5 Clearance Envelope

Clearance Envelope will allow you to add offset to the [Sweep Envelope](Definitions) to accommodate for driver error or real world situations. It can only be displayed on the [evaluated Vehicle Path](Definitions). To turn on Clearance Envelope go to the "Clearance" section in path's properties and change "Show" property to "Filled" or "Outline". You can edit the clearance envelope offset distances in the "Clearance" section of the path's properties. Making changes to the clearance offset will require re-evaluation of the path.

![Clearance Envelope and its offset settings in the Object Properties window](Resources/Clearance_Envelope_and_its_offset_settings_in_the_Object_Properties_window.png)

<!-- _Figure 5.5.1 Clearance Envelope and its offset settings in the Object Properties window_ -->

## 5.6 Styling Vehicle Path, Sweep Envelope and Clearance

[Vehicle Path](Definitions), [Sweep Envelope](Definitions) and Clearance can be styled in many different ways using Vehicle Path's properties in the Object Properties window. Aside from visual customization, you can also:

- Add wheel paths separately for front and rear wheels;
- Add speed information to [path sections](Definitions);
- Show/hide directional arrows that indicate the start of each [path section](Definitions); and
- Show/hide vehicles along the path.

![Extra styling options for vehicle path - 1](Resources/Extra_styling_options_for_vehicle_path_-_1.png)

<!-- _Figure 5.6.1 Overview of extra options in vehicle path's properties_ (1/2) -->

![Extra styling options for vehicle path - 2](Resources/Extra_styling_options_for_vehicle_path_-_2.png)

<!-- _Figure 5.6.2 Overview of extra options in vehicle path's properties_ (2/2) -->

## 5.7 Editing a Vehicle Path

After the [Vehicle Path](Definitions) is finished you can edit and adjust it using these methods:

1. **Editing the parameters of the path's sections** - You can edit each [section](Definitions)'s parameters such as Speed, Friction and [Turn on Stop](Definitions). To select a section, first select the path, then click on the section you want to change with the left mouse button while holding "Ctrl" key. Once the section is selected, it will highlight red and a "Section details" window will appear. You can also select multiple sections by clicking on them one by one while holding "Ctrl" key.

   ![Selected section of the vehicle path](Resources/Selected_section_of_the_vehicle_path.png)

   <!-- _Figure 5.7.1 Selected section of the vehicle path_ -->

2. **Editing control points** - You can change [Vehicle Path](Definitions)'s geometry by moving control points. Select the path, then click on one of the red circles and drag while holding the left mouse button. It is possible that you won't be able to move it freely because its position can be bounded by vehicle's manoeuvrability capabilities ([sections](Definitions)' properties, other control points). You can also remove the control point by clicking on it with the right mouse button and choosing "Remove control point" option from the context menu.

3. **Continuing the path** - You can continue drawing already finished path. To do this simply click with the right mouse button on the path you want to expand, then choose the "Continue path" option from the "Vehicle path" sub-menu. Continuing the path works the same way as drawing the path.

   ![Continuing the path option in the context menu](Resources/Continuing_the_path_option_in_the_context_menu.png)

   <!-- _Figure 5.7.2 Continuing the path option in the context menu_ -->

## 5.8 Adding Additional Vehicles to the Path

You can add additional [vehicle](Definitions) objects to the path to:

- Better visualize results of your analysis;
- Check position/behavior of the vehicle and trailers at a specific point along the path; and
- Start a new analysis from a selected point on the existing path to make multiple connected analyses or different route variants.
  

To add additional [vehicles](Definitions) to the path, click on it with the right mouse button and choose the "Add vehicle" option from the "Vehicle path" sub-menu. Now place the [vehicles](Definitions) along the path by clicking with the left mouse button. When finished press the right mouse button or "Esc" key. These are ordinary [vehicle objects](Definitions) that can be moved, edited and even replaced with other vehicles. You can also start a new swept path analysis from them.

![Additional vehicles added to the existing vehicle path](Resources/Additional_vehicles_added_to_the_existing_vehicle_path.png)

<!-- _Figure 5.8.1 Additional vehicles added to the existing vehicle path_ -->

![Swept path analysis with different route variant](Resources/Swept_path_analysis_with_different_route_variant.png)

<!-- _Figure 5.8.2 Swept path analysis with different route variant_ -->

## 5.9 Adding Vehicle Profile to the Plan

It is always a good idea to add the description of the vehicle used for the Swept Path Analysis to your document. You can easily do this by clicking with the right mouse button on the [vehicle](Definitions) or [Vehicle Path](Definitions) and choosing "Add profile" from the appropriate sub-menu ("Vehicle" or "Vehicle path").

![Vehicle profile option in the context menu](Resources/Vehicle_profile_option_in_the_context_menu.png)

<!-- _Figure 5.9.1 Vehicle profile option in the context menu_ -->

The Vehicle Profile displays the:

- Vehicle's name;
- Vehicle's side view with the most important dimensions; and 
- Vehicle's properties crucial for the Swept Path Analysis.

![Vehicle profile added to the plan](Resources/Vehicle_profile_added_to_the_plan.png)

<!-- _Figure 5.9.2 Vehicle profile added to the plan_ -->

You can ungroup the [vehicle profile](Definitions), then edit and style its parts - just like you would any other RapidPlan objects.

![Styled vehicle profile](Resources/Styled_vehicle_profile.png)

<!-- _Figure 5.9.3 Styled vehicle profile_ -->
