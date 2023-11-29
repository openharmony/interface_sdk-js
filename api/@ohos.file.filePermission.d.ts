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

/**
 * Provides filePermission APIS
 *
 * @namespace filePermission
 * @syscap SystemCapability.FileManagement.AppFileService
 * @since 11
 */
declare namespace filePermission {
  /**
   * Enumerates the uri operate mode types.
   *
   * @enum { number } OperateMode
   * @syscap SystemCapability.FileManagement.AppFileService
   * @since 11
   */
  export enum OperateMode {
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
    FORBIDDEN_TO_BE_PERSISTED = 1,

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
     * @type string
     * @syscap SystemCapability.FileManagement.AppFileService
     * @since 11
     */
    uri: string;

    /**
     * Indicates the error code of the failure in the policy information.
     *
     * @type PolicyErrorCode
     * @syscap SystemCapability.FileManagement.AppFileService
     * @since 11
     */
    code: PolicyErrorCode;

    /**
     * Indicates the reason of the failure in the policy information.
     *
     * @type string
     * @syscap SystemCapability.FileManagement.AppFileService
     * @since 11
     */
    message: string;
  }

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
     * Indicates the mode of operation for the URI, example { OperateMode.READ_MODE } or { OperateMode.READ_MODE | OperateMode.WRITE_MODE }
     *
     * @syscap SystemCapability.FileManagement.AppFileService
     * @since 11
     */
    operateMode: number;
  }

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
  function grantPolicy(tokenId: number, policies: Array<PolicyInfo>, policyFlag: number): Promise<void>;

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
   * Desist persistence permissions for the URI
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
  function desistPersistedPermission(policies: Array<PolicyInfo>): Promise<void>;

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
  function activateAccessingUri(policies: Array<PolicyInfo>): Promise<void>;

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
  function deactivateAccessingUri(policies: Array<PolicyInfo>): Promise<void>;
}

export default filePermission;
