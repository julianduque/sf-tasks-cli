tasks-cli
=================

A Salesforce Tasks CLI Tool

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)

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
* [`tasks auth:accesstoken:store -r <url> [-d] [-s] [-a <string>] [-p] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`](#tasks-authaccesstokenstore--r-url--d--s--a-string--p---json---loglevel-tracedebuginfowarnerrorfataltracedebuginfowarnerrorfatal)
* [`tasks auth:device:login [-i <string>] [-r <url>] [-d] [-s] [-a <string>] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`](#tasks-authdevicelogin--i-string--r-url--d--s--a-string---json---loglevel-tracedebuginfowarnerrorfataltracedebuginfowarnerrorfatal)
* [`tasks auth:jwt:grant -u <string> -f <filepath> -i <string> [-r <url>] [-d] [-s] [-a <string>] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`](#tasks-authjwtgrant--u-string--f-filepath--i-string--r-url--d--s--a-string---json---loglevel-tracedebuginfowarnerrorfataltracedebuginfowarnerrorfatal)
* [`tasks auth:list [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`](#tasks-authlist---json---loglevel-tracedebuginfowarnerrorfataltracedebuginfowarnerrorfatal)
* [`tasks auth:logout [-a] [-p] [-u <string>] [--apiversion <string>] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`](#tasks-authlogout--a--p--u-string---apiversion-string---json---loglevel-tracedebuginfowarnerrorfataltracedebuginfowarnerrorfatal)
* [`tasks auth:sfdxurl:store -f <filepath> [-d] [-s] [-a <string>] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`](#tasks-authsfdxurlstore--f-filepath--d--s--a-string---json---loglevel-tracedebuginfowarnerrorfataltracedebuginfowarnerrorfatal)
* [`tasks auth:web:login [-i <string>] [-r <url>] [-d] [-s] [-a <string>] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`](#tasks-authweblogin--i-string--r-url--d--s--a-string---json---loglevel-tracedebuginfowarnerrorfataltracedebuginfowarnerrorfatal)
* [`tasks create [SUBJECT] [COMMENT]`](#tasks-create-subject-comment)
* [`tasks force:auth:accesstoken:store -r <url> [-d] [-s] [-a <string>] [-p] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`](#tasks-forceauthaccesstokenstore--r-url--d--s--a-string--p---json---loglevel-tracedebuginfowarnerrorfataltracedebuginfowarnerrorfatal)
* [`tasks force:auth:device:login [-i <string>] [-r <url>] [-d] [-s] [-a <string>] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`](#tasks-forceauthdevicelogin--i-string--r-url--d--s--a-string---json---loglevel-tracedebuginfowarnerrorfataltracedebuginfowarnerrorfatal)
* [`tasks force:auth:jwt:grant -u <string> -f <filepath> -i <string> [-r <url>] [-d] [-s] [-a <string>] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`](#tasks-forceauthjwtgrant--u-string--f-filepath--i-string--r-url--d--s--a-string---json---loglevel-tracedebuginfowarnerrorfataltracedebuginfowarnerrorfatal)
* [`tasks force:auth:list [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`](#tasks-forceauthlist---json---loglevel-tracedebuginfowarnerrorfataltracedebuginfowarnerrorfatal)
* [`tasks force:auth:logout [-a] [-p] [-u <string>] [--apiversion <string>] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`](#tasks-forceauthlogout--a--p--u-string---apiversion-string---json---loglevel-tracedebuginfowarnerrorfataltracedebuginfowarnerrorfatal)
* [`tasks force:auth:sfdxurl:store -f <filepath> [-d] [-s] [-a <string>] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`](#tasks-forceauthsfdxurlstore--f-filepath--d--s--a-string---json---loglevel-tracedebuginfowarnerrorfataltracedebuginfowarnerrorfatal)
* [`tasks force:auth:web:login [-i <string>] [-r <url>] [-d] [-s] [-a <string>] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`](#tasks-forceauthweblogin--i-string--r-url--d--s--a-string---json---loglevel-tracedebuginfowarnerrorfataltracedebuginfowarnerrorfatal)
* [`tasks help [COMMAND]`](#tasks-help-command)
* [`tasks list`](#tasks-list)
* [`tasks ls`](#tasks-ls)
* [`tasks new [SUBJECT] [COMMENT]`](#tasks-new-subject-comment)
* [`tasks plugins`](#tasks-plugins)
* [`tasks plugins:install PLUGIN...`](#tasks-pluginsinstall-plugin)
* [`tasks plugins:inspect PLUGIN...`](#tasks-pluginsinspect-plugin)
* [`tasks plugins:install PLUGIN...`](#tasks-pluginsinstall-plugin-1)
* [`tasks plugins:link PLUGIN`](#tasks-pluginslink-plugin)
* [`tasks plugins:uninstall PLUGIN...`](#tasks-pluginsuninstall-plugin)
* [`tasks plugins:uninstall PLUGIN...`](#tasks-pluginsuninstall-plugin-1)
* [`tasks plugins:uninstall PLUGIN...`](#tasks-pluginsuninstall-plugin-2)
* [`tasks plugins update`](#tasks-plugins-update)
* [`tasks sync`](#tasks-sync)
* [`tasks tasks list`](#tasks-tasks-list)
* [`tasks tasks new [SUBJECT] [COMMENT]`](#tasks-tasks-new-subject-comment)
* [`tasks tasks sync`](#tasks-tasks-sync)

## `tasks auth:accesstoken:store -r <url> [-d] [-s] [-a <string>] [-p] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`

authorize an org using an existing Salesforce access token

```
USAGE
  $ tasks auth accesstoken store -r <url> [-d] [-s] [-a <string>] [-p] [--json] [--loglevel
    trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]

FLAGS
  -a, --setalias=<value>                                                            set an alias for the authenticated
                                                                                    org
  -d, --setdefaultdevhubusername                                                    set the authenticated org as the
                                                                                    default dev hub org for scratch org
                                                                                    creation
  -p, --noprompt                                                                    do not prompt for confirmation
  -r, --instanceurl=<value>                                                         (required) the login URL of the
                                                                                    instance the org lives on
  -s, --setdefaultusername                                                          set the authenticated org as the
                                                                                    default username that all commands
                                                                                    run against
  --json                                                                            format output as json
  --loglevel=(trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL)  [default: warn] logging level for
                                                                                    this command invocation

DESCRIPTION
  authorize an org using an existing Salesforce access token

  By default, the command runs interactively and asks you for the access token. If you previously authorized the org,
  the command prompts whether you want to overwrite the local file. Specify --noprompt to not be prompted.

  To use the command in a CI/CD script, set the SFDX_ACCESS_TOKEN environment variable to the access token. Then run the
  command with the --noprompt parameter. "<org id>!<accesstoken>"

ALIASES
  $ tasks force auth accesstoken store

EXAMPLES
  $ sfdx auth:accesstoken:store --instanceurl https://mycompany.my.salesforce.com

  $ export SFDX_ACCESS_TOKEN=00Dxx0000000000!xxxxx

  $ sfdx auth:accesstoken:store --instanceurl https://dev-hub.my.salesforce.com --noprompt
```

## `tasks auth:device:login [-i <string>] [-r <url>] [-d] [-s] [-a <string>] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`

authorize an org using a device code

```
USAGE
  $ tasks auth device login [-i <string>] [-r <url>] [-d] [-s] [-a <string>] [--json] [--loglevel
    trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]

FLAGS
  -a, --setalias=<value>                                                            set an alias for the authenticated
                                                                                    org
  -d, --setdefaultdevhubusername                                                    set the authenticated org as the
                                                                                    default dev hub org for scratch org
                                                                                    creation
  -i, --clientid=<value>                                                            OAuth client ID (sometimes called
                                                                                    the consumer key)
  -r, --instanceurl=<value>                                                         the login URL of the instance the
                                                                                    org lives on
  -s, --setdefaultusername                                                          set the authenticated org as the
                                                                                    default username that all commands
                                                                                    run against
  --json                                                                            format output as json
  --loglevel=(trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL)  [default: warn] logging level for
                                                                                    this command invocation

DESCRIPTION
  authorize an org using a device code

  You must open a browser, navigate to the verification URL, and enter the code. Log in, if not already logged in, and
  you’ll be prompted to allow the device to connect to the org.

ALIASES
  $ tasks force auth device login

EXAMPLES
  $ sfdx auth:device:login -d -a TestOrg1

  $ sfdx auth:device:login -i <OAuth client id>

  $ sfdx auth:device:login -r https://MyDomainName--SandboxName.sandbox.my.salesforce.com
```

## `tasks auth:jwt:grant -u <string> -f <filepath> -i <string> [-r <url>] [-d] [-s] [-a <string>] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`

authorize an org using the JWT flow

```
USAGE
  $ tasks auth jwt grant -u <string> -f <filepath> -i <string> [-r <url>] [-d] [-s] [-a <string>] [--json]
    [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]

FLAGS
  -a, --setalias=<value>                                                            set an alias for the authenticated
                                                                                    org
  -d, --setdefaultdevhubusername                                                    set the authenticated org as the
                                                                                    default dev hub org for scratch org
                                                                                    creation
  -f, --jwtkeyfile=<value>                                                          (required) path to a file containing
                                                                                    the private key
  -i, --clientid=<value>                                                            (required) OAuth client ID
                                                                                    (sometimes called the consumer key)
  -r, --instanceurl=<value>                                                         the login URL of the instance the
                                                                                    org lives on
  -s, --setdefaultusername                                                          set the authenticated org as the
                                                                                    default username that all commands
                                                                                    run against
  -u, --username=<value>                                                            (required) authentication username
  --json                                                                            format output as json
  --loglevel=(trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL)  [default: warn] logging level for
                                                                                    this command invocation

DESCRIPTION
  authorize an org using the JWT flow

  Use a certificate associated with your private key that has been uploaded to a personal connected app.

  If you specify an --instanceurl value, this value overrides the sfdcLoginUrl value in your sfdx-project.json file. To
  specify a My Domain URL, use the format MyDomainName.my.salesforce.com (not MyDomainName.lightning.force.com). To
  specify a sandbox, set --instanceurl to https://MyDomainName--SandboxName.sandbox.my.salesforce.com.

ALIASES
  $ tasks force auth jwt grant

EXAMPLES
  $ sfdx auth:jwt:grant -u me@my.org -f <path to jwt key file> -i <OAuth client id>

  $ sfdx auth:jwt:grant -u me@my.org -f <path to jwt key file> -i <OAuth client id> -s -a MyDefaultOrg

  $ sfdx auth:jwt:grant -u me@acme.org -f <path to jwt key file> -i <OAuth client id> -r https://acme.my.salesforce.com
```

## `tasks auth:list [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`

list auth connection information

```
USAGE
  $ tasks auth list [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]

FLAGS
  --json                                                                            format output as json
  --loglevel=(trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL)  [default: warn] logging level for
                                                                                    this command invocation

DESCRIPTION
  list auth connection information

ALIASES
  $ tasks force auth list
```

## `tasks auth:logout [-a] [-p] [-u <string>] [--apiversion <string>] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`

log out from authorized orgs

```
USAGE
  $ tasks auth logout [-a] [-p] [-u <string>] [--apiversion <string>] [--json] [--loglevel
    trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]

FLAGS
  -a, --all                                                                         include all authenticated orgs
  -p, --noprompt                                                                    do not prompt for confirmation
  -u, --targetusername=<value>                                                      username or alias for the target
                                                                                    org; overrides default target org
  --apiversion=<value>                                                              override the api version used for
                                                                                    api requests made by this command
  --json                                                                            format output as json
  --loglevel=(trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL)  [default: warn] logging level for
                                                                                    this command invocation

DESCRIPTION
  log out from authorized orgs

  By default, this command logs you out from your default scratch org.

ALIASES
  $ tasks force auth logout

EXAMPLES
  $ sfdx auth:logout -u me@my.org

  $ sfdx auth:logout -a

  $ sfdx auth:logout -p
```

## `tasks auth:sfdxurl:store -f <filepath> [-d] [-s] [-a <string>] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`

authorize an org using an SFDX auth URL stored within a file

```
USAGE
  $ tasks auth sfdxurl store -f <filepath> [-d] [-s] [-a <string>] [--json] [--loglevel
    trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]

FLAGS
  -a, --setalias=<value>                                                            set an alias for the authenticated
                                                                                    org
  -d, --setdefaultdevhubusername                                                    set the authenticated org as the
                                                                                    default dev hub org for scratch org
                                                                                    creation
  -f, --sfdxurlfile=<value>                                                         (required) path to a file containing
                                                                                    the sfdx url
  -s, --setdefaultusername                                                          set the authenticated org as the
                                                                                    default username that all commands
                                                                                    run against
  --json                                                                            format output as json
  --loglevel=(trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL)  [default: warn] logging level for
                                                                                    this command invocation

DESCRIPTION
  authorize an org using an SFDX auth URL stored within a file

  The SFDX auth URL must have the format "force://<clientId>:<clientSecret>:<refreshToken>@<instanceUrl>". NOTE: The
  SFDX auth URL uses the "force" protocol, and not "http" or "https". Also, the "instanceUrl" inside the SFDX auth URL
  doesn't include the protocol ("https://").

  You have three options when creating the auth file. The easiest option is to redirect the output of the `sfdx
  force:org:display --verbose --json` command into a file. For example, using an org you have already authorized:

  $ sfdx force:org:display -u <OrgUsername> --verbose --json > authFile.json

  $ sfdx auth:sfdxurl:store -f authFile.json

  The resulting JSON file contains the URL in the sfdxAuthUrl property inside of a results object. NOTE: The
  `force:org:display --verbose` command displays the refresh token only for orgs authorized with the web server flow,
  and not the JWT bearer flow.

  You can also create a JSON file that has a top-level property named sfdxAuthUrl whose value is the auth URL. Finally,
  you can create a normal text file that includes just the URL and nothing else.

ALIASES
  $ tasks force auth sfdxurl store

EXAMPLES
  $ sfdx auth:sfdxurl:store -f <path to sfdxAuthUrl file>

  $ sfdx auth:sfdxurl:store -f <path to sfdxAuthUrl file> -s -a MyDefaultOrg
```

## `tasks auth:web:login [-i <string>] [-r <url>] [-d] [-s] [-a <string>] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`

authorize an org using the web login flow

```
USAGE
  $ tasks auth web login [-i <string>] [-r <url>] [-d] [-s] [-a <string>] [--json] [--loglevel
    trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]

FLAGS
  -a, --setalias=<value>                                                            set an alias for the authenticated
                                                                                    org
  -d, --setdefaultdevhubusername                                                    set the authenticated org as the
                                                                                    default dev hub org for scratch org
                                                                                    creation
  -i, --clientid=<value>                                                            OAuth client ID (sometimes called
                                                                                    the consumer key)
  -r, --instanceurl=<value>                                                         the login URL of the instance the
                                                                                    org lives on
  -s, --setdefaultusername                                                          set the authenticated org as the
                                                                                    default username that all commands
                                                                                    run against
  --json                                                                            format output as json
  --loglevel=(trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL)  [default: warn] logging level for
                                                                                    this command invocation

DESCRIPTION
  authorize an org using the web login flow

  If you specify an --instanceurl value, this value overrides the sfdcLoginUrl value in your sfdx-project.json file. To
  specify a My Domain URL, use the format MyDomainName.my.salesforce.com (not MyDomainName.lightning.force.com). To log
  in to a sandbox, set --instanceurl to https://MyDomainName--SandboxName.sandbox.my.salesforce.com.

ALIASES
  $ tasks force auth web login

EXAMPLES
  $ sfdx auth:web:login -a TestOrg1

  $ sfdx auth:web:login -i <OAuth client id>

  $ sfdx auth:web:login -r https://MyDomainName--SandboxName.sandbox.my.salesforce.com
```

## `tasks create [SUBJECT] [COMMENT]`

Create a new Salesforce Task

```
USAGE
  $ tasks create [SUBJECT] [COMMENT] [-p <value>] [-s <value>]

FLAGS
  -p, --priority=<value>  [default: Normal] Priority of the task
  -s, --status=<value>    [default: Not Started] Status of the task

DESCRIPTION
  Create a new Salesforce Task

ALIASES
  $ tasks new
  $ tasks create

EXAMPLES
  $ tasks create "Email" --priority "Normal" --status "Not Started"

  $ tasks create "Call" "This is a comment" -p "Urgent" -s "Not Started"
```
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

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.14/src/commands/help.ts)_

## `tasks list`

List all tasks

```
USAGE
  $ tasks list [--columns <value> | -x] [--sort <value>] [--filter <value>] [--output csv|json|yaml |  |
    [--csv | --no-truncate]] [--no-header | ] [--json]

FLAGS
  -x, --extended     show extra columns
  --columns=<value>  only show provided columns (comma-separated)
  --csv              output is csv format [alias: --output=csv]
  --filter=<value>   filter property by partial string matching, ex: name=foo
  --no-header        hide table header from output
  --no-truncate      do not truncate output to fit screen
  --output=<option>  output in a more machine friendly format
                     <options: csv|json|yaml>
  --sort=<value>     property to sort by (prepend '-' for descending)

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List all tasks

ALIASES
  $ tasks list
  $ tasks ls

EXAMPLES
  $ tasks list --filter priority=Urgent
```

## `tasks ls`

List all tasks

```
USAGE
  $ tasks ls [--columns <value> | -x] [--sort <value>] [--filter <value>] [--output csv|json|yaml |  |
    [--csv | --no-truncate]] [--no-header | ] [--json]

FLAGS
  -x, --extended     show extra columns
  --columns=<value>  only show provided columns (comma-separated)
  --csv              output is csv format [alias: --output=csv]
  --filter=<value>   filter property by partial string matching, ex: name=foo
  --no-header        hide table header from output
  --no-truncate      do not truncate output to fit screen
  --output=<option>  output in a more machine friendly format
                     <options: csv|json|yaml>
  --sort=<value>     property to sort by (prepend '-' for descending)

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List all tasks

ALIASES
  $ tasks list
  $ tasks ls

EXAMPLES
  $ tasks ls --filter priority=Urgent
```

## `tasks new [SUBJECT] [COMMENT]`

Create a new Salesforce Task

```
USAGE
  $ tasks new [SUBJECT] [COMMENT] [-p <value>] [-s <value>]

FLAGS
  -p, --priority=<value>  [default: Normal] Priority of the task
  -s, --status=<value>    [default: Not Started] Status of the task

DESCRIPTION
  Create a new Salesforce Task

ALIASES
  $ tasks new
  $ tasks create

EXAMPLES
  $ tasks new "Email" --priority "Normal" --status "Not Started"

  $ tasks new "Call" "This is a comment" -p "Urgent" -s "Not Started"
```

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

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.1.1/src/commands/plugins/index.ts)_

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

## `tasks sync`

Synchronize tasks with Salesforce

```
USAGE
  $ tasks sync -o <value>

FLAGS
  -o, --target-org=<value>  (required) Target org username

DESCRIPTION
  Synchronize tasks with Salesforce

ALIASES
  $ tasks sync

EXAMPLES
  $ tasks sync
```

## `tasks tasks list`

List all tasks

```
USAGE
  $ tasks tasks list [--columns <value> | -x] [--sort <value>] [--filter <value>] [--output csv|json|yaml |  |
    [--csv | --no-truncate]] [--no-header | ] [--json]

FLAGS
  -x, --extended     show extra columns
  --columns=<value>  only show provided columns (comma-separated)
  --csv              output is csv format [alias: --output=csv]
  --filter=<value>   filter property by partial string matching, ex: name=foo
  --no-header        hide table header from output
  --no-truncate      do not truncate output to fit screen
  --output=<option>  output in a more machine friendly format
                     <options: csv|json|yaml>
  --sort=<value>     property to sort by (prepend '-' for descending)

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List all tasks

ALIASES
  $ tasks list
  $ tasks ls

EXAMPLES
  $ tasks tasks list --filter priority=Urgent
```

## `tasks tasks new [SUBJECT] [COMMENT]`

Create a new Salesforce Task

```
USAGE
  $ tasks tasks new [SUBJECT] [COMMENT] [-p <value>] [-s <value>]

FLAGS
  -p, --priority=<value>  [default: Normal] Priority of the task
  -s, --status=<value>    [default: Not Started] Status of the task

DESCRIPTION
  Create a new Salesforce Task

ALIASES
  $ tasks new
  $ tasks create

EXAMPLES
  $ tasks tasks new "Email" --priority "Normal" --status "Not Started"

  $ tasks tasks new "Call" "This is a comment" -p "Urgent" -s "Not Started"
```

## `tasks tasks sync`

Synchronize tasks with Salesforce

```
USAGE
  $ tasks tasks sync -o <value>

FLAGS
  -o, --target-org=<value>  (required) Target org username

DESCRIPTION
  Synchronize tasks with Salesforce

ALIASES
  $ tasks sync

EXAMPLES
  $ tasks tasks sync
```
<!-- commandsstop -->
