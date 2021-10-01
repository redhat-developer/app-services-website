## rhoas kafka topic create

Create a topic

### Synopsis

Create a topic in the current Apache Kafka instance.

This command lets you create a topic, set a desired number of
partitions, retention size and retention period or else use the default values.


```
rhoas kafka topic create [flags]
```

### Examples

```
# create a topic
$ rhoas kafka topic create --name topic-1

```

### Options

```
      --cleanup-policy string   Determines whether log messages are deleted, compacted, or both (default "delete")
      --name string             Topic name
  -o, --output string           Format in which to display the Kafka topic (choose from: "json", "yml", "yaml") (default "json")
      --partitions int32        The number of partitions in the topic (default 1)
      --retention-bytes int     The maximum total size of a partition log segments before old log segments are deleted to free up space (default -1)
      --retention-ms int        The period of time in milliseconds the broker will retain a partition log before deleting it (default 604800000)
```

### Options inherited from parent commands

```
  -h, --help      Show help for a command
  -v, --verbose   Enable verbose mode
```

### SEE ALSO

* [rhoas kafka topic](rhoas_kafka_topic.md)	 - Create, describe, update, list and delete topics

