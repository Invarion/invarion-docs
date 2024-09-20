---

sidebar_position: 5

---
# Our office has a firewall that filters Internet connection and I’m having trouble connecting to RapidPlan – What should I do?

The firewall needs to be configured in a way that will allow the Invarion Launcher to communicate with the servers it uses. The list of addresses that should be whitelisted in your firewall and/or proxy configuration can be found [here](https://rapidplan.com/pages/firewall-and-proxy-setup).

Double-check that there are no application-specific restrictions in place. Oftentimes people can ping the servers, but the Invarion Launcher still cannot access them. This is because the ‘ping’ application is treated differently by the firewall.

Invarion Launcher by default uses proxy information set in your operating system.
