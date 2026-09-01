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
 * The lifecycle of a [UIAbility]{@link ./@ohos.app.ability.UIAbility} dynamically changes from creation to 
 * destruction. 
 * The AbilityLifecycleCallback module provides the capability to listen for these lifecycle changes, which can be used 
 * for scenarios such as tracking the runtime duration of each UIAbility and performing data loading decoupled from the 
 * service logic of UIAbility.
 * 
 * > **NOTE**
 * >
 * > The APIs provided by this module can listen for lifecycle changes of the UIAbility within the same process.
 *
 * @file
 * @kit AbilityKit
 */

import UIAbility from './@ohos.app.ability.UIAbility';
import window from './@ohos.window';

/**
 * Defines a OnAbilityWillCreate function.
 *
 * @param { UIAbility } ability - Indicates the ability to register for listening.
 * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
 * @since 23 static
 */
type OnAbilityWillCreateFn = (ability: UIAbility) => void;

/**
 * Defines a onWindowStageWillCreate function.
 *
 * @param { UIAbility } ability - Indicates the ability to register for listening.
 * @param { window.WindowStage } windowStage - window stage to create
 * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
 * @since 23 static
 */
type OnWindowStageWillCreateFn = (ability: UIAbility, windowStage: window.WindowStage) => void;

/**
 * Defines a onWillNewWant function.
 *
 * @param { UIAbility } ability - Indicates the ability to register for listening.
 * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
 * @since 23 static
 */
type OnWillNewWantFn = (ability: UIAbility) => void;

/**
 * Defines a onNewWant function.
 *
 * @param { UIAbility } ability - Indicates the ability to register for listening.
 * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
 * @since 23 static
 */
type OnNewWantFn = (ability: UIAbility) => void;

/**
 * Defines a onWindowStageWillDestroy function.
 *
 * @param { UIAbility } ability - Indicates the ability to register for listening.
 * @param { window.WindowStage } windowStage - window stage to create
 * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
 * @since 23 static
 */
type OnWindowStageWillDestroyFn = (ability: UIAbility, windowStage: window.WindowStage) => void;

/**
 * Defines a onAbilityWillDestroy function.
 *
 * @param { UIAbility } ability - Indicates the ability to register for listening.
 * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
 * @since 23 static
 */
type OnAbilityWillDestroyFn = (ability: UIAbility) => void;

/**
 * Defines a onAbilityWillForeground function.
 *
 * @param { UIAbility } ability - Indicates the ability to register for listening.
 * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
 * @since 23 static
 */
type OnAbilityWillForegroundFn = (ability: UIAbility) => void;

/**
 * Defines a onAbilityWillBackground function.
 *
 * @param { UIAbility } ability - Indicates the ability to register for listening.
 * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
 * @since 23 static
 */
type OnAbilityWillBackgroundFn = (ability: UIAbility) => void;

/**
 * Defines a onAbilityWillContinue function.
 *
 * @param { UIAbility } ability - Indicates the ability to register for listening.
 * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
 * @since 23 static
 */
type OnAbilityWillContinueFn = (ability: UIAbility) => void;

/**
 * Defines a onWindowStageWillRestore function.
 *
 * @param { UIAbility } ability - Indicates the ability to register for listening.
 * @param { window.WindowStage } windowStage - window stage to create
 * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
 * @since 23 static
 */
type OnWindowStageWillRestoreFn = (ability: UIAbility, windowStage: window.WindowStage) => void;

/**
 * Defines a onWindowStageRestore function.
 *
 * @param { UIAbility } ability - Indicates the ability to register for listening.
 * @param { window.WindowStage } windowStage - window stage to create
 * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
 * @since 23 static
 */
type OnWindowStageRestoreFn = (ability: UIAbility, windowStage: window.WindowStage) => void;

/**
 * Defines a onAbilityWillSaveState function.
 *
 * @param { UIAbility } ability - Indicates the ability to register for listening.
 * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
 * @since 23 static
 */
type OnAbilityWillSaveStateFn = (ability: UIAbility) => void;

/**
 * Defines a onAbilitySaveState function.
 *
 * @param { UIAbility } ability - Indicates the ability to register for listening.
 * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
 * @since 23 static
 */
type OnAbilitySaveStateFn = (ability: UIAbility) => void;

/**
 * The lifecycle of a [UIAbility]{@link ./@ohos.app.ability.UIAbility} dynamically changes from creation to
 * destruction.
 * The AbilityLifecycleCallback module provides the capability to listen for these lifecycle changes, which can be used
 * for scenarios such as tracking the runtime duration of each UIAbility and performing data loading decoupled from the
 * service logic of UIAbility.
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
 * @stagemodelonly
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 * @since 23 static
 */
declare class AbilityLifecycleCallback {
  /**
   * Called after the [onCreate]{@link ./@ohos.app.ability.UIAbility:UIAbility#onCreate} callback of the UIAbility is
   * triggered.
   *
   * @param { UIAbility } ability - UIAbility object associated with the callback event.
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  onAbilityCreate(ability: UIAbility): void;

  /**
   * Called before the [onCreate]{@link ./@ohos.app.ability.UIAbility:UIAbility#onCreate} callback of the UIAbility is
   * triggered.
   *
   * @param { UIAbility } ability - UIAbility object associated with the callback event.
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  onAbilityWillCreate?(ability: UIAbility): void;

  /**
   * Called before the [onCreate]{@link ./@ohos.app.ability.UIAbility:UIAbility#onCreate} callback of the UIAbility is
   * triggered.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @since 23 static
   */
  onAbilityWillCreate?: OnAbilityWillCreateFn;

  /**
   * Called after the [onWindowStageCreate]{@link ./@ohos.app.ability.UIAbility:UIAbility#onWindowStageCreate} callback of
   *  the UIAbility is triggered.
   *
   * @param { UIAbility } ability - UIAbility object associated with the callback event.
   * @param { window.WindowStage } windowStage - Main window manager of the UIAbility associated with the callback event.
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  onWindowStageCreate(ability: UIAbility, windowStage: window.WindowStage): void;

  /**
   * Called before the [onWindowStageCreate]{@link ./@ohos.app.ability.UIAbility:UIAbility#onWindowStageCreate}
   * callback of the UIAbility is triggered.
   *
   * @param { UIAbility } ability - UIAbility object associated with the callback event.
   * @param { window.WindowStage } windowStage - Main window manager of the UIAbility associated with the callback event.
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  onWindowStageWillCreate?(ability: UIAbility, windowStage: window.WindowStage): void;

  /**
   * Called before the [onWindowStageCreate]{@link ./@ohos.app.ability.UIAbility:UIAbility#onWindowStageCreate}
   * callback of the UIAbility is triggered.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @since 23 static
   */
  onWindowStageWillCreate?: OnWindowStageWillCreateFn;

  /**
   * Called before the [onNewWant]{@link ./@ohos.app.ability.UIAbility:UIAbility#onNewWant} callback of the UIAbility
   * is triggered.
   *
   * @param { UIAbility } ability - UIAbility object associated with the callback event.
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  onWillNewWant?(ability: UIAbility): void;

  /**
   * Called before the [onNewWant]{@link ./@ohos.app.ability.UIAbility:UIAbility#onNewWant} callback of the UIAbility
   * is triggered.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @since 23 static
   */
  onWillNewWant?: OnWillNewWantFn;

  /**
   * Called after the [onNewWant]{@link ./@ohos.app.ability.UIAbility:UIAbility#onNewWant} callback of the UIAbility
   * is triggered.
   *
   * @param { UIAbility } ability - UIAbility object associated with the callback event.
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  onNewWant?(ability: UIAbility): void;

  /**
   * Called after the [onNewWant]{@link ./@ohos.app.ability.UIAbility:UIAbility#onNewWant} callback of the UIAbility
   * is triggered.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @since 23 static
   */
  onNewWant?: OnNewWantFn;

  /**
   * Called when the main window of the UIAbility gains focus.
   *
   * @param { UIAbility } ability - UIAbility object associated with the callback event.
   * @param { window.WindowStage } windowStage - Main window manager of the UIAbility associated with the callback event.
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  onWindowStageActive(ability: UIAbility, windowStage: window.WindowStage): void;

  /**
   * Called when the main window of the UIAbility loses focus.
   *
   * @param { UIAbility } ability - UIAbility object associated with the callback event.
   * @param { window.WindowStage } windowStage - Main window manager of the UIAbility associated with the callback event.
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  onWindowStageInactive(ability: UIAbility, windowStage: window.WindowStage): void;

  /**
   * Called after the [onWindowStageDestroy]{@link ./@ohos.app.ability.UIAbility:UIAbility#onWindowStageDestroy}
   * callback of the UIAbility is triggered.
   *
   * @param { UIAbility } ability - UIAbility object associated with the callback event.
   * @param { window.WindowStage } windowStage - Main window manager of the UIAbility associated with the callback event.
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  onWindowStageDestroy(ability: UIAbility, windowStage: window.WindowStage): void;

  /**
   * Called before the [onWindowStageDestroy]{@link ./@ohos.app.ability.UIAbility:UIAbility#onWindowStageDestroy}
   * callback of the UIAbility is triggered.
   *
   * @param { UIAbility } ability - UIAbility object associated with the callback event.
   * @param { window.WindowStage } windowStage - Main window manager of the UIAbility associated with the callback event.
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  onWindowStageWillDestroy?(ability: UIAbility, windowStage: window.WindowStage): void;

  /**
   * Called before the [onWindowStageDestroy]{@link ./@ohos.app.ability.UIAbility:UIAbility#onWindowStageDestroy}
   * callback of the UIAbility is triggered.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @since 23 static
   */
  onWindowStageWillDestroy?: OnWindowStageWillDestroyFn;

  /**
   * Called after the [onDestroy]{@link ./@ohos.app.ability.UIAbility:UIAbility.onDestroy} callback of the UIAbility
   * is triggered.
   *
   * @param { UIAbility } ability - UIAbility object associated with the callback event.
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  onAbilityDestroy(ability: UIAbility): void;

  /**
   * Called before the [onDestroy]{@link ./@ohos.app.ability.UIAbility:UIAbility.onDestroy} callback of the UIAbility
   * is triggered.
   *
   * @param { UIAbility } ability - UIAbility object associated with the callback event.
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  onAbilityWillDestroy?(ability: UIAbility): void;

  /**
   * Called before the [onDestroy]{@link ./@ohos.app.ability.UIAbility:UIAbility.onDestroy} callback of the UIAbility
   * is triggered.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @since 23 static
   */
  onAbilityWillDestroy?: OnAbilityWillDestroyFn;

  /**
   * Called after the [onForeground]{@link ./@ohos.app.ability.UIAbility:UIAbility#onForeground} callback of the
   * UIAbility is triggered.
   *
   * @param { UIAbility } ability - UIAbility object associated with the callback event.
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  onAbilityForeground(ability: UIAbility): void;

  /**
   * Called before the [onForeground]{@link ./@ohos.app.ability.UIAbility:UIAbility#onForeground} callback of the
   * UIAbility is triggered.
   *
   * @param { UIAbility } ability - UIAbility object associated with the callback event.
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  onAbilityWillForeground?(ability: UIAbility): void;

  /**
   * Called before the [onForeground]{@link ./@ohos.app.ability.UIAbility:UIAbility#onForeground} callback of the
   * UIAbility is triggered.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @since 23 static
   */
  onAbilityWillForeground?: OnAbilityWillForegroundFn;

  /**
   * Called after the [onBackground]{@link ./@ohos.app.ability.UIAbility:UIAbility#onBackground} callback of the
   * UIAbility is triggered.
   *
   * @param { UIAbility } ability - UIAbility object associated with the callback event.
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  onAbilityBackground(ability: UIAbility): void;

  /**
   * Called before the [onBackground]{@link ./@ohos.app.ability.UIAbility:UIAbility#onBackground} callback of the
   * UIAbility is triggered.
   *
   * @param { UIAbility } ability - UIAbility object associated with the callback event.
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  onAbilityWillBackground?(ability: UIAbility): void;

  /**
   * Called before the [onBackground]{@link ./@ohos.app.ability.UIAbility:UIAbility#onBackground} callback of the
   * UIAbility is triggered.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @since 23 static
   */
  onAbilityWillBackground?: OnAbilityWillBackgroundFn;

  /**
   * Called after the [onContinue]{@link ./@ohos.app.ability.UIAbility:UIAbility#onContinue} callback of the UIAbility
   * is triggered.
   *
   * @param { UIAbility } ability - UIAbility object associated with the callback event.
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  onAbilityContinue(ability: UIAbility): void;

  /**
   * Called before the [onContinue]{@link ./@ohos.app.ability.UIAbility:UIAbility#onContinue} callback of the UIAbility
   * is triggered.
   *
   * @param { UIAbility } ability - UIAbility object associated with the callback event.
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  onAbilityWillContinue?(ability: UIAbility): void;

  /**
   * Called before the [onContinue]{@link ./@ohos.app.ability.UIAbility:UIAbility#onContinue} callback of the UIAbility
   * is triggered.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @since 23 static
   */
  onAbilityWillContinue?: OnAbilityWillContinueFn;

  /**
   * Called before the [onWindowStageRestore]{@link ./@ohos.app.ability.UIAbility:UIAbility#onWindowStageRestore}
   * callback of the UIAbility is triggered.
   *
   * @param { UIAbility } ability - UIAbility object associated with the callback event.
   * @param { window.WindowStage } windowStage - Main window manager of the UIAbility associated with the callback event.
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  onWindowStageWillRestore?(ability: UIAbility, windowStage: window.WindowStage): void;

  /**
   * Called before the [onWindowStageRestore]{@link ./@ohos.app.ability.UIAbility:UIAbility#onWindowStageRestore}
   * callback of the UIAbility is triggered.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @since 23 static
   */
  onWindowStageWillRestore?: OnWindowStageWillRestoreFn;

  /**
   * Called after the [onWindowStageRestore]{@link ./@ohos.app.ability.UIAbility:UIAbility#onWindowStageRestore}
   * callback of the UIAbility is triggered.
   *
   * @param { UIAbility } ability - UIAbility object associated with the callback event.
   * @param { window.WindowStage } windowStage - Main window manager of the UIAbility associated with the callback event.
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  onWindowStageRestore?(ability: UIAbility, windowStage: window.WindowStage): void;

  /**
   * Called after the [onWindowStageRestore]{@link ./@ohos.app.ability.UIAbility:UIAbility#onWindowStageRestore}
   * callback of the UIAbility is triggered.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @since 23 static
   */
  onWindowStageRestore?: OnWindowStageRestoreFn;

  /**
   * Called before the [onSaveState]{@link ./@ohos.app.ability.UIAbility:UIAbility.onSaveState} callback of the
   * UIAbility is triggered.
   *
   * @param { UIAbility } ability - UIAbility object associated with the callback event.
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  onAbilityWillSaveState?(ability: UIAbility): void;

  /**
   * Called before the [onSaveState]{@link ./@ohos.app.ability.UIAbility:UIAbility.onSaveState} callback of the
   * UIAbility is triggered.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @since 23 static
   */
  onAbilityWillSaveState?: OnAbilityWillSaveStateFn;

  /**
   * Called after the [onSaveState]{@link ./@ohos.app.ability.UIAbility:UIAbility.onSaveState} callback of the
   * UIAbility is triggered.
   *
   * @param { UIAbility } ability - UIAbility object associated with the callback event.
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  onAbilitySaveState?(ability: UIAbility): void;

  /**
   * Called after the [onSaveState]{@link ./@ohos.app.ability.UIAbility:UIAbility.onSaveState} callback of the
   * UIAbility is triggered.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @since 23 static
   */
  onAbilitySaveState?: OnAbilitySaveStateFn;
}

export default AbilityLifecycleCallback;