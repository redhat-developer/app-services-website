## rhoas login

Log in to RHOAS

### Synopsis

Log in securely to RHOAS through a web browser.

This command opens your web browser, where you can enter your credentials.

When using the rhoas CLI in an environment without a web browser, 
you can log in using an offline-token by passing the "--token" flag, which can be obtained at https://console.redhat.com/openshift/token.
Note: token-based login is not supported by the Kafka "topic" and "consumer-group" subcommands.


```
rhoas login [flags]
```

### Examples

```
# securely log in to RHOAS by using a web browser
$ rhoas login

# print the authentication URL instead of automatically opening the browser
$ rhoas login --print-sso-url

# log in using an offline token
$ rhoas login --token <your-token>

```

### Options

```
      --api-gateway string    URL of the API gateway (default "https://api.openshift.com")
      --auth-url string       The URL of the SSO Authentication server (default "https://sso.redhat.com/auth/realms/redhat-external")
      --client-id string      OpenID client identifier (default "rhoas-cli-prod")
      --insecure              Enables insecure communication with the server by disabling TLS certificate and host name verification
      --mas-auth-url string   The URL of the identity.api.openshift.com Authentication server (default "https://identity.api.openshift.com/auth/realms/rhoas")
      --print-sso-url         Prints the console login URL, which you can use to log in to RHOAS from a different web browser (this is useful if you need to log in with different credentials than the credentials you used in your default web browser)
      --scope stringArray     Override the default OpenID scope (to specify multiple scopes, use a separate --scope for each scope) (default [openid])
  -t, --token string          Log in using an offline token, which can be obtained at https://console.redhat.com/openshift/token
```

### Options inherited from parent commands

```
  -h, --help      Show help for a command
  -v, --verbose   Enable verbose mode
```

### SEE ALSO

* [rhoas](rhoas.md)	 - RHOAS CLI

