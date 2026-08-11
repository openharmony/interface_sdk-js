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
 * @file 设备状态感知
 * @kit MultimodalAwarenessKit
 */

import type { Callback } from "./@ohos.base";

/**
 * **deviceStatus**模块提供设备状态感知能力。
 *
 * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
 * @since 18 dynamic
 * @since 23 static
 */

declare namespace deviceStatus {
  /**
   * 设备静止姿态感知状态（支架态）。
   * 
   * 设备进入支架态指设备静止，且屏幕与水平面角度处于45度-135度。折叠屏手机需处于折叠状态或者完全展开状态。系统通过传感器检测设备的运动状态和角度变化，判断设备是否满足支架态条件。
   *
   * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
   * @since 18 dynamic
   * @since 23 static
   */
  export enum SteadyStandingStatus {
    /**
     * 表示设备退出支架态。
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @since 18 dynamic
     * @since 23 static
     */
    STATUS_EXIT = 0,
    /**
     * 表示设备进入支架态。
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @since 18 dynamic
     * @since 23 static
     */
    STATUS_ENTER = 1
  }

  /**
   * 设备旋转弧度接口。
   *
   * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  export interface DeviceRotationRadian {
    /**
     * 表示X轴旋转弧度。
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    x: double;
    /**
     * 表示Y轴旋转弧度。
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    y: double;
    /**
     * 表示Z轴旋转弧度。
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    z: double;
  }

  /**
   * 订阅设备静止姿态感知（支架态）事件。建议在不需要时调用off()取消订阅，释放资源。
   *
   * @param { 'steadyStandingDetect' } type - 事件类型。type为“steadyStandingDetect”，表示设备静止姿态（支架态）感知。
   * @param { Callback<SteadyStandingStatus> } callback - 回调函数，用于接收设备静止姿态（支架态）状态信息。
   * @throws { BusinessError } 801 - Capability not supported. Function can not work correctly due to limited
   *     <br> device capabilities.
   * @throws { BusinessError } 32500001 - Service exception.
   * @throws { BusinessError } 32500002 - Subscription failed.
   * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
   * @since 18 dynamic
   */
  function on(type: 'steadyStandingDetect', callback: Callback<SteadyStandingStatus>): void;

  /**
   * 取消订阅设备静止姿态感知（支架态）事件，用于应用在退出页面或不再需要监听支架态变化的场景。调用后释放相关资源。
   *
   * @param { 'steadyStandingDetect' } type - 事件类型。type为“steadyStandingDetect”，表示设备静止姿态（支架态）感知。
   * @param { Callback<SteadyStandingStatus> } [callback] - 要注销的回调函数，需与订阅时传入的回调函数一致。若不填，则取消当前监听该事件的所有回调函数。
   * @throws { BusinessError } 801 - Capability not supported. Function can not work correctly due to limited
   *     <br> device capabilities.
   * @throws { BusinessError } 32500001 - Service exception.
   * @throws { BusinessError } 32500003 - Unsubscription failed.
   * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
   * @since 18 dynamic
   */
  function off(type: 'steadyStandingDetect', callback?: Callback<SteadyStandingStatus>): void;

  /**
   * 获取设备的姿态数据。
   * 
   * 姿态数据包含x、y、z三轴的姿态旋转角，即三轴的欧拉角，三轴定义与设备sensor定义相同，为右手系。姿态旋转角在ZXY旋转顺序、内旋下计算，通过传感器融合获取的四元数计算得到结果。
   *
   * @returns { Promise<DeviceRotationRadian> } 设备旋转弧度结果。
   * @throws { BusinessError } 202 - Permission check failed. A non-system application uses the system API.
   * @throws { BusinessError } 801 - Capability not supported. Function can not work correctly due to limited
   *     <br> device capabilities.
   * @throws { BusinessError } 32500001 - Service exception.
   * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  function getDeviceRotationRadian(): Promise<DeviceRotationRadian>;

  /**
   * 订阅设备静止姿态感知（支架态）事件。
   *
   * @param { Callback<SteadyStandingStatus> } callback - 回调函数，用于接收设备静止姿态（支架态）状态信息。
   * @throws { BusinessError } 801 - Capability not supported. Function can not work correctly due to limited
   *     <br> device capabilities.
   * @throws { BusinessError } 32500001 - Service exception.
   * @throws { BusinessError } 32500002 - Subscription failed.
   * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
   * @since 23 static
   */
  function onSteadyStandingDetect(callback: Callback<SteadyStandingStatus>): void;

  /**
   * 取消订阅设备静止姿态感知（支架态）事件。
   *
   * @param { Callback<SteadyStandingStatus> } [callback] - 要注销的回调函数，需与订阅时传入的回调函数一致。若不填，则取消当前监听该事件的所有回调函数。
   * @throws { BusinessError } 801 - Capability not supported. Function can not work correctly due to limited
   *     <br> device capabilities.
   * @throws { BusinessError } 32500001 - Service exception.
   * @throws { BusinessError } 32500003 - Unsubscription failed.
   * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
   * @since 23 static
   */
  function offSteadyStandingDetect(callback?: Callback<SteadyStandingStatus>): void;
}
export default deviceStatus;