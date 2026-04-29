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
 * 本模块提供监听指定[UIAbility]{@link @ohos.app.ability.UIAbility}生命周期状态变化的能力。开发者可以将AbilityMonitor作为
 * [abilityDelegator.addAbilityMonitor]{@link ./application/AbilityDelegator:AbilityDelegator.addAbilityMonitor(monitor: AbilityMonitor, callback: AsyncCallback<void>)}
 * 的入参来注册监听。
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 * @since 23 static
 */
export interface AbilityMonitor {
  /**
   * 被监听的UIAbility对象名称。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  abilityName: string;

  /**
   * 被监听的UIAbility对象所属模块名称。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  moduleName?: string;

  /**
   * UIAbility对象被创建时，触发该回调函数。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  onAbilityCreate?: (ability: UIAbility) => void;

  /**
   * UIAbility对象状态变成前台时，触发该回调函数。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  onAbilityForeground?: (ability: UIAbility) => void;

  /**
   * UIAbility对象状态变成后台时，触发该回调函数。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  onAbilityBackground?: (ability: UIAbility) => void;

  /**
   * UIAbility对象被销毁前，触发该回调函数。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  onAbilityDestroy?: (ability: UIAbility) => void;

  /**
   * 当WindowStage实例被创建时，触发该回调函数。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  onWindowStageCreate?: (ability: UIAbility) => void;

  /**
   * 当UIAbility跨端迁移时，目标端UIAbility恢复页面栈时，触发该回调函数。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  onWindowStageRestore?: (ability: UIAbility) => void;

  /**
   * 当WindowStage被销毁前，触发该回调函数。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  onWindowStageDestroy?: (ability: UIAbility) => void;
}

export default AbilityMonitor;