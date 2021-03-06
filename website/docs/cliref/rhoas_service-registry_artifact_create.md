## rhoas service-registry artifact create

[beta] Creates new artifact from file or standard input

### Synopsis

Creates a new artifact by posting the artifact content to the registry instance.

Artifacts are typically in JSON format for most of the supported types, but may be in another format for a few (for example, PROTOBUF).
Service Registry attempts to figure out what kind of artifact is being added from the following supported list:

- Avro (AVRO)
- Protobuf (PROTOBUF)
- JSON Schema (JSON)
- Kafka Connect (KCONNECT)
- OpenAPI (OPENAPI)
- AsyncAPI (ASYNCAPI)
- GraphQL (GRAPHQL)
- Web Services Description Language (WSDL)
- XML Schema (XSD)

An artifact is created using the content provided in the request body.
This content is created with a unique artifact ID that can be provided by user.
If not provided in the request, the registry server generates a unique ID for the artifact.
It is typically recommended that callers provide the ID, because this is a meaningful identifier, and for most use cases should be supplied by the caller.
If an artifact with the provided artifact ID already exists, the command will fail with an error.

When the --group parameter is missing, the command uses the "default" group.
when the --instance-id is missing, the command creates a new artifact for the currently active Service Registry instance (displayed in rhoas service-registry describe)

This command is available as part of the Development Preview release.


```
rhoas service-registry artifact create [flags]
```

### Examples

```
# Create an artifact in the default group
rhoas service-registry artifact create my-artifact.json

# Create an artifact with the specified type
rhoas service-registry artifact create --type=JSON my-artifact.json

```

### Options

```
      --artifact-id string   ID of the artifact
      --description string   Custom description of the artifact
      --file string          File location of the artifact
  -g, --group string         Artifact group (default "default")
      --instance-id string   ID of the Service Registry instance to be used. By default, uses the currently selected instance
      --name string          Custom name of the artifact
  -o, --output string        Format in which to display the Service Registry instance (choose from: "json", "yml", "yaml") (default "json")
  -t, --type string          Type of artifact. Choose from: AVRO, PROTOBUF, JSON, OPENAPI, ASYNCAPI, GRAPHQL, KCONNECT, WSDL, XSD, XML
      --version string       Custom version of the artifact (for example 1.0.0)
```

### Options inherited from parent commands

```
  -h, --help      Show help for a command
  -v, --verbose   Enable verbose mode
```

### SEE ALSO

* [rhoas service-registry artifact](rhoas_service-registry_artifact.md)	 - [beta] Manage Service Registry artifacts

