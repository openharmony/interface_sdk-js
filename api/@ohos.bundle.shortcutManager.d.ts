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
 * The module provides APIs to manage [shortcuts](docroot://quick-start/typical-scenario-configuration.md), including
 * whether to display shortcuts.
 *
 * @syscap SystemCapability.BundleManager.BundleFramework.Launcher
 * @systemapi [since 12 - 19]
 * @publicapi [since 20]
 * @since 12 dynamic
 * @since 23 static
 */
declare namespace shortcutManager {
  /**
   * Adds a shortcut for the given user. This API uses a promise to return the result.
   *
   * @permission ohos.permission.MANAGE_SHORTCUTS
   * @param { ShortcutInfo } shortcutInfo - Shortcut information.
   * @param { int } userId - User ID, which can be obtained by calling
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback<int>)}
   *     .
   * @returns { Promise<void> } Promise that returns no value.
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
   * Deletes a shortcut for the given user. This API uses a promise to return the result.
   *
   * @permission ohos.permission.MANAGE_SHORTCUTS
   * @param { ShortcutInfo } shortcutInfo - Shortcut information.
   * @param { int } userId - User ID, which can be obtained by calling
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback<int>)}
   *     .
   * @returns { Promise<void> } Promise that returns no value.
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
   * Updates a shortcut for the given user. This API uses a promise to return the result.
   *
   * @permission ohos.permission.MANAGE_SHORTCUTS or
   *     (ohos.permission.MANAGE_SHORTCUTS and ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS)
   * @param { ShortcutInfo } shortcutInfo - Shortcut information.
   * @param { int } userId - User ID, which can be obtained by calling
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback<int>)}.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - Verify permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 17700001 - The specified bundle name is not found.
   * @throws { BusinessError } 17700004 - The specified user ID is not found.
   * @throws { BusinessError } 17700026 - The specified bundle is disabled.
   * @throws { BusinessError } 17700061 - The specified app index is invalid.
   * @throws { BusinessError } 18100002 - The specified shortcut to be updated is not found.
   * @syscap SystemCapability.BundleManager.BundleFramework.Launcher
   * @systemapi
   * @stagemodelonly
   * @since 26.1.0 dynamic&static
   */
  function updateDesktopShortcutInfo(shortcutInfo: ShortcutInfo, userId: int): Promise<void>;

  /**
   * Obtains the information about all shortcuts of the given user.
   *
   * @permission ohos.permission.MANAGE_SHORTCUTS
   * @param { int } userId - User ID, which can be obtained by calling
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback<int>)}
   *     .
   * @returns { Promise<Array<ShortcutInfo>> } Promise that returns the shortcut information defined in the application
   *     configuration file.
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
   * Obtains all the shortcut information defined in the
   * [configuration](docroot://quick-start/module-configuration-file.md#shortcuts) file of the current application. This
   * API uses a promise to return the result.
   *
   * @returns { Promise<Array<ShortcutInfo>> } Promise that returns all the shortcut information defined in the
   *     configuration file.
   * @syscap SystemCapability.BundleManager.BundleFramework.Launcher
   * @since 20 dynamic
   * @since 23 static
   */
  function getAllShortcutInfoForSelf(): Promise<Array<ShortcutInfo>>;

  /**
   * Sets whether to display the specified shortcut for the current application. This API uses a promise to return the
   * result.
   *
   * @param { string } id - Shortcut ID, which is the value of the **shortcutId** field under the **shortcuts** tag in
   *     the [module.json5](docroot://quick-start/module-configuration-file.md) file. The value is a string of up to 63
   *     bytes.
   * @param { boolean } visible - Whether to display the shortcut. **true** to display, **false** otherwise.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 17700070 - The specified shortcut id is not exist.
   * @syscap SystemCapability.BundleManager.BundleFramework.Launcher
   * @since 20 dynamic
   * @since 23 static
   */
  function setShortcutVisibleForSelf(id: string, visible: boolean): Promise<void>;

  /**
   * Enables or disables the specified static shortcuts. This API uses a promise to return the result.
   *
   * @permission ohos.permission.MANAGE_SHORTCUTS
   * @param { Array<ShortcutInfo> } shortcutsInfo - Array of static shortcuts.<br>**NOTE**<br>This API does not
   *     distinguish between the main application and the cloned application, and only takes effect for static
   *     shortcuts. Therefore, the **appIndex** and **sourceType** fields in **ShortcutInfo** do not take effect.
   * @param { boolean } isEnabled - Whether to enable the static shortcuts. **true** to enable, **false** otherwise.
   * @returns { Promise<void> } Promise that returns no value.
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
   * Adds dynamic shortcuts for the given user.
   *
   * @permission ohos.permission.MANAGE_SHORTCUTS or
   *     (ohos.permission.MANAGE_SHORTCUTS and ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS)
   * @param { Array<ShortcutInfo> } shortcutInfo - Information about the dynamic shortcuts. When the shortcut
   *     information is submitted through this API, the following validations are performed:<br> 1. The **sourceType**
   *     field in **ShortcutInfo** is set to **2**.<br> 2. If the **moduleName** field in **ShortcutInfo** does not
   *     exist in the corresponding application, error code 17700002 is thrown.<br> 3. If the **hostAbility** field in
   *     **ShortcutInfo** is set to a non-empty string, the system checks whether the corresponding ability exists. If
   *     it does not exist, error code 17700003 is thrown.
   * @param { int } userId - ID of the user to which the dynamic shortcuts belong. The user ID can be obtained by
   *     calling
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback<int>)}
   *     . The default value is the user ID of the caller. The value must be greater than or equal to 0.
   * @returns { Promise<void> } Promise that returns no value.
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
   * Deletes dynamic shortcuts.
   *
   * @permission ohos.permission.MANAGE_SHORTCUTS or
   *     (ohos.permission.MANAGE_SHORTCUTS and ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS)
   * @param { string } bundleName - Bundle name of the application to which the dynamic shortcuts belong.
   * @param { int } appIndex - Clone index of the application to which the dynamic shortcuts belong. The value can be 1,
   *     2, 3, 4, or 5.
   * @param { int } userId - ID of the user to which the dynamic shortcuts belong. The user ID can be obtained by
   *     calling
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback<int>)}
   *     . The default value is the user ID of the caller. The value must be greater than or equal to 0.
   * @param { Array<string> } [ids] - Array of IDs of the dynamic shortcuts to be deleted. If the default value is used
   *     or an empty array is passed, all dynamic shortcuts that meet the conditions are deleted.
   * @returns { Promise<void> } Promise that returns no value.
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
   * Obtains shortcut info by bundleName, moduleName, abilityName, userId and appIndex.
   * If you need to obtains shortcut info under the current user, ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * needs to be applied for.
   * If you need to obtains shortcut info under other users, ohos.permission.GET_BUNDLE_INFO_PRIVILEGED and
   * ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS need to be applied for.
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED or
   *     (ohos.permission.GET_BUNDLE_INFO_PRIVILEGED and ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS)
   * @param { string } bundleName - Indicates the bundle name.
   * @param { string } moduleName - Indicates the module name.
   * @param { string } abilityName - Indicates the ability name.
   * @param { int } [userId] - Indicates the user ID.
   * @param { int } [appIndex] - Indicates the index of clone app.
   * @returns { Array<ShortcutInfo> } An array of ShortcutInfo objects.
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
   * Checks whether the shortcut capability is supported.
   * @returns { boolean } Returns true if the shortcut capability is supported; returns false otherwise.
   * @syscap SystemCapability.BundleManager.BundleFramework.Launcher
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   *
   */
  function isShortcutSupported(): boolean;

  /**
   * Defines the shortcut information defined in the
   * [module.json5](docroot://quick-start/module-configuration-file.md#shortcuts) file of the application.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Launcher
   * @systemapi [since 12 - 19]
   * @publicapi [since 20]
   * @since 12 dynamic
   * @since 23 static
   */
  export type ShortcutInfo = _ShortcutInfo;
  /**
   * Defines the target [wants](docroot://quick-start/module-configuration-file.md#wants) defined in the shortcut
   * configuration.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Launcher
   * @systemapi [since 12 - 19]
   * @publicapi [since 20]
   * @since 12 dynamic
   * @since 23 static
   */
  export type ShortcutWant = _ShortcutWant;
  /**
   * Defines the custom data in the shortcut configuration.
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