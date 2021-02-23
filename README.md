# gRPC NodeJS Server Reflection

This package adds Server Reflection support to your `@grpc/grpc-js` servers.

## Installation

### npm:

```bash
npm install grpc-node-server-reflection
```

### yarn:

```bash
yarn add grpc-node-server-reflection
```

## How to use

To add the server reflection service pass your gRPC Server instance to the provided `wrapServerWithReflection`.

```ts
import * as grpc from '@grpc/grpc-js';
import wrapServerWithReflection from 'grpc-node-server-reflection';

// This wraps the instance of gRPC server with the Server Reflection service and returns it.
const server = wrapServerWithReflection(new grpc.Server());


// Since the wrapped server intercepts the `addService` method to keep track
// of all services added to the server make sure to add your services after
// wrapping your instance of the gRPC Server.
server.addService(...);

```

After wrapping your server you should now be able to rely on server reflection:

```bash
$ grpcurl -plaintext localhost:8080 list


grpc.reflection.v1alpha.ServerReflection
example.ExampleService

```

```bash
$ grpcurl -plaintext localhost:8080 describe grpc.reflection.v1alpha.ServerReflection

grpc.reflection.v1alpha.ServerReflection is a service:
service ServerReflection {
  rpc ServerReflectionInfo ( stream .grpc.reflection.v1alpha.ServerReflectionRequest ) returns ( stream .grpc.reflection.v1alpha.ServerReflectionResponse );
}

```

## Support Status

Current Support by Server Reflection Request type:

| Type                    | Description                                                                                                  | Supported          |
| ----------------------- | ------------------------------------------------------------------------------------------------------------ | ------------------ |
| ListServices            | List the full names of registered services                                                                   | :heavy_check_mark: |
| FileContainingSymbol    | Find the proto file that declares the given fully-qualified symbol name.                                     | :heavy_check_mark: |
| FileByFilename          | Find a proto file by the file name.                                                                          | :x:                |
| FileContainingExtension | Find the proto file which defines an extension extending the given message type with the given field number. | :x:                |
