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

import UIAbility from '../@ohos.app.ability.UIAbility';

/**
 * The module provides the capability of listening for lifecycle state changes of a specified 
 * [UIAbility]{@link @ohos.app.ability.UIAbility}. You can use AbilityMonitor as an input parameter of 
 * [abilityDelegator.addAbilityMonitor]{@link ./application/AbilityDelegator:AbilityDelegator.addAbilityMonitor(monitor: AbilityMonitor, callback: AsyncCallback<void>)}
 *  to register a listener.
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 * @since 23 static
 */
export interface AbilityMonitor {
  /**
   * Name of the UIAbility object to be listened.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  abilityName: string;

  /**
   * Module name of the UIAbility object.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  moduleName?: string;

  /**
   * Callback invoked when the UIAbility object is created.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  onAbilityCreate?: (ability: UIAbility) => void;

  /**
   * Callback invoked when the UIAbility object transitions to the foreground.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  onAbilityForeground?: (ability: UIAbility) => void;

  /**
   * Callback invoked when the UIAbility object transitions to the background.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  onAbilityBackground?: (ability: UIAbility) => void;

  /**
   * Callback invoked when the UIAbility object is destroyed.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  onAbilityDestroy?: (ability: UIAbility) => void;

  /**
   * Callback invoked when a WindowStage instance is created.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  onWindowStageCreate?: (ability: UIAbility) => void;

  /**
   * Callback invoked when the page stack is restored for the target UIAbility during cross-device migration.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  onWindowStageRestore?: (ability: UIAbility) => void;

  /**
   * Callback invoked when the WindowStage instance is destroyed.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  onWindowStageDestroy?: (ability: UIAbility) => void;
}

/*** if arkts dynamic */
export default AbilityMonitor;
/*** endif */