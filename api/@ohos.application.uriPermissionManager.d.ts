/*
 * Copyright (c) 2023 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License"),
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
 * @kit AbilityKit
 */

import type { AsyncCallback } from './@ohos.base';
import type wantConstant from './@ohos.app.ability.wantConstant';

/**
 * The **uriPermissionManager** module provides capabilities for granting the permission on a file to another 
 * application and revoking the granted permissions. The file is identified by a uniform resource identifier (URI).
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @since 10 dynamic
 * @since 23 static
 */
declare namespace uriPermissionManager {
  /**
   * Grants the URI permission to an application. If the call is successful, the application obtains the permission to 
   * access the file specified by the URI. Once the application exits, the permission will be automatically revoked. For
   *  details about how to access the file based on the URI, see 
   * [Sharing an Application File](docroot://file-management/share-app-file.md). This API uses an asynchronous callback 
   * to return the result.
   * 
   * > **NOTE**
   * >
   * > - If an application has the ohos.permission.PROXY_AUTHORIZATION_URI permission, it can grant the accessible URIs 
   * > of another application. If the application does not have this permission, it can grant only its own URI 
   * > permissions.
   * >
   * > - URI processing involves encoding and decoding. Therefore, the input URI must be obtained through the 
   * > [getUriFromPath]{@link @ohos.file.fileuri:fileUri.getUriFromPath} API. For URIs combined by the application, the 
   * > system cannot guarantee their functions.
   *
   * @permission ohos.permission.PROXY_AUTHORIZATION_URI
   * @param { string } uri - URI of the file. The scheme has a fixed value of **file**. For details, see 
   *     [FileUri]{@link @ohos.file.fileuri:fileUri.FileUri#constructor}.
   * @param { wantConstant.Flags } flag - Read or write permission on the file to grant.
   * @param { string } targetBundleName - Bundle name of the target application.
   * @param { AsyncCallback<number> } callback - Callback used to return the result. If the operation is successful, **0** is
   *     returned; otherwise, **-1** is returned.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not System App. Interface caller is not a system app.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 16000050 - Internal error.
   * @throws { BusinessError } 16000058 - Invalid URI flag.
   * @throws { BusinessError } 16000059 - Invalid URI type.
   * @throws { BusinessError } 16000060 - A sandbox application cannot grant URI permission.
   * @throws { BusinessError } 801 - Capability not supported. [since 19]
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi hide this for inner system use.
   * @since 10 dynamic
   */
  function grantUriPermission(
    uri: string,
    flag: wantConstant.Flags,
    targetBundleName: string,
    callback: AsyncCallback<number>
  ): void;

  /**
   * Grants the URI permission to an application. If the call is successful, the application obtains the permission to 
   * access the file specified by the URI. Once the application exits, the permission will be automatically revoked. For
   *  details about how to access the file based on the URI, see 
   * [Sharing an Application File](docroot://file-management/share-app-file.md). This API uses an asynchronous callback 
   * to return the result.
   * 
   * > **NOTE**
   * >
   * > - If an application has the ohos.permission.PROXY_AUTHORIZATION_URI permission, it can grant the accessible URIs 
   * > of another application. If the application does not have this permission, it can grant only its own URI 
   * > permissions.
   * >
   * > - URI processing involves encoding and decoding. Therefore, the input URI must be obtained through the 
   * > [getUriFromPath]{@link @ohos.file.fileuri:fileUri.getUriFromPath} API. For URIs combined by the application, the 
   * > system cannot guarantee their functions.
   *
   * @permission ohos.permission.PROXY_AUTHORIZATION_URI
   * @param { string } uri - URI of the file. The scheme has a fixed value of **file**. For details, see 
   *     [FileUri]{@link @ohos.file.fileuri:fileUri.FileUri#constructor}.
   * @param { wantConstant.Flags } flag - Read or write permission on the file to grant.
   * @param { string } targetBundleName - Bundle name of the target application.
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful, **0** is
   *     returned; otherwise, **-1** is returned.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not System App. Interface caller is not a system app.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 16000050 - Connect to system server failed.
   * @throws { BusinessError } 16000058 - Invalid URI flag.
   * @throws { BusinessError } 16000059 - Invalid URI type.
   * @throws { BusinessError } 16000060 - A sandbox application cannot grant URI permission.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi hide this for inner system use.
   * @stagemodelonly
   * @since 23 static
   */
  function grantUriPermission(
    uri: string,
    flag: wantConstant.Flags,
    targetBundleName: string,
    callback: AsyncCallback<void>
  ): void;

  /**
   * Grants the URI permission to an application. If the call is successful, the application obtains the permission to 
   * access the file specified by the URI. Once the application exits, the permission will be automatically revoked. For
   *  details about how to access the file based on the URI, see 
   * [Sharing an Application File](docroot://file-management/share-app-file.md). This API uses a promise to return the 
   * result.
   * 
   * > **NOTE**
   * >
   * > - If an application has the ohos.permission.PROXY_AUTHORIZATION_URI permission, it can grant the accessible URIs 
   * > of another application. If the application does not have this permission, it can grant only its own URI 
   * > permissions.
   * >
   * > - URI processing involves encoding and decoding. Therefore, the input URI must be obtained through the 
   * > [getUriFromPath]{@link @ohos.file.fileuri:fileUri.getUriFromPath} API. For URIs combined by the application, the 
   * > system cannot guarantee their functions.
   *
   * @permission ohos.permission.PROXY_AUTHORIZATION_URI
   * @param { string } uri - URI of the file. The scheme has a fixed value of **file**. For details, see 
   *     [FileUri]{@link @ohos.file.fileuri:fileUri.FileUri#constructor}.
   * @param { wantConstant.Flags } flag - Read or write permission on the file to grant.
   * @param { string } targetBundleName - Bundle name of the target application.
   * @returns { Promise<number> } Promise used to return the result. If the operation is successful, **0** is returned; 
   *     otherwise, **-1** is returned.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not System App. Interface caller is not a system app.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 16000050 - Internal error.
   * @throws { BusinessError } 16000058 - Invalid URI flag.
   * @throws { BusinessError } 16000059 - Invalid URI type.
   * @throws { BusinessError } 16000060 - A sandbox application cannot grant URI permission.
   * @throws { BusinessError } 801 - Capability not supported. [since 19]
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi hide this for inner system use.
   * @since 10 dynamic
   */
  function grantUriPermission(uri: string, flag: wantConstant.Flags, targetBundleName: string): Promise<number>;

  /**
   * Grants the URI permission to an application. If the call is successful, the application obtains the permission to 
   * access the file specified by the URI. Once the application exits, the permission will be automatically revoked. For
   *  details about how to access the file based on the URI, see 
   * [Sharing an Application File](docroot://file-management/share-app-file.md). This API uses a promise to return the 
   * result.
   * 
   * > **NOTE**
   * >
   * > - If an application has the ohos.permission.PROXY_AUTHORIZATION_URI permission, it can grant the accessible URIs 
   * > of another application. If the application does not have this permission, it can grant only its own URI 
   * > permissions.
   * >
   * > - URI processing involves encoding and decoding. Therefore, the input URI must be obtained through the 
   * > [getUriFromPath]{@link @ohos.file.fileuri:fileUri.getUriFromPath} API. For URIs combined by the application, the 
   * > system cannot guarantee their functions.
   *
   * @permission ohos.permission.PROXY_AUTHORIZATION_URI
   * @param { string } uri - URI of the file. The scheme has a fixed value of **file**. For details, see 
   *     [FileUri]{@link @ohos.file.fileuri:fileUri.FileUri#constructor}.
   * @param { wantConstant.Flags } flag - Read or write permission on the file to grant.
   * @param { string } targetBundleName - Bundle name of the target application.
   * @returns { Promise<void> } - Promise used to return the result. If the operation is successful, **0** is returned; 
   *     otherwise, **-1** is returned.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not System App. Interface caller is not a system app.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 16000050 - Connect to system server failed.
   * @throws { BusinessError } 16000058 - Invalid URI flag.
   * @throws { BusinessError } 16000059 - Invalid URI type.
   * @throws { BusinessError } 16000060 - A sandbox application cannot grant URI permission.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi hide this for inner system use.
   * @since 23 static
   */
  function grantUriPermission(uri: string, flag: wantConstant.Flags, targetBundleName: string): Promise<void>;

  /**
   * Grants the URI permission to an application. If the call is successful, the application obtains the permission to 
   * access the file specified by the URI. Once the application exits, the permission will be automatically revoked. For
   *  details about how to access the file based on the URI, see 
   * [Sharing an Application File](docroot://file-management/share-app-file.md). This API uses a promise to return the 
   * result.
   * 
   * > **NOTE**
   * >
   * > - If an application has the ohos.permission.PROXY_AUTHORIZATION_URI permission, it can grant the accessible URIs 
   * > of another application. If the application does not have this permission, it can grant only its own URI 
   * > permissions.
   * >
   * > - This API can be used to grant URI access permission to a cloned application. You need to specify the 
   * > application bundle name and index of the cloned application.
   * >
   * > - URI processing involves encoding and decoding. Therefore, the input URI must be obtained through the 
   * > [getUriFromPath]{@link @ohos.file.fileuri:fileUri.getUriFromPath} API. For URIs combined by the application, the 
   * > system cannot guarantee their functions.
   *
   * @permission ohos.permission.PROXY_AUTHORIZATION_URI
   * @param { string } uri - URI of the file. The scheme has a fixed value of **file**. For details, see 
   *     [FileUri]{@link @ohos.file.fileuri:fileUri.FileUri#constructor}.
   * @param { wantConstant.Flags } flag - Read or write permission on the file to grant.
   * @param { string } targetBundleName - Bundle name of the target application.
   * @param { int } appCloneIndex - Index of the cloned application. The value range is [0, 1000]. The value **0** indicates 
   *     the application itself.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not System App. Interface caller is not a system app.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 16000050 - Internal error.
   * @throws { BusinessError } 16000058 - Invalid URI flag.
   * @throws { BusinessError } 16000059 - Invalid URI type.
   * @throws { BusinessError } 16000060 - A sandbox application cannot grant URI permission.
   * @throws { BusinessError } 16000081 - Failed to obtain the target application information.
   * @throws { BusinessError } 801 - Capability not supported. [since 19]
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi hide this for inner system use.
   * @since 14 dynamic
   * @since 23 static
   */
  function grantUriPermission(uri: string, flag: wantConstant.Flags, targetBundleName: string, appCloneIndex: int): Promise<void>;

  /**
   * Revokes the URI permission from an application. This API uses an asynchronous callback to return the result.
   * 
   * > **NOTE**
   * >
   * > - This API can be used to revoke the URI permission of another application obtained by this application or URI 
   * > permission granted by this application.
   * >
   * > - URI processing involves encoding and decoding. Therefore, the input URI must be obtained through the 
   * > [getUriFromPath]{@link @ohos.file.fileuri:fileUri.getUriFromPath} API. For URIs combined by the application, the 
   * > system cannot guarantee their functions.
   *
   * @permission ohos.permission.PROXY_AUTHORIZATION_URI [since 10 - 18]
   * @param { string } uri - URI of the file. The scheme has a fixed value of **file**. For details, see 
   *     [FileUri]{@link @ohos.file.fileuri:fileUri.FileUri#constructor}.
   * @param { string } targetBundleName - Bundle name of the application, from which the permission is revoked.
   * @param { AsyncCallback<number> } callback - Callback used to return the result. If the operation is successful, **0** is
   *     returned; otherwise, **-1** is returned.
   * @throws { BusinessError } 201 - Permission denied. [since 10 - 18]
   * @throws { BusinessError } 202 - Not System App. Interface caller is not a system app.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 16000050 - Internal error.
   * @throws { BusinessError } 16000059 - Invalid URI type.
   * @throws { BusinessError } 801 - Capability not supported. [since 19]
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi hide this for inner system use
   * @since 10 dynamic
   */
  function revokeUriPermission(uri: string, targetBundleName: string, callback: AsyncCallback<number>): void;

  /**
   * Revokes the URI permission from an application. This API uses an asynchronous callback to return the result.
   * 
   * > **NOTE**
   * >
   * > - This API can be used to revoke the URI permission of another application obtained by this application or URI 
   * > permission granted by this application.
   * >
   * > - URI processing involves encoding and decoding. Therefore, the input URI must be obtained through the 
   * > [getUriFromPath]{@link @ohos.file.fileuri:fileUri.getUriFromPath} API. For URIs combined by the application, the 
   * > system cannot guarantee their functions.
   *
   * @param { string } uri - URI of the file. The scheme has a fixed value of **file**. For details, see 
   *     [FileUri]{@link @ohos.file.fileuri:fileUri.FileUri#constructor}.
   * @param { string } targetBundleName - Bundle name of the application, from which the permission is revoked.
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful, **0** is
   *     returned; otherwise, **-1** is returned.
   * @throws { BusinessError } 202 - Not System App. Interface caller is not a system app.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 16000050 - Connect to system server failed.
   * @throws { BusinessError } 16000059 - Invalid URI type.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi hide this for inner system use
   * @since 23 static
   */
  function revokeUriPermission(uri: string, targetBundleName: string, callback: AsyncCallback<void>): void;

  /**
   * Revokes the URI permission from an application. This API uses a promise to return the result.
   * 
   * > **NOTE**
   * >
   * > - This API can be used to revoke the URI permission of another application obtained by this application or URI 
   * > permission granted by this application.
   * >
   * > - URI processing involves encoding and decoding. Therefore, the input URI must be obtained through the 
   * > [getUriFromPath]{@link @ohos.file.fileuri:fileUri.getUriFromPath} API. For URIs combined by the application, the 
   * > system cannot guarantee their functions.
   *
   * @permission ohos.permission.PROXY_AUTHORIZATION_URI [since 10 - 18]
   * @param { string } uri - URI of the file. The scheme has a fixed value of **file**. For details, see 
   *     [FileUri]{@link @ohos.file.fileuri:fileUri.FileUri#constructor}.
   * @param { string } targetBundleName - Bundle name of the target application.
   * @returns { Promise<number> } Promise used to return the result. If the operation is successful, **0** is returned; 
   *     otherwise, **-1** is returned.
   * @throws { BusinessError } 201 - Permission denied. [since 10 - 18]
   * @throws { BusinessError } 202 - Not System App. Interface caller is not a system app.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 16000050 - Internal error.
   * @throws { BusinessError } 16000059 - Invalid URI type.
   * @throws { BusinessError } 801 - Capability not supported. [since 19]
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi hide this for inner system use
   * @since 10 dynamic
   */
  function revokeUriPermission(uri: string, targetBundleName: string): Promise<number>;

  /**
   * Revokes the URI permission from an application. This API uses a promise to return the result.
   * 
   * > **NOTE**
   * >
   * > - This API can be used to revoke the URI permission of another application obtained by this application or URI 
   * > permission granted by this application.
   * >
   * > - URI processing involves encoding and decoding. Therefore, the input URI must be obtained through the 
   * > [getUriFromPath]{@link @ohos.file.fileuri:fileUri.getUriFromPath} API. For URIs combined by the application, the 
   * > system cannot guarantee their functions.
   *
   * @param { string } uri - URI of the file. The scheme has a fixed value of **file**. For details, see 
   *     [FileUri]{@link @ohos.file.fileuri:fileUri.FileUri#constructor}.
   * @param { string } targetBundleName - Bundle name of the target application.
   * @returns { Promise<void> } - Promise used to return the result. If the operation is successful, **0** is returned; 
   *     otherwise, **-1** is returned.
   * @throws { BusinessError } 202 - Not System App. Interface caller is not a system app.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 16000050 - Connect to system server failed.
   * @throws { BusinessError } 16000059 - Invalid URI type.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi hide this for inner system use
   * @since 23 static
   */
  function revokeUriPermission(uri: string, targetBundleName: string): Promise<void>;

  /**
   * Revokes the URI permission from an application. This API uses a promise to return the result.
   * 
   * > **NOTE**
   * >
   * > - This API can be used to revoke the URI permission of another application obtained by this application or URI 
   * > permission granted by this application.
   * >
   * > - This API can be used to revoke the URI permissions granted to a cloned application. You need to specify the 
   * > application bundle name and index of the cloned application.
   * >
   * > - URI processing involves encoding and decoding. Therefore, the input URI must be obtained through the 
   * > [getUriFromPath]{@link @ohos.file.fileuri:fileUri.getUriFromPath} API. For URIs combined by the application, the 
   * > system cannot guarantee their functions.
   *
   * @param { string } uri - URI of the file. The scheme has a fixed value of **file**. For details, see 
   *     [FileUri]{@link @ohos.file.fileuri:fileUri.FileUri#constructor}.
   * @param { string } targetBundleName - Bundle name of the target application.
   * @param { int } appCloneIndex - Index of the cloned application. The value range is [0, 1000]. The value **0** indicates 
   *     the application itself.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 202 - Not System App. Interface caller is not a system app.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 16000050 - Internal error.
   * @throws { BusinessError } 16000059 - Invalid URI type.
   * @throws { BusinessError } 16000081 - Failed to obtain the target application information.
   * @throws { BusinessError } 801 - Capability not supported. [since 19]
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi hide this for inner system use
   * @since 14 dynamic
   * @since 23 static
   */
  function revokeUriPermission(uri: string, targetBundleName: string, appCloneIndex: int): Promise<void>;

  /**
   * Grants the URI access permission of the current application to the target application through the unique key of the
   *  Unified Data Management Framework (UDMF) data. The permission will be revoked after the target application exits. 
   * This API uses a promise to return the result.
   * This API can be properly called only on phones, 2-in-1 devices, and tablets. If it is called on other device types,
   *  error code 801 is returned.
   * **System API**: This is a system API.
   *
   * @param { string } key - Unique key of the target UDMF data. The key must be created by the caller using 
   *     [unifiedDataChannel.insertData]{@link @ohos.data.unifiedDataChannel:unifiedDataChannel.insertData(options: Options, data: UnifiedData, callback: AsyncCallback<string>)}
   *     , and the written data must be the URIs of the authorized files.<br>Currently, only the keys of the 
   *     [UDMF data channels]{@link @ohos.data.unifiedDataChannel:unifiedDataChannel.Intention} of the **SYSTEM_SHARE**, 
   *     **PICKER**, and **MENU** types are supported. For details about how to create and use a key, see 
   *     [Sharing Data via Unified Data Channels](docroot://database/unified-data-channels.md).
   * @param { wantConstant.Flags } flag - Read or write permission on the file to grant. The options are as follows:<br>- 
   *     **FLAG_AUTH_READ_URI_PERMISSION**: read permission.<br>- **FLAG_AUTH_WRITE_URI_PERMISSION**: write permission.
   * @param { int } targetTokenId - Identity of the target application, which can be obtained through 
   *     [bundleManager.getApplicationInfo]{@link @ohos.bundle.bundleManager:bundleManager.getApplicationInfo(bundleName: string, appFlags: int, userId: int, callback: AsyncCallback<ApplicationInfo>)}
   *     .
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 202 - Not System App. Interface caller is not a system app.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 16000050 - Internal error.
   * @throws { BusinessError } 16000058 - Invalid URI flag.
   * @throws { BusinessError } 16000060 - A sandbox application cannot grant URI permission.
   * @throws { BusinessError } 16000091 - Failed to get the file URI from the key.
   * @throws { BusinessError } 16000092 - No permission to authorize the URI.
   * @throws { BusinessError } 16000094 - The target token ID is invalid.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi Hide this for inner system use.
   * @since 20 dynamic
   * @since 23 static
   */
  function grantUriPermissionByKey(key: string, flag: wantConstant.Flags, targetTokenId: int): Promise<void>;

  /**
   * Grants the URI access permission of the specified application to the target application through the unique key of 
   * the Unified Data Management Framework (UDMF) data. The permission will be revoked after the target application 
   * exits. This API uses a promise to return the result.
   * This API can be properly called only on phones, 2-in-1 devices, and tablets. If it is called on other device types,
   *  error code 801 is returned.
   * **System API**: This is a system API.
   *
   * @permission ohos.permission.GRANT_URI_PERMISSION_AS_CALLER
   * @param { string } key - Unique key of the target UDMF data. The key must be created by the application (corresponding to
   *     **callerTokenId**) through 
   *     [unifiedDataChannel.insertData]{@link @ohos.data.unifiedDataChannel:unifiedDataChannel.insertData(options: Options, data: UnifiedData, callback: AsyncCallback<string>)}
   *     , and the written data must be the URIs of the authorized files.<br>Currently, only the keys of the 
   *     [UDMF data channels]{@link @ohos.data.unifiedDataChannel:unifiedDataChannel.Intention} of the **SYSTEM_SHARE**, 
   *     **PICKER**, and **MENU** types are supported. For details about how to create and use a key, see 
   *     [Sharing Data via Unified Data Channels](docroot://database/unified-data-channels.md).
   * @param { wantConstant.Flags } flag - Read or write permission on the file to grant. The options are as follows:<br>- 
   *     **FLAG_AUTH_READ_URI_PERMISSION**: read permission.<br>- **FLAG_AUTH_WRITE_URI_PERMISSION**: write permission.
   * @param { int } callerTokenId - Identity of the caller application. You can obtain the value from the 
   *     **ohos.aafwk.param.callerToken** field in [want]{@link @ohos.app.ability.Want:Want}.
   * @param { int } targetTokenId - Identity of the target application, which can be obtained through 
   *     [bundleManager.getApplicationInfo]{@link @ohos.bundle.bundleManager:bundleManager.getApplicationInfo(bundleName: string, appFlags: int, userId: int, callback: AsyncCallback<ApplicationInfo>)}
   *     .
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not System App. Interface caller is not a system app.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 16000050 - Internal error.
   * @throws { BusinessError } 16000058 - Invalid URI flag.
   * @throws { BusinessError } 16000060 - A sandbox application cannot grant URI permission.
   * @throws { BusinessError } 16000091 - Failed to get the file URI from the key.
   * @throws { BusinessError } 16000092 - No permission to authorize the URI.
   * @throws { BusinessError } 16000093 - The caller token ID is invalid.
   * @throws { BusinessError } 16000094 - The target token ID is invalid.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi Hide this for inner system use.
   * @since 20 dynamic
   * @since 23 static
   */
  function grantUriPermissionByKeyAsCaller(key: string, flag: wantConstant.Flags, callerTokenId: int, targetTokenId: int): Promise<void>;
}

export default uriPermissionManager;