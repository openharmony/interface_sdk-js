/*
 * Copyright (c) 2022-2023 Huawei Device Co., Ltd.
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

/**
 * 本模块提供监听指定[AbilityStage]{@link ./../@ohos.app.ability.AbilityStage:AbilityStage}对象的能力。开发者可以将AbilityStageMonitor作为
 * [abilityDelegator.waitAbilityStageMonitor]{@link AbilityDelegator:AbilityDelegator.waitAbilityStageMonitor(monitor: AbilityStageMonitor, callback: AsyncCallback<AbilityStage>)}
 * 的入参来注册监听。
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 * @since 23 static
 */
export interface AbilityStageMonitor {
  /**
   * 被监听的AbilityStage的模块名。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  moduleName: string;

  /**
   * 被监听的AbilityStage的源路径。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  srcEntrance: string;
}

export default AbilityStageMonitor;