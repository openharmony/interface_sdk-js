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
 * @kit AbilityKit
 */

import { AsyncCallback } from '../@ohos.base';
import { AbilityMonitor } from './AbilityMonitor';
import Context from './Context';
import Want from '../@ohos.app.ability.Want';
import { ShellCmdResult } from './shellCmdResult';
import UIAbility from '../@ohos.app.ability.UIAbility';
import AbilityStage from '../@ohos.app.ability.AbilityStage';
import { AbilityStageMonitor } from './AbilityStageMonitor';
import { InteropAbilityMonitor } from './InteropAbilityMonitor';

/**
 * AbilityDelegator模块可以通过[AbilityMonitor]{@link ./application/AbilityMonitor:AbilityMonitor}实例来监听和管理
 * [UIAbility]{@link ./../@ohos.app.ability.UIAbility}生命周期的变化。例如获取UIAbility当前状态（如是否已创建/是否在前台等）、查询当前获焦的UIAbility、等待UIAbility进入
 * 某个生命周期节点（如等待UIAbility进入onForeground）、启动指定UIAbility、设置超时机制等功能。
 * AbilityDelegator可以通过
 * [getAbilityDelegator]{@link ./../@ohos.app.ability.abilityDelegatorRegistry:abilityDelegatorRegistry.getAbilityDelegator}方
 * 法获取。
 * 
 * > **说明：**
 * >
 * > 本模块接口仅可在[单元测试框架](docroot://application-test/unittest-guidelines.md)中使用。
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 * @since 23 static
 */
export interface AbilityDelegator {
  /**
   * 添加AbilityMonitor实例。使用callback异步回调。不支持多线程并发调用。
   *
   * @param { AbilityMonitor } monitor - [AbilityMonitor]{@link ./application/AbilityMonitor:AbilityMonitor}实例。
   * @param { AsyncCallback<void> } callback - 回调函数。当添加AbilityMonitor实例成功，err为undefined，否则为错误对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     2.Incorrect parameter types.
   * @throws { BusinessError } 16000100 - Calling AddAbilityMonitor failed.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  addAbilityMonitor(monitor: AbilityMonitor, callback: AsyncCallback<void>): void;

  /**
   * 添加AbilityMonitor实例。使用Promise异步回调。不支持多线程并发调用。
   *
   * @param { AbilityMonitor } monitor - [AbilityMonitor]{@link ./application/AbilityMonitor:AbilityMonitor}实例。
   * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     2.Incorrect parameter types.
   * @throws { BusinessError } 16000100 - Calling AddAbilityMonitor failed.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  addAbilityMonitor(monitor: AbilityMonitor): Promise<void>;

  /**
   * 同步添加AbilityMonitor实例。不支持多线程并发调用。
   *
   * @param { AbilityMonitor } monitor - [AbilityMonitor]{@link ./application/AbilityMonitor:AbilityMonitor}实例。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     2.Incorrect parameter types.
   * @throws { BusinessError } 16000100 - Calling AddAbilityMonitorSync failed.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 23 static
   */
  addAbilityMonitorSync(monitor: AbilityMonitor): void;

  /**
   * 新增InteropAbilityMonitor对象，用于监控此进程中指定能力的生命周期状态变化。
   *
   * @param { InteropAbilityMonitor } monitor - InteropAbilityMonitor对象。
   * @throws { BusinessError } 16000100 - Calling InteropAbilityMonitor failed.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic&static
   */
  addInteropAbilityMonitorSync(monitor: InteropAbilityMonitor): void;

  /**
   * 添加一个AbilityStageMonitor对象，用于监视指定AbilityStage的生命周期状态更改。使用callback异步回调。
   *
   * @param { AbilityStageMonitor } monitor -
      *     [AbilityStageMonitor]{@link ./application/AbilityStageMonitor:AbilityStageMonitor} 实例。
   * @param { AsyncCallback<void> } callback - 回调函数。当添加一个用于监视指定AbilityStage的生命周期状态更改的AbilityStageMonitor对象成功，err为undefined，否则
   *     为错误对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     2.Incorrect parameter types.
   * @throws { BusinessError } 16000100 - Calling AddAbilityStageMonitor failed.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  addAbilityStageMonitor(monitor: AbilityStageMonitor, callback: AsyncCallback<void>): void;

  /**
   * 添加一个AbilityStageMonitor对象，用于监视指定AbilityStage的生命周期状态更改。使用Promise异步回调。
   *
   * @param { AbilityStageMonitor } monitor -
      *     [AbilityStageMonitor]{@link ./application/AbilityStageMonitor:AbilityStageMonitor} 实例。
   * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     2.Incorrect parameter types.
   * @throws { BusinessError } 16000100 - Calling AddAbilityStageMonitor failed.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  addAbilityStageMonitor(monitor: AbilityStageMonitor): Promise<void>;

  /**
   * 同步添加一个AbilityStageMonitor对象，用于监视指定AbilityStage的生命周期状态更改。
   *
   * @param { AbilityStageMonitor } monitor -
      *     [AbilityStageMonitor]{@link ./application/AbilityStageMonitor:AbilityStageMonitor} 实例。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     2.Incorrect parameter types.
   * @throws { BusinessError } 16000100 - Calling AddAbilityStageMonitorSync failed.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 23 static
   */
  addAbilityStageMonitorSync(monitor: AbilityStageMonitor): void;

  /**
   * 删除已经添加的AbilityMonitor实例。使用callback异步回调。
   *
   * @param { AbilityMonitor } monitor - [AbilityMonitor]{@link ./application/AbilityMonitor:AbilityMonitor}实例。
   * @param { AsyncCallback<void> } callback - 回调函数。当删除已经添加的AbilityMonitor实例成功，err为undefined，否则为错误对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     2.Incorrect parameter types.
   * @throws { BusinessError } 16000100 - Calling RemoveAbilityMonitor failed.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  removeAbilityMonitor(monitor: AbilityMonitor, callback: AsyncCallback<void>): void;

  /**
   * 删除已经添加的AbilityMonitor实例。使用Promise异步回调。不支持多线程并发调用。
   *
   * @param { AbilityMonitor } monitor - [AbilityMonitor]{@link ./application/AbilityMonitor:AbilityMonitor}实例。
   * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     2.Incorrect parameter types.
   * @throws { BusinessError } 16000100 - Calling RemoveAbilityMonitor failed.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  removeAbilityMonitor(monitor: AbilityMonitor): Promise<void>;

  /**
   * 同步删除已经添加的AbilityMonitor实例。不支持多线程并发调用。
   *
   * @param { AbilityMonitor } monitor - [AbilityMonitor]{@link ./application/AbilityMonitor:AbilityMonitor}实例。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     2.Incorrect parameter types.
   * @throws { BusinessError } 16000100 - Calling RemoveAbilityMonitorSync failed.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 23 static
   */
  removeAbilityMonitorSync(monitor: AbilityMonitor): void;

  /**
   * 从应用程序内存中移除指定的InteropAbilityMonitor对象。
   *
   * @param { InteropAbilityMonitor } monitor - InteropAbilityMonitor对象。
   * @throws { BusinessError } 16000100 - Calling removeInteropAbilityMonitorSync failed.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic&static
   */
  removeInteropAbilityMonitorSync(monitor: InteropAbilityMonitor): void;

  /**
   * 从应用程序内存中删除指定的AbilityStageMonitor对象。使用callback异步回调。
   *
   * @param { AbilityStageMonitor } monitor -
      *     [AbilityStageMonitor]{@link ./application/AbilityStageMonitor:AbilityStageMonitor} 实例。
   * @param { AsyncCallback<void> } callback - 回调函数。当从应用程序内存中删除指定的AbilityStageMonitor对象成功，err为undefined，否则为错误对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     2.Incorrect parameter types.
   * @throws { BusinessError } 16000100 - Calling RemoveAbilityStageMonitor failed.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  removeAbilityStageMonitor(monitor: AbilityStageMonitor, callback: AsyncCallback<void>): void;

  /**
   * 从应用程序内存中删除指定的AbilityStageMonitor对象。使用Promise异步回调。
   *
   * @param { AbilityStageMonitor } monitor -
      *     [AbilityStageMonitor]{@link ./application/AbilityStageMonitor:AbilityStageMonitor} 实例。
   * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     2.Incorrect parameter types.
   * @throws { BusinessError } 16000100 - Calling RemoveAbilityStageMonitor failed.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  removeAbilityStageMonitor(monitor: AbilityStageMonitor): Promise<void>;

  /**
   * 同步从应用程序内存中删除指定的AbilityStageMonitor对象。
   *
   * @param { AbilityStageMonitor } monitor -
      *     [AbilityStageMonitor]{@link ./application/AbilityStageMonitor:AbilityStageMonitor} 实例。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     2.Incorrect parameter types.
   * @throws { BusinessError } 16000100 - Calling RemoveAbilityStageMonitorSync failed.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 23 static
   */
  removeAbilityStageMonitorSync(monitor: AbilityStageMonitor): void;

  /**
   * 等待与AbilityMonitor实例匹配的Ability到达OnCreate生命周期，并返回Ability实例。使用callback异步回调。不支持多线程并发调用。
   *
   * @param { AbilityMonitor } monitor - [AbilityMonitor]{@link ./application/AbilityMonitor:AbilityMonitor}实例。
   * @param { AsyncCallback<UIAbility> } callback - 回调函数。当等待与AbilityMonitor实例匹配的Ability到达OnCreate生命周期成功，err为undefined，data为获取
   *     到的Ability实例，否则为错误对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     2.Incorrect parameter types.
   * @throws { BusinessError } 16000100 - Calling WaitAbilityMonitor failed.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  waitAbilityMonitor(monitor: AbilityMonitor, callback: AsyncCallback<UIAbility>): void;

  /**
   * 设置等待时间，等待与AbilityMonitor实例匹配的Ability到达OnCreate生命周期，并返回Ability实例。使用callback异步回调。不支持多线程并发调用。
   *
   * @param { AbilityMonitor } monitor - [AbilityMonitor]{@link ./application/AbilityMonitor:AbilityMonitor}实例。
   * @param { long } timeout - 最大等待时间，单位毫秒（ms），默认值为5000毫秒。
   * @param { AsyncCallback<UIAbility> } callback - 表示指定的回调方法。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     2.Incorrect parameter types.
   * @throws { BusinessError } 16000100 - Calling WaitAbilityMonitor failed.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  waitAbilityMonitor(monitor: AbilityMonitor, timeout: long, callback: AsyncCallback<UIAbility>): void;

  /**
   * 设置等待时间，等待与AbilityMonitor实例匹配的Ability到达OnCreate生命周期，并返回Ability实例。使用Promise异步回调。不支持多线程并发调用。
   *
   * @param { AbilityMonitor } monitor - [AbilityMonitor]{@link ./application/AbilityMonitor:AbilityMonitor}实例。
   * @param { long } [timeout] - 最大等待时间，单位毫秒（ms），默认值为5000毫秒。
   * @returns { Promise<UIAbility> } Promise对象，返回Ability实例。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     2.Incorrect parameter types.
   * @throws { BusinessError } 16000100 - Calling WaitAbilityMonitor failed.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  waitAbilityMonitor(monitor: AbilityMonitor, timeout?: long): Promise<UIAbility>;

  /**
   * 返回与AbilityStageMonitor中设置条件相匹配的AbilityStage对象。使用callback异步回调。
   *
   * @param { AbilityStageMonitor } monitor -
      *     [AbilityStageMonitor]{@link ./application/AbilityStageMonitor:AbilityStageMonitor} 实例。
   * @param { AsyncCallback<AbilityStage> } callback - 回调函数。当等待并返回与给定AbilityStageMonitor中设置的条件匹配的AbilityStage对象的操作成功，err为
   *     undefined，data为获取到的[AbilityStage]{@link ./../@ohos.app.ability.AbilityStage:AbilityStage}对象；否则为错误对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     2.Incorrect parameter types.
   * @throws { BusinessError } 16000100 - Calling WaitAbilityStageMonitor failed.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  waitAbilityStageMonitor(monitor: AbilityStageMonitor, callback: AsyncCallback<AbilityStage>): void;

  /**
   * 在指定的超时最大等待时间内，返回与AbilityStageMonitor中设置条件相匹配的AbilityStage对象。使用callback异步回调。
   *
   * @param { AbilityStageMonitor } monitor -
      *     [AbilityStageMonitor]{@link ./application/AbilityStageMonitor:AbilityStageMonitor} 实例。
   * @param { long } timeout - 超时最大等待时间，单位毫秒（ms），默认值为5000毫秒。
   * @param { AsyncCallback<AbilityStage> } callback - 回调函数。当等待并返回与给定AbilityStageMonitor中设置的条件匹配的AbilityStage对象的操作成功，err为
   *     undefined，data为获取到的[AbilityStage]{@link ./../@ohos.app.ability.AbilityStage:AbilityStage}对象；否则为错误对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     2.Incorrect parameter types.
   * @throws { BusinessError } 16000100 - Calling WaitAbilityStageMonitor failed.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  waitAbilityStageMonitor(monitor: AbilityStageMonitor, timeout: long, callback: AsyncCallback<AbilityStage>): void;

  /**
   * 返回与AbilityStageMonitor中设置条件相匹配的AbilityStage对象，支持设置超时最大等待时间。使用Promise异步回调。
   *
   * @param { AbilityStageMonitor } monitor -
      *     [AbilityStageMonitor]{@link ./application/AbilityStageMonitor:AbilityStageMonitor} 实例。
   * @param { long } [timeout] - 超时最大等待时间，单位毫秒（ms），默认值为5000毫秒。
   * @returns { Promise<AbilityStage> } Promise对象，返回
   *     [AbilityStage]{@link ./../@ohos.app.ability.AbilityStage:AbilityStage}对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     2.Incorrect parameter types.
   * @throws { BusinessError } 16000100 - Calling WaitAbilityStageMonitor failed.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  waitAbilityStageMonitor(monitor: AbilityStageMonitor, timeout?: long): Promise<AbilityStage>;

  /**
   * 获取应用Context。
   *
   * @returns { Context } 应用[Context]{@link ./app/context}。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  getAppContext(): Context;

  /**
   * 获取指定ability的生命周期状态。
   *
   * @param { UIAbility } ability - 指定Ability对象。
   * @returns { int } 指定ability的生命周期状态。状态枚举值使用
   *     [AbilityLifecycleState]{@link ./../@ohos.app.ability.abilityDelegatorRegistry:abilityDelegatorRegistry.AbilityLifecycleState}
   *     。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     2.Incorrect parameter types.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  getAbilityState(ability: UIAbility): int;

  /**
   * 获取当前应用顶部Ability。使用callback异步回调。不支持Worker线程调用。
   *
   * @param { AsyncCallback<UIAbility> } callback - 回调函数。当获取当前应用顶部Ability成功，err为undefined，data为获取到的Ability实例；否则为错误对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     2.Incorrect parameter types.
   * @throws { BusinessError } 16000100 - Calling GetCurrentTopAbility failed.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  getCurrentTopAbility(callback: AsyncCallback<UIAbility>): void;

  /**
   * 获取当前应用顶部Ability。使用Promise异步回调。不支持Worker线程调用。
   *
   * @returns { Promise<UIAbility> } Promise对象，返回前应用顶部Ability。
   * @throws { BusinessError } 16000100 - Calling GetCurrentTopAbility failed.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @crossplatform [sicne 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  getCurrentTopAbility(): Promise<UIAbility>;

  /**
   * 启动指定Ability。使用callback异步回调。
   *
   * @param { Want } want - 启动Ability参数。
   * @param { AsyncCallback<void> } callback - 回调函数。当启动指定Ability成功，err为undefined，否则为错误对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     2.Incorrect parameter types.
   * @throws { BusinessError } 16000001 - The specified ability does not exist.
   * @throws { BusinessError } 16000002 - Incorrect ability type.
   * @throws { BusinessError } 16000004 - Cannot start an invisible component.
   * @throws { BusinessError } 16000005 - The specified process does not have the permission.
   * @throws { BusinessError } 16000006 - Cross-user operations are not allowed.
   * @throws { BusinessError } 16000008 - The crowdtesting application expires.
   * @throws { BusinessError } 16000009 - An ability cannot be started or stopped in Wukong mode.
   * @throws { BusinessError } 16000010 - The call with the continuation and prepare continuation flag is forbidden.
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @throws { BusinessError } 16000050 - Internal error.
   * @throws { BusinessError } 16000053 - The ability is not on the top of the UI.
   * @throws { BusinessError } 16000055 - Installation-free timed out.
   * @throws { BusinessError } 16200001 - The caller has been released.
   * @throws { BusinessError } 16000012 - The application is controlled. [since 10]
   * @throws { BusinessError } 16000013 - The application is controlled by EDM. [since 10]
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  startAbility(want: Want, callback: AsyncCallback<void>): void;

  /**
   * 启动指定Ability。使用Promise异步回调。
   *
   * @param { Want } want - 启动Ability参数。
   * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     2.Incorrect parameter types.
   * @throws { BusinessError } 16000001 - The specified ability does not exist.
   * @throws { BusinessError } 16000002 - Incorrect ability type.
   * @throws { BusinessError } 16000004 - Cannot start an invisible component.
   * @throws { BusinessError } 16000005 - The specified process does not have the permission.
   * @throws { BusinessError } 16000006 - Cross-user operations are not allowed.
   * @throws { BusinessError } 16000008 - The crowdtesting application expires.
   * @throws { BusinessError } 16000009 - An ability cannot be started or stopped in Wukong mode.
   * @throws { BusinessError } 16000010 - The call with the continuation and prepare continuation flag is forbidden.
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @throws { BusinessError } 16000050 - Internal error.
   * @throws { BusinessError } 16000053 - The ability is not on the top of the UI.
   * @throws { BusinessError } 16000055 - Installation-free timed out.
   * @throws { BusinessError } 16200001 - The caller has been released.
   * @throws { BusinessError } 16000012 - The application is controlled. [since 10]
   * @throws { BusinessError } 16000013 - The application is controlled by EDM. [since 10]
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  startAbility(want: Want): Promise<void>;

  /**
   * 调度指定Ability生命周期状态到Foreground状态。使用callback异步回调。
   *
   * @param { UIAbility } ability - 指定Ability对象。
   * @param { AsyncCallback<void> } callback - 回调函数。当调度指定Ability生命周期状态到Foreground状态成功，err为undefined，否则为错误对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     2.Incorrect parameter types.
   * @throws { BusinessError } 16000100 - Calling DoAbilityForeground failed.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  doAbilityForeground(ability: UIAbility, callback: AsyncCallback<void>): void;

  /**
   * 调度指定Ability生命周期状态到Foreground状态。使用Promise异步回调。
   *
   * @param { UIAbility } ability - 指定Ability对象。
   * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     2.Incorrect parameter types.
   * @throws { BusinessError } 16000100 - Calling DoAbilityForeground failed.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  doAbilityForeground(ability: UIAbility): Promise<void>;

  /**
   * 调度指定Ability生命周期状态到Background状态。使用callback异步回调。
   *
   * @param { UIAbility } ability - 指定Ability对象。
   * @param { AsyncCallback<void> } callback - 回调函数。当调度指定Ability生命周期状态到Background状态成功，err为undefined，否则为错误对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     2.Incorrect parameter types.
   * @throws { BusinessError } 16000100 - Calling DoAbilityBackground failed.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  doAbilityBackground(ability: UIAbility, callback: AsyncCallback<void>): void;

  /**
   * 调度指定Ability生命周期状态到Background状态。使用Promise异步回调。
   *
   * @param { UIAbility } ability - 指定Ability对象。
   * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     2.Incorrect parameter types.
   * @throws { BusinessError } 16000100 - Calling DoAbilityBackground failed.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  doAbilityBackground(ability: UIAbility): Promise<void>;

  /**
   * 打印日志信息到单元测试终端控制台。使用callback异步回调。
   *
   * @param { string } msg - 日志字符串。字符串最大长度为10000。
   * @param { AsyncCallback<void> } callback - 回调函数。当打印日志信息到单元测试终端控制台成功，err为undefined，否则为错误对象。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  print(msg: string, callback: AsyncCallback<void>): void;

  /**
   * 打印日志信息到单元测试终端控制台。使用Promise异步回调。
   *
   * @param { string } msg - 日志字符串。字符串最大长度为10000。
   * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  print(msg: string): Promise<void>;

  /**
   * 打印日志信息到单元测试终端控制台。
   *
   * @param { string } msg - 日志字符串。字符串最大长度为10000。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     2.Incorrect parameter types.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  printSync(msg: string): void;

  /**
   * 执行指定的shell命令。使用callback异步回调。
   * 仅支持如下shell命令：aa, bm, cp, mkdir, rm, uinput, hilog, ppwd, echo, uitest, acm, hidumper, wukong, pkill, ps, pidof
   *
   * @param { string } cmd - shell命令字符串。
   * @param { AsyncCallback<ShellCmdResult> } callback - 回调函数。当执行指定的shell命令成功，err为undefined，data为获取到的执行结果；否则为错误对象。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  executeShellCommand(cmd: string, callback: AsyncCallback<ShellCmdResult>): void;

  /**
   * 指定超时时间，并执行指定的shell命令。使用callback异步回调。
   * 仅支持如下shell命令：aa, bm, cp, mkdir, rm, uinput, hilog, ppwd, echo, uitest, acm, hidumper, wukong, pkill, ps, pidof
   *
   * @param { string } cmd - shell命令字符串。
   * @param { long } timeoutSecs - 设定命令超时时间，单位秒（s）。
   * @param { AsyncCallback<ShellCmdResult> } callback - 回调函数。当执行指定的shell命令成功，err为undefined，data为获取到的执行结果；否则为错误对象。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  executeShellCommand(cmd: string, timeoutSecs: long, callback: AsyncCallback<ShellCmdResult>): void;

  /**
   * 指定超时时间，并执行指定的shell命令。使用Promise异步回调。
   * 仅支持如下shell命令：aa, bm, cp, mkdir, rm, uinput, hilog, ppwd, echo, uitest, acm, hidumper, wukong, pkill, ps, pidof
   *
   * @param { string } cmd - shell命令字符串。
   * @param { long } [timeoutSecs] - 设定命令超时时间，单位秒（s）。默认值为0，表示不设置超时时间。
   * @returns { Promise<ShellCmdResult> } Promise对象，返回Shell命令执行结果
   *     [ShellCmdResult]{@link ./application/shellCmdResult:ShellCmdResult}对象。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  executeShellCommand(cmd: string, timeoutSecs?: long): Promise<ShellCmdResult>;

  /**
   * 结束测试并打印日志信息到单元测试终端控制台。使用callback异步回调。
   *
   * @param { string } msg - 日志字符串。
   * @param { long } code - 日志码。
   * @param { AsyncCallback<void> } callback - 回调函数。当结束测试并打印日志信息到单元测试终端控制台成功，err为undefined，否则为错误对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     2.Incorrect parameter types.
   * @throws { BusinessError } 16000100 - Calling FinishTest failed.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  finishTest(msg: string, code: long, callback: AsyncCallback<void>): void;

  /**
   * 结束测试并打印日志信息到单元测试终端控制台。使用Promise异步回调。
   *
   * @param { string } msg - 日志字符串。
   * @param { long } code - 日志码。
   * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     2.Incorrect parameter types.
   * @throws { BusinessError } 16000100 - Calling FinishTest failed.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  finishTest(msg: string, code: long): Promise<void>;

  /**
   * 设置模块的mock替换关系。
   *
   * @param { Record<string, string> } mockList - 模块mock替换关系的键值对象，其中key为待替换的目标路径，value为用于替换的mock实现文件的路径。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     2.Incorrect parameter types.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @atomicservice
   * @since 11 dynamiconly
   */
  setMockList(mockList: Record<string, string>): void;
}

export default AbilityDelegator;