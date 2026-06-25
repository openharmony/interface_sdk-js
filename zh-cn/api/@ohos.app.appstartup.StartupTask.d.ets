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
 * The module provides capabilities related to startup tasks in
 * [AppStartup](docroot://application-models/app-startup.md).
 *
 * @syscap SystemCapability.Ability.AppStartup
 * @stagemodelonly
 * @since 12 dynamic
 */
@Sendable
declare class StartupTask {
  /**
   * 当依赖的启动任务执行完成时该方法将会被调用。
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
   * @returns { Promise<Object | void> } Promise used to return the execution result.
   * @syscap SystemCapability.Ability.AppStartup
   * @stagemodelonly
   * @since 12 dynamic
   */
  init(context: AbilityStageContext): Promise<Object | void>;
}

export default StartupTask;