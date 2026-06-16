/*
 * Copyright (C) 2023 Huawei Device Co., Ltd.
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
 * @kit ArkUI
 */

/**
 * The **performanceMonitor** module provides APIs for monitoring performance metrics related to user scenes. By calling
 * the **begin** and **end** APIs at the start and end of a scene respectively, you can obtain relevant performance
 * metrics such as response latency, completion latency, and frame drops.
 *
 * > **NOTE**
 * >
 * > The APIs of this module are supported since API version 10. Updates will be marked with a superscript to indicate
 * > their
 * >
 * > The APIs provided by this module are system APIs.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 10 dynamic
 */
declare namespace performanceMonitor {
  /**
   * Enumerates the trigger modes for user scenes (typically scenes involving animations).
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 10 dynamic
   */
  export enum ActionType {
    /**
     * Pressing against the screen.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 10 dynamic
     */
    LAST_DOWN = 0,

    /**
     * Lifting a finger off the screen.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 10 dynamic
     */
    LAST_UP = 1,

    /**
     * First swiping on the screen.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 10 dynamic
     */
    FIRST_MOVE = 2
  }
  
  /**
   * Enumerates the trigger source types of user scenes.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 12 dynamic
   */
  export enum SourceType {
    /**
     * Touchscreen event.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 12 dynamic
     */
    PERF_TOUCH_EVENT = 0,

    /**
     * Mouse event.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 12 dynamic
     */
    PERF_MOUSE_EVENT = 1,

    /**
     * Touchpad event.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 12 dynamic
     */
    PERF_TOUCHPAD_EVENT = 2,

    /**
     * Joystick event.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 12 dynamic
     */
    PERF_JOYSTICK_EVENT = 3,

    /**
     * Keyboard event.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 12 dynamic
     */
    PERF_KEY_EVENT = 4
  }

  /**
   * Marks the start of a user scene. Call this API when the scene begins.
   *
   * @param { string } scene - User scene ID. The string length is unlimited, but it is recommended that you keep it
   *     within 255 characters. The format is recommended to use uppercase letters connected by underscores, for
   *     example, **LAUNCHER_APP_LAUNCH_FROM_ICON**.
   * @param { ActionType } startInputType - Trigger mode of the user scene.
   * @param { string } note - Remarks for the user scene. The string length is unlimited, but it is recommended that you
   *     keep it within 255 characters. This field is optional. If provided, the performance metrics report will include
   *     the remark information; if not provided, there is no impact.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 10 dynamic
   */
  function begin(scene: string, startInputType: ActionType, note?: string): void;

  /**
   * Marks the end of a user scene. Call this API when the scene ends.
   *
   * @param { string } scene - User scene ID, which must be strictly consistent with that in **begin**; otherwise, the
   *     monitoring will be invalid.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 10 dynamic
   */
  function end(scene: string): void;

  /**
   * Records the trigger event type and time before the start of the animation scene.
   *
   * @param { ActionType } type - Trigger mode of the user scene.
   * @param { SourceType } sourceType - Trigger source of the user scene.
   * @param { number } time - Scenario trigger timestamp (in ms), for example, **1751508570794**. Values equal to or
   *     less than 0 will be automatically converted to the current system time, while positive values will be used as-
   *     is. Incorrect parameters may cause abnormal response latency metrics.
   * @throws { BusinessError } 202 - not system application.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 12 dynamic
   */
  function recordInputEventTime(type: ActionType, sourceType: SourceType, time: number): void;
}
export default performanceMonitor;
