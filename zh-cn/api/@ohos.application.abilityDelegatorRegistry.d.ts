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
 * @kit API10LessDeprecatedModules
 */

import { AbilityDelegator } from './application/AbilityDelegator'; 
import { AbilityDelegatorArgs } from './application/abilityDelegatorArgs'; 
import { AbilityMonitor } from './application/AbilityMonitor'; 
import { ShellCmdResult } from './application/shellCmdResult';

/**
 * AbilityDelegatorRegistry模块提供用于存储已注册的[AbilityDelegator]{@link ./application/AbilityDelegator:AbilityDelegator}和
 * [AbilityDelegatorArgs]{@link ./application/abilityDelegatorArgs:AbilityDelegatorArgs}对象的全局寄存器的能力，包括获取应用程序的
 * AbilityDelegator对象、获取单元测试参数AbilityDelegatorArgs对象。该模块中的接口只能用于测试框架中。
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @since 8
 * @deprecated since 9
 * @useinstead @ohos.app.ability.abilityDelegatorRegistry:abilityDelegatorRegistry
 */
declare namespace abilityDelegatorRegistry {
  /**
   * 获取应用程序的AbilityDelegator对象。
   *
   * @returns { AbilityDelegator } [AbilityDelegator]{@link ./application/AbilityDelegator:AbilityDelegator}对象。可以用来调度测试框
   *     架相关功能。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 8
   * @deprecated since 9
   * @useinstead @ohos.app.ability.abilityDelegatorRegistry:abilityDelegatorRegistry.getAbilityDelegator
   */
  function getAbilityDelegator(): AbilityDelegator;

  /**
   * 获取单元测试参数AbilityDelegatorArgs对象。
   *
   * @returns { AbilityDelegatorArgs }
      *     [AbilityDelegatorArgs]{@link ./application/abilityDelegatorArgs:AbilityDelegatorArgs}对象。可以用来获取测试参数。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 8
   * @deprecated since 9
   * @useinstead @ohos.app.ability.abilityDelegatorRegistry:abilityDelegatorRegistry.getArguments
   */
  function getArguments(): AbilityDelegatorArgs;

  /**
   * Ability生命周期状态。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 8
   * @deprecated since 9
   * @useinstead @ohos.app.ability.abilityDelegatorRegistry:abilityDelegatorRegistry.AbilityLifecycleState
   */
  export enum AbilityLifecycleState {
    /**
     * 表示无效状态。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @since 8
     * @deprecated since 9
     * @useinstead @ohos.app.ability.abilityDelegatorRegistry:abilityDelegatorRegistry.AbilityLifecycleState.UNINITIALIZED
     */
    UNINITIALIZED = 0,

    /**
     * 表示Ability处于已创建状态。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @since 8
     * @deprecated since 9
     * @useinstead @ohos.app.ability.abilityDelegatorRegistry:abilityDelegatorRegistry.AbilityLifecycleState.CREATE
     */
    CREATE = 1,

    /**
     * 表示Ability处于前台状态。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @since 8
     * @deprecated since 9
     * @useinstead @ohos.app.ability.abilityDelegatorRegistry:abilityDelegatorRegistry.AbilityLifecycleState.FOREGROUND
     */
    FOREGROUND = 2,

    /**
     * 表示Ability处于后台状态。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @since 8
     * @deprecated since 9
     * @useinstead @ohos.app.ability.abilityDelegatorRegistry:abilityDelegatorRegistry.AbilityLifecycleState.BACKGROUND
     */
    BACKGROUND = 3,

    /**
     * 表示Ability处于已销毁状态。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @since 8
     * @deprecated since 9
     * @useinstead @ohos.app.ability.abilityDelegatorRegistry:abilityDelegatorRegistry.AbilityLifecycleState.DESTROY
     */
    DESTROY = 4
  }
}

export default abilityDelegatorRegistry;