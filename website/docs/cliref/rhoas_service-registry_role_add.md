## rhoas service-registry role add

[beta] Add or update principal role

### Synopsis

Add or update role for user or service account
This command is available as part of the Development Preview release.


```
rhoas service-registry role add [flags]
```

### Examples

```
## Create or update user role
rhoas service-registry role add --role=ADMIN --username=joedough

```

### Options

```
      --instance-id string       ID of the Service Registry instance to be used. By default, uses the currently selected instance
      --role string              Role to apply
      --service-account string   ServiceAccount name
      --username string          Username of the user within organization
```

### Options inherited from parent commands

```
  -h, --help      Show help for a command
  -v, --verbose   Enable verbose mode
```

### SEE ALSO

* [rhoas service-registry role](rhoas_service-registry_role.md)	 - [beta] Service Registry role management

