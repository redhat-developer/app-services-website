## rhoas completion

Outputs command completion for the given shell (bash, zsh, or fish)

### Synopsis

Outputs command completion for the given shell (bash, zsh, or fish).

To find what shell you are currently running, run `echo $0`.

Run `rhoas completion [bash|zsh|fish] -h` for instructions on installing command completions for your shell.

When you have installed the command completion script, make sure you restart your shell for the changes to take effect.


### Examples

```
## Generate command completion script for Bash shell
rhoas completion bash

## Generate command completion script for fish shell
rhoas completion fish

## Generate command completion script for Zsh shell
rhoas completion zsh

```

### Options inherited from parent commands

```
  -h, --help      Show help for a command
  -v, --verbose   Enable verbose mode
```

### SEE ALSO

* [rhoas](rhoas.md)	 - RHOAS CLI
* [rhoas completion bash](rhoas_completion_bash.md)	 - Generate command completion script for Bash shell
* [rhoas completion fish](rhoas_completion_fish.md)	 - Generate command completion script for fish shell
* [rhoas completion zsh](rhoas_completion_zsh.md)	 - Generate command completion script for Zsh shell

