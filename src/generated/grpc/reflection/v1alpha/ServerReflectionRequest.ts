// Original file: proto/grpc/reflection/v1alpha/reflection.proto

import type { ExtensionRequest as _grpc_reflection_v1alpha_ExtensionRequest, ExtensionRequest__Output as _grpc_reflection_v1alpha_ExtensionRequest__Output } from '../../../grpc/reflection/v1alpha/ExtensionRequest';

export interface ServerReflectionRequest {
  'host'?: (string);
  'fileByFilename'?: (string);
  'fileContainingSymbol'?: (string);
  'fileContainingExtension'?: (_grpc_reflection_v1alpha_ExtensionRequest);
  'allExtensionNumbersOfType'?: (string);
  'listServices'?: (string);
  'messageRequest'?: "fileByFilename"|"fileContainingSymbol"|"fileContainingExtension"|"allExtensionNumbersOfType"|"listServices";
}

export interface ServerReflectionRequest__Output {
  'host': (string);
  'fileByFilename'?: (string);
  'fileContainingSymbol'?: (string);
  'fileContainingExtension'?: (_grpc_reflection_v1alpha_ExtensionRequest__Output);
  'allExtensionNumbersOfType'?: (string);
  'listServices'?: (string);
  'messageRequest': "fileByFilename"|"fileContainingSymbol"|"fileContainingExtension"|"allExtensionNumbersOfType"|"listServices";
}
