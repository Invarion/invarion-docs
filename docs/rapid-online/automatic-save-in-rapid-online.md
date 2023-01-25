---
keywords:
  - autosave
description: RapidOnline/RapidPath Online autosave
---
# Autosave

Rapid Online/Rapid Path Online saves your work automatically. Changes pass through couple sages before they are saved.
This is to prevent data loss in case of a crash. In this article we will explain how the autosave works.

## Autosave procedure

Each action that modifies entires in the history panel is considered as a change. However not all changes are saved.
When a new change is made, it firstly goes to the gathering queue. The gathering queue is a queue of changes
that are waiting to be saved. Once there are no new changes for 3 seconds, the last update in the gathering queue gets synchronized.
![Autosave diagram](./assets/automatic-save-in-rapid-online/Live-Save-Diagram.svg)

The image below shows the entire process. Uploading data to the server can take indefinite amount of time.
It depends on many factors, such as the size of the data (e.g. raster data is much bigger than vector data),
the speed of the internet connection,the load on the server, etc.
Only one synchronization job can be running at a time, however you may continue working while the synchronization is in progress.

If a change cannot be promoted to the sync slot because of another running sync job, it will be added to the
pending queue instead. Once the sync job is finished, the first change in the pending queue will be promoted
to the sync slot.

All changes from pending queue or sync slot are saved locally in the browser by another parallel job. This process is
almost instant therefore the chances of data loss are very low. Upon successful upload to the server,
the local change is marked as saved. The procedure of cleaning up the local storage is described in [this article](./backup-management)

Once there are no changes in neither queues, the application goes to the idle state.

## Viewing autosave status

The status of each of the queues discussed above is reflected in the autosave status window which can be opened
by clicking on the autosave icon in the top left corner of the screen.
