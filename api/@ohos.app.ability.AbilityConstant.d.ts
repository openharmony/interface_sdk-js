/*
 * Copyright (c) 2022-2025 Huawei Device Co., Ltd.
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

import type appManager from './@ohos.app.ability.appManager';

/**
 * AbilityConstant provides enums related to abilities, including the window mode.
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @stagemodelonly
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 * @since 23 static
 */
declare namespace AbilityConstant {
  /**
   * The UIAbility is launched via a home screen shortcut. If this string is obtained from the **launchReasonMessage**
   * property in [LaunchParam]{@link AbilityConstant.LaunchParam}, the UIAbility is initiated by touching a shortcut on
   * the home screen.
   *
   * @syscap SystemCapability.Ability.AbilityBase
   * @stagemodelonly
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  const REASON_MESSAGE_DESKTOP_SHORTCUT = 'ReasonMessage_DesktopShortcut';

  /**
   * Describes the launch parameters, which mainly include the ability launch reasons and reasons for the last exit. The
   *  parameter values are automatically passed in by the system when the ability is launched. You do not need to change
   *  the values.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  export interface LaunchParam {
    /**
     * An enumerated value indicating the reason for ability launch (for example, recovery from a fault, intent
     * invocation, or atomic service sharing). For details, see [LaunchReason]{@link AbilityConstant.LaunchReason}.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    launchReason: LaunchReason;

    /**
     * Detailed message that describes the reason for the ability launch.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    launchReasonMessage?: string;

    /**
     * An enumerated value indicating the reason for the last exit of the ability.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    lastExitReason: LastExitReason;

    /**
     * Detailed message that describes the reason for the last exit of the ability.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    lastExitMessage: string;

    /**
     * Key runtime information for the last exit of the ability (including process ID, exit timestamp, and RSS memory
     * value).
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    lastExitDetailInfo?: LastExitDetailInfo;

    /**
     * UTC timestamp when the UIAbility starts, in milliseconds.
     *
     * This API can be used in atomic services since API version 23.
     *
     * **Constraints**:
     *
     * This feature takes effect only when the UIAbility is started. For other types of abilities (for example,
     * UIExtensionAbility), the obtained start time is the default value **0**.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since 23 dynamic&static
     */
    launchUTCTime?: long;

    /**
     * System uptime (the time elapsed since the system booted up) when the UIAbility starts, in milliseconds.
     *
     * **Constraints**:
     *
     * This feature takes effect only when the UIAbility is started. For other types of abilities (for example,
     * UIExtensionAbility), the obtained start time is the default value **0**.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since 23 dynamic&static
     */
    launchUptime?: long;
  }

  /**
   * Describes the key runtime information of the process where the ability last exited.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 18 dynamic
   * @since 23 static
   */
  export interface LastExitDetailInfo {
    /**
     * ID of the process where the ability last exited.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    pid: int;

    /**
     * Name of the process.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    processName: string;

    /**
     * UID of the application.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    uid: int;

    /**
     * Specific reason for the last exit of the ability.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    exitSubReason: int;

    /**
     * Reason why the process was killed.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    exitMsg: string;

    /**
     * Actual memory usage of the process, in KB.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    rss: int;

    /**
     * Actual physical memory usage of the process, in KB.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    pss: int;

    /**
     * Exact time when the ability last exited.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    timestamp: long;

    /**
     * Process status of the ability when it last exited.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    processState?: appManager.ProcessState;

    /**
     * Indecates kill reason message.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since 24 dynamic&static
     */
    killReason?: string;
  }

  /**
   * Enumerates the ability launch reasons. You can use it together with the value of **launchParam.launchReason** in
   * [onCreate(want, launchParam)]{@link @ohos.app.ability.UIAbility:UIAbility#onCreate} of the UIAbility to complete
   * different operations.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  export enum LaunchReason {
    /**
     * Unknown reason.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    UNKNOWN = 0,

    /**
     * The ability is started by calling
     * [startAbility]{@link ./application/UIAbilityContext:UIAbilityContext.startAbility(want: Want, callback: AsyncCallback<void>)}
     * .
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    START_ABILITY = 1,

    /**
     * The ability is started by calling
     * [startAbilityByCall]{@link ./application/UIAbilityContext:UIAbilityContext.startAbilityByCall}.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    CALL = 2,

    /**
     * The ability is started by means of cross-device migration.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    CONTINUATION = 3,

    /**
     * The ability is automatically started when the application is restored from a fault.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    APP_RECOVERY = 4,

    /**
     * The ability is started by means of atomic service sharing.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    SHARE = 5,

    /**
     * The ability is automatically started upon system boot.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @since 11 dynamic
     * @since 23 static
     */
    AUTO_STARTUP = 8,

    /**
     * The ability is started by the InsightIntent framework..
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    INSIGHT_INTENT = 9,

    /**
     * The ability is started in advance during cross-device migration.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    PREPARE_CONTINUATION = 10,

    /**
     * The ability is started through preloading.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    PRELOAD = 11
  }

  /**
   * Enumerates the reasons for the last exit of the ability. You can use it together with the value of
   * **launchParam.lastExitReason** in [onCreate()]{@link @ohos.app.ability.UIAbility:UIAbility#onCreate} of the
   * UIAbility to complete different operations.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  export enum LastExitReason {
    /**
     * Unknown reason.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    UNKNOWN = 0,

    /**
     * The ability does not respond.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @since 9 dynamiconly
     * @deprecated since 10
     * @useinstead AbilityConstant.LastExitReason.APP_FREEZE
     */
    ABILITY_NOT_RESPONDING = 1,

    /**
     * The ability exits normally because the user closes the application.
     *
     * Note: If the application process is forcibly terminated using methods not provided by Ability Kit, such as
     * calling [process.exit()](../apis-arkts/js-apis-process.md#processexitdeprecated) or using the kernel **kill**
     * command, the reason for the last exit is also reported as **NORMAL**.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    NORMAL = 2,

    /**
     * The ability exits due to [process crash](docroot://dfx/cppcrash-guidelines.md).
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    CPP_CRASH = 3,

    /**
     * The ability exits due to a JS_ERROR fault triggered when an application has a JS syntax error that is not
     * captured by developers.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    JS_ERROR = 4,

    /**
     * The ability exits due to [application freeze](docroot://dfx/appfreeze-guidelines.md).
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    APP_FREEZE = 5,

    /**
     * The ability exits due to system performance problems, for example, insufficient device memory.
     *
     * Note: This API will be deprecated. You are advised to use **RESOURCE_CONTROL** instead.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    PERFORMANCE_CONTROL = 6,

    /**
     * The ability exits due to improper use of system resources. The specific error cause can be obtained through
     * [LaunchParam.lastExitMessage]{@link AbilityConstant.LaunchParam}. The possible causes are as follows:
     *
     * - **CPU Highload**: The CPU load is high.
     * - **CPU_EXT Highload**: A fast CPU load detection is carried out.
     * - **IO Manage Control**: An I/O management and control operation is carried out.
     * - **App Memory Deterioration**: The application memory usage exceeds the threshold.
     * - **Temperature Control**: The temperature is too high or too low.
     * - **Memory Pressure**: The system is low on memory, triggering process termination in ascending order of
     * priority.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    RESOURCE_CONTROL = 7,

    /**
     * The application exits due to an upgrade.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    UPGRADE = 8,

    /**
     * The ability exits because it receives a request from the multitasking center.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    USER_REQUEST = 9,

    /**
     * The ability exits because it receives a kill signal from the system.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    SIGNAL = 10
  }

  /**
   * Enumerates the ability continuation results. You can use it in
   * [onContinue()]{@link @ohos.app.ability.UIAbility:UIAbility#onContinue} of the UIAbility to complete different
   * operations.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  export enum OnContinueResult {
    /**
     * The ability continuation is accepted.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    AGREE = 0,

    /**
     * The ability continuation is rejected. If the application is abnormal in
     * [onContinue]{@link @ohos.app.ability.UIAbility:UIAbility#onContinue}, which results in abnormal display during
     * data restoration, this result is returned.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    REJECT = 1,

    /**
     * The version does not match. The application on the initiator can obtain the version of the target application
     * from [onContinue]{@link @ohos.app.ability.UIAbility:UIAbility#onContinue}. If the ability continuation cannot be
     * performed due to version mismatch, this result is returned.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    MISMATCH = 2
  }

  /**
   * Enumerates the memory levels of the entire device. You can use it in
   * [onMemoryLevel()]{@link @ohos.app.ability.Ability:Ability#onMemoryLevel} of the UIAbility to complete different
   * operations.
   *
   * > **NOTE**
   * >
   * > - The trigger conditions may differ across various devices. For example, on a standard device with 12 GB of
   * > memory:
   * > - When the available memory of the entire device drops to 1700 MB to 1800 MB, the **onMemoryLevel** callback
   * > with a value of **0** is triggered, indicating that the available memory is moderate.
   * > - When the available memory of the entire device drops to 1600 MB to 1700 MB, the **onMemoryLevel** callback
   * > with a value of **1** is triggered, indicating that the available memory is low.
   * > - When the available memory of the entire device drops below 1600 MB, the **onMemoryLevel** callback with a
   * > value of **2** is triggered, indicating that the available memory is critically low.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  export enum MemoryLevel {
    /**
     * Indicates that the system has a moderate amount of available memory. Due to differences in system-wide memory
     * thresholds across devices, the actual performance may vary by product. For details, please refer to the notes
     * below.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    MEMORY_LEVEL_MODERATE = 0,

    /**
     * Indicates that the system has low available memory. Due to differences in system-wide memory thresholds across
     * devices, the actual performance may vary by product. For details, please refer to the notes below.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    MEMORY_LEVEL_LOW = 1,

    /**
     * Indicates that the system has critically low available memory. Due to differences in system-wide memory
     * thresholds across devices, the actual performance may vary by product. For details, please refer to the notes
     * below.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    MEMORY_LEVEL_CRITICAL = 2,

    /**
     * All UI elements of the process are hidden.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since 24 dynamic&static
     */
    MEMORY_LEVEL_UI_HIDDEN = 3,

    /**
     * The process is in the background and the available memory of the entire device is moderate.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since 24 dynamic&static
     */
    MEMORY_LEVEL_BACKGROUND_MODERATE = 4,

    /**
     * The process is in the background and the available memory of the entire device is low.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since 24 dynamic&static
     */
    MEMORY_LEVEL_BACKGROUND_LOW = 5,

    /**
     * The process is in the background and the available memory of the entire device is extremely low.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since 24 dynamic&static
     */
    MEMORY_LEVEL_BACKGROUND_CRITICAL = 6
  }

  /**
   * Enumerates the window modes in which a UIAbility can be displayed at startup. It can be used in
   * [startAbility]{@link ./application/UIAbilityContext:UIAbilityContext#startAbility(want: Want, options?: StartOptions)}
   * .
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 12 dynamic
   * @since 23 static
   */
  export enum WindowMode {
    /**
     * Undefined window mode.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    WINDOW_MODE_UNDEFINED = 0,

    /**
     * Full-screen mode. It takes effect only on 2-in-1 devices and tablets.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    WINDOW_MODE_FULLSCREEN = 1,

    /**
     * Primary screen (left screen in the case of horizontal orientation) in split-screen mode. It is valid only in
     * intra-app redirection scenarios. It takes effect only on foldable devices and tablets.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    WINDOW_MODE_SPLIT_PRIMARY = 100,

    /**
     * Secondary screen (right screen in the case of horizontal orientation) in split-screen mode. It is valid only in
     * intra-app redirection scenarios. It takes effect only on foldable devices and tablets.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    WINDOW_MODE_SPLIT_SECONDARY = 101,

    /**
     * The ability is displayed in a floating window.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    WINDOW_MODE_FLOATING = 102
  }

  /**
   * Enumerates the result types for the operation of saving application data. You can use it in
   * [onSaveState()]{@link @ohos.app.ability.UIAbility:UIAbility.onSaveState(reason: AbilityConstant.StateType, wantParam: Record<string, Object>)}
   *  of the UIAbility to complete
   * [UIAbility backup and restore](docroot://application-models/ability-recover-guideline.md).
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  export enum OnSaveResult {
    /**
     * Always agreed to save the status.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    ALL_AGREE = 0,

    /**
     * Rejected to save the status in continuation.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    CONTINUATION_REJECT = 1,

    /**
     * Continuation mismatch.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    CONTINUATION_MISMATCH = 2,

    /**
     * Agreed to restore the saved status.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    RECOVERY_AGREE = 3,

    /**
     * Rejected to restore the saved status.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    RECOVERY_REJECT = 4,

    /**
     * Always rejected to save the status.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    ALL_REJECT = 5
  }

  /**
   * Enumerates the scenarios for saving application data. You can use it in
   * [onSaveState()]{@link @ohos.app.ability.UIAbility:UIAbility.onSaveState(reason: AbilityConstant.StateType, wantParam: Record<string, Object>)}
   *  of the UIAbility to complete
   * [UIAbility backup and restore](docroot://application-models/ability-recover-guideline.md).
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  export enum StateType {
    /**
     * Application migration scenario.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    CONTINUATION = 0,

    /**
     * Application recovery scenario.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    APP_RECOVERY = 1
  }

  /**
   * Enumerates the mission continuation states of the application. It is used in the
   * [setMissionContinueState]{@link ./application/UIAbilityContext:UIAbilityContext.setMissionContinueState(state: AbilityConstant.ContinueState, callback: AsyncCallback<void>)}
   *  API of [UIAbilityContext]{@link ./application/UIAbilityContext:UIAbilityContext}.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 23 static
   */
  export enum ContinueState {
    /**
     * Mission continuation is activated for the current application.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    ACTIVE = 0,

    /**
     * Mission continuation is not activated for the current application.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    INACTIVE = 1
  }

  /**
   * Enumerates the collaboration request results. You can use it in multi-device collaboration scenarios to specify
   * whether the target application accepts the collaboration request from the caller application. You can use it in
   * [onCollaborate()]{@link @ohos.app.ability.UIAbility:UIAbility.onCollaborate(wantParam: Record<string, Object>)} of
   * the UIAbility.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 18 dynamic
   * @since 23 static
   */
  export enum CollaborateResult {
    /**
     * Accepts the collaboration request.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @since 18 dynamic
     * @since 23 static
     */
    ACCEPT = 0,

    /**
     * Rejects the collaboration request.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @since 18 dynamic
     * @since 23 static
     */
    REJECT = 1
  }

  /**
   * Enumerates the actions triggered when an application is closed by the user. You can use it in
   * [onPrepareTermination]{@link @ohos.app.ability.AbilityStage:AbilityStage#onPrepareTermination} or
   * [onPrepareTerminationAsync]{@link @ohos.app.ability.AbilityStage:AbilityStage#onPrepareTerminationAsync} of
   * [AbilityStage]{@link @ohos.app.ability.AbilityStage:AbilityStage}.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 15 dynamic
   * @since 23 static
   */
  export enum PrepareTermination {
    /**
     * Executes the termination action immediately. This is the default behavior.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    TERMINATE_IMMEDIATELY = 0,

    /**
     * Cancels the termination action.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    CANCEL = 1
  }
}

export default AbilityConstant;