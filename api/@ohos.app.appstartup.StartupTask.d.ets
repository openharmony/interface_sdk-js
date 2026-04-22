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
 * @since 23 static
 */
/*** if arkts dynamic */
@Sendable
/*** endif */
declare class StartupTask {
  /**
   * Called when the dependent startup task is complete.
   *
   * @param { string } dependency - Name of the dependent startup task.
   * @param { Object } result - Execution result of [init]{@link StartupTask#init(context: AbilityStageContext)} of the
   *     dependent startup task.
   * @syscap SystemCapability.Ability.AppStartup
   * @stagemodelonly
   * @since 12 dynamic
   */
  onDependencyCompleted?(dependency: string, result: Object): void;

  /**
   * Called when specific dependent task complete.
   *
   * @param { string } dependency - Indicates name of specific dependent startup task.
   * @param { Any } result - Indicates result of specific dependent startup task.
   * @syscap SystemCapability.Ability.AppStartup
   * @stagemodelonly
   * @since 23 static
   */
  onDependencyCompleted(dependency: string, result: Any): void;

  /**
   * Called when all the dependent startup tasks are complete. You can initialize the startup task in this callback. 
   * This API uses a promise to return the result.
   *
   * @param { AbilityStageContext } context - Context environment of the
   *     [AbilityStage]{@link @ohos.app.ability.AbilityStage:AbilityStage}.
   * @returns { Promise<Object | void> } Promise used to return the execution result.
   * @syscap SystemCapability.Ability.AppStartup
   * @stagemodelonly
   * @since 12 dynamic
   */
  init(context: AbilityStageContext): Promise<Object | void>;

  /**
   * Initializes current startup task.
   * A developer could override this function to init current task and return a result for other tasks.
   *
   * @param { AbilityStageContext } context - Indicates ability stage context.
   * @returns { Promise<Any> | Promise<void> } The result of initialization.
   * @syscap SystemCapability.Ability.AppStartup
   * @stagemodelonly
   * @since 23 static
   */
  init(context: AbilityStageContext): Promise<Any> | Promise<void>;
}

export default StartupTask;