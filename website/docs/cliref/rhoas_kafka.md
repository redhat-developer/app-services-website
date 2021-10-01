## rhoas kafka

Create, view, use, and manage your Kafka instances

### Synopsis

Commands for managing and interacting with Kafka instances.

Commands are divided into the following categories:
 - instance management commands: create, list, and so on
 - commands executed on the selected instance: topic, consumer-group
 - "use" command that selects the current instance


### Examples

```
## Create an Kafka instance
rhoas kafka create --name my-kafka-instance

## View configuration details of an Kafka instance
rhoas kafka describe

## List all Kafka instances
rhoas kafka list

## Create an Kafka Topic
rhoas kafka topic create --name mytopic 

```

### Options inherited from parent commands

```
  -h, --help      Show help for a command
  -v, --verbose   Enable verbose mode
```

### SEE ALSO

* [rhoas](rhoas.md)	 - RHOAS CLI
* [rhoas kafka consumer-group](rhoas_kafka_consumer-group.md)	 - Describe, list, and delete consumer groups for the current Apache Kafka instance
* [rhoas kafka create](rhoas_kafka_create.md)	 - Create an Apache Kafka instance
* [rhoas kafka delete](rhoas_kafka_delete.md)	 - Delete an Apache Kafka instance
* [rhoas kafka describe](rhoas_kafka_describe.md)	 - View configuration details of an Apache Kafka instance
* [rhoas kafka list](rhoas_kafka_list.md)	 - List all Apache Kafka instances
* [rhoas kafka topic](rhoas_kafka_topic.md)	 - Create, describe, update, list and delete topics
* [rhoas kafka update](rhoas_kafka_update.md)	 - Update configuration details of a Kafka instance.
* [rhoas kafka use](rhoas_kafka_use.md)	 - Set the current Apache Kafka instance

