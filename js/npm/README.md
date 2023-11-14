# NPM Course

This is a test project for learning NPM

## Init

To initialize a project, use `npm init` or `npm init -y` to skip the questions.

## Install

| Command                      | Description                                      |
| ---------------------------- | ------------------------------------------------ |
| `npm i <package>@<version>`  | Install a package with a specific version        |
| `npm i <package> --save-dev` | Install a package as a dev dependency (-D)       |
| `npm i <package> --save`     | Install a package as a dependency (-S)           |
| `npm i <package> -g`         | Install a package globally (-g)                  |
| `npm i <package> --optional` | Install a package as an optional dependency (-O) |
| `npm i <package> --dry-run`  | Test install a package                           |
| `npm i`                      | Install all dependencies                         |
| `npm ls`                     | List all dependencies                            |
| `npm ls -g`                  | List all global dependencies                     |

## Scripts

To run a script, use `npm run <script-name>` or `npm <script-name>` if the script is `start` or `test`.

## NPX

To run a package without installing it, use `npx <package-name> <args>`. For example, `npx cowsay hello` will run the `cowsay` package without installing it.

## Update dependencies

| Command                | Description                |
| ---------------------- | -------------------------- |
| `npm outdated`         | List outdated dependencies |
| `npm update <package>` | Update a specific package  |
| `npm update`           | Update all dependencies    |

### Troubleshooting

If you have **vulnerabilities**, run `npm audit` to see the list of vulnerabilities and `npm audit fix` to fix them.|

## Uninstall

To uninstall a package, use `npm uninstall <package>` or `npm un <package>`. Also, it can be uninstalled removing the dependency from `package.json` and running `npm prune` (or `npm un` and `npm i`).
