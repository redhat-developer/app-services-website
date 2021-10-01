## rhoas completion bash

Generate command completion script for Bash shell

### Synopsis

Generate command completion script for Bash shell.

Installing on Linux:

1. Run `rhoas completion bash > rhoas_completions` to create the script file.
2. Run `sudo mv rhoas_completions /etc/bash_completion.d/rhoas` to place the script in a special Bash completions directory.

Installing on macOS:

1. Run `rhoas completion bash > rhoas_completions` to create the script file.
2. Run `sudo mv rhoas_completions /usr/local/etc/bash_completion.d/rhoas` to place the script in a special Bash completions directory.


```
rhoas completion bash
```

### Examples

```
rhoas completion bash

```

### Options inherited from parent commands

```
  -h, --help      Show help for a command
  -v, --verbose   Enable verbose mode
```

### SEE ALSO

* [rhoas completion](rhoas_completion.md)	 - Outputs command completion for the given shell (bash, zsh, or fish)

