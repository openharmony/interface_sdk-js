/*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
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
 * @kit SensorServiceKit
 */

import { AsyncCallback, Callback } from './@ohos.base';

/**
 * This module provides the capability to subscribe to sensor data.
 * @namespace sensor
 * @syscap SystemCapability.Sensors.Sensor
 * @atomicservice
 * @since 20
 */
declare namespace sensor {
  /**
   * Subscribe to orientation sensor data.
   * @param { SensorId.ORIENTATION } type - Indicate the sensor type to listen for, {@code SensorId.ORIENTATION}.
   * @param { Callback<OrientationResponse> } callback - callback orientation data.
   * @param { Options } [options] - Optional parameters specifying the interval at which sensor data is reported, {@code Options}.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @atomicservice
   * @since 20
   */
  function on(type: 'ORIENTATION', callback: Callback<OrientationResponse>,
    options?: Options): void;

  /**
   * Unsubscribe to orientation sensor data.
   * @param { SensorId.ORIENTATION } type - Indicate the sensor type to listen for, {@code SensorId.ORIENTATION}.
   * @param { Callback<OrientationResponse> } callback - callback orientation data.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Sensors.Sensor
   * @atomicservice
   * @since 20
   */
  function off(type: 'ORIENTATION', callback?: Callback<OrientationResponse>): void;

  /**
   * Subscribe to the sensor's optional parameters.
   * @typedef Options
   * @syscap SystemCapability.Sensors.Sensor
   * @atomicservice
   * @since 20
   */
  interface Options {
    /**
     * Sensor event reporting event interval.
     * @type { ?(number | SensorFrequency) }
     * @syscap SystemCapability.Sensors.Sensor
     * @atomicservice
     * @since 20
     */
    interval?: number | SensorFrequency;
  }

  /**
   * The sensor reporting frequency is divided into three modes.
   * @typedef {'game' | 'ui' | 'normal'}
   * @syscap SystemCapability.Sensors.Sensor
   * @atomicservice
   * @since 20
   */
  type SensorFrequency = 'game' | 'ui' | 'normal';

  /**
   * Enumerates the accuracy levels of data reported by a sensor.
   * @enum { number }
   * @syscap SystemCapability.Sensors.Sensor
   * @atomicservice
   * @since 20
   */
  enum SensorAccuracy {
    /**
     * The sensor data is unreliable. It is possible that the sensor does not contact with the device to measure.
     * @syscap SystemCapability.Sensors.Sensor
     * @atomicservice
     * @since 20
     */
    ACCURACY_UNRELIABLE = 0,

    /**
     * The sensor data is at a low accuracy level. The data must be calibrated based on the environment before being used.
     * @syscap SystemCapability.Sensors.Sensor
     * @atomicservice
     * @since 20
     */
    ACCURACY_LOW = 1,

    /**
     * The sensor data is at a medium accuracy level. You are advised to calibrate the data based on the environment
     * <br> before using it.
     * @syscap SystemCapability.Sensors.Sensor
     * @atomicservice
     * @since 20
     */
    ACCURACY_MEDIUM = 2,

    /**
     * The sensor data is at a high accuracy level. The data can be used directly.
     * @syscap SystemCapability.Sensors.Sensor
     * @atomicservice
     * @since 20
     */
    ACCURACY_HIGH = 3
  }

  /**
   * The basic data structure of the sensor event.
   * @typedef Response
   * @syscap SystemCapability.Sensors.Sensor
   * @atomicservice
   * @since 20
   */
  interface Response {
    /**
     * The timestamp of the reported sensor data.
     * @type { number }
     * @syscap SystemCapability.Sensors.Sensor
     * @atomicservice
     * @since 20
     */
    timestamp: number;

    /**
     * The accuracy levels of data reported by a sensor.
     * @type { SensorAccuracy }
     * @syscap SystemCapability.Sensors.Sensor
     * @atomicservice
     * @since 20
     */
    accuracy: SensorAccuracy;
  }

  /**
   * Orientation sensor event data.
   * @typedef OrientationResponse
   * @syscap SystemCapability.Sensors.Sensor
   * @atomicservice
   * @since 20
   */
  interface OrientationResponse extends Response {
    /**
     * The device rotates at an angle around the Z axis.
     * @type { number }
     * @syscap SystemCapability.Sensors.Sensor
     * @atomicservice
     * @since 20
     */
    alpha: number;

    /**
     * The device rotates at an angle around the X axis.
     * @type { number }
     * @syscap SystemCapability.Sensors.Sensor
     * @atomicservice
     * @since 20
     */
    beta: number;

    /**
     * The device rotates at an angle around the Y axis.
     * @type { number }
     * @syscap SystemCapability.Sensors.Sensor
     * @atomicservice
     * @since 20
     */
    gamma: number;
  }
}

export default sensor;