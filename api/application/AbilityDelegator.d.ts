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
 * The **AbilityDelegator** module can listen for and manage the lifecycle changes of
 * [UIAbility]{@link ./../@ohos.app.ability.UIAbility} through
 * [AbilityMonitor]{@link ./application/AbilityMonitor:AbilityMonitor} instances. For example, you can obtain the
 * current state of a UIAbility (for example, whether the UIAbility has been created or is in the foreground), obtain
 * the UIAbility that currently has the focus, wait for the UIAbility to enter a lifecycle node (for example, the
 * **onForeground** state), start a specified UIAbility, and set the timeout mechanism.
 * You can obtain **AbilityDelegator** by calling
 * [getAbilityDelegator]{@link ./../@ohos.app.ability.abilityDelegatorRegistry:abilityDelegatorRegistry.getAbilityDelegator}.
 *
 * > **NOTE**
 * >
 * > The APIs of this module can be used only in [JsUnit](docroot://application-test/unittest-guidelines.md).
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 * @since 23 static
 */
export interface AbilityDelegator {
  /**
   * Adds an **AbilityMonitor** instance. This API uses an asynchronous callback to return the result. Multi-thread
   * concurrent calls are not supported.
   *
   * @param { AbilityMonitor } monitor - [AbilityMonitor]{@link ./application/AbilityMonitor:AbilityMonitor} instance.
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the **AbilityMonitor** instance is
   *     added, **err** is **undefined**. Otherwise, **err** is an error object.
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
   * Adds an **AbilityMonitor** instance. This API uses a promise to return the result. Multi-thread concurrent calls
   * are not supported.
   *
   * @param { AbilityMonitor } monitor - [AbilityMonitor]{@link ./application/AbilityMonitor:AbilityMonitor} instance.
   * @returns { Promise<void> } Promise that returns no value.
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
   * Adds an **AbilityMonitor** instance. This API returns the result synchronously. Multi-thread concurrent calls are
   * not supported.
   *
   * @param { AbilityMonitor } monitor - [AbilityMonitor]{@link ./application/AbilityMonitor:AbilityMonitor} instance.
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
   * Add an InteropAbilityMonitor object for monitoring the lifecycle state changes of the specified ability
   *     in this process.
   *
   * @param { InteropAbilityMonitor } monitor - InteropAbilityMonitor object.
   * @throws { BusinessError } 16000100 - Calling AddInteropAbilityMonitorSync failed.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic&static
   */
  addInteropAbilityMonitorSync(monitor: InteropAbilityMonitor): void;

  /**
   * Adds an **AbilityStageMonitor** instance to monitor the lifecycle state changes of an ability stage. This API uses
   * an asynchronous callback to return the result.
   *
   * @param { AbilityStageMonitor } monitor -
   *     [AbilityStageMonitor]{@link ./application/AbilityStageMonitor:AbilityStageMonitor} instance.
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the **AbilityStageMonitor** instance is
   *     added, **err** is undefined. Otherwise, **err** is an error object.
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
   * Adds an **AbilityStageMonitor** instance to monitor the lifecycle state changes of an ability stage. This API uses
   * a promise to return the result.
   *
   * @param { AbilityStageMonitor } monitor -
   *     [AbilityStageMonitor]{@link ./application/AbilityStageMonitor:AbilityStageMonitor} instance.
   * @returns { Promise<void> } Promise that returns no value.
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
   * Adds an **AbilityStageMonitor** instance to monitor the lifecycle state changes of an ability stage. This API
   * returns the result synchronously.
   *
   * @param { AbilityStageMonitor } monitor -
   *     [AbilityStageMonitor]{@link ./application/AbilityStageMonitor:AbilityStageMonitor} instance.
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
   * Removes an **AbilityMonitor** instance. This API uses an asynchronous callback to return the result.
   *
   * @param { AbilityMonitor } monitor - [AbilityMonitor]{@link ./application/AbilityMonitor:AbilityMonitor} instance.
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the **AbilityMonitor** instance is
   *     removed, **err** is **undefined**. Otherwise, **err** is an error object.
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
   * Removes an **AbilityMonitor** instance. This API uses a promise to return the result. Multi-thread concurrent calls
   *  are not supported.
   *
   * @param { AbilityMonitor } monitor - [AbilityMonitor]{@link ./application/AbilityMonitor:AbilityMonitor} instance.
   * @returns { Promise<void> } Promise that returns no value.
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
   * Removes an **AbilityMonitor** instance. This API returns the result synchronously. Multi-thread concurrent calls
   * are not supported.
   *
   * @param { AbilityMonitor } monitor - [AbilityMonitor]{@link ./application/AbilityMonitor:AbilityMonitor} instance.
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
   * Remove a specified InteropAbilityMonitor object from the application memory.
   *
   * @param { InteropAbilityMonitor } monitor - InteropAbilityMonitor object.
   * @throws { BusinessError } 16000100 - Calling RemoveInteropAbilityMonitorSync failed.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic&static
   */
  removeInteropAbilityMonitorSync(monitor: InteropAbilityMonitor): void;

  /**
   * Removes an **AbilityStageMonitor** instance from the application memory. This API uses an asynchronous callback to
   * return the result.
   *
   * @param { AbilityStageMonitor } monitor -
   *     [AbilityStageMonitor]{@link ./application/AbilityStageMonitor:AbilityStageMonitor} instance.
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the **AbilityStageMonitor** instance is
   *     removed, **err** is undefined. Otherwise, **err** is an error object.
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
   * Removes an **AbilityStageMonitor** instance from the application memory. This API uses a promise to return the
   * result.
   *
   * @param { AbilityStageMonitor } monitor -
   *     [AbilityStageMonitor]{@link ./application/AbilityStageMonitor:AbilityStageMonitor} instance.
   * @returns { Promise<void> } Promise that returns no value.
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
   * Removes an **AbilityStageMonitor** instance from the application memory. This API returns the result synchronously.
   *
   * @param { AbilityStageMonitor } monitor -
   *     [AbilityStageMonitor]{@link ./application/AbilityStageMonitor:AbilityStageMonitor} instance.
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
   * Waits for the **Ability** instance that matches the **AbilityMonitor** instance to reach the **onCreate** lifecycle
   *  state and returns the **Ability** instance. This API uses an asynchronous callback to return the result. Multi-
   * thread concurrent calls are not supported.
   *
   * @param { AbilityMonitor } monitor - [AbilityMonitor]{@link ./application/AbilityMonitor:AbilityMonitor} instance.
   * @param { AsyncCallback<UIAbility> } callback - Callback used to return the result. If the operation is successful,
   *     **err** is **undefined** and **data** is the **Ability** instance obtained. Otherwise, **err** is an error object.
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
   * Waits a period of time for the **Ability** instance that matches the **AbilityMonitor** instance to reach the
   * **onCreate** lifecycle state and returns the **Ability** instance. This API uses an asynchronous callback to return
   *  the result. Multi-thread concurrent calls are not supported.
   *
   * @param { AbilityMonitor } monitor - [AbilityMonitor]{@link ./application/AbilityMonitor:AbilityMonitor} instance.
   * @param { long } timeout - Maximum waiting time, in milliseconds. The default value is 5000 ms.
   * @param { AsyncCallback<UIAbility> } callback - Callback used to return the result.
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
   * Waits a period of time for the **Ability** instance that matches the **AbilityMonitor** instance to reach the
   * **onCreate** lifecycle state and returns the **Ability** instance. This API uses a promise to return the result.
   * Multi-thread concurrent calls are not supported.
   *
   * @param { AbilityMonitor } monitor - [AbilityMonitor]{@link ./application/AbilityMonitor:AbilityMonitor} instance.
   * @param { long } [timeout] - Maximum waiting time, in milliseconds. The default value is 5000 ms.
   * @returns { Promise<UIAbility> } Promise used to return the **Ability** instance obtained.
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
   * Returns an **AbilityStage** instance that matches the conditions set in an **AbilityStageMonitor** instance. This
   * API uses an asynchronous callback to return the result.
   *
   * @param { AbilityStageMonitor } monitor -
   *     [AbilityStageMonitor]{@link ./application/AbilityStageMonitor:AbilityStageMonitor} instance.
   * @param { AsyncCallback<AbilityStage> } callback - Callback used to return the result. If the operation is successful,
   *     **err** is undefined and data is the [AbilityStage]{@link ./../@ohos.app.ability.AbilityStage:AbilityStage}
   *     instance obtained. Otherwise, **err** is an error object.
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
   * Returns an **AbilityStage** instance that matches the conditions set in an **AbilityStageMonitor** instance within
   * the specified timeout period. This API uses an asynchronous callback to return the result.
   *
   * @param { AbilityStageMonitor } monitor -
   *     [AbilityStageMonitor]{@link ./application/AbilityStageMonitor:AbilityStageMonitor} instance.
   * @param { long } timeout - Maximum waiting time, in milliseconds. The default value is 5000 ms.
   * @param { AsyncCallback<AbilityStage> } callback - Callback used to return the result. If the operation is successful,
   *     **err** is undefined and data is the [AbilityStage]{@link ./../@ohos.app.ability.AbilityStage:AbilityStage}
   *     instance obtained. Otherwise, **err** is an error object.
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
   * Returns an **AbilityStage** instance that matches the conditions set in an **AbilityStageMonitor** instance. You
   * can specify the timeout period. This API uses a promise to return the result.
   *
   * @param { AbilityStageMonitor } monitor -
   *     [AbilityStageMonitor]{@link ./application/AbilityStageMonitor:AbilityStageMonitor} instance.
   * @param { long } [timeout] - Maximum waiting time, in milliseconds. The default value is 5000 ms.
   * @returns { Promise<AbilityStage> } Promise used to return the
   *     [AbilityStage]{@link ./../@ohos.app.ability.AbilityStage:AbilityStage} instance.
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
   * Obtains the application context.
   *
   * @returns { Context } [Context]{@link ./app/context}.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  getAppContext(): Context;

  /**
   * Obtains the lifecycle state of an ability.
   *
   * @param { UIAbility } ability - Target ability.
   * @returns { int } Lifecycle state of the ability, For details about the state values, see
   *     [AbilityLifecycleState]{@link ./../@ohos.app.ability.abilityDelegatorRegistry:abilityDelegatorRegistry.AbilityLifecycleState}
   *     .
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
   * Obtains the top ability of this application. This API uses an asynchronous callback to return the result. It cannot
   *  be called in the worker thread.
   *
   * @param { AsyncCallback<UIAbility> } callback - Callback used to return the result. If the top ability is obtained,
   *     **err** is **undefined** and **data** is the **Ability** instance obtained. Otherwise, **err** is an error object.
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
   * Obtains the top ability of this application. This API uses a promise to return the result. It cannot be called in
   * the worker thread.
   *
   * @returns { Promise<UIAbility> } Promise used to return the top ability.
   * @throws { BusinessError } 16000100 - Calling GetCurrentTopAbility failed.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @crossplatform [sicne 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  getCurrentTopAbility(): Promise<UIAbility>;

  /**
   * Starts an ability. This API uses an asynchronous callback to return the result.
   *
   * @param { Want } want - **Want** parameter for starting the ability.
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the ability is started, **err** is
   *     **undefined**. Otherwise, **err** is an error object.
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
   * Starts an ability. This API uses a promise to return the result.
   *
   * @param { Want } want - **Want** parameter for starting the ability.
   * @returns { Promise<void> } Promise that returns no value.
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
   * Schedules the lifecycle state of an ability to **Foreground**. This API uses an asynchronous callback to return the
   *  result.
   *
   * @param { UIAbility } ability - Target ability.
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the ability lifecycle state is changed
   *     to **Foreground**, **err** is **undefined**. Otherwise, **err** is an error object.
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
   * Schedules the lifecycle state of an ability to **Foreground**. This API uses a promise to return the result.
   *
   * @param { UIAbility } ability - Target ability.
   * @returns { Promise<void> } Promise that returns no value.
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
   * Schedules the lifecycle state of an ability to **Background**. This API uses an asynchronous callback to return the
   *  result.
   *
   * @param { UIAbility } ability - Target ability.
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the ability lifecycle state is changed
   *     to **Background**, **err** is **undefined**. Otherwise, **err** is an error object.
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
   * Schedules the lifecycle state of an ability to **Background**. This API uses a promise to return the result.
   *
   * @param { UIAbility } ability - Target ability.
   * @returns { Promise<void> } Promise that returns no value.
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
   * Prints log information to the unit test console. This API uses an asynchronous callback to return the result.
   *
   * @param { string } msg - Log string. The value contains a maximum of 10,000 characters.
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the log information is printed to the
   *     unit test console, **err** is **undefined**. Otherwise, **err** is an error object.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  print(msg: string, callback: AsyncCallback<void>): void;

  /**
   * Prints log information to the unit test console. This API uses a promise to return the result.
   *
   * @param { string } msg - Log string. The value contains a maximum of 10,000 characters.
   * @returns { Promise<void> } Promise that returns no value.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  print(msg: string): Promise<void>;

  /**
   * Prints log information to the unit test console.
   *
   * @param { string } msg - Log string. The value contains a maximum of 10,000 characters.
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
   * Executes a shell command. This API uses an asynchronous callback to return the result.
   * Only the following shell commands are supported: aa, bm, cp, mkdir, rm, uinput, hilog, ppwd, echo, uitest, acm,
   * hidumper, wukong, pkill, ps, and pidof.
   *
   * @param { string } cmd - Shell command string.
   * @param { AsyncCallback<ShellCmdResult> } callback - Callback used to return the result. If the shell command is executed
   *     , **err** is **undefined** and **data** is the execution result obtained. Otherwise, **err** is an error object.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  executeShellCommand(cmd: string, callback: AsyncCallback<ShellCmdResult>): void;

  /**
   * Executes a shell command with the timeout period specified. This API uses an asynchronous callback to return the
   * result.
   * Only the following shell commands are supported: aa, bm, cp, mkdir, rm, uinput, hilog, ppwd, echo, uitest, acm,
   * hidumper, wukong, pkill, ps, and pidof.
   *
   * @param { string } cmd - Shell command string.
   * @param { long } timeoutSecs - Command timeout period, in seconds.
   * @param { AsyncCallback<ShellCmdResult> } callback - Callback used to return the result. If the shell command is executed
   *     , **err** is **undefined** and **data** is the execution result obtained. Otherwise, **err** is an error object.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  executeShellCommand(cmd: string, timeoutSecs: long, callback: AsyncCallback<ShellCmdResult>): void;

  /**
   * Executes a shell command with the timeout period specified. This API uses a promise to return the result.
   * Only the following shell commands are supported: aa, bm, cp, mkdir, rm, uinput, hilog, ppwd, echo, uitest, acm,
   * hidumper, wukong, pkill, ps, and pidof.
   *
   * @param { string } cmd - Shell command string.
   * @param { long } [timeoutSecs] - Command timeout period, in seconds. The default value is **0**, indicating that the
   *     timeout period is not set.
   * @returns { Promise<ShellCmdResult> } Promise used to return a
   *     [ShellCmdResult]{@link ./application/shellCmdResult:ShellCmdResult} object.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  executeShellCommand(cmd: string, timeoutSecs?: long): Promise<ShellCmdResult>;

  /**
   * Finishes the test and prints log information to the unit test console. This API uses an asynchronous callback to
   * return the result.
   *
   * @param { string } msg - Log string.
   * @param { long } code - Log code.
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the test finishes and the log
   *     information is printed to the unit test console, **err** is undefined. Otherwise, **err** is an error object.
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
   * Finishes the test and prints log information to the unit test console. This API uses a promise to return the
   * result.
   *
   * @param { string } msg - Log string.
   * @param { long } code - Log code.
   * @returns { Promise<void> } Promise that returns no value.
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
   * Sets a list of mock data.
   *
   * @param { Record<string, string> } mockList - Key-value object of the mock, where **key** is the target path to be
   *     replaced and **value** is the path of the mock implementation to be used for the replacement.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     2.Incorrect parameter types.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @atomicservice
   * @since 11 dynamiconly
   */
  setMockList(mockList: Record<string, string>): void;
}

/*** if arkts dynamic */
export default AbilityDelegator;
/*** endif */
