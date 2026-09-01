/*
 * Copyright (C) 2022-2025 Huawei Device Co., Ltd.
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
 * @file
 * @kit CoreFileKit
 */

/*** if arkts dynamic */
import type { AsyncCallback, Callback } from './@ohos.base';
import type wantConstant from './@ohos.ability.wantConstant';
/*** endif */
/*** if arkts static */
import { AsyncCallback, Callback } from './@ohos.base';
import type wantConstant from './@ohos.app.ability.wantConstant';
/*** endif */
/**
 * 提供文件分享能力。
 *
 * @namespace fileShare
 * @syscap SystemCapability.FileManagement.AppFileService
 * @since 9 dynamic
 * @since 23 static
 */
declare namespace fileShare {
  /**
   * 枚举授予或激活权限的URI访问模式。
   *
   * @enum { int } OperationMode
   * @syscap SystemCapability.FileManagement.AppFileService.FolderAuthorization
   * @since 11 dynamic
   * @since 23 static
   */
  export enum OperationMode {
    /**
     * 读权限。
     *
     * @syscap SystemCapability.FileManagement.AppFileService.FolderAuthorization
     * @since 11 dynamic
     * @since 23 static
     */
    READ_MODE = 0b1,

    /**
     * 写权限。
     *
     * @syscap SystemCapability.FileManagement.AppFileService.FolderAuthorization
     * @since 11 dynamic
     * @since 23 static
     */
    WRITE_MODE = 0b10,

    /**
     * 创建权限。
     *
     * @syscap SystemCapability.FileManagement.AppFileService.FolderAuthorization
     * @since 20 dynamic
     * @since 23 static
     */
    CREATE_MODE = 0b100,

    /**
     * 删除权限。
     *
     * @syscap SystemCapability.FileManagement.AppFileService.FolderAuthorization
     * @since 20 dynamic
     * @since 23 static
     */
    DELETE_MODE = 0b1000,

    /**
     * 重命名权限。
     *
     * @syscap SystemCapability.FileManagement.AppFileService.FolderAuthorization
     * @since 20 dynamic
     * @since 23 static
     */
    RENAME_MODE = 0b10000,
  }

  /**
   * 枚举授予或激活权限策略失败的URI对应的错误码。
   *
   * @enum { int } PolicyErrorCode
   * @syscap SystemCapability.FileManagement.AppFileService.FolderAuthorization
   * @since 11 dynamic
   * @since 23 static
   */
  export enum PolicyErrorCode {
    /**
     * URI禁止被持久化。
     *
     * @syscap SystemCapability.FileManagement.AppFileService.FolderAuthorization
     * @since 11 dynamic
     * @since 23 static
     */
    PERSISTENCE_FORBIDDEN = 1,

    /**
     * 无效的模式。
     *
     * @syscap SystemCapability.FileManagement.AppFileService.FolderAuthorization
     * @since 11 dynamic
     * @since 23 static
     */
    INVALID_MODE = 2,

    /**
     * 无效的路径。
     *
     * @syscap SystemCapability.FileManagement.AppFileService.FolderAuthorization
     * @since 11 dynamic
     * @since 23 static
     */
    INVALID_PATH = 3,

    /**
     * 权限没有被持久化。
     *
     * @syscap SystemCapability.FileManagement.AppFileService.FolderAuthorization
     * @since 12 dynamic
     * @since 23 static
     */
    PERMISSION_NOT_PERSISTED = 4,
  }

  /**
   * 授予或激活权限失败的URI策略结果。
   *
   * @interface { object }
   * @syscap SystemCapability.FileManagement.AppFileService.FolderAuthorization
   * @since 11 dynamic
   * @since 23 static
   */
  export interface PolicyErrorResult {
    /**
     * 授予或激活权限失败的URI。
     *
     * @type { string }
     * @syscap SystemCapability.FileManagement.AppFileService.FolderAuthorization
     * @since 11 dynamic
     * @since 23 static
     */
    uri: string;

    /**
     * 授权策略失败的URI对应的错误码。
     *
     * @type { PolicyErrorCode }
     * @syscap SystemCapability.FileManagement.AppFileService.FolderAuthorization
     * @since 11 dynamic
     * @since 23 static
     */
    code: PolicyErrorCode;

    /**
     * 授权策略失败的URI对应的原因。
     *
     * @type { string }
     * @syscap SystemCapability.FileManagement.AppFileService.FolderAuthorization
     * @since 11 dynamic
     * @since 23 static
     */
    message: string;
  }

  /**
   * 需要授予或激活URI访问权限的策略信息。
   *
   * @interface PolicyInfo
   * @syscap SystemCapability.FileManagement.AppFileService.FolderAuthorization
   * @since 11 dynamic
   * @since 23 static
   */
  export interface PolicyInfo {
    /**
     * 需要授予或激活访问权限的URI，需符合URI格式规范。
     *
     * @type { string }
     * @syscap SystemCapability.FileManagement.AppFileService.FolderAuthorization
     * @since 11 dynamic
     * @since 23 static
     */
    uri: string;

    /**
     * 授予或激活权限的URI访问模式，例如 { OperationMode.READ_MODE } 或
     * { OperationMode.READ_MODE | OperationMode.WRITE_MODE }。
     *
     * @type { int }
     * @syscap SystemCapability.FileManagement.AppFileService.FolderAuthorization
     * @since 11 dynamic
     * @since 23 static
     */
    operationMode: int;
  }

  /**
   * 应用程序向系统捐献的目录信息。
   *
   * @syscap SystemCapability.FileManagement.AppFileService.FolderAuthorization
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  export interface SharedDirectoryInfo {
    /**
     * 应用程序的包名。
     * @syscap SystemCapability.FileManagement.AppFileService.FolderAuthorization
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    bundleName: string;

    /**
     * 应用程序捐献的目录。
     *
     * @syscap SystemCapability.FileManagement.AppFileService.FolderAuthorization
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    path: string;

    /**
     * 应用程序捐献目录的权限，例如 { OperationMode.READ_MODE } 或
     * { OperationMode.READ_MODE | OperationMode.WRITE_MODE }。
     *
     * @syscap SystemCapability.FileManagement.AppFileService.FolderAuthorization
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    permissionMode: int;
  }

  /**
   * 需要查询的文件或目录的信息。
   *
   * @interface PathPolicyInfo
   * @syscap SystemCapability.FileManagement.AppFileService.FolderAuthorization
   * @since 15 dynamic
   * @since 23 static
   */
  export interface PathPolicyInfo {
    /**
     * 需要查询的文件或目录路径。
     *
     * @type { string }
     * @syscap SystemCapability.FileManagement.AppFileService.FolderAuthorization
     * @since 15 dynamic
     * @since 23 static
     */
    path: string;

    /**
     * 需要查询的文件或目录访问模式。
     *
     * @type { OperationMode }
     * @syscap SystemCapability.FileManagement.AppFileService.FolderAuthorization
     * @since 15 dynamic
     * @since 23 static
     */
    operationMode: OperationMode;
  }

  /**
   * 枚举所查询策略信息对应的授权模式。
   *
   * @enum { int } policyType
   * @syscap SystemCapability.FileManagement.AppFileService.FolderAuthorization
   * @since 15 dynamic
   * @since 23 static
   */
  export enum PolicyType {
    /**
     * 临时授权。
     *
     * @syscap SystemCapability.FileManagement.AppFileService.FolderAuthorization
     * @since 15 dynamic
     * @since 23 static
     */
    TEMPORARY_TYPE = 0,

    /**
     * 持久化授权。
     *
     * @syscap SystemCapability.FileManagement.AppFileService.FolderAuthorization
     * @since 15 dynamic
     * @since 23 static
     */
    PERSISTENT_TYPE = 1,
  }

  /**
   * 为应用授予公共目录文件URI的临时访问权限，使用Callback异步回调。
   *
   * @permission ohos.permission.WRITE_MEDIA
   * @param { string } uri - 公共目录文件URI。
   * @param { string } bundleName - 分享目标的包名。
   * @param { wantConstant.Flags } flag - 授权的权限，可取wantConstant.Flags.FLAG_AUTH_READ_URI_PERMISSION或
   * wantConstant.Flags.FLAG_AUTH_WRITE_URI_PERMISSION。
   * @param { AsyncCallback<void> } callback - 异步授权之后的回调。
   * @throws { BusinessError } 201 - Permission verification failed
   * @throws { BusinessError } 202 - The caller is not a system application
   * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:1.Mandatory parameters are left unspecified;
   * <br>2.Incorrect parameter types.
   * @throws { BusinessError } 14300001 - IPC error
   * @syscap SystemCapability.FileManagement.AppFileService
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function grantUriPermission(
    uri: string,
    bundleName: string,
    flag: wantConstant.Flags,
    callback: AsyncCallback<void>
  ): void;

  /**
   * 为应用授予公共目录文件URI的临时访问权限，使用Promise异步回调。
   *
   * @permission ohos.permission.WRITE_MEDIA
   * @param { string } uri - 公共目录文件URI。
   * @param { string } bundleName - 分享目标的包名。
   * @param { wantConstant.Flags } flag - 授权的权限，可取wantConstant.Flags.FLAG_AUTH_READ_URI_PERMISSION或
   * wantConstant.Flags.FLAG_AUTH_WRITE_URI_PERMISSION。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 201 - Permission verification failed
   * @throws { BusinessError } 202 - The caller is not a system application
   * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:1.Mandatory parameters are left unspecified;
   * <br>2.Incorrect parameter types.
   * @throws { BusinessError } 14300001 - IPC error
   * @syscap SystemCapability.FileManagement.AppFileService
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function grantUriPermission(uri: string, bundleName: string, flag: wantConstant.Flags): Promise<void>;

  /**
   * 给应用授予目标文件临时权限，使用Promise异步回调。
   *
   * @permission ohos.permission.FILE_ACCESS_MANAGER
   * @param { Array<PolicyInfo> } policies - 需要授权URI的策略信息数组。
   * @param { string } targetBundleName - 被授权应用的应用包名。
   * @param { int } appCloneIndex - 被授权应用的分身索引，取值为0时表示主应用。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 201 - Permission verification failed.
   * @throws { BusinessError } 202 - The caller is not a system application.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 13900001 - Operation not permitted.
   * @throws { BusinessError } 13900011 - Out of memory.
   * @syscap SystemCapability.FileManagement.AppFileService.FolderAuthorization
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  function grantUriPermission(policies: Array<PolicyInfo>, targetBundleName: string, appCloneIndex: int): Promise<void>;

  /**
   * 对所选择的多个文件或目录URI进行持久化授权，使用Promise异步回调。
   *
   * @permission ohos.permission.FILE_ACCESS_PERSIST
   * @param { Array<PolicyInfo> } policies - 需要持久化授权的URI策略信息数组。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 201 - Permission verification failed, usually the result returned by VerifyAccessToken.
   * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
   * <br>2.Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 13900001 - Operation not permitted.
   * @throws { BusinessError } 13900042 - Out of memory
   * @syscap SystemCapability.FileManagement.AppFileService.FolderAuthorization
   * @since 11 dynamic
   * @since 23 static
   */
  function persistPermission(policies: Array<PolicyInfo>): Promise<void>;

  /**
   * 对所选择的多个文件或目录URI取消持久化授权，使用Promise异步回调。
   *
   * @permission ohos.permission.FILE_ACCESS_PERSIST
   * @param { Array<PolicyInfo> } policies - 需要取消持久化授权的URI策略信息数组。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 201 - Permission verification failed, usually the result returned by VerifyAccessToken.
   * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
   * <br>2.Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 13900001 - Operation not permitted.
   * @throws { BusinessError } 13900042 - Out of memory
   * @syscap SystemCapability.FileManagement.AppFileService.FolderAuthorization
   * @since 11 dynamic
   * @since 23 static
   */
  function revokePermission(policies: Array<PolicyInfo>): Promise<void>;

  /**
   * 撤销指定应用的全部持久化文件授权，使用Promise异步回调。
   *
   * @permission ohos.permission.REVOKE_FILE_ACCESS_PERSIST
   * @param { int } tokenID - 目标应用的访问令牌标识。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 201 - Permission verification failed, usually the result returned by VerifyAccessToken.
   * @throws { BusinessError } 202 - The caller is not a system application.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 13900001 - Operation not permitted.
   * @throws { BusinessError } 13900020 - Invalid tokenID
   * @syscap SystemCapability.FileManagement.AppFileService.FolderAuthorization
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function revokePermission(tokenID: int): Promise<void>;

  /**
   * 撤销指定应用对URI的持久化授权，使用Promise异步回调。
   *
   * @permission ohos.permission.REVOKE_FILE_ACCESS_PERSIST
   * @param { int } tokenID - 目标应用的访问令牌标识。
   * @param { Array<PolicyInfo> } policies - 需要撤销持久化授权的URI策略信息数组。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 201 - Permission verification failed, usually the result returned by VerifyAccessToken.
   * @throws { BusinessError } 202 - The caller is not a system application.
   * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
   * <br>2.Incorrect parameter types; 3.Invalid policy size.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 13900001 - Operation not permitted.
   * @throws { BusinessError } 13900011 - Out of memory
   * @throws { BusinessError } 13900020 - Invalid tokenID
   * @syscap SystemCapability.FileManagement.AppFileService.FolderAuthorization
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function revokePermission(tokenID: int, policies: Array<PolicyInfo>): Promise<void>;

  /**
   * 获取应用程序的持久化授权策略，使用Promise异步回调。
   *
   * @permission ohos.permission.GET_FILE_ACCESS_PERSIST
   * @param { int } tokenID - 目标应用的访问令牌标识。
   * @returns { Promise<Array<PolicyInfo>> } Promise对象，返回应用的持久化策略信息数组。
   * @throws { BusinessError } 201 - Permission verification failed, usually the result returned by VerifyAccessToken.
   * @throws { BusinessError } 202 - The caller is not a system application.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 13900001 - Operation not permitted.
   * @throws { BusinessError } 13900011 - Out of memory
   * @throws { BusinessError } 13900020 - Invalid tokenID
   * @syscap SystemCapability.FileManagement.AppFileService.FolderAuthorization
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function getPersistentPolicy(tokenID: int): Promise<Array<PolicyInfo>>;

  /**
   * 激活多个已持久化授权的文件或目录，使用Promise异步回调。
   *
   * @permission ohos.permission.FILE_ACCESS_PERSIST
   * @param { Array<PolicyInfo> } policies - 需要激活权限的URI策略信息数组。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 201 - Permission verification failed, usually the result returned by VerifyAccessToken.
   * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
   * <br>2.Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 13900001 - Operation not permitted.
   * @throws { BusinessError } 13900042 - Out of memory
   * @syscap SystemCapability.FileManagement.AppFileService.FolderAuthorization
   * @since 11 dynamic
   * @since 23 static
   */
  function activatePermission(policies: Array<PolicyInfo>): Promise<void>;

  /**
   * 取消激活多个已持久化授权的文件或目录，使用Promise异步回调。
   *
   * @permission ohos.permission.FILE_ACCESS_PERSIST
   * @param { Array<PolicyInfo> } policies - 需要取消激活权限的URI策略信息数组。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 201 - Permission verification failed, usually the result returned by VerifyAccessToken.
   * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
   * <br>2.Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 13900001 - Operation not permitted.
   * @throws { BusinessError } 13900042 - Out of memory
   * @syscap SystemCapability.FileManagement.AppFileService.FolderAuthorization
   * @since 11 dynamic
   * @since 23 static
   */
  function deactivatePermission(policies: Array<PolicyInfo>): Promise<void>;

  /**
   * 校验所选择的多个文件或目录URI是否已持久化授权，使用Promise异步回调。
   * 
   * @permission ohos.permission.FILE_ACCESS_PERSIST
   * @param { Array<PolicyInfo> } policies - 需要校验持久化授权状态的URI策略信息数组。
   * @returns { Promise<Array<boolean>> } Promise对象，返回URI权限的持久化状态数组。
   * @throws { BusinessError } 201 - Permission verification failed, usually the result returned by VerifyAccessToken.
   * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
   * <br>2.Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 13900042 - Out of memory
   * @syscap SystemCapability.FileManagement.AppFileService.FolderAuthorization
   * @since 12
   */
  /**
   * 校验所选择的多个文件或目录URI是否已持久化授权，使用Promise异步回调。
   * 
   * @param { Array<PolicyInfo> } policies - 需要校验持久化授权状态的URI策略信息数组。
   * @returns { Promise<Array<boolean>> } Promise对象，返回URI权限的持久化状态数组。
   * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
   * <br>2.Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 13900042 - Out of memory
   * @syscap SystemCapability.FileManagement.AppFileService.FolderAuthorization
   * @since 17 dynamic
   * @since 23 static
   */
  function checkPersistentPermission(policies: Array<PolicyInfo>): Promise<Array<boolean>>;

  /**
   * 异步方法校验所选择的多个文件或目录是否有临时或持久化授权，使用Promise异步回调。
   * 
   * @permission ohos.permission.CHECK_SANDBOX_POLICY
   * @param { int } tokenID - 目标应用的访问令牌标识。
   * @param { Array<PathPolicyInfo> } policies - 需要查询授权状态的路径策略信息数组。
   * @param { PolicyType } policyType - 要查询的授权类型，使用TEMPORARY_TYPE查询临时授权，使用PERSISTENT_TYPE查询持久化授权。
   * @returns { Promise<Array<boolean>> } Promise对象，返回授权状态校验结果数组。返回true表示授权类型匹配policyType的查询类型，否则返回false。
   * @throws { BusinessError } 201 - Permission verification failed, usually the result returned by VerifyAccessToken.
   * @throws { BusinessError } 202 - The caller is not a system application
   * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
   * <br>2.Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 13900042 - Out of memory.
   * @syscap SystemCapability.FileManagement.AppFileService.FolderAuthorization
   * @systemapi
   * @since 15 dynamic
   * @since 23 static
   */
  function checkPathPermission(tokenID: int, policies: Array<PathPolicyInfo>, policyType: PolicyType): Promise<Array<boolean>>;

  /**
   * 获取所有应用捐献的沙箱目录。使用Promise异步回调。
   *
   * @permission ohos.permission.ACCESS_SHARED_FILE
   * @returns { Promise<Array<SharedDirectoryInfo>> } Promise对象，返回所有应用捐献的沙箱目录数组。
   * @throws { BusinessError } 201 - Permission verification failed, usually the result returned by VerifyAccessToken.
   * @throws { BusinessError } 202 - The caller is not a system application.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 13900001 - Operation not permitted.
   * @throws { BusinessError } 13900011 - Out of memory.
   * @syscap SystemCapability.FileManagement.AppFileService.FolderAuthorization
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function getSharedDirectoryInfo(): Promise<Array<SharedDirectoryInfo>>;

  /**
   * 授予应用捐献目录的临时访问权限。使用Promise异步回调。
   *
   * @permission ohos.permission.ACCESS_SHARED_FILE
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 201 - Permission verification failed, usually the result returned by VerifyAccessToken.
   * @throws { BusinessError } 202 - The caller is not a system application.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 13900001 - Operation not permitted.
   * @syscap SystemCapability.FileManagement.AppFileService.FolderAuthorization
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function grantSharedDirectoryPermission(): Promise<void>;

  /**
   * 撤销应用的捐献目录临时访问权限。使用Promise异步回调。
   *
   * @permission ohos.permission.ACCESS_SHARED_FILE
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 201 - Permission verification failed, usually the result returned by VerifyAccessToken.
   * @throws { BusinessError } 202 - The caller is not a system application.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 13900001 - Operation not permitted.
   * @syscap SystemCapability.FileManagement.AppFileService.FolderAuthorization
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function revokeSharedDirectoryPermission(): Promise<void>;
}

export default fileShare;
