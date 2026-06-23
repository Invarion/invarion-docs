---
sidebar_position: 4
---

# Troubleshoot Launcher issues

Use this page when you cannot sign in to the Invarion Launcher, cannot see an application, or cannot open an assigned desktop application.

## I cannot sign in to the Launcher

- Make sure your internet connection is working.
- Sign in with the Invarion account assigned to your company or license.
- If you have forgotten your password, use the **Forgot your password** link on the sign-in page.
- If sign-in is blocked, or the browser sign-in does not return you to the Launcher, check [Firewall and proxy configuration](./firewall-and-proxy-configuration.md).

If the issue continues, run Launcher Diagnostics and send the report to Invarion Technical Support. See [Run Launcher Diagnostics](./run-launcher-diagnostics.md).

## The application is not listed

The Launcher only shows applications assigned to your account.

If you do not see RapidPlan or RapidPath after signing in:

- Select the refresh icon in the Launcher.
- Confirm that you are signed in with the correct Invarion account.
- Ask your account administrator to check that the correct license or add-on is assigned to your user.

See [Manage licenses and add-ons](../account-management/managing-licenses.md).

## The Open button is not shown

After you sign in, each available application usually shows an **Open** button.

If the button says **Transfer**, the single-machine license is currently activated for another Windows user or computer. To use the application here, transfer the license.

See [Transfer a single-machine license](../licenses-and-access/transfer-a-single-machine-license.md).

If you see another message or state, select the refresh icon and sign in again. If the same state remains, contact Invarion Technical Support.

## The application does not open

Select **Open** next to the application you want to use. If the application needs to be installed or updated, the Launcher downloads the required files automatically before opening it.

What to check next depends on where the process fails.

### The Launcher cannot download or update application files

If the Launcher starts downloading files but fails before the application opens:

- Check that your internet connection is working.
- If your organization uses a firewall or proxy, make sure the required Invarion services are allowed. See [Firewall and proxy configuration](./firewall-and-proxy-configuration.md).
- Refresh the Launcher and try opening the application again.
- If the issue continues, run Launcher Diagnostics and send the report to Invarion Technical Support.

### The application opens, then shows an error or closes unexpectedly

If RapidPlan or RapidPath starts but then shows an error, crashes, or closes unexpectedly:

- Run Launcher Diagnostics.
- During the diagnostic session, open the application and repeat the action that caused the problem.
- Finish the diagnostic session and send the report to Invarion Technical Support.

See [Run Launcher Diagnostics](./run-launcher-diagnostics.md).

## I am behind a firewall or proxy

If your organization filters internet access, the Launcher and desktop applications may need firewall or proxy configuration before they can sign in, download application files, or access online services.

See [Firewall and proxy configuration](./firewall-and-proxy-configuration.md).

If connectivity issues continue after firewall or proxy configuration, run Launcher Diagnostics and send the report to Invarion Technical Support.

## The Launcher will not start

If the Launcher will not start, you can run Diagnostics outside the Launcher by using `Diagnose.exe`.

See [Run Launcher Diagnostics](./run-launcher-diagnostics.md).
