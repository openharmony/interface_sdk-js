/*
 * Copyright (c) 2026 Huawei Device Co., Ltd.
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
  * 当监听到Ability时调用此回调。
  * 
 * @param { any } ability - 表示注册监听的Ability。
 * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
 * @stagemodelonly
 * @atomicservice
 * @since 26.0.0 dynamic
 */
 type AbilityCallbackFn = (ability: any) => void;

/**
  * 当监听到Ability时调用此回调。
  * 
 * @param { Any } ability - 表示注册监听的Ability。
 * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
 * @stagemodelonly
 * @since 26.0.0 static
 */
 type AbilityCallbackFn = (ability: Any) => void;

/**
 * 本模块提供监听指定[UIAbility]{@link @ohos.app.ability.UIAbility}生命周期状态变化的能力。开发者可以将InteropAbilityMonitor作为abilityDelegator.
 * [addInteropAbilityMonitorSync]{@link ./abilityDelegator:AbilityDelegator.addinteropabilitymonitorsync}
 * 的入参来注册监听。
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @stagemodelonly
 * @atomicservice
 * @since 26.0.0 dynamic&static
 */
export interface InteropAbilityMonitor {
  /**
   * 被监听的UIAbility对象名称。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic&static
   */
  abilityName: string;

  /**
   * 被监听的UIAbility对象所属模块名称。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic&static
   */
  moduleName?: string;

  /**
   * UIAbility对象被创建时，触发该回调函数。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic&static
   */
  onAbilityCreate?: AbilityCallbackFn;

  /**
   * UIAbility对象状态变成前台时，触发该回调函数。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic&static
   */
  onAbilityForeground?: AbilityCallbackFn;

  /**
   * UIAbility对象状态变成后台时，触发该回调函数。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic&static
   */
  onAbilityBackground?: AbilityCallbackFn;

  /**
   * UIAbility对象被销毁前，触发该回调函数。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic&static
   */
  onAbilityDestroy?: AbilityCallbackFn;

  /**
   * 当WindowStage实例被创建时，触发该回调函数。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic&static
   */
  onWindowStageCreate?: AbilityCallbackFn;

  /**
   * 当UIAbility跨端迁移时，目标端UIAbility恢复页面栈时，触发该回调函数。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic&static
   */
  onWindowStageRestore?: AbilityCallbackFn;

  /**
   * 当WindowStage被销毁前，触发该回调函数。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic&static
   */
  onWindowStageDestroy?: AbilityCallbackFn;
}

export default InteropAbilityMonitor;
