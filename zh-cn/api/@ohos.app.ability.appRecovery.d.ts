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

import UIAbilityContext from './application/UIAbilityContext';
import Want from './@ohos.app.ability.Want';

/**
 * appRecovery模块提供了应用在故障状态下的恢复能力。
 * 
 * > **说明：**
 * >
 * > API9仅支持单进程中单Ability的应用恢复。
 * >
 * > API10支持进程中包含多个Ability的场景。
 * >
 * > API24支持发生CPP_CRASH时应用恢复。
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @atomicservice [since 11]
 * @since 9 dynamic
 * @since 23 static
 */
declare namespace appRecovery {
  /**
   * 应用重启标志，[enableAppRecovery]{@link appRecovery.enableAppRecovery}接口重启选项参数，该类型为枚举。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  enum RestartFlag {
    /**
     * 总是重启应用。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    ALWAYS_RESTART = 0,

    /**
     * 发生JS_CRASH时重启应用。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    RESTART_WHEN_JS_CRASH = 0x0001,

    /**
     * 发生APP_FREEZE时重启应用。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    RESTART_WHEN_APP_FREEZE = 0x0002,

    /**
     * 总是不重启应用。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    NO_RESTART = 0xFFFF,
  
    /**
     * 发生CPP_CRASH时重启应用。
     * 
     * **模型约束**：此接口仅可在Stage模型下使用。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since 24 dynamic&static
     */
    RESTART_WHEN_CPP_CRASH = 0x0004
  }

  /**
   * 保存条件标志，[enableAppRecovery]{@link appRecovery.enableAppRecovery}接口状态保存时的选项参数，该类型为枚举。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  enum SaveOccasionFlag {
    /**
     * 当发生应用故障时保存。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    SAVE_WHEN_ERROR = 0x0001,

    /**
     * 当应用切入后台时保存。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    SAVE_WHEN_BACKGROUND = 0x0002
  }

  /**
   * 状态保存标志，[enableAppRecovery]{@link appRecovery.enableAppRecovery}接口状态保存方式的参数，该类型为枚举。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  enum SaveModeFlag {
    /**
     * 每次状态保存都会写入到本地文件缓存。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    SAVE_WITH_FILE = 0x0001,

    /**
     * 状态先保存在内存中，应用故障退出时写入到本地文件缓存。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    SAVE_WITH_SHARED_MEMORY = 0x0002
  }

  /**
   * 使能应用恢复功能，参数按顺序填入。该接口调用后，应用从启动器启动时第一个Ability支持恢复。
   *
   * @param { RestartFlag } [restart] - 枚举类型，发生对应故障时是否重启，默认为重启。
   * @param { SaveOccasionFlag } [saveOccasion] - 枚举类型，状态保存时机，默认为故障时保存。
   * @param { SaveModeFlag } [saveMode] - 枚举类型，状态保存方式， 默认为文件缓存。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @StageModelOnly
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  function enableAppRecovery(restart?: RestartFlag, saveOccasion?: SaveOccasionFlag, saveMode?: SaveModeFlag) : void;

  /**
   * 重启当前进程，并拉起应用启动时第一个Ability，如果该Ability存在已经保存的状态，这些状态数据会在Ability的onCreate生命周期回调的want参数中作为wantParam属性传入。
   * 
   * API10时将启动由[setRestartWant]{@link appRecovery.setRestartWant}指定的Ability。如果没有指定则按以下规则启动：
   * 
   * 如果当前应用前台的Ability支持恢复，则重新拉起该Ability。
   * 
   * 如果存在多个支持恢复的Ability处于前台，则只拉起最后一个。
   * 
   * 如果没有Ability处于前台，则不拉起。
   * 
   * 可以配合[errorManager]{@link @ohos.app.ability.errorManager:errorManager}相关接口使用。两次重启的间隔应大于一分钟，一分钟之内重复调用此接口只会退出应用不会重启应用。
   * 自动重启的行为与主动重启一致。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @StageModelOnly
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  function restartApp(): void;

  /**
   * 设置下次恢复主动拉起场景下的Ability。该Ability必须为当前包下的UIAbility。
   *
   * @param { Want } want - 通过设置Want中"bundleName"和"abilityName"字段来指定恢复重启的Ability。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @StageModelOnly
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 23 static
   */
  function setRestartWant(want: Want): void;

  /**
   * 保存当前App状态，可以配合[errorManager]{@link @ohos.app.ability.errorManager:errorManager}相关接口使用。
   *
   * @returns { boolean } 保存成功与否。true：保存成功，false：保存失败。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @StageModelOnly
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  function saveAppState(): boolean;
  /**
   * 主动保存Ability的状态，这个状态将在下次恢复启动时使用。可以配合[errorManager]{@link @ohos.app.ability.errorManager:errorManager}相关接口使用。
   *
   * @param { UIAbilityContext } [context] - 需要保存状态的UIAbility所对应的context。
   * @returns { boolean } 保存成功与否。true：保存成功，false：保存失败。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @StageModelOnly
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 23 static
   */
  function saveAppState(context?: UIAbilityContext): boolean;
}

export default appRecovery;