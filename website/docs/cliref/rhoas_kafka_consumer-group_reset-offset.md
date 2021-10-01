## rhoas kafka consumer-group reset-offset

Reset offset for a consumer group

### Synopsis

Reset the offset for consumers in a consumer group reading from a given topic.

Offset types: earliest, latest, absolute, timestamp
You can choose specific partition to reset offset from (advanced usage)


```
rhoas kafka consumer-group reset-offset [flags]
```

### Examples

```
# reset offset for a consumer group to latest
$ rhoas kafka consumer-group reset-offset --id consumer_group_1 --offset latest

# reset offset for a consumer group to earliest
$ rhoas kafka consumer-group reset-offset --id consumer_group_1 --offset earliest

# reset offset for a consumer group to an absolute value
$ rhoas kafka consumer-group reset-offset --id consumer_group_1 --offset absolute --value 0

# reset offset for a consumer group to a timestamp
$ rhoas kafka consumer-group reset-offset --id consumer_group_1 --offset timestamp --value "2016-06-23T09:07:21-07:00"

# reset offset for specific partitions in a consumer group
$ rhoas kafka consumer-group reset-offset --id consumer_group_1 --offset latest --topic my-topic --partitions 0,1

```

### Options

```
      --id string               The unique ID of the consumer group to reset-offset
      --offset string           Offset type (choose from: "earliest", "latest", "absolute", "timestamp")
      --partitions int32Slice   Partitions on which to reset the consumer group offset (comma-separated integers) (default [])
      --topic string            Select topic for which consumer group offsets are to be reset
      --value string            Custom offset value (required when offset is "absolute" or "timestamp")
  -y, --yes                     Skip confirmation to forcibly reset the offset for the consumer group
```

### Options inherited from parent commands

```
  -h, --help      Show help for a command
  -v, --verbose   Enable verbose mode
```

### SEE ALSO

* [rhoas kafka consumer-group](rhoas_kafka_consumer-group.md)	 - Describe, list, and delete consumer groups for the current Apache Kafka instance

