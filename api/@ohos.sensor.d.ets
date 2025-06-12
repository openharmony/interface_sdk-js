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
   * Enum for obtain the type of sensor.
   * @enum { number }
   * @syscap SystemCapability.Sensors.Sensor
   * @atomicservice
   * @since 20
   */
  enum SensorId {
    /**
     * Acceleration sensor.
     * @syscap SystemCapability.Sensors.Sensor
     * @atomicservice
     * @since 20
     */
    ACCELEROMETER = 1,

    /**
     * Gyroscope sensor.
     * @syscap SystemCapability.Sensors.Sensor
     * @atomicservice
     * @since 20
     */
    GYROSCOPE = 2,

    /**
     * Ambient light sensor.
     * @syscap SystemCapability.Sensors.Sensor
     * @since 20
     */
    AMBIENT_LIGHT = 5,

    /**
     * Magnetic field sensor.
     * @syscap SystemCapability.Sensors.Sensor
     * @since 20
     */
    MAGNETIC_FIELD = 6,

    /**
     * Barometric pressure sensor.
     * @syscap SystemCapability.Sensors.Sensor
     * @since 20
     */
    BAROMETER = 8,

    /**
     * Hall effect sensor.
     * @syscap SystemCapability.Sensors.Sensor
     * @since 20
     */
    HALL = 10,

    /**
     * Proximity sensor.
     * @syscap SystemCapability.Sensors.Sensor
     * @since 20
     */
    PROXIMITY = 12,

    /**
     * Humidity sensor.
     * @syscap SystemCapability.Sensors.Sensor
     * @since 20
     */
    HUMIDITY = 13,

    /**
     * Color sensor.
     * @syscap SystemCapability.Sensors.Sensor
     * @since 20
     */
    COLOR = 14,

    /**
     * Sar sensor.
     * @syscap SystemCapability.Sensors.Sensor
     * @since 20
     */
    SAR = 15,

    /**
     * Orientation sensor.
     * @syscap SystemCapability.Sensors.Sensor
     * @since 20
     */
    /**
     * Orientation sensor.
     * @syscap SystemCapability.Sensors.Sensor
     * @atomicservice
     * @since 20
     */
    ORIENTATION = 256,

    /**
     * Gravity sensor.
     * @syscap SystemCapability.Sensors.Sensor
     * @since 20
     */
    GRAVITY = 257,

    /**
     * Linear acceleration sensor.
     * @syscap SystemCapability.Sensors.Sensor
     * @since 20
     */
    LINEAR_ACCELEROMETER = 258,

    /**
     * Rotation vector sensor.
     * @syscap SystemCapability.Sensors.Sensor
     * @since 20
     */
    ROTATION_VECTOR = 259,

    /**
     * Ambient temperature sensor.
     * @syscap SystemCapability.Sensors.Sensor
     * @since 20
     */
    AMBIENT_TEMPERATURE = 260,

    /**
     * Uncalibrated magnetic field sensor.
     * @syscap SystemCapability.Sensors.Sensor
     * @since 20
     */
    MAGNETIC_FIELD_UNCALIBRATED = 261,

    /**
     * Uncalibrated gyroscope sensor.
     * @syscap SystemCapability.Sensors.Sensor
     * @since 20
     */
    GYROSCOPE_UNCALIBRATED = 263,

    /**
     * Significant motion sensor.
     * @syscap SystemCapability.Sensors.Sensor
     * @since 20
     */
    SIGNIFICANT_MOTION = 264,

    /**
     * Pedometer detection sensor.
     * @syscap SystemCapability.Sensors.Sensor
     * @since 20
     */
    PEDOMETER_DETECTION = 265,

    /**
     * Pedometer sensor.
     * @syscap SystemCapability.Sensors.Sensor
     * @since 20
     */
    PEDOMETER = 266,

    /**
     * Heart rate sensor.
     * @syscap SystemCapability.Sensors.Sensor
     * @since 20
     */
    HEART_RATE = 278,

    /**
     * Wear detection sensor.
     * @syscap SystemCapability.Sensors.Sensor
     * @since 20
     */
    WEAR_DETECTION = 280,

    /**
     * Uncalibrated acceleration sensor.
     * @syscap SystemCapability.Sensors.Sensor
     * @since 20
     */
    ACCELEROMETER_UNCALIBRATED = 281
  }

  /**
   * Subscribe to orientation sensor data.
   * @param { 'orientationChange' } type - Indicate the sensor type to listen for, {@code SensorId.ORIENTATION}.
   * @param { Callback<OrientationResponse> } callback - callback orientation data.
   * @param { Options } [options] - Optional parameters specifying the interval at which sensor data is reported, {@code Options}.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @atomicservice
   * @since 20
   */
  function on(type: 'orientationChange', callback: Callback<OrientationResponse>, options?: Options): void;
  
  /**
   * Subscribe to color sensor data.
   * @param { 'colorChange' } type - Indicate the sensor type to listen for, {@code SensorId.COLOR}.
   * @param { Callback<ColorResponse> } callback - callback color data.
   * @param { Options } [options] - Optional parameters specifying the interval at which sensor data is reported, {@code Options}.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception.
   * @throws { BusinessError } 202 - Permission check failed. A non-system application uses the system API.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 20
   */
  function on(type: 'colorChange', callback: Callback<ColorResponse>, options?: Options): void;

  /**
   * Subscribe to SAR sensor data.
   * @param { 'sarChange' } type - Indicate the sensor type to listen for, {@code SensorId.SAR}.
   * @param { Callback<SarResponse> } callback - callback sar data.
   * @param { Options } [options] - Optional parameters specifying the interval at which sensor data is reported, {@code Options}.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception.
   * @throws { BusinessError } 202 - Permission check failed. A non-system application uses the system API.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 20
   */
  function on(type: 'sarChange', callback: Callback<SarResponse>, options?: Options): void;

  /**
   * Subscribe to accelerometer sensor data.
   * @permission ohos.permission.ACCELEROMETER
   * @param { 'accelerometerChange' } type - Indicate the sensor type to listen for, {@code SensorId.ACCELEROMETER}.
   * @param { Callback<AccelerometerResponse> } callback - callback accelerometer data.
   * @param { Options } [options] - Optional parameters specifying the interval at which sensor data is reported, {@code Options}.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @atomicservice
   * @since 20
   */
  function on(type: 'accelerometerChange', callback: Callback<AccelerometerResponse>, options?: Options): void;

  /**
   * Subscribe to uncalibrated accelerometer sensor data.
   * @permission ohos.permission.ACCELEROMETER
   * @param { 'accelerometerUncalibratedChange' } type - Indicate the sensor type to listen for,{@code SensorId.ACCELEROMETER_UNCALIBRATED}.
   * @param { Callback<AccelerometerUncalibratedResponse> } callback - callback uncalibrated accelerometer data.
   * @param { Options } [options] - Optional parameters specifying the interval at which sensor data is reported, {@code Options}.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 20
   */
  function on(type: 'accelerometerUncalibratedChange', callback: Callback<AccelerometerUncalibratedResponse>, options?: Options): void;

  /**
   * Subscribe to ambient light sensor data.
   * @param { 'ambientLightChange' } type - Indicate the sensor type to listen for, {@code SensorId.AMBIENT_LIGHT}.
   * @param { Callback<LightResponse> } callback - callback ambient light data.
   * @param { Options } [options] - Optional parameters specifying the interval at which sensor data is reported, {@code Options}.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 20
   */
  function on(type: 'ambientLightChange', callback: Callback<LightResponse>, options?: Options): void;

  /**
   * Subscribe to ambient temperature sensor data.
   * @param { 'ambientTemperatureChange' } type - Indicate the sensor type to listen for, {@code SensorId.AMBIENT_TEMPERATURE}.
   * @param { Callback<AmbientTemperatureResponse> } callback - callback ambient temperature data.
   * @param { Options } [options] - Optional parameters specifying the interval at which sensor data is reported, {@code Options}.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 20
   */
  function on(type: 'ambientTemperatureChange', callback: Callback<AmbientTemperatureResponse>, options?: Options): void;

  /**
   * Subscribe to barometer sensor data.
   * @param { 'barometerChange' } type - Indicate the sensor type to listen for, {@code SensorId.BAROMETER}.
   * @param { Callback<BarometerResponse> } callback - callback barometer data.
   * @param { Options } [options] - Optional parameters specifying the interval at which sensor data is reported, {@code Options}.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 20
   */
  function on(type: 'barometerChange', callback: Callback<BarometerResponse>, options?: Options): void;

  /**
   * Subscribe to gravity sensor data.
   * @param { 'gravityChange' } type - Indicate the sensor type to listen for, {@code SensorId.GRAVITY}.
   * @param { Callback<GravityResponse> } callback - callback gravity data.
   * @param { Options } [options] - Optional parameters specifying the interval at which sensor data is reported, {@code Options}.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 20
   */
  function on(type: 'gravityChange', callback: Callback<GravityResponse>, options?: Options): void;

  /**
   * Subscribe to gyroscope sensor data.
   * @permission ohos.permission.GYROSCOPE
   * @param { 'gyroscopeChange' } type - Indicate the sensor type to listen for, {@code SensorId.GYROSCOPE}.
   * @param { Callback<GyroscopeResponse> } callback - callback gyroscope data.
   * @param { Options } [options] - Optional parameters specifying the interval at which sensor data is reported, {@code Options}.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @atomicservice
   * @since 20
   */
  function on(type: 'gyroscopeChange', callback: Callback<GyroscopeResponse>, options?: Options): void;

  /**
   * Subscribe to uncalibrated gyroscope sensor data.
   * @permission ohos.permission.GYROSCOPE
   * @param { 'gyroscopeUncalibratedChange' } type - Indicate the sensor type to listen for, {@code SensorId.GYROSCOPE_UNCALIBRATED}.
   * @param { Callback<GyroscopeUncalibratedResponse> } callback - callback uncalibrated gyroscope data.
   * @param { Options } [options] - Optional parameters specifying the interval at which sensor data is reported, {@code Options}.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 20
   */
  function on(type: 'gyroscopeUncalibratedChange', callback: Callback<GyroscopeUncalibratedResponse>, options?: Options): void;

  /**
   * Subscribe to hall sensor data.
   * @param { 'hallChange' } type - Indicate the sensor type to listen for, {@code SensorId.HALL}.
   * @param { Callback<HallResponse> } callback - callback hall data.
   * @param { Options } [options] - Optional parameters specifying the interval at which sensor data is reported, {@code Options}.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 20
   */
  function on(type: 'hallChange', callback: Callback<HallResponse>, options?: Options): void;

  /**
   * Subscribe to heart rate sensor data.
   * @permission ohos.permission.READ_HEALTH_DATA
   * @param { 'heartRateChange' } type - Indicate the sensor type to listen for, {@code SensorId.HEART_RATE}.
   * @param { Callback<HeartRateResponse> } callback - callback heart rate data.
   * @param { Options } [options] - Optional parameters specifying the interval at which sensor data is reported, {@code Options}.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 20
   */
  function on(type: 'heartRateChange', callback: Callback<HeartRateResponse>, options?: Options): void;

  /**
   * Subscribe to humidity sensor data.
   * @param { 'humidityChange' } type - Indicate the sensor type to listen for, {@code SensorId.HUMIDITY}.
   * @param { Callback<HumidityResponse> } callback - callback humidity data.
   * @param { Options } [options] - Optional parameters specifying the interval at which sensor data is reported, {@code Options}.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 20
   */
  function on(type: 'humidityChange', callback: Callback<HumidityResponse>, options?: Options): void;

  /**
   * Subscribe to linear acceleration sensor data.
   * @permission ohos.permission.ACCELEROMETER
   * @param { 'linearAccelerometerChange' } type - Indicate the sensor type to listen for, {@code SensorId.LINEAR_ACCELEROMETER}.
   * @param { Callback<LinearAccelerometerResponse> } callback - callback linear accelerometer data.
   * @param { Options } [options] - Optional parameters specifying the interval at which sensor data is reported, {@code Options}.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 20
   */
  function on(type: 'linearAccelerometerChange', callback: Callback<LinearAccelerometerResponse>, options?: Options): void;

  /**
   * Subscribe to magnetic field sensor data.
   * @param { 'magneticFieldChange' } type - Indicate the sensor type to listen for, {@code SensorId.MAGNETIC_FIELD}.
   * @param { Callback<MagneticFieldResponse> } callback - callback magnetic field data.
   * @param { Options } [options] - Optional parameters specifying the interval at which sensor data is reported, {@code Options}.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 20
   */
  function on(type: 'magneticFieldChange', callback: Callback<MagneticFieldResponse>, options?: Options): void;

  /**
   * Subscribe to uncalibrated magnetic field sensor data.
   * @param { 'magneticFieldUncalibratedChange' } type - Indicate the sensor type to listen for,
   *        {@code SensorId.MAGNETIC_FIELD_UNCALIBRATED}.
   * @param { Callback<MagneticFieldUncalibratedResponse> } callback - callback uncalibrated magnetic field data.
   * @param { Options } [options] - Optional parameters specifying the interval at which sensor data is reported, {@code Options}.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 20
   */
  function on(type: 'magneticFieldUncalibratedChange', callback: Callback<MagneticFieldUncalibratedResponse>, options?: Options): void;

  /**
   * Subscribe to pedometer sensor data.
   * @permission ohos.permission.ACTIVITY_MOTION
   * @param { 'pedometerChange' } type - Indicate the sensor type to listen for, {@code SensorId.PEDOMETER}.
   * @param { Callback<PedometerResponse> } callback - callback pedometer data.
   * @param { Options } [options] - Optional parameters specifying the interval at which sensor data is reported, {@code Options}.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 20
   */
  function on(type: 'pedometerChange', callback: Callback<PedometerResponse>, options?: Options): void;

  /**
   * Subscribe to pedometer detection sensor data.
   * @permission ohos.permission.ACTIVITY_MOTION
   * @param { 'pedometerDetectionChange' } type - Indicate the sensor type to listen for, {@code SensorId.PEDOMETER_DETECTION}.
   * @param { Callback<PedometerDetectionResponse> } callback - callback pedometer detection data.
   * @param { Options } [options] - Optional parameters specifying the interval at which sensor data is reported, {@code Options}.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 20
   */
  function on(type: 'pedometerDetectionChange', callback: Callback<PedometerDetectionResponse>, options?: Options): void;

  /**
   * Subscribe to proximity sensor data.
   * @param { 'proximityChange' } type - Indicate the sensor type to listen for, {@code SensorId.PROXIMITY}.
   * @param { Callback<ProximityResponse> } callback - callback proximity data.
   * @param { Options } [options] - Optional parameters specifying the interval at which sensor data is reported, {@code Options}.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 20
   */
  function on(type: 'proximityChange', callback: Callback<ProximityResponse>, options?: Options): void;

  /**
   * Subscribe to rotation vector sensor data.
   * @param { 'rotationVectorChange' } type - Indicate the sensor type to listen for, {@code SensorId.ROTATION_VECTOR}.
   * @param { Callback<RotationVectorResponse> } callback - callback rotation vector data.
   * @param { Options } [options] - Optional parameters specifying the interval at which sensor data is reported, {@code Options}.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 20
   */
  function on(type: 'rotationVectorChange', callback: Callback<RotationVectorResponse>, options?: Options): void;

  /**
   * Subscribe to significant motion sensor data.
   * @param { 'significantMotionChange' } type - Indicate the sensor type to listen for, {@code SensorId.SIGNIFICANT_MOTION}.
   * @param { Callback<SignificantMotionResponse> } callback - callback significant motion data.
   * @param { Options } [options] - Optional parameters specifying the interval at which sensor data is reported, {@code Options}.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 20
   */
  function on(type: 'significantMotionChange', callback: Callback<SignificantMotionResponse>, options?: Options): void;

  /**
   * Subscribe to wear detection sensor data.
   * @param { 'wearDetectionChange' } type - Indicate the sensor type to listen for, {@code SensorId.WEAR_DETECTION}.
   * @param { Callback<WearDetectionResponse> } callback - callback wear detection data.
   * @param { Options } [options] - Optional parameters specifying the interval at which sensor data is reported, {@code Options}.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 20
   */
  function on(type: 'wearDetectionChange', callback: Callback<WearDetectionResponse>, options?: Options): void;

  /**
   * Subscribe to orientation sensor data once.
   * @param { 'orientationChange' } type - Indicate the sensor type to listen for, {@code SensorId.ORIENTATION}.
   * @param { Callback<OrientationResponse> } callback - callback orientation data.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 20
   */
  function once(type: 'orientationChange', callback: Callback<OrientationResponse>): void;

  /**
   * Subscribe to accelerometer sensor data once.
   * @permission ohos.permission.ACCELEROMETER
   * @param { 'accelerometerChange' } type - Indicate the sensor type to listen for, {@code SensorId.ACCELEROMETER}.
   * @param { Callback<AccelerometerResponse> } callback - callback accelerometer data.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 20
   */
  function once(type: 'accelerometerChange', callback: Callback<AccelerometerResponse>): void;

  /**
   * Subscribe to uncalibrated accelerometer sensor data once.
   * @permission ohos.permission.ACCELEROMETER
   * @param { 'accelerometerUncalibratedChange' } type - Indicate the sensor type to listen for,{@code SensorId.ACCELEROMETER_UNCALIBRATED}.
   * @param { Callback<AccelerometerUncalibratedResponse> } callback - callback uncalibrated accelerometer data.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 20
   */
  function once(type: 'accelerometerUncalibratedChange', callback: Callback<AccelerometerUncalibratedResponse>): void;

  /**
   * Subscribe to ambient light sensor data once.
   * @param { 'ambientLightChange' } type - Indicate the sensor type to listen for, {@code SensorId.AMBIENT_LIGHT}.
   * @param { Callback<LightResponse> } callback - callback ambient light data.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 20
   */
  function once(type: 'ambientLightChange', callback: Callback<LightResponse>): void;

  /**
   * Subscribe to ambient temperature sensor data once.
   * @param { 'ambientTemperatureChange' } type - Indicate the sensor type to listen for, {@code SensorId.AMBIENT_TEMPERATURE}.
   * @param { Callback<AmbientTemperatureResponse> } callback - callback ambient temperature data.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 20
   */
  function once(type: 'ambientTemperatureChange', callback: Callback<AmbientTemperatureResponse>): void;

  /**
   * Subscribe to barometer sensor data once.
   * @param { 'barometerChange' } type - Indicate the sensor type to listen for, {@code SensorId.BAROMETER}.
   * @param { Callback<BarometerResponse> } callback - callback barometer data.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 20
   */
  function once(type: 'barometerChange', callback: Callback<BarometerResponse>): void;

  /**
   * Subscribe to gravity sensor data once.
   * @param { 'gravityChange' } type - Indicate the sensor type to listen for, {@code SensorId.GRAVITY}.
   * @param { Callback<GravityResponse> } callback - callback gravity data.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 20
   */
  function once(type: 'gravityChange', callback: Callback<GravityResponse>): void;

  /**
   * Subscribe to gyroscope sensor data once.
   * @permission ohos.permission.GYROSCOPE
   * @param { 'gyroscopeChange' } type - Indicate the sensor type to listen for, {@code SensorId.GYROSCOPE}.
   * @param { Callback<GyroscopeResponse> } callback - callback gyroscope data.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 20
   */
  function once(type: 'gyroscopeChange', callback: Callback<GyroscopeResponse>): void;

  /**
   * Subscribe to uncalibrated gyroscope sensor data once.
   * @permission ohos.permission.GYROSCOPE
   * @param { 'gyroscopeUncalibratedChange' } type - Indicate the sensor type to listen for,{@code SensorId.GYROSCOPE_UNCALIBRATED}.
   * @param { Callback<GyroscopeUncalibratedResponse> } callback - callback uncalibrated gyroscope data.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 20
   */
  function once(type: 'gyroscopeUncalibratedChange', callback: Callback<GyroscopeUncalibratedResponse>): void;

  /**
   * Subscribe to hall sensor data once.
   * @param { 'hallChange' } type - Indicate the sensor type to listen for, {@code SensorId.HALL}.
   * @param { Callback<HallResponse> } callback - callback hall data.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 20
   */
  function once(type: 'hallChange', callback: Callback<HallResponse>): void;

  /**
   * Subscribe to heart rate sensor data once.
   * @permission ohos.permission.READ_HEALTH_DATA
   * @param { 'heartRateChange' } type - Indicate the sensor type to listen for, {@code SensorId.HEART_RATE}.
   * @param { Callback<HeartRateResponse> } callback - callback heart rate data.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 20
   */
  function once(type: 'heartRateChange', callback: Callback<HeartRateResponse>): void;

  /**
   * Subscribe to humidity sensor data once.
   * @param { 'humidityChange' } type - Indicate the sensor type to listen for, {@code SensorId.HUMIDITY}.
   * @param { Callback<HumidityResponse> } callback - callback humidity data.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 20
   */
  function once(type: 'humidityChange', callback: Callback<HumidityResponse>): void;

  /**
   * Subscribe to linear acceleration sensor data once.
   * @permission ohos.permission.ACCELEROMETER
   * @param { 'linearAccelerometerChange' } type - Indicate the sensor type to listen for, {@code SensorId.LINEAR_ACCELEROMETER}.
   * @param { Callback<LinearAccelerometerResponse> } callback - callback linear accelerometer data.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 20
   */
  function once(type: 'linearAccelerometerChange', callback: Callback<LinearAccelerometerResponse>): void;

  /**
   * Subscribe to magnetic field sensor data once.
   * @param { 'magneticFieldChange' } type - Indicate the sensor type to listen for, {@code SensorId.MAGNETIC_FIELD}.
   * @param { Callback<MagneticFieldResponse> } callback - callback magnetic field data.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 20
   */
  function once(type: 'magneticFieldChange', callback: Callback<MagneticFieldResponse>): void;

  /**
   * Subscribe to uncalibrated magnetic field sensor data once.
   * @param { 'magneticFieldUncalibratedChange' } type - Indicate the sensor type to listen for,
   *        {@code SensorId.MAGNETIC_FIELD_UNCALIBRATED}.
   * @param { Callback<MagneticFieldUncalibratedResponse> } callback - callback uncalibrated magnetic field data.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 20
   */
  function once(type: 'magneticFieldUncalibratedChange', callback: Callback<MagneticFieldUncalibratedResponse>): void;

  /**
   * Subscribe to pedometer sensor data once.
   * @permission ohos.permission.ACTIVITY_MOTION
   * @param { 'pedometerChange' } type - Indicate the sensor type to listen for, {@code SensorId.PEDOMETER}.
   * @param { Callback<PedometerResponse> } callback - callback pedometer data.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 20
   */
  function once(type: 'pedometerChange', callback: Callback<PedometerResponse>): void;

  /**
   * Subscribe to pedometer detection sensor data once.
   * @permission ohos.permission.ACTIVITY_MOTION
   * @param { 'pedometerDetectionChange' } type - Indicate the sensor type to listen for, {@code SensorId.PEDOMETER_DETECTION}.
   * @param { Callback<PedometerDetectionResponse> } callback - callback pedometer detection data.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 20
   */
  function once(type: 'pedometerDetectionChange', callback: Callback<PedometerDetectionResponse>): void;

  /**
   * Subscribe to proximity sensor data once.
   * @param { 'proximityChange' } type - Indicate the sensor type to listen for, {@code SensorId.PROXIMITY}.
   * @param { Callback<ProximityResponse> } callback - callback proximity data.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 20
   */
  function once(type: 'proximityChange', callback: Callback<ProximityResponse>): void;

  /**
   * Subscribe to rotation vector sensor data once.
   * @param { 'rotationVectorChange' } type - Indicate the sensor type to listen for, {@code SensorId.ROTATION_VECTOR}.
   * @param { Callback<RotationVectorResponse> } callback - callback rotation vector data.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 20
   */
  function once(type: 'rotationVectorChange', callback: Callback<RotationVectorResponse>): void;

  /**
   * Subscribe to significant motion sensor data once.
   * @param { 'significantMotionChange' } type - Indicate the sensor type to listen for, {@code SensorId.SIGNIFICANT_MOTION}.
   * @param { Callback<SignificantMotionResponse> } callback - callback significant motion data.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 20
   */
  function once(type: 'significantMotionChange', callback: Callback<SignificantMotionResponse>): void;

  /**
   * Subscribe to wear detection sensor data once.
   * @param { 'wearDetectionChange' } type - Indicate the sensor type to listen for, {@code SensorId.WEAR_DETECTION}.
   * @param { Callback<WearDetectionResponse> } callback - callback wear detection data.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception.
   *
   * @syscap SystemCapability.Sensors.Sensor
   * @since 20
   */
  function once(type: 'wearDetectionChange', callback: Callback<WearDetectionResponse>): void;

  /**
   * Unsubscribe to orientation sensor data.
   * @param { 'orientationChange' } type - Indicate the sensor type to listen for, {@code SensorId.ORIENTATION}.
   * @param { Callback<OrientationResponse> } callback - callback orientation data.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Sensors.Sensor
   * @atomicservice
   * @since 20
   */
  function off(type: 'orientationChange', callback?: Callback<OrientationResponse>): void;

  /**
   * Unsubscribe to color sensor data.
   * @param { 'colorChange' } type - Indicate the sensor type to listen for, {@code SensorId.COLOR}.
   * @param { Callback<ColorResponse> } callback - callback color data.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 202 - Permission check failed. A non-system application uses the system API.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 20
   */
  function off(type: 'colorChange', callback?: Callback<ColorResponse>): void;

  /**
   * Unsubscribe to sar sensor data.
   * @param { 'sarChange' } type - Indicate the sensor type to listen for, {@code SensorId.SAR}.
   * @param { Callback<SarResponse> } callback - callback sar data.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 202 - Permission check failed. A non-system application uses the system API.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 20
   */
  function off(type: 'sarChange', callback?: Callback<SarResponse>): void;

  /**
   * Unsubscribe to accelerometer sensor data.
   * @permission ohos.permission.ACCELEROMETER
   * @param { 'accelerometerChange' } type - Indicate the sensor type to listen for, {@code SensorId.ACCELEROMETER}.
   * @param { Callback<AccelerometerResponse> } callback - callback accelerometer data.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Sensors.Sensor
   * @atomicservice
   * @since 20
   */
  function off(type: 'accelerometerChange', callback?: Callback<AccelerometerResponse>): void;

  /**
   * Unsubscribe to uncalibrated accelerometer sensor data.
   * @permission ohos.permission.ACCELEROMETER
   * @param { 'accelerometerUncalibratedChange' } type - Indicate the sensor type to listen for,
   *        {@code SensorId.ACCELEROMETER_UNCALIBRATED}.
   * @param { Callback<AccelerometerUncalibratedResponse> } callback - callback uncalibrated accelerometer data.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 20
   */
  function off(type: 'accelerometerUncalibratedChange', callback?: Callback<AccelerometerUncalibratedResponse>): void;

  /**
   * Unsubscribe to ambient light sensor data.
   * @param { 'ambientLightChange' } type - Indicate the sensor type to listen for, {@code SensorId.AMBIENT_LIGHT}.
   * @param { Callback<LightResponse> } callback - callback ambient light data.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 20
   */
  function off(type: 'ambientLightChange', callback?: Callback<LightResponse>): void;

  /**
   * Unsubscribe to ambient temperature sensor data.
   * @param { 'ambientTemperatureChange' } type - Indicate the sensor type to listen for, {@code SensorId.AMBIENT_TEMPERATURE}.
   * @param { Callback<AmbientTemperatureResponse> } callback - callback ambient temperature data.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 20
   */
  function off(type: 'ambientTemperatureChange', callback?: Callback<AmbientTemperatureResponse>): void;

  /**
   * Unsubscribe to barometer sensor data.
   * @param { 'barometerChange' } type - Indicate the sensor type to listen for, {@code SensorId.BAROMETER}.
   * @param { Callback<BarometerResponse> } callback - callback barometer data.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 20
   */
  function off(type: 'barometerChange', callback?: Callback<BarometerResponse>): void;

  /**
   * Unsubscribe to gravity sensor data.
   * @param { 'gravityChange' } type - Indicate the sensor type to listen for, {@code SensorId.GRAVITY}.
   * @param { Callback<GravityResponse> } callback - callback gravity data.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 20
   */
  function off(type: 'gravityChange', callback?: Callback<GravityResponse>): void;

  /**
   * Unsubscribe to gyroscope sensor data.
   * @permission ohos.permission.GYROSCOPE
   * @param { 'gyroscopeChange' } type - Indicate the sensor type to listen for, {@code SensorId.GYROSCOPE}.
   * @param { Callback<GyroscopeResponse> } callback - callback gyroscope data.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Sensors.Sensor
   * @atomicservice
   * @since 20
   */
  function off(type: 'gyroscopeChange', callback?: Callback<GyroscopeResponse>): void;

  /**
   * Unsubscribe to uncalibrated gyroscope sensor data.
   * @permission ohos.permission.GYROSCOPE
   * @param { 'gyroscopeUncalibratedChange' } type - Indicate the sensor type to listen for, {@code SensorId.GYROSCOPE_UNCALIBRATED}.
   * @param { Callback<GyroscopeUncalibratedResponse> } callback - callback uncalibrated gyroscope data.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 20
   */
  function off(type: 'gyroscopeUncalibratedChange', callback?: Callback<GyroscopeUncalibratedResponse>): void;

  /**
   * Unsubscribe to hall sensor data.
   * @param { 'hallChange' } type - Indicate the sensor type to listen for, {@code SensorId.HALL}.
   * @param { Callback<HallResponse> } callback - callback hall data.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 20
   */
  function off(type: 'hallChange', callback?: Callback<HallResponse>): void;

  /**
   * Unsubscribe to heart rate sensor data.
   * @permission ohos.permission.READ_HEALTH_DATA
   * @param { 'heartRateChange' } type - Indicate the sensor type to listen for, {@code SensorId.HEART_RATE}.
   * @param { Callback<HeartRateResponse> } callback - callback heart rate data.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 20
   */
  function off(type: 'heartRateChange', callback?: Callback<HeartRateResponse>): void;

  /**
   * Unsubscribe to humidity sensor data.
   * @param { 'humidityChange' } type - Indicate the sensor type to listen for, {@code SensorId.HUMIDITY}.
   * @param { Callback<HumidityResponse> } callback - callback humidity data.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 20
   */
  function off(type: 'humidityChange', callback?: Callback<HumidityResponse>): void;

  /**
   * Unsubscribe to linear acceleration sensor data.
   * @permission ohos.permission.ACCELEROMETER
   * @param { 'linearAccelerometerChange' } type - Indicate the sensor type to listen for, {@code SensorId.LINEAR_ACCELEROMETER}.
   * @param { Callback<LinearAccelerometerResponse> } callback - callback linear accelerometer data.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 20
   */
  function off(type: 'linearAccelerometerChange', callback?: Callback<LinearAccelerometerResponse>): void;

  /**
   * Unsubscribe to magnetic field sensor data.
   * @param { 'magneticFieldChange' } type - Indicate the sensor type to listen for, {@code SensorId.MAGNETIC_FIELD}.
   * @param { Callback<MagneticFieldResponse> } callback - callback magnetic field data.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 20
   */
  function off(type: 'magneticFieldChange', callback?: Callback<MagneticFieldResponse>): void;

  /**
   * Unsubscribe to uncalibrated magnetic field sensor data.
   * @param { 'magneticFieldUncalibratedChange' } type - Indicate the sensor type to listen for,
   *        {@code SensorId.MAGNETIC_FIELD_UNCALIBRATED}.
   * @param { Callback<MagneticFieldUncalibratedResponse> } callback - callback uncalibrated magnetic field data.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 20
   */
  function off(type: 'magneticFieldUncalibratedChange', callback?: Callback<MagneticFieldUncalibratedResponse>): void;

  /**
   * Unsubscribe to pedometer sensor data.
   * @permission ohos.permission.ACTIVITY_MOTION
   * @param { 'pedometerChange' } type - Indicate the sensor type to listen for, {@code SensorId.PEDOMETER}.
   * @param { Callback<PedometerResponse> } callback - callback pedometer data.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 20
   */
  function off(type: 'pedometerChange', callback?: Callback<PedometerResponse>): void;

  /**
   * Unsubscribe to pedometer detection sensor data.
   * @permission ohos.permission.ACTIVITY_MOTION
   * @param { 'pedometerDetectionChange' } type - Indicate the sensor type to listen for, {@code SensorId.PEDOMETER_DETECTION}.
   * @param { Callback<PedometerDetectionResponse> } callback - callback pedometer detection data.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 20
   */
  function off(type: 'pedometerDetectionChange', callback?: Callback<PedometerDetectionResponse>): void;

  /**
   * Unsubscribe to proximity sensor data.
   * @param { 'proximityChange' } type - Indicate the sensor type to listen for, {@code SensorId.PROXIMITY}.
   * @param { Callback<ProximityResponse> } callback - callback proximity data.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 20
   */
  function off(type: 'proximityChange', callback?: Callback<ProximityResponse>): void;

  /**
   * Unsubscribe to rotation vector sensor data.
   * @param { 'rotationVectorChange' } type - Indicate the sensor type to listen for, {@code SensorId.ROTATION_VECTOR}.
   * @param { Callback<RotationVectorResponse> } callback - callback rotation vector data.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 20
   */
  function off(type: 'rotationVectorChange', callback?: Callback<RotationVectorResponse>): void;

  /**
   * Unsubscribe to significant motion sensor data.
   * @param { 'significantMotionChange' } type - Indicate the sensor type to listen for, {@code SensorId.SIGNIFICANT_MOTION}.
   * @param { Callback<SignificantMotionResponse> } callback - callback significant motion data.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 20
   */
  function off(type: 'significantMotionChange', callback?: Callback<SignificantMotionResponse>): void;

  /**
   * Unsubscribe to wear detection sensor data.
   * @param { 'wearDetectionChange' } type - Indicate the sensor type to listen for, {@code SensorId.WEAR_DETECTION}.
   * @param { Callback<WearDetectionResponse> } callback - callback wear detection data.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 20
   */
  function off(type: 'wearDetectionChange', callback?: Callback<WearDetectionResponse>): void;

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
    interval?: long | SensorFrequency;
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
   * @enum { int }
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
     * @type { long }
     * @syscap SystemCapability.Sensors.Sensor
     * @atomicservice
     * @since 20
     */
    timestamp: long;

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
     * @type { float }
     * @syscap SystemCapability.Sensors.Sensor
     * @atomicservice
     * @since 20
     */
    alpha: float;

    /**
     * The device rotates at an angle around the X axis.
     * @type { float }
     * @syscap SystemCapability.Sensors.Sensor
     * @atomicservice
     * @since 20
     */
    beta: float;

    /**
     * The device rotates at an angle around the Y axis.
     * @type { float }
     * @syscap SystemCapability.Sensors.Sensor
     * @atomicservice
     * @since 20
     */
    gamma: float;
  }

  /**
   * Indicates sensor information.
   * @typedef Sensor
   * @syscap SystemCapability.Sensors.Sensor
   * @since 20
   */
  interface Sensor {
    /**
     * Sensor name.
     * @type { string }
     * @syscap SystemCapability.Sensors.Sensor
     * @since 20
     */
    sensorName:string;

    /**
     * Sensor vendor.
     * @type { string }
     * @syscap SystemCapability.Sensors.Sensor
     * @since 20
     */
    vendorName:string;

    /**
     * Sensor firmware version.
     * @type { string }
     * @syscap SystemCapability.Sensors.Sensor
     * @since 20
     */
    firmwareVersion:string;

    /**
     * Sensor hardware version.
     * @type { string }
     * @syscap SystemCapability.Sensors.Sensor
     * @since 20
     */
    hardwareVersion:string;

    /**
     * Sensor type ID, {@code SensorType}.
     * @type { int }
     * @syscap SystemCapability.Sensors.Sensor
     * @since 20
     */
    sensorId:int;

    /**
     * Maximum measurement range of the sensor.
     * @type { float }
     * @syscap SystemCapability.Sensors.Sensor
     * @since 20
     */
    maxRange:float;

    /**
     * Minimum sample period allowed, in ns.
     * @type { long }
     * @syscap SystemCapability.Sensors.Sensor
     * @since 20
     */
    minSamplePeriod:long;

    /**
     * Maximum sample period allowed, in ns.
     * @type { long }
     * @syscap SystemCapability.Sensors.Sensor
     * @since 20
     */
    maxSamplePeriod:long;

    /**
     * Sensor accuracy.
     * @type { float }
     * @syscap SystemCapability.Sensors.Sensor
     * @since 20
     */
    precision:float;

    /**
     * Sensor power.
     * @type { float }
     * @syscap SystemCapability.Sensors.Sensor
     * @since 20
     */
    power:float;
  }

  /**
   * Obtains all sensor information on the device.
   * @param { AsyncCallback<Array<Sensor>> } callback - callback sensor list.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 20
   */
  function getSensorList(callback: AsyncCallback<Array<Sensor>>): void;

  /**
   * Obtains all sensor information on the device.
   * @returns { Promise<Array<Sensor>> } Promise used to return the result.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 20
   */
  function getSensorList(): Promise<Array<Sensor>>;

  /**
   * Indicates geomagnetic field data.
   * @typedef GeomagneticResponse
   * @syscap SystemCapability.Sensors.Sensor
   * @since 20
   */
  interface GeomagneticResponse {
    /**
     * Geomagnetic x-axis component.
     * @type { float }
     * @syscap SystemCapability.Sensors.Sensor
     * @since 20
     */
    x: float;

    /**
     * Geomagnetic y-axis component.
     * @type { float }
     * @syscap SystemCapability.Sensors.Sensor
     * @since 20
     */
    y: float;

    /**
     * Geomagnetic z-axis component.
     * @type { float }
     * @syscap SystemCapability.Sensors.Sensor
     * @since 20
     */
    z: float;

    /**
     * The Angle between the earth's magnetic field lines and the horizontal plane.
     * @type { float }
     * @syscap SystemCapability.Sensors.Sensor
     * @since 20
     */
    geomagneticDip: float;

    /**
     * The Angle of magnetic north and true north on a horizontal plane.
     * @type { float }
     * @syscap SystemCapability.Sensors.Sensor
     * @since 20
     */
    deflectionAngle: float;

    /**
     * The horizontal strength of the geomagnetic field.
     * @type { float }
     * @syscap SystemCapability.Sensors.Sensor
     * @since 20
     */
    levelIntensity: float;

    /**
     * The total strength of the geomagnetic field.
     * @type { float }
     * @syscap SystemCapability.Sensors.Sensor
     * @since 20
     */
    totalIntensity: float;
  }

  /**
   * Convert rotation vector to rotation matrix.
   * @param { Array<float> } rotationVector - rotationVector Indicates the rotation vector.
   * @param { AsyncCallback<Array<float>> } callback - callback rotation matrix.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 20
   */
  function getRotationMatrix(rotationVector: Array<float>, callback: AsyncCallback<Array<float>>): void;

  /**
   * Convert rotation vector to rotation matrix.
   * @param { Array<float> } rotationVector - rotationVector Indicates the rotation vector.
   * @returns { Promise<Array<float>> } Promise used to return the result.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 20
   */
  function getRotationMatrix(rotationVector: Array<float>): Promise<Array<float>>;

  /**
   * Indicates the axis of the new coordinate system that coincides with the XY axis of the original coordinate system.
   * @typedef CoordinatesOptions
   * @syscap SystemCapability.Sensors.Sensor
   * @since 20
   */
  interface CoordinatesOptions {
    /** Indicates the axis of the new coordinate system that coincides with the X axis of the original coordinate system. 
     * @type { int }
     * @syscap SystemCapability.Sensors.Sensor
     * @since 20
     */
    x: int;

    /** Indicates the axis of the new coordinate system that coincides with the Y axis of the original coordinate system. 
     * @type { int }
     * @syscap SystemCapability.Sensors.Sensor
     * @since 20
     */
    y: int;
  }

  /**
   * Computes the device's orientation based on the rotation matrix.
   * @param { Array<float> } rotationMatrix - rotationMatrix Indicates the rotation matrix.
   * @param { AsyncCallback<Array<float>> } callback - callback the angle of rotation around the z, x, y axis.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 20
   */
  function getOrientation(rotationMatrix: Array<float>, callback: AsyncCallback<Array<float>>): void;

  /**
   * Computes the device's orientation based on the rotation matrix.
   * @param { Array<float> } rotationMatrix - rotationMatrix Indicates the rotation matrix.
   * @returns { Promise<Array<float>> } Promise used to return the result.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 20
   */
  function getOrientation(rotationMatrix: Array<float>): Promise<Array<float>>;

  /**
   * Indicates the response of rotation matrix.
   * @typedef RotationMatrixResponse
   * @syscap SystemCapability.Sensors.Sensor
   * @since 20
   */
  interface RotationMatrixResponse {
    /**
     * rotation matrix. 
     * @type { Array<float> }
     * @syscap SystemCapability.Sensors.Sensor
     * @since 20
     */
    rotation: Array<float>;

    /**
     * inclination matrix. 
     * @type { Array<float> }
     * @syscap SystemCapability.Sensors.Sensor
     * @since 20
     */
    inclination: Array<float>
  }

  /**
   * Calculate rotation matrix based on gravity vector and geomagnetic vector.
   * @param { Array<float> } gravity - gravity Indicates the gravity vector.
   * @param { Array<float> } geomagnetic - geomagnetic Indicates the geomagnetic vector.
   * @param { AsyncCallback<RotationMatrixResponse> } callback - callback rotation matrix and inclination matrix.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 20
   */
  function getRotationMatrix(gravity: Array<float>, geomagnetic: Array<float>, callback: AsyncCallback<RotationMatrixResponse>): void;

  /**
   * Calculate rotation matrix based on gravity vector and geomagnetic vector.
   * @param { Array<float> } gravity - gravity Indicates the gravity vector.
   * @param { Array<float> } geomagnetic - geomagnetic Indicates the geomagnetic vector.
   * @returns { Promise<RotationMatrixResponse> } Promise used to return the result.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 20
   */
  function getRotationMatrix(gravity: Array<float>, geomagnetic: Array<float>): Promise<RotationMatrixResponse>;

  /**
   * Acceleration sensor event data.
   * @typedef AccelerometerResponse
   * @syscap SystemCapability.Sensors.Sensor
   * @atomicservice
   * @since 20
   */
  interface AccelerometerResponse extends Response {
    /**
     * Acceleration x-axis component.
     * @type { float }
     * @syscap SystemCapability.Sensors.Sensor
     * @atomicservice
     * @since 20
     */
    x: float;

    /**
     * Acceleration y-axis component.
     * @type { float }
     * @syscap SystemCapability.Sensors.Sensor
     * @atomicservice
     * @since 20
     */
    y: float;

    /**
     * Acceleration z-axis component
     * @type { float }
     * @syscap SystemCapability.Sensors.Sensor
     * @atomicservice
     * @since 20
     */
    z: float;
  }

  /**
   * Linear acceleration sensor event data.
   * @typedef LinearAccelerometerResponse
   * @syscap SystemCapability.Sensors.Sensor
   * @since 20
   */
  interface LinearAccelerometerResponse extends Response {
    /**
     * Linear acceleration x-axis component.
     * @type { float }
     * @syscap SystemCapability.Sensors.Sensor
     * @since 20
     */
    x: float;

    /**
     * Linear acceleration y-axis component.
     * @type { float }
     * @syscap SystemCapability.Sensors.Sensor
     * @since 20
     */
    y: float;

    /**
     * Linear acceleration z-axis component.
     * @type { float }
     * @syscap SystemCapability.Sensors.Sensor
     * @since 20
     */
    z: float;
  }

  /**
   * Acceleration uncalibrated sensor event data.
   * @typedef AccelerometerUncalibratedResponse
   * @syscap SystemCapability.Sensors.Sensor
   * @since 20
   */
  interface AccelerometerUncalibratedResponse extends Response {
    /**
     * Acceleration uncalibrated x-axis component.
     * @type { float }
     * @syscap SystemCapability.Sensors.Sensor
     * @since 20
     */
    x: float;

    /**
     * Acceleration uncalibrated y-axis component.
     * @type { float }
     * @syscap SystemCapability.Sensors.Sensor
     * @since 20
     */
    y: float;

    /**
     * Acceleration uncalibrated z-axis component.
     * @type { float }
     * @syscap SystemCapability.Sensors.Sensor
     * @since 20
     */
    z: float;

    /**
     * Acceleration uncalibrated x-axis offset.
     * 
     * @type { float }
     * @syscap SystemCapability.Sensors.Sensor
     * @since 20
     */
    biasX: float;

    /**
     * Acceleration uncalibrated y-axis offset.
     * 
     * @type { float }
     * @syscap SystemCapability.Sensors.Sensor
     * @since 20
     */
    biasY: float;

    /**
     * Acceleration uncalibrated z-axis offset.
     * 
     * @type { float }
     * @syscap SystemCapability.Sensors.Sensor
     * @since 20
     */
    biasZ: float;
  }

  /**
   * Gravity sensor event data.
   * @typedef GravityResponse
   * @syscap SystemCapability.Sensors.Sensor
   * @since 20
   */
  interface GravityResponse extends Response {
    /**
     * Gravity x-axis component.
     * @type { float }
     * @syscap SystemCapability.Sensors.Sensor
     * @since 20
     */
    x: float;

    /**
     * Gravity y-axis component.
     * @type { float }
     * @syscap SystemCapability.Sensors.Sensor
     * @since 20
     */
    y: float;

    /**
     * Gravity z-axis component.
     * @type { float }
     * @syscap SystemCapability.Sensors.Sensor
     * @since 20
     */
    z: float;
  }

  /**
   * Rotation vector sensor event data.
   * @typedef RotationVectorResponse
   * @syscap SystemCapability.Sensors.Sensor
   * @since 20
   */
  interface RotationVectorResponse extends Response {
    /**
     * Rotation vector x-axis component.
     * @type { float }
     * @syscap SystemCapability.Sensors.Sensor
     * @since 20
     */
    x: float;

    /**
     * Rotation vector y-axis component.
     * @type { float }
     * @syscap SystemCapability.Sensors.Sensor
     * @since 20
     */
    y: float;

    /**
     * Rotation vector z-axis component.
     * @type { float }
     * @syscap SystemCapability.Sensors.Sensor
     * @since 20
     */
    z: float;

    /**
     * Scalar quantity.
     * @type { float }
     * @syscap SystemCapability.Sensors.Sensor
     * @since 20
     */
    w: float;
  }

  /**
   * Gyroscope sensor event data.
   * @typedef GyroscopeResponse
   * @syscap SystemCapability.Sensors.Sensor
   * @atomicservice
   * @since 20
   */
  interface GyroscopeResponse extends Response {
    /**
     * Gyroscope x-axis component.
     * @type { float }
     * @syscap SystemCapability.Sensors.Sensor
     * @atomicservice
     * @since 20
     */
    x: float;

    /**
     * Gyroscope y-axis component.
     * @type { float }
     * @syscap SystemCapability.Sensors.Sensor
     * @atomicservice
     * @since 20
     */
    y: float;

    /**
     * Gyroscope z-axis component.
     * @type { float }
     * @syscap SystemCapability.Sensors.Sensor
     * @atomicservice
     * @since 20
     */
    z: float;
  }

  /**
   * Gyroscope uncalibrated sensor event data.
   * @typedef GyroscopeUncalibratedResponse
   * @syscap SystemCapability.Sensors.Sensor
   * @since 20
   */
  interface GyroscopeUncalibratedResponse extends Response {
    /**
     * Gyroscope uncalibrated x-axis component.
     * @type { float }
     * @syscap SystemCapability.Sensors.Sensor
     * @since 20
     */
    x: float;

    /**
     * Gyroscope uncalibrated y-axis component.
     * @type { float }
     * @syscap SystemCapability.Sensors.Sensor
     * @since 20
     */
    y: float;

    /**
     * Gyroscope uncalibrated z-axis component.
     * @type { float }
     * @syscap SystemCapability.Sensors.Sensor
     * @since 20
     */
    z: float;

    /**
     * Gyroscope uncalibrated x-axis offset.
     * @type { float }
     * @syscap SystemCapability.Sensors.Sensor
     * @since 20
     */
    biasX: float;

    /**
     * Gyroscope uncalibrated y-axis offset.
     * @type { float }
     * @syscap SystemCapability.Sensors.Sensor
     * @since 20
     */
    biasY: float;

    /**
     * Gyroscope uncalibrated z-axis offset.
     * @type { float }
     * @syscap SystemCapability.Sensors.Sensor
     * @since 20
     */
    biasZ: float;
  }

  /**
   * Significant motion sensor event data.
   * @typedef SignificantMotionResponse
   * @syscap SystemCapability.Sensors.Sensor
   * @since 20
   */
  interface SignificantMotionResponse extends Response {
    /**
     * The degree of significant motion.
     * Whether the device has a significant motion.
     * The value 1 means that the device has a significant motion, and 0 means the opposite.
     * @type { float }
     * @syscap SystemCapability.Sensors.Sensor
     * @since 20
     */
    scalar: float;
  }

  /**
   * Proximity sensor event data.
   * @typedef ProximityResponse
   * @syscap SystemCapability.Sensors.Sensor
   * @since 20
   */
  interface ProximityResponse extends Response {
    /**
     * Indicates the degree of proximity, event 0 indicates proximity, and greater than 0 indicates distance.
     * @type { float }
     * @syscap SystemCapability.Sensors.Sensor
     * @since 20
     */
    distance: float;
  }

  /**
   * Light sensor event data.
   * @typedef LightResponse
   * @syscap SystemCapability.Sensors.Sensor
   * @since 20
   */
  interface LightResponse extends Response {
    /**
     * Indicates light intensity, in lux.
     * @type { float }
     * @syscap SystemCapability.Sensors.Sensor
     * @since 20
     */
    intensity: float;

    /**
     * Indicates color temperature, in kelvin.
     * @type { ?float }
     * @syscap SystemCapability.Sensors.Sensor
     * @since 20
     */
    colorTemperature?: float;

    /**
     * Indicates infrared luminance, in cd/m2.
     * @type { ?float }
     * @syscap SystemCapability.Sensors.Sensor
     * @since 20
     */
    infraredLuminance?: float;
  }

  /**
   * Hall sensor event data.
   * @typedef HallResponse
   * @syscap SystemCapability.Sensors.Sensor
   * @since 20
   */
  interface HallResponse extends Response {
    /**
     * Indicates hall status, 0 indicates open, and greater than 0 indicates suction.
     * @type { float }
     * @syscap SystemCapability.Sensors.Sensor
     * @since 20
     */
    status: float;
  }

  /**
   * Magnetic field sensor event data.
   * @typedef MagneticFieldResponse
   * @syscap SystemCapability.Sensors.Sensor
   * @since 20
   */
  interface MagneticFieldResponse extends Response {
    /**
     * Magnetic field x-axis component.
     * @type { float }
     * @syscap SystemCapability.Sensors.Sensor
     * @since 20
     */
    x: float;

    /**
     * Magnetic field y-axis component.
     * @type { float }
     * @syscap SystemCapability.Sensors.Sensor
     * @since 20
     */
    y: float;

    /**
     * Magnetic field z-axis component.
     * @type { float }
     * @syscap SystemCapability.Sensors.Sensor
     * @since 20
     */
    z: float;
  }

  /**
   * Magnetic field uncalibrated sensor event data.
   * @typedef MagneticFieldUncalibratedResponse
   * @syscap SystemCapability.Sensors.Sensor
   * @since 20
   */
  interface MagneticFieldUncalibratedResponse extends Response {
    /**
     * Magnetic field uncalibrated x-axis component.
     * @type { float }
     * @syscap SystemCapability.Sensors.Sensor
     * @since 20
     */
    x: float;

    /**
     * Magnetic field uncalibrated y-axis component.
     * @type { float }
     * @syscap SystemCapability.Sensors.Sensor
     * @since 20
     */
    y: float;

    /**
     * Magnetic field uncalibrated z-axis component.
     * @type { float }
     * @syscap SystemCapability.Sensors.Sensor
     * @since 20
     */
    z: float;

    /**
     * Magnetic field uncalibrated x-axis offset.
     * @type { float }
     * @syscap SystemCapability.Sensors.Sensor
     * @since 20
     */
    biasX: float;

    /**
     * Magnetic field uncalibrated y-axis offset.
     * @type { float }
     * @syscap SystemCapability.Sensors.Sensor
     * @since 20
     */
    biasY: float;

    /**
     * Magnetic field uncalibrated z-axis offset.
     * @type { float }
     * @syscap SystemCapability.Sensors.Sensor
     * @since 20
     */
    biasZ: float;
  }

  /**
   * Pedometer sensor event data.
   * @typedef PedometerResponse
   * @syscap SystemCapability.Sensors.Sensor
   * @since 20
   */
  interface PedometerResponse extends Response {
    /**
     * Indicates the number of steps.
     * @type { float }
     * @syscap SystemCapability.Sensors.Sensor
     * @since 20
     */
    steps: float;
  }

  /**
   * Humidity sensor event data.
   * @typedef HumidityResponse
   * @syscap SystemCapability.Sensors.Sensor
   * @since 20
   */
  interface HumidityResponse extends Response {
    /**
     * Indicates the number of humidity.
     * @type { float }
     * @syscap SystemCapability.Sensors.Sensor
     * @since 20
     */
    humidity: float;
  }

  /**
   * Pedometer detection sensor event data.
   * @typedef PedometerDetectionResponse
   * @syscap SystemCapability.Sensors.Sensor
   * @since 20
   */
  interface PedometerDetectionResponse extends Response {
    /**
     * Indicates the pedometer detection status, 1 indicates that a walking action has occurred,
     * and 0 indicates that no movement has occurred.
     * @type { float }
     * @syscap SystemCapability.Sensors.Sensor
     * @since 20
     */
    scalar: float;
  }

  /**
   * Ambient temperature sensor event data.
   * @typedef  AmbientTemperatureResponse
   * @syscap SystemCapability.Sensors.Sensor
   * @since 20
   */
  interface AmbientTemperatureResponse extends Response {
    /**
     * Indicates ambient temperature, in celsius.
     * @type { float }
     * @syscap SystemCapability.Sensors.Sensor
     * @since 20
     */
    temperature: float;
  }

  /**
   * Barometer sensor event data.
   * @typedef BarometerResponse
   * @syscap SystemCapability.Sensors.Sensor
   * @since 20
   */
  interface BarometerResponse extends Response {
    /**
     * Indicates the number of barometer, in hpa.
     * @type { float }
     * @syscap SystemCapability.Sensors.Sensor
     * @since 20
     */
    pressure: float;
  }

  /**
   * Heart rate sensor event data.
   * @typedef HeartRateResponse
   * @syscap SystemCapability.Sensors.Sensor
   * @since 20
   */
  interface HeartRateResponse extends Response {
    /**
     * Indicates the number of heart rate.
     * @type { float }
     * @syscap SystemCapability.Sensors.Sensor
     * @since 20
     */
    heartRate: float;
  }

  /**
   * Wear detection sensor event data.
   * @typedef WearDetectionResponse
   * @syscap SystemCapability.Sensors.Sensor
   * @since 20
   */
  interface WearDetectionResponse extends Response {
    /**
     * Indicates the status of wear detection, 1 for wearing, 0 for wearing not.
     * @type { float }
     * @syscap SystemCapability.Sensors.Sensor
     * @since 20
     */
    value: float;
  }

  /**
   * Color sensor event data.
   * @typedef ColorResponse
   * @syscap SystemCapability.Sensors.Sensor
   * @since 20
   */
  interface ColorResponse extends Response {
    /**
     * Indicates the intensity of light, in lux.
     * @type { float }
     * @syscap SystemCapability.Sensors.Sensor
     * @since 20
     */
    lightIntensity: float;
    /**
     * Indicates the color temperature, in kelvin.
     * @type { float }
     * @syscap SystemCapability.Sensors.Sensor
     * @since 20
     */
    colorTemperature: float;
  }

  /**
   * Sar sensor event data.
   * @typedef SarResponse
   * @syscap SystemCapability.Sensors.Sensor
   * @since 20
   */
  interface SarResponse extends Response {
    /**
     * Indicates the specific absorption rate, in W/kg.
     * @type { float }
     * @syscap SystemCapability.Sensors.Sensor
     * @since 20
     */
    absorptionRatio: float;
  }
}

export default sensor;