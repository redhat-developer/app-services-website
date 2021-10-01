## rhoas kafka describe

View configuration details of an Apache Kafka instance

### Synopsis

View configuration fields and their values for an Apache Kafka instance.

Pass the "--id" flag to specify which instance you would like to view.

If the "--id" flag is not passed then the selected Kafka instance will be used, if available.

You can view the output as either as JSON or YAML.


```
rhoas kafka describe [flags]
```

### Examples

```
# view the current Kafka instance instance
$ rhoas kafka describe

# view a specific instance by passing the --id flag
$ rhoas kafka describe --id=1iSY6RQ3JKI8Q0OTmjQFd3ocFRg

# view a specific instance by passing the --name flag
$ rhoas kafka describe --name=my-kafka

# customise the output format
$ rhoas kafka describe -o yaml

```

### Options

```
      --bootstrap-server   If specified, only bootstrap server host of the Kafka instance will be displayed
      --id string          Unique ID of the Kafka instance you want to view
      --name string        Name of the Kafka instance you want to view
  -o, --output string      Format in which to display the Kafka instance (choose from: "json", "yml", "yaml") (default "json")
```

### Options inherited from parent commands

```
  -h, --help      Show help for a command
  -v, --verbose   Enable verbose mode
```

### SEE ALSO

* [rhoas kafka](rhoas_kafka.md)	 - Create, view, use, and manage your Kafka instances

