## rhoas

RHOAS CLI

### Synopsis

Manage your application services directly from the command line.

### Examples

```
# authenticate securely through your web browser
$ rhoas login

# create a Kafka instance
$ rhoas kafka create --name my-kafka-instance

# create a service account and save credentials to a JSON file
$ rhoas service-account create -o json

# connect your Kubernetes/OpenShift cluster to a service
$ rhoas cluster connect

```

### Options

```
  -h, --help      Show help for a command
  -v, --verbose   Enable verbose mode
      --version   Show rhoas version
```

### SEE ALSO

* [rhoas cluster](rhoas_cluster.md)	 - View and perform operations on your Kubernetes or OpenShift cluster
* [rhoas completion](rhoas_completion.md)	 - Outputs command completion for the given shell (bash, zsh, or fish)
* [rhoas kafka](rhoas_kafka.md)	 - Create, view, use, and manage your Kafka instances
* [rhoas login](rhoas_login.md)	 - Log in to RHOAS
* [rhoas logout](rhoas_logout.md)	 - Log out from RHOAS
* [rhoas service-account](rhoas_service-account.md)	 - Create, list, describe, delete and update service accounts
* [rhoas service-registry](rhoas_service-registry.md)	 - [beta] Service Registry commands
* [rhoas status](rhoas_status.md)	 - View the status of all currently used services
* [rhoas whoami](rhoas_whoami.md)	 - Print current username

