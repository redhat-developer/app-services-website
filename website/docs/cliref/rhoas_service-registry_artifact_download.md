## rhoas service-registry artifact download

[beta] Download artifacts from Service Registry using global identifiers

### Synopsis

Get single or more artifacts by group, content, hash or globalIds.
NOTE: Use "service-registry get" command to download artifacts by artifactId.

Flags are used to specify the artifact to download:

--contentId - ID if the content is from metadata
--globalId - globalId of the content from metadata
--hash - SHA-256 hash of the content

This command is available as part of the Development Preview release.


```
rhoas service-registry artifact download [flags]
```

### Examples

```
## Get latest artifact by content ID
rhoas service-registry artifact download --content-id=183282932983

## Get latest artifact by content ID to specific file
rhoas service-registry artifact download --content-id=183282932983 --output-file=schema.json

## Get latest artifact by global ID
rhoas service-registry artifact download --global-id=383282932983

## Get latest artifact by hash
rhoas service-registry artifact download --hash=c71d239df91726fc519c6eb72d318ec65820627232b2f796219e87dcf35d0ab4

```

### Options

```
      --content-id int       ContentId of the artifact (default -1)
      --global-id int        Global ID of the artifact (default -1)
  -g, --group string         Artifact group (default "default")
      --hash string          SHA-256 hash of the artifact
      --instance-id string   ID of the Service Registry instance to be used. By default, uses the currently selected instance
      --output-file string   Location of the output file
```

### Options inherited from parent commands

```
  -h, --help      Show help for a command
  -v, --verbose   Enable verbose mode
```

### SEE ALSO

* [rhoas service-registry artifact](rhoas_service-registry_artifact.md)	 - [beta] Manage Service Registry artifacts

