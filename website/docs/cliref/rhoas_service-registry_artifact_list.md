## rhoas service-registry artifact list

[beta] List artifacts

### Synopsis

List all artifacts for the group by specified output format (by default, table)
This command is available as part of the Development Preview release.


```
rhoas service-registry artifact list [flags]
```

### Examples

```
## List all artifacts for the "default" artifact group
rhoas service-registry artifact list

## List all artifacts with "my-group" group
rhoas service-registry artifact list --group=my-group

## List all artifacts with limit and group
rhoas service-registry artifact list --page=2 --limit=10

```

### Options

```
  -g, --group string         Artifact group (default "default")
      --instance-id string   ID of the Service Registry instance to be used. By default, uses the currently selected instance
      --limit int32          Page limit (default 100)
  -o, --output string        Output format (json, yaml, yml)
      --page int32           Page number (default 1)
```

### Options inherited from parent commands

```
  -h, --help      Show help for a command
  -v, --verbose   Enable verbose mode
```

### SEE ALSO

* [rhoas service-registry artifact](rhoas_service-registry_artifact.md)	 - [beta] Manage Service Registry artifacts

