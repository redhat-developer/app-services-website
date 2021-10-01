## rhoas service-registry create

[beta] Create a Service Registry instance

### Synopsis

Create a Service Registry instance to store and manage your schema and API artifacts. 

This command is available as part of the Development Preview release.


```
rhoas service-registry create [flags]
```

### Examples

```
## Create Service Registry instance
rhoas service-registry create --name myregistry

```

### Options

```
      --name string     Unique name of the Service Registry instance
  -o, --output string   Format in which to display the Service Registry instance (choose from: "json", "yml", "yaml") (default "json")
      --use             Set the new Service Registry instance to the current instance (default true)
```

### Options inherited from parent commands

```
  -h, --help      Show help for a command
  -v, --verbose   Enable verbose mode
```

### SEE ALSO

* [rhoas service-registry](rhoas_service-registry.md)	 - [beta] Service Registry commands

