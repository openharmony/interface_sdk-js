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
 * [UIAbility]{@link ./@ohos.app.ability.UIAbility}从创建到销毁过程其生命周期是动态变化的。AbilityLifecycleCallback模块提供监听
 * [UIAbility]{@link ./@ohos.app.ability.UIAbility}生命周期变化的能力，可用于统计每个UIAbility的运行时长、执行与UIAbility业务逻辑解耦的数据加载等场景。
 * 
 * > **说明**
 * >
 * > 本模块接口只能监听进程内UIAbility生命周期变化。
 *
 * @file
 * @kit AbilityKit
 */

import UIAbility from './@ohos.app.ability.UIAbility';
import window from './@ohos.window';

/**
 * 注册监听应用上下文的生命周期后，在UIAbility的onCreate触发前回调。
 *
 * @param { UIAbility } ability - 当前Ability对象。
 * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
 * @since 23 static
 */
type OnAbilityWillCreateFn = (ability: UIAbility) => void;

/**
 * 注册监听应用上下文的生命周期后，在UIAbility的onWindowStageCreate触发前回调。
 *
 * @param { UIAbility } ability - 当前Ability对象。
 * @param { window.WindowStage } windowStage - 当前WindowStage对象。
 * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
 * @since 23 static
 */
type OnWindowStageWillCreateFn = (ability: UIAbility, windowStage: window.WindowStage) => void;

/**
 * 注册监听应用上下文的生命周期后，在UIAbility的onNewWant触发前回调。
 *
 * @param { UIAbility } ability - 当前Ability对象。
 * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
 * @since 23 static
 */
type OnWillNewWantFn = (ability: UIAbility) => void;

/**
 * 注册监听应用上下文的生命周期后，在UIAbility的onNewWant触发后回调。
 *
 * @param { UIAbility } ability - 当前Ability对象。
 * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
 * @since 23 static
 */
type OnNewWantFn = (ability: UIAbility) => void;

/**
 * 注册监听应用上下文的生命周期后，在UIAbility的onWindowStageDestroy触发前回调。
 *
 * @param { UIAbility } ability - 当前Ability对象。
 * @param { window.WindowStage } windowStage - 当前WindowStage对象。
 * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
 * @since 23 static
 */
type OnWindowStageWillDestroyFn = (ability: UIAbility, windowStage: window.WindowStage) => void;

/**
 * 注册监听应用上下文的生命周期后，在UIAbility的onDestroy触发前回调。
 *
 * @param { UIAbility } ability - 当前Ability对象。
 * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
 * @since 23 static
 */
type OnAbilityWillDestroyFn = (ability: UIAbility) => void;

/**
 * 注册监听应用上下文的生命周期后，在UIAbility的onForeground触发前回调。
 *
 * @param { UIAbility } ability - 当前Ability对象。
 * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
 * @since 23 static
 */
type OnAbilityWillForegroundFn = (ability: UIAbility) => void;

/**
 * 注册监听应用上下文的生命周期后，在UIAbility的onBackground触发前回调。
 *
 * @param { UIAbility } ability - 当前Ability对象。
 * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
 * @since 23 static
 */
type OnAbilityWillBackgroundFn = (ability: UIAbility) => void;

/**
 * 注册监听应用上下文的生命周期后，在Ability迁移前触发回调。
 *
 * @param { UIAbility } ability - 当前Ability对象。
 * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
 * @since 23 static
 */
type OnAbilityWillContinueFn = (ability: UIAbility) => void;

/**
 * 注册监听应用上下文的生命周期后，在UIAbility的onWindowStageRestore触发前回调。
 *
 * @param { UIAbility } ability - 当前Ability对象。
 * @param { window.WindowStage } windowStage - 当前WindowStage对象。
 * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
 * @since 23 static
 */
type OnWindowStageWillRestoreFn = (ability: UIAbility, windowStage: window.WindowStage) => void;

/**
 * 注册监听应用上下文的生命周期后，在UIAbility的onWindowStageRestore触发后回调。
 *
 * @param { UIAbility } ability - 当前Ability对象。
 * @param { window.WindowStage } windowStage - 当前WindowStage对象。
 * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
 * @since 23 static
 */
type OnWindowStageRestoreFn = (ability: UIAbility, windowStage: window.WindowStage) => void;

/**
 * 注册监听应用上下文的生命周期后，在UIAbility的onSaveState触发前回调。
 *
 * @param { UIAbility } ability - 当前Ability对象。
 * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
 * @since 23 static
 */
type OnAbilityWillSaveStateFn = (ability: UIAbility) => void;

/**
 * 注册监听应用上下文的生命周期后，在UIAbility的onSaveState触发后回调。
 *
 * @param { UIAbility } ability - 当前Ability对象。
 * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
 * @since 23 static
 */
type OnAbilitySaveStateFn = (ability: UIAbility) => void;

/**
 * [UIAbility]{@link ./@ohos.app.ability.UIAbility}从创建到销毁过程其生命周期是动态变化的。
 * AbilityLifecycleCallback模块提供监听[UIAbility]{@link ./@ohos.app.ability.UIAbility}生命周期变化的能力，
 * 可用于统计每个UIAbility的运行时长、执行与UIAbility业务逻辑解耦的数据加载等场景。
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
   * 在UIAbility的[onCreate]{@link ./@ohos.app.ability.UIAbility:UIAbility#onCreate}触发后回调。
   *
   * @param { UIAbility } ability - 回调事件对应的UIAbility对象。
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  onAbilityCreate(ability: UIAbility): void;

  /**
   * 在UIAbility的[onCreate]{@link ./@ohos.app.ability.UIAbility:UIAbility#onCreate}触发前回调。
   *
   * @param { UIAbility } ability - 回调事件对应的UIAbility对象。
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  onAbilityWillCreate?(ability: UIAbility): void;

  /**
   * 在UIAbility的[onCreate]{@link ./@ohos.app.ability.UIAbility:UIAbility#onCreate}触发前回调。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @since 23 static
   */
  onAbilityWillCreate?: OnAbilityWillCreateFn;

  /**
   * 在UIAbility的[onWindowStageCreate]{@link ./@ohos.app.ability.UIAbility:UIAbility#onWindowStageCreate}触发后回调。
   *
   * @param { UIAbility } ability - 回调事件对应的UIAbility对象。
   * @param { window.WindowStage } windowStage - 回调事件对应的UIAbility主窗管理器。
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  onWindowStageCreate(ability: UIAbility, windowStage: window.WindowStage): void;

  /**
   * 在UIAbility的[onWindowStageCreate]{@link ./@ohos.app.ability.UIAbility:UIAbility#onWindowStageCreate}触发前回调。
   *
   * @param { UIAbility } ability - 回调事件对应的UIAbility对象。
   * @param { window.WindowStage } windowStage - 回调事件对应的UIAbility主窗管理器。
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  onWindowStageWillCreate?(ability: UIAbility, windowStage: window.WindowStage): void;

  /**
   * 在UIAbility的[onWindowStageCreate]{@link ./@ohos.app.ability.UIAbility:UIAbility#onWindowStageCreate}触发前回调。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @since 23 static
   */
  onWindowStageWillCreate?: OnWindowStageWillCreateFn;

  /**
   * 在UIAbility的[onNewWant]{@link ./@ohos.app.ability.UIAbility:UIAbility#onNewWant}触发前回调。
   *
   * @param { UIAbility } ability - 回调事件对应的UIAbility对象。
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  onWillNewWant?(ability: UIAbility): void;

  /**
   * 在UIAbility的[onNewWant]{@link ./@ohos.app.ability.UIAbility:UIAbility#onNewWant}触发前回调。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @since 23 static
   */
  onWillNewWant?: OnWillNewWantFn;

  /**
   * 在UIAbility的[onNewWant]{@link ./@ohos.app.ability.UIAbility:UIAbility#onNewWant}触发后回调。
   *
   * @param { UIAbility } ability - 回调事件对应的UIAbility对象。
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  onNewWant?(ability: UIAbility): void;

  /**
   * 在UIAbility的[onNewWant]{@link ./@ohos.app.ability.UIAbility:UIAbility#onNewWant}触发后回调。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @since 23 static
   */
  onNewWant?: OnNewWantFn;

  /**
   * 在UIAbility主窗获焦时触发回调。
   *
   * @param { UIAbility } ability - 回调事件对应的UIAbility对象。
   * @param { window.WindowStage } windowStage - 回调事件对应的UIAbility主窗管理器。
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  onWindowStageActive(ability: UIAbility, windowStage: window.WindowStage): void;

  /**
   * 在UIAbility主窗失焦时触发回调。
   *
   * @param { UIAbility } ability - 回调事件对应的UIAbility对象。
   * @param { window.WindowStage } windowStage - 回调事件对应的UIAbility主窗管理器。
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  onWindowStageInactive(ability: UIAbility, windowStage: window.WindowStage): void;

  /**
   * 在UIAbility的[onWindowStageDestroy]{@link ./@ohos.app.ability.UIAbility:UIAbility#onWindowStageDestroy}触发后回调。
   *
   * @param { UIAbility } ability - 回调事件对应的UIAbility对象
   * @param { window.WindowStage } windowStage - 回调事件对应的UIAbility主窗管理器。
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  onWindowStageDestroy(ability: UIAbility, windowStage: window.WindowStage): void;

  /**
   * 在UIAbility的[onWindowStageDestroy]{@link ./@ohos.app.ability.UIAbility:UIAbility#onWindowStageDestroy}触发前回调。
   *
   * @param { UIAbility } ability - 回调事件对应的UIAbility对象。
   * @param { window.WindowStage } windowStage - 回调事件对应的UIAbility主窗管理器。
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  onWindowStageWillDestroy?(ability: UIAbility, windowStage: window.WindowStage): void;

  /**
   * 在UIAbility的[onWindowStageDestroy]{@link ./@ohos.app.ability.UIAbility:UIAbility#onWindowStageDestroy}触发前回调。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @since 23 static
   */
  onWindowStageWillDestroy?: OnWindowStageWillDestroyFn;

  /**
   * 在UIAbility的[onDestroy]{@link ./@ohos.app.ability.UIAbility:UIAbility.onDestroy}触发后回调。
   *
   * @param { UIAbility } ability - 回调事件对应的UIAbility对象。
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  onAbilityDestroy(ability: UIAbility): void;

  /**
   * 在UIAbility的[onDestroy]{@link ./@ohos.app.ability.UIAbility:UIAbility.onDestroy}触发前回调。
   *
   * @param { UIAbility } ability - 回调事件对应的UIAbility对象。
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  onAbilityWillDestroy?(ability: UIAbility): void;

  /**
   * 在UIAbility的[onDestroy]{@link ./@ohos.app.ability.UIAbility:UIAbility.onDestroy}触发前回调。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @since 23 static
   */
  onAbilityWillDestroy?: OnAbilityWillDestroyFn;

  /**
   * 在UIAbility的[onForeground]{@link ./@ohos.app.ability.UIAbility:UIAbility#onForeground}触发后回调。
   *
   * @param { UIAbility } ability - 回调事件对应的UIAbility对象。
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  onAbilityForeground(ability: UIAbility): void;

  /**
   * 在UIAbility的[onForeground]{@link ./@ohos.app.ability.UIAbility:UIAbility#onForeground}触发前回调。
   *
   * @param { UIAbility } ability - 回调事件对应的UIAbility对象。
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  onAbilityWillForeground?(ability: UIAbility): void;

  /**
   * 在UIAbility的[onForeground]{@link ./@ohos.app.ability.UIAbility:UIAbility#onForeground}触发前回调。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @since 23 static
   */
  onAbilityWillForeground?: OnAbilityWillForegroundFn;

  /**
   * 在UIAbility的[onBackground]{@link ./@ohos.app.ability.UIAbility:UIAbility#onBackground}触发后回调。
   *
   * @param { UIAbility } ability - 回调事件对应的UIAbility对象。
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  onAbilityBackground(ability: UIAbility): void;

  /**
   * 在UIAbility的[onBackground]{@link ./@ohos.app.ability.UIAbility:UIAbility#onBackground}触发前回调。
   *
   * @param { UIAbility } ability - 回调事件对应的UIAbility对象。
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  onAbilityWillBackground?(ability: UIAbility): void;

  /**
   * 在UIAbility的[onBackground]{@link ./@ohos.app.ability.UIAbility:UIAbility#onBackground}触发前回调。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @since 23 static
   */
  onAbilityWillBackground?: OnAbilityWillBackgroundFn;

  /**
   * 在UIAbility的[onContinue]{@link ./@ohos.app.ability.UIAbility:UIAbility#onContinue}触发后回调。
   *
   * @param { UIAbility } ability - 回调事件对应的UIAbility对象。
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  onAbilityContinue(ability: UIAbility): void;

  /**
   * 在UIAbility的[onContinue]{@link ./@ohos.app.ability.UIAbility:UIAbility#onContinue}触发前回调。
   *
   * @param { UIAbility } ability - 回调事件对应的UIAbility对象。
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  onAbilityWillContinue?(ability: UIAbility): void;

  /**
   * 在UIAbility的[onContinue]{@link ./@ohos.app.ability.UIAbility:UIAbility#onContinue}触发前回调。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @since 23 static
   */
  onAbilityWillContinue?: OnAbilityWillContinueFn;

  /**
   * 在UIAbility的[onWindowStageRestore]{@link ./@ohos.app.ability.UIAbility:UIAbility#onWindowStageRestore}触发前回调。
   *
   * @param { UIAbility } ability - 回调事件对应的UIAbility对象。
   * @param { window.WindowStage } windowStage - 回调事件对应的UIAbility主窗管理器。
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  onWindowStageWillRestore?(ability: UIAbility, windowStage: window.WindowStage): void;

  /**
   * 在UIAbility的[onWindowStageRestore]{@link ./@ohos.app.ability.UIAbility:UIAbility#onWindowStageRestore}触发前回调。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @since 23 static
   */
  onWindowStageWillRestore?: OnWindowStageWillRestoreFn;

  /**
   * 在UIAbility的[onWindowStageRestore]{@link ./@ohos.app.ability.UIAbility:UIAbility#onWindowStageRestore}触发后回调。
   *
   * @param { UIAbility } ability - 回调事件对应的UIAbility对象。
   * @param { window.WindowStage } windowStage - 回调事件对应的UIAbility主窗管理器。
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  onWindowStageRestore?(ability: UIAbility, windowStage: window.WindowStage): void;

  /**
   * 在UIAbility的[onWindowStageRestore]{@link ./@ohos.app.ability.UIAbility:UIAbility#onWindowStageRestore}触发后回调。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @since 23 static
   */
  onWindowStageRestore?: OnWindowStageRestoreFn;

  /**
   * 在UIAbility的[onSaveState]{@link ./@ohos.app.ability.UIAbility:UIAbility.onSaveState}触发前回调。
   *
   * @param { UIAbility } ability - 回调事件对应的UIAbility对象。
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  onAbilityWillSaveState?(ability: UIAbility): void;

  /**
   * 在UIAbility的[onSaveState]{@link ./@ohos.app.ability.UIAbility:UIAbility.onSaveState}触发前回调。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @since 23 static
   */
  onAbilityWillSaveState?: OnAbilityWillSaveStateFn;

  /**
   * 在UIAbility的[onSaveState]{@link ./@ohos.app.ability.UIAbility:UIAbility.onSaveState}触发后回调。
   *
   * @param { UIAbility } ability - 回调事件对应的UIAbility对象。
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  onAbilitySaveState?(ability: UIAbility): void;

  /**
   * 在UIAbility的[onSaveState]{@link ./@ohos.app.ability.UIAbility:UIAbility.onSaveState}触发后回调。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @since 23 static
   */
  onAbilitySaveState?: OnAbilitySaveStateFn;
}

export default AbilityLifecycleCallback;