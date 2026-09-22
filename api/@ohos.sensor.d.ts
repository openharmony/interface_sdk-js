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
 * @file Sensor module
 * @kit SensorServiceKit
 */

import { AsyncCallback, Callback } from './@ohos.base';

/**
 * The **@ohos.sensor** module is a sensor service module provided by HarmonyOS in Sensor Service Kit. This module 
 * provides unified APIs to access sensor data, including data subscription, query, and algorithm calculation for 
 * various physical sensors on the device.
 * The **sensor** module provides unified APIs to access sensor data, including data subscription, query, and algorithm 
 * calculation for various physical sensors on the device.
 * Use this module to subscribe to sensor data when your app needs to detect the device motion status (such as shake and
 *  flip), detect environmental conditions (such as automatic screen brightness adjustment and atmospheric pressure 
 * measurement for altitude estimation), obtain the device orientation (such as compass navigation), or monitor health 
 * data (such as heart rate and step count). When mathematical transformation and calculation of sensor data are 
 * required, use the sensor algorithm APIs.
 *
 * > **NOTE**
 *
 * > [getSingleSensor]{@link sensor.getSingleSensor(type: SensorId, callback: AsyncCallback<Sensor>)}
 * > >  to obtain the target sensor. For details about how to use the API, see 
 * > >
 * > [Sensor Development](https://developer.huawei.com/consumer/en/doc/harmonyos-guides/sensor-guidelines#how-to-develop)
 * > > . If any error occurs, see the error code description of the API. When you subscribe to the sensor data, ensure 
 * > that the 
 * > > **on**
 * > >  and 
 * > > **off**
 * > >  APIs are used in pairs.The **sensor** module provides APIs for subscribing to and querying sensor data. The core
 * >  process is as follows:
 *
 * 1. Use [sensor.getSingleSensor]{@link sensor.getSingleSensor(type: SensorId, callback: AsyncCallback<Sensor>)}
 * or [sensor.getSensorListSync]{@link sensor.getSensorListSync} to query sensor information and ensure that the device
 * supports the target sensor.
 * 2. Use **sensor.on** to subscribe to sensor data and continuously receive data callbacks.
 * 3. Use **sensor.once** to obtain sensor data once, which is suitable for scenarios where continuous listening is not
 * required.
 * 4. Use **sensor.off** to cancel the subscription. Ensure that **on** and **off** are called in pairs.
 * Differences between **sensor.on** and **sensor.once** are as follows:
 *
 * - **sensor.on** continuously subscribes to sensor data and repeatedly reports the data through the callback. It is 
 * suitable for scenarios that require real-time monitoring.
 * - **sensor.once** obtains sensor data only once. The callback is triggered only once, and the subscription is 
 * automatically canceled. It is suitable for scenarios where data needs to be collected only once.
 * Note:
 * - Before subscribing to a sensor, you are advised to use **getSingleSensor** to check whether the device supports the
 *  sensor.
 * - The **on** API for subscription and the **off** API for cancellation must be used in pairs to avoid resource leak.
 * - For sensors that require permissions (such as the accelerometer, gyroscope, heart rate sensor, and pedometer), you 
 * must request the corresponding permissions first.
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
     * Accelerometer sensor, which is used to measure the acceleration of the device.
     * <br>**Atomic service API**: This API can be used in atomic services since API version 11.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    ACCELEROMETER = 1,

    /**
     * Gyroscope sensor, which is used to measure the angular velocity of the device.
     * <br>**Atomic service API**: This API can be used in atomic services since API version 11.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    GYROSCOPE = 2,

    /**
     * Ambient light sensor, which is used to measure the ambient light intensity.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 9 dynamic
     * @since 23 static
     */
    AMBIENT_LIGHT = 5,

    /**
     * Magnetic field sensor, which is used to measure the ambient magnetic field strength around the device.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 9 dynamic
     * @since 23 static
     */
    MAGNETIC_FIELD = 6,

    /**
     * Barometric pressure sensor, which is used to measure atmospheric pressure.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 9 dynamic
     * @since 23 static
     */
    BAROMETER = 8,

    /**
     * Hall effect sensor, which is used to detect whether there is a magnetic force around the device.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 9 dynamic
     * @since 23 static
     */
    HALL = 10,

    /**
     * Proximity sensor, which is used to detect the proximity between an object and the device display.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 9 dynamic
     * @since 23 static
     */
    PROXIMITY = 12,

    /**
     * Humidity sensor, which is used to measure the relative humidity of the environment.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 9 dynamic
     * @since 23 static
     */
    HUMIDITY = 13,

    /**
     * Color sensor. Subscribes to or unsubscribes from the color sensor data. The reported data is a 
     * [ColorResponse]{@link sensor.ColorResponse} object, which contains the light intensity and color temperature 
     * information.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    COLOR = 14,

    /**
     * Sodium Adsorption Ratio (SAR) sensor. Subscribes to or unsubscribes from the SAR sensor data. The reported data 
     * is a [SarResponse]{@link sensor.SarResponse} object, which contains the SAR information.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    SAR = 15,

    /**
     * Orientation sensor, which is used to measure the rotation angle of the device.
     * <br>**Atomic service API**: This API can be used in atomic services since API version 11.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    ORIENTATION = 256,

    /**
     * Gravity sensor, which is used to measure the gravity acceleration of the device.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 9 dynamic
     * @since 23 static
     */
    GRAVITY = 257,

    /**
     * Linear acceleration sensor, which is used to measure the linear acceleration of the device excluding the effect 
     * of gravity.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 9 dynamic
     * @since 23 static
     */
    LINEAR_ACCELEROMETER = 258,

    /**
     * Rotation vector sensor type, which is used to describe the rotation status of the device relative to a reference 
     * direction.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 9 dynamic
     * @since 23 static
     */
    ROTATION_VECTOR = 259,

    /**
     * Ambient temperature sensor, which is used to measure the ambient temperature.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 9 dynamic
     * @since 23 static
     */
    AMBIENT_TEMPERATURE = 260,

    /**
     * Uncalibrated magnetic field sensor, which is used to measure the uncalibrated ambient magnetic field strength and
     *  its bias.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 9 dynamic
     * @since 23 static
     */
    MAGNETIC_FIELD_UNCALIBRATED = 261,

    /**
     * Uncalibrated gyroscope sensor, which is used to measure the uncalibrated angular velocity of the device and its 
     * bias.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 9 dynamic
     * @since 23 static
     */
    GYROSCOPE_UNCALIBRATED = 263,

    /**
     * Significant motion sensor, which is used to detect whether the device is moving significantly.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 9 dynamic
     * @since 23 static
     */
    SIGNIFICANT_MOTION = 264,

    /**
     * Pedometer detection sensor, which is used to detect the step counting action of a user.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 9 dynamic
     * @since 23 static
     */
    PEDOMETER_DETECTION = 265,

    /**
     * Step counter sensor, which is used to count the number of steps a user has taken.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 9 dynamic
     * @since 23 static
     */
    PEDOMETER = 266,

    /**
     * Heart rate sensor, which is used to measure the heart rate of a user.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 9 dynamic
     * @since 23 static
     */
    HEART_RATE = 278,

    /**
     * Wear detection sensor, which is used to detect whether the device is being worn.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 9 dynamic
     * @since 23 static
     */
    WEAR_DETECTION = 280,

    /**
     * Uncalibrated acceleration sensor, which is used to measure the uncalibrated acceleration of the device and its 
     * bias.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 9 dynamic
     * @since 23 static
     */
    ACCELEROMETER_UNCALIBRATED = 281,

    /**
     * Fused pressure sensor, which is used to measure the fusion pressure value. This sensor is available only on smart
     *  watches.
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
   * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
   *     <br> capabilities.
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
   * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
   *     <br> capabilities.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
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
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
   *     <br> capabilities.
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
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     <br> required to call the API.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
   *     <br> capabilities.
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
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     <br> required to call the API.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
   *     <br> capabilities.
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
   * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
   *     <br> capabilities.
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
   * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
   *     <br> capabilities.
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
   * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
   *     <br> capabilities.
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
   * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
   *     <br> capabilities.
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
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     <br> required to call the API.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
   *     <br> capabilities.
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
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     <br> required to call the API.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
   *     <br> capabilities.
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
   * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
   *     <br> capabilities.
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
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     <br> required to call the API.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
   *     <br> capabilities.
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
   * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
   *     <br> capabilities.
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
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     <br> required to call the API.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
   *     <br> capabilities.
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
   * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
   *     <br> capabilities.
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
   * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
   *     <br> capabilities.
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
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     <br> required to call the API.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
   *     <br> capabilities.
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
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     <br> required to call the API.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
   *     <br> capabilities.
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
   * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
   *     <br> capabilities.
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
   * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
   *     <br> capabilities.
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
   * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
   *     <br> capabilities.
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
   * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
   *     <br> capabilities.
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
   * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
   *     <br> capabilities.
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
   * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
   *     <br> capabilities.
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
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     <br> required to call the API.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
   *     <br> capabilities.
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
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     <br> required to call the API.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
   *     <br> capabilities.
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
   * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
   *     <br> capabilities.
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
   * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
   *     <br> capabilities.
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
   * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
   *     <br> capabilities.
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
   * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
   *     <br> capabilities.
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
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     <br> required to call the API.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
   *     <br> capabilities.
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
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     <br> required to call the API.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
   *     <br> capabilities.
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
   * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
   *     <br> capabilities.
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
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     <br> required to call the API.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
   *     <br> capabilities.
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
   * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
   *     <br> capabilities.
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
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     <br> required to call the API.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
   *     <br> capabilities.
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
   * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
   *     <br> capabilities.
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
   * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
   *     <br> capabilities.
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
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     <br> required to call the API.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
   *     <br> capabilities.
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
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     <br> required to call the API.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
   *     <br> capabilities.
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
   * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
   *     <br> capabilities.
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
   * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
   *     <br> capabilities.
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
   * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
   *     <br> capabilities.
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
   * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
   *     <br> capabilities.
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
   * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
   *     <br> capabilities.
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
   * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
   *     <br> capabilities.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
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
   * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
   *     <br> capabilities.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
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
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     <br> required to call the API.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
   *     <br> capabilities.
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
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     <br> required to call the API.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
   *     <br> capabilities.
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
   * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
   *     <br> capabilities.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 23 static
   */
  function offAmbientLightChange(sensorInfoParam?: SensorInfoParam, callback?: Callback<LightResponse>): void;

  /**
   * Unsubscribe to ambient temperature sensor data， {@code SensorId.AMBIENT_TEMPERATURE}.
   *
   * @param { SensorInfoParam } [sensorInfoParam] - Parameters of sensor on the device.
   * @param { Callback<AmbientTemperatureResponse> } [callback] - callback ambient temperature data.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
   *     <br> capabilities.
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
   * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
   *     <br> capabilities.
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
   * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
   *     <br> capabilities.
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
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     <br> required to call the API.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
   *     <br> capabilities.
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
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     <br> required to call the API.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
   *     <br> capabilities.
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
   * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
   *     <br> capabilities.
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
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     <br> required to call the API.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
   *     <br> capabilities.
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
   * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
   *     <br> capabilities.
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
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     <br> required to call the API.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
   *     <br> capabilities.
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
   * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
   *     <br> capabilities.
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
   * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
   *     <br> capabilities.
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
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     <br> required to call the API.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
   *     <br> capabilities.
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
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     <br> required to call the API.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
   *     <br> capabilities.
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
   * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
   *     <br> capabilities.
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
   * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
   *     <br> capabilities.
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
   * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
   *     <br> capabilities.
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
   * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
   *     <br> capabilities.
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
   * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
   *     <br> capabilities.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 23 static
   */
  function offFusionPressureChange(sensorInfoParam?: SensorInfoParam, callback?: Callback<FusionPressureResponse>): void;

  /**
   * Subscribes to data changes of the color sensor. This API uses an asynchronous callback to return the result.
   * The color sensor data is reported asynchronously through a callback. The data is reported through a
   *  **ColorResponse** object, which contains two number fields: **lightIntensity** and **colorTemperature**.
   *
   * This API is used when you need to obtain the ambient light intensity and color temperature to implement
   * functions such as automatic screen brightness adjustment, color temperature compensation for photographing,
   * and ambient light line monitoring.
   *
   * @param { SensorId.COLOR } type - Sensor type. The value is fixed at **SensorId.COLOR**.
   * @param { Callback<ColorResponse> } callback - Callback used to report the sensor data, which is a **ColorResponse**
   *     object.
   * @param { Options } [options] - Optional parameters used to set the reporting frequency of the sensor, in
   *     nanoseconds. The default value is **200000000**. If this parameter is not passed, the default frequency is
   *     used.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   *     <br> Applicable versions: 11+
   * @syscap SystemCapability.Sensors.Sensor
   * @systemapi
   * @since 10 dynamic
   */
  function on(type: SensorId.COLOR, callback: Callback<ColorResponse>, options?: Options): void;

  /**
   * Subscribes to data changes of the Sodium Adsorption Ratio (SAR) sensor. This API uses an asynchronous callback to
   * return the result. The SAR sensor data is reported asynchronously through a callback. The data is reported through
   * a **SarResponse** object, which contains one number field: **absorptionRatio**.
   *
   * This API can be used to monitor the SAR of a device to implement functions such as communication security
   * detection and radiation detection.
   *
   * @param { SensorId.SAR } type - Sensor type. The value is fixed at **SensorId.SAR**.
   * @param { Callback<SarResponse> } callback - Callback used to report the sensor data, which is a **SarResponse**
   *     object.
   * @param { Options } [options] - Optional parameters used to set the reporting frequency of the sensor, in
   *     nanoseconds. The default value is **200000000**. If this parameter is not passed, the default frequency is
   *     used.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   *     <br> Applicable versions: 11+
   * @syscap SystemCapability.Sensors.Sensor
   * @systemapi
   * @since 10 dynamic
   */
  function on(type: SensorId.SAR, callback: Callback<SarResponse>, options?: Options): void;

  /**
   * Subscribes to data of the acceleration sensor. This API uses an asynchronous callback to return the result.
   * The acceleration sensor measures the acceleration of the device along the x, y, and z axes, including the
   * gravity acceleration component. This sensor is applicable to scenarios where the device motion status needs
   * to be detected, such as screen rotation, game control, and step counting. After this method is called,
   * the system continuously reports acceleration data at the specified frequency through the callback.
   *
   * **Atomic service API**: This API can be used in atomic services since API version 11.
   *
   * @permission ohos.permission.ACCELEROMETER
   * @param { SensorId.ACCELEROMETER } type - Sensor type. The value is fixed at **SensorId.ACCELEROMETER**.
   * @param { Callback<AccelerometerResponse> } callback - Callback used to report the sensor data, which is an
   *     **AccelerometerResponse** object.
   * @param { Options } [options] - List of optional parameters. This parameter is used to set the data reporting
   *      frequency. The default value is 200,000,000 ns (200 ms).
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     <br> required to call the API.
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
   * Subscribes to data of the uncalibrated acceleration sensor. This API uses an asynchronous callback to return the
   * result. The difference between the uncalibrated acceleration sensor and the acceleration sensor is that
   * the **biasX**, **biasY**, and **biasZ** values reported by the uncalibrated acceleration sensor are not
   * calibrated by the system. This sensor is suitable for scenarios where raw acceleration data is required or a
   * custom calibration algorithm is implemented. Compared with **sensor.on('SensorId.ACCELEROMETER')**,
   * this API provides additional bias information, which is suitable for scenarios where device calibration bias
   * needs to be analyzed.
   *
   * @permission ohos.permission.ACCELEROMETER
   * @param { SensorId.ACCELEROMETER_UNCALIBRATED } type - Sensor type. The value is fixed at
   *     **SensorId.ACCELEROMETER_UNCALIBRATED**.
   * @param { Callback<AccelerometerUncalibratedResponse> } callback - Callback used to report the sensor data, which is
   *     an **AccelerometerUncalibratedResponse** object.
   * @param { Options } [options] - List of optional parameters. This parameter is used to set the data reporting
   *     frequency. The default value is 200,000,000 ns (200 ms).
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     <br> required to call the API.
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
   * Subscribes to data of the ambient light sensor. This API uses an asynchronous callback to return the result.
   * The ambient light sensor is used to measure the light intensity of the surrounding environment.
   * It is applicable to scenarios such as automatic screen brightness adjustment and determining the brightness
   * of the environment. After this method is called, the system continuously reports ambient light intensity data
   * at the specified frequency through the callback.
   *
   * @param { SensorId.AMBIENT_LIGHT } type - Sensor type. The value is fixed at **SensorId.AMBIENT_LIGHT**.
   * @param { Callback<LightResponse> } callback - Callback used to report the sensor data, which is a **LightResponse**
   *     object.
   * @param { Options } [options] - List of optional parameters. This parameter is used to set the data reporting
   *     frequency. The default value is 200,000,000 ns (200 ms).
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   */
  function on(type: SensorId.AMBIENT_LIGHT, callback: Callback<LightResponse>, options?: Options): void;

  /**
   * Subscribes to data of the ambient temperature sensor. This API uses an asynchronous callback to return the result.
   * The temperature sensor is used to measure the ambient temperature around the device. It is applicable to scenarios
   * such as ambient temperature monitoring and temperature compensation. After this method is called,
   * the system continuously reports temperature data at the specified frequency through the callback.
   *
   * @param { SensorId.AMBIENT_TEMPERATURE } type - Sensor type. The value is fixed at **SensorId.AMBIENT_TEMPERATURE**.
   * @param { Callback<AmbientTemperatureResponse> } callback - Callback used to report the sensor data, which is an
   *     **AmbientTemperatureResponse** object.
   * @param { Options } [options] - List of optional parameters. This parameter is used to set the data reporting
   *     frequency. The default value is 200,000,000 ns (200 ms).
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
   * Subscribes to data of the barometer sensor. This API uses an asynchronous callback to return the result.
   * The barometric pressure sensor is used to measure atmospheric pressure. It is applicable to scenarios such
   * as altitude estimation and weather forecast assistance. After this method is called, the system continuously
   * reports barometric pressure data at the specified frequency through the callback.
   *
   * @param { SensorId.BAROMETER } type - Sensor type. The value is fixed at **SensorId.BAROMETER**.
   * @param { Callback<BarometerResponse> } callback - Callback used to report the sensor data, which is a
   *     **BarometerResponse** object.
   * @param { Options } [options] - List of optional parameters. This parameter is used to set the data reporting
   *     frequency. The default value is 200,000,000 ns (200 ms).
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   */
  function on(type: SensorId.BAROMETER, callback: Callback<BarometerResponse>, options?: Options): void;

  /**
   * Subscribes to data of the gravity sensor. This API uses an asynchronous callback to return the result.
   * The gravity sensor measures the gravity acceleration components of the device along the x, y, and z axes.
   * It is applicable to scenarios where the gravity component needs to be separated for motion analysis,
   * such as game control and motion detection. After this method is called, the system continuously reports
   * gravity component data at the specified frequency through the callback.
   *
   * @param { SensorId.GRAVITY } type - Sensor type. The value is fixed at **SensorId.GRAVITY**.
   * @param { Callback<GravityResponse> } callback - Callback used to report the sensor data, which is a
   *     **GravityResponse** object.
   * @param { Options } [options] - List of optional parameters. This parameter is used to set the data reporting
   *     frequency. The default value is 200,000,000 ns (200 ms).
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
   * Subscribes to data of the gyroscope sensor. This API uses an asynchronous callback to return the result.
   * The gyroscope sensor is used to measure the angular velocity of a device around the x, y, and z axes.
   * It is applicable to scenarios such as device rotation detection, posture tracking, and game control.
   * After this method is called, the system continuously reports angular velocity data at the specified frequency
   * through the callback.
   *
   * **Atomic service API**: This API can be used in atomic services since API version 11.
   *
   * @permission ohos.permission.GYROSCOPE
   * @param { SensorId.GYROSCOPE } type - Sensor type. The value is fixed at **SensorId.GYROSCOPE**.
   * @param { Callback<GyroscopeResponse> } callback - Callback used to report the sensor data, which is a
   *     **GyroscopeResponse** object.
   * @param { Options } [options] - List of optional parameters. This parameter is used to set the data reporting
   *     frequency. The default value is 200,000,000 ns (200 ms).
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     <br> required to call the API.
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
   * Subscribes to data of the uncalibrated gyroscope sensor. This API uses an asynchronous callback to return the
   * result. The difference between the uncalibrated gyroscope sensor and the gyroscope sensor is that the **biasX**,
   * **biasY**, and **biasZ** values reported by the uncalibrated gyroscope sensor are not calibrated by the system.
   * This sensor is suitable for scenarios where raw gyroscope data is required or where the calibration algorithm
   * needs to be implemented by the app. Compared with **sensor.on('SensorId.GYROSCOPE')**, this API additionally
   * provides bias information, which is suitable for scenarios where the gyroscope calibration bias needs to be
   * analyzed.
   *
   * @permission ohos.permission.GYROSCOPE
   * @param { SensorId.GYROSCOPE_UNCALIBRATED } type - Sensor type. The value is fixed at
   *     **SensorId.GYROSCOPE_UNCALIBRATED**.
   * @param { Callback<GyroscopeUncalibratedResponse> } callback - Callback used to report the sensor data, which is a
   *     **GyroscopeUncalibratedResponse** object.
   * @param { Options } [options] - List of optional parameters. This parameter is used to set the data reporting
   *     frequency. The default value is 200,000,000 ns (200 ms).
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     <br> required to call the API.
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
   * Subscribes to data of the Hall effect sensor. This API uses an asynchronous callback to return the result.
   * The Hall effect sensor is used to detect magnetic field changes, and is often used to detect the opening and
   * closing status of a flip phone or leather case. When Hall effect events are frequently triggered, you can use
   * the **options** parameter to set the data reporting frequency. After this method is called, the system
   * continuously reports Hall effect sensor data through the callback.
   *
   * @param { SensorId.HALL } type - Sensor type. The value is fixed at **SensorId.HALL**.
   * @param { Callback<HallResponse> } callback - Callback used to report the sensor data, which is a **HallResponse**
   *     object.
   * @param { Options } [options] - Optional parameters used to set the reporting frequency of the sensor when the Hall
   *     effect sensor is frequently triggered. The default value is 200,000,000 ns (200 ms).
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   */
  function on(type: SensorId.HALL, callback: Callback<HallResponse>, options?: Options): void;

  /**
   * Subscribes to data of the heart rate sensor. This API uses an asynchronous callback to return the result.
   * The heart rate sensor is used to measure the heart rate of a user. It is applicable to scenarios such as health
   * monitoring and exercise assistance. After this method is called, the system continuously reports heart rate data
   * at the specified frequency through the callback.
   *
   * @permission ohos.permission.READ_HEALTH_DATA
   * @param { SensorId.HEART_RATE } type - Sensor type. The value is fixed at **SensorId.HEART_RATE**.
   * @param { Callback<HeartRateResponse> } callback - Callback used to report the sensor data, which is a
   *     **HeartRateResponse** object.
   * @param { Options } [options] - List of optional parameters. This parameter is used to set the data reporting
   *     frequency. The default value is 200,000,000 ns (200 ms).
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     <br> required to call the API.
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
   * Subscribes to data of the humidity sensor. This API uses an asynchronous callback to return the result.
   * The humidity sensor is used to measure the relative humidity of the surrounding environment. It is applicable to
   * scenarios such as ambient humidity monitoring and collaboration with other smart home devices. After this method
   * is called, the system continuously reports humidity data at the specified frequency through the callback.
   *
   * @param { SensorId.HUMIDITY } type - Sensor type. The value is fixed at **SensorId.HUMIDITY**.
   * @param { Callback<HumidityResponse> } callback - Callback used to report the sensor data, which is a
   *     **HumidityResponse** object.
   * @param { Options } [options] - List of optional parameters. This parameter is used to set the data reporting
   *     frequency. The default value is 200,000,000 ns (200 ms).
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
   * Subscribes to data of the linear acceleration sensor. This API uses an asynchronous callback to return the result.
   * The linear acceleration sensor measures the acceleration (excluding the gravity component) of the device along
   * the x, y, and z axes. It is applicable to scenarios where the pure motion acceleration of the device needs to be
   * sensed, such as motion tracking and collision detection. Compared with **sensor.on('SensorId.ACCELEROMETER')**,
   * this API does not contain the gravity component and is applicable to scenarios where only the device's motion
   * acceleration is required.
   *
   * @permission ohos.permission.ACCELEROMETER
   * @param { SensorId.LINEAR_ACCELEROMETER } type - Sensor type. The value is fixed at
   *     **SensorId.LINEAR_ACCELEROMETER**.
   * @param { Callback<LinearAccelerometerResponse> } callback - Callback used to report the sensor data, which is a
   *     **LinearAccelerometerResponse** object.
   * @param { Options } [options] - List of optional parameters. This parameter is used to set the data reporting
   *     frequency. The default value is 200,000,000 ns (200 ms).
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     <br> required to call the API.
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
   * Subscribes to data of the magnetic field sensor. This API uses an asynchronous callback to return the result. The
   * magnetic field sensor is used to measure the magnetic field strength around the device in the x, y, and z axes.
   * It is applicable to scenarios such as compass, direction detection, and metal detection. After this method is
   * called, the system continuously reports magnetic field component data at the specified frequency through the
   * callback.
   *
   * @param { SensorId.MAGNETIC_FIELD } type - Sensor type. The value is fixed at **SensorId.MAGNETIC_FIELD**.
   * @param { Callback<MagneticFieldResponse> } callback - Callback used to report the sensor data, which is a
   *     **MagneticFieldResponse** object.
   * @param { Options } [options] - List of optional parameters. This parameter is used to set the data reporting
   *     frequency. The default value is 200,000,000 ns (200 ms).
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
   * Subscribes to data of the uncalibrated magnetic field sensor. This API uses an asynchronous callback to return the
   * result. The difference between the uncalibrated magnetic field sensor and the magnetic field sensor is that
   * the **biasX**, **biasY**, and **biasZ** values reported by the uncalibrated magnetic field sensor are not
   * calibrated by the system. This sensor is suitable for scenarios where raw magnetic field data is required or a
   * custom calibration algorithm is implemented. Compared with **sensor.on('SensorId.MAGNETIC_FIELD')**,
   * this API provides the bias information, which is suitable for scenarios where the geomagnetic calibration
   * deviation of the device needs to be analyzed.
   *
   * @param { SensorId.MAGNETIC_FIELD_UNCALIBRATED } type - Sensor type. The value is fixed at
   *     **SensorId.MAGNETIC_FIELD_UNCALIBRATED**.
   * @param { Callback<MagneticFieldUncalibratedResponse> } callback - Callback used to report the sensor data, which is
   *     a **MagneticFieldUncalibratedResponse** object.
   * @param { Options } [options] - List of optional parameters. This parameter is used to set the data reporting
   *     frequency. The default value is 200,000,000 ns (200 ms).
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
   * Subscribes to data of the orientation sensor. This API uses an asynchronous callback to return the result.
   * The orientation sensor measures the angles of rotation around the Z-axis (alpha), X-axis (beta),
   * and Y-axis (gamma). It is applicable to scenarios such as screen rotation, compass, and posture sensing.
   * After this method is called, the system continuously reports orientation data at the specified frequency
   * through the callback. Applications or services invoking this API can prompt users to use figure-8
   * calibration to improve the accuracy of the direction sensor. The sensor has a theoretical error
   * of ±5 degrees, but the specific precision may vary depending on different driver implementations and
   * algorithmic designs.
   *
   * > **NOTE**
   * >
   * > Applications or services invoking this API can prompt users to use figure-8 calibration to improve the accuracy 
   * > of the direction sensor. The sensor has a theoretical error of ±5 degrees, but the specific precision may vary 
   * > depending on different driver implementations and algorithmic designs.
   *
   * **Atomic service API**: This API can be used in atomic services since API version 11.
   *
   * @param { SensorId.ORIENTATION } type - Sensor type. The value is fixed at **SensorId.ORIENTATION**.
   * @param { Callback<OrientationResponse> } callback - Callback used to report the sensor data, which is a
   *     **OrientationResponse** object.
   * @param { Options } [options] - List of optional parameters. This parameter is used to set the data reporting
   *     frequency. The default value is 200,000,000 ns (200 ms).
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
   * Subscribes to data of the pedometer sensor. This API uses an asynchronous callback to return the result.
   * The pedometer sensor is used to count the number of steps taken by a user. It is applicable to scenarios such as
   * fitness tracking and health management. The step counter sensor's data reporting is subject to some delay,
   * and the delay is determined by specific product implementations. After this method is called, the system
   * continuously reports step count data at the specified frequency through the callback.
   *
   * > **NOTE**
   * > 
   * > The pedometer sensor data is reset only when the device is rebooted, not on a daily basis.
   * > The step count reported before the reboot is the accumulated value.
   *
   * @permission ohos.permission.ACTIVITY_MOTION
   * @param { SensorId.PEDOMETER } type - Sensor type. The value is fixed at **SensorId.PEDOMETER**.
   * @param { Callback<PedometerResponse> } callback - Callback used to report the sensor data, which is a
   *     **PedometerResponse** object.
   * @param { Options } [options] - List of optional parameters. This parameter is used to set the data reporting
   *     frequency. The default value is 200,000,000 ns (200 ms).
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     <br> required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   */
  function on(type: SensorId.PEDOMETER, callback: Callback<PedometerResponse>, options?: Options): void;

  /**
   * Subscribes to data of the pedometer detection sensor. This API uses an asynchronous callback to return the result.
   * The pedometer detection sensor is used to detect whether a step event (such as a step) occurs. It is applicable
   * to scenarios where the walking status needs to be detected in real time. Compared
   * with **sensor.on('SensorId.PEDOMETER')**, this API reports the scalar value of a step event instead of the
   * accumulated step count. It is applicable to scenarios where single-step events need to be detected.
   *
   * @permission ohos.permission.ACTIVITY_MOTION
   * @param { SensorId.PEDOMETER_DETECTION } type - Sensor type. The value is fixed at **SensorId.PEDOMETER_DETECTION**.
   * @param { Callback<PedometerDetectionResponse> } callback - Callback used to report the sensor data, which is a
   *     **PedometerDetectionResponse** object.
   * @param { Options } [options] - List of optional parameters. This parameter is used to set the data reporting
   *     frequency. The default value is 200,000,000 ns (200 ms).
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     <br> required to call the API.
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
   * Subscribes to data of the proximity sensor. This API uses an asynchronous callback to return the result.
   * The proximity sensor is used to detect the distance between an object and the device. It is often used to
   * automatically turn off the screen during a call to prevent accidental touches. When proximity sensor events
   * are frequently triggered, you can use the **options** parameter to set the event reporting frequency.
   * After this method is called, the system continuously reports proximity sensor data through the callback.
   *
   * @param { SensorId.PROXIMITY } type - Sensor type. The value is fixed at **SensorId.PROXIMITY**.
   * @param { Callback<ProximityResponse> } callback - Callback used to report the sensor data, which is a
   *     **ProximityResponse** object.
   * @param { Options } [options] - List of optional parameters. This parameter is used to set the data reporting
   *     frequency. The default value is 200,000,000 ns (200 ms). This parameter is used to set the data reporting
   *     frequency when proximity events are frequently triggered.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   */
  function on(type: SensorId.PROXIMITY, callback: Callback<ProximityResponse>, options?: Options): void;

  /**
   * Subscribes to data of the rotation vector sensor. This API uses an asynchronous callback to return the result.
   * The rotation vector sensor is used to indicate the orientation of a device. The data consists of the X, Y,
   * and Z components and the scalar W, and can be used for device orientation estimation and AR/VR scenarios.
   * After this method is called, the system continuously reports rotation vector data at the specified frequency
   * through the callback.
   *
   * @param { SensorId.ROTATION_VECTOR } type - Sensor type. The value is fixed at **SensorId.ROTATION_VECTOR**.
   * @param { Callback<RotationVectorResponse> } callback - Callback used to report the sensor data, which is a
   *     **RotationVectorResponse** object.
   * @param { Options } [options] - List of optional parameters. This parameter is used to set the data reporting
   *     frequency. The default value is 200,000,000 ns (200 ms).
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
   * Subscribes to significant motion sensor data to detect significant motion events such as picking up the device,
   * obvious movement, or violent shaking. This API uses an asynchronous callback to return the result. This API is
   * applicable to scenarios where the device needs to be woken up, an app needs to be started, or the mode needs to
   * be switched based on the user's activity state. After this method is called, the system continuously reports
   * significant motion event data through the callback.
   *
   * @param { SensorId.SIGNIFICANT_MOTION } type - Sensor type. The value is fixed at **SensorId.SIGNIFICANT_MOTION**.
   * @param { Callback<SignificantMotionResponse> } callback - Callback used to report the sensor data, which is a
   *     **SignificantMotionResponse** object.
   * @param { Options } [options] - List of optional parameters. This parameter is used to set the data reporting
   *     frequency. The default value is 200,000,000 ns (200 ms).
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
   * Subscribes to data of the wear detection sensor. This API uses an asynchronous callback to return the result.
   * The wear detection sensor is used to detect whether a wearable device, such as a smart watch, is being worn by
   * a user, so that the device can automatically switch its working mode. After this method is called, the system
   * continuously reports wear detection data at the specified frequency through the callback.
   *
   * @param { SensorId.WEAR_DETECTION } type - Sensor type. The value is fixed at **SensorId.WEAR_DETECTION**.
   * @param { Callback<WearDetectionResponse> } callback - Callback used to report the sensor data, which is a
   *     **WearDetectionResponse** object.
   * @param { Options } [options] - List of optional parameters. This parameter is used to set the data reporting
   *     frequency. The default value is 200,000,000 ns (200 ms).
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
   * Subscribes to the fused pressure sensor data. This API uses an asynchronous callback to return the result.
   * The fused pressure sensor is used to obtain pressure data processed by the fusion algorithm. It applies only
   * to smart watches. This is applicable to health monitoring scenarios where wrist pressure data needs to be
   * obtained. After this method is called, the system continuously reports acceleration data at the specified
   * frequency through the callback.
   *
   * @param { SensorId.FUSION_PRESSURE } type - Sensor type. The value is fixed at SensorId.FUSION_PRESSURE.
   * @param { Callback<FusionPressureResponse> } callback - Callback used to report the sensor data, which is a
   *     **FusionPressureResponse** object.
   * @param { Options } [options] - List of optional parameters. This parameter is used to set the data reporting
   *     frequency. The default value is 200,000,000 ns (200 ms).
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
   * Obtains data of the acceleration sensor once. This method applies to scenarios where the current acceleration
   * data needs to be obtained only once and continuous listening is not required. After the method is called, the
   * callback is triggered only once, and the subscription is automatically canceled.
   *
   * @permission ohos.permission.ACCELEROMETER
   * @param { SensorId.ACCELEROMETER } type - Sensor type. The value is fixed at **SensorId.ACCELEROMETER**.
   * @param { Callback<AccelerometerResponse> } callback - Callback used to report the sensor data, which is an
   *     **AccelerometerResponse** object.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     <br> required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   */
  function once(type: SensorId.ACCELEROMETER, callback: Callback<AccelerometerResponse>): void;

  /**
   * Obtains data of the uncalibrated acceleration sensor once. This method applies to scenarios where the raw
   * acceleration and offset data needs to be obtained only once. After the method is called, the callback is
   * triggered only once, and the subscription is automatically canceled.
   *
   * @permission ohos.permission.ACCELEROMETER
   * @param { SensorId.ACCELEROMETER_UNCALIBRATED } type - Sensor type. The value is fixed at
   *     **SensorId.ACCELEROMETER_UNCALIBRATED**.
   * @param { Callback<AccelerometerUncalibratedResponse> } callback - Callback used to report the sensor data, which is
   *     an **AccelerometerUncalibratedResponse** object.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     <br> required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   */
  function once(type: SensorId.ACCELEROMETER_UNCALIBRATED, callback: Callback<AccelerometerUncalibratedResponse>): void;

  /**
   * Obtains data of the ambient light sensor once. This method applies to scenarios where the current ambient light
   * intensity needs to be obtained only once. After the method is called, the callback is triggered only once, and
   * the subscription is automatically canceled.
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
   * Obtains data of the temperature sensor once. This method applies to scenarios where the current ambient
   * temperature needs to be obtained only once. After the API is called, the callback is triggered only once, and
   * the subscription is automatically canceled.
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
   * Obtains data of the barometer sensor once. This method applies to scenarios where only the current atmospheric
   * pressure value needs to be obtained once. After the method is called, the callback is triggered only once, and
   * the subscription is automatically canceled.
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
   * Obtains data of the gravity sensor once. This method applies to the scenario where only the current gravity
   * component needs to be obtained once. After the method is called, the callback is triggered only once, and the
   * subscription is automatically canceled.
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
   * Obtains data of the gyroscope sensor once. This method applies to scenarios where only the current angular
   * velocity needs to be obtained once. After the method is called, the callback is triggered only once, and the
   * subscription is automatically canceled.
   *
   * @permission ohos.permission.GYROSCOPE
   * @param { SensorId.GYROSCOPE } type - Sensor type. The value is fixed at **SensorId.GYROSCOPE**.
   * @param { Callback<GyroscopeResponse> } callback - Callback used to report the sensor data, which is a
   *     **GyroscopeResponse** object.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     <br> required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   */
  function once(type: SensorId.GYROSCOPE, callback: Callback<GyroscopeResponse>): void;

  /**
   * Obtains data of the uncalibrated gyroscope sensor once. This method applies to scenarios where the raw angular
   * velocity and offset data needs to be obtained only once. After the method is called, the callback is triggered
   * only once, and the subscription is automatically canceled.
   *
   * @permission ohos.permission.GYROSCOPE
   * @param { SensorId.GYROSCOPE_UNCALIBRATED } type - Sensor type. The value is fixed at
   *     **SensorId.GYROSCOPE_UNCALIBRATED**.
   * @param { Callback<GyroscopeUncalibratedResponse> } callback - Callback used to report the sensor data, which is a
   *     **GyroscopeUncalibratedResponse** object.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     <br> required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   */
  function once(type: SensorId.GYROSCOPE_UNCALIBRATED, callback: Callback<GyroscopeUncalibratedResponse>): void;

  /**
   * Obtains data of the Hall effect sensor once. This method applies to scenarios where the current Hall effect status
   * needs to be detected only once. After the method is called, the callback is triggered only once, and the
   * subscription is automatically canceled.
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
   * Obtains data of the heart rate sensor once. This method applies to scenarios where only the current heart rate
   * needs to be obtained once. After the method is called, the callback is triggered only once, and the
   * subscription is automatically canceled.
   *
   * @permission ohos.permission.READ_HEALTH_DATA
   * @param { SensorId.HEART_RATE } type - Sensor type. The value is fixed at **SensorId.HEART_RATE**.
   * @param { Callback<HeartRateResponse> } callback - Callback used to report the sensor data, which is a
   *     **HeartRateResponse** object.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     <br> required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   */
  function once(type: SensorId.HEART_RATE, callback: Callback<HeartRateResponse>): void;

  /**
   * Obtains data of the humidity sensor once. This method applies to the scenario where the current humidity needs to
   * be obtained only once. After the method is called, the callback is triggered only once, and the subscription is
   * automatically canceled.
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
   * Obtains data of the linear acceleration sensor once. This method applies to scenarios where only the current
   * linear acceleration (excluding the gravity component) needs to be obtained once. After the method is called,
   * the callback is triggered only once, and the subscription is automatically canceled.
   *
   * @permission ohos.permission.ACCELEROMETER
   * @param { SensorId.LINEAR_ACCELEROMETER } type - Sensor type. The value is fixed at
   *     **SensorId.LINEAR_ACCELEROMETER**.
   * @param { Callback<LinearAccelerometerResponse> } callback - Callback used to report the sensor data, which is a
   *     **LinearAccelerometerResponse** object.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     <br> required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   */
  function once(type: SensorId.LINEAR_ACCELEROMETER, callback: Callback<LinearAccelerometerResponse>): void;

  /**
   * Obtains data of the magnetic field sensor once. This method applies to scenarios where only the current magnetic
   * field component needs to be obtained once. After the method is called, the callback is triggered only once, and
   * the subscription is automatically canceled.
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
   * Obtains data of the uncalibrated magnetic field sensor once. This method applies to scenarios where the raw
   * magnetic field and offset data needs to be obtained only once. After the method is called, the callback is
   * triggered only once, and the subscription is automatically canceled.
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
   * Obtains data of the orientation sensor once. This method applies to scenarios where the current device
   * orientation needs to be obtained only once. After the method is called, the callback is triggered only once,
   * and the subscription is automatically canceled.
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
   * Obtains data of the pedometer sensor once. The step counter sensor's data reporting is subject to some delay,
   * and the delay is determined by specific product implementations. This method is applicable to scenarios where
   * only the current step count needs to be obtained once. After the method is called, the callback is triggered
   * only once, and the subscription is automatically canceled.
   *
   * > **NOTE**
   * > 
   * > The pedometer sensor data is cleared only when the device is rebooted, not on a daily basis.
   * > The step count reported before the reboot is the accumulated value.
   *
   * @permission ohos.permission.ACTIVITY_MOTION
   * @param { SensorId.PEDOMETER } type - Sensor type. The value is fixed at **SensorId.PEDOMETER**.
   * @param { Callback<PedometerResponse> } callback - Callback used to report the sensor data, which is a
   *     **PedometerResponse** object.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     <br> required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   */
  function once(type: SensorId.PEDOMETER, callback: Callback<PedometerResponse>): void;

  /**
   * Obtains data of the pedometer sensor once. This method applies to scenarios where only one-time step counting
   * is required. After the method is called, the callback is triggered only once, and the subscription is
   * automatically canceled.
   *
   * @permission ohos.permission.ACTIVITY_MOTION
   * @param { SensorId.PEDOMETER_DETECTION } type - Sensor type. The value is fixed at **SensorId.PEDOMETER_DETECTION**.
   * @param { Callback<PedometerDetectionResponse> } callback - Callback used to report the sensor data, which is a
   *     **PedometerDetectionResponse** object.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     <br> required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   */
  function once(type: SensorId.PEDOMETER_DETECTION, callback: Callback<PedometerDetectionResponse>): void;

  /**
   * Obtains data of the proximity sensor once. This method applies to scenarios where detection of the current
   * proximity status is required only once. After the method is called, the callback is triggered only once, and
   * the subscription is automatically canceled.
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
   * Obtains data of the rotation vector sensor once. This method applies to scenarios where the current device
   * posture needs to be obtained only once. After the method is called, the callback is triggered only once, and
   * the subscription is automatically canceled.
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
   * Obtains the significant motion sensor data once. This API applies to scenarios where significant motion needs
   * to be detected only once. After the method is called, the callback is triggered only once, and the subscription
   * is automatically canceled.
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
   * Obtains data of the wear detection sensor once. This API applies to scenarios where the wear status needs to be
   * detected only once. After the method is called, the callback is triggered only once, and the subscription is
   * automatically canceled.
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
   * Unsubscribes from data of the color sensor. After this method is called, the callback for the color sensor will
   * not be triggered.
   *
   * When the color sensor data is no longer needed (for example, when the page is switched or the app is exited),
   * call this method to cancel the subscription to reduce system resource usage.
   *
   * After this method is called, the callback registered using **sensor.on(sensor.SensorId.COLOR)** will not be
   * triggered. If the **callback** parameter is passed, only the specified callback is unregistered.
   * If the **callback** parameter is not passed, all callbacks of the **SensorId.COLOR** type are unregistered.
   * You need to call **sensor.on(sensor.SensorId.COLOR)** to register to the callback before calling this method for
   * unregistration.
   *
   * @param { SensorId.COLOR } type - Sensor type. The value is fixed at **SensorId.COLOR**.
   * @param { Callback<ColorResponse> } callback - Callback to be unregistered. If this parameter is not specified,
   *     all callbacks of the specified sensor type are unregistered.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   *     <br> Applicable versions: 11+
   * @syscap SystemCapability.Sensors.Sensor
   * @systemapi
   * @since 10 dynamic
   */
  function off(type: SensorId.COLOR, callback?: Callback<ColorResponse>): void;

  /**
   * Unsubscribes from data of the color sensor. Compared with the **off** API in API version 10,
   * the **sensorInfoParam** parameter is added to this API. You can use **deviceId** and **sensorIndex** to specify
   * the callback of a specific sensor on a device. This API is applicable to multi-device scenarios.
   *
   * Use this API when you need to unsubscribe from the color sensor data of a specific device (for example, in a
   * multi-device connection scenario). If **sensorInfoParam** is not passed, the callback of the local device
   * (whose **deviceId** is -1) is unregistered by default.
   *
   * After this API is called, the callback function of the color sensor on the specified device will not be triggered.
   * If the **callback** parameter is passed, only the specified callback is unregistered. If the **callback**
   * parameter is not passed, all callbacks of the **SensorId.COLOR** type on the specified device are unregistered.
   *
   * @param { SensorId.COLOR } type - Sensor type. The value is fixed at **SensorId.COLOR**.
   * @param { SensorInfoParam } [sensorInfoParam] - Sensor parameters, including **deviceId** and **sensorIndex**.
   *     The default value of **deviceId** is **-1**, indicating the local device. The default value of **sensorIndex**
   *     is **0**, indicating the default sensor. If this parameter is not passed, the callback on the local device is
   *     canceled by default.
   * @param { Callback<ColorResponse> } [callback] - Callback to be unregistered. If this parameter is not specified,
   *     all callbacks of the specified sensor type on the specified device are unregistered.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @systemapi
   * @since 19 dynamic
   */
  function off(type: SensorId.COLOR, sensorInfoParam?: SensorInfoParam, callback?: Callback<ColorResponse>): void;

  /**
   * Unsubscribes from data of the SAR sensor. After this method is called, the callback for the SAR sensor will not
   * be triggered.
   *
   * When the SAR sensor data is no longer needed (for example, when the page is switched or the app is exited), call
   * this method to cancel the subscription to reduce system resource usage.
   *
   * After this method is called, the callback registered using **sensor.on(sensor.SensorId.SAR)** will not be
   * triggered. If the **callback** parameter is passed, only the specified callback is unregistered.
   * If the **callback** parameter is not passed, all callbacks of the **SensorId.SAR** type are unregistered.
   * You need to call **sensor.on(sensor.SensorId.SAR)** to register to the callback before calling this method
   * for unregistration.
   *
   * @param { SensorId.SAR } type - Sensor type. The value is fixed at **SensorId.SAR**.
   * @param { Callback<SarResponse> } callback - Callback to be unregistered. If this parameter is not specified,
   *     all callbacks of the specified sensor type are unregistered.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   *     <br> Applicable versions: 11+
   * @syscap SystemCapability.Sensors.Sensor
   * @systemapi
   * @since 10 dynamic
   */
  function off(type: SensorId.SAR, callback?: Callback<SarResponse>): void;

  /**
   * Unsubscribes from data of the SAR sensor. Compared with the **off** API in API version 10, the **sensorInfoParam**
   * parameter is added to this API. You can use **deviceId** and **sensorIndex** to specify the callback of a
   * specific sensor on a device. This API is applicable to multi-device scenarios.
   *
   * Use this API when you need to unsubscribe from the SAR sensor data of a specific device (for example, in a
   * multi-device connection scenario). If **sensorInfoParam** is not passed, the callback of the local device
   * (whose **deviceId** is -1) is unregistered by default.
   *
   * After this API is called, the callback function of the SAR sensor on the specified device will not be triggered.
   * If the **callback** parameter is passed, only the specified callback is unregistered. If the **callback**
   * parameter is not passed, all callbacks of the **SensorId.SAR** type on the specified device are unregistered.
   *
   * @param { SensorId.SAR } type - Sensor type. The value is fixed at **SensorId.SAR**.
   * @param { SensorInfoParam } [sensorInfoParam] - Sensor parameters, including **deviceId** and **sensorIndex**.
   *     The default value of **deviceId** is **-1**, indicating the local device. The default value of **sensorIndex**
   *     is **0**, indicating the default sensor. If this parameter is not passed, the callback on the local device is
   *     canceled by default.
   * @param { Callback<SarResponse> } [callback] - Callback to be unregistered. If this parameter is not specified,
   *     all callbacks of the specified sensor type on the specified device are unregistered.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @systemapi
   * @since 19 dynamic
   */
  function off(type: SensorId.SAR, sensorInfoParam?: SensorInfoParam, callback?: Callback<SarResponse>): void;

  /**
   * Unsubscribes from data of the acceleration sensor. Call this method to cancel the subscription when you no longer
   * need to receive data from the acceleration sensor. The **off** API for canceling subscription and the **on** API
   * for subscription must be used in pairs.
   *
   * **Atomic service API**: This API can be used in atomic services since API version 11.
   *
   * @permission ohos.permission.ACCELEROMETER
   * @param { SensorId.ACCELEROMETER } type - Sensor type. The value is fixed at **SensorId.ACCELEROMETER**.
   * @param { Callback<AccelerometerResponse> } callback - Callback to be unregistered. If this parameter is not
   *     specified, all callbacks of the specified sensor type are unregistered.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     <br> required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Sensors.Sensor
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  function off(type: SensorId.ACCELEROMETER, callback?: Callback<AccelerometerResponse>): void;

  /**
   * Unsubscribes from data of the acceleration sensor. Call this method to cancel the subscription when the
   * acceleration sensor data is no longer needed. The **off** API for canceling subscription and the **on** API
   * for subscription must be used in pairs.
   *
   * **Atomic service API**: This API can be used in atomic services since API version 19.
   *
   * @permission ohos.permission.ACCELEROMETER
   * @param { SensorId.ACCELEROMETER } type - Sensor type. The value is fixed at **SensorId.ACCELEROMETER**.
   * @param { SensorInfoParam } [sensorInfoParam] - Sensor settings parameter. You can cancel the subscription to a
   *     specified sensor on a specified device by specifying **deviceId** and **sensorIndex**. If this parameter is
   *     not passed, the subscription to all sensors of this type on the local device is canceled by default.
   * @param { Callback<AccelerometerResponse> } [callback] - Callback to be unregistered. If this parameter is not
   *     specified, all callbacks of the specified sensor type are unregistered.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     <br> required to call the API.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @atomicservice
   * @since 19 dynamic
   */
  function off(type: SensorId.ACCELEROMETER, sensorInfoParam?: SensorInfoParam, callback?: Callback<AccelerometerResponse>): void;

  /**
   * Unsubscribes from data of the uncalibrated acceleration sensor. Call this method when you no longer need to
   * receive data of the uncalibrated acceleration sensor. The **off** API for canceling subscription and
   * the **on** API for subscription must be used in pairs.
   *
   * @permission ohos.permission.ACCELEROMETER
   * @param { SensorId.ACCELEROMETER_UNCALIBRATED } type - Sensor type. The value is fixed at
   *     **SensorId.ACCELEROMETER_UNCALIBRATED**.
   * @param { Callback<AccelerometerUncalibratedResponse> } callback - Callback to be unregistered. If this parameter
   *     is not specified, all callbacks of the specified sensor type are unregistered.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     <br> required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   */
  function off(type: SensorId.ACCELEROMETER_UNCALIBRATED, callback?: Callback<AccelerometerUncalibratedResponse>): void;

  /**
   * Unsubscribes from data of the uncalibrated acceleration sensor. Call this method when you no longer need to
   * receive data of the uncalibrated acceleration sensor. The **off** API for canceling subscription and
   * the **on** API for subscription must be used in pairs.
   *
   * @permission ohos.permission.ACCELEROMETER
   * @param { SensorId.ACCELEROMETER_UNCALIBRATED } type - Sensor type. The value is fixed at
   *     **SensorId.ACCELEROMETER_UNCALIBRATED**.
   * @param { SensorInfoParam } [sensorInfoParam] - Sensor settings parameter. You can cancel the subscription to a
   *     specified sensor on a specified device by specifying **deviceId** and **sensorIndex**. If this parameter is
   *     not passed, the subscription to all sensors of this type on the local device is canceled by default.
   * @param { Callback<AccelerometerUncalibratedResponse> } [callback] - Callback to be unregistered. If this parameter
   *     is not specified, all callbacks of the specified sensor type are unregistered.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     <br> required to call the API.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 19 dynamic
   */
  function off(type: SensorId.ACCELEROMETER_UNCALIBRATED, sensorInfoParam?: SensorInfoParam, callback?: Callback<AccelerometerUncalibratedResponse>): void;

  /**
   * Unsubscribes from data of the ambient light sensor. When the ambient light sensor data is no longer needed, call
   * this method to cancel the subscription. The **off** API for canceling subscription and the **on** API for
   * subscription must be used in pairs.
   *
   * @param { SensorId.AMBIENT_LIGHT } type - Sensor type. The value is fixed at **SensorId.AMBIENT_LIGHT**.
   * @param { Callback<LightResponse> } callback - Callback to be unregistered. If this parameter
   *     is not specified, all callbacks of the specified sensor type are unregistered.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   */
  function off(type: SensorId.AMBIENT_LIGHT, callback?: Callback<LightResponse>): void;

  /**
   * Unsubscribes from data of the ambient light sensor. When the ambient light sensor data is no longer needed, call
   * this method to cancel the subscription. The **off** API for canceling subscription and the **on** API for
   * subscription must be used in pairs.
   *
   * @param { SensorId.AMBIENT_LIGHT } type - Sensor type. The value is fixed at **SensorId.AMBIENT_LIGHT**.
   * @param { SensorInfoParam } [sensorInfoParam] - Sensor settings parameter. You can cancel the subscription to a
   *     specified sensor on a specified device by specifying **deviceId** and **sensorIndex**. If this parameter is
   *     not passed, the subscription to all sensors of this type on the local device is canceled by default.
   * @param { Callback<LightResponse> } [callback] - Callback to be unregistered. If this parameter
   *     is not specified, all callbacks of the specified sensor type are unregistered.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 19 dynamic
   */
  function off(type: SensorId.AMBIENT_LIGHT, sensorInfoParam?: SensorInfoParam, callback?: Callback<LightResponse>): void;

  /**
   * Unsubscribes from data of the ambient temperature sensor. When the ambient temperature sensor data is no longer
   * needed, call this API to cancel the subscription. The **off** API for canceling subscription and the **on** API
   * for subscription must be used in pairs.
   *
   * @param { SensorId.AMBIENT_TEMPERATURE } type - Sensor type. The value is fixed at **SensorId.AMBIENT_TEMPERATURE**.
   * @param { Callback<AmbientTemperatureResponse> } callback - Callback to be unregistered. If this parameter
   *     is not specified, all callbacks of the specified sensor type are unregistered.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   */
  function off(type: SensorId.AMBIENT_TEMPERATURE, callback?: Callback<AmbientTemperatureResponse>): void;

  /**
   * Unsubscribes from data of the ambient temperature sensor. When the ambient temperature sensor data is no longer
   * needed, call this API to cancel the subscription. The **off** API for canceling subscription and the **on** API
   * for subscription must be used in pairs.
   *
   * @param { SensorId.AMBIENT_TEMPERATURE } type - Sensor type. The value is fixed at **SensorId.AMBIENT_TEMPERATURE**.
   * @param { SensorInfoParam } [sensorInfoParam] - Sensor settings parameter. You can cancel the subscription to a
   *     specified sensor on a specified device by specifying **deviceId** and **sensorIndex**. If this parameter is
   *     not passed, the subscription to all sensors of this type on the local device is canceled by default.
   * @param { Callback<AmbientTemperatureResponse> } [callback] - Callback to be unregistered. If this parameter
   *     is not specified, all callbacks of the specified sensor type are unregistered.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 19 dynamic
   */
  function off(type: SensorId.AMBIENT_TEMPERATURE, sensorInfoParam?: SensorInfoParam, callback?: Callback<AmbientTemperatureResponse>): void;

  /**
   * Unsubscribes from data of the barometer sensor. Call this method to cancel the subscription when the barometric
   * pressure sensor data is no longer needed. The **off** API for canceling subscription and the **on** API for
   * subscription must be used in pairs.
   *
   * @param { SensorId.BAROMETER } type - Sensor type. The value is fixed at **SensorId.BAROMETER**.
   * @param { Callback<BarometerResponse> } callback - Callback to be unregistered. If this parameter
   *     is not specified, all callbacks of the specified sensor type are unregistered.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   */
  function off(type: SensorId.BAROMETER, callback?: Callback<BarometerResponse>): void;

  /**
   * Unsubscribes from data of the barometer sensor. Call this method to cancel the subscription when the barometric
   * pressure sensor data is no longer needed. The **off** API for canceling subscription and the **on** API for
   * subscription must be used in pairs.
   *
   * @param { SensorId.BAROMETER } type - Sensor type. The value is fixed at **SensorId.BAROMETER**.
   * @param { SensorInfoParam } [sensorInfoParam] - Sensor settings parameter. You can cancel the subscription to a
   *     specified sensor on a specified device by specifying **deviceId** and **sensorIndex**. If this parameter is
   *     not passed, the subscription to all sensors of this type on the local device is canceled by default.
   * @param { Callback<BarometerResponse> } [callback] - Callback to be unregistered. If this parameter
   *     is not specified, all callbacks of the specified sensor type are unregistered.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 19 dynamic
   */
  function off(type: SensorId.BAROMETER, sensorInfoParam?: SensorInfoParam, callback?: Callback<BarometerResponse>): void;

  /**
   * Unsubscribes from data of the gravity sensor. When the gravity sensor data is no longer needed, call this method
   * to cancel the subscription. The **off** API for canceling subscription and the **on** API for subscription must
   * be used in pairs.
   *
   * @param { SensorId.GRAVITY } type - Sensor type. The value is fixed at **SensorId.GRAVITY**.
   * @param { Callback<GravityResponse> } callback - Callback to be unregistered. If this parameter
   *     is not specified, all callbacks of the specified sensor type are unregistered.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   */
  function off(type: SensorId.GRAVITY, callback?: Callback<GravityResponse>): void;

  /**
   * Unsubscribes from data of the gravity sensor. When the gravity sensor data is no longer needed, call this method
   * to cancel the subscription. The **off** API for canceling subscription and the **on** API for subscription must
   * be used in pairs.
   *
   * @param { SensorId.GRAVITY } type - Sensor type. The value is fixed at **SensorId.GRAVITY**.
   * @param { SensorInfoParam } [sensorInfoParam] - Sensor settings parameter. You can cancel the subscription to a
   *     specified sensor on a specified device by specifying **deviceId** and **sensorIndex**. If this parameter is
   *     not passed, the subscription to all sensors of this type on the local device is canceled by default.
   * @param { Callback<GravityResponse> } [callback] - Callback to be unregistered. If this parameter
   *     is not specified, all callbacks of the specified sensor type are unregistered.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 19 dynamic
   */
  function off(type: SensorId.GRAVITY, sensorInfoParam?: SensorInfoParam, callback?: Callback<GravityResponse>): void;

  /**
   * Unsubscribes from data of the gyroscope sensor. Call this method to cancel the subscription when gyroscope sensor
   * data is no longer needed. The **off** API for canceling subscription and the **on** API for subscription must be
   * used in pairs.
   *
   * **Atomic service API**: This API can be used in atomic services since API version 11.
   *
   * @permission ohos.permission.GYROSCOPE
   * @param { SensorId.GYROSCOPE } type - Sensor type. The value is fixed at **SensorId.GYROSCOPE**.
   * @param { Callback<GyroscopeResponse> } callback - Callback to be unregistered. If this parameter
   *     is not specified, all callbacks of the specified sensor type are unregistered.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     <br> required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Sensors.Sensor
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  function off(type: SensorId.GYROSCOPE, callback?: Callback<GyroscopeResponse>): void;

  /**
   * Unsubscribes from data of the gyroscope sensor. This API is called to cancel the subscription when gyroscope
   * sensor data is no longer needed. The **off** API for canceling subscription and the **on** API for
   * subscription must be used in pairs.
   *
   * **Atomic service API**: This API can be used in atomic services since API version 19.
   *
   * @permission ohos.permission.GYROSCOPE
   * @param { SensorId.GYROSCOPE } type - Sensor type. The value is fixed at **SensorId.GYROSCOPE**.
   * @param { SensorInfoParam } [sensorInfoParam] - Sensor settings parameter. You can cancel the subscription to a
   *     specified sensor on a specified device by specifying **deviceId** and **sensorIndex**. If this parameter is
   *     not passed, the subscription to all sensors of this type on the local device is canceled by default.
   * @param { Callback<GyroscopeResponse> } [callback] - Callback to be unregistered. If this parameter
   *     is not specified, all callbacks of the specified sensor type are unregistered.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     <br> required to call the API.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @atomicservice
   * @since 19 dynamic
   */
  function off(type: SensorId.GYROSCOPE, sensorInfoParam?: SensorInfoParam, callback?: Callback<GyroscopeResponse>): void;

  /**
   * Unsubscribes from data of the uncalibrated gyroscope sensor. When the uncalibrated gyroscope sensor data is no
   * longer needed, call this method to cancel the subscription. The **off** API for canceling subscription and
   * the **on** API for subscription must be used in pairs.
   *
   * @permission ohos.permission.GYROSCOPE
   * @param { SensorId.GYROSCOPE_UNCALIBRATED } type - Sensor type. The value is fixed at
   *     **SensorId.GYROSCOPE_UNCALIBRATED**.
   * @param { Callback<GyroscopeUncalibratedResponse> } callback - Callback to be unregistered. If this parameter
   *     is not specified, all callbacks of the specified sensor type are unregistered.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     <br> required to call the API.
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
   * @param { SensorInfoParam } [sensorInfoParam] - Sensor settings parameter. You can cancel the subscription to a
   *     specified sensor on a specified device by specifying **deviceId** and **sensorIndex**. If this parameter is
   *     not passed, the subscription to all sensors of this type on the local device is canceled by default.
   * @param { Callback<GyroscopeUncalibratedResponse> } [callback] - Callback to be unregistered. If this parameter
   *     is not specified, all callbacks of the specified sensor type are unregistered.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     <br> required to call the API.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 19 dynamic
   */
  function off(type: SensorId.GYROSCOPE_UNCALIBRATED, sensorInfoParam?: SensorInfoParam, callback?: Callback<GyroscopeUncalibratedResponse>): void;

  /**
   * Unsubscribes from data of the Hall effect sensor. Call this API when you no longer need to receive data of the
   * Hall effect sensor. The **off** API for canceling subscription and the **on** API for subscription must be used
   * in pairs.
   *
   * @param { SensorId.HALL } type - Sensor type. The value is fixed at **SensorId.HALL**.
   * @param { Callback<HallResponse> } callback - Callback to be unregistered. If this parameter
   *     is not specified, all callbacks of the specified sensor type are unregistered.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   */
  function off(type: SensorId.HALL, callback?: Callback<HallResponse>): void;

  /**
   * Unsubscribes from data of the Hall effect sensor. Call this method to unsubscribe from the Hall effect sensor
   * data when it is no longer needed. The **off** API for canceling subscription and the **on** API for subscription
   * must be used in pairs.
   *
   * @param { SensorId.HALL } type - Sensor type. The value is fixed at **SensorId.HALL**.
   * @param { SensorInfoParam } [sensorInfoParam] - Sensor settings parameter. You can cancel the subscription to a
   *     specified sensor on a specified device by specifying **deviceId** and **sensorIndex**. If this parameter is
   *     not passed, the subscription to all sensors of this type on the local device is canceled by default.
   * @param { Callback<HallResponse> } [callback] - Callback to be unregistered. If this parameter
   *     is not specified, all callbacks of the specified sensor type are unregistered.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 19 dynamic
   */
  function off(type: SensorId.HALL, sensorInfoParam?: SensorInfoParam, callback?: Callback<HallResponse>): void;

  /**
   * Unsubscribes from data of the heart rate sensor. Call this method to cancel the subscription when the heart rate
   * sensor data is no longer needed. The **off** API for canceling subscription and the **on** API for subscription
   * must be used in pairs.
   *
   * @permission ohos.permission.READ_HEALTH_DATA
   * @param { SensorId.HEART_RATE } type - Sensor type. The value is fixed at **SensorId.HEART_RATE**.
   * @param { Callback<HeartRateResponse> } callback - Callback to be unregistered. If this parameter
   *     is not specified, all callbacks of the specified sensor type are unregistered.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     <br> required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   */
  function off(type: SensorId.HEART_RATE, callback?: Callback<HeartRateResponse>): void;

  /**
   * Unsubscribes from data of the heart rate sensor. Call this method to cancel the subscription when you no longer
   * need to receive data of the heart rate sensor. The **off** API for canceling subscription and the **on** API for
   * subscription must be used in pairs.
   *
   * @permission ohos.permission.READ_HEALTH_DATA
   * @param { SensorId.HEART_RATE } type - Sensor type. The value is fixed at **SensorId.HEART_RATE**.
   * @param { SensorInfoParam } [sensorInfoParam] - Sensor settings parameter. You can cancel the subscription to a
   *     specified sensor on a specified device by specifying **deviceId** and **sensorIndex**. If this parameter is
   *     not passed, the subscription to all sensors of this type on the local device is canceled by default.
   * @param { Callback<HeartRateResponse> } [callback] - Callback to be unregistered. If this parameter
   *     is not specified, all callbacks of the specified sensor type are unregistered.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     <br> required to call the API.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 19 dynamic
   */
  function off(type: SensorId.HEART_RATE, sensorInfoParam?: SensorInfoParam, callback?: Callback<HeartRateResponse>): void;

  /**
   * Unsubscribes from data of the humidity sensor. When the humidity sensor data is no longer needed, call this API
   * to cancel the subscription. The **off** API for canceling subscription and the **on** API for subscription must
   * be used in pairs.
   *
   * @param { SensorId.HUMIDITY } type - Sensor type. The value is fixed at **SensorId.HUMIDITY**.
   * @param { Callback<HumidityResponse> } callback - Callback to be unregistered. If this parameter
   *     is not specified, all callbacks of the specified sensor type are unregistered.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   */
  function off(type: SensorId.HUMIDITY, callback?: Callback<HumidityResponse>): void;

  /**
   * Unsubscribes from data of the humidity sensor. When the humidity sensor data is no longer needed, call this API
   * to cancel the subscription. The **off** API for canceling subscription and the **on** API for subscription must
   * be used in pairs.
   *
   * @param { SensorId.HUMIDITY } type - Sensor type. The value is fixed at **SensorId.HUMIDITY**.
   * @param { SensorInfoParam } [sensorInfoParam] - Sensor settings parameter. You can cancel the subscription to a
   *     specified sensor on a specified device by specifying **deviceId** and **sensorIndex**. If this parameter is
   *     not passed, the subscription to all sensors of this type on the local device is canceled by default.
   * @param { Callback<HumidityResponse> } [callback] - Callback to be unregistered. If this parameter
   *     is not specified, all callbacks of the specified sensor type are unregistered.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 19 dynamic
   */
  function off(type: SensorId.HUMIDITY, sensorInfoParam?: SensorInfoParam, callback?: Callback<HumidityResponse>): void;

  /**
   * Unsubscribes from data of the linear acceleration sensor. Call this method to cancel the subscription when the
   * linear acceleration sensor data is no longer needed. The **off** API for canceling subscription and the **on**
   * API for subscription must be used in pairs.
   *
   * @permission ohos.permission.ACCELEROMETER
   * @param { SensorId.LINEAR_ACCELEROMETER } type - Sensor type. The value is fixed at
   *     **SensorId.LINEAR_ACCELEROMETER**.
   * @param { Callback<LinearAccelerometerResponse> } callback - Callback to be unregistered. If this parameter
   *     is not specified, all callbacks of the specified sensor type are unregistered.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     <br> required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   */
  function off(type: SensorId.LINEAR_ACCELEROMETER, callback?: Callback<LinearAccelerometerResponse>): void;

  /**
   * Unsubscribes from data of the linear acceleration sensor. Call this method to cancel the subscription when the
   * linear acceleration sensor data is no longer needed. The **off** API for canceling subscription and the **on**
   * API for subscription must be used in pairs.
   *
   * @permission ohos.permission.ACCELEROMETER
   * @param { SensorId.LINEAR_ACCELEROMETER } type - Sensor type. The value is fixed at
   *     **SensorId.LINEAR_ACCELEROMETER**.
   * @param { SensorInfoParam } [sensorInfoParam] - Sensor settings parameter. You can cancel the subscription to a
   *     specified sensor on a specified device by specifying **deviceId** and **sensorIndex**. If this parameter is
   *     not passed, the subscription to all sensors of this type on the local device is canceled by default.
   * @param { Callback<LinearAccelerometerResponse> } [callback] - Callback to be unregistered. If this parameter
   *     is not specified, all callbacks of the specified sensor type are unregistered.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     <br> required to call the API.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 19 dynamic
   */
  function off(type: SensorId.LINEAR_ACCELEROMETER, sensorInfoParam?: SensorInfoParam, callback?: Callback<LinearAccelerometerResponse>): void;

  /**
   * Unsubscribes from data of the magnetic field sensor. When the magnetic field sensor data is no longer needed, call
   * this method to cancel the subscription. The **off** API for canceling subscription and the **on** API for
   * subscription must be used in pairs.
   *
   * @param { SensorId.MAGNETIC_FIELD } type - Sensor type. The value is fixed at **SensorId.MAGNETIC_FIELD**.
   * @param { Callback<MagneticFieldResponse> } callback - Callback to be unregistered. If this parameter
   *     is not specified, all callbacks of the specified sensor type are unregistered.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   */
  function off(type: SensorId.MAGNETIC_FIELD, callback?: Callback<MagneticFieldResponse>): void;

  /**
   * Unsubscribes from data of the magnetic field sensor. When the magnetic field sensor data is no longer needed, call
   * this method to cancel the subscription. The **off** API for canceling subscription and the **on** API for
   * subscription must be used in pairs.
   *
   * @param { SensorId.MAGNETIC_FIELD } type - Sensor type. The value is fixed at **SensorId.MAGNETIC_FIELD**.
   * @param { SensorInfoParam } [sensorInfoParam] - Sensor settings parameter. You can cancel the subscription to a
   *     specified sensor on a specified device by specifying **deviceId** and **sensorIndex**. If this parameter is
   *     not passed, the subscription to all sensors of this type on the local device is canceled by default.
   * @param { Callback<MagneticFieldResponse> } [callback] - Callback to be unregistered. If this parameter
   *     is not specified, all callbacks of the specified sensor type are unregistered.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 19 dynamic
   */
  function off(type: SensorId.MAGNETIC_FIELD, sensorInfoParam?: SensorInfoParam, callback?: Callback<MagneticFieldResponse>): void;

  /**
   * Unsubscribes from data of the uncalibrated magnetic field sensor. When the uncalibrated magnetic field sensor data
   * is no longer needed, call this method to cancel the subscription. The **off** API for canceling subscription and
   * the **on** API for subscription must be used in pairs.
   *
   * @param { SensorId.MAGNETIC_FIELD_UNCALIBRATED } type - Sensor type. The value is fixed at
   *     **SensorId.MAGNETIC_FIELD_UNCALIBRATED**.
   * @param { Callback<MagneticFieldUncalibratedResponse> } callback - Callback to be unregistered. If this parameter
   *     is not specified, all callbacks of the specified sensor type are unregistered.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   */
  function off(type: SensorId.MAGNETIC_FIELD_UNCALIBRATED, callback?: Callback<MagneticFieldUncalibratedResponse>): void;

  /**
   * Unsubscribes from data of the uncalibrated magnetic field sensor. When the uncalibrated magnetic field sensor data
   * is no longer needed, call this method to cancel the subscription. The **off** API for canceling subscription and
   * the **on** API for subscription must be used in pairs.
   *
   * @param { SensorId.MAGNETIC_FIELD_UNCALIBRATED } type - Sensor type. The value is fixed at
   *     **SensorId.MAGNETIC_FIELD_UNCALIBRATED**.
   * @param { SensorInfoParam } [sensorInfoParam] - Sensor settings parameter. You can cancel the subscription to a
   *     specified sensor on a specified device by specifying **deviceId** and **sensorIndex**. If this parameter is
   *     not passed, the subscription to all sensors of this type on the local device is canceled by default.
   * @param { Callback<MagneticFieldUncalibratedResponse> } [callback] - Callback to be unregistered. If this parameter
   *     is not specified, all callbacks of the specified sensor type are unregistered.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 19 dynamic
   */
  function off(type: SensorId.MAGNETIC_FIELD_UNCALIBRATED, sensorInfoParam?: SensorInfoParam, callback?: Callback<MagneticFieldUncalibratedResponse>): void;

  /**
   * Unsubscribes from data of the orientation sensor. Call this method to unsubscribe from data of the orientation
   * sensor when the data is no longer needed. The **off** API for canceling subscription and the **on** API for
   * subscription must be used in pairs.
   *
   * **Atomic service API**: This API can be used in atomic services since API version 11.
   *
   * @param { SensorId.ORIENTATION } type - Sensor type. The value is fixed at **SensorId.ORIENTATION**.
   * @param { Callback<OrientationResponse> } callback - Callback to be unregistered. If this parameter
   *     is not specified, all callbacks of the specified sensor type are unregistered.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Sensors.Sensor
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  function off(type: SensorId.ORIENTATION, callback?: Callback<OrientationResponse>): void;

  /**
   * Unsubscribes from data of the orientation sensor. Call this method to unsubscribe from data of the orientation
   * sensor when the data is no longer needed. The **off** API for canceling subscription and the **on** API for
   * subscription must be used in pairs.
   *
   * **Atomic service API**: This API can be used in atomic services since API version 19.
   *
   * @param { SensorId.ORIENTATION } type - Sensor type. The value is fixed at **SensorId.ORIENTATION**.
   * @param { SensorInfoParam } [sensorInfoParam] - Sensor settings parameter. You can cancel the subscription to a
   *     specified sensor on a specified device by specifying **deviceId** and **sensorIndex**. If this parameter is
   *     not passed, the subscription to all sensors of this type on the local device is canceled by default.
   * @param { Callback<OrientationResponse> } [callback] - Callback to be unregistered. If this parameter
   *     is not specified, all callbacks of the specified sensor type are unregistered.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @atomicservice
   * @since 19 dynamic
   */
  function off(type: SensorId.ORIENTATION, sensorInfoParam?: SensorInfoParam, callback?: Callback<OrientationResponse>): void;

  /**
   * Unsubscribes from data of the pedometer sensor. Call this method to cancel the subscription when the pedometer
   * sensor data is no longer needed. The **off** API for canceling subscription and the **on** API for subscription
   * must be used in pairs.
   *
   * @permission ohos.permission.ACTIVITY_MOTION
   * @param { SensorId.PEDOMETER } type - Sensor type. The value is fixed at **SensorId.PEDOMETER**.
   * @param { Callback<PedometerResponse> } callback - Callback to be unregistered. If this parameter
   *     is not specified, all callbacks of the specified sensor type are unregistered.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     <br> required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   */
  function off(type: SensorId.PEDOMETER, callback?: Callback<PedometerResponse>): void;

  /**
   * Unsubscribes from data of the pedometer sensor. When the pedometer sensor data is no longer needed, call this
   * method to cancel the subscription. The **off** API for canceling subscription and the **on** API for
   * subscription must be used in pairs.
   *
   * @permission ohos.permission.ACTIVITY_MOTION
   * @param { SensorId.PEDOMETER } type - Sensor type. The value is fixed at **SensorId.PEDOMETER**.
   * @param { SensorInfoParam } [sensorInfoParam] - Sensor settings parameter. You can cancel the subscription to a
   *     specified sensor on a specified device by specifying **deviceId** and **sensorIndex**. If this parameter is
   *     not passed, the subscription to all sensors of this type on the local device is canceled by default.
   * @param { Callback<PedometerResponse> } [callback] - Callback to be unregistered. If this parameter
   *     is not specified, all callbacks of the specified sensor type are unregistered.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     <br> required to call the API.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 19 dynamic
   */
  function off(type: SensorId.PEDOMETER, sensorInfoParam?: SensorInfoParam, callback?: Callback<PedometerResponse>): void;

  /**
   * Unsubscribes from data of the pedometer detection sensor. Call this method when you no longer need to receive data
   * of the pedometer detection sensor. The **off** API for canceling subscription and the **on** API for subscription
   * must be used in pairs.
   *
   * @permission ohos.permission.ACTIVITY_MOTION
   * @param { SensorId.PEDOMETER_DETECTION } type - Sensor type. The value is fixed at **SensorId.PEDOMETER_DETECTION**.
   * @param { Callback<PedometerDetectionResponse> } callback - Callback to be unregistered. If this parameter
   *     is not specified, all callbacks of the specified sensor type are unregistered.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     <br> required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   */
  function off(type: SensorId.PEDOMETER_DETECTION, callback?: Callback<PedometerDetectionResponse>): void;

  /**
   * Unsubscribes from data of the pedometer detection sensor. Call this method when you no longer need to receive data
   * of the pedometer detection sensor. The **off** API for canceling subscription and the **on** API for subscription
   * must be used in pairs.
   *
   * @permission ohos.permission.ACTIVITY_MOTION
   * @param { SensorId.PEDOMETER_DETECTION } type - Sensor type. The value is fixed at **SensorId.PEDOMETER_DETECTION**.
   * @param { SensorInfoParam } [sensorInfoParam] - Sensor settings parameter. You can cancel the subscription to a
   *     specified sensor on a specified device by specifying **deviceId** and **sensorIndex**. If this parameter is
   *     not passed, the subscription to all sensors of this type on the local device is canceled by default.
   * @param { Callback<PedometerDetectionResponse> } [callback] - Callback to be unregistered. If this parameter
   *     is not specified, all callbacks of the specified sensor type are unregistered.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     <br> required to call the API.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 19 dynamic
   */
  function off(type: SensorId.PEDOMETER_DETECTION, sensorInfoParam?: SensorInfoParam, callback?: Callback<PedometerDetectionResponse>): void;

  /**
   * Unsubscribes from data of the proximity sensor. When the proximity sensor data is no longer needed, call this
   * method to cancel the subscription. The **off** API for canceling subscription and the **on** API for
   * subscription must be used in pairs.
   *
   * @param { SensorId.PROXIMITY } type - Sensor type. The value is fixed at **SensorId.PROXIMITY**.
   * @param { Callback<ProximityResponse> } callback - Callback to be unregistered. If this parameter
   *     is not specified, all callbacks of the specified sensor type are unregistered.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   */
  function off(type: SensorId.PROXIMITY, callback?: Callback<ProximityResponse>): void;

  /**
   * Unsubscribes from data of the proximity sensor. When the proximity sensor data is no longer needed, call this
   * method to cancel the subscription. The **off** API for canceling subscription and the **on** API for
   * subscription must be used in pairs.
   *
   * @param { SensorId.PROXIMITY } type - Sensor type. The value is fixed at **SensorId.PROXIMITY**.
   * @param { SensorInfoParam } [sensorInfoParam] - Sensor settings parameter. You can cancel the subscription to a
   *     specified sensor on a specified device by specifying **deviceId** and **sensorIndex**. If this parameter is
   *     not passed, the subscription to all sensors of this type on the local device is canceled by default.
   * @param { Callback<ProximityResponse> } [callback] - Callback to be unregistered. If this parameter
   *     is not specified, all callbacks of the specified sensor type are unregistered.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 19 dynamic
   */
  function off(type: SensorId.PROXIMITY, sensorInfoParam?: SensorInfoParam, callback?: Callback<ProximityResponse>): void;

  /**
   * Unsubscribes from data of the rotation vector sensor. Call this method to cancel the subscription when the
   * rotation vector sensor data is no longer needed. The **off** API for canceling subscription and the **on** API
   * for subscription must be used in pairs.
   *
   * @param { SensorId.ROTATION_VECTOR } type - Sensor type. The value is fixed at **SensorId.ROTATION_VECTOR**.
   * @param { Callback<RotationVectorResponse> } callback - Callback to be unregistered. If this parameter
   *     is not specified, all callbacks of the specified sensor type are unregistered.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   */
  function off(type: SensorId.ROTATION_VECTOR, callback?: Callback<RotationVectorResponse>): void;

  /**
   * Unsubscribes from data of the rotation vector sensor. Call this method to cancel the subscription when the
   * rotation vector sensor data is no longer needed. The **off** API for canceling subscription and the **on** API
   * for subscription must be used in pairs.
   *
   * @param { SensorId.ROTATION_VECTOR } type - Sensor type. The value is fixed at **SensorId.ROTATION_VECTOR**.
   * @param { SensorInfoParam } [sensorInfoParam] - Sensor settings parameter. You can cancel the subscription to a
   *     specified sensor on a specified device by specifying **deviceId** and **sensorIndex**. If this parameter is
   *     not passed, the subscription to all sensors of this type on the local device is canceled by default.
   * @param { Callback<RotationVectorResponse> } [callback] - Callback to be unregistered. If this parameter
   *     is not specified, all callbacks of the specified sensor type are unregistered.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 19 dynamic
   */
  function off(type: SensorId.ROTATION_VECTOR, sensorInfoParam?: SensorInfoParam, callback?: Callback<RotationVectorResponse>): void;

  /**
   * Unsubscribes from significant motion sensor data. Call this API to unsubscribe from significant motion sensor
   * data when it is no longer needed. The **off** API for canceling subscription and the **on** API for subscription
   * must be used in pairs.
   *
   * @param { SensorId.SIGNIFICANT_MOTION } type - Sensor type. The value is fixed at **SensorId.SIGNIFICANT_MOTION**.
   * @param { Callback<SignificantMotionResponse> } callback - Callback to be unregistered. If this parameter
   *     is not specified, all callbacks of the specified sensor type are unregistered.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   */
  function off(type: SensorId.SIGNIFICANT_MOTION, callback?: Callback<SignificantMotionResponse>): void;

  /**
   * Unsubscribes from significant motion sensor data. Call this API to unsubscribe from significant motion sensor
   * data when it is no longer needed. The **off** API for canceling subscription and the **on** API for subscription
   * must be used in pairs.
   *
   * @param { SensorId.SIGNIFICANT_MOTION } type - Sensor type. The value is fixed at **SensorId.SIGNIFICANT_MOTION**.
   * @param { SensorInfoParam } [sensorInfoParam] - Sensor settings parameter. You can cancel the subscription to a
   *     specified sensor on a specified device by specifying **deviceId** and **sensorIndex**. If this parameter is
   *     not passed, the subscription to all sensors of this type on the local device is canceled by default.
   * @param { Callback<SignificantMotionResponse> } [callback] - Callback to be unregistered. If this parameter
   *     is not specified, all callbacks of the specified sensor type are unregistered.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 19 dynamic
   */
  function off(type: SensorId.SIGNIFICANT_MOTION, sensorInfoParam?: SensorInfoParam, callback?: Callback<SignificantMotionResponse>): void;

  /**
   * Unsubscribes from data of the wear detection sensor. Call this method to unsubscribe from data of the wear
   * detection sensor when the data is no longer needed. The **off** API for canceling subscription and the **on** API
   * for subscription must be used in pairs.
   *
   * @param { SensorId.WEAR_DETECTION } type - Sensor type. The value is fixed at **SensorId.WEAR_DETECTION**.
   * @param { Callback<WearDetectionResponse> } callback - Callback to be unregistered. If this parameter
   *     is not specified, all callbacks of the specified sensor type are unregistered.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   */
  function off(type: SensorId.WEAR_DETECTION, callback?: Callback<WearDetectionResponse>): void;

  /**
   * Unsubscribes from the fused pressure sensor data. Call this method to cancel the subscription when the fused
   * pressure sensor data is no longer needed. The **off** API for canceling subscription and the **on** API for
   * subscription must be used in pairs.
   *
   * @param { SensorId.FUSION_PRESSURE } type - Sensor type. The value is fixed at SensorId.FUSION_PRESSURE.
   * @param { SensorInfoParam } [sensorInfoParam] - Sensor settings parameter. You can cancel the subscription to a
   *     specified sensor on a specified device by specifying **deviceId** and **sensorIndex**. If this parameter is
   *     not passed, the subscription to all sensors of this type on the local device is canceled by default.
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
   * Unsubscribes from data of the wear detection sensor. Call this method to unsubscribe from data of the wear
   * detection sensor when the data is no longer needed. The **off** API for canceling subscription and the **on** API
   * for subscription must be used in pairs.
   *
   * @param { SensorId.WEAR_DETECTION } type - Sensor type. The value is fixed at **SensorId.WEAR_DETECTION**.
   * @param { SensorInfoParam } [sensorInfoParam] - Sensor settings parameter. You can cancel the subscription to a
   *     specified sensor on a specified device by specifying **deviceId** and **sensorIndex**. If this parameter is
   *     not passed, the subscription to all sensors of this type on the local device is canceled by default.
   * @param { Callback<WearDetectionResponse> } [callback] - Callback to be unregistered. If this parameter
   *     is not specified, all callbacks of the specified sensor type are unregistered.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 19 dynamic
   */
  function off(type: SensorId.WEAR_DETECTION, sensorInfoParam?: SensorInfoParam, callback?: Callback<WearDetectionResponse>): void;

  /**
   * Subscribes to data changes of the acceleration sensor. This API uses an asynchronous callback to return the
   * result. This sensor is applicable to scenarios where the device motion status needs to be detected, such as
   * screen rotation and game control. If this API is called multiple times for the same application, the last call
   * takes effect.
   *
   * > **NOTE**
   * >
   * > This API is supported since API version 8 and deprecated since API version 9. You are advised to use
   * > [sensor.on.ACCELEROMETER]{@link sensor.on(type: SensorId.ACCELEROMETER, callback: Callback<AccelerometerResponse>, options?: Options)}
   * > instead.
   *
   * @permission ohos.permission.ACCELEROMETER
   * @param { SensorType.SENSOR_TYPE_ID_ACCELEROMETER } type - Type of the sensor to subscribe to, which is
   *     **SENSOR_TYPE_ID_ACCELEROMETER**.
   * @param { Callback<AccelerometerResponse> } callback - Callback used to return the acceleration sensor data. The
   *     reported data type in the callback is **AccelerometerResponse**.
   * @param { Options } options - This parameter is used to set the data reporting frequency. The default value is
   *     200,000,000 ns (200 ms).
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.on(type: SensorId.ACCELEROMETER, callback: Callback<AccelerometerResponse>, options?: Options)
   */
  function on(type: SensorType.SENSOR_TYPE_ID_ACCELEROMETER, callback: Callback<AccelerometerResponse>,
    options?: Options): void;

  /**
   * Subscribes to data changes of the uncalibrated acceleration sensor. This API uses an asynchronous callback to
   * return the result. This API is applicable to scenarios where you need to obtain the raw acceleration data that
   * contains deviation calibration data. If this API is called multiple times for the same application, the last
   * call takes effect.
   *
   * > **NOTE**
   * >
   * > This API is supported since API version 8 and deprecated since API version 9. You are advised to use
   * > [sensor.on.ACCELEROMETER]{@link sensor.on(type: SensorId.ACCELEROMETER_UNCALIBRATED, callback: Callback<AccelerometerUncalibratedResponse>, options?: Options)}
   * > instead.
   *
   * @permission ohos.permission.ACCELEROMETER
   * @param { SensorType.SENSOR_TYPE_ID_ACCELEROMETER_UNCALIBRATED } type - Type of the sensor to subscribe to, which is
   *     **SENSOR_TYPE_ID_ACCELEROMETER_UNCALIBRATED**.
   * @param { Callback<AccelerometerUncalibratedResponse> } callback - Callback used to return the uncalibrated
   *     acceleration sensor data. The reported data type in the callback is **AccelerometerUncalibratedResponse**.
   * @param { Options } options - This parameter is used to set the data reporting frequency. The default value is
   *     200,000,000 ns (200 ms).
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.on(type: SensorId.ACCELEROMETER_UNCALIBRATED, callback: Callback<AccelerometerUncalibratedResponse>, options?: Options)
   */
  function on(type: SensorType.SENSOR_TYPE_ID_ACCELEROMETER_UNCALIBRATED, callback: Callback<AccelerometerUncalibratedResponse>,
    options?: Options): void;

  /**
   * Subscribes to data changes of the ambient light sensor. This API uses an asynchronous callback to return the
   * result. This API is applicable to scenarios where the ambient light intensity needs to be detected. If this API
   * is called multiple times for the same application, the last call takes effect.
   *
   * > **NOTE**
   * >
   * > This API is supported since API version 8 and deprecated since API version 9. You are advised to use
   * > [sensor.on.AMBIENT_LIGHT]{@link sensor.on(type: SensorId.AMBIENT_LIGHT, callback: Callback<LightResponse>, options?: Options)}
   * > instead.
   *
   * @param { SensorType.SENSOR_TYPE_ID_AMBIENT_LIGHT } type - Type of the sensor to subscribe to, which is
   *     **SENSOR_TYPE_ID_AMBIENT_LIGHT**.
   * @param { Callback<LightResponse> } callback - Callback used to return the ambient light sensor data. The reported
   *     data type in the callback is **LightResponse**.
   * @param { Options } options - This parameter is used to set the data reporting frequency. The default value is
   *     200,000,000 ns (200 ms).
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.on(type: SensorId.AMBIENT_LIGHT, callback: Callback<LightResponse>, options?: Options)
   */
  function on(type: SensorType.SENSOR_TYPE_ID_AMBIENT_LIGHT, callback: Callback<LightResponse>,
    options?: Options): void;

  /**
   * Subscribes to data changes of the ambient temperature sensor. This API uses an asynchronous callback to return
   * the result. This method is suitable for scenarios where the ambient temperature needs to be detected. If this
   * API is called multiple times for the same application, the last call takes effect.
   *
   * > **NOTE**
   * >
   * > This API is supported since API version 8 and deprecated since API version 9. You are advised to use
   * > [sensor.on.AMBIENT_TEMPERATURE]{@link sensor.on(type: SensorId.AMBIENT_TEMPERATURE, callback: Callback<AmbientTemperatureResponse>, options?: Options)}
   * > instead.
   *
   * @param { SensorType.SENSOR_TYPE_ID_AMBIENT_TEMPERATURE } type - Type of the sensor to subscribe to, which is
   *     **SENSOR_TYPE_ID_AMBIENT_TEMPERATURE**.
   * @param { Callback<AmbientTemperatureResponse> } callback - Callback used to return the ambient temperature sensor
   *     data. The reported data type in the callback is **AmbientTemperatureResponse**.
   * @param { Options } options - This parameter is used to set the data reporting frequency. The default value is
   *     200,000,000 ns (200 ms).
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.on(type: SensorId.AMBIENT_TEMPERATURE, callback: Callback<AmbientTemperatureResponse>, options?: Options)
   */
  function on(type: SensorType.SENSOR_TYPE_ID_AMBIENT_TEMPERATURE, callback: Callback<AmbientTemperatureResponse>,
    options?: Options): void;

  /**
   * Subscribes to data changes of the barometer sensor. This API uses an asynchronous callback to return the result.
   * This method is suitable for scenarios where the ambient barometric pressure needs to be detected. If this API is
   * called multiple times for the same application, the last call takes effect.
   *
   * > **NOTE**
   * >
   * > This API is supported since API version 8 and deprecated since API version 9. You are advised to use
   * > [sensor.on.BAROMETER]{@link sensor.on(type: SensorId.BAROMETER, callback: Callback<BarometerResponse>, options?: Options)}
   * > instead.
   *
   * @param { SensorType.SENSOR_TYPE_ID_BAROMETER } type - Type of the sensor to subscribe to, which is
   *     **SENSOR_TYPE_ID_BAROMETER**.
   * @param { Callback<BarometerResponse> } callback - Callback used to return the barometer sensor data. The reported
   *     data type in the callback is **BarometerResponse**.
   * @param { Options } options - This parameter is used to set the data reporting frequency. The default value is
   *     200,000,000 ns (200 ms).
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.on(type: SensorId.BAROMETER, callback: Callback<BarometerResponse>, options?: Options)
   */
  function on(type: SensorType.SENSOR_TYPE_ID_BAROMETER, callback: Callback<BarometerResponse>,
    options?: Options): void;

  /**
   * Subscribes to data changes of the gravity sensor. This API uses an asynchronous callback to return the result.
   * This method is suitable for scenarios where the device gravity direction needs to be detected. If this API is
   * called multiple times for the same application, the last call takes effect.
   *
   * > **NOTE**
   * >
   * > This API is supported since API version 8 and deprecated since API version 9. You are advised to use
   * > [sensor.on.GRAVITY]{@link sensor.on(type: SensorId.GRAVITY, callback: Callback<GravityResponse>, options?: Options)}
   * > instead.
   *
   * @param { SensorType.SENSOR_TYPE_ID_GRAVITY } type - Type of the sensor to subscribe to, which is
   *     **SENSOR_TYPE_ID_GRAVITY**.
   * @param { Callback<GravityResponse> } callback - Callback used to return the gravity sensor data. The reported data
   *     type in the callback is **GravityResponse**.
   * @param { Options } options - This parameter is used to set the data reporting frequency. The default value is
   *     200,000,000 ns (200 ms).
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.on(type: SensorId.GRAVITY, callback: Callback<GravityResponse>, options?: Options)
   */
  function on(type: SensorType.SENSOR_TYPE_ID_GRAVITY, callback: Callback<GravityResponse>,
    options?: Options): void;

  /**
   * Subscribes to data changes of the gyroscope sensor. This API uses an asynchronous callback to return the result.
   * This sensor is applicable to scenarios where the device's angular velocity needs to be detected. If this API is
   * called multiple times for the same application, the last call takes effect.
   *
   * > **NOTE**
   * >
   * > This API is supported since API version 8 and deprecated since API version 9. You are advised to use
   * > [sensor.on.GYROSCOPE]{@link sensor.on(type: SensorId.GYROSCOPE, callback: Callback<GyroscopeResponse>, options?: Options)}
   * > instead.
   *
   * @permission ohos.permission.GYROSCOPE
   * @param { SensorType.SENSOR_TYPE_ID_GYROSCOPE } type - Type of the sensor to subscribe to, which is
   *     **SENSOR_TYPE_ID_GYROSCOPE**.
   * @param { Callback<GyroscopeResponse> } callback - Callback used to return the gyroscope sensor data. The reported
   *     data type in the callback is **GyroscopeResponse**.
   * @param { Options } options - This parameter is used to set the data reporting frequency. The default value is
   *     200,000,000 ns (200 ms).
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.on(type: SensorId.GYROSCOPE, callback: Callback<GyroscopeResponse>, options?: Options)
   */
  function on(type: SensorType.SENSOR_TYPE_ID_GYROSCOPE, callback: Callback<GyroscopeResponse>,
    options?: Options): void;

  /**
   * Subscribes to data changes of the uncalibrated gyroscope sensor. This API uses an asynchronous callback to return
   * the result. This method is applicable to scenarios where you need to obtain the raw gyroscope data that contains
   * bias calibration data. If this API is called multiple times for the same application, the last call takes effect.
   *
   * > **NOTE**
   * >
   * > This API is supported since API version 8 and deprecated since API version 9. You are advised to use
   * > [sensor.on.GYROSCOPE_UNCALIBRATED]{@link sensor.on(type: SensorId.GYROSCOPE_UNCALIBRATED, callback: Callback<GyroscopeUncalibratedResponse>, options?: Options)}
   * > instead.
   *
   * @permission ohos.permission.GYROSCOPE
   * @param { SensorType.SENSOR_TYPE_ID_GYROSCOPE_UNCALIBRATED } type - Type of the sensor to subscribe to, which is
   *     **SENSOR_TYPE_ID_GYROSCOPE_UNCALIBRATED**.
   * @param { Callback<GyroscopeUncalibratedResponse> } callback - Callback used to return the uncalibrated gyroscope
   *     sensor data. The reported data type in the callback is **GyroscopeUncalibratedResponse**.
   * @param { Options } options - This parameter is used to set the data reporting frequency. The default value is
   *     200,000,000 ns (200 ms).
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.on(type: SensorId.GYROSCOPE_UNCALIBRATED, callback: Callback<GyroscopeUncalibratedResponse>, options?: Options)
   */
  function on(type: SensorType.SENSOR_TYPE_ID_GYROSCOPE_UNCALIBRATED, callback: Callback<GyroscopeUncalibratedResponse>,
    options?: Options): void;

  /**
   * Subscribes to data changes of the Hall effect sensor. This API uses an asynchronous callback to return the result.
   * This API is applicable to scenarios where the device cover or magnet status needs to be detected. If this API is
   * called multiple times for the same application, the last call takes effect.
   *
   * > **NOTE**
   * >
   * > This API is supported since API version 8 and deprecated since API version 9. You are advised to use
   * > [sensor.on.HALL]{@link sensor.on(type: SensorId.HALL, callback: Callback<HallResponse>, options?: Options)}
   * > instead.
   *
   * @param { SensorType.SENSOR_TYPE_ID_HALL } type - Type of the sensor to subscribe to, which is
   *     **SENSOR_TYPE_ID_HALL**.
   * @param { Callback<HallResponse> } callback - Callback used to return the Hall effect sensor data. The reported data
   *     type in the callback is **HallResponse**.
   * @param { Options } options - Optional parameters used to set the reporting frequency of the sensor when the Hall
   *     effect sensor is frequently triggered. The default value is 200,000,000 ns (200 ms).
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.on(type: SensorId.HALL, callback: Callback<HallResponse>, options?: Options)
   */
  function on(type: SensorType.SENSOR_TYPE_ID_HALL, callback: Callback<HallResponse>,
    options?: Options): void;

  /**
   * Subscribes to data changes of the heart rate sensor. This API uses an asynchronous callback to return the result.
   * This method is suitable for scenarios where the user's heart rate data needs to be obtained. If this API is
   * called multiple times for the same application, the last call takes effect.
   *
   * > **NOTE**
   * >
   * > This API is supported since API version 8 and deprecated since API version 9. You are advised to use
   * > [sensor.on.HALL]{@link sensor.on(type: SensorId.HALL, callback: Callback<HallResponse>, options?: Options)}
   * > instead.
   *
   * @permission ohos.permission.HEALTH_DATA
   * @param { SensorType.SENSOR_TYPE_ID_HEART_RATE } type - Type of the sensor to subscribe to, which is
   *     **SENSOR_TYPE_ID_HEART_RATE**.
   * @param { Callback<HeartRateResponse> } callback - Callback used to return the heart rate sensor data. The reported
   *     data type in the callback is **HeartRateResponse**.
   * @param { Options } options - This parameter is used to set the data reporting frequency. The default value is
   *     200,000,000 ns (200 ms).
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.on(type: SensorId.HEART_RATE, callback: Callback<HeartRateResponse>, options?: Options)
   */
  function on(type: SensorType.SENSOR_TYPE_ID_HEART_RATE, callback: Callback<HeartRateResponse>,
    options?: Options): void;

  /**
   * Subscribes to data changes of the humidity sensor. This API uses an asynchronous callback to return the result.
   * This method is suitable for scenarios where the ambient humidity needs to be detected. If this API is called
   * multiple times for the same application, the last call takes effect.
   *
   * > **NOTE**
   * >
   * > This API is supported since API version 8 and deprecated since API version 9. You are advised to use
   * > [sensor.on.SENSOR_TYPE_ID_HUMIDITY]{@link sensor.on(type: SensorId.HUMIDITY, callback: Callback<HumidityResponse>, options?: Options)}
   * > instead.
   *
   * @param { SensorType.SENSOR_TYPE_ID_HUMIDITY } type - Type of the sensor to subscribe to, which is
   *     **SENSOR_TYPE_ID_HUMIDITY**.
   * @param { Callback<HumidityResponse> } callback - Callback used to return the humidity sensor data. The reported
   *     data type in the callback is **HumidityResponse**.
   * @param { Options } options - This parameter is used to set the data reporting frequency. The default value is
   *     200,000,000 ns (200 ms).
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.on(type: SensorId.HUMIDITY, callback: Callback<HumidityResponse>, options?: Options)
   */
  function on(type: SensorType.SENSOR_TYPE_ID_HUMIDITY, callback: Callback<HumidityResponse>,
    options?: Options): void;

  /**
   * Subscribes to data changes of the linear acceleration sensor. This API uses an asynchronous callback to return
   * the result. This API applies to scenarios where you need to obtain the linear acceleration data excluding the
   * effect of gravity. If this API is called multiple times for the same application, the last call takes effect.
   *
   * > **NOTE**
   * >
   * > This API is supported since API version 8 and deprecated since API version 9. You are advised to use
   * > [sensor.on.LINEAR_ACCELEROMETER]{@link sensor.on(type: SensorId.LINEAR_ACCELEROMETER, callback: Callback<LinearAccelerometerResponse>, options?: Options)}
   * > instead.
   *
   * @permission ohos.permission.ACCELEROMETER
   * @param { SensorType.SENSOR_TYPE_ID_LINEAR_ACCELERATION } type - Type of the sensor to subscribe to, which is
   *     **SENSOR_TYPE_ID_LINEAR_ACCELERATION**.
   * @param { Callback<LinearAccelerometerResponse> } callback - Callback used to return the linear acceleration sensor
   *     data. The reported data type in the callback is **LinearAccelerometerResponse**.
   * @param { Options } options - This parameter is used to set the data reporting frequency. The default value is
   *     200,000,000 ns (200 ms).
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.on(type: SensorId.LINEAR_ACCELEROMETER, callback: Callback<LinearAccelerometerResponse>, options?: Options)
   */
  function on(type: SensorType.SENSOR_TYPE_ID_LINEAR_ACCELERATION, callback: Callback<LinearAccelerometerResponse>,
    options?: Options): void;

  /**
   * Subscribes to data changes of the magnetic field sensor. This API uses an asynchronous callback to return the
   * result. This sensor is applicable to scenarios where the strength and direction of the magnetic field around the
   * device need to be detected. If this API is called multiple times for the same application, the last call takes
   * effect.
   *
   * > **NOTE**
   * >
   * > This API is supported since API version 8 and deprecated since API version 9. You are advised to use
   * > [sensor.on.MAGNETIC_FIELD]{@link sensor.on(type: SensorId.MAGNETIC_FIELD, callback: Callback<MagneticFieldResponse>, options?: Options)}
   * > instead.
   *
   * @param { SensorType.SENSOR_TYPE_ID_MAGNETIC_FIELD } type - Type of the sensor to subscribe to, which is
   *     **SENSOR_TYPE_ID_MAGNETIC_FIELD**.
   * @param { Callback<MagneticFieldResponse> } callback - Callback used to return the magnetic field sensor data. The
   *     reported data type in the callback is **MagneticFieldResponse**.
   * @param { Options } options - This parameter is used to set the data reporting frequency. The default value is
   *     200,000,000 ns (200 ms).
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.on(type: SensorId.MAGNETIC_FIELD, callback: Callback<MagneticFieldResponse>, options?: Options)
   */
  function on(type: SensorType.SENSOR_TYPE_ID_MAGNETIC_FIELD, callback: Callback<MagneticFieldResponse>,
    options?: Options): void;

  /**
   * Subscribes to data changes of the uncalibrated magnetic field sensor. This API uses an asynchronous callback to
   * return the result. This method applies to scenarios where you need to obtain the raw magnetic field data that
   * contains the deviation calibration data. If this API is called multiple times for the same application, the last
   * call takes effect.
   *
   * > **NOTE**
   * >
   * > This API is supported since API version 8 and deprecated since API version 9. You are advised to use
   * > [sensor.on.MAGNETIC_FIELD_UNCALIBRATED]{@link sensor.on(type: SensorId.MAGNETIC_FIELD_UNCALIBRATED, callback: Callback<MagneticFieldUncalibratedResponse>, options?: Options)}
   * > instead.
   *
   * @param { SensorType.SENSOR_TYPE_ID_MAGNETIC_FIELD_UNCALIBRATED } type - Type of the sensor to subscribe to, which
   *     is **SENSOR_TYPE_ID_MAGNETIC_FIELD_UNCALIBRATED**.
   * @param { Callback<MagneticFieldUncalibratedResponse> } callback - Callback used to return the uncalibrated magnetic
   *     field sensor data. The reported data type in the callback is **MagneticFieldUncalibratedResponse**.
   * @param { Options } options - This parameter is used to set the data reporting frequency. The default value is
   *     200,000,000 ns (200 ms).
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.on(type: SensorId.MAGNETIC_FIELD_UNCALIBRATED, callback: Callback<MagneticFieldUncalibratedResponse>, options?: Options)
   */
  function on(type: SensorType.SENSOR_TYPE_ID_MAGNETIC_FIELD_UNCALIBRATED, callback: Callback<MagneticFieldUncalibratedResponse>,
    options?: Options): void;

  /**
   * Subscribes to data changes of the orientation sensor. This API uses an asynchronous callback to return the result.
   * This method is suitable for scenarios where the device orientation needs to be detected. If this API is called
   * multiple times for the same application, the last call takes effect.
   *
   * > **NOTE**
   * >
   * > This API is supported since API version 8 and deprecated since API version 9. You are advised to use
   * > [sensor.on.ORIENTATION]{@link sensor.on(type: SensorId.ORIENTATION, callback: Callback<OrientationResponse>, options?: Options)}
   * > instead.
   *
   * @param { SensorType.SENSOR_TYPE_ID_ORIENTATION } type - Type of the sensor to subscribe to, which is
   *     **SENSOR_TYPE_ID_ORIENTATION**.
   * @param { Callback<OrientationResponse> } callback - Callback used to return the orientation sensor data. The
   *     reported data type in the callback is **OrientationResponse**.
   * @param { Options } options - This parameter is used to set the data reporting frequency. The default value is
   *     200,000,000 ns (200 ms).
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.on(type: SensorId.ORIENTATION, callback: Callback<OrientationResponse>, options?: Options)
   */
  function on(type: SensorType.SENSOR_TYPE_ID_ORIENTATION, callback: Callback<OrientationResponse>,
    options?: Options): void;

  /**
   * Subscribes to data changes of the pedometer sensor. This API uses an asynchronous callback to return the result.
   * This method is suitable for scenarios where the user's step count needs to be obtained. If this API is called
   * multiple times for the same application, the last call takes effect.
   *
   * > **NOTE**
   * >
   * > This API is supported since API version 8 and deprecated since API version 9. You are advised to use
   * > [sensor.on.PEDOMETER]{@link sensor.on(type: SensorId.PEDOMETER, callback: Callback<PedometerResponse>, options?: Options)}
   * > instead.
   *
   * @permission ohos.permission.ACTIVITY_MOTION
   * @param { SensorType.SENSOR_TYPE_ID_PEDOMETER } type - Type of the sensor to subscribe to, which is
   *     **SENSOR_TYPE_ID_PEDOMETER**.
   * @param { Callback<PedometerResponse> } callback - Callback used to return the pedometer sensor data. The reported
   *     data type in the callback is **PedometerResponse**.
   * @param { Options } options - This parameter is used to set the data reporting frequency. The default value is
   *     200,000,000 ns (200 ms).
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.on(type: SensorId.PEDOMETER, callback: Callback<PedometerResponse>, options?: Options)
   */
  function on(type: SensorType.SENSOR_TYPE_ID_PEDOMETER, callback: Callback<PedometerResponse>,
    options?: Options): void;

  /**
   * Subscribes to data changes of the pedometer detection sensor. This API uses an asynchronous callback to return the
   * result. This method is suitable for scenarios where you need to detect whether a user is walking. If this API is
   * called multiple times for the same application, the last call takes effect.
   *
   * > **NOTE**
   * >
   * > This API is supported since API version 8 and deprecated since API version 9. You are advised to use
   * > [sensor.on.PEDOMETER_DETECTION]{@link sensor.on(type: SensorId.PEDOMETER_DETECTION, callback: Callback<PedometerDetectionResponse>, options?: Options)}
   * > instead.
   *
   * @permission ohos.permission.ACTIVITY_MOTION
   * @param { SensorType.SENSOR_TYPE_ID_PEDOMETER_DETECTION } type - Type of the sensor to subscribe to, which is
   *     **SENSOR_TYPE_ID_PEDOMETER_DETECTION**.
   * @param { Callback<PedometerDetectionResponse> } callback - Callback used to return the pedometer detection sensor
   *     data. The reported data type in the callback is **PedometerDetectionResponse**.
   * @param { Options } options - This parameter is used to set the data reporting frequency. The default value is
   *     200,000,000 ns (200 ms).
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.on(type: SensorId.PEDOMETER_DETECTION, callback: Callback<PedometerDetectionResponse>, options?: Options)
   */
  function on(type: SensorType.SENSOR_TYPE_ID_PEDOMETER_DETECTION, callback: Callback<PedometerDetectionResponse>,
    options?: Options): void;

  /**
   * Subscribes to data changes of the proximity sensor. This API uses an asynchronous callback to return the result.
   * This sensor is applicable to scenarios where the proximity of an object to the device needs to be detected. If
   * this API is called multiple times for the same application, the last call takes effect.
   *
   * > **NOTE**
   * >
   * > This API is supported since API version 8 and deprecated since API version 9. You are advised to use
   * > [sensor.on.PROXIMITY]{@link sensor.on(type: SensorId.PROXIMITY, callback: Callback<ProximityResponse>, options?: Options)}
   * > instead.
   *
   * @param { SensorType.SENSOR_TYPE_ID_PROXIMITY } type - Type of the sensor to subscribe to, which is
   *     **SENSOR_TYPE_ID_PROXIMITY**.
   * @param { Callback<ProximityResponse> } callback - Callback used to return the proximity sensor data. The reported
   *     data type in the callback is **ProximityResponse**.
   * @param { Options } options - Optional parameters used to set the reporting frequency of the sensor when the
   *     proximity sensor is frequently triggered. The default value is 200,000,000 ns (200 ms).
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.on(type: SensorId.PROXIMITY, callback: Callback<ProximityResponse>, options?: Options)
   */
  function on(type: SensorType.SENSOR_TYPE_ID_PROXIMITY, callback: Callback<ProximityResponse>,
    options?: Options): void;

  /**
   * Subscribes to data changes of the rotation vector sensor. This API uses an asynchronous callback to return the
   * result. This sensor is applicable to scenarios where the device rotation status in three-dimensional space needs
   * to be detected. If this API is called multiple times for the same application, the last call takes effect.
   *
   * > **NOTE**
   * >
   * > This API is supported since API version 8 and deprecated since API version 9. You are advised to use
   * > [sensor.on.ROTATION_VECTOR]{@link sensor.on(type: SensorId.ROTATION_VECTOR, callback: Callback<RotationVectorResponse>, options?: Options)}
   * > instead.
   *
   * @param { SensorType.SENSOR_TYPE_ID_ROTATION_VECTOR } type - Type of the sensor to subscribe to, which is
   *     **SENSOR_TYPE_ID_ROTATION_VECTOR**.
   * @param { Callback<RotationVectorResponse> } callback - Callback used to return the rotation vector sensor data. The
   *     reported data type in the callback is **RotationVectorResponse**.
   * @param { Options } options - This parameter is used to set the data reporting frequency. The default value is
   *     200,000,000 ns (200 ms).
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.on(type: SensorId.ROTATION_VECTOR, callback: Callback<RotationVectorResponse>, options?: Options)
   */
  function on(type: SensorType.SENSOR_TYPE_ID_ROTATION_VECTOR, callback: Callback<RotationVectorResponse>,
    options?: Options): void;

  /**
   * Subscribes to data changes of the significant motion sensor. This API uses an asynchronous callback to return the
   * result. This API is applicable to scenarios where you need to detect whether the device has significant motion.
   * If this API is called multiple times for the same application, the last call takes effect.
   *
   * > **NOTE**
   * >
   * > This API is supported since API version 8 and deprecated since API version 9. You are advised to use
   * > [sensor.on.SIGNIFICANT_MOTION]{@link sensor.on(type: SensorId.SIGNIFICANT_MOTION, callback: Callback<SignificantMotionResponse>, options?: Options)}
   * > instead.
   *
   * @param { SensorType.SENSOR_TYPE_ID_SIGNIFICANT_MOTION } type - Type of the sensor to subscribe to, which is
   *     **SENSOR_TYPE_ID_SIGNIFICANT_MOTION**.
   * @param { Callback<SignificantMotionResponse> } callback - Callback used to return the significant motion sensor
   *     data. The reported data type in the callback is **SignificantMotionResponse**.
   * @param { Options } options - This parameter is used to set the data reporting frequency. The default value is
   *     200,000,000 ns (200 ms).
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.on(type: SensorId.SIGNIFICANT_MOTION, callback: Callback<SignificantMotionResponse>, options?: Options)
   */
  function on(type: SensorType.SENSOR_TYPE_ID_SIGNIFICANT_MOTION, callback: Callback<SignificantMotionResponse>,
    options?: Options): void;

  /**
   * Subscribes to data changes of the wear detection sensor. This API uses an asynchronous callback to return the
   * result. This method is suitable for scenarios where you need to check whether a device is being worn. If this API
   * is called multiple times for the same application, the last call takes effect.
   *
   * > **NOTE**
   * >
   * > This API is supported since API version 8 and deprecated since API version 9. You are advised to use
   * > [sensor.on.WEAR_DETECTION]{@link sensor.on(type: SensorId.WEAR_DETECTION, callback: Callback<WearDetectionResponse>, options?: Options)}
   * > instead.
   *
   * @param { SensorType.SENSOR_TYPE_ID_WEAR_DETECTION } type - Type of the sensor to subscribe to, which is
   *     **SENSOR_TYPE_ID_WEAR_DETECTION**.
   * @param { Callback<WearDetectionResponse> } callback - Callback used to return the wear detection sensor data. The
   *     reported data type in the callback is **WearDetectionResponse**.
   * @param { Options } options - This parameter is used to set the data reporting frequency. The default value is
   *     200,000,000 ns (200 ms).
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.on(type: SensorId.WEAR_DETECTION, callback: Callback<WearDetectionResponse>, options?: Options)
   */
  function on(type: SensorType.SENSOR_TYPE_ID_WEAR_DETECTION, callback: Callback<WearDetectionResponse>,
    options?: Options): void;

  /**
   * Subscribes to only one data change of the acceleration sensor. This method applies to scenarios where only the
   * current acceleration data needs to be obtained once.
   *
   * > **NOTE**
   * >
   * > This API is supported since API version 8 and deprecated since API version 9. You are advised to use
   * > [sensor.once.ACCELEROMETER]{@link sensor.once(type: SensorId.ACCELEROMETER, callback: Callback<AccelerometerResponse>)}
   * > instead.
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
   * Subscribes to only one data change of the uncalibrated acceleration sensor. This method applies to scenarios where
   * only the current uncalibrated acceleration data needs to be obtained once.
   *
   * > **NOTE**
   * >
   * > This API is supported since API version 8 and deprecated since API version 9. You are advised to use
   * > [sensor.once.ACCELEROMETER_UNCALIBRATED]{@link sensor.once(type: SensorId.ACCELEROMETER_UNCALIBRATED, callback: Callback<AccelerometerUncalibratedResponse>)}
   * > instead.
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
   * Subscribes to only one data change of the ambient light sensor. This method applies to scenarios where only the
   * current ambient light data needs to be obtained at a time.
   *
   * > **NOTE**
   * >
   * > This API is supported since API version 8 and deprecated since API version 9. You are advised to use
   * > [sensor.once.AMBIENT_LIGHT]{@link sensor.once(type: SensorId.AMBIENT_LIGHT, callback: Callback<LightResponse>)}
   * > instead.
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
   * Subscribes to only one data change of the ambient temperature sensor. This method applies to scenarios where the
   * current ambient temperature data needs to be obtained only once.
   *
   * > **NOTE**
   * >
   * > This API is supported since API version 8 and deprecated since API version 9. You are advised to use
   * > [sensor.once.AMBIENT_TEMPERATURE]{@link sensor.once(type: SensorId.AMBIENT_TEMPERATURE, callback: Callback<AmbientTemperatureResponse>)}
   * > instead.
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
   * Subscribes to only one data change of the barometer sensor. This method applies to scenarios where only the
   * current barometric pressure data needs to be obtained once.
   *
   * > **NOTE**
   * >
   * > This API is supported since API version 8 and deprecated since API version 9. You are advised to use
   * > [sensor.once.BAROMETER]{@link sensor.once(type: SensorId.BAROMETER, callback: Callback<BarometerResponse>)}
   * > instead.
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
   * Subscribes to only one data change of the gravity sensor. This method applies to scenarios where only the current
   * gravity data needs to be obtained once.
   *
   * > **NOTE**
   * >
   * > This API is supported since API version 8 and deprecated since API version 9. You are advised to use
   * > [sensor.once.GRAVITY]{@link sensor.once(type: SensorId.GRAVITY, callback: Callback<GravityResponse>)}
   * > instead.
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
   * Subscribes to only one data change of the gyroscope sensor. This method applies to scenarios where only the
   * current gyroscope data needs to be obtained once.
   *
   * > **NOTE**
   * >
   * > This API is supported since API version 8 and deprecated since API version 9. You are advised to use
   * > [sensor.once.GYROSCOPE]{@link sensor.once(type: SensorId.GYROSCOPE, callback: Callback<GyroscopeResponse>)}
   * > instead.
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
   * Subscribes to only one data change of the uncalibrated gyroscope sensor. This method applies to scenarios where
   * only the current uncalibrated gyroscope data needs to be obtained once.
   *
   * > **NOTE**
   * >
   * > This API is supported since API version 8 and deprecated since API version 9. You are advised to use
   * > [sensor.once.GYROSCOPE_UNCALIBRATED]{@link sensor.once(type: SensorId.GYROSCOPE_UNCALIBRATED, callback: Callback<GyroscopeUncalibratedResponse>)}
   * > instead.
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
   * Subscribes to only one data change of the Hall effect sensor. This method applies to scenarios where only the
   * current Hall effect sensor data needs to be obtained once.
   *
   * > **NOTE**
   * >
   * > This API is supported since API version 8 and deprecated since API version 9. You are advised to use
   * > [sensor.once.HALL]{@link sensor.once(type: SensorId.HALL, callback: Callback<HallResponse>)}
   * > instead.
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
   * Subscribes to only one data change of the heart rate sensor. This method applies to scenarios where only the
   * current heart rate data needs to be obtained once.
   *
   * > **NOTE**
   * >
   * > This API is supported since API version 8 and deprecated since API version 9. You are advised to use
   * > [sensor.once.HEART_RATE]{@link sensor.once(type: SensorId.HEART_RATE, callback: Callback<HeartRateResponse>)}
   * > instead.
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
   * Subscribes to only one data change of the humidity sensor. This method applies to scenarios where only the current
   * humidity data needs to be obtained once.
   *
   * > **NOTE**
   * >
   * > This API is supported since API version 8 and deprecated since API version 9. You are advised to use
   * > [sensor.once.HUMIDITY]{@link sensor.once(type: SensorId.HUMIDITY, callback: Callback<HumidityResponse>)}
   * > instead.
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
   * Subscribes to only one data change of the linear acceleration sensor. This method applies to scenarios where only
   * the current linear acceleration data needs to be obtained once.
   *
   * > **NOTE**
   * >
   * > This API is supported since API version 8 and deprecated since API version 9. You are advised to use
   * > [sensor.once.LINEAR_ACCELEROMETER]{@link sensor.once(type: SensorId.LINEAR_ACCELEROMETER, callback: Callback<LinearAccelerometerResponse>)}
   * > instead.
   *
   * @permission ohos.permission.ACCELEROMETER
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
   * Subscribes to only one data change of the magnetic field sensor. This method applies to scenarios where only the
   * current magnetic field data needs to be obtained once.
   *
   * > **NOTE**
   * >
   * > This API is supported since API version 8 and deprecated since API version 9. You are advised to use
   * > [sensor.once.MAGNETIC_FIELD]{@link sensor.once(type: SensorId.MAGNETIC_FIELD, callback: Callback<MagneticFieldResponse>)}
   * > instead.
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
   * Subscribes to only one data change of the uncalibrated magnetic field sensor. This method applies to scenarios
   * where only the current uncalibrated magnetic field data needs to be obtained once.
   *
   * > **NOTE**
   * >
   * > This API is supported since API version 8 and deprecated since API version 9. You are advised to use
   * > [sensor.once.MAGNETIC_FIELD_UNCALIBRATED]{@link sensor.once(type: SensorId.MAGNETIC_FIELD_UNCALIBRATED, callback: Callback<MagneticFieldUncalibratedResponse>)}
   * > instead.
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
   * Subscribes to only one data change of the orientation sensor. This method applies to scenarios where only the
   * current orientation data needs to be obtained once.
   *
   * > **NOTE**
   * >
   * > This API is supported since API version 8 and deprecated since API version 9. You are advised to use
   * > [sensor.once.ORIENTATION]{@link sensor.once(type: SensorId.ORIENTATION, callback: Callback<OrientationResponse>)}
   * > instead.
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
   * Subscribes to only one data change of the pedometer sensor. This method applies to scenarios where only the
   * current step count data needs to be obtained once.
   *
   * > **NOTE**
   * >
   * > This API is supported since API version 8 and deprecated since API version 9. You are advised to use
   * > [sensor.once.PEDOMETER]{@link sensor.once(type: SensorId.PEDOMETER, callback: Callback<PedometerResponse>)}
   * > instead.
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
   * Subscribes to only one data change of the pedometer detection sensor. This method applies to scenarios where only
   * the current pedometer detection data needs to be obtained once.
   *
   * > **NOTE**
   * >
   * > This API is supported since API version 8 and deprecated since API version 9. You are advised to use
   * > [sensor.once.PEDOMETER_DETECTION]{@link sensor.once(type: SensorId.PEDOMETER_DETECTION, callback: Callback<PedometerDetectionResponse>)}
   * > instead.
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
   * Subscribes to only one data change of the proximity sensor. This method applies to scenarios where only the
   * current proximity sensor data needs to be obtained once.
   *
   * > **NOTE**
   * >
   * > This API is supported since API version 8 and deprecated since API version 9. You are advised to use
   * > [sensor.once.PROXIMITY]{@link sensor.once(type: SensorId.PROXIMITY, callback: Callback<ProximityResponse>)}
   * > instead.
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
   * Subscribes to only one data change of the rotation vector sensor. This method applies to scenarios where only the
   * current rotation vector data needs to be obtained at a time.
   *
   * > **NOTE**
   * >
   * > This API is supported since API version 8 and deprecated since API version 9. You are advised to use
   * > [sensor.once.ROTATION_VECTOR]{@link sensor.once(type: SensorId.ROTATION_VECTOR, callback: Callback<RotationVectorResponse>)}
   * > instead.
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
   * Subscribes to only one data change of the significant motion sensor. This method applies to scenarios where only
   * the current significant motion data needs to be obtained once.
   *
   * > **NOTE**
   * >
   * > This API is supported since API version 8 and deprecated since API version 9. You are advised to use
   * > [sensor.once.SIGNIFICANT_MOTION]{@link sensor.once(type: SensorId.SIGNIFICANT_MOTION, callback: Callback<SignificantMotionResponse>)}
   * > instead.
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
   * Subscribes to only one data change of the wear detection sensor. This method applies to scenarios where only the
   * current wear detection data needs to be obtained once.
   *
   * > **NOTE**
   * >
   * > This API is supported since API version 8 and deprecated since API version 9. You are advised to use
   * > [sensor.once.WEAR_DETECTION]{@link sensor.once(type: SensorId.WEAR_DETECTION, callback: Callback<WearDetectionResponse>)}
   * > instead.
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
   * Unsubscribes from data of the acceleration sensor. The **off** API for canceling subscription and the **on** API
   * for subscription must be used in pairs.
   *
   * > **NOTE**
   * >
   * > This API is supported since API version 8 and deprecated since API version 9. You are advised to use
   * > [sensor.off.ACCELEROMETER]{@link sensor.off(type: SensorId.ACCELEROMETER, callback?: Callback<AccelerometerResponse>)}
   * > instead.
   *
   * @permission ohos.permission.ACCELEROMETER
   * @param { SensorType.SENSOR_TYPE_ID_ACCELEROMETER } type - Type of the sensor to unsubscribe from, which is
   *     **SENSOR_TYPE_ID_ACCELEROMETER**.
   * @param { Callback<AccelerometerResponse> } callback - Callback to be unregistered. If this parameter is not
   *     specified, all callbacks of the specified sensor type are unregistered.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.off(type: SensorId.ACCELEROMETER, callback?: Callback<AccelerometerResponse>)
   */
  function off(type: SensorType.SENSOR_TYPE_ID_ACCELEROMETER, callback?: Callback<AccelerometerResponse>): void;

  /**
   * Unsubscribes from data of the uncalibrated acceleration sensor. The **off** API for canceling subscription and
   * the **on** API for subscription must be used in pairs.
   *
   * > **NOTE**
   * >
   * > This API is supported since API version 8 and deprecated since API version 9. You are advised to use
   * > [sensor.off.ACCELEROMETER_UNCALIBRATED]{@link sensor.off(type: SensorId.ACCELEROMETER_UNCALIBRATED, callback?: Callback<AccelerometerUncalibratedResponse>)}
   * > instead.
   *
   * @permission ohos.permission.ACCELEROMETER
   * @param { SensorType.SENSOR_TYPE_ID_ACCELEROMETER_UNCALIBRATED } type - Type of the sensor to unsubscribe from,
   *     which is **SENSOR_TYPE_ID_ACCELEROMETER_UNCALIBRATED**.
   * @param { Callback<AccelerometerUncalibratedResponse> } callback - Callback to be unregistered. If this parameter is not
   *     specified, all callbacks of the specified sensor type are unregistered.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.off(type: SensorId.ACCELEROMETER_UNCALIBRATED, callback?: Callback<AccelerometerUncalibratedResponse>)
   */
  function off(type: SensorType.SENSOR_TYPE_ID_ACCELEROMETER_UNCALIBRATED,
    callback?: Callback<AccelerometerUncalibratedResponse>): void;

  /**
   * Unsubscribes from data of the ambient light sensor. The **off** API for canceling subscription and the **on** API
   * for subscription must be used in pairs.
   *
   * > **NOTE**
   * >
   * > This API is supported since API version 8 and deprecated since API version 9. You are advised to use
   * > [sensor.off.AMBIENT_LIGHT]{@link sensor.off(type: SensorId.AMBIENT_LIGHT, callback?: Callback<LightResponse>)}
   * > instead.
   *
   * @param { SensorType.SENSOR_TYPE_ID_AMBIENT_LIGHT } type - Type of the sensor to unsubscribe from, which is
   *     **SENSOR_TYPE_ID_AMBIENT_LIGHT**.
   * @param { Callback<LightResponse> } callback - Callback to be unregistered. If this parameter is not
   *     specified, all callbacks of the specified sensor type are unregistered.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.off(type: SensorId.AMBIENT_LIGHT, callback?: Callback<LightResponse>)
   */
  function off(type: SensorType.SENSOR_TYPE_ID_AMBIENT_LIGHT, callback?: Callback<LightResponse>): void;

  /**
   * Unsubscribes from data of the ambient temperature sensor. The **off** API for canceling subscription and
   * the **on** API for subscription must be used in pairs.
   *
   * > **NOTE**
   * >
   * > This API is supported since API version 8 and deprecated since API version 9. You are advised to use
   * > [sensor.off.AMBIENT_TEMPERATURE]{@link sensor.off(type: SensorId.AMBIENT_TEMPERATURE, callback?: Callback<AmbientTemperatureResponse>)}
   * > instead.
   *
   * @param { SensorType.SENSOR_TYPE_ID_AMBIENT_TEMPERATURE } type - Type of the sensor to unsubscribe from, which is
   *     **SENSOR_TYPE_ID_AMBIENT_TEMPERATURE**.
   * @param { Callback<AmbientTemperatureResponse> } callback - Callback to be unregistered. If this parameter is not
   *     specified, all callbacks of the specified sensor type are unregistered.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.off(type: SensorId.AMBIENT_TEMPERATURE, callback?: Callback<AmbientTemperatureResponse>)
   */
  function off(type: SensorType.SENSOR_TYPE_ID_AMBIENT_TEMPERATURE, callback?: Callback<AmbientTemperatureResponse>): void;

  /**
   * Unsubscribes from data of the barometer sensor. The **off** API for canceling subscription and the **on** API for
   * subscription must be used in pairs.
   *
   * > **NOTE**
   * >
   * > This API is supported since API version 8 and deprecated since API version 9. You are advised to use
   * > [sensor.off.BAROMETER]{@link sensor.off(type: SensorId.BAROMETER, callback?: Callback<BarometerResponse>)}
   * > instead.
   *
   * @param { SensorType.SENSOR_TYPE_ID_BAROMETER } type - Type of the sensor to unsubscribe from, which is
   *     **SENSOR_TYPE_ID_BAROMETER**.
   * @param { Callback<BarometerResponse> } callback - Callback to be unregistered. If this parameter is not
   *     specified, all callbacks of the specified sensor type are unregistered.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.off(type: SensorId.BAROMETER, callback?: Callback<BarometerResponse>)
   */
  function off(type: SensorType.SENSOR_TYPE_ID_BAROMETER, callback?: Callback<BarometerResponse>): void;

  /**
   * Unsubscribes from data of the gravity sensor. The **off** API for canceling subscription and the **on** API for
   * subscription must be used in pairs.
   *
   * > **NOTE**
   * >
   * > This API is supported since API version 8 and deprecated since API version 9. You are advised to use
   * > [sensor.off.GRAVITY]{@link sensor.off(type: SensorId.GRAVITY, callback?: Callback<GravityResponse>)}
   * > instead.
   *
   * @param { SensorType.SENSOR_TYPE_ID_GRAVITY } type - Type of the sensor to unsubscribe from, which is
   *     **SENSOR_TYPE_ID_GRAVITY**.
   * @param { Callback<GravityResponse> } callback - Callback to be unregistered. If this parameter is not
   *     specified, all callbacks of the specified sensor type are unregistered.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.off(type: SensorId.GRAVITY, callback?: Callback<GravityResponse>)
   */
  function off(type: SensorType.SENSOR_TYPE_ID_GRAVITY, callback?: Callback<GravityResponse>): void;

  /**
   * Unsubscribes from data of the gyroscope sensor. The **off** API for canceling subscription and the **on** API for
   * subscription must be used in pairs.
   *
   * > **NOTE**
   * >
   * > This API is supported since API version 8 and deprecated since API version 9. You are advised to use
   * > [sensor.off.GYROSCOPE]{@link sensor.off(type: SensorId.GYROSCOPE, callback?: Callback<GyroscopeResponse>)}
   * > instead.
   *
   * @permission ohos.permission.GYROSCOPE
   * @param { SensorType.SENSOR_TYPE_ID_GYROSCOPE } type - Type of the sensor to unsubscribe from, which is
   *     **SENSOR_TYPE_ID_GYROSCOPE**.
   * @param { Callback<GyroscopeResponse> } callback - Callback to be unregistered. If this parameter is not
   *     specified, all callbacks of the specified sensor type are unregistered.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.off(type: SensorId.GYROSCOPE, callback?: Callback<GyroscopeResponse>)
   */
  function off(type: SensorType.SENSOR_TYPE_ID_GYROSCOPE, callback?: Callback<GyroscopeResponse>): void;

  /**
   * Unsubscribes from data of the uncalibrated gyroscope sensor. The **off** API for canceling subscription and
   * the **on** API for subscription must be used in pairs.
   *
   * > **NOTE**
   * >
   * > This API is supported since API version 8 and deprecated since API version 9. You are advised to use
   * > [sensor.off.GYROSCOPE_UNCALIBRATED]{@link sensor.off(type: SensorId.GYROSCOPE_UNCALIBRATED, callback?: Callback<GyroscopeUncalibratedResponse>)}
   * > instead.
   *
   * @permission ohos.permission.GYROSCOPE
   * @param { SensorType.SENSOR_TYPE_ID_GYROSCOPE_UNCALIBRATED } type - Type of the sensor to unsubscribe from, which is
   *     **SENSOR_TYPE_ID_GYROSCOPE_UNCALIBRATED**.
   * @param { Callback<GyroscopeUncalibratedResponse> } callback - Callback to be unregistered. If this parameter is not
   *     specified, all callbacks of the specified sensor type are unregistered.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.off(type: SensorId.GYROSCOPE_UNCALIBRATED, callback?: Callback<GyroscopeUncalibratedResponse>)
   */
  function off(type: SensorType.SENSOR_TYPE_ID_GYROSCOPE_UNCALIBRATED, callback?: Callback<GyroscopeUncalibratedResponse>): void;

  /**
   * Unsubscribes from data of the Hall effect sensor. The **off** API for canceling subscription and the **on** API
   * for subscription must be used in pairs.
   *
   * > **NOTE**
   * >
   * > This API is supported since API version 8 and deprecated since API version 9. You are advised to use
   * > [sensor.off.HALL]{@link sensor.off(type: SensorId.HALL, callback?: Callback<HallResponse>)}
   * > instead.
   *
   * @param { SensorType.SENSOR_TYPE_ID_HALL } type - Type of the sensor to unsubscribe from, which is
   *     **SENSOR_TYPE_ID_HALL**.
   * @param { Callback<HallResponse> } callback - Callback to be unregistered. If this parameter is not
   *     specified, all callbacks of the specified sensor type are unregistered.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.off(type: SensorId.HALL, callback?: Callback<HallResponse>)
   */
  function off(type: SensorType.SENSOR_TYPE_ID_HALL, callback?: Callback<HallResponse>): void;

  /**
   * Unsubscribes from data of the heart rate sensor. The **off** API for canceling subscription and the **on** API for
   * subscription must be used in pairs.
   *
   * > **NOTE**
   * >
   * > This API is supported since API version 8 and deprecated since API version 9. You are advised to use
   * > [sensor.off.HEART_RATE]{@link sensor.off(type: SensorId.HEART_RATE, callback?: Callback<HeartRateResponse>)}
   * > instead.
   *
   * @permission ohos.permission.HEALTH_DATA
   * @param { SensorType.SENSOR_TYPE_ID_HEART_RATE } type - Type of the sensor to unsubscribe from, which is
   *     **SENSOR_TYPE_ID_HEART_RATE**.
   * @param { Callback<HeartRateResponse> } callback - Callback to be unregistered. If this parameter is not
   *     specified, all callbacks of the specified sensor type are unregistered.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.off(type: SensorId.HEART_RATE, callback?: Callback<HeartRateResponse>)
   */
  function off(type: SensorType.SENSOR_TYPE_ID_HEART_RATE, callback?: Callback<HeartRateResponse>): void;

  /**
   * Unsubscribes from data of the humidity sensor. The **off** API for canceling subscription and the **on** API for
   * subscription must be used in pairs.
   *
   * > **NOTE**
   * >
   * > This API is supported since API version 8 and deprecated since API version 9. You are advised to use
   * > [sensor.off.HUMIDITY]{@link sensor.off(type: SensorId.HUMIDITY, callback?: Callback<HumidityResponse>)}
   * > instead.
   *
   * @param { SensorType.SENSOR_TYPE_ID_HUMIDITY } type - Type of the sensor to unsubscribe from, which is
   *     **SENSOR_TYPE_ID_HUMIDITY**.
   * @param { Callback<HumidityResponse> } callback - Callback to be unregistered. If this parameter is not
   *     specified, all callbacks of the specified sensor type are unregistered.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.off(type: SensorId.HUMIDITY, callback?: Callback<HumidityResponse>)
   */
  function off(type: SensorType.SENSOR_TYPE_ID_HUMIDITY, callback?: Callback<HumidityResponse>): void;

  /**
   * Unsubscribes from data of the linear acceleration sensor. The **off** API for canceling subscription and
   * the **on** API for subscription must be used in pairs.
   *
   * > **NOTE**
   * >
   * > This API is supported since API version 8 and deprecated since API version 9. You are advised to use
   * > [sensor.off.LINEAR_ACCELEROMETER]{@link sensor.off(type: SensorId.LINEAR_ACCELEROMETER, callback?: Callback<LinearAccelerometerResponse>)}
   * > instead.
   *
   * @permission ohos.permission.ACCELEROMETER
   * @param { SensorType.SENSOR_TYPE_ID_LINEAR_ACCELERATION } type - Type of the sensor to unsubscribe from, which is
   *     **SENSOR_TYPE_ID_LINEAR_ACCELERATION**.
   * @param { Callback<LinearAccelerometerResponse> } callback - Callback to be unregistered. If this parameter is not
   *     specified, all callbacks of the specified sensor type are unregistered.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.off(type: SensorId.LINEAR_ACCELEROMETER, callback?: Callback<LinearAccelerometerResponse>)
   */
  function off(type: SensorType.SENSOR_TYPE_ID_LINEAR_ACCELERATION, callback?: Callback<LinearAccelerometerResponse>): void;

  /**
   * Unsubscribes from data of the magnetic field sensor. The **off** API for canceling subscription and the **on** API
   * for subscription must be used in pairs.
   *
   * > **NOTE**
   * >
   * > This API is supported since API version 8 and deprecated since API version 9. You are advised to use
   * > [sensor.off.MAGNETIC_FIELD]{@link sensor.off(type: SensorId.MAGNETIC_FIELD, callback?: Callback<MagneticFieldResponse>)}
   * > instead.
   *
   * @param { SensorType.SENSOR_TYPE_ID_MAGNETIC_FIELD } type - Type of the sensor to unsubscribe from, which is
   *     **SENSOR_TYPE_ID_MAGNETIC_FIELD**.
   * @param { Callback<MagneticFieldResponse> } callback - Callback to be unregistered. If this parameter is not
   *     specified, all callbacks of the specified sensor type are unregistered.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.off(type: SensorId.MAGNETIC_FIELD, callback?: Callback<MagneticFieldResponse>)
   */
  function off(type: SensorType.SENSOR_TYPE_ID_MAGNETIC_FIELD, callback?: Callback<MagneticFieldResponse>): void;

  /**
   * Unsubscribes from data of the uncalibrated magnetic field sensor. The **off** API for canceling subscription and
   * the **on** API for subscription must be used in pairs.
   *
   * > **NOTE**
   * >
   * > This API is supported since API version 8 and deprecated since API version 9. You are advised to use
   * > [sensor.off.MAGNETIC_FIELD_UNCALIBRATED]{@link sensor.off(type: SensorId.MAGNETIC_FIELD_UNCALIBRATED, callback?: Callback<MagneticFieldUncalibratedResponse>)}
   * > instead.
   *
   * @param { SensorType.SENSOR_TYPE_ID_MAGNETIC_FIELD_UNCALIBRATED } type - Type of the sensor to unsubscribe from,
   *     which is **SENSOR_TYPE_ID_MAGNETIC_FIELD_UNCALIBRATED**.
   * @param { Callback<MagneticFieldUncalibratedResponse> } callback - Callback to be unregistered. If this parameter is not
   *     specified, all callbacks of the specified sensor type are unregistered.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.off(type: SensorId.MAGNETIC_FIELD_UNCALIBRATED, callback?: Callback<MagneticFieldUncalibratedResponse>)
   */
  function off(type: SensorType.SENSOR_TYPE_ID_MAGNETIC_FIELD_UNCALIBRATED, callback?: Callback<MagneticFieldUncalibratedResponse>): void;

  /**
   * Unsubscribes from data of the orientation sensor. The **off** API for canceling subscription and the **on** API
   * for subscription must be used in pairs.
   *
   * > **NOTE**
   * >
   * > This API is supported since API version 8 and deprecated since API version 9. You are advised to use
   * > [sensor.off.ORIENTATION]{@link sensor.off(type: SensorId.ORIENTATION, callback?: Callback<OrientationResponse>)}
   * > instead.
   *
   * @param { SensorType.SENSOR_TYPE_ID_ORIENTATION } type - Type of the sensor to unsubscribe from, which is
   *     **SENSOR_TYPE_ID_ORIENTATION**.
   * @param { Callback<OrientationResponse> } callback - Callback to be unregistered. If this parameter is not
   *     specified, all callbacks of the specified sensor type are unregistered.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.off(type: SensorId.ORIENTATION, callback?: Callback<OrientationResponse>)
   */
  function off(type: SensorType.SENSOR_TYPE_ID_ORIENTATION, callback?: Callback<OrientationResponse>): void;

  /**
   * Unsubscribes from data of the pedometer sensor. The **off** API for canceling subscription and the **on** API for
   * subscription must be used in pairs.
   *
   * > **NOTE**
   * >
   * > This API is supported since API version 8 and deprecated since API version 9. You are advised to use
   * > [sensor.off.PEDOMETER]{@link sensor.off(type: SensorId.PEDOMETER, callback?: Callback<PedometerResponse>)}
   * > instead.
   *
   * @permission ohos.permission.ACTIVITY_MOTION
   * @param { SensorType.SENSOR_TYPE_ID_PEDOMETER } type - Type of the sensor to unsubscribe from, which is
   *     **SENSOR_TYPE_ID_PEDOMETER**.
   * @param { Callback<PedometerResponse> } callback - Callback to be unregistered. If this parameter is not
   *     specified, all callbacks of the specified sensor type are unregistered.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.off(type: SensorId.PEDOMETER, callback?: Callback<PedometerResponse>)
   */
  function off(type: SensorType.SENSOR_TYPE_ID_PEDOMETER, callback?: Callback<PedometerResponse>): void;

  /**
   * Unsubscribes from data of the pedometer detection sensor. The **off** API for canceling subscription and
   * the **on** API for subscription must be used in pairs.
   *
   * > **NOTE**
   * >
   * > This API is supported since API version 8 and deprecated since API version 9. You are advised to use
   * > [sensor.off.PEDOMETER_DETECTION]{@link sensor.off(type: SensorId.PEDOMETER_DETECTION, callback?: Callback<PedometerDetectionResponse>)}
   * > instead.
   *
   * @permission ohos.permission.ACTIVITY_MOTION
   * @param { SensorType.SENSOR_TYPE_ID_PEDOMETER_DETECTION } type - Type of the sensor to unsubscribe from, which is
   *     **SENSOR_TYPE_ID_PEDOMETER_DETECTION**.
   * @param { Callback<PedometerDetectionResponse> } callback - Callback to be unregistered. If this parameter is not
   *     specified, all callbacks of the specified sensor type are unregistered.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.off(type: SensorId.PEDOMETER_DETECTION, callback?: Callback<PedometerDetectionResponse>)
   */
  function off(type: SensorType.SENSOR_TYPE_ID_PEDOMETER_DETECTION, callback?: Callback<PedometerDetectionResponse>): void;

  /**
   * Unsubscribes from data of the proximity sensor. The **off** API for canceling subscription and the **on** API for
   * subscription must be used in pairs.
   *
   * > **NOTE**
   * >
   * > This API is supported since API version 8 and deprecated since API version 9. You are advised to use
   * > [sensor.off.PROXIMITY]{@link sensor.off(type: SensorId.PROXIMITY, callback?: Callback<ProximityResponse>)}
   * > instead.
   *
   * @param { SensorType.SENSOR_TYPE_ID_PROXIMITY } type - Type of the sensor to unsubscribe from, which is
   *     **SENSOR_TYPE_ID_PROXIMITY**.
   * @param { Callback<ProximityResponse> } callback - Callback to be unregistered. If this parameter is not
   *     specified, all callbacks of the specified sensor type are unregistered.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.off(type: SensorId.PROXIMITY, callback?: Callback<ProximityResponse>)
   */
  function off(type: SensorType.SENSOR_TYPE_ID_PROXIMITY, callback?: Callback<ProximityResponse>): void;

  /**
   * Unsubscribes from data of the rotation vector sensor. The **off** API for canceling subscription and
   * the **on** API for subscription must be used in pairs.
   *
   * > **NOTE**
   * >
   * > This API is supported since API version 8 and deprecated since API version 9. You are advised to use
   * > [sensor.off.ROTATION_VECTOR]{@link sensor.off(type: SensorId.ROTATION_VECTOR, callback?: Callback<RotationVectorResponse>)}
   * > instead.
   *
   * @param { SensorType.SENSOR_TYPE_ID_ROTATION_VECTOR } type - Type of the sensor to unsubscribe from, which is
   *     **SENSOR_TYPE_ID_ROTATION_VECTOR**.
   * @param { Callback<RotationVectorResponse> } callback - Callback to be unregistered. If this parameter is not
   *     specified, all callbacks of the specified sensor type are unregistered.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.off(type: SensorId.ROTATION_VECTOR, callback?: Callback<RotationVectorResponse>)
   */
  function off(type: SensorType.SENSOR_TYPE_ID_ROTATION_VECTOR, callback?: Callback<RotationVectorResponse>): void;

  /**
   * Unsubscribes from significant motion sensor data. The **off** API for canceling subscription and the **on** API
   * for subscription must be used in pairs.
   *
   * > **NOTE**
   * >
   * > This API is supported since API version 8 and deprecated since API version 9. You are advised to use
   * > [sensor.off.SIGNIFICANT_MOTION]{@link sensor.off(type: SensorId.SIGNIFICANT_MOTION, callback?: Callback<SignificantMotionResponse>)}
   * > instead.
   *
   * @param { SensorType.SENSOR_TYPE_ID_SIGNIFICANT_MOTION } type - Type of the sensor to unsubscribe from, which is
   *     **SENSOR_TYPE_ID_SIGNIFICANT_MOTION**.
   * @param { Callback<SignificantMotionResponse> } callback - Callback to be unregistered. If this parameter is not
   *     specified, all callbacks of the specified sensor type are unregistered.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.off(type: SensorId.SIGNIFICANT_MOTION, callback?: Callback<SignificantMotionResponse>)
   */
  function off(type: SensorType.SENSOR_TYPE_ID_SIGNIFICANT_MOTION, callback?: Callback<SignificantMotionResponse>): void;

  /**
   * Unsubscribes from data of the wear detection sensor. The **off** API for canceling subscription and the **on** API
   * for subscription must be used in pairs.
   *
   * > **NOTE**
   * >
   * > This API is supported since API version 8 and deprecated since API version 9. You are advised to use
   * > [sensor.off.WEAR_DETECTION]{@link sensor.off(type: SensorId.WEAR_DETECTION, callback?: Callback<WearDetectionResponse>)}
   * > instead.
   *
   * @param { SensorType.SENSOR_TYPE_ID_WEAR_DETECTION } type - Type of the sensor to unsubscribe from, which is
   *     **SENSOR_TYPE_ID_WEAR_DETECTION**.
   * @param { Callback<WearDetectionResponse> } callback - Callback to be unregistered. If this parameter is not
   *     specified, all callbacks of the specified sensor type are unregistered.
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
     * Sensor name, which identifies the type and model of the sensor.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 9 dynamic
     * @since 23 static
     */
    sensorName:string;

    /**
     * Sensor vendor name, which identifies the sensor manufacturer.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 9 dynamic
     * @since 23 static
     */
    vendorName:string;

    /**
     * Sensor firmware version, which identifies the current version of the sensor firmware.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 9 dynamic
     * @since 23 static
     */
    firmwareVersion:string;

    /**
     * Sensor hardware version.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 9 dynamic
     * @since 23 static
     */
    hardwareVersion:string;

    /**
     * Sensor type ID, corresponding to the enumerated values of [SensorId]{@link sensor.SensorId}.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 9 dynamic
     * @since 23 static
     */
    sensorId:int;

    /**
     * Maximum measurement range of the sensor. The unit depends on the sensor type (for example, m/s² for an 
     * acceleration sensor).
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 9 dynamic
     * @since 23 static
     */
    maxRange:double;

    /**
     * Minimum sampling period of the sensor, in ns
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 9 dynamic
     * @since 23 static
     */
    minSamplePeriod:long;

    /**
     * Maximum sampling period of the sensor, in ns
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 9 dynamic
     * @since 23 static
     */
    maxSamplePeriod:long;

    /**
     * Precision of the sensor. The unit depends on the sensor type.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 9 dynamic
     * @since 23 static
     */
    precision:double;

    /**
     * Estimated power consumption of the sensor, in mA.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 9 dynamic
     * @since 23 static
     */
    power:double;

    /**
     * Sensor index. Multiple instances of sensors of the same type may exist, which are distinguished by 
     * **sensorIndex**. The default value is **0**.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 19 dynamic
     * @since 23 static
     */
    sensorIndex?: int;

    /**
     * Device ID. The value is **-1** indicates the local device. Default value: **-1**.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 19 dynamic
     * @since 23 static
     */
    deviceId?: int;

    /**
     * Device name, which identifies the source device of the sensor.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 19 dynamic
     * @since 23 static
     */
    deviceName?: string;

    /**
     * Whether the sensor is a local sensor. The **true** indicates a local sensor, and **false** indicates a non-local 
     * sensor (that is, a sensor on a remote device). The default value is **true**.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 19 dynamic
     * @since 23 static
     */
    isLocalSensor?: boolean;

    /**
     * Indicates whether the sensor is a mock sensor. The value **true** indicates a mock sensor, and **false** 
     * indicates a real sensor. The default value is **false**.
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
   * Obtains information about the sensor of a specific type. If peripherals exist and no device ID is specified, the 
   * obtained sensors will be all local and peripheral sensors that match the specified sensor type. If no peripherals 
   * exist, only local sensors are obtained.
   *
   * @param { SensorId } type - Sensor type.
   * @param { int } [deviceId] - Device ID. The default value is **-1**, indicating the local device. You can use 
   *     [getSensorList]{@link sensor.getSensorList(callback: AsyncCallback<Array<Sensor>>)} or 
   *     [sensorStatusChange]{@link sensor.on_sensorStatusChange} to obtain the device ID.
   * @returns { Array<Sensor> } Sensor attribute list.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 19 dynamic
   * @since 23 static
   */
  function getSingleSensorByDeviceSync(type: SensorId, deviceId?: int): Array<Sensor>;

  /**
   * Obtains information about all sensors on the device. This API uses an asynchronous callback to return the result. 
   * To obtain the sensor list synchronously, use **getSensorListSync**.
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
   * @returns { Promise<Array<Sensor>> } Promise used to return the sensor list. Each **Sensor** object contains the sensor 
   *     type ID, name, version, manufacturer, maximum range, resolution, power, and other attributes.
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
   * Obtains the information about all sensors on the device. **getSensorListByDeviceSync** returns information about 
   * all sensors on the device, and **getSingleSensorByDeviceSync** returns information about a specified sensor.
   *
   * @param { int } [deviceId] - Device ID. The default value is **-1**, indicating the local device. You can use 
   *     [getSensorList]{@link sensor.getSensorList(callback: AsyncCallback<Array<Sensor>>)} or 
   *     [sensorStatusChange]{@link sensor.on_sensorStatusChange} to obtain the device ID.
   * @returns { Array<Sensor> } Sensor attribute list.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 19 dynamic
   * @since 23 static
   */
  function getSensorListByDeviceSync(deviceId?: int): Array<Sensor>;

  /**
   * Sets the geomagnetic response object, which describes the geomagnetic field information of a specified geographical
   *  location.
   *
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamic
   * @since 23 static
   */
  interface GeomagneticResponse {
    /**
     * X component (north component) of the geomagnetic field, in nT.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    x: double;

    /**
     * Y component (east component) of the geomagnetic field, in nT.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    y: double;

    /**
     * Z component (vertical component) of the geomagnetic field, in nT.
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
     * horizontal component of the field). in degrees.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    deflectionAngle: double;

    /**
     * Horizontal magnetic field strength, which is the total strength of the geomagnetic field on the horizontal plane.
     *  in nT.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    levelIntensity: double;

    /**
     * Total intensity of the geomagnetic field vector in three-dimensional space. in nT.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    totalIntensity: double;
  }

  /**
   * Indicates the geographical location, which is used to pass the longitude, latitude, and altitude information for 
   * calculating the geomagnetic field.
   *
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamic
   * @since 23 static
   */
  interface LocationOptions {
    /**
     * Latitude. Value range: [-90, 90]. Unit: degree
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    latitude: double;

    /**
     * Longitude. Value range: [-180, 180]. Unit: degree
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    longitude: double;

    /**
     * Altitude. Unit: m
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
   * > **NOTE**
   * >
   * > This API is supported since API version 8 and deprecated since API version 9. You are advised to use 
   * > [sensor.getGeomagneticInfo]{@link sensor.getGeomagneticInfo(locationOptions: LocationOptions, timeMillis: long, callback: AsyncCallback<GeomagneticResponse>)}
   * >  instead.
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
   * > **NOTE**
   * >
   * > This API is supported since API version 8 and deprecated since API version 9. You are advised to use 
   * > [sensor.getGeomagneticInfo]{@link sensor.getGeomagneticInfo(locationOptions: LocationOptions, timeMillis: long)} 
   * > instead.
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
   *  return the result.
   *
   * @param { LocationOptions } locationOptions - Geographic location, including the longitude, latitude, and altitude.
   * @param { long } timeMillis - Time when the magnetic declination is obtained. The value is a Unix timestamp, in ms.
   *     This parameter indicates the number of milliseconds since 1970-01-01 00:00:00-00 UTC.  The value must be a
   *     positive integer.
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
   *     This parameter indicates the number of milliseconds since 1970-01-01 00:00:00-00 UTC.  The value must be a
   *     positive integer.
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
   * > **NOTE**
   * >
   * > This API is supported since API version 8 and deprecated since API version 9. You are advised to use 
   * > [sensor.getDeviceAltitude]{@link sensor.getDeviceAltitude(seaPressure: double, currentPressure: double, callback: AsyncCallback<double>)}
   * >  instead.
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
   * > **NOTE**
   * >
   * > This API is supported since API version 8 and deprecated since API version 9. You are advised to use 
   * > [sensor.getDeviceAltitude]{@link sensor.getDeviceAltitude(seaPressure: double, currentPressure: double)} instead.
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
   * > **NOTE**
   * >
   * > This API is supported since API version 8 and deprecated since API version 9. You are advised to use 
   * > [sensor.getInclination]{@link sensor.getInclination(inclinationMatrix: Array<double>, callback: AsyncCallback<double>)}
   * >  instead.
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
   * > **NOTE**
   * >
   * > This API is supported since API version 8 and deprecated since API version 9. You are advised to use 
   * > [sensor.getInclination]{@link sensor.getInclination(inclinationMatrix: Array<double>)} instead.
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
   * @param { AsyncCallback<Array<double>> } callback - Asynchronous callback used to return the rotation angles around
   *     the z, x, and y axes, in degrees (°).
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
   * @returns { Promise<Array<double>> } Promise used to return the rotation angles around the z, x, and y axes,
   *     in degrees (°).
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
   * > **NOTE**
   * >
   * > This API is supported since API version 8 and deprecated since API version 9. You are advised to use 
   * > [sensor.getRotationMatrix]{@link sensor.getRotationMatrix(rotationVector: Array<double>, callback: AsyncCallback<Array<double>>)}
   * >  instead.
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
   * > **NOTE**
   * >
   * > This API is supported since API version 8 and deprecated since API version 9. You are advised to use 
   * > [sensor.getRotationMatrix]{@link sensor.getRotationMatrix(rotationVector: Array<double>)} instead.
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
   * Coordinate option object, which is used to specify the transformation direction of the coordinate system.
   *
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamic
   * @since 23 static
   */
  interface CoordinatesOptions {
    /**
     * X coordinate direction, which is used to specify the direction of the rotation matrix transformation on the X 
     * axis.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    x: int;

    /**
     * Y coordinate direction, which is used to specify the direction of the rotation matrix transformation on the Y 
     * axis.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    y: int;
  }

  /**
   * Rotates a rotation vector so that it can represent the coordinate system in different ways. This API uses an 
   * asynchronous callback to return the result. This API uses an asynchronous callback to return the result.
   *
   * > **NOTE**
   * >
   * > This API is supported since API version 8 and deprecated since API version 9. You are advised to use 
   * > [sensor.transformRotationMatrix]{@link sensor.transformRotationMatrix(inRotationVector: Array<double>, coordinates: CoordinatesOptions, callback: AsyncCallback<Array<double>>)}
   * >  instead.
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
   *  to return the result.
   *
   * > **NOTE**
   * >
   * > This API is supported since API version 8 and deprecated since API version 9. You are advised to use 
   * > [sensor.transformRotationMatrix]{@link sensor.transformRotationMatrix(inRotationVector: Array<double>, coordinates: CoordinatesOptions)}
   * >  instead.
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
   * @param { AsyncCallback<Array<double>> } callback - Callback used to return the rotation vector after being transformed.
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
   * > **NOTE**
   * >
   * > This API is supported since API version 8 and deprecated since API version 9. You are advised to use 
   * > [sensor.getQuaternion]{@link sensor.getQuaternion(rotationVector: Array<double>, callback: AsyncCallback<Array<double>>)}
   * >  instead.
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
   * > **NOTE**
   * >
   * > This API is supported since API version 8 and deprecated since API version 9. You are advised to use 
   * > [sensor.getQuaternion]{@link sensor.getQuaternion(rotationVector: Array<double>)} instead.
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
   * @returns { Promise<Array<double>> } Promise used to return the quaternion..
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
   * > **NOTE**
   * >
   * > This API is supported since API version 8 and deprecated since API version 9. You are advised to use 
   * > [sensor.getOrientation]{@link sensor.getOrientation(rotationMatrix: Array<double>, callback: AsyncCallback<Array<double>>)}
   * >  instead.
   *
   * @param { Array<number> } rotationMatrix - The other rotation matrix.
   * @param { AsyncCallback<Array<number>> } callback - Asynchronous callback used to return the rotation angles around
   *     the z, x, and y axes, in degrees (°).
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.getOrientation(rotationMatrix: Array<double>, callback: AsyncCallback<Array<double>>)
   */
  function getDirection(rotationMatrix: Array<number>, callback: AsyncCallback<Array<number>>): void;

  /**
   * Obtains the device direction based on the rotation matrix. This API uses a promise to return the result.
   *
   * > **NOTE**
   * >
   * > This API is supported since API version 8 and deprecated since API version 9. You are advised to use 
   * > [sensor.getOrientation]{@link sensor.getOrientation(rotationMatrix: Array<double>)} instead.
   *
   * @param { Array<number> } rotationMatrix - The other rotation matrix.
   * @returns { Promise<Array<number>> } Promise used to return the rotation angles around the z, x, and y axes,
   *      in degrees (°).
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
   * @param { AsyncCallback<Array<double>> } callback - Asynchronous callback used to return the rotation angles around
   *     the z, x, and y axes, in degrees (°).
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
   * @returns { Promise<Array<double>> } Promise used to return the rotation angles around the z, x, and y axes,
   *      in degrees (°).
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
   * Response object for setting the rotation matrix, which describes the calculation results of the rotation matrix and
   *  tilt matrix.
   *
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamic
   * @since 23 static
   */
  interface RotationMatrixResponse {
    /**
     * Rotation matrix, which is a one-dimensional array with a length of 9, indicating the rotation status of the 
     * device in three-dimensional space.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    rotation: Array<double>;

    /**
     * Tilt matrix, which is a one-dimensional array with a length of 9 and indicates the geomagnetic tilt 
     * transformation matrix.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    inclination: Array<double>
  }

  /**
   * Obtains the rotation matrix based on a gravity vector and geomagnetic vector. This API uses an asynchronous 
   * callback to return the result.
   *
   * > **NOTE**
   * >
   * > This API is supported since API version 8 and deprecated since API version 9. You are advised to use 
   * > [sensor.getRotationMatrix]{@link sensor.getRotationMatrix(gravity: Array<double>, geomagnetic: Array<double>, callback: AsyncCallback<RotationMatrixResponse>)}
   * >  instead.
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
   *  result.
   *
   * > **NOTE**
   * >
   * > This API is supported since API version 8 and deprecated since API version 9. You are advised to use 
   * > [sensor.getRotationMatrix]{@link sensor.getRotationMatrix(gravity: Array<double>, geomagnetic: Array<double>)} 
   * > instead.
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
   *  result.
   *
   * @param { Array<double> } gravity - Gravity vector.
   * @param { Array<double> } geomagnetic - Geomagnetic vector.
   * @returns { Promise<RotationMatrixResponse> } Promise used to return the rotation matrix.
   *     The **RotationMatrixResponse** object contains the rotation matrix and tilt matrix of the device, which can be
   *     used to calculate the posture and orientation of the device.
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
   * Sets the sensor reporting frequency and sensor selection parameters.
   *
   * **Atomic service API**: This API can be used in atomic services since API version 11.
   *
   * @syscap SystemCapability.Sensors.Sensor
   * @atomicservice [since 11]
   * @since 8 dynamic
   * @since 23 static
   */
  interface Options {
    /**
     * Sets the interval for reporting sensor data. Default value: 200,000,000 ns (200 ms) Unit: ns. For details about 
     * the value range, see the **minSamplePeriod** and **maxSamplePeriod** of each sensor. You can query the value 
     * range by calling [getSingleSensor]{@link sensor.getSingleSensor(type: SensorId, callback: AsyncCallback<Sensor>)}
     * . You are advised to set a proper reporting frequency based on service requirements. A smaller value indicates 
     * more frequent reporting. If the configured frequency is greater than the maximum value, the maximum value is used
     *  for data reporting. If the configured frequency is less than the minimum value, the minimum value is used for 
     * data reporting.
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
     * The sensor transfers the settings parameter, which can specify **deviceId** and **sensorIndex** to select the 
     * target sensor in multi-sensor scenarios.
     * <br>**Atomic service API**: This API can be used in atomic services since API version 19. 
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @atomicservice
     * @since 19 dynamic
     * @since 23 static
     */
    sensorInfoParam?: SensorInfoParam;
  }

  /**
   * Defines the sensor reporting frequency modes. The predefined frequency levels are provided, allowing you to quickly
   *  set the reporting frequency.
   *
   * **Atomic service API**: This API can be used in atomic services since API version 11.
   *
   * @syscap SystemCapability.Sensors.Sensor
   * @unionmember { 'game' } Game mode, which specifies a sensor data reporting frequency of 20,000,000 ns. This mode is 
   *     applicable to game apps that are sensitive to data delay. This parameter takes effect only when the frequency
   *     is within the frequency range supported by the hardware.
   * @unionmember { 'ui' } UI mode, which specifies a sensor data reporting frequency of 60,000,000 ns. This mode is 
   *     applicable to UI interaction apps that have moderate requirements on data update. This parameter takes effect
   *     only when the frequency is within the frequency range supported by the hardware.
   * @unionmember { 'normal' } Normal mode, which specifies a sensor data reporting frequency of 200,000,000 ns. This
   *     mode isapplicable to common apps that do not require high data update frequency. This parameter takes effect
   *     only when the frequency is within the frequency range supported by the hardware.
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  type SensorFrequency = 'game' | 'ui' | 'normal';

  /**
   * Enumerates the sensor types.
   *
   * > **NOTE**
   * >
   * > This API is supported since API version 8 and deprecated since API version 9. You are advised to use 
   * > [sensor.SensorId]{@link sensor.SensorId} instead.
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
   * **Atomic service API**: This API can be used in atomic services since API version 11.
   *
   * @syscap SystemCapability.Sensors.Sensor
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  enum SensorAccuracy {
    /**
     * Unreliable sensor data, which has the lowest accuracy level. The data reliability cannot be ensured.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    ACCURACY_UNRELIABLE = 0,

    /**
     * Low-accuracy sensor data, which is of low accuracy and is applicable only to rough estimation scenarios.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    ACCURACY_LOW = 1,

    /**
     * Medium-accuracy sensor data, which is of medium accuracy and is applicable to common application scenarios.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    ACCURACY_MEDIUM = 2,

    /**
     * High-accuracy sensor data, which is of high accuracy and is applicable to scenarios that require high precision.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    ACCURACY_HIGH = 3
  }

  /**
   * Defines the base class for the timestamp and accuracy information of sensor data. All sensor response types inherit
   *  from this class.
   *
   * **Atomic service API**: This API can be used in atomic services since API version 11.
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
     * Accuracy of the sensor data, indicating the reliability of the reported data.
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
   * **Atomic service API**: This API can be used in atomic services since API version 11.
   *
   * @syscap SystemCapability.Sensors.Sensor
   * @atomicservice [since 11]
   * @since 8 dynamic
   * @since 23 static
   */
  interface AccelerometerResponse extends Response {
    /**
     * Acceleration along the x-axis of the device, in m/s². The value is equal to the reported physical quantity.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @atomicservice [since 11]
     * @since 8 dynamic
     * @since 23 static
     */
    x: double;

    /**
     * Acceleration along the y-axis of the device, in m/s². The value is equal to the reported physical quantity.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @atomicservice [since 11]
     * @since 8 dynamic
     * @since 23 static
     */
    y: double;

    /**
     * Acceleration along the z-axis of the device, in m/s². The value is equal to the reported physical quantity.
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
     * Linear acceleration along the x-axis of the device, excluding the gravity component, in m/s².
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    x: double;

    /**
     * Linear acceleration along the y-axis of the device, excluding the gravity component, in m/s².
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    y: double;

    /**
     * Linear acceleration along the z-axis of the device, excluding the gravity component, in m/s².
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    z: double;
  }

  /**
   * Describes the uncalibrated acceleration sensor data. It is inherited from [Response]{@link sensor.Response}.
   *
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamic
   * @since 23 static
   */
  interface AccelerometerUncalibratedResponse extends Response {
    /**
     * Uncalibrated acceleration along the x-axis of the device, in m/s².
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    x: double;

    /**
     * Uncalibrated acceleration along the y-axis of the device, in m/s².
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    y: double;

    /**
     * Uncalibrated acceleration along the z-axis of the device, in m/s².
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    z: double;

    /**
     * Uncalibrated acceleration bias (estimated acceleration bias) along the x-axis of the device, in m/s².
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    biasX: double;

    /**
     * Uncalibrated acceleration bias (estimated acceleration bias) along the y-axis of the device, in m/s².
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    biasY: double;

    /**
     * Uncalibrated acceleration bias (estimated acceleration bias) along the z-axis of the device, in m/s².
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
     * Gravity acceleration along the x-axis of the device, in m/s².
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    x: double;

    /**
     * Gravity acceleration along the y-axis of the device, in m/s².
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    y: double;

    /**
     * Gravity acceleration along the z-axis of the device, in m/s².
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
   * **Atomic service API**: This API can be used in atomic services since API version 11.
   *
   * @syscap SystemCapability.Sensors.Sensor
   * @atomicservice [since 11]
   * @since 8 dynamic
   * @since 23 static
   */
  interface OrientationResponse extends Response {
    /**
     * Rotation angle of the device around the z-axis, that is, the yaw angle, in degrees. The value range is [0, 360].
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @atomicservice [since 11]
     * @since 8 dynamic
     * @since 23 static
     */
    alpha: double;

    /**
     * Rotation angle of the device around the x-axis, that is, the pitch angle, in degrees. The value range is 
     * [–180, 180].
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @atomicservice [since 11]
     * @since 8 dynamic
     * @since 23 static
     */
    beta: double;

    /**
     * Rotation angle of the device around the y-axis, that is, the roll angle, in degrees. The value range is [–90, 90]
     * .
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
     * X-axis component of the rotation vector, indicating the projection of the device rotation status on the X axis.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    x: double;

    /**
     * Y-axis component of the rotation vector, indicating the projection of the device rotation status on the Y axis.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    y: double;

    /**
     * Z-axis component of the rotation vector, indicating the projection of the device rotation status on the z-axis.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    z: double;

    /**
     * Scalar component of the rotation vector, which describes the rotation status of the device relative to a 
     * reference direction. Unit: radian.
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
   * **Atomic service API**: This API can be used in atomic services since API version 11.
   *
   * @syscap SystemCapability.Sensors.Sensor
   * @atomicservice [since 11]
   * @since 8 dynamic
   * @since 23 static
   */
  interface GyroscopeResponse extends Response {
    /**
     * Rotational angular velocity of the x-axis. in rad/s. The value is equal to the reported physical quantity.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @atomicservice [since 11]
     * @since 8 dynamic
     * @since 23 static
     */
    x: double;

    /**
     * Rotational angular velocity of the y-axis. in rad/s. The value is equal to the reported physical quantity.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @atomicservice [since 11]
     * @since 8 dynamic
     * @since 23 static
     */
    y: double;

    /**
     * Rotational angular velocity of the z-axis. in rad/s. The value is equal to the reported physical quantity.
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
     * Uncalibrated rotational angular velocity of the x-axis, in rad/s.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    x: double;

    /**
     * Uncalibrated rotational angular velocity of the y-axis, in rad/s.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    y: double;

    /**
     * Uncalibrated rotational angular velocity of the z-axis, in rad/s.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    z: double;

    /**
     * Uncalibrated rotational angular velocity bias (estimated angular velocity bias) of the x-axis, in rad/s.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    biasX: double;

    /**
     * Uncalibrated rotational angular velocity bias (estimated angular velocity bias) along the y-axis of the device, 
     * in rad/s.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    biasY: double;

    /**
     * Uncalibrated rotational angular velocity bias (estimated angular velocity bias) along the z-axis of the device, 
     * in rad/s.
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
     * Intensity of a motion. Value range: **1** indicates that a valid motion is detected. The value **1** is reported 
     * when the device has a large motion on three physical axes (x, y, and z).
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
     * Proximity between the visible object and the device monitor. Value range: **0** indicates that the object is 
     * close to the device, and a value greater than 0 indicates that the object is far away from the device.
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
     * Ambient light intensity, in lux.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    intensity: double;

    /**
     * Color temperature, in K (Kelvin). This parameter is optional. If this parameter is not supported, a fixed value (
     * customized by the sensor) is returned. If this parameter is supported, a normal value is returned.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 12 dynamic
     * @since 23 static
     */
    colorTemperature?: double;

    /**
     * Infrared luminance. in cd/m². This parameter is optional. If this parameter is not supported, a fixed value (
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
     * Hall effect status, indicating whether there is a magnetic force around the device. The value **0** indicates 
     * there is no magnetic force, and the Hall effect is off. A value greater than 0 indicates there is magnetic force,
     *  and the Hall effect is on.
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
     * Magnetic field strength along the x-axis, in μT.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    x: double;

    /**
     * Magnetic field strength along the y-axis, in μT.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    y: double;

    /**
     * Magnetic field strength along the z-axis, in μT.
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
     * Uncalibrated magnetic field strength along the x-axis, in μT.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    x: double;

    /**
     * Uncalibrated magnetic field strength along the y-axis, in μT.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    y: double;

    /**
     * Uncalibrated magnetic field strength along the z-axis, in μT.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    z: double;

    /**
     * Uncalibrated magnetic field strength bias along the x-axis (estimated magnetic field deviation), in μT.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    biasX: double;

    /**
     * Uncalibrated magnetic field strength bias along the y-axis (estimated magnetic field deviation), in μT.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    biasY: double;

    /**
     * Uncalibrated magnetic field strength bias along the z-axis (estimated magnetic field deviation), in μT.
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
     * Number of steps a user has walked. Unit: step
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
     * Relative humidity of the environment, in percentage, indicating the relative humidity percentage of the 
     * environment.
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
     * Pedometer detection scalar. The value can be **1** (a step counting event is detected, indicating that the user 
     * is walking) or **0** (no step counting event is detected, indicating that the user is not moving).
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
     * Ambient temperature, in °C.
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
     * Atmospheric pressure, in hPa.
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
     * Heart rate of a user, in bpm.
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
     * Device wear status. The value can be **0** (not worn) or **1** (worn).
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    value: double;
  }

  /**
   * Describes the color sensor data. It extends from [Response]{@link @ohos.sensor:sensor.Response}. This method is 
   * used to represent the response data reported by the color sensor, including the light intensity and color 
   * temperature information.
   *
   * @syscap SystemCapability.Sensors.Sensor
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  interface ColorResponse extends Response {
    /**
     * Light intensity, in lux. Value range: The value is the actually reported physical quantity, which is determined 
     * by the hardware sensor. The typical indoor ambient light intensity ranges from 300 lux to 500 lux, and the 
     * outdoor sunlight intensity can reach over 10,000 lux.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    lightIntensity: double;
    /**
     * Color temperature, in K (Kelvin). Value range: The value is the actually reported physical quantity, which is 
     * determined by the hardware sensor. In general, the color temperature of warm white light is 2700 to 3000 K, of 
     * neutral white light is 4000–5000 K, and of cool white light is above 6500 K.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    colorTemperature: double;
  }

  /**
   * Describes the SAR sensor data. It extends from [Response]{@link @ohos.sensor:sensor.Response}. This method is used 
   * to represent the response data reported by the SAR sensor, including the SAR information.
   *
   * @syscap SystemCapability.Sensors.Sensor
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  interface SarResponse extends Response {
    /**
     * Absorption ratio, in W/kg. Value range: The value is the actually reported physical quantity, which is determined
     *  by the hardware sensor.
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
     * Fused pressure, indicating the percentage of the pressure value applied to the fused pressure sensor, in 
     * percentage.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 22 dynamic
     * @since 23 static
     */
    fusionPressure: double;
  }

  /**
   * Listens for sensor status changes. This API uses an asynchronous callback to return the result. This API is 
   * applicable to scenarios where sensor status changes need to be detected, for example, when a remote sensor is 
   * connected or disconnected, the sensor list or subscription status needs to be automatically updated.
   *
   * @param { 'sensorStatusChange' } type - Event type. The value **sensorStatusChange** indicates the sensor status change 
   *     event.
   * @param { Callback<SensorStatusEvent> } callback - Callback used to return the sensor status change event.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 19 dynamic
   */
  function on(type: 'sensorStatusChange', callback: Callback<SensorStatusEvent>): void;

  /**
   * Disables listening for sensor status changes. Call this API when you no longer need to detect sensor status 
   * changes. The **off** API for canceling subscription and the **on** API for subscription must be used in pairs.
   *
   * @param { 'sensorStatusChange' } type - Event type. The value **sensorStatusChange** indicates the sensor status
   *     change event.
   * @param { Callback<SensorStatusEvent> } [callback] - Callback to be unregistered. If this parameter is not
   *     specified, all callbacks of the specified sensor type are unregistered.
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
   * Defines the sensor status change event, which is used to describe the sensor online and offline events.
   *
   * @syscap SystemCapability.Sensors.Sensor
   * @since 19 dynamic
   * @since 23 static
   */
  interface SensorStatusEvent {
    /**
     * Timestamp when an event occurs. Period from the time when the device is powered on until the event occurs, in ms.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 19 dynamic
     * @since 23 static
     */
    timestamp: long;

    /**
     * Sensor type ID, corresponding to the enumerated values of [SensorId]{@link sensor.SensorId}.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 19 dynamic
     * @since 23 static
     */
    sensorId: int;

    /**
     * Sensor index. Multiple instances of sensors of the same type may exist, which are distinguished by 
     * **sensorIndex**.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 19 dynamic
     * @since 23 static
     */
    sensorIndex: int;

    /**
     * Whether a sensor is online. The value **true** indicates that the sensor is online, and the value **false** 
     * indicates that the sensor is offline.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 19 dynamic
     * @since 23 static
     */
    isSensorOnline: boolean;

    /**
     * Device ID. The value **-1** indicates a local device, and other values indicate remote devices.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 19 dynamic
     * @since 23 static
     */
    deviceId: int;

    /**
     * Device name, which identifies the source device of the sensor.
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
   * **Atomic service API**: This API can be used in atomic services since API version 19.
   *
   * @syscap SystemCapability.Sensors.Sensor
   * @atomicservice
   * @since 19 dynamic
   * @since 23 static
   */
  interface SensorInfoParam {
    /**
     * ID of the device to which the target sensor belongs. The default value is **-1**, which indicates the local 
     * device. You can obtain the ID of a remote device through 
     * [sensor.on('sensorStatusChange')]{@link sensor.on_sensorStatusChange} or 
     * [getSensorList]{@link sensor.getSensorList(callback: AsyncCallback<Array<Sensor>>)}.
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @atomicservice
     * @since 19 dynamic
     * @since 23 static
     */
    deviceId?: int;

    /**
     * Index of the target sensor. A sensor type may have multiple instances. The default value is **0**, which 
     * indicates the default sensor on the device. You can use 
     * [getSensorList]{@link sensor.getSensorList(callback: AsyncCallback<Array<Sensor>>)} or 
     * [sensor.on('sensorStatusChange')]{@link sensor.on_sensorStatusChange} to obtain the sensor index.
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