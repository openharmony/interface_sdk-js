/*
 * Copyright (c) 2026 Huawei Device Co., Ltd.
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
 * @kit MultimodalAwarenessKit
 */
import { Callback } from './@ohos.base';

/**
 * This module provides the capability to use car awareness
 *
 * @syscap SystemCapability.MultimodalAwareness.CarAwareness
 * @stagemodelonly
 * @atomicservice
 * @since 26.1.0
 */
declare namespace carAwareness {
  /**
   * CarAwareness Capability.
   *
   * @syscap SystemCapability.MultimodalAwareness.CarAwareness
   * @stagemodelonly
   * @since 26.1.0
   */
  enum Capability {
    /**
     * spatial motion specific capability
     *
     * @syscap SystemCapability.MultimodalAwareness.CarAwareness
     * @stagemodelonly
     * @since 26.1.0
     */
    SPATIAL_MOTION = 'SpatialMotion',
    /**
     * spatial point specific capability
     *
     * @syscap SystemCapability.MultimodalAwareness.CarAwareness
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0
     */
    SPATIAL_POINT = 'SpatialPoint',
    /**
     * spatial gesture specific capability
     *
     * @syscap SystemCapability.MultimodalAwareness.CarAwareness
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0
     */
    SPATIAL_GESTURE = 'SpatialGesture',
    /**
     * realtime weather specific capability
     *
     * @syscap SystemCapability.MultimodalAwareness.CarAwareness
     * @stagemodelonly
     * @since 26.1.0
     */
    REALTIME_WEATHER = 'RealTimeWeather',
    /**
     * refueling specific capability
     *
     * @syscap SystemCapability.MultimodalAwareness.CarAwareness
     * @stagemodelonly
     * @since 26.1.0
     */
    REFUELING = 'Refueling',
    /**
     * car status specific capability
     *
     * @syscap SystemCapability.MultimodalAwareness.CarAwareness
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0
     */
    CAR_STATUS = 'CarStatus',
    /**
     * car config specific capability
     *
     * @syscap SystemCapability.MultimodalAwareness.CarAwareness
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0
     */
    CAR_CFG = 'CarCfg',
    /**
     * habit recommendation specific capability
     *
     * @syscap SystemCapability.MultimodalAwareness.CarAwareness
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0
     */
    HABIT_RECOMMENDATION = 'HabitRecommendation'
  }

  /**
   * Interface for spatial motion response info.
   *
   * @syscap SystemCapability.MultimodalAwareness.CarAwareness
   * @stagemodelonly
   * @since 26.1.0
   */
  export interface SpatialMotionInfo {
    /**
     * Indicates timestamp .
     * Unit: milliseconds.
     *
     * @syscap SystemCapability.MultimodalAwareness.CarAwareness
     * @stagemodelonly
     * @since 26.1.0
     */
    timestamp: number;

    /**
     * Indicates X-coordinate of the hand on the screen.
     *
     * @syscap SystemCapability.MultimodalAwareness.CarAwareness
     * @stagemodelonly
     * @since 26.1.0
     */
    pointX: number;

    /**
     * Indicates Y-coordinate of the hand on the screen.
     *
     * @syscap SystemCapability.MultimodalAwareness.CarAwareness
     * @stagemodelonly
     * @since 26.1.0
     */
    pointY: number;

    /**
     * Indicates hand movements on the screen.
     *
     * @syscap SystemCapability.MultimodalAwareness.CarAwareness
     * @stagemodelonly
     * @since 26.1.0
     */
    event: number;
  }

  /**
   * Enables spatial motion awareness and subscribes to spatial motion awareness results.
   * If the capability is not supported, no callback will be triggered.
   * You can obtain the supported capabilities by calling the getAllCapacityList method.
   *
   * @permission ohos.permission.vehicle.MMA_SPATIALACTION
   * @param { Callback<SpatialMotionInfo> } callback - Callback for obtaining the capability data.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 34000001 - Service exception.
   * @throws { BusinessError } 34000002 - Specific capability not supported.
   * @syscap SystemCapability.MultimodalAwareness.CarAwareness
   * @stagemodelonly
   * @since 26.1.0
   */
  function onSpatialMotion(callback: Callback<SpatialMotionInfo>): void;

  /**
   * Disables spatial motion awareness and subscribes to spatial motion awareness results.
   *
   * @permission ohos.permission.vehicle.MMA_SPATIALACTION
   * @param { Callback<SpatialMotionInfo> } [callback] - Callback for obtaining the capability data.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 34000001 - Service exception.
   * @syscap SystemCapability.MultimodalAwareness.CarAwareness
   * @stagemodelonly
   * @since 26.1.0
   */
  function offSpatialMotion(callback?: Callback<SpatialMotionInfo>): void;

  /**
   * Interface for realtime weather response info.
   *
   * @syscap SystemCapability.MultimodalAwareness.CarAwareness
   * @stagemodelonly
   * @since 26.1.0
   */
  export interface RealTimeWeatherInfo {
    /**
     * Indicates timestamp .
     * Unit: milliseconds.
     *
     * @syscap SystemCapability.MultimodalAwareness.CarAwareness
     * @stagemodelonly
     * @since 26.1.0
     */
    timestamp: number;

    /**
     * Indicates current weather.
     *
     * @syscap SystemCapability.MultimodalAwareness.CarAwareness
     * @stagemodelonly
     * @since 26.1.0
     */
    weather: number;
  }

  /**
   * Enables real-time weather awareness and subscribes to real-time weather awareness results.
   * If the capability is not supported, no callback will be triggered.
   * You can obtain the supported capabilities by calling the getAllCapacityList method.
   *
   * @permission ohos.permission.vehicle.MMA_WEATHER
   * @param { Callback<RealTimeWeatherInfo> } callback - Callback for obtaining the capability data.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 34000001 - Service exception.
   * @throws { BusinessError } 34000002 - Specific capability not supported.
   * @syscap SystemCapability.MultimodalAwareness.CarAwareness
   * @stagemodelonly
   * @since 26.1.0
   */
  function onRealTimeWeather(callback: Callback<RealTimeWeatherInfo>): void;

  /**
   * Disables the real-time weather awareness function.
   *
   * @permission ohos.permission.vehicle.MMA_WEATHER
   * @param { Callback<RealTimeWeatherInfo> } [callback] - Callback for obtaining the capability data.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 34000001 - Service exception.
   * @syscap SystemCapability.MultimodalAwareness.CarAwareness
   * @stagemodelonly
   * @since 26.1.0
   */
  function offRealTimeWeather(callback?: Callback<RealTimeWeatherInfo>): void;

  /**
   * Interface for refueling response info.
   *
   * @syscap SystemCapability.MultimodalAwareness.CarAwareness
   * @stagemodelonly
   * @atomicservice
   * @since 26.1.0
   */
  export interface RefuelingInfo {
    /**
     * Indicates timestamp .
     * Unit: milliseconds.
     *
     * @syscap SystemCapability.MultimodalAwareness.CarAwareness
     * @stagemodelonly
     * @atomicservice
     * @since 26.1.0
     */
    timestamp: number;

    /**
     * Indicates refueling status.
     *
     * @syscap SystemCapability.MultimodalAwareness.CarAwareness
     * @stagemodelonly
     * @atomicservice
     * @since 26.1.0
     */
    status: number;
  }

  /**
   * Enables refueling awareness and subscribes to refueling awareness results.
   * If this function is not supported, no callback will be triggered.
   * You can obtain the supported capabilities by calling the getAllCapacityList method.
   *
   * @permission ohos.permission.vehicle.MMA_ENERGYREFILL
   * @param { Callback<RefuelingInfo> } callback - Callback for obtaining the capability data.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 34000001 - Service exception.
   * @throws { BusinessError } 34000002 - Specific capability not supported.
   * @syscap SystemCapability.MultimodalAwareness.CarAwareness
   * @stagemodelonly
   * @atomicservice
   * @since 26.1.0
   */
  function onRefueling(callback: Callback<RefuelingInfo>): void;

  /**
   * Disables refueling awareness.
   *
   * @permission ohos.permission.vehicle.MMA_ENERGYREFILL
   * @param { Callback<RefuelingInfo> } [callback] - Callback for obtaining the capability data.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 34000001 - Service exception.
   * @syscap SystemCapability.MultimodalAwareness.CarAwareness
   * @stagemodelonly
   * @atomicservice
   * @since 26.1.0
   */
  function offRefueling(callback?: Callback<RefuelingInfo>): void;

  /**
   * Interface for car awareness response info.
   *
   * @syscap SystemCapability.MultimodalAwareness.CarAwareness
   * @systemapi
   * @stagemodelonly
   * @since 26.1.0
   */
  export interface CarAwarenessInfo {
    /**
     * Indicates timestamp .
     * Unit: milliseconds.
     *
     * @syscap SystemCapability.MultimodalAwareness.CarAwareness
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0
     */
    timestamp: number;
    /**
     * Indicates specific capability.
     *
     * @syscap SystemCapability.MultimodalAwareness.CarAwareness
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0
     */
    capability: Capability;
    /**
     * Interface for car awareness data items list information.
     *
     * @syscap SystemCapability.MultimodalAwareness.CarAwareness
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0
     */
    awarenessEvent?:Record<string, Object>;
  }

  /**
   * Interface for car awareness information
   *
   * @syscap SystemCapability.MultimodalAwareness.CarAwareness
   * @systemapi
   * @stagemodelonly
   * @since 26.1.0
   */
  export interface CarAwarenessOptions {
    /**
     * Awareness parameters in custom key-value pairs format.
     *
     * @syscap SystemCapability.MultimodalAwareness.CarAwareness
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0
     */
    parameters?: Record<string, Object>;
  }

  /**
   * Enables vehicle awareness and subscribes to vehicle awareness results.
   * If this function is not supported, no callback will be triggered.
   * You can use the getAllCapacityList method to obtain the supported capabilities.
   *
   * @param { Capability } capability - Specific capability.
   * @param { Callback<CarAwarenessInfo[]> } callback - Callback used to return obtaining corresponding capability
   *     data.
   * @param { CarAwarenessOptions } [options] - Indicates options to specific capability.
   * @throws { BusinessError } 202 - Permission check failed. A non-system application uses the system capability.
   * @throws { BusinessError } 34000001 - Service exception.
   * @throws { BusinessError } 34000002 - Specific capability not supported.
   * @syscap SystemCapability.MultimodalAwareness.CarAwareness
   * @systemapi
   * @stagemodelonly
   * @since 26.1.0
   */
  function onCarAwareness(capability: Capability, callback: Callback<CarAwarenessInfo[]>, options?:
  CarAwarenessOptions): void;

  /**
   * Unsubscribes from vehicle sensing results.
   *
   * @param { Capability } capability - Specific capability.
   * @param { Callback<CarAwarenessInfo[]> } [callback] - Callback used to return the corresponding capability data.
   * @param { CarAwarenessOptions } [options] - Indicates options to specific capability.
   * @throws { BusinessError } 202 - Permission check failed. A non-system application uses the system capability.
   * @throws { BusinessError } 34000001 - Service exception.
   * @syscap SystemCapability.MultimodalAwareness.CarAwareness
   * @systemapi
   * @stagemodelonly
   * @since 26.1.0
   */
  function offCarAwareness(capability: Capability, callback?: Callback<CarAwarenessInfo[]>, options?:
  CarAwarenessOptions): void;

  /**
   * Returns the list of all capabilities.
   *
   * @returns { Promise<Capability[]> } Promise used to return the list of all capabilities.
   * @throws { BusinessError } 801 - Car awareness not supported. Function can not work correctly due to limited
   *     device capabilities.
   * @throws { BusinessError } 34000001 - Service exception.
   * @syscap SystemCapability.MultimodalAwareness.CarAwareness
   * @stagemodelonly
   * @since 26.1.0
   */
  function getAllCapabilityList(): Promise<Capability[]>;

  /**
   * Updates the awareness enabling event when the app subscribes to the function.
   *
   * @permission ohos.permission.vehicle.MMA_SPATIALACTION
   * @param { number } event - Awareness enabling event. 0: end; 1: start.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission check failed. A non-system application uses the system capability.
   * @throws { BusinessError } 801 - Car awareness not supported. Function can not work correctly due to limited device
   *     capabilities.
   * @throws { BusinessError } 34000001 - Service exception.
   * @throws { BusinessError } 34000002 - Specific capability not supported.
   * @syscap SystemCapability.MultimodalAwareness.CarAwareness
   * @systemapi
   * @stagemodelonly
   * @since 26.1.0
   */
  function updateSpatialActionEnableStatus(event: number): void;

  /**
   * Updates the voice zone when the voice subscribes to the spatial point engine capability.
   *
   * @permission ohos.permission.vehicle.MMA_SPATIALACTION
   * @param { number } zone - Voice zone. The value 3 indicates the left back, and the value 4 indicates the right back.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission check failed. A non-system application uses the system capability.
   * @throws { BusinessError } 801 - Car awareness not supported. Function can not work correctly due to limited device
   *     capabilities.
   * @throws { BusinessError } 34000001 - Service exception.
   * @throws { BusinessError } 34000002 - Specific capability not supported.
   * @syscap SystemCapability.MultimodalAwareness.CarAwareness
   * @systemapi
   * @stagemodelonly
   * @since 26.1.0
   */
  function updateSpatialActionZone(zone: number): void;

  /**
   *    /**
   * Disables vehicle awareness and subscribes to vehicle awareness results.
   *
   * @param { Capability } capability - Specific capability.
   * @param { CarAwarenessOptions } [options] - Options for a specific function.
   * @returns { Promise<CarAwarenessInfo[]> } Promise used to return the capability data.
   * @throws { BusinessError } 202 - Permission check failed. A non-system application uses the system capability.
   * @throws { BusinessError } 801 - Car awareness not supported. Function can not work correctly due to limited device
   *     capabilities.
   * @throws { BusinessError } 34000001 - Service exception.
   * @throws { BusinessError } 34000002 - Specific capability not supported.
   * @syscap SystemCapability.MultimodalAwareness.CarAwareness
   * @systemapi
   * @stagemodelonly
   * @since 26.1.0
   */
  function getCarAwareness(capability: Capability, options?: CarAwarenessOptions): Promise<CarAwarenessInfo[]>;
}

export default carAwareness;