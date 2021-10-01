## rhoas status

View the status of all currently used services

### Synopsis

View status information of your currently used services.
Choose to view the status of all services with "rhoas status" or specific services with "rhoas status [service]"

To use a different service run "rhoas service use [args] [flags]".


```
rhoas status [args] [flags]
```

### Examples

```
# view the status of all services
$ rhoas status

# view the status of the used Kafka
$ rhoas status kafka

# view the status of your services in JSON
$ rhoas status -o json

```

### Options

```
  -o, --output string   Format in which to display the status of your services (choose from: "json", "yml", "yaml")
```

### Options inherited from parent commands

```
  -h, --help      Show help for a command
  -v, --verbose   Enable verbose mode
```

### SEE ALSO

* [rhoas](rhoas.md)	 - RHOAS CLI

