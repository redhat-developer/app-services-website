## rhoas cluster connect

Connect your services to Kubernetes or OpenShift

### Synopsis

Connect your application services to your Kubernetes or OpenShift cluster.
The kubeconfig file is used to connect to the cluster and identify the context.
Alternatively, you can use the KUBECONFIG environment variable to read your configuration.

NOTE: This command requires the RHOAS operator to be running on your cluster.

This command will:

1. Create a service account and mount it as a secret into your cluster.
If the cluster has a service account, it will be refreshed.

2. Create a Kafka Request object that can be used to create a ServiceBinding object using
the Service Binding operator (https://github.com/redhat-developer/service-binding-operator).



```
rhoas cluster connect [flags]
```

### Examples

```
# connect the current Kafka instance to your cluster
$ rhoas cluster connect

```

### Options

```
      --ignore-context      Ignore currently selected services and ask to select each service separately
      --kubeconfig string   Location of the kubeconfig file
  -n, --namespace string    Custom Kubernetes namespace (if not set current namespace will be used)
      --token string        Provide an offline token to be used by the operator (to get a token, visit https://console.redhat.com/openshift/token)
                            
  -y, --yes                 Forcibly create a binding without confirmation
```

### Options inherited from parent commands

```
  -h, --help      Show help for a command
  -v, --verbose   Enable verbose mode
```

### SEE ALSO

* [rhoas cluster](rhoas_cluster.md)	 - View and perform operations on your Kubernetes or OpenShift cluster

