/*
 * Copyright (c) 2021 Huawei Device Co., Ltd.
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
 * The **@system.sensor** module is a sensor data subscription module for lite wearables. It provides the data 
 * subscription and subscription cancellation capabilities for the acceleration, compass, distance, ambient light, 
 * pedometer, barometric pressure, heart rate, device wearing status, device orientation, and gyroscope sensors.
 * This module helps apps obtain sensor data change notifications in real time to implement functions such as fitness 
 * monitoring, health tracking, environment sensing, direction identification, and screen adaptation. Each sensor 
 * provides subscription and unsubscription APIs. The wearing status sensor additionally provides the **getOnBodyState**
 *  API for a single query.
 * For devices other than lightweight wearables, this module is no longer maintained since API version 8. You are 
 * advised to use the [@ohos.sensor]{@link @ohos.sensor:sensor} module instead.
 * This module uses the subscription-unsubscription mode. You can call **subscribe** to subscribe to data, and the data 
 * will be reported through a callback when it changes. You can call **unsubscribe** to cancel the subscription. 
 * **subscribe** and **unsubscribe** must be used in pairs. If an app subscribes to the same sensor multiple times, only
 *  the last subscription takes effect. For the acceleration, device orientation, and gyroscope sensors, you can 
 * configure the callback frequency using **interval**. The default value is **normal** (200 ms per callback).
 * All APIs require hardware support and can be debugged only on real devices. Some APIs may have device behavior 
 * differences. For details, see the description of each API.
 * 
 * > **NOTE**
 *
 * > - Module maintenance policy:
 * > >     - For lite wearables, this module is constantly maintained and available.
 * > >     - For other device types, this module is no longer maintained since API version 8, and you are advised to use
 * >  the new [@ohos.sensor]{@link @ohos.sensor:sensor} module.
 * > - The initial APIs of this module are supported since API version 3. Newly added APIs will be marked with a
 * > superscript to indicate their earliest API version.
 * > - This module requires hardware support and can only be debugged on real devices.
 * > - To reduce performance overhead, you are advised to unsubscribe from the sensor data in the **onDestroy** 
 * > callback.
 *
 * @file Sensor module
 * @kit SensorServiceKit
 */

/**
 * Callback invoked when the acceleration sensor data changes. The callback returns the acceleration data of the device 
 * on the x, y, and z axes.
 *
 * @permission ohos.permission.ACCELEROMETER
 * @syscap SystemCapability.Sensors.Sensor.Lite
 * @famodelonly
 * @since 3 dynamiconly
 * @deprecated since 8
 * @reserved ["liteWearable"]
 * @useinstead ohos.sensor/sensor#AccelerometerResponse
 */
export interface AccelerometerResponse {
  /**
   * Acceleration along the x-axis of the device, in m/s². Value range: The value is the actually reported physical 
   * quantity, which is determined by the hardware sensor.
   *
   * @permission ohos.permission.ACCELEROMETER
   * @syscap SystemCapability.Sensors.Sensor.Lite
   * @famodelonly
   * @since 3 dynamiconly
   * @deprecated since 8
   * @reserved ["liteWearable"]
   * @useinstead ohos.sensor/sensor#AccelerometerResponse.x
   */
  x: number;

  /**
   * Acceleration along the y-axis of the device, in m/s². Value range: The value is the actually reported physical 
   * quantity, which is determined by the hardware sensor.
   *
   * @permission ohos.permission.ACCELEROMETER
   * @syscap SystemCapability.Sensors.Sensor.Lite
   * @famodelonly
   * @since 3 dynamiconly
   * @deprecated since 8
   * @reserved ["liteWearable"]
   * @useinstead ohos.sensor/sensor#AccelerometerResponse.y
   */
  y: number;

  /**
   * Acceleration along the z-axis of the device, in m/s². Value range: The value is the actually reported physical 
   * quantity, which is determined by the hardware sensor. The acceleration along the z-axis is about 9.8 m/s² (gravity 
   * acceleration) when the device is still.
   *
   * @permission ohos.permission.ACCELEROMETER
   * @syscap SystemCapability.Sensors.Sensor.Lite
   * @famodelonly
   * @since 3 dynamiconly
   * @deprecated since 8
   * @reserved ["liteWearable"]
   * @useinstead ohos.sensor/sensor#AccelerometerResponse.z
   */
  z: number;
}

/**
 * Sets the parameters for subscribing to the acceleration sensor, including the callback frequency and callback 
 * function.
 *
 * @permission ohos.permission.ACCELEROMETER
 * @syscap SystemCapability.Sensors.Sensor.Lite
 * @famodelonly
 * @since 3 dynamiconly
 * @deprecated since 8
 * @reserved ["liteWearable"]
 * @useinstead ohos.sensor/sensor.SensorId#ACCELEROMETER
 */
export interface subscribeAccelerometerOptions {
  /**
   * Execution frequency of the callback for returning the acceleration sensor data.
   *
   * Default value: **'normal'**
   *
   * Possible values:
   *
   * - **'game'**: called at an interval of 20 ms, which is applicable to gaming scenarios.
   * - **'ui'**: called at an interval of 60 ms, which is applicable to UI updating scenarios.
   * - **'normal'**: called at an interval of 200 ms, which is applicable to power-saving scenarios.
   *
   * @permission ohos.permission.ACCELEROMETER
   * @syscap SystemCapability.Sensors.Sensor.Lite
   * @famodelonly
   * @since 3 dynamiconly
   * @deprecated since 8
   * @reserved ["liteWearable"]
   * @useinstead ohos.sensor/sensor#Options.interval
   */
  interval: string;

  /**
   * Callback function invoked when the acceleration sensor data changes. The callback parameter is an 
   * **AccelerometerResponse** object.
   *
   * @permission ohos.permission.ACCELEROMETER
   * @syscap SystemCapability.Sensors.Sensor.Lite
   * @famodelonly
   * @since 3 dynamiconly
   * @deprecated since 8
   * @reserved ["liteWearable"]
   * @useinstead ohos.sensor/sensor#on
   */
  success: (data: AccelerometerResponse) => void;

  /**
   * Callback invoked when an API call fails. The callback parameters are **data** of the string type and **code** of 
   * the number type, where **data** indicates the error information and **code** indicates the error code. If this 
   * parameter is not specified, no callback notification is sent when the API call fails.
   *
   * @permission ohos.permission.ACCELEROMETER
   * @syscap SystemCapability.Sensors.Sensor.Lite
   * @famodelonly
   * @since 3 dynamiconly
   * @deprecated since 8
   * @reserved ["liteWearable"]
   * @useinstead ohos.sensor/sensor#on
   */
  fail?: (data: string, code: number) => void;
}

/**
 * Callback function response object after the compass data changes, including the degree of the direction that the 
 * device faces.
 *
 * @syscap SystemCapability.Sensors.Sensor.Lite
 * @famodelonly
 * @since 3 dynamiconly
 * @deprecated since 8
 * @reserved ["liteWearable"]
 * @useinstead ohos.sensor/sensor#OrientationResponse
 */
export interface CompassResponse {
  /**
   * Direction of the device, in degrees. The value range is 
   * [0, 360). The value **0** indicates north. The value is equal to the reported physical quantity.
   *
   * @syscap SystemCapability.Sensors.Sensor.Lite
   * @famodelonly
   * @since 3 dynamiconly
   * @deprecated since 8
   * @reserved ["liteWearable"]
   * @useinstead ohos.sensor/sensor#OrientationResponse.alpha
   */
  direction: number;
}

/**
 * Sets the parameters for subscribing to the compass sensor, including the callback function.
 *
 * @syscap SystemCapability.Sensors.Sensor.Lite
 * @famodelonly
 * @since 3 dynamiconly
 * @deprecated since 8
 * @reserved ["liteWearable"]
 * @useinstead ohos.sensor/sensor.SensorId#ORIENTATION
 */
export interface SubscribeCompassOptions {
  /**
   * Callback invoked when the compass sensor data changes. The callback parameter is a **CompassResponse** object.
   *
   * @syscap SystemCapability.Sensors.Sensor.Lite
   * @famodelonly
   * @since 3 dynamiconly
   * @deprecated since 8
   * @reserved ["liteWearable"]
   * @useinstead ohos.sensor/sensor#on
   */
  success: (data: CompassResponse) => void;

  /**
   * Callback invoked when an API call fails. The callback parameters are **data** of the string type and **code** of 
   * the number type, where **data** indicates the error information and **code** indicates the error code. If this 
   * parameter is not specified, no callback notification is sent when the API call fails.
   *
   * @syscap SystemCapability.Sensors.Sensor.Lite
   * @famodelonly
   * @since 3 dynamiconly
   * @deprecated since 8
   * @reserved ["liteWearable"]
   * @useinstead ohos.sensor/sensor#on
   */
  fail?: (data: string, code: number) => void;
}

/**
 * Callback function response object after the proximity sensor data changes, including the distance between a visible 
 * object and the device screen.
 *
 * **Device behavior differences**: This API can be called on wearables and lite wearables, but has no effect on
 * other device types.
 *
 * @syscap SystemCapability.Sensors.Sensor.Lite
 * @famodelonly
 * @since 3 dynamiconly
 * @deprecated since 8
 * @reserved ["liteWearable"]
 * @useinstead ohos.sensor/sensor#ProximityResponse
 */
export interface ProximityResponse {
  /**
   * Distance between a visible object and the device screen. Value range: **0** indicates that the object is close to 
   * the screen (near state), and a value greater than 0 indicates that the object is far away from the screen (far 
   * state). The specific value of the far state is determined by the hardware sensor.
   *
   * @syscap SystemCapability.Sensors.Sensor.Lite
   * @famodelonly
   * @since 3 dynamiconly
   * @deprecated since 8
   * @reserved ["liteWearable"]
   * @useinstead ohos.sensor/sensor#ProximityResponse.distance
   */
  distance: number;
}

/**
 * Sets the parameters for subscribing to the distance sensor, including the callback function.
 *
 * **Device behavior differences**: This API can be called on wearables and lite wearables, but has no effect on
 * other device types.
 *
 * @syscap SystemCapability.Sensors.Sensor.Lite
 * @famodelonly
 * @since 3 dynamiconly
 * @deprecated since 8
 * @reserved ["liteWearable"]
 * @useinstead ohos.sensor/sensor.SensorId#PROXIMITY
 */
export interface SubscribeProximityOptions {
  /**
   * Callback function invoked when the proximity sensor data changes. The callback parameter is a **ProximityResponse**
   *  object.
   *
   * @syscap SystemCapability.Sensors.Sensor.Lite
   * @famodelonly
   * @since 3 dynamiconly
   * @deprecated since 8
   * @reserved ["liteWearable"]
   * @useinstead ohos.sensor/sensor#on
   */
  success: (data: ProximityResponse) => void;

  /**
   * Callback invoked when an API call fails. The callback parameters are **data** of the string type and **code** of 
   * the number type, where **data** indicates the error information and **code** indicates the error code. If this 
   * parameter is not specified, no callback notification is sent when the API call fails.
   *
   * @syscap SystemCapability.Sensors.Sensor.Lite
   * @famodelonly
   * @since 3 dynamiconly
   * @deprecated since 8
   * @reserved ["liteWearable"]
   * @useinstead ohos.sensor/sensor#on
   */
  fail?: (data: string, code: number) => void;
}

/**
 * Callback invoked when the ambient light sensor data changes. The response object contains the ambient light intensity
 *  data.
 *
 * **Device behavior differences**: This API can be called on wearables and lite wearables, but has no effect on
 * other device types.
 *
 * @syscap SystemCapability.Sensors.Sensor.Lite
 * @famodelonly
 * @since 3 dynamiconly
 * @deprecated since 8
 * @reserved ["liteWearable"]
 * @useinstead ohos.sensor/sensor#LightResponse
 */
export interface LightResponse {
  /**
   * Ambient light intensity, in lux. Value range: The value is the actually reported physical quantity, which is 
   * determined by the hardware sensor.
   *
   * @syscap SystemCapability.Sensors.Sensor.Lite
   * @famodelonly
   * @since 3 dynamiconly
   * @deprecated since 8
   * @reserved ["liteWearable"]
   * @useinstead ohos.sensor/sensor#LightResponse.intensity
   */
  intensity: number;
}

/**
 * Sets the parameters for subscribing to the ambient light sensor, including the callback function.
 *
 * **Device behavior differences**: This API can be called on wearables and lite wearables, but has no effect on
 * other device types.
 *
 * @syscap SystemCapability.Sensors.Sensor.Lite
 * @famodelonly
 * @since 3 dynamiconly
 * @deprecated since 8
 * @reserved ["liteWearable"]
 * @useinstead ohos.sensor/sensor.SensorId#AMBIENT_LIGHT
 */
export interface SubscribeLightOptions {
  /**
   * Callback function invoked when the ambient light sensor data changes. The callback parameter is a **LightResponse**
   *  object.
   *
   * @syscap SystemCapability.Sensors.Sensor.Lite
   * @famodelonly
   * @since 3 dynamiconly
   * @deprecated since 8
   * @reserved ["liteWearable"]
   * @useinstead ohos.sensor/sensor#on
   */
  success: (data: LightResponse) => void;

  /**
   * Callback invoked when an API call fails. The callback parameters are **data** of the string type and **code** of 
   * the number type, where **data** indicates the error information and **code** indicates the error code. If this 
   * parameter is not specified, no callback notification is sent when the API call fails.
   *
   * @syscap SystemCapability.Sensors.Sensor.Lite
   * @famodelonly
   * @since 3 dynamiconly
   * @deprecated since 8
   * @reserved ["liteWearable"]
   * @useinstead ohos.sensor/sensor#on
   */
  fail?: (data: string, code: number) => void;
}

/**
 * Defines a response object of the callback function invoked when the step counter sensor data changes, including the 
 * accumulated step count recorded after the step counter sensor is restarted.
 *
 * @permission ohos.permission.ACTIVITY_MOTION
 * @syscap SystemCapability.Sensors.Sensor.Lite
 * @famodelonly
 * @since 3 dynamiconly
 * @deprecated since 8
 * @reserved ["liteWearable"]
 * @useinstead ohos.sensor/sensor#PedometerResponse
 */
export interface StepCounterResponse {
  /**
   * Number of counted steps after the sensor is restarted. Value range: an integer greater than or equal to 0. The 
   * value is the actually reported physical quantity. The step count restarts from 0 after the sensor is restarted.
   *
   * @permission ohos.permission.ACTIVITY_MOTION
   * @syscap SystemCapability.Sensors.Sensor.Lite
   * @famodelonly
   * @since 3 dynamiconly
   * @deprecated since 8
   * @reserved ["liteWearable"]
   * @useinstead ohos.sensor/sensor#PedometerResponse.steps
   */
  steps: number;
}

/**
 * Sets the parameters for subscribing to the step counter sensor, including the callback function.
 *
 * @permission ohos.permission.ACTIVITY_MOTION
 * @syscap SystemCapability.Sensors.Sensor.Lite
 * @famodelonly
 * @since 3 dynamiconly
 * @deprecated since 8
 * @reserved ["liteWearable"]
 * @useinstead ohos.sensor/SensorId#PEDOMETER
 */
export interface SubscribeStepCounterOptions {
  /**
   * Callback function invoked when the step counter sensor data changes. The callback parameter is a 
   * **StepCounterResponse** object.
   *
   * @permission ohos.permission.ACTIVITY_MOTION
   * @syscap SystemCapability.Sensors.Sensor.Lite
   * @famodelonly
   * @since 3 dynamiconly
   * @deprecated since 8
   * @reserved ["liteWearable"]
   * @useinstead ohos.sensor/sensor#on
   */
  success: (data: StepCounterResponse) => void;

  /**
   * Callback invoked when an API call fails. The callback parameters are **data** of the string type and **code** of 
   * the number type, where **data** indicates the error information and **code** indicates the error code. If this 
   * parameter is not specified, no callback notification is sent when the API call fails.
   *
   * @permission ohos.permission.ACTIVITY_MOTION
   * @syscap SystemCapability.Sensors.Sensor.Lite
   * @famodelonly
   * @since 3 dynamiconly
   * @deprecated since 8
   * @reserved ["liteWearable"]
   * @useinstead ohos.sensor/sensor#on
   */
  fail?: (data: string, code: number) => void;
}

/**
 * Defines a response object of the callback function after the barometric pressure sensor data is changed, including 
 * the atmospheric pressure value.
 *
 * @syscap SystemCapability.Sensors.Sensor.Lite
 * @famodelonly
 * @since 3 dynamiconly
 * @deprecated since 8
 * @reserved ["liteWearable"]
 * @useinstead ohos.sensor/sensor#BarometerResponse
 */
export interface BarometerResponse {
  /**
   * Atmospheric pressure, in Pa. Value range: The value is the actually reported physical quantity, which is determined
   *  by the hardware sensor. The standard atmospheric pressure is about 101,325 Pa.
   *
   * @syscap SystemCapability.Sensors.Sensor.Lite
   * @famodelonly
   * @since 3 dynamiconly
   * @deprecated since 8
   * @reserved ["liteWearable"]
   * @useinstead ohos.sensor/sensor#BarometerResponse.pressure
   */
  pressure: number;
}

/**
 * Configures the parameters for subscribing to the barometric pressure sensor, including the callback function.
 *
 * @syscap SystemCapability.Sensors.Sensor.Lite
 * @famodelonly
 * @since 3 dynamiconly
 * @deprecated since 8
 * @reserved ["liteWearable"]
 * @useinstead ohos.sensor/sensor.SensorId#BAROMETER
 */
export interface SubscribeBarometerOptions {
  /**
   * Callback invoked when the barometric pressure sensor data changes. The callback parameter is a 
   * **BarometerResponse** object.
   *
   * @syscap SystemCapability.Sensors.Sensor.Lite
   * @famodelonly
   * @since 3 dynamiconly
   * @deprecated since 8
   * @reserved ["liteWearable"]
   * @useinstead ohos.sensor/sensor#on
   */
  success: (data: BarometerResponse) => void;

  /**
   * Callback invoked when an API call fails. The callback parameters are **data** of the string type and **code** of 
   * the number type, where **data** indicates the error information and **code** indicates the error code. If this 
   * parameter is not specified, no callback notification is sent when the API call fails.
   *
   * @syscap SystemCapability.Sensors.Sensor.Lite
   * @famodelonly
   * @since 3 dynamiconly
   * @deprecated since 8
   * @reserved ["liteWearable"]
   * @useinstead ohos.sensor/sensor#on
   */
  fail?: (data: string, code: number) => void;
}

/**
 * Defines a response object of the callback function after the heart rate sensor data is changed, including the heart 
 * rate value.
 *
 * @permission ohos.permission.READ_HEALTH_DATA
 * @syscap SystemCapability.Sensors.Sensor.Lite
 * @famodelonly
 * @since 3 dynamiconly
 * @deprecated since 8
 * @reserved ["liteWearable"]
 * @useinstead ohos.sensor/sensor#HeartRateResponse
 */
export interface HeartRateResponse {
  /**
   * Heart rate, in bpm. Value range: The value is the actually reported physical quantity, which is determined by the 
   * hardware sensor. The resting heart rate of a normal adult ranges from 60 to 100 bpm.
   *
   * @permission ohos.permission.READ_HEALTH_DATA
   * @syscap SystemCapability.Sensors.Sensor.Lite
   * @famodelonly
   * @since 3 dynamiconly
   * @deprecated since 8
   * @reserved ["liteWearable"]
   * @useinstead ohos.sensor/sensor#HeartRateResponse.heartRate
   */
  heartRate: number;
}

/**
 * Configures the parameters for subscribing to the heart rate sensor, including the callback function. The callback 
 * frequency of heart rate data is fixed at 5 seconds per time and cannot be configured using the interval parameter.
 *
 * @permission ohos.permission.READ_HEALTH_DATA
 * @syscap SystemCapability.Sensors.Sensor.Lite
 * @famodelonly
 * @since 3 dynamiconly
 * @deprecated since 8
 * @reserved ["liteWearable"]
 * @useinstead ohos.sensor/sensor.SensorId#HEART_RATE
 */
export interface SubscribeHeartRateOptions {
  /**
   * Callback invoked when the heart rate sensor data changes. The callback parameter is a **HeartRateResponse** object.
   *  The callback frequency is fixed at 5 seconds.
   *
   * @permission ohos.permission.READ_HEALTH_DATA
   * @syscap SystemCapability.Sensors.Sensor.Lite
   * @famodelonly
   * @since 3 dynamiconly
   * @deprecated since 8
   * @reserved ["liteWearable"]
   * @useinstead ohos.sensor/sensor#on
   */
  success: (data: HeartRateResponse) => void;

  /**
   * Callback invoked when an API call fails. The callback parameters are **data** of the string type and **code** of 
   * the number type, where **data** indicates the error information and **code** indicates the error code. If this 
   * parameter is not specified, no callback notification is sent when the API call fails.
   *
   * @permission ohos.permission.READ_HEALTH_DATA
   * @syscap SystemCapability.Sensors.Sensor.Lite
   * @famodelonly
   * @since 3 dynamiconly
   * @deprecated since 8
   * @reserved ["liteWearable"]
   * @useinstead ohos.sensor/sensor#on
   */
  fail?: (data: string, code: number) => void;
}

/**
 * Defines a response object of the device wearing status, including the data indicating whether the device is worn.
 *
 * @syscap SystemCapability.Sensors.Sensor.Lite
 * @famodelonly
 * @since 3 dynamiconly
 * @deprecated since 8
 * @reserved ["liteWearable"]
 * @useinstead ohos.sensor/sensor#WearDetectionResponse
 */
export interface OnBodyStateResponse {
  /**
   * Whether the device is worn The value **true** indicates that the device is worn, and the value **false** indicates 
   * that the device is not worn.
   *
   * @syscap SystemCapability.Sensors.Sensor.Lite
   * @famodelonly
   * @since 3 dynamiconly
   * @deprecated since 8
   * @reserved ["liteWearable"]
   * @useinstead ohos.sensor/sensor#WearDetectionResponse.value
   */
  value: boolean;
}

/**
 * Sets the parameters for subscribing to the device wearing status, including the callback function. The wearing status
 *  can be worn or not worn.
 *
 * @syscap SystemCapability.Sensors.Sensor.Lite
 * @famodelonly
 * @since 3 dynamiconly
 * @deprecated since 8
 * @reserved ["liteWearable"]
 * @useinstead ohos.sensor/sensor.SensorId#WEAR_DETECTION
 */
export interface SubscribeOnBodyStateOptions {
  /**
   * Callback invoked when the wearing state of the device that houses the sensor is successfully obtained. The callback
   *  parameter is an **OnBodyStateResponse** object.
   *
   * @syscap SystemCapability.Sensors.Sensor.Lite
   * @famodelonly
   * @since 3 dynamiconly
   * @deprecated since 8
   * @reserved ["liteWearable"]
   * @useinstead ohos.sensor/sensor#on
   */
  success: (data: OnBodyStateResponse) => void;

  /**
   * Callback invoked when an API call fails. The callback parameters are **data** of the string type and **code** of 
   * the number type, where **data** indicates the error information and **code** indicates the error code. If this 
   * parameter is not specified, no callback notification is sent when the API call fails.
   *
   * @syscap SystemCapability.Sensors.Sensor.Lite
   * @famodelonly
   * @since 3 dynamiconly
   * @deprecated since 8
   * @reserved ["liteWearable"]
   * @useinstead ohos.sensor/sensor#on
   */
  fail?: (data: string, code: number) => void;
}

/**
 * Sets the parameters for subscribing to the device wearing status, including the callback function. The wearing status
 *  can be worn or not worn.
 *
 * @syscap SystemCapability.Sensors.Sensor.Lite
 * @famodelonly
 * @since 3 dynamiconly
 * @deprecated since 8
 * @reserved ["liteWearable"]
 * @useinstead ohos.sensor/sensor.SensorId#WEAR_DETECTION
 */
export interface GetOnBodyStateOptions {
  /**
   * Callback invoked when the API call succeeds. The callback parameter is an **OnBodyStateResponse** object.
   *
   * @syscap SystemCapability.Sensors.Sensor.Lite
   * @famodelonly
   * @since 3 dynamiconly
   * @deprecated since 8
   * @reserved ["liteWearable"]
   * @useinstead ohos.sensor/sensor#once
   */
  success: (data: OnBodyStateResponse) => void;

  /**
   * Callback invoked when an API call fails. The callback parameters are **data** of the string type and **code** of 
   * the number type, where **data** indicates the error information and **code** indicates the error code. If this 
   * parameter is not specified, no callback notification is sent when the API call fails.
   *
   * @syscap SystemCapability.Sensors.Sensor.Lite
   * @famodelonly
   * @since 3 dynamiconly
   * @deprecated since 8
   * @reserved ["liteWearable"]
   * @useinstead ohos.sensor/sensor#once
   */
  fail?: (data: string, code: number) => void;

  /**
   * Callback invoked when the API call is complete. This callback will be executed regardless of whether the API call 
   * succeeds or fails. If this parameter is not specified, no callback notification is sent when the API call is 
   * complete.
   *
   * @syscap SystemCapability.Sensors.Sensor.Lite
   * @famodelonly
   * @since 3 dynamiconly
   * @deprecated since 8
   * @reserved ["liteWearable"]
   * @useinstead ohos.sensor/sensor#once
   */
  complete?: () => void;
}

/**
 * Defines a response object of the callback function after the device orientation sensor data changes, including the 
 * three rotation angles of the device.
 *
 * **Device behavior differences**: This API can be called on wearables and lite wearables, but has no effect on
 * other device types.
 *
 * @syscap SystemCapability.Sensors.Sensor.Lite
 * @famodelonly
 * @since 6 dynamiconly
 * @deprecated since 8
 * @reserved ["liteWearable"]
 * @useinstead ohos.sensor/sensor#OrientationResponse
 */
export interface DeviceOrientationResponse {
  /**
   * Rotation angle around the Z axis when the X/Y axis of the device coincides with the X/Y axis of the eart, in 
   * degrees. Value range: [0, 360]
   *
   * @syscap SystemCapability.Sensors.Sensor.Lite
   * @famodelonly
   * @since 6 dynamiconly
   * @deprecated since 8
   * @reserved ["liteWearable"]
   * @useinstead ohos.sensor/sensor#OrientationResponse.alpha
   */
  alpha: number;

  /**
   * Rotation angle around the X axis when the Y/Z axis of the device coincides with the Y/Z axis of the earth. in 
   * degrees. The value range is [-180, 180].
   *
   * @syscap SystemCapability.Sensors.Sensor.Lite
   * @famodelonly
   * @since 6 dynamiconly
   * @deprecated since 8
   * @reserved ["liteWearable"]
   * @useinstead ohos.sensor/sensor#OrientationResponse.beta
   */
  beta: number;

  /**
   * Rotation angle around the Y axis when the X/Z axis of the device coincides with the X/Z axis of the earth. in 
   * degrees. The value range is [-90, 90].
   *
   * @syscap SystemCapability.Sensors.Sensor.Lite
   * @famodelonly
   * @since 6 dynamiconly
   * @deprecated since 8
   * @reserved ["liteWearable"]
   * @useinstead ohos.sensor/sensor#OrientationResponse.gamma
   */
  gamma: number;
}

/**
 * Sets the parameters for subscribing to the device orientation sensor, including the callback frequency and callback 
 * function.
 *
 * **Device behavior differences**: This API can be called on wearables and lite wearables, but has no effect on
 * other device types.
 *
 * @syscap SystemCapability.Sensors.Sensor.Lite
 * @famodelonly
 * @since 6 dynamiconly
 * @deprecated since 8
 * @reserved ["liteWearable"]
 * @useinstead ohos.sensor/sensor.SensorId#ORIENTATION
 */
export interface SubscribeDeviceOrientationOptions {
  /**
   * Interval at which the callback is invoked to return the device orientation sensor data.
   *
   * Default value: **'normal'**
   *
   * Possible values:
   *
   * - **'game'**: called at an interval of 20 ms, which is applicable to gaming scenarios.
   * - **'ui'**: called at an interval of 60 ms, which is applicable to UI updating scenarios.
   * - **'normal'**: called at an interval of 200 ms, which is applicable to power-saving scenarios.
   *
   * @syscap SystemCapability.Sensors.Sensor.Lite
   * @famodelonly
   * @since 6 dynamiconly
   * @deprecated since 8
   * @reserved ["liteWearable"]
   * @useinstead ohos.sensor/sensor#Options.interval
   */
  interval: string;

  /**
   * Callback invoked when the device orientation sensor data changes. The callback parameter is a 
   * **DeviceOrientationResponse** object.
   *
   * @syscap SystemCapability.Sensors.Sensor.Lite
   * @famodelonly
   * @since 6 dynamiconly
   * @deprecated since 8
   * @reserved ["liteWearable"]
   * @useinstead ohos.sensor/sensor#on
   */
  success: (data: DeviceOrientationResponse) => void;

  /**
   * Callback invoked when an API call fails. The callback parameters are **data** of the string type and **code** of 
   * the number type, where **data** indicates the error information and **code** indicates the error code. If this 
   * parameter is not specified, no callback notification is sent when the API call fails.
   *
   * @syscap SystemCapability.Sensors.Sensor.Lite
   * @famodelonly
   * @since 6 dynamiconly
   * @deprecated since 8
   * @reserved ["liteWearable"]
   * @useinstead ohos.sensor/sensor#on
   */
  fail?: (data: string, code: number) => void;
}

/**
 * Defines a response object of the callback function after the gyroscope sensor data changes, including the rotational 
 * velocity data of the device on the x, y, and z axes.
 *
 * @permission ohos.permission.GYROSCOPE
 * @syscap SystemCapability.Sensors.Sensor.Lite
 * @famodelonly
 * @since 6 dynamiconly
 * @deprecated since 8
 * @reserved ["liteWearable"]
 * @useinstead ohos.sensor/sensor#GyroscopeResponse
 */
export interface GyroscopeResponse {
  /**
   * Rotation angular velocity of the X axis, in rad/s. Value range: The value is the actually reported physical 
   * quantity, which is determined by the hardware sensor.
   *
   * @permission ohos.permission.GYROSCOPE
   * @syscap SystemCapability.Sensors.Sensor.Lite
   * @famodelonly
   * @since 6 dynamiconly
   * @deprecated since 8
   * @reserved ["liteWearable"]
   * @useinstead ohos.sensor/sensor#GyroscopeResponse.x
   */
  x: number;

  /**
   * Rotation angular velocity of the Y axis, in rad/s. Value range: The value is the actually reported physical 
   * quantity, which is determined by the hardware sensor.
   *
   * @permission ohos.permission.GYROSCOPE
   * @syscap SystemCapability.Sensors.Sensor.Lite
   * @famodelonly
   * @since 6 dynamiconly
   * @deprecated since 8
   * @reserved ["liteWearable"]
   * @useinstead ohos.sensor/sensor#GyroscopeResponse.y
   */
  y: number;

  /**
   * Rotation angular velocity of the Z axis, in rad/s. Value range: The value is the actually reported physical 
   * quantity, which is determined by the hardware sensor.
   *
   * @permission ohos.permission.GYROSCOPE
   * @syscap SystemCapability.Sensors.Sensor.Lite
   * @famodelonly
   * @since 6 dynamiconly
   * @deprecated since 8
   * @reserved ["liteWearable"]
   * @useinstead ohos.sensor/sensor#GyroscopeResponse.z
   */
  z: number;
}

/**
 * Defines the parameters for subscribing to the gyroscope sensor, including the callback frequency and callback 
 * function.
 *
 * @permission ohos.permission.GYROSCOPE
 * @syscap SystemCapability.Sensors.Sensor.Lite
 * @famodelonly
 * @since 6 dynamiconly
 * @deprecated since 8
 * @reserved ["liteWearable"]
 * @useinstead ohos.sensor/sensor.SensorId#GYROSCOPE
 */
export interface SubscribeGyroscopeOptions {
  /**
   * Interval at which the callback is invoked to return the gyroscope sensor data.
   *
   * Default value: **'normal'**
   *
   * Possible values:
   *
   * - **'game'**: called at an interval of 20 ms, which is applicable to gaming scenarios.
   * - **'ui'**: called at an interval of 60 ms, which is applicable to UI updating scenarios.
   * - **'normal'**: called at an interval of 200 ms, which is applicable to power-saving scenarios.
   *
   * @permission ohos.permission.GYROSCOPE
   * @syscap SystemCapability.Sensors.Sensor.Lite
   * @famodelonly
   * @since 6 dynamiconly
   * @deprecated since 8
   * @reserved ["liteWearable"]
   * @useinstead ohos.sensor/sensor#Options.interval
   */
  interval: string;

  /**
   * Callback invoked when the gyroscope sensor data changes. The callback parameter is a **GyroscopeResponse** object.
   *
   * @permission ohos.permission.GYROSCOPE
   * @syscap SystemCapability.Sensors.Sensor.Lite
   * @famodelonly
   * @since 6 dynamiconly
   * @deprecated since 8
   * @reserved ["liteWearable"]
   * @useinstead ohos.sensor/sensor#on
   */
  success: (data: GyroscopeResponse) => void;

  /**
   * Callback invoked when an API call fails. The callback parameters are **data** of the string type and **code** of 
   * the number type, where **data** indicates the error information and **code** indicates the error code. If this 
   * parameter is not specified, no callback notification is sent when the API call fails.
   *
   * @permission ohos.permission.GYROSCOPE
   * @syscap SystemCapability.Sensors.Sensor.Lite
   * @famodelonly
   * @since 6 dynamiconly
   * @deprecated since 8
   * @reserved ["liteWearable"]
   * @useinstead ohos.sensor/sensor#on
   */
  fail?: (data: string, code: number) => void;
}

/**
 *
 * @syscap SystemCapability.Sensors.Sensor.Lite
 * @famodelonly
 * @since 6 dynamiconly
 * @deprecated since 8
 * @reserved ["liteWearable"]
 * @useinstead ohos.sensor/sensor
 */
export default class Sensor {
  /**
   * Subscribes to data changes of the acceleration sensor. Obtains the acceleration data of the device along the x, y,
   * and z axes through a callback. The data is in the format of an **AccelerometerResponse** object,
   * which contains three number fields of **x**, **y**, and **z**.
   *
   * This API can be used to obtain the acceleration information of a device to implement functions such as
   * motion detection and shake.
   *
   * After this API is called, the system reports acceleration data at the specified callback frequency.
   * If this API is called multiple times for the same app, the last call takes effect.
   *
   * > **NOTE**
   * >
   * > For devices other than lite wearables, you are advised to use 
   * > [ACCELEROMETER]{@link @ohos.sensor:sensor.on(type: SensorType.SENSOR_TYPE_ID_ACCELEROMETER, callback: Callback<AccelerometerResponse>, options?: Options)}
   * > instead since API version 8.
   *
   * @permission ohos.permission.ACCELEROMETER
   * @param { subscribeAccelerometerOptions } options - Parameters for subscribing to the acceleration sensor,
   *      including the callback frequency and callback function.
   * @syscap SystemCapability.Sensors.Sensor.Lite
   * @famodelonly
   * @since 3 dynamiconly
   * @deprecated since 8
   * @reserved ["liteWearable"]
   * @useinstead @ohos.sensor:sensor.on(type: SensorType.SENSOR_TYPE_ID_ACCELEROMETER, callback: Callback<AccelerometerResponse>, options?: Options)
   */
  static subscribeAccelerometer(options: subscribeAccelerometerOptions): void;

  /**
   * Unsubscribes from data of the acceleration sensor. After this method is called, the callback for the acceleration
   * sensor will not be triggered.
   *
   * When the acceleration sensor data is no longer needed (for example, when the page is switched or the app is
   * exited), call this method to cancel the subscription to reduce system resource usage.
   *
   * After this method is called, the callback registered using **subscribeAccelerometer** will not be triggered.
   * To obtain data again, call **subscribeAccelerometer** again.
   *
   * > **NOTE**
   * >
   * > For devices other than lite wearables, you are advised to use
   * > [ACCELEROMETER]{@link @ohos.sensor:sensor.off(type: SensorType.SENSOR_TYPE_ID_ACCELEROMETER, callback?: Callback<AccelerometerResponse>)}
   * > instead since API version 8.
   *
   * @permission ohos.permission.ACCELEROMETER
   * @syscap SystemCapability.Sensors.Sensor.Lite
   * @famodelonly
   * @since 3 dynamiconly
   * @deprecated since 8
   * @reserved ["liteWearable"]
   * @useinstead @ohos.sensor:sensor.off(type: SensorType.SENSOR_TYPE_ID_ACCELEROMETER, callback?: Callback<AccelerometerResponse>)
   */
  static unsubscribeAccelerometer(): void;

  /**
   * Subscribes to data changes of the compass sensor. Obtains the device direction data through a callback.
   * The data is in the format of a **CompassResponse object**, which contains the **direction** field.
   *
   * This API can be used to obtain the device direction information to implement functions such as navigation and
   * compass.
   *
   * After this API is called, the system reports the device direction data when the compass data changes.
   * If this API is called multiple times for the same app, the last call takes effect.
   *
   * > **NOTE**
   * >
   * > For devices other than lite wearables, you are advised to use 
   * > [ORIENTATION]{@link @ohos.sensor:sensor.on(type: SensorType.SENSOR_TYPE_ID_ORIENTATION, callback: Callback<OrientationResponse>, options?: Options)}
   * > instead since API Version 8.
   *
   * @param { SubscribeCompassOptions } options - Type of data to return.
   * @syscap SystemCapability.Sensors.Sensor.Lite
   * @famodelonly
   * @since 3 dynamiconly
   * @deprecated since 8
   * @reserved ["liteWearable"]
   * @useinstead ohos.sensor/sensor.SensorId#ORIENTATION
   */
  static subscribeCompass(options: SubscribeCompassOptions): void;

  /**
   * Unsubscribes from data of the compass sensor. After this method is called, the callback for the compass
   * sensor will not be triggered.
   *
   * Call this method to cancel the subscription when the compass sensor data is no longer needed.
   *
   * After this method is called, the callback registered using **subscribeCompass** will not be triggered.
   * You need to call **subscribeCompass** to register to the callback before calling this method for unsubscription.
   * Otherwise, this method will not take effect.
   *
   * > **NOTE**
   * >
   * > For devices other than lite wearables, you are advised to use
   * > [ORIENTATION]{@link @ohos.sensor:sensor.off(type: SensorType.SENSOR_TYPE_ID_ORIENTATION, callback?: Callback<OrientationResponse>)}
   * > instead since API version 8.
   *
   * @syscap SystemCapability.Sensors.Sensor.Lite
   * @famodelonly
   * @since 3 dynamiconly
   * @deprecated since 8
   * @reserved ["liteWearable"]
   * @useinstead @ohos.sensor:sensor.off(type: SensorType.SENSOR_TYPE_ID_ORIENTATION, callback?: Callback<OrientationResponse>)
   */
  static unsubscribeCompass(): void;

  /**
   * Subscribes to data changes of the proximity sensor. Obtains the distance between a visible object and the device
   * screen through the callback function. The data is in the format of the **ProximityResponse** object,
   * which contains the **distance** field.
   *
   * This API can be used to detect the distance between an object and the device screen to implement functions
   * such as automatic screen-off during calls and mistouch prevention.
   *
   * After this API is called, the system reports data when the data of the proximity sensor changes.
   * If this API is called multiple times for the same app, only the last call takes effect.
   *
   * **Device behavior differences**: This API can be called on wearables and lite wearables, but has no effect on
   * other device types.
   *
   * > **NOTE**
   * >
   * > This API is supported since API version 3 and deprecated since API version 8.
   * > For devices other than lite wearables, you are advised to use
   * > [PROXIMITY]{@link @ohos.sensor:sensor.on(type: SensorType.SENSOR_TYPE_ID_PROXIMITY, callback: Callback<ProximityResponse>, options?: Options)}
   * >  instead.
   *
   * @param { SubscribeProximityOptions } options - Sets the parameters for subscribing to the distance sensor,
   *     including the callback function.
   * @syscap SystemCapability.Sensors.Sensor.Lite
   * @famodelonly
   * @since 3 dynamiconly
   * @deprecated since 8
   * @reserved ["liteWearable"]
   * @useinstead ohos.sensor/sensor.SensorId#PROXIMITY
   */
  static subscribeProximity(options: SubscribeProximityOptions): void;

  /**
   * Unsubscribes from data of the distance sensor. After this method is called, the callback for the distance
   * sensor will not be triggered.
   *
   * When the distance sensor data is no longer needed, call this method to cancel the subscription.
   *
   * After this method is called, the callback registered using **subscribeProximity** will not be triggered.
   * You need to call **subscribeProximity** to register to the callback before calling this method for unsubscription.
   * Otherwise, this method will not take effect.
   *
   * **Device behavior differences**: This API can be called on wearables and lite wearables, but has no effect on
   * other device types.
   *
   * > **NOTE**
   * >
   * > For devices other than lite wearables, you are advised to use
   * > [PROXIMITY]{@link @ohos.sensor:sensor.off(type: SensorType.SENSOR_TYPE_ID_PROXIMITY, callback?: Callback<ProximityResponse>)}
   * >  instead since API version 8.
   *
   * @syscap SystemCapability.Sensors.Sensor.Lite
   * @famodelonly
   * @since 3 dynamiconly
   * @deprecated since 8
   * @reserved ["liteWearable"]
   * @useinstead ohos.sensor/sensor.SensorId#PROXIMITY
   */
  static unsubscribeProximity(): void;

  /**
   * Subscribes to ambient light sensor data changes. The ambient light intensity data is obtained through a callback
   * function. The data is in the format of a **LightResponse** object, which contains the **intensity** field.
   * The unit is lux.
   *
   * This API is used when you need to obtain the ambient light intensity to implement functions such as automatic
   * screen brightness adjustment and ambient light detection.
   *
   * If this API is called multiple times, the last call takes effect.
   *
   * **Device behavior differences**: This API can be called on wearables and lite wearables, but has no effect on
   * other device types.
   *
   * > **NOTE**
   * >
   * > For devices other than lite wearables, you are advised to use
   * > [AMBIENT_LIGHT]{@link @ohos.sensor:sensor.on(type: SensorType.SENSOR_TYPE_ID_AMBIENT_LIGHT, callback: Callback<LightResponse>, options?: Options)}
   * > instead since API version 8.
   *
   * @param { SubscribeLightOptions } options - Type of data to return.
   * @syscap SystemCapability.Sensors.Sensor.Lite
   * @famodelonly
   * @since 3 dynamiconly
   * @deprecated since 8
   * @reserved ["liteWearable"]
   * @useinstead ohos.sensor/sensor.SensorId#AMBIENT_LIGHT
   */
  static subscribeLight(options: SubscribeLightOptions): void;

  /**
   * Unsubscribes from data of the ambient light sensor. After this method is called, the callback for the ambient
   * light sensor will not be triggered.
   *
   * When the ambient light sensor data is no longer needed, call this method to cancel the subscription.
   *
   * After this method is called, the callback registered using **subscribeLight** will not be triggered.
   * You need to call **subscribeLight** to register to the callback before calling this method for unsubscription.
   * Otherwise, this method will not take effect.
   *
   * **Device behavior differences**: This API can be called on wearables and lite wearables, but has no effect on
   * other device types.
   *
   * > **NOTE**
   * >
   * > For devices other than lite wearables, you are advised to use
   * > [AMBIENT_LIGHT]{@link @ohos.sensor:sensor.off(type: SensorType.SENSOR_TYPE_ID_AMBIENT_LIGHT, callback?: Callback<LightResponse>)}
   * > instead since API version 8.
   *
   * @syscap SystemCapability.Sensors.Sensor.Lite
   * @famodelonly
   * @since 3 dynamiconly
   * @deprecated since 8
   * @reserved ["liteWearable"]
   * @useinstead @ohos.sensor:sensor.off(type: SensorType.SENSOR_TYPE_ID_AMBIENT_LIGHT, callback?: Callback<LightResponse>)
   */
  static unsubscribeLight(): void;

  /**
   * Subscribes to data changes of the step counter sensor. Callback function used to obtain the number of steps
   * counted after the step counter sensor is restarted. The data is in the format of
   * a **StepCounterResponse** object, which contains the steps field.
   *
   * This API can be used to obtain the user's step count to implement functions such as step counting,
   * fitness tracking, and health monitoring.
   *
   * After this API is called, the system reports data when the step count data changes.
   * If this API is called multiple times for the same app, the last call takes effect.
   *
   * > **NOTE**
   * >
   * > For devices other than lite wearables, you are advised to use
   * > [PEDOMETER]{@link @ohos.sensor:sensor.on(type: SensorType.SENSOR_TYPE_ID_PEDOMETER, callback: Callback<PedometerResponse>, options?: Options)}
   * > instead since API version 8.
   *
   * @permission ohos.permission.ACTIVITY_MOTION
   * @param { SubscribeStepCounterOptions } options - Type of data to return.
   * @syscap SystemCapability.Sensors.Sensor.Lite
   * @famodelonly
   * @since 3 dynamiconly
   * @deprecated since 8
   * @reserved ["liteWearable"]
   * @useinstead @ohos.sensor:sensor.on(type: SensorType.SENSOR_TYPE_ID_PEDOMETER, callback: Callback<PedometerResponse>, options?: Options)
   */
  static subscribeStepCounter(options: SubscribeStepCounterOptions): void;

  /**
   * Unsubscribes from data of the pedometer sensor. After this method is called, the callback for the pedometer sensor
   * will not be triggered.
   *
   * Call this method to cancel the subscription when the step count data is no longer needed.
   *
   * After this method is called, the callback registered using **subscribeStepCounter** will not be triggered.
   * You need to call **subscribeStepCounter** to register to the callback before calling this method for
   * unsubscription. Otherwise, the unsubscription will not take effect.
   *
   * > **NOTE**
   * >
   * > For devices other than lite wearables, you are advised to use
   * > [PEDOMETER]{@link @ohos.sensor:sensor.off(type: SensorType.SENSOR_TYPE_ID_PEDOMETER, callback?: Callback<PedometerResponse>)}
   * > instead since API version 8.
   *
   * @permission ohos.permission.ACTIVITY_MOTION
   * @syscap SystemCapability.Sensors.Sensor.Lite
   * @famodelonly
   * @since 3 dynamiconly
   * @deprecated since 8
   * @reserved ["liteWearable"]
   * @useinstead @ohos.sensor:sensor.off(type: SensorType.SENSOR_TYPE_ID_PEDOMETER, callback?: Callback<PedometerResponse>)
   */
  static unsubscribeStepCounter(): void;

  /**
   * Subscribes to data changes of the barometer sensor. The atmospheric pressure value is obtained through the
   * callback function. The data is in the format of a **BarometerResponse** object, which contains
   * the **pressure** field. The unit is Pa.
   *
   * This API can be used to obtain the atmospheric pressure information to implement functions such as altitude
   * estimation, weather monitoring, and indoor navigation.
   *
   * After this API is called, the system reports data when the barometric pressure changes.
   * If this API is called multiple times for the same app, the last call takes effect.
   *
   * > **NOTE**
   * >
   * > For devices other than lite wearables, you are advised to use
   * > [BAROMETER]{@link @ohos.sensor:sensor.on(type: SensorType.SENSOR_TYPE_ID_BAROMETER, callback: Callback<BarometerResponse>, options?: Options)}
   * > instead since API version 8.
   *
   * @param { SubscribeBarometerOptions } options - Type of data to return.
   * @syscap SystemCapability.Sensors.Sensor.Lite
   * @famodelonly
   * @since 3 dynamiconly
   * @deprecated since 8
   * @reserved ["liteWearable"]
   * @useinstead @ohos.sensor:sensor.on(type: SensorType.SENSOR_TYPE_ID_BAROMETER, callback: Callback<BarometerResponse>, options?: Options)
   */
  static subscribeBarometer(options: SubscribeBarometerOptions): void;

  /**
   * Unsubscribes from data of the barometer sensor. After this method is called, the callback for the barometer sensor
   * will not be triggered.
   *
   * Call this method to cancel the subscription when the barometric pressure data is no longer needed.
   *
   * After this method is called, the callback function registered using **subscribeBarometer** will not be triggered.
   * You need to call **subscribeBarometer** to register to the callback before calling this method for unsubscription.
   * Otherwise, this method will not take effect.
   *
   * > **NOTE**
   * >
   * > For devices other than lite wearables, you are advised to use
   * > [BAROMETER]{@link @ohos.sensor:sensor.off(type: SensorType.SENSOR_TYPE_ID_BAROMETER, callback?: Callback<BarometerResponse>)}
   * > instead since API version 8.
   *
   * @syscap SystemCapability.Sensors.Sensor.Lite
   * @famodelonly
   * @since 3 dynamiconly
   * @deprecated since 8
   * @reserved ["liteWearable"]
   * @useinstead @ohos.sensor:sensor.off(type: SensorType.SENSOR_TYPE_ID_BAROMETER, callback?: Callback<BarometerResponse>)
   */
  static unsubscribeBarometer(): void;

  /**
   * Subscribes to data changes of the heart rate sensor. Obtains the heart rate data through the callback function.
   * The data is in the format of a **HeartRateResponse** object, which contains the **heartRate** field.
   * The unit is bpm. The default callback frequency is once every 5 seconds.
   *
   * This API can be used to obtain the user's heart rate data to implement functions such as health monitoring
   * and exercise intensity evaluation.
   *
   * After this API is called, the system reports heart rate data every 5 seconds.
   * If this API is called multiple times for the same app, the last call takes effect.
   * 
   * > **NOTE**
   * >
   * > For devices other than lite wearables, you are advised to use
   * > [HEART_RATE]{@link @ohos.sensor:sensor.on(type: SensorType.SENSOR_TYPE_ID_HEART_RATE, callback: Callback<HeartRateResponse>, options?: Options)}
   * > instead since API version 8.
   *
   * @permission ohos.permission.READ_HEALTH_DATA
   * @param { SubscribeHeartRateOptions } options - Type of data to return.
   * @syscap SystemCapability.Sensors.Sensor.Lite
   * @famodelonly
   * @since 3 dynamiconly
   * @deprecated since 8
   * @reserved ["liteWearable"]
   * @useinstead @ohos.sensor:sensor.on(type: SensorType.SENSOR_TYPE_ID_HEART_RATE, callback: Callback<HeartRateResponse>, options?: Options)
   */
  static subscribeHeartRate(options: SubscribeHeartRateOptions): void;

  /**
   * Unsubscribes from data of the heart rate sensor. After this method is called, the callback for the heart rate
   * sensor will not be triggered.
   *
   * Call this method to cancel the subscription when the heart rate data is no longer needed.
   *
   * After this method is called, the callback function registered using **subscribeHeartRate** will not be triggered.
   * You need to call **subscribeHeartRate** to register to the callback before calling this method for unsubscription.
   * Otherwise, this method will not take effect.
   *
   * > **NOTE**
   * >
   * > For devices other than lite wearables, you are advised to use
   * > [HEART_RATE]{@link @ohos.sensor:sensor.off(type: SensorType.SENSOR_TYPE_ID_HEART_RATE, callback?: Callback<HeartRateResponse>)}
   * > instead since API version 8.
   *
   * @permission ohos.permission.READ_HEALTH_DATA
   * @syscap SystemCapability.Sensors.Sensor.Lite
   * @famodelonly
   * @since 3 dynamiconly
   * @deprecated since 8
   * @reserved ["liteWearable"]
   * @useinstead @ohos.sensor:sensor.off(type: SensorType.SENSOR_TYPE_ID_HEART_RATE, callback?: Callback<HeartRateResponse>)
   */
  static unsubscribeHeartRate(): void;

  /**
   * Subscribes to device wear status changes. Obtains the device wear status through a callback function.
   * The data is in the format of a **OnBodyStateResponse** object, which contains the **value** field (boolean type).
   *
   * This API can be used to check whether a wearable device is being worn by a user, so as to implement functions
   * such as wear status detection and automatic start/stop.
   *
   * After this API is called, the system reports data when the wear status changes.
   * If this API is called multiple times for the same app, the last call takes effect.
   *
   * > **NOTE**
   * >
   * > For devices other than lite wearables, you are advised to use
   * > [WEAR_DETECTION]{@link @ohos.sensor:sensor.on(type: SensorType.SENSOR_TYPE_ID_WEAR_DETECTION, callback: Callback<WearDetectionResponse>, options?: Options)}
   * > instead since API version 8.
   *
   * @param { SubscribeOnBodyStateOptions } options - Called when the wear status changes.
   * @syscap SystemCapability.Sensors.Sensor.Lite
   * @famodelonly
   * @since 3 dynamiconly
   * @deprecated since 8
   * @reserved ["liteWearable"]
   * @useinstead @ohos.sensor:sensor.on(type: SensorType.SENSOR_TYPE_ID_WEAR_DETECTION, callback: Callback<WearDetectionResponse>, options?: Options)
   */
  static subscribeOnBodyState(options: SubscribeOnBodyStateOptions): void;

  /**
   * Unsubscribes from wearing status changes of a wearable device. After this method is called, the callback for
   * wearing status changes will not be triggered.
   *
   * When the wearing status data is no longer needed, call this method to cancel the subscription.
   *
   * After this method is called, the callback registered using **subscribeOnBodyState** will not be triggered.
   * You need to call **subscribeOnBodyState** to register to the callback before calling this method for
   * unsubscription. Otherwise, this method will not take effect.
   *
   * > **NOTE**
   * >
   * > For devices other than lite wearables, you are advised to use
   * > [WEAR_DETECTION]{@link @ohos.sensor:sensor.off(type: SensorType.SENSOR_TYPE_ID_WEAR_DETECTION, callback?: Callback<WearDetectionResponse>)}
   * > instead since API version 8.
   *
   * @syscap SystemCapability.Sensors.Sensor.Lite
   * @famodelonly
   * @since 3 dynamiconly
   * @deprecated since 8
   * @reserved ["liteWearable"]
   * @useinstead @ohos.sensor:sensor.off(type: SensorType.SENSOR_TYPE_ID_WEAR_DETECTION, callback?: Callback<WearDetectionResponse>)
   */
  static unsubscribeOnBodyState(): void;

  /**
   * Obtains the wearing state of a wearable device. This API is used to obtain the wearing state at a time,
   * which is different from the continuous subscription mode of **subscribeOnBodyState**.
   * Only the wearing state at the current time is returned.
   *
   * Use this API when you need to obtain the current wearing state of a wearable device at a time
   * (rather than continuously listening to changes).
   *
   * After this API is called, the system returns the current wearing state through the **success** callback.
   * This API does not continuously report data and returns the result only once.
   *
   * > **NOTE**
   * >
   * > For devices other than lite wearables, you are advised to use
   * > [WEAR_DETECTION]{@link @ohos.sensor:sensor.on(type: SensorType.SENSOR_TYPE_ID_WEAR_DETECTION, callback: Callback<WearDetectionResponse>, options?: Options)}
   * > instead since API version 8.
   *
   * @param { GetOnBodyStateOptions } options - Callback invoked when obtaining the wearing state of the device that
   *     houses the sensor.
   * @syscap SystemCapability.Sensors.Sensor.Lite
   * @famodelonly
   * @since 3 dynamiconly
   * @deprecated since 8
   * @reserved ["liteWearable"]
   * @useinstead @ohos.sensor:sensor.on(type: SensorType.SENSOR_TYPE_ID_WEAR_DETECTION, callback: Callback<WearDetectionResponse>, options?: Options)
   */
  static getOnBodyState(options: GetOnBodyStateOptions): void;

  /**
   * Subscribes to data changes of the device orientation sensor. The device orientation data is obtained through
   * a callback function. The data is in the format of a **DeviceOrientationResponse** object,
   * which contains the **alpha**, **beta**, and **gamma** rotation angles (unit: degree).
   *
   * This API can be used when you need to obtain the device orientation information to implement functions such as
   * screen rotation, game direction control, and AR/VR scenarios.
   * 
   * If this API is called multiple times for the same app, the last call takes effect.
   * However, this API cannot be called multiple times in one click event.
   *
   * **Device behavior differences**: This API can be called on wearables and lite wearables, but has no effect on
   * other device types.
   *
   * > **NOTE**
   * >
   * > For devices other than lite wearables, you are advised to use
   * > [ORIENTATION]{@link @ohos.sensor:sensor.on(type: SensorType.SENSOR_TYPE_ID_ORIENTATION, callback: Callback<OrientationResponse>, options?: Options)}
   * > instead since API version 8.
   *
   * @param { SubscribeDeviceOrientationOptions } options - Sets the parameters for subscribing to the device
   *     orientation sensor, including the callback frequency and callback function.
   * @syscap SystemCapability.Sensors.Sensor.Lite
   * @famodelonly
   * @since 6 dynamiconly
   * @deprecated since 8
   * @reserved ["liteWearable"]
   * @useinstead @ohos.sensor:sensor.on(type: SensorType.SENSOR_TYPE_ID_ORIENTATION, callback: Callback<OrientationResponse>, options?: Options)
   */
  static subscribeDeviceOrientation(options: SubscribeDeviceOrientationOptions): void;

  /**
   * Unsubscribes from data changes of the device orientation sensor. After this method is called, the callback for
   * the device orientation sensor will not be triggered.
   *
   * When the device orientation data is no longer needed, call this method to cancel the subscription.
   *
   * After this method is called, the callback registered using **subscribeDeviceOrientation** will not be triggered.
   * You need to call **subscribeDeviceOrientation** to register to the callback before calling this method for
   * unsubscription. Otherwise, this method will not take effect.
   *
   * **Device behavior differences**: This API can be called on wearables and lite wearables, but has no effect on
   * other device types.
   *
   * > **NOTE**
   * >
   * > For devices other than lite wearables, you are advised to use
   * > [ORIENTATION]{@link @ohos.sensor:sensor.off(type: SensorType.SENSOR_TYPE_ID_ORIENTATION, callback?: Callback<OrientationResponse>)}
   * > instead since API version 8.
   *
   * @syscap SystemCapability.Sensors.Sensor.Lite
   * @famodelonly
   * @since 6 dynamiconly
   * @deprecated since 8
   * @reserved ["liteWearable"]
   * @useinstead @ohos.sensor:sensor.off(type: SensorType.SENSOR_TYPE_ID_ORIENTATION, callback?: Callback<OrientationResponse>)
   */
  static unsubscribeDeviceOrientation(): void;

  /**
   * Subscribes to data changes of the gyroscope sensor. Obtains the rotational angular velocity data of the device
   * along the x, y, and z axes through the callback function. The data is in the format of
   * a **GyroscopeResponse** object, which contains three number field of **x**, **y**, and **z**. The unit is rad/s.
   *
   * This API can be used to obtain the rotational angular velocity of a device to implement functions such as hand
   * gesture recognition, game control, and posture tracking.
   *
   * If this API is called multiple times for the same app, the last call takes effect.
   * However, this API cannot be called multiple times in one click event.
   *
   * > **NOTE**
   * >
   * > For devices other than lite wearables, you are advised to use
   * > [GYROSCOPE]{@link @ohos.sensor:sensor.on(type: SensorType.SENSOR_TYPE_ID_GYROSCOPE, callback: Callback<GyroscopeResponse>, options?: Options)}
   * > instead since API version 8.
   *
   * @permission ohos.permission.GYROSCOPE
   * @param { SubscribeGyroscopeOptions } options - Type of data to return.
   * @syscap SystemCapability.Sensors.Sensor.Lite
   * @famodelonly
   * @since 6 dynamiconly
   * @deprecated since 8
   * @reserved ["liteWearable"]
   * @useinstead @ohos.sensor:sensor.on(type: SensorType.SENSOR_TYPE_ID_GYROSCOPE, callback: Callback<GyroscopeResponse>, options?: Options)
   */
  static subscribeGyroscope(options: SubscribeGyroscopeOptions): void;

  /**
   * Unsubscribes from data changes of the gyroscope sensor. After this method is called, the callback for the
   * gyroscope sensor will not be triggered.
   *
   * When the gyroscope sensor data is no longer needed, call this method to cancel the subscription.
   *
   * After this method is called, the callback function registered using **subscribeGyroscope** will not be triggered.
   * You need to call **subscribeGyroscope** to register the callback before calling this method for unsubscription.
   * Otherwise, this method will not take effect.
   *
   * > **NOTE**
   * >
   * > For devices other than lite wearables, you are advised to use
   * > [GYROSCOPE]{@link @ohos.sensor:sensor.off(type: SensorType.SENSOR_TYPE_ID_GYROSCOPE, callback?: Callback<GyroscopeResponse>)}
   * > instead since API version 8.
   *
   * @permission ohos.permission.GYROSCOPE
   * @syscap SystemCapability.Sensors.Sensor.Lite
   * @famodelonly
   * @since 6 dynamiconly
   * @deprecated since 8
   * @reserved ["liteWearable"]
   * @useinstead @ohos.sensor:sensor.off(type: SensorType.SENSOR_TYPE_ID_GYROSCOPE, callback?: Callback<GyroscopeResponse>)
   */
  static unsubscribeGyroscope(): void;
}