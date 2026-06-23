# Website

This website is built using [Docusaurus 3](https://docusaurus.io/), a modern static website generator.

## Prerequisites

Local machine should have the following tools installed:

1. [Node.js 18](https://nodejs.org/en/download/package-manager) or higher
1. [Yarn](https://yarnpkg.com/getting-started/install), managed through Corepack
1. [Git tools](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
1. IDE (preferably [Visual Studio Code](https://code.visualstudio.com/download))
    - [Markdown link extension for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint)

## Local testing setup

This project uses Yarn Classic through the checked-in `yarn.lock` file. If `yarn` is not available on your machine, enable it through Corepack:

```powershell
corepack enable --install-directory "$env:LOCALAPPDATA\Microsoft\WindowsApps"
corepack prepare yarn@1.22.22 --activate
yarn.cmd --version
```

On Windows PowerShell, use `yarn.cmd` for the commands below if `yarn` is blocked by the local script execution policy.

## Installation

Install dependencies from the lockfile:

```powershell
yarn.cmd install --frozen-lockfile
```

## Local Development

Start the local Docusaurus server:

```powershell
yarn.cmd start
```

This opens the Help Center at <http://localhost:3000/>. Most documentation, image, CSS, and React component changes are reflected live without restarting the server.

If the browser does not update after editing content:

1. Refresh the browser tab.
1. If hot reload still does not fire after saving files, stop the server with `Ctrl+C` and start it in polling mode:

```powershell
yarn.cmd start:poll
```

1. If the page still looks stale after that, clear the Docusaurus cache and restart:

```powershell
yarn.cmd clear
yarn.cmd start:poll
```

If `yarn.cmd start` reports that `docusaurus` cannot be found, run this once in the same PowerShell window and try again:

```powershell
$env:PATH = "$PWD\node_modules\.bin;$env:PATH"
```

## Build

```powershell
yarn.cmd build
```

This command generates static content into the `build` directory and is the best local check before opening a pull request.

Optional checks:

```powershell
yarn.cmd lint
yarn.cmd typecheck
```

## Contributing

The guide for contributing to this project can be found [here](https://help.invarion.com/contributing/).
