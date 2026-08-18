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
 * 此模块提供使用汽车感知的功能
 *
 * @syscap SystemCapability.MultimodalAwareness.CarAwareness
 * @stagemodelonly
 * @atomicservice
 * @since 26.1.0
 */
declare namespace carAwareness {
  /**
   * 车辆感知功能。
   *
   * @syscap SystemCapability.MultimodalAwareness.CarAwareness
   * @stagemodelonly
   * @since 26.1.0
   */
  enum Capability {
    /**
     * 隔空手势能力
     *
     * @syscap SystemCapability.MultimodalAwareness.CarAwareness
     * @stagemodelonly
     * @since 26.1.0
     */
    SPATIAL_MOTION = 'SpatialMotion',
    /**
     * 指向识别能力
     *
     * @syscap SystemCapability.MultimodalAwareness.CarAwareness
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0
     */
    SPATIAL_POINT = 'SpatialPoint',
    /**
     * 姿体动作能力
     *
     * @syscap SystemCapability.MultimodalAwareness.CarAwareness
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0
     */
    SPATIAL_GESTURE = 'SpatialGesture',
    /**
     * 实时天气能力
     *
     * @syscap SystemCapability.MultimodalAwareness.CarAwareness
     * @stagemodelonly
     * @since 26.1.0
     */
    REALTIME_WEATHER = 'RealTimeWeather',
    /**
     * 加油识别能力
     *
     * @syscap SystemCapability.MultimodalAwareness.CarAwareness
     * @stagemodelonly
     * @since 26.1.0
     */
    REFUELING = 'Refueling',
    /**
     * 车辆状态采集能力
     *
     * @syscap SystemCapability.MultimodalAwareness.CarAwareness
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0
     */
    CAR_STATUS = 'CarStatus',
    /**
     * 车辆配置采集能力
     *
     * @syscap SystemCapability.MultimodalAwareness.CarAwareness
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0
     */
    CAR_CFG = 'CarCfg',
    /**
     * 习惯推荐能力
     *
     * @syscap SystemCapability.MultimodalAwareness.CarAwareness
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0
     */
    HABIT_RECOMMENDATION = 'HabitRecommendation'
  }

  /**
   * 空间运动响应信息的接口。
   *
   * @syscap SystemCapability.MultimodalAwareness.CarAwareness
   * @stagemodelonly
   * @since 26.1.0
   */
  export interface SpatialMotionInfo {
    /**
     * 时间戳。
     * 单位为：毫秒。
     *
     * @syscap SystemCapability.MultimodalAwareness.CarAwareness
     * @stagemodelonly
     * @since 26.1.0
     */
    timestamp: number;

    /**
     * 指示手在屏幕上的X坐标。
     *
     * @syscap SystemCapability.MultimodalAwareness.CarAwareness
     * @stagemodelonly
     * @since 26.1.0
     */
    pointX: number;

    /**
     * 指示手在屏幕上的Y坐标。
     *
     * @syscap SystemCapability.MultimodalAwareness.CarAwareness
     * @stagemodelonly
     * @since 26.1.0
     */
    pointY: number;

    /**
     * 指示屏幕上的手移动。
     * 取值限定为整数。
     *
     * @syscap SystemCapability.MultimodalAwareness.CarAwareness
     * @stagemodelonly
     * @since 26.1.0
     */
    event: number;
  }

  /**
   * 开启空间动作感知，订阅空间动作感知结果。如果能力不支持，则不会回调。支持的能力可以通过getAllCapacityList方法获取。
   *
   * @permission ohos.permission.vehicle.MMA_SPATIALACTION
   * @param { Callback<SpatialMotionInfo> } callback - 获取对应能力数据的回调。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 34000001 - Service exception.
   * @throws { BusinessError } 34000002 - Specific capability not supported.
   * @syscap SystemCapability.MultimodalAwareness.CarAwareness
   * @stagemodelonly
   * @since 26.1.0
   */
  function onSpatialMotion(callback: Callback<SpatialMotionInfo>): void;

  /**
   * 关闭空间动作感知，订阅空间动作感知结果。
   *
   * @permission ohos.permission.vehicle.MMA_SPATIALACTION
   * @param { Callback<SpatialMotionInfo> } [callback] - 获取对应能力数据的回调。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 34000001 - Service exception.
   * @syscap SystemCapability.MultimodalAwareness.CarAwareness
   * @stagemodelonly
   * @since 26.1.0
   */
  function offSpatialMotion(callback?: Callback<SpatialMotionInfo>): void;

  /**
   * 实时天气响应信息接口。
   *
   * @syscap SystemCapability.MultimodalAwareness.CarAwareness
   * @stagemodelonly
   * @since 26.1.0
   */
  export interface RealTimeWeatherInfo {
    /**
     * 时间戳。
     * 单位为：毫秒。
     *
     * @syscap SystemCapability.MultimodalAwareness.CarAwareness
     * @stagemodelonly
     * @since 26.1.0
     */
    timestamp: number;

    /**
     * 指示当前天气。
     * 单位为：毫秒。取值限定为整数。
     *
     * @syscap SystemCapability.MultimodalAwareness.CarAwareness
     * @stagemodelonly
     * @since 26.1.0
     */
    weather: number;
  }

  /**
   * 开启实时天气感知，订阅实时天气感知结果。如果能力不支持，则不会回调。支持的能力可以通过getAllCapacityList方法获取。
   *
   * @permission ohos.permission.vehicle.MMA_WEATHER
   * @param { Callback<RealTimeWeatherInfo> } callback - 获取对应能力数据的回调。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 34000001 - Service exception.
   * @throws { BusinessError } 34000002 - Specific capability not supported.
   * @syscap SystemCapability.MultimodalAwareness.CarAwareness
   * @stagemodelonly
   * @since 26.1.0
   */
  function onRealTimeWeather(callback: Callback<RealTimeWeatherInfo>): void;

  /**
   * 关闭实时天气感知功能。
   *
   * @permission ohos.permission.vehicle.MMA_WEATHER
   * @param { Callback<RealTimeWeatherInfo> } [callback] - 获取对应能力数据的回调。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 34000001 - Service exception.
   * @syscap SystemCapability.MultimodalAwareness.CarAwareness
   * @stagemodelonly
   * @since 26.1.0
   */
  function offRealTimeWeather(callback?: Callback<RealTimeWeatherInfo>): void;

  /**
   * 加油响应信息接口。
   *
   * @syscap SystemCapability.MultimodalAwareness.CarAwareness
   * @stagemodelonly
   * @atomicservice
   * @since 26.1.0
   */
  export interface RefuelingInfo {
    /**
     * 时间戳。
     * 单位为：毫秒。
     *
     * @syscap SystemCapability.MultimodalAwareness.CarAwareness
     * @stagemodelonly
     * @atomicservice
     * @since 26.1.0
     */
    timestamp: number;

    /**
     * 指示加油状态。
     *
     * @syscap SystemCapability.MultimodalAwareness.CarAwareness
     * @stagemodelonly
     * @atomicservice
     * @since 26.1.0
     */
    status: number;
  }

  /**
   * 开启加油感知，订阅加油感知结果。如果不支持该功能，将不回调。支持的能力可以通过getAllCapacityList方法获取。
   *
   * @permission ohos.permission.vehicle.MMA_ENERGYREFILL
   * @param { Callback<RefuelingInfo> } callback - 获取对应能力数据的回调。
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
   * 禁用加油感知。
   *
   * @permission ohos.permission.vehicle.MMA_ENERGYREFILL
   * @param { Callback<RefuelingInfo> } [callback] - 获取对应能力数据的回调。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 34000001 - Service exception.
   * @syscap SystemCapability.MultimodalAwareness.CarAwareness
   * @stagemodelonly
   * @atomicservice
   * @since 26.1.0
   */
  function offRefueling(callback?: Callback<RefuelingInfo>): void;

  /**
   * 汽车感知响应信息接口。
   *
   * @syscap SystemCapability.MultimodalAwareness.CarAwareness
   * @systemapi
   * @stagemodelonly
   * @since 26.1.0
   */
  export interface CarAwarenessInfo {
    /**
     * 时间戳。
     * 单位为：毫秒。
     *
     * @syscap SystemCapability.MultimodalAwareness.CarAwareness
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0
     */
    timestamp: number;
    /**
     * 表示特定能力。
     *
     * @syscap SystemCapability.MultimodalAwareness.CarAwareness
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0
     */
    capability: Capability;
    /**
     * 汽车感知数据项列表信息接口。
     *
     * @syscap SystemCapability.MultimodalAwareness.CarAwareness
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0
     */
    awarenessEvent?:Record<string, Object>;
  }

  /**
   * 汽车感知信息接口
   *
   * @syscap SystemCapability.MultimodalAwareness.CarAwareness
   * @systemapi
   * @stagemodelonly
   * @since 26.1.0
   */
  export interface CarAwarenessOptions {
    /**
     * 自定义键值对格式的感知参数。
     *
     * @syscap SystemCapability.MultimodalAwareness.CarAwareness
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0
     */
    parameters?: Record<string, Object>;
  }

  /**
   * 开启汽车感知，订阅汽车感知结果。如果不支持该功能，则不会回调，支持的能力可以通过getAllCapacityList方法获取。
   *
   * @param { Capability } capability - 表示特定能力。
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
   * 取消订阅汽车感知结果。
   *
   * @param { Capability } capability - 表示特定能力。
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
   * 返回所有能力列表
   *
   * @returns { Promise<Capability[]> } Promise用于返回所有的能力列表。
   * @throws { BusinessError } 801 - Car awareness not supported. Function can not work correctly due to limited
   *     device capabilities.
   * @throws { BusinessError } 34000001 - Service exception.
   * @syscap SystemCapability.MultimodalAwareness.CarAwareness
   * @stagemodelonly
   * @since 26.1.0
   */
  function getAllCapabilityList(): Promise<Capability[]>;

  /**
   * 更新感知启用事件，当应用订阅功能时
   *
   * @permission ohos.permission.vehicle.MMA_SPATIALACTION
   * @param { number } event - 感知事件。0：结束，1：开始。
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
   * 语音更新声音区域，当语音订阅空间点引擎能力时
   *
   * @permission ohos.permission.vehicle.MMA_SPATIALACTION
   * @param { number } zone - 音区。3表示后排左边，4表示后边右边。
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
   * 关闭汽车感知，订阅汽车感知结果。
   *
   * @param { Capability } capability - 表示特定能力。
   * @param { CarAwarenessOptions } [options] - 指示特定功能的选项。
   * @returns { Promise<CarAwarenessInfo[]> } Promise用于返回对应的能力数据。
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