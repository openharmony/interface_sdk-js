/*
 * Copyright (c) 2021-2024 Huawei Device Co., Ltd.
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

/**
 * The event data of cli execute.
 *
 * @syscap SystemCapability.Ability.AgentRuntime.Core
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 dynamiconly
 */
export interface CliToolEvent {
  /**
   * Tool event data.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamiconly
   */
  toolEventType: ToolEventType;

  /**
   * Tool event data.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamiconly
   */
  data: string;
}

/**
 * Enum for query entity mode.
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @stagemodelonly
 * @atomicservice
 * @since 26.0.0 dynamiconly
 */
export enum ToolEventType {
  /**
   * stdout event.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamiconly
   */
  STDOUT = 'stdout',

  /**
   * stderr event.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamiconly
   */
  STDERR = 'stderr',

  /**
   * exit event.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamiconly
   */
  EXIT = 'exit',

  /**
   * error event.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamiconly
   */
  ERROR = 'error'
}
