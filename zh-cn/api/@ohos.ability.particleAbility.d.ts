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

import { AsyncCallback } from './@ohos.base';
import { StartAbilityParameter } from './ability/startAbilityParameter';
import { DataAbilityHelper } from './ability/dataAbilityHelper';
import { NotificationRequest } from './notification/notificationRequest';
import { ConnectOptions } from './ability/connectOptions';
import Want from './@ohos.app.ability.Want';

/**
 * particleAbility模块提供了操作Data和Service类型的Ability的能力，包括启动、停止指定的particleAbility，获取dataAbilityHelper，连接、断连指定的ServiceAbility等
 * 。
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
 * @famodelonly
 * @since 7 dynamiconly
 */
declare namespace particleAbility {
  /**
   * 启动指定的particleAbility。使用callback异步回调。
   * 
   * > **说明：**
   * >
   * > 组件启动规则详见：[组件启动规则（FA模型）](docroot://application-models/component-startup-rules-fa.md)。
   *
   * @param { StartAbilityParameter } parameter - 表示启动的ability。
   * @param { AsyncCallback<void> } callback - 回调函数。当启动指定的particleAbility成功，err为undefined，否则为错误对象。
   * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
   * @famodelonly
   * @since 7 dynamiconly
   */
  function startAbility(parameter: StartAbilityParameter, callback: AsyncCallback<void>): void;

  /**
   * 启动指定的particleAbility。使用Promise异步回调。
   * 
   * > **说明：**
   * >
   * > 组件启动规则详见：[组件启动规则（FA模型）](docroot://application-models/component-startup-rules-fa.md)。
   *
   * @param { StartAbilityParameter } parameter - 表示启动的ability。
   * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
   * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
   * @famodelonly
   * @since 7 dynamiconly
   */
  function startAbility(parameter: StartAbilityParameter): Promise<void>;

  /**
   * 销毁当前particleAbility。使用callback异步回调。
   *
   * @param { AsyncCallback<void> } callback - 回调函数。当销毁当前particleAbility成功，err为undefined，否则为错误对象。
   * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
   * @famodelonly
   * @since 7 dynamiconly
   */
  function terminateSelf(callback: AsyncCallback<void>): void;

  /**
   * 销毁当前particleAbility。使用Promise异步回调。
   *
   * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
   * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
   * @famodelonly
   * @since 7 dynamiconly
   */
  function terminateSelf(): Promise<void>;

  /**
   * 获取dataAbilityHelper对象。
   * 
   * > **说明：**
   * >
   * > 组件启动规则详见：[组件启动规则（FA模型）](docroot://application-models/component-startup-rules-fa.md)。
   * > 跨应用访问dataAbility，对端应用需配置关联启动。
   *
   * @param { string } uri - 表示要打开的文件的路径。
   * @returns { DataAbilityHelper } 用来协助其他Ability访问DataAbility的工具类。
   * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
   * @famodelonly
   * @since 7 dynamiconly
   */
  function acquireDataAbilityHelper(uri: string): DataAbilityHelper;

  /**
   * 向系统申请长时任务。使用callback异步回调。
   *
   * @permission ohos.permission.KEEP_BACKGROUND_RUNNING
   * @param { number } id - 长时任务通知id号。
   * @param { NotificationRequest } request - 通知参数，用于显示通知栏的信息。
   * @param { AsyncCallback<void> } callback - 回调函数。当向系统申请长时任务成功，err为undefined，否则为错误对象。
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
   * @famodelonly
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead @ohos.resourceschedule.backgroundTaskManager:backgroundTaskManager.startBackgroundRunning
   */
  function startBackgroundRunning(id: number, request: NotificationRequest, callback: AsyncCallback<void>): void;

  /**
   * 向系统申请长时任务。使用Promise异步回调。
   *
   * @permission ohos.permission.KEEP_BACKGROUND_RUNNING
   * @param { number } id - 长时任务通知id号。
   * @param { NotificationRequest } request - 通知参数，用于显示通知栏的信息。
   * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
   * @famodelonly
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead @ohos.resourceschedule.backgroundTaskManager:backgroundTaskManager.startBackgroundRunning
   */
  function startBackgroundRunning(id: number, request: NotificationRequest): Promise<void>;

  /**
   * 向系统申请取消长时任务。使用callback异步回调。
   *
   * @param { AsyncCallback<void> } callback - 回调函数。当向系统申请取消长时任务成功，err为undefined，否则为错误对象。
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
   * @famodelonly
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead @ohos.resourceschedule.backgroundTaskManager:backgroundTaskManager.stopBackgroundRunning
   */
  function cancelBackgroundRunning(callback: AsyncCallback<void>): void;

  /**
   * 向系统申请取消长时任务。使用Promise异步回调。
   *
   * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
   * @famodelonly
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead @ohos.resourceschedule.backgroundTaskManager:backgroundTaskManager.stopBackgroundRunning
   */
  function cancelBackgroundRunning(): Promise<void>;

  /**
   * 将当前ability与指定的ServiceAbility进行连接。
   * 
   * > **说明：**
   * >
   * > 组件启动规则详见：[组件启动规则（FA模型）](docroot://application-models/component-startup-rules-fa.md)。
   * > > 跨应用连接serviceAbility，对端应用需配置关联启动。
   *
   * @param { Want } request - 表示被连接的ServiceAbility。
   * @param { ConnectOptions } options - 连接回调方法。
   * @returns { number } 连接的ServiceAbility的ID(ID从0开始自增，每连接成功一次ID加1)。
   * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
   * @famodelonly
   * @since 7 dynamiconly
   */
  function connectAbility(request: Want, options: ConnectOptions): number;

  /**
   * 断开当前ability与指定ServiceAbility的连接。使用callback异步回调。
   *
   * @param { number } connection - 表示断开连接的ServiceAbility的ID。
   * @param { AsyncCallback<void> } callback - 回调函数。当断开当前ability与指定ServiceAbility的连接成功，err为undefined，否则为错误对象。
   * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
   * @famodelonly
   * @since 7 dynamiconly
   */
  function disconnectAbility(connection: number, callback: AsyncCallback<void>): void;

  /**
   * 断开当前ability与指定ServiceAbility的连接。使用Promise异步回调。
   *
   * @param { number } connection - 表示断开连接的ServiceAbility的ID。
   * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
   * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
   * @famodelonly
   * @since 7 dynamiconly
   */
  function disconnectAbility(connection: number): Promise<void>;

  /**
   * 定义启动Ability时返回的错误码。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
   * @famodelonly
   * @since 7 dynamiconly
   */
  export enum ErrorCode {
    /**
     * 无效的参数。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
     * @famodelonly
     * @since 7 dynamiconly
     */
    INVALID_PARAMETER = -1
  }
}

export default particleAbility;