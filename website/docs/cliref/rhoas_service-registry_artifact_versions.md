## rhoas service-registry artifact versions

[beta] Get latest artifact versions by artifact-id and group

### Synopsis

Get latest artifact versions by specifying group and artifact-id
This command is available as part of the Development Preview release.


```
rhoas service-registry artifact versions [flags]
```

### Examples

```
## Get latest artifact versions for default group
rhoas service-registry artifact versions --artifact-id=my-artifact

## Get latest artifact versions for my-group group
rhoas service-registry artifact versions --artifact-id=my-artifact --group mygroup

```

### Options

```
      --artifact-id string   ID of the artifact
  -g, --group string         Artifact group (default "default")
      --instance-id string   ID of the Service Registry instance to be used. By default, uses the currently selected instance
  -o, --output string        Output format (json, yaml, yml)
```

### Options inherited from parent commands

```
  -h, --help      Show help for a command
  -v, --verbose   Enable verbose mode
```

### SEE ALSO

* [rhoas service-registry artifact](rhoas_service-registry_artifact.md)	 - [beta] Manage Service Registry artifacts

