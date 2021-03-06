## rhoas service-registry artifact metadata-set

[beta] Update artifact metadata

### Synopsis

Updates the metadata for an artifact in a Service Registry instance
Editable metadata includes fields like name and description

This command is available as part of the Development Preview release.


```
rhoas service-registry artifact metadata-set [flags]
```

### Examples

```
## Update the metadata for an artifact
rhoas service-registry artifact metadata-set --artifact-id=my-artifact --group=my-group --name=my-name --description=my-description

## Update the metadata for an artifact using your default editor ($EDITOR)
rhoas service-registry artifact metadata-set --artifact-id=my-artifact

##  Update the metadata for an artifact using Visual Studio Code
EDITOR="code -w" rhoas service-registry artifact metadata-set --artifact-id=my-artifact

```

### Options

```
      --artifact-id string   ID of the artifact
      --description string   Custom description of the artifact
  -g, --group string         Artifact group (default "default")
      --instance-id string   ID of the Service Registry instance to be used. By default, uses the currently selected instance
      --name string          Custom name of the artifact
  -o, --output string        Output format (json, yaml, yml)
```

### Options inherited from parent commands

```
  -h, --help      Show help for a command
  -v, --verbose   Enable verbose mode
```

### SEE ALSO

* [rhoas service-registry artifact](rhoas_service-registry_artifact.md)	 - [beta] Manage Service Registry artifacts

