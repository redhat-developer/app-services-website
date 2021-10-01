## rhoas kafka delete

Delete an Apache Kafka instance

### Synopsis

Permanently delete an Apache Kafka instance, including all topics.

When this command is run, you will be asked to confirm the name of the instance you want to delete.
Otherwise you can pass "--yes" to skip confirmation and forcibly delete the instance.


```
rhoas kafka delete [flags]
```

### Examples

```
# delete the current Kafka instance
$ rhoas kafka delete

# delete a Kafka instance with a specific ID
$ rhoas kafka delete --id=1iSY6RQ3JKI8Q0OTmjQFd3ocFRg

# delete a Kafka instance with a specific name
$ rhoas kafka delete --name=my-kafka

```

### Options

```
      --id string     Unique ID of the Kafka instance you want to delete
      --name string   Name of the Kafka instance you want to delete
  -y, --yes           Skip confirmation to forcibly delete this Kafka instance
```

### Options inherited from parent commands

```
  -h, --help      Show help for a command
  -v, --verbose   Enable verbose mode
```

### SEE ALSO

* [rhoas kafka](rhoas_kafka.md)	 - Create, view, use, and manage your Kafka instances

