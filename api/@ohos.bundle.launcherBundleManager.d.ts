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
 * The module providers APIs for launcher applications (applications with icons on the home screen) to obtain the
 * [launcher ability information]{@link ./bundleManager/LauncherAbilityInfo:LauncherAbilityInfo}.
 *
 * @syscap SystemCapability.BundleManager.BundleFramework.Launcher
 * @since 18 dynamic
 * @since 23 static
 */
declare namespace launcherBundleManager {
  /**
   * Obtains the [launcher ability information]{@link ./bundleManager/LauncherAbilityInfo:LauncherAbilityInfo} based on
   * the given bundle name and user ID. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { string } bundleName - Bundle name.
   * @param { int } userId - User ID, which can be obtained by calling
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback<int>)}
   *     .
   * @param { AsyncCallback<Array<LauncherAbilityInfo>> } callback - [Callback]{@link @ohos.base:AsyncCallback} used to
   *     return the result. If the operation is successful, **err** is **null**, and **data** is the array of
   *     [LauncherAbilityInfo]{@link ./bundleManager/LauncherAbilityInfo:LauncherAbilityInfo} objects obtained.
   *     Otherwise, **err** is an error object.
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
   * Obtains the [launcher ability information]{@link ./bundleManager/LauncherAbilityInfo:LauncherAbilityInfo} based on
   * the given bundle name and user ID. This API uses a promise to return the result.
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { string } bundleName - Bundle name.
   * @param { int } userId - User ID, which can be obtained by calling
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback<int>)}
   *     .
   * @returns { Promise<Array<LauncherAbilityInfo>> } Promise used to return the array of
   *     [LauncherAbilityInfo]{@link ./bundleManager/LauncherAbilityInfo:LauncherAbilityInfo} objects obtained.
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
   * Obtains the [launcher ability information]{@link ./bundleManager/LauncherAbilityInfo:LauncherAbilityInfo} based on
   * the given bundle name and user ID.
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { string } bundleName - Bundle name.
   * @param { int } userId - User ID, which can be obtained by calling
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback<int>)}
   *     .
   * @returns { Array<LauncherAbilityInfo> } Array of the
   *     [LauncherAbilityInfo]{@link ./bundleManager/LauncherAbilityInfo:LauncherAbilityInfo} objects obtained.
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
   * Obtains the [launcher ability information]{@link ./bundleManager/LauncherAbilityInfo:LauncherAbilityInfo} of all
   * applications based on the given user ID. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { int } userId - User ID, which can be obtained by calling
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback<int>)}
   *     .
   * @param { AsyncCallback<Array<LauncherAbilityInfo>> } callback - [Callback]{@link @ohos.base:AsyncCallback} used to
   *     return the result. If the operation is successful, **err** is **null**, and **data** is the array of
   *     [LauncherAbilityInfo]{@link ./bundleManager/LauncherAbilityInfo:LauncherAbilityInfo} objects obtained.
   *     Otherwise, **err** is an error object.
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
   * Obtains the [launcher ability information]{@link ./bundleManager/LauncherAbilityInfo:LauncherAbilityInfo} of all
   * applications based on the given user ID. This API uses a promise to return the result.
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { int } userId - User ID, which can be obtained by calling
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback<int>)}
   *     .
   * @returns { Promise<Array<LauncherAbilityInfo>> } Promise used to return the array of
   *     [LauncherAbilityInfo]{@link ./bundleManager/LauncherAbilityInfo:LauncherAbilityInfo} objects obtained.
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
   * Obtains the [shortcut information]{@link ./bundleManager/ShortcutInfo} of the current user based on the given
   * bundle name of a main application. To obtain shortcut information about an application clone, use
   * [getShortcutInfoByAppIndex]{@link launcherBundleManager.getShortcutInfoByAppIndex}. This API uses an asynchronous
   * callback to return the result.
   *
   * No permission is required for obtaining the caller's own information.
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED or ohos.permission.GET_BUNDLE_INFO
   * @param { string } bundleName - Bundle name.
   * @param { AsyncCallback<Array<ShortcutInfo>> } callback - [Callback]{@link @ohos.base:AsyncCallback} used to return
   *     the result. If the operation is successful, **err** is **null**, and **data** is the array of
   *     [ShortcutInfo]{@link ./bundleManager/ShortcutInfo} objects obtained. Otherwise, **err** is an error object.
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
   * Obtains the [shortcut information]{@link ./bundleManager/ShortcutInfo} of the current user based on the given
   * bundle name of a main application. To obtain shortcut information about an application clone, use
   * [getShortcutInfoByAppIndex]{@link launcherBundleManager.getShortcutInfoByAppIndex}. This API uses a promise to
   * return the result.
   *
   * No permission is required for obtaining the caller's own information.
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED or ohos.permission.GET_BUNDLE_INFO
   * @param { string } bundleName - Bundle name.
   * @returns { Promise<Array<ShortcutInfo>> } Promise used to return the array of
   *     [ShortcutInfo]{@link ./bundleManager/ShortcutInfo} objects obtained.
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
   * Obtains the [shortcut information]{@link ./bundleManager/ShortcutInfo} of the current user based on the given
   * bundle name of a main application. To obtain shortcut information about an application clone, use
   * [getShortcutInfoByAppIndex]{@link launcherBundleManager.getShortcutInfoByAppIndex}.
   *
   * No permission is required for obtaining the caller's own information.
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED or ohos.permission.GET_BUNDLE_INFO
   * @param { string } bundleName - Bundle name.
   * @returns { Array<ShortcutInfo> } Array of the [ShortcutInfo]{@link ./bundleManager/ShortcutInfo} objects obtained.
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
   * Obtains the [shortcut information]{@link ./bundleManager/ShortcutInfo} of the specified user based on the given
   * bundle name of a main application. To obtain shortcut information about an application clone, use
   * [getShortcutInfoByAppIndex]{@link launcherBundleManager.getShortcutInfoByAppIndex}.
   *
   * No permission is required for obtaining the caller's own information.
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED or ohos.permission.GET_BUNDLE_INFO
   * @param { string } bundleName - Bundle name.
   * @param { int } userId - User ID, which can be obtained by calling
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback<int>)}
   *     .
   * @returns { Array<ShortcutInfo> } Array of the [ShortcutInfo]{@link ./bundleManager/ShortcutInfo} objects obtained.
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
   * Obtains the [shortcut information]{@link ./bundleManager/ShortcutInfo} of the current user based on the index of an
   * application clone.
   *
   * No permission is required for obtaining the caller's own information.
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { string } bundleName - Bundle name.
   * @param { int } appIndex - Index of the application clone.
   * @returns { Array<ShortcutInfo> } Array of the [ShortcutInfo]{@link ./bundleManager/ShortcutInfo} objects obtained.
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
   * Starts an ability based on the specified [shortcut information]{@link ./bundleManager/ShortcutInfo}. This API uses
   * a promise to return the result.
   *
   * @permission ohos.permission.START_SHORTCUT
   * @param { ShortcutInfo } shortcutInfo - Shortcut information of the application.
   * @param { StartOptions } [options] - Startup parameters, which are used to specify the window mode and device ID for
   *     switching the mission to the foreground.
   * @returns { Promise<void> } Promise that returns no value.
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
   * Starts an ability based on the specified shortcut information, and carries the reason for the shortcut launch. This
   * API uses a promise to return the result.
   *
   * The launched ability can obtain the launch reason through the **launchReasonMessage** field of
   * [LaunchParam]{@link @ohos.app.ability.AbilityConstant:AbilityConstant.LaunchParam} and handle service logic
   * accordingly.
   *
   * @permission ohos.permission.START_SHORTCUT and ohos.permission.SET_LAUNCH_REASON_MESSAGE
   * @param { ShortcutInfo } shortcutInfo - Shortcut information of the application.
   * @param { string } startReason - Reason for launching the shortcut. The value can be
   *     [AbilityConstant.REASON_MESSAGE_DESKTOP_SHORTCUT](docroot://reference/apis-ability-kit/js-apis-app-ability-abilityConstant.md#constants)
   *     , indicating a home screen shortcut launch.
   * @param { StartOptions } [options] - Parameters used to specify the window mode of the target ability.
   * @returns { Promise<void> } Promise that returns no value.
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
   * Defines the information about the launcher ability.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Launcher
   * @since 18 dynamic
   * @since 23 static
   */
  export type LauncherAbilityInfo = _LauncherAbilityInfo;

  /**
   * Defines the shortcut information defined in the
   * [module.json5](docroot://quick-start/module-configuration-file.md#shortcuts) file of the application.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Launcher
   * @systemapi [since 9 - 19]
   * @publicapi [since 20]
   * @since 20 dynamic
   * @since 23 static
   */
  export type ShortcutInfo = _ShortcutInfo;
  /**
   * Defines the target [wants](docroot://quick-start/module-configuration-file.md#wants) defined in the shortcut
   * configuration.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Launcher
   * @systemapi [since 9 - 19]
   * @publicapi [since 20]
   * @since 20 dynamic
   * @since 23 static
   */
  export type ShortcutWant = _ShortcutWant;
  /**
   * Defines the custom data in the shortcut configuration.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Launcher
   * @systemapi [since 12 - 19]
   * @publicapi [since 20]
   * @since 20 dynamic
   * @since 23 static
   */
  export type ParameterItem = _ParameterItem;
}

/*** if arkts dynamic */
import AbilityConstant from './@ohos.app.ability.AbilityConstant';
/*** endif */

export default launcherBundleManager;