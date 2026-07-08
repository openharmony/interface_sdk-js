/*
 * Copyright (c) 2021-2023 Huawei Device Co., Ltd.
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
 * @kit API10LessDeprecatedModules
 */

import { AsyncCallback } from './@ohos.base';
import ApplicationStateObserver from './application/ApplicationStateObserver';
import AbilityStateData from './application/AbilityStateData';
import AppStateData from './application/AppStateData';
import { ProcessRunningInfo } from './application/ProcessRunningInfo';

/**
 * appManager模块提供应用管理的能力，包括查询当前系统是否处于稳定性测试场景、查询当前设备是否为RAM（Random Access Memory，随机存取存储器）受限设备、获取当前应用程序可以使用的最大内存值、获取有关运行进程的
 * 信息等。
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @since 8
 * @deprecated since 9
 * @useinstead ohos.app.ability.appManager/appManager
 */
declare namespace appManager {
  /**
   * 注册全部应用程序状态观测器。
   *
   * @permission ohos.permission.RUNNING_STATE_OBSERVER
   * @param { ApplicationStateObserver } observer - 表示程序状态观测器，用于观测应用的生命周期变化。
   * @returns { number } 已注册观测器的数字代码。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.app.ability.appManager/appManager#on
   */
  function registerApplicationStateObserver(observer: ApplicationStateObserver): number;

  /**
   * 取消注册应用程序状态观测器。使用callback异步回调。
   *
   * @permission ohos.permission.RUNNING_STATE_OBSERVER
   * @param { number } observerId - 表示观察者的编号代码。
   * @param { AsyncCallback<void> } callback - 表示指定的callback回调方法。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.app.ability.appManager/appManager#off
   */
  function unregisterApplicationStateObserver(observerId: number, callback: AsyncCallback<void>): void;

  /**
   * 取消注册应用程序状态观测器。使用Promise异步回调。
   *
   * @permission ohos.permission.RUNNING_STATE_OBSERVER
   * @param { number } observerId - 表示观察者的编号代码。
   * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.app.ability.appManager/appManager#off
   */
  function unregisterApplicationStateObserver(observerId: number): Promise<void>;

  /**
   * 获取所有当前处于前台的应用信息。该应用信息由[AppStateData]{@link application/AppStateData:AppStateData}定义。使用callback异步回调。
   *
   * @permission ohos.permission.GET_RUNNING_INFO
   * @param { AsyncCallback<Array<AppStateData>> } callback - 回调函数，返回所有当前处于前台的应用信息。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.app.ability.appManager/appManager#getForegroundApplications
   */
  function getForegroundApplications(callback: AsyncCallback<Array<AppStateData>>): void;

  /**
   * 获取所有当前处于前台的应用信息。该应用信息由[AppStateData]{@link application/AppStateData:AppStateData}定义。使用Promise异步回调。
   *
   * @permission ohos.permission.GET_RUNNING_INFO
   * @returns { Promise<Array<AppStateData>> } Promise对象，返回所有当前处于前台的应用信息。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.app.ability.appManager/appManager#getForegroundApplications
   */
  function getForegroundApplications(): Promise<Array<AppStateData>>;

  /**
   * 切断account进程。使用Promise异步回调。
   *
   * @permission ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS and ohos.permission.CLEAN_BACKGROUND_PROCESSES
   * @param { string } bundleName - 应用Bundle名称。
   * @param { number } accountId - 系统账号的账号ID，详情参考[getOsAccountCount]
   *     {@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountCount}。
   * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.app.ability.appManager/appManager#killProcessWithAccount
   */
  function killProcessWithAccount(bundleName: string, accountId: number): Promise<void>;

  /**
   * 切断account进程。使用callback异步回调。
   *
   * @permission ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS and ohos.permission.CLEAN_BACKGROUND_PROCESSES
   * @param { string } bundleName - 应用Bundle名称。
   * @param { number } accountId - 系统账号的账号ID，详情参考[getOsAccountCount]
   *     {@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountCount}。
   * @param { AsyncCallback<void> } callback - 回调函数，当切断account进程成功，err为undefined，否则为错误对象。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.app.ability.appManager/appManager#killProcessWithAccount
   */
  function killProcessWithAccount(bundleName: string, accountId: number, callback: AsyncCallback<void>): void;

  /**
   * 查询当前系统是否处于稳定性测试场景。使用callback异步回调。
   *
   * > **说明：**
   * >
   * > 稳定性测试场景指为验证应用在复杂、极端或长期运行条件下的可靠性而设计的特定测试环境。
   *
   * @param { AsyncCallback<boolean> } callback - 以回调方式返回接口运行结果及当前系统是否处于稳定性测试场景，可进行错误处理或其他自定义处理。返回true表示系统处于稳定性测试场景，返回false表示
   *     系统不处于稳定性测试场景。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.app.ability.appManager/appManager#isRunningInStabilityTest
   */
  function isRunningInStabilityTest(callback: AsyncCallback<boolean>): void;

  /**
   * 查询当前系统是否处于稳定性测试场景。使用Promise异步回调。
   *
   * > **说明：**
   * >
   * > 稳定性测试场景指为验证应用在复杂、极端或长期运行条件下的可靠性而设计的特定测试环境。
   *
   * @returns { Promise<boolean> } 以Promise方式返回接口运行结果及当前是否处于稳定性测试场景，可进行错误处理或其他自定义处理。返回true表示系统处于稳定性测试场景，返回false表示系统不处于稳定性测试场景
   *     。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.app.ability.appManager/appManager#isRunningInStabilityTest
   */
  function isRunningInStabilityTest(): Promise<boolean>;

  /**
   * 获取有关运行进程的信息。使用Promise异步回调。
   *
   * > 从 API Version 9 开始废弃，建议使用
   * > [appManager.getRunningProcessInformation]{@link @ohos.app.ability.appManager:appManager.getRunningProcessInformation()}
   * > 替代。
   *
   * @permission ohos.permission.GET_RUNNING_INFO
   * @returns { Promise<Array<ProcessRunningInfo>> } Promise对象，返回有关运行进程的信息。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.app.ability.appManager/appManager#getRunningProcessInformation
   */
  function getProcessRunningInfos(): Promise<Array<ProcessRunningInfo>>;

  /**
   * 获取有关运行进程的信息。使用callback异步回调。
   *
   * > 从 API Version 9 开始废弃，建议使用
   * > [appManager.getRunningProcessInformation]{@link @ohos.app.ability.appManager:appManager.getRunningProcessInformation()}
   * > 替代。
   *
   * @permission ohos.permission.GET_RUNNING_INFO
   * @param { AsyncCallback<Array<ProcessRunningInfo>> } callback - 回调函数，返回有关运行进程的信息。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.app.ability.appManager/appManager#getRunningProcessInformation
   */
  function getProcessRunningInfos(callback: AsyncCallback<Array<ProcessRunningInfo>>): void;

  /**
   * 通过Bundle名称终止进程。使用Promise异步回调。
   *
   * @permission ohos.permission.CLEAN_BACKGROUND_PROCESSES
   * @param { string } bundleName - 表示Bundle名称。
   * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.app.ability.appManager/appManager#killProcessesByBundleName
   */
  function killProcessesByBundleName(bundleName: string): Promise<void>;

  /**
   * 通过Bundle名称终止进程。使用callback异步回调。
   *
   * @permission ohos.permission.CLEAN_BACKGROUND_PROCESSES
   * @param { string } bundleName - 表示Bundle名称。
   * @param { AsyncCallback<void> } callback - 回调函数，当通过Bundle名称终止进程成功，err为undefined，否则为错误对象。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.app.ability.appManager/appManager#killProcessesByBundleName
   */
  function killProcessesByBundleName(bundleName: string, callback: AsyncCallback<void>);

  /**
   * 通过Bundle名称清除应用数据。使用Promise异步回调。
   *
   * @permission ohos.permission.CLEAN_APPLICATION_DATA
   * @param { string } bundleName - 表示Bundle名称。
   * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.app.ability.appManager/appManager#clearUpApplicationData
   */
  function clearUpApplicationData(bundleName: string): Promise<void>;

  /**
   * 通过Bundle名称清除应用数据。使用callback异步回调。
   *
   * @permission ohos.permission.CLEAN_APPLICATION_DATA
   * @param { string } bundleName - 表示Bundle名称。
   * @param { AsyncCallback<void> } callback - 回调函数，当通过Bundle名称清除应用数据成功，err为undefined，否则为错误对象。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.app.ability.appManager/appManager#clearUpApplicationData
   */
  function clearUpApplicationData(bundleName: string, callback: AsyncCallback<void>);

  /**
   * 查询当前设备是否为RAM受限设备（内存资源严重受限的设备）。使用Promise异步回调。
   *
   * @returns { Promise<boolean> } 以Promise方式返回接口运行结果及当前设备是否为RAM受限设备，可进行错误处理或其他自定义处理。true：当前设备为RAM受限设备，false：当前设备为非RAM受限设备。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.app.ability.appManager/appManager#isRamConstrainedDevice
   */
  function isRamConstrainedDevice(): Promise<boolean>;

  /**
   * 查询当前设备是否为RAM受限设备（内存资源严重受限的设备）。使用callback异步回调。
   *
   * @param { AsyncCallback<boolean> } callback - 以回调方式返回接口运行结果及当前设备是否为RAM受限设备，可进行错误处理或其他自定义处理。true：当前设备为RAM受限设备，false：当前设备为非
   *     RAM受限设备。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.app.ability.appManager/appManager#isRamConstrainedDevice
   */
  function isRamConstrainedDevice(callback: AsyncCallback<boolean>): void;

  /**
   * 获取当前应用程序可以使用的最大内存（RAM）值。使用Promise异步回调。
   *
   * @returns { Promise<number> } 当前应用程序可以使用的最大内存（RAM）值，可根据此值进行错误处理或其他自定义处理，单位是M。使用Promise异步回调。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.app.ability.appManager/appManager#getAppMemorySize
   */
  function getAppMemorySize(): Promise<number>;

  /**
   * 获取当前应用程序可以使用的最大内存（RAM）值。使用callback异步回调。
   *
   * @param { AsyncCallback<number> } callback - 获取当前应用程序可以使用的最大内存（RAM）值，可根据此值进行错误处理或其他自定义处理，单位是M。使用callback异步回调。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.app.ability.appManager/appManager#getAppMemorySize
   */
  function getAppMemorySize(callback: AsyncCallback<number>): void;
}

export default appManager;