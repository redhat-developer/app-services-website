## rhoas cluster

View and perform operations on your Kubernetes or OpenShift cluster

### Synopsis

Use these commands to connect and bind your services to Kubernetes or OpenShift applications. You can also check if the Kubernetes or OpenShift cluster has the required Operators to perform this operation.

### Examples

```
# check status of the connection to your cluster
$ rhoas cluster status 

# connect with cluster without including currently selected services
$ rhoas cluster connect --ignore-context

# connect with cluster using specified token
$ rhoas cluster connect --token=value

# connect with cluster and save script to create service binding
$ rhoas cluster connect --yes > create_service_binding.sh

# connect managed service with your application
$ rhoas cluster bind 

```

### Options inherited from parent commands

```
  -h, --help      Show help for a command
  -v, --verbose   Enable verbose mode
```

### SEE ALSO

* [rhoas](rhoas.md)	 - RHOAS CLI
* [rhoas cluster bind](rhoas_cluster_bind.md)	 - Connect your RHOAS services to Kubernetes or OpenShift applications
* [rhoas cluster connect](rhoas_cluster_connect.md)	 - Connect your services to Kubernetes or OpenShift
* [rhoas cluster status](rhoas_cluster_status.md)	 - View status of the current Kubernetes or OpenShift cluster

