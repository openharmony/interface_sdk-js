/*
 * Copyright (c) 2024 Huawei Device Co., Ltd.
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

import { ShortcutInfo as _ShortcutInfo, ShortcutWant as _ShortcutWant, ParameterItem as _ParameterItem } from './bundleManager/ShortcutInfo';

/**
 * 本模块提供应用对于[快捷方式](docroot://quick-start/typical-scenario-configuration.md)的管理能力，包括设置快捷方式是否显示等。
 *
 * @syscap SystemCapability.BundleManager.BundleFramework.Launcher
 * @systemapi [since 12 - 19]
 * @publicapi [since 20]
 * @since 12 dynamic
 * @since 23 static
 */
declare namespace shortcutManager {
  /**
   * 增加指定用户的快捷方式信息。使用Promise异步回调。
   *
   * @permission ohos.permission.MANAGE_SHORTCUTS
   * @param { ShortcutInfo } shortcutInfo - 快捷方式信息。
   * @param { int } userId - 用户id。可以通过
   *     [getOsAccountLocalId接口]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback<int>)}
   *     获取。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 201 - Verify permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types.
   * @throws { BusinessError } 17700001 - The specified bundle name is not found.
   * @throws { BusinessError } 17700004 - The specified user ID is not found.
   * @throws { BusinessError } 17700026 - The specified bundle is disabled.
   * @throws { BusinessError } 17700061 - The specified app index is invalid.
   * @throws { BusinessError } 17700070 - The specified shortcut id is illegal.
   * @syscap SystemCapability.BundleManager.BundleFramework.Launcher
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  function addDesktopShortcutInfo(shortcutInfo: ShortcutInfo, userId: int): Promise<void>;

  /**
   * 删除指定用户的快捷方式信息。使用Promise异步回调。
   *
   * @permission ohos.permission.MANAGE_SHORTCUTS
   * @param { ShortcutInfo } shortcutInfo - 快捷方式信息。
   * @param { int } userId - 用户id。可以通过
   *     [getOsAccountLocalId接口]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback<int>)}
   *     获取。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 201 - Verify permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types.
   * @throws { BusinessError } 17700004 - The specified user ID is not found.
   * @syscap SystemCapability.BundleManager.BundleFramework.Launcher
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  function deleteDesktopShortcutInfo(shortcutInfo: ShortcutInfo, userId: int): Promise<void>;

  /**
   * 查询指定用户的所有快捷方式信息。
   *
   * @permission ohos.permission.MANAGE_SHORTCUTS
   * @param { int } userId - 被查询的用户id。可以通过
   *     [getOsAccountLocalId接口]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback<int>)}
   *     获取。
   * @returns { Promise<Array<ShortcutInfo>> } Promise对象，返回应用配置文件中定义的快捷方式信息。
   * @throws { BusinessError } 201 - Verify permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types.
   * @throws { BusinessError } 17700004 - The specified user ID is not found.
   * @syscap SystemCapability.BundleManager.BundleFramework.Launcher
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  function getAllDesktopShortcutInfo(userId: int): Promise<Array<ShortcutInfo>>;

  /**
   * 查询当前应用[配置文件](docroot://quick-start/module-configuration-file.md#shortcuts标签)中定义的所有快捷方式信息。使用Promise异步回调。
   *
   * @returns { Promise<Array<ShortcutInfo>> } Promise对象，返回应用配置文件中定义的所有快捷方式信息。
   * @syscap SystemCapability.BundleManager.BundleFramework.Launcher
   * @since 20 dynamic
   * @since 23 static
   */
  function getAllShortcutInfoForSelf(): Promise<Array<ShortcutInfo>>;

  /**
   * 设置当前应用指定的快捷方式是否显示。使用Promise异步回调。
   *
   * @param { string } id - 快捷方式的ID，通过[module.json5配置文件](docroot://quick-start/module-configuration-file.md)中的shortcuts标
   *     签下的shortcutId字段获取，取值为长度不超过63字节的字符串。
   * @param { boolean } visible - 快捷方式是否显示。true：快捷方式显示；false：快捷方式不显示。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 17700070 - The specified shortcut id is not exist.
   * @syscap SystemCapability.BundleManager.BundleFramework.Launcher
   * @since 20 dynamic
   * @since 23 static
   */
  function setShortcutVisibleForSelf(id: string, visible: boolean): Promise<void>;

  /**
   * 设置启用或禁用传入的静态快捷方式。使用Promise异步回调。
   *
   * @permission ohos.permission.MANAGE_SHORTCUTS
   * @param { Array<ShortcutInfo> } shortcutsInfo - 待启用或禁用的静态快捷方式。<br>**说明：**<br>本接口不区分主应用和分身应用，且仅对静态快捷方式生效，所以
   *     ShortcutInfo中的appIndex和sourceType设置不生效。
   * @param { boolean } isEnabled - 快捷方式是否启用。true：快捷方式启用；false：快捷方式禁用。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied. A non-system application is not allowed to call a system API.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 17700001 - The specified bundle is not found.
   * @throws { BusinessError } 17700070 - The specified shortcut id is illegal.
   * @syscap SystemCapability.BundleManager.BundleFramework.Launcher
   * @systemapi
   * @since 23 dynamic&static
   */
  function setShortcutsEnabled(shortcutsInfo: Array<ShortcutInfo>, isEnabled: boolean): Promise<void>;

  /**
   * 添加指定用户的动态快捷方式。
   *
   * @permission ohos.permission.MANAGE_SHORTCUTS or
   *     (ohos.permission.MANAGE_SHORTCUTS and ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS)
   * @param { Array<ShortcutInfo> } shortcutInfo - 待添加的动态快捷方式信息。通过本接口提交时，会做如下校验：</br> 1.ShortcutInfo中的sourceType字段会被设置为2
   *     。</br> 2.ShortcutInfo中的moduleName字段在对应的应用中不存在时，会抛出17700002错误码。</br> 3.ShortcutInfo中的hostAbility字段被设置为非空的字符串时，会校
   *     验对应的ability是否存在，不存在时，会抛出17700003错误码。
   * @param { int } userId - 动态快捷方式所属的用户id。可以通过
   *     [getOsAccountLocalId接口]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback<int>)}
   *     获取。默认值：调用方所在用户，取值范围：大于等于0。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied. A non-system application is not allowed to call a system API.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 17700001 - The specified bundle is not found.
   * @throws { BusinessError } 17700002 - The specified module is not found.
   * @throws { BusinessError } 17700003 - The specified ability is not found.
   * @throws { BusinessError } 17700004 - The specified user id is not found.
   * @throws { BusinessError } 17700026 - The specified bundle is disabled.
   * @throws { BusinessError } 17700061 - The specified app index is invalid.
   * @throws { BusinessError } 17700070 - The specified shortcut id is illegal.
   * @throws { BusinessError } 18100001 - A combination of bundleName and appIndex in the shutcutInfo list is
   *     different from the others.
   * @syscap SystemCapability.BundleManager.BundleFramework.Launcher
   * @systemapi
   * @since 23 dynamic&static
   */
  function addDynamicShortcutInfos(shortcutInfo: Array<ShortcutInfo>, userId: int): Promise<void>;

  /**
   * 删除指定的动态快捷方式。
   *
   * @permission ohos.permission.MANAGE_SHORTCUTS or
   *     (ohos.permission.MANAGE_SHORTCUTS and ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS)
   * @param { string } bundleName - 要删除的动态快捷方式所属的包名。
   * @param { int } appIndex - 要删除的动态快捷方式所属的分身索引。支持取值为：1、2、3、4、5。
   * @param { int } userId - 要删除的动态快捷方式所属的用户id。可以通过
   *     [getOsAccountLocalId接口]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback<int>)}
   *     获取。默认值：调用方所在用户，取值范围：大于等于0。
   * @param { Array<string> } [ids] - 要删除的动态快捷方式id列表。缺省或传入列表为空时，表示删除所有符合条件的动态快捷方式。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied. A non-system application is not allowed to call a system API.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 17700001 - The specified bundle is not found.
   * @throws { BusinessError } 17700004 - The specified user id is not found.
   * @throws { BusinessError } 17700026 - The specified bundle is disabled.
   * @throws { BusinessError } 17700061 - The specified app index is invalid.
   * @throws { BusinessError } 17700070 - The specified shortcut id is illegal.
   * @syscap SystemCapability.BundleManager.BundleFramework.Launcher
   * @systemapi
   * @since 23 dynamic&static
   */
  function deleteDynamicShortcutInfos(bundleName: string, appIndex: int, userId: int, ids?: Array<string>): Promise<void>;

  /**
   * 查询指定用户下指定UIAbility的快捷方式信息。
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED or
   *     (ohos.permission.GET_BUNDLE_INFO_PRIVILEGED and ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS)
   * @param { string } bundleName - 表示应用程序的包名。
   * @param { string } moduleName - 表示模块的名称。
   * @param { string } abilityName - 表示UIAbility组件的名称。
   * @param { int } [userId] - 表示用户ID，可以通过
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback<int>)}
   *     获取。<br/>默认值：调用方所在用户。<br/>取值范围：大于等于0。
   * @param { int } [appIndex] - 表示应用索引。取值范围0~5的整数，取值为0表示主应用，取值1~5表示分身应用的索引。<br/>默认值：0
   * @returns { Array<ShortcutInfo> } Array形式返回指定用户下指定UIAbility的
   *     [ShortcutInfo]{@link ./bundleManager/ShortcutInfo:ShortcutInfo}。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 17700001 - The specified bundle is not found.
   * @throws { BusinessError } 17700002 - The specified module is not found.
   * @throws { BusinessError } 17700003 - The specified ability is not found.
   * @throws { BusinessError } 17700004 - The specified user id is not found.
   * @throws { BusinessError } 17700026 - The specified bundle is disabled.
   * @throws { BusinessError } 17700061 - The specified app index is invalid.
   * @syscap SystemCapability.BundleManager.BundleFramework.Launcher
   * @systemapi
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  function getShortcutInfoByAbility(bundleName: string, moduleName: string, abilityName: string, userId?: int, appIndex?: int): Array<ShortcutInfo>;

  /**
   * 查询当前设备是否支持快捷方式。
   *
   * @returns { boolean } 表示当前设备是否支持快捷方式。<br/>返回值为true表示当前设备支持快捷方式；返回值为false表示当前设备不支持快捷方式。
   * @syscap SystemCapability.BundleManager.BundleFramework.Launcher
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   *
   */
  function isShortcutSupported(): boolean;

  /**
   * 应用[module.json5配置文件](docroot://quick-start/module-configuration-file.md#shortcuts标签)中定义的快捷方式信息。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Launcher
   * @systemapi [since 12 - 19]
   * @publicapi [since 20]
   * @since 12 dynamic
   * @since 23 static
   */
  export type ShortcutInfo = _ShortcutInfo;
  /**
   * 快捷方式内定义的目标[wants](docroot://quick-start/module-configuration-file.md#wants标签)信息集合。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Launcher
   * @systemapi [since 12 - 19]
   * @publicapi [since 20]
   * @since 12 dynamic
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

export default shortcutManager;