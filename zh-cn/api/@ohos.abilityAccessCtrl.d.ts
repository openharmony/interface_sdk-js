/*
 * Copyright (c) 2021-2024 Huawei Device Co., Ltd.
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
 * 程序访问控制提供应用程序的权限校验和管理能力，支持应用在访问受保护资源前进行权限状态判断、运行时授权申请、设置页授权引导和权限状态变化监听。权限分为system_grant（系统自动授权）、user_grant（需用户手动授权）和
 * manual_settings（手动设置授权）三类，应用需在配置文件中声明所需权限。权限管理机制详见[应用权限管控概述](docroot://security/AccessToken/app-permission-mgmt-overview.md)。
 *
 * 该模块主要用于以下场景：
 *
 * - 在业务执行前校验当前应用是否具备访问受保护资源所需要的权限。
 * - 在权限未授予时，拉起运行时权限弹窗或权限设置页面，请求用户授权。
 * - 订阅当前应用的权限状态变化事件，在权限状态变化后及时调整业务流程。
 *
 * ###### 核心枚举类型
 *
 * - **[GrantStatus]{@link abilityAccessCtrl.GrantStatus}：** 权限授权状态枚举，用于表示当前权限的授权状态。
 * - **[SwitchType]{@link abilityAccessCtrl.SwitchType}：** 全局开关类型枚举，用于表示需要请求的系统全局开关类型。
 * - **[PermissionStateChangeType]{@link abilityAccessCtrl.PermissionStateChangeType}：** 权限状态变化类型枚举，用于表示授权、取消授权等变化。
 * - **[PermissionStatus]{@link abilityAccessCtrl.PermissionStatus}：** 权限状态枚举，用于表示当前权限状态。
 * - **[SelectedResult]{@link abilityAccessCtrl.SelectedResult}：** 设置页授权选择结果枚举，用于表示用户在权限设置弹窗中的选择结果。
 *
 * ###### 核心接口类型
 *
 * - **[PermissionStateChangeInfo]{@link abilityAccessCtrl.PermissionStateChangeInfo}：** 权限状态变化事件对象，用于返回变化类型、应用身份标识和权限名。
 * - **[PermissionRequestResult]{@link PermissionRequestResult}：** 权限申请结果对象，用于返回权限申请后的权限名列表、授权结果和弹窗展示结果。
 * - **[Context]{@link Context}：** 上下文对象，用于发起权限申请或打开权限设置弹窗。
 *
 * ###### 核心类
 *
 * - **[AtManager]{@link abilityAccessCtrl.AtManager}：** 程序访问控制管理类，提供权限校验、权限弹窗申请、设置页授权引导和权限状态监听等能力。
 *
 * ![image_abilityAccessCtrl](docroot://reference/apis-ability-kit/figures/abilityAccessCtrl.png)
 *
 * @file 程序访问控制管理
 * @kit AbilityKit
 */

import { AsyncCallback, Callback } from './@ohos.base';
import { Permissions } from './permissions';
import type _Context from './application/Context';
import type _PermissionRequestResult from './security/PermissionRequestResult';

/**
 *
 * @syscap SystemCapability.Security.AccessToken
 * @FaAndStageModel
 * @crossplatform [since 12]
 * @atomicservice [since 11]
 * @since 8 dynamic
 * @since 23 static
 */
declare namespace abilityAccessCtrl {
  /**
   * 创建程序访问控制管理实例，用于权限校验、运行时权限申请、设置页授权引导和权限状态变化监听等场景。调用成功后返回AtManager实例，可用于后续的权限管理操作。
   *
   * @returns { AtManager } 获取程序访问控制模块的实例。
   * @syscap SystemCapability.Security.AccessToken
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   * @since 23 static
   */
  function createAtManager(): AtManager;
  /**
   * 程序访问控制管理类，提供权限校验、运行时权限弹窗申请、设置页授权引导、全局开关请求和权限状态监听等能力。通过[createAtManager]{@link abilityAccessCtrl.createAtManager}
   * 获取实例。
   *
   * @syscap SystemCapability.Security.AccessToken
   * @FaAndStageModel
   * @atomicservice [since 11]
   * @since 8 dynamic
   * @since 23 static
   */
  interface AtManager {
    /**
     * 校验应用是否已被授予指定权限，调用成功后，返回当前权限的授权状态，开发者可据此决定直接执行后续业务、继续发起权限申请，或引导用户前往系统设置修改授权状态。使用Promise异步回调。
     *
     * 适用于应用访问受保护资源前进行前置权限判断的场景。
     *
     * > **说明**
     * > 建议使用[checkAccessToken](#checkaccesstoken9)替代。
     *
     * @param { int } tokenID - 要校验的目标应用的身份标识。可通过应用BundleInfo中的ApplicationInfo中的[accessTokenId]{@link
     *     ./bundleManager/ApplicationInfo:ApplicationInfo.accessTokenId}字段获取。传入无效值时返回错误码12100001。
     *     <br>取值限定为整数。取值约束：该参数必须为大于0的整数。
     *     <br>
     *     BundleInfo获取可参考：[bundleManager.getBundleInfoSync]{@link @ohos.bundle.bundleManager:bundleManager.getBundleInfoSync}；<br>若校验本应用，也可通过[bundleManager.getBundleInfoForSelfSync]{@link @ohos.bundle.bundleManager:bundleManager.getBundleInfoForSelfSync}获取。
     * @param { Permissions } permissionName - 需要校验的权限名称。传入无效值时返回错误码12100001。
     *     <br>取值约束：权限名长度不能超过256个字符。
     * @returns { Promise<GrantStatus> } Promise对象，返回授权状态结果。
     * @syscap SystemCapability.Security.AccessToken
     * @FaAndStageModel
     * @since 9 dynamic
     * @since 23 static
     */
    verifyAccessToken(tokenID: int, permissionName: Permissions): Promise<GrantStatus>;
    /**
     * 校验应用是否已被授予指定权限。调用成功后，返回当前权限的授权状态，开发者可据此决定后续操作。使用Promise异步回调。
     *
     * > **说明**
     * > 从API version 8开始支持，从API version 9开始废弃，建议使用[checkAccessToken](#checkaccesstoken9)替代。
     *
     * @param { number } tokenID - 要校验的目标应用的身份标识。可通过应用BundleInfo中的ApplicationInfo中的[accessTokenId]{@link
     *     ./bundleManager/ApplicationInfo:ApplicationInfo.accessTokenId}字段获取。传入无效值时返回错误码12100001。
     *     <br>取值限定为整数。取值约束：该参数必须为大于0的整数。
     *     <br>
     *     BundleInfo获取可参考：[bundleManager.getBundleInfoSync]{@link @ohos.bundle.bundleManager:bundleManager.getBundleInfoSync}；<br>若校验本应用，也可通过[bundleManager.getBundleInfoForSelfSync]{@link @ohos.bundle.bundleManager:bundleManager.getBundleInfoForSelfSync}获取。
     * @param { string } permissionName - 需要校验的权限名称。传入无效值时返回错误码12100001。
     *     <br>取值约束：权限名长度不能超过256个字符。
     * @returns { Promise<GrantStatus> } Promise对象，返回授权状态结果。
     * @syscap SystemCapability.Security.AccessToken
     * @FaAndStageModel
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.abilityAccessCtrl.AtManager#checkAccessToken
     */
    verifyAccessToken(tokenID: number, permissionName: string): Promise<GrantStatus>;
    /**
     * 校验应用是否已被授予指定权限，同步返回该权限的授权状态。开发者可据此决定直接执行后续业务流程，或继续发起权限申请，或引导用户前往系统设置修改授权状态。
     *
     * 适用于应用访问相机、麦克风、位置等受保护资源前进行前置权限判断的场景。
     *
     * 建议使用[checkAccessTokenSync]{@link abilityAccessCtrl.AtManager.checkAccessTokenSync}替代。
     *
     * @param { int } tokenID - 要校验的目标应用的身份标识。可通过应用BundleInfo中的ApplicationInfo中的
     *     [accessTokenId]{@link ./bundleManager/ApplicationInfo:ApplicationInfo.accessTokenId}字段获取。
     *     该参数必须为大于0的整数，传入0时返回错误码12100001。
     *     <br>取值限定为整数。取值约束：该参数必须为大于0的整数。
     *     <br>
     *     BundleInfo获取可参考：[bundleManager.getBundleInfoSync]{@link @ohos.bundle.bundleManager:bundleManager.getBundleInfoSync}；<br>若校验本应用，也可通过[bundleManager.getBundleInfoForSelfSync]{@link @ohos.bundle.bundleManager:bundleManager.getBundleInfoForSelfSync}获取。
     * @param { Permissions } permissionName - 需要校验的权限名称。权限名长度不能超过256个字符，传入无效值时返回错误码12100001。
     *     <br>取值约束：权限名长度不能超过256个字符。
     * @returns { GrantStatus } 枚举实例，返回授权状态。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types.
     * @throws { BusinessError } 12100001 - Invalid parameter. The tokenID is 0, or the permissionName exceeds 256
     *     characters.
     * @syscap SystemCapability.Security.AccessToken
     * @FaAndStageModel
     * @since 9 dynamic
     * @since 23 static
     */
    verifyAccessTokenSync(tokenID: int, permissionName: Permissions): GrantStatus;
    /**
     * 校验应用是否已被授予指定权限。调用成功后，返回当前权限的授权状态，开发者可据此决定直接执行后续业务、继续发起权限申请，或引导用户前往系统设置修改授权状态。使用Promise异步回调。
     *
     * 适用于应用访问相机、麦克风、位置等受保护资源前进行前置权限判断的场景。
     *
     * @param { int } tokenID - 要校验的目标应用的身份标识。可通过应用BundleInfo中的ApplicationInfo中的[accessTokenId]{@link
     *     ./bundleManager/ApplicationInfo:ApplicationInfo.accessTokenId}字段获取。传入无效值时返回错误码12100001。
     *     <br>取值限定为整数。取值约束：该参数必须为大于0的整数。
     *     <br>
     *     BundleInfo获取可参考：[bundleManager.getBundleInfoSync]{@link @ohos.bundle.bundleManager:bundleManager.getBundleInfoSync}；<br>若校验本应用，也可通过[bundleManager.getBundleInfoForSelfSync]{@link @ohos.bundle.bundleManager:bundleManager.getBundleInfoForSelfSync}获取。
     * @param { Permissions } permissionName - 需要校验的权限名称。传入无效值时返回错误码12100001。
     *     <br>取值约束：权限名长度不能超过256个字符。
     * @returns { Promise<GrantStatus> } Promise对象，返回授权状态结果。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 12100001 - Invalid parameter. The tokenID is 0, or the permissionName exceeds 256
     *     characters.
     * @syscap SystemCapability.Security.AccessToken
     * @FaAndStageModel
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    checkAccessToken(tokenID: int, permissionName: Permissions): Promise<GrantStatus>;
    /**
     * 校验应用是否已被授予指定权限，同步返回该权限的授权状态。开发者可据此决定直接执行后续业务流程，或继续发起权限申请，或引导用户前往设置页修改授权状态。
     *
     * 与[checkAccessToken]{@link abilityAccessCtrl.AtManager.checkAccessToken}相比，本接口同步返回授权状态，适用于无需异步处理的权限校验场景。
     *
     * 适用于应用访问相机、麦克风、位置等受保护资源前进行前置权限判断的场景。
     *
     * @param { int } tokenID - 要校验的目标应用的身份标识。可通过应用BundleInfo中的ApplicationInfo中的[accessTokenId]{@link
     *     ./bundleManager/ApplicationInfo:ApplicationInfo.accessTokenId}字段获取。传入无效值时返回错误码12100001。
     *     <br>取值限定为整数。取值约束：该参数必须为大于0的整数。
     *     <br>
     *     BundleInfo获取可参考：[bundleManager.getBundleInfoSync]{@link @ohos.bundle.bundleManager:bundleManager.getBundleInfoSync}；<br>若校验本应用，也可通过[bundleManager.getBundleInfoForSelfSync]{@link @ohos.bundle.bundleManager:bundleManager.getBundleInfoForSelfSync}获取。
     * @param { Permissions } permissionName - 需要校验的权限名称。传入无效值时返回错误码12100001。
     *     <br>取值约束：权限名长度不能超过256个字符。
     * @returns { GrantStatus } 枚举实例，返回授权状态。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types.
     * @throws { BusinessError } 12100001 - Invalid parameter. The tokenID is 0, or the permissionName exceeds 256
     *     characters.
     * @syscap SystemCapability.Security.AccessToken
     * @FaAndStageModel
     * @crossplatform
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    checkAccessTokenSync(tokenID: int, permissionName: Permissions): GrantStatus;
    /**
     * 用于<!--RP1-->[UIAbility]{@link @ohos.app.ability.UIAbility:UIAbility}<!--RP1End-->拉起弹窗请求
     * [用户授权](docroot://security/AccessToken/request-user-authorization.md)，返回本次请求权限的授权结果。使用callback异步回调。
     *
     * 适用于应用首次访问受保护资源前主动向用户申请
     * [user_grant](docroot://security/AccessToken/app-permission-mgmt-overview.md#user_grant用户授权) 权限的场景。
     *
     * 如果用户拒绝授权，将无法通过此接口再次拉起授权弹窗。开发者可引导用户前往系统设置界面手动授权，或调用
     * [requestPermissionOnSetting]{@link abilityAccessCtrl.AtManager.requestPermissionOnSetting}拉起权限设置弹窗，引导用户完成授权。
     *
     * <!--RP3-->
     *
     * ![requestPermissionsFromUser](docroot://reference/apis-ability-kit/figures/requestPermissionsFromUser.png)
     *
     * <!--RP3End-->
     *
     * @param { Context } context - 请求权限的<!--RP1-->UIAbility<!--RP1End-->的Context。
     *     <br>若传入其他应用、无效页面或非Stage模型的Context，接口可能报错或无法拉起弹窗。
     * @param { Array<Permissions> } permissionList - 权限名列表。建议仅传入当前业务场景必要的敏感权限，避免一次申请过多权限。
     *     <br>最小长度为1。取值约束：权限名长度不能超过256个字符。
     * @param { AsyncCallback<PermissionRequestResult> } requestCallback - 回调函数。调用完成后通过err返回错误信息，通过data返回权限请求结果对象。开发者可根据权限请求结果判断用户是否授权、是否展示过弹窗以及失败原因。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left
     *     unspecified; 2. Incorrect parameter types.
     * @throws { BusinessError } 12100001 - (Deprecated in 12) Invalid parameter. The context is invalid when it
     *     does not belong to the application itself.
     * @throws { BusinessError } 12100009 - Common inner error. An error occurs when creating the pop-up window
     *     or obtaining user operation results.
     * @syscap SystemCapability.Security.AccessToken
     * @stagemodelonly
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    requestPermissionsFromUser(context: Context, permissionList: Array<Permissions>, requestCallback: AsyncCallback<PermissionRequestResult>) : void;
    /**
     * 用于<!--RP1-->[UIAbility]{@link @ohos.app.ability.UIAbility:UIAbility}<!--RP1End-->拉起弹窗请求
     * [用户授权](docroot://security/AccessToken/request-user-authorization.md)，返回本次请求权限的授权结果。使用Promise异步回调。
     *
     * 适用于应用首次访问受保护资源前主动向用户申请user_grant权限的场景。
     *
     * > **说明**
     * > 如果用户拒绝授权，将无法通过此接口再次拉起授权弹窗。开发者可引导用户前往系统设置界面手动授权，或调用
     * > [requestPermissionOnSetting]{@link abilityAccessCtrl.AtManager.requestPermissionOnSetting}拉起权限设置弹窗，引导用户完成授权。
     *
     * @param { Context } context - 请求权限的<!--RP1-->UIAbility<!--RP1End-->的Context。若传入其他应用、无效页面或非Stage模型的Context，接口可能报错或无法拉起弹窗。
     * @param { Array<Permissions> } permissionList - 权限名列表。建议仅传入当前业务场景必要的敏感权限，避免一次申请过多权限。
     *     <br>最小长度为1。取值约束：权限名长度不能超过256个字符。
     * @returns { Promise<PermissionRequestResult> } Promise对象，返回权限请求结果对象，包含权限数组、每个权限的授权结果、是否展示弹窗以及失败原因等信息。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left
     *     unspecified; 2. Incorrect parameter types.
     * @throws { BusinessError } 12100001 - (Deprecated in 12) Invalid parameter. The context is invalid when it
     *     does not belong to the application itself.
     * @throws { BusinessError } 12100009 - Common inner error. An error occurs when creating the pop-up window or
     *     obtaining the user operation result. [since 11]
     * @syscap SystemCapability.Security.AccessToken
     * @stagemodelonly
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    requestPermissionsFromUser(context: Context, permissionList: Array<Permissions>) : Promise<PermissionRequestResult>;
    /**
     * 基于窗口ID弹出弹窗请求用户授权，调用成功后，返回本次权限申请结果对象，开发者可根据权限申请结果继续窗口级授权后的业务流程。使用Promise异步回调。
     *
     * 适用于系统应用需要将权限申请弹窗明确附着到指定窗口的场景。
     *
     * 如果用户拒绝授权，将无法再次拉起弹窗，可通过以下方式重新获取权限：1. 在系统设置界面中手动授权；2. 调用
     * [requestPermissionOnSetting]{@link abilityAccessCtrl.AtManager.requestPermissionOnSetting}，拉起权限设置弹窗引导用户授权。
     *
     * @param { Context } context - 请求权限的UIAbility/UIExtensionAbility的Context。若传入其他应用、无效页面或非Stage模型的Context，接口可能报错或无法拉起弹窗。
     * @param { int } windowId - 应用窗口的ID。可通过[window.findWindow]{@link @ohos.window:window.findWindow}(窗口名).
     *     [getWindowProperties()]{@link @ohos.window:window.Window.getWindowProperties}.id获取。该参数必须对应当前有效窗口，传入已销毁、不可见或无效
     *     窗口ID时将返回12100001。
     *     <br>取值限定为整数。
     * @param { Array<Permissions> } permissionList - 权限名列表。建议仅传入当前窗口场景下真正需要的敏感权限。
     *     <br>最小长度为1。取值约束：权限名长度不能超过256个字符。
     * @returns { Promise<PermissionRequestResult> } Promise对象，返回本次权限申请结果，包含权限数组、授权结果、是否展示弹窗以及失败原因等信息。
     * @throws { BusinessError } 12100001 - Invalid parameter. windowId is invalid.
     * @throws { BusinessError } 12100009 - Common inner error. An error occurs when creating the popup window or
     *     obtaining the user operation result.
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    requestPermissionsFromUserWithWindowId(
        context: Context,
        windowId: int,
        permissionList: Array<Permissions>) : Promise<PermissionRequestResult>;
    /**
     * 授予应用user_grant权限。调用成功后，应用获得该user_grant权限，可以访问相应的受保护资源。使用Promise异步回调。
     *
     * 本接口仅支持授予user_grant类型的权限。若需要授予user_grant或manual_settings类型权限，建议使用
     * [grantPermission]{@link abilityAccessCtrl.AtManager.grantPermission}。
     *
     * @permission ohos.permission.GRANT_SENSITIVE_PERMISSIONS
     * @param { int } tokenID - 目标应用的身份标识。可通过应用BundleInfo中的ApplicationInfo中的[accessTokenId]{@link
     *     ./bundleManager/ApplicationInfo:ApplicationInfo.accessTokenId}字段获取。传入无效值时返回错误码12100001。
     *     <br>取值限定为整数。取值约束：该参数必须为大于0的整数。
     *     <br>BundleInfo获取可参考：[bundleManager.getBundleInfoSync]{@link @ohos.bundle.bundleManager:bundleManager.getBundleInfoSync}。
     * @param { Permissions } permissionName - 被授予的权限名称。超过限制时返回错误码12100001。
     *     <br>取值约束：权限名长度不能超过256个字符。
     * @param { int } permissionFlags - 授权选项。
     *     <br>取值限定为整数。
     *     <br>- 1表示当次用户若选择禁止该权限，下次权限弹窗仍可以弹出申请用户授权。
     *     <br>- 2表示当次用户若选择禁止该权限，下次不会再弹出权限弹窗，用户需要在系统设置的权限管理中进行授权。
     *     <br>- 64表示当次用户若选择仅本次允许，权限仅本次授权。应用切换后台状态或退出后取消授权。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types.
     * @throws { BusinessError } 201 - Permission denied. Interface caller does not have permission
     *     "ohos.permission.GRANT_SENSITIVE_PERMISSIONS".
     * @throws { BusinessError } 202 - Not System App. Interface caller is not a system app.
     * @throws { BusinessError } 12100001 - Invalid parameter. The tokenID is 0, the permissionName exceeds 256
     *     characters or is not declared in the module.json file, or the flags value is invalid.
     * @throws { BusinessError } 12100002 - The specified tokenID does not exist.
     * @throws { BusinessError } 12100003 - The specified permission does not exist or is not a user_grant permission.
     * @throws { BusinessError } 12100006 - The application specified by the tokenID is not allowed to be granted with
     *     the specified permission.
     *     Either the application is a sandbox or the tokenID is from a remote device.
     * @throws { BusinessError } 12100007 - Service exception.
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @FaAndStageModel
     * @since 8 dynamic
     * @since 23 static
     */
    grantUserGrantedPermission(tokenID: int, permissionName: Permissions, permissionFlags: int): Promise<void>;
    /**
     * 授予应用user_grant权限。使用callback异步回调。调用成功后，应用获得该user_grant权限，可以访问相应的受保护资源。
     *
     * @permission ohos.permission.GRANT_SENSITIVE_PERMISSIONS
     * @param { int } tokenID - 目标应用的身份标识。可通过应用BundleInfo中的ApplicationInfo中的[accessTokenId]{@link
     *     ./bundleManager/ApplicationInfo:ApplicationInfo.accessTokenId}字段获取。传入无效值时返回错误码12100001。
     *     <br>取值限定为整数。取值约束：该参数必须为大于0的整数。
     *     <br>BundleInfo获取可参考：[bundleManager.getBundleInfoSync]{@link @ohos.bundle.bundleManager:bundleManager.getBundleInfoSync}。
     * @param { Permissions } permissionName - 被授予的权限名称。传入无效值时返回错误码12100001。
     *     <br>取值约束：权限名长度不能超过256个字符。
     * @param { int } permissionFlags - 授权选项。
     *     <br>取值限定为整数。
     *     <br>- 1表示当次用户若选择禁止该权限，下次权限弹窗仍可以弹出申请用户授权。
     *     <br>- 2表示当次用户若选择禁止该权限，下次不会再弹出权限弹窗，用户需要在系统设置的权限管理中进行授权。
     *     <br>- 64表示当次用户若选择仅本次允许，权限仅本次授权。应用切换后台状态或退出后取消授权。
     * @param { AsyncCallback<void> } callback - 回调函数。当授予权限成功时，err为undefined，否则为错误对象。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types.
     * @throws { BusinessError } 201 - Permission denied. Interface caller does not have permission
     *     "ohos.permission.GRANT_SENSITIVE_PERMISSIONS".
     * @throws { BusinessError } 202 - Not System App. Interface caller is not a system app.
     * @throws { BusinessError } 12100001 - Invalid parameter. The tokenID is 0, the permissionName exceeds 256
     *     characters or is not declared in the module.json file,
     *     or the flags value is invalid.
     * @throws { BusinessError } 12100002 - The specified tokenID does not exist.
     * @throws { BusinessError } 12100003 - The specified permission does not exist or is not a user_grant permission.
     * @throws { BusinessError } 12100006 - The application specified by the tokenID is not allowed to be granted with
     *     the specified permission. Either the application is a sandbox or the tokenID is from a remote device.
     * @throws { BusinessError } 12100007 - Service exception.
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @FaAndStageModel
     * @since 8 dynamic
     * @since 23 static
     */
    grantUserGrantedPermission(
        tokenID: int,
        permissionName: Permissions,
        permissionFlags: int,
        callback: AsyncCallback<void>
    ): void;
    /**
     * 撤销应用user_grant权限。调用成功后，应用失去该user_grant权限，无法访问相应的受保护资源。使用Promise异步回调。
     *
     * 本接口仅支持撤销user_grant类型的权限，且不支持控制是否终止应用进程。若需要撤销user_grant或manual_settings类型权限，或需要控制撤销权限后是否终止应用进程，建议使用
     * [revokePermission]{@link abilityAccessCtrl.AtManager.revokePermission}。
     *
     * 当权限状态从“已授权”变为“未授权”时，应用进程会被终止。
     *
     * @permission ohos.permission.REVOKE_SENSITIVE_PERMISSIONS
     * @param { int } tokenID - 目标应用的身份标识。可通过应用BundleInfo中的ApplicationInfo中的[accessTokenId]{@link
     *     ./bundleManager/ApplicationInfo:ApplicationInfo.accessTokenId}字段获取。传入无效值时返回错误码12100001。
     *     <br>取值限定为整数。取值约束：该参数必须为大于0的整数。
     *     <br>BundleInfo获取可参考：[bundleManager.getBundleInfoSync]{@link @ohos.bundle.bundleManager:bundleManager.getBundleInfoSync}。
     * @param { Permissions } permissionName - 被撤销的权限名称。传入无效值时返回错误码12100001。
     *     <br>取值约束：权限名长度不能超过256个字符。
     * @param { int } permissionFlags - 授权选项。
     *     <br>取值限定为整数。
     *     <br>- 1表示当次用户若选择禁止该权限，下次权限弹窗仍可以弹出申请用户授权。
     *     <br>- 2表示当次用户若选择禁止该权限，下次不会再弹出权限弹窗，用户需要在系统设置的权限管理中进行授权。
     *     <br>- 64表示当次用户若选择仅本次允许，权限仅本次授权。应用切换后台状态或退出后取消授权。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types.
     * @throws { BusinessError } 201 - Permission denied. Interface caller does not have permission
     *     "ohos.permission.REVOKE_SENSITIVE_PERMISSIONS".
     * @throws { BusinessError } 202 - Not System App. Interface caller is not a system app.
     * @throws { BusinessError } 12100001 - Invalid parameter. The tokenID is 0, the permissionName exceeds 256
     *     characters or is not declared in the module.json file, or the flags value is invalid.
     * @throws { BusinessError } 12100002 - The specified tokenID does not exist.
     * @throws { BusinessError } 12100003 - The specified permission does not exist or is not a user_grant permission.
     * @throws { BusinessError } 12100006 - The application specified by the tokenID is not allowed to be revoked with
     *     the specified permission. Either the application is a sandbox or the tokenID is from a remote device.
     * @throws { BusinessError } 12100007 - Service exception.
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @FaAndStageModel
     * @since 8 dynamic
     * @since 23 static
     */
    revokeUserGrantedPermission(tokenID: int, permissionName: Permissions, permissionFlags: int): Promise<void>;
    /**
     * 撤销应用user_grant权限。使用callback异步回调。调用成功后，应用失去该user_grant权限，无法访问相应的受保护资源。
     *
     * @permission ohos.permission.REVOKE_SENSITIVE_PERMISSIONS
     * @param { int } tokenID - 目标应用的身份标识。可通过应用BundleInfo中的ApplicationInfo中的[accessTokenId]{@link
     *     ./bundleManager/ApplicationInfo:ApplicationInfo.accessTokenId}字段获取。传入无效值时返回错误码12100001。
     *     <br>取值限定为整数。取值约束：该参数必须为大于0的整数。
     *     <br>BundleInfo获取可参考：[bundleManager.getBundleInfoSync]{@link @ohos.bundle.bundleManager:bundleManager.getBundleInfoSync}。
     * @param { Permissions } permissionName - 被撤销的权限名称。传入无效值时返回错误码12100001。
     *     <br>取值约束：权限名长度不能超过256个字符。
     * @param { int } permissionFlags - 授权选项。
     *     <br>取值限定为整数。
     *     <br>- 1表示当次用户若选择禁止该权限，下次权限弹窗仍可以弹出申请用户授权。
     *     <br>- 2表示当次用户若选择禁止该权限，下次不会再弹出权限弹窗，用户需要在系统设置的权限管理中进行授权。
     *     <br>- 64表示当次用户若选择仅本次允许，权限仅本次授权。应用切换后台状态或退出后取消授权。
     * @param { AsyncCallback<void> } callback - 回调函数。当撤销权限成功时，err为undefined，否则为错误对象。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types.
     * @throws { BusinessError } 201 - Permission denied. Interface caller does not have permission
     *     "ohos.permission.REVOKE_SENSITIVE_PERMISSIONS".
     * @throws { BusinessError } 202 - Not System App. Interface caller is not a system app.
     * @throws { BusinessError } 12100001 - Invalid parameter. The tokenID is 0, the permissionName exceeds 256
     *     characters or is not declared in the module.json file, or the flags value is invalid.
     * @throws { BusinessError } 12100002 - The specified tokenID does not exist.
     * @throws { BusinessError } 12100003 - The specified permission does not exist or is not a user_grant permission.
     * @throws { BusinessError } 12100006 - The application specified by the tokenID is not allowed to be revoked with
     *     the specified permission. Either the application is a sandbox or the tokenID is from a remote device.
     * @throws { BusinessError } 12100007 - Service exception.
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @FaAndStageModel
     * @since 8 dynamic
     * @since 23 static
     */
    revokeUserGrantedPermission(
        tokenID: int,
        permissionName: Permissions,
        permissionFlags: int,
        callback: AsyncCallback<void>
    ): void;
    /**
     * 获取指定应用的指定权限的标志。使用Promise异步回调。
     *
     * @permission ohos.permission.GET_SENSITIVE_PERMISSIONS or ohos.permission.GRANT_SENSITIVE_PERMISSIONS or
     *     ohos.permission.REVOKE_SENSITIVE_PERMISSIONS
     * @param { int } tokenID - 目标应用的身份标识。可通过应用BundleInfo中的ApplicationInfo中的[accessTokenId]{@link
     *     ./bundleManager/ApplicationInfo:ApplicationInfo.accessTokenId}字段获取。传入无效值时返回错误码12100001。
     *     <br>取值限定为整数。取值约束：该参数必须为大于0的整数。
     *     <br>BundleInfo获取可参考：[bundleManager.getBundleInfoSync]{@link @ohos.bundle.bundleManager:bundleManager.getBundleInfoSync}。
     * @param { Permissions } permissionName - 查询的权限名称。传入无效值时返回错误码12100001。
     *     <br>取值约束：权限名长度不能超过256个字符。
     * @returns { Promise<int> } Promise对象，返回查询到的权限标记值。标记值的含义请参见
     *     [PermissionStatusInfo]{@link abilityAccessCtrl.PermissionStatusInfo}中的grantFlags字段说明。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types.
     * @throws { BusinessError } 201 - Permission denied. Interface caller does not have permission specified below.
     * @throws { BusinessError } 202 - Not System App. Interface caller is not a system app.
     * @throws { BusinessError } 12100001 - Invalid parameter. The tokenID is 0, or the permissionName exceeds 256
     *     characters.
     * @throws { BusinessError } 12100002 - The specified tokenID does not exist.
     * @throws { BusinessError } 12100003 - The specified permission does not exist or is not declared in the
     *     module.json file.
     * @throws { BusinessError } 12100006 - The operation is not allowed. Either the application is a sandbox or the
     *     tokenID is from a remote device.
     * @throws { BusinessError } 12100007 - Service exception.
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @FaAndStageModel
     * @since 8 dynamic
     * @since 23 static
     */
    getPermissionFlags(tokenID: int, permissionName: Permissions): Promise<int>;
    /**
     * 设置当前用户指定权限的弹窗开关状态。调用成功后，该权限的弹窗开关状态将被设置为指定值。当状态为CLOSED时，应用请求该权限时不会弹出权限弹窗；当状态为OPEN时，应用请求该权限时会正常弹出权限弹窗。使用Promise异步回
     * 调。
     *
     * @permission ohos.permission.DISABLE_PERMISSION_DIALOG
     * @param { Permissions } permissionName - 待设置弹窗开关状态的权限名称。传入无效值时返回错误码12100001。
     *     <br>取值约束：权限名长度不能超过256个字符。
     * @param { PermissionRequestToggleStatus } status - 指定权限的弹窗开关状态值。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types.
     * @throws { BusinessError } 201 - Permission denied. Interface caller does not have permission specified below.
     * @throws { BusinessError } 202 - Not System App. Interface caller is not a system app.
     * @throws { BusinessError } 12100001 - Invalid parameter. The permissionName exceeds 256 characters, the specified
     *     permission is not a user_grant permission, or the status value is invalid.
     * @throws { BusinessError } 12100003 - The specified permission does not exist.
     * @throws { BusinessError } 12100006 - Operation not allowed. The toggle status of the specified permission
     *     has already been set by
     *     [setPermissionRequestToggleStatus]{@link abilityAccessCtrl.AtManager.setPermissionRequestToggleStatus(permissionName: Permissions, status: PermissionRequestToggleStatus, subProfileId: int)}. [since 26.1.0]
     * @throws { BusinessError } 12100007 - Service exception.
     * @throws { BusinessError } 12100009 - Common inner error. A database error occurs.
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @FaAndStageModel
     * @since 12 dynamic
     * @since 23 static
     */
    setPermissionRequestToggleStatus(permissionName: Permissions, status: PermissionRequestToggleStatus): Promise<void>;
    /**
     * 设置指定子身份资料下指定权限的弹窗开关状态。调用成功后，该权限的弹窗开关状态将被设置为指定值。当状态为CLOSED时，应用请求该权限时不会弹出权限弹窗；当状态为OPEN时，应用请求该权限时会正常弹出权限弹窗。使用Promise异步回调。
     *
     * @permission ohos.permission.DISABLE_PERMISSION_DIALOG
     * @param { Permissions } permissionName - 待设置弹窗开关状态的权限名称。传入无效值时返回错误码12100001。
     *     <br>取值约束：权限名长度不能超过256个字符。
     * @param { PermissionRequestToggleStatus } status - 指定权限的弹窗开关状态值。
     * @param { int } subProfileId - 子身份资料的标识符。可以通过[OsAccountSubProfile.id]{@link @ohos.account.osAccount:osAccount.OsAccountSubProfile.id}获取。
     *     <br>取值限定为整数。取值约束：该参数必须为大于0的整数。
     * @returns { Promise<void> } Promise对象，无返回结果
     * @throws { BusinessError } 201 - Permission denied. Interface caller does not have permission specified below.
     * @throws { BusinessError } 202 - Not System App. Interface caller is not a system app.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 12100001 - Invalid parameter. The permissionName exceeds 256 characters, the specified
     *     permission is not a user_grant permission, the status value is invalid, or the specified subProfileId does
     *     not exist for the current user.
     * @throws { BusinessError } 12100003 - The specified permission does not exist.
     * @throws { BusinessError } 12100006 - Operation not allowed. The toggle status of the specified permission has already been set by [setPermissionRequestToggleStatus]{@link abilityAccessCtrl.AtManager.setPermissionRequestToggleStatus(permissionName: Permissions, status: PermissionRequestToggleStatus, subProfileId: int)}.
     * @throws { BusinessError } 12100007 - Service exception.
     * @throws { BusinessError } 12100009 - Common inner error. A database error occurs.
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamiconly
     */
    setPermissionRequestToggleStatus(
      permissionName: Permissions,
      status: PermissionRequestToggleStatus,
      subProfileId: int): Promise<void>;
    /**
     * 获取当前用户指定权限的弹窗开关状态。使用Promise异步回调。
     *
     * @permission ohos.permission.GET_SENSITIVE_PERMISSIONS
     * @param { Permissions } permissionName - 待查询弹窗开关状态的权限名称。传入无效值时返回错误码12100001。
     *     <br>取值约束：权限名长度不能超过256个字符。
     * @returns { Promise<PermissionRequestToggleStatus> } Promise对象，返回指定权限的弹窗开关状态值。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types.
     * @throws { BusinessError } 201 - Permission denied. Interface caller does not have permission specified below.
     * @throws { BusinessError } 202 - Not System App. Interface caller is not a system app.
     * @throws { BusinessError } 12100001 - Invalid parameter. The permissionName exceeds 256 characters, or the
     *     specified permission is not a user_grant permission.
     * @throws { BusinessError } 12100003 - The specified permission does not exist.
     * @throws { BusinessError } 12100004 - This API must be used together with [setPermissionRequestToggleStatus]{@link abilityAccessCtrl.AtManager.setPermissionRequestToggleStatus(permissionName: Permissions, status: PermissionRequestToggleStatus)}. [since 26.1.0]
     * @throws { BusinessError } 12100007 - Service exception.
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @FaAndStageModel
     * @since 12 dynamic
     * @since 23 static
     */
    getPermissionRequestToggleStatus(permissionName: Permissions): Promise<PermissionRequestToggleStatus>;
    /**
     * 获取指定子身份资料下指定权限的弹窗开关状态。使用Promise异步回调。
     *
     * @permission ohos.permission.GET_SENSITIVE_PERMISSIONS
     * @param { Permissions } permissionName - 待查询弹窗开关状态的权限名称。传入无效值时返回错误码12100001。
     *     <br>取值约束：权限名长度不能超过256个字。
     * @param { int } subProfileId - 子身份资料的标识符。可以通过[OsAccountSubProfile.id]{@link @ohos.account.osAccount:osAccount.OsAccountSubProfile.id}获取。
     *     <br>取值限定为整数。取值约束：该参数必须为大于0的整数。
     * @returns { Promise<PermissionRequestToggleStatus> } Promise对象，返回指定权限的弹窗开关状态值
     * @throws { BusinessError } 201 - Permission denied. Interface caller does not have permission specified below.
     * @throws { BusinessError } 202 - Not System App. Interface caller is not a system app.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 12100001 - Invalid parameter. The permissionName exceeds 256 characters, the specified
     *     permission is not a user_grant permission, or the specified subProfileId does not exist for the current user.
     * @throws { BusinessError } 12100003 - The specified permission does not exist.
     * @throws { BusinessError } 12100007 - Service exception.
     * @throws { BusinessError } 12100009 - Common inner error. A database error occurs.
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamiconly
     */
    getPermissionRequestToggleStatus(
      permissionName: Permissions,
      subProfileId: int): Promise<PermissionRequestToggleStatus>;

    /**
     * 获取当前权限管理的数据版本号。使用Promise异步回调。
     *
     * @returns { Promise<int> } Promise对象，返回查询到的版本号。
     * @throws { BusinessError } 202 - Not System App. Interface caller is not a system app.
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @FaAndStageModel
     * @since 9 dynamic
     * @since 23 static
     */
    getVersion(): Promise<int>;
    /**
     * 获取指定应用权限状态列表。使用Promise异步回调。
     *
     * @permission ohos.permission.GET_SENSITIVE_PERMISSIONS
     * @param { int } tokenID - 目标应用的身份标识。可通过应用BundleInfo中的ApplicationInfo中的[accessTokenId]{@link
     *     ./bundleManager/ApplicationInfo:ApplicationInfo.accessTokenId}字段获取。传入无效值时返回错误码12100001。
     *     <br>取值限定为整数。取值约束：该参数必须为大于0的整数。
     *     <br>BundleInfo获取可参考：[bundleManager.getBundleInfoSync]{@link @ohos.bundle.bundleManager:bundleManager.getBundleInfoSync}。
     * @param { Array<Permissions> } permissionList - 待获取权限状态的权限名列表。传入无效值时返回错误码12100001。
     *     <br>最大长度为1024且不能为空。取值约束：权限名长度不能超过256个字符。
     * @returns { Promise<Array<PermissionStatus>> } Promise对象，返回查询到的权限状态列表。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types.
     * @throws { BusinessError } 201 - Permission denied. Interface caller does not have permission
     *     "ohos.permission.GET_SENSITIVE_PERMISSIONS".
     * @throws { BusinessError } 202 - Not System App. Interface caller is not a system app.
     * @throws { BusinessError } 12100001 - Invalid parameter. The tokenID is 0 or the permissionList is empty or
     *     exceeds the size limit.
     * @throws { BusinessError } 12100002 - The specified tokenID does not exist.
     * @throws { BusinessError } 12100007 - Service exception.
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @FaAndStageModel
     * @since 12 dynamic
     * @since 23 static
     */
    getPermissionsStatus(tokenID: int, permissionList: Array<Permissions>): Promise<Array<PermissionStatus>>;
    /**
     * 订阅指定tokenID列表与权限列表的权限状态变更事件。使用callback异步回调。
     *
     * 允许指定tokenID列表与权限列表订阅多个callback。
     *
     * > **说明**
     * > 若新的订阅与已有订阅在tokenID列表和权限列表上存在交集，不允许使用相同的callback进行订阅。
     * > 该接口通常与[off]{@link abilityAccessCtrl.AtManager.of}配套使用，当不再需要监听时应调用off取消订阅。
     *
     * @permission ohos.permission.GET_SENSITIVE_PERMISSIONS
     * @param { 'permissionStateChange' } type - 订阅事件类型，固定为'permissionStateChange'，权限状态变更事件。
     * @param { Array<int> } tokenIDList - 订阅的tokenID列表，为空时表示订阅所有的应用的权限状态变化。应用的身份标识可通过应用BundleInfo中的ApplicationInfo中的[accessTokenId]{@link
     *     ./bundleManager/ApplicationInfo:ApplicationInfo.accessTokenId}字段获取。传入无效值时返回错误码12100001。
     *     <br>最大长度为1024。取值约束：列表中的tokenID必须为大于0的整数。
     *     <br>BundleInfo获取可参考：[bundleManager.getBundleInfoSync]{@link @ohos.bundle.bundleManager:bundleManager.getBundleInfoSync}。
     * @param { Array<Permissions> } permissionList - 订阅的权限名列表，为空时表示订阅所有的权限状态变化。传入无效值时返回错误码12100001。
     *     <br>最大长度为1024且不能为空。取值约束：列表中的权限名需为有效权限名，权限名长度不能超过256个字符。
     * @param { Callback<PermissionStateChangeInfo> } callback - 回调函数。订阅指定tokenID与指定权限名状态变更事件的回调。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types.
     * @throws { BusinessError } 201 - Permission denied. Interface caller does not have permission
     *     "ohos.permission.GET_SENSITIVE_PERMISSIONS".
     * @throws { BusinessError } 202 - Not System App. Interface caller is not a system app.
     * @throws { BusinessError } 12100001 - Invalid parameter. Possible causes: 1. The tokenIDList or permissionList
     *     exceeds the size limit; 2. The tokenIDs or permissionNames in the list are all invalid.
     * @throws { BusinessError } 12100005 - The registration time has exceeded the limit.
     * @throws { BusinessError } 12100007 - Service exception.
     * @throws { BusinessError } 12100008 - Out of memory.
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @FaAndStageModel
     * @since 9 dynamic
     */
    on(
      type: 'permissionStateChange',
      tokenIDList: Array<int>,
      permissionList: Array<Permissions>,
      callback: Callback<PermissionStateChangeInfo>
    ): void;
    /**
     * 订阅指定tokenID列表与权限列表的权限状态变更事件。使用callback异步回调。
     *
     * 允许指定tokenID列表与权限列表订阅多个callback。
     *
     * 若新的订阅与已有订阅在tokenID列表和权限列表上存在交集，不允许使用相同的callback进行订阅。
     *
     * 该接口通常与[offPermissionStateChange]{@link abilityAccessCtrl.AtManager.offPermissionStateChange}配套使用，
     * 当不再需要监听时应调用offPermissionStateChange取消订阅。
     *
     * @permission ohos.permission.GET_SENSITIVE_PERMISSIONS
     * @param { Array<int> } tokenIDList - 订阅的tokenID列表，为空时表示订阅所有的应用的权限状态变化。应用的身份标识可通过应用BundleInfo中的ApplicationInfo中的[accessTokenId]{@link
     *     ./bundleManager/ApplicationInfo:ApplicationInfo.accessTokenId}字段获取。传入无效值时返回错误码12100001。
     *     <br>最大长度为1024。取值约束：列表中的tokenID必须为大于0的整数。
     *     <br>BundleInfo获取可参考：[bundleManager.getBundleInfoSync]{@link @ohos.bundle.bundleManager:bundleManager.getBundleInfoSync}。
     * @param { Array<Permissions> } permissionList - 订阅的权限名列表，为空时表示订阅所有的权限状态变化。传入无效值时返回错误码12100001。
     *     <br>最大长度为1024。取值约束：列表中的权限名需为有效权限名，权限名长度不能超过256个字符。
     * @param { Callback<PermissionStateChangeInfo> } callback - 回调函数。订阅指定tokenID与指定权限名状态变更事件的回调。
     * @throws { BusinessError } 201 - Permission denied. Interface caller does not have permission
     *     "ohos.permission.GET_SENSITIVE_PERMISSIONS".
     * @throws { BusinessError } 202 - Not System App. Interface caller is not a system app.
     * @throws { BusinessError } 12100001 - Invalid parameter. Possible causes: 1. The tokenIDList or permissionList
     *     exceeds the size limit; 2. The tokenIDs or permissionNames in the list are all invalid.
     * @throws { BusinessError } 12100005 - The registration time has exceeded the limit.
     * @throws { BusinessError } 12100007 - Service exception.
     * @throws { BusinessError } 12100008 - Out of memory.
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    onPermissionStateChange(
      tokenIDList: Array<int>,
      permissionList: Array<Permissions>,
      callback: Callback<PermissionStateChangeInfo>
    ): void;
    /**
     * 订阅本应用的指定权限列表的权限授权状态变化事件，使用callback异步回调。可在需要根据权限状态实时更新UI或业务逻辑、监听用户授权行为等场景中使用。不再需要监听时，调用[off]{@link
     * abilityAccessCtrl.AtManager.off}取消订阅。
     *
     * - 多次调用本订阅接口时，如果订阅的权限列表相同，callback不同，允许订阅成功。
     * - 多次调用本订阅接口时，如果订阅的权限列表间有相同的子集，callback相同时，订阅失败。
     *
     * > **说明**
     * > 权限状态由“已授权”变更为“未授权”可能存在两种场景：
     * > - 用户主动撤销：系统会终止对应应用进程。
     * > - 系统主动回收：应用进程不会终止。典型场景如安全控件的单次授权，在授权周期结束后由系统自动回收。
     * > 该接口通常与[off]{@link abilityAccessCtrl.AtManager.off}配套使用，当不再需要监听时应调用off取消订阅。
     *
     * @param { 'selfPermissionStateChange' } type - 订阅事件类型，固定为'selfPermissionStateChange'，自身权限状态变更事件。
     * @param { Array<Permissions> } permissionList - 订阅的权限名列表，为空时表示订阅所有的权限状态变化。传入无效值时返回错误码12100001。
     *     <br>最大长度为1024。取值约束：列表中的权限名需为有效权限名，权限名长度不能超过256个字符。
     * @param { Callback<PermissionStateChangeInfo> } callback - 回调函数。订阅指定权限名状态变更事件的回调。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left
     *     unspecified; 2. Incorrect parameter types.
     * @throws { BusinessError } 12100001 - Invalid parameter. Possible causes: 1. The permissionList exceeds
     *     the size limit; 2. The permissionNames in the list are all invalid.
     * @throws { BusinessError } 12100004 - The API is used repeatedly with the same input.
     * @throws { BusinessError } 12100005 - The registration time has exceeded the limit.
     * @throws { BusinessError } 12100007 - Service exception.
     * @syscap SystemCapability.Security.AccessToken
     * @FaAndStageModel
     * @atomicservice
     * @since 18 dynamic
     */
    on(
      type: 'selfPermissionStateChange',
      permissionList: Array<Permissions>,
      callback: Callback<PermissionStateChangeInfo>
    ): void;
    /**
     * 订阅本应用的指定权限列表的权限授权状态变化事件，使用callback异步回调。
     * 可在需要根据权限状态实时更新UI或业务逻辑、监听用户授权行为等场景中使用。不再需要监听时，调用
     * [offSelfPermissionStateChange]{@link abilityAccessCtrl.AtManager.offSelfPermissionStateChange}取消订阅。
     *
     * - 多次调用本订阅接口时，如果订阅的权限列表相同，callback不同，允许订阅成功。
     * - 多次调用本订阅接口时，如果订阅的权限列表间有相同的子集，callback相同时，订阅失败。
     *
     * 权限状态由“已授权”变更为“未授权”可能存在两种场景：
     *
     * - 用户主动撤销：系统会终止对应应用进程。
     * - 系统主动回收：应用进程不会终止。典型场景如安全控件的单次授权，在授权周期结束后由系统自动回收。
     *
     * 该接口通常与[offSelfPermissionStateChange]{@link abilityAccessCtrl.AtManager.offSelfPermissionStateChange}配套使用，
     * 当不再需要监听时应调用offSelfPermissionStateChange取消订阅。
     *
     * @param { Array<Permissions> } permissionList - 订阅的权限名列表，为空时表示订阅所有的权限状态变化。传入无效值时返回错误码12100001。
     *     <br>最大长度为1024。取值约束：列表中的权限名需为有效权限名，权限名长度不能超过256个字符。
     * @param { Callback<PermissionStateChangeInfo> } callback - 回调函数。订阅指定权限名状态变更事件的回调。
     * @throws { BusinessError } 12100001 - Invalid parameter. Possible causes: 1. The permissionList exceeds
     *     the size limit; 2. The permissionNames in the list are all invalid.
     * @throws { BusinessError } 12100004 - The API is used repeatedly with the same input.
     * @throws { BusinessError } 12100005 - The registration time has exceeded the limit.
     * @throws { BusinessError } 12100007 - Service exception.
     * @syscap SystemCapability.Security.AccessToken
     * @stagemodelonly
     * @since 23 static
     */
    onSelfPermissionStateChange(
      permissionList: Array<Permissions>,
      callback: Callback<PermissionStateChangeInfo>
    ): void;
    /**
     * 取消订阅指定tokenID列表与权限列表的权限状态变更事件。使用callback异步回调。
     *
     * 取消订阅时，若不传入callback，则批量取消与tokenIDList和permissionList完全匹配的所有监听回调。
     *
     * > **说明**
     * > 该接口通常与[on]{@link abilityAccessCtrl.AtManager.on}配套使用，用于取消通过on创建的监听关系。
     *
     * @permission ohos.permission.GET_SENSITIVE_PERMISSIONS
     * @param { 'permissionStateChange' } type - 订阅事件类型，固定为'permissionStateChange'，权限状态变更事件。
     * @param { Array<int> } tokenIDList - 取消订阅的tokenID列表，为空时表示取消订阅所有的应用的权限状态变化，必须与on的输入一致。应用的身份标识可通过应用BundleInfo中的ApplicationInfo中的[accessTokenId]{@link
     *     ./bundleManager/ApplicationInfo:ApplicationInfo.accessTokenId}字段获取。传入无效值时返回错误码12100001。
     *     <br>最大长度为1024。取值约束：列表中的tokenID必须为大于0的整数。
     *     <br>BundleInfo获取可参考：[bundleManager.getBundleInfoSync]{@link @ohos.bundle.bundleManager:bundleManager.getBundleInfoSync}。
     * @param { Array<Permissions> } permissionList - 取消订阅的权限名列表，为空时表示取消订阅所有的权限状态变化，必须与on的输入一致。传入无效值时返回错误码12100001。
     *     <br>最大长度为1024。取值约束：列表中的权限名需为有效权限名，权限名长度不能超过256个字符。
     * @param { Callback<PermissionStateChangeInfo> } [callback] - 回调函数。返回取消订阅指定tokenID与指定权限名状态变更事件的对象，需与
     *     on注册时的callback一致。不传入此参数时，将取消与tokenIDList和permissionList完全匹配的所有监听回调。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types.
     * @throws { BusinessError } 201 - Permission denied. Interface caller does not have permission
     *     "ohos.permission.GET_SENSITIVE_PERMISSIONS".
     * @throws { BusinessError } 202 - Not System App. Interface caller is not a system app.
     * @throws { BusinessError } 12100001 - Invalid parameter. The tokenIDList or permissionList is not in the
     *     listening list.
     * @throws { BusinessError } 12100007 - Service exception.
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @FaAndStageModel
     * @since 9 dynamic
     */
    off(
      type: 'permissionStateChange',
      tokenIDList: Array<int>,
      permissionList: Array<Permissions>,
      callback?: Callback<PermissionStateChangeInfo>
    ): void;
    /**
     * 取消订阅指定tokenID列表与权限列表的权限状态变更事件。使用callback异步回调。
     *
     * 取消订阅时，若不传入callback，则批量取消与tokenIDList和permissionList完全匹配的所有监听回调。
     *
     * > **说明**
     * > 该接口通常与[onPermissionStateChange]{@link abilityAccessCtrl.AtManager.onPermissionStateChange}
     * > 配套使用，用于取消通过onPermissionStateChange创建的监听关系。
     *
     * @permission ohos.permission.GET_SENSITIVE_PERMISSIONS
     * @param { Array<int> } tokenIDList - 取消订阅的tokenID列表，为空时表示取消订阅所有的应用的权限状态变化，必须与on的输入一致。应用的身份标识可通过应用BundleInfo中的ApplicationInfo中的[accessTokenId]{@link
     *     ./bundleManager/ApplicationInfo:ApplicationInfo.accessTokenId}字段获取。传入无效值时返回错误码12100001。
     *     <br>最大长度为1024。取值约束：列表中的tokenID必须为大于0的整数。
     *     <br>BundleInfo获取可参考：[bundleManager.getBundleInfoSync]{@link @ohos.bundle.bundleManager:bundleManager.getBundleInfoSync}。
     * @param { Array<Permissions> } permissionList - 取消订阅的权限名列表，为空时表示取消订阅所有的权限状态变化，必须与on的输入一致。传入无效值时返回错误码12100001。
     *     <br>最大长度为1024。取值约束：列表中的权限名需为有效权限名，权限名长度不能超过256个字符。
     * @param { Callback<PermissionStateChangeInfo> } [callback] - 回调函数。返回取消订阅指定tokenID与指定权限名状态变更事件的对象，需与
     *     onPermissionStateChange注册时的callback一致。不传入此参数时，将取消与tokenIDList和permissionList完全匹配的所有监听回调。
     * @throws { BusinessError } 201 - Permission denied. Interface caller does not have permission
     *     "ohos.permission.GET_SENSITIVE_PERMISSIONS".
     * @throws { BusinessError } 202 - Not System App. Interface caller is not a system app.
     * @throws { BusinessError } 12100001 - Invalid parameter. The tokenIDList or permissionList is
     *     not in the listening list.
     * @throws { BusinessError } 12100007 - Service exception.
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    offPermissionStateChange(
      tokenIDList: Array<int>,
      permissionList: Array<Permissions>,
      callback?: Callback<PermissionStateChangeInfo>
    ): void;
    /**
     * 取消订阅自身指定权限列表的权限状态变更事件。取消订阅成功后，将不再接收指定权限列表的状态变化通知。
     *
     * 在无需继续监听权限变化、应用退出或切换页面等场景下，可调用该接口取消订阅。
     *
     * > **说明**
     * > 当不传入callback参数时，将批量删除与permissionList相关联的所有回调函数。
     * > 该接口通常与[on]{@link abilityAccessCtrl.AtManager.on}配套使用，用于取消通过on创建的监听关系。
     *
     * @param { 'selfPermissionStateChange' } type - 取消订阅事件类型，固定为'selfPermissionStateChange'，权限状态变更事件。
     * @param { Array<Permissions> } permissionList - 取消订阅的权限名列表，为空时表示取消订阅所有的权限状态变化，必须与on订阅时的权限列表匹配（不区分顺序）。
     *     <br>最大长度为1024。取值约束：列表中的权限名需为有效权限名，权限名长度不能超过256个字符。
     * @param { Callback<PermissionStateChangeInfo> } [callback] - 回调函数。取消订阅指定权限名状态变更事件的回调。
     *     不传入此参数时，将批量删除与permissionList相关联的所有回调函数。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left
     *     unspecified; 2. Incorrect parameter types.
     * @throws { BusinessError } 12100004 - The API is not used in pair with 'on'.
     * @throws { BusinessError } 12100007 - Service exception.
     * @syscap SystemCapability.Security.AccessToken
     * @FaAndStageModel
     * @atomicservice
     * @since 18 dynamic
     */
    off(
      type: 'selfPermissionStateChange',
      permissionList: Array<Permissions>,
      callback?: Callback<PermissionStateChangeInfo>
    ): void;
    /**
     * 取消订阅自身指定权限列表的权限状态变更事件。取消订阅成功后，将不再接收指定权限列表的状态变化通知。
     *
     * 在无需继续监听权限变化、应用退出或切换页面等场景下，可调用该接口取消订阅。
     *
     * 当不传入callback参数时，将批量删除与permissionList相关联的所有回调函数。
     *
     * 该接口通常与[onSelfPermissionStateChange]{@link abilityAccessCtrl.AtManager.onSelfPermissionStateChange}
     * 配套使用，用于取消通过onSelfPermissionStateChange创建的监听关系。
     *
     * @param { Array<Permissions> } permissionList - 取消订阅的权限名列表，为空时表示取消订阅所有的权限状态变化，必须与onSelfPermissionStateChange
     *     订阅时的权限列表匹配（不区分顺序）。
     *     <br>最大长度为1024。取值约束：列表中的权限名需为有效权限名，权限名长度不能超过256个字符。
     * @param { Callback<PermissionStateChangeInfo> } [callback] - 回调函数。取消订阅指定权限名状态变更事件的回调。
     *     不传入此参数时，将批量删除与permissionList相关联的所有回调函数。
     * @throws { BusinessError } 12100004 - The API is not used in pair with 'on'.
     * @throws { BusinessError } 12100007 - Service exception.
     * @syscap SystemCapability.Security.AccessToken
     * @stagemodelonly
     * @since 23 static
     */
    offSelfPermissionStateChange(
      permissionList: Array<Permissions>,
      callback?: Callback<PermissionStateChangeInfo>
    ): void;
    /**
     * 用于[UIAbility]{@link @ohos.app.ability.UIAbility:UIAbility}/
     * [UIExtensionAbility]{@link @ohos.app.ability.UIExtensionAbility:UIExtensionAbility}二次拉起权限设置弹窗，返回授权状态数组。使用Promise异
     * 步回调。
     *
     * 适用于用户在首次弹窗中已拒绝过该权限授予，需要通过设置页面继续申请权限的场景。
     *
     * 在调用此接口前，应用需要先调用
     * [requestPermissionsFromUser]{@link abilityAccessCtrl.AtManager.requestPermissionsFromUser}。
     * 如果用户已在首次弹窗中授权，则调用当前接口不会拉起授权弹窗。
     *
     * <!--RP4-->
     *
     * ![requestPermissionOnSetting](docroot://reference/apis-ability-kit/figures/requestPermissionOnSetting.png)
     *
     * <!--RP4End-->
     *
     * @param { Context } context - 请求权限的UIAbility/UIExtensionAbility的Context。若传入其他应用、无效页面或非Stage模型的Context，接口可能报错或无法拉起弹
     *     窗。
     * @param { Array<Permissions> } permissionList - 权限名列表。该数组不能为空，仅支持传入已声明且用户已撤销授权的user_grant权限，且传入权限需属于同一
     *     [权限组](docroot://security/AccessToken/app-permission-group-list.md)。
     *     <br>取值约束：权限名长度不能超过256个字符。
     * @returns { Promise<Array<GrantStatus>> } Promise对象，返回授权状态数组，数组中每个元素对应permissionList中相应权限的授权结果。
     * @throws { BusinessError } 12100001 - Invalid parameter. Possible causes: 1. The context is invalid
     *     because it does not belong to the application itself; 2. The permission list contains the permission
     *     that is not declared in the module.json file; 3. The permission list is invalid because the permissions in it
     *     do not belong to the same permission group; 4. The permission list contains one or more system_grant
     *     permissions.
     * @throws { BusinessError } 12100009 - Common inner error. An error occurs when creating the pop-up window or
     *     obtaining the user operation result.
     * @throws { BusinessError } 12100010 - The request already exists. [since 12 - 20]
     * @throws { BusinessError } 12100011 - All permissions in the permission list have been granted.
     * @throws { BusinessError } 12100012 - The permission list contains the permission that has not been
     *     revoked by the user.
     * @throws { BusinessError } 12100014 - Unexpected permission. You cannot request this type of permission
     *     from users via a pop-up window. [since 21]
     * @syscap SystemCapability.Security.AccessToken
     * @stagemodelonly
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    requestPermissionOnSetting(context: Context, permissionList: Array<Permissions>): Promise<Array<GrantStatus>>;
    /**
     * 用于[UIAbility]{@link @ohos.app.ability.UIAbility:UIAbility}/
     * [UIExtensionAbility]{@link @ohos.app.ability.UIExtensionAbility:UIExtensionAbility}拉起权限设置页面。调用成功后会打开权限设置页面，用户在页面中
     * 操作后，返回用户在设置页面中的选择结果。使用Promise异步回调。
     *
     * 适用于 [manual_settings](docroot://security/AccessToken/app-permission-mgmt-overview.md#manual_settings手动设置授权)
     * 类型权限无法通过普通授权弹窗申请、必须引导用户进入系统设置完成授权的场景。manual_settings类型权限是指只能由用户在系统设置中手动开启的权限，无法通过普通授权弹窗直接申请。
     *
     * @param { Context } context - 请求权限的UIAbility/UIExtensionAbility的Context。若传入其他应用、无效页面或非Stage模型的Context，接口可能报错或无法打开设置页面。
     * @param { Permissions } permission - 需要跳转设置页处理的权限名。传入无效或未在module.json中声明的权限时返回错误码12100001；仅支持授权方式为[manual_settings](docroot://security/AccessToken/app
     *     -permission-mgmt-overview.md#manual_settings手动设置授权)类型的权限，传入其他类型权限时返回错误码12100014。
     *     <br>取值约束：权限名长度不能超过256个字符。
     * @returns { Promise<SelectedResult> } Promise对象，返回用户在设置页面中的选择结果。
     * @throws { BusinessError } 12100001 - Invalid parameter. Possible causes: 1. The context is invalid
     *     because it does not belong to the application itself; 2. The permission is invalid or not
     *     declared in the module.json file.
     * @throws { BusinessError } 12100009 - Common inner error. An error occurs when creating the pop-up window or
     *     obtaining the user operation result.
     * @throws { BusinessError } 12100014 - Unexpected permission. The permission is not a manual_settings
     *     permission.
     * @syscap SystemCapability.Security.AccessToken
     * @stagemodelonly
     * @since 22 dynamic
     * @since 23 static
     */
    openPermissionOnSetting(context: Context, permission: Permissions): Promise<SelectedResult>;
    /**
     * 用于UIAbility/UIExtensionAbility拉起全局开关设置弹窗。调用成功后，若全局开关处于关闭状态，则弹出全局开关设置界面供用户操作；若全局开关已开启，则不拉起弹窗并返回true。使用Promise异步回调。
     *
     * 适用于依赖系统级全局开关（如相机、麦克风、定位）开启的场景。
     *
     * 当应用需要使用相机、麦克风或定位等需要全局开关管控的功能时，如果对应的全局开关被关闭，应用可拉起此弹窗请求用户开启对应功能。如果当前全局开关的状态为开启，则不拉起弹窗。
     *
     * <!--RP5-->
     *
     * ![requestGlobalSwitch](docroot://reference/apis-ability-kit/figures/requestGlobalSwitch.png)
     *
     * <!--RP5End-->
     *
     * @param { Context } context - 请求全局开关的UIAbility/UIExtensionAbility的Context。若传入其他应用、无效页面或非Stage模型的Context，接口可能报错或无法拉
     *     起弹窗。
     * @param { SwitchType } type - 指定需要请求开启的全局开关类型。
     * @returns { Promise<boolean> } Promise对象。返回true表示当前全局开关处于开启状态；返回false表示当前全局开关仍处于关闭状态。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types.
     * @throws { BusinessError } 12100001 - Invalid parameter. Possible causes: 1. The context is invalid because
     *     it does not belong to the application itself; 2. The type of global switch is not supported.
     * @throws { BusinessError } 12100009 - Common inner error. An error occurs when creating the pop-up window
     *     or obtaining user operation result.
     * @throws { BusinessError } 12100013 - The specific global switch is already open.
     * @syscap SystemCapability.Security.AccessToken
     * @stagemodelonly
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    requestGlobalSwitch(context: Context, type: SwitchType): Promise<boolean>;
    /**
     * 拉起应用权限设置页面。使用Promise异步回调。
     *
     * @param { int } tokenID - 目标应用的身份标识。可通过应用BundleInfo中的ApplicationInfo中的[accessTokenId]{@link
     *     ./bundleManager/ApplicationInfo:ApplicationInfo.accessTokenId}字段获取。传入无效值时返回错误码12100001。
     *     <br>取值限定为整数。取值约束：该参数必须为大于0的整数。
     *     <br>BundleInfo获取可参考：[bundleManager.getBundleInfoSync]{@link @ohos.bundle.bundleManager:bundleManager.getBundleInfoSync}。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 202 - Not System App. Interface caller is not a system app.
     * @throws { BusinessError } 12100002 - The specified tokenID does not exist.
     * @throws { BusinessError } 12100007 - Service exception.
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @stagemodelonly
     * @since 18 dynamic
     * @since 23 static
     */
    requestPermissionOnApplicationSetting(tokenID: int): Promise<void>;
    /**
     * 查询当前应用的权限状态，同步返回结果。调用成功后，返回当前权限的状态。与[checkAccessToken]{@link abilityAccessCtrl.AtManager.checkAccessToken}不同，本接口无
     * 需传入应用身份标识，仅用于查询当前应用自身权限状态。
     *
     * 适用于在判断是否需要请求权限前、权限申请后确认授权结果、或监听到权限状态变化后重新查询等场景。
     *
     * @param { Permissions } permissionName - 需要查询状态的权限名称。传入无效值时返回错误码12100001。
     *     <br>取值约束：权限名长度不能超过256个字符。
     * @returns { PermissionStatus } 枚举实例，返回权限状态。
     * @throws { BusinessError } 12100001 - Invalid parameter. The permissionName is empty or exceeds 256 characters.
     * @throws { BusinessError } 12100007 - Service exception.
     * @syscap SystemCapability.Security.AccessToken
     * @FaAndStageModel
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    getSelfPermissionStatus(permissionName: Permissions): PermissionStatus;
    /**
     * 授予应用权限。调用成功后，指定应用获得该权限，可以访问相应的受保护资源。与
     * [grantUserGrantedPermission]{@link abilityAccessCtrl.AtManager.grantUserGrantedPermission}仅支持user_grant类型权限不同,
     * 该接口同时支持user_grant和manual_settings类型的权限授予。使用Promise异步回调。
     *
     * @permission ohos.permission.GRANT_SENSITIVE_PERMISSIONS
     * @param { int } tokenID - 目标应用的身份标识。可通过应用BundleInfo中的ApplicationInfo中的[accessTokenId]{@link
     *     ./bundleManager/ApplicationInfo:ApplicationInfo.accessTokenId}字段获取。传入无效值时返回错误码12100001。
     *     <br>取值限定为整数。取值约束：该参数必须为大于0的整数。
     *     <br>BundleInfo获取可参考：[bundleManager.getBundleInfoSync]{@link @ohos.bundle.bundleManager:bundleManager.getBundleInfoSync}。
     * @param { Permissions } permissionName - 被授予的权限名称。权限名长度不能超过256个字符，超过限制时返回错误码12100001。
     * @param { int } permissionFlags - 授权选项。
     *     <br>取值限定为整数。
     *     <br>- 1表示当次用户若选择禁止该权限，下次权限弹窗仍可以弹出申请用户授权。
     *     <br>- 2表示当次用户若选择禁止该权限，下次不会再弹出权限弹窗，用户需要在系统设置的权限管理中进行授权。
     *     <br>- 64表示当次用户若选择仅本次允许，权限仅本次授权。应用切换后台状态或退出后取消授权。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 201 - Permission denied. Interface caller does not have permission
     *     "ohos.permission.GRANT_SENSITIVE_PERMISSIONS".
     * @throws { BusinessError } 202 - Not System App. Interface caller is not a system app.
     * @throws { BusinessError } 12100001 - Invalid parameter. The tokenID is 0, the permissionName
     *     exceeds 256 characters or is not declared in the module.json file, or the flags value is invalid.
     * @throws { BusinessError } 12100002 - The specified tokenID does not exist.
     * @throws { BusinessError } 12100003 - The specified permission does not exist.
     * @throws { BusinessError } 12100006 - The application specified by the tokenID is not allowed to be
     *     granted with the specified permission. Either the application is a sandbox or the tokenID is from
     *     a remote device.
     * @throws { BusinessError } 12100007 - Service exception.
     * @throws { BusinessError } 12100014 - Unexpected permission. The specified permission is not a
     *     user_grant or manual_settings permission.
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @FaAndStageModel
     * @since 21 dynamic
     * @since 23 static
     */
    grantPermission(tokenID: int, permissionName: Permissions, permissionFlags: int): Promise<void>;
    /**
     * 撤销应用权限。调用成功后，应用失去该权限，无法访问相应的受保护资源。根据killProcess参数的值决定是否终止应用进程。使用Promise异步回调。
     *
     * 当killProcess参数为true且权限状态从“已授权”变为“未授权”时，应用进程会被终止。
     *
     * @permission ohos.permission.REVOKE_SENSITIVE_PERMISSIONS
     * @param { int } tokenID - 目标应用的身份标识。可通过应用BundleInfo中的ApplicationInfo中的[accessTokenId]{@link
     *     ./bundleManager/ApplicationInfo:ApplicationInfo.accessTokenId}字段获取。传入无效值时返回错误码12100001。
     *     <br>取值限定为整数。取值约束：该参数必须为大于0的整数。
     *     <br>BundleInfo获取可参考：[bundleManager.getBundleInfoSync]{@link @ohos.bundle.bundleManager:bundleManager.getBundleInfoSync}。
     * @param { Permissions } permissionName - 被撤销的权限名称。传入无效值时返回错误码12100001。
     *     <br>取值约束：权限名长度不能超过256个字符。
     * @param { int } permissionFlags - 授权选项。
     *     <br>取值限定为整数。
     *     <br>- 1表示当次用户若选择禁止该权限，下次权限弹窗仍可以弹出申请用户授权。
     *     <br>- 2表示当次用户若选择禁止该权限，下次不会再弹出权限弹窗，用户需要在系统设置的权限管理中进行授权。
     *     <br>- 64表示当次用户若选择仅本次允许，权限仅本次授权。应用切换后台状态或退出后取消授权。
     * @param { boolean } [killProcess] - 是否终止应用进程。
     *     <br>- true表示终止应用进程。
     *     <br>- false表示不终止应用进程。
     *     <br>- 默认值为true。
     *     <br> [since 26.0.0]
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 201 - Permission denied. The interface invoker does not have permission
     *     "ohos.permission.REVOKE_SENSITIVE_PERMISSIONS".
     * @throws { BusinessError } 202 - Not a system application. The interface invoker is not a system
     *     application.
     * @throws { BusinessError } 12100001 - Invalid parameter. The token ID is 0, the permission name
     *     exceeds 256 characters or is not declared in the module.json file,
     *     or the value of flags is invalid.
     * @throws { BusinessError } 12100002 - The specified tokenID does not exist.
     * @throws { BusinessError } 12100003 - The specified permission does not exist.
     * @throws { BusinessError } 12100006 - The specified permission is not allowed to be revoked
     *     from the application specified by the tokenID. Either the application is a sandbox or the tokenID
     *     is from a remote device.
     * @throws { BusinessError } 12100007 - Service exception.
     * @throws { BusinessError } 12100014 - Unexpected permission. The specified permission is not a
     *     user_grant or manual_settings permission.
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @FaAndStageModel
     * @since 21 dynamic
     * @since 23 static
     */
    revokePermission(
      tokenID: int,
      permissionName: Permissions,
      permissionFlags: int,
      killProcess?: boolean): Promise<void>;
    /**
     * 根据权限列表查询所有已请求过该权限的应用及其权限状态。使用Promise异步回调。当查询的数据结果的大小超过50000条时，接口会直接返回12100015错误码。
     *
     * @permission ohos.permission.GET_SENSITIVE_PERMISSIONS
     * @param { Array<Permissions> } permissionList - 待查询的权限名称列表。传入无效值时返回错误码12100001。
     *     <br>最大长度为1024且不能为空。取值约束：权限名长度不能超过256个字符。
     * @returns { Promise<Array<PermissionStatusInfo>> } Promise对象，返回查询到的权限状态信息列表。
     * @throws { BusinessError } 201 - Permission denied. Interface caller does not have permission
     *     "ohos.permission.GET_SENSITIVE_PERMISSIONS".
     * @throws { BusinessError } 202 - Not system application. Interface caller is not a system application.
     * @throws { BusinessError } 12100001 - Invalid parameter. The permissionList is empty or exceeds the size
     *     limit.
     * @throws { BusinessError } 12100003 - The specified permission does not exist.
     * @throws { BusinessError } 12100007 - Service exception.
     * @throws { BusinessError } 12100015 - The queried data exceeds the upper limit.
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    queryStatusByPermission(
      permissionList: Array<Permissions>): Promise<Array<PermissionStatusInfo>>;
    /**
     * 根据应用tokenID列表查询其所有的权限状态。使用Promise异步回调。当查询的数据结果的大小超过50000条时，接口会直接返回12100015错误码。
     *
     * @permission ohos.permission.GET_SENSITIVE_PERMISSIONS
     * @param { Array<int> } tokenIDList - 待查询的应用tokenID列表。应用的身份标识可通过应用BundleInfo中的ApplicationInfo中的[accessTokenId]{@link
     *     ./bundleManager/ApplicationInfo:ApplicationInfo.accessTokenId}字段获取。传入无效值时返回错误码12100001。
     *     <br>最大长度为1024且不能为空。取值约束：列表中的tokenID必须为大于0的整数。
     *     <br>BundleInfo获取可参考：[bundleManager.getBundleInfoSync]{@link @ohos.bundle.bundleManager:bundleManager.getBundleInfoSync}。
     * @returns { Promise<Array<PermissionStatusInfo>> } Promise对象，返回查询到的权限状态信息列表。
     * @throws { BusinessError } 201 - Permission denied. Interface caller does not have
     *     permission "ohos.permission.GET_SENSITIVE_PERMISSIONS".
     * @throws { BusinessError } 202 - Not system application. Interface caller is not a system application.
     * @throws { BusinessError } 12100001 - Invalid parameter. The tokenIDList is empty
     *     or exceeds the size limit.
     * @throws { BusinessError } 12100002 - The specified tokenID does not exist.
     * @throws { BusinessError } 12100007 - Service exception.
     * @throws { BusinessError } 12100015 - The queried data exceeds the upper limit.
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    queryStatusByTokenID(tokenIDList: Array<int>): Promise<Array<PermissionStatusInfo>>;
    /**
     * 查询CLI（Command Line Interface，命令行界面）命令是否需要权限弹窗，调用成功后，返回每条命令对应的权限弹窗判定结果。使用Promise异步回调。
     *
     * @permission ohos.permission.QUERY_TOOL_PERMISSIONS
     * @param { string } agentID - 用于标识发起CLI相关操作的智能体标识。传入无效值时返回错误码12100001。
     *     <br>取值约束：长度不能超过48个字符。
     * @param { Array<CliInfo> } cliInfoList - 待查询的CLI信息列表。每项包含一条命令及其子命令信息；建议按实际即将执行的命令集合传入，避免无关命令扩大判定范围。传入无效值时返回错误码12100001。
     *     <br>最大长度为99且不能为空。
     * @returns { Promise<PermissionDialogResult> } Promise对象，返回每条CLI命令的权限弹窗判定结果，包含是否需要弹窗、未满足的权限列表及决策状态等信息。
     * @throws { BusinessError } 201 - Permission denied. Interface caller does not have permission
     *     "ohos.permission.QUERY_TOOL_PERMISSIONS".
     * @throws { BusinessError } 202 - Not system application. Interface caller is not a system application.
     * @throws { BusinessError } 12100001 - Invalid parameter. The agentID exceeds 48 characters, cliInfoList is empty
     *     or exceeds 99 items, the cliName of an item in cliInfoList is empty or exceeds 256 characters, the subCliName
     *     of an item in cliInfoList exceeds 256 characters, or the CLI command does not exist.
     * @throws { BusinessError } 12100007 - Service exception.
     * @throws { BusinessError } 12100009 - Common inner error. The account is not logged in, network is not connected
     *     or an internal error occurs when querying CLI permissions or generating auth results.
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamiconly
     */
    getCliPermissionRequestInfo(agentID: string, cliInfoList: Array<CliInfo>): Promise<PermissionDialogResult>;
    /**
     * 查询指定应用使用的CLI命令依赖的CLI权限及映射的运行时权限。调用成功后返回每条命令的CLI权限决策状态和运行时权限映射列表。使用Promise异步回调。
     *
     * @permission ohos.permission.MANAGE_TOOL_RUNTIME_PERMISSIONS
     * @param { int } hostTokenID - 访问CLI指令的应用的tokenID。可通过应用BundleInfo中的ApplicationInfo中的[accessTokenId]{@link
     *     ./bundleManager/ApplicationInfo:ApplicationInfo.accessTokenId}字段获取。传入无效值时返回错误码12100001。
     *     <br>取值限定为整数。取值约束：该参数必须为大于0的整数。
     *     <br>BundleInfo获取可参考：[bundleManager.getBundleInfoSync]{@link @ohos.bundle.bundleManager:bundleManager.getBundleInfoSync}。
     * @param { string } agentID - 用于标识发起CLI相关操作的智能体标识。传入无效值时返回错误码12100001。
     *     <br>取值约束：长度不能超过48个字符。
     * @param { Array<CliInfo> } cliInfoList - 待查询的CLI信息列表。每项包含一条命令及其子命令信息。传入无效值时返回错误码12100001。
     *     <br>最大长度为99且不能为空。
     * @returns { Promise<CliPermissionsResult> } Promise对象，返回每条CLI命令依赖的CLI权限及其对应的运行时权限映射信息。
     * @throws { BusinessError } 201 - Permission denied. Interface caller does not have permission
     *     "ohos.permission.MANAGE_TOOL_RUNTIME_PERMISSIONS".
     * @throws { BusinessError } 202 - Not system application. Interface caller is not a system application.
     * @throws { BusinessError } 12100001 - Invalid parameter. The hostTokenID is 0, the agentID exceeds 48
     *     characters, cliInfoList is empty or contains more than 99 items, the cliName of an item in cliInfoList is
     *     empty or exceeds 256 characters, the subCliName of an item in cliInfoList exceeds 256 characters, or the CLI
     *     command does not exist.
     * @throws { BusinessError } 12100002 - The specified tokenID does not exist.
     * @throws { BusinessError } 12100007 - Service exception.
     * @throws { BusinessError } 12100009 - Common internal error. An internal error occurs when querying CLI
     *     permissions or runtime permission information.
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamiconly
     */
    getCliPermissions(
      hostTokenID: int,
      agentID: string,
      cliInfoList: Array<CliInfo>): Promise<CliPermissionsResult>;
    /**
     * 根据CLI授权信息生成授权结果。使用Promise异步回调。
     *
     * @permission ohos.permission.MANAGE_TOOL_RUNTIME_PERMISSIONS
     * @param { int } hostTokenID - 访问CLI指令的应用的tokenID。可通过应用BundleInfo中的ApplicationInfo中的[accessTokenId]{@link
     *     ./bundleManager/ApplicationInfo:ApplicationInfo.accessTokenId}字段获取。传入无效值时返回错误码12100001。
     *     <br>取值限定为整数。取值约束：该参数必须为大于0的整数。
     *     <br>BundleInfo获取可参考：[bundleManager.getBundleInfoSync]{@link @ohos.bundle.bundleManager:bundleManager.getBundleInfoSync}。
     * @param { string } agentID - 用于标识发起CLI相关操作的智能体体标识。传入无效值时返回错误码12100001。
     *     <br>取值约束：长度不能超过48个字符。
     * @param { Array<CliAuthInfo> } authInfoList - CLI授权信息列表，每项包含CLI信息（主命令和子命令名称）、待授权的权限名称列表和对应的授权结果列表。传入无效值时返回错误码12100001。
     *     <br>最大长度为99且不能为空。
     * @returns { Promise<ToolAuthResult> } Promise对象，返回生成的授权结果，包含授权结果字符串列表，可用于传递给CLI工具执行命令。
     * @throws { BusinessError } 201 - Permission denied. Interface caller does not have permission
     *     "ohos.permission.MANAGE_TOOL_RUNTIME_PERMISSIONS".
     * @throws { BusinessError } 202 - Not system application. Interface caller is not a system application.
     * @throws { BusinessError } 12100001 - Invalid parameter. The hostTokenID is 0, the agentID exceeds 48
     *     characters, authInfoList is empty or contains more than 99 items, the cliName in cliInfo of an item in
     *     authInfoList is empty or exceeds 256 characters, the subCliName in cliInfo of an item in authInfoList
     *     exceeds 256 characters, a permission name in permissionNames of an item in authInfoList is empty or exceeds
     *     256 characters, or the number of permissionNames does not equal the number of authorizationResults in an item
     *     in authInfoList.
     * @throws { BusinessError } 12100002 - The specified tokenID does not exist.
     * @throws { BusinessError } 12100003 - A permission name in permissionNames of an item in authInfoList does
     *     not exist.
     * @throws { BusinessError } 12100007 - Service exception.
     * @throws { BusinessError } 12100009 - Common internal error. The account is not logged in, network is not
     *     connected or an internal error occurs when generating authorization results.
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamiconly
     */
    generateCliAuthResult(
      hostTokenID: int,
      agentID: string,
      authInfoList: Array<CliAuthInfo>): Promise<ToolAuthResult>;
  }
  /**
   * 表示授权状态的枚举。
   *
   * @syscap SystemCapability.Security.AccessToken
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   * @since 23 static
   */
  export enum GrantStatus {
    /**
     * 表示未授权。
     *
     * @syscap SystemCapability.Security.AccessToken
     * @FaAndStageModel
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 8 dynamic
     * @since 23 static
     */
    PERMISSION_DENIED = -1,
    /**
     * 表示已授权。
     *
     * @syscap SystemCapability.Security.AccessToken
     * @FaAndStageModel
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 8 dynamic
     * @since 23 static
     */
    PERMISSION_GRANTED = 0
  }
  /**
   * 程序访问控制提供应用程序的权限校验和管理能力，支持应用在访问受保护资源前进行权限状态判断、运行时授权申请、设置页授权引导和权限状态变化监听。权限分为system_grant（系统自动授权）、user_grant（需用户手动授权）和
   * manual_settings（手动设置授权）三类，应用需在配置文件中声明所需权限。权限管理机制详见[应用权限管控概述](docroot://security/AccessToken/app-permission-mgmt-overview.md)。
   *
   * 该模块主要用于以下场景：
   *
   * - 在业务执行前校验当前应用是否具备访问受保护资源所需要的权限。
   * - 在权限未授予时，拉起运行时权限弹窗或权限设置页面，请求用户授权。
   * - 订阅当前应用的权限状态变化事件，在权限状态变化后及时调整业务流程。
   *
   * ###### 核心枚举类型
   *
   * - **[GrantStatus]{@link abilityAccessCtrl.GrantStatus}：** 权限授权状态枚举，用于表示当前权限的授权状态。
   * - **[SwitchType]{@link abilityAccessCtrl.SwitchType}：** 全局开关类型枚举，用于表示需要请求的系统全局开关类型。
   * - **[PermissionStateChangeType]{@link abilityAccessCtrl.PermissionStateChangeType}：** 权限状态变化类型枚举，用于表示授权、取消授权等变化。
   * - **[PermissionStatus]{@link abilityAccessCtrl.PermissionStatus}：** 权限状态枚举，用于表示当前权限状态。
   * - **[SelectedResult]{@link abilityAccessCtrl.SelectedResult}：** 设置页授权选择结果枚举，用于表示用户在权限设置弹窗中的选择结果。
   *
   * ###### 核心接口类型
   *
   * - **[PermissionStateChangeInfo]{@link abilityAccessCtrl.PermissionStateChangeInfo}：** 权限状态变化事件对象，用于返回变化类型、应用身份标识和权限名。
   * - **[PermissionRequestResult]{@link PermissionRequestResult}：** 权限申请结果对象，用于返回权限申请后的权限名列表、授权结果和弹窗展示结果。
   * - **[Context]{@link Context}：** 上下文对象，用于发起权限申请或打开权限设置弹窗。
   *
   * ###### 核心类
   *
   * - **[AtManager]{@link abilityAccessCtrl.AtManager}：** 程序访问控制管理类，提供权限校验、权限弹窗申请、设置页授权引导和权限状态监听等能力。
   *
   * ![image_abilityAccessCtrl](docroot://reference/apis-ability-kit/figures/abilityAccessCtrl.png)
   *
   * @syscap SystemCapability.Security.AccessToken
   * @stagemodelonly
   * @since 22 dynamic
   * @since 23 static
   */
  export enum SelectedResult {
    /**
     * 表示用户选择不允许前往设置。
     *
     * @syscap SystemCapability.Security.AccessToken
     * @stagemodelonly
     * @since 22 dynamic
     * @since 23 static
     */
    REJECTED = -1,
    /**
     * 表示用户选择前往设置。
     *
     * @syscap SystemCapability.Security.AccessToken
     * @stagemodelonly
     * @since 22 dynamic
     * @since 23 static
     */
    OPENED = 0,
    /**
     * 表示权限已授权，无需弹窗。
     *
     * @syscap SystemCapability.Security.AccessToken
     * @stagemodelonly
     * @since 22 dynamic
     * @since 23 static
     */
    GRANTED = 1
  }
  /**
   * 程序访问控制提供应用程序的权限校验和管理能力，支持应用在访问受保护资源前进行权限状态判断、运行时授权申请、设置页授权引导和权限状态变化监听。权限分为system_grant（系统自动授权）、user_grant（需用户手动授权）和
   * manual_settings（手动设置授权）三类，应用需在配置文件中声明所需权限。权限管理机制详见[应用权限管控概述](docroot://security/AccessToken/app-permission-mgmt-overview.md)。
   *
   * 该模块主要用于以下场景：
   *
   * - 在业务执行前校验当前应用是否具备访问受保护资源所需要的权限。
   * - 在权限未授予时，拉起运行时权限弹窗或权限设置页面，请求用户授权。
   * - 订阅当前应用的权限状态变化事件，在权限状态变化后及时调整业务流程。
   *
   * ###### 核心枚举类型
   *
   * - **[GrantStatus]{@link abilityAccessCtrl.GrantStatus}：** 权限授权状态枚举，用于表示当前权限的授权状态。
   * - **[SwitchType]{@link abilityAccessCtrl.SwitchType}：** 全局开关类型枚举，用于表示需要请求的系统全局开关类型。
   * - **[PermissionStateChangeType]{@link abilityAccessCtrl.PermissionStateChangeType}：** 权限状态变化类型枚举，用于表示授权、取消授权等变化。
   * - **[PermissionStatus]{@link abilityAccessCtrl.PermissionStatus}：** 权限状态枚举，用于表示当前权限状态。
   * - **[SelectedResult]{@link abilityAccessCtrl.SelectedResult}：** 设置页授权选择结果枚举，用于表示用户在权限设置弹窗中的选择结果。
   *
   * ###### 核心接口类型
   *
   * - **[PermissionStateChangeInfo]{@link abilityAccessCtrl.PermissionStateChangeInfo}：** 权限状态变化事件对象，用于返回变化类型、应用身份标识和权限名。
   * - **[PermissionRequestResult]{@link PermissionRequestResult}：** 权限申请结果对象，用于返回权限申请后的权限名列表、授权结果和弹窗展示结果。
   * - **[Context]{@link Context}：** 上下文对象，用于发起权限申请或打开权限设置弹窗。
   *
   * ###### 核心类
   *
   * - **[AtManager]{@link abilityAccessCtrl.AtManager}：** 程序访问控制管理类，提供权限校验、权限弹窗申请、设置页授权引导和权限状态监听等能力。
   *
   * ![image_abilityAccessCtrl](docroot://reference/apis-ability-kit/figures/abilityAccessCtrl.png)
   *
   * @syscap SystemCapability.Security.AccessToken
   * @FaAndStageModel
   * @atomicservice
   * @since 18 dynamic
   * @since 23 static
   */
  export enum PermissionStateChangeType {
    /**
     * 表示权限取消操作。
     *
     * @syscap SystemCapability.Security.AccessToken
     * @FaAndStageModel
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    PERMISSION_REVOKED_OPER = 0,
    /**
     * 表示权限授予操作。
     *
     * @syscap SystemCapability.Security.AccessToken
     * @FaAndStageModel
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    PERMISSION_GRANTED_OPER = 1
  }
  /**
   * 程序访问控制提供应用程序的权限校验和管理能力，支持应用在访问受保护资源前进行权限状态判断、运行时授权申请、设置页授权引导和权限状态变化监听。权限分为system_grant（系统自动授权）、user_grant（需用户手动授权）和
   * manual_settings（手动设置授权）三类，应用需在配置文件中声明所需权限。权限管理机制详见[应用权限管控概述](docroot://security/AccessToken/app-permission-mgmt-overview.md)。
   *
   * 该模块主要用于以下场景：
   *
   * - 在业务执行前校验当前应用是否具备访问受保护资源所需要的权限。
   * - 在权限未授予时，拉起运行时权限弹窗或权限设置页面，请求用户授权。
   * - 订阅当前应用的权限状态变化事件，在权限状态变化后及时调整业务流程。
   *
   * ###### 核心枚举类型
   *
   * - **[GrantStatus]{@link abilityAccessCtrl.GrantStatus}：** 权限授权状态枚举，用于表示当前权限的授权状态。
   * - **[SwitchType]{@link abilityAccessCtrl.SwitchType}：** 全局开关类型枚举，用于表示需要请求的系统全局开关类型。
   * - **[PermissionStateChangeType]{@link abilityAccessCtrl.PermissionStateChangeType}：** 权限状态变化类型枚举，用于表示授权、取消授权等变化。
   * - **[PermissionStatus]{@link abilityAccessCtrl.PermissionStatus}：** 权限状态枚举，用于表示当前权限状态。
   * - **[SelectedResult]{@link abilityAccessCtrl.SelectedResult}：** 设置页授权选择结果枚举，用于表示用户在权限设置弹窗中的选择结果。
   *
   * ###### 核心接口类型
   *
   * - **[PermissionStateChangeInfo]{@link abilityAccessCtrl.PermissionStateChangeInfo}：** 权限状态变化事件对象，用于返回变化类型、应用身份标识和权限名。
   * - **[PermissionRequestResult]{@link PermissionRequestResult}：** 权限申请结果对象，用于返回权限申请后的权限名列表、授权结果和弹窗展示结果。
   * - **[Context]{@link Context}：** 上下文对象，用于发起权限申请或打开权限设置弹窗。
   *
   * ###### 核心类
   *
   * - **[AtManager]{@link abilityAccessCtrl.AtManager}：** 程序访问控制管理类，提供权限校验、权限弹窗申请、设置页授权引导和权限状态监听等能力。
   *
   * ![image_abilityAccessCtrl](docroot://reference/apis-ability-kit/figures/abilityAccessCtrl.png)
   *
   * @syscap SystemCapability.Security.AccessToken
   * @systemapi
   * @FaAndStageModel
   * @since 12 dynamic
   * @since 23 static
   */
  export enum PermissionRequestToggleStatus {
    /**
     * 表示关闭指定权限的弹窗开关。应用调用[requestPermissionsFromUser]{@link abilityAccessCtrl.AtManager.requestPermissionsFromUser}
     * 等接口请求该权限时，不会弹出权限弹窗。
     *
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @FaAndStageModel
     * @since 12 dynamic
     * @since 23 static
     */
    CLOSED = 0,
    /**
     * 表示开启指定权限的弹窗开关。应用调用[requestPermissionsFromUser]{@link abilityAccessCtrl.AtManager.requestPermissionsFromUser}
     * 等接口请求该权限时，会正常弹出权限弹窗。
     *
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @FaAndStageModel
     * @since 12 dynamic
     * @since 23 static
     */
    OPEN = 1
  }
  /**
   * 表示某次权限授权状态变化的详情。
   *
   * @syscap SystemCapability.Security.AccessToken
   * @FaAndStageModel
   * @atomicservice
   * @since 18 dynamic
   * @since 23 static
   * @name PermissionStateChangeInfo
   */
  interface PermissionStateChangeInfo {
    /**
     * 权限授权状态变化类型。
     *
     * @syscap SystemCapability.Security.AccessToken
     * @FaAndStageModel
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    change: PermissionStateChangeType;
    /**
     * 被订阅的应用身份标识。该参数必须为大于0的整数，传入0时返回错误码12100001。
     * BundleInfo获取可参考：[bundleManager.getBundleInfoSync]{@link @ohos.bundle.bundleManager:bundleManager.getBundleInfoSync}。
     * 获取。
     *
     * @syscap SystemCapability.Security.AccessToken
     * @FaAndStageModel
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    tokenID: int;
    /**
     * 当前授权状态发生变化的权限名，合法的权限名取值可在[应用权限列表](docroot://security/AccessToken/app-permissions.md)中查询。
     *
     * @syscap SystemCapability.Security.AccessToken
     * @FaAndStageModel
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    permissionName: Permissions;
  }
  /**
   * 程序访问控制提供应用程序的权限校验和管理能力，支持应用在访问受保护资源前进行权限状态判断、运行时授权申请、设置页授权引导和权限状态变化监听。权限分为system_grant（系统自动授权）、user_grant（需用户手动授权）和
   * manual_settings（手动设置授权）三类，应用需在配置文件中声明所需权限。权限管理机制详见[应用权限管控概述](docroot://security/AccessToken/app-permission-mgmt-overview.md)。
   *
   * 该模块主要用于以下场景：
   *
   * - 在业务执行前校验当前应用是否具备访问受保护资源所需要的权限。
   * - 在权限未授予时，拉起运行时权限弹窗或权限设置页面，请求用户授权。
   * - 订阅当前应用的权限状态变化事件，在权限状态变化后及时调整业务流程。
   *
   * ###### 核心枚举类型
   *
   * - **[GrantStatus]{@link abilityAccessCtrl.GrantStatus}：** 权限授权状态枚举，用于表示当前权限的授权状态。
   * - **[SwitchType]{@link abilityAccessCtrl.SwitchType}：** 全局开关类型枚举，用于表示需要请求的系统全局开关类型。
   * - **[PermissionStateChangeType]{@link abilityAccessCtrl.PermissionStateChangeType}：** 权限状态变化类型枚举，用于表示授权、取消授权等变化。
   * - **[PermissionStatus]{@link abilityAccessCtrl.PermissionStatus}：** 权限状态枚举，用于表示当前权限状态。
   * - **[SelectedResult]{@link abilityAccessCtrl.SelectedResult}：** 设置页授权选择结果枚举，用于表示用户在权限设置弹窗中的选择结果。
   *
   * ###### 核心接口类型
   *
   * - **[PermissionStateChangeInfo]{@link abilityAccessCtrl.PermissionStateChangeInfo}：** 权限状态变化事件对象，用于返回变化类型、应用身份标识和权限名。
   * - **[PermissionRequestResult]{@link PermissionRequestResult}：** 权限申请结果对象，用于返回权限申请后的权限名列表、授权结果和弹窗展示结果。
   * - **[Context]{@link Context}：** 上下文对象，用于发起权限申请或打开权限设置弹窗。
   *
   * ###### 核心类
   *
   * - **[AtManager]{@link abilityAccessCtrl.AtManager}：** 程序访问控制管理类，提供权限校验、权限弹窗申请、设置页授权引导和权限状态监听等能力。
   *
   * ![image_abilityAccessCtrl](docroot://reference/apis-ability-kit/figures/abilityAccessCtrl.png)
   *
   * @syscap SystemCapability.Security.AccessToken
   * @FaAndStageModel
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  export enum PermissionStatus {
    /**
     * 表示用户未授权。
     *
     * @syscap SystemCapability.Security.AccessToken
     * @FaAndStageModel
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    DENIED = -1,
    /**
     * 表示已授权。
     *
     * @syscap SystemCapability.Security.AccessToken
     * @FaAndStageModel
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    GRANTED = 0,
    /**
     * 表示未操作。应用声明[用户授权权限]{@link permissions:Permissions}但暂未调用
     * [requestPermissionsFromUser]{@link abilityAccessCtrl.AtManager.requestPermissionsFromUser}
     * 接口请求授权，或用户在设置中将权限状态修改为每次询问时，查询权限状态返回此值。
     *
     * @syscap SystemCapability.Security.AccessToken
     * @FaAndStageModel
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    NOT_DETERMINED = 1,
    /**
     * 表示无效。应用未[声明权限](docroot://security/AccessToken/declare-permissions.md)或当前无法处理。例如：当模糊位置权限的状态为NOT_DETERMINED时，查询精确位置
     * 权限状态，返回此值。
     *
     * @syscap SystemCapability.Security.AccessToken
     * @FaAndStageModel
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    INVALID = 2,
    /**
     * 表示受限。<!--RP2-->应用被禁止通过[requestPermissionsFromUser]{@link abilityAccessCtrl.AtManager.requestPermissionsFromUser}
     * 接口请求用户授权。<!--RP2End-->
     *
     * @syscap SystemCapability.Security.AccessToken
     * @FaAndStageModel
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    RESTRICTED = 3
  }
  /**
   * 程序访问控制提供应用程序的权限校验和管理能力，支持应用在访问受保护资源前进行权限状态判断、运行时授权申请、设置页授权引导和权限状态变化监听。权限分为system_grant（系统自动授权）、user_grant（需用户手动授权）和
   * manual_settings（手动设置授权）三类，应用需在配置文件中声明所需权限。权限管理机制详见[应用权限管控概述](docroot://security/AccessToken/app-permission-mgmt-overview.md)。
   *
   * 该模块主要用于以下场景：
   *
   * - 在业务执行前校验当前应用是否具备访问受保护资源所需要的权限。
   * - 在权限未授予时，拉起运行时权限弹窗或权限设置页面，请求用户授权。
   * - 订阅当前应用的权限状态变化事件，在权限状态变化后及时调整业务流程。
   *
   * ###### 核心枚举类型
   *
   * - **[GrantStatus]{@link abilityAccessCtrl.GrantStatus}：** 权限授权状态枚举，用于表示当前权限的授权状态。
   * - **[SwitchType]{@link abilityAccessCtrl.SwitchType}：** 全局开关类型枚举，用于表示需要请求的系统全局开关类型。
   * - **[PermissionStateChangeType]{@link abilityAccessCtrl.PermissionStateChangeType}：** 权限状态变化类型枚举，用于表示授权、取消授权等变化。
   * - **[PermissionStatus]{@link abilityAccessCtrl.PermissionStatus}：** 权限状态枚举，用于表示当前权限状态。
   * - **[SelectedResult]{@link abilityAccessCtrl.SelectedResult}：** 设置页授权选择结果枚举，用于表示用户在权限设置弹窗中的选择结果。
   *
   * ###### 核心接口类型
   *
   * - **[PermissionStateChangeInfo]{@link abilityAccessCtrl.PermissionStateChangeInfo}：** 权限状态变化事件对象，用于返回变化类型、应用身份标识和权限名。
   * - **[PermissionRequestResult]{@link PermissionRequestResult}：** 权限申请结果对象，用于返回权限申请后的权限名列表、授权结果和弹窗展示结果。
   * - **[Context]{@link Context}：** 上下文对象，用于发起权限申请或打开权限设置弹窗。
   *
   * ###### 核心类
   *
   * - **[AtManager]{@link abilityAccessCtrl.AtManager}：** 程序访问控制管理类，提供权限校验、权限弹窗申请、设置页授权引导和权限状态监听等能力。
   *
   * ![image_abilityAccessCtrl](docroot://reference/apis-ability-kit/figures/abilityAccessCtrl.png)
   *
   * @syscap SystemCapability.Security.AccessToken
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  export enum SwitchType {
    /**
     * 表示相机全局开关。
     *
     * @syscap SystemCapability.Security.AccessToken
     * @stagemodelonly
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    CAMERA = 0,
    /**
     * 表示麦克风全局开关。
     *
     * @syscap SystemCapability.Security.AccessToken
     * @stagemodelonly
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    MICROPHONE = 1,
    /**
     * 表示位置全局开关。
     *
     * @syscap SystemCapability.Security.AccessToken
     * @stagemodelonly
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    LOCATION = 2
  }
  /**
   * 表示权限状态信息。
   *
   * @syscap SystemCapability.Security.AccessToken
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface PermissionStatusInfo {
    /**
     * 应用的身份标识。
     * 取值限定为整数。
     *
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    tokenID: int;
    /**
     * 权限名称。
     *
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    permissionName: Permissions;
    /**
     * 权限授权状态。
     *
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    grantStatus: GrantStatus;
    /**
     * 权限标志，取值范围如下：
     * - 0：用户未设置该权限。
     * - 1：用户已设置该权限，若权限未授予，允许再次弹出权限弹窗请求授权。
     * - 2：用户已设置该权限，若权限未授予，不允许再次弹出权限弹窗请求授权，需用户在系统设置中授权。
     * - 4：系统已设置该权限。
     * - 8：系统已预授权该权限，且允许取消授权。
     * - 16：安全控件已设置该权限。
     * - 32：安全策略已固定该权限，用户不能授权或取消授权。
     * - 64：仅在当前生命周期前台期间允许使用该权限。
     * - 128：管理员策略已固定该权限，用户不能授权或取消授权，管理员可取消固定。
     * - 256：管理员策略取消固定该权限，用户可授权或取消授权。
     * - 512：用户策略限制该权限。
     * 取值限定为整数。
     *
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    grantFlags: int;
    /**
     * 授权状态变化的时间戳。该字段为可选字段，当权限状态变化时返回。
     * 单位为：毫秒。
     *
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    grantTimestamp?: long;
  }
  /**
   * 权限决策状态枚举。
   *
   * @syscap SystemCapability.Security.AccessToken
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamiconly
   */
  export enum PermissionDecisionStatus {
    /**
     * 表示需要弹出权限对话框。
     *
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamiconly
     */
    NEED_PERMISSION_DIALOG = 0,
    /**
     * 表示无需弹窗，权限已被用户拒绝。
     *
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamiconly
     */
    NO_DIALOG_DENIED = 1,
    /**
     * 表示无需弹窗，权限受系统或策略限制。
     *
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamiconly
     */
    NO_DIALOG_RESTRICTED = 2,
    /**
     * 表示无需弹窗，权限已授予。
     *
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamiconly
     */
    NO_DIALOG_GRANTED = 3,
    /**
     * 表示无需弹窗，但权限未声明。
     *
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamiconly
     */
    NO_DIALOG_NOT_DECLARED = 4,
    /**
     * 表示无需弹窗，CLI权限已完成运行时权限解析。
     *
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamiconly
     */
    NO_DIALOG_CLI_PERMISSION_RESOLVED = 5
  }
  /**
   * 表示CLI（Command Line Interface，命令行界面）信息。
   *
   * @syscap SystemCapability.Security.AccessToken
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamiconly
   */
  interface CliInfo {
    /**
     * CLI名称。该字段不能为空，且长度不能超过256个字符。
     *
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamiconly
     */
    cliName: string;
    /**
     * CLI子命令名称。该字段可以为空，但长度不能超过256个字符。
     *
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamiconly
     */
    subCliName: string;
  }
  /**
   * 表示单条命令的权限弹窗信息。
   *
   * @syscap SystemCapability.Security.AccessToken
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamiconly
   */
  interface PermissionDialogDetail {
    /**
     * 当前CLI命令是否需要权限弹窗，true表示需要权限弹窗，false表示不需要权限弹窗。
     *
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamiconly
     */
    needPermissionDialog: boolean;
    /**
     * 发起CLI相关操作的智能体当前未满足的权限名称列表。若相关权限不满足，CLI将无法拉起，或拉起后的CLI进程无法获得对应权限。
     *
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamiconly
     */
    permissionNameList: Array<Permissions>;
    /**
     * 权限决策状态列表。
     *
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamiconly
     */
    statusList: Array<PermissionDecisionStatus>;
    /**
     * 授权结果字符串。
     *
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamiconly
     */
    authResult: string;
  }
  /**
   * 表示权限弹窗查询结果。
   *
   * @syscap SystemCapability.Security.AccessToken
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamiconly
   */
  interface PermissionDialogResult {
    /**
     * 权限弹窗的信息列表。
     *
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamiconly
     */
    detailList: Array<PermissionDialogDetail>;
  }
  /**
   * 表示CLI指令声明的单个CLI权限的状态信息。
   *
   * @syscap SystemCapability.Security.AccessToken
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamiconly
   */
  interface CliPermissionDetail {
    /**
     * 调用CLI所需的CLI权限。
     *
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamiconly
     */
    requiredCliPermission: Permissions;
    /**
     * CLI指令声明的CLI权限的决策状态。
     *
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamiconly
     */
    cliPermissionStatus: PermissionDecisionStatus;
    /**
     * 由requiredCliPermission映射出的运行时权限列表。
     *
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamiconly
     */
    usedPermissions: Array<Permissions>;
  }
  /**
   * 表示单条CLI命令的权限信息。
   *
   * @syscap SystemCapability.Security.AccessToken
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamiconly
   */
  interface CliCommandPermissionResult {
    /**
     * 当前CLI命令依赖的CLI权限信息列表。
     *
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamiconly
     */
    requiredCliPermissions: Array<CliPermissionDetail>;
  }
  /**
   * 表示CLI权限查询结果。
   *
   * @syscap SystemCapability.Security.AccessToken
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamiconly
   */
  interface CliPermissionsResult {
    /**
     * CLI权限信息的列表。
     *
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamiconly
     */
    permList: Array<CliCommandPermissionResult>;
  }
  /**
   * 程序访问控制提供应用程序的权限校验和管理能力，支持应用在访问受保护资源前进行权限状态判断、运行时授权申请、设置页授权引导和权限状态变化监听。权限分为system_grant（系统自动授权）、user_grant（需用户手动授权）和
   * manual_settings（手动设置授权）三类，应用需在配置文件中声明所需权限。权限管理机制详见[应用权限管控概述](docroot://security/AccessToken/app-permission-mgmt-overview.md)。
   *
   * 该模块主要用于以下场景：
   *
   * - 在业务执行前校验当前应用是否具备访问受保护资源所需要的权限。
   * - 在权限未授予时，拉起运行时权限弹窗或权限设置页面，请求用户授权。
   * - 订阅当前应用的权限状态变化事件，在权限状态变化后及时调整业务流程。
   *
   * ###### 核心枚举类型
   *
   * - **[GrantStatus]{@link abilityAccessCtrl.GrantStatus}：** 权限授权状态枚举，用于表示当前权限的授权状态。
   * - **[SwitchType]{@link abilityAccessCtrl.SwitchType}：** 全局开关类型枚举，用于表示需要请求的系统全局开关类型。
   * - **[PermissionStateChangeType]{@link abilityAccessCtrl.PermissionStateChangeType}：** 权限状态变化类型枚举，用于表示授权、取消授权等变化。
   * - **[PermissionStatus]{@link abilityAccessCtrl.PermissionStatus}：** 权限状态枚举，用于表示当前权限状态。
   * - **[SelectedResult]{@link abilityAccessCtrl.SelectedResult}：** 设置页授权选择结果枚举，用于表示用户在权限设置弹窗中的选择结果。
   *
   * ###### 核心接口类型
   *
   * - **[PermissionStateChangeInfo]{@link abilityAccessCtrl.PermissionStateChangeInfo}：** 权限状态变化事件对象，用于返回变化类型、应用身份标识和权限名。
   * - **[PermissionRequestResult]{@link PermissionRequestResult}：** 权限申请结果对象，用于返回权限申请后的权限名列表、授权结果和弹窗展示结果。
   * - **[Context]{@link Context}：** 上下文对象，用于发起权限申请或打开权限设置弹窗。
   *
   * ###### 核心类
   *
   * - **[AtManager]{@link abilityAccessCtrl.AtManager}：** 程序访问控制管理类，提供权限校验、权限弹窗申请、设置页授权引导和权限状态监听等能力。
   *
   * ![image_abilityAccessCtrl](docroot://reference/apis-ability-kit/figures/abilityAccessCtrl.png)
   *
   * @syscap SystemCapability.Security.AccessToken
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamiconly
   */
  interface CliAuthInfo {
    /**
     * 授权信息对应的CLI信息。
     *
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamiconly
     */
    cliInfo: CliInfo;
    /**
     * 权限名称列表。每个元素不能为空，且长度不能超过256个字符。
     *
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamiconly
     */
    permissionNames: Array<Permissions>;
    /**
     * 授权结果列表，且数组长度必须等于permissionNames.length。true表示授权成功，CLI命令可获得对应权限；false表示拒绝授权，CLI命令无法获得对应权限。
     *
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamiconly
     */
    authorizationResults: Array<boolean>;
  }
  /**
   * 程序访问控制提供应用程序的权限校验和管理能力，支持应用在访问受保护资源前进行权限状态判断、运行时授权申请、设置页授权引导和权限状态变化监听。权限分为system_grant（系统自动授权）、user_grant（需用户手动授权）和
   * manual_settings（手动设置授权）三类，应用需在配置文件中声明所需权限。权限管理机制详见[应用权限管控概述](docroot://security/AccessToken/app-permission-mgmt-overview.md)。
   *
   * 该模块主要用于以下场景：
   *
   * - 在业务执行前校验当前应用是否具备访问受保护资源所需要的权限。
   * - 在权限未授予时，拉起运行时权限弹窗或权限设置页面，请求用户授权。
   * - 订阅当前应用的权限状态变化事件，在权限状态变化后及时调整业务流程。
   *
   * ###### 核心枚举类型
   *
   * - **[GrantStatus]{@link abilityAccessCtrl.GrantStatus}：** 权限授权状态枚举，用于表示当前权限的授权状态。
   * - **[SwitchType]{@link abilityAccessCtrl.SwitchType}：** 全局开关类型枚举，用于表示需要请求的系统全局开关类型。
   * - **[PermissionStateChangeType]{@link abilityAccessCtrl.PermissionStateChangeType}：** 权限状态变化类型枚举，用于表示授权、取消授权等变化。
   * - **[PermissionStatus]{@link abilityAccessCtrl.PermissionStatus}：** 权限状态枚举，用于表示当前权限状态。
   * - **[SelectedResult]{@link abilityAccessCtrl.SelectedResult}：** 设置页授权选择结果枚举，用于表示用户在权限设置弹窗中的选择结果。
   *
   * ###### 核心接口类型
   *
   * - **[PermissionStateChangeInfo]{@link abilityAccessCtrl.PermissionStateChangeInfo}：** 权限状态变化事件对象，用于返回变化类型、应用身份标识和权限名。
   * - **[PermissionRequestResult]{@link PermissionRequestResult}：** 权限申请结果对象，用于返回权限申请后的权限名列表、授权结果和弹窗展示结果。
   * - **[Context]{@link Context}：** 上下文对象，用于发起权限申请或打开权限设置弹窗。
   *
   * ###### 核心类
   *
   * - **[AtManager]{@link abilityAccessCtrl.AtManager}：** 程序访问控制管理类，提供权限校验、权限弹窗申请、设置页授权引导和权限状态监听等能力。
   *
   * ![image_abilityAccessCtrl](docroot://reference/apis-ability-kit/figures/abilityAccessCtrl.png)
   *
   * @syscap SystemCapability.Security.AccessToken
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamiconly
   */
  interface ToolAuthResult {
    /**
     * 授权结果字符串列表。
     *
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamiconly
     */
    authResults: Array<string>;
  }
}
export { Permissions };
/**
 * 权限请求结果对象，包含申请的权限名列表、每个权限的授权结果、弹窗展示结果及失败原因等信息。
 *
 * @syscap SystemCapability.Security.AccessToken
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 * @since 23 static
 */
export type PermissionRequestResult = _PermissionRequestResult;
/**
 * 提供Ability或Application的上下文，可用于访问应用程序的资源。
 *
 * @syscap SystemCapability.Security.AccessToken
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 * @since 23 static
 */
export type Context = _Context;

export default abilityAccessCtrl;