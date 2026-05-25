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
 * URI权限管理模块。用于应用A授权/撤销授权URI给应用B。
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @since 10 dynamic
 * @since 23 static
 */
declare namespace uriPermissionManager {
  /**
   * 授权URI给指定应用，授权成功后目标应用将获得该URI的文件访问权限，目标应用退出后权限将被回收。目标应用使用该URI的方法可以参考
   * [应用文件分享](docroot://file-management/share-app-file.md)。使用callback异步回调。
   * 该接口仅在Phone、PC/2in1、Tablet设备中可正常调用，在其他设备可以调用但是不生效。
   * 
   * > **说明：**
   * >
   * > - 当应用拥有ohos.permission.PROXY_AUTHORIZATION_URI权限时, 可以授权不属于自身但具有访问权限的URI。如果不具备该权限，则仅支持授权属于自身的URI。
   * >
   * > - 因URI处理涉及编解码，传入的URI需要使用[getUriFromPath]{@link @ohos.file.fileuri:fileUri.getUriFromPath}接口获取。对于应用自行拼接的URI，系统无法保证
   * > 其功能。
   *
   * @permission ohos.permission.PROXY_AUTHORIZATION_URI
   * @param { string } uri - 指向文件的URI，scheme固定为"file"，参考[FileUri]{@link @ohos.file.fileuri:fileUri.FileUri#constructor}。
   * @param { wantConstant.Flags } flag - URI的读权限或写权限。
   * @param { string } targetBundleName - 被授权URI的应用包名。
   * @param { AsyncCallback<number> } callback - 回调函数。返回0表示有权限，返回-1表示无权限。
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
   * 授权URI给指定应用，授权成功后目标应用将获得该URI的文件访问权限，目标应用退出后权限将被回收。目标应用使用该URI的方法可以参考
   * [应用文件分享](docroot://file-management/share-app-file.md)。使用callback异步回调。
   * 该接口仅在Phone、PC/2in1、Tablet设备中可正常调用，在其他设备可以调用但是不生效。
   * 
   * > **说明：**
   * >
   * > - 当应用拥有ohos.permission.PROXY_AUTHORIZATION_URI权限时, 可以授权不属于自身但具有访问权限的URI。如果不具备该权限，则仅支持授权属于自身的URI。
   * >
   * > - 因URI处理涉及编解码，传入的URI需要使用[getUriFromPath]{@link @ohos.file.fileuri:fileUri.getUriFromPath}接口获取。对于应用自行拼接的URI，系统无法保证
   * > 其功能。
   *
   * @permission ohos.permission.PROXY_AUTHORIZATION_URI
   * @param { string } uri - 指向文件的URI，scheme固定为"file"，参考[FileUri]{@link @ohos.file.fileuri:fileUri.FileUri#constructor}。
   * @param { wantConstant.Flags } flag - URI的读权限或写权限。
   * @param { string } targetBundleName - 被授权URI的应用包名。
   * @param { AsyncCallback<void> } callback - 回调函数。返回0表示有权限，返回-1表示无权限。
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
   * 授权URI给指定应用，授权成功后目标应用将获得该URI的文件访问权限，目标应用退出后权限将被回收。目标应用使用该URI的方法可以参考
   * [应用文件分享](docroot://file-management/share-app-file.md)。使用Promise异步回调。
   * 该接口仅在Phone、PC/2in1、Tablet设备中可正常调用，在其他设备可以调用但是不生效。
   * 
   * > **说明：**
   * >
   * > - 当应用拥有ohos.permission.PROXY_AUTHORIZATION_URI权限时, 可以授权不属于自身但具有访问权限的URI。如果不具备该权限，则仅支持授权属于自身的URI。
   * >
   * > - 因URI处理涉及编解码，传入的URI需要使用[getUriFromPath]{@link @ohos.file.fileuri:fileUri.getUriFromPath}接口获取。对于应用自行拼接的URI，系统无法保证
   * > 其功能。
   *
   * @permission ohos.permission.PROXY_AUTHORIZATION_URI
   * @param { string } uri - 指向文件的URI，scheme固定为"file"，参考[FileUri]{@link @ohos.file.fileuri:fileUri.FileUri#constructor}。
   * @param { wantConstant.Flags } flag - URI的读权限或写权限。
   * @param { string } targetBundleName - 被授权URI的应用包名。
   * @returns { Promise<number> } Promise对象。返回0表示有权限，返回-1表示无权限。
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
   * Grant URI to another application
   *
   * @permission ohos.permission.PROXY_AUTHORIZATION_URI
   * @param { string } uri - File URI.
   * @param { wantConstant.Flags } flag - wantConstant.Flags.FLAG_AUTH_READ_URI_PERMISSION,
   *     wantConstant.Flags.FLAG_AUTH_WRITE_URI_PERMISSION or
   *     wantConstant.Flags.FLAG_AUTH_PERSISTABLE_URI_PERMISSION.
   * @param { string } targetBundleName - Indicates the bundle name of authorization target.
   * @returns { Promise<void> } - the promise returned by the function.
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
   * 授权URI给指定应用，授权成功后目标应用将获得该URI的文件访问权限，目标应用退出后权限将被回收。目标应用使用该URI的方法可以参考
   * [应用文件分享](docroot://file-management/share-app-file.md)。使用Promise异步回调。
   * 该接口仅在Phone、PC/2in1、Tablet设备中可正常调用，在其他设备可以调用但是不生效。
   * 
   * > **说明：**
   * >
   * > - 当应用拥有ohos.permission.PROXY_AUTHORIZATION_URI权限时, 可以授权不属于自身但具有访问权限的URI。如果不具备该权限，则仅支持授权属于自身的URI。
   * >
   * > - 该接口支持给分身应用授权，需要指定目标应用的应用包名和分身索引。
   * >
   * > - 因URI处理涉及编解码，传入的URI需要使用[getUriFromPath]{@link @ohos.file.fileuri:fileUri.getUriFromPath}接口获取。对于应用自行拼接的URI，系统无法保证
   * > 其功能。
   *
   * @permission ohos.permission.PROXY_AUTHORIZATION_URI
   * @param { string } uri - 指向文件的URI，scheme固定为"file"，参考[FileUri]{@link @ohos.file.fileuri:fileUri.FileUri#constructor}。
   * @param { wantConstant.Flags } flag - URI的读权限或写权限。
   * @param { string } targetBundleName - 被授权应用的应用包名。
   * @param { int } appCloneIndex - 被授权应用的分身索引，有效范围为[0, 1000], 取值为0时表示主应用。
   * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
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
   * 撤销授权指定应用的URI。使用callback异步回调。
   * 该接口仅在Phone、PC/2in1、Tablet设备中可正常调用，在其他设备可以调用但是不生效。
   * 
   * > **说明：**
   * >
   * > - 允许应用撤销自身获得的其他应用URI权限，或授权给其他应用的URI权限。
   * >
   * > - 因URI处理涉及编解码，传入的URI需要使用[getUriFromPath]{@link @ohos.file.fileuri:fileUri.getUriFromPath}接口获取。对于应用自行拼接的URI，系统无法保证
   * > 其功能。
   *
   * @permission ohos.permission.PROXY_AUTHORIZATION_URI [since 10 - 18]
   * @param { string } uri - 指向文件的URI，scheme固定为"file"，参考[FileUri]{@link @ohos.file.fileuri:fileUri.FileUri#constructor}。
   * @param { string } targetBundleName - 被撤销授权uri的应用包名。
   * @param { AsyncCallback<number> } callback - 回调函数。返回0表示有权限，返回-1表示无权限。
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
   * 撤销授权指定应用的URI。使用callback异步回调。
   * 
   * > **说明：**
   * >
   * > - 允许应用撤销自身获得的其他应用URI权限，或授权给其他应用的URI权限。
   *
   * @param { string } uri - 指向文件的URI，scheme固定为"file"，参考[FileUri]{@link @ohos.file.fileuri:fileUri.FileUri#constructor}。
   * @param { string } targetBundleName - 被撤销授权uri的应用包名。
   * @param { AsyncCallback<void> } callback - 回调函数。返回0表示有权限，返回-1表示无权限。
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
   * 撤销授权指定应用的URI。使用Promise异步回调。
   * 该接口仅在Phone、PC/2in1、Tablet设备中可正常调用，在其他设备可以调用但是不生效。
   * 
   * > **说明：**
   * >
   * > - 允许应用撤销自身获得的其他应用URI权限，或授权给其他应用的URI权限。
   * >
   * > - 因URI处理涉及编解码，传入的URI需要使用[getUriFromPath]{@link @ohos.file.fileuri:fileUri.getUriFromPath}接口获取。对于应用自行拼接的URI，系统无法保证
   * > 其功能。
   *
   * @permission ohos.permission.PROXY_AUTHORIZATION_URI [since 10 - 18]
   * @param { string } uri - 指向文件的URI，scheme固定为"file"，参考[FileUri]{@link @ohos.file.fileuri:fileUri.FileUri#constructor}。
   * @param { string } targetBundleName - 被授权URI的应用包名。
   * @returns { Promise<number> } Promise对象。返回0表示有权限，返回-1表示无权限。
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
   * 撤销授权指定应用的URI。使用Promise异步回调。
   * 
   * > **说明：**
   * >
   * > - 允许应用撤销自身获得的其他应用URI权限，或授权给其他应用的URI权限。
   *
   * @param { string } uri - 指向文件的URI，scheme固定为"file"，参考[FileUri]{@link @ohos.file.fileuri:fileUri.FileUri#constructor}。
   * @param { string } targetBundleName - 被授权URI的应用包名。
   * @returns { Promise<void> } - Promise对象。返回0表示有权限，返回-1表示无权限。
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
   * 撤销授权指定应用的URI。使用Promise异步回调。
   * 该接口仅在Phone、PC/2in1、Tablet设备中可正常调用，在其他设备可以调用但是不生效。
   * 
   * > **说明：**
   * >
   * > - 允许应用撤销自身获得的其他应用URI权限，或授权给其他应用的URI权限。
   * >
   * > - 该接口支持撤销授权给分身应用的URI权限，需要指定目标应用的应用包名和分身索引。
   * >
   * > - 因URI处理涉及编解码，传入的URI需要使用[getUriFromPath]{@link @ohos.file.fileuri:fileUri.getUriFromPath}接口获取。对于应用自行拼接的URI，系统无法保证
   * > 其功能。
   *
   * @param { string } uri - 指向文件的URI，scheme固定为"file"，参考[FileUri]{@link @ohos.file.fileuri:fileUri.FileUri#constructor}。
   * @param { string } targetBundleName - 被授权应用的应用包名。
   * @param { int } appCloneIndex - 被授权应用的分身索引，有效范围为[0, 1000], 取值为0时表示主应用。
   * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
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
   * 通过UDMF数据唯一标识key，将当前应用的文件URI访问权限授权给目标应用，权限将在目标应用退出后回收。使用Promise异步回调。
   * 该接口仅在Phone、PC/2in1、Tablet设备中可正常调用，在其他设备中返回801错误码。
   * **系统接口**：此接口为系统接口。
   *
   * @param { string } key - 目标UDMF数据唯一标识。key必须由调用方通过
   *     [unifiedDataChannel.insertData]{@link @ohos.data.unifiedDataChannel:unifiedDataChannel.insertData(options: Options, data: UnifiedData, callback: AsyncCallback<string>)}
   *     创建，且写入的数据均为有权限授权的文件URI。<br>当前仅支持SYSTEM_SHARE、PICKER和MENU类型的
   *     [UDMF数据通路]{@link @ohos.data.unifiedDataChannel:unifiedDataChannel.Intention}的key。key的创建与使用方法详见
   *     [标准化数据通路实现数据共享](docroot://database/unified-data-channels.md)。
   * @param { wantConstant.Flags } flag - URI的读权限或写权限。支持的取值如下：<br>- FLAG_AUTH_READ_URI_PERMISSION：读权限。<br>- 
   *     FLAG_AUTH_WRITE_URI_PERMISSION：写权限。
   * @param { int } targetTokenId - 目标应用的身份标识，可以通过
   *     [bundleManager.getApplicationInfo]{@link @ohos.bundle.bundleManager:bundleManager.getApplicationInfo(bundleName: string, appFlags: int, userId: int, callback: AsyncCallback<ApplicationInfo>)}
   *     获取。
   * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
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
   * 通过UDMF数据唯一标识key，将指定应用的文件URI访问权限授权给目标应用，权限将在目标应用退出后回收。使用Promise异步回调。
   * 该接口仅在Phone、PC/2in1、Tablet设备中可正常调用，在其他设备中返回801错误码。
   * **系统接口**：此接口为系统接口。
   *
   * @permission ohos.permission.GRANT_URI_PERMISSION_AS_CALLER
   * @param { string } key - 目标UDMF数据唯一标识。key必须指定应用（即callerTokenId对应的应用）通过
   *     [unifiedDataChannel.insertData]{@link @ohos.data.unifiedDataChannel:unifiedDataChannel.insertData(options: Options, data: UnifiedData, callback: AsyncCallback<string>)}
   *     创建，且写入的数据均为有权限授权的文件URI。<br>当前仅支持SYSTEM_SHARE、PICKER和MENU类型的
   *     [UDMF数据通路]{@link @ohos.data.unifiedDataChannel:unifiedDataChannel.Intention}的key。key的创建与使用方法详见
   *     [标准化数据通路实现数据共享](docroot://database/unified-data-channels.md)。
   * @param { wantConstant.Flags } flag - URI的读权限或写权限。支持的取值如下：<br>- FLAG_AUTH_READ_URI_PERMISSION：读权限。<br>- 
   *     FLAG_AUTH_WRITE_URI_PERMISSION：写权限。
   * @param { int } callerTokenId - 拉起方应用的身份标识，可以通过[want]{@link @ohos.app.ability.Want:Want}中的"ohos.aafwk.param.callerToken"字
   *     段获取。
   * @param { int } targetTokenId - 目标应用的身份标识，可以通过
   *     [bundleManager.getApplicationInfo]{@link @ohos.bundle.bundleManager:bundleManager.getApplicationInfo(bundleName: string, appFlags: int, userId: int, callback: AsyncCallback<ApplicationInfo>)}
   *     获取。
   * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
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