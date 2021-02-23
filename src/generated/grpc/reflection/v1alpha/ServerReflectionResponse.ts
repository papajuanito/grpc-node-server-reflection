// Original file: proto/grpc/reflection/v1alpha/reflection.proto

import type { ServerReflectionRequest as _grpc_reflection_v1alpha_ServerReflectionRequest, ServerReflectionRequest__Output as _grpc_reflection_v1alpha_ServerReflectionRequest__Output } from '../../../grpc/reflection/v1alpha/ServerReflectionRequest';
import type { FileDescriptorResponse as _grpc_reflection_v1alpha_FileDescriptorResponse, FileDescriptorResponse__Output as _grpc_reflection_v1alpha_FileDescriptorResponse__Output } from '../../../grpc/reflection/v1alpha/FileDescriptorResponse';
import type { ExtensionNumberResponse as _grpc_reflection_v1alpha_ExtensionNumberResponse, ExtensionNumberResponse__Output as _grpc_reflection_v1alpha_ExtensionNumberResponse__Output } from '../../../grpc/reflection/v1alpha/ExtensionNumberResponse';
import type { ListServiceResponse as _grpc_reflection_v1alpha_ListServiceResponse, ListServiceResponse__Output as _grpc_reflection_v1alpha_ListServiceResponse__Output } from '../../../grpc/reflection/v1alpha/ListServiceResponse';
import type { ErrorResponse as _grpc_reflection_v1alpha_ErrorResponse, ErrorResponse__Output as _grpc_reflection_v1alpha_ErrorResponse__Output } from '../../../grpc/reflection/v1alpha/ErrorResponse';

export interface ServerReflectionResponse {
  'validHost'?: (string);
  'originalRequest'?: (_grpc_reflection_v1alpha_ServerReflectionRequest);
  'fileDescriptorResponse'?: (_grpc_reflection_v1alpha_FileDescriptorResponse);
  'allExtensionNumbersResponse'?: (_grpc_reflection_v1alpha_ExtensionNumberResponse);
  'listServicesResponse'?: (_grpc_reflection_v1alpha_ListServiceResponse);
  'errorResponse'?: (_grpc_reflection_v1alpha_ErrorResponse);
  'messageResponse'?: "fileDescriptorResponse"|"allExtensionNumbersResponse"|"listServicesResponse"|"errorResponse";
}

export interface ServerReflectionResponse__Output {
  'validHost': (string);
  'originalRequest'?: (_grpc_reflection_v1alpha_ServerReflectionRequest__Output);
  'fileDescriptorResponse'?: (_grpc_reflection_v1alpha_FileDescriptorResponse__Output);
  'allExtensionNumbersResponse'?: (_grpc_reflection_v1alpha_ExtensionNumberResponse__Output);
  'listServicesResponse'?: (_grpc_reflection_v1alpha_ListServiceResponse__Output);
  'errorResponse'?: (_grpc_reflection_v1alpha_ErrorResponse__Output);
  'messageResponse': "fileDescriptorResponse"|"allExtensionNumbersResponse"|"listServicesResponse"|"errorResponse";
}
