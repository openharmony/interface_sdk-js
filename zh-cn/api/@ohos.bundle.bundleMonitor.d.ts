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
 * @file bundleMonitor模块
 * @kit AbilityKit
 */

import { Callback } from './@ohos.base';

/**
 * 本模块提供监听应用安装，卸载，更新的能力。
 *
 * @namespace bundleMonitor
 * @syscap SystemCapability.BundleManager.BundleFramework.Core
 * @systemapi
 * @since 9 dynamic
 * @since 23 static
 */
declare namespace bundleMonitor {
  /**
   * 应用变更信息。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  interface BundleChangedInfo {
    /**
     * 应用发生变更的应用Bundle名称。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    readonly bundleName: string;
    /**
     * 应用发生变更的用户ID，可以通过
     * [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback<int>)}获取。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    readonly userId: int;
    /**
     * 应用发生变更的应用分身索引。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    readonly appIndex: int;
  }

  /**
   * 监听的事件类型。
   * 
   * 取值类型为下表类型中的一个。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 9 dynamic
   */
  type BundleChangedEvent = 'add' | 'update' | 'remove';

  /**
   * 注册监听应用的安装、卸载、更新。使用callback异步回调。
   *
   * @permission ohos.permission.LISTEN_BUNDLE_CHANGE
   * @param { BundleChangedEvent } type - 注册监听的事件类型。
   * @param { Callback<BundleChangedInfo> } callback - [Callback]{@link @ohos.base:Callback}，当回调成功时，
   *     err为undefined，data为应用变更信息；否则为错误对象。
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
   * 注册监听应用的安装。
   *
   * @permission ohos.permission.LISTEN_BUNDLE_CHANGE
   * @param { Callback<BundleChangedInfo> } callback - 注册监听的[Callback]{@link @ohos.base:Callback}。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 23 static
   */
  function onAdd(callback: Callback<BundleChangedInfo>): void;

  /**
   * 注册监听应用的更新。
   *
   * @permission ohos.permission.LISTEN_BUNDLE_CHANGE
   * @param { Callback<BundleChangedInfo> } callback - 注册监听的[Callback]{@link @ohos.base:Callback}。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 23 static
   */
  function onUpdate(callback: Callback<BundleChangedInfo>): void;

  /**
   * 注册监听应用的卸载。
   *
   * @permission ohos.permission.LISTEN_BUNDLE_CHANGE
   * @param { Callback<BundleChangedInfo> } callback - 注册监听的[Callback]{@link @ohos.base:Callback}。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 23 static
   */
  function onRemove(callback: Callback<BundleChangedInfo>): void;

  /**
   * 注销监听应用的安装，卸载，更新。使用callback异步回调。
   *
   * @permission ohos.permission.LISTEN_BUNDLE_CHANGE
   * @param { BundleChangedEvent } type - 注销监听的事件类型。
   * @param { Callback<BundleChangedInfo> } callback - [Callback]{@link @ohos.base:Callback}，当回调成功时，
   *     err为undefined，data为应用变更信息；否则为错误对象。
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
   * 注销监听应用的安装。
   *
   * @permission ohos.permission.LISTEN_BUNDLE_CHANGE
   * @param { Callback<BundleChangedInfo> } [callback] - 注册监听的[Callback]{@link @ohos.base:Callback}。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 23 static
   */
  function offAdd(callback?: Callback<BundleChangedInfo>): void;

  /**
   * 注销监听应用的更新。
   *
   * @permission ohos.permission.LISTEN_BUNDLE_CHANGE
   * @param { Callback<BundleChangedInfo> } [callback] - 注册监听的[Callback]{@link @ohos.base:Callback}。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 23 static
   */
  function offUpdate(callback?: Callback<BundleChangedInfo>): void;

  /**
   * 注销监听应用的卸载。
   *
   * @permission ohos.permission.LISTEN_BUNDLE_CHANGE
   * @param { Callback<BundleChangedInfo> } [callback] - 注册监听的[Callback]{@link @ohos.base:Callback}。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 23 static
   */
  function offRemove(callback?: Callback<BundleChangedInfo>): void;
}

export default bundleMonitor;