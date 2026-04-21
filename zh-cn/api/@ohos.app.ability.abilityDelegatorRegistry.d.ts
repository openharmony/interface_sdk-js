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
 * @kit TestKit
 */

import { AbilityDelegator as _AbilityDelegator } from './application/AbilityDelegator';
import { AbilityDelegatorArgs as _AbilityDelegatorArgs } from './application/abilityDelegatorArgs';
import { AbilityMonitor as _AbilityMonitor } from './application/AbilityMonitor';
import { AbilityStageMonitor as _AbilityStageMonitor } from './application/AbilityStageMonitor';
import { ShellCmdResult as _ShellCmdResult } from './application/shellCmdResult';
import { InteropAbilityMonitor as _InteropAbilityMonitor } from './application/InteropAbilityMonitor';

/**
 * AbilityDelegatorRegistry是自动化测试框架使用指南模块，该模块用于获取[AbilityDelegator]{@link application/AbilityDelegator:AbilityDelegator}
 * 和[AbilityDelegatorArgs]{@link application/abilityDelegatorArgs:AbilityDelegatorArgs}对象，其中
 * [AbilityDelegator]{@link application/AbilityDelegator:AbilityDelegator}对象提供添加用于监视指定ability的生命周期状态更改的
 * [AbilityMonitor]{@link application/AbilityMonitor:AbilityMonitor}对象的能力，
 * [AbilityDelegatorArgs]{@link application/abilityDelegatorArgs:AbilityDelegatorArgs}对象提供获取当前测试参数的能力。
 *
 * > **说明：**
 * >
 * > 本模块接口仅可在[单元测试框架](docroot://application-test/unittest-guidelines.md)中使用。
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 * @since 23 static
 */
declare namespace abilityDelegatorRegistry {
  /**
   * 获取应用程序的[AbilityDelegator]{@link application/AbilityDelegator:AbilityDelegator}对象，该对象能够使用调度测试框架的相关功能。
   *
   * @returns { AbilityDelegator } [AbilityDelegator]{@link application/AbilityDelegator:AbilityDelegator}对象。可以用来调度测试框架相关功能。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  function getAbilityDelegator(): AbilityDelegator;

  /**
   * 获取单元测试参数[AbilityDelegatorArgs]{@link application/abilityDelegatorArgs:AbilityDelegatorArgs}对象。
   *
   * @returns { AbilityDelegatorArgs } [AbilityDelegatorArgs]{@link application/abilityDelegatorArgs:AbilityDelegatorArgs}对象。
   *     可以用来获取测试参数。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  function getArguments(): AbilityDelegatorArgs;

  /**
   * Ability生命周期状态，该类型为枚举，可配合[AbilityDelegator]{@link application/AbilityDelegator:AbilityDelegator}的
   * [getAbilityState(ability)]{@link application/AbilityDelegator:AbilityDelegator.getAbilityState}方法返回不同ability生命周期。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  export enum AbilityLifecycleState {
    /**
     * 表示Ability处于无效状态。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    UNINITIALIZED = 0,

    /**
     * 表示Ability处于已创建状态。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    CREATE = 1,

    /**
     * 表示Ability处于前台状态。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    FOREGROUND = 2,

    /**
     * 表示Ability处于后台状态。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    BACKGROUND = 3,

    /**
     * 表示Ability处于已销毁状态。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    DESTROY = 4
  }

  /**
   * AbilityDelegator模块。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  export type AbilityDelegator = _AbilityDelegator;

  /**
   * AbilityDelegatorArgs模块。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  export type AbilityDelegatorArgs = _AbilityDelegatorArgs;

  /**
   * AbilityMonitor模块。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  export type AbilityMonitor = _AbilityMonitor;

  /**
   * 提供匹配满足指定条件的监控对象的方法。
   * 最近匹配的Ability对象将保存在InteropAbilityMonitor对象中。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic&static
   */
  export type InteropAbilityMonitor = _InteropAbilityMonitor;

  /**
   * ShellCmdResult模块。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  export type ShellCmdResult = _ShellCmdResult;

  /**
   * AbilityStageMonitor模块。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   * @since 23 static
   */
  export type AbilityStageMonitor = _AbilityStageMonitor;
}

export default abilityDelegatorRegistry;