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
 * The definition of AbilityConstant.
 *
 * @namespace AbilityConstant
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @StageModelOnly
 * @since 9
 */
/**
 * The definition of AbilityConstant.
 * @namespace AbilityConstant
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @StageModelOnly
 * @crossplatform
 * @since 10
 */
declare namespace AbilityConstant {
  /**
   * Interface of launch param.
   *
   * @typedef LaunchParam
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @StageModelOnly
   * @since 9
   */
  /**
   * Interface of launch param.
   * @typedef LaunchParam
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @StageModelOnly
   * @crossplatform
   * @since 10
   */
  export interface LaunchParam {
    /**
     * Indicates launch reason.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @StageModelOnly
     * @since 9
     */
    /**
     * Indicates launch reason.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @StageModelOnly
     * @crossplatform
     * @since 10
     */
    launchReason: LaunchReason;

    /**
     * Indicates last exit reason.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @StageModelOnly
     * @since 9
     */
    /**
     * Indicates last exit reason.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @StageModelOnly
     * @crossplatform
     * @since 10
     */
    lastExitReason: LastExitReason;
  }

  /**
   * Type of launch reason.
   *
   * @enum { number }
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @StageModelOnly
   * @since 9
   */
  /**
   * Type of launch reason.
   * @enum { number }
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @StageModelOnly
   * @crossplatform
   * @since 10
   */
  export enum LaunchReason {
    /**
     * Unknown reason.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @StageModelOnly
     * @since 9
     */
    /**
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @StageModelOnly
     * @crossplatform
     * @since 10
     */
    UNKNOWN = 0,

    /**
     * Start ability through the startAbility interface.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @StageModelOnly
     * @since 9
     */
    START_ABILITY = 1,

    /**
     * Start ability through the startAbilityByCall interface.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @StageModelOnly
     * @since 9
     */
    CALL = 2,

    /**
     * Cross-end device migration starts ability.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @StageModelOnly
     * @since 9
     */
    CONTINUATION = 3,

    /**
     * After the application is restored, the ability is automatically restored and started when the application fails.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @StageModelOnly
     * @since 9
     */
    APP_RECOVERY = 4,

    /**
     * Start ability through the acquireShareData interface.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @since 10
     */
    SHARE = 5
  }

  /**
   * Type of last exit reason.
   *
   * @enum { number }
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @StageModelOnly
   * @since 9
   */
  /**
   * Type of last exit reason.
   * @enum { number }
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @StageModelOnly
   * @crossplatform
   * @since 10
   */
  export enum LastExitReason {
    /**
     * Unknown reason.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @StageModelOnly
     * @since 9
     */
    /**
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @StageModelOnly
     * @crossplatform
     * @since 10
     */
    UNKNOWN = 0,

    /**
     * Ability is not responding.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @StageModelOnly
     * @since 9
     */
    ABILITY_NOT_RESPONDING = 1,

    /**
     * Exit normally.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @StageModelOnly
     * @since 9
     */
    NORMAL = 2
  }

  /**
   * Type of onContinue result.
   *
   * @enum { number }
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @StageModelOnly
   * @since 9
   */
  export enum OnContinueResult {
    /**
     * Agree to the result of Ability migration.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @StageModelOnly
     * @since 9
     */
    AGREE = 0,

    /**
     * Reject to the result of Ability migration.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @StageModelOnly
     * @since 9
     */
    REJECT = 1,

    /**
     * Mismatch to the result of Ability migration.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @StageModelOnly
     * @since 9
     */
    MISMATCH = 2
  }

  /**
   * Type of memory level.
   *
   * @enum { number }
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @StageModelOnly
   * @since 9
   */
  export enum MemoryLevel {
    /**
     * Memory footprint is moderate.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @StageModelOnly
     * @since 9
     */
    MEMORY_LEVEL_MODERATE = 0,

    /**
     * Low memory footprint.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @StageModelOnly
     * @since 9
     */
    MEMORY_LEVEL_LOW = 1,

    /**
     * High memory footprint.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @StageModelOnly
     * @since 9
     */
    MEMORY_LEVEL_CRITICAL = 2
  }

  /**
   * Type of window mode.
   *
   * @enum { number }
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @StageModelOnly
   * @since 9
   */
  export enum WindowMode {
    /**
     * The window mode is not defined.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @StageModelOnly
     * @since 9
     */
    WINDOW_MODE_UNDEFINED = 0,

    /**
     * Full screen mode.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @StageModelOnly
     * @since 9
     */
    WINDOW_MODE_FULLSCREEN = 1,

    /**
     * The horizontal direction of the screen indicates the left split screen, and the vertical direction of the
     * screen indicates the upper split screen.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @StageModelOnly
     * @since 9
     */
    WINDOW_MODE_SPLIT_PRIMARY = 100,

    /**
     * If the screen is horizontal, it means the right split screen, and if the screen is vertical,
     * it means the lower split screen.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @StageModelOnly
     * @since 9
     */
    WINDOW_MODE_SPLIT_SECONDARY = 101,

    /**
     * Free floating form window mode.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @StageModelOnly
     * @since 9
     */
    WINDOW_MODE_FLOATING = 102
  }

  /**
   * Type of onSave result.
   *
   * @enum { number }
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @StageModelOnly
   * @since 9
   */
  export enum OnSaveResult {
    /**
     * Always agree to save the state.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @StageModelOnly
     * @since 9
     */
    ALL_AGREE = 0,

    /**
     * Refuse to migrate save state.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @StageModelOnly
     * @since 9
     */
    CONTINUATION_REJECT = 1,

    /**
     * The migration does not match.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @StageModelOnly
     * @since 9
     */
    CONTINUATION_MISMATCH = 2,

    /**
     * Agree to restore the saved state.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @StageModelOnly
     * @since 9
     */
    RECOVERY_AGREE = 3,

    /**
     * Refusing to restore the saved state.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @StageModelOnly
     * @since 9
     */
    RECOVERY_REJECT = 4,

    /**
     * Always refuses to save the state.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @StageModelOnly
     * @since 9
     */
    ALL_REJECT
  }

  /**
   * Type of save state.
   *
   * @enum { number }
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @StageModelOnly
   * @since 9
   */
  export enum StateType {
    /**
     * Migrate and save the state.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @StageModelOnly
     * @since 9
     */
    CONTINUATION = 0,

    /**
     * Apply to restore the saved state.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @StageModelOnly
     * @since 9
     */
    APP_RECOVERY = 1
  }
}

export default AbilityConstant;
