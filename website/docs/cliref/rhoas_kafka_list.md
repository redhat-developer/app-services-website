## rhoas kafka list

List all Apache Kafka instances

### Synopsis

List all Apache Kafka instances.

This command will provide a high level view of all Kafka instances.
The fields displayed are: ID, Name, Owner, Status, Cloud Provider, Region.
Use the describe command to view all fields for a specific instance.

The instances are displayed by default in a table, but can also be displayed as JSON or YAML.


```
rhoas kafka list [flags]
```

### Examples

```
# list all Kafka instances using the default output format
$ rhoas kafka list

# list all Kafka instances using JSON as the output format
$ rhoas kafka list -o json

```

### Options

```
      --limit int       The maximum number of Kafka instances to be returned (default 100)
  -o, --output string   Format in which to display the Kafka instances (choose from: "json", "yml", "yaml")
      --page int        Display the Kafka instances from the specified page number (default 1)
      --search string   Text search to filter the Kafka instances by name, owner, cloud_provider, region and status
```

### Options inherited from parent commands

```
  -h, --help      Show help for a command
  -v, --verbose   Enable verbose mode
```

### SEE ALSO

* [rhoas kafka](rhoas_kafka.md)	 - Create, view, use, and manage your Kafka instances

