/*
 * Copyright (c) 2022-2024 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License"),
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
import { ElementName } from './bundleManager/ElementName';
import { AbilityRunningInfo as _AbilityRunningInfo } from './application/AbilityRunningInfo';
import { ExtensionRunningInfo as _ExtensionRunningInfo } from './application/ExtensionRunningInfo';
import { Configuration } from './@ohos.app.ability.Configuration';
import Context from './application/Context';
import Want from './@ohos.app.ability.Want';
import { AbilityResult } from './ability/abilityResult';
/*** if arkts dynamic */
import * as _AbilityForegroundStateObserver from './application/AbilityForegroundStateObserver';
import * as _AbilityStateData from './application/AbilityStateData';
/*** endif */
/*** if arkts static */
import _AbilityForegroundStateObserver from './application/AbilityForegroundStateObserver';
import _AbilityStateData from './application/AbilityStateData';
import { RecordData } from './@ohos.base';
/*** endif */

/**
 * AbilityManager模块提供获取、新增、修改Ability相关信息和运行状态信息的能力。
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @atomicservice [since 20]
 * @since 9 dynamic
 * @since 23 static
 */
declare namespace abilityManager {
  /**
   * Ability的状态，该类型为枚举，可配合[AbilityRunningInfo]{@link ./application/AbilityRunningInfo:AbilityRunningInfo}返回Ability的状态。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 14 dynamic
   * @since 23 static
   */
  export enum AbilityState {
    /**
     * 表示ability为初始化状态。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @since 14 dynamic
     * @since 23 static
     */
    INITIAL = 0,

    /**
     * 表示ability为获焦状态。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @since 14 dynamic
     * @since 23 static
     */
    FOCUS = 2,

    /**
     * 表示ability为前台状态。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @since 14 dynamic
     * @since 23 static
     */
    FOREGROUND = 9,

    /**
     * 表示ability为后台状态。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @since 14 dynamic
     * @since 23 static
     */
    BACKGROUND = 10,

    /**
     * 表示ability为前台调度中状态。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @since 14 dynamic
     * @since 23 static
     */
    FOREGROUNDING = 11,

    /**
     * 表示ability为后台调度中状态。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @since 14 dynamic
     * @since 23 static
     */
    BACKGROUNDING = 12
  }

  /**
   * 用户操作的断言调试结果，该类型为枚举。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 12 dynamic
   * @since 23 static
   */
  export enum UserStatus {
    /**
     * 表示用户点击终止的操作的断言调试结果。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    ASSERT_TERMINATE = 0,

    /**
     * 表示用户点击继续的操作的断言调试结果。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    ASSERT_CONTINUE = 1,

    /**
     * 表示用户点击重试的操作的断言调试结果。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    ASSERT_RETRY = 2
  }

  /**
   * 嵌入式拉起原子化服务的规则。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 18 dynamic
   * @since 23 static
   */
  export interface AtomicServiceStartupRule {
    /**
     * 是否允许拉起原子化服务。true表示允许拉起原子化服务，false表示不允许拉起原子化服务。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    isOpenAllowed: boolean;

    /**
     * 是否允许嵌入式拉起原子化服务。true表示允许嵌入式拉起原子化服务，false表示不允许嵌入式拉起原子化服务。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    isEmbeddedAllowed: boolean;
  }

  /**
   * 注册Ability的启动和退出的观测器。
   *
   * @permission ohos.permission.RUNNING_STATE_OBSERVER
   * @param { 'abilityForegroundState' } type - 调用接口类型，固定填'abilityForegroundState'字符串。
   * @param { AbilityForegroundStateObserver } observer - Ability状态观测器，用于观测Ability的启动和退出。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 11 dynamic
   */
  function on(type: 'abilityForegroundState', observer: AbilityForegroundStateObserver): void;

  /**
   * 注册Ability的启动和退出的观测器。
   *
   * @permission ohos.permission.RUNNING_STATE_OBSERVER
   * @param { AbilityForegroundStateObserver } observer - Ability状态观测器，用于观测Ability的启动和退出。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 16000050 - Connect to system server failed.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 23 static
   */
  function onAbilityForegroundState(observer: AbilityForegroundStateObserver): void;

  /**
   * 取消注册Ability启动和退出的观测器。
   *
   * @permission ohos.permission.RUNNING_STATE_OBSERVER
   * @param { 'abilityForegroundState' } type - 调用接口类型，固定填'abilityForegroundState'字符串。
   * @param { AbilityForegroundStateObserver } [observer] - Ability状态观测器，用于观测Ability的启动和退出。如果未配置该参数，则取消当前应用注册的所有observer。如果配置
   *     了该参数，则取消该observer。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 11 dynamic
   */
  function off(type: 'abilityForegroundState', observer?: AbilityForegroundStateObserver): void;

  /**
   * 取消注册Ability启动和退出的观测器。
   *
   * @permission ohos.permission.RUNNING_STATE_OBSERVER
   * @param { AbilityForegroundStateObserver } [observer] - Ability状态观测器，用于观测Ability的启动和退出。如果未配置该参数，则取消当前应用注册的所有observer。如果配置
   *     了该参数，则取消该observer。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 16000050 - Connect to system server failed.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 23 static
   */
  function offAbilityForegroundState(observer?: AbilityForegroundStateObserver): void;

  /**
   * 通过传入修改的配置项来更新配置。使用callback异步回调。
   *
   * @permission ohos.permission.UPDATE_CONFIGURATION
   * @param { Configuration } config - 新的配置项，仅需配置需要更新的项。
   * @param { AsyncCallback<void> } callback - 回调函数。当更新配置成功，err为undefined；否则为错误对象。可进行错误处理或其他自定义处理。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function updateConfiguration(config: Configuration, callback: AsyncCallback<void>): void;

  /**
   * 通过修改配置来更新配置。使用Promise异步回调。
   *
   * @permission ohos.permission.UPDATE_CONFIGURATION
   * @param { Configuration } config - 新的配置项，仅需配置需要更新的项。
   * @returns { Promise<void> } Promise对象，无返回结果。开发者可在此进行错误处理或其他自定义处理。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function updateConfiguration(config: Configuration): Promise<void>;

  /**
   * 获取UIAbility运行时的相关信息。使用Promise异步回调。
   * 
   * > **说明：**
   * >
   * > 如果应用申请了ohos.permission.GET_RUNNING_INFO权限，可以获取所有应用UIAbility的运行信息，否则只能获取当前应用UIAbility的运行信息。
   *
   * @permission ohos.permission.GET_RUNNING_INFO
   * @returns { Promise<Array<AbilityRunningInfo>> } Promise对象，返回UIAbility运行时的相关信息。开发者可在此进行错误处理或其他自定义处理。
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 14 dynamic
   * @since 23 static
   */
  function getAbilityRunningInfos(): Promise<Array<AbilityRunningInfo>>;

  /**
   * 获取UIAbility运行相关信息。使用callback异步回调。
   *
   * @permission ohos.permission.GET_RUNNING_INFO
   * @param { AsyncCallback<Array<AbilityRunningInfo>> } callback - 回调函数。当获取UIAbility运行相关信息成功，err为undefined，data为获取到的
   *     UIAbility运行相关信息；否则为错误对象。可进行错误处理或其他自定义处理。
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function getAbilityRunningInfos(callback: AsyncCallback<Array<AbilityRunningInfo>>): void;

  /**
   * 获取关于运行扩展能力的信息。使用Promise异步回调。
   *
   * @permission ohos.permission.GET_RUNNING_INFO
   * @param { int } upperLimit - 获取消息数量的最大限制，最大为2<sup>31</sup>-1。
   * @returns { Promise<Array<ExtensionRunningInfo>> } Promise对象，返回接口运行结果及运行扩展能力的信息。开发者可在此进行错误处理或其他自定义处理。
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function getExtensionRunningInfos(upperLimit: int): Promise<Array<ExtensionRunningInfo>>;

  /**
   * 获取关于运行扩展能力的信息。使用callback异步回调。
   *
   * @permission ohos.permission.GET_RUNNING_INFO
   * @param { int } upperLimit - 获取消息数量的最大限制，最大为2<sup>31</sup>-1。
   * @param { AsyncCallback<Array<ExtensionRunningInfo>> } callback - 回调函数。当获取运行扩展能力的信息成功，err为undefined，data为获取到的运行扩展能力信息；否则为
   *     错误对象。可进行错误处理或其他自定义处理。
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function getExtensionRunningInfos(upperLimit: int, callback: AsyncCallback<Array<ExtensionRunningInfo>>): void;

  /**
   * 获取窗口焦点所在的Ability。使用Promise异步回调。
   *
   * @returns { Promise<ElementName> } Promise对象，返回接口运行结果及应用名。开发者可在此进行错误处理或其他自定义处理。
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function getTopAbility(): Promise<ElementName>;

  /**
   * 获取窗口焦点所在的Ability。使用callback异步回调。
   *
   * @param { AsyncCallback<ElementName> } callback - 回调函数。当获取窗口焦点所在的Ability成功，err为undefined，data为获取到的应用名；否则为错误对象。可进行错误处理或其他自
   *     定义处理。
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function getTopAbility(callback: AsyncCallback<ElementName>): void;

  /**
   * 系统弹框通过该接口发起原子化服务分享，触发目标UIAbility的
   * [onShare]{@link @ohos.app.ability.UIAbility:UIAbility.onShare(wantParam: Record<string, Object>)}回调并返回分享数据。使用
   * callback异步回调。
   *
   * @param { int } missionId - 目标应用的missionId，最大为2<sup>31</sup>-1。。
   * @param { AsyncCallback<Record<string, Object>> } callback - 回调函数。当接口调用成功，err为undefined，data为获取到的分享数据；否则为错误对象。可进行错误处理或其他自
   *     定义处理。
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 10 dynamic
   */
  function acquireShareData(missionId: int, callback: AsyncCallback<Record<string, Object>>): void;

  /**
   * 系统弹框通过该接口发起原子化服务分享，调用到目标UIAbility的onShare，返回分享数据。使用callback异步回调。
   *
   * @param { int } missionId - 目标应用的missionId，最大为231-1。
   * @param { AsyncCallback<Record<string, RecordData>> } callback - 以回调方式返回接口运行结果及分享得到的数据，可进行错误处理或其他自定义处理。
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 16000050 - Connect to system service failed.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @FaAndStageModel
   * @since 23 static
   */
  function acquireShareData(missionId: int, callback: AsyncCallback<Record<string, RecordData>>): void;

  /**
   * 系统弹框通过该接口发起原子化服务分享，触发目标UIAbility的
   * [onShare]{@link @ohos.app.ability.UIAbility:UIAbility.onShare(wantParam: Record<string, Object>)}回调并返回分享数据。使用
   * Promise异步回调。
   *
   * @param { int } missionId - 目标应用的missionId，最大为2<sup>31</sup>-1。
   * @returns { Promise<{ [key: string]: Object }> } The promise returned by the function. [since 10 - 10]
   * @returns { Promise<Record<string, Object>> } Promise used to return the API call result and the shared data. You can
   *     perform error handling or other custom processing.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 10 dynamic
   */
  function acquireShareData(missionId: int): Promise<Record<string, Object>>;

  /**
   * 系统弹框通过该接口发起原子化服务分享，调用到目标UIAbility的onShare，返回分享数据。使用Promise异步回调。
   *
   * @param { int } missionId - 目标应用的missionId，最大为231-1。
   * @returns { Promise<Record<string, RecordData>> } The promise returned by the function.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 16000050 - Connect to system server failed.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @FaAndStageModel
   * @since 23 static
   */
  function acquireShareData(missionId: int): Promise<Record<string, RecordData>>;

  /**
   * 该接口仅供[DLP]{@link @ohos.dlpPermission:dlpPermission}（Data Loss Prevention, 数据丢失防护）管理应用使用，其他应用禁止使用，DLP管理应用通过该接口通知沙箱应用
   * 另存为结果。使用callback异步回调。
   * 
   * > **说明：**
   * >
   * > 从API version 10开始支持，从API version 24开始废弃。
   *
   * @param { AbilityResult } parameter - 返回给调用startAbilityForResult?接口调用方的相关信息。
   * @param { int } requestCode - DLP管理应用传入的请求代码。
   * @param { AsyncCallback<void> } callback - 回调函数。当另存为结果通知成功，err为undefined，否则为错误对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 10 dynamic
   * @since 23 static
   * @deprecated since 24
   */
  function notifySaveAsResult(parameter: AbilityResult, requestCode: int, callback: AsyncCallback<void>): void;

  /**
   * 该接口仅供[DLP]{@link @ohos.dlpPermission:dlpPermission}（Data Loss Prevention, 数据丢失防护）管理应用使用，其他应用禁止使用，DLP管理应用通过该接口通知沙箱应用
   * 另存为结果。使用Promise异步回调。
   *
   * @param { AbilityResult } parameter - 返回给调用startAbilityForResult?接口调用方的相关信息。
   * @param { int } requestCode - DLP管理应用传入的请求代码。
   * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 10 dynamic
   * @since 23 static
   * @deprecated since 24
   */
  function notifySaveAsResult(parameter: AbilityResult, requestCode: int): Promise<void>;

  /**
   * 获取前台正在运行的应用Ability的信息。使用callback异步回调。
   *
   * @permission ohos.permission.GET_RUNNING_INFO
   * @param { AsyncCallback<Array<AbilityStateData>> } callback - 以回调方式返回接口运行结果及有关前台Ability的信息，可进行错误处理或其他自定义处理。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  function getForegroundUIAbilities(callback: AsyncCallback<Array<AbilityStateData>>): void;

  /**
   * 获取前台正在运行的应用Ability的信息。使用Promise异步回调。
   *
   * @permission ohos.permission.GET_RUNNING_INFO
   * @returns { Promise<Array<AbilityStateData>> } 以Promise方式返回接口运行结果及有关前台Ability的信息，可进行错误处理或其他自定义处理。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  function getForegroundUIAbilities(): Promise<Array<AbilityStateData>>;

  /**
   * 判断是否允许嵌入式拉起[EmbeddableUIAbility]{@link @ohos.app.ability.EmbeddableUIAbility:EmbeddableUIAbility}。使用Promise异步回调。
   *
   * @param { Context } context - 嵌入式拉起EmbeddableUIAbility的调用方Context。
   * @param { string } appId - 应用的唯一标识，由云端统一分配。
   * @returns { Promise<boolean> } Promise对象。返回true表示允许嵌入式启动；返回false表示不允许嵌入式启动。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 12 dynamic
   * @since 23 static
   */
  function isEmbeddedOpenAllowed(context: Context, appId: string): Promise<boolean>;

  /**
   * 将断言调试结果通知应用程序。使用Promise异步回调。
   *
   * @permission ohos.permission.NOTIFY_DEBUG_ASSERT_RESULT
   * @param { string } sessionId - 指示AssertFault的请求ID。
   * @param { UserStatus } status - 用户的操作状态。
   * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
   * @throws { BusinessError } 201 - The application does not have permission to call the interface.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 12 dynamic
   * @since 23 static
   */
  function notifyDebugAssertResult(sessionId: string, status: UserStatus): Promise<void>;

  /**
   * 常驻进程支持按需启停。
   *
   * @param { string } bundleName - 常驻进程的包名。
   * @param { boolean } enable - 常驻进程的使能状态。true表示该进程为常驻进程；false表示该进程为普通进程，不会进行保活。
   * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
   * @throws { BusinessError } 202 - Not a system application.
   * @throws { BusinessError } 401 - Parameter error. Possible cause: 1.Non empty package name needs to be provided;
   *     2.The second parameter needs to provide a Boolean type setting value.
   * @throws { BusinessError } 16000050 - Internal error.
   * @throws { BusinessError } 16200006 - The caller application can only set the resident status of the configured process.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  function setResidentProcessEnabled(bundleName: string, enable: boolean): Promise<void>;

  /**
   * 查询嵌入式拉起[EmbeddableUIAbility]{@link @ohos.app.ability.EmbeddableUIAbility:EmbeddableUIAbility}的规则。使用Promise异步回调。
   * 该接口仅在Phone和Tablet设备中可正常调用，在其他设备中返回801错误码。
   *
   * @param { Context } context - 嵌入式拉起EmbeddableUIAbility的调用方Context。<br>**说明**：目前仅支持
   *     [UIAbilityContext]{@link ./application/UIAbilityContext:UIAbilityContext}。
   * @param { string } appId - 应用的唯一标识，由云端统一分配。
   * @returns { Promise<AtomicServiceStartupRule> } Promise对象。返回嵌入式拉起原子化服务的规则。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 18 dynamic
   * @since 23 static
   */
  function queryAtomicServiceStartupRule(context: Context, appId: string): Promise<AtomicServiceStartupRule>;

  /**
   * 重启当前原子化服务。
   * 
   * > **说明：**
   * >
   * > - 当前仅支持以独立窗口方式拉起原子化服务。
   * >
   * > - 在调用本接口成功后的3秒内，再次调用本接口、
   * > [ApplicationContext.restartApp()]{@link ./application/ApplicationContext:ApplicationContext.restartApp}或
   * > [UIAbilityContext.restartApp()]{@link ./application/UIAbilityContext:UIAbilityContext.restartApp}接口中的任一接口，系统将返回错误码1
   * > 6000064。
   *
   * @param { Context } context - 当前Ability的上下文。<br>**说明**：当前仅支持
   *     [UIAbilityContext]{@link ./application/UIAbilityContext:UIAbilityContext}。</br>
   * @throws { BusinessError } 16000050 - Internal error. Possible causes: 1. Connect to system service failed;
   *     2.Send restart message to system service failed; 3.System service failed to communicate with dependency module.
   * @throws { BusinessError } 16000053 - The ability is not on the top of the UI.
   * @throws { BusinessError } 16000064 - Restart too frequently. Try again at least 3s later.
   * @throws { BusinessError } 16000086 - The context is not UIAbilityContext.
   * @throws { BusinessError } 16000090 - The caller is not an atomic service.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 20 dynamiconly
   */
  function restartSelfAtomicService(context: Context): void;

  /**
   * 预加载指定的[UIExtensionAbility]{@link @ohos.app.ability.UIExtensionAbility:UIExtensionAbility}并返回预加载UIExtensionAbility实例
   * 的ID。使用Promise异步回调。
   *
   * @permission ohos.permission.PRELOAD_UI_EXTENSION_ABILITY
   * @param { Want } want - 启动Ability的Want信息。
   * @returns { Promise<int> } Promise对象，返回预加载的
   *     [UIExtensionAbility]{@link @ohos.app.ability.UIExtensionAbility:UIExtensionAbility}的ID，用于后续清除或管理操作。
   * @throws { BusinessError } 201 - The application does not have permission to call the interface.
   * @throws { BusinessError } 202 - The application is not system-app, can not use system-api.
   * @throws { BusinessError } 16000001 - The specified ability does not exist.
   * @throws { BusinessError } 16000002 - Incorrect ability type.
   * @throws { BusinessError } 16000004 - Cannot start an invisible component.
   * @throws { BusinessError } 16000050 - Internal error. Possible causes: 1.Connect to system service failed;
   *     2.Send restart message to system service failed; 3.System service failed to communicate with dependency module.
   *     4.Preload UIExtensionAbility timeout.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  function preloadUIExtensionAbility(want: Want): Promise<int>;

  /**
   * 清除指定的[UIExtensionAbility]{@link @ohos.app.ability.UIExtensionAbility:UIExtensionAbility}实例。使用Promise异步回调。
   *
   * @permission ohos.permission.PRELOAD_UI_EXTENSION_ABILITY
   * @param { int } preloadId - 预加载[UIExtensionAbility]{@link @ohos.app.ability.UIExtensionAbility:UIExtensionAbility}实例的ID。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 201 - The application does not have permission to call the interface.
   * @throws { BusinessError } 202 - The application is not system-app, can not use system-api.
   * @throws { BusinessError } 16000003 - The specified ID does not exist. Possible causes:
   *     1.The specified ID is incorrect; 2.The preloaded UIExtensionAbility has been loaded;
   *     3.The preloaded UIExtensionAbility has been destroyed;
   * @throws { BusinessError } 16000050 - Internal error. Possible causes: 1. Connect to system service failed;
   *     2.Send restart message to system service failed; 3.System service failed to communicate with dependency module.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  function clearPreloadedUIExtensionAbility(preloadId: int): Promise<void>;

  /**
   * 清除当前进程中所有已经预加载的[UIExtensionAbility]{@link @ohos.app.ability.UIExtensionAbility:UIExtensionAbility}实例。使用Promise异步回调。
   *
   * @permission ohos.permission.PRELOAD_UI_EXTENSION_ABILITY
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 201 - The application does not have permission to call the interface.
   * @throws { BusinessError } 202 - The application is not system-app, can not use system-api.
   * @throws { BusinessError } 16000050 - Internal error. Possible causes: 1. Connect to system service failed;
   *     2.Send restart message to system service failed; 3.System service failed to communicate with dependency module.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  function clearPreloadedUIExtensionAbilities(): Promise<void>;

  /**
   * 监听当前进程中预加载的[UIExtensionAbility]{@link @ohos.app.ability.UIExtensionAbility:UIExtensionAbility}实例的加载事件。
   *
   * @permission ohos.permission.PRELOAD_UI_EXTENSION_ABILITY
   * @param { PreloadedUIExtensionAbilityLoadedFn } callback - 用于接收被加载的预加载
   *     [UIExtensionAbility]{@link @ohos.app.ability.UIExtensionAbility:UIExtensionAbility}实例ID的回调函数。
   * @throws { BusinessError } 201 - The application does not have permission to call the interface.
   * @throws { BusinessError } 202 - The application is not system-app, can not use system-api.
   * @throws { BusinessError } 16000050 - Internal error. Possible causes: Memory operation error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  function onPreloadedUIExtensionAbilityLoaded(callback: PreloadedUIExtensionAbilityLoadedFn): void;

  /**
   * 注销当前进程中预加载的[UIExtensionAbility]{@link @ohos.app.ability.UIExtensionAbility:UIExtensionAbility}实例的加载监听。
   *
   * @permission ohos.permission.PRELOAD_UI_EXTENSION_ABILITY
   * @param { PreloadedUIExtensionAbilityLoadedFn } [callback] - 需要注销监听的回调函数。如果不传入任何回调函数，则会注销当前进程中所有该事件类型的监听。
   * @throws { BusinessError } 201 - The application does not have permission to call the interface.
   * @throws { BusinessError } 202 - The application is not system-app, can not use system-api.
   * @throws { BusinessError } 16000050 - Internal error. Possible causes: Memory operation error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  function offPreloadedUIExtensionAbilityLoaded(callback?: PreloadedUIExtensionAbilityLoadedFn): void;

  /**
   * 监听当前进程中预加载的[UIExtensionAbility]{@link @ohos.app.ability.UIExtensionAbility:UIExtensionAbility}实例的销毁事件。
   *
   * @permission ohos.permission.PRELOAD_UI_EXTENSION_ABILITY
   * @param { PreloadedUIExtensionAbilityDestroyedFn } callback - 用于接收被销毁的预加载
   *     [UIExtensionAbility]{@link @ohos.app.ability.UIExtensionAbility:UIExtensionAbility}实例ID的回调函数。
   * @throws { BusinessError } 201 - The application does not have permission to call the interface.
   * @throws { BusinessError } 202 - The application is not system-app, can not use system-api.
   * @throws { BusinessError } 16000050 - Internal error. Possible causes: Memory operation error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  function onPreloadedUIExtensionAbilityDestroyed(callback: PreloadedUIExtensionAbilityDestroyedFn): void;

  /**
   * 注销当前进程中预加载的[UIExtensionAbility]{@link @ohos.app.ability.UIExtensionAbility:UIExtensionAbility}实例的销毁监听。
   *
   * @permission ohos.permission.PRELOAD_UI_EXTENSION_ABILITY
   * @param { PreloadedUIExtensionAbilityDestroyedFn } [callback] - 需要注销监听的回调函数。如果不传入任何回调函数，则会注销当前进程中所有该事件类型的监听。
   * @throws { BusinessError } 201 - The application does not have permission to call the interface.
   * @throws { BusinessError } 202 - The application is not system-app, can not use system-api.
   * @throws { BusinessError } 16000050 - Internal error. Possible causes: Memory operation error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  function offPreloadedUIExtensionAbilityDestroyed(callback?: PreloadedUIExtensionAbilityDestroyedFn): void;

  /**
   * 开发者通过调用该接口判断[EmbeddedUIExtensionAbility](docroot://application-models/embeddeduiextensionability.md)是否可以在当前设备上使用。
   *
   * @returns { boolean } 当前设备是否支持[EmbeddedUIExtensionAbility](docroot://application-models/embeddeduiextensionability.md)。返回
   *     true表示当前设备支持；返回false表示当前设备不支持。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function isEmbeddedUIExtensionSupported(): boolean;

  /**
   * AbilityRunningInfo二级模块。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 14 dynamic
   * @since 23 static
   */
  export type AbilityRunningInfo = _AbilityRunningInfo;

  /**
   * AbilityStateData二级模块。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 14 dynamic
   */
  export type AbilityStateData = _AbilityStateData.default;

  /**
   * AbilityStateData二级模块。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 23 static
   */
  export type AbilityStateData = _AbilityStateData;

  /**
   * ExtensionRunningInfo二级模块。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  export type ExtensionRunningInfo = _ExtensionRunningInfo;

  /**
   * AbilityForegroundStateObserver二级模块。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 11 dynamic
   */
  export type AbilityForegroundStateObserver = _AbilityForegroundStateObserver.default;

  /**
   * AbilityForegroundStateObserver二级模块。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 23 static
   */
  export type AbilityForegroundStateObserver = _AbilityForegroundStateObserver;

  /**
   * 预加载[UIExtensionAbility]{@link @ohos.app.ability.UIExtensionAbility:UIExtensionAbility}被销毁时的回调函数类型。
   *
   * @param { int } preloadId - The preload UIExtensionAbility ID.
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  export type PreloadedUIExtensionAbilityDestroyedFn = (preloadId: int) => void;

  /**
   * 预加载[UIExtensionAbility]{@link @ohos.app.ability.UIExtensionAbility:UIExtensionAbility}被加载时的回调函数类型。
   *
   * @param { int } preloadId - The preload UIExtensionAbility ID.
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  export type PreloadedUIExtensionAbilityLoadedFn = (preloadId: int) => void;
}

export default abilityManager;