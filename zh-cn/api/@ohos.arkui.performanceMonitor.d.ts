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
 * @file Performance Monitoring
 * @kit ArkUI
 */

/**
 * 提供用户操作场景性能相关指标监测能力，在场景开始和结束时分别调用begin和end接口，即可获得该场景相关性能指标，目前仅包含响应时延、完成时延、丢帧。
 * 
 * > **说明：**
 * >
 * > - 从API Version 10开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。
 * 
 * > - 本模块接口为系统接口。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 10 dynamic
 */
declare namespace performanceMonitor {
  /**
   * 用户场景（通常为具有动效的场景）触发模式枚举。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 10 dynamic
   */
  export enum ActionType {
    /**
     * 用户按压事件触发。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 10 dynamic
     */
    LAST_DOWN = 0,

    /**
     * 用户离手事件触发。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 10 dynamic
     */
    LAST_UP = 1,

    /**
     * 用户首次滑动事件触发。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 10 dynamic
     */
    FIRST_MOVE = 2
  }

  /**
   * 用户场景触发源类型枚举。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 12 dynamic
   */
  export enum SourceType {
    /**
     * 触摸屏事件。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 12 dynamic
     */
    PERF_TOUCH_EVENT = 0,

    /**
     * 鼠标事件。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 12 dynamic
     */
    PERF_MOUSE_EVENT = 1,

    /**
     * 触摸板事件。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 12 dynamic
     */
    PERF_TOUCHPAD_EVENT = 2,

    /**
     * 摇杆事件。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 12 dynamic
     */
    PERF_JOYSTICK_EVENT = 3,

    /**
     * 键盘事件。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 12 dynamic
     */
    PERF_KEY_EVENT = 4
  }

  /**
   * 用于标记用户场景开始，用户场景开始时调用此接口。
   *
   * @param { string } scene - 用户场景id。字符串长度无限制，建议控制在255个字符以内，格式推荐字母大写且用下划线连接，例如LAUNCHER_APP_LAUNCH_FROM_ICON。
   * @param { ActionType } startInputType - 用户场景触发模式。
   * @param { string } note - 用户场景备注信息。字符串长度无限制，建议控制在255个字符以内，可以空缺不填，填写后性能指标上报会携带备注信息，不填无影响。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 10 dynamic
   */
  function begin(scene: string, startInputType: ActionType, note?: string): void;

  /**
   * 用于标记用户场景结束，用户场景结束时调用此接口。
   *
   * @param { string } scene - 用户场景id，与begin配对严格保持一致，否则本次场景监测无效。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 10 dynamic
   */
  function end(scene: string): void;

  /**
   * 记录动效场景开始前，用户输入触发事件类型与时间。
   *
   * @param { ActionType } type - 用户场景触发模式。
   * @param { SourceType } sourceType - 用户场景触发源。
   * @param { number } time - 场景触发时间（ms），时间戳，例如1751508570794。若传零或负值将自动转化为当前系统时间，若传正值则正常使用。不正确的传参会导致用户操作响应时延指标异常。
   * @throws { BusinessError } 202 - not system application.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 12 dynamic
   */
  function recordInputEventTime(type: ActionType, sourceType: SourceType, time: number): void;
}

export default performanceMonitor;