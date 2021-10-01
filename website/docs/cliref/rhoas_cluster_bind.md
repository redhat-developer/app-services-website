## rhoas cluster bind

Connect your RHOAS services to Kubernetes or OpenShift applications

### Synopsis

Command allows you to connect services created by "rhoas cluster connect" command to your application
running on OpenShift or Kubernetes platform.
Bind will scan your namespace and detect all application deployments that you can connect your
services with. 

If your application uses DeploymentConfig --deployment-config flag needs to be supplied in order to detect it.
When deployment-config flag is used binding will not take effect until application is manually redeployed by user.

Bind command detects Kubernetes deployments and inject managed services credentials to them.
For information about what credentials are injected please refer to individual services
By default the command will inject credentials as files into `/bindings` folder inside your application.

Bind command will create volume inside your deployment.
ServiceBindingOperator resource if you have it installed on your cluster


```
rhoas cluster bind [flags]
```

### Examples

```
# Bind using interactive mode
$ rhoas cluster bind

# Bind to specific namespace and application
$ rhoas cluster bind --namespace=ns --app-name=myapp

```

### Options

```
      --app-name string       Name of the kubernetes deployment to bind
      --bind-env              Bind service as environment variables
      --binding-name string   Name of the Service binding object to create when using operator
      --deployment-config     Use DeploymentConfig to detect your application
      --ignore-context        Ignore currently selected services and ask to select each service separately
      --kubeconfig string     Location of the kubeconfig file
  -n, --namespace string      Custom Kubernetes namespace (if not set current namespace will be used)
  -y, --yes                   Forcibly create a binding without confirmation
```

### Options inherited from parent commands

```
  -h, --help      Show help for a command
  -v, --verbose   Enable verbose mode
```

### SEE ALSO

* [rhoas cluster](rhoas_cluster.md)	 - View and perform operations on your Kubernetes or OpenShift cluster

