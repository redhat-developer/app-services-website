## rhoas service-registry artifact delete

[beta] Deletes single or all artifacts in a given group

### Synopsis

Deletes single or all artifacts in a given group.

When called without arguments, deletes all artifacts in the group
When --artifact-id is specified, deletes only a single artifact and its version
When --group parameter is missing, the command uses the "default" group.

This command is available as part of the Development Preview release.


```
rhoas service-registry artifact delete [flags]
```

### Examples

```
## Delete all artifacts in the group "default"
rhoas service-registry artifact delete

## Delete artifact in the group "default" with name "my-artifact"
rhoas service-registry artifact delete --artifact-id=my-artifact

```

### Options

```
      --artifact-id string   ID of the artifact
  -g, --group string         Artifact group (default "default")
      --instance-id string   ID of the Service Registry instance to be used. By default, uses the currently selected instance
  -y, --yes                  Delete artifact without prompt
```

### Options inherited from parent commands

```
  -h, --help      Show help for a command
  -v, --verbose   Enable verbose mode
```

### SEE ALSO

* [rhoas service-registry artifact](rhoas_service-registry_artifact.md)	 - [beta] Manage Service Registry artifacts

