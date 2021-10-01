## rhoas completion zsh

Generate command completion script for Zsh shell

### Synopsis

Generate command completion script for Zsh shell.

1. Run `rhoas completion zsh > "${fpath[1]}/_rhoas"` to install the completion script.
2. Unless already installed, run `echo "autoload -U compinit; compinit" >> ~/.zshrc` to enable shell completions for Zsh.



```
rhoas completion zsh
```

### Examples

```
rhoas completion zsh

```

### Options inherited from parent commands

```
  -h, --help      Show help for a command
  -v, --verbose   Enable verbose mode
```

### SEE ALSO

* [rhoas completion](rhoas_completion.md)	 - Outputs command completion for the given shell (bash, zsh, or fish)

