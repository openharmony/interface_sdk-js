/*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
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
 * The callback was called when only an ability is registered for listening.
 *
 * @typedef { function }
 * @param { any } ability - Indicates the ability to register for listening.
 * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
 * @stagemodelonly
 * @since 23 dynamic
 */
type AbilityCallbackFn = (ability: any) => void;

/**
 * The callback was called when both ability and window stage are registered for listening.
 *
 * @typedef { function }
 * @param { any } ability - Indicates the ability to register for listening.
 * @param { window.WindowStage } windowStage - Indicates the window stage to register for listening.
 * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
 * @stagemodelonly
 * @since 23 dynamic
 */
type WindowStageCallbackFn = (ability: any, windowStage: window.WindowStage) => void;

/**
 * The callback was called when only an ability is registered for listening.
 *
 * @typedef { function }
 * @param { Any } ability - Indicates the ability to register for listening.
 * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
 * @stagemodelonly
 * @since 23 static
 */
type AbilityCallbackFn = (ability: Any) => void;

/**
 * The callback was called when both ability and window stage are registered for listening.
 *
 * @typedef { function }
 * @param { Any } ability - Indicates the ability to register for listening.
 * @param { window.WindowStage } windowStage - Indicates the window stage to register for listening.
 * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
 * @stagemodelonly
 * @since 23 static
 */
type WindowStageCallbackFn = (ability: Any, windowStage: window.WindowStage) => void;

/**
 * The interop ability lifecycle callback.
 *
 * @typedef InteropAbilityLifecycleCallback
 * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
 * @stagemodelonly
 * @since 23 dynamic&static
 */
declare interface InteropAbilityLifecycleCallback {
  /**
   * Called back when an ability is started for initialization.
   *
   * @type { AbilityCallbackFn }
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  onAbilityCreate: AbilityCallbackFn;

  /**
   * Called back when a window stage is created.
   *
   * @type { WindowStageCallbackFn }
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  onWindowStageCreate: WindowStageCallbackFn;

  /**
   * Called back when a window stage is destroyed.
   *
   * @type { WindowStageCallbackFn }
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  onWindowStageDestroy: WindowStageCallbackFn;

  /**
   * Called back when an ability is destroyed.
   *
   * @type { AbilityCallbackFn }
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  onAbilityDestroy: AbilityCallbackFn;

  /**
   * Called back when the state of an ability changes to foreground.
   *
   * @type { AbilityCallbackFn }
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  onAbilityForeground: AbilityCallbackFn;

  /**
   * Called back when the state of an ability changes to background.
   *
   * @type { AbilityCallbackFn }
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  onAbilityBackground: AbilityCallbackFn;

  /**
   * Called back before an ability is started for initialization.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  onAbilityWillCreate?: AbilityCallbackFn;

  /**
   * Called back before a window stage is created.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  onWindowStageWillCreate?: WindowStageCallbackFn;

  /**
   * Called back before the UIAbility will called onNewWant.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  onWillNewWant?: AbilityCallbackFn;

  /**
   * Called back after the UIAbility called onNewWant.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  onNewWant?: AbilityCallbackFn;

  /**
   * Called back when a window stage is active.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  onWindowStageActive?: WindowStageCallbackFn;

  /**
   * Called back when a window stage is inactive.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  onWindowStageInactive?: WindowStageCallbackFn;

  /**
   * Called back before a window stage is destroyed.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  onWindowStageWillDestroy?: WindowStageCallbackFn;

  /**
   * Called back before an ability is destroyed.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  onAbilityWillDestroy?: AbilityCallbackFn;

  /**
   * Called back before the state of an ability changes to foreground.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  onAbilityWillForeground?: AbilityCallbackFn;

  /**
   * Called back before the state of an ability changes to background.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  onAbilityWillBackground?: AbilityCallbackFn;

  /**
   * Called back when an ability prepares to continue.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  onAbilityContinue?: AbilityCallbackFn;

  /**
   * Called back when the ability prepares to call onContinue.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  onAbilityWillContinue?: AbilityCallbackFn;

  /**
   * Called back when the ability has called onWindowStageWillRestore.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  onWindowStageWillRestore?: WindowStageCallbackFn;

  /**
   * Called back when the ability has called onWindowStageRestore.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  onWindowStageRestore?: AbilityCallbackFn;

  /**
   * Called back when the ability prepares to call onSaveState.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  onAbilityWillSaveState?: AbilityCallbackFn;

  /**
   * Called back when the ability has called onSaveState.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  onAbilitySaveState?: AbilityCallbackFn;
}

export default InteropAbilityLifecycleCallback;