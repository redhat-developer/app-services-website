## rhoas kafka topic describe

Describe a topic

### Synopsis

Print detailed configuration information for a Kafka topic.


```
rhoas kafka topic describe [flags]
```

### Examples

```
# describe a topic
$ rhoas kafka topic describe --name topic-1

```

### Options

```
      --name string     Format in which to display the Kafka topic (choose from: "json", "yml", "yaml")
  -o, --output string   Format in which to display the Kafka topic (choose from: "json", "yml", "yaml") (default "json")
```

### Options inherited from parent commands

```
  -h, --help      Show help for a command
  -v, --verbose   Enable verbose mode
```

### SEE ALSO

* [rhoas kafka topic](rhoas_kafka_topic.md)	 - Create, describe, update, list and delete topics

