## rhoas kafka use

Set the current Apache Kafka instance

### Synopsis

Select an Apache Kafka instance and set it as the current instance.
You can specify a Apache Kafka instance by --name or --id.

When you set the Kafka instance to be used, it is set as the current instance for all rhoas kafka topics and rhoas kafka consumer-group commands.



```
rhoas kafka use [flags]
```

### Examples

```
# set a kafka instance to be the current instance
$ rhoas kafka use --name=my-kafka

# set a kafka instance to be the current instance
$ rhoas kafka use --id=1iSY6RQ3JKI8Q0OTmjQFd3ocFRg

```

### Options

```
      --id string     Unique ID of the Kafka instance you want to set as the current instance
      --name string   Name of the Kafka instance you want to set as the current instance
```

### Options inherited from parent commands

```
  -h, --help      Show help for a command
  -v, --verbose   Enable verbose mode
```

### SEE ALSO

* [rhoas kafka](rhoas_kafka.md)	 - Create, view, use, and manage your Kafka instances

