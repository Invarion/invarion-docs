---
sidebar_position: 3
tags:
  - launcher
  - troubleshooting
---

# Firewall and proxy configuration

If your organization filters internet access, allow the services below so the Invarion Launcher, RapidPlan, and RapidPath can sign in, download application files, validate licenses, and access supported online services.

The Launcher uses the proxy settings configured in Windows by default.

## Invarion Launcher

Allow access to:

- `https://authorizationapi.invarion.com`
- `https://rapidplan.b2clogin.com`
- `https://invarionstorage.blob.core.windows.net`
- `https://invarionstorage.azureedge.net`
- `time.google.com` (NTP)

The Launcher uses a localhost port to confirm user authentication. Make sure security software does not block localhost access.

## Base maps and aerial imagery

Allow access to the services used by your selected map providers:

- `https://maps.googleapis.com`
- `https://maps.omniscale.net`
- `http://*.virtualearth.net` (Bing)
- `https://www.arcgis.com`
- `https://services.arcgisonline.com`

## Roads import

Allow access to:

- `https://overpass-api.de/api/`
- `https://overpass.private.coffee/api/`
- `https://overpass.osm.jp/api/`

## Location search

Allow access to:

- `https://maps.googleapis.com`
- `https://nominatim.openstreetmap.org`

## Regional and additional map providers

Allow access to the services used by your region or subscription:

- `https://tiles.basemaps.linz.govt.nz` (LINZ, New Zealand)
- `https://api.nearmap.com` (Nearmap, Australia)
- `https://api.metromap.com.au` (MetroMap, Australia)
- `https://tiles.metromap.com.au` (MetroMap, Australia)
- `http://base.maps.vic.gov.au` (VicMap, Victoria)
- `http://maps.six.nsw.gov.au` (SIX Maps, New South Wales)
- `https://gisservices.information.qld.gov.au` (Queensland)
- `https://spatial-img.information.qld.gov.au` (Queensland)
- `https://services.thelist.tas.gov.au` (LIST, Tasmania)

## Offline access

Some license types can continue working for a limited time without an internet connection. See [Use desktop applications offline](../licenses-and-access/use-desktop-applications-offline.md).

## If connectivity issues continue

If you still cannot sign in, download, update, or open an application after configuring your firewall or proxy, run Launcher Diagnostics and send the report to Invarion Technical Support.

See [Run Launcher Diagnostics](./run-launcher-diagnostics.md).
