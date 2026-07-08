/*
 * Copyright (c) 2022 Huawei Device Co., Ltd.
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
 * @kit AbilityKit
 */

import { AsyncCallback } from './@ohos.base';
import { LauncherAbilityInfo as _LauncherAbilityInfo } from './bundleManager/LauncherAbilityInfo';
import { ShortcutInfo as _ShortcutInfo, ShortcutWant as _ShortcutWant, ParameterItem as _ParameterItem } from './bundleManager/ShortcutInfo';
import StartOptions from './@ohos.app.ability.StartOptions';

/**
 * 本模块支持launcher应用（桌面有图标的应用）所需的查询能力，支持
 * [LauncherAbilityInfo]{@link ./bundleManager/LauncherAbilityInfo:LauncherAbilityInfo}信息的查询。
 *
 * @syscap SystemCapability.BundleManager.BundleFramework.Launcher
 * @since 9 dynamic
 * @since 23 static
 */
declare namespace launcherBundleManager {
  /**
   * 查询指定bundleName及用户的[LauncherAbilityInfo]{@link ./bundleManager/LauncherAbilityInfo:LauncherAbilityInfo}。使用callback异步
   * 回调。
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { string } bundleName - 应用Bundle名称。
   * @param { int } userId - 被查询的用户ID，可以通过
   *     [getOsAccountLocalId接口]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback<int>)}
   *     获取。
   * @param { AsyncCallback<Array<LauncherAbilityInfo>> } callback - [回调函数]{@link @ohos.base:AsyncCallback}。当函数调用成功，err为
   *     undefined，data为bundle包含的[LauncherAbilityInfo]{@link ./bundleManager/LauncherAbilityInfo:LauncherAbilityInfo}信息。
   *     否则为错误对象。
   * @throws { BusinessError } 201 - Verify permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not support.
   * @throws { BusinessError } 17700001 - The specified bundle name is not found.
   * @throws { BusinessError } 17700004 - The specified user ID is not found.
   * @syscap SystemCapability.BundleManager.BundleFramework.Launcher
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function getLauncherAbilityInfo(bundleName: string, userId: int, callback: AsyncCallback<Array<LauncherAbilityInfo>>) : void;

  /**
   * 查询指定bundleName及用户的[LauncherAbilityInfo]{@link ./bundleManager/LauncherAbilityInfo:LauncherAbilityInfo}。使用Promise异步回
   * 调。
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { string } bundleName - 应用Bundle名称。
   * @param { int } userId - 被查询的用户ID，可以通过
   *     [getOsAccountLocalId接口]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback<int>)}
   *     获取。
   * @returns { Promise<Array<LauncherAbilityInfo>> } Promise对象。返回bundle包含的
   *     [LauncherAbilityInfo]{@link ./bundleManager/LauncherAbilityInfo:LauncherAbilityInfo}信息。
   * @throws { BusinessError } 201 - Verify permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not support.
   * @throws { BusinessError } 17700001 - The specified bundle name is not found.
   * @throws { BusinessError } 17700004 - The specified user ID is not found.
   * @syscap SystemCapability.BundleManager.BundleFramework.Launcher
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function getLauncherAbilityInfo(bundleName: string, userId: int) : Promise<Array<LauncherAbilityInfo>>;

  /**
   * 查询指定bundleName及用户的[LauncherAbilityInfo]{@link ./bundleManager/LauncherAbilityInfo:LauncherAbilityInfo}。
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { string } bundleName - 应用Bundle名称。
   * @param { int } userId - 被查询的用户ID，可以通过
   *     [getOsAccountLocalId接口]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback<int>)}
   *     获取。
   * @returns { Array<LauncherAbilityInfo> } Array形式返回bundle包含的
   *     [LauncherAbilityInfo]{@link ./bundleManager/LauncherAbilityInfo:LauncherAbilityInfo}信息。
   * @throws { BusinessError } 201 - Verify permission denied.
   * @throws { BusinessError } 801 - Capability not support.
   * @throws { BusinessError } 17700001 - The specified bundle name is not found.
   * @throws { BusinessError } 17700004 - The specified user ID is not found.
   * @syscap SystemCapability.BundleManager.BundleFramework.Launcher
   * @since 18 dynamic
   * @since 23 static
   */
  function getLauncherAbilityInfoSync(bundleName: string, userId: int): Array<LauncherAbilityInfo>;

  /**
   * 查询指定用户下所有应用的[LauncherAbilityInfo]{@link ./bundleManager/LauncherAbilityInfo:LauncherAbilityInfo}。使用callback异步回调。
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { int } userId - 被查询的用户ID，可以通过
   *     [getOsAccountLocalId接口]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback<int>)}
   *     获取。
   * @param { AsyncCallback<Array<LauncherAbilityInfo>> } callback - [回调函数]{@link @ohos.base:AsyncCallback}。当函数调用成功，err为
   *     undefined，data为指定用户下所有应用的[LauncherAbilityInfo]{@link ./bundleManager/LauncherAbilityInfo:LauncherAbilityInfo}信息
   *     。否则为错误对象。
   * @throws { BusinessError } 201 - Verify permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not support.
   * @throws { BusinessError } 17700004 - The specified user ID is not found.
   * @syscap SystemCapability.BundleManager.BundleFramework.Launcher
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function getAllLauncherAbilityInfo(userId: int, callback: AsyncCallback<Array<LauncherAbilityInfo>>) : void;

  /**
   * 查询指定用户下所有应用的[LauncherAbilityInfo]{@link ./bundleManager/LauncherAbilityInfo:LauncherAbilityInfo}。使用Promise异步回调。
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { int } userId - 被查询的用户ID，可以通过
   *     [getOsAccountLocalId接口]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback<int>)}
   *     获取。
   * @returns { Promise<Array<LauncherAbilityInfo>> } Promise对象。返回指定用户下所有应用的
   *     [LauncherAbilityInfo]{@link ./bundleManager/LauncherAbilityInfo:LauncherAbilityInfo}。
   * @throws { BusinessError } 201 - Verify permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not support.
   * @throws { BusinessError } 17700004 - The specified user ID is not found.
   * @syscap SystemCapability.BundleManager.BundleFramework.Launcher
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function getAllLauncherAbilityInfo(userId: int) : Promise<Array<LauncherAbilityInfo>>;

  /**
   * 查询当前用户下指定应用的快捷方式信息[ShortcutInfo]{@link ./bundleManager/ShortcutInfo}，只支持查询主应用的ShortcutInfo，查询分身应用请使用
   * [getShortcutInfoByAppIndex]{@link launcherBundleManager.getShortcutInfoByAppIndex}。使用callback异步回调。
   * 
   * 获取调用方自身的信息时不需要权限。
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED or ohos.permission.GET_BUNDLE_INFO
   * @param { string } bundleName - 应用Bundle名称。
   * @param { AsyncCallback<Array<ShortcutInfo>> } callback - [回调函数]{@link @ohos.base:AsyncCallback}。当函数调用成功，err为
   *     undefined，data为当前用户下指定应用的[ShortcutInfo]{@link ./bundleManager/ShortcutInfo}信息。否则为错误对象。
   * @throws { BusinessError } 201 - Verify permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not support.
   * @throws { BusinessError } 17700001 - The specified bundle name is not found.
   * @throws { BusinessError } 17700026 - The specified bundle is disabled.
   * @syscap SystemCapability.BundleManager.BundleFramework.Launcher
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function getShortcutInfo(bundleName :string, callback: AsyncCallback<Array<ShortcutInfo>>) : void;

  /**
   * 查询当前用户下指定应用的快捷方式信息[ShortcutInfo]{@link ./bundleManager/ShortcutInfo}，只支持查询主应用的ShortcutInfo，查询分身应用请使用
   * [getShortcutInfoByAppIndex]{@link launcherBundleManager.getShortcutInfoByAppIndex}。使用Promise异步回调。
   * 
   * 获取调用方自身的信息时不需要权限。
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED or ohos.permission.GET_BUNDLE_INFO
   * @param { string } bundleName - 应用Bundle名称。
   * @returns { Promise<Array<ShortcutInfo>> } Promise对象。返回当前用户下指定应用的[ShortcutInfo]{@link ./bundleManager/ShortcutInfo}。
   * @throws { BusinessError } 201 - Verify permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not support.
   * @throws { BusinessError } 17700001 - The specified bundle name is not found.
   * @throws { BusinessError } 17700026 - The specified bundle is disabled.
   * @syscap SystemCapability.BundleManager.BundleFramework.Launcher
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function getShortcutInfo(bundleName : string) : Promise<Array<ShortcutInfo>>;

  /**
   * 查询当前用户下指定应用的快捷方式信息[ShortcutInfo]{@link ./bundleManager/ShortcutInfo}，只支持查询主应用的ShortcutInfo，查询分身应用请使用
   * [getShortcutInfoByAppIndex]{@link launcherBundleManager.getShortcutInfoByAppIndex}。
   * 
   * 获取调用方自身的信息时不需要权限。
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED or ohos.permission.GET_BUNDLE_INFO
   * @param { string } bundleName - 应用Bundle名称。
   * @returns { Array<ShortcutInfo> } Array形式返回当前用户下指定应用的[ShortcutInfo]{@link ./bundleManager/ShortcutInfo}。
   * @throws { BusinessError } 201 - Verify permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not support.
   * @throws { BusinessError } 17700001 - The specified bundle name is not found.
   * @throws { BusinessError } 17700026 - The specified bundle is disabled.
   * @syscap SystemCapability.BundleManager.BundleFramework.Launcher
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  function getShortcutInfoSync(bundleName: string): Array<ShortcutInfo>;

  /**
   * 查询指定用户下指定应用的快捷方式信息[ShortcutInfo]{@link ./bundleManager/ShortcutInfo}，只支持查询主应用的ShortcutInfo，查询分身应用请使用
   * [getShortcutInfoByAppIndex]{@link launcherBundleManager.getShortcutInfoByAppIndex}。
   * 
   * 获取调用方自身的信息时不需要权限。
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED or ohos.permission.GET_BUNDLE_INFO
   * @param { string } bundleName - 应用Bundle名称。
   * @param { int } userId - 表示用户ID，可以通过
   *     [getOsAccountLocalId接口]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback<int>)}
   *     获取。
   * @returns { Array<ShortcutInfo> } Array形式返回指定用户下指定应用的[ShortcutInfo]{@link ./bundleManager/ShortcutInfo}。
   * @throws { BusinessError } 201 - Verify permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not support.
   * @throws { BusinessError } 17700001 - The specified bundle name is not found.
   * @throws { BusinessError } 17700004 - The specified user ID is not found.
   * @throws { BusinessError } 17700026 - The specified bundle is disabled.
   * @syscap SystemCapability.BundleManager.BundleFramework.Launcher
   * @systemapi
   * @since 13 dynamic
   * @since 23 static
   */
  function getShortcutInfoSync(bundleName: string, userId: int): Array<ShortcutInfo>;

  /**
   * 查询当前用户下指定分身应用的快捷方式信息[ShortcutInfo]{@link ./bundleManager/ShortcutInfo}。
   * 
   * 调用方获取自己的信息时不需要权限。
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { string } bundleName - 应用Bundle名称。
   * @param { int } appIndex - 分身应用的索引。
   * @returns { Array<ShortcutInfo> } Array形式返回当前用户下指定分身应用的[ShortcutInfo]{@link ./bundleManager/ShortcutInfo}。
   * @throws { BusinessError } 201 - Verify permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 801 - Capability not support.
   * @throws { BusinessError } 17700001 - The specified bundle name is not found.
   * @throws { BusinessError } 17700061 - The specified app index is invalid.
   * @syscap SystemCapability.BundleManager.BundleFramework.Launcher
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  function getShortcutInfoByAppIndex(bundleName: string, appIndex: int): Array<ShortcutInfo>;

  /**
   * 拉起指定[ShortcutInfo]{@link ./bundleManager/ShortcutInfo}中的ability。使用Promise异步回调。
   *
   * @permission ohos.permission.START_SHORTCUT
   * @param { ShortcutInfo } shortcutInfo - 应用的快捷方式信息。
   * @param { StartOptions } [options] - 启动参数选项，用于指定任务切到前台时的窗口模式，设备ID等。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 201 - Verify permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not support.
   * @throws { BusinessError } 17700065 - The specified shortcut want in shortcut info is not supported to be started.
   * @syscap SystemCapability.BundleManager.BundleFramework.Launcher
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  function startShortcut(shortcutInfo: ShortcutInfo, options?: StartOptions): Promise<void>;

  /**
   * 根据指定的快捷方式信息，拉起对应的Ability，并携带快捷方式的启动原因。使用Promise异步回调。
   * 
   * 被拉起方可以通过[LaunchParam]{@link @ohos.app.ability.AbilityConstant:AbilityConstant.LaunchParam}的launchReasonMessage字段获取到
   * 启动原因，并根据启动原因进行业务逻辑处理。
   *
   * @permission ohos.permission.START_SHORTCUT and ohos.permission.SET_LAUNCH_REASON_MESSAGE
   * @param { ShortcutInfo } shortcutInfo - 应用的快捷方式信息。
   * @param { string } startReason - 快捷方式的启动原因，取值包括：
   *     [AbilityConstant.REASON_MESSAGE_DESKTOP_SHORTCUT](docroot://reference/apis-ability-kit/js-apis-app-ability-abilityConstant.md#常量)
   *     ，表示桌面快捷方式启动。
   * @param { StartOptions } [options] - 启动Ability所携带的参数，用于指定目标Ability的窗口模式。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 201 - Verify permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 801 - Capability not support.
   * @throws { BusinessError } 17700065 - The specified shortcut want in shortcut info is not supported to be started.
   * @syscap SystemCapability.BundleManager.BundleFramework.Launcher
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  function startShortcutWithReason(shortcutInfo: ShortcutInfo, startReason: string, options?: StartOptions): Promise<void>;

  /**
   * LauncherAbilityInfo信息。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Launcher
   * @since 18 dynamic
   * @since 23 static
   */
  export type LauncherAbilityInfo = _LauncherAbilityInfo;

  /**
   * 应用[module.json5配置文件](docroot://quick-start/module-configuration-file.md#shortcuts标签)中定义的快捷方式信息。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Launcher
   * @systemapi [since 9 - 19]
   * @publicapi [since 20]
   * @since 9 dynamic
   * @since 23 static
   */
  export type ShortcutInfo = _ShortcutInfo;
  /**
   * 快捷方式内定义的目标[wants](docroot://quick-start/module-configuration-file.md#wants标签)信息集合。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Launcher
   * @systemapi [since 9 - 19]
   * @publicapi [since 20]
   * @since 9 dynamic
   * @since 23 static
   */
  export type ShortcutWant = _ShortcutWant;
  /**
   * 快捷方式配置信息中的自定义数据。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Launcher
   * @systemapi [since 12 - 19]
   * @publicapi [since 20]
   * @since 12 dynamic
   * @since 23 static
   */
  export type ParameterItem = _ParameterItem;
}

/*** if arkts dynamic */
import AbilityConstant from './@ohos.app.ability.AbilityConstant';
/*** endif */

export default launcherBundleManager;