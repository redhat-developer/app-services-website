## rhoas service-registry list

[beta] List Service Registry instances

### Synopsis

 
List all Service Registry instances for your account and paginate over the results.

This command is available as part of the Development Preview release.


```
rhoas service-registry list [flags]
```

### Examples

```
rhoas service-registry list

```

### Options

```
      --limit int32     The maximum number of Service Registry instances to be returned (default 100)
  -o, --output string   Format in which to display the Service Registry instance (choose from: "json", "yml", "yaml")
      --page int32      Display the Service Registry instances from the specified page number (default 1)
```

### Options inherited from parent commands

```
  -h, --help      Show help for a command
  -v, --verbose   Enable verbose mode
```

### SEE ALSO

* [rhoas service-registry](rhoas_service-registry.md)	 - [beta] Service Registry commands

