## rhoas kafka consumer-group list

List all consumer groups

### Synopsis

List all consumer groups in the current Apache Kafka instance.

```
rhoas kafka consumer-group list [flags]
```

### Examples

```
# list all consumer groups
$ rhoas kafka consumer-group list

# list all consumer groups as JSON
$ rhoas kafka consumer-group list -o json

```

### Options

```
  -o, --output string   Format in which to display the consumer group (choose from: "json", "yml", "yaml")
      --page int32      Current page number for list of consumer groups (default 1)
      --search string   Text search to filter consumer groups by ID
      --size int32      Maximum number of consumer groups to be returned per page (default 10)
      --topic string    Fetch the consumer groups for a specific Kafka topic
```

### Options inherited from parent commands

```
  -h, --help      Show help for a command
  -v, --verbose   Enable verbose mode
```

### SEE ALSO

* [rhoas kafka consumer-group](rhoas_kafka_consumer-group.md)	 - Describe, list, and delete consumer groups for the current Apache Kafka instance

