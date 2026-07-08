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
 * 本模块提供launcher应用使用的接口。
 * 
 * > **说明：**
 * >
 * > 本模块从API version 9开始不再支持。建议使用[launcherBundleManager]{@link @ohos.bundle.launcherBundleManager:launcherBundleManager}
 * > 及[bundleMonitor]{@link @ohos.bundle.bundleMonitor:bundleMonitor}替代。
 * >
 * > 本模块为系统接口。
 *
 * @syscap SystemCapability.BundleManager.BundleFramework
 * @systemapi Hide this for inner system use
 * @since 8 dynamiconly
 * @deprecated since 9
 * @useinstead @ohos.bundle.launcherBundleManager:launcherBundleManager
 */
declare namespace innerBundleManager {
  /**
   * 根据给定的Bundle名称获取LauncherAbilityInfos，使用callback异步回调。
   * 
   * > **说明：**
   * >
   * > 从API version 8开始支持，从API version 9开始废弃，建议使用
   * > [getLauncherAbilityInfo]{@link @ohos.bundle.launcherBundleManager:launcherBundleManager.getLauncherAbilityInfo(bundleName: string, userId: int, callback: AsyncCallback<Array<LauncherAbilityInfo>>)}
   * > 替代。
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { string } bundleName - 要查询的应用Bundle名称。
   * @param { number } userId - 用户ID。取值范围：大于等于0。
   * @param { AsyncCallback<Array<LauncherAbilityInfo>> } callback - 程序启动作为入参的回调函数，返回程序信息。
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @systemapi Hide this for inner system use
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead @ohos.bundle.launcherBundleManager:launcherBundleManager.getLauncherAbilityInfo(bundleName: string, userId: int, callback: AsyncCallback<Array<LauncherAbilityInfo>>)
   */
  function getLauncherAbilityInfos(bundleName: string,
    userId: number, callback: AsyncCallback<Array<LauncherAbilityInfo>>): void;

  /**
   * 根据给定的Bundle名称获取LauncherAbilityInfos，使用Promise异步回调。
   * 
   * > **说明：**
   * >
   * > 从API version 8开始支持，从API version 9开始废弃，建议使用
   * > [getLauncherAbilityInfo]{@link @ohos.bundle.launcherBundleManager:launcherBundleManager.getLauncherAbilityInfo(bundleName: string, userId: int, callback: AsyncCallback<Array<LauncherAbilityInfo>>)}
   * > 替代。
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { string } bundleName - 要查询的应用Bundle名称。
   * @param { number } userId - 用户ID。取值范围：大于等于0。
   * @returns { Promise<Array<LauncherAbilityInfo>> } Promise形式返回程序信息。
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @systemapi Hide this for inner system use
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead @ohos.bundle.launcherBundleManager:launcherBundleManager.getLauncherAbilityInfo(bundleName: string, userId: int, callback: AsyncCallback<Array<LauncherAbilityInfo>>)
   */
  function getLauncherAbilityInfos(bundleName: string, userId: number): Promise<Array<LauncherAbilityInfo>>;

  /**
   * 注册Callback。
   * 
   * > **说明：**
   * >
   * > 从API version 8开始支持，从API version 9开始废弃，建议使用
   * > [on]{@link @ohos.bundle.bundleMonitor:bundleMonitor.on(type: BundleChangedEvent, callback: Callback<BundleChangedInfo>)}
   * > 替代。
   *
   * @permission ohos.permission.LISTEN_BUNDLE_CHANGE
   * @param { 'BundleStatusChange' } type - 指示应执行命令，只支持BundleStatusChange。
   * @param { BundleStatusCallback } bundleStatusCallback - 指示要注册的回调。
   * @param { AsyncCallback<string> } callback - 程序启动作为入参的回调函数，返回正确结果或错误信息。
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @systemapi Hide this for inner system use
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.bundleMonitor#on
   */
  function on(type: 'BundleStatusChange',
    bundleStatusCallback: BundleStatusCallback, callback: AsyncCallback<string>): void;

  /**
   * 注册Callback。
   * 
   * > **说明：**
   * >
   * > 从API version 8开始支持，从API version 9开始废弃，建议使用
   * > [on]{@link @ohos.bundle.bundleMonitor:bundleMonitor.on(type: BundleChangedEvent, callback: Callback<BundleChangedInfo>)}
   * > 替代。
   *
   * @permission ohos.permission.LISTEN_BUNDLE_CHANGE
   * @param { 'BundleStatusChange' } type - 指示应执行命令，只支持BundleStatusChange。
   * @param { BundleStatusCallback } bundleStatusCallback - 指示要注册的回调。
   * @returns { Promise<string> } - Promise形式返回正确结果或错误信息。
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @systemapi Hide this for inner system use
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.bundleMonitor#on
   */
  function on(type: 'BundleStatusChange', bundleStatusCallback: BundleStatusCallback): Promise<string>;

  /**
   * 取消注册Callback。
   * 
   * > **说明：**
   * >
   * > 从API version 8开始支持，从API version 9开始废弃，建议使用
   * > [off]{@link @ohos.bundle.bundleMonitor:bundleMonitor.off(type: BundleChangedEvent, callback?: Callback<BundleChangedInfo>)}
   * > 替代。
   *
   * @permission ohos.permission.LISTEN_BUNDLE_CHANGE
   * @param { 'BundleStatusChange' } type - 指示应执行命令，只支持BundleStatusChange。
   * @param { AsyncCallback<string> } callback - 程序启动作为入参的回调函数，返回正确结果或错误信息。
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @systemapi Hide this for inner system use
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.bundleMonitor#off
   */
  function off(type: 'BundleStatusChange', callback: AsyncCallback<string>): void;

  /**
   * 取消注册Callback。
   * 
   * > **说明：**
   * >
   * > 从API version 8开始支持，从API version 9开始废弃，建议使用
   * > [off]{@link @ohos.bundle.bundleMonitor:bundleMonitor.off(type: BundleChangedEvent, callback?: Callback<BundleChangedInfo>)}
   * > 替代。
   *
   * @permission ohos.permission.LISTEN_BUNDLE_CHANGE
   * @param { 'BundleStatusChange' } type - 指示应执行命令，只支持BundleStatusChange。
   * @returns { Promise<string> } Promise形式返回正确结果或错误信息。
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @systemapi Hide this for inner system use
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.bundleMonitor#off
   */
  function off(type: 'BundleStatusChange'): Promise<string>;

  /**
   * 获取所有的LauncherAbilityInfos，使用callback异步回调。
   * 
   * > **说明：**
   * >
   * > 从API version 8开始支持，从API version 9开始废弃，建议使用
   * > [getAllLauncherAbilityInfo]{@link @ohos.bundle.launcherBundleManager:launcherBundleManager.getAllLauncherAbilityInfo(userId: int, callback: AsyncCallback<Array<LauncherAbilityInfo>>)}
   * > 替代。
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { number } userId - 用户ID。取值范围：大于等于0。
   * @param { AsyncCallback<Array<LauncherAbilityInfo>> } callback - 程序启动作为入参的回调函数，返回程序信息。
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @systemapi Hide this for inner system use
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead @ohos.bundle.launcherBundleManager:launcherBundleManager.getAllLauncherAbilityInfo(userId: int, callback: AsyncCallback<Array<LauncherAbilityInfo>>)
   */
  function getAllLauncherAbilityInfos(userId: number, callback: AsyncCallback<Array<LauncherAbilityInfo>>): void;

  /**
   * 获取LauncherAbilityInfos，使用Promise异步回调。
   * 
   * > **说明：**
   * >
   * > 从API version 8开始支持，从API version 9开始废弃，建议使用
   * > [getAllLauncherAbilityInfo]{@link @ohos.bundle.launcherBundleManager:launcherBundleManager.getAllLauncherAbilityInfo(userId: int, callback: AsyncCallback<Array<LauncherAbilityInfo>>)}
   * > 替代。
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { number } userId - 用户ID。取值范围：大于等于0。
   * @returns { Promise<Array<LauncherAbilityInfo>> } Promise形式返回程序信息。
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @systemapi Hide this for inner system use
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead @ohos.bundle.launcherBundleManager:launcherBundleManager.getAllLauncherAbilityInfo(userId: int, callback: AsyncCallback<Array<LauncherAbilityInfo>>)
   */
  function getAllLauncherAbilityInfos(userId: number): Promise<Array<LauncherAbilityInfo>>;

  /**
   * 根据给定的Bundle名称获取快捷方式信息，使用callback异步回调。
   * 
   * > **说明：**
   * >
   * > 从API version 8开始支持，从API version 9开始废弃，建议使用
   * > [getShortcutInfo]{@link @ohos.bundle.launcherBundleManager:launcherBundleManager.getShortcutInfo(bundleName :string, callback: AsyncCallback<Array<ShortcutInfo>>)}
   * > 替代。
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { string } bundleName - 要查询的应用Bundle名称。
   * @param { AsyncCallback<Array<ShortcutInfo>> } callback - 程序启动作为入参的回调函数，返回快捷方式信息。
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @systemapi Hide this for inner system use
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead @ohos.bundle.launcherBundleManager:launcherBundleManager.getShortcutInfo(bundleName :string, callback: AsyncCallback<Array<ShortcutInfo>>)
   */
  function getShortcutInfos(bundleName: string, callback: AsyncCallback<Array<ShortcutInfo>>): void;

  /**
   * 根据给定的Bundle名称获取快捷方式信息，使用Promise异步回调。
   * 
   * > **说明：**
   * >
   * > 从API version 8开始支持，从API version 9开始废弃，建议使用
   * > [getShortcutInfo]{@link @ohos.bundle.launcherBundleManager:launcherBundleManager.getShortcutInfo(bundleName :string, callback: AsyncCallback<Array<ShortcutInfo>>)}
   * > 替代。
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { string } bundleName - 要查询的应用Bundle名称。
   * @returns { Promise<Array<ShortcutInfo>> } Promise形式返回快捷方式信息。
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @systemapi Hide this for inner system use
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead @ohos.bundle.launcherBundleManager:launcherBundleManager.getShortcutInfo(bundleName :string, callback: AsyncCallback<Array<ShortcutInfo>>)
   */
  function getShortcutInfos(bundleName: string): Promise<Array<ShortcutInfo>>;
}

/**
 * 应用状态发生变化时回调的信息。
 *
 * @syscap SystemCapability.BundleManager.BundleFramework
 * @systemapi Hide this for inner system use
 * @since 8 dynamiconly
 * @deprecated since 9
 * @useinstead ohos.bundle.bundleMonitor/bundleMonitor.BundleChangedInfo
 */
export type BundleStatusCallback = _BundleStatusCallback;

export default innerBundleManager;