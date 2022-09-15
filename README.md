oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![Downloads/week](https://img.shields.io/npm/dw/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![License](https://img.shields.io/npm/l/oclif-hello-world.svg)](https://github.com/oclif/hello-world/blob/main/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g @julianduque/tasks-cli
$ tasks COMMAND
running command...
$ tasks (--version)
@julianduque/tasks-cli/0.0.0 darwin-x64 node-v16.17.0
$ tasks --help [COMMAND]
USAGE
  $ tasks COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`tasks help [COMMAND]`](#tasks-help-command)
* [`tasks plugins`](#tasks-plugins)
* [`tasks plugins:install PLUGIN...`](#tasks-pluginsinstall-plugin)
* [`tasks plugins:inspect PLUGIN...`](#tasks-pluginsinspect-plugin)
* [`tasks plugins:install PLUGIN...`](#tasks-pluginsinstall-plugin-1)
* [`tasks plugins:link PLUGIN`](#tasks-pluginslink-plugin)
* [`tasks plugins:uninstall PLUGIN...`](#tasks-pluginsuninstall-plugin)
* [`tasks plugins:uninstall PLUGIN...`](#tasks-pluginsuninstall-plugin-1)
* [`tasks plugins:uninstall PLUGIN...`](#tasks-pluginsuninstall-plugin-2)
* [`tasks plugins update`](#tasks-plugins-update)
* [`tasks tasks list [FILE]`](#tasks-tasks-list-file)
* [`tasks tasks new SUBJECT [COMMENT]`](#tasks-tasks-new-subject-comment)

## `tasks help [COMMAND]`

Display help for tasks.

```
USAGE
  $ tasks help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for tasks.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.10/src/commands/help.ts)_

## `tasks plugins`

List installed plugins.

```
USAGE
  $ tasks plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ tasks plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.0.11/src/commands/plugins/index.ts)_

## `tasks plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ tasks plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ tasks plugins add

EXAMPLES
  $ tasks plugins:install myplugin 

  $ tasks plugins:install https://github.com/someuser/someplugin

  $ tasks plugins:install someuser/someplugin
```

## `tasks plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ tasks plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ tasks plugins:inspect myplugin
```

## `tasks plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ tasks plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ tasks plugins add

EXAMPLES
  $ tasks plugins:install myplugin 

  $ tasks plugins:install https://github.com/someuser/someplugin

  $ tasks plugins:install someuser/someplugin
```

## `tasks plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ tasks plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.

EXAMPLES
  $ tasks plugins:link myplugin
```

## `tasks plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ tasks plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ tasks plugins unlink
  $ tasks plugins remove
```

## `tasks plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ tasks plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ tasks plugins unlink
  $ tasks plugins remove
```

## `tasks plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ tasks plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ tasks plugins unlink
  $ tasks plugins remove
```

## `tasks plugins update`

Update installed plugins.

```
USAGE
  $ tasks plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

## `tasks tasks list [FILE]`

describe the command here

```
USAGE
  $ tasks tasks list [FILE] [-n <value>] [-f]

FLAGS
  -f, --force
  -n, --name=<value>  name to print

DESCRIPTION
  describe the command here

EXAMPLES
  $ tasks tasks list
```

## `tasks tasks new SUBJECT [COMMENT]`

Create a new Salesforce Task

```
USAGE
  $ tasks tasks new [SUBJECT] [COMMENT] [-p <value>] [-s <value>]

FLAGS
  -p, --priority=<value>  [default: Normal] Priority of the task
  -s, --status=<value>    [default: Not Started] Status of the task

DESCRIPTION
  Create a new Salesforce Task

EXAMPLES
  $ tasks tasks new "Email" --priority "Normal" --status "Not Started"

  $ tasks tasks new "Call" "This is a comment" --priority "Urgent" -s "Not Started"
```
<!-- commandsstop -->
