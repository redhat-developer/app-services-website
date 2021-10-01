## rhoas service-registry artifact export

[beta] Export data from Service Registry instance

### Synopsis

Export all artifacts and metadata from Service Registry instance to specified file

This command is available as part of the Development Preview release.


```
rhoas service-registry artifact export [flags]
```

### Examples

```
## Export all artifacts and metadata to export file for another Service Registry instance
rhoas service-registry artifact export --file=export.zip

```

### Options

```
      --instance-id string   ID of the Service Registry instance to be used. By default, uses the currently selected instance
      --output-file string   File location of the artifact
```

### Options inherited from parent commands

```
  -h, --help      Show help for a command
  -v, --verbose   Enable verbose mode
```

### SEE ALSO

* [rhoas service-registry artifact](rhoas_service-registry_artifact.md)	 - [beta] Manage Service Registry artifacts

