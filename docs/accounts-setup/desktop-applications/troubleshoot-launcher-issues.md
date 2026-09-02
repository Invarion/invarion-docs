---
sidebar_position: 4
tags:
  - launcher
  - troubleshooting
---

# Troubleshoot Launcher issues

Use this page when you cannot sign in to the Invarion Launcher, cannot see an application, or cannot open an assigned desktop application.

## I cannot sign in to the Launcher

- make sure your internet connection is working
- sign in with the Invarion account assigned to your company or license
- if you have forgotten your password, use the **Forgot your password** link on the sign-in page
- if sign-in is blocked, or the browser sign-in does not return you to the Launcher, check [Firewall and proxy configuration](./firewall-and-proxy-configuration)

If the issue continues, run **Launcher Diagnostics** and send the report to Invarion **Technical Support**. See [Run Launcher Diagnostics](./run-launcher-diagnostics).

## The application is not listed

The Launcher only shows applications assigned to your account.

If you do not see RapidPlan or RapidPath after signing in:

- select the refresh icon in the Launcher
- confirm that you are signed in with the correct Invarion account
- ask your account administrator to check that the correct license or add-on is assigned to your user

See [Manage licenses and add-ons](../account-management/manage-licenses-and-add-ons).

## The Open button is not shown

After you sign in, each available application usually shows an **Open** button.

If the button says **Transfer**, the **single-machine license** is currently activated for another Windows user or computer. To use the application here, transfer the license.

See [Transfer a single-machine license](../licenses-and-access/transfer-a-single-machine-license).

If you see another message or state, select the refresh icon and sign in again. If the same state remains, contact Invarion **Technical Support**.

## The application does not open

Select **Open** next to the application you want to use. If the application needs to be installed or updated, the Launcher downloads the required files automatically before opening it.

What to check next depends on where the process fails.

### The Launcher cannot download or update application files

If the Launcher starts downloading files but fails before the application opens:

- check that your internet connection is working
- if your organization uses a firewall or proxy, make sure the required Invarion services are allowed. See [Firewall and proxy configuration](./firewall-and-proxy-configuration)
- refresh the Launcher and try opening the application again
- if the issue continues, run **Launcher Diagnostics** and send the report to Invarion **Technical Support**

### The application opens, then shows an error or closes unexpectedly

If RapidPlan or RapidPath starts but then shows an error, crashes, or closes unexpectedly:

- run **Launcher Diagnostics**
- during the diagnostic session, open the application and repeat the action that caused the problem
- finish the diagnostic session and send the report to Invarion **Technical Support**

See [Run Launcher Diagnostics](./run-launcher-diagnostics).

## I am behind a firewall or proxy

If your organization filters internet access, the Launcher and **desktop applications** may need firewall or proxy configuration before they can sign in, download application files, or access online services.

See [Firewall and proxy configuration](./firewall-and-proxy-configuration).

If connectivity issues continue after firewall or proxy configuration, run **Launcher Diagnostics** and send the report to Invarion **Technical Support**.

## The Launcher will not start

If the Launcher will not start, you can run Diagnostics outside the Launcher by using `Diagnose.exe`.

See [Run Launcher Diagnostics](./run-launcher-diagnostics).
