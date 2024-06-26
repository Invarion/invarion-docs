---

sidebar_position: 1

---
# Restoring Previous Version of the Plan

Anytime the plan autosaves a new recovery point is made. Thanks to this you can easily go back to any previous version of the plan undoing some unwanted changes made by yourself or other collaborators. It is like turning back the clock.

To recover a previous version of the plan click on the plan's "Save Status" on the top bar. A new dialogue will appear listing all the possible recovery points for this plan. They are divided by date and each has a unique number and timestamp. When switching between different revisions you can see your plan changing. This is live preview This will help find a right moment in the history.When you select a revision it will show up on your canvas as a preview.
You can then visually decide if that is the version you want to restore. Once you selected the version you are interested in, choose one of two options at the bottom of the dialogue, "Restore this version" or "Create copy". The former restores the original plan to the selected previous version. The latter creates a new plan from information saved in the selected recovery point.

![Restoring Previous Version of the Plan](./assets/Restoring_Previous_Version_of_the_Plan.png)

**Notes:**

- If you restore a previous version of the plan, you will still have access to the later versions of the document. So, no risk is involved.
- You can also [restore the previous version of the plan from the Invarion Cloud level](/docs/rapid-online/The%20Invarion%20Cloud/Plan_s%20History.md).

## Local Backup Management

You may notice local backups along with the saved versions of your plans in your version history. These are local copies of your plan that is saved in your browser. It is used to restore your plan in case of a crash or another encountered problem.

The application is configured to keep 20 backups for each plan not older than 30 days.
It runs a job periodically to keep the number of backups below 20 for opened plan.
Each time you open any plan, the application deletes all backups that are older than 30 days even belonging to other plans.
