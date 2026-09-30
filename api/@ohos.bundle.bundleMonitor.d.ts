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
 * @file bundleMonitor Module
 * @kit AbilityKit
 */

import { Callback } from './@ohos.base';

/**
 * The module provides APIs for listening for bundle installation, uninstall, and updates.
 *
 * @namespace bundleMonitor
 * @syscap SystemCapability.BundleManager.BundleFramework.Core
 * @systemapi
 * @since 9 dynamic
 * @since 23 static
 */
declare namespace bundleMonitor {
  /**
   * Application Change Information.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  interface BundleChangedInfo {
    /**
     * Name of the bundle whose status changes.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    readonly bundleName: string;
    /**
     * ID of the user for whom the bundle status changes. You can obtain the ID by calling
     * [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback<int>)}.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    readonly userId: int;
    /**
     * Index of the application clone whose status changes.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    readonly appIndex: int;
  }

  /**
   * Enumerates the types of events to listen for.
   *
   * The value type is one of the types listed in the table below.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 9 dynamic
   */
  type BundleChangedEvent = 'add' | 'update' | 'remove';

  /**
   * Subscribes to bundle installation, uninstall, and update events. This API uses an asynchronous callback to return
   * the result.
   *
   * @permission ohos.permission.LISTEN_BUNDLE_CHANGE
   * @param { BundleChangedEvent } type - Type of the event to subscribe to.
   * @param { Callback<BundleChangedInfo> } callback - [Callback]{@link @ohos.base:Callback} used to return the result.
   *     If the operation is successful, err is undefined and data is the app change information obtained. Otherwise,
   *     err is an error object.
   * @throws { BusinessError } 201 - Verify permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 9 dynamic
   */
  function on(type: BundleChangedEvent, callback: Callback<BundleChangedInfo>): void;

  /**
   * Register installation listener.
   *
   * @permission ohos.permission.LISTEN_BUNDLE_CHANGE
   * @param { Callback<BundleChangedInfo> } callback - Indicates the [Callback]{@link @ohos.base:Callback} to be registered.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 23 static
   */
  function onAdd(callback: Callback<BundleChangedInfo>): void;

  /**
   * Register update listener.
   *
   * @permission ohos.permission.LISTEN_BUNDLE_CHANGE
   * @param { Callback<BundleChangedInfo> } callback - Indicates the [Callback]{@link @ohos.base:Callback} to be registered.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 23 static
   */
  function onUpdate(callback: Callback<BundleChangedInfo>): void;

  /**
   * Register uninstallation listener.
   *
   * @permission ohos.permission.LISTEN_BUNDLE_CHANGE
   * @param { Callback<BundleChangedInfo> } callback - Indicates the [Callback]{@link @ohos.base:Callback} to be registered.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 23 static
   */
  function onRemove(callback: Callback<BundleChangedInfo>): void;

  /**
   * Unsubscribes from bundle installation, uninstall, and update events. This API uses an asynchronous callback to return
   * the result.
   *
   * @permission ohos.permission.LISTEN_BUNDLE_CHANGE
   * @param { BundleChangedEvent } type - Type of the event to unsubscribe from.
   * @param { Callback<BundleChangedInfo> } callback - [Callback]{@link @ohos.base:Callback} used to return the result. If
   *     the operation is successful, err is undefined and data is the app change information obtained. Otherwise, err is
   *     an error object.
   * @throws { BusinessError } 201 - Verify permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 9 dynamic
   */
  function off(type: BundleChangedEvent, callback?: Callback<BundleChangedInfo>): void;

  /**
   * Unregister installation listener.
   *
   * @permission ohos.permission.LISTEN_BUNDLE_CHANGE
   * @param { Callback<BundleChangedInfo> } [callback] - Indicates the [Callback]{@link @ohos.base:Callback} to be unregistered.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 23 static
   */
  function offAdd(callback?: Callback<BundleChangedInfo>): void;

  /**
   * Unregister update listener.
   *
   * @permission ohos.permission.LISTEN_BUNDLE_CHANGE
   * @param { Callback<BundleChangedInfo> } [callback] - Indicates the [Callback]{@link @ohos.base:Callback} to be unregistered.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 23 static
   */
  function offUpdate(callback?: Callback<BundleChangedInfo>): void;

  /**
   * Unregister uninstallation listener.
   *
   * @permission ohos.permission.LISTEN_BUNDLE_CHANGE
   * @param { Callback<BundleChangedInfo> } [callback] - Indicates the [Callback]{@link @ohos.base:Callback} to be unregistered.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 23 static
   */
  function offRemove(callback?: Callback<BundleChangedInfo>): void;
}

export default bundleMonitor;