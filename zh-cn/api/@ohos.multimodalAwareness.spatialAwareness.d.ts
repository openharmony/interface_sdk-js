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
 * @file 空间感知
 * @kit MultimodalAwarenessKit
 */

import type { Callback } from './@ohos.base';

/**
 * 本模块提供对测距的感知能力，支持超声信号测试。
 * @namespace spatialAwareness
 * @syscap SystemCapability.MultimodalAwareness.DistanceMeasurement
 * @systemapi
 * @stagemodelonly
 * @since 23 dynamic&static
 */
declare namespace spatialAwareness {

  /**
   * 提供输入信号的类型。接口根据输入信号类型，执行对应算法。
   *
   * @enum { int } 测距技术类型
   * @syscap SystemCapability.MultimodalAwareness.DistanceMeasurement
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  export enum TechnologyType {
    /**
     * 表示蓝牙强度。
     *
     * @syscap SystemCapability.MultimodalAwareness.DistanceMeasurement
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    BLE_RSSI = 0,
    /**
     * 表示WIFI强度。
     *
     * @syscap SystemCapability.MultimodalAwareness.DistanceMeasurement
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    WIFI_RSSI = 1,
    /**
     * 表示超声强度。
     *
     * @syscap SystemCapability.MultimodalAwareness.DistanceMeasurement
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    ULTRASOUND = 2,
    /**
     * 表示星闪强度。
     *
     * @syscap SystemCapability.MultimodalAwareness.DistanceMeasurement
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    NEAR_LINK = 3,
    /**
     * 表示WIFI和蓝牙强度。
     *
     * @syscap SystemCapability.MultimodalAwareness.DistanceMeasurement
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    WIFI_BLE_RSSI = 4
  }

  /**
   * 测距接口执行完成后结果的上报模式。
   * 
   * @enum { int } 测距结果上报方式
   * @syscap SystemCapability.MultimodalAwareness.DistanceMeasurement
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  export enum ReportingMode {  
    /**
     * 表示周期性上报。
     *
     * @syscap SystemCapability.MultimodalAwareness.DistanceMeasurement
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    REPORT_MODE_PERIODIC_REPORTING = 0,
    /**
     * 表示触发式上报。
     *
     * @syscap SystemCapability.MultimodalAwareness.DistanceMeasurement
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    REPORT_MODE_TRIGGERED_REPORTING = 1
  }

  /**
   * 测距结果的距离挡位，不同的挡位对应不同的距离范围。
   *
   * @enum { string } 表示测距距离类型
   * @syscap SystemCapability.MultimodalAwareness.DistanceMeasurement
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  export enum DistanceRank {
    /**
     * 表示超短距。单位：cm，范围：[0:5]。
     *
     * @syscap SystemCapability.MultimodalAwareness.DistanceMeasurement
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    RANK_ULTRA_SHORT_RANGE = 'rankUltraShort',
    /**
     * 表示短距。单位：cm，范围：(5:100]。
     *
     * @syscap SystemCapability.MultimodalAwareness.DistanceMeasurement
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    RANK_SHORT_RANGE = 'rankShort',
    /**
     * 表示中短距。单位：cm，范围：(100:500]。
     *
     * @syscap SystemCapability.MultimodalAwareness.DistanceMeasurement
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    RANK_SHORT_MEDIUM_RANGE = 'rankMediumShort',
    /**
     * 表示中距。单位：cm，范围：(500:1000]。
     *
     * @syscap SystemCapability.MultimodalAwareness.DistanceMeasurement
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    RANK_MEDIUM_RANGE = 'rankMedium'
  }

  /**
   * 测距接口执行完成后的回调结果。
   * @interface DistanceMeasurementResponse
   * @syscap SystemCapability.MultimodalAwareness.DistanceMeasurement
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  export interface DistanceMeasurementResponse {
    /**
     * 表示距离档位。
     * @type { DistanceRank }
     * @syscap SystemCapability.MultimodalAwareness.DistanceMeasurement
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    rank: DistanceRank;
    /**
     * 表示距离，结果≥0。
     * @type { float }
     * @syscap SystemCapability.MultimodalAwareness.DistanceMeasurement
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    distance: float;
    /**
     * 表示置信度，取值范围：[0,1]。
     * @type { float }
     * @syscap SystemCapability.MultimodalAwareness.DistanceMeasurement
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    confidence: float;
    /**
     * 表示设备Id号，字符串长度：[1,128]。
     * @type { string }
     * @syscap SystemCapability.MultimodalAwareness.DistanceMeasurement
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    deviceId: string;
  }

  /**
   * 门内外识别接口返回结果中表示门内或门外位置的枚举。
   *
   * @enum { int } 门内外识别结果的枚举
   * @syscap SystemCapability.MultimodalAwareness.DistanceMeasurement
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  export enum PositionRelativeToDoor {
    /**
     * 表示门外。
     *
     * @syscap SystemCapability.MultimodalAwareness.DistanceMeasurement
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    OUTDOOR = 0,
    /**
     * 表示门内。
     *
     * @syscap SystemCapability.MultimodalAwareness.DistanceMeasurement
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    INDOOR = 1
  }

  /**
   * 门内外识别接口执行完成后的回调结果。
   * @interface DoorPositionResponse
   * @syscap SystemCapability.MultimodalAwareness.DistanceMeasurement
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  export interface DoorPositionResponse {
    /**
     * 表示门锁校验码，结果≥0。
     * @type { int }
     * @syscap SystemCapability.MultimodalAwareness.DistanceMeasurement
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    doorLockCode: int;
    /**
     * 表示门内外位置信息。
     * @type { PositionRelativeToDoor }
     * @syscap SystemCapability.MultimodalAwareness.DistanceMeasurement
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    position: PositionRelativeToDoor;
    /**
     * 表示设备Id号，字符串长度：[1,128]。
     * @type { string }
     * @syscap SystemCapability.MultimodalAwareness.DistanceMeasurement
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    deviceId: string;
  }

  /**
   * 测距接口的输入参数配置。根据不同的参数配置，执行对应的算法。
   * @interface DistanceMeasurementConfigParams
   * @syscap SystemCapability.MultimodalAwareness.DistanceMeasurement
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  export interface DistanceMeasurementConfigParams {  
    /**
     * 表示设备列表，设备唯一标识符，字符串长度取值范围：[1,128]，数组长度取值范围：[1,128]。
     * @type { string[] }
     * @syscap SystemCapability.MultimodalAwareness.DistanceMeasurement
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    deviceList: string[];
    /**
     * 表示信号类型。
     * @type { TechnologyType }
     * @syscap SystemCapability.MultimodalAwareness.DistanceMeasurement
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    techType: TechnologyType;
    /**
     * 表示结果上报模式。
     * @type { ReportingMode }
     * @syscap SystemCapability.MultimodalAwareness.DistanceMeasurement
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    reportMode: ReportingMode;
    /**
     * 表示结果上报频率，单位：Hz，取值范围：[0,999999]。
     * @type { int }
     * @syscap SystemCapability.MultimodalAwareness.DistanceMeasurement
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    reportFrequency: int;
  }

  /**
   * 订阅测距接口。触发测距算法执行，并返回测距结果。
   *
   * @permission ohos.permission.ACCESS_SENSING_WITH_ULTRASOUND
   * @param { DistanceMeasurementConfigParams } configParams - 测距接口配置参数
   * @param { Callback<DistanceMeasurementResponse> } callback - 回调函数，返回测距结果。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 801 - Capability not supported. Function can not work correctly due to
   *     <br> limited device capabilities.
   * @throws { BusinessError } 35100001 - Service exception.
   * @throws { BusinessError } 35100002 - Subscription failed.
   * @throws { BusinessError } 35100004 - Parameter invalid.
   * @syscap SystemCapability.MultimodalAwareness.DistanceMeasurement
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  function onDistanceMeasure(configParams: DistanceMeasurementConfigParams,
    callback: Callback<DistanceMeasurementResponse>): void;

  /**
   * 取消订阅测距接口。停止运行已订阅的测距算法。
   *
   * @permission ohos.permission.ACCESS_SENSING_WITH_ULTRASOUND
   * @param { DistanceMeasurementConfigParams } configParams - 测距接口配置参数
   * @param { Callback<DistanceMeasurementResponse> } [callback] - 表示取消指定的callback通知。如果输入空、undefined或null，则取消
   *     configParams订阅的所有测距通知事件。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 801 - Capability not supported. Function can not work correctly due to
   *     <br> limited device capabilities.
   * @throws { BusinessError } 35100001 - Service exception.
   * @throws { BusinessError } 35100003 - Unsubscription failed.
   * @throws { BusinessError } 35100004 - Parameter invalid.
   * @syscap SystemCapability.MultimodalAwareness.DistanceMeasurement
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  function offDistanceMeasure(configParams: DistanceMeasurementConfigParams,
    callback?: Callback<DistanceMeasurementResponse>): void;

  /**
   * 订阅门内外识别接口。触发门内外识别算法执行，并返回设备在门内还是门外的信息。
   *
   * @permission ohos.permission.ACCESS_SENSING_WITH_ULTRASOUND
   * @param { DistanceMeasurementConfigParams } configParams - 测距接口配置参数
   * @param { Callback<DoorPositionResponse> } callback - 回调函数，返回门内外信息。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 801 - Capability not supported. Function can not work correctly due to
   *     <br> limited device capabilities.
   * @throws { BusinessError } 35100001 - Service exception.
   * @throws { BusinessError } 35100002 - Subscription failed.
   * @throws { BusinessError } 35100004 - Parameter invalid.
   * @syscap SystemCapability.MultimodalAwareness.DistanceMeasurement
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  function onIndoorOrOutdoorIdentify(configParams: DistanceMeasurementConfigParams,
    callback: Callback<DoorPositionResponse>): void;

  /**
   * 取消订阅门内外识别接口。停止运行已订阅的门内外识别算法。
   *
   * @permission ohos.permission.ACCESS_SENSING_WITH_ULTRASOUND
   * @param { DistanceMeasurementConfigParams } configParams - 测距接口配置参数
   * @param { Callback<DoorPositionResponse> } [callback] - 表示取消指定的callback通知。如果输入空、undefined或null，则取消configParams订阅的所有门
   *     内外识别通知事件。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 801 - Capability not supported. Function can not work correctly due to
   *     <br> limited device capabilities.
   * @throws { BusinessError } 35100001 - Service exception.
   * @throws { BusinessError } 35100003 - Unsubscription failed.
   * @throws { BusinessError } 35100004 - Parameter invalid.
   * @syscap SystemCapability.MultimodalAwareness.DistanceMeasurement
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  function offIndoorOrOutdoorIdentify(configParams: DistanceMeasurementConfigParams,
    callback?: Callback<DoorPositionResponse>): void;
}
export default spatialAwareness;