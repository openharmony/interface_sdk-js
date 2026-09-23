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
 * @file Device status awareness
 * @kit MultimodalAwarenessKit
 */

import type { Callback } from "./@ohos.base";

/**
 * This module provides the capability of sensing the device status. It senses the physical status of the device in
 * real time through sensors, helping you adjust application behavior based on the physical status of the device.
 *
 * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
 * @since 18 dynamic
 * @since 23 static
 */

declare namespace deviceStatus {
  /**
   * Defines the steady standing state (that is, stand mode).
   * 
   * The device enters the stand mode when it is stationary and the angle between the screen and the horizontal plane
   * is between 45 and 135 degrees. A foldable phone must be in the folded state or the fully unfolded state. The
   * system detects the motion state and angle changes of the device through sensors to determine whether the device
   * meets the stand mode conditions.
   *
   * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
   * @since 18 dynamic
   * @since 23 static
   */
  export enum SteadyStandingStatus {
    /**
     * Exit of the stand mode.
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @since 18 dynamic
     * @since 23 static
     */
    STATUS_EXIT = 0,
    /**
     * Entry to the stand mode.
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @since 18 dynamic
     * @since 23 static
     */
    STATUS_ENTER = 1
  }

  /**
   * Interface for device rotation radian
   *
   * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  export interface DeviceRotationRadian {
    /**
     * indicates X-RotationRadian
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    x: double;
    /**
     * indicates Y-RotationRadian
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    y: double;
    /**
     * indicates Z-RotationRadian
     *
     * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    z: double;
  }

  /**
   * Subscribes to the device steady standing state (stand mode) event. It is recommended to call off() to unsubscribe
   * when it is no longer needed to release resources.
   *
   * @param { 'steadyStandingDetect' } type - Event type. This field has a fixed value of **steadyStandingDetect**.
   * @param { Callback<SteadyStandingStatus> } callback - Callback used to return the steady standing state of the
   *     device.
   * @throws { BusinessError } 801 - Capability not supported. Function can not work correctly due to limited
   *     <br> device capabilities.
   * @throws { BusinessError } 32500001 - Service exception.
   * @throws { BusinessError } 32500002 - Subscription failed.
   * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
   * @since 18 dynamic
   */
  function on(type: 'steadyStandingDetect', callback: Callback<SteadyStandingStatus>): void;

  /**
   * Unsubscribes from steady standing state events.
   *
   * @param { 'steadyStandingDetect' } type - Event type. This field has a fixed value of **steadyStandingDetect**.
   * @param { Callback<SteadyStandingStatus> } [callback] - Callback used to return the steady standing state of the
   *     device.
   * @throws { BusinessError } 801 - Capability not supported. Function can not work correctly due to limited
   *     <br> device capabilities.
   * @throws { BusinessError } 32500001 - Service exception.
   * @throws { BusinessError } 32500003 - Unsubscription failed.
   * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
   * @since 18 dynamic
   */
  function off(type: 'steadyStandingDetect', callback?: Callback<SteadyStandingStatus>): void;

  /**
   * Obtains the device posture data.
   * 
   * The posture data contains the rotation angles of the x, y, and z axes, that is, the Euler angles of the three axes.
   * The definitions of the three axes are the same as those of the device sensor, and the right-handed coordinate 
   * system is used. Posture rotation angles are calculated under the z-x-y intrinsic rotation order, and derived by 
   * converting quaternions obtained via sensor fusion.
   *
   * @returns { Promise<DeviceRotationRadian> } The result of device rotation radian.
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
   * Subscribes to steady standing status detection events.
   *
   * @param { Callback<SteadyStandingStatus> } callback - Indicates the callback for getting the event data.
   * @throws { BusinessError } 801 - Capability not supported. Function can not work correctly due to limited
   *     <br> device capabilities.
   * @throws { BusinessError } 32500001 - Service exception.
   * @throws { BusinessError } 32500002 - Subscription failed.
   * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
   * @since 23 static
   */
  function onSteadyStandingDetect(callback: Callback<SteadyStandingStatus>): void;

  /**
   * Unsubscribes from steady standing status detection events.
   *
   * @param { Callback<SteadyStandingStatus> } [callback] - Indicates the callback for getting the event data.
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
