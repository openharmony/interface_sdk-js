/*
 * Copyright (c) 2026 Huawei Device Co., Ltd.
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
 * @file 设备状态感知框架
 * @kit MultimodalAwarenessKit
 */

import type { Callback } from './@ohos.base';

/**
 * 设备状态感知框架提供设备状态感知能力，包括绝对静止和相对静止，适用于需要根据设备静止状态优化应用性能、智能省电、场景识别等场景。
 * 
 * > **说明：**
 * >
 * > 本模块不支持在x86平台上运行。
 *
 * @syscap SystemCapability.Msdp.DeviceStatus.Stationary
 * @since 9
 */
declare namespace stationary {
  /**
   * 服务响应抽象接口。
   *
   * @syscap SystemCapability.Msdp.DeviceStatus.Stationary
   * @since 9
   */
  interface ActivityResponse {
    /**
     * 设备状态变化返回值。
     *
     * @syscap SystemCapability.Msdp.DeviceStatus.Stationary
     * @since 9
     */
    state: ActivityState;
  }

  /**
   * 设备状态类型。
   *
   * @unionmember { 'still' } 绝对静止。
   * @unionmember { 'relativeStill' } 相对静止。
   * @syscap SystemCapability.Msdp.DeviceStatus.Stationary
   * @since 9
   */
  type ActivityType = 'still' | 'relativeStill';

  /**
   * 设备状态事件。
   *
   * @syscap SystemCapability.Msdp.DeviceStatus.Stationary
   * @since 9
   */
  enum ActivityEvent {
    /**
     * 进入事件，表示设备进入静止状态时触发。
     *
     * @syscap SystemCapability.Msdp.DeviceStatus.Stationary
     * @since 9
     */
    ENTER = 1,

    /**
     * 退出事件，表示设备退出静止状态时触发。
     *
     * @syscap SystemCapability.Msdp.DeviceStatus.Stationary
     * @since 9
     */
    EXIT = 2,

    /**
     * 进入和退出事件，表示设备进入和退出静止状态时均会触发。
     *
     * @syscap SystemCapability.Msdp.DeviceStatus.Stationary
     * @since 9
     */
    ENTER_EXIT = 3
  }

  /**
   * 设备状态返回值。
   *
   * @syscap SystemCapability.Msdp.DeviceStatus.Stationary
   * @since 9
   */
  enum ActivityState {
    /**
     * 进入状态，表示设备当前处于静止状态。
     *
     * @syscap SystemCapability.Msdp.DeviceStatus.Stationary
     * @since 9
     */
    ENTER = 1,

    /**
     * 退出状态，表示设备当前未处于静止状态。
     *
     * @syscap SystemCapability.Msdp.DeviceStatus.Stationary
     * @since 9
     */
    EXIT = 2
  }

  /**
   * 订阅设备状态变化事件。当设备满足指定状态条件时，系统会触发回调函数上报状态变化事件。调用on()后，必须在不使用时调用off()取消订阅，避免多余的性能功耗开销。
   *
   * @param { ActivityType } activity - 设备状态类型。
   * @param { ActivityEvent } event - 事件类型。
   * @param { number } reportLatencyNs - 报告延时，单位：纳秒（ns），取值范围[1000000000, 3000000000]。超出范围时返回错误。建议根据业务场景选择合适的值，较小值可提高实时性但
   *     会增加功耗，较大值可降低功耗但会降低响应速度。
   * @param { Callback<ActivityResponse> } callback - 回调函数，用于接收设备状态变化结果。
   * @syscap SystemCapability.Msdp.DeviceStatus.Stationary
   * @since 9
   */
  function on(activity: ActivityType, event: ActivityEvent, reportLatencyNs: number, callback: Callback<ActivityResponse>): void;

  /**
   * 查询设备状态。通过callback回调返回查询结果，仅执行一次。使用callback异步回调。
   *
   * @param { ActivityType } activity - 设备状态类型。
   * @param { Callback<ActivityResponse> } callback - 回调函数，用于接收设备状态查询结果。
   * @syscap SystemCapability.Msdp.DeviceStatus.Stationary
   * @since 9
   */
  function once(activity: ActivityType, callback: Callback<ActivityResponse>): void;

  /**
   * 取消订阅设备状态服务。取消订阅后，将停止接收该状态相关的回调函数调用。调用off()时需要使用与on()相同的activity和event参数。
   *
   * @param { ActivityType } activity - 设备状态类型。
   * @param { ActivityEvent } event - 事件类型。
   * @param { Callback<ActivityResponse> } [callback] - 要移除的回调函数。未传递callback参数或传递undefined时，移除该进程下订阅该类型的所有callback。
   * @syscap SystemCapability.Msdp.DeviceStatus.Stationary
   * @since 9
   */
  function off(activity: ActivityType, event: ActivityEvent, callback?: Callback<ActivityResponse>): void;
}

export default stationary;