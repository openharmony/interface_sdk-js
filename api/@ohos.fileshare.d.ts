/*
 * Copyright (C) 2022-2023 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import type { AsyncCallback, Callback } from './@ohos.base';
import type wantConstant from './@ohos.ability.wantConstant';

/**
 * Provides fileshare APIS
 *
 * @namespace fileShare
 * @syscap SystemCapability.FileManagement.AppFileService
 * @since 9
 */
declare namespace fileShare {
  /**
   * Enumerates the uri operate mode types.
   *
   * @enum { number } OperationMode
   * @syscap SystemCapability.FileManagement.AppFileService
   * @since 11
   */
  export enum OperationMode {
    /**
     * Indicates read permissions.
     *
     * @syscap SystemCapability.FileManagement.AppFileService
     * @since 11
     */
    READ_MODE = 0b1,

    /**
     * Indicates write permissions.
     *
     * @syscap SystemCapability.FileManagement.AppFileService
     * @since 11
     */
    WRITE_MODE = 0b10,
  }

  /**
   * Enumerates the identity of the URI policy.
   *
   * @enum { number } PolicyFlag
   * @syscap SystemCapability.FileManagement.AppFileService
   * @since 11
   */
  export enum PolicyFlag {
    /**
     * Indicates that the URI is allowed to be persisted.
     *
     * @syscap SystemCapability.FileManagement.AppFileService
     * @since 11
     */
    ALLOW_PERSISTENCE = 0b1,

    /**
     * Indicates that the URI is forbidden to be persisted.
     *
     * @syscap SystemCapability.FileManagement.AppFileService
     * @since 11
     */
    FORBID_PERSISTENCE = 0b10,
  }

  /**
   * Enumerates the error code of the permission policy for the URI operation.
   *
   * @enum { number } PolicyErrorCode
   * @syscap SystemCapability.FileManagement.AppFileService
   * @since 11
   */
  export enum PolicyErrorCode {
    /**
     * Indicates that the policy is not allowed to be persisted.
     *
     * @syscap SystemCapability.FileManagement.AppFileService
     * @since 11
     */
    PERSISTENCE_FORBIDDEN = 1,

    /**
     * Indicates that the mode of this policy is invalid.
     *
     * @syscap SystemCapability.FileManagement.AppFileService
     * @since 11
     */
    INVALID_MODE = 2,

    /**
     * Indicates that the path of this policy is invalid.
     *
     * @syscap SystemCapability.FileManagement.AppFileService
     * @since 11
     */
    INVALID_PATH = 3,
  }

  /**
   * Failed policy result on URI.
   *
   * @syscap SystemCapability.FileManagement.AppFileService
   * @since 11
   */
  export type PolicyErrorResult = {
    /**
     * Indicates the failed uri of the policy information.
     *
     * @type { string }
     * @syscap SystemCapability.FileManagement.AppFileService
     * @since 11
     */
    uri: string;

    /**
     * Indicates the error code of the failure in the policy information.
     *
     * @type { PolicyErrorCode }
     * @syscap SystemCapability.FileManagement.AppFileService
     * @since 11
     */
    code: PolicyErrorCode;

    /**
     * Indicates the reason of the failure in the policy information.
     *
     * @type { string }
     * @syscap SystemCapability.FileManagement.AppFileService
     * @since 11
     */
    message: string;
  };

  /**
   * Policy information to manager permissions on a URI.
   *
   * @interface PolicyInfo
   * @syscap SystemCapability.FileManagement.AppFileService
   * @since 11
   */
  export interface PolicyInfo {
    /**
     * Indicates the uri of the policy information.
     *
     * @syscap SystemCapability.FileManagement.AppFileService
     * @since 11
     */
    uri: string;

    /**
     * Indicates the mode of operation for the URI, example { OperationMode.READ_MODE } or { OperationMode.READ_MODE | OperationMode.WRITE_MODE }
     *
     * @syscap SystemCapability.FileManagement.AppFileService
     * @since 11
     */
    operationMode: number;
  }

  /**
   * Provides grant uri permission for app
   *
   * @permission ohos.permission.WRITE_MEDIA
   * @param { string } uri uri
   * @param { string } bundleName bundleName
   * @param { wantConstant.Flags } flag wantConstant.Flags.FLAG_AUTH_READ_URI_PERMISSION or wantConstant.Flags.FLAG_AUTH_WRITE_URI_PERMISSION
   * @param { AsyncCallback<void> } callback
   * @throws { BusinessError } 201 - Permission verification failed
   * @throws { BusinessError } 202 - The caller is not a system application
   * @throws { BusinessError } 401 - The input parameter is invalid
   * @throws { BusinessError } 143000001 - IPC error
   * @syscap SystemCapability.FileManagement.AppFileService
   * @systemapi
   * @since 9
   */
  function grantUriPermission(
    uri: string,
    bundleName: string,
    flag: wantConstant.Flags,
    callback: AsyncCallback<void>
  ): void;

  /**
   * Provides grant uri permission for app
   *
   * @permission ohos.permission.WRITE_MEDIA
   * @param { string } uri uri
   * @param { string } bundleName bundleName
   * @param { wantConstant.Flags } flag wantConstant.Flags.FLAG_AUTH_READ_URI_PERMISSION or wantConstant.Flags.FLAG_AUTH_WRITE_URI_PERMISSION
   * @returns { Promise<void> } no callback return Promise otherwise return void
   * @throws { BusinessError } 201 - Permission verification failed
   * @throws { BusinessError } 202 - The caller is not a system application
   * @throws { BusinessError } 401 - The input parameter is invalid
   * @throws { BusinessError } 143000001 - IPC error
   * @syscap SystemCapability.FileManagement.AppFileService
   * @systemapi
   * @since 9
   */
  function grantUriPermission(uri: string, bundleName: string, flag: wantConstant.Flags): Promise<void>;

  /**
   * Grant the selected URI temporary permissions.
   *
   * @permission ohos.permission.SET_SANDBOX_POLICY
   * @param { number } tokenId the token id of app
   * @param { Array<PolicyInfo> } policies - Policy information to grant permission on URIs.
   * @param { number } policyFlag - The identity of the URIs policy, example { PolicyFlag.ALLOWED_PERSIST }.
   * @returns { Promise<void> } the promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 401 - The input parameter is invalid
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 13900001 - Operation not permitted.
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.AppFileService
   * @systemapi Hide this for inner system use.
   * @since 11
   */
  function grantPermission(tokenId: number, policies: Array<PolicyInfo>, policyFlag: number): Promise<void>;

  /**
   * Set persistence permissions for the URI
   *
   * @permission ohos.permission.FILE_ACCESS_PERSIST
   * @param { Array<PolicyInfo> } policies - Policy information to grant permission on URIs.
   * @returns { Promise<void> } the promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - The input parameter is invalid
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 13900001 - Operation not permitted.
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.AppFileService
   * @since 11
   */
  function persistPermission(policies: Array<PolicyInfo>): Promise<void>;

  /**
   * Revoke persistence permissions for the URI
   *
   * @permission ohos.permission.FILE_ACCESS_PERSIST
   * @param { Array<PolicyInfo> } policies - Policy information to grant permission on URIs.
   * @returns { Promise<void> } the promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - The input parameter is invalid
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 13900001 - Operation not permitted.
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.AppFileService
   * @since 11
   */
  function revokePermission(policies: Array<PolicyInfo>): Promise<void>;

  /**
   * Enable the URI that have been permanently authorized
   *
   * @param { Array<PolicyInfo> } policies - Policy information to grant permission on URIs.
   * @returns { Promise<void> } the promise returned by the function.
   * @throws { BusinessError } 401 - The input parameter is invalid
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 13900001 - Operation not permitted.
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.AppFileService
   * @since 11
   */
  function activatePermission(policies: Array<PolicyInfo>): Promise<void>;

  /**
   * Stop the authorized URI that has been enabled
   *
   * @param { Array<PolicyInfo> } policies - Policy information to grant permission on URIs.
   * @returns { Promise<void> } the promise returned by the function.
   * @throws { BusinessError } 401 - The input parameter is invalid
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 13900001 - Operation not permitted.
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.AppFileService
   * @since 11
   */
  function deactivatePermission(policies: Array<PolicyInfo>): Promise<void>;
}

export default fileShare;
