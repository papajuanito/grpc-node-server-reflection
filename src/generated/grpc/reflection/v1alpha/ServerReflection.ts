// Original file: proto/grpc/reflection/v1alpha/reflection.proto

import type * as grpc from '@grpc/grpc-js'
import type { ServerReflectionRequest as _grpc_reflection_v1alpha_ServerReflectionRequest, ServerReflectionRequest__Output as _grpc_reflection_v1alpha_ServerReflectionRequest__Output } from '../../../grpc/reflection/v1alpha/ServerReflectionRequest';
import type { ServerReflectionResponse as _grpc_reflection_v1alpha_ServerReflectionResponse, ServerReflectionResponse__Output as _grpc_reflection_v1alpha_ServerReflectionResponse__Output } from '../../../grpc/reflection/v1alpha/ServerReflectionResponse';

export interface ServerReflectionClient extends grpc.Client {
  ServerReflectionInfo(metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientDuplexStream<_grpc_reflection_v1alpha_ServerReflectionRequest, _grpc_reflection_v1alpha_ServerReflectionResponse__Output>;
  ServerReflectionInfo(options?: grpc.CallOptions): grpc.ClientDuplexStream<_grpc_reflection_v1alpha_ServerReflectionRequest, _grpc_reflection_v1alpha_ServerReflectionResponse__Output>;
  serverReflectionInfo(metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientDuplexStream<_grpc_reflection_v1alpha_ServerReflectionRequest, _grpc_reflection_v1alpha_ServerReflectionResponse__Output>;
  serverReflectionInfo(options?: grpc.CallOptions): grpc.ClientDuplexStream<_grpc_reflection_v1alpha_ServerReflectionRequest, _grpc_reflection_v1alpha_ServerReflectionResponse__Output>;
  
}

export interface ServerReflectionHandlers extends grpc.UntypedServiceImplementation {
  ServerReflectionInfo: grpc.handleBidiStreamingCall<_grpc_reflection_v1alpha_ServerReflectionRequest__Output, _grpc_reflection_v1alpha_ServerReflectionResponse>;
  
}
