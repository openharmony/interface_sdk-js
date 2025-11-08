/*
 * Copyright (c) 2022-2023 Huawei Device Co., Ltd.
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

import UIAbility from './@ohos.app.ability.UIAbility';
import window from './@ohos.window';

/*** if arkts dynamic */
/**
 * The ability lifecycle callback.
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
 * @StageModelOnly
 * @since 9
 */
/**
 * The ability lifecycle callback.
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
 * @StageModelOnly
 * @crossplatform
 * @since 10
 */
/**
 * The ability lifecycle callback.
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
 * @StageModelOnly
 * @crossplatform
 * @atomicservice
 * @since 11 dynamic
 */
export default class AbilityLifecycleCallback {
/*** endif */

/*** if arkts static */
/**
 * The ability lifecycle callback.
 *
 * @typedef AbilityLifecycleCallback
 * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
 * @StageModelOnly
 * @crossplatform
 * @atomicservice
 * @since 22 static
 */
declare interface AbilityLifecycleCallback {
/*** endif */
  /**
   * Called back when an ability is started for initialization.
   *
   * @param { UIAbility } ability - Indicates the ability to register for listening.
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @StageModelOnly
   * @since 9
   */
  /**
   * Called back when an ability is started for initialization.
   *
   * @param { UIAbility } ability - Indicates the ability to register for listening.
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @StageModelOnly
   * @crossplatform
   * @since 10
   */
  /**
   * Called back when an ability is started for initialization.
   *
   * @param { UIAbility } ability - Indicates the ability to register for listening.
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @StageModelOnly
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   * @since 22 static
   */
  onAbilityCreate(ability: UIAbility): void;

  /**
   * Called back before an ability is started for initialization.
   *
   * @param { UIAbility } ability - Indicates the ability to register for listening.
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  onAbilityWillCreate?(ability: UIAbility): void;

  /**
   * Called back when a window stage is created.
   *
   * @param { UIAbility } ability - Indicates the ability to register for listening.
   * @param { window.WindowStage } windowStage - window stage to create
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @StageModelOnly
   * @since 9
   */
  /**
   * Called back when a window stage is created.
   *
   * @param { UIAbility } ability - Indicates the ability to register for listening.
   * @param { window.WindowStage } windowStage - window stage to create
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @StageModelOnly
   * @crossplatform
   * @since 10
   */
  /**
   * Called back when a window stage is created.
   *
   * @param { UIAbility } ability - Indicates the ability to register for listening.
   * @param { window.WindowStage } windowStage - window stage to create
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @StageModelOnly
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   * @since 22 static
   */
  onWindowStageCreate(ability: UIAbility, windowStage: window.WindowStage): void;

  /**
   * Called back before a window stage is created.
   *
   * @param { UIAbility } ability - Indicates the ability to register for listening.
   * @param { window.WindowStage } windowStage - window stage to create
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  onWindowStageWillCreate?(ability: UIAbility, windowStage: window.WindowStage): void;

  /**
   * Called back before the UIAbility will called onNewWant.
   *
   * @param { UIAbility } ability - Indicates the ability to register for listening.
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  onWillNewWant?(ability: UIAbility): void;

  /**
   * Called back after the UIAbility called onNewWant.
   *
   * @param { UIAbility } ability - Indicates the ability to register for listening.
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  onNewWant?(ability: UIAbility): void;

  /**
   * Called back when a window stage is active.
   *
   * @param { UIAbility } ability - Indicates the ability to register for listening.
   * @param { window.WindowStage } windowStage - window stage to active
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @StageModelOnly
   * @since 9
   */
  /**
   * Called back when a window stage is active.
   *
   * @param { UIAbility } ability - Indicates the ability to register for listening.
   * @param { window.WindowStage } windowStage - window stage to active
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @StageModelOnly
   * @atomicservice
   * @since 11 dynamic
   */
  onWindowStageActive(ability: UIAbility, windowStage: window.WindowStage): void;

  /**
   * Called back when a window stage is inactive.
   *
   * @param { UIAbility } ability - Indicates the ability to register for listening.
   * @param { window.WindowStage } windowStage - window stage to inactive
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @StageModelOnly
   * @since 9
   */
  /**
   * Called back when a window stage is inactive.
   *
   * @param { UIAbility } ability - Indicates the ability to register for listening.
   * @param { window.WindowStage } windowStage - window stage to inactive
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @StageModelOnly
   * @atomicservice
   * @since 11 dynamic
   */
  onWindowStageInactive(ability: UIAbility, windowStage: window.WindowStage): void;

  /**
   * Called back when a window stage is destroyed.
   *
   * @param { UIAbility } ability - Indicates the ability to register for listening.
   * @param { window.WindowStage } windowStage - window stage to destroy
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @StageModelOnly
   * @since 9
   */
  /**
   * Called back when a window stage is destroyed.
   *
   * @param { UIAbility } ability - Indicates the ability to register for listening.
   * @param { window.WindowStage } windowStage - window stage to destroy
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @StageModelOnly
   * @crossplatform
   * @since 10
   */
  /**
   * Called back when a window stage is destroyed.
   *
   * @param { UIAbility } ability - Indicates the ability to register for listening.
   * @param { window.WindowStage } windowStage - window stage to destroy
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @StageModelOnly
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   * @since 22 static
   */
  onWindowStageDestroy(ability: UIAbility, windowStage: window.WindowStage): void;

  /**
   * Called back before a window stage is destroyed.
   *
   * @param { UIAbility } ability - Indicates the ability to register for listening.
   * @param { window.WindowStage } windowStage - window stage to destroy
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  onWindowStageWillDestroy?(ability: UIAbility, windowStage: window.WindowStage): void;

  /**
   * Called back when an ability is destroyed.
   *
   * @param { UIAbility } ability - Indicates the ability to register for listening.
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @StageModelOnly
   * @since 9
   */
  /**
   * Called back when an ability is destroyed.
   *
   * @param { UIAbility } ability - Indicates the ability to register for listening.
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @StageModelOnly
   * @crossplatform
   * @since 10
   */
  /**
   * Called back when an ability is destroyed.
   *
   * @param { UIAbility } ability - Indicates the ability to register for listening.
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @StageModelOnly
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   * @since 22 static
   */
  onAbilityDestroy(ability: UIAbility): void;

  /**
   * Called back before an ability is destroyed.
   *
   * @param { UIAbility } ability - Indicates the ability to register for listening.
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  onAbilityWillDestroy?(ability: UIAbility): void;

  /**
   * Called back when the state of an ability changes to foreground.
   *
   * @param { UIAbility } ability - Indicates the ability to register for listening.
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @StageModelOnly
   * @since 9
   */
  /**
   * Called back when the state of an ability changes to foreground.
   *
   * @param { UIAbility } ability - Indicates the ability to register for listening.
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @StageModelOnly
   * @crossplatform
   * @since 10
   */
  /**
   * Called back when the state of an ability changes to foreground.
   *
   * @param { UIAbility } ability - Indicates the ability to register for listening.
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @StageModelOnly
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   * @since 22 static
   */
  onAbilityForeground(ability: UIAbility): void;

  /**
   * Called back before the state of an ability changes to foreground.
   *
   * @param { UIAbility } ability - Indicates the ability to register for listening.
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  onAbilityWillForeground?(ability: UIAbility): void;

  /**
   * Called back when the state of an ability changes to background.
   *
   * @param { UIAbility } ability - Indicates the ability to register for listening.
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @StageModelOnly
   * @since 9
   */
  /**
   * Called back when the state of an ability changes to background.
   *
   * @param { UIAbility } ability - Indicates the ability to register for listening.
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @StageModelOnly
   * @crossplatform
   * @since 10
   */
  /**
   * Called back when the state of an ability changes to background.
   *
   * @param { UIAbility } ability - Indicates the ability to register for listening.
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @StageModelOnly
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   * @since 22 static
   */
  onAbilityBackground(ability: UIAbility): void;

  /**
   * Called back before the state of an ability changes to background.
   *
   * @param { UIAbility } ability - Indicates the ability to register for listening.
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  onAbilityWillBackground?(ability: UIAbility): void;

  /**
   * Called back when an ability prepares to continue.
   *
   * @param { UIAbility } ability - Indicates the ability to register for listening.
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @StageModelOnly
   * @since 9
   */
  /**
   * Called back when an ability prepares to continue.
   *
   * @param { UIAbility } ability - Indicates the ability to register for listening.
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @StageModelOnly
   * @atomicservice
   * @since 11 dynamic
   */
  onAbilityContinue(ability: UIAbility): void;

  /**
   * Called back when the ability prepares to call onContinue.
   *
   * @param { UIAbility } ability - Indicates the ability to register for listening.
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  onAbilityWillContinue?(ability: UIAbility): void;

  /**
   * Called back when the ability prepares to call onWindowStageRestore.
   *
   * @param { UIAbility } ability - Indicates the ability to register for listening.
   * @param { window.WindowStage } windowStage - window stage to restore.
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  onWindowStageWillRestore?(ability: UIAbility, windowStage: window.WindowStage): void;

  /**
   * Called back when the ability has called onWindowStageRestore.
   *
   * @param { UIAbility } ability - Indicates the ability to register for listening.
   * @param { window.WindowStage } windowStage - window stage to restore.
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  onWindowStageRestore?(ability: UIAbility, windowStage: window.WindowStage): void;

  /**
   * Called back when the ability prepares to call onSaveState.
   *
   * @param { UIAbility } ability - Indicates the ability to register for listening.
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  onAbilityWillSaveState?(ability: UIAbility): void;

  /**
   * Called back when the ability has called onSaveState.
   *
   * @param { UIAbility } ability - Indicates the ability to register for listening.
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  onAbilitySaveState?(ability: UIAbility): void;
}

/*** if arkts static */
export default AbilityLifecycleCallback;
/*** endif */