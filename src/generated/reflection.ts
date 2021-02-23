import type * as grpc from '@grpc/grpc-js';
import type { ServiceDefinition, EnumTypeDefinition, MessageTypeDefinition } from '@grpc/proto-loader';

import type { ServerReflectionClient as _grpc_reflection_v1alpha_ServerReflectionClient } from './grpc/reflection/v1alpha/ServerReflection';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  grpc: {
    reflection: {
      v1alpha: {
        ErrorResponse: MessageTypeDefinition
        ExtensionNumberResponse: MessageTypeDefinition
        ExtensionRequest: MessageTypeDefinition
        FileDescriptorResponse: MessageTypeDefinition
        ListServiceResponse: MessageTypeDefinition
        ServerReflection: SubtypeConstructor<typeof grpc.Client, _grpc_reflection_v1alpha_ServerReflectionClient> & { service: ServiceDefinition }
        ServerReflectionRequest: MessageTypeDefinition
        ServerReflectionResponse: MessageTypeDefinition
        ServiceResponse: MessageTypeDefinition
      }
    }
  }
}

