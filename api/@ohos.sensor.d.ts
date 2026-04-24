/*
 * Copyright (c) 2021-2025 Huawei Device Co., Ltd.
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
 * The **Sensor** module provides APIs for obtaining the sensor list and subscribing to sensor data. It also provides
 * some common sensor algorithms.
 *
 * @syscap SystemCapability.Sensors.Sensor
 * @atomicservice [since 11]
 * @since 8 dynamic
 * @since 23 static
 */
declare namespace sensor {
  /**
   * Enumerates the sensor types.
   *
   * @syscap SystemCapability.Sensors.Sensor
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  enum SensorId {
    /**
     * Acceleration sensor.
     *
     * This API can be used in atomic services since API version 11.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    ACCELEROMETER = 1,

    /**
     * Gyroscope sensor.
     *
     * This API can be used in atomic services since API version 11.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    GYROSCOPE = 2,

    /**
     * Ambient light sensor.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 9 dynamic
     * @since 23 static
     */
    AMBIENT_LIGHT = 5,

    /**
     * Magnetic field sensor.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 9 dynamic
     * @since 23 static
     */
    MAGNETIC_FIELD = 6,

    /**
     * Barometer sensor.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 9 dynamic
     * @since 23 static
     */
    BAROMETER = 8,

    /**
     * Hall effect sensor.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 9 dynamic
     * @since 23 static
     */
    HALL = 10,

    /**
     * Proximity sensor.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 9 dynamic
     * @since 23 static
     */
    PROXIMITY = 12,

    /**
     * Humidity sensor.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 9 dynamic
     * @since 23 static
     */
    HUMIDITY = 13,

    /**
     * Color sensor.
     *
     * System API: This is a system API.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    COLOR = 14,

    /**
     * Sodium Adsorption Ratio (SAR) sensor.
     *
     * System API: This is a system API.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    SAR = 15,

    /**
     * Orientation sensor.
     *
     * This API can be used in atomic services since API version 11.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    ORIENTATION = 256,

    /**
     * Gravity sensor.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 9 dynamic
     * @since 23 static
     */
    GRAVITY = 257,

    /**
     * Linear acceleration sensor.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 9 dynamic
     * @since 23 static
     */
    LINEAR_ACCELEROMETER = 258,

    /**
     * Rotation vector sensor.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 9 dynamic
     * @since 23 static
     */
    ROTATION_VECTOR = 259,

    /**
     * Ambient temperature sensor.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 9 dynamic
     * @since 23 static
     */
    AMBIENT_TEMPERATURE = 260,

    /**
     * Uncalibrated magnetic field sensor.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 9 dynamic
     * @since 23 static
     */
    MAGNETIC_FIELD_UNCALIBRATED = 261,

    /**
     * Uncalibrated gyroscope sensor.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 9 dynamic
     * @since 23 static
     */
    GYROSCOPE_UNCALIBRATED = 263,

    /**
     * Significant motion sensor.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 9 dynamic
     * @since 23 static
     */
    SIGNIFICANT_MOTION = 264,

    /**
     * Pedometer detection sensor.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 9 dynamic
     * @since 23 static
     */
    PEDOMETER_DETECTION = 265,

    /**
     * Pedometer sensor.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 9 dynamic
     * @since 23 static
     */
    PEDOMETER = 266,

    /**
     * Heart rate sensor.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 9 dynamic
     * @since 23 static
     */
    HEART_RATE = 278,

    /**
     * Wear detection sensor.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 9 dynamic
     * @since 23 static
     */
    WEAR_DETECTION = 280,

    /**
     * Uncalibrated acceleration sensor.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 9 dynamic
     * @since 23 static
     */
    ACCELEROMETER_UNCALIBRATED = 281,

    /**
     * Fused pressure sensor.
     *
     * This sensor is available only on smart watches.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 22 dynamic
     * @since 23 static
     */
    FUSION_PRESSURE = 283
  }

  /**
   * Subscribe to orientation sensor data, {@code SensorId.ORIENTATION}.
   *
   * @param { Callback<OrientationResponse> } callback - callback orientation data.
   * @param { Options } [options] - Optional parameters specifying the interval at which sensor data is reported,
   *     <br> {@code Options}.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 23 static
   */
  function onOrientationChange(callback: Callback<OrientationResponse>, options?: Options): void;

  /**
   * Subscribe to color sensor data, {@code SensorId.COLOR}.
   *
   * @param { Callback<ColorResponse> } callback - callback color data.
   * @param { Options } [options] - Optional parameters specifying the interval at which sensor data is reported,
   *     <br> {@code Options}.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @throws { BusinessError } 202 - Permission check failed. A non-system application uses the system API.
   * @syscap SystemCapability.Sensors.Sensor
   * @systemapi
   * @since 23 static
   */
  function onColorChange(callback: Callback<ColorResponse>, options?: Options): void;

  /**
   * Subscribe to SAR sensor data, {@code SensorId.SAR}.
   *
   * @param { Callback<SarResponse> } callback - callback sar data.
   * @param { Options } [options] - Optional parameters specifying the interval at which sensor data is reported,
   *     <br> {@code Options}.
   * @throws { BusinessError } 202 - Permission check failed. A non-system application uses the system API.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @systemapi
   * @since 23 static
   */
  function onSarChange(callback: Callback<SarResponse>, options?: Options): void;

  /**
   * Subscribe to accelerometer sensor data, {@code SensorId.ACCELEROMETER}.
   *
   * @permission ohos.permission.ACCELEROMETER
   * @param { Callback<AccelerometerResponse> } callback - callback accelerometer data.
   * @param { Options } [options] - Optional parameters specifying the interval at which sensor data is reported,
   *     <br> {@code Options}.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 23 static
   */
  function onAccelerometerChange(callback: Callback<AccelerometerResponse>, options?: Options): void;

  /**
   * Subscribe to uncalibrated accelerometer sensor data, {@code SensorId.ACCELEROMETER_UNCALIBRATED}.
   *
   * @permission ohos.permission.ACCELEROMETER
   * @param { Callback<AccelerometerUncalibratedResponse> } callback - callback uncalibrated accelerometer data.
   * @param { Options } [options] - Optional parameters specifying the interval at which sensor data is reported,
   *     <br> {@code Options}.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 23 static
   */
  function onAccelerometerUncalibratedChange(callback: Callback<AccelerometerUncalibratedResponse>, options?: Options): void;

  /**
   * Subscribe to ambient light sensor data, {@code SensorId.AMBIENT_LIGHT}.
   *
   * @param { Callback<LightResponse> } callback - callback ambient light data.
   * @param { Options } [options] - Optional parameters specifying the interval at which sensor data is reported,
   *     <br> {@code Options}.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 23 static
   */
  function onAmbientLightChange(callback: Callback<LightResponse>, options?: Options): void;

  /**
   * Subscribe to ambient temperature sensor data, {@code SensorId.AMBIENT_TEMPERATURE}.
   *
   * @param { Callback<AmbientTemperatureResponse> } callback - callback ambient temperature data.
   * @param { Options } [options] - Optional parameters specifying the interval at which sensor data is reported,
   *     <br> {@code Options}.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 23 static
   */
  function onAmbientTemperatureChange(callback: Callback<AmbientTemperatureResponse>, options?: Options): void;

  /**
   * Subscribe to barometer sensor data, {@code SensorId.BAROMETER}.
   *
   * @param { Callback<BarometerResponse> } callback - callback barometer data.
   * @param { Options } [options] - Optional parameters specifying the interval at which sensor data is reported,
   *     <br> {@code Options}.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 23 static
   */
  function onBarometerChange(callback: Callback<BarometerResponse>, options?: Options): void;

  /**
   * Subscribe to gravity sensor data, {@code SensorId.GRAVITY}.
   *
   * @param { Callback<GravityResponse> } callback - callback gravity data.
   * @param { Options } [options] - Optional parameters specifying the interval at which sensor data is reported,
   *     <br> {@code Options}.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 23 static
   */
  function onGravityChange(callback: Callback<GravityResponse>, options?: Options): void;

  /**
   * Subscribe to gyroscope sensor data, {@code SensorId.GYROSCOPE}.
   *
   * @permission ohos.permission.GYROSCOPE
   * @param { Callback<GyroscopeResponse> } callback - callback gyroscope data.
   * @param { Options } [options] - Optional parameters specifying the interval at which sensor data is reported,
   *     <br> {@code Options}.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 23 static
   */
  function onGyroscopeChange(callback: Callback<GyroscopeResponse>, options?: Options): void;

  /**
   * Subscribe to uncalibrated gyroscope sensor data, {@code SensorId.GYROSCOPE_UNCALIBRATED}.
   *
   * @permission ohos.permission.GYROSCOPE
   * @param { Callback<GyroscopeUncalibratedResponse> } callback - callback uncalibrated gyroscope data.
   * @param { Options } [options] - Optional parameters specifying the interval at which sensor data is reported,
   *     <br> {@code Options}.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 23 static
   */
  function onGyroscopeUncalibratedChange(callback: Callback<GyroscopeUncalibratedResponse>, options?: Options): void;

  /**
   * Subscribe to hall sensor data, {@code SensorId.HALL}.
   *
   * @param { Callback<HallResponse> } callback - callback hall data.
   * @param { Options } [options] - Optional parameters specifying the interval at which sensor data is reported,
   *     <br> {@code Options}.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 23 static
   */
  function onHallChange(callback: Callback<HallResponse>, options?: Options): void;

  /**
   * Subscribe to heart rate sensor data, {@code SensorId.HEART_RATE}.
   *
   * @permission ohos.permission.READ_HEALTH_DATA
   * @param { Callback<HeartRateResponse> } callback - callback heart rate data.
   * @param { Options } [options] - Optional parameters specifying the interval at which sensor data is reported,
   *     <br> {@code Options}.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 23 static
   */
  function onHeartRateChange(callback: Callback<HeartRateResponse>, options?: Options): void;

  /**
   * Subscribe to humidity sensor data, {@code SensorId.HUMIDITY}.
   *
   * @param { Callback<HumidityResponse> } callback - callback humidity data.
   * @param { Options } [options] - Optional parameters specifying the interval at which sensor data is reported,
   *     <br> {@code Options}.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 23 static
   */
  function onHumidityChange(callback: Callback<HumidityResponse>, options?: Options): void;

  /**
   * Subscribe to linear acceleration sensor data, {@code SensorId.LINEAR_ACCELEROMETER}.
   *
   * @permission ohos.permission.ACCELEROMETER
   * @param { Callback<LinearAccelerometerResponse> } callback - callback linear accelerometer data.
   * @param { Options } [options] - Optional parameters specifying the interval at which sensor data is reported,
   *     <br> {@code Options}.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 23 static
   */
  function onLinearAccelerometerChange(callback: Callback<LinearAccelerometerResponse>, options?: Options): void;

  /**
   * Subscribe to magnetic field sensor data, {@code SensorId.MAGNETIC_FIELD}.
   *
   * @param { Callback<MagneticFieldResponse> } callback - callback magnetic field data.
   * @param { Options } [options] - Optional parameters specifying the interval at which sensor data is reported,
   *     <br> {@code Options}.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 23 static
   */
  function onMagneticFieldChange(callback: Callback<MagneticFieldResponse>, options?: Options): void;

  /**
   * Subscribe to uncalibrated magnetic field sensor data, {@code SensorId.MAGNETIC_FIELD_UNCALIBRATED}.
   *
   * @param { Callback<MagneticFieldUncalibratedResponse> } callback - callback uncalibrated magnetic field data.
   * @param { Options } [options] - Optional parameters specifying the interval at which sensor data is reported,
   *     <br> {@code Options}.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 23 static
   */
  function onMagneticFieldUncalibratedChange(callback: Callback<MagneticFieldUncalibratedResponse>, options?: Options): void;

  /**
   * Subscribe to pedometer sensor data, {@code SensorId.PEDOMETER}.
   *
   * @permission ohos.permission.ACTIVITY_MOTION
   * @param { Callback<PedometerResponse> } callback - callback pedometer data.
   * @param { Options } [options] - Optional parameters specifying the interval at which sensor data is reported,
   *     <br> {@code Options}.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 23 static
   */
  function onPedometerChange(callback: Callback<PedometerResponse>, options?: Options): void;

  /**
   * Subscribe to pedometer detection sensor data, {@code SensorId.PEDOMETER_DETECTION}.
   *
   * @permission ohos.permission.ACTIVITY_MOTION
   * @param { Callback<PedometerDetectionResponse> } callback - callback pedometer detection data.
   * @param { Options } [options] - Optional parameters specifying the interval at which sensor data is reported,
   *     <br> {@code Options}.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 23 static
   */
  function onPedometerDetectionChange(callback: Callback<PedometerDetectionResponse>, options?: Options): void;

  /**
   * Subscribe to proximity sensor data, {@code SensorId.PROXIMITY}.
   *
   * @param { Callback<ProximityResponse> } callback - callback proximity data.
   * @param { Options } [options] - Optional parameters specifying the interval at which sensor data is reported,
   *     <br> {@code Options}.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 23 static
   */
  function onProximityChange(callback: Callback<ProximityResponse>, options?: Options): void;

  /**
   * Subscribe to rotation vector sensor data, {@code SensorId.ROTATION_VECTOR}.
   *
   * @param { Callback<RotationVectorResponse> } callback - callback rotation vector data.
   * @param { Options } [options] - Optional parameters specifying the interval at which sensor data is reported,
   *     <br> {@code Options}.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 23 static
   */
  function onRotationVectorChange(callback: Callback<RotationVectorResponse>, options?: Options): void;

  /**
   * Subscribe to significant motion sensor data, {@code SensorId.SIGNIFICANT_MOTION}.
   *
   * @param { Callback<SignificantMotionResponse> } callback - callback significant motion data.
   * @param { Options } [options] - Optional parameters specifying the interval at which sensor data is reported,
   *     <br> {@code Options}.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 23 static
   */
  function onSignificantMotionChange(callback: Callback<SignificantMotionResponse>, options?: Options): void;

  /**
   * Subscribe to wear detection sensor data, {@code SensorId.WEAR_DETECTION}.
   *
   * @param { Callback<WearDetectionResponse> } callback - callback wear detection data.
   * @param { Options } [options] - Optional parameters specifying the interval at which sensor data is reported,
   *     <br> {@code Options}.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 23 static
   */
  function onWearDetectionChange(callback: Callback<WearDetectionResponse>, options?: Options): void;

  /**
   * Subscribe to fusion pressure sensor data, {@code SensorId.FUSION_PRESSURE}.
   *
   * @param { Callback<FusionPressureResponse> } callback - callback fusion pressure percent data.
   * @param { Options } [options] - Optional parameters specifying the interval at which sensor data is reported,
   *     <br> {@code Options}.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 23 static
   */
  function onFusionPressureChange(callback: Callback<FusionPressureResponse>, options?: Options): void;

  /**
   * Subscribe to orientation sensor data once, {@code SensorId.ORIENTATION}.
   *
   * @param { Callback<OrientationResponse> } callback - callback orientation data.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 23 static
   */
  function onceOrientationChange(callback: Callback<OrientationResponse>): void;

  /**
   * Subscribe to accelerometer sensor data once, {@code SensorId.ACCELEROMETER}.
   *
   * @permission ohos.permission.ACCELEROMETER
   * @param { Callback<AccelerometerResponse> } callback - callback accelerometer data.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 23 static
   */
  function onceAccelerometerChange(callback: Callback<AccelerometerResponse>): void;

  /**
   * Subscribe to uncalibrated accelerometer sensor data once, {@code SensorId.ACCELEROMETER_UNCALIBRATED}.
   *
   * @permission ohos.permission.ACCELEROMETER
   * @param { Callback<AccelerometerUncalibratedResponse> } callback - callback uncalibrated accelerometer data.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 23 static
   */
  function onceAccelerometerUncalibratedChange(callback: Callback<AccelerometerUncalibratedResponse>): void;

  /**
   * Subscribe to ambient light sensor data once, {@code SensorId.AMBIENT_LIGHT}.
   *
   * @param { Callback<LightResponse> } callback - callback ambient light data.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 23 static
   */
  function onceAmbientLightChange(callback: Callback<LightResponse>): void;

  /**
   * Subscribe to ambient temperature sensor data once, {@code SensorId.AMBIENT_TEMPERATURE}.
   *
   * @param { Callback<AmbientTemperatureResponse> } callback - callback ambient temperature data.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 23 static
   */
  function onceAmbientTemperatureChange(callback: Callback<AmbientTemperatureResponse>): void;

  /**
   * Subscribe to barometer sensor data once, {@code SensorId.BAROMETER}.
   *
   * @param { Callback<BarometerResponse> } callback - callback barometer data.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 23 static
   */
  function onceBarometerChange(callback: Callback<BarometerResponse>): void;

  /**
   * Subscribe to gravity sensor data once, {@code SensorId.GRAVITY}.
   *
   * @param { Callback<GravityResponse> } callback - callback gravity data.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 23 static
   */
  function onceGravityChange(callback: Callback<GravityResponse>): void;

  /**
   * Subscribe to gyroscope sensor data once, {@code SensorId.GYROSCOPE}.
   *
   * @permission ohos.permission.GYROSCOPE
   * @param { Callback<GyroscopeResponse> } callback - callback gyroscope data.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 23 static
   */
  function onceGyroscopeChange(callback: Callback<GyroscopeResponse>): void;

  /**
   * Subscribe to uncalibrated gyroscope sensor data once, {@code SensorId.GYROSCOPE_UNCALIBRATED}.
   *
   * @permission ohos.permission.GYROSCOPE
   * @param { Callback<GyroscopeUncalibratedResponse> } callback - callback uncalibrated gyroscope data.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 23 static
   */
  function onceGyroscopeUncalibratedChange(callback: Callback<GyroscopeUncalibratedResponse>): void;

  /**
   * Subscribe to hall sensor data once, {@code SensorId.HALL}.
   *
   * @param { Callback<HallResponse> } callback - callback hall data.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 23 static
   */
  function onceHallChange(callback: Callback<HallResponse>): void;

  /**
   * Subscribe to heart rate sensor data once, {@code SensorId.HEART_RATE}.
   *
   * @permission ohos.permission.READ_HEALTH_DATA
   * @param { Callback<HeartRateResponse> } callback - callback heart rate data.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 23 static
   */
  function onceHeartRateChange(callback: Callback<HeartRateResponse>): void;

  /**
   * Subscribe to humidity sensor data once, {@code SensorId.HUMIDITY}.
   *
   * @param { Callback<HumidityResponse> } callback - callback humidity data.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 23 static
   */
  function onceHumidityChange(callback: Callback<HumidityResponse>): void;

  /**
   * Subscribe to linear acceleration sensor data once, {@code SensorId.LINEAR_ACCELEROMETER}.
   *
   * @permission ohos.permission.ACCELEROMETER
   * @param { Callback<LinearAccelerometerResponse> } callback - callback linear accelerometer data.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 23 static
   */
  function onceLinearAccelerometerChange(callback: Callback<LinearAccelerometerResponse>): void;

  /**
   * Subscribe to magnetic field sensor data once, {@code SensorId.MAGNETIC_FIELD}.
   *
   * @param { Callback<MagneticFieldResponse> } callback - callback magnetic field data.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 23 static
   */
  function onceMagneticFieldChange(callback: Callback<MagneticFieldResponse>): void;

  /**
   * Subscribe to uncalibrated magnetic field sensor data once, {@code SensorId.MAGNETIC_FIELD_UNCALIBRATED}.
   *
   * @param { Callback<MagneticFieldUncalibratedResponse> } callback - callback uncalibrated magnetic field data.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 23 static
   */
  function onceMagneticFieldUncalibratedChange(callback: Callback<MagneticFieldUncalibratedResponse>): void;

  /**
   * Subscribe to pedometer sensor data once, {@code SensorId.PEDOMETER}.
   *
   * @permission ohos.permission.ACTIVITY_MOTION
   * @param { Callback<PedometerResponse> } callback - callback pedometer data.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 23 static
   */
  function oncePedometerChange(callback: Callback<PedometerResponse>): void;

  /**
   * Subscribe to pedometer detection sensor data once, {@code SensorId.PEDOMETER_DETECTION}.
   *
   * @permission ohos.permission.ACTIVITY_MOTION
   * @param { Callback<PedometerDetectionResponse> } callback - callback pedometer detection data.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 23 static
   */
  function oncePedometerDetectionChange(callback: Callback<PedometerDetectionResponse>): void;

  /**
   * Subscribe to proximity sensor data once, {@code SensorId.PROXIMITY}.
   *
   * @param { Callback<ProximityResponse> } callback - callback proximity data.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 23 static
   */
  function onceProximityChange(callback: Callback<ProximityResponse>): void;

  /**
   * Subscribe to rotation vector sensor data once, {@code SensorId.ROTATION_VECTOR}.
   *
   * @param { Callback<RotationVectorResponse> } callback - callback rotation vector data.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 23 static
   */
  function onceRotationVectorChange(callback: Callback<RotationVectorResponse>): void;

  /**
   * Subscribe to significant motion sensor data once, {@code SensorId.SIGNIFICANT_MOTION}.
   *
   * @param { Callback<SignificantMotionResponse> } callback - callback significant motion data.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 23 static
   */
  function onceSignificantMotionChange(callback: Callback<SignificantMotionResponse>): void;

  /**
   * Subscribe to wear detection sensor data once, {@code SensorId.WEAR_DETECTION}.
   *
   * @param { Callback<WearDetectionResponse> } callback - callback wear detection data.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 23 static
   */
  function onceWearDetectionChange(callback: Callback<WearDetectionResponse>): void;

  /**
   * Unsubscribe to orientation sensor data, {@code SensorId.ORIENTATION}.
   *
   * @param { SensorInfoParam } [sensorInfoParam] - Parameters of sensor on the device.
   * @param { Callback<OrientationResponse> } [callback] - callback orientation data.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 23 static
   */
  function offOrientationChange(sensorInfoParam?: SensorInfoParam, callback?: Callback<OrientationResponse>): void;

  /**
   * Unsubscribe to color sensor data, {@code SensorId.COLOR}.
   *
   * @param { SensorInfoParam } [sensorInfoParam] - Parameters of sensor on the device.
   * @param { Callback<ColorResponse> } [callback] - callback color data.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 202 - Permission check failed. A non-system application uses the system API.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @systemapi
   * @since 23 static
   */
  function offColorChange(sensorInfoParam?: SensorInfoParam, callback?: Callback<ColorResponse>): void;

  /**
   * Unsubscribe to sar sensor data, {@code SensorId.SAR}.
   *
   * @param { SensorInfoParam } [sensorInfoParam] - Parameters of sensor on the device.
   * @param { Callback<SarResponse> } [callback] - callback sar data.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 202 - Permission check failed. A non-system application uses the system API.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @systemapi
   * @since 23 static
   */
  function offSarChange(sensorInfoParam?: SensorInfoParam, callback?: Callback<SarResponse>): void;

  /**
   * Unsubscribe to accelerometer sensor data, {@code SensorId.ACCELEROMETER}.
   *
   * @permission ohos.permission.ACCELEROMETER
   * @param { SensorInfoParam } [sensorInfoParam] - Parameters of sensor on the device.
   * @param { Callback<AccelerometerResponse> } [callback] - callback accelerometer data.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 23 static
   */
  function offAccelerometerChange(sensorInfoParam?: SensorInfoParam, callback?: Callback<AccelerometerResponse>): void;

  /**
   * Unsubscribe to uncalibrated accelerometer sensor data, {@code SensorId.ACCELEROMETER_UNCALIBRATED}.
   *
   * @permission ohos.permission.ACCELEROMETER
   * @param { SensorInfoParam } [sensorInfoParam] - Parameters of sensor on the device.
   * @param { Callback<AccelerometerUncalibratedResponse> } [callback] - callback uncalibrated accelerometer data.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 23 static
   */
  function offAccelerometerUncalibratedChange(sensorInfoParam?: SensorInfoParam, callback?: Callback<AccelerometerUncalibratedResponse>): void;

  /**
   * Unsubscribe to ambient light sensor data, {@code SensorId.AMBIENT_LIGHT}.
   *
   * @param { SensorInfoParam } [sensorInfoParam] - Parameters of sensor on the device.
   * @param { Callback<LightResponse> } [callback] - callback ambient light data.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 23 static
   */
  function offAmbientLightChange(sensorInfoParam?: SensorInfoParam, callback?: Callback<LightResponse>): void;

  /**
   * Unsubscribe to ambient temperature sensor data£¬ {@code SensorId.AMBIENT_TEMPERATURE}.
   *
   * @param { SensorInfoParam } [sensorInfoParam] - Parameters of sensor on the device.
   * @param { Callback<AmbientTemperatureResponse> } [callback] - callback ambient temperature data.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 23 static
   */
  function offAmbientTemperatureChange(sensorInfoParam?: SensorInfoParam, callback?: Callback<AmbientTemperatureResponse>): void;

  /**
   * Unsubscribe to barometer sensor data, {@code SensorId.BAROMETER}.
   *
   * @param { SensorInfoParam } [sensorInfoParam] - Parameters of sensor on the device.
   * @param { Callback<BarometerResponse> } [callback] - callback barometer data.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 23 static
   */
  function offBarometerChange(sensorInfoParam?: SensorInfoParam, callback?: Callback<BarometerResponse>): void;

  /**
   * Unsubscribe to gravity sensor data, {@code SensorId.GRAVITY}.
   *
   * @param { SensorInfoParam } [sensorInfoParam] - Parameters of sensor on the device.
   * @param { Callback<GravityResponse> } [callback] - callback gravity data.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 23 static
   */
  function offGravityChange(sensorInfoParam?: SensorInfoParam, callback?: Callback<GravityResponse>): void;

  /**
   * Unsubscribe to gyroscope sensor data, {@code SensorId.GYROSCOPE}.
   *
   * @permission ohos.permission.GYROSCOPE
   * @param { SensorInfoParam } [sensorInfoParam] - Parameters of sensor on the device.
   * @param { Callback<GyroscopeResponse> } [callback] - callback gyroscope data.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 23 static
   */
  function offGyroscopeChange(sensorInfoParam?: SensorInfoParam, callback?: Callback<GyroscopeResponse>): void;

  /**
   * Unsubscribe to uncalibrated gyroscope sensor data, {@code SensorId.GYROSCOPE_UNCALIBRATED}.
   *
   * @permission ohos.permission.GYROSCOPE
   * @param { SensorInfoParam } [sensorInfoParam] - Parameters of sensor on the device.
   * @param { Callback<GyroscopeUncalibratedResponse> } [callback] - callback uncalibrated gyroscope data.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 23 static
   */
  function offGyroscopeUncalibratedChange(sensorInfoParam?: SensorInfoParam, callback?: Callback<GyroscopeUncalibratedResponse>): void;

  /**
   * Unsubscribe to hall sensor data, {@code SensorId.HALL}.
   *
   * @param { SensorInfoParam } [sensorInfoParam] - Parameters of sensor on the device.
   * @param { Callback<HallResponse> } [callback] - callback hall data.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 23 static
   */
  function offHallChange(sensorInfoParam?: SensorInfoParam, callback?: Callback<HallResponse>): void;

  /**
   * Unsubscribe to heart rate sensor data, {@code SensorId.HEART_RATE}.
   *
   * @permission ohos.permission.READ_HEALTH_DATA
   * @param { SensorInfoParam } [sensorInfoParam] - Parameters of sensor on the device.
   * @param { Callback<HeartRateResponse> } [callback] - callback heart rate data.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 23 static
   */
  function offHeartRateChange(sensorInfoParam?: SensorInfoParam, callback?: Callback<HeartRateResponse>): void;

  /**
   * Unsubscribe to humidity sensor data, {@code SensorId.HUMIDITY}.
   *
   * @param { SensorInfoParam } [sensorInfoParam] - Parameters of sensor on the device.
   * @param { Callback<HumidityResponse> } [callback] - callback humidity data.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 23 static
   */
  function offHumidityChange(sensorInfoParam?: SensorInfoParam, callback?: Callback<HumidityResponse>): void;

  /**
   * Unsubscribe to linear acceleration sensor data, {@code SensorId.LINEAR_ACCELEROMETER}.
   *
   * @permission ohos.permission.ACCELEROMETER
   * @param { SensorInfoParam } [sensorInfoParam] - Parameters of sensor on the device.
   * @param { Callback<LinearAccelerometerResponse> } [callback] - callback linear accelerometer data.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 23 static
   */
  function offLinearAccelerometerChange(sensorInfoParam?: SensorInfoParam, callback?: Callback<LinearAccelerometerResponse>): void;

  /**
   * Unsubscribe to magnetic field sensor data, {@code SensorId.MAGNETIC_FIELD}.
   *
   * @param { SensorInfoParam } [sensorInfoParam] - Parameters of sensor on the device.
   * @param { Callback<MagneticFieldResponse> } [callback] - callback magnetic field data.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 23 static
   */
  function offMagneticFieldChange(sensorInfoParam?: SensorInfoParam, callback?: Callback<MagneticFieldResponse>): void;

  /**
   * Unsubscribe to uncalibrated magnetic field sensor data, {@code SensorId.MAGNETIC_FIELD_UNCALIBRATED}.
   *
   * @param { SensorInfoParam } [sensorInfoParam] - Parameters of sensor on the device.
   * @param { Callback<MagneticFieldUncalibratedResponse> } [callback] - callback uncalibrated magnetic field data.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 23 static
   */
  function offMagneticFieldUncalibratedChange(sensorInfoParam?: SensorInfoParam, callback?: Callback<MagneticFieldUncalibratedResponse>): void;

  /**
   * Unsubscribe to pedometer sensor data, {@code SensorId.PEDOMETER}.
   *
   * @permission ohos.permission.ACTIVITY_MOTION
   * @param { SensorInfoParam } [sensorInfoParam] - Parameters of sensor on the device.
   * @param { Callback<PedometerResponse> } [callback] - callback pedometer data.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 23 static
   */
  function offPedometerChange(sensorInfoParam?: SensorInfoParam, callback?: Callback<PedometerResponse>): void;

  /**
   * Unsubscribe to pedometer detection sensor data, {@code SensorId.PEDOMETER_DETECTION}.
   *
   * @permission ohos.permission.ACTIVITY_MOTION
   * @param { SensorInfoParam } [sensorInfoParam] - Parameters of sensor on the device.
   * @param { Callback<PedometerDetectionResponse> } [callback] - callback pedometer detection data.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 23 static
   */
  function offPedometerDetectionChange(sensorInfoParam?: SensorInfoParam, callback?: Callback<PedometerDetectionResponse>): void;

  /**
   * Unsubscribe to proximity sensor data, {@code SensorId.PROXIMITY}.
   *
   * @param { SensorInfoParam } [sensorInfoParam] - Parameters of sensor on the device.
   * @param { Callback<ProximityResponse> } [callback] - callback proximity data.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 23 static
   */
  function offProximityChange(sensorInfoParam?: SensorInfoParam, callback?: Callback<ProximityResponse>): void;

  /**
   * Unsubscribe to rotation vector sensor data, {@code SensorId.ROTATION_VECTOR}.
   *
   * @param { SensorInfoParam } [sensorInfoParam] - Parameters of sensor on the device.
   * @param { Callback<RotationVectorResponse> } [callback] - callback rotation vector data.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 23 static
   */
  function offRotationVectorChange(sensorInfoParam?: SensorInfoParam, callback?: Callback<RotationVectorResponse>): void;

  /**
   * Unsubscribe to significant motion sensor data, {@code SensorId.SIGNIFICANT_MOTION}.
   *
   * @param { SensorInfoParam } [sensorInfoParam] - Parameters of sensor on the device.
   * @param { Callback<SignificantMotionResponse> } [callback] - callback significant motion data.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 23 static
   */
  function offSignificantMotionChange(sensorInfoParam?: SensorInfoParam, callback?: Callback<SignificantMotionResponse>): void;

  /**
   * Unsubscribe to wear detection sensor data, {@code SensorId.WEAR_DETECTION}.
   *
   * @param { SensorInfoParam } [sensorInfoParam] - Parameters of sensor on the device.
   * @param { Callback<WearDetectionResponse> } [callback] - callback wear detection data.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 23 static
   */
  function offWearDetectionChange(sensorInfoParam?: SensorInfoParam, callback?: Callback<WearDetectionResponse>): void;

  /**
   * Unsubscribe to fusion pressure sensor data, {@code SensorId.FUSION_PRESSURE}.
   *
   * @param { SensorInfoParam } [sensorInfoParam] - Parameters of sensor on the device.
   * @param { Callback<FusionPressureResponse> } [callback] - callback fusion pressure percent data.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 23 static
   */
  function offFusionPressureChange(sensorInfoParam?: SensorInfoParam, callback?: Callback<FusionPressureResponse>): void;

  /**
   * Subscribes to data of the color sensor.
   *
   * @param { SensorId.COLOR } type - Sensor type. The value is fixed at **SensorId.COLOR**.
   * @param { Callback<ColorResponse> } callback - Callback used to report the sensor data, which is a **ColorResponse**
   *     object.
   * @param { Options } [options] - List of optional parameters. This parameter is used to set the data reporting
   *     frequency. The default value is 200,000,000 ns.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @throws { BusinessError } 202 - Permission check failed. A non-system application uses the system API. [since 11]
   * @syscap SystemCapability.Sensors.Sensor
   * @systemapi
   * @since 10 dynamic
   */
  function on(type: SensorId.COLOR, callback: Callback<ColorResponse>, options?: Options): void;

  /**
   * Subscribes to data of the Sodium Adsorption Ratio (SAR) sensor.
   *
   * @param { SensorId.SAR } type - Sensor type. The value is fixed at **SensorId.SAR**.
   * @param { Callback<SarResponse> } callback - Callback used to report the sensor data, which is a **SarResponse**
   *     object.
   * @param { Options } [options] - List of optional parameters. This parameter is used to set the data reporting
   *     frequency. The default value is 200,000,000 ns.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @throws { BusinessError } 202 - Permission check failed. A non-system application uses the system API. [since 11]
   * @syscap SystemCapability.Sensors.Sensor
   * @systemapi
   * @since 10 dynamic
   */
  function on(type: SensorId.SAR, callback: Callback<SarResponse>, options?: Options): void;

  /**
   * Subscribes to data of the acceleration sensor.
   *
   * @permission ohos.permission.ACCELEROMETER
   * @param { SensorId.ACCELEROMETER } type - Sensor type. The value is fixed at **SensorId.ACCELEROMETER**.
   * @param { Callback<AccelerometerResponse> } callback - Callback used to report the sensor data, which is an
   *     **AccelerometerResponse** object.
   * @param { Options } [options] - List of optional parameters. This parameter is used to set the data reporting
   *     frequency. The default value is 200,000,000 ns.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  function on(type: SensorId.ACCELEROMETER, callback: Callback<AccelerometerResponse>,
    options?: Options): void;

  /**
   * Subscribes to data of the uncalibrated acceleration sensor.
   *
   * @permission ohos.permission.ACCELEROMETER
   * @param { SensorId.ACCELEROMETER_UNCALIBRATED } type - Sensor type. The value is fixed at
   *     **SensorId.ACCELEROMETER_UNCALIBRATED**.
   * @param { Callback<AccelerometerUncalibratedResponse> } callback - Callback used to report the sensor data, which is
   *     an **AccelerometerUncalibratedResponse** object.
   * @param { Options } [options] - List of optional parameters. This parameter is used to set the data reporting
   *     frequency. The default value is 200,000,000 ns.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   */
  function on(type: SensorId.ACCELEROMETER_UNCALIBRATED, callback: Callback<AccelerometerUncalibratedResponse>,
    options?: Options): void;

  /**
   * Subscribes to data of the ambient light sensor.
   *
   * @param { SensorId.AMBIENT_LIGHT } type - Sensor type. The value is fixed at **SensorId.AMBIENT_LIGHT**.
   * @param { Callback<LightResponse> } callback - Callback used to report the sensor data, which is a **LightResponse**
   *     object.
   * @param { Options } [options] - List of optional parameters. This parameter is used to set the data reporting
   *     frequency. The default value is 200,000,000 ns.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   */
  function on(type: SensorId.AMBIENT_LIGHT, callback: Callback<LightResponse>, options?: Options): void;

  /**
   * Subscribes to data of the ambient temperature sensor.
   *
   * @param { SensorId.AMBIENT_TEMPERATURE } type - Sensor type. The value is fixed at **SensorId.AMBIENT_TEMPERATURE**.
   * @param { Callback<AmbientTemperatureResponse> } callback - Callback used to report the sensor data, which is an
   *     **AmbientTemperatureResponse** object.
   * @param { Options } [options] - List of optional parameters. This parameter is used to set the data reporting
   *     frequency. The default value is 200,000,000 ns.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   */
  function on(type: SensorId.AMBIENT_TEMPERATURE, callback: Callback<AmbientTemperatureResponse>,
    options?: Options): void;

  /**
   * Subscribes to data of the barometer sensor.
   *
   * @param { SensorId.BAROMETER } type - Sensor type. The value is fixed at **SensorId.BAROMETER**.
   * @param { Callback<BarometerResponse> } callback - Callback used to report the sensor data, which is a
   *     **BarometerResponse** object.
   * @param { Options } [options] - List of optional parameters. This parameter is used to set the data reporting
   *     frequency. The default value is 200,000,000 ns.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   */
  function on(type: SensorId.BAROMETER, callback: Callback<BarometerResponse>, options?: Options): void;

  /**
   * Subscribes to data of the gravity sensor.
   *
   * @param { SensorId.GRAVITY } type - Sensor type. The value is fixed at **SensorId.GRAVITY**.
   * @param { Callback<GravityResponse> } callback - Callback used to report the sensor data, which is a
   *     **GravityResponse** object.
   * @param { Options } [options] - List of optional parameters. This parameter is used to set the data reporting
   *     frequency. The default value is 200,000,000 ns.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   */
  function on(type: SensorId.GRAVITY, callback: Callback<GravityResponse>,
    options?: Options): void;

  /**
   * Subscribes to data of the gyroscope sensor.
   *
   * @permission ohos.permission.GYROSCOPE
   * @param { SensorId.GYROSCOPE } type - Sensor type. The value is fixed at **SensorId.GYROSCOPE**.
   * @param { Callback<GyroscopeResponse> } callback - Callback used to report the sensor data, which is a
   *     **GyroscopeResponse** object.
   * @param { Options } [options] - List of optional parameters. This parameter is used to set the data reporting
   *     frequency. The default value is 200,000,000 ns.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  function on(type: SensorId.GYROSCOPE, callback: Callback<GyroscopeResponse>,
    options?: Options): void;

  /**
   * Subscribes to data of the uncalibrated gyroscope sensor.
   *
   * @permission ohos.permission.GYROSCOPE
   * @param { SensorId.GYROSCOPE_UNCALIBRATED } type - Sensor type. The value is fixed at
   *     **SensorId.GYROSCOPE_UNCALIBRATED**.
   * @param { Callback<GyroscopeUncalibratedResponse> } callback - Callback used to report the sensor data, which is a
   *     **GyroscopeUncalibratedResponse** object.
   * @param { Options } [options] - List of optional parameters. This parameter is used to set the data reporting
   *     frequency. The default value is 200,000,000 ns.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   */
  function on(type: SensorId.GYROSCOPE_UNCALIBRATED, callback: Callback<GyroscopeUncalibratedResponse>,
    options?: Options): void;

  /**
   * Subscribes to data of the Hall effect sensor.
   *
   * @param { SensorId.HALL } type - Sensor type. The value is fixed at **SensorId.HALL**.
   * @param { Callback<HallResponse> } callback - Callback used to report the sensor data, which is a **HallResponse**
   *     object.
   * @param { Options } [options] - List of optional parameters. The default value is 200,000,000 ns. This parameter is
   *     used to set the data reporting frequency when Hall effect events are frequently triggered.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   */
  function on(type: SensorId.HALL, callback: Callback<HallResponse>, options?: Options): void;

  /**
   * Subscribes to data of the heart rate sensor.
   *
   * @permission ohos.permission.READ_HEALTH_DATA
   * @param { SensorId.HEART_RATE } type - Sensor type. The value is fixed at **SensorId.HEART_RATE**.
   * @param { Callback<HeartRateResponse> } callback - Callback used to report the sensor data, which is a
   *     **HeartRateResponse** object.
   * @param { Options } [options] - List of optional parameters. This parameter is used to set the data reporting
   *     frequency. The default value is 200,000,000 ns.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   */
  function on(type: SensorId.HEART_RATE, callback: Callback<HeartRateResponse>,
    options?: Options): void;

  /**
   * Subscribes to data of the humidity sensor.
   *
   * @param { SensorId.HUMIDITY } type - Sensor type. The value is fixed at **SensorId.HUMIDITY**.
   * @param { Callback<HumidityResponse> } callback - Callback used to report the sensor data, which is a
   *     **HumidityResponse** object.
   * @param { Options } [options] - List of optional parameters. This parameter is used to set the data reporting
   *     frequency. The default value is 200,000,000 ns.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   */
  function on(type: SensorId.HUMIDITY, callback: Callback<HumidityResponse>,
    options?: Options): void;

  /**
   * Subscribes to data of the linear acceleration sensor.
   *
   * @permission ohos.permission.ACCELEROMETER
   * @param { SensorId.LINEAR_ACCELEROMETER } type - Sensor type. The value is fixed at
   *     **SensorId.LINEAR_ACCELEROMETER**.
   * @param { Callback<LinearAccelerometerResponse> } callback - Callback used to report the sensor data, which is a
   *     **LinearAccelerometerResponse** object.
   * @param { Options } [options] - List of optional parameters. This parameter is used to set the data reporting
   *     frequency. The default value is 200,000,000 ns.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   */
  function on(type: SensorId.LINEAR_ACCELEROMETER, callback: Callback<LinearAccelerometerResponse>,
    options?: Options): void;

  /**
   * Subscribes to data of the magnetic field sensor.
   *
   * @param { SensorId.MAGNETIC_FIELD } type - Sensor type. The value is fixed at **SensorId.MAGNETIC_FIELD**.
   * @param { Callback<MagneticFieldResponse> } callback - Callback used to report the sensor data, which is a
   *     **MagneticFieldResponse** object.
   * @param { Options } [options] - List of optional parameters. This parameter is used to set the data reporting
   *     frequency. The default value is 200,000,000 ns.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   */
  function on(type: SensorId.MAGNETIC_FIELD, callback: Callback<MagneticFieldResponse>,
    options?: Options): void;

  /**
   * Subscribes to data of the uncalibrated magnetic field sensor.
   *
   * @param { SensorId.MAGNETIC_FIELD_UNCALIBRATED } type - Sensor type. The value is fixed at
   *     **SensorId.MAGNETIC_FIELD_UNCALIBRATED**.
   * @param { Callback<MagneticFieldUncalibratedResponse> } callback - Callback used to report the sensor data, which is
   *     a **MagneticFieldUncalibratedResponse** object.
   * @param { Options } [options] - List of optional parameters. This parameter is used to set the data reporting
   *     frequency. The default value is 200,000,000 ns.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   */
  function on(type: SensorId.MAGNETIC_FIELD_UNCALIBRATED, callback: Callback<MagneticFieldUncalibratedResponse>,
    options?: Options): void;

  /**
   * Subscribes to data of the orientation sensor.
   *
   * > **NOTE**
   * >
   * > Applications or services invoking this API can prompt users to use figure-8 calibration to improve the accuracy
   * > of the direction sensor. The sensor has a theoretical error of ¡À5 degrees, but the specific precision may vary
   * > depending on different driver implementations and algorithmic designs.
   *
   * @param { SensorId.ORIENTATION } type - Sensor type. The value is fixed at **SensorId.ORIENTATION**.
   * @param { Callback<OrientationResponse> } callback - Callback used to report the sensor data, which is a
   *     **OrientationResponse** object.
   * @param { Options } [options] - List of optional parameters. This parameter is used to set the data reporting
   *     frequency. The default value is 200,000,000 ns.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  function on(type: SensorId.ORIENTATION, callback: Callback<OrientationResponse>,
    options?: Options): void;

  /**
   * Subscribes to data of the pedometer sensor. The step counter sensor's data reporting is subject to some delay, and
   * the delay is determined by specific product implementations.
   *
   * @permission ohos.permission.ACTIVITY_MOTION
   * @param { SensorId.PEDOMETER } type - Sensor type. The value is fixed at **SensorId.PEDOMETER**.
   * @param { Callback<PedometerResponse> } callback - Callback used to report the sensor data, which is a
   *     **PedometerResponse** object.
   * @param { Options } [options] - List of optional parameters. This parameter is used to set the data reporting
   *     frequency. The default value is 200,000,000 ns.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   */
  function on(type: SensorId.PEDOMETER, callback: Callback<PedometerResponse>, options?: Options): void;

  /**
   * Subscribes to data of the pedometer detection sensor.
   *
   * @permission ohos.permission.ACTIVITY_MOTION
   * @param { SensorId.PEDOMETER_DETECTION } type - Sensor type. The value is fixed at **SensorId.PEDOMETER_DETECTION**.
   * @param { Callback<PedometerDetectionResponse> } callback - Callback used to report the sensor data, which is a
   *     **PedometerDetectionResponse** object.
   * @param { Options } [options] - List of optional parameters. This parameter is used to set the data reporting
   *     frequency. The default value is 200,000,000 ns.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   */
  function on(type: SensorId.PEDOMETER_DETECTION, callback: Callback<PedometerDetectionResponse>,
    options?: Options): void;

  /**
   * Subscribes to data of the proximity sensor.
   *
   * @param { SensorId.PROXIMITY } type - Sensor type. The value is fixed at **SensorId.PROXIMITY**.
   * @param { Callback<ProximityResponse> } callback - Callback used to report the sensor data, which is a
   *     **ProximityResponse** object.
   * @param { Options } [options] - List of optional parameters. The default value is 200,000,000 ns. This parameter is
   *     used to set the data reporting frequency when proximity sensor events are frequently triggered.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   */
  function on(type: SensorId.PROXIMITY, callback: Callback<ProximityResponse>, options?: Options): void;

  /**
   * Subscribes to data of the rotation vector sensor.
   *
   * @param { SensorId.ROTATION_VECTOR } type - Sensor type. The value is fixed at **SensorId.ROTATION_VECTOR**.
   * @param { Callback<RotationVectorResponse> } callback - Callback used to report the sensor data, which is a
   *     **RotationVectorResponse** object.
   * @param { Options } [options] - List of optional parameters. This parameter is used to set the data reporting
   *     frequency. The default value is 200,000,000 ns.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   */
  function on(type: SensorId.ROTATION_VECTOR, callback: Callback<RotationVectorResponse>,
    options?: Options): void;

  /**
   * Subscribes to the significant motion sensor data.
   *
   * @param { SensorId.SIGNIFICANT_MOTION } type - Sensor type. The value is fixed at **SensorId.SIGNIFICANT_MOTION**.
   * @param { Callback<SignificantMotionResponse> } callback - Callback used to report the sensor data, which is a
   *     **SignificantMotionResponse** object.
   * @param { Options } [options] - List of optional parameters. This parameter is used to set the data reporting
   *     frequency. The default value is 200,000,000 ns.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   */
  function on(type: SensorId.SIGNIFICANT_MOTION, callback: Callback<SignificantMotionResponse>,
    options?: Options): void;

  /**
   * Subscribes to data of the wear detection sensor.
   *
   * @param { SensorId.WEAR_DETECTION } type - Sensor type. The value is fixed at **SensorId.WEAR_DETECTION**.
   * @param { Callback<WearDetectionResponse> } callback - Callback used to report the sensor data, which is a
   *     **WearDetectionResponse** object.
   * @param { Options } [options] - List of optional parameters. This parameter is used to set the data reporting
   *     frequency. The default value is 200,000,000 ns.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   */
  function on(type: SensorId.WEAR_DETECTION, callback: Callback<WearDetectionResponse>,
    options?: Options): void;

  /**
   * Subscribes to the fused pressure sensor data.
   *
   * @param { SensorId.FUSION_PRESSURE } type - Sensor type. The value is fixed at SensorId.FUSION_PRESSURE.
   * @param { Callback<FusionPressureResponse> } callback - Callback used to report the sensor data, which is a
   *     **FusionPressureResponse** object.
   * @param { Options } [options] - List of optional parameters. This parameter is used to set the data reporting
   *     frequency. The default value is 200,000,000 ns.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 22 dynamic
   */
  function on(type: SensorId.FUSION_PRESSURE, callback: Callback<FusionPressureResponse>,
    options?: Options): void;

  /**
   * Obtains data of the acceleration sensor once.
   *
   * @permission ohos.permission.ACCELEROMETER
   * @param { SensorId.ACCELEROMETER } type - Sensor type. The value is fixed at **SensorId.ACCELEROMETER**.
   * @param { Callback<AccelerometerResponse> } callback - Callback used to report the sensor data, which is an
   *     **AccelerometerResponse** object.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   */
  function once(type: SensorId.ACCELEROMETER, callback: Callback<AccelerometerResponse>): void;

  /**
   * Obtains data of the uncalibrated acceleration sensor once.
   *
   * @permission ohos.permission.ACCELEROMETER
   * @param { SensorId.ACCELEROMETER_UNCALIBRATED } type - Sensor type. The value is fixed at
   *     **SensorId.ACCELEROMETER_UNCALIBRATED**.
   * @param { Callback<AccelerometerUncalibratedResponse> } callback - Callback used to report the sensor data, which is
   *     an **AccelerometerUncalibratedResponse** object.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   */
  function once(type: SensorId.ACCELEROMETER_UNCALIBRATED, callback: Callback<AccelerometerUncalibratedResponse>): void;

  /**
   * Obtains data of the ambient light sensor once.
   *
   * @param { SensorId.AMBIENT_LIGHT } type - Sensor type. The value is fixed at **SensorId.AMBIENT_LIGHT**.
   * @param { Callback<LightResponse> } callback - Callback used to report the sensor data, which is a **LightResponse**
   *     object.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   */
  function once(type: SensorId.AMBIENT_LIGHT, callback: Callback<LightResponse>): void;

  /**
   * Obtains data of the temperature sensor once.
   *
   * @param { SensorId.AMBIENT_TEMPERATURE } type - Sensor type. The value is fixed at **SensorId.AMBIENT_TEMPERATURE**.
   * @param { Callback<AmbientTemperatureResponse> } callback - Callback used to report the sensor data, which is an
   *     **AmbientTemperatureResponse** object.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   */
  function once(type: SensorId.AMBIENT_TEMPERATURE, callback: Callback<AmbientTemperatureResponse>): void;

  /**
   * Obtains data of the barometer sensor once.
   *
   * @param { SensorId.BAROMETER } type - Sensor type. The value is fixed at **SensorId.BAROMETER**.
   * @param { Callback<BarometerResponse> } callback - Callback used to report the sensor data, which is a
   *     **BarometerResponse** object.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   */
  function once(type: SensorId.BAROMETER, callback: Callback<BarometerResponse>): void;

  /**
   * Obtains data of the gravity sensor once.
   *
   * @param { SensorId.GRAVITY } type - Sensor type. The value is fixed at **SensorId.GRAVITY**.
   * @param { Callback<GravityResponse> } callback - Callback used to report the sensor data, which is a
   *     **GravityResponse** object.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   */
  function once(type: SensorId.GRAVITY, callback: Callback<GravityResponse>): void;

  /**
   * Obtains data of the gyroscope sensor once.
   *
   * @permission ohos.permission.GYROSCOPE
   * @param { SensorId.GYROSCOPE } type - Sensor type. The value is fixed at **SensorId.GYROSCOPE**.
   * @param { Callback<GyroscopeResponse> } callback - Callback used to report the sensor data, which is a
   *     **GyroscopeResponse** object.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   */
  function once(type: SensorId.GYROSCOPE, callback: Callback<GyroscopeResponse>): void;

  /**
   * Obtains data of the uncalibrated gyroscope sensor once.
   *
   * @permission ohos.permission.GYROSCOPE
   * @param { SensorId.GYROSCOPE_UNCALIBRATED } type - Sensor type. The value is fixed at
   *     **SensorId.GYROSCOPE_UNCALIBRATED**.
   * @param { Callback<GyroscopeUncalibratedResponse> } callback - Callback used to report the sensor data, which is a
   *     **GyroscopeUncalibratedResponse** object.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   */
  function once(type: SensorId.GYROSCOPE_UNCALIBRATED, callback: Callback<GyroscopeUncalibratedResponse>): void;

  /**
   * Obtains data of the Hall effect sensor once.
   *
   * @param { SensorId.HALL } type - Sensor type. The value is fixed at **SensorId.HALL**.
   * @param { Callback<HallResponse> } callback - Callback used to report the sensor data, which is a **HallResponse**
   *     object.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   */
  function once(type: SensorId.HALL, callback: Callback<HallResponse>): void;

  /**
   * Obtains data of the heart rate sensor once.
   *
   * @permission ohos.permission.READ_HEALTH_DATA
   * @param { SensorId.HEART_RATE } type - Sensor type. The value is fixed at **SensorId.HEART_RATE**.
   * @param { Callback<HeartRateResponse> } callback - Callback used to report the sensor data, which is a
   *     **HeartRateResponse** object.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   */
  function once(type: SensorId.HEART_RATE, callback: Callback<HeartRateResponse>): void;

  /**
   * Obtains data of the humidity sensor once.
   *
   * @param { SensorId.HUMIDITY } type - Sensor type. The value is fixed at **SensorId.HUMIDITY**.
   * @param { Callback<HumidityResponse> } callback - Callback used to report the sensor data, which is a
   *     **HumidityResponse** object.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   */
  function once(type: SensorId.HUMIDITY, callback: Callback<HumidityResponse>): void;

  /**
   * Obtains data of the linear acceleration sensor once.
   *
   * @permission ohos.permission.ACCELEROMETER
   * @param { SensorId.LINEAR_ACCELEROMETER } type - Sensor type. The value is fixed at
   *     **SensorId.LINEAR_ACCELEROMETER**.
   * @param { Callback<LinearAccelerometerResponse> } callback - Callback used to report the sensor data, which is a
   *     **LinearAccelerometerResponse** object.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   */
  function once(type: SensorId.LINEAR_ACCELEROMETER, callback: Callback<LinearAccelerometerResponse>): void;

  /**
   * Obtains data of the magnetic field sensor once.
   *
   * @param { SensorId.MAGNETIC_FIELD } type - Sensor type. The value is fixed at **SensorId.MAGNETIC_FIELD**.
   * @param { Callback<MagneticFieldResponse> } callback - Callback used to report the sensor data, which is a
   *     **MagneticFieldResponse** object.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   */
  function once(type: SensorId.MAGNETIC_FIELD, callback: Callback<MagneticFieldResponse>): void;

  /**
   * Obtains data of the uncalibrated magnetic field sensor once.
   *
   * @param { SensorId.MAGNETIC_FIELD_UNCALIBRATED } type - Sensor type. The value is fixed at
   *     **SensorId.MAGNETIC_FIELD_UNCALIBRATED**.
   * @param { Callback<MagneticFieldUncalibratedResponse> } callback - Callback used to report the sensor data, which is
   *     a **MagneticFieldUncalibratedResponse** object.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   */
  function once(type: SensorId.MAGNETIC_FIELD_UNCALIBRATED, callback: Callback<MagneticFieldUncalibratedResponse>): void;

  /**
   * Obtains data of the orientation sensor once.
   *
   * @param { SensorId.ORIENTATION } type - Sensor type. The value is fixed at **SensorId.ORIENTATION**.
   * @param { Callback<OrientationResponse> } callback - Callback used to report the sensor data, which is a
   *     **OrientationResponse** object.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   */
  function once(type: SensorId.ORIENTATION, callback: Callback<OrientationResponse>): void;

  /**
   * Obtains data of the pedometer sensor once. The step counter sensor's data reporting is subject to some delay, and
   * the delay is determined by specific product implementations.
   *
   * @permission ohos.permission.ACTIVITY_MOTION
   * @param { SensorId.PEDOMETER } type - Sensor type. The value is fixed at **SensorId.PEDOMETER**.
   * @param { Callback<PedometerResponse> } callback - Callback used to report the sensor data, which is a
   *     **PedometerResponse** object.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   */
  function once(type: SensorId.PEDOMETER, callback: Callback<PedometerResponse>): void;

  /**
   * Obtains data of the pedometer sensor once.
   *
   * @permission ohos.permission.ACTIVITY_MOTION
   * @param { SensorId.PEDOMETER_DETECTION } type - Sensor type. The value is fixed at **SensorId.PEDOMETER_DETECTION**.
   * @param { Callback<PedometerDetectionResponse> } callback - Callback used to report the sensor data, which is a
   *     **PedometerDetectionResponse** object.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   */
  function once(type: SensorId.PEDOMETER_DETECTION, callback: Callback<PedometerDetectionResponse>): void;

  /**
   * Obtains data of the proximity sensor once.
   *
   * @param { SensorId.PROXIMITY } type - Sensor type. The value is fixed at **SensorId.PROXIMITY**.
   * @param { Callback<ProximityResponse> } callback - Callback used to report the sensor data, which is a
   *     **ProximityResponse** object.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   */
  function once(type: SensorId.PROXIMITY, callback: Callback<ProximityResponse>): void;

  /**
   * Obtains data of the rotation vector sensor once.
   *
   * @param { SensorId.ROTATION_VECTOR } type - Sensor type. The value is fixed at **SensorId.ROTATION_VECTOR**.
   * @param { Callback<RotationVectorResponse> } callback - Callback used to report the sensor data, which is a
   *     **RotationVectorResponse** object.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   */
  function once(type: SensorId.ROTATION_VECTOR, callback: Callback<RotationVectorResponse>): void;

  /**
   * Obtains the significant motion sensor data once.
   *
   * @param { SensorId.SIGNIFICANT_MOTION } type - Sensor type. The value is fixed at **SensorId.SIGNIFICANT_MOTION**.
   * @param { Callback<SignificantMotionResponse> } callback - Callback used to report the sensor data, which is a
   *     **SignificantMotionResponse** object.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   */
  function once(type: SensorId.SIGNIFICANT_MOTION, callback: Callback<SignificantMotionResponse>): void;

  /**
   * Obtains data of the wear detection sensor once.
   *
   * @param { SensorId.WEAR_DETECTION } type - Sensor type. The value is fixed at **SensorId.WEAR_DETECTION**.
   * @param { Callback<WearDetectionResponse> } callback - Callback used to report the sensor data, which is a
   *     **WearDetectionResponse** object.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   */
  function once(type: SensorId.WEAR_DETECTION, callback: Callback<WearDetectionResponse>): void;

  /**
   * Unsubscribes from data of the color sensor.
   *
   * @param { SensorId.COLOR } type - Sensor type. The value is fixed at **SensorId.COLOR**.
   * @param { Callback<ColorResponse> } callback - Callback used for unsubscription. If this parameter is not specified,
   *     all callbacks of the specified sensor type are unsubscribed from.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 202 - Permission check failed. A non-system application uses the system API. [since 11]
   * @syscap SystemCapability.Sensors.Sensor
   * @systemapi
   * @since 10 dynamic
   */
  function off(type: SensorId.COLOR, callback?: Callback<ColorResponse>): void;

  /**
   * Unsubscribes from data of the color sensor.
   *
   * @param { SensorId.COLOR } type - Sensor type. The value is fixed at **SensorId.COLOR**.
   * @param { SensorInfoParam } [sensorInfoParam] - Sensor parameters, including **deviceId** and **sensorIndex**.
   * @param { Callback<ColorResponse> } [callback] - Callback used for unsubscription. If this parameter is not
   *     specified, all callbacks of the specified sensor type are unsubscribed from.
   * @throws { BusinessError } 202 - Permission check failed. A non-system application uses the system API.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @systemapi
   * @since 19 dynamic
   */
  function off(type: SensorId.COLOR, sensorInfoParam?: SensorInfoParam, callback?: Callback<ColorResponse>): void;

  /**
   * Unsubscribes from data of the SAR sensor.
   *
   * @param { SensorId.SAR } type - Sensor type. The value is fixed at **SensorId.SAR**.
   * @param { Callback<SarResponse> } callback - Callback used for unsubscription. If this parameter is not specified,
   *     all callbacks of the specified sensor type are unsubscribed from.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 202 - Permission check failed. A non-system application uses the system API. [since 11]
   * @syscap SystemCapability.Sensors.Sensor
   * @systemapi
   * @since 10 dynamic
   */
  function off(type: SensorId.SAR, callback?: Callback<SarResponse>): void;

  /**
   * Unsubscribes from data of the SAR sensor.
   *
   * @param { SensorId.SAR } type - Sensor type. The value is fixed at **SensorId.SAR**.
   * @param { SensorInfoParam } [sensorInfoParam] - Sensor parameters, including **deviceId** and **sensorIndex**.
   * @param { Callback<SarResponse> } [callback] - Callback used for unsubscription. If this parameter is not specified,
   *     all callbacks of the specified sensor type are unsubscribed from.
   * @throws { BusinessError } 202 - Permission check failed. A non-system application uses the system API.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @systemapi
   * @since 19 dynamic
   */
  function off(type: SensorId.SAR, sensorInfoParam?: SensorInfoParam, callback?: Callback<SarResponse>): void;

  /**
   * Unsubscribes from data of the acceleration sensor.
   *
   * @permission ohos.permission.ACCELEROMETER
   * @param { SensorId.ACCELEROMETER } type - Sensor type. The value is fixed at **SensorId.ACCELEROMETER**.
   * @param { Callback<AccelerometerResponse> } callback - Callback used for unsubscription. If this parameter is not
   *     specified, all callbacks of the specified sensor type are unsubscribed from.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Sensors.Sensor
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  function off(type: SensorId.ACCELEROMETER, callback?: Callback<AccelerometerResponse>): void;

  /**
   * Unsubscribes from data of the acceleration sensor.
   *
   * @permission ohos.permission.ACCELEROMETER
   * @param { SensorId.ACCELEROMETER } type - Sensor type. The value is fixed at **SensorId.ACCELEROMETER**.
   * @param { SensorInfoParam } [sensorInfoParam] - Sensor parameters, including **deviceId** and **sensorIndex**.
   * @param { Callback<AccelerometerResponse> } [callback] - Callback used for unsubscription. If this parameter is not
   *     specified, all callbacks of the specified sensor type are unsubscribed from.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @atomicservice
   * @since 19 dynamic
   */
  function off(type: SensorId.ACCELEROMETER, sensorInfoParam?: SensorInfoParam, callback?: Callback<AccelerometerResponse>): void;

  /**
   * Unsubscribes from data of the uncalibrated acceleration sensor.
   *
   * @permission ohos.permission.ACCELEROMETER
   * @param { SensorId.ACCELEROMETER_UNCALIBRATED } type - Sensor type. The value is fixed at
   *     **SensorId.ACCELEROMETER_UNCALIBRATED**.
   * @param { Callback<AccelerometerUncalibratedResponse> } callback - Callback used for unsubscription. If this
   *     parameter is not specified, all callbacks of the specified sensor type are unsubscribed from.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   */
  function off(type: SensorId.ACCELEROMETER_UNCALIBRATED, callback?: Callback<AccelerometerUncalibratedResponse>): void;

  /**
   * Unsubscribes from data of the uncalibrated acceleration sensor.
   *
   * @permission ohos.permission.ACCELEROMETER
   * @param { SensorId.ACCELEROMETER_UNCALIBRATED } type - Sensor type. The value is fixed at
   *     **SensorId.ACCELEROMETER_UNCALIBRATED**.
   * @param { SensorInfoParam } [sensorInfoParam] - Sensor parameters, including **deviceId** and **sensorIndex**.
   * @param { Callback<AccelerometerUncalibratedResponse> } [callback] - Callback used for unsubscription. If this
   *     parameter is not specified, all callbacks of the specified sensor type are unsubscribed from.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 19 dynamic
   */
  function off(type: SensorId.ACCELEROMETER_UNCALIBRATED, sensorInfoParam?: SensorInfoParam, callback?: Callback<AccelerometerUncalibratedResponse>): void;

  /**
   * Unsubscribes from data of the ambient light sensor.
   *
   * @param { SensorId.AMBIENT_LIGHT } type - Sensor type. The value is fixed at **SensorId.AMBIENT_LIGHT**.
   * @param { Callback<LightResponse> } callback - Callback used for unsubscription. If this parameter is not specified,
   *     all callbacks of the specified sensor type are unsubscribed from.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   */
  function off(type: SensorId.AMBIENT_LIGHT, callback?: Callback<LightResponse>): void;

  /**
   * Unsubscribes from data of the ambient light sensor.
   *
   * @param { SensorId.AMBIENT_LIGHT } type - Sensor type. The value is fixed at **SensorId.AMBIENT_LIGHT**.
   * @param { SensorInfoParam } [sensorInfoParam] - Sensor parameters, including **deviceId** and **sensorIndex**.
   * @param { Callback<LightResponse> } [callback] - Callback used for unsubscription. If this parameter is not
   *     specified, all callbacks of the specified sensor type are unsubscribed from.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 19 dynamic
   */
  function off(type: SensorId.AMBIENT_LIGHT, sensorInfoParam?: SensorInfoParam, callback?: Callback<LightResponse>): void;

  /**
   * Unsubscribes from data of the ambient temperature sensor.
   *
   * @param { SensorId.AMBIENT_TEMPERATURE } type - Sensor type. The value is fixed at **SensorId.AMBIENT_TEMPERATURE**.
   * @param { Callback<AmbientTemperatureResponse> } callback - Callback used for unsubscription. If this parameter is
   *     not specified, all callbacks of the specified sensor type are unsubscribed from.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   */
  function off(type: SensorId.AMBIENT_TEMPERATURE, callback?: Callback<AmbientTemperatureResponse>): void;

  /**
   * Unsubscribes from data of the ambient temperature sensor.
   *
   * @param { SensorId.AMBIENT_TEMPERATURE } type - Sensor type. The value is fixed at **SensorId.AMBIENT_TEMPERATURE**.
   * @param { SensorInfoParam } [sensorInfoParam] - Sensor parameters, including **deviceId** and **sensorIndex**.
   * @param { Callback<AmbientTemperatureResponse> } [callback] - Callback used for unsubscription. If this parameter is
   *     not specified, all callbacks of the specified sensor type are unsubscribed from.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 19 dynamic
   */
  function off(type: SensorId.AMBIENT_TEMPERATURE, sensorInfoParam?: SensorInfoParam, callback?: Callback<AmbientTemperatureResponse>): void;

  /**
   * Unsubscribes from data of the barometer sensor.
   *
   * @param { SensorId.BAROMETER } type - Sensor type. The value is fixed at **SensorId.BAROMETER**.
   * @param { Callback<BarometerResponse> } callback - Callback used for unsubscription. If this parameter is not
   *     specified, all callbacks of the specified sensor type are unsubscribed from.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   */
  function off(type: SensorId.BAROMETER, callback?: Callback<BarometerResponse>): void;

  /**
   * Unsubscribes from data of the barometer sensor.
   *
   * @param { SensorId.BAROMETER } type - Sensor type. The value is fixed at **SensorId.BAROMETER**.
   * @param { SensorInfoParam } [sensorInfoParam] - Sensor parameters, including **deviceId** and **sensorIndex**.
   * @param { Callback<BarometerResponse> } [callback] - Callback used for unsubscription. If this parameter is not
   *     specified, all callbacks of the specified sensor type are unsubscribed from.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 19 dynamic
   */
  function off(type: SensorId.BAROMETER, sensorInfoParam?: SensorInfoParam, callback?: Callback<BarometerResponse>): void;

  /**
   * Unsubscribes from data of the gravity sensor.
   *
   * @param { SensorId.GRAVITY } type - Sensor type. The value is fixed at **SensorId.GRAVITY**.
   * @param { Callback<GravityResponse> } callback - Callback used for unsubscription. If this parameter is not
   *     specified, all callbacks of the specified sensor type are unsubscribed from.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   */
  function off(type: SensorId.GRAVITY, callback?: Callback<GravityResponse>): void;

  /**
   * Unsubscribes from data of the gravity sensor.
   *
   * @param { SensorId.GRAVITY } type - Sensor type. The value is fixed at **SensorId.GRAVITY**.
   * @param { SensorInfoParam } [sensorInfoParam] - Sensor parameters, including **deviceId** and **sensorIndex**.
   * @param { Callback<GravityResponse> } [callback] - Callback used for unsubscription. If this parameter is not
   *     specified, all callbacks of the specified sensor type are unsubscribed from.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 19 dynamic
   */
  function off(type: SensorId.GRAVITY, sensorInfoParam?: SensorInfoParam, callback?: Callback<GravityResponse>): void;

  /**
   * Unsubscribes from data of the gyroscope sensor.
   *
   * @permission ohos.permission.GYROSCOPE
   * @param { SensorId.GYROSCOPE } type - Sensor type. The value is fixed at **SensorId.GYROSCOPE**.
   * @param { Callback<GyroscopeResponse> } callback - Callback used for unsubscription. If this parameter is not
   *     specified, all callbacks of the specified sensor type are unsubscribed from.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Sensors.Sensor
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  function off(type: SensorId.GYROSCOPE, callback?: Callback<GyroscopeResponse>): void;

  /**
   * Unsubscribes from data of the gyroscope sensor.
   *
   * @permission ohos.permission.GYROSCOPE
   * @param { SensorId.GYROSCOPE } type - Sensor type. The value is fixed at **SensorId.GYROSCOPE**.
   * @param { SensorInfoParam } [sensorInfoParam] - Sensor parameters, including **deviceId** and **sensorIndex**.
   * @param { Callback<GyroscopeResponse> } [callback] - Callback used for unsubscription. If this parameter is not
   *     specified, all callbacks of the specified sensor type are unsubscribed from.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @atomicservice
   * @since 19 dynamic
   */
  function off(type: SensorId.GYROSCOPE, sensorInfoParam?: SensorInfoParam, callback?: Callback<GyroscopeResponse>): void;

  /**
   * Unsubscribes from data of the uncalibrated gyroscope sensor.
   *
   * @permission ohos.permission.GYROSCOPE
   * @param { SensorId.GYROSCOPE_UNCALIBRATED } type - Sensor type. The value is fixed at
   *     **SensorId.GYROSCOPE_UNCALIBRATED**.
   * @param { Callback<GyroscopeUncalibratedResponse> } callback - Callback used for unsubscription. If this parameter
   *     is not specified, all callbacks of the specified sensor type are unsubscribed from.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   */
  function off(type: SensorId.GYROSCOPE_UNCALIBRATED, callback?: Callback<GyroscopeUncalibratedResponse>): void;

  /**
   * Unsubscribes from data of the uncalibrated gyroscope sensor.
   *
   * @permission ohos.permission.GYROSCOPE
   * @param { SensorId.GYROSCOPE_UNCALIBRATED } type - Sensor type. The value is fixed at
   *     **SensorId.GYROSCOPE_UNCALIBRATED**.
   * @param { SensorInfoParam } [sensorInfoParam] - Sensor parameters, including **deviceId** and **sensorIndex**.
   * @param { Callback<GyroscopeUncalibratedResponse> } [callback] - Callback used for unsubscription. If this parameter
   *     is not specified, all callbacks of the specified sensor type are unsubscribed from.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 19 dynamic
   */
  function off(type: SensorId.GYROSCOPE_UNCALIBRATED, sensorInfoParam?: SensorInfoParam, callback?: Callback<GyroscopeUncalibratedResponse>): void;

  /**
   * Unsubscribes from data of the Hall effect sensor.
   *
   * @param { SensorId.HALL } type - Sensor type. The value is fixed at **SensorId.HALL**.
   * @param { Callback<HallResponse> } callback - Callback used for unsubscription. If this parameter is not specified,
   *     all callbacks of the specified sensor type are unsubscribed from.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   */
  function off(type: SensorId.HALL, callback?: Callback<HallResponse>): void;

  /**
   * Unsubscribes from data of the Hall effect sensor.
   *
   * @param { SensorId.HALL } type - Sensor type. The value is fixed at **SensorId.HALL**.
   * @param { SensorInfoParam } [sensorInfoParam] - Sensor parameters, including **deviceId** and **sensorIndex**.
   * @param { Callback<HallResponse> } [callback] - Callback used for unsubscription. If this parameter is not specified
   *     , all callbacks of the specified sensor type are unsubscribed from.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 19 dynamic
   */
  function off(type: SensorId.HALL, sensorInfoParam?: SensorInfoParam, callback?: Callback<HallResponse>): void;

  /**
   * Unsubscribes from data of the heart rate sensor.
   *
   * @permission ohos.permission.READ_HEALTH_DATA
   * @param { SensorId.HEART_RATE } type - Sensor type. The value is fixed at **SensorId.HEART_RATE**.
   * @param { Callback<HeartRateResponse> } callback - Callback used for unsubscription. If this parameter is not
   *     specified, all callbacks of the specified sensor type are unsubscribed from.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   */
  function off(type: SensorId.HEART_RATE, callback?: Callback<HeartRateResponse>): void;

  /**
   * Unsubscribes from data of the heart rate sensor.
   *
   * @permission ohos.permission.READ_HEALTH_DATA
   * @param { SensorId.HEART_RATE } type - Sensor type. The value is fixed at **SensorId.HEART_RATE**.
   * @param { SensorInfoParam } [sensorInfoParam] - Sensor parameters, including **deviceId** and **sensorIndex**.
   * @param { Callback<HeartRateResponse> } [callback] - Callback used for unsubscription. If this parameter is not
   *     specified, all callbacks of the specified sensor type are unsubscribed from.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 19 dynamic
   */
  function off(type: SensorId.HEART_RATE, sensorInfoParam?: SensorInfoParam, callback?: Callback<HeartRateResponse>): void;

  /**
   * Unsubscribes from data of the humidity sensor.
   *
   * @param { SensorId.HUMIDITY } type - Sensor type. The value is fixed at **SensorId.HUMIDITY**.
   * @param { Callback<HumidityResponse> } callback - Callback used for unsubscription. If this parameter is not
   *     specified, all callbacks of the specified sensor type are unsubscribed from.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   */
  function off(type: SensorId.HUMIDITY, callback?: Callback<HumidityResponse>): void;

  /**
   * Unsubscribes from data of the humidity sensor.
   *
   * @param { SensorId.HUMIDITY } type - Sensor type. The value is fixed at **SensorId.HUMIDITY**.
   * @param { SensorInfoParam } [sensorInfoParam] - Sensor parameters, including **deviceId** and **sensorIndex**.
   * @param { Callback<HumidityResponse> } [callback] - Callback used for unsubscription. If this parameter is not
   *     specified, all callbacks of the specified sensor type are unsubscribed from.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 19 dynamic
   */
  function off(type: SensorId.HUMIDITY, sensorInfoParam?: SensorInfoParam, callback?: Callback<HumidityResponse>): void;

  /**
   * Unsubscribes from data of the linear acceleration sensor.
   *
   * @permission ohos.permission.ACCELEROMETER
   * @param { SensorId.LINEAR_ACCELEROMETER } type - Sensor type. The value is fixed at
   *     **SensorId.LINEAR_ACCELERATION**.
   * @param { Callback<LinearAccelerometerResponse> } callback - Callback used for unsubscription. If this parameter is
   *     not specified, all callbacks of the specified sensor type are unsubscribed from.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   */
  function off(type: SensorId.LINEAR_ACCELEROMETER, callback?: Callback<LinearAccelerometerResponse>): void;

  /**
   * Unsubscribes from data of the linear acceleration sensor.
   *
   * @permission ohos.permission.ACCELEROMETER
   * @param { SensorId.LINEAR_ACCELEROMETER } type - Sensor type. The value is fixed at
   *     **SensorId.LINEAR_ACCELERATION**.
   * @param { SensorInfoParam } [sensorInfoParam] - Sensor parameters, including **deviceId** and **sensorIndex**.
   * @param { Callback<LinearAccelerometerResponse> } [callback] - Callback used for unsubscription. If this parameter
   *     is not specified, all callbacks of the specified sensor type are unsubscribed from.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 19 dynamic
   */
  function off(type: SensorId.LINEAR_ACCELEROMETER, sensorInfoParam?: SensorInfoParam, callback?: Callback<LinearAccelerometerResponse>): void;

  /**
   * Unsubscribes from data of the magnetic field sensor.
   *
   * @param { SensorId.MAGNETIC_FIELD } type - Sensor type. The value is fixed at **SensorId.MAGNETIC_FIELD**.
   * @param { Callback<MagneticFieldResponse> } callback - Callback used for unsubscription. If this parameter is not
   *     specified, all callbacks of the specified sensor type are unsubscribed from.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   */
  function off(type: SensorId.MAGNETIC_FIELD, callback?: Callback<MagneticFieldResponse>): void;

  /**
   * Unsubscribes from data of the magnetic field sensor.
   *
   * @param { SensorId.MAGNETIC_FIELD } type - Sensor type. The value is fixed at **SensorId.MAGNETIC_FIELD**.
   * @param { SensorInfoParam } [sensorInfoParam] - Sensor parameters, including **deviceId** and **sensorIndex**.
   * @param { Callback<MagneticFieldResponse> } [callback] - Callback used for unsubscription. If this parameter is not
   *     specified, all callbacks of the specified sensor type are unsubscribed from.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 19 dynamic
   */
  function off(type: SensorId.MAGNETIC_FIELD, sensorInfoParam?: SensorInfoParam, callback?: Callback<MagneticFieldResponse>): void;

  /**
   * Unsubscribes from data of the uncalibrated magnetic field sensor.
   *
   * @param { SensorId.MAGNETIC_FIELD_UNCALIBRATED } type - Sensor type. The value is fixed at
   *     **SensorId.MAGNETIC_FIELD_UNCALIBRATED**.
   * @param { Callback<MagneticFieldUncalibratedResponse> } callback - Callback used for unsubscription. If this
   *     parameter is not specified, all callbacks of the specified sensor type are unsubscribed from.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   */
  function off(type: SensorId.MAGNETIC_FIELD_UNCALIBRATED, callback?: Callback<MagneticFieldUncalibratedResponse>): void;

  /**
   * Unsubscribes from data of the uncalibrated magnetic field sensor.
   *
   * @param { SensorId.MAGNETIC_FIELD_UNCALIBRATED } type - Sensor type. The value is fixed at
   *     **SensorId.MAGNETIC_FIELD_UNCALIBRATED**.
   * @param { SensorInfoParam } [sensorInfoParam] - Sensor parameters, including **deviceId** and **sensorIndex**.
   * @param { Callback<MagneticFieldUncalibratedResponse> } [callback] - Callback used for unsubscription. If this
   *     parameter is not specified, all callbacks of the specified sensor type are unsubscribed from.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 19 dynamic
   */
  function off(type: SensorId.MAGNETIC_FIELD_UNCALIBRATED, sensorInfoParam?: SensorInfoParam, callback?: Callback<MagneticFieldUncalibratedResponse>): void;

  /**
   * Unsubscribes from data of the orientation sensor.
   *
   * @param { SensorId.ORIENTATION } type - Sensor type. The value is fixed at **SensorId.ORIENTATION**.
   * @param { Callback<OrientationResponse> } callback - Callback used for unsubscription. If this parameter is not
   *     specified, all callbacks of the specified sensor type are unsubscribed from.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Sensors.Sensor
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  function off(type: SensorId.ORIENTATION, callback?: Callback<OrientationResponse>): void;

  /**
   * Unsubscribes from data of the orientation sensor.
   *
   * @param { SensorId.ORIENTATION } type - Sensor type. The value is fixed at **SensorId.ORIENTATION**.
   * @param { SensorInfoParam } [sensorInfoParam] - Sensor parameters, including **deviceId** and **sensorIndex**.
   * @param { Callback<OrientationResponse> } [callback] - Callback used for unsubscription. If this parameter is not
   *     specified, all callbacks of the specified sensor type are unsubscribed from.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @atomicservice
   * @since 19 dynamic
   */
  function off(type: SensorId.ORIENTATION, sensorInfoParam?: SensorInfoParam, callback?: Callback<OrientationResponse>): void;

  /**
   * Unsubscribes from data of the pedometer sensor.
   *
   * @permission ohos.permission.ACTIVITY_MOTION
   * @param { SensorId.PEDOMETER } type - Sensor type. The value is fixed at **SensorId.PEDOMETER**.
   * @param { Callback<PedometerResponse> } callback - Callback used for unsubscription. If this parameter is not
   *     specified, all callbacks of the specified sensor type are unsubscribed from.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   */
  function off(type: SensorId.PEDOMETER, callback?: Callback<PedometerResponse>): void;

  /**
   * Unsubscribes from data of the pedometer sensor.
   *
   * @permission ohos.permission.ACTIVITY_MOTION
   * @param { SensorId.PEDOMETER } type - Sensor type. The value is fixed at **SensorId.PEDOMETER**.
   * @param { SensorInfoParam } [sensorInfoParam] - Sensor parameters, including **deviceId** and **sensorIndex**.
   * @param { Callback<PedometerResponse> } [callback] - Callback used for unsubscription. If this parameter is not
   *     specified, all callbacks of the specified sensor type are unsubscribed from.
   * @throws { BusinessError } 201 - Permission denied
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 19 dynamic
   */
  function off(type: SensorId.PEDOMETER, sensorInfoParam?: SensorInfoParam, callback?: Callback<PedometerResponse>): void;

  /**
   * Unsubscribes from data of the pedometer detection sensor.
   *
   * @permission ohos.permission.ACTIVITY_MOTION
   * @param { SensorId.PEDOMETER_DETECTION } type - Sensor type. The value is fixed at **SensorId.PEDOMETER_DETECTION**.
   * @param { Callback<PedometerDetectionResponse> } callback - Callback used for unsubscription. If this parameter is
   *     not specified, all callbacks of the specified sensor type are unsubscribed from.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   */
  function off(type: SensorId.PEDOMETER_DETECTION, callback?: Callback<PedometerDetectionResponse>): void;

  /**
   * Unsubscribes from data of the pedometer detection sensor.
   *
   * @permission ohos.permission.ACTIVITY_MOTION
   * @param { SensorId.PEDOMETER_DETECTION } type - Sensor type. The value is fixed at **SensorId.PEDOMETER_DETECTION**.
   * @param { SensorInfoParam } [sensorInfoParam] - Sensor parameters, including **deviceId** and **sensorIndex**.
   * @param { Callback<PedometerDetectionResponse> } [callback] - Callback used for unsubscription. If this parameter is
   *     not specified, all callbacks of the specified sensor type are unsubscribed from.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 19 dynamic
   */
  function off(type: SensorId.PEDOMETER_DETECTION, sensorInfoParam?: SensorInfoParam, callback?: Callback<PedometerDetectionResponse>): void;

  /**
   * Unsubscribes from data of the proximity sensor.
   *
   * @param { SensorId.PROXIMITY } type - Sensor type. The value is fixed at **SensorId.PROXIMITY**.
   * @param { Callback<ProximityResponse> } callback - Callback used for unsubscription. If this parameter is not
   *     specified, all callbacks of the specified sensor type are unsubscribed from.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   */
  function off(type: SensorId.PROXIMITY, callback?: Callback<ProximityResponse>): void;

  /**
   * Unsubscribes from data of the proximity sensor.
   *
   * @param { SensorId.PROXIMITY } type - Sensor type. The value is fixed at **SensorId.PROXIMITY**.
   * @param { SensorInfoParam } [sensorInfoParam] - Sensor parameters, including **deviceId** and **sensorIndex**.
   * @param { Callback<ProximityResponse> } [callback] - Callback used for unsubscription. If this parameter is not
   *     specified, all callbacks of the specified sensor type are unsubscribed from.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 19 dynamic
   */
  function off(type: SensorId.PROXIMITY, sensorInfoParam?: SensorInfoParam, callback?: Callback<ProximityResponse>): void;

  /**
   * Unsubscribes from data of the rotation vector sensor.
   *
   * @param { SensorId.ROTATION_VECTOR } type - Sensor type. The value is fixed at **SensorId.ROTATION_VECTOR**.
   * @param { Callback<RotationVectorResponse> } callback - Callback used for unsubscription. If this parameter is not
   *     specified, all callbacks of the specified sensor type are unsubscribed from.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   */
  function off(type: SensorId.ROTATION_VECTOR, callback?: Callback<RotationVectorResponse>): void;

  /**
   * Unsubscribes from data of the rotation vector sensor.
   *
   * @param { SensorId.ROTATION_VECTOR } type - Sensor type. The value is fixed at **SensorId.ROTATION_VECTOR**.
   * @param { SensorInfoParam } [sensorInfoParam] - Sensor parameters, including **deviceId** and **sensorIndex**.
   * @param { Callback<RotationVectorResponse> } [callback] - Callback used for unsubscription. If this parameter is not
   *     specified, all callbacks of the specified sensor type are unsubscribed from.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 19 dynamic
   */
  function off(type: SensorId.ROTATION_VECTOR, sensorInfoParam?: SensorInfoParam, callback?: Callback<RotationVectorResponse>): void;

  /**
   * Unsubscribes from valid motion sensor data.
   *
   * @param { SensorId.SIGNIFICANT_MOTION } type - Sensor type. The value is fixed at **SensorId.SIGNIFICANT_MOTION**.
   * @param { Callback<SignificantMotionResponse> } callback - Callback used for unsubscription. If this parameter is
   *     not specified, all callbacks of the specified sensor type are unsubscribed from.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   */
  function off(type: SensorId.SIGNIFICANT_MOTION, callback?: Callback<SignificantMotionResponse>): void;

  /**
   * Unsubscribes from valid motion sensor data.
   *
   * @param { SensorId.SIGNIFICANT_MOTION } type - Sensor type. The value is fixed at **SensorId.SIGNIFICANT_MOTION**.
   * @param { SensorInfoParam } [sensorInfoParam] - Sensor parameters, including **deviceId** and **sensorIndex**.
   * @param { Callback<SignificantMotionResponse> } [callback] - Callback used for unsubscription. If this parameter is
   *     not specified, all callbacks of the specified sensor type are unsubscribed from.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 19 dynamic
   */
  function off(type: SensorId.SIGNIFICANT_MOTION, sensorInfoParam?: SensorInfoParam, callback?: Callback<SignificantMotionResponse>): void;

  /**
   * Unsubscribes from data of the wear detection sensor.
   *
   * @param { SensorId.WEAR_DETECTION } type - Sensor type. The value is fixed at **SensorId.WEAR_DETECTION**.
   * @param { Callback<WearDetectionResponse> } callback - Callback used for unsubscription. If this parameter is not
   *     specified, all callbacks of the specified sensor type are unsubscribed from.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   */
  function off(type: SensorId.WEAR_DETECTION, callback?: Callback<WearDetectionResponse>): void;

  /**
   * Unsubscribes from the fused pressure sensor data.
   *
   * @param { SensorId.FUSION_PRESSURE } type - Sensor type. The value is fixed at SensorId.FUSION_PRESSURE.
   * @param { SensorInfoParam } [sensorInfoParam] - Sensor parameters, including **deviceId** and **sensorIndex**.
   * @param { Callback<FusionPressureResponse> } callback - Callback used for unsubscription. If this parameter is not
   *     specified, all callbacks of the specified sensor type are unsubscribed from.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 22 dynamic
   */
  function off(type: SensorId.FUSION_PRESSURE, sensorInfoParam?: SensorInfoParam, callback?: Callback<FusionPressureResponse>): void;

  /**
   * Unsubscribes from data of the wear detection sensor.
   *
   * @param { SensorId.WEAR_DETECTION } type - Sensor type. The value is fixed at **SensorId.WEAR_DETECTION**.
   * @param { SensorInfoParam } [sensorInfoParam] - Sensor parameters, including **deviceId** and **sensorIndex**.
   * @param { Callback<WearDetectionResponse> } [callback] - Callback used for unsubscription. If this parameter is not
   *     specified, all callbacks of the specified sensor type are unsubscribed from.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 19 dynamic
   */
  function off(type: SensorId.WEAR_DETECTION, sensorInfoParam?: SensorInfoParam, callback?: Callback<WearDetectionResponse>): void;

  /**
   * Subscribes to data changes of the acceleration sensor. If this API is called multiple times for the same
   * application, the last call takes effect.
   *
   * @permission ohos.permission.ACCELEROMETER
   * @param { SensorType.SENSOR_TYPE_ID_ACCELEROMETER } type - Type of the sensor to subscribe to, which is
   *     **SENSOR_TYPE_ID_ACCELEROMETER**.
   * @param { Callback<AccelerometerResponse> } callback - Callback used to return the acceleration sensor data. The
   *     reported data type in the callback is **AccelerometerResponse**.
   * @param { Options } options - List of optional parameters. This parameter is used to set the data reporting
   *     frequency. The default value is 200,000,000 ns.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.on(type: SensorId.ACCELEROMETER, callback: Callback<AccelerometerResponse>, options?: Options)
   */
  function on(type: SensorType.SENSOR_TYPE_ID_ACCELEROMETER, callback: Callback<AccelerometerResponse>,
    options?: Options): void;

  /**
   * Subscribes to data changes of the uncalibrated acceleration sensor. If this API is called multiple times for the
   * same application, the last call takes effect.
   *
   * @permission ohos.permission.ACCELEROMETER
   * @param { SensorType.SENSOR_TYPE_ID_ACCELEROMETER_UNCALIBRATED } type - Type of the sensor to subscribe to, which is
   *     **SENSOR_TYPE_ID_ACCELEROMETER_UNCALIBRATED**.
   * @param { Callback<AccelerometerUncalibratedResponse> } callback - Callback used to return the uncalibrated
   *     acceleration sensor data. The reported data type in the callback is **AccelerometerUncalibratedResponse**.
   * @param { Options } options - List of optional parameters. This parameter is used to set the data reporting
   *     frequency. The default value is 200,000,000 ns.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.on(type: SensorId.ACCELEROMETER_UNCALIBRATED, callback: Callback<AccelerometerUncalibratedResponse>, options?: Options)
   */
  function on(type: SensorType.SENSOR_TYPE_ID_ACCELEROMETER_UNCALIBRATED, callback: Callback<AccelerometerUncalibratedResponse>,
    options?: Options): void;

  /**
   * Subscribes to data changes of the ambient light sensor. If this API is called multiple times for the same
   * application, the last call takes effect.
   *
   * @param { SensorType.SENSOR_TYPE_ID_AMBIENT_LIGHT } type - Type of the sensor to subscribe to, which is
   *     **SENSOR_TYPE_ID_AMBIENT_LIGHT**.
   * @param { Callback<LightResponse> } callback - Callback used to return the ambient light sensor data. The reported
   *     data type in the callback is **LightResponse**.
   * @param { Options } options - List of optional parameters. This parameter is used to set the data reporting
   *     frequency. The default value is 200,000,000 ns.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.on(type: SensorId.AMBIENT_LIGHT, callback: Callback<LightResponse>, options?: Options)
   */
  function on(type: SensorType.SENSOR_TYPE_ID_AMBIENT_LIGHT, callback: Callback<LightResponse>,
    options?: Options): void;

  /**
   * Subscribes to data changes of the ambient temperature sensor. If this API is called multiple times for the same
   * application, the last call takes effect.
   *
   * @param { SensorType.SENSOR_TYPE_ID_AMBIENT_TEMPERATURE } type - Type of the sensor to subscribe to, which is
   *     **SENSOR_TYPE_ID_AMBIENT_TEMPERATURE**.
   * @param { Callback<AmbientTemperatureResponse> } callback - Callback used to return the ambient temperature sensor
   *     data. The reported data type in the callback is **AmbientTemperatureResponse**.
   * @param { Options } options - List of optional parameters. This parameter is used to set the data reporting
   *     frequency. The default value is 200,000,000 ns.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.on(type: SensorId.AMBIENT_TEMPERATURE, callback: Callback<AmbientTemperatureResponse>, options?: Options)
   */
  function on(type: SensorType.SENSOR_TYPE_ID_AMBIENT_TEMPERATURE, callback: Callback<AmbientTemperatureResponse>,
    options?: Options): void;

  /**
   * Subscribes to data changes of the barometer sensor. If this API is called multiple times for the same application,
   * the last call takes effect.
   *
   * @param { SensorType.SENSOR_TYPE_ID_BAROMETER } type - Type of the sensor to subscribe to, which is
   *     **SENSOR_TYPE_ID_BAROMETER**.
   * @param { Callback<BarometerResponse> } callback - Callback used to return the barometer sensor data. The reported
   *     data type in the callback is **BarometerResponse**.
   * @param { Options } options - List of optional parameters. This parameter is used to set the data reporting
   *     frequency. The default value is 200,000,000 ns.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.on(type: SensorId.BAROMETER, callback: Callback<BarometerResponse>, options?: Options)
   */
  function on(type: SensorType.SENSOR_TYPE_ID_BAROMETER, callback: Callback<BarometerResponse>,
    options?: Options): void;

  /**
   * Subscribes to data changes of the gravity sensor. If this API is called multiple times for the same application,
   * the last call takes effect.
   *
   * @param { SensorType.SENSOR_TYPE_ID_GRAVITY } type - Type of the sensor to subscribe to, which is
   *     **SENSOR_TYPE_ID_GRAVITY**.
   * @param { Callback<GravityResponse> } callback - Callback used to return the gravity sensor data. The reported data
   *     type in the callback is **GravityResponse**.
   * @param { Options } options - List of optional parameters. This parameter is used to set the data reporting
   *     frequency. The default value is 200,000,000 ns.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.on(type: SensorId.GRAVITY, callback: Callback<GravityResponse>, options?: Options)
   */
  function on(type: SensorType.SENSOR_TYPE_ID_GRAVITY, callback: Callback<GravityResponse>,
    options?: Options): void;

  /**
   * Subscribes to data changes of the gyroscope sensor. If this API is called multiple times for the same application,
   * the last call takes effect.
   *
   * @permission ohos.permission.GYROSCOPE
   * @param { SensorType.SENSOR_TYPE_ID_GYROSCOPE } type - Type of the sensor to subscribe to, which is
   *     **SENSOR_TYPE_ID_GYROSCOPE**.
   * @param { Callback<GyroscopeResponse> } callback - Callback used to return the gyroscope sensor data. The reported
   *     data type in the callback is **GyroscopeResponse**.
   * @param { Options } options - List of optional parameters. This parameter is used to set the data reporting
   *     frequency. The default value is 200,000,000 ns.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.on(type: SensorId.GYROSCOPE, callback: Callback<GyroscopeResponse>, options?: Options)
   */
  function on(type: SensorType.SENSOR_TYPE_ID_GYROSCOPE, callback: Callback<GyroscopeResponse>,
    options?: Options): void;

  /**
   * Subscribes to data changes of the uncalibrated gyroscope sensor. If this API is called multiple times for the same
   * application, the last call takes effect.
   *
   * @permission ohos.permission.GYROSCOPE
   * @param { SensorType.SENSOR_TYPE_ID_GYROSCOPE_UNCALIBRATED } type - Type of the sensor to subscribe to, which is
   *     **SENSOR_TYPE_ID_GYROSCOPE_UNCALIBRATED**.
   * @param { Callback<GyroscopeUncalibratedResponse> } callback - Callback used to return the uncalibrated gyroscope
   *     sensor data. The reported data type in the callback is **GyroscopeUncalibratedResponse**.
   * @param { Options } options - List of optional parameters. This parameter is used to set the data reporting
   *     frequency. The default value is 200,000,000 ns.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.on(type: SensorId.GYROSCOPE_UNCALIBRATED, callback: Callback<GyroscopeUncalibratedResponse>, options?: Options)
   */
  function on(type: SensorType.SENSOR_TYPE_ID_GYROSCOPE_UNCALIBRATED, callback: Callback<GyroscopeUncalibratedResponse>,
    options?: Options): void;

  /**
   * Subscribes to data changes of the Hall effect sensor. If this API is called multiple times for the same application
   * , the last call takes effect.
   *
   * @param { SensorType.SENSOR_TYPE_ID_HALL } type - Type of the sensor to subscribe to, which is
   *     **SENSOR_TYPE_ID_HALL**.
   * @param { Callback<HallResponse> } callback - Callback used to return the Hall effect sensor data. The reported data
   *     type in the callback is **HallResponse**.
   * @param { Options } options - List of optional parameters. The default value is 200,000,000 ns. This parameter is
   *     used to set the data reporting frequency when Hall effect events are frequently triggered.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.on(type: SensorId.HALL, callback: Callback<HallResponse>, options?: Options)
   */
  function on(type: SensorType.SENSOR_TYPE_ID_HALL, callback: Callback<HallResponse>,
    options?: Options): void;

  /**
   * Subscribes to data changes of the heart rate sensor. If this API is called multiple times for the same application,
   * the last call takes effect.
   *
   * @permission ohos.permission.HEALTH_DATA
   * @param { SensorType.SENSOR_TYPE_ID_HEART_RATE } type - Type of the sensor to subscribe to, which is
   *     **SENSOR_TYPE_ID_HEART_RATE**.
   * @param { Callback<HeartRateResponse> } callback - Callback used to return the heart rate sensor data. The reported
   *     data type in the callback is **HeartRateResponse**.
   * @param { Options } options - List of optional parameters. This parameter is used to set the data reporting
   *     frequency. The default value is 200,000,000 ns.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.on(type: SensorId.HEART_RATE, callback: Callback<HeartRateResponse>, options?: Options)
   */
  function on(type: SensorType.SENSOR_TYPE_ID_HEART_RATE, callback: Callback<HeartRateResponse>,
    options?: Options): void;

  /**
   * Subscribes to data changes of the humidity sensor. If this API is called multiple times for the same application,
   * the last call takes effect.
   *
   * @param { SensorType.SENSOR_TYPE_ID_HUMIDITY } type - Type of the sensor to subscribe to, which is
   *     **SENSOR_TYPE_ID_HUMIDITY**.
   * @param { Callback<HumidityResponse> } callback - Callback used to return the humidity sensor data. The reported
   *     data type in the callback is **HumidityResponse**.
   * @param { Options } options - List of optional parameters. This parameter is used to set the data reporting
   *     frequency. The default value is 200,000,000 ns.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.on(type: SensorId.HUMIDITY, callback: Callback<HumidityResponse>, options?: Options)
   */
  function on(type: SensorType.SENSOR_TYPE_ID_HUMIDITY, callback: Callback<HumidityResponse>,
    options?: Options): void;

  /**
   * Subscribes to data changes of the linear acceleration sensor. If this API is called multiple times for the same
   * application, the last call takes effect.
   *
   * @permission ohos.permission.ACCELEROMETER
   * @param { SensorType.SENSOR_TYPE_ID_LINEAR_ACCELERATION } type - Type of the sensor to subscribe to, which is
   *     **SENSOR_TYPE_ID_LINEAR_ACCELERATION**.
   * @param { Callback<LinearAccelerometerResponse> } callback - Callback used to return the linear acceleration sensor
   *     data. The reported data type in the callback is **LinearAccelerometerResponse**.
   * @param { Options } options - List of optional parameters. This parameter is used to set the data reporting
   *     frequency. The default value is 200,000,000 ns.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.on(type: SensorId.LINEAR_ACCELEROMETER, callback: Callback<LinearAccelerometerResponse>, options?: Options)
   */
  function on(type: SensorType.SENSOR_TYPE_ID_LINEAR_ACCELERATION, callback: Callback<LinearAccelerometerResponse>,
    options?: Options): void;

  /**
   * Subscribes to data changes of the magnetic field sensor. If this API is called multiple times for the same
   * application, the last call takes effect.
   *
   * @param { SensorType.SENSOR_TYPE_ID_MAGNETIC_FIELD } type - Type of the sensor to subscribe to, which is
   *     **SENSOR_TYPE_ID_MAGNETIC_FIELD**.
   * @param { Callback<MagneticFieldResponse> } callback - Callback used to return the magnetic field sensor data. The
   *     reported data type in the callback is **MagneticFieldResponse**.
   * @param { Options } options - List of optional parameters. This parameter is used to set the data reporting
   *     frequency. The default value is 200,000,000 ns.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.on(type: SensorId.MAGNETIC_FIELD, callback: Callback<MagneticFieldResponse>, options?: Options)
   */
  function on(type: SensorType.SENSOR_TYPE_ID_MAGNETIC_FIELD, callback: Callback<MagneticFieldResponse>,
    options?: Options): void;

  /**
   * Subscribes to data changes of the uncalibrated magnetic field sensor. If this API is called multiple times for the
   * same application, the last call takes effect.
   *
   * @param { SensorType.SENSOR_TYPE_ID_MAGNETIC_FIELD_UNCALIBRATED } type - Type of the sensor to subscribe to, which
   *     is **SENSOR_TYPE_ID_MAGNETIC_FIELD_UNCALIBRATED**.
   * @param { Callback<MagneticFieldUncalibratedResponse> } callback - Callback used to return the uncalibrated magnetic
   *     field sensor data. The reported data type in the callback is **MagneticFieldUncalibratedResponse**.
   * @param { Options } options - List of optional parameters. This parameter is used to set the data reporting
   *     frequency. The default value is 200,000,000 ns.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.on(type: SensorId.MAGNETIC_FIELD_UNCALIBRATED, callback: Callback<MagneticFieldUncalibratedResponse>, options?: Options)
   */
  function on(type: SensorType.SENSOR_TYPE_ID_MAGNETIC_FIELD_UNCALIBRATED, callback: Callback<MagneticFieldUncalibratedResponse>,
    options?: Options): void;

  /**
   * Subscribes to data changes of the orientation sensor. If this API is called multiple times for the same application
   * , the last call takes effect.
   *
   * @param { SensorType.SENSOR_TYPE_ID_ORIENTATION } type - Type of the sensor to subscribe to, which is
   *     **SENSOR_TYPE_ID_ORIENTATION**.
   * @param { Callback<OrientationResponse> } callback - Callback used to return the orientation sensor data. The
   *     reported data type in the callback is **OrientationResponse**.
   * @param { Options } options - List of optional parameters. This parameter is used to set the data reporting
   *     frequency. The default value is 200,000,000 ns.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.on(type: SensorId.ORIENTATION, callback: Callback<OrientationResponse>, options?: Options)
   */
  function on(type: SensorType.SENSOR_TYPE_ID_ORIENTATION, callback: Callback<OrientationResponse>,
    options?: Options): void;

  /**
   * Subscribes to data changes of the pedometer sensor. If this API is called multiple times for the same application,
   * the last call takes effect.
   *
   * @permission ohos.permission.ACTIVITY_MOTION
   * @param { SensorType.SENSOR_TYPE_ID_PEDOMETER } type - Type of the sensor to subscribe to, which is
   *     **SENSOR_TYPE_ID_PEDOMETER**.
   * @param { Callback<PedometerResponse> } callback - Callback used to return the pedometer sensor data. The reported
   *     data type in the callback is **PedometerResponse**.
   * @param { Options } options - List of optional parameters. This parameter is used to set the data reporting
   *     frequency. The default value is 200,000,000 ns.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.on(type: SensorId.PEDOMETER, callback: Callback<PedometerResponse>, options?: Options)
   */
  function on(type: SensorType.SENSOR_TYPE_ID_PEDOMETER, callback: Callback<PedometerResponse>,
    options?: Options): void;

  /**
   * Subscribes to data changes of the pedometer detection sensor. If this API is called multiple times for the same
   * application, the last call takes effect.
   *
   * @permission ohos.permission.ACTIVITY_MOTION
   * @param { SensorType.SENSOR_TYPE_ID_PEDOMETER_DETECTION } type - Type of the sensor to subscribe to, which is
   *     **SENSOR_TYPE_ID_PEDOMETER_DETECTION**.
   * @param { Callback<PedometerDetectionResponse> } callback - Callback used to return the pedometer detection sensor
   *     data. The reported data type in the callback is **PedometerDetectionResponse**.
   * @param { Options } options - List of optional parameters. This parameter is used to set the data reporting
   *     frequency. The default value is 200,000,000 ns.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.on(type: SensorId.PEDOMETER_DETECTION, callback: Callback<PedometerDetectionResponse>, options?: Options)
   */
  function on(type: SensorType.SENSOR_TYPE_ID_PEDOMETER_DETECTION, callback: Callback<PedometerDetectionResponse>,
    options?: Options): void;

  /**
   * Subscribes to data changes of the proximity sensor. If this API is called multiple times for the same application,
   * the last call takes effect.
   *
   * @param { SensorType.SENSOR_TYPE_ID_PROXIMITY } type - Type of the sensor to subscribe to, which is
   *     **SENSOR_TYPE_ID_PROXIMITY**.
   * @param { Callback<ProximityResponse> } callback - Callback used to return the proximity sensor data. The reported
   *     data type in the callback is **ProximityResponse**.
   * @param { Options } options - List of optional parameters. The default value is 200,000,000 ns. This parameter is
   *     used to set the data reporting frequency when proximity sensor events are frequently triggered.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.on(type: SensorId.PROXIMITY, callback: Callback<ProximityResponse>, options?: Options)
   */
  function on(type: SensorType.SENSOR_TYPE_ID_PROXIMITY, callback: Callback<ProximityResponse>,
    options?: Options): void;

  /**
   * Subscribes to data changes of the rotation vector sensor. If this API is called multiple times for the same
   * application, the last call takes effect.
   *
   * @param { SensorType.SENSOR_TYPE_ID_ROTATION_VECTOR } type - Type of the sensor to subscribe to, which is
   *     **SENSOR_TYPE_ID_ROTATION_VECTOR**.
   * @param { Callback<RotationVectorResponse> } callback - Callback used to return the rotation vector sensor data. The
   *     reported data type in the callback is **RotationVectorResponse**.
   * @param { Options } options - List of optional parameters. This parameter is used to set the data reporting
   *     frequency. The default value is 200,000,000 ns.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.on(type: SensorId.ROTATION_VECTOR, callback: Callback<RotationVectorResponse>, options?: Options)
   */
  function on(type: SensorType.SENSOR_TYPE_ID_ROTATION_VECTOR, callback: Callback<RotationVectorResponse>,
    options?: Options): void;

  /**
   * Subscribes to data changes of the significant motion sensor. If this API is called multiple times for the same
   * application, the last call takes effect.
   *
   * @param { SensorType.SENSOR_TYPE_ID_SIGNIFICANT_MOTION } type - Type of the sensor to subscribe to, which is
   *     **SENSOR_TYPE_ID_SIGNIFICANT_MOTION**.
   * @param { Callback<SignificantMotionResponse> } callback - Callback used to return the significant motion sensor
   *     data. The reported data type in the callback is **SignificantMotionResponse**.
   * @param { Options } options - List of optional parameters. This parameter is used to set the data reporting
   *     frequency. The default value is 200,000,000 ns.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.on(type: SensorId.SIGNIFICANT_MOTION, callback: Callback<SignificantMotionResponse>, options?: Options)
   */
  function on(type: SensorType.SENSOR_TYPE_ID_SIGNIFICANT_MOTION, callback: Callback<SignificantMotionResponse>,
    options?: Options): void;

  /**
   * Subscribes to data changes of the wear detection sensor. If this API is called multiple times for the same
   * application, the last call takes effect.
   *
   * @param { SensorType.SENSOR_TYPE_ID_WEAR_DETECTION } type - Type of the sensor to subscribe to, which is
   *     **SENSOR_TYPE_ID_WEAR_DETECTION**.
   * @param { Callback<WearDetectionResponse> } callback - Callback used to return the wear detection sensor data. The
   *     reported data type in the callback is **WearDetectionResponse**.
   * @param { Options } options - List of optional parameters. This parameter is used to set the data reporting
   *     frequency. The default value is 200,000,000 ns.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.on(type: SensorId.WEAR_DETECTION, callback: Callback<WearDetectionResponse>, options?: Options)
   */
  function on(type: SensorType.SENSOR_TYPE_ID_WEAR_DETECTION, callback: Callback<WearDetectionResponse>,
    options?: Options): void;

  /**
   * Subscribes to only one data change of the acceleration sensor.
   *
   * @permission ohos.permission.ACCELEROMETER
   * @param { SensorType.SENSOR_TYPE_ID_ACCELEROMETER } type - Type of the sensor to subscribe to, which is
   *     **SENSOR_TYPE_ID_ACCELEROMETER**.
   * @param { Callback<AccelerometerResponse> } callback - One-shot callback used to return the acceleration sensor
   *     data. The reported data type in the callback is **AccelerometerResponse**.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.once(type: SensorId.ACCELEROMETER, callback: Callback<AccelerometerResponse>)
   */
  function once(type: SensorType.SENSOR_TYPE_ID_ACCELEROMETER, callback: Callback<AccelerometerResponse>): void;

  /**
   * Subscribes to only one data change of the uncalibrated acceleration sensor.
   *
   * @permission ohos.permission.ACCELEROMETER
   * @param { SensorType.SENSOR_TYPE_ID_ACCELEROMETER_UNCALIBRATED } type - Type of the sensor to subscribe to, which is
   *     **SENSOR_TYPE_ID_ACCELEROMETER_UNCALIBRATED**.
   * @param { Callback<AccelerometerUncalibratedResponse> } callback - One-shot callback used to return the uncalibrated
   *     acceleration sensor data. The reported data type in the callback is **AccelerometerUncalibratedResponse**.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.once(type: SensorId.ACCELEROMETER_UNCALIBRATED, callback: Callback<AccelerometerUncalibratedResponse>)
   */
  function once(type: SensorType.SENSOR_TYPE_ID_ACCELEROMETER_UNCALIBRATED, callback: Callback<AccelerometerUncalibratedResponse>): void;

  /**
   * Subscribes to only one data change of the ambient light sensor.
   *
   * @param { SensorType.SENSOR_TYPE_ID_AMBIENT_LIGHT } type - Type of the sensor to subscribe to, which is
   *     **SENSOR_TYPE_ID_AMBIENT_LIGHT**.
   * @param { Callback<LightResponse> } callback - One-shot callback used to return the ambient light sensor data. The
   *     reported data type in the callback is **LightResponse**.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.once(type: SensorId.AMBIENT_LIGHT, callback: Callback<LightResponse>)
   */
  function once(type: SensorType.SENSOR_TYPE_ID_AMBIENT_LIGHT, callback: Callback<LightResponse>): void;

  /**
   * Subscribes to only one data change of the ambient temperature sensor.
   *
   * @param { SensorType.SENSOR_TYPE_ID_AMBIENT_TEMPERATURE } type - Type of the sensor to subscribe to, which is
   *     **SENSOR_TYPE_ID_AMBIENT_TEMPERATURE**.
   * @param { Callback<AmbientTemperatureResponse> } callback - One-shot callback used to return the ambient temperature
   *     sensor data. The reported data type in the callback is **AmbientTemperatureResponse**.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.once(type: SensorId.AMBIENT_TEMPERATURE, callback: Callback<AmbientTemperatureResponse>)
   */
  function once(type: SensorType.SENSOR_TYPE_ID_AMBIENT_TEMPERATURE, callback: Callback<AmbientTemperatureResponse>): void;

  /**
   * Subscribes to only one data change of the barometer sensor.
   *
   * @param { SensorType.SENSOR_TYPE_ID_BAROMETER } type - Type of the sensor to subscribe to, which is
   *     **SENSOR_TYPE_ID_BAROMETER**.
   * @param { Callback<BarometerResponse> } callback - One-shot callback used to return the barometer sensor data. The
   *     reported data type in the callback is **BarometerResponse**.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.once(type: SensorId.BAROMETER, callback: Callback<BarometerResponse>)
   */
  function once(type: SensorType.SENSOR_TYPE_ID_BAROMETER, callback: Callback<BarometerResponse>): void;

  /**
   * Subscribes to only one data change of the gravity sensor.
   *
   * @param { SensorType.SENSOR_TYPE_ID_GRAVITY } type - Type of the sensor to subscribe to, which is
   *     **SENSOR_TYPE_ID_GRAVITY**.
   * @param { Callback<GravityResponse> } callback - One-shot callback used to return the gravity sensor data. The
   *     reported data type in the callback is **GravityResponse**.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.once(type: SensorId.GRAVITY, callback: Callback<GravityResponse>)
   */
  function once(type: SensorType.SENSOR_TYPE_ID_GRAVITY, callback: Callback<GravityResponse>): void;

  /**
   * Subscribes to only one data change of the gyroscope sensor.
   *
   * @permission ohos.permission.GYROSCOPE
   * @param { SensorType.SENSOR_TYPE_ID_GYROSCOPE } type - Type of the sensor to subscribe to, which is
   *     **SENSOR_TYPE_ID_GYROSCOPE**.
   * @param { Callback<GyroscopeResponse> } callback - One-shot callback used to return the gyroscope sensor data. The
   *     reported data type in the callback is **GyroscopeResponse**.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.once(type: SensorId.GYROSCOPE, callback: Callback<GyroscopeResponse>)
   */
  function once(type: SensorType.SENSOR_TYPE_ID_GYROSCOPE, callback: Callback<GyroscopeResponse>): void;

  /**
   * Subscribes to only one data change of the uncalibrated gyroscope sensor.
   *
   * @permission ohos.permission.GYROSCOPE
   * @param { SensorType.SENSOR_TYPE_ID_GYROSCOPE_UNCALIBRATED } type - Type of the sensor to subscribe to, which is
   *     **SENSOR_TYPE_ID_GYROSCOPE_UNCALIBRATED**.
   * @param { Callback<GyroscopeUncalibratedResponse> } callback - One-shot callback used to return the uncalibrated
   *     gyroscope sensor data. The reported data type in the callback is **GyroscopeUncalibratedResponse**.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.once(type: SensorId.GYROSCOPE_UNCALIBRATED, callback: Callback<GyroscopeUncalibratedResponse>)
   */
  function once(type: SensorType.SENSOR_TYPE_ID_GYROSCOPE_UNCALIBRATED, callback: Callback<GyroscopeUncalibratedResponse>): void;

  /**
   * Subscribes to only one data change of the Hall effect sensor.
   *
   * @param { SensorType.SENSOR_TYPE_ID_HALL } type - Type of the sensor to subscribe to, which is
   *     **SENSOR_TYPE_ID_HALL**.
   * @param { Callback<HallResponse> } callback - One-shot callback used to return the Hall effect sensor data. The
   *     reported data type in the callback is **HallResponse**.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.once(type: SensorId.HALL, callback: Callback<HallResponse>)
   */
  function once(type: SensorType.SENSOR_TYPE_ID_HALL, callback: Callback<HallResponse>): void;

  /**
   * Subscribes to only one data change of the heart rate sensor.
   *
   * @permission ohos.permission.HEART_RATE
   * @param { SensorType.SENSOR_TYPE_ID_HEART_RATE } type - Type of the sensor to subscribe to, which is
   *     **SENSOR_TYPE_ID_HEART_RATE**.
   * @param { Callback<HeartRateResponse> } callback - One-shot callback used to return the heart rate sensor data. The
   *     reported data type in the callback is **HeartRateResponse**.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.once(type: SensorId.HEART_RATE, callback: Callback<HeartRateResponse>)
   */
  function once(type: SensorType.SENSOR_TYPE_ID_HEART_RATE, callback: Callback<HeartRateResponse>): void;

  /**
   * Subscribes to only one data change of the humidity sensor.
   *
   * @param { SensorType.SENSOR_TYPE_ID_HUMIDITY } type - Type of the sensor to subscribe to, which is
   *     **SENSOR_TYPE_ID_HUMIDITY**.
   * @param { Callback<HumidityResponse> } callback - One-shot callback used to return the humidity sensor data. The
   *     reported data type in the callback is **HumidityResponse**.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.once(type: SensorId.HUMIDITY, callback: Callback<HumidityResponse>)
   */
  function once(type: SensorType.SENSOR_TYPE_ID_HUMIDITY, callback: Callback<HumidityResponse>): void;

  /**
   * Subscribes to only one data change of the linear acceleration sensor.
   *
   * @permission ohos.permission.ACCELERATION
   * @param { SensorType.SENSOR_TYPE_ID_LINEAR_ACCELERATION } type - Type of the sensor to subscribe to, which is
   *     **SENSOR_TYPE_ID_LINEAR_ACCELERATION**.
   * @param { Callback<LinearAccelerometerResponse> } callback - One-shot callback used to return the linear
   *     acceleration sensor data. The reported data type in the callback is **LinearAccelerometerResponse**.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.once(type: SensorId.LINEAR_ACCELEROMETER, callback: Callback<LinearAccelerometerResponse>)
   */
  function once(type: SensorType.SENSOR_TYPE_ID_LINEAR_ACCELERATION, callback: Callback<LinearAccelerometerResponse>): void;

  /**
   * Subscribes to only one data change of the magnetic field sensor.
   *
   * @param { SensorType.SENSOR_TYPE_ID_MAGNETIC_FIELD } type - Type of the sensor to subscribe to, which is
   *     **SENSOR_TYPE_ID_MAGNETIC_FIELD**.
   * @param { Callback<MagneticFieldResponse> } callback - One-shot callback used to return the magnetic field sensor
   *     data. The reported data type in the callback is **MagneticFieldResponse**.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.once(type: SensorId.MAGNETIC_FIELD, callback: Callback<MagneticFieldResponse>)
   */
  function once(type: SensorType.SENSOR_TYPE_ID_MAGNETIC_FIELD, callback: Callback<MagneticFieldResponse>): void;

  /**
   * Subscribes to only one data change of the uncalibrated magnetic field sensor.
   *
   * @param { SensorType.SENSOR_TYPE_ID_MAGNETIC_FIELD_UNCALIBRATED } type - Type of the sensor to subscribe to, which
   *     is **SENSOR_TYPE_ID_MAGNETIC_FIELD_UNCALIBRATED**.
   * @param { Callback<MagneticFieldUncalibratedResponse> } callback - One-shot callback used to return the uncalibrated
   *     magnetic field sensor data. The reported data type in the callback is **MagneticFieldUncalibratedResponse**.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.once(type: SensorId.MAGNETIC_FIELD_UNCALIBRATED, callback: Callback<MagneticFieldUncalibratedResponse>)
   */
  function once(type: SensorType.SENSOR_TYPE_ID_MAGNETIC_FIELD_UNCALIBRATED, callback: Callback<MagneticFieldUncalibratedResponse>): void;

  /**
   * Subscribes to only one data change of the orientation sensor.
   *
   * @param { SensorType.SENSOR_TYPE_ID_ORIENTATION } type - Type of the sensor to subscribe to, which is
   *     **SENSOR_TYPE_ID_ORIENTATION**.
   * @param { Callback<OrientationResponse> } callback - One-shot callback used to return the orientation sensor data.
   *     The reported data type in the callback is **OrientationResponse**.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.once(type: SensorId.ORIENTATION, callback: Callback<OrientationResponse>)
   */
  function once(type: SensorType.SENSOR_TYPE_ID_ORIENTATION, callback: Callback<OrientationResponse>): void;

  /**
   * Subscribes to only one data change of the pedometer sensor.
   *
   * @permission ohos.permission.ACTIVITY_MOTION
   * @param { SensorType.SENSOR_TYPE_ID_PEDOMETER } type - Type of the sensor to subscribe to, which is
   *     **SENSOR_TYPE_ID_PEDOMETER**.
   * @param { Callback<PedometerResponse> } callback - One-shot callback used to return the pedometer sensor data. The
   *     reported data type in the callback is **PedometerResponse**.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.once(type: SensorId.PEDOMETER, callback: Callback<PedometerResponse>)
   */
  function once(type: SensorType.SENSOR_TYPE_ID_PEDOMETER, callback: Callback<PedometerResponse>): void;

  /**
   * Subscribes to only one data change of the pedometer detection sensor.
   *
   * @permission ohos.permission.ACTIVITY_MOTION
   * @param { SensorType.SENSOR_TYPE_ID_PEDOMETER_DETECTION } type - Type of the sensor to subscribe to, which is
   *     **SENSOR_TYPE_ID_PEDOMETER_DETECTION**.
   * @param { Callback<PedometerDetectionResponse> } callback - One-shot callback used to return the pedometer detection
   *     sensor data. The reported data type in the callback is **PedometerDetectionResponse**.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.once(type: SensorId.PEDOMETER_DETECTION, callback: Callback<PedometerDetectionResponse>)
   */
  function once(type: SensorType.SENSOR_TYPE_ID_PEDOMETER_DETECTION, callback: Callback<PedometerDetectionResponse>): void;

  /**
   * Subscribes to only one data change of the proximity sensor.
   *
   * @param { SensorType.SENSOR_TYPE_ID_PROXIMITY } type - Type of the sensor to subscribe to, which is
   *     **SENSOR_TYPE_ID_PROXIMITY**.
   * @param { Callback<ProximityResponse> } callback - One-shot callback used to return the proximity sensor data. The
   *     reported data type in the callback is **ProximityResponse**.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.once(type: SensorId.PROXIMITY, callback: Callback<ProximityResponse>)
   */
  function once(type: SensorType.SENSOR_TYPE_ID_PROXIMITY, callback: Callback<ProximityResponse>): void;

  /**
   * Subscribes to only one data change of the rotation vector sensor.
   *
   * @param { SensorType.SENSOR_TYPE_ID_ROTATION_VECTOR } type - Type of the sensor to subscribe to, which is
   *     **SENSOR_TYPE_ID_ROTATION_VECTOR**.
   * @param { Callback<RotationVectorResponse> } callback - One-shot callback used to return the rotation vector sensor
   *     data. The reported data type in the callback is **RotationVectorResponse**.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.once(type: SensorId.ROTATION_VECTOR, callback: Callback<RotationVectorResponse>)
   */
  function once(type: SensorType.SENSOR_TYPE_ID_ROTATION_VECTOR, callback: Callback<RotationVectorResponse>): void;

  /**
   * Subscribes to only one data change of the significant motion sensor.
   *
   * @param { SensorType.SENSOR_TYPE_ID_SIGNIFICANT_MOTION } type - Type of the sensor to subscribe to, which is
   *     **SENSOR_TYPE_ID_SIGNIFICANT_MOTION**.
   * @param { Callback<SignificantMotionResponse> } callback - One-shot callback used to return the significant motion
   *     sensor data. The reported data type in the callback is **SignificantMotionResponse**.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.once(type: SensorId.SIGNIFICANT_MOTION, callback: Callback<SignificantMotionResponse>)
   */
  function once(type: SensorType.SENSOR_TYPE_ID_SIGNIFICANT_MOTION, callback: Callback<SignificantMotionResponse>): void;

  /**
   * Subscribes to only one data change of the wear detection sensor.
   *
   * @param { SensorType.SENSOR_TYPE_ID_WEAR_DETECTION } type - Type of the sensor to subscribe to, which is
   *     **SENSOR_TYPE_ID_WEAR_DETECTION**.
   * @param { Callback<WearDetectionResponse> } callback - One-shot callback used to return the wear detection sensor
   *     data. The reported data type in the callback is **WearDetectionResponse**.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.once(type: SensorId.WEAR_DETECTION, callback: Callback<WearDetectionResponse>)
   */
  function once(type: SensorType.SENSOR_TYPE_ID_WEAR_DETECTION, callback: Callback<WearDetectionResponse>): void;

  /**
   * Unsubscribes from sensor data changes.
   *
   * @permission ohos.permission.ACCELEROMETER
   * @param { SensorType.SENSOR_TYPE_ID_ACCELEROMETER } type - Type of the sensor to unsubscribe from, which is
   *     **SENSOR_TYPE_ID_ACCELEROMETER**.
   * @param { Callback<AccelerometerResponse> } callback - Callback used for unsubscription. If this parameter is not
   *     specified, all callbacks of the specified sensor type are unsubscribed from.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.off(type: SensorId.ACCELEROMETER, callback?: Callback<AccelerometerResponse>)
   */
  function off(type: SensorType.SENSOR_TYPE_ID_ACCELEROMETER, callback?: Callback<AccelerometerResponse>): void;

  /**
   * Unsubscribes from sensor data changes.
   *
   * @permission ohos.permission.ACCELEROMETER
   * @param { SensorType.SENSOR_TYPE_ID_ACCELEROMETER_UNCALIBRATED } type - Type of the sensor to unsubscribe from,
   *     which is **SENSOR_TYPE_ID_ACCELEROMETER_UNCALIBRATED**.
   * @param { Callback<AccelerometerUncalibratedResponse> } callback - Callback used for unsubscription. If this
   *     parameter is not specified, all callbacks of the specified sensor type are unsubscribed from.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.off(type: SensorId.ACCELEROMETER_UNCALIBRATED, callback?: Callback<AccelerometerUncalibratedResponse>)
   */
  function off(type: SensorType.SENSOR_TYPE_ID_ACCELEROMETER_UNCALIBRATED,
    callback?: Callback<AccelerometerUncalibratedResponse>): void;

  /**
   * Unsubscribes from sensor data changes.
   *
   * @param { SensorType.SENSOR_TYPE_ID_AMBIENT_LIGHT } type - Type of the sensor to unsubscribe from, which is
   *     **SENSOR_TYPE_ID_AMBIENT_LIGHT**.
   * @param { Callback<LightResponse> } callback - Callback used for unsubscription. If this parameter is not specified,
   *     all callbacks of the specified sensor type are unsubscribed from.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.off(type: SensorId.AMBIENT_LIGHT, callback?: Callback<LightResponse>)
   */
  function off(type: SensorType.SENSOR_TYPE_ID_AMBIENT_LIGHT, callback?: Callback<LightResponse>): void;

  /**
   * Unsubscribes from sensor data changes.
   *
   * @param { SensorType.SENSOR_TYPE_ID_AMBIENT_TEMPERATURE } type - Type of the sensor to unsubscribe from, which is
   *     **SENSOR_TYPE_ID_AMBIENT_TEMPERATURE**.
   * @param { Callback<AmbientTemperatureResponse> } callback - Callback used for unsubscription. If this parameter is
   *     not specified, all callbacks of the specified sensor type are unsubscribed from.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.off(type: SensorId.AMBIENT_TEMPERATURE, callback?: Callback<AmbientTemperatureResponse>)
   */
  function off(type: SensorType.SENSOR_TYPE_ID_AMBIENT_TEMPERATURE, callback?: Callback<AmbientTemperatureResponse>): void;

  /**
   * Unsubscribes from sensor data changes.
   *
   * @param { SensorType.SENSOR_TYPE_ID_BAROMETER } type - Type of the sensor to unsubscribe from, which is
   *     **SENSOR_TYPE_ID_BAROMETER**.
   * @param { Callback<BarometerResponse> } callback - Callback used for unsubscription. If this parameter is not
   *     specified, all callbacks of the specified sensor type are unsubscribed from.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.off(type: SensorId.BAROMETER, callback?: Callback<BarometerResponse>)
   */
  function off(type: SensorType.SENSOR_TYPE_ID_BAROMETER, callback?: Callback<BarometerResponse>): void;

  /**
   * Unsubscribes from sensor data changes.
   *
   * @param { SensorType.SENSOR_TYPE_ID_GRAVITY } type - Type of the sensor to unsubscribe from, which is
   *     **SENSOR_TYPE_ID_GRAVITY**.
   * @param { Callback<GravityResponse> } callback - Callback used for unsubscription. If this parameter is not
   *     specified, all callbacks of the specified sensor type are unsubscribed from.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.off(type: SensorId.GRAVITY, callback?: Callback<GravityResponse>)
   */
  function off(type: SensorType.SENSOR_TYPE_ID_GRAVITY, callback?: Callback<GravityResponse>): void;

  /**
   * Unsubscribes from sensor data changes.
   *
   * @permission ohos.permission.GYROSCOPE
   * @param { SensorType.SENSOR_TYPE_ID_GYROSCOPE } type - Type of the sensor to unsubscribe from, which is
   *     **SENSOR_TYPE_ID_GYROSCOPE**.
   * @param { Callback<GyroscopeResponse> } callback - Callback used for unsubscription. If this parameter is not
   *     specified, all callbacks of the specified sensor type are unsubscribed from.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.off(type: SensorId.GYROSCOPE, callback?: Callback<GyroscopeResponse>)
   */
  function off(type: SensorType.SENSOR_TYPE_ID_GYROSCOPE, callback?: Callback<GyroscopeResponse>): void;

  /**
   * Unsubscribes from sensor data changes.
   *
   * @permission ohos.permission.GYROSCOPE
   * @param { SensorType.SENSOR_TYPE_ID_GYROSCOPE_UNCALIBRATED } type - Type of the sensor to unsubscribe from, which is
   *     **SENSOR_TYPE_ID_GYROSCOPE_UNCALIBRATED**.
   * @param { Callback<GyroscopeUncalibratedResponse> } callback - Callback used for unsubscription. If this parameter
   *     is not specified, all callbacks of the specified sensor type are unsubscribed from.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.off(type: SensorId.GYROSCOPE_UNCALIBRATED, callback?: Callback<GyroscopeUncalibratedResponse>)
   */
  function off(type: SensorType.SENSOR_TYPE_ID_GYROSCOPE_UNCALIBRATED, callback?: Callback<GyroscopeUncalibratedResponse>): void;

  /**
   * Unsubscribes from sensor data changes.
   *
   * @param { SensorType.SENSOR_TYPE_ID_HALL } type - Type of the sensor to unsubscribe from, which is
   *     **SENSOR_TYPE_ID_HALL**.
   * @param { Callback<HallResponse> } callback - Callback used for unsubscription. If this parameter is not specified,
   *     all callbacks of the specified sensor type are unsubscribed from.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.off(type: SensorId.HALL, callback?: Callback<HallResponse>)
   */
  function off(type: SensorType.SENSOR_TYPE_ID_HALL, callback?: Callback<HallResponse>): void;

  /**
   * Unsubscribes from sensor data changes.
   *
   * @permission ohos.permission.HEALTH_DATA
   * @param { SensorType.SENSOR_TYPE_ID_HEART_RATE } type - Type of the sensor to unsubscribe from, which is
   *     **SENSOR_TYPE_ID_HEART_RATE**.
   * @param { Callback<HeartRateResponse> } callback - Callback used for unsubscription. If this parameter is not
   *     specified, all callbacks of the specified sensor type are unsubscribed from.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.off(type: SensorId.HEART_RATE, callback?: Callback<HeartRateResponse>)
   */
  function off(type: SensorType.SENSOR_TYPE_ID_HEART_RATE, callback?: Callback<HeartRateResponse>): void;

  /**
   * Unsubscribes from sensor data changes.
   *
   * @param { SensorType.SENSOR_TYPE_ID_HUMIDITY } type - Type of the sensor to unsubscribe from, which is
   *     **SENSOR_TYPE_ID_HUMIDITY**.
   * @param { Callback<HumidityResponse> } callback - Callback used for unsubscription. If this parameter is not
   *     specified, all callbacks of the specified sensor type are unsubscribed from.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.off(type: SensorId.HUMIDITY, callback?: Callback<HumidityResponse>)
   */
  function off(type: SensorType.SENSOR_TYPE_ID_HUMIDITY, callback?: Callback<HumidityResponse>): void;

  /**
   * Unsubscribes from sensor data changes.
   *
   * @permission ohos.permission.ACCELEROMETER
   * @param { SensorType.SENSOR_TYPE_ID_LINEAR_ACCELERATION } type - Type of the sensor to unsubscribe from, which is
   *     **SENSOR_TYPE_ID_LINEAR_ACCELERATION**.
   * @param { Callback<LinearAccelerometerResponse> } callback - Callback used for unsubscription. If this parameter is
   *     not specified, all callbacks of the specified sensor type are unsubscribed from.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.off(type: SensorId.LINEAR_ACCELEROMETER, callback?: Callback<LinearAccelerometerResponse>)
   */
  function off(type: SensorType.SENSOR_TYPE_ID_LINEAR_ACCELERATION, callback?: Callback<LinearAccelerometerResponse>): void;

  /**
   * Unsubscribes from sensor data changes.
   *
   * @param { SensorType.SENSOR_TYPE_ID_MAGNETIC_FIELD } type - Type of the sensor to unsubscribe from, which is
   *     **SENSOR_TYPE_ID_MAGNETIC_FIELD**.
   * @param { Callback<MagneticFieldResponse> } callback - Callback used for unsubscription. If this parameter is not
   *     specified, all callbacks of the specified sensor type are unsubscribed from.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.off(type: SensorId.MAGNETIC_FIELD, callback?: Callback<MagneticFieldResponse>)
   */
  function off(type: SensorType.SENSOR_TYPE_ID_MAGNETIC_FIELD, callback?: Callback<MagneticFieldResponse>): void;

  /**
   * Unsubscribes from sensor data changes.
   *
   * @param { SensorType.SENSOR_TYPE_ID_MAGNETIC_FIELD_UNCALIBRATED } type - Type of the sensor to unsubscribe from,
   *     which is **SENSOR_TYPE_ID_MAGNETIC_FIELD_UNCALIBRATED**.
   * @param { Callback<MagneticFieldUncalibratedResponse> } callback - Callback used for unsubscription. If this
   *     parameter is not specified, all callbacks of the specified sensor type are unsubscribed from.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.off(type: SensorId.MAGNETIC_FIELD_UNCALIBRATED, callback?: Callback<MagneticFieldUncalibratedResponse>)
   */
  function off(type: SensorType.SENSOR_TYPE_ID_MAGNETIC_FIELD_UNCALIBRATED, callback?: Callback<MagneticFieldUncalibratedResponse>): void;

  /**
   * Unsubscribes from sensor data changes.
   *
   * @param { SensorType.SENSOR_TYPE_ID_ORIENTATION } type - Type of the sensor to unsubscribe from, which is
   *     **SENSOR_TYPE_ID_ORIENTATION**.
   * @param { Callback<OrientationResponse> } callback - Callback used for unsubscription. If this parameter is not
   *     specified, all callbacks of the specified sensor type are unsubscribed from.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.off(type: SensorId.ORIENTATION, callback?: Callback<OrientationResponse>)
   */
  function off(type: SensorType.SENSOR_TYPE_ID_ORIENTATION, callback?: Callback<OrientationResponse>): void;

  /**
   * Unsubscribes from sensor data changes.
   *
   * @permission ohos.permission.ACTIVITY_MOTION
   * @param { SensorType.SENSOR_TYPE_ID_PEDOMETER } type - Type of the sensor to unsubscribe from, which is
   *     **SENSOR_TYPE_ID_PEDOMETER**.
   * @param { Callback<PedometerResponse> } callback - Callback used for unsubscription. If this parameter is not
   *     specified, all callbacks of the specified sensor type are unsubscribed from.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.off(type: SensorId.PEDOMETER, callback?: Callback<PedometerResponse>)
   */
  function off(type: SensorType.SENSOR_TYPE_ID_PEDOMETER, callback?: Callback<PedometerResponse>): void;

  /**
   * Unsubscribes from sensor data changes.
   *
   * @permission ohos.permission.ACTIVITY_MOTION
   * @param { SensorType.SENSOR_TYPE_ID_PEDOMETER_DETECTION } type - Type of the sensor to unsubscribe from, which is
   *     **SENSOR_TYPE_ID_PEDOMETER_DETECTION**.
   * @param { Callback<PedometerDetectionResponse> } callback - Callback used for unsubscription. If this parameter is
   *     not specified, all callbacks of the specified sensor type are unsubscribed from.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.off(type: SensorId.PEDOMETER_DETECTION, callback?: Callback<PedometerDetectionResponse>)
   */
  function off(type: SensorType.SENSOR_TYPE_ID_PEDOMETER_DETECTION, callback?: Callback<PedometerDetectionResponse>): void;

  /**
   * Unsubscribes from sensor data changes.
   *
   * @param { SensorType.SENSOR_TYPE_ID_PROXIMITY } type - Type of the sensor to unsubscribe from, which is
   *     **SENSOR_TYPE_ID_PROXIMITY**.
   * @param { Callback<ProximityResponse> } callback - Callback used for unsubscription. If this parameter is not
   *     specified, all callbacks of the specified sensor type are unsubscribed from.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.off(type: SensorId.PROXIMITY, callback?: Callback<ProximityResponse>)
   */
  function off(type: SensorType.SENSOR_TYPE_ID_PROXIMITY, callback?: Callback<ProximityResponse>): void;

  /**
   * Unsubscribes from sensor data changes.
   *
   * @param { SensorType.SENSOR_TYPE_ID_ROTATION_VECTOR } type - Type of the sensor to unsubscribe from, which is
   *     **SENSOR_TYPE_ID_ROTATION_VECTOR**.
   * @param { Callback<RotationVectorResponse> } callback - Callback used for unsubscription. If this parameter is not
   *     specified, all callbacks of the specified sensor type are unsubscribed from.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.off(type: SensorId.ROTATION_VECTOR, callback?: Callback<RotationVectorResponse>)
   */
  function off(type: SensorType.SENSOR_TYPE_ID_ROTATION_VECTOR, callback?: Callback<RotationVectorResponse>): void;

  /**
   * Unsubscribes from valid motion sensor data.
   *
   * @param { SensorType.SENSOR_TYPE_ID_SIGNIFICANT_MOTION } type - Type of the sensor to unsubscribe from, which is
   *     **SENSOR_TYPE_ID_SIGNIFICANT_MOTION**.
   * @param { Callback<SignificantMotionResponse> } callback - Callback used for unsubscription. If this parameter is
   *     not specified, all callbacks of the specified sensor type are unsubscribed from.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.off(type: SensorId.SIGNIFICANT_MOTION, callback?: Callback<SignificantMotionResponse>)
   */
  function off(type: SensorType.SENSOR_TYPE_ID_SIGNIFICANT_MOTION, callback?: Callback<SignificantMotionResponse>): void;

  /**
   * Unsubscribes from sensor data changes.
   *
   * @param { SensorType.SENSOR_TYPE_ID_WEAR_DETECTION } type - Type of the sensor to unsubscribe from, which is
   *     **SENSOR_TYPE_ID_WEAR_DETECTION**.
   * @param { Callback<WearDetectionResponse> } callback - Callback used for unsubscription. If this parameter is not
   *     specified, all callbacks of the specified sensor type are unsubscribed from.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.off(type: SensorId.WEAR_DETECTION, callback?: Callback<WearDetectionResponse>)
   */
  function off(type: SensorType.SENSOR_TYPE_ID_WEAR_DETECTION, callback?: Callback<WearDetectionResponse>): void;

  /**
   * Describes the sensor information.
   *
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   * @since 23 static
   */
  interface Sensor {
    /**
     * Sensor name.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 9 dynamic
     * @since 23 static
     */
    sensorName:string;

    /**
     * Vendor of the sensor.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 9 dynamic
     * @since 23 static
     */
    vendorName:string;

    /**
     * Firmware version of the sensor.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 9 dynamic
     * @since 23 static
     */
    firmwareVersion:string;

    /**
     * Hardware version of the sensor.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 9 dynamic
     * @since 23 static
     */
    hardwareVersion:string;

    /**
     * Sensor type ID.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 9 dynamic
     * @since 23 static
     */
    sensorId:int;

    /**
     * Maximum measurement range of the sensor.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 9 dynamic
     * @since 23 static
     */
    maxRange:double;

    /**
     * Minimum sampling period.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 9 dynamic
     * @since 23 static
     */
    minSamplePeriod:long;

    /**
     * Maximum sampling period.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 9 dynamic
     * @since 23 static
     */
    maxSamplePeriod:long;

    /**
     * Precision of the sensor.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 9 dynamic
     * @since 23 static
     */
    precision:double;

    /**
     * Estimated sensor power, in mA.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 9 dynamic
     * @since 23 static
     */
    power:double;

    /**
     * Sensor index.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 19 dynamic
     * @since 23 static
     */
    sensorIndex?: int;

    /**
     * Device ID.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 19 dynamic
     * @since 23 static
     */
    deviceId?: int;

    /**
     * Device name.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 19 dynamic
     * @since 23 static
     */
    deviceName?: string;

    /**
     * Whether the sensor is a local sensor. The value **true** indicates a local sensor, and the value **false**
     * indicates the opposite.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 19 dynamic
     * @since 23 static
     */
    isLocalSensor?: boolean;

    /**
     * Whether the sensor is a mock sensor. The value **true** indicates a mock sensor, and the value **false**
     * indicates the opposite.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 23 dynamic&static
     */
    isMockSensor?: boolean;
  }

  /**
   * Obtains information about the sensor of a specific type. This API uses an asynchronous callback to return the
   * result.
   *
   * @param { SensorId } type - Sensor type.
   * @param { AsyncCallback<Sensor> } callback - Callback used to return the sensor information.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @throws { BusinessError } 14500102 - The sensor is not supported by the device. [since 12]
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   * @since 23 static
   */
  function getSingleSensor(type: SensorId, callback: AsyncCallback<Sensor>): void;

  /**
   * Obtains information about the sensor of a specific type. This API uses a promise to return the result.
   *
   * @param { SensorId } type - Sensor type.
   * @returns { Promise<Sensor> } Promise used to return the sensor information.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @throws { BusinessError } 14500102 - The sensor is not supported by the device. [since 12]
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   * @since 23 static
   */
  function getSingleSensor(type: SensorId): Promise<Sensor>;

  /**
   * Obtains information about the sensor of a specific type. This API returns the result synchronously.
   *
   * @param { SensorId } type - Sensor type.
   * @returns { Sensor } Sensor information.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @throws { BusinessError } 14500102 - The sensor is not supported by the device.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 12 dynamic
   * @since 23 static
   */
  function getSingleSensorSync(type: SensorId): Sensor;

  /**
   * Obtains information about the sensor of a specific type.
   *
   * @param { SensorId } type - Sensor type.
   * @param { int } [deviceId] - Device ID. The default value is **-1**, indicating the local device. You can use
   *     [getSensorList]{@link sensor.getSensorList(callback: AsyncCallback<Array<Sensor>>)} or
   *     [sensorStatusChange]{@link sensor.on(type: 'sensorStatusChange', callback: Callback<SensorStatusEvent>)} to
   *     obtain the device ID.
   * @returns { Array<Sensor> } Sensor attribute list.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 19 dynamic
   * @since 23 static
   */
  function getSingleSensorByDeviceSync(type: SensorId, deviceId?: int): Array<Sensor>;

  /**
   * Obtains information about all sensors on the device. This API uses an asynchronous callback to return the result.
   *
   * @param { AsyncCallback<Array<Sensor>> } callback - Callback used to return the sensor list.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   * @since 23 static
   */
  function getSensorList(callback: AsyncCallback<Array<Sensor>>): void;

  /**
   * Obtains information about all sensors on the device. This API uses a promise to return the result.
   *
   * @returns { Promise<Array<Sensor>> } Promise used to return the sensor list.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   * @since 23 static
   */
  function getSensorList(): Promise<Array<Sensor>>;

  /**
   * Obtains information about all sensors on the device. This API returns the result synchronously.
   *
   * @returns { Array<Sensor> } List of sensor attributes.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 12 dynamic
   * @since 23 static
   */
  function getSensorListSync(): Array<Sensor>;

  /**
   * Obtains the information about all sensors on the device.
   *
   * @param { int } [deviceId] - Device ID. The default value is **-1**, indicating the local device. You can use
   *     [getSensorList]{@link sensor.getSensorList(callback: AsyncCallback<Array<Sensor>>)} or
   *     [sensorStatusChange]{@link sensor.on(type: 'sensorStatusChange', callback: Callback<SensorStatusEvent>)} to
   *     obtain the device ID.
   * @returns { Array<Sensor> } Sensor attribute list.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 19 dynamic
   * @since 23 static
   */
  function getSensorListByDeviceSync(deviceId?: int): Array<Sensor>;

  /**
   * Describes a geomagnetic response object.
   *
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamic
   * @since 23 static
   */
  interface GeomagneticResponse {
    /**
     * North component of the geomagnetic field, in nT.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    x: double;

    /**
     * East component of the geomagnetic field, in nT.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    y: double;

    /**
     * Vertical component of the geomagnetic field, in nT.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    z: double;

    /**
     * Magnetic dip, also called magnetic inclination, which is the angle measured from the horizontal plane to the
     * magnetic field vector, in degrees.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    geomagneticDip: double;

    /**
     * Magnetic declination, which is the angle between true north (geographic north) and the magnetic north (the
     * horizontal component of the field), in degrees.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    deflectionAngle: double;

    /**
     * Horizontal intensity of the magnetic field vector field, in nT.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    levelIntensity: double;

    /**
     * Total intensity of the magnetic field vector, in nT.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    totalIntensity: double;
  }

  /**
   * Describes the geographical location.
   *
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamic
   * @since 23 static
   */
  interface LocationOptions {
    /**
     * Latitude, in degrees.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    latitude: double;

    /**
     * Longitude, in degrees.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    longitude: double;

    /**
     * Altitude, in m.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    altitude: double;
  }

  /**
   * Obtains the geomagnetic field of a geographic location. This API uses an asynchronous callback to return the
   * result.
   *
   * @param { LocationOptions } locationOptions - Geographic location.
   * @param { number } timeMillis - Time for obtaining the magnetic declination, in milliseconds.
   * @param { AsyncCallback<GeomagneticResponse> } callback - Callback used to return the geomagnetic field.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.getGeomagneticInfo(locationOptions: LocationOptions, timeMillis: long, callback: AsyncCallback<GeomagneticResponse>)
   */
  function getGeomagneticField(locationOptions: LocationOptions, timeMillis: number, callback: AsyncCallback<GeomagneticResponse>): void;

  /**
   * Obtains the geomagnetic field of a geographic location. This API uses a promise to return the result.
   *
   * @param { LocationOptions } locationOptions - Geographic location.
   * @param { number } timeMillis - Time for obtaining the magnetic declination, in milliseconds.
   * @returns { Promise<GeomagneticResponse> } Promise used to return the geomagnetic field.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.getGeomagneticInfo(locationOptions: LocationOptions, timeMillis: long)
   */
  function getGeomagneticField(locationOptions: LocationOptions, timeMillis: number): Promise<GeomagneticResponse>;

  /**
   * Obtains the geomagnetic field of a geographic location at a certain time. This API uses an asynchronous callback to
   * return the result.
   *
   * @param { LocationOptions } locationOptions - Geographic location, including the longitude, latitude, and altitude.
   * @param { long } timeMillis - Time when the magnetic declination is obtained. The value is a Unix timestamp, in ms.
   * @param { AsyncCallback<GeomagneticResponse> } callback - Callback used to return the geomagnetic field.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   * @since 23 static
   */
  function getGeomagneticInfo(locationOptions: LocationOptions, timeMillis: long, callback: AsyncCallback<GeomagneticResponse>): void;

  /**
   * Obtains the geomagnetic field of a geographic location at a certain time. This API uses a promise to return the
   * result.
   *
   * @param { LocationOptions } locationOptions - Geographic location, including the longitude, latitude, and altitude.
   * @param { long } timeMillis - Time when the magnetic declination is obtained. The value is a Unix timestamp, in ms.
   * @returns { Promise<GeomagneticResponse> } Promise used to return the geomagnetic field.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   * @since 23 static
   */
  function getGeomagneticInfo(locationOptions: LocationOptions, timeMillis: long): Promise<GeomagneticResponse>;

  /**
   * Obtains the altitude at which the device is located based on the sea-level atmospheric pressure and the current
   * atmospheric pressure. This API uses an asynchronous callback to return the result.
   *
   * @param { number } seaPressure - Sea-level atmospheric pressure, in hPa.
   * @param { number } currentPressure - Atmospheric pressure at the altitude where the device is located, in hPa.
   * @param { AsyncCallback<number> } callback - Callback used to return the altitude, in meters.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.getDeviceAltitude(seaPressure: double, currentPressure: double, callback: AsyncCallback<double>)
   */
  function getAltitude(seaPressure: number, currentPressure: number, callback: AsyncCallback<number>): void;

  /**
   * Obtains the altitude at which the device is located based on the sea-level atmospheric pressure and the current
   * atmospheric pressure. This API uses a promise to return the result.
   *
   * @param { number } seaPressure - Sea-level atmospheric pressure, in hPa.
   * @param { number } currentPressure - Atmospheric pressure at the altitude where the device is located, in hPa.
   * @returns { Promise<number> } Promise used to return the altitude, in meters.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.getDeviceAltitude(seaPressure: double, currentPressure: double)
   */
  function getAltitude(seaPressure: number, currentPressure: number): Promise<number>;

  /**
   * Obtains the altitude based on the atmospheric pressure. This API uses an asynchronous callback to return the
   * result.
   *
   * @param { double } seaPressure - Sea-level atmospheric pressure, in hPa.
   * @param { double } currentPressure - Specified atmospheric pressure, in hPa.
   * @param { AsyncCallback<double> } callback - Callback used to return the altitude, in meters.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   * @since 23 static
   */
  function getDeviceAltitude(seaPressure: double, currentPressure: double, callback: AsyncCallback<double>): void;

  /**
   * Obtains the altitude based on the atmospheric pressure. This API uses a promise to return the result.
   *
   * @param { double } seaPressure - Sea-level atmospheric pressure, in hPa.
   * @param { double } currentPressure - Specified atmospheric pressure, in hPa.
   * @returns { Promise<double> } Promise used to return the altitude, in meters.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   * @since 23 static
   */
  function getDeviceAltitude(seaPressure: double, currentPressure: double): Promise<double>;

  /**
   * Obtains the magnetic dip based on the inclination matrix. This API uses an asynchronous callback to return the
   * result.
   *
   * @param { Array<number> } inclinationMatrix - Inclination matrix.
   * @param { AsyncCallback<number> } callback - Callback used to return the magnetic dip, in radians.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.getInclination(inclinationMatrix: Array<double>, callback: AsyncCallback<double>)
   */
  function getGeomagneticDip(inclinationMatrix: Array<number>, callback: AsyncCallback<number>): void;

  /**
   * Obtains the magnetic dip based on the inclination matrix. This API uses a promise to return the result.
   *
   * @param { Array<number> } inclinationMatrix - Inclination matrix.
   * @returns { Promise<number> } Promise used to return the magnetic dip, in radians.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.getInclination(inclinationMatrix: Array<double>)
   */
  function getGeomagneticDip(inclinationMatrix: Array<number>): Promise<number>;

  /**
   * Obtains the magnetic dip based on the inclination matrix. This API uses an asynchronous callback to return the
   * result.
   *
   * @param { Array<double> } inclinationMatrix - Inclination matrix.
   * @param { AsyncCallback<double> } callback - Callback used to return the magnetic dip, in radians.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   * @since 23 static
   */
  function getInclination(inclinationMatrix: Array<double>, callback: AsyncCallback<double>): void;

  /**
   * Obtains the magnetic dip based on the inclination matrix. This API uses a promise to return the result.
   *
   * @param { Array<double> } inclinationMatrix - Inclination matrix.
   * @returns { Promise<double> } Promise used to return the magnetic dip, in radians.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   * @since 23 static
   */
  function getInclination(inclinationMatrix: Array<double>): Promise<double>;

  /**
   * Obtains the angle change between two rotation matrices. This API uses an asynchronous callback to return the
   * result.
   *
   * @param { Array<number> } currentRotationMatrix - Current rotation matrix.
   * @param { Array<number> } preRotationMatrix - The other rotation matrix.
   * @param { AsyncCallback<Array<number>> } callback - Callback used to return the angle change around the z, x, and y
   *     axes, in degrees.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.getAngleVariation(currentRotationMatrix: Array<double>, preRotationMatrix: Array<double>, callback: AsyncCallback<Array<double>>)
   */
  function getAngleModify(currentRotationMatrix: Array<number>, preRotationMatrix: Array<number>,
    callback: AsyncCallback<Array<number>>): void;

  /**
   * Obtains the angle change between two rotation matrices. This API uses a promise to return the result.
   *
   * @param { Array<number> } currentRotationMatrix - Current rotation matrix.
   * @param { Array<number> } preRotationMatrix - The other rotation matrix.
   * @returns { Promise<Array<number>> } Promise used to return the angle change around the z, x, and y axes, in
   *     degrees.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.getAngleVariation(currentRotationMatrix: Array<double>, preRotationMatrix: Array<double>)
   */
  function getAngleModify(currentRotationMatrix: Array<number>, preRotationMatrix: Array<number>): Promise<Array<number>>;

  /**
   * Obtains the angle change between two rotation matrices. This API uses an asynchronous callback to return the
   * result.
   *
   * @param { Array<double> } currentRotationMatrix - Current rotation matrix.
   * @param { Array<double> } preRotationMatrix - The other rotation matrix.
   * @param { AsyncCallback<Array<double>> } callback - Callback used to return the angle change around the z, x, and y
   *     axes, in degrees.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   * @since 23 static
   */
  function getAngleVariation(currentRotationMatrix: Array<double>, preRotationMatrix: Array<double>,
    callback: AsyncCallback<Array<double>>): void;

  /**
   * Obtains the angle change between two rotation matrices. This API uses a promise to return the result.
   *
   * @param { Array<double> } currentRotationMatrix - Current rotation matrix.
   * @param { Array<double> } preRotationMatrix - The other rotation matrix.
   * @returns { Promise<Array<double>> } Promise used to return the angle change around the z, x, and y axes, in
   *     degrees.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   * @since 23 static
   */
  function getAngleVariation(currentRotationMatrix: Array<double>, preRotationMatrix: Array<double>): Promise<Array<double>>;

  /**
   * Converts a rotation vector into a rotation matrix. This API uses an asynchronous callback to return the result.
   *
   * @param { Array<number> } rotationVector - Rotation vector to convert.
   * @param { AsyncCallback<Array<number>> } callback - Callback used to return the rotation matrix.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.getRotationMatrix(rotationVector: Array<double>, callback: AsyncCallback<Array<double>>)
   */
  function createRotationMatrix(rotationVector: Array<number>, callback: AsyncCallback<Array<number>>): void;

  /**
   * Converts a rotation vector into a rotation matrix. This API uses a promise to return the result.
   *
   * @param { Array<number> } rotationVector - Rotation vector to convert.
   * @returns { Promise<Array<number>> } Promise used to return the rotation matrix.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.getRotationMatrix(rotationVector: Array<double>)
   */
  function createRotationMatrix(rotationVector: Array<number>): Promise<Array<number>>;

  /**
   * Obtains the rotation matrix from a rotation vector. This API uses an asynchronous callback to return the result.
   *
   * @param { Array<double> } rotationVector - Rotation vector.
   * @param { AsyncCallback<Array<double>> } callback - Callback used to return the rotation matrix.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   * @since 23 static
   */
  function getRotationMatrix(rotationVector: Array<double>, callback: AsyncCallback<Array<double>>): void;

  /**
   * Obtains the rotation matrix from a rotation vector. This API uses a promise to return the result.
   *
   * @param { Array<double> } rotationVector - Rotation vector.
   * @returns { Promise<Array<double>> } Promise used to return the rotation matrix.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   * @since 23 static
   */
  function getRotationMatrix(rotationVector: Array<double>): Promise<Array<double>>;

  /**
   * Describes the coordinate options.
   *
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamic
   * @since 23 static
   */
  interface CoordinatesOptions {
    /**
     * X coordinate direction.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    x: int;

    /**
     * Y coordinate direction.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    y: int;
  }

  /**
   * Rotates a rotation vector so that it can represent the coordinate system in different ways. This API uses an
   * asynchronous callback to return the result.
   *
   * @param { Array<number> } inRotationVector - Rotation vector.
   * @param { CoordinatesOptions } coordinates - Direction of the coordinate system.
   * @param { AsyncCallback<Array<number>> } callback - Callback used to return the rotation vector after being rotated.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.transformRotationMatrix(inRotationVector: Array<double>, coordinates: CoordinatesOptions, callback: AsyncCallback<Array<double>>)
   */
  function transformCoordinateSystem(inRotationVector: Array<number>, coordinates: CoordinatesOptions,
    callback: AsyncCallback<Array<number>>): void;

  /**
   * Rotates a rotation vector so that it can represent the coordinate system in different ways. This API uses a promise
   * to return the result.
   *
   * @param { Array<number> } inRotationVector - Rotation vector.
   * @param { CoordinatesOptions } coordinates - Direction of the coordinate system.
   * @returns { Promise<Array<number>> } Promise used to return the rotation vector after being rotated.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.transformRotationMatrix(inRotationVector: Array<double>, coordinates: CoordinatesOptions)
   */
  function transformCoordinateSystem(inRotationVector: Array<number>, coordinates: CoordinatesOptions): Promise<Array<number>>;

  /**
   * Transforms a rotation vector based on the coordinate system. This API uses an asynchronous callback to return the
   * result.
   *
   * @param { Array<double> } inRotationVector - Rotation vector.
   * @param { CoordinatesOptions } coordinates - Rotation vector to transform.
   * @param { AsyncCallback<Array<double>> } callback - Callback used to return the rotation vector after being
   *     transformed.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   * @since 23 static
   */
  function transformRotationMatrix(inRotationVector: Array<double>, coordinates: CoordinatesOptions,
    callback: AsyncCallback<Array<double>>): void;

  /**
   * Transforms a rotation vector based on the coordinate system. This API uses a promise to return the result.
   *
   * @param { Array<double> } inRotationVector - Rotation vector.
   * @param { CoordinatesOptions } coordinates - Rotation vector to transform.
   * @returns { Promise<Array<double>> } Promise used to return the rotation vector after being transformed.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   * @since 23 static
   */
  function transformRotationMatrix(inRotationVector: Array<double>, coordinates: CoordinatesOptions): Promise<Array<double>>;

  /**
   * Converts a rotation vector into a quaternion. This API uses an asynchronous callback to return the result.
   *
   * @param { Array<number> } rotationVector - Rotation vector to convert.
   * @param { AsyncCallback<Array<number>> } callback - Callback used to return the quaternion.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.getQuaternion(rotationVector: Array<double>, callback: AsyncCallback<Array<double>>)
   */
  function createQuaternion(rotationVector: Array<number>, callback: AsyncCallback<Array<number>>): void;

  /**
   * Converts a rotation vector into a quaternion. This API uses a promise to return the result.
   *
   * @param { Array<number> } rotationVector - Rotation vector to convert.
   * @returns { Promise<Array<number>> } Promise used to return the quaternion.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.getQuaternion(rotationVector: Array<double>)
   */
  function createQuaternion(rotationVector: Array<number>): Promise<Array<number>>;

  /**
   * Obtains the quaternion from a rotation vector. This API uses an asynchronous callback to return the result.
   *
   * @param { Array<double> } rotationVector - Rotation vector.
   * @param { AsyncCallback<Array<double>> } callback - Callback used to return the quaternion.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   * @since 23 static
   */
  function getQuaternion(rotationVector: Array<double>, callback: AsyncCallback<Array<double>>): void;

  /**
   * Obtains the quaternion from a rotation vector. This API uses a promise to return the result.
   *
   * @param { Array<double> } rotationVector - Rotation vector.
   * @returns { Promise<Array<double>> } Promise used to return the quaternion.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   * @since 23 static
   */
  function getQuaternion(rotationVector: Array<double>): Promise<Array<double>>;

  /**
   * Obtains the device direction based on the rotation matrix. This API uses an asynchronous callback to return the
   * result.
   *
   * @param { Array<number> } rotationMatrix - Rotation matrix.
   * @param { AsyncCallback<Array<number>> } callback - Callback used to return the rotation angle around the z, x, and
   *     y axes, in degrees.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.getOrientation(rotationMatrix: Array<double>, callback: AsyncCallback<Array<double>>)
   */
  function getDirection(rotationMatrix: Array<number>, callback: AsyncCallback<Array<number>>): void;

  /**
   * Obtains the device direction based on the rotation matrix. This API uses a promise to return the result.
   *
   * @param { Array<number> } rotationMatrix - Rotation matrix.
   * @returns { Promise<Array<number>> } Promise used to return the rotation angle around the z, x, and y axes, in
   *     degrees.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.getOrientation(rotationMatrix: Array<double>)
   */
  function getDirection(rotationMatrix: Array<number>): Promise<Array<number>>;

  /**
   * Obtains the device direction based on the rotation matrix. This API uses an asynchronous callback to return the
   * result.
   *
   * @param { Array<double> } rotationMatrix - Rotation matrix.
   * @param { AsyncCallback<Array<double>> } callback - Callback used to return the rotation angle around the z, x, and
   *     y axes, in degrees.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   * @since 23 static
   */
  function getOrientation(rotationMatrix: Array<double>, callback: AsyncCallback<Array<double>>): void;

  /**
   * Obtains the device direction based on the rotation matrix. This API uses a promise to return the result.
   *
   * @param { Array<double> } rotationMatrix - Rotation matrix.
   * @returns { Promise<Array<double>> } Promise used to return the rotation angle around the z, x, and y axes, in
   *     degrees.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   * @since 23 static
   */
  function getOrientation(rotationMatrix: Array<double>): Promise<Array<double>>;

  /**
   * Describes the response for setting the rotation matrix.
   *
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamic
   * @since 23 static
   */
  interface RotationMatrixResponse {
    /**
     * Rotation matrix.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    rotation: Array<double>;

    /**
     * Inclination matrix.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    inclination: Array<double>;
  }

  /**
   * Obtains the rotation matrix based on a gravity vector and geomagnetic vector. This API uses an asynchronous
   * callback to return the result.
   *
   * @param { Array<number> } gravity - Gravity vector.
   * @param { Array<number> } geomagnetic - Geomagnetic vector.
   * @param { AsyncCallback<RotationMatrixResponse> } callback - Callback used to return the rotation matrix.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.getRotationMatrix(gravity: Array<double>, geomagnetic: Array<double>, callback: AsyncCallback<RotationMatrixResponse>)
   */
  function createRotationMatrix(gravity: Array<number>, geomagnetic: Array<number>, callback: AsyncCallback<RotationMatrixResponse>): void;

  /**
   * Obtains the rotation matrix based on a gravity vector and geomagnetic vector. This API uses a promise to return the
   * result.
   *
   * @param { Array<number> } gravity - Gravity vector.
   * @param { Array<number> } geomagnetic - Geomagnetic vector.
   * @returns { Promise<RotationMatrixResponse> } Promise used to return the rotation matrix.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.getRotationMatrix(gravity: Array<double>, geomagnetic: Array<double>)
   */
  function createRotationMatrix(gravity: Array<number>, geomagnetic: Array<number>,): Promise<RotationMatrixResponse>;

  /**
   * Obtains the rotation matrix based on a gravity vector and geomagnetic vector. This API uses an asynchronous
   * callback to return the result.
   *
   * @param { Array<double> } gravity - Gravity vector.
   * @param { Array<double> } geomagnetic - Geomagnetic vector.
   * @param { AsyncCallback<RotationMatrixResponse> } callback - Callback used to return the rotation matrix.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   * @since 23 static
   */
  function getRotationMatrix(gravity: Array<double>, geomagnetic: Array<double>, callback: AsyncCallback<RotationMatrixResponse>): void;

  /**
   * Obtains the rotation matrix based on a gravity vector and geomagnetic vector. This API uses a promise to return the
   * result.
   *
   * @param { Array<double> } gravity - Gravity vector.
   * @param { Array<double> } geomagnetic - Geomagnetic vector.
   * @returns { Promise<RotationMatrixResponse> } Promise used to return the rotation matrix.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   * @since 23 static
   */
  function getRotationMatrix(gravity: Array<double>, geomagnetic: Array<double>): Promise<RotationMatrixResponse>;

  /**
   * Describes the sensor data reporting frequency.
   *
   * @syscap SystemCapability.Sensors.Sensor
   * @atomicservice [since 11]
   * @since 8 dynamic
   * @since 23 static
   */
  interface Options {
    /**
     * Frequency at which a sensor reports data. The default value is 200,000,000 ns. The maximum and minimum values of
     * this parameter are determined by the reporting frequency supported by the hardware. If the configured frequency
     * is greater than the maximum value, the maximum value is used for data reporting. If the configured frequency is
     * less than the minimum value, the minimum value is used for data reporting.
     *
     * @type { ?number } [since 8 - 10]
     * @type { ?(long | SensorFrequency) } [since 11]
     * @syscap SystemCapability.Sensors.Sensor
     * @atomicservice [since 11]
     * @since 8 dynamic
     * @since 23 static
     */
    interval?: long | SensorFrequency;

    /**
     * Sensor parameters, including **deviceId** and **sensorIndex**.
     *
     * This API can be used in atomic services since API version 19.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @atomicservice
     * @since 19 dynamic
     * @since 23 static
     */
    sensorInfoParam?: SensorInfoParam;
  }

  /**
   * Defines the reporting frequency mode of the sensor.
   *
   * @syscap SystemCapability.Sensors.Sensor
   * @unionmember { 'game' } Game mode, which specifies a sensor data reporting frequency of 20,000,000 ns. This
   *     parameter takes effect only when the frequency is within the frequency range supported by the hardware.
   * @unionmember { 'ui' } UI mode, which specifies a sensor data reporting frequency of 60,000,000 ns. This parameter
   *     takes effect only when the frequency is within the frequency range supported by the hardware.
   * @unionmember { 'normal' } Normal mode, which specifies a sensor data reporting frequency of 200,000,000 ns. This
   *     parameter takes effect only when the frequency is within the frequency range supported by the hardware.
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  type SensorFrequency = 'game' | 'ui' | 'normal';

  /**
   * Enumerates the sensor types.
   *
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.SensorId
   */
  enum SensorType {
    /**
     * Acceleration sensor.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead sensor.SensorId#ACCELEROMETER
     */
    SENSOR_TYPE_ID_ACCELEROMETER = 1,

    /**
     * Gyroscope sensor.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead sensor.SensorId#GYROSCOPE
     */
    SENSOR_TYPE_ID_GYROSCOPE = 2,

    /**
     * Ambient light sensor.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead sensor.SensorId#AMBIENT_LIGHT
     */
    SENSOR_TYPE_ID_AMBIENT_LIGHT = 5,

    /**
     * Magnetic field sensor.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead sensor.SensorId#MAGNETIC_FIELD
     */
    SENSOR_TYPE_ID_MAGNETIC_FIELD = 6,

    /**
     * Barometer sensor.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead sensor.SensorId#BAROMETER
     */
    SENSOR_TYPE_ID_BAROMETER = 8,

    /**
     * Hall effect sensor.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead sensor.SensorId#HALL
     */
    SENSOR_TYPE_ID_HALL = 10,

    /**
     * Proximity sensor.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead sensor.SensorId#PROXIMITY
     */
    SENSOR_TYPE_ID_PROXIMITY = 12,

    /**
     * Humidity sensor.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead sensor.SensorId#HUMIDITY
     */
    SENSOR_TYPE_ID_HUMIDITY = 13,

    /**
     * Orientation sensor.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead sensor.SensorId#ORIENTATION
     */
    SENSOR_TYPE_ID_ORIENTATION = 256,

    /**
     * Gravity sensor.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead sensor.SensorId#GRAVITY
     */
    SENSOR_TYPE_ID_GRAVITY = 257,

    /**
     * Linear acceleration sensor.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead sensor.SensorId#LINEAR_ACCELEROMETER
     */
    SENSOR_TYPE_ID_LINEAR_ACCELERATION = 258,

    /**
     * Rotation vector sensor.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead sensor.SensorId#ROTATION_VECTOR
     */
    SENSOR_TYPE_ID_ROTATION_VECTOR = 259,

    /**
     * Ambient temperature sensor.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead sensor.SensorId#AMBIENT_TEMPERATURE
     */
    SENSOR_TYPE_ID_AMBIENT_TEMPERATURE = 260,

    /**
     * Uncalibrated magnetic field sensor.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead sensor.SensorId#MAGNETIC_FIELD_UNCALIBRATED
     */
    SENSOR_TYPE_ID_MAGNETIC_FIELD_UNCALIBRATED = 261,

    /**
     * Uncalibrated gyroscope sensor.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead sensor.SensorId#GYROSCOPE_UNCALIBRATED
     */
    SENSOR_TYPE_ID_GYROSCOPE_UNCALIBRATED = 263,

    /**
     * Significant motion sensor.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead sensor.SensorId#SIGNIFICANT_MOTION
     */
    SENSOR_TYPE_ID_SIGNIFICANT_MOTION = 264,

    /**
     * Pedometer detection sensor.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead sensor.SensorId#PEDOMETER_DETECTION
     */
    SENSOR_TYPE_ID_PEDOMETER_DETECTION = 265,

    /**
     * Pedometer sensor.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead sensor.SensorId#PEDOMETER
     */
    SENSOR_TYPE_ID_PEDOMETER = 266,

    /**
     * Heart rate sensor.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead sensor.SensorId#HEART_RATE
     */
    SENSOR_TYPE_ID_HEART_RATE = 278,

    /**
     * Wear detection sensor.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead sensor.SensorId#WEAR_DETECTION
     */
    SENSOR_TYPE_ID_WEAR_DETECTION = 280,

    /**
     * Uncalibrated acceleration sensor.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead sensor.SensorId#ACCELEROMETER_UNCALIBRATED
     */
    SENSOR_TYPE_ID_ACCELEROMETER_UNCALIBRATED = 281
  }

  /**
   * Enumerates the accuracy levels of sensor data.
   *
   * @syscap SystemCapability.Sensors.Sensor
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  enum SensorAccuracy {
    /**
     * The sensor data is unreliable.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    ACCURACY_UNRELIABLE = 0,

    /**
     * The sensor data is at a low accuracy level.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    ACCURACY_LOW = 1,

    /**
     * The sensor data is at a medium accuracy level.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    ACCURACY_MEDIUM = 2,

    /**
     * The sensor data is at a high accuracy level.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    ACCURACY_HIGH = 3
  }

  /**
   * Describes the timestamp of the sensor data.
   *
   * @syscap SystemCapability.Sensors.Sensor
   * @atomicservice [since 11]
   * @since 8 dynamic
   * @since 23 static
   */
  interface Response {
    /**
     * Timestamp when the sensor reports data. Time from device startup to data reporting, in nanoseconds.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @atomicservice [since 11]
     * @since 8 dynamic
     * @since 23 static
     */
    timestamp: long;

    /**
     * Accuracy of the sensor data.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    accuracy: SensorAccuracy;
  }

  /**
   * Describes the acceleration sensor data. It extends from [Response]{@link sensor.Response}.
   *
   * @syscap SystemCapability.Sensors.Sensor
   * @atomicservice [since 11]
   * @since 8 dynamic
   * @since 23 static
   */
  interface AccelerometerResponse extends Response {
    /**
     * Acceleration along the x-axis of the device, in m/s?. The value is equal to the reported physical quantity.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @atomicservice [since 11]
     * @since 8 dynamic
     * @since 23 static
     */
    x: double;

    /**
     * Acceleration along the y-axis of the device, in m/s?. The value is equal to the reported physical quantity.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @atomicservice [since 11]
     * @since 8 dynamic
     * @since 23 static
     */
    y: double;

    /**
     * Acceleration along the z-axis of the device, in m/s?. The value is equal to the reported physical quantity.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @atomicservice [since 11]
     * @since 8 dynamic
     * @since 23 static
     */
    z: double;
  }

  /**
   * Describes the linear acceleration sensor data. It extends from [Response]{@link sensor.Response}.
   *
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamic
   * @since 23 static
   */
  interface LinearAccelerometerResponse extends Response {
    /**
     * Linear acceleration along the x-axis of the device, in m/s?.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    x: double;

    /**
     * Linear acceleration along the y-axis of the device, in m/s?.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    y: double;

    /**
     * Linear acceleration along the z-axis of the device, in m/s?.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    z: double;
  }

  /**
   * Describes the uncalibrated acceleration sensor data. It extends from [Response]{@link sensor.Response}.
   *
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamic
   * @since 23 static
   */
  interface AccelerometerUncalibratedResponse extends Response {
    /**
     * Uncalibrated acceleration along the x-axis of the device, in m/s?.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    x: double;

    /**
     * Uncalibrated acceleration along the y-axis of the device, in m/s?.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    y: double;

    /**
     * Uncalibrated acceleration along the z-axis of the device, in m/s?.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    z: double;

    /**
     * Uncalibrated acceleration bias along the x-axis of the device, in m/s?.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    biasX: double;

    /**
     * Uncalibrated acceleration bias along the y-axis of the device, in m/s?.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    biasY: double;

    /**
     * Uncalibrated acceleration bias along the z-axis of the device, in m/s?.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    biasZ: double;
  }

  /**
   * Describes the gravity sensor data. It extends from [Response]{@link sensor.Response}.
   *
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamic
   * @since 23 static
   */
  interface GravityResponse extends Response {
    /**
     * Gravitational acceleration along the x-axis of the device, in m/s?.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    x: double;

    /**
     * Gravitational acceleration along the y-axis of the device, in m/s?.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    y: double;

    /**
     * Gravitational acceleration along the z-axis of the device, in m/s?.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    z: double;
  }

  /**
   * Describes the orientation sensor data. It extends from [Response]{@link sensor.Response}.
   *
   * @syscap SystemCapability.Sensors.Sensor
   * @atomicservice [since 11]
   * @since 8 dynamic
   * @since 23 static
   */
  interface OrientationResponse extends Response {
    /**
     * Rotation angle of the device around the z-axis, in degrees. The value ranges from 0 to 360.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @atomicservice [since 11]
     * @since 8 dynamic
     * @since 23 static
     */
    alpha: double;

    /**
     * Rotation angle of the device around the x-axis, in degrees. The value ranges from 0 to ¡À180.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @atomicservice [since 11]
     * @since 8 dynamic
     * @since 23 static
     */
    beta: double;

    /**
     * Rotation angle of the device around the y-axis, in degrees. The value ranges from 0 to ¡À90.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @atomicservice [since 11]
     * @since 8 dynamic
     * @since 23 static
     */
    gamma: double;
  }

  /**
   * Describes the rotation vector sensor data. It extends from [Response]{@link sensor.Response}.
   *
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamic
   * @since 23 static
   */
  interface RotationVectorResponse extends Response {
    /**
     * X-component of the rotation vector.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    x: double;

    /**
     * Y-component of the rotation vector.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    y: double;

    /**
     * Z-component of the rotation vector.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    z: double;

    /**
     * Scalar, which describes the rotation status of the device relative to a reference direction, in radians
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    w: double;
  }

  /**
   * Describes the gyroscope sensor data. It extends from [Response]{@link sensor.Response}.
   *
   * @syscap SystemCapability.Sensors.Sensor
   * @atomicservice [since 11]
   * @since 8 dynamic
   * @since 23 static
   */
  interface GyroscopeResponse extends Response {
    /**
     * Angular velocity of rotation around the x-axis of the device, in rad/s. The value is equal to the reported
     * physical quantity.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @atomicservice [since 11]
     * @since 8 dynamic
     * @since 23 static
     */
    x: double;

    /**
     * Angular velocity of rotation around the y-axis of the device, in rad/s. The value is equal to the reported
     * physical quantity.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @atomicservice [since 11]
     * @since 8 dynamic
     * @since 23 static
     */
    y: double;

    /**
     * Angular velocity of rotation around the z-axis of the device, in rad/s. The value is equal to the reported
     * physical quantity.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @atomicservice [since 11]
     * @since 8 dynamic
     * @since 23 static
     */
    z: double;
  }

  /**
   * Describes the uncalibrated gyroscope sensor data. It extends from [Response]{@link sensor.Response}.
   *
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamic
   * @since 23 static
   */
  interface GyroscopeUncalibratedResponse extends Response {
    /**
     * Uncalibrated angular velocity of rotation around the x-axis of the device, in rad/s.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    x: double;

    /**
     * Uncalibrated angular velocity of rotation around the y-axis of the device, in rad/s.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    y: double;

    /**
     * Uncalibrated angular velocity of rotation around the z-axis of the device, in rad/s.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    z: double;

    /**
     * Uncalibrated angular velocity bias of rotation around the x-axis of the device, in rad/s.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    biasX: double;

    /**
     * Uncalibrated angular velocity bias of rotation around the y-axis of the device, in rad/s.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    biasY: double;

    /**
     * Uncalibrated angular velocity bias of rotation around the z-axis of the device, in rad/s.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    biasZ: double;
  }

  /**
   * Describes the significant motion sensor data. It extends from [Response]{@link sensor.Response}.
   *
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamic
   * @since 23 static
   */
  interface SignificantMotionResponse extends Response {
    /**
     * Intensity of a motion. This parameter specifies whether a device has a significant motion on three physical axes
     * (X, Y, and Z). The value **1** is reported when the device has a significant motion.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    scalar: double;
  }

  /**
   * Describes the proximity sensor data. It extends from [Response]{@link sensor.Response}.
   *
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamic
   * @since 23 static
   */
  interface ProximityResponse extends Response {
    /**
     * Proximity between the visible object and the device monitor. The value **0** means the two are close to each
     * other, and a value greater than 0 means that they are far away from each other.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    distance: double;
  }

  /**
   * Describes the ambient light sensor data. It extends from [Response]{@link sensor.Response}.
   *
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamic
   * @since 23 static
   */
  interface LightResponse extends Response {
    /**
     * Illumination, in lux.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    intensity: double;

    /**
     * Color temperature, in Kelvin. This parameter is optional. If this parameter is not supported, a fixed value (
     * customized by the sensor) is returned. If this parameter is supported, a normal value is returned.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 12 dynamic
     * @since 23 static
     */
    colorTemperature?: double;

    /**
     * Infrared luminance, in cd/m?. This parameter is optional. If this parameter is not supported, a fixed value (
     * customized by the sensor) is returned. If this parameter is supported, a normal value is returned.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 12 dynamic
     * @since 23 static
     */
    infraredLuminance?: double;
  }

  /**
   * Describes the Hall effect sensor data. It extends from [Response]{@link sensor.Response}.
   *
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamic
   * @since 23 static
   */
  interface HallResponse extends Response {
    /**
     * Hall effect sensor status. This parameter specifies whether a magnetic field exists around a device. The value
     * **0** means that a magnetic field does not exist, and a value greater than **0** means the opposite.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    status: double;
  }

  /**
   * Describes the magnetic field sensor data. It extends from [Response]{@link sensor.Response}.
   *
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamic
   * @since 23 static
   */
  interface MagneticFieldResponse extends Response {
    /**
     * Magnetic field strength on the x-axis, in ¦ÌT.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    x: double;

    /**
     * Magnetic field strength on the y-axis, in ¦ÌT.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    y: double;

    /**
     * Magnetic field strength on the z-axis, in ¦ÌT.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    z: double;
  }

  /**
   * Describes the uncalibrated magnetic field sensor data. It extends from [Response]{@link sensor.Response}.
   *
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamic
   * @since 23 static
   */
  interface MagneticFieldUncalibratedResponse extends Response {
    /**
     * Uncalibrated magnetic field strength on the x-axis, in ¦ÌT.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    x: double;

    /**
     * Uncalibrated magnetic field strength on the y-axis, in ¦ÌT.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    y: double;

    /**
     * Uncalibrated magnetic field strength on the z-axis, in ¦ÌT.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    z: double;

    /**
     * Bias of the uncalibrated magnetic field strength on the x-axis, in ¦ÌT.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    biasX: double;

    /**
     * Bias of the uncalibrated magnetic field strength on the y-axis, in ¦ÌT.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    biasY: double;

    /**
     * Bias of the uncalibrated magnetic field strength on the z-axis, in ¦ÌT.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    biasZ: double;
  }

  /**
   * Describes the pedometer sensor data. It extends from [Response]{@link sensor.Response}.
   *
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamic
   * @since 23 static
   */
  interface PedometerResponse extends Response {
    /**
     * Number of steps a user has walked.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    steps: double;
  }

  /**
   * Describes the humidity sensor data. It extends from [Response]{@link sensor.Response}.
   *
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamic
   * @since 23 static
   */
  interface HumidityResponse extends Response {
    /**
     * Ambient relative humidity, in a percentage (%).
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    humidity: double;
  }

  /**
   * Describes the pedometer detection sensor data. It extends from [Response]{@link sensor.Response}.
   *
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamic
   * @since 23 static
   */
  interface PedometerDetectionResponse extends Response {
    /**
     * Pedometer detection. This parameter specifies whether a user takes a step. The value **0** means that the user
     * does not take a step, and **1** means that the user takes a step.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    scalar: double;
  }

  /**
   * Describes the ambient temperature sensor data. It extends from [Response]{@link sensor.Response}.
   *
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamic
   * @since 23 static
   */
  interface AmbientTemperatureResponse extends Response {
    /**
     * Ambient temperature, in degree Celsius.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    temperature: double;
  }

  /**
   * Describes the barometer sensor data. It extends from [Response]{@link sensor.Response}.
   *
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamic
   * @since 23 static
   */
  interface BarometerResponse extends Response {
    /**
     * Atmospheric pressure, in units of hPa.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    pressure: double;
  }

  /**
   * Describes the heart rate sensor data. It extends from [Response]{@link sensor.Response}.
   *
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamic
   * @since 23 static
   */
  interface HeartRateResponse extends Response {
    /**
     * Heart rate, in beats per minute (bpm).
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    heartRate: double;
  }

  /**
   * Describes the wear detection sensor data. It extends from [Response]{@link sensor.Response}.
   *
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamic
   * @since 23 static
   */
  interface WearDetectionResponse extends Response {
    /**
     * Whether the device is being worn. The value **1** means that the device is being worn, and **0** means the
     * opposite.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    value: double;
  }

  /**
   * Describes the color sensor data. It extends from [Response]{@link @ohos.sensor:sensor.Response}.
   *
   * @syscap SystemCapability.Sensors.Sensor
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  interface ColorResponse extends Response {
    /**
     * Intensity of light, in lux.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    lightIntensity: double;
    /**
     * Color temperature, in Kelvin.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    colorTemperature: double;
  }

  /**
   * Describes the SAR sensor data. It extends from [Response]{@link @ohos.sensor:sensor.Response}.
   *
   * @syscap SystemCapability.Sensors.Sensor
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  interface SarResponse extends Response {
    /**
     * Absorption ratio, in W/kg.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    absorptionRatio: double;
  }

  /**
   * Describes the fusion pressure sensor data. It extends from [Response]{@link sensor.Response}.
   *
   * @syscap SystemCapability.Sensors.Sensor
   * @since 22 dynamic
   * @since 23 static
   */
  interface FusionPressureResponse extends Response {
    /**
     * Pressure percentage on the fused pressure sensor, in percentage (%)
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 22 dynamic
     * @since 23 static
     */
    fusionPressure: double;
  }

  /**
   * Enables listening for sensor status changes. This API asynchronously returns the result through a callback.
   *
   * @param { 'sensorStatusChange' } type - Event type. The value **sensorStatusChange** indicates the sensor status
   *     change event.
   * @param { Callback<SensorStatusEvent> } callback - Callback used to return the sensor status change event.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 19 dynamic
   */
  function on(type: 'sensorStatusChange', callback: Callback<SensorStatusEvent>): void;

  /**
   * Disables listening for sensor status changes.
   *
   * @param { 'sensorStatusChange' } type - Event type. The value **sensorStatusChange** indicates the sensor status
   *     change event.
   * @param { Callback<SensorStatusEvent> } [callback] - Callback passed to **sensor.on**. If this parameter is left
   *     unspecified, listening will be disabled for all callbacks.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 19 dynamic
   */
  function off(type: 'sensorStatusChange', callback?: Callback<SensorStatusEvent>): void;

  /**
   * Start listening on device status changes.
   *
   * @param { Callback<SensorStatusEvent> } callback - callback of sensor status.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 23 static
   */
  function onSensorStatusChange(callback: Callback<SensorStatusEvent>): void;

  /**
   * Stop listening on device status changes.
   *
   * @param { Callback<SensorStatusEvent> } [callback] - callback of sensor status.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 23 static
   */
  function offSensorStatusChange(callback?: Callback<SensorStatusEvent>): void;

  /**
   * Defines a device status change event.
   *
   * @syscap SystemCapability.Sensors.Sensor
   * @since 19 dynamic
   * @since 23 static
   */
  interface SensorStatusEvent {
    /**
     * Timestamp when an event occurs, in ms.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 19 dynamic
     * @since 23 static
     */
    timestamp: long;

    /**
     * Sensor ID.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 19 dynamic
     * @since 23 static
     */
    sensorId: int;

    /**
     * Sensor index.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 19 dynamic
     * @since 23 static
     */
    sensorIndex: int;

    /**
     * Sensor status. The value **true** indicates that the sensor is online, and the value **false** indicates the
     * opposite.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 19 dynamic
     * @since 23 static
     */
    isSensorOnline: boolean;

    /**
     * Device ID.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 19 dynamic
     * @since 23 static
     */
    deviceId: int;

    /**
     * Device name.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 19 dynamic
     * @since 23 static
     */
    deviceName: string;
  }

  /**
   * Defines sensor parameters, including **deviceId** and **sensorIndex**.
   *
   * @syscap SystemCapability.Sensors.Sensor
   * @atomicservice
   * @since 19 dynamic
   * @since 23 static
   */
  interface SensorInfoParam {
    /**
     * Device ID. The default value is -1, indicating the local device. You can use
     * [getSensorList]{@link sensor.getSensorList(callback: AsyncCallback<Array<Sensor>>)} or
     * [sensorStatusChange]{@link sensor.on(type: 'sensorStatusChange', callback: Callback<SensorStatusEvent>)} to
     * obtain the device ID.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @atomicservice
     * @since 19 dynamic
     * @since 23 static
     */
    deviceId?: int;

    /**
     * Sensor index. The default value is **0**, indicating the default sensor on the device. You can use
     * [getSensorList]{@link sensor.getSensorList(callback: AsyncCallback<Array<Sensor>>)} or
     * [sensorStatusChange]{@link sensor.on(type: 'sensorStatusChange', callback: Callback<SensorStatusEvent>)} to
     * obtain the sensor index.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @atomicservice
     * @since 19 dynamic
     * @since 23 static
     */
    sensorIndex?: int;
  }

}

export default sensor;