---
sidebar_position: 5
tags:
  - launcher
  - troubleshooting
---

# Run Launcher Diagnostics

The Invarion Launcher includes a Diagnostics tool that collects information Invarion Technical Support can use to investigate Launcher, connectivity, download, licensing, RapidPlan, and RapidPath issues.

Use Launcher Diagnostics for non-trivial technical issues, especially when the Launcher cannot download or open an application, or when RapidPlan or RapidPath shows errors, crashes, or behaves unexpectedly.

## What the report includes

A diagnostic report can include:

- operating system and environment details
- Launcher settings and connectivity checks
- accessible account and license information
- Launcher, RapidPlan, and RapidPath logs collected during the session
- crash logs
- optional files and comments added by the user

The tool creates a single zip file that can be sent to Invarion Technical Support.

## Run diagnostics from the Launcher

1. Open the Invarion Launcher.
2. Open **Settings**.
3. Select **Show advanced settings**.
4. Scroll to the bottom and select **Start diagnostic session**.

The Launcher runs default tests and starts collecting logs.

When the status message says **Diagnostics: Collecting output logs... [click Finish to complete]**, reproduce the issue if it depends on a user action.

For RapidPlan or RapidPath issues, open the application during the diagnostic session and repeat the action that caused the problem. If RapidPlan or RapidPath was already running when the diagnostic session started, its logs will be collected.

## Finish the diagnostic session

1. Select **Finish**.
2. In the finishing dialog, add any comments that may help Technical Support understand the issue.
3. Review the attached files.
4. Unselect any files you do not want to include.
5. Drag and drop any extra files you want to add, such as screenshots, plans, or exported files.
6. Select **Finish**.

The Launcher creates a zip file named with your username and the date/time, and saves it to your Desktop.

Send the report to Invarion Technical Support.

## If the Launcher will not start

If you cannot start the diagnostic session from the Launcher, run:

```text
%APPDATA%\Invarion\Launcher\Diagnose.exe
```

This runs the default diagnostic tests and creates a zip file on your Desktop.

Reports created this way do not include Launcher, RapidPlan, or RapidPath output captured during a diagnostic session.
