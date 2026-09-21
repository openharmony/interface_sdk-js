/*
 * Copyright (c) 2016 Huawei Device Co., Ltd.
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
 * The callback is called when only an ability is monitored.
 * 
 * @param { any } ability - Indicates the ability to register for listening.
 * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
 * @stagemodelonly
 * @atomicservice
 * @since 26.0.0 dynamic
 */
 type AbilityCallbackFn = (ability: any) => void;

/**
 * The callback is called when only an ability is monitored.
 * 
 * @param { Any } ability - Indicates the ability to register for listening.
 * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
 * @stagemodelonly
 * @since 26.0.0 static
 */
 type AbilityCallbackFn = (ability: Any) => void;

/**
 * Provide methods for matching monitored Ability objects that meet specified conditions.
 * The most recently matched Ability objects will be saved in the InteropAbilityMonitor object.
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @stagemodelonly
 * @atomicservice
 * @since 26.0.0 dynamic&static
 */
export interface InteropAbilityMonitor {
  /**
   * The name of the ability to monitor.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic&static
   */
  abilityName: string;

  /**
   * The name of the module to monitor.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic&static
   */
  moduleName?: string;

  /**
   * Called back when the ability is created.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic&static
   */
  onAbilityCreate?: AbilityCallbackFn;

  /**
   * Called back when the state of the ability changes to foreground.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic&static
   */
  onAbilityForeground?: AbilityCallbackFn;

  /**
   * Called back when the state of the ability changes to background.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic&static
   */
  onAbilityBackground?: AbilityCallbackFn;

  /**
   * Called back before the ability is destroyed.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic&static
   */
  onAbilityDestroy?: AbilityCallbackFn;

  /**
   * Called back when an ability window stage is created.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic&static
   */
  onWindowStageCreate?: AbilityCallbackFn;

  /**
   * Called back when an ability window stage is restored.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic&static
   */
  onWindowStageRestore?: AbilityCallbackFn;

  /**
   * Called back when an ability window stage is destroyed.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic&static
   */
  onWindowStageDestroy?: AbilityCallbackFn;
}

export default InteropAbilityMonitor;
