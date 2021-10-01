## rhoas service-registry describe

[beta] Describe a Service Registry instance

### Synopsis

 
Describe a Service Registry instance. Fetch all required fields including the registry URL. 

This command is available as part of the Development Preview release.


```
rhoas service-registry describe [flags]
```

### Examples

```
# Describe a Service Registry instance by name
rhoas service-registry describe --name <name>


# Describe a Service Registry instance by ID
rhoas service-registry describe --id <id>

```

### Options

```
      --id string       Unique ID of the Service Registry instance (if not provided, the current Service Registry instance will be used)
      --name string     Name of the Service Registry instance to view
  -o, --output string   Format in which to display the Service Registry instance (choose from: "json", "yml", "yaml") (default "json")
```

### Options inherited from parent commands

```
  -h, --help      Show help for a command
  -v, --verbose   Enable verbose mode
```

### SEE ALSO

* [rhoas service-registry](rhoas_service-registry.md)	 - [beta] Service Registry commands

