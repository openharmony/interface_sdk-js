/*
 * Copyright (c) 2026 Huawei Device Co., Ltd.
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

import window from './@ohos.window';

/**
 * 当仅注册监听Ability时，调用该回调函数。
 *
 * @param { any } ability - 表示注册监听的Ability。
 * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
 * @stagemodelonly
 * @since 23 dynamic
 */
type AbilityCallbackFn = (ability: any) => void;

/**
 * 当同时注册监听Ability和WindowStage时，调用该回调函数。
 *
 * @param { any } ability - 表示注册监听的Ability。
 * @param { window.WindowStage } windowStage - 表示注册监听的WindowStage。
 * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
 * @stagemodelonly
 * @since 23 dynamic
 */
type WindowStageCallbackFn = (ability: any, windowStage: window.WindowStage) => void;

/**
 * 当仅注册监听Ability时，调用该回调函数。
 *
 * @param { Any } ability - 表示注册监听的Ability。
 * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
 * @stagemodelonly
 * @since 23 static
 */
type AbilityCallbackFn = (ability: Any) => void;

/**
 * 当同时注册监听Ability和WindowStage时，调用该回调函数。
 *
 * @param { Any } ability - 表示注册监听的Ability。
 * @param { window.WindowStage } windowStage - 表示注册监听的WindowStage。
 * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
 * @stagemodelonly
 * @since 23 static
 */
type WindowStageCallbackFn = (ability: Any, windowStage: window.WindowStage) => void;

/**
 * 互操作Ability生命周期回调，用于监听Ability的生命周期状态变化。
 *
 * @typedef InteropAbilityLifecycleCallback
 * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
 * @stagemodelonly
 * @since 23 dynamic&static
 */
declare interface InteropAbilityLifecycleCallback {
  /**
   * Ability被创建时，触发该回调函数。
   *
   * @type { AbilityCallbackFn }
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  onAbilityCreate: AbilityCallbackFn;

  /**
   * WindowStage被创建时，触发该回调函数。
   *
   * @type { WindowStageCallbackFn }
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  onWindowStageCreate: WindowStageCallbackFn;

  /**
   * WindowStage被销毁时，触发该回调函数。
   *
   * @type { WindowStageCallbackFn }
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  onWindowStageDestroy: WindowStageCallbackFn;

  /**
   * Ability被销毁时，触发该回调函数。
   *
   * @type { AbilityCallbackFn }
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  onAbilityDestroy: AbilityCallbackFn;

  /**
   * Ability状态切换至前台时，触发该回调函数。
   *
   * @type { AbilityCallbackFn }
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  onAbilityForeground: AbilityCallbackFn;

  /**
   * Ability状态切换至后台时，触发该回调函数。
   *
   * @type { AbilityCallbackFn }
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  onAbilityBackground: AbilityCallbackFn;

  /**
   * Ability被创建前，触发该回调函数。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  onAbilityWillCreate?: AbilityCallbackFn;

  /**
   * WindowStage被创建前，触发该回调函数。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  onWindowStageWillCreate?: WindowStageCallbackFn;

  /**
   * UIAbility调用onNewWant前，触发该回调函数。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  onWillNewWant?: AbilityCallbackFn;

  /**
   * UIAbility调用onNewWant后，触发该回调函数。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  onNewWant?: AbilityCallbackFn;

  /**
   * WindowStage获焦时，触发该回调函数。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  onWindowStageActive?: WindowStageCallbackFn;

  /**
   * WindowStage失焦时，触发该回调函数。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  onWindowStageInactive?: WindowStageCallbackFn;

  /**
   * WindowStage被销毁前，触发该回调函数。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  onWindowStageWillDestroy?: WindowStageCallbackFn;

  /**
   * Ability被销毁前，触发该回调函数。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  onAbilityWillDestroy?: AbilityCallbackFn;

  /**
   * Ability状态切换至前台前，触发该回调函数。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  onAbilityWillForeground?: AbilityCallbackFn;

  /**
   * Ability状态切换至后台前，触发该回调函数。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  onAbilityWillBackground?: AbilityCallbackFn;

  /**
   * Ability准备迁移时，触发该回调函数。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  onAbilityContinue?: AbilityCallbackFn;

  /**
   * Ability准备调用onContinue时，触发该回调函数。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  onAbilityWillContinue?: AbilityCallbackFn;

  /**
   * Ability调用onWindowStageWillRestore后，触发该回调函数。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  onWindowStageWillRestore?: WindowStageCallbackFn;

  /**
   * Ability调用onWindowStageRestore后，触发该回调函数。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  onWindowStageRestore?: WindowStageCallbackFn;

  /**
   * Ability准备调用onSaveState时，触发该回调函数。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  onAbilityWillSaveState?: AbilityCallbackFn;

  /**
   * Ability调用onSaveState后，触发该回调函数。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  onAbilitySaveState?: AbilityCallbackFn;
}

export default InteropAbilityLifecycleCallback;
