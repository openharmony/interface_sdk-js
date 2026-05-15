/*
 * Copyright (c) 2021 Huawei Device Co., Ltd.
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
 * The module provides APIs for the Home Screen application.
 * 
 * > **NOTE**
 * >
 * > This module is deprecated since API version 9. You are advised to use 
 * > [launcherBundleManager]{@link @ohos.bundle.launcherBundleManager:launcherBundleManager} and 
 * > [bundleMonitor]{@link @ohos.bundle.bundleMonitor:bundleMonitor} instead.
 * >
 * > The APIs provided by this module are system APIs.
 *
 * @file
 * @kit AbilityKit
 */

import { AsyncCallback } from './@ohos.base';
import type { BundleStatusCallback as _BundleStatusCallback } from './bundle/bundleStatusCallback';
import { LauncherAbilityInfo } from './bundle/launcherAbilityInfo';
import { ShortcutInfo } from './bundle/shortcutInfo';

/**
 * The module provides APIs for the Home Screen application.
 *
 * > **NOTE**
 * >
 * > This module is deprecated since API version 9. You are advised to use
 * > [launcherBundleManager]{@link @ohos.bundle.launcherBundleManager:launcherBundleManager} and
 * > [bundleMonitor]{@link @ohos.bundle.bundleMonitor:bundleMonitor} instead.
 * >
 * > The APIs provided by this module are system APIs.
 *
 * @syscap SystemCapability.BundleManager.BundleFramework
 * @systemapi Hide this for inner system use
 * @since 8 dynamiconly
 * @deprecated since 9
 * @useinstead @ohos.bundle.launcherBundleManager:launcherBundleManager
 */
declare namespace innerBundleManager {
  /**
   * Obtains an array of the launcher ability information based on a given bundle name. This API uses an asynchronous
   * callback to return the result.
   *
   * > **NOTE**
   * >
   * > This API has been supported since API version 8 and deprecated since API version 9. You are advised to use
   * > [getLauncherAbilityInfo]{@link @ohos.bundle.launcherBundleManager:launcherBundleManager.getLauncherAbilityInfo(bundleName: string, userId: int, callback: AsyncCallback<Array<LauncherAbilityInfo>>)}
   * > instead.
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { string } bundleName - Bundle name.
   * @param { number } userId - User ID. The value must be greater than or equal to 0.
   * @param { AsyncCallback<Array<LauncherAbilityInfo>> } callback - Callback used to return an array of the launcher
   *     ability information.
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @systemapi Hide this for inner system use
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead @ohos.bundle.launcherBundleManager:launcherBundleManager.getLauncherAbilityInfo(bundleName: string, userId: int, callback: AsyncCallback<Array<LauncherAbilityInfo>>)
   */
  function getLauncherAbilityInfos(bundleName: string,
    userId: number, callback: AsyncCallback<Array<LauncherAbilityInfo>>): void;

  /**
   * Obtains an array of the launcher ability information based on a given bundle name. This API uses a promise to
   * return the result.
   *
   * > **NOTE**
   * >
   * > This API has been supported since API version 8 and deprecated since API version 9. You are advised to use
   * > [getLauncherAbilityInfo]{@link @ohos.bundle.launcherBundleManager:launcherBundleManager.getLauncherAbilityInfo(bundleName: string, userId: int, callback: AsyncCallback<Array<LauncherAbilityInfo>>)}
   * > instead.
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { string } bundleName - Bundle name.
   * @param { number } userId - User ID. The value must be greater than or equal to 0.
   * @returns { Promise<Array<LauncherAbilityInfo>> } Promise used to return an array of the launcher ability
   *     information.
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @systemapi Hide this for inner system use
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead @ohos.bundle.launcherBundleManager:launcherBundleManager.getLauncherAbilityInfo(bundleName: string, userId: int, callback: AsyncCallback<Array<LauncherAbilityInfo>>)
   */
  function getLauncherAbilityInfos(bundleName: string, userId: number): Promise<Array<LauncherAbilityInfo>>;

  /**
   * Registers a callback to receive bundle status changes. This API uses an asynchronous callback to return the result.
   *
   * > **NOTE**
   * >
   * > This API has been supported since API version 8 and deprecated since API version 9. You are advised to use
   * > [on]{@link @ohos.bundle.bundleMonitor:bundleMonitor.on(type: BundleChangedEvent, callback: Callback<BundleChangedInfo>)}
   * > instead.
   *
   * @permission ohos.permission.LISTEN_BUNDLE_CHANGE
   * @param { 'BundleStatusChange' } type - Event type. Only **BundleStatusChange** is supported.
   * @param { BundleStatusCallback } bundleStatusCallback - Callback to register.
   * @param { AsyncCallback<string> } callback - Callback used to return a successful result or error Callback to register.
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @systemapi Hide this for inner system use
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.bundleMonitor#on
   */
  function on(type: 'BundleStatusChange',
    bundleStatusCallback: BundleStatusCallback, callback: AsyncCallback<string>): void;

  /**
   * Registers a callback to receive bundle status changes. This API uses an asynchronous callback to return the result.
   *
   * > **NOTE**
   * >
   * > This API has been supported since API version 8 and deprecated since API version 9. You are advised to use
   * > [on]{@link @ohos.bundle.bundleMonitor:bundleMonitor.on(type: BundleChangedEvent, callback: Callback<BundleChangedInfo>)}
   * > instead.
   *
   * @permission ohos.permission.LISTEN_BUNDLE_CHANGE
   * @param { 'BundleStatusChange' } type - Event type. Only **BundleStatusChange** is supported.
   * @param { BundleStatusCallback } bundleStatusCallback - Callback to register.
   * @returns { Promise<string> } - Promise used to return a successful result or error information.
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @systemapi Hide this for inner system use
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.bundleMonitor#on
   */
  function on(type: 'BundleStatusChange', bundleStatusCallback: BundleStatusCallback): Promise<string>;

  /**
   * Unregisters the callback that receives bundle status changes. This API uses an asynchronous callback to return the
   * result.
   *
   * > **NOTE**
   * >
   * > This API has been supported since API version 8 and deprecated since API version 9. You are advised to use
   * > [off]{@link @ohos.bundle.bundleMonitor:bundleMonitor.off(type: BundleChangedEvent, callback?: Callback<BundleChangedInfo>)}
   * > instead.
   *
   * @permission ohos.permission.LISTEN_BUNDLE_CHANGE
   * @param { 'BundleStatusChange' } type - Event type. Only **BundleStatusChange** is supported.
   * @param { AsyncCallback<string> } callback - Callback used to return a successful result or error information.
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @systemapi Hide this for inner system use
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.bundleMonitor#off
   */
  function off(type: 'BundleStatusChange', callback: AsyncCallback<string>): void;

  /**
   * Unregisters the callback that receives bundle status changes. This API uses an asynchronous callback to return the
   * result.
   *
   * > **NOTE**
   * >
   * > This API has been supported since API version 8 and deprecated since API version 9. You are advised to use
   * > [off]{@link @ohos.bundle.bundleMonitor:bundleMonitor.off(type: BundleChangedEvent, callback?: Callback<BundleChangedInfo>)}
   * > instead.
   *
   * @permission ohos.permission.LISTEN_BUNDLE_CHANGE
   * @param { 'BundleStatusChange' } type - Event type. Only **BundleStatusChange** is supported.
   * @returns { Promise<string> } Promise used to return a successful result or error information.
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @systemapi Hide this for inner system use
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.bundleMonitor#off
   */
  function off(type: 'BundleStatusChange'): Promise<string>;

  /**
   * Obtains the information about all launcher abilities. This API uses an asynchronous callback to return the result.
   *
   * > **NOTE**
   * >
   * > This API has been supported since API version 8 and deprecated since API version 9. You are advised to use
   * > [getAllLauncherAbilityInfo]{@link @ohos.bundle.launcherBundleManager:launcherBundleManager.getAllLauncherAbilityInfo(userId: int, callback: AsyncCallback<Array<LauncherAbilityInfo>>)}
   * > instead.
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { number } userId - User ID. The value must be greater than or equal to 0.
   * @param { AsyncCallback<Array<LauncherAbilityInfo>> } callback - Callback used to return an array of the launcher
   *     ability information.
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @systemapi Hide this for inner system use
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead @ohos.bundle.launcherBundleManager:launcherBundleManager.getAllLauncherAbilityInfo(userId: int, callback: AsyncCallback<Array<LauncherAbilityInfo>>)
   */
  function getAllLauncherAbilityInfos(userId: number, callback: AsyncCallback<Array<LauncherAbilityInfo>>): void;

  /**
   * Obtains the information about all launcher abilities. This API uses a promise to return the result.
   *
   * > **NOTE**
   * >
   * > This API has been supported since API version 8 and deprecated since API version 9. You are advised to use
   * > [getAllLauncherAbilityInfo]{@link @ohos.bundle.launcherBundleManager:launcherBundleManager.getAllLauncherAbilityInfo(userId: int, callback: AsyncCallback<Array<LauncherAbilityInfo>>)}
   * > instead.
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { number } userId - User ID. The value must be greater than or equal to 0.
   * @returns { Promise<Array<LauncherAbilityInfo>> } Promise used to return an array of the launcher ability
   *     information.
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @systemapi Hide this for inner system use
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead @ohos.bundle.launcherBundleManager:launcherBundleManager.getAllLauncherAbilityInfo(userId: int, callback: AsyncCallback<Array<LauncherAbilityInfo>>)
   */
  function getAllLauncherAbilityInfos(userId: number): Promise<Array<LauncherAbilityInfo>>;

  /**
   * Obtains an array of the shortcut information based on a given bundle name. This API uses an asynchronous callback
   * to return the result.
   *
   * > **NOTE**
   * >
   * > This API has been supported since API version 8 and deprecated since API version 9. You are advised to use
   * > [getShortcutInfo]{@link @ohos.bundle.launcherBundleManager:launcherBundleManager.getShortcutInfo(bundleName :string, callback: AsyncCallback<Array<ShortcutInfo>>)}
   * > instead.
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { string } bundleName - Bundle name.
   * @param { AsyncCallback<Array<ShortcutInfo>> } callback - Callback used to return an array of the shortcut
   *     information.
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @systemapi Hide this for inner system use
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead @ohos.bundle.launcherBundleManager:launcherBundleManager.getShortcutInfo(bundleName :string, callback: AsyncCallback<Array<ShortcutInfo>>)
   */
  function getShortcutInfos(bundleName: string, callback: AsyncCallback<Array<ShortcutInfo>>): void;

  /**
   * Obtains an array of the shortcut information based on a given bundle name. This API uses a promise to return the
   * result.
   *
   * > **NOTE**
   * >
   * > This API has been supported since API version 8 and deprecated since API version 9. You are advised to use
   * > [getShortcutInfo]{@link @ohos.bundle.launcherBundleManager:launcherBundleManager.getShortcutInfo(bundleName :string, callback: AsyncCallback<Array<ShortcutInfo>>)}
   * > instead.
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { string } bundleName - Bundle name.
   * @returns { Promise<Array<ShortcutInfo>> } Promise used to return an array of the shortcut information.
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @systemapi Hide this for inner system use
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead @ohos.bundle.launcherBundleManager:launcherBundleManager.getShortcutInfo(bundleName :string, callback: AsyncCallback<Array<ShortcutInfo>>)
   */
  function getShortcutInfos(bundleName: string): Promise<Array<ShortcutInfo>>;
}

/**
 * Contains basic Ability information, which uniquely identifies a launcher StatusCallback.
 *
 * @syscap SystemCapability.BundleManager.BundleFramework
 * @systemapi Hide this for inner system use
 * @since 8 dynamiconly
 * @deprecated since 9
 * @useinstead ohos.bundle.bundleMonitor/bundleMonitor.BundleChangedInfo
 */
export type BundleStatusCallback = _BundleStatusCallback;

export default innerBundleManager;