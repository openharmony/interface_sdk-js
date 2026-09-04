/*
 * Copyright (c) 2024 Huawei Device Co., Ltd.
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

import AbilityStageContext from './application/AbilityStageContext';
/**
 * 本模块提供[应用启动框架](docroot://application-models/app-startup.md)任务的相关能力。开发者可继承StartupTask创建启动任务，
 * 并通过init执行初始化逻辑，通过onDependencyCompleted感知依赖任务完成。
 *
 * > **说明：**
 * >
 * > 本模块首批接口从API version 12开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。
 * >
 * > 本模块接口仅可在Stage模型下使用。
 *
 * @syscap SystemCapability.Ability.AppStartup
 * @stagemodelonly
 * @since 12 dynamic
 */
@Sendable
declare class StartupTask {
  /**
   * 当依赖的启动任务执行完成时回调该方法，开发者可在该方法中处理依赖任务的执行结果。
   * 
   * > **说明：**
   * >
   * > 每当一个依赖任务完成时触发一次。该方法在[init]{@link StartupTask#init(context: AbilityStageContext)}方法之前被调用，可用于处理单个依赖任务的执行结果。
   * > init方法则在所有依赖任务都完成后被调用一次。
   *
   * @param { string } dependency - 依赖的启动任务名称。
   * @param { Object } result - 依赖的启动任务[init]{@link StartupTask#init(context: AbilityStageContext)}返回的执行结果。
   * @syscap SystemCapability.Ability.AppStartup
   * @stagemodelonly
   * @since 12 dynamic
   */
  onDependencyCompleted?(dependency: string, result: Object): void;

  /**
   * 当所有依赖的启动任务都执行完成后，该方法将会被调用。开发者可以在该回调中执行该启动任务的初始化操作。使用Promise异步回调。
   *
   * @param { AbilityStageContext } context - [AbilityStage]{@link @ohos.app.ability.AbilityStage:AbilityStage}的上下文环境
   * @returns { Promise<Object | void> } Promise对象，用于返回启动任务执行结果对象或void。
   * @syscap SystemCapability.Ability.AppStartup
   * @stagemodelonly
   * @since 12 dynamic
   */
  init(context: AbilityStageContext): Promise<Object | void>;
}

export default StartupTask;