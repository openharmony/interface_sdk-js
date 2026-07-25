/*
 * Copyright (c) 2021-2022 Huawei Device Co., Ltd.
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
 * ###### Core Enum Types
 *
 * - **[PermissionUsageFlag]{@link privacyManager.PermissionUsageFlag}:** 权限使用记录查询方式枚举，用于指定查询汇总数据或明细数据。
 * - **[PermissionActiveStatus]{@link privacyManager.PermissionActiveStatus}:** 权限使用状态变化类型枚举，用于表示未使用、前台使用或后台使用状态。
 * - **[PermissionUsedType]{@link privacyManager.PermissionUsedType}:** 敏感权限使用类型枚举，用于表示通过普通授权、Picker或安全控件方式使用敏感权限。
 *
 * ###### Core Interface Types
 *
 * - **[PermissionUsedRequest]{@link privacyManager.PermissionUsedRequest}:** 权限使用记录查询请求对象，用于指定查询应用、权限、时间范围和查询方式。
 * - **[PermissionUsedResponse]{@link privacyManager.PermissionUsedResponse}:** 权限使用记录查询响应对象，用于返回查询时间范围和应用维度记录集合。
 * - **[BundleUsedRecord]{@link privacyManager.BundleUsedRecord}:** 应用或设备维度的权限使用记录对象，用于返回某个应用或远端设备的权限访问记录。
 * - **[PermissionUsedRecord]{@link privacyManager.PermissionUsedRecord}:** 单个权限的访问记录对象，用于返回访问次数、拒绝次数、最后访问时间和明细记录。
 * - **[UsedRecordDetail]{@link privacyManager.UsedRecordDetail}:** 单次访问记录详情对象，用于返回访问状态、时间戳、访问时长和使用类型等信息。
 * - **[ActiveChangeResponse]{@link privacyManager.ActiveChangeResponse}:** 权限使用状态变化事件对象，用于返回权限活跃状态变化详情。
 * - **[PermissionUsedTypeInfo]{@link privacyManager.PermissionUsedTypeInfo}:** 权限使用类型信息对象，用于返回应用访问敏感权限时的使用类型。
 * - **[AddPermissionUsedRecordOptions]{@link privacyManager.AddPermissionUsedRecordOptions}:** 添加权限使用记录可选参数对象，用于指定敏感权限使用类型和扩展身份。
 * - **[PermissionUsingOptions]{@link privacyManager.PermissionUsingOptions}:** 权限使用可选参数对象，用于指定扩展身份。
 *
 * ###### Core Function Types
 *
 * - **[addPermissionUsedRecord]{@link privacyManager.addPermissionUsedRecord}:** 添加权限使用记录。
 * - **[getPermissionUsedRecord]{@link privacyManager.getPermissionUsedRecord}:** 查询权限使用记录。
 * - **[setPermissionUsedRecordToggleStatus]{@link privacyManager.setPermissionUsedRecordToggleStatus}:** 设置权限使用记录开关状态。
 * - **[getPermissionUsedRecordToggleStatus]{@link privacyManager.getPermissionUsedRecordToggleStatus}:** 查询权限使用记录开关状态。
 * - **[startUsingPermission]{@link privacyManager.startUsingPermission}:** 标记开始使用敏感权限。
 * - **[stopUsingPermission]{@link privacyManager.stopUsingPermission}:** 标记停止使用敏感权限。
 * - **[checkPermissionInUse]{@link privacyManager.checkPermissionInUse}:** C检查指定权限当前是否正在被使用。
 * - **[on]{@link privacyManager.on}:** 订阅权限使用状态变化事件。
 * - **[off]{@link privacyManager.off}:** 取消订阅权限使用状态变化事件。
 * - **[getPermissionUsedTypeInfos]{@link privacyManager.getPermissionUsedTypeInfos}:** 查询敏感权限访问类型信息。
 *
 * ###### Core Class
 *
 * - **privacyManager:** Provides the core class for privacy management.
 *
 * ![image_privacyManager](docroot://reference/apis-ability-kit/figures/privacyManager.png)
 *
 * @file Privacy Management
 * @kit AbilityKit
 */

import { AsyncCallback, Callback } from './@ohos.base';
import { Permissions } from './permissions';

/**
 * 本模块主要提供权限使用记录等隐私管理接口，支持系统应用记录、查询、监听和控制敏感权限的使用情况。
 * 权限使用记录用于描述某项敏感权限何时被使用、以何种方式被使用、当前是否处于使用中，以及这些使用记录是否允许被记录或查询。
 *
 * 该模块主要用于以下场景：
 *
 * - 添加/查询指定应用的敏感权限访问记录。
 * - 订阅权限使用状态变化事件，感知权限从未使用到前台使用、后台使用的变化，与业务逻辑进行联动。
 * - 控制当前用户的权限访问记录开关。
 * - 查询某个权限当前是否正在被使用。
 *
 * @syscap SystemCapability.Security.AccessToken
 * @FaAndStageModel
 * @since 9 dynamic
 * @since 23 static
 */
declare namespace privacyManager {
  /**
   * 受权限保护的应用在被其他服务、应用调用时，可以使用该接口增加一条权限使用记录。
   * 建议在访问敏感权限后调用此接口，以便系统记录对应的敏感权限访问事件。使用Promise异步回调。
   *
   * 权限使用记录包括：调用方的应用身份标识、使用的应用权限名称，以及调用方访问本应用成功和失败的次数。
   *
   * 权限使用记录受[setPermissionUsedRecordToggleStatus]{@link privacyManager.setPermissionUsedRecordToggleStatus}设置的开关状态控制。
   * 开关关闭时，调用此接口不会产生权限使用记录。
   *
   * @permission ohos.permission.PERMISSION_USED_STATS
   * @param { int } tokenID - 目标应用的身份标识。可通过应用BundleInfo中的ApplicationInfo中的[accessTokenId]{@link
   *     ./bundleManager/ApplicationInfo:ApplicationInfo.accessTokenId}字段获取。传入无效值时返回错误码12100001。
   *     <br>取值限定为整数。取值约束：该参数必须为大于0的整数。
   *     <br>BundleInfo获取可参考：[bundleManager.getBundleInfoSync]{@link @ohos.bundle.bundleManager:bundleManager.getBundleInfoSync}。
   * @param { Permissions } permissionName - 需要记录的权限名称。传入无效值时返回错误码12100001。
   *     <br>取值约束：权限名长度不能超过256个字符。
   * @param { int } successCount - 访问成功的次数。传入无效值时返回错误码12100001。
   *     <br>取值限定为整数。取值约束：取值必须为非负整数。
   * @param { int } failCount - 访问失败的次数。传入无效值时返回错误码12100001。
   *     <br>取值限定为整数。取值约束：取值必须为非负整数。
   * @param { AddPermissionUsedRecordOptions } [options] - 添加权限使用记录可选参数，用于指定敏感权限使用类型和扩展身份。当需要区分权限访问方式（如通过Picker或安全控件访问）或标识调用方扩展身份时传入此参数。[since 12]
   *     <br>默认值：结构内每个属性的默认值请参考[AddPermissionUsedRecordOptions]{@link privacyManager.AddPermissionUsedRecordOptions}。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 201 - Permission denied. Interface caller does not have permission
   *     "ohos.permission.PERMISSION_USED_STATS".
   * @throws { BusinessError } 202 - Not system app. Interface caller is not a system app.
   * @throws { BusinessError } 12100001 - Invalid parameter. The tokenID is 0, the permissionName exceeds
   *     256 characters, the count value is invalid, usedType in AddPermissionUsedRecordOptions is invalid,
   *     or the enhancedIdentity in AddPermissionUsedRecordOptions exceeds 48 characters.
   * @throws { BusinessError } 12100002 - The specified tokenID does not exist or refer to an application process.
   * @throws { BusinessError } 12100003 - The specified permission does not exist or is not a user_grant permission.
   * @throws { BusinessError } 12100007 - Service exception.
   * @throws { BusinessError } 12100008 - Out of memory.
   * @throws { BusinessError } 12100009 - Common inner error. A database error occurs.
   * @syscap SystemCapability.Security.AccessToken
   * @systemapi
   * @FaAndStageModel
   * @since 9 dynamic
   * @since 23 static
   */
  function addPermissionUsedRecord(
    tokenID: int,
    permissionName: Permissions,
    successCount: int,
    failCount: int,
    options?: AddPermissionUsedRecordOptions
  ): Promise<void>;

  /**
   * 受权限保护的应用在被其他服务、应用调用时，可以使用该接口增加一条权限使用记录。建议在访问敏感权限后调用此接口，以便系统记录对应的敏感权限访问事件。使用callback异步回调。
   *
   * 权限使用记录包括：调用方的应用身份标识、使用的应用权限名称，以及调用方访问本应用成功和失败的次数。
   *
   * 权限使用记录受[setPermissionUsedRecordToggleStatus]{@link privacyManager.setPermissionUsedRecordToggleStatus}设置的开关状态控制。开关关
   * 闭时，调用此接口不会产生权限使用记录。
   *
   * @permission ohos.permission.PERMISSION_USED_STATS
   * @param { int } tokenID - 目标应用的身份标识。可通过应用BundleInfo中的ApplicationInfo中的[accessTokenId]{@link
   *     ./bundleManager/ApplicationInfo:ApplicationInfo.accessTokenId}字段获取。传入无效值时返回错误码12100001。
   *     <br>取值限定为整数。取值约束：该参数必须为大于0的整数。
   *     <br>BundleInfo获取可参考：[bundleManager.getBundleInfoSync]{@link @ohos.bundle.bundleManager:bundleManager.getBundleInfoSync}。
   * @param { Permissions } permissionName - 需要记录的权限名称。传入无效值时返回错误码12100001。
   *     <br>取值约束：权限名长度不能超过256个字符。
   * @param { int } successCount - 访问成功的次数。传入无效值时返回错误码12100001。
   *     <br>取值限定为整数。取值约束：取值必须为非负整数。
   * @param { int } failCount - 访问失败的次数。传入无效值时返回错误码12100001。
   *     <br>取值限定为整数。取值约束：取值必须为非负整数。
   * @param { AsyncCallback<void> } callback - 回调函数。当添加使用记录成功时，err为undefined；否则为错误对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 201 - Permission denied. Interface caller does not have permission
   *     "ohos.permission.PERMISSION_USED_STATS".
   * @throws { BusinessError } 202 - Not system app. Interface caller is not a system app.
   * @throws { BusinessError } 12100001 - Invalid parameter. The tokenID is 0, the permissionName exceeds 256
   *     characters, or the count value is invalid.
   * @throws { BusinessError } 12100002 - The specified tokenID does not exist or refer to an application process.
   * @throws { BusinessError } 12100003 - The specified permission does not exist or is not a user_grant permission.
   * @throws { BusinessError } 12100007 - Service exception.
   * @throws { BusinessError } 12100008 - Out of memory.
   * @throws { BusinessError } 12100009 - Common inner error. A database error occurs.
   * @syscap SystemCapability.Security.AccessToken
   * @systemapi
   * @FaAndStageModel
   * @since 9 dynamic
   * @since 23 static
   */
  function addPermissionUsedRecord(
    tokenID: int,
    permissionName: Permissions,
    successCount: int,
    failCount: int,
    callback: AsyncCallback<void>
  ): void;

  /**
   * 获取历史权限使用记录，可用于权限审计或安全监控场景，例如检查某应用在指定时间段内对敏感权限的使用情况。使用Promise异步回调。
   *
   * @permission ohos.permission.PERMISSION_USED_STATS
   * @param { PermissionUsedRequest } request - 查询权限使用记录的请求。
   * @returns { Promise<PermissionUsedResponse> } Promise对象，返回查询的权限使用记录。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 201 - Permission denied. Interface caller does not have permission
   *     "ohos.permission.PERMISSION_USED_STATS".
   * @throws { BusinessError } 202 - Not system app. Interface caller is not a system app.
   * @throws { BusinessError } 12100001 - Invalid parameter. The value of flag, begin, or end in request is invalid.
   * @throws { BusinessError } 12100007 - Service exception.
   * @syscap SystemCapability.Security.AccessToken
   * @systemapi
   * @FaAndStageModel
   * @since 9 dynamic
   * @since 23 static
   */
  function getPermissionUsedRecord(request: PermissionUsedRequest): Promise<PermissionUsedResponse>;

  /**
   * 获取历史权限使用记录，可用于权限审计或安全监控场景，例如检查某应用在指定时间段内对敏感权限的使用情况。使用callback异步回调。
   *
   * @permission ohos.permission.PERMISSION_USED_STATS
   * @param { PermissionUsedRequest } request - 查询权限使用记录的请求。
   * @param { AsyncCallback<PermissionUsedResponse> } callback - 回调函数。当查询记录成功，err为undefined，data为获取到的权限使用记录；否则为错误对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 201 - Permission denied. Interface caller does not have permission
   *     "ohos.permission.PERMISSION_USED_STATS".
   * @throws { BusinessError } 202 - Not system app. Interface caller is not a system app.
   * @throws { BusinessError } 12100001 - Invalid parameter. The value of flag, begin, or end in request is invalid.
   * @throws { BusinessError } 12100007 - Service exception.
   * @syscap SystemCapability.Security.AccessToken
   * @systemapi
   * @FaAndStageModel
   * @since 9 dynamic
   * @since 23 static
   */
  function getPermissionUsedRecord(
    request: PermissionUsedRequest,
    callback: AsyncCallback<PermissionUsedResponse>): void;

  /**
   * 系统应用调用此接口，能够向系统上报应用在前后台的权限使用状态。隐私服务将此状态通知所有该权限使用状态变更事件的订阅者（订阅方法参考[on]{@link privacyManager.on}）。使用Promise异步回调。
   *
   * 开始使用权限后，需要在权限使用结束时调用[stopUsingPermission]{@link privacyManager.stopUsingPermission}停止使用权限。
   *
   * @permission ohos.permission.PERMISSION_USED_STATS
   * @param { int } tokenID - 目标应用的身份标识。可通过应用BundleInfo中的ApplicationInfo中的[accessTokenId]{@link
   *     ./bundleManager/ApplicationInfo:ApplicationInfo.accessTokenId}字段获取。传入无效值时返回错误码12100001。
   *     <br>取值限定为整数。取值约束：该参数必须为大于0的整数。
   *     <br>BundleInfo获取可参考：[bundleManager.getBundleInfoSync]{@link @ohos.bundle.bundleManager:bundleManager.getBundleInfoSync}。
   * @param { Permissions } permissionName - 需要使用的权限名称。传入无效值时返回错误码12100001。
   *     <br>取值约束：权限名长度不能超过256个字符。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 201 - Permission denied. Interface caller does not have permission
   *     "ohos.permission.PERMISSION_USED_STATS".
   * @throws { BusinessError } 202 - Not system app. Interface caller is not a system app.
   * @throws { BusinessError } 12100001 - Invalid parameter. The tokenID is 0, the permissionName
   *     exceeds 256 characters, or the type of the specified tokenID is not of the application type.
   * @throws { BusinessError } 12100002 - (Deprecated in 12) The specified tokenID does not exist or refer to an
   *     application process.
   * @throws { BusinessError } 12100003 - The specified permission does not exist or is not a user_grant permission.
   * @throws { BusinessError } 12100004 - The API is used repeatedly with the same input.
   *     It means the application specified by the tokenID has been using the specified permission.
   * @throws { BusinessError } 12100007 - Service exception.
   * @throws { BusinessError } 12100008 - Out of memory.
   * @syscap SystemCapability.Security.AccessToken
   * @systemapi
   * @FaAndStageModel
   * @since 9 dynamic
   */
  function startUsingPermission(tokenID: int, permissionName: Permissions): Promise<void>;

  /**
   * 系统应用调用此接口，能够向系统上报应用在前后台的权限使用状态。隐私服务将此状态通知所有该权限使用状态变更事件的订阅者（订阅方法参考
   * [on]{@link privacyManager.on(type: 'activeStateChange', permissionList: Array<Permissions>, callback: Callback<ActiveChangeResponse>)}）。
   * 使用Promise异步回调。
   *
   * 开始使用权限后，需要在权限使用结束时调用
   * [stopUsingPermission]{@link privacyManager.stopUsingPermission(tokenID: int, permissionName: Permissions, pid?: int)}
   * 停止使用权限。
   *
   * @permission ohos.permission.PERMISSION_USED_STATS
   * @param { int } tokenID - 目标应用的身份标识。可通过应用BundleInfo中的ApplicationInfo中的[accessTokenId]{@link
   *     ./bundleManager/ApplicationInfo:ApplicationInfo.accessTokenId}字段获取。传入无效值时返回错误码12100001。
   *     <br>取值限定为整数。取值约束：该参数必须为大于0的整数。
   *     <br>BundleInfo获取可参考：[bundleManager.getBundleInfoSync]{@link @ohos.bundle.bundleManager:bundleManager.getBundleInfoSync}。
   * @param { Permissions } permissionName - 需要使用的权限名称。传入无效值时返回错误码12100001。
   *     <br>取值约束：权限名长度不能超过256个字符。
   * @param { int } [pid] - 调用方的进程pid，用于根据进程生命周期管理权限使用状态。当需要精确控制特定进程的权限使用状态（例如进程退出时自动停止权限使用）时传入此参数。需要与[stopUsingPermission]{@link privacyManager.stopUsingPermission}传入的pid相同。
   *     <br>取值限定为整数。默认值：-1，表示不根据进程生命周期响应。
   * @param { PermissionUsedType } [usedType] - 敏感权限访问方式。
   *     <br>默认值：NORMAL_TYPE。
   *     <br>Default value: NORMAL_TYPE.
   * @returns { Promise<void> } Promise对象，无返回结果
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 201 - Permission denied. Interface caller does not have permission
   *     "ohos.permission.PERMISSION_USED_STATS".
   * @throws { BusinessError } 202 - Not system app. Interface caller is not a system app.
   * @throws { BusinessError } 12100001 - Invalid parameter. The tokenID is 0, the permissionName exceeds
   *     256 characters, the type of the specified tokenID is not of the application type, or usedType is invalid.
   * @throws { BusinessError } 12100003 - The specified permission does not exist or is not a user_grant permission.
   * @throws { BusinessError } 12100004 - The API is used repeatedly with the same input.
   *     It means the application specified by the tokenID has been using the specified permission.
   * @throws { BusinessError } 12100007 - Service exception.
   * @throws { BusinessError } 12100008 - Out of memory.
   * @syscap SystemCapability.Security.AccessToken
   * @systemapi
   * @FaAndStageModel
   * @since 18 dynamic
   * @since 23 static
   */
  function startUsingPermission(
    tokenID: int,
    permissionName: Permissions,
    pid?: int,
    usedType?: PermissionUsedType
  ): Promise<void>;

  /**
   * 系统应用调用此接口，能够向系统上报应用在前后台的权限使用状态。隐私服务将此状态通知所有该权限使用状态变更事件的订阅者（订阅方法参考
   * [on]{@link privacyManager.on(type: 'activeStateChange', permissionList: Array<Permissions>, callback:
   * Callback<ActiveChangeResponse>)}
   * ）。使用Promise异步回调。
   *
   * 开始使用权限后，需要在权限使用结束时调用
   * [stopUsingPermission]{@link privacyManager.stopUsingPermission(tokenID: int, permissionName: Permissions, pid?:
   * int, options?: PermissionUsingOptions)}
   * 停止使用权限。
   *
   * 当传入pid时，pid需要与
   * [stopUsingPermission]{@link privacyManager.stopUsingPermission(tokenID: int, permissionName: Permissions, pid?:
   * int, options?: PermissionUsingOptions)}
   * 传入的pid相同，不满足配套关系返回错误码12100004。
   *
   * @permission ohos.permission.PERMISSION_USED_STATS
   * @param { int } tokenID - 目标应用的身份标识。可通过应用BundleInfo中的ApplicationInfo中的[accessTokenId]{@link
   *     ./bundleManager/ApplicationInfo:ApplicationInfo.accessTokenId}字段获取。传入无效值时返回错误码12100001。
   *     <br>取值限定为整数。取值约束：该参数必须为大于0的整数。
   *     <br>BundleInfo获取可参考：[bundleManager.getBundleInfoSync]{@link @ohos.bundle.bundleManager:bundleManager.getBundleInfoSync}。
   * @param { Permissions } permissionName - 需要使用的权限名称。传入无效值时返回错误码12100001。
   *     <br>取值约束：权限名长度不能超过256个字符。
   * @param { int } [pid] - 调用方的进程pid，用于根据进程生命周期管理权限使用状态。当需要精确控制特定进程的权限使用状态（例如进程退出时自动停止权限使用）时传入此参数。需要与[stopUsingPermission]{@link
   *     privacyManager.stopUsingPermission}传入的pid相同。
   *     <br>取值限定为整数。默认值：-1，表示不根据进程生命周
   *     期响应。
   * @param { PermissionUsedType } [usedType] - 敏感权限访问方式。
   *     <br>默认值：NORMAL_TYPE。
   * @param { PermissionUsingOptions } [options] - 权限使用可选参数，用于指定扩展身份。当需要标识调用方的扩展身份信息时传入此参数。
   *     <br>默认值：结构内每个属性的默认值请参考 [PermissionUsingOptions]{@link privacyManager.PermissionUsingOptions}。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 201 - Permission denied. Interface caller does not have permission
   *     "ohos.permission.PERMISSION_USED_STATS".
   * @throws { BusinessError } 202 - Not system app. Interface caller is not a system app.
   * @throws { BusinessError } 12100001 - Invalid parameter. The tokenID is 0, the permissionName exceeds
   *     256 characters, the type of the specified tokenID is not of the application type, usedType is invalid,
   *     or the enhancedIdentity in PermissionUsingOptions exceeds 48 characters.
   * @throws { BusinessError } 12100003 - The specified permission does not exist or is not a user_grant permission.
   * @throws { BusinessError } 12100004 - The API is used repeatedly with the same input.
   *     It means the application specified by the tokenID has been using the specified permission.
   * @throws { BusinessError } 12100007 - Service exception.
   * @throws { BusinessError } 12100008 - Out of memory.
   * @syscap SystemCapability.Security.AccessToken
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function startUsingPermission(
     tokenID: int,
     permissionName: Permissions,
     pid?: int,
     usedType?: PermissionUsedType,
     options?: PermissionUsingOptions
   ): Promise<void>;

  /**
   * 系统应用调用此接口，能够向系统上报应用在前后台的权限使用状态。隐私服务将此状态通知所有该权限使用状态变更事件的订阅者（订阅方法参考
   * [on]{@link privacyManager.on(type: 'activeStateChange', permissionList: Array<Permissions>, callback: Callback<ActiveChangeResponse>)}
   * ）。使用callback异步回调。
   *
   * 开始使用权限后，需要在权限使用结束时调用
   * [stopUsingPermission]{@link privacyManager.stopUsingPermission(tokenID: int, permissionName: Permissions)}
   * 停止使用权限。
   *
   * @permission ohos.permission.PERMISSION_USED_STATS
   * @param { int } tokenID - 目标应用的身份标识。可通过应用BundleInfo中的ApplicationInfo中的[accessTokenId]{@link
   *     ./bundleManager/ApplicationInfo:ApplicationInfo.accessTokenId}字段获取。传入无效值时返回错误码12100001。
   *     <br>取值限定为整数。取值约束：该参数必须为大于0的整数。
   *     <br>BundleInfo获取可参考：[bundleManager.getBundleInfoSync]{@link @ohos.bundle.bundleManager:bundleManager.getBundleInfoSync}。
   * @param { Permissions } permissionName - 需要使用的权限名称。传入无效值时返回错误码12100001。
   *     <br>取值约束：权限名长度不能超过256个字符。
   * @param { AsyncCallback<void> } callback - 回调函数。当开始使用权限成功时，err为undefined；否则为错误对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 201 - Permission denied. Interface caller does not have permission
   *     "ohos.permission.PERMISSION_USED_STATS".
   * @throws { BusinessError } 202 - Not system app. Interface caller is not a system app.
   * @throws { BusinessError } 12100001 - Invalid parameter. The tokenID is 0, the permissionName exceeds 256
   *     characters, or the type of the specified tokenID is not of the application type.
   * @throws { BusinessError } 12100002 - (Deprecated in 12) The specified tokenID does not exist or refer to an
   *     application process.
   * @throws { BusinessError } 12100003 - The specified permission does not exist or is not a user_grant permission.
   * @throws { BusinessError } 12100004 - The API is used repeatedly with the same input.
   *     It means the application specified by the tokenID has been using the specified permission.
   * @throws { BusinessError } 12100007 - Service exception.
   * @throws { BusinessError } 12100008 - Out of memory.
   * @syscap SystemCapability.Security.AccessToken
   * @systemapi
   * @FaAndStageModel
   * @since 9 dynamic
   * @since 23 static
   */
  function startUsingPermission(
    tokenID: int,
    permissionName: Permissions,
    callback: AsyncCallback<void>
  ): void;

  /**
   * 系统应用调用此接口，标记不再使用指定权限。调用成功后，隐私服务将此状态变化通知所有该权限使用状态变更事件的订阅者。
   * 适用于应用完成敏感操作后或退出前台时，通知系统权限使用结束。使用Promise异步回调。
   *
   * 该接口需与[startUsingPermission]{@link privacyManager.startUsingPermission}配套使用。
   *
   * @permission ohos.permission.PERMISSION_USED_STATS
   * @param { int } tokenID - 目标应用的身份标识。可通过应用BundleInfo中的ApplicationInfo中的[accessTokenId]{@link
   *     ./bundleManager/ApplicationInfo:ApplicationInfo.accessTokenId}字段获取。传入无效值时返回错误码12100001。
   *     <br>取值限定为整数。取值约束：该参数必须为大于0的整数。
   *     <br>BundleInfo获取可参考：[bundleManager.getBundleInfoSync]{@link @ohos.bundle.bundleManager:bundleManager.getBundleInfoSync}。
   * @param { Permissions } permissionName - 需要停止使用的权限名称。传入无效值时返回错误码12100001。
   *     <br>取值约束：权限名长度不能超过256个字符。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 201 - Permission denied. Interface caller does not have permission
   *     "ohos.permission.PERMISSION_USED_STATS".
   * @throws { BusinessError } 202 - Not system app. Interface caller is not a system app.
   * @throws { BusinessError } 12100001 - Invalid parameter. The tokenID is 0, the permissionName exceeds 256
   *     characters, or the type of the specified tokenID is not of the application type.
   * @throws { BusinessError } 12100003 - The specified permission does not exist or is not a user_grant permission.
   * @throws { BusinessError } 12100004 - The API is not used in pair with 'startUsingPermission'.
   * @throws { BusinessError } 12100007 - Service exception.
   * @throws { BusinessError } 12100008 - Out of memory.
   * @syscap SystemCapability.Security.AccessToken
   * @systemapi
   * @FaAndStageModel
   * @since 9 dynamic
   */
  function stopUsingPermission(tokenID: int, permissionName: Permissions): Promise<void>;

  /**
   * 系统应用调用此接口，标记不再使用指定权限。调用成功后，隐私服务将此状态变化通知所有该权限使用状态变更事件的订阅者。
   * 适用于应用完成敏感操作后或退出前台时，通知系统权限使用结束。使用callback异步回调。
   *
   * 该接口需与[startUsingPermission]{@link privacyManager.startUsingPermission}配套使用。
   *
   * @permission ohos.permission.PERMISSION_USED_STATS
   * @param { int } tokenID - 目标应用的身份标识。可通过应用BundleInfo中的ApplicationInfo中的[accessTokenId]{@link
   *     ./bundleManager/ApplicationInfo:ApplicationInfo.accessTokenId}字段获取。传入无效值时返回错误码12100001。
   *     <br>取值限定为整数。取值约束：该参数必须为大于0的整数。
   *     <br>BundleInfo获取可参考：[bundleManager.getBundleInfoSync]{@link @ohos.bundle.bundleManager:bundleManager.getBundleInfoSync}。
   * @param { Permissions } permissionName - 需要停止使用的权限名称。传入无效值时返回错误码12100001。
   *     <br>取值约束：权限名长度不能超过256个字符。
   * @param { AsyncCallback<void> } callback - 回调函数。当停止使用权限成功时，err为undefined；否则为错误对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 201 - Permission denied. Interface caller does not have permission
   *     "ohos.permission.PERMISSION_USED_STATS".
   * @throws { BusinessError } 202 - Not system app. Interface caller is not a system app.
   * @throws { BusinessError } 12100001 - Invalid parameter. The tokenID is 0, the permissionName exceeds 256
   *     characters, or the type of the specified tokenID is not of the application type.
   * @throws { BusinessError } 12100003 - The specified permission does not exist or is not a user_grant permission.
   * @throws { BusinessError } 12100004 - The API is not used in pair with 'startUsingPermission'.
   * @throws { BusinessError } 12100007 - Service exception.
   * @throws { BusinessError } 12100008 - Out of memory.
   * @syscap SystemCapability.Security.AccessToken
   * @systemapi
   * @FaAndStageModel
   * @since 9 dynamic
   * @since 23 static
   */
  function stopUsingPermission(tokenID: int, permissionName: Permissions, callback: AsyncCallback<void>): void;

  /**
   * 系统应用调用此接口，标记不再使用指定权限。调用成功后，隐私服务将此状态变化通知所有该权限使用状态变更事件的订阅者。
   * 适用于应用完成敏感操作后或退出前台时，通知系统权限使用结束。使用Promise异步回调。
   *
   * pid需要与[startUsingPermission]{@link privacyManager.startUsingPermission}传入的pid相同。
   *
   * @permission ohos.permission.PERMISSION_USED_STATS
   * @param { int } tokenID - 目标应用的身份标识。可通过应用BundleInfo中的ApplicationInfo中的[accessTokenId]{@link
   *     ./bundleManager/ApplicationInfo:ApplicationInfo.accessTokenId}字段获取。传入无效值时返回错误码12100001。
   *     <br>取值限定为整数。取值约束：该参数必须为大于0的整数。
   *     <br>BundleInfo获取可参考：[bundleManager.getBundleInfoSync]{@link @ohos.bundle.bundleManager:bundleManager.getBundleInfoSync}。
   * @param { Permissions } permissionName - 需要停止使用的权限名称。传入无效值时返回错误码12100001。
   * @param { int } [pid] - 调用方的进程pid，需与[startUsingPermission]{@link privacyManager.startUsingPermission}传入的pid相同。
   *     不满足配套关系可能导致API调用失败（错误码12100004）。
   *     <br>取值限定为整数。默认值：-1，表示不根据进程生命周期响应。
   * @param { PermissionUsingOptions } [options] - 权限使用可选参数，用于指定扩展身份。当需要标识调用方的扩展身份信息时传入此参数。
   *     <br>默认值：结构内每个属性的默认值请参考 [PermissionUsingOptions]{@link privacyManager.PermissionUsingOptions}。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 201 - Permission denied. Interface caller does not have permission
   *     "ohos.permission.PERMISSION_USED_STATS".
   * @throws { BusinessError } 202 - Not system app. Interface caller is not a system app.
   * @throws { BusinessError } 12100001 - Invalid parameter. The tokenID is 0, the permissionName exceeds
   *     256 characters, the type of the specified tokenID is not of the application type, or the enhancedIdentity
   *     in PermissionUsingOptions exceeds 48 characters.
   * @throws { BusinessError } 12100003 - The specified permission does not exist or is not a user_grant permission.
   * @throws { BusinessError } 12100004 - The API is not used in pair with 'startUsingPermission'.
   * @throws { BusinessError } 12100007 - Service exception.
   * @throws { BusinessError } 12100008 - Out of memory.
   * @syscap SystemCapability.Security.AccessToken
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function stopUsingPermission(
    tokenID: int,
    permissionName: Permissions,
    pid?: int,
    options?: PermissionUsingOptions
  ): Promise<void>;

  /**
   * 订阅指定权限列表的权限使用状态变更事件。权限使用状态变更由[startUsingPermission]{@link
   * privacyManager.startUsingPermission}和[stopUsingPermission]{@link
   * privacyManager.stopUsingPermission}调用触发。订阅成功后，当权限使用状态变更时，回调函数会被触发，返回[ActiveChangeResponse]{@link
   * privacyManager.ActiveChangeResponse}对象，包含权限使用状态变化的详情。使用callback异步回调。
   *
   * 允许相同permissionList订阅多个回调函数。
   *
   * > **说明**
   * > 不允许使用有交集的两个permissionList分别订阅同一个回调函数。即如果两个permissionList包含相同的权限名，则不能使用同一个回调函数进行订阅。该接口通常与[off]{@link
   * privacyManager.off}配套使用，在不再需要监听时应调用off取消订阅。
   *
   * @permission ohos.permission.PERMISSION_USED_STATS
   * @param { 'activeStateChange' } type - 订阅事件类型，固定为'activeStateChange'，权限使用状态变更事件。
   * @param { Array<Permissions> } permissionList - 订阅的权限名列表。为空时表示订阅所有的权限使用状态变化。传入无效值时返回错误码12100001。
   *     <br>取值约束：数组长度不能超过1024。
   * @param { Callback<ActiveChangeResponse> } callback - 回调函数，返回订阅指定权限使用状态变更事件的对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 201 - Permission denied. Interface caller does not have permission
   *     "ohos.permission.PERMISSION_USED_STATS".
   * @throws { BusinessError } 202 - Not system app. Interface caller is not a system app.
   * @throws { BusinessError } 12100001 - Invalid parameter. The permissionList exceeds the size limit, or the
   *     permissionNames in the list are all invalid.
   * @throws { BusinessError } 12100004 - The API is used repeatedly with the same input.
   * @throws { BusinessError } 12100005 - The registration time has exceeded the limit.
   * @throws { BusinessError } 12100007 - Service exception.
   * @throws { BusinessError } 12100008 - Out of memory.
   * @syscap SystemCapability.Security.AccessToken
   * @systemapi
   * @FaAndStageModel
   * @since 9 dynamic
   */
  function on(type: 'activeStateChange',
    permissionList: Array<Permissions>,
    callback: Callback<ActiveChangeResponse>): void;

  /**
   * 订阅指定权限列表的权限使用状态变更事件。权限使用状态变更由
   * [startUsingPermission]{@link privacyManager.startUsingPermission(tokenID: int, permissionName: Permissions)}和
   * [stopUsingPermission]{@link privacyManager.stopUsingPermission(tokenID: int, permissionName: Permissions)}调用触发。订阅成功
   * 后，当权限使用状态变更时，回调函数会被触发，返回[ActiveChangeResponse]{@link privacyManager.ActiveChangeResponse}对象，包含权限使用状态变化的详情。使用
   * callback异步回调。
   *
   * 允许相同permissionList订阅多个回调函数。
   *
   * > **说明**
   * > 不允许使用有交集的两个permissionList分别订阅同一个回调函数。即如果两个permissionList包含相同的权限名，则不能使用同一个回调函数进行订阅。
   * > 该接口通常与[offActiveStateChange]{@link privacyManager.offActiveStateChange}配套使用，在不再需要监听时应调用offActiveStateChange取消订阅。
   *
   * @permission ohos.permission.PERMISSION_USED_STATS
   * @param { Array<Permissions> } permissionList - 订阅的权限名列表。为空时表示订阅所有的权限使用状态变化。传入无效值时返回错误码12100001。
   *     <br>取值约束：数组长度不能超过1024。
   * @param { Callback<ActiveChangeResponse> } callback - 回调函数，返回订阅指定权限使用状态变更事件的对象。
   * @throws { BusinessError } 201 - Permission denied. Interface caller does not have permission
   *     "ohos.permission.PERMISSION_USED_STATS".
   * @throws { BusinessError } 202 - Not system app. Interface caller is not a system app.
   * @throws { BusinessError } 12100001 - Invalid parameter. The permissionList exceeds the size limit,
   *     or the permissionNames in the list are all invalid.
   * @throws { BusinessError } 12100004 - The API is used repeatedly with the same input.
   * @throws { BusinessError } 12100005 - The registration time has exceeded the limit.
   * @throws { BusinessError } 12100007 - Service exception.
   * @throws { BusinessError } 12100008 - Out of memory.
   * @syscap SystemCapability.Security.AccessToken
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  function onActiveStateChange(
    permissionList: Array<Permissions>,
    callback: Callback<ActiveChangeResponse>): void;

  /**
   * 取消订阅指定权限列表的权限使用状态变更事件。取消订阅成功后，将不再接收指定权限列表的状态变更通知。
   *
   * 取消订阅时，若不传入回调函数，则批量删除permissionList下的所有回调函数。
   *
   * > **说明**
   * > 该接口通常与[on]{@link privacyManager.on}配套使用，用于取消通过on创建的监听关系。
   *
   * @permission ohos.permission.PERMISSION_USED_STATS
   * @param { 'activeStateChange' } type - 取消订阅事件类型，固定为'activeStateChange'，权限使用状态变更事件。
   * @param { Array<Permissions> } permissionList - 取消订阅的权限名列表，为空时表示取消订阅所有的权限状态变化，必须与on的输入一致。
   *     <br>取值约束：数组长度不能超过1024。
   * @param { Callback<ActiveChangeResponse> } [callback] - 回调函数，返回取消订阅指定tokenId与指定权限名状态变更事件的对象。需与
   *     [on]{@link privacyManager.on(type: 'activeStateChange', permissionList: Array<Permissions>, callback:
   *     Callback<ActiveChangeResponse>)}
   *     传入的callback一致；不传入此参数时，将批量删除permissionList下的所有回调函数。
   *     <br>取值约束：数组长度不能超过1024。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left
   *     unspecified; 2. Incorrect parameter types.
   * @throws { BusinessError } 201 - Permission denied. Interface caller does not have permission
   *     "ohos.permission.PERMISSION_USED_STATS".
   * @throws { BusinessError } 202 - Not system app. Interface caller is not a system app.
   * @throws { BusinessError } 12100001 - Invalid parameter. The permissionList is not in the listening list.
   * @throws { BusinessError } 12100004 - The API is not used in pair with 'on'.
   * @throws { BusinessError } 12100007 - Service exception.
   * @throws { BusinessError } 12100008 - Out of memory.
   * @syscap SystemCapability.Security.AccessToken
   * @systemapi
   * @FaAndStageModel
   * @since 9 dynamic
   */
  function off(
    type: 'activeStateChange',
    permissionList: Array<Permissions>,
    callback?: Callback<ActiveChangeResponse>): void;

  /**
   * 取消订阅指定权限列表的权限使用状态变更事件。取消订阅成功后，将不再接收指定权限列表的状态变更通知。
   *
   * 取消订阅时，若不传入回调函数，则批量删除permissionList下的所有回调函数。
   *
   * > **说明**
   * > 该接口通常与[on]{@link privacyManager.onActiveStateChange}配套使用，用于取消通过on创建的监听关系。
   *
   * @permission ohos.permission.PERMISSION_USED_STATS
   * @param { Array<Permissions> } permissionList - 取消订阅的权限名列表，为空时表示取消订阅所有的权限状态变化，必须与on的输入一致。
   *     <br>取值约束：数组长度不能超过1024。
   * @param { Callback<ActiveChangeResponse> } [callback] - 回调函数，返回取消订阅指定tokenId与指定权限名状态变更事件的对象。需与
   *     [on]{@link privacyManager.onActiveStateChange(permissionList: Array<Permissions>, callback: Callback<ActiveChangeResponse>)}
   *     传入的callback一致；不传入此参数时，将批量删除permissionList下的所有回调函数。
   * @throws { BusinessError } 201 - Permission denied. Interface caller does not have permission
   *     "ohos.permission.PERMISSION_USED_STATS".
   * @throws { BusinessError } 202 - Not system app. Interface caller is not a system app.
   * @throws { BusinessError } 12100001 - Invalid parameter. The permissionList is not in the listening list.
   * @throws { BusinessError } 12100004 - The API is not used in pair with 'on'.
   * @throws { BusinessError } 12100007 - Service exception.
   * @throws { BusinessError } 12100008 - Out of memory.
   * @syscap SystemCapability.Security.AccessToken
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  function offActiveStateChange(
    permissionList: Array<Permissions>,
    callback?: Callback<ActiveChangeResponse>): void;

  /**
   * 查询设备上指定应用访问敏感权限时的信息（包括敏感权限名称、敏感权限访问方式）。
   *
   * @permission ohos.permission.PERMISSION_USED_STATS
   * @param { int | null } [tokenId] - 访问敏感权限的应用身份标识。可通过应用[BundleInfo]{@link ./bundleManager/BundleInfo}中的
   *     [ApplicationInfo]{@link ./bundleManager/ApplicationInfo:ApplicationInfo}的accessTokenId字段获取。当需要查询特定应用的敏感权限访问类型信息
   *     时传入具体的tokenId；为0或null时表示查询所有应用的敏感权限访问类型信息。从API version 20开始，新增支持null类型。
   *     <br>默认值：0。
   * @param { Permissions } [permissionName] - 被访问的敏感权限名称。当需要查询特定敏感权限的访问类型信息时传入具体的权限名；为空时表示查询所有敏感权限的访问类型信息。传入无效值时返回错误码12100001。
   *     <br>取值约束：权限名长度不能超过256个字符。默认值：空。
   * @returns { Promise<Array<PermissionUsedTypeInfo>> } Promise used to return the list of permission access type
   *     information.
   * @throws { BusinessError } 201 - Permission denied. Interface caller does not have permission
   *     "ohos.permission.PERMISSION_USED_STATS".
   * @throws { BusinessError } 202 - Not system app. Interface caller is not a system app.
   * @throws { BusinessError } 12100001 - Invalid parameter. PermissionName exceeds 256 characters.
   * @throws { BusinessError } 12100002 - The input tokenId does not exist.
   * @throws { BusinessError } 12100003 - The input permissionName does not exist.
   * @throws { BusinessError } 12100009 - Common inner error. A database error occurs.
   * @syscap SystemCapability.Security.AccessToken
   * @systemapi
   * @FaAndStageModel
   * @since 12 dynamic
   * @since 23 static
   */
  function getPermissionUsedTypeInfos(
    tokenId?: int | null,
    permissionName?: Permissions): Promise<Array<PermissionUsedTypeInfo>>;

  /**
   * 表示权限使用状态变化类型的枚举。用于描述权限使用[on)]{@link privacyManager.on}）的回调中返回，帮助应用感知权限从未使用到前台使用、后台使用的状态切换。
   *
   * @syscap SystemCapability.Security.AccessToken
   * @systemapi
   * @FaAndStageModel
   * @since 9 dynamic
   * @since 23 static
   */
  enum PermissionActiveStatus {
    /**
     * 表示未使用权限。
     *
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @FaAndStageModel
     * @since 9 dynamic
     * @since 23 static
     */
    PERM_INACTIVE = 0,

    /**
     * 表示前台使用权限。
     *
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @FaAndStageModel
     * @since 9 dynamic
     * @since 23 static
     */
    PERM_ACTIVE_IN_FOREGROUND = 1,

    /**
     * 表示后台使用权限。
     *
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @FaAndStageModel
     * @since 9 dynamic
     * @since 23 static
     */
    PERM_ACTIVE_IN_BACKGROUND = 2
  }

  /**
   * 表示某次权限使用状态变化的详情。
   *
   * @syscap SystemCapability.Security.AccessToken
   * @systemapi
   * @FaAndStageModel
   * @since 9 dynamic
   * @since 23 static
   */
  interface ActiveChangeResponse {
    /**
     * 接口调用方的应用身份标识，当activeStatus为INACTIVE时该值无效。
     *
     * 默认值：0。
     *
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @FaAndStageModel
     * @since 18 dynamic
     * @since 23 static
     */
    callingTokenId?: int;

    /**
     * 被订阅的应用身份标识。
     *
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @FaAndStageModel
     * @since 9 dynamic
     * @since 23 static
     */
    tokenId: int;

    /**
     * 权限使用状态发生变化的权限名。
     *
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @FaAndStageModel
     * @since 9 dynamic
     * @since 23 static
     */
    permissionName: Permissions;

    /**
     * 权限使用状态发生变化时所在设备的ID。
     *
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @FaAndStageModel
     * @since 9 dynamic
     * @since 23 static
     */
    deviceId: string;

    /**
     * 权限使用状态变化类型。
     *
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @FaAndStageModel
     * @since 9 dynamic
     * @since 23 static
     */
    activeStatus: PermissionActiveStatus;

    /**
     * 敏感权限使用类型，当activeStatus为INACTIVE时该值无效。
     *
     * 默认值：NORMAL_TYPE。
     *
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @FaAndStageModel
     * @since 18 dynamic
     * @since 23 static
     */
    usedType?: PermissionUsedType;
    /**
     * 扩展身份，用于标识调用方的附加身份信息。当需要区分同一应用下不同调用来源的权限使用记录时返回此字段。
     * 最大长度为48。默认值：空字符串。
     *
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    enhancedIdentity?: string;
  }

  /**
   * 表示使用记录的查询方式的枚举。
   *
   * @syscap SystemCapability.Security.AccessToken
   * @systemapi
   * @FaAndStageModel
   * @since 9 dynamic
   * @since 23 static
   */
  enum PermissionUsageFlag {
    /**
     * 表示查询总览数据。
     *
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @FaAndStageModel
     * @since 9 dynamic
     * @since 23 static
     */
    FLAG_PERMISSION_USAGE_SUMMARY = 0,
    /**
     * 表示查询详细数据。
     *
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @FaAndStageModel
     * @since 9 dynamic
     * @since 23 static
     */
    FLAG_PERMISSION_USAGE_DETAIL = 1
  }

  /**
   * 表示使用记录的查询请求。
   *
   * @syscap SystemCapability.Security.AccessToken
   * @systemapi
   * @FaAndStageModel
   * @since 9 dynamic
   * @since 23 static
   */
  interface PermissionUsedRequest {
    /**
     * 目标应用的身份标识。目标应用的身份标识。可通过应用BundleInfo中的ApplicationInfo中的
     *     [accessTokenId]{@link ./bundleManager/ApplicationInfo:ApplicationInfo.accessTokenId}字段获取。
     *     该参数必须为大于0的整数，传入0时返回错误码12100001。
     *     <br>BundleInfo获取可参考：[bundleManager.getBundleInfoSync]{@link @ohos.bundle.bundleManager:bundleManager.getBundleInfoSync}。
     *
     * 默认值：0，查询所有应用。
     *
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @FaAndStageModel
     * @since 9 dynamic
     * @since 23 static
     */
    tokenId?: int;

    /**
     * 指定是否查询远端设备。false表示查询本端设备的权限使用记录，true表示查询远端设备记录。
     *
     * 默认值：false。
     *
     * @default false
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @FaAndStageModel
     * @since 9 dynamic
     * @since 23 static
     */
    isRemote?: boolean;

    /**
     * 目标应用所在设备的ID。
     *
     * 默认值：本端设备ID。
     *
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @FaAndStageModel
     * @since 9 dynamic
     * @since 23 static
     */
    deviceId?: string;

    /**
     * 目标应用的包名。
     *
     * 默认值：查询所有应用。
     *
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @FaAndStageModel
     * @since 9 dynamic
     * @since 23 static
     */
    bundleName?: string;

    /**
     * 需要查询的权限集合。
     * 默认值：空，表示查询所有权限的使用记录。
     *
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @FaAndStageModel
     * @since 9 dynamic
     * @since 23 static
     */
    permissionNames?: Array<Permissions>;

    /**
     * 查询的起始时间。
     * 单位为：毫秒。默认值：0，表示不限制起始时间。
     *
     * @default 0
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @FaAndStageModel
     * @since 9 dynamic
     * @since 23 static
     */
    beginTime?: long;

    /**
     * 查询的终止时间，不早于beginTime，否则返回错误码12100001。
     * 单位为：毫秒。默认值：0，表示不限制终止时间。
     *
     * @default 0
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @FaAndStageModel
     * @since 9 dynamic
     * @since 23 static
     */
    endTime?: long;

    /**
     * 指定查询方式。设置为FLAG_PERMISSION_USAGE_SUMMARY时返回汇总信息；设置为FLAG_PERMISSION_USAGE_DETAIL时返回明细记录。
     *
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @FaAndStageModel
     * @since 9 dynamic
     * @since 23 static
     */
    flag: PermissionUsageFlag;
  }

  /**
   * 表示所有应用或设备的访问记录。
   *
   * @syscap SystemCapability.Security.AccessToken
   * @systemapi
   * @FaAndStageModel
   * @since 9 dynamic
   * @since 23 static
   */
  interface PermissionUsedResponse {
    /**
     * 查询记录的起始时间。
     * 单位为：毫秒。
     *
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @FaAndStageModel
     * @since 9 dynamic
     * @since 23 static
     */
    beginTime: long;

    /**
     * 查询记录的终止时间。
     * 单位为：毫秒。
     *
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @FaAndStageModel
     * @since 9 dynamic
     * @since 23 static
     */
    endTime: long;

    /**
     * 每个元素表示一个应用维度下的权限访问记录，开发者可进一步遍历permissionRecords获取具体权限使用详情。
     *
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @FaAndStageModel
     * @since 9 dynamic
     * @since 23 static
     */
    bundleRecords: Array<BundleUsedRecord>;
  }

  /**
   * 某个应用或设备的访问记录。
   *
   * @syscap SystemCapability.Security.AccessToken
   * @systemapi
   * @FaAndStageModel
   * @since 9 dynamic
   * @since 23 static
   */
  interface BundleUsedRecord {
    /**
     * 使用权限的应用身份标识。分布式场景下该字段无效，需结合deviceId和deviceName识别来源设备。
     *
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @FaAndStageModel
     * @since 9 dynamic
     * @since 23 static
     */
    tokenId: int;

    /**
     * 是否是分布式场景的访问记录。false表示本端应用记录，true表示远端设备上的权限使用记录。
     *
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @FaAndStageModel
     * @since 9 dynamic
     * @since 23 static
     */
    isRemote: boolean;

    /**
     * 使用权限的应用所在设备ID。主要在分布式场景下用于识别远端设备来源；本端场景下通常可忽略该字段。
     *
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @FaAndStageModel
     * @since 9 dynamic
     * @since 23 static
     */
    deviceId: string;

    /**
     * 使用权限的应用包名。在本端场景下可用于直接定位目标应用；分布式场景下该字段无效。
     *
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @FaAndStageModel
     * @since 9 dynamic
     * @since 23 static
     */
    bundleName: string;

    /**
     * 当前应用或设备下的权限使用记录集合。每个元素对应一个具体权限，可进一步查看访问次数、拒绝次数、最后访问时间及明细记录。
     *
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @FaAndStageModel
     * @since 9 dynamic
     * @since 23 static
     */
    permissionRecords: Array<PermissionUsedRecord>;
    /**
     * 使用权限的应用所在设备名称，仅用于分布式场景。可用于在界面中展示更易理解的设备标识。
     * 默认值：空字符串。
     *
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @FaAndStageModel
     * @since 24 dynamic&static
     */
    deviceName?: string;
  }

  /**
   * 某个权限的访问记录。
   *
   * @syscap SystemCapability.Security.AccessToken
   * @systemapi
   * @FaAndStageModel
   * @since 9 dynamic
   * @since 23 static
   */
  interface PermissionUsedRecord {
    /**
     * 权限名，用于标识当前统计记录对应的敏感权限。
     *
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @FaAndStageModel
     * @since 9 dynamic
     * @since 23 static
     */
    permissionName: Permissions;
    /**
     * 该权限访问总次数，表示在查询时间窗口内成功使用该权限的累计次数。
     *
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @FaAndStageModel
     * @since 9 dynamic
     * @since 23 static
     */
    accessCount: int;
    /**
     * 该权限拒绝总次数，表示在查询时间窗口内权限访问失败或被拒绝的累计次数。
     *
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @FaAndStageModel
     * @since 9 dynamic
     * @since 23 static
     */
    rejectCount: int;
    /**
     * 最后一次访问时间。
     * 单位为：毫秒。
     *
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @FaAndStageModel
     * @since 9 dynamic
     * @since 23 static
     */
    lastAccessTime: long;
    /**
     * 最后一次拒绝时间。
     * 单位为：毫秒。
     *
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @FaAndStageModel
     * @since 9 dynamic
     * @since 23 static
     */
    lastRejectTime: long;

    /**
     * 最后一次访问时长。
     * 单位为：毫秒。
     *
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @FaAndStageModel
     * @since 9 dynamic
     * @since 23 static
     */
    lastAccessDuration: long;

    /**
     * 访问记录集合，仅当flag为FLAG_PERMISSION_USAGE_DETAIL时生效。
     *
     * 默认值：查询最近10条成功访问记录。
     *
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @FaAndStageModel
     * @since 9 dynamic
     * @since 23 static
     */
    accessRecords: Array<UsedRecordDetail>;

    /**
     * 拒绝记录集合，仅当flag为FLAG_PERMISSION_USAGE_DETAIL时生效。
     *
     * 默认值：查询最近10条失败或拒绝记录。
     *
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @FaAndStageModel
     * @since 9 dynamic
     * @since 23 static
     */
    rejectRecords: Array<UsedRecordDetail>;
    /**
     * 扩展身份，长度不超过48个字符。
     *
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    enhancedIdentity?: string;
  }

  /**
   * 单次访问记录详情。
   *
   * @syscap SystemCapability.Security.AccessToken
   * @systemapi
   * @FaAndStageModel
   * @since 9 dynamic
   * @since 23 static
   */
  interface UsedRecordDetail {
    /**
     * 访问状态。0表示停止使用，1表示前台使用，2表示后台使用。
     *
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @FaAndStageModel
     * @since 9 dynamic
     * @since 23 static
     */
    status: int;

    /**
     * 访问时的锁屏状态。
     *
     * - 1，表示非锁屏场景使用权限。
     * - 2，表示锁屏场景使用权限。
     *
     * 默认值：1。
     *
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @FaAndStageModel
     * @since 11 dynamic
     * @since 23 static
     */
    lockScreenStatus?: int;

    /**
     * 访问时的时间戳。
     * 单位为：毫秒。
     *
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @FaAndStageModel
     * @since 9 dynamic
     * @since 23 static
     */
    timestamp: long;

    /**
     * 访问次数。在accessRecords中表示成功访问次数，在rejectRecords中表示失败或拒绝次数。
     *
     * 默认值：0。
     *
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @FaAndStageModel
     * @since 11 dynamic
     * @since 23 static
     */
    count?: int;

    /**
     * 访问时长。
     * 单位为：毫秒。
     *
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @FaAndStageModel
     * @since 9 dynamic
     * @since 23 static
     */
    accessDuration: long;
    /**
     * 敏感权限访问方式。
     *
     * 默认值：NORMAL_TYPE。
     *
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @FaAndStageModel
     * @since 12 dynamic
     * @since 23 static
     */
    usedType?: PermissionUsedType;
  }

  /**
   * 表示通过何种方式使用敏感权限的枚举。
   *
   * | 名称                    | 值 | 说明              |
   * | ----------------------- | -- | ---------------- |
   * | NORMAL_TYPE             | 0  | 表示通过弹窗授权或设置授权来使用敏感权限。   |
   * | PICKER_TYPE             | 1  | 表示通过某个PICKER服务来使用敏感权限，但此方式不会授予权限。 |
   * | SECURITY_COMPONENT_TYPE | 2  | 表示通过安全控件授权的方式来使用敏感权限。安全控件是系统提供的授权控件，用户点击后应用可临时获取对应权限。 |
   *
   * @syscap SystemCapability.Security.AccessToken
   * @systemapi
   * @FaAndStageModel
   * @since 12 dynamic
   * @since 23 static
   */
  enum PermissionUsedType {
    /**
     *
     *
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @FaAndStageModel
     * @since 12 dynamic
     * @since 23 static
     */
    NORMAL_TYPE = 0,

    /**
     *
     *
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @FaAndStageModel
     * @since 12 dynamic
     * @since 23 static
     */
    PICKER_TYPE = 1,

    /**
     *
     *
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @FaAndStageModel
     * @since 12 dynamic
     * @since 23 static
     */
    SECURITY_COMPONENT_TYPE = 2
  }

  /**
   * 表示某次权限使用类型的详情。
   *
   * @syscap SystemCapability.Security.AccessToken
   * @systemapi
   * @FaAndStageModel
   * @since 12 dynamic
   * @since 23 static
   */
  interface PermissionUsedTypeInfo {
    /**
     * 访问敏感权限的应用身份标识。
     *
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @FaAndStageModel
     * @since 12 dynamic
     * @since 23 static
     */
    tokenId: int;

    /**
     * 被访问的敏感权限名称。
     *
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @FaAndStageModel
     * @since 12 dynamic
     * @since 23 static
     */
    permissionName: Permissions;

    /**
     * 敏感权限使用类型。
     *
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @FaAndStageModel
     * @since 12 dynamic
     * @since 23 static
     */
    usedType: PermissionUsedType;
  }

  /**
   * 添加权限使用记录可选参数集。
   *
   * @syscap SystemCapability.Security.AccessToken
   * @systemapi
   * @FaAndStageModel
   * @since 12 dynamic
   * @since 23 static
   */
  interface AddPermissionUsedRecordOptions {
    /**
     * 敏感权限使用类型。
     *
     * 默认值：NORMAL_TYPE。
     *
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @FaAndStageModel
     * @since 12 dynamic
     * @since 23 static
     */
    usedType?: PermissionUsedType;
    /**
     * 扩展身份，用于标识调用方的附加身份信息。当需要区分同一应用下不同调用来源的权限使用记录时传入此字段。长度不超过48个字符，调用
     * [addPermissionUsedRecord]{@link privacyManager.addPermissionUsedRecord}时传入超长值会返回错误码12100001。
     * 最大长度为48。默认值：空字符串。
     *
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    enhancedIdentity?: string;
  }

  /**
   * 权限使用可选参数集。
   *
   * @syscap SystemCapability.Security.AccessToken
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface PermissionUsingOptions {
    /**
     * 扩展身份，用于标识调用方的附加身份信息。当需要区分同一应用下不同调用来源的权限使用记录时传入此字段。长度不超过48个字符，调用
     * [startUsingPermission]{@link privacyManager.startUsingPermission}或
     * [stopUsingPermission]{@link privacyManager.stopUsingPermission}时传入超长值会返回错误码12100001。
     *
     * 默认值：空字符串。
     *
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    enhancedIdentity?: string;
  }
  /**
   * 系统应用调用此接口，可以获取当前用户的权限使用记录开关状态，例如在权限管理界面展示当前开关设置状态。使用Promise异步回调。
   *
   * @permission ohos.permission.PERMISSION_USED_STATS
   * @returns { Promise<boolean> } Promise对象，返回true，表示当前用户的开关状态值为开启。返回false，表示当前用户的开关状态值为关闭。
   * @throws { BusinessError } 201 - Permission denied. Interface caller does not have permission
   *     "ohos.permission.PERMISSION_USED_STATS".
   * @throws { BusinessError } 202 - Not system app. Interface caller is not a system app.
   * @throws { BusinessError } 12100004 - This API must be used together with
   *     [setPermissionUsedRecordToggleStatus]{@link privacyManager.setPermissionUsedRecordToggleStatus(status: boolean)}. [since 26.1.0]
   * @throws { BusinessError } 12100007 - Service exception.
   * @syscap SystemCapability.Security.AccessToken
   * @systemapi
   * @FaAndStageModel
   * @since 18 dynamic
   * @since 23 static
   */
  function getPermissionUsedRecordToggleStatus(): Promise<boolean>;
  /**
   * 系统应用调用此接口，可以获取指定子身份资料的权限使用记录开关状态，例如在权限管理界面展示当前开关设置状态。使用Promise异步回调。
   *
   * @permission ohos.permission.PERMISSION_USED_STATS
   * @param { int } subProfileId - 子身份资料的标识符。可以通过[OsAccountSubProfile.id]{@link @ohos.account.osAccount:osAccount.OsAccountSubProfile.id}获取。
   *     <br>取值限定为整数。取值约束：该参数必须为大于0的整数。
   * @returns { Promise<boolean> } Promise对象，返回true，表示指定子身份资料的开关状态值为开启。返回false，表示指定子身份资料的开关状态值为关闭
   * @throws { BusinessError } 201 - Permission denied. Interface caller does not have permission
   *     "ohos.permission.PERMISSION_USED_STATS".
   * @throws { BusinessError } 202 - Not system app. Interface caller is not a system app.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 12100001 - Invalid parameter. The specified subProfileId does not exist for the current user.
   * @throws { BusinessError } 12100007 - Service exception.
   * @syscap SystemCapability.Security.AccessToken
   * @systemapi
   * @stagemodelonly
   * @since 26.1.0 dynamiconly
   */
  function getPermissionUsedRecordToggleStatus(subProfileId: int): Promise<boolean>;
  /**
   * 系统应用调用此接口，标记不再使用指定权限。调用成功后，隐私服务将此状态变化通知所有该权限使用状态变更事件的订阅者。适用于应用完成敏感操作后或退出前台时，通知系统权限使用结束。使用Promise异步回调。
   *
   * pid需要与
   * [startUsingPermission]{@link privacyManager.startUsingPermission(tokenID: int, permissionName: Permissions, pid?: int, usedType?: PermissionUsedType)}
   * 传入的pid相同。
   *
   * @permission ohos.permission.PERMISSION_USED_STATS
   * @param { int } tokenID - 目标应用的身份标识。可通过应用BundleInfo中的ApplicationInfo中的[accessTokenId]{@link
   *     ./bundleManager/ApplicationInfo:ApplicationInfo.accessTokenId}字段获取。传入无效值时返回错误码12100001。
   *     <br>取值限定为整数。取值约束：该参数必须为大于0的整数。
   *     <br>BundleInfo获取可参考：[bundleManager.getBundleInfoSync]{@link @ohos.bundle.bundleManager:bundleManager.getBundleInfoSync}。
   * @param { Permissions } permissionName - 需要停止使用的权限名称。传入无效值时返回错误码12100001。
   *     <br>取值约束：权限名长度不能超过256个字符。
   * @param { int } [pid] - Process PID of the caller. Must be the same as the pid passed to
   *     [startUsingPermission]{@link privacyManager.startUsingPermission}. A mismatch may cause the API call to fail
   *     (error code 12100004).
   *     <br>The value should be an integer. Default value: -1, indicating no response based on process lifecycle.
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 201 - Permission denied. Interface caller does not have permission
   *     "ohos.permission.PERMISSION_USED_STATS".
   * @throws { BusinessError } 202 - Not system app. Interface caller is not a system app.
   * @throws { BusinessError } 12100001 - Invalid parameter. The tokenID is 0, the permissionName exceeds 256
   *     characters, or the type of the specified tokenID is not of the application type.
   * @throws { BusinessError } 12100003 - The specified permission does not exist or is not a user_grant permission.
   * @throws { BusinessError } 12100004 - The API is not used in pair with 'startUsingPermission'.
   * @throws { BusinessError } 12100007 - Service exception.
   * @throws { BusinessError } 12100008 - Out of memory.
   * @syscap SystemCapability.Security.AccessToken
   * @systemapi
   * @FaAndStageModel
   * @since 18 dynamic
   * @since 23 static
   */
  function stopUsingPermission(
    tokenID: int,
    permissionName: Permissions,
    pid?: int
  ): Promise<void>;

  /**
   * 设置是否记录当前用户的权限使用情况。系统应用调用此接口，可以设置当前用户的权限使用记录开关状态。使用Promise异步回调。
   *
   * status为true时，[addPermissionUsedRecord]{@link privacyManager.addPermissionUsedRecord}接口可以正常添加使用记录；status为false时，
   * [addPermissionUsedRecord]{@link privacyManager.addPermissionUsedRecord}接口不产生权限使用记录，并且删除当前用户的历史记录。
   *
   * @permission ohos.permission.PERMISSION_RECORD_TOGGLE
   * @param { boolean } status - 权限使用记录开关状态。true为开，false为关。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 201 - Permission denied. Interface caller does not have permission
   *     "ohos.permission.PERMISSION_RECORD_TOGGLE".
   * @throws { BusinessError } 202 - Not system app. Interface caller is not a system app.
   * @throws { BusinessError } 12100006 - Operation not allowed. The toggle status of the specified permission has
   *     already been set by [setPermissionUsedRecordToggleStatus]{@link privacyManager.setPermissionUsedRecordToggleStatus(status: boolean, subProfileId: int)}. [since 26.1.0]
   * @throws { BusinessError } 12100007 - Service exception.
   * @throws { BusinessError } 12100009 - Common inner error. Possible causes: 1. Database error. 2. Failed to query
   *     all applications under the user.
   * @syscap SystemCapability.Security.AccessToken
   * @systemapi
   * @FaAndStageModel
   * @since 18 dynamic
   * @since 23 static
   */
  function setPermissionUsedRecordToggleStatus(status: boolean): Promise<void>;
  /**
   * 设置是否记录指定子身份资料的权限使用情况。系统应用调用此接口，可以设置指定子身份资料的权限使用记录开关状态。使用Promise异步回调。
   *
   * status为true时，[addPermissionUsedRecord]{@link privacyManager.addPermissionUsedRecord}接口可以正常添加使用记录；status为false时，addPermissionUsedRecord]{@link privacyManager.addPermissionUsedRecord}接口不产生权限使用记录，并且删除指定子身份资料的历史记录。
   *
   * @permission ohos.permission.PERMISSION_RECORD_TOGGLE
   * @param { boolean } status - 权限使用记录开关状态。true为开，false为关。
   * @param { int } subProfileId - 子身份资料的标识符。可以通过[OsAccountSubProfile.id]{@link @ohos.account.osAccount:osAccount.OsAccountSubProfile.id}获取。
   *     <br>取值限定为整数。取值约束：该参数必须为大于0的整数。
   * @returns { Promise<void> } Promise对象，无返回结果
   * @throws { BusinessError } 201 - Permission denied. Interface caller does not have permission
   *     "ohos.permission.PERMISSION_RECORD_TOGGLE".
   * @throws { BusinessError } 202 - Not system app. Interface caller is not a system app.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 12100001 - Invalid parameter. The specified subProfileId does not exist for the current user.
   * @throws { BusinessError } 12100006 - Operation not allowed. The toggle status of the specified permission has
   *     already been set by [setPermissionUsedRecordToggleStatus]{@link privacyManager.setPermissionUsedRecordToggleStatus(status:boolean)}.
   * @throws { BusinessError } 12100007 - Service exception.
   * @throws { BusinessError } 12100009 - Common inner error. Possible causes: 1. Database error. 2. Failed to query
   *     all applications under the user.
   * @syscap SystemCapability.Security.AccessToken
   * @systemapi
   * @stagemodelonly
   * @since 26.1.0 dynamiconly
   */
  function setPermissionUsedRecordToggleStatus(status: boolean, subProfileId: int): Promise<void>;
  /**
   * 查询指定敏感权限是否正在被使用，可用于权限管理界面展示权限实时使用状态场景。
   * 判断依据为当前是否存在通过[startUsingPermission]{@link privacyManager.startUsingPermission}
   * 标记开始使用且尚未通过[stopUsingPermission]{@link privacyManager.stopUsingPermission}标记停止使用的活跃调用。
   *
   * @permission ohos.permission.PERMISSION_USED_STATS
   * @param { Permissions } permissionName - 需要查询的权限名称。权限名不能为空，且长度不能超过256个字符，传入无效值时返回错误码12100001。
   * @returns { boolean } 指定的敏感权限是否正在被使用。true：指定的敏感权限正在被使用；false：指定的敏感权限未被使用。
   * @throws { BusinessError } 201 - Permission denied. Interface caller does not have permission
   *     "ohos.permission.PERMISSION_USED_STATS".
   * @throws { BusinessError } 202 - Not system app. Interface caller is not a system application.
   * @throws { BusinessError } 12100001 - Invalid parameter. The permissionName is empty or exceeds 256 characters.
   * @throws { BusinessError } 12100003 - The specified permission does not exist or is not a user_grant permission.
   * @throws { BusinessError } 12100007 - Service exception.
   * @syscap SystemCapability.Security.AccessToken
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function checkPermissionInUse(permissionName: Permissions): boolean;
}
export { Permissions };

export default privacyManager;