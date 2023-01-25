---
keywords:
  - autosave
  - local backup
---
# Local Backup Management

Local backup is essential part of [autosave](./automatic-save-in-rapid-online).
It is a local copy of your plan that is saved in your browser. It is used to restore your plan in case of a crash
or another encountered problem. Once backup is created it occupies space on your computer, therefore it
should be cleaned at some point. This article will explain the process of local backup management.

## Backup clean up procedure

The application is configured to keep 20 backups for each plan not older than 30 days.
It runs a job periodically to keep the number of backups below 20 for opened plan.
Each time you open any plan, the application deletes all backups that are older than 30 days even belonging to other plans.
