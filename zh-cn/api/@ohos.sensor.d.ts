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
 * @ohos.sensor 模块是鸿蒙操作系统提供的传感器服务模块，属于 SensorServiceKit。该模块为开发者提供了统一的传感器数据访问能力，涵盖设备上各类物理传感器的数据订阅、查询以及传感器算法计算。
 * sensor 模块是传感器数据访问的统一接口，定义了设备上各类物理传感器的订阅、查询和算法计算能力。
 * 当应用需要感知设备运动状态（如摇一摇、翻转）、检测环境条件（如自动调节屏幕亮度、测量气压估算海拔）、获取设备方向（如指南针导航）、监测健康数据（如心率计步）时，应使用本模块订阅对应传感器数据。当需要进行传感器数据相关的数学变换和计算时
 * ，应使用传感器算法接口。
 *
 * > **说明**：
 *
 * > 本模块首批接口从API version 8开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。订阅前可使用
 * > [getSingleSensor]{@link sensor.getSingleSensor(type: SensorId, callback: AsyncCallback<Sensor>)}
 * > 接口获取该传感器的信息，获取该传感器信息成功时可正常订阅传感器，异常情况详见
 * > [getSingleSensor]{@link sensor.getSingleSensor(type: SensorId, callback: AsyncCallback<Sensor>)}错误码说明。
 * > 订阅传感器数据时确保on订阅和off取消订阅成对出现。sensor模块提供传感器数据订阅与查询能力，核心使用流程如下：
 *
 * 1. 使用[sensor.getSingleSensor]{@link sensor.getSingleSensor(type: SensorId, callback: AsyncCallback<Sensor>)}
 * 或[sensor.getSensorListSync]{@link sensor.getSensorListSync}查询传感器信息，确认设备支持目标传感器。
 * 2. 使用sensor.on接口订阅传感器数据，持续接收数据回调。
 * 3. 使用sensor.once接口获取一次传感器数据，适用于无需持续监听的场景。
 * 4. 使用sensor.off接口取消订阅，确保on和off成对调用。
 * sensor.on与sensor.once的区别：
 *
 * - sensor.on持续订阅传感器数据，通过callback反复上报，适用于需要实时监测的场景。
 * - sensor.once仅获取一次传感器数据，callback只触发一次后自动取消订阅，适用于单次采集的场景。
 * 注意事项：
 * - 订阅前建议先使用getSingleSensor确认设备支持该传感器。
 * - on订阅和off取消订阅必须成对出现，避免资源泄漏。
 * - 对于需要权限的传感器（加速度、陀螺仪、心率、计步等），须先申请相应权限。
 *
 * @syscap SystemCapability.Sensors.Sensor
 * @atomicservice [since 11]
 * @since 8 dynamic
 * @since 23 static
 */
declare namespace sensor {
  /**
   * 表示当前支持订阅或取消订阅的传感器类型。
   *
   * @syscap SystemCapability.Sensors.Sensor
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  enum SensorId {
    /**
     * 加速度传感器类型，用于测量设备的加速度。
     *
     * 从API version 11开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    ACCELEROMETER = 1,

    /**
     * 陀螺仪传感器类型，用于测量设备的旋转角速度。
     *
     * 从API version 11开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    GYROSCOPE = 2,

    /**
     * 环境光传感器类型，用于测量环境光照强度。
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 9 dynamic
     * @since 23 static
     */
    AMBIENT_LIGHT = 5,

    /**
     * 磁场传感器类型，用于测量设备周围的环境磁场强度。
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 9 dynamic
     * @since 23 static
     */
    MAGNETIC_FIELD = 6,

    /**
     * 气压计传感器类型，用于测量大气压力。
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 9 dynamic
     * @since 23 static
     */
    BAROMETER = 8,

    /**
     * 霍尔传感器类型，用于检测设备周围是否存在磁力吸引。
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 9 dynamic
     * @since 23 static
     */
    HALL = 10,

    /**
     * 接近光传感器类型，用于检测物体与设备显示器的接近程度。
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 9 dynamic
     * @since 23 static
     */
    PROXIMITY = 12,

    /**
     * 湿度传感器类型，用于测量环境的相对湿度。
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 9 dynamic
     * @since 23 static
     */
    HUMIDITY = 13,

    /**
     * 颜色传感器。用于订阅/取消订阅颜色传感器数据，上报数据为[ColorResponse]{@link sensor.ColorResponse}对象，包含光照强度和色温信息。
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    COLOR = 14,

    /**
     * 吸收比率传感器。用于订阅/取消订阅吸收比率传感器数据，上报数据为[SarResponse]{@link sensor.SarResponse}对象，包含电磁波吸收率信息。
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    SAR = 15,

    /**
     * 方向传感器类型，用于测量设备的旋转方向角度。
     *
     * 从API version 11开始，该接口在支持原子化服务中使用。
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    ORIENTATION = 256,

    /**
     * 重力传感器类型，用于测量设备的重力加速度。
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 9 dynamic
     * @since 23 static
     */
    GRAVITY = 257,

    /**
     * 线性加速度传感器类型，用于测量设备排除重力后的线性加速度。
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 9 dynamic
     * @since 23 static
     */
    LINEAR_ACCELEROMETER = 258,

    /**
     * 旋转矢量传感器类型，用于描述设备相对于参考方向的旋转状态。
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 9 dynamic
     * @since 23 static
     */
    ROTATION_VECTOR = 259,

    /**
     * 环境温度传感器类型，用于测量环境的温度。
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 9 dynamic
     * @since 23 static
     */
    AMBIENT_TEMPERATURE = 260,

    /**
     * 未校准磁场传感器类型，用于测量未校准的环境磁场强度及其偏量。
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 9 dynamic
     * @since 23 static
     */
    MAGNETIC_FIELD_UNCALIBRATED = 261,

    /**
     * 未校准陀螺仪传感器类型，用于测量未校准的设备旋转角速度及其偏量。
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 9 dynamic
     * @since 23 static
     */
    GYROSCOPE_UNCALIBRATED = 263,

    /**
     * 有效运动传感器类型，用于检测设备是否存在大幅度运动。
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 9 dynamic
     * @since 23 static
     */
    SIGNIFICANT_MOTION = 264,

    /**
     * 计步检测传感器类型，用于检测用户的计步动作。
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 9 dynamic
     * @since 23 static
     */
    PEDOMETER_DETECTION = 265,

    /**
     * 计步传感器类型，用于统计用户的行走步数。
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 9 dynamic
     * @since 23 static
     */
    PEDOMETER = 266,

    /**
     * 心率传感器类型，用于测量用户的心率数值。
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 9 dynamic
     * @since 23 static
     */
    HEART_RATE = 278,

    /**
     * 佩戴检测传感器类型，用于检测设备是否被佩戴。
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 9 dynamic
     * @since 23 static
     */
    WEAR_DETECTION = 280,

    /**
     * 未校准加速度传感器类型，用于测量未校准的设备加速度及其偏量。
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 9 dynamic
     * @since 23 static
     */
    ACCELEROMETER_UNCALIBRATED = 281,

    /**
     * 融合压力传感器类型，用于测量融合压力值。仅智能表有该传感器。
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
   * Unsubscribe to ambient temperature sensor data， {@code SensorId.AMBIENT_TEMPERATURE}.
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
   * 订阅颜色传感器数据变化。通过回调函数异步上报颜色传感器数据，数据格式为ColorResponse对象，包含lightIntensity（光照强度）和colorTemperature（色温）两个number类型字段。
   * <br>当开发者需要获取环境光照强度和色温信息以实现屏幕自动亮度调节、拍照色温补偿、环境光线监测等功能时，使用此接口。
   * <br>该接口为异步回调方式，传感器数据变化时通过callback回调上报，无Promise返回值。
   *
   * @param { SensorId.COLOR } type - 传感器类型，该值固定为SensorId.COLOR。
   * @param { Callback<ColorResponse> } callback - 回调函数，异步上报的传感器数据固定为ColorResponse。
   * @param { Options } [options] - 可选参数列表，用于设置传感器上报频率。默认值：200000000ns。不传入时使用默认频率。
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
   * 订阅吸收比率传感器数据变化。通过回调函数异步上报SAR传感器数据，数据格式为SarResponse对象，包含absorptionRatio（吸收率）一个number类型字段。
   * <br>当开发者需要监测设备电磁波吸收率以实现通信安全监测、辐射检测等功能时，使用此接口。
   * <br>该接口为异步回调方式，传感器数据变化时通过callback回调上报，无Promise返回值。
   *
   * @param { SensorId.SAR } type - 传感器类型，该值固定为SensorId.SAR。
   * @param { Callback<SarResponse> } callback - 回调函数，异步上报的传感器数据固定为SarResponse。
   * @param { Options } [options] - 可选参数列表，用于设置传感器上报频率。默认值：200000000ns。不传入时使用默认频率。
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
   * 订阅加速度传感器数据。加速度传感器用于测量设备在X、Y、Z三个方向上的加速度，包含重力加速度分量。适用于需要感知设备运动状态、实现屏幕旋转、游戏操控、计步等场景。
   * 调用后，系统会按设定频率通过callback持续上报加速度数据。
   *
   * @permission ohos.permission.ACCELEROMETER
   * @param { SensorId.ACCELEROMETER } type - 传感器类型，该值固定为SensorId.ACCELEROMETER。
   * @param { Callback<AccelerometerResponse> } callback - 回调函数，异步上报的传感器数据固定为AccelerometerResponse。
   * @param { Options } [options] - 可选参数列表，用于设置传感器上报频率，默认值为200000000ns（即200ms）。
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
   * 订阅未校准加速度传感器数据。未校准加速度传感器与加速度传感器的区别在于，其上报的偏移值(biasX/biasY/biasZ)未经系统校准补偿，适用于需要获取原始加速度数据或自行实现校准算法的场景。
   * 与sensor.on('SensorId.ACCELEROMETER')相比，本接口额外提供偏移值信息，适用于需要分析设备校准偏差的场景。
   *
   * @permission ohos.permission.ACCELEROMETER
   * @param { SensorId.ACCELEROMETER_UNCALIBRATED } type - 传感器类型，该值固定为SensorId.ACCELEROMETER_UNCALIBRATED。
   * @param { Callback<AccelerometerUncalibratedResponse> } callback - 回调函数，异步上报的传感器数据固定为AccelerometerUncalibratedResponse。
   * @param { Options } [options] - 可选参数列表，用于设置传感器上报频率，默认值为200000000ns（即200ms）。
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
   * 订阅环境光传感器数据。环境光传感器用于测量周围环境的光照强度，适用于自动调节屏幕亮度、判断环境明暗等场景。调用后，系统会按设定频率通过callback持续上报环境光强度数据。
   *
   * @param { SensorId.AMBIENT_LIGHT } type - 传感器类型，该值固定为SensorId.AMBIENT_LIGHT。
   * @param { Callback<LightResponse> } callback - 回调函数，异步上报的传感器数据固定为LightResponse。
   * @param { Options } [options] - 可选参数列表，用于设置传感器上报频率，默认值为200000000ns（即200ms）。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   */
  function on(type: SensorId.AMBIENT_LIGHT, callback: Callback<LightResponse>, options?: Options): void;

  /**
   * 订阅环境温度传感器数据。温度传感器用于测量设备周围的环境温度，适用于环境温度监测、温度补偿等场景。调用后，系统会按设定频率通过callback持续上报温度数据。
   *
   * @param { SensorId.AMBIENT_TEMPERATURE } type - 传感器类型，该值固定为SensorId.AMBIENT_TEMPERATURE。
   * @param { Callback<AmbientTemperatureResponse> } callback - 回调函数，异步上报的传感器数据固定为AmbientTemperatureResponse。
   * @param { Options } [options] - 可选参数列表，用于设置传感器上报频率，默认值为200000000ns（即200ms）。
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
   * 订阅气压计传感器数据。气压计传感器用于测量大气压强，适用于海拔估算、天气预报辅助等场景。调用后，系统会按设定频率通过callback持续上报气压数据。
   *
   * @param { SensorId.BAROMETER } type - 传感器类型，该值固定为SensorId.BAROMETER。
   * @param { Callback<BarometerResponse> } callback - 回调函数，异步上报的传感器数据固定为BarometerResponse。
   * @param { Options } [options] - 可选参数列表，用于设置传感器上报频率，默认值为200000000ns（即200ms）。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   */
  function on(type: SensorId.BAROMETER, callback: Callback<BarometerResponse>, options?: Options): void;

  /**
   * 订阅重力传感器数据。重力传感器用于测量设备在X、Y、Z三个方向上受到的重力加速度分量，适用于需要分离重力分量进行运动分析的场景，如游戏操控、运动检测。
   * 调用后，系统会按设定频率通过callback持续上报重力分量数据。
   *
   * @param { SensorId.GRAVITY } type - 传感器类型，该值固定为SensorId.GRAVITY。
   * @param { Callback<GravityResponse> } callback - 回调函数，异步上报的传感器数据固定为GravityResponse。
   * @param { Options } [options] - 可选参数列表，用于设置传感器上报频率，默认值为200000000ns（即200ms）。
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
   * 订阅校准的陀螺仪传感器数据。陀螺仪传感器用于测量设备绕X、Y、Z轴的旋转角速度，适用于设备旋转检测、姿态跟踪、游戏操控等场景。调用后，系统会按设定频率通过callback持续上报角速度数据。
   *
   * @permission ohos.permission.GYROSCOPE
   * @param { SensorId.GYROSCOPE } type - 传感器类型，该值固定为SensorId.GYROSCOPE。
   * @param { Callback<GyroscopeResponse> } callback - 回调函数，异步上报的传感器数据固定为GyroscopeResponse。
   * @param { Options } [options] - 可选参数列表，用于设置传感器上报频率，默认值为200000000ns（即200ms）。
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
   * 订阅未校准陀螺仪传感器数据。未校准陀螺仪传感器与陀螺仪传感器的区别在于，其上报的偏移值(biasX/biasY/biasZ)未经系统校准补偿，适用于需要获取原始陀螺仪数据或自行实现校准算法的场景。
   * 与sensor.on('SensorId.GYROSCOPE')相比，本接口额外提供偏移值信息，适用于需要分析设备陀螺仪校准偏差的场景。
   *
   * @permission ohos.permission.GYROSCOPE
   * @param { SensorId.GYROSCOPE_UNCALIBRATED } type - 传感器类型，该值固定为SensorId.GYROSCOPE_UNCALIBRATED。
   * @param { Callback<GyroscopeUncalibratedResponse> } callback - 回调函数，异步上报的传感器数据固定为GyroscopeUncalibratedResponse。
   * @param { Options } [options] - 可选参数列表，用于设置传感器上报频率，默认值为200000000ns（即200ms）。
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
   * 订阅霍尔传感器数据。霍尔传感器用于检测磁场变化，常用于检测翻盖手机或皮套的开合状态。当霍尔事件被触发得较为频繁时，可通过options参数限定事件上报频率。
   * 调用后，系统会通过callback持续上报霍尔状态数据。
   *
   * @param { SensorId.HALL } type - 传感器类型，该值固定为SensorId.HALL。
   * @param { Callback<HallResponse> } callback - 回调函数，异步上报的传感器数据固定为HallResponse。
   * @param { Options } [options] - 可选参数列表，当霍尔事件被触发的很频繁时，用于设置传感器上报频率，默认值为200000000ns（即200ms）。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   */
  function on(type: SensorId.HALL, callback: Callback<HallResponse>, options?: Options): void;

  /**
   * 订阅心率传感器数据。心率传感器用于测量用户的心率值，适用于健康监测、运动辅助等场景。调用后，系统会按设定频率通过callback持续上报心率数据。
   *
   * @permission ohos.permission.READ_HEALTH_DATA
   * @param { SensorId.HEART_RATE } type - 传感器类型，该值固定为SensorId.HEART_RATE。
   * @param { Callback<HeartRateResponse> } callback - 回调函数，异步上报的传感器数据固定为HeartRateResponse。
   * @param { Options } [options] - 可选参数列表，用于设置传感器上报频率，默认值为200000000ns（即200ms）。
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
   * 订阅湿度传感器数据。湿度传感器用于测量周围环境的相对湿度，适用于环境湿度监测、智能家居联动等场景。调用后，系统会按设定频率通过callback持续上报湿度数据。
   *
   * @param { SensorId.HUMIDITY } type - 传感器类型，该值固定为SensorId.HUMIDITY。
   * @param { Callback<HumidityResponse> } callback - 回调函数，异步上报的传感器数据固定为HumidityResponse。
   * @param { Options } [options] - 可选参数列表，用于设置传感器上报频率，默认值为200000000ns（即200ms）。
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
   * 订阅线性加速度传感器数据。线性加速度传感器用于测量设备在X、Y、Z三个方向上的加速度（不含重力加速度分量），适用于需要感知设备纯粹运动加速度的场景，如运动追踪、碰撞检测。
   * 与sensor.on('SensorId.ACCELEROMETER')相比，本接口已去除重力分量，适用于仅需设备运动加速度的场景。
   *
   * @permission ohos.permission.ACCELEROMETER
   * @param { SensorId.LINEAR_ACCELEROMETER } type - 传感器类型，该值固定为SensorId.LINEAR_ACCELEROMETER。
   * @param { Callback<LinearAccelerometerResponse> } callback - 回调函数，异步上报的传感器数据固定为LinearAccelerometerResponse。
   * @param { Options } [options] - 可选参数列表，用于设置传感器上报频率，默认值为200000000ns（即200ms）。
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
   * 订阅地磁传感器数据。地磁传感器用于测量设备周围的磁场强度在X、Y、Z三个方向上的分量，适用于指南针、方向检测、金属检测等场景。调用后，系统会按设定频率通过callback持续上报磁场分量数据。
   *
   * @param { SensorId.MAGNETIC_FIELD } type - 传感器类型，该值固定为SensorId.MAGNETIC_FIELD。
   * @param { Callback<MagneticFieldResponse> } callback - 回调函数，异步上报的传感器数据固定为MagneticFieldResponse。
   * @param { Options } [options] - 可选参数列表，用于设置传感器上报频率，默认值为200000000ns（即200ms）。
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
   * 订阅未校准地磁传感器数据。未校准地磁传感器与地磁传感器的区别在于，其上报的偏移值(biasX/biasY/biasZ)未经系统校准补偿，适用于需要获取原始磁场数据或自行实现校准算法的场景。
   * 与sensor.on('SensorId.MAGNETIC_FIELD')相比，本接口额外提供偏移值信息，适用于需要分析设备地磁校准偏差的场景。
   *
   * @param { SensorId.MAGNETIC_FIELD_UNCALIBRATED } type - 传感器类型，该值固定为SensorId.MAGNETIC_FIELD_UNCALIBRATED。
   * @param { Callback<MagneticFieldUncalibratedResponse> } callback - 回调函数，异步上报的传感器数据固定为MagneticFieldUncalibratedResponse。
   * @param { Options } [options] - 可选参数列表，用于设置传感器上报频率，默认值为200000000ns（即200ms）。
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
   * 订阅方向传感器数据。方向传感器用于测量设备绕Z轴旋转的角度(alpha)、绕X轴旋转的角度(beta)和绕Y轴旋转的角度(gamma)，适用于屏幕旋转、指南针、姿态感知等场景。
   * 调用后，系统会按设定频率通过callback持续上报方向数据。调用本接口的应用或服务可以通过提示用户使用8字校准法来提高应用获取的方向传感器的精度，此传感器理论误差正负5度，具体的精度根据不同的驱动及算法实现可能存在差异。
   * 
   * > **说明**：
   * >
   * > 调用本接口的应用或服务可以通过提示用户使用8字校准法来提高应用获取的方向传感器的精度，此传感器理论误差正负5度，具体的精度根据不同的驱动及算法实现可能存在差异。
   *
   * @param { SensorId.ORIENTATION } type - 传感器类型，该值固定为SensorId.ORIENTATION。
   * @param { Callback<OrientationResponse> } callback - 回调函数，异步上报的传感器数据固定为OrientationResponse。
   * @param { Options } [options] - 可选参数列表，用于设置传感器上报频率，默认值为200000000ns（即200ms）。
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
   * 订阅计步器传感器数据。计步器传感器用于统计用户的步行步数，适用于运动追踪、健康管理等场景。计步传感器数据上报有一定延迟，延迟时间由具体的实现产品决定。调用后，系统会按设定频率通过callback持续上报步数数据。
   *
   * > **说明**：
   * >
   * > 计步器传感器数据仅在设备重启时清零，不会每天清零，重启前上报的步数数据为累加值。
   *
   * @permission ohos.permission.ACTIVITY_MOTION
   * @param { SensorId.PEDOMETER } type - 传感器类型，该值固定为SensorId.PEDOMETER。
   * @param { Callback<PedometerResponse> } callback - 回调函数，异步上报的传感器数据固定为PedometerResponse。
   * @param { Options } [options] - 可选参数列表，用于设置传感器上报频率，默认值为200000000ns（即200ms）。
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
   * 订阅计步检测器传感器数据。计步检测器传感器用于检测用户是否发生了计步事件（如迈步动作），适用于需要实时检测步行状态的场景。与sensor.on('SensorId.PEDOMETER')相比，本接口上报的是计步事件标量而非累计步数，
   * 适用于需要检测单步事件的场景。
   *
   * @permission ohos.permission.ACTIVITY_MOTION
   * @param { SensorId.PEDOMETER_DETECTION } type - 传感器类型，该值固定为SensorId.PEDOMETER_DETECTION。
   * @param { Callback<PedometerDetectionResponse> } callback - 回调函数，异步上报的传感器数据固定为PedometerDetectionResponse。
   * @param { Options } [options] - 可选参数列表，用于设置传感器上报频率，默认值为200000000ns（即200ms）。
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
   * 订阅接近光传感器数据。接近光传感器用于检测物体与设备的距离状态，常用于通话时自动关闭屏幕以防止误触。当接近光事件被触发得较为频繁时，可通过options参数限定事件上报频率。
   * 调用后，系统会通过callback持续上报接近状态数据。
   *
   * @param { SensorId.PROXIMITY } type - 传感器类型，该值固定为SensorId.PROXIMITY。
   * @param { Callback<ProximityResponse> } callback - 回调函数，异步上报的传感器数据固定为ProximityResponse。
   * @param { Options } [options] - 可选参数列表，用于设置传感器上报频率，默认值为200000000ns（即200ms）。当接近光事件被触发的很频繁时，该参数用于限定事件上报的频率。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   */
  function on(type: SensorId.PROXIMITY, callback: Callback<ProximityResponse>, options?: Options): void;

  /**
   * 订阅旋转矢量传感器数据。旋转矢量传感器用于表示设备的姿态旋转，数据由X、Y、Z分量和标量W组成，可用于设备姿态估计、AR/VR场景等。调用后，系统会按设定频率通过callback持续上报旋转矢量数据。
   *
   * @param { SensorId.ROTATION_VECTOR } type - 传感器类型，该值固定为SensorId.ROTATION_VECTOR。
   * @param { Callback<RotationVectorResponse> } callback - 回调函数，异步上报的传感器数据固定为RotationVectorResponse。
   * @param { Options } [options] - 可选参数列表，用于设置传感器上报频率，默认值为200000000ns（即200ms）。
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
   * 订阅有效运动传感器数据，用于检测用户拿起设备、明显移动或剧烈摇晃等有效运动事件。适用于需要根据用户活动状态唤醒设备、启动应用或切换模式的场景。调用后，系统会通过callback持续上报有效运动事件数据。
   *
   * @param { SensorId.SIGNIFICANT_MOTION } type - 传感器类型，该值固定为SensorId.SIGNIFICANT_MOTION。
   * @param { Callback<SignificantMotionResponse> } callback - 回调函数，异步上报的传感器数据固定为SignificantMotionResponse。
   * @param { Options } [options] - 可选参数列表，用于设置传感器上报频率，默认值为200000000ns（即200ms）。
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
   * 订阅佩戴检测传感器数据。佩戴检测传感器用于检测设备是否被用户佩戴，适用于智能手表等可穿戴设备的佩戴状态检测，以便自动切换工作模式。调用后，系统会按设定频率通过callback持续上报佩戴状态数据。
   *
   * @param { SensorId.WEAR_DETECTION } type - 传感器类型，该值固定为SensorId.WEAR_DETECTION。
   * @param { Callback<WearDetectionResponse> } callback - 回调函数，异步上报的传感器数据固定为WearDetectionResponse。
   * @param { Options } [options] - 可选参数列表，用于设置传感器上报频率，默认值为200000000ns（即200ms）。
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
   * 订阅融合压力传感器数据。融合压力传感器用于获取经融合算法处理的压力数据，仅适用于智能手表设备。适用于需要获取手腕压力数据的健康监测场景。调用后，系统会按设定频率通过callback持续上报融合压力数据。
   *
   * @param { SensorId.FUSION_PRESSURE } type - 传感器类型，该值固定为SensorId.FUSION_PRESSURE。
   * @param { Callback<FusionPressureResponse> } callback - 回调函数，异步上报的传感器数据固定为FusionPressureResponse。
   * @param { Options } [options] - 可选参数列表，用于设置传感器上报频率，默认值为200000000ns（即200ms）。
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
   * 获取一次加速度传感器数据。适用于无需持续监听、仅需一次性获取当前加速度数据的场景。调用后，callback仅触发一次，自动取消订阅。
   *
   * @permission ohos.permission.ACCELEROMETER
   * @param { SensorId.ACCELEROMETER } type - 传感器类型，该值固定为SensorId.ACCELEROMETER。
   * @param { Callback<AccelerometerResponse> } callback - 回调函数，异步上报的传感器数据固定为AccelerometerResponse。
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
   * 获取一次未校准加速度传感器数据。适用于仅需一次性获取原始加速度及偏移数据的场景。调用后，callback仅触发一次，自动取消订阅。
   *
   * @permission ohos.permission.ACCELEROMETER
   * @param { SensorId.ACCELEROMETER_UNCALIBRATED } type - 传感器类型，该值固定为SensorId.ACCELEROMETER_UNCALIBRATED。
   * @param { Callback<AccelerometerUncalibratedResponse> } callback - 回调函数，异步上报的传感器数据固定为AccelerometerUncalibratedResponse。
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
   * 获取一次环境光传感器数据。适用于仅需一次性获取当前环境光强度的场景。调用后，callback仅触发一次，自动取消订阅。
   *
   * @param { SensorId.AMBIENT_LIGHT } type - 传感器类型，该值固定为SensorId.AMBIENT_LIGHT。
   * @param { Callback<LightResponse> } callback - 回调函数，异步上报的传感器数据固定为LightResponse。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   */
  function once(type: SensorId.AMBIENT_LIGHT, callback: Callback<LightResponse>): void;

  /**
   * 获取一次温度传感器数据。适用于仅需一次性获取当前环境温度的场景。调用后，callback仅触发一次，自动取消订阅。
   *
   * @param { SensorId.AMBIENT_TEMPERATURE } type - 传感器类型，该值固定为SensorId.AMBIENT_TEMPERATURE。
   * @param { Callback<AmbientTemperatureResponse> } callback - 回调函数，异步上报的传感器数据固定为AmbientTemperatureResponse。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   */
  function once(type: SensorId.AMBIENT_TEMPERATURE, callback: Callback<AmbientTemperatureResponse>): void;

  /**
   * 获取一次气压计传感器数据。适用于仅需一次性获取当前气压值的场景。调用后，callback仅触发一次，自动取消订阅。
   *
   * @param { SensorId.BAROMETER } type - 传感器类型，该值固定为SensorId.BAROMETER。
   * @param { Callback<BarometerResponse> } callback - 回调函数，异步上报的传感器数据固定为BarometerResponse。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   */
  function once(type: SensorId.BAROMETER, callback: Callback<BarometerResponse>): void;

  /**
   * 获取一次重力传感器数据。适用于仅需一次性获取当前重力分量的场景。调用后，callback仅触发一次，自动取消订阅。
   *
   * @param { SensorId.GRAVITY } type - 传感器类型，该值固定为SensorId.GRAVITY。
   * @param { Callback<GravityResponse> } callback - 回调函数，异步上报的传感器数据固定为GravityResponse。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   */
  function once(type: SensorId.GRAVITY, callback: Callback<GravityResponse>): void;

  /**
   * 获取一次陀螺仪传感器数据。适用于仅需一次性获取当前旋转角速度的场景。调用后，callback仅触发一次，自动取消订阅。
   *
   * @permission ohos.permission.GYROSCOPE
   * @param { SensorId.GYROSCOPE } type - 传感器类型，该值固定为SensorId.GYROSCOPE。
   * @param { Callback<GyroscopeResponse> } callback - 回调函数，异步上报的传感器数据固定为GyroscopeResponse。
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
   * 获取一次未校准陀螺仪传感器数据。适用于仅需一次性获取原始角速度及偏移数据的场景。调用后，callback仅触发一次，自动取消订阅。
   *
   * @permission ohos.permission.GYROSCOPE
   * @param { SensorId.GYROSCOPE_UNCALIBRATED } type - 传感器类型，该值固定为SensorId.GYROSCOPE_UNCALIBRATED。
   * @param { Callback<GyroscopeUncalibratedResponse> } callback - 回调函数，异步上报的传感器数据固定为GyroscopeUncalibratedResponse。
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
   * 获取一次霍尔传感器数据。适用于仅需一次性检测当前霍尔状态的场景。调用后，callback仅触发一次，自动取消订阅。
   *
   * @param { SensorId.HALL } type - 传感器类型，该值固定为SensorId.HALL。
   * @param { Callback<HallResponse> } callback - 回调函数，异步上报的传感器数据固定为HallResponse。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   */
  function once(type: SensorId.HALL, callback: Callback<HallResponse>): void;

  /**
   * 获取一次心率传感器数据。适用于仅需一次性获取当前心率值的场景。调用后，callback仅触发一次，自动取消订阅。
   *
   * @permission ohos.permission.READ_HEALTH_DATA
   * @param { SensorId.HEART_RATE } type - 传感器类型，该值固定为SensorId.HEART_RATE。
   * @param { Callback<HeartRateResponse> } callback - 回调函数，异步上报的传感器数据固定为HeartRateResponse。
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
   * 获取一次湿度传感器数据。适用于仅需一次性获取当前环境湿度的场景。调用后，callback仅触发一次，自动取消订阅。
   *
   * @param { SensorId.HUMIDITY } type - 传感器类型，该值固定为SensorId.HUMIDITY。
   * @param { Callback<HumidityResponse> } callback - 回调函数，异步上报的传感器数据固定为HumidityResponse。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   */
  function once(type: SensorId.HUMIDITY, callback: Callback<HumidityResponse>): void;

  /**
   * 获取一次线性加速度传感器数据。适用于仅需一次性获取当前线性加速度（不含重力分量）的场景。调用后，callback仅触发一次，自动取消订阅。
   *
   * @permission ohos.permission.ACCELEROMETER
   * @param { SensorId.LINEAR_ACCELEROMETER } type - 传感器类型，该值固定为SensorId.LINEAR_ACCELEROMETER。
   * @param { Callback<LinearAccelerometerResponse> } callback - 回调函数，异步上报的传感器数据固定为LinearAccelerometerResponse。
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
   * 获取一次磁场传感器数据。适用于仅需一次性获取当前磁场分量的场景。调用后，callback仅触发一次，自动取消订阅。
   *
   * @param { SensorId.MAGNETIC_FIELD } type - 传感器类型，该值固定为SensorId.MAGNETIC_FIELD。
   * @param { Callback<MagneticFieldResponse> } callback - 回调函数，异步上报的传感器数据固定为MagneticFieldResponse。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   */
  function once(type: SensorId.MAGNETIC_FIELD, callback: Callback<MagneticFieldResponse>): void;

  /**
   * 获取一次未经校准的磁场传感器数据。适用于仅需一次性获取原始磁场及偏移数据的场景。调用后，callback仅触发一次，自动取消订阅。
   *
   * @param { SensorId.MAGNETIC_FIELD_UNCALIBRATED } type - 传感器类型，该值固定为SensorId.MAGNETIC_FIELD_UNCALIBRATED。
   * @param { Callback<MagneticFieldUncalibratedResponse> } callback - 回调函数，异步上报的传感器数据固定为MagneticFieldUncalibratedResponse。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   */
  function once(type: SensorId.MAGNETIC_FIELD_UNCALIBRATED, callback: Callback<MagneticFieldUncalibratedResponse>): void;

  /**
   * 获取一次方向传感器数据。适用于仅需一次性获取当前设备方向的场景。调用后，callback仅触发一次，自动取消订阅。
   *
   * @param { SensorId.ORIENTATION } type - 传感器类型，该值固定为SensorId.ORIENTATION。
   * @param { Callback<OrientationResponse> } callback - 回调函数，异步上报的传感器数据固定为OrientationResponse。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   */
  function once(type: SensorId.ORIENTATION, callback: Callback<OrientationResponse>): void;

  /**
   * 获取一次计步器传感器数据。计步传感器数据上报有一定延迟，延迟时间由具体的实现产品决定。适用于仅需一次性获取当前步数的场景。调用后，callback仅触发一次，自动取消订阅。
   *
   * > **说明**：
   * >
   * > 计步器传感器数据仅在设备重启时清零，不会每天清零，重启前上报的步数数据为累加值。
   *
   * @permission ohos.permission.ACTIVITY_MOTION
   * @param { SensorId.PEDOMETER } type - Sensor type. 传感器类型，该值固定为SensorId.PEDOMETER。
   * @param { Callback<PedometerResponse> } callback - 回调函数，异步上报的传感器数据固定为PedometerResponse。
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
   * 获取一次计步检测器传感器数据。适用于仅需一次性检测计步事件的场景。调用后，callback仅触发一次，自动取消订阅。
   *
   * @permission ohos.permission.ACTIVITY_MOTION
   * @param { SensorId.PEDOMETER_DETECTION } type - 传感器类型，该值固定为SensorId.PEDOMETER_DETECTION。
   * @param { Callback<PedometerDetectionResponse> } callback - 回调函数，异步上报的传感器数据固定为PedometerDetectionResponse。
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
   * 获取一次接近光传感器数据。适用于仅需一次性检测当前接近状态的场景。调用后，callback仅触发一次，自动取消订阅。
   *
   * @param { SensorId.PROXIMITY } type - 传感器类型，该值固定为SensorId.PROXIMITY。
   * @param { Callback<ProximityResponse> } callback - 回调函数，异步上报的传感器数据固定为ProximityResponse。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   */
  function once(type: SensorId.PROXIMITY, callback: Callback<ProximityResponse>): void;

  /**
   * 获取一次旋转矢量传感器数据。适用于仅需一次性获取当前设备姿态的场景。调用后，callback仅触发一次，自动取消订阅。
   *
   * @param { SensorId.ROTATION_VECTOR } type - 传感器类型，该值固定为SensorId.ROTATION_VECTOR。
   * @param { Callback<RotationVectorResponse> } callback - 回调函数，异步上报的传感器数据固定为RotationVectorResponse。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   */
  function once(type: SensorId.ROTATION_VECTOR, callback: Callback<RotationVectorResponse>): void;

  /**
   * 获取一次有效运动传感器数据。适用于仅需一次性检测有效运动的场景。调用后，callback仅触发一次，自动取消订阅。
   *
   * @param { SensorId.SIGNIFICANT_MOTION } type - 传感器类型，该值固定为SensorId.SIGNIFICANT_MOTION。
   * @param { Callback<SignificantMotionResponse> } callback - 回调函数，异步上报的传感器数据固定为SignificantMotionResponse。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   */
  function once(type: SensorId.SIGNIFICANT_MOTION, callback: Callback<SignificantMotionResponse>): void;

  /**
   * 获取一次佩戴检测传感器数据。适用于仅需一次性检测佩戴状态的场景。调用后，callback仅触发一次，自动取消订阅。
   *
   * @param { SensorId.WEAR_DETECTION } type - 传感器类型，该值固定为SensorId.WEAR_DETECTION。
   * @param { Callback<WearDetectionResponse> } callback - 回调函数，异步上报的传感器数据固定为WearDetectionResponse。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   */
  function once(type: SensorId.WEAR_DETECTION, callback: Callback<WearDetectionResponse>): void;

  /**
   * 取消订阅颜色传感器数据。调用后，颜色传感器的回调函数将不再触发。
   * <br>当开发者不再需要颜色传感器数据时（如页面切换、应用退出），使用此接口取消订阅，以减少系统资源占用。
   * <br>调用此接口后，之前通过sensor.on(sensor.SensorId.COLOR)注册的回调函数将不再被触发。若传入callback参数，仅取消该指定回调函数的订阅；若不传入callback参数，则取消当前SensorId.COLOR类型的所有回调函数。
   * 需先调用sensor.on(sensor.SensorId.COLOR)订阅后，再调用此接口取消订阅。
   *
   * @param { SensorId.COLOR } type - 传感器类型，该值固定为SensorId.COLOR。
   * @param { Callback<ColorResponse> } callback - 回调函数，需要取消订阅的回调函数，若无此参数，则取消订阅当前类型的所有回调函数。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 202 - Permission check failed. A non-system application uses the system API. [since 11]
   * @syscap SystemCapability.Sensors.Sensor
   * @systemapi
   * @since 10 dynamic
   */
  function off(type: SensorId.COLOR, callback?: Callback<ColorResponse>): void;

  /**
   * 取消订阅颜色传感器数据。与API version 10的off接口相比，新增sensorInfoParam参数，支持通过指定deviceId和sensorIndex来精确取消订阅某一设备上的特定传感器回调，适用于多设备场景。
   * <br>当开发者需要取消订阅特定设备上的颜色传感器数据时（如多设备连接场景），使用此接口。不传入sensorInfoParam时，默认取消本地设备（deviceId为-1）上的回调。
   * <br>调用此接口后，指定设备上的颜色传感器回调函数将不再被触发。若传入callback参数，仅取消该指定回调函数的订阅；若不传入callback参数，则取消指定设备上SensorId.COLOR类型的所有回调函数。
   *
   * @param { SensorId.COLOR } type - 传感器类型，该值固定为SensorId.COLOR
   * @param { SensorInfoParam } [sensorInfoParam] - 传感器传入设置参数，可指定deviceId和sensorIndex。默认值：deviceId为-1（本地设备），sensorIndex为0（默认传感器）。
   *     不传入时默认取消本地设备上的回调。
   * @param { Callback<ColorResponse> } [callback] - 回调函数，需要取消订阅的回调函数，若无此参数，则取消订阅指定设备上当前类型的所有回调函数。
   * @throws { BusinessError } 202 - Permission check failed. A non-system application uses the system API.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @systemapi
   * @since 19 dynamic
   */
  function off(type: SensorId.COLOR, sensorInfoParam?: SensorInfoParam, callback?: Callback<ColorResponse>): void;

  /**
   * 取消订阅吸收比率传感器数据。调用后，SAR传感器的回调函数将不再触发。
   * <br>当开发者不再需要SAR传感器数据时（如页面切换、应用退出），使用此接口取消订阅，以减少系统资源占用。
   * <br>调用此接口后，之前通过sensor.on(sensor.SensorId.SAR)注册的回调函数将不再被触发。若传入callback参数，仅取消该指定回调函数的订阅；若不传入callback参数，则取消当前SensorId.SAR类型的所有回调函数。
   * 需先调用sensor.on(sensor.SensorId.SAR)订阅后，再调用此接口取消订阅。
   *
   * @param { SensorId.SAR } type - 传感器类型，该值固定为SensorId.SAR。
   * @param { Callback<SarResponse> } callback - 回调函数，需要取消订阅的回调函数，若无此参数，则取消订阅当前类型的所有回调函数。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 202 - Permission check failed. A non-system application uses the system API. [since 11]
   * @syscap SystemCapability.Sensors.Sensor
   * @systemapi
   * @since 10 dynamic
   */
  function off(type: SensorId.SAR, callback?: Callback<SarResponse>): void;

  /**
   * 取消订阅吸收比率传感器数据。与API version 10的off接口相比，新增sensorInfoParam参数，支持通过指定deviceId和sensorIndex来精确取消订阅某一设备上的特定传感器回调，适用于多设备场景。
   * <br>当开发者需要取消订阅特定设备上的SAR传感器数据时（如多设备连接场景），使用此接口。不传入sensorInfoParam时，默认取消本地设备（deviceId为-1）上的回调。
   * <br>调用此接口后，指定设备上的SAR传感器回调函数将不再被触发。若传入callback参数，仅取消该指定回调函数的订阅；若不传入callback参数，则取消指定设备上SensorId.SAR类型的所有回调函数。
   *
   * @param { SensorId.SAR } type - 传感器类型，该值固定为SensorId.SAR。
   * @param { SensorInfoParam } [sensorInfoParam] - 传感器传入设置参数，可指定deviceId和sensorIndex。默认值：deviceId为-1（本地设备），sensorIndex为0（默认传感器）。
   *     不传入时默认取消本地设备上的回调。
   * @param { Callback<SarResponse> } [callback] - 回调函数，需要取消订阅的回调函数，若无此参数，则取消订阅指定设备上当前类型的所有回调函数。
   * @throws { BusinessError } 202 - Permission check failed. A non-system application uses the system API.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @systemapi
   * @since 19 dynamic
   */
  function off(type: SensorId.SAR, sensorInfoParam?: SensorInfoParam, callback?: Callback<SarResponse>): void;

  /**
   * 取消订阅加速度传感器数据。当不再需要接收加速度传感器数据时调用此接口取消订阅。off取消订阅必须与on订阅成对出现。
   *
   * @permission ohos.permission.ACCELEROMETER
   * @param { SensorId.ACCELEROMETER } type - 传感器类型，该值固定为SensorId.ACCELEROMETER。
   * @param { Callback<AccelerometerResponse> } callback - 回调函数，需要取消订阅的回调函数，若无此参数，则取消订阅当前类型的所有回调函数。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Sensors.Sensor
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  function off(type: SensorId.ACCELEROMETER, callback?: Callback<AccelerometerResponse>): void;

  /**
   * 取消订阅加速度传感器数据。当不再需要接收加速度传感器数据时调用此接口取消订阅。off取消订阅必须与on订阅成对出现。
   *
   * @permission ohos.permission.ACCELEROMETER
   * @param { SensorId.ACCELEROMETER } type - 传感器类型，该值固定为SensorId.ACCELEROMETER。
   * @param { SensorInfoParam } [sensorInfoParam] - 传感器传入设置参数，可指定deviceId和sensorIndex，用于取消指定设备上指定传感器的订阅。不传入时默认取消本地设备该类型所有传感器的订阅。
   * @param { Callback<AccelerometerResponse> } [callback] - 回调函数，需要取消订阅的回调函数，若无此参数，则取消订阅当前类型的所有回调函数。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @atomicservice
   * @since 19 dynamic
   */
  function off(type: SensorId.ACCELEROMETER, sensorInfoParam?: SensorInfoParam, callback?: Callback<AccelerometerResponse>): void;

  /**
   * 取消订阅未校准加速度传感器数据。当不再需要接收未校准加速度传感器数据时调用此接口取消订阅。off取消订阅必须与on订阅成对出现。
   *
   * @permission ohos.permission.ACCELEROMETER
   * @param { SensorId.ACCELEROMETER_UNCALIBRATED } type - 传感器类型，该值固定为SensorId.ACCELEROMETER_UNCALIBRATED。
   * @param { Callback<AccelerometerUncalibratedResponse> } callback - 回调函数，需要取消订阅的回调函数，若无此参数，则取消订阅当前类型的所有回调函数。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   */
  function off(type: SensorId.ACCELEROMETER_UNCALIBRATED, callback?: Callback<AccelerometerUncalibratedResponse>): void;

  /**
   * 取消订阅未校准加速度传感器数据。当不再需要接收未校准加速度传感器数据时调用此接口取消订阅。off取消订阅必须与on订阅成对出现。
   *
   * @permission ohos.permission.ACCELEROMETER
   * @param { SensorId.ACCELEROMETER_UNCALIBRATED } type - 传感器类型，该值固定为SensorId.ACCELEROMETER_UNCALIBRATED。
   * @param { SensorInfoParam } [sensorInfoParam] - 传感器传入设置参数，可指定deviceId和sensorIndex，用于取消指定设备上指定传感器的订阅。不传入时默认取消本地设备该类型所有传感器的订阅。
   * @param { Callback<AccelerometerUncalibratedResponse> } [callback] - 回调函数，需要取消订阅的回调函数，若无此参数，则取消订阅当前类型的所有回调函数。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 19 dynamic
   */
  function off(type: SensorId.ACCELEROMETER_UNCALIBRATED, sensorInfoParam?: SensorInfoParam, callback?: Callback<AccelerometerUncalibratedResponse>): void;

  /**
   * 取消订阅环境光传感器数据。当不再需要接收环境光传感器数据时调用此接口取消订阅。off取消订阅必须与on订阅成对出现。
   *
   * @param { SensorId.AMBIENT_LIGHT } type - 传感器类型，该值固定为SensorId.AMBIENT_LIGHT。
   * @param { Callback<LightResponse> } callback - 回调函数，需要取消订阅的回调函数，若无此参数，则取消订阅当前类型的所有回调函数。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   */
  function off(type: SensorId.AMBIENT_LIGHT, callback?: Callback<LightResponse>): void;

  /**
   * 取消订阅环境光传感器数据。当不再需要接收环境光传感器数据时调用此接口取消订阅。off取消订阅必须与on订阅成对出现。
   *
   * @param { SensorId.AMBIENT_LIGHT } type - 传感器类型，该值固定为SensorId.AMBIENT_LIGHT。
   * @param { SensorInfoParam } [sensorInfoParam] - 传感器传入设置参数，可指定deviceId和sensorIndex，用于取消指定设备上指定传感器的订阅。不传入时默认取消本地设备该类型所有传感器的订阅。
   * @param { Callback<LightResponse> } [callback] - 回调函数，需要取消订阅的回调函数，若无此参数，则取消订阅当前类型的所有回调函数。
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 19 dynamic
   */
  function off(type: SensorId.AMBIENT_LIGHT, sensorInfoParam?: SensorInfoParam, callback?: Callback<LightResponse>): void;

  /**
   * 取消订阅温度传感器数据。当不再需要接收温度传感器数据时调用此接口取消订阅。off取消订阅必须与on订阅成对出现。
   *
   * @param { SensorId.AMBIENT_TEMPERATURE } type - 传感器类型，该值固定为SensorId.AMBIENT_TEMPERATURE。
   * @param { Callback<AmbientTemperatureResponse> } callback - 回调函数，需要取消订阅的回调函数，若无此参数，则取消订阅当前类型的所有回调函数。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   */
  function off(type: SensorId.AMBIENT_TEMPERATURE, callback?: Callback<AmbientTemperatureResponse>): void;

  /**
   * 取消订阅温度传感器数据。当不再需要接收温度传感器数据时调用此接口取消订阅。off取消订阅必须与on订阅成对出现。
   *
   * @param { SensorId.AMBIENT_TEMPERATURE } type - 传感器类型，该值固定为SensorId.AMBIENT_TEMPERATURE。
   * @param { SensorInfoParam } [sensorInfoParam] - 传感器传入设置参数，可指定deviceId和sensorIndex，用于取消指定设备上指定传感器的订阅。不传入时默认取消本地设备该类型所有传感器的订阅。
   * @param { Callback<AmbientTemperatureResponse> } [callback] - 回调函数，需要取消订阅的回调函数，若无此参数，则取消订阅当前类型的所有回调函数。
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 19 dynamic
   */
  function off(type: SensorId.AMBIENT_TEMPERATURE, sensorInfoParam?: SensorInfoParam, callback?: Callback<AmbientTemperatureResponse>): void;

  /**
   * 取消订阅气压计传感器数据。当不再需要接收气压计传感器数据时调用此接口取消订阅。off取消订阅必须与on订阅成对出现。
   *
   * @param { SensorId.BAROMETER } type - 传感器类型，该值固定为SensorId.BAROMETER。
   * @param { Callback<BarometerResponse> } 回调函数，需要取消订阅的回调函数，若无此参数，则取消订阅当前类型的所有回调函数。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   */
  function off(type: SensorId.BAROMETER, callback?: Callback<BarometerResponse>): void;

  /**
   * 取消订阅气压计传感器数据。当不再需要接收气压计传感器数据时调用此接口取消订阅。off取消订阅必须与on订阅成对出现。
   *
   * @param { SensorId.BAROMETER } type - 传感器类型，该值固定为SensorId.BAROMETER。
   * @param { SensorInfoParam } [sensorInfoParam] - 传感器传入设置参数，可指定deviceId和sensorIndex，用于取消指定设备上指定传感器的订阅。不传入时默认取消本地设备该类型所有传感器的订阅。
   * @param { Callback<BarometerResponse> } [callback] - 回调函数，需要取消订阅的回调函数，若无此参数，则取消订阅当前类型的所有回调函数。
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 19 dynamic
   */
  function off(type: SensorId.BAROMETER, sensorInfoParam?: SensorInfoParam, callback?: Callback<BarometerResponse>): void;

  /**
   * 取消订阅重力传感器数据。当不再需要接收重力传感器数据时调用此接口取消订阅。off取消订阅必须与on订阅成对出现。
   *
   * @param { SensorId.GRAVITY } type - 传感器类型，该值固定为SensorId.GRAVITY。
   * @param { Callback<GravityResponse> } callback - 回调函数，需要取消订阅的回调函数，若无此参数，则取消订阅当前类型的所有回调函数。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   */
  function off(type: SensorId.GRAVITY, callback?: Callback<GravityResponse>): void;

  /**
   * 取消订阅重力传感器数据。当不再需要接收重力传感器数据时调用此接口取消订阅。off取消订阅必须与on订阅成对出现。
   *
   * @param { SensorId.GRAVITY } type - 传感器类型，该值固定为SensorId.GRAVITY。
   * @param { SensorInfoParam } [sensorInfoParam] - 传感器传入设置参数，可指定deviceId和sensorIndex，用于取消指定设备上指定传感器的订阅。不传入时默认取消本地设备该类型所有传感器的订阅。
   * @param { Callback<GravityResponse> } [callback] - 回调函数，需要取消订阅的回调函数，若无此参数，则取消订阅当前类型的所有回调函数。
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 19 dynamic
   */
  function off(type: SensorId.GRAVITY, sensorInfoParam?: SensorInfoParam, callback?: Callback<GravityResponse>): void;

  /**
   * 取消订阅陀螺仪传感器数据。当不再需要接收陀螺仪传感器数据时调用此接口取消订阅。off取消订阅必须与on订阅成对出现。
   *
   * @permission ohos.permission.GYROSCOPE
   * @param { SensorId.GYROSCOPE } type - 传感器类型，该值固定为SensorId.GYROSCOPE。
   * @param { Callback<GyroscopeResponse> } callback - 回调函数，需要取消订阅的回调函数，若无此参数，则取消订阅当前类型的所有回调函数。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Sensors.Sensor
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  function off(type: SensorId.GYROSCOPE, callback?: Callback<GyroscopeResponse>): void;

  /**
   * 取消订阅陀螺仪传感器数据。当不再需要接收陀螺仪传感器数据时调用此接口取消订阅。off取消订阅必须与on订阅成对出现。
   *
   * @permission ohos.permission.GYROSCOPE
   * @param { SensorId.GYROSCOPE } type - 传感器类型，该值固定为SensorId.GYROSCOPE。
   * @param { SensorInfoParam } [sensorInfoParam] - 传感器传入设置参数，可指定deviceId和sensorIndex，用于取消指定设备上指定传感器的订阅。不传入时默认取消本地设备该类型所有传感器的订阅。
   * @param { Callback<GyroscopeResponse> } [callback] - 回调函数，需要取消订阅的回调函数，若无此参数，则取消订阅当前类型的所有回调函数。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @atomicservice
   * @since 19 dynamic
   */
  function off(type: SensorId.GYROSCOPE, sensorInfoParam?: SensorInfoParam, callback?: Callback<GyroscopeResponse>): void;

  /**
   * 取消订阅未校准陀螺仪传感器数据。当不再需要接收未校准陀螺仪传感器数据时调用此接口取消订阅。off取消订阅必须与on订阅成对出现。
   *
   * @permission ohos.permission.GYROSCOPE
   * @param { SensorId.GYROSCOPE_UNCALIBRATED } type - 传感器类型，该值固定为SensorId.GYROSCOPE_UNCALIBRATED。
   * @param { Callback<GyroscopeUncalibratedResponse> } callback - 回调函数，需要取消订阅的回调函数，若无此参数，则取消订阅当前类型的所有回调函数。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   */
  function off(type: SensorId.GYROSCOPE_UNCALIBRATED, callback?: Callback<GyroscopeUncalibratedResponse>): void;

  /**
   * 取消订阅未校准陀螺仪传感器数据。
   *
   * @permission ohos.permission.GYROSCOPE
   * @param { SensorId.GYROSCOPE_UNCALIBRATED } type - 传感器类型，该值固定为SensorId.GYROSCOPE_UNCALIBRATED。
   * @param { SensorInfoParam } [sensorInfoParam] - 传感器传入设置参数，可指定deviceId和sensorIndex，用于取消指定设备上指定传感器的订阅。不传入时默认取消本地设备该类型所有传感器的订阅。
   * @param { Callback<GyroscopeUncalibratedResponse> } [callback] - 回调函数，需要取消订阅的回调函数，若无此参数，则取消订阅当前类型的所有回调函数。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 19 dynamic
   */
  function off(type: SensorId.GYROSCOPE_UNCALIBRATED, sensorInfoParam?: SensorInfoParam, callback?: Callback<GyroscopeUncalibratedResponse>): void;

  /**
   * 取消订阅霍尔传感器数据。当不再需要接收霍尔传感器数据时调用此接口取消订阅。off取消订阅必须与on订阅成对出现。
   *
   * @param { SensorId.HALL } type - 传感器类型，该值固定为SensorId.HALL。
   * @param { Callback<HallResponse> } callback - 回调函数，需要取消订阅的回调函数，若无此参数，则取消订阅当前类型的所有回调函数。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   */
  function off(type: SensorId.HALL, callback?: Callback<HallResponse>): void;

  /**
   * 取消订阅霍尔传感器数据。当不再需要接收霍尔传感器数据时调用此接口取消订阅。off取消订阅必须与on订阅成对出现。
   *
   * @param { SensorId.HALL } type - 传感器类型，该值固定为SensorId.HALL。
   * @param { SensorInfoParam } [sensorInfoParam] - 传感器传入设置参数，可指定deviceId和sensorIndex，用于取消指定设备上指定传感器的订阅。不传入时默认取消本地设备该类型所有传感器的订阅。
   * @param { Callback<HallResponse> } [callback] - 回调函数，需要取消订阅的回调函数，若无此参数，则取消订阅当前类型的所有回调函数。
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 19 dynamic
   */
  function off(type: SensorId.HALL, sensorInfoParam?: SensorInfoParam, callback?: Callback<HallResponse>): void;

  /**
   * 取消订阅心率传感器数据。当不再需要接收心率传感器数据时调用此接口取消订阅。off取消订阅必须与on订阅成对出现。
   *
   * @permission ohos.permission.READ_HEALTH_DATA
   * @param { SensorId.HEART_RATE } type - 传感器类型，该值固定为SensorId.HEART_RATE。
   * @param { Callback<HeartRateResponse> } callback - 回调函数，需要取消订阅的回调函数，若无此参数，则取消订阅当前类型的所有回调函数。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   */
  function off(type: SensorId.HEART_RATE, callback?: Callback<HeartRateResponse>): void;

  /**
   * 取消订阅心率传感器数据。当不再需要接收心率传感器数据时调用此接口取消订阅。off取消订阅必须与on订阅成对出现。
   *
   * @permission ohos.permission.READ_HEALTH_DATA
   * @param { SensorId.HEART_RATE } type - 传感器类型，该值固定为SensorId.HEART_RATE。
   * @param { SensorInfoParam } [sensorInfoParam] - 传感器传入设置参数，可指定deviceId和sensorIndex，用于取消指定设备上指定传感器的订阅。不传入时默认取消本地设备该类型所有传感器的订阅。
   * @param { Callback<HeartRateResponse> } [callback] - 回调函数，需要取消订阅的回调函数，若无此参数，则取消订阅当前类型的所有回调函数。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 19 dynamic
   */
  function off(type: SensorId.HEART_RATE, sensorInfoParam?: SensorInfoParam, callback?: Callback<HeartRateResponse>): void;

  /**
   * 取消订阅湿度传感器数据。当不再需要接收湿度传感器数据时调用此接口取消订阅。off取消订阅必须与on订阅成对出现。
   *
   * @param { SensorId.HUMIDITY } type - 传感器类型，该值固定为SensorId.HUMIDITY。
   * @param { Callback<HumidityResponse> } callback - 回调函数，需要取消订阅的回调函数，若无此参数，则取消订阅当前类型的所有回调函数。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   */
  function off(type: SensorId.HUMIDITY, callback?: Callback<HumidityResponse>): void;

  /**
   * 取消订阅湿度传感器数据。当不再需要接收湿度传感器数据时调用此接口取消订阅。off取消订阅必须与on订阅成对出现。
   *
   * @param { SensorId.HUMIDITY } type - 传感器类型，该值固定为SensorId.HUMIDITY。
   * @param { SensorInfoParam } [sensorInfoParam] - 传感器传入设置参数，可指定deviceId和sensorIndex，用于取消指定设备上指定传感器的订阅。不传入时默认取消本地设备该类型所有传感器的订阅。
   * @param { Callback<HumidityResponse> } [callback] - 回调函数，需要取消订阅的回调函数，若无此参数，则取消订阅当前类型的所有回调函数。
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 19 dynamic
   */
  function off(type: SensorId.HUMIDITY, sensorInfoParam?: SensorInfoParam, callback?: Callback<HumidityResponse>): void;

  /**
   * 取消订阅线性加速度传感器数据。当不再需要接收线性加速度传感器数据时调用此接口取消订阅。off取消订阅必须与on订阅成对出现。
   *
   * @permission ohos.permission.ACCELEROMETER
   * @param { SensorId.LINEAR_ACCELEROMETER } type - 传感器类型，该值固定为SensorId.LINEAR_ACCELEROMETER。
   * @param { Callback<LinearAccelerometerResponse> } callback - 回调函数，需要取消订阅的回调函数，若无此参数，则取消订阅当前类型的所有回调函数。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   */
  function off(type: SensorId.LINEAR_ACCELEROMETER, callback?: Callback<LinearAccelerometerResponse>): void;

  /**
   * 取消订阅线性加速度传感器数据。当不再需要接收线性加速度传感器数据时调用此接口取消订阅。off取消订阅必须与on订阅成对出现。
   *
   * @permission ohos.permission.ACCELEROMETER
   * @param { SensorId.LINEAR_ACCELEROMETER } type - 传感器类型，该值固定为SensorId.LINEAR_ACCELEROMETER。
   * @param { SensorInfoParam } [sensorInfoParam] - 传感器传入设置参数，可指定deviceId和sensorIndex，用于取消指定设备上指定传感器的订阅。不传入时默认取消本地设备该类型所有传感器的订阅。
   * @param { Callback<LinearAccelerometerResponse> } [callback] - 回调函数，需要取消订阅的回调函数，若无此参数，则取消订阅当前类型的所有回调函数。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 19 dynamic
   */
  function off(type: SensorId.LINEAR_ACCELEROMETER, sensorInfoParam?: SensorInfoParam, callback?: Callback<LinearAccelerometerResponse>): void;

  /**
   * 取消订阅磁场传感器数据。当不再需要接收磁场传感器数据时调用此接口取消订阅。off取消订阅必须与on订阅成对出现。
   *
   * @param { SensorId.MAGNETIC_FIELD } type - 传感器类型，该值固定为SensorId.MAGNETIC_FIELD。
   * @param { Callback<MagneticFieldResponse> } callback - 回调函数，需要取消订阅的回调函数，若无此参数，则取消订阅当前类型的所有回调函数。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   */
  function off(type: SensorId.MAGNETIC_FIELD, callback?: Callback<MagneticFieldResponse>): void;

  /**
   * 取消订阅磁场传感器数据。当不再需要接收磁场传感器数据时调用此接口取消订阅。off取消订阅必须与on订阅成对出现。
   *
   * @param { SensorId.MAGNETIC_FIELD } type - 传感器类型，该值固定为SensorId.MAGNETIC_FIELD。
   * @param { SensorInfoParam } [sensorInfoParam] - 传感器传入设置参数，可指定deviceId和sensorIndex，用于取消指定设备上指定传感器的订阅。不传入时默认取消本地设备该类型所有传感器的订阅。
   * @param { Callback<MagneticFieldResponse> } [callback] - 回调函数，需要取消订阅的回调函数，若无此参数，则取消订阅当前类型的所有回调函数。
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 19 dynamic
   */
  function off(type: SensorId.MAGNETIC_FIELD, sensorInfoParam?: SensorInfoParam, callback?: Callback<MagneticFieldResponse>): void;

  /**
   * 取消订阅未校准的磁场传感器数据。当不再需要接收未校准磁场传感器数据时调用此接口取消订阅。off取消订阅必须与on订阅成对出现。
   *
   * @param { SensorId.MAGNETIC_FIELD_UNCALIBRATED } type - 传感器类型，该值固定为SensorId.MAGNETIC_FIELD_UNCALIBRATED。
   * @param { Callback<MagneticFieldUncalibratedResponse> } callback - 回调函数，需要取消订阅的回调函数，若无此参数，则取消订阅当前类型的所有回调函数。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   */
  function off(type: SensorId.MAGNETIC_FIELD_UNCALIBRATED, callback?: Callback<MagneticFieldUncalibratedResponse>): void;

  /**
   * 取消订阅未校准的磁场传感器数据。当不再需要接收未校准磁场传感器数据时调用此接口取消订阅。off取消订阅必须与on订阅成对出现。
   *
   * @param { SensorId.MAGNETIC_FIELD_UNCALIBRATED } type - 传感器类型，该值固定为SensorId.MAGNETIC_FIELD_UNCALIBRATED。
   * @param { SensorInfoParam } [sensorInfoParam] - 传感器传入设置参数，可指定deviceId和sensorIndex，用于取消指定设备上指定传感器的订阅。不传入时默认取消本地设备该类型所有传感器的订阅。
   * @param { Callback<MagneticFieldUncalibratedResponse> } [callback] - 回调函数，需要取消订阅的回调函数，若无此参数，则取消订阅当前类型的所有回调函数。
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 19 dynamic
   */
  function off(type: SensorId.MAGNETIC_FIELD_UNCALIBRATED, sensorInfoParam?: SensorInfoParam, callback?: Callback<MagneticFieldUncalibratedResponse>): void;

  /**
   * 取消订阅方向传感器数据。当不再需要接收方向传感器数据时调用此接口取消订阅。off取消订阅必须与on订阅成对出现。
   *
   * @param { SensorId.ORIENTATION } type - 传感器类型，该值固定为SensorId.ORIENTATION。
   * @param { Callback<OrientationResponse> } callback - 回调函数，需要取消订阅的回调函数，若无此参数，则取消订阅当前类型的所有回调函数。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Sensors.Sensor
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  function off(type: SensorId.ORIENTATION, callback?: Callback<OrientationResponse>): void;

  /**
   * 取消订阅方向传感器数据。当不再需要接收方向传感器数据时调用此接口取消订阅。off取消订阅必须与on订阅成对出现。
   *
   * @param { SensorId.ORIENTATION } type - 传感器类型，该值固定为SensorId.ORIENTATION。
   * @param { SensorInfoParam } [sensorInfoParam] - 传感器传入设置参数，可指定deviceId和sensorIndex，用于取消指定设备上指定传感器的订阅。不传入时默认取消本地设备该类型所有传感器的订阅。
   * @param { Callback<OrientationResponse> } [callback] - 回调函数，需要取消订阅的回调函数，若无此参数，则取消订阅当前类型的所有回调函数。
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @atomicservice
   * @since 19 dynamic
   */
  function off(type: SensorId.ORIENTATION, sensorInfoParam?: SensorInfoParam, callback?: Callback<OrientationResponse>): void;

  /**
   * 取消订阅计步器传感器数据。当不再需要接收计步器传感器数据时调用此接口取消订阅。off取消订阅必须与on订阅成对出现。
   *
   * @permission ohos.permission.ACTIVITY_MOTION
   * @param { SensorId.PEDOMETER } type - 传感器类型，该值固定为SensorId.PEDOMETER。
   * @param { Callback<PedometerResponse> } callback - 回调函数，需要取消订阅的回调函数，若无此参数，则取消订阅当前类型的所有回调函数。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   */
  function off(type: SensorId.PEDOMETER, callback?: Callback<PedometerResponse>): void;

  /**
   * 取消订阅计步器传感器数据。当不再需要接收计步器传感器数据时调用此接口取消订阅。off取消订阅必须与on订阅成对出现。
   *
   * @permission ohos.permission.ACTIVITY_MOTION
   * @param { SensorId.PEDOMETER } type - 传感器类型，该值固定为SensorId.PEDOMETER。
   * @param { SensorInfoParam } [sensorInfoParam] - 传感器传入设置参数，可指定deviceId和sensorIndex，用于取消指定设备上指定传感器的订阅。不传入时默认取消本地设备该类型所有传感器的订阅。
   * @param { Callback<PedometerResponse> } [callback] - 回调函数，需要取消订阅的回调函数，若无此参数，则取消订阅当前类型的所有回调函数。
   * @throws { BusinessError } 201 - Permission denied
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 19 dynamic
   */
  function off(type: SensorId.PEDOMETER, sensorInfoParam?: SensorInfoParam, callback?: Callback<PedometerResponse>): void;

  /**
   * 取消订阅计步检测器传感器数据。当不再需要接收计步检测器传感器数据时调用此接口取消订阅。off取消订阅必须与on订阅成对出现。
   *
   * @permission ohos.permission.ACTIVITY_MOTION
   * @param { SensorId.PEDOMETER_DETECTION } type - 传感器类型，该值固定为SensorId.PEDOMETER_DETECTION。
   * @param { Callback<PedometerDetectionResponse> } callback - 回调函数，需要取消订阅的回调函数，若无此参数，则取消订阅当前类型的所有回调函数。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   */
  function off(type: SensorId.PEDOMETER_DETECTION, callback?: Callback<PedometerDetectionResponse>): void;

  /**
   * 取消订阅计步检测器传感器数据。当不再需要接收计步检测器传感器数据时调用此接口取消订阅。off取消订阅必须与on订阅成对出现。
   *
   * @permission ohos.permission.ACTIVITY_MOTION
   * @param { SensorId.PEDOMETER_DETECTION } type - 传感器类型，该值固定为SensorId.PEDOMETER_DETECTION。
   * @param { SensorInfoParam } [sensorInfoParam] - 传感器传入设置参数，可指定deviceId和sensorIndex，用于取消指定设备上指定传感器的订阅。不传入时默认取消本地设备该类型所有传感器的订阅。
   * @param { Callback<PedometerDetectionResponse> } [callback] - 回调函数，需要取消订阅的回调函数，若无此参数，则取消订阅当前类型的所有回调函数。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 19 dynamic
   */
  function off(type: SensorId.PEDOMETER_DETECTION, sensorInfoParam?: SensorInfoParam, callback?: Callback<PedometerDetectionResponse>): void;

  /**
   * 取消订阅接近光传感器数据。当不再需要接收接近光传感器数据时调用此接口取消订阅。off取消订阅必须与on订阅成对出现。
   *
   * @param { SensorId.PROXIMITY } type - 传感器类型，该值固定为SensorId.PROXIMITY。
   * @param { Callback<ProximityResponse> } callback - 回调函数，需要取消订阅的回调函数，若无此参数，则取消订阅当前类型的所有回调函数。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   */
  function off(type: SensorId.PROXIMITY, callback?: Callback<ProximityResponse>): void;

  /**
   * 取消订阅接近光传感器数据。当不再需要接收接近光传感器数据时调用此接口取消订阅。off取消订阅必须与on订阅成对出现。
   *
   * @param { SensorId.PROXIMITY } type - 传感器类型，该值固定为SensorId.PROXIMITY。
   * @param { SensorInfoParam } [sensorInfoParam] - 传感器传入设置参数，可指定deviceId和sensorIndex，用于取消指定设备上指定传感器的订阅。不传入时默认取消本地设备该类型所有传感器的订阅。
   * @param { Callback<ProximityResponse> } [callback] - 回调函数，需要取消订阅的回调函数，若无此参数，则取消订阅当前类型的所有回调函数。
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 19 dynamic
   */
  function off(type: SensorId.PROXIMITY, sensorInfoParam?: SensorInfoParam, callback?: Callback<ProximityResponse>): void;

  /**
   * 取消订阅旋转矢量传感器数据。当不再需要接收旋转矢量传感器数据时调用此接口取消订阅。off取消订阅必须与on订阅成对出现。
   *
   * @param { SensorId.ROTATION_VECTOR } type - 传感器类型，该值固定为SensorId.ROTATION_VECTOR。
   * @param { Callback<RotationVectorResponse> } callback - 回调函数，需要取消订阅的回调函数，若无此参数，则取消订阅当前类型的所有回调函数。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   */
  function off(type: SensorId.ROTATION_VECTOR, callback?: Callback<RotationVectorResponse>): void;

  /**
   * 取消订阅旋转矢量传感器数据。当不再需要接收旋转矢量传感器数据时调用此接口取消订阅。off取消订阅必须与on订阅成对出现。
   *
   * @param { SensorId.ROTATION_VECTOR } type - 传感器类型，该值固定为SensorId.ROTATION_VECTOR。
   * @param { SensorInfoParam } [sensorInfoParam] - 传感器传入设置参数，可指定deviceId和sensorIndex，用于取消指定设备上指定传感器的订阅。不传入时默认取消本地设备该类型所有传感器的订阅。
   * @param { Callback<RotationVectorResponse> } [callback] - 回调函数，需要取消订阅的回调函数，若无此参数，则取消订阅当前类型的所有回调函数。
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 19 dynamic
   */
  function off(type: SensorId.ROTATION_VECTOR, sensorInfoParam?: SensorInfoParam, callback?: Callback<RotationVectorResponse>): void;

  /**
   * 取消订阅有效运动传感器数据。当不再需要接收有效运动传感器数据时调用此接口取消订阅。off取消订阅必须与on订阅成对出现。
   *
   * @param { SensorId.SIGNIFICANT_MOTION } type - 传感器类型，该值固定为SensorId.SIGNIFICANT_MOTION。
   * @param { Callback<SignificantMotionResponse> } callback - 回调函数，需要取消订阅的回调函数，若无此参数，则取消订阅当前类型的所有回调函数。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   */
  function off(type: SensorId.SIGNIFICANT_MOTION, callback?: Callback<SignificantMotionResponse>): void;

  /**
   * 取消订阅有效运动传感器数据。当不再需要接收有效运动传感器数据时调用此接口取消订阅。off取消订阅必须与on订阅成对出现。
   *
   * @param { SensorId.SIGNIFICANT_MOTION } type - 传感器类型，该值固定为SensorId.SIGNIFICANT_MOTION。
   * @param { SensorInfoParam } [sensorInfoParam] - 传感器传入设置参数，可指定deviceId和sensorIndex，用于取消指定设备上指定传感器的订阅。不传入时默认取消本地设备该类型所有传感器的订阅。
   * @param { Callback<SignificantMotionResponse> } [callback] - 回调函数，需要取消订阅的回调函数，若无此参数，则取消订阅当前类型的所有回调函数。
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 19 dynamic
   */
  function off(type: SensorId.SIGNIFICANT_MOTION, sensorInfoParam?: SensorInfoParam, callback?: Callback<SignificantMotionResponse>): void;

  /**
   * 取消订阅佩戴检测传感器数据。当不再需要接收佩戴检测传感器数据时调用此接口取消订阅。off取消订阅必须与on订阅成对出现。
   *
   * @param { SensorId.WEAR_DETECTION } type - 传感器类型，该值固定为SensorId.WEAR_DETECTION。
   * @param { Callback<WearDetectionResponse> } callback - 回调函数，需要取消订阅的回调函数，若无此参数，则取消订阅当前类型的所有回调函数。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   */
  function off(type: SensorId.WEAR_DETECTION, callback?: Callback<WearDetectionResponse>): void;

  /**
   * 取消订阅融合压力传感器数据。当不再需要接收融合压力传感器数据时调用此接口取消订阅。off取消订阅必须与on订阅成对出现。
   *
   * @param { SensorId.FUSION_PRESSURE } type - 传感器类型，该值固定为SensorId.FUSION_PRESSURE。
   * @param { SensorInfoParam } [sensorInfoParam] - 传感器传入设置参数，可指定deviceId和sensorIndex，用于取消指定设备上指定传感器的订阅。不传入时默认取消本地设备该类型所有传感器的订阅。
   * @param { Callback<FusionPressureResponse> } callback - 取消订阅的回调函数，若无此参数，则取消订阅当前类型的所有回调函数。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 22 dynamic
   */
  function off(type: SensorId.FUSION_PRESSURE, sensorInfoParam?: SensorInfoParam, callback?: Callback<FusionPressureResponse>): void;

  /**
   * 取消订阅佩戴检测传感器数据。当不再需要接收佩戴检测传感器数据时调用此接口取消订阅。off取消订阅必须与on订阅成对出现。
   *
   * @param { SensorId.WEAR_DETECTION } type - 传感器类型，该值固定为SensorId.WEAR_DETECTION。
   * @param { SensorInfoParam } [sensorInfoParam] - 传感器传入设置参数，可指定deviceId和sensorIndex，用于取消指定设备上指定传感器的订阅。不传入时默认取消本地设备该类型所有传感器的订阅。
   * @param { Callback<WearDetectionResponse> } [callback] - 回调函数，需要取消订阅的回调函数，若无此参数，则取消订阅当前类型的所有回调函数。
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 19 dynamic
   */
  function off(type: SensorId.WEAR_DETECTION, sensorInfoParam?: SensorInfoParam, callback?: Callback<WearDetectionResponse>): void;

  /**
   * 监听加速度传感器的数据变化。适用于需要感知设备运动状态、实现屏幕旋转或游戏操控的场景。如果多次调用该接口，仅最后一次调用生效。
   *
   * > **说明**：
   * >
   * > 从API version 8 开始支持，从API version 9 开始废弃，建议使用[sensor.on.ACCELEROMETER]
   * > {@link sensor.on(type: SensorId.ACCELEROMETER, callback: Callback<AccelerometerResponse>, options?: Options)}
   * > 替代。
   *
   * @permission ohos.permission.ACCELEROMETER
   * @param { SensorType.SENSOR_TYPE_ID_ACCELEROMETER } type - 要订阅的加速度传感器类型为SENSOR_TYPE_ID_ACCELEROMETER。
   * @param { Callback<AccelerometerResponse> } callback - 注册加速度传感器的回调函数，上报的数据类型为AccelerometerResponse。
   * @param { Options } options - 用于设置传感器上报频率，默认值为200000000ns（即200ms）。
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.on(type: SensorId.ACCELEROMETER, callback: Callback<AccelerometerResponse>, options?: Options)
   */
  function on(type: SensorType.SENSOR_TYPE_ID_ACCELEROMETER, callback: Callback<AccelerometerResponse>,
    options?: Options): void;

  /**
   * 监听未校准加速度传感器的数据变化。适用于需要获取包含偏差校准数据的加速度原始数据的场景。如果多次调用该接口，仅最后一次调用生效。
   *
   * > **说明**：
   * >
   * > 从API version 8 开始支持，从API version 9 开始废弃，建议使用[sensor.on.ACCELEROMETER_UNCALIBRATED]
   * > {@link sensor.on(type: SensorId.ACCELEROMETER_UNCALIBRATED, callback: Callback<AccelerometerUncalibratedResponse>, options?: Options)}
   * > 替代。
   *
   * @permission ohos.permission.ACCELEROMETER
   * @param { SensorType.SENSOR_TYPE_ID_ACCELEROMETER_UNCALIBRATED } type - 要订阅的未校准加速度传感器类型为SENSOR_TYPE_ID_ACCELEROMETER_UNCALIBRATED。
   * @param { Callback<AccelerometerUncalibratedResponse> } callback - 注册未校准加速度传感器的回调函数，上报的数据类型为AccelerometerUncalibratedResponse。
   * @param { Options } options - 用于设置传感器上报频率，默认值为200000000ns（即200ms）。
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.on(type: SensorId.ACCELEROMETER_UNCALIBRATED, callback: Callback<AccelerometerUncalibratedResponse>, options?: Options)
   */
  function on(type: SensorType.SENSOR_TYPE_ID_ACCELEROMETER_UNCALIBRATED, callback: Callback<AccelerometerUncalibratedResponse>,
    options?: Options): void;

  /**
   * 监听环境光传感器的数据变化。适用于需要感知环境光照强度的场景。如果多次调用该接口，仅最后一次调用生效。
   *
   * > **说明**：
   * >
   * > 从API version 8 开始支持，从API version 9 开始废弃，建议使用[sensor.on.AMBIENT_LIGHT]
   * > {@link sensor.on(type: SensorId.AMBIENT_LIGHT, callback: Callback<LightResponse>, options?: Options)}
   * > 替代。
   *
   * @param { SensorType.SENSOR_TYPE_ID_AMBIENT_LIGHT } type - 要订阅的环境光传感器类型为SENSOR_TYPE_ID_AMBIENT_LIGHT。
   * @param { Callback<LightResponse> } callback - 注册环境光传感器的回调函数，上报的数据类型为LightResponse。
   * @param { Options } options - 用于设置传感器上报频率，默认值为200000000ns（即200ms）。
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.on(type: SensorId.AMBIENT_LIGHT, callback: Callback<LightResponse>, options?: Options)
   */
  function on(type: SensorType.SENSOR_TYPE_ID_AMBIENT_LIGHT, callback: Callback<LightResponse>,
    options?: Options): void;

  /**
   * 监听环境温度传感器的数据变化。适用于需要感知环境温度的场景。如果多次调用该接口，仅最后一次调用生效。
   *
   * > **说明**：
   * >
   * > 从API version 8 开始支持，从API version 9 开始废弃，建议使用[sensor.on.AMBIENT_TEMPERATURE]
   * > {@link sensor.on(type: SensorId.AMBIENT_TEMPERATURE, callback: Callback<AmbientTemperatureResponse>, options?: Options)}
   * > 替代。
   *
   * @param { SensorType.SENSOR_TYPE_ID_AMBIENT_TEMPERATURE } type - 要订阅的环境温度传感器类型为SENSOR_TYPE_ID_AMBIENT_TEMPERATURE。
   * @param { Callback<AmbientTemperatureResponse> } callback - 注册环境温度传感器的回调函数，上报的数据类型为AmbientTemperatureResponse。
   * @param { Options } options - 用于设置传感器上报频率，默认值为200000000ns（即200ms）。
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.on(type: SensorId.AMBIENT_TEMPERATURE, callback: Callback<AmbientTemperatureResponse>, options?: Options)
   */
  function on(type: SensorType.SENSOR_TYPE_ID_AMBIENT_TEMPERATURE, callback: Callback<AmbientTemperatureResponse>,
    options?: Options): void;

  /**
   * 监听气压计传感器的数据变化。适用于需要感知环境气压的场景。如果多次调用该接口，仅最后一次调用生效。
   *
   * > **说明**：
   * >
   * > 从API version 8 开始支持，从API version 9 开始废弃，建议使用[sensor.on.BAROMETER]
   * > {@link sensor.on(type: SensorId.BAROMETER, callback: Callback<BarometerResponse>, options?: Options)}
   * > 替代。
   *
   * @param { SensorType.SENSOR_TYPE_ID_BAROMETER } type - 要订阅的气压计传感器类型为SENSOR_TYPE_ID_BAROMETER。
   * @param { Callback<BarometerResponse> } callback - 注册气压计传感器的回调函数，上报的数据类型为BarometerResponse。
   * @param { Options } options - 用于设置传感器上报频率，默认值为200000000ns（即200ms）。
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.on(type: SensorId.BAROMETER, callback: Callback<BarometerResponse>, options?: Options)
   */
  function on(type: SensorType.SENSOR_TYPE_ID_BAROMETER, callback: Callback<BarometerResponse>,
    options?: Options): void;

  /**
   * 监听重力传感器的数据变化。适用于需要感知设备重力方向的场景。如果多次调用该接口，仅最后一次调用生效。
   *
   * > **说明**：
   * >
   * > 从API version 8 开始支持，从API version 9 开始废弃，建议使用[sensor.on.GRAVITY]
   * > {@link sensor.on(type: SensorId.GRAVITY, callback: Callback<GravityResponse>, options?: Options)}
   * > 替代。
   *
   * @param { SensorType.SENSOR_TYPE_ID_GRAVITY } type - 要订阅的重力传感器类型为SENSOR_TYPE_ID_GRAVITY。
   * @param { Callback<GravityResponse> } callback - 注册重力传感器的回调函数，上报的数据类型为GravityResponse。
   * @param { Options } options - 用于设置传感器上报频率，默认值为200000000ns（即200ms）。
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.on(type: SensorId.GRAVITY, callback: Callback<GravityResponse>, options?: Options)
   */
  function on(type: SensorType.SENSOR_TYPE_ID_GRAVITY, callback: Callback<GravityResponse>,
    options?: Options): void;

  /**
   * 监听陀螺仪传感器的数据变化。适用于需要感知设备旋转角速度的场景。如果多次调用该接口，仅最后一次调用生效。
   *
   * > **说明**：
   * >
   * > 从API version 8 开始支持，从API version 9 开始废弃，建议使用[sensor.on.GYROSCOPE]
   * > {@link sensor.on(type: SensorId.GYROSCOPE, callback: Callback<GyroscopeResponse>, options?: Options)}
   * > 替代。
   *
   * @permission ohos.permission.GYROSCOPE
   * @param { SensorType.SENSOR_TYPE_ID_GYROSCOPE } type - 要订阅的陀螺仪传感器类型为SENSOR_TYPE_ID_GYROSCOPE。
   * @param { Callback<GyroscopeResponse> } callback - 注册陀螺仪传感器的回调函数，上报的数据类型为GyroscopeResponse。
   * @param { Options } options - 用于设置传感器上报频率，默认值为200000000ns（即200ms）。
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.on(type: SensorId.GYROSCOPE, callback: Callback<GyroscopeResponse>, options?: Options)
   */
  function on(type: SensorType.SENSOR_TYPE_ID_GYROSCOPE, callback: Callback<GyroscopeResponse>,
    options?: Options): void;

  /**
   * 监听未校准陀螺仪传感器的数据变化。适用于需要获取包含偏差校准数据的陀螺仪原始数据的场景。如果多次调用该接口，仅最后一次调用生效。
   *
   * > **说明**：
   * >
   * > 从API version 8 开始支持，从API version 9 开始废弃，建议使用[sensor.on.GYROSCOPE_UNCALIBRATED]
   * > {@link sensor.on(type: SensorId.GYROSCOPE_UNCALIBRATED, callback: Callback<GyroscopeUncalibratedResponse>, options?: Options)}
   * > 替代。
   *
   * @permission ohos.permission.GYROSCOPE
   * @param { SensorType.SENSOR_TYPE_ID_GYROSCOPE_UNCALIBRATED } type - 要订阅的未校准陀螺仪传感器类型为SENSOR_TYPE_ID_GYROSCOPE_UNCALIBRATED。
   * @param { Callback<GyroscopeUncalibratedResponse> } callback - 注册未校准陀螺仪传感器的回调函数，上报的数据类型为GyroscopeUncalibratedResponse。
   * @param { Options } options - 用于设置传感器上报频率，默认值为200000000ns（即200ms）。
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.on(type: SensorId.GYROSCOPE_UNCALIBRATED, callback: Callback<GyroscopeUncalibratedResponse>, options?: Options)
   */
  function on(type: SensorType.SENSOR_TYPE_ID_GYROSCOPE_UNCALIBRATED, callback: Callback<GyroscopeUncalibratedResponse>,
    options?: Options): void;

  /**
   * 监听霍尔传感器的数据变化。适用于需要检测设备翻盖或磁铁状态的场景。如果多次调用该接口，仅最后一次调用生效。
   *
   * > **说明**：
   * >
   * > 从API version 8 开始支持，从API version 9 开始废弃，建议使用[sensor.on.HALL]
   * > {@link sensor.on(type: SensorId.HALL, callback: Callback<HallResponse>, options?: Options)}
   * > 替代。
   *
   * @param { SensorType.SENSOR_TYPE_ID_HALL } type - 要订阅的霍尔传感器类型为SENSOR_TYPE_ID_HALL。
   * @param { Callback<HallResponse> } callback - 注册霍尔传感器的回调函数，上报的数据类型为 HallResponse。
   * @param { Options } options - 可选参数列表，当霍尔事件被触发的很频繁时，用于设置传感器上报频率，默认值为200000000ns（即200ms）。
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.on(type: SensorId.HALL, callback: Callback<HallResponse>, options?: Options)
   */
  function on(type: SensorType.SENSOR_TYPE_ID_HALL, callback: Callback<HallResponse>,
    options?: Options): void;

  /**
   * 监听心率传感器的数据变化。适用于需要获取用户心率数据的场景。如果多次调用该接口，仅最后一次调用生效。
   *
   * > **说明**：
   * >
   * > 从API version 8 开始支持，从API version 9 开始废弃，建议使用[sensor.on.HEART_RATE]
   * > {@link sensor.on(type: SensorId.HEART_RATE, callback: Callback<HeartRateResponse>, options?: Options)}
   * > 替代。
   *
   * @permission ohos.permission.HEALTH_DATA
   * @param { SensorType.SENSOR_TYPE_ID_HEART_RATE } type - 要订阅的心率传感器类型为SENSOR_TYPE_ID_HEART_RATE。
   * @param { Callback<HeartRateResponse> } callback - 注册心率传感器的回调函数，上报的数据类型为HeartRateResponse。
   * @param { Options } options - 用于设置传感器上报频率，默认值为200000000ns（即200ms）。
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.on(type: SensorId.HEART_RATE, callback: Callback<HeartRateResponse>, options?: Options)
   */
  function on(type: SensorType.SENSOR_TYPE_ID_HEART_RATE, callback: Callback<HeartRateResponse>,
    options?: Options): void;

  /**
   * 监听湿度传感器的数据变化。适用于需要感知环境湿度的场景。如果多次调用该接口，仅最后一次调用生效。
   *
   * > **说明**：
   * >
   * > 从API version 8 开始支持，从API version 9 开始废弃，建议使用[sensor.on.HUMIDITY]
   * > {@link sensor.on(type: SensorId.HUMIDITY, callback: Callback<HumidityResponse>, options?: Options)}
   * > 替代。
   *
   * @param { SensorType.SENSOR_TYPE_ID_HUMIDITY } type - 要订阅的湿度传感器类型为SENSOR_TYPE_ID_HUMIDITY。
   * @param { Callback<HumidityResponse> } callback - 注册湿度传感器的回调函数，上报的数据类型为HumidityResponse。
   * @param { Options } options - 用于设置传感器上报频率，默认值为200000000ns（即200ms）。
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.on(type: SensorId.HUMIDITY, callback: Callback<HumidityResponse>, options?: Options)
   */
  function on(type: SensorType.SENSOR_TYPE_ID_HUMIDITY, callback: Callback<HumidityResponse>,
    options?: Options): void;

  /**
   * 监听线性加速度传感器的数据变化。适用于需要获取排除重力影响的线性加速度数据的场景。如果多次调用该接口，仅最后一次调用生效。
   *
   * > **说明**：
   * >
   * > 从API version 8 开始支持，从API version 9 开始废弃，建议使用[sensor.on.LINEAR_ACCELEROMETER]
   * > {@link sensor.on(type: SensorId.LINEAR_ACCELEROMETER, callback: Callback<LinearAccelerometerResponse>, options?: Options)}
   * > 替代。
   *
   * @permission ohos.permission.ACCELEROMETER
   * @param { SensorType.SENSOR_TYPE_ID_LINEAR_ACCELERATION } type - 要订阅的线性加速度传感器类型为SENSOR_TYPE_ID_LINEAR_ACCELERATION。
   * @param { Callback<LinearAccelerometerResponse> } callback - 注册线性加速度传感器的回调函数，上报的数据类型为LinearAccelerometerResponse。
   * @param { Options } options - 用于设置传感器上报频率，默认值为200000000ns（即200ms）。
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.on(type: SensorId.LINEAR_ACCELEROMETER, callback: Callback<LinearAccelerometerResponse>, options?: Options)
   */
  function on(type: SensorType.SENSOR_TYPE_ID_LINEAR_ACCELERATION, callback: Callback<LinearAccelerometerResponse>,
    options?: Options): void;

  /**
   * 监听磁场传感器的数据变化。适用于需要感知设备周围磁场强度与方向的场景。如果多次调用该接口，仅最后一次调用生效。
   *
   * > **说明**：
   * >
   * > 从API version 8 开始支持，从API version 9 开始废弃，建议使用[sensor.on.MAGNETIC_FIELD]
   * > {@link sensor.on(type: SensorId.MAGNETIC_FIELD, callback: Callback<MagneticFieldResponse>, options?: Options)}
   * > 替代。
   *
   * @param { SensorType.SENSOR_TYPE_ID_MAGNETIC_FIELD } type - 要订阅的磁场传感器类型为SENSOR_TYPE_ID_MAGNETIC_FIELD。
   * @param { Callback<MagneticFieldResponse> } callback - 注册磁场传感器的回调函数，上报的数据类型为MagneticFieldResponse。
   * @param { Options } options - 用于设置传感器上报频率，默认值为200000000ns（即200ms）。
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.on(type: SensorId.MAGNETIC_FIELD, callback: Callback<MagneticFieldResponse>, options?: Options)
   */
  function on(type: SensorType.SENSOR_TYPE_ID_MAGNETIC_FIELD, callback: Callback<MagneticFieldResponse>,
    options?: Options): void;

  /**
   * 监听未校准磁场传感器的数据变化。适用于需要获取包含偏差校准数据的磁场原始数据的场景。如果多次调用该接口，仅最后一次调用生效。
   *
   * > **说明**：
   * >
   * > 从API version 8 开始支持，从API version 9 开始废弃，建议使用[sensor.on.MAGNETIC_FIELD_UNCALIBRATED]
   * > {@link sensor.on(type: SensorId.MAGNETIC_FIELD_UNCALIBRATED, callback: Callback<MagneticFieldUncalibratedResponse>, options?: Options)}
   * > 替代。
   *
   * @param { SensorType.SENSOR_TYPE_ID_MAGNETIC_FIELD_UNCALIBRATED } type - 要订阅的未校准磁场传感器类型为SENSOR_TYPE_ID_MAGNETIC_FIELD_UNCALIBRATED。
   * @param { Callback<MagneticFieldUncalibratedResponse> } callback - 注册未校准磁场传感器的回调函数，上报的数据类型为MagneticFieldUncalibratedResponse。
   * @param { Options } options - 用于设置传感器上报频率，默认值为200000000ns（即200ms）。
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.on(type: SensorId.MAGNETIC_FIELD_UNCALIBRATED, callback: Callback<MagneticFieldUncalibratedResponse>, options?: Options)
   */
  function on(type: SensorType.SENSOR_TYPE_ID_MAGNETIC_FIELD_UNCALIBRATED, callback: Callback<MagneticFieldUncalibratedResponse>,
    options?: Options): void;

  /**
   * 监听方向传感器的数据变化。适用于需要感知设备姿态方向的场景。如果多次调用该接口，仅最后一次调用生效。
   *
   * > **说明**：
   * >
   * > 从API version 8 开始支持，从API version 9 开始废弃，建议使用[sensor.on.ORIENTATION]
   * > {@link sensor.on(type: SensorId.ORIENTATION, callback: Callback<OrientationResponse>, options?: Options)}
   * > 替代。
   *
   * @param { SensorType.SENSOR_TYPE_ID_ORIENTATION } type - 要订阅的方向传感器类型为SENSOR_TYPE_ID_ORIENTATION。
   * @param { Callback<OrientationResponse> } callback - 注册方向传感器的回调函数，上报的数据类型为OrientationResponse。
   * @param { Options } options - 用于设置传感器上报频率，默认值为200000000ns（即200ms）。
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.on(type: SensorId.ORIENTATION, callback: Callback<OrientationResponse>, options?: Options)
   */
  function on(type: SensorType.SENSOR_TYPE_ID_ORIENTATION, callback: Callback<OrientationResponse>,
    options?: Options): void;

  /**
   * 监听计步传感器的数据变化。适用于需要获取用户步数数据的场景。如果多次调用该接口，仅最后一次调用生效。
   *
   * > **说明**：
   * >
   * > 从API version 8 开始支持，从API version 9 开始废弃，建议使用[sensor.on.PEDOMETER]
   * > {@link sensor.on(type: SensorId.PEDOMETER, callback: Callback<PedometerResponse>, options?: Options)}
   * > 替代。
   *
   * @permission ohos.permission.ACTIVITY_MOTION
   * @param { SensorType.SENSOR_TYPE_ID_PEDOMETER } type - 要订阅的计步传感器类型为SENSOR_TYPE_ID_PEDOMETER。
   * @param { Callback<PedometerResponse> } callback - 注册计步传感器的回调函数，上报的数据类型为PedometerResponse。
   * @param { Options } options - 用于设置传感器上报频率，默认值为200000000ns（即200ms）。
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.on(type: SensorId.PEDOMETER, callback: Callback<PedometerResponse>, options?: Options)
   */
  function on(type: SensorType.SENSOR_TYPE_ID_PEDOMETER, callback: Callback<PedometerResponse>,
    options?: Options): void;

  /**
   * 监听计步检测传感器的数据变化。适用于需要检测用户是否在行走的场景。如果多次调用该接口，仅最后一次调用生效。
   *
   * > **说明**：
   * >
   * > 从API version 8 开始支持，从API version 9 开始废弃，建议使用[sensor.on.PEDOMETER_DETECTION]
   * > {@link sensor.on(type: SensorId.PEDOMETER_DETECTION, callback: Callback<PedometerDetectionResponse>, options?: Options)}
   * > 替代。
   *
   * @permission ohos.permission.ACTIVITY_MOTION
   * @param { SensorType.SENSOR_TYPE_ID_PEDOMETER_DETECTION } type - 要订阅的计步检测传感器类型为SENSOR_TYPE_ID_PEDOMETER_DETECTION。
   * @param { Callback<PedometerDetectionResponse> } callback - 注册计步检测传感器的回调函数，上报的数据类型为PedometerDetectionResponse。
   * @param { Options } options - 用于设置传感器上报频率，默认值为200000000ns（即200ms）。
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.on(type: SensorId.PEDOMETER_DETECTION, callback: Callback<PedometerDetectionResponse>, options?: Options)
   */
  function on(type: SensorType.SENSOR_TYPE_ID_PEDOMETER_DETECTION, callback: Callback<PedometerDetectionResponse>,
    options?: Options): void;

  /**
   * 监听接近光传感器的数据变化。适用于需要感知设备前方是否有物体靠近的场景。如果多次调用该接口，仅最后一次调用生效。
   *
   * > **说明**：
   * >
   * > 从API version 8 开始支持，从API version 9 开始废弃，建议使用[sensor.on.PROXIMITY]
   * > {@link sensor.on(type: SensorId.PROXIMITY, callback: Callback<ProximityResponse>, options?: Options)}
   * > 替代。
   *
   * @param { SensorType.SENSOR_TYPE_ID_PROXIMITY } type - 要订阅的接近光传感器类型为SENSOR_TYPE_ID_PROXIMITY。
   * @param { Callback<ProximityResponse> } callback - 注册接近光传感器的回调函数，上报的数据类型为ProximityResponse。
   * @param { Options } options - 可选参数列表，当接近光事件被触发的很频繁时，用于设置传感器上报频率，默认值为200000000ns（即200ms）。
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.on(type: SensorId.PROXIMITY, callback: Callback<ProximityResponse>, options?: Options)
   */
  function on(type: SensorType.SENSOR_TYPE_ID_PROXIMITY, callback: Callback<ProximityResponse>,
    options?: Options): void;

  /**
   * 监听旋转矢量传感器的数据变化。适用于需要感知设备三维空间旋转状态的场景。如果多次调用该接口，仅最后一次调用生效。
   *
   * > **说明**：
   * >
   * > 从API version 8 开始支持，从API version 9 开始废弃，建议使用[sensor.on.ROTATION_VECTOR]
   * > {@link sensor.on(type: SensorId.ROTATION_VECTOR, callback: Callback<RotationVectorResponse>, options?: Options)}
   * > 替代。
   *
   * @param { SensorType.SENSOR_TYPE_ID_ROTATION_VECTOR } type - 要订阅的旋转矢量传感器类型为SENSOR_TYPE_ID_ROTATION_VECTOR。
   * @param { Callback<RotationVectorResponse> } callback - 注册旋转矢量传感器的回调函数，上报的数据类型为RotationVectorResponse。
   * @param { Options } options - 用于设置传感器上报频率，默认值为200000000ns（即200ms）。
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.on(type: SensorId.ROTATION_VECTOR, callback: Callback<RotationVectorResponse>, options?: Options)
   */
  function on(type: SensorType.SENSOR_TYPE_ID_ROTATION_VECTOR, callback: Callback<RotationVectorResponse>,
    options?: Options): void;

  /**
   * 监听有效运动传感器数据变化。适用于需要检测设备是否有显著运动的场景。如果多次调用该接口，仅最后一次调用生效。
   *
   * > **说明**：
   * >
   * > 从API version 8 开始支持，从API version 9 开始废弃，建议使用[sensor.on.SIGNIFICANT_MOTION]
   * > {@link sensor.on(type: SensorId.SIGNIFICANT_MOTION, callback: Callback<SignificantMotionResponse>, options?: Options)}
   * > 替代。
   *
   * @param { SensorType.SENSOR_TYPE_ID_SIGNIFICANT_MOTION } type - 要订阅的有效运动传感器类型为SENSOR_TYPE_ID_SIGNIFICANT_MOTION。
   * @param { Callback<SignificantMotionResponse> } callback - 注册有效运动传感器的回调函数，上报的数据类型为SignificantMotionResponse。
   * @param { Options } options - 用于设置传感器上报频率，默认值为200000000ns（即200ms）。
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.on(type: SensorId.SIGNIFICANT_MOTION, callback: Callback<SignificantMotionResponse>, options?: Options)
   */
  function on(type: SensorType.SENSOR_TYPE_ID_SIGNIFICANT_MOTION, callback: Callback<SignificantMotionResponse>,
    options?: Options): void;

  /**
   * 监听所佩戴的检测传感器的数据变化。适用于需要检测设备是否被佩戴的场景。如果多次调用该接口，仅最后一次调用生效。
   *
   * > **说明**：
   * >
   * > 从API version 8 开始支持，从API version 9 开始废弃，建议使用[sensor.on.WEAR_DETECTION]
   * > {@link sensor.on(type: SensorId.WEAR_DETECTION, callback: Callback<WearDetectionResponse>, options?: Options)}
   * > 替代。
   *
   * @param { SensorType.SENSOR_TYPE_ID_WEAR_DETECTION } type - 要订阅的佩戴检测传感器类型为SENSOR_TYPE_ID_WEAR_DETECTION。
   * @param { Callback<WearDetectionResponse> } callback - 注册佩戴检测传感器的回调函数，上报的数据类型为WearDetectionResponse。
   * @param { Options } options - 用于设置传感器上报频率，默认值为200000000ns（即200ms）。
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.on(type: SensorId.WEAR_DETECTION, callback: Callback<WearDetectionResponse>, options?: Options)
   */
  function on(type: SensorType.SENSOR_TYPE_ID_WEAR_DETECTION, callback: Callback<WearDetectionResponse>,
    options?: Options): void;

  /**
   * 监听加速度传感器的数据变化一次。适用于仅需一次性获取当前加速度数据的场景。
   *
   * > **说明**：
   * >
   * > 从API version 8 开始支持，从API version 9 开始废弃，建议使用[sensor.on.ACCELEROMETER]
   * > {@link sensor.once(type: SensorId.ACCELEROMETER, callback: Callback<AccelerometerResponse>)}
   * > 替代。
   *
   * @permission ohos.permission.ACCELEROMETER
   * @param { SensorType.SENSOR_TYPE_ID_ACCELEROMETER } type - 加速度传感器类型为SENSOR_TYPE_ID_ACCELEROMETER。
   * @param { Callback<AccelerometerResponse> } callback - 注册一次加速度传感器的回调函数，上报的数据类型为AccelerometerResponse。
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.once(type: SensorId.ACCELEROMETER, callback: Callback<AccelerometerResponse>)
   */
  function once(type: SensorType.SENSOR_TYPE_ID_ACCELEROMETER, callback: Callback<AccelerometerResponse>): void;

  /**
   * 监听未校准加速度传感器的数据变化一次。适用于仅需一次性获取当前未校准加速度数据的场景。
   *
   * > **说明**：
   * >
   * > 从API version 8 开始支持，从API version 9 开始废弃，建议使用[sensor.on.ACCELEROMETER_UNCALIBRATED]
   * > {@link sensor.once(type: SensorId.ACCELEROMETER_UNCALIBRATED, callback: Callback<AccelerometerUncalibratedResponse>)}
   * > 替代。
   *
   * @permission ohos.permission.ACCELEROMETER
   * @param { SensorType.SENSOR_TYPE_ID_ACCELEROMETER_UNCALIBRATED } type - 未校准加速度传感器类型为SENSOR_TYPE_ID_ACCELEROMETER_UNCALIBRATED。
   * @param { Callback<AccelerometerUncalibratedResponse> } callback - 注册一次未校准加速度传感器的回调函数，上报的数据类型为AccelerometerUncalibratedResponse。
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.once(type: SensorId.ACCELEROMETER_UNCALIBRATED, callback: Callback<AccelerometerUncalibratedResponse>)
   */
  function once(type: SensorType.SENSOR_TYPE_ID_ACCELEROMETER_UNCALIBRATED, callback: Callback<AccelerometerUncalibratedResponse>): void;

  /**
   * 监听环境光传感器数据变化一次。适用于仅需一次性获取当前环境光数据的场景。
   *
   * > **说明**：
   * >
   * > 从API version 8 开始支持，从API version 9 开始废弃，建议使用[sensor.on.AMBIENT_LIGHT]
   * > {@link sensor.once(type: SensorId.AMBIENT_LIGHT, callback: Callback<LightResponse>)}
   * > 替代。
   *
   * @param { SensorType.SENSOR_TYPE_ID_AMBIENT_LIGHT } type - 环境光传感器类型为SENSOR_TYPE_ID_AMBIENT_LIGHT。
   * @param { Callback<LightResponse> } callback - 注册一次环境光传感器的回调函数，上报的数据类型为LightResponse。
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.once(type: SensorId.AMBIENT_LIGHT, callback: Callback<LightResponse>)
   */
  function once(type: SensorType.SENSOR_TYPE_ID_AMBIENT_LIGHT, callback: Callback<LightResponse>): void;

  /**
   * 监听环境温度传感器数据变化一次。适用于仅需一次性获取当前环境温度数据的场景。
   *
   * > **说明**：
   * >
   * > 从API version 8 开始支持，从API version 9 开始废弃，建议使用[sensor.on.AMBIENT_LIGHT]
   * > {@link sensor.once(type: SensorId.AMBIENT_LIGHT, callback: Callback<LightResponse>)}
   * > 替代。
   *
   * @param { SensorType.SENSOR_TYPE_ID_AMBIENT_TEMPERATURE } type - 环境温度传感器类型为SENSOR_TYPE_ID_AMBIENT_TEMPERATURE。
   * @param { Callback<AmbientTemperatureResponse> } callback - 注册一次环境温度传感器的回调函数，上报的数据类型为AmbientTemperatureResponse。
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.once(type: SensorId.AMBIENT_TEMPERATURE, callback: Callback<AmbientTemperatureResponse>)
   */
  function once(type: SensorType.SENSOR_TYPE_ID_AMBIENT_TEMPERATURE, callback: Callback<AmbientTemperatureResponse>): void;

  /**
   * 监听气压计传感器数据变化一次。适用于仅需一次性获取当前气压数据的场景。
   *
   * > **说明**：
   * >
   * > 从API version 8 开始支持，从API version 9 开始废弃，建议使用[sensor.on.BAROMETER]
   * > {@link sensor.once(type: SensorId.BAROMETER, callback: Callback<BarometerResponse>)}
   * > 替代。
   *
   * @param { SensorType.SENSOR_TYPE_ID_BAROMETER } type - 气压计传感器类型为SENSOR_TYPE_ID_BAROMETER。
   * @param { Callback<BarometerResponse> } callback - 注册一次气压计传感器的回调函数，上报的数据类型为BarometerResponse。
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.once(type: SensorId.BAROMETER, callback: Callback<BarometerResponse>)
   */
  function once(type: SensorType.SENSOR_TYPE_ID_BAROMETER, callback: Callback<BarometerResponse>): void;

  /**
   * 监听重力传感器的数据变化一次。适用于仅需一次性获取当前重力数据的场景。
   *
   * > **说明**：
   * >
   * > 从API version 8 开始支持，从API version 9 开始废弃，建议使用[sensor.on.GRAVITY]
   * > {@link sensor.once(type: SensorId.GRAVITY, callback: Callback<GravityResponse>)}
   * > 替代。
   *
   * @param { SensorType.SENSOR_TYPE_ID_GRAVITY } type - 重力传感器类型为SENSOR_TYPE_ID_GRAVITY。
   * @param { Callback<GravityResponse> } callback - 注册一次重力传感器的回调函数，上报的数据类型为GravityResponse。
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.once(type: SensorId.GRAVITY, callback: Callback<GravityResponse>)
   */
  function once(type: SensorType.SENSOR_TYPE_ID_GRAVITY, callback: Callback<GravityResponse>): void;

  /**
   * 监听陀螺仪传感器的数据变化一次。适用于仅需一次性获取当前陀螺仪数据的场景。
   *
   * > **说明**：
   * >
   * > 从API version 8 开始支持，从API version 9 开始废弃，建议使用[sensor.on.GYROSCOPE]
   * > {@link sensor.once(type: SensorId.GYROSCOPE, callback: Callback<GyroscopeResponse>)}
   * > 替代。
   *
   * @permission ohos.permission.GYROSCOPE
   * @param { SensorType.SENSOR_TYPE_ID_GYROSCOPE } type - 陀螺仪传感器类型为SENSOR_TYPE_ID_GYROSCOPE。
   * @param { Callback<GyroscopeResponse> } callback - 注册一次陀螺仪传感器的回调函数，上报的数据类型为GyroscopeResponse。
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.once(type: SensorId.GYROSCOPE, callback: Callback<GyroscopeResponse>)
   */
  function once(type: SensorType.SENSOR_TYPE_ID_GYROSCOPE, callback: Callback<GyroscopeResponse>): void;

  /**
   * 监听未校准陀螺仪传感器的数据变化一次。适用于仅需一次性获取当前未校准陀螺仪数据的场景。
   *
   * > **说明**：
   * >
   * > 从API version 8 开始支持，从API version 9 开始废弃，建议使用[sensor.on.GYROSCOPE_UNCALIBRATED]
   * > {@link sensor.once(type: SensorId.GYROSCOPE_UNCALIBRATED, callback: Callback<GyroscopeUncalibratedResponse>)}
   * > 替代。
   *
   * @permission ohos.permission.GYROSCOPE
   * @param { SensorType.SENSOR_TYPE_ID_GYROSCOPE_UNCALIBRATED } type - 未校准陀螺仪传感器类型为SENSOR_TYPE_ID_GYROSCOPE_UNCALIBRATED。
   * @param { Callback<GyroscopeUncalibratedResponse> } callback - 注册一次未校准陀螺仪传感器的回调函数，
   *     上报的数据类型为GyroscopeUncalibratedResponse。
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.once(type: SensorId.GYROSCOPE_UNCALIBRATED, callback: Callback<GyroscopeUncalibratedResponse>)
   */
  function once(type: SensorType.SENSOR_TYPE_ID_GYROSCOPE_UNCALIBRATED, callback: Callback<GyroscopeUncalibratedResponse>): void;

  /**
   * 监听霍尔传感器数据变化一次。适用于仅需一次性获取当前霍尔数据的场景。
   *
   * > **说明**：
   * >
   * > 从API version 8 开始支持，从API version 9 开始废弃，建议使用[sensor.on.HALL]
   * > {@link sensor.once(type: SensorId.HALL, callback: Callback<HallResponse>)}
   * > 替代。
   *
   * @param { SensorType.SENSOR_TYPE_ID_HALL } type - 霍尔传感器类型为SENSOR_TYPE_ID_HALL。
   * @param { Callback<HallResponse> } callback - 注册一次霍尔传感器的回调函数，上报的数据类型为HallResponse。
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.once(type: SensorId.HALL, callback: Callback<HallResponse>)
   */
  function once(type: SensorType.SENSOR_TYPE_ID_HALL, callback: Callback<HallResponse>): void;

  /**
   * 监听心率传感器数据变化一次。适用于仅需一次性获取当前心率数据的场景。
   *
   * > **说明**：
   * >
   * > 从API version 8 开始支持，从API version 9 开始废弃，建议使用[sensor.on.HEART_RATE]
   * > {@link sensor.once(type: SensorId.HEART_RATE, callback: Callback<HeartRateResponse>)}
   * > 替代。
   *
   * @permission ohos.permission.HEART_RATE
   * @param { SensorType.SENSOR_TYPE_ID_HEART_RATE } type - 心率传感器类型为SENSOR_TYPE_ID_HEART_RATE。
   * @param { Callback<HeartRateResponse> } callback - 注册一次心率传感器的回调函数，上报的数据类型为HeartRateResponse。
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.once(type: SensorId.HEART_RATE, callback: Callback<HeartRateResponse>)
   */
  function once(type: SensorType.SENSOR_TYPE_ID_HEART_RATE, callback: Callback<HeartRateResponse>): void;

  /**
   * 监听湿度传感器数据变化一次。适用于仅需一次性获取当前湿度数据的场景。
   *
   * > **说明**：
   * >
   * > 从API version 8 开始支持，从API version 9 开始废弃，建议使用[sensor.on.HUMIDITY]
   * > {@link sensor.once(type: SensorId.HUMIDITY, callback: Callback<HumidityResponse>)}
   * > 替代。
   *
   * @param { SensorType.SENSOR_TYPE_ID_HUMIDITY } type - 湿度传感器类型为SENSOR_TYPE_ID_HUMIDITY。
   * @param { Callback<HumidityResponse> } callback - 注册一次湿度传感器的回调函数，上报的数据类型为HumidityResponse。
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.once(type: SensorId.HUMIDITY, callback: Callback<HumidityResponse>)
   */
  function once(type: SensorType.SENSOR_TYPE_ID_HUMIDITY, callback: Callback<HumidityResponse>): void;

  /**
   * 监听线性加速度传感器数据变化一次。适用于仅需一次性获取当前线性加速度数据的场景。
   *
   * > **说明**：
   * >
   * > 从API version 8 开始支持，从API version 9 开始废弃，建议使用[sensor.on.LINEAR_ACCELEROMETER]
   * > {@link sensor.once(type: SensorId.LINEAR_ACCELEROMETER, callback: Callback<LinearAccelerometerResponse>)}
   * > 替代。
   *
   * @permission ohos.permission.ACCELEROMETER
   * @param { SensorType.SENSOR_TYPE_ID_LINEAR_ACCELERATION } type - 线性加速度传感器类型为SENSOR_TYPE_ID_LINEAR_ACCELERATION。
   * @param { Callback<LinearAccelerometerResponse> } callback - 注册一次线性加速度传感器的回调函数，
   *     上报的数据类型为LinearAccelerometerResponse。
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.once(type: SensorId.LINEAR_ACCELEROMETER, callback: Callback<LinearAccelerometerResponse>)
   */
  function once(type: SensorType.SENSOR_TYPE_ID_LINEAR_ACCELERATION, callback: Callback<LinearAccelerometerResponse>): void;

  /**
   * 监听磁场传感器数据变化一次。适用于仅需一次性获取当前磁场数据的场景。
   *
   * > **说明**：
   * >
   * > 从API version 8 开始支持，从API version 9 开始废弃，建议使用[sensor.on.MAGNETIC_FIELD]
   * > {@link sensor.once(type: SensorId.MAGNETIC_FIELD, callback: Callback<MagneticFieldResponse>)}
   * > 替代。
   *
   * @param { SensorType.SENSOR_TYPE_ID_MAGNETIC_FIELD } type - 磁场传感器类型为SENSOR_TYPE_ID_MAGNETIC_FIELD。
   * @param { Callback<MagneticFieldResponse> } callback - 注册一次磁场传感器的回调函数，上报的数据类型为MagneticFieldResponse。
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.once(type: SensorId.MAGNETIC_FIELD, callback: Callback<MagneticFieldResponse>)
   */
  function once(type: SensorType.SENSOR_TYPE_ID_MAGNETIC_FIELD, callback: Callback<MagneticFieldResponse>): void;

  /**
   * 监听未校准磁场传感器数据变化一次。适用于仅需一次性获取当前未校准磁场数据的场景。
   *
   * > **说明**：
   * >
   * > 从API version 8 开始支持，从API version 9 开始废弃，建议使用[sensor.on.MAGNETIC_FIELD_UNCALIBRATED]
   * > {@link sensor.once(type: SensorId.MAGNETIC_FIELD_UNCALIBRATED, callback: Callback<MagneticFieldUncalibratedResponse>)}
   * > 替代。
   *
   * @param { SensorType.SENSOR_TYPE_ID_MAGNETIC_FIELD_UNCALIBRATED } type - 未校准磁场传感器类型为SENSOR_TYPE_ID_MAGNETIC_FIELD_UNCALIBRATED。
   * @param { Callback<MagneticFieldUncalibratedResponse> } callback - 注册一次未校准磁场传感器的回调函数，
   *     上报的数据类型为MagneticFieldUncalibratedResponse。
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.once(type: SensorId.MAGNETIC_FIELD_UNCALIBRATED, callback: Callback<MagneticFieldUncalibratedResponse>)
   */
  function once(type: SensorType.SENSOR_TYPE_ID_MAGNETIC_FIELD_UNCALIBRATED, callback: Callback<MagneticFieldUncalibratedResponse>): void;

  /**
   * 监听方向传感器数据变化一次。适用于仅需一次性获取当前方向数据的场景。
   *
   * > **说明**：
   * >
   * > 从API version 8 开始支持，从API version 9 开始废弃，建议使用[sensor.on.ORIENTATION]
   * > {@link sensor.once(type: SensorId.ORIENTATION, callback: Callback<OrientationResponse>)}
   * > 替代。
   *
   * @param { SensorType.SENSOR_TYPE_ID_ORIENTATION } type - 方向传感器类型为SENSOR_TYPE_ID_ORIENTATION。
   * @param { Callback<OrientationResponse> } callback - 注册一次方向传感器的回调函数，上报的数据类型为OrientationResponse。
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.once(type: SensorId.ORIENTATION, callback: Callback<OrientationResponse>)
   */
  function once(type: SensorType.SENSOR_TYPE_ID_ORIENTATION, callback: Callback<OrientationResponse>): void;

  /**
   * 监听计步器传感器数据变化一次。适用于仅需一次性获取当前计步数据的场景。
   *
   * > **说明**：
   * >
   * > 从API version 8 开始支持，从API version 9 开始废弃，建议使用[sensor.on.PEDOMETER]
   * > {@link sensor.once(type: SensorId.PEDOMETER, callback: Callback<PedometerResponse>)}
   * > 替代。
   *
   * @permission ohos.permission.ACTIVITY_MOTION
   * @param { SensorType.SENSOR_TYPE_ID_PEDOMETER } type - 计步传感器类型为SENSOR_TYPE_ID_PEDOMETER。
   * @param { Callback<PedometerResponse> } callback - 注册一次计步传感器的回调函数，上报的数据类型为PedometerResponse。
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.once(type: SensorId.PEDOMETER, callback: Callback<PedometerResponse>)
   */
  function once(type: SensorType.SENSOR_TYPE_ID_PEDOMETER, callback: Callback<PedometerResponse>): void;

  /**
   * 监听计步检测传感器数据变化一次。适用于仅需一次性获取当前计步检测数据的场景。
   *
   * > **说明**：
   * >
   * > 从API version 8 开始支持，从API version 9 开始废弃，建议使用[sensor.on.PEDOMETER_DETECTION]
   * > {@link sensor.once(type: SensorId.PEDOMETER_DETECTION, callback: Callback<PedometerDetectionResponse>)}
   * > 替代。
   *
   * @permission ohos.permission.ACTIVITY_MOTION
   * @param { SensorType.SENSOR_TYPE_ID_PEDOMETER_DETECTION } type - 计步检测传感器类型为SENSOR_TYPE_ID_PEDOMETER_DETECTION。
   * @param { Callback<PedometerDetectionResponse> } callback - 注册一次计步检测传感器的回调函数，上报的数据类型为PedometerDetectionResponse。
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.once(type: SensorId.PEDOMETER_DETECTION, callback: Callback<PedometerDetectionResponse>)
   */
  function once(type: SensorType.SENSOR_TYPE_ID_PEDOMETER_DETECTION, callback: Callback<PedometerDetectionResponse>): void;

  /**
   * 监听接近光传感器数据变化一次。适用于仅需一次性获取当前接近光数据的场景。
   *
   * > **说明**：
   * >
   * > 从API version 8 开始支持，从API version 9 开始废弃，建议使用[sensor.on.PROXIMITY]
   * > {@link sensor.once(type: SensorId.PROXIMITY, callback: Callback<ProximityResponse>)}
   * > 替代。
   *
   * @param { SensorType.SENSOR_TYPE_ID_PROXIMITY } type - 接近光传感器类型为SENSOR_TYPE_ID_PROXIMITY。
   * @param { Callback<ProximityResponse> } callback - 注册一次接近光传感器的回调函数，上报的数据类型为ProximityResponse。
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.once(type: SensorId.PROXIMITY, callback: Callback<ProximityResponse>)
   */
  function once(type: SensorType.SENSOR_TYPE_ID_PROXIMITY, callback: Callback<ProximityResponse>): void;

  /**
   * 监听旋转矢量传感器数据变化一次。适用于仅需一次性获取当前旋转矢量数据的场景。
   *
   * > **说明**：
   * >
   * > 从API version 8 开始支持，从API version 9 开始废弃，建议使用[sensor.on.ROTATION_VECTOR]
   * > {@link sensor.once(type: SensorId.ROTATION_VECTOR, callback: Callback<RotationVectorResponse>)}
   * > 替代。
   *
   * @param { SensorType.SENSOR_TYPE_ID_ROTATION_VECTOR } type - 旋转矢量传感器类型为SENSOR_TYPE_ID_ROTATION_VECTOR。
   * @param { Callback<RotationVectorResponse> } callback - 注册一次旋转矢量传感器的回调函数，上报的数据类型为RotationVectorResponse。
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.once(type: SensorId.ROTATION_VECTOR, callback: Callback<RotationVectorResponse>)
   */
  function once(type: SensorType.SENSOR_TYPE_ID_ROTATION_VECTOR, callback: Callback<RotationVectorResponse>): void;

  /**
   * 监听有效运动传感器的数据变化一次。适用于仅需一次性获取当前有效运动数据的场景。
   *
   * > **说明**：
   * >
   * > 从API version 8 开始支持，从API version 9 开始废弃，建议使用[sensor.on.SIGNIFICANT_MOTION]
   * > {@link sensor.once(type: SensorId.SIGNIFICANT_MOTION, callback: Callback<SignificantMotionResponse>)}
   * > 替代。
   *
   * @param { SensorType.SENSOR_TYPE_ID_SIGNIFICANT_MOTION } type - 有效运动传感器类型为SENSOR_TYPE_ID_SIGNIFICANT_MOTION。
   * @param { Callback<SignificantMotionResponse> } callback - 注册一次有效运动传感器的回调函数，上报的数据类型为SignificantMotionResponse。
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.once(type: SensorId.SIGNIFICANT_MOTION, callback: Callback<SignificantMotionResponse>)
   */
  function once(type: SensorType.SENSOR_TYPE_ID_SIGNIFICANT_MOTION, callback: Callback<SignificantMotionResponse>): void;

  /**
   * 监听所佩戴的检测传感器的数据变化一次。适用于仅需一次性获取当前佩戴检测数据的场景。
   *
   * > **说明**：
   * >
   * > 从API version 8 开始支持，从API version 9 开始废弃，建议使用[sensor.on.WEAR_DETECTION]
   * > {@link sensor.once(type: SensorId.WEAR_DETECTION, callback: Callback<WearDetectionResponse>)}
   * > 替代。
   *
   * @param { SensorType.SENSOR_TYPE_ID_WEAR_DETECTION } type - 佩戴检测传感器类型为SENSOR_TYPE_ID_WEAR_DETECTION。
   * @param { Callback<WearDetectionResponse> } callback - 注册一次穿戴检测传感器的回调函数，上报的数据类型为WearDetectionResponse。
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.once(type: SensorId.WEAR_DETECTION, callback: Callback<WearDetectionResponse>)
   */
  function once(type: SensorType.SENSOR_TYPE_ID_WEAR_DETECTION, callback: Callback<WearDetectionResponse>): void;

  /**
   * 取消订阅加速度传感器数据。off取消订阅必须与on订阅成对出现。
   *
   * > **说明**：
   * >
   * > 从API version 8 开始支持，从API version 9 开始废弃，建议使用[sensor.on.ACCELEROMETER]
   * > {@link sensor.off(type: SensorId.ACCELEROMETER, callback?: Callback<AccelerometerResponse>)}
   * > 替代。
   *
   * @permission ohos.permission.ACCELEROMETER
   * @param { SensorType.SENSOR_TYPE_ID_ACCELEROMETER } type - 要取消订阅的加速度传感器类型为SENSOR_TYPE_ID_ACCELEROMETER。
   * @param { Callback<AccelerometerResponse> } callback - 回调函数，需要取消订阅的回调函数，若无此参数，则取消订阅当前类型的所有回调函数。
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.off(type: SensorId.ACCELEROMETER, callback?: Callback<AccelerometerResponse>)
   */
  function off(type: SensorType.SENSOR_TYPE_ID_ACCELEROMETER, callback?: Callback<AccelerometerResponse>): void;

  /**
   * 取消订阅未校准加速度传感器数据。off取消订阅必须与on订阅成对出现。
   *
   * > **说明**：
   * >
   * > 从API version 8 开始支持，从API version 9 开始废弃，建议使用[sensor.on.ACCELEROMETER_UNCALIBRATED]
   * > {@link sensor.off(type: SensorId.ACCELEROMETER_UNCALIBRATED, callback?: Callback<AccelerometerUncalibratedResponse>)}
   * > 替代。
   *
   * @permission ohos.permission.ACCELEROMETER
   * @param { SensorType.SENSOR_TYPE_ID_ACCELEROMETER_UNCALIBRATED } type - 要取消订阅的未校准加速度计传感器类型为SENSOR_TYPE_ID_ACCELEROMETER_UNCALIBRATED。
   * @param { Callback<AccelerometerUncalibratedResponse> } callback - 回调函数，需要取消订阅的回调函数，若无此参数，则取消订阅当前类型的所有回调函数。
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.off(type: SensorId.ACCELEROMETER_UNCALIBRATED, callback?: Callback<AccelerometerUncalibratedResponse>)
   */
  function off(type: SensorType.SENSOR_TYPE_ID_ACCELEROMETER_UNCALIBRATED,
    callback?: Callback<AccelerometerUncalibratedResponse>): void;

  /**
   * 取消订阅环境光传感器数据。off取消订阅必须与on订阅成对出现。
   *
   * > **说明**：
   * >
   * > 从API version 8 开始支持，从API version 9 开始废弃，建议使用[sensor.on.AMBIENT_LIGHT]
   * > {@link sensor.off(type: SensorId.AMBIENT_LIGHT, callback?: Callback<LightResponse>)}
   * > 替代。
   *
   * @param { SensorType.SENSOR_TYPE_ID_AMBIENT_LIGHT } type - 要取消订阅的环境光传感器类型为SENSOR_TYPE_ID_AMBIENT_LIGHT。
   * @param { Callback<LightResponse> } callback - 回调函数，需要取消订阅的回调函数，若无此参数，则取消订阅当前类型的所有回调函数。
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.off(type: SensorId.AMBIENT_LIGHT, callback?: Callback<LightResponse>)
   */
  function off(type: SensorType.SENSOR_TYPE_ID_AMBIENT_LIGHT, callback?: Callback<LightResponse>): void;

  /**
   * 取消订阅环境温度传感器数据。off取消订阅必须与on订阅成对出现。
   *
   * > **说明**：
   * >
   * > 从API version 8 开始支持，从API version 9 开始废弃，建议使用[sensor.on.AMBIENT_TEMPERATURE]
   * > {@link sensor.off(type: SensorId.AMBIENT_TEMPERATURE, callback?: Callback<AmbientTemperatureResponse>)}
   * > 替代。
   *
   * @param { SensorType.SENSOR_TYPE_ID_AMBIENT_TEMPERATURE } type - 要取消订阅的环境温度传感器类型为SENSOR_TYPE_ID_AMBIENT_TEMPERATURE。
   * @param { Callback<AmbientTemperatureResponse> } callback - 回调函数，需要取消订阅的回调函数，若无此参数，则取消订阅当前类型的所有回调函数。
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.off(type: SensorId.AMBIENT_TEMPERATURE, callback?: Callback<AmbientTemperatureResponse>)
   */
  function off(type: SensorType.SENSOR_TYPE_ID_AMBIENT_TEMPERATURE, callback?: Callback<AmbientTemperatureResponse>): void;

  /**
   * 取消订阅气压计传感器数据。off取消订阅必须与on订阅成对出现。
   *
   * > **说明**：
   * >
   * > 从API version 8 开始支持，从API version 9 开始废弃，建议使用[sensor.on.BAROMETER]
   * > {@link sensor.off(type: SensorId.BAROMETER, callback?: Callback<BarometerResponse>)}
   * > 替代。
   *
   * @param { SensorType.SENSOR_TYPE_ID_BAROMETER } type - 要取消订阅的气压计传感器类型为SENSOR_TYPE_ID_BAROMETER。
   * @param { Callback<BarometerResponse> } callback - 回调函数，需要取消订阅的回调函数，若无此参数，则取消订阅当前类型的所有回调函数。
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.off(type: SensorId.BAROMETER, callback?: Callback<BarometerResponse>)
   */
  function off(type: SensorType.SENSOR_TYPE_ID_BAROMETER, callback?: Callback<BarometerResponse>): void;

  /**
   * 取消订阅重力传感器数据。off取消订阅必须与on订阅成对出现。
   *
   * > **说明**：
   * >
   * > 从API version 8 开始支持，从API version 9 开始废弃，建议使用[sensor.on.GRAVITY]
   * > {@link sensor.off(type: SensorId.GRAVITY, callback?: Callback<GravityResponse>)}
   * > 替代。
   *
   * @param { SensorType.SENSOR_TYPE_ID_GRAVITY } type - 要取消订阅的重力传感器类型为SENSOR_TYPE_ID_GRAVITY。
   * @param { Callback<GravityResponse> } callback - 回调函数，需要取消订阅的回调函数，若无此参数，则取消订阅当前类型的所有回调函数。
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.off(type: SensorId.GRAVITY, callback?: Callback<GravityResponse>)
   */
  function off(type: SensorType.SENSOR_TYPE_ID_GRAVITY, callback?: Callback<GravityResponse>): void;

  /**
   * 取消订阅陀螺仪传感器数据。off取消订阅必须与on订阅成对出现。
   *
   * > **说明**：
   * >
   * > 从API version 8 开始支持，从API version 9 开始废弃，建议使用[sensor.on.GYROSCOPE]
   * > {@link sensor.off(type: SensorId.GYROSCOPE, callback?: Callback<GyroscopeResponse>)}
   * > 替代。
   *
   * @permission ohos.permission.GYROSCOPE
   * @param { SensorType.SENSOR_TYPE_ID_GYROSCOPE } type - 要取消订阅的陀螺仪传感器类型为SENSOR_TYPE_ID_GYROSCOPE。
   * @param { Callback<GyroscopeResponse> } callback - 回调函数，需要取消订阅的回调函数，若无此参数，则取消订阅当前类型的所有回调函数。
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.off(type: SensorId.GYROSCOPE, callback?: Callback<GyroscopeResponse>)
   */
  function off(type: SensorType.SENSOR_TYPE_ID_GYROSCOPE, callback?: Callback<GyroscopeResponse>): void;

  /**
   * 取消订阅未校准陀螺仪传感器数据。off取消订阅必须与on订阅成对出现。
   *
   * > **说明**：
   * >
   * > 从API version 8 开始支持，从API version 9 开始废弃，建议使用[sensor.on.GYROSCOPE_UNCALIBRATED]
   * > {@link sensor.off(type: SensorId.GYROSCOPE_UNCALIBRATED, callback?: Callback<GyroscopeUncalibratedResponse>)}
   * > 替代。
   *
   * @permission ohos.permission.GYROSCOPE
   * @param { SensorType.SENSOR_TYPE_ID_GYROSCOPE_UNCALIBRATED } type - 要取消订阅的未校准陀螺仪传感器类型为SENSOR_TYPE_ID_GYROSCOPE_UNCALIBRATED。
   * @param { Callback<GyroscopeUncalibratedResponse> } callback - 回调函数，需要取消订阅的回调函数，若无此参数，则取消订阅当前类型的所有回调函数。
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.off(type: SensorId.GYROSCOPE_UNCALIBRATED, callback?: Callback<GyroscopeUncalibratedResponse>)
   */
  function off(type: SensorType.SENSOR_TYPE_ID_GYROSCOPE_UNCALIBRATED, callback?: Callback<GyroscopeUncalibratedResponse>): void;

  /**
   * 取消订阅霍尔传感器数据。off取消订阅必须与on订阅成对出现。
   *
   * > **说明**：
   * >
   * > 从API version 8 开始支持，从API version 9 开始废弃，建议使用[sensor.on.HALL]
   * > {@link sensor.off(type: SensorId.HALL, callback?: Callback<HallResponse>)}
   * > 替代。
   *
   * @param { SensorType.SENSOR_TYPE_ID_HALL } type - 要取消订阅的霍尔传感器类型为SENSOR_TYPE_ID_HALL。
   * @param { Callback<HallResponse> } callback - 回调函数，需要取消订阅的回调函数，若无此参数，则取消订阅当前类型的所有回调函数。
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.off(type: SensorId.HALL, callback?: Callback<HallResponse>)
   */
  function off(type: SensorType.SENSOR_TYPE_ID_HALL, callback?: Callback<HallResponse>): void;

  /**
   * 取消订阅心率传感器数据。off取消订阅必须与on订阅成对出现。
   *
   * > **说明**：
   * >
   * > 从API version 8 开始支持，从API version 9 开始废弃，建议使用[sensor.on.HEART_RATE]
   * > {@link sensor.off(type: SensorId.HEART_RATE, callback?: Callback<HeartRateResponse>)}
   * > 替代。
   *
   * @permission ohos.permission.HEALTH_DATA
   * @param { SensorType.SENSOR_TYPE_ID_HEART_RATE } type - 要取消订阅的心率传感器类型为SENSOR_TYPE_ID_HEART_RATE。
   * @param { Callback<HeartRateResponse> } callback - 回调函数，需要取消订阅的回调函数，若无此参数，则取消订阅当前类型的所有回调函数。
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.off(type: SensorId.HEART_RATE, callback?: Callback<HeartRateResponse>)
   */
  function off(type: SensorType.SENSOR_TYPE_ID_HEART_RATE, callback?: Callback<HeartRateResponse>): void;

  /**
   * 取消订阅湿度传感器数据。off取消订阅必须与on订阅成对出现。
   *
   * > **说明**：
   * >
   * > 从API version 8 开始支持，从API version 9 开始废弃，建议使用[sensor.on.HUMIDITY]
   * > {@link sensor.off(type: SensorId.HUMIDITY, callback?: Callback<HumidityResponse>)}
   * > 替代。
   *
   * @param { SensorType.SENSOR_TYPE_ID_HUMIDITY } type - 要取消订阅的湿度传感器类型为SENSOR_TYPE_ID_HUMIDITY。
   * @param { Callback<HumidityResponse> } callback - 回调函数，需要取消订阅的回调函数，若无此参数，则取消订阅当前类型的所有回调函数。
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.off(type: SensorId.HUMIDITY, callback?: Callback<HumidityResponse>)
   */
  function off(type: SensorType.SENSOR_TYPE_ID_HUMIDITY, callback?: Callback<HumidityResponse>): void;

  /**
   * 取消订阅线性加速度传感器数据。off取消订阅必须与on订阅成对出现。
   *
   * > **说明**：
   * >
   * > 从API version 8 开始支持，从API version 9 开始废弃，建议使用[sensor.on.LINEAR_ACCELEROMETER]
   * > {@link sensor.off(type: SensorId.LINEAR_ACCELEROMETER, callback?: Callback<LinearAccelerometerResponse>)}
   * > 替代。
   *
   * @permission ohos.permission.ACCELEROMETER
   * @param { SensorType.SENSOR_TYPE_ID_LINEAR_ACCELERATION } type - 要取消订阅的线性加速度传感器类型为SENSOR_TYPE_ID_LINEAR_ACCELERATION。
   * @param { Callback<LinearAccelerometerResponse> } callback - 回调函数，需要取消订阅的回调函数，若无此参数，则取消订阅当前类型的所有回调函数。
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.off(type: SensorId.LINEAR_ACCELEROMETER, callback?: Callback<LinearAccelerometerResponse>)
   */
  function off(type: SensorType.SENSOR_TYPE_ID_LINEAR_ACCELERATION, callback?: Callback<LinearAccelerometerResponse>): void;

  /**
   * 取消订阅磁场传感器数据。off取消订阅必须与on订阅成对出现。
   *
   * > **说明**：
   * >
   * > 从API version 8 开始支持，从API version 9 开始废弃，建议使用[sensor.on.MAGNETIC_FIELD]
   * > {@link sensor.off(type: SensorId.MAGNETIC_FIELD, callback?: Callback<MagneticFieldResponse>)}
   * > 替代。
   *
   * @param { SensorType.SENSOR_TYPE_ID_MAGNETIC_FIELD } type - 要取消订阅的磁场传感器类型为SENSOR_TYPE_ID_MAGNETIC_FIELD。
   * @param { Callback<MagneticFieldResponse> } callback - 回调函数，需要取消订阅的回调函数，若无此参数，则取消订阅当前类型的所有回调函数。
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.off(type: SensorId.MAGNETIC_FIELD, callback?: Callback<MagneticFieldResponse>)
   */
  function off(type: SensorType.SENSOR_TYPE_ID_MAGNETIC_FIELD, callback?: Callback<MagneticFieldResponse>): void;

  /**
   * 取消订阅未校准磁场传感器数据。off取消订阅必须与on订阅成对出现。
   *
   * > **说明**：
   * >
   * > 从API version 8 开始支持，从API version 9 开始废弃，建议使用[sensor.on.MAGNETIC_FIELD_UNCALIBRATED]
   * > {@link sensor.off(type: SensorId.MAGNETIC_FIELD_UNCALIBRATED, callback?: Callback<MagneticFieldUncalibratedResponse>)}
   * > 替代。
   *
   * @param { SensorType.SENSOR_TYPE_ID_MAGNETIC_FIELD_UNCALIBRATED } type - 要取消订阅的未校准磁场传感器类型为SENSOR_TYPE_ID_MAGNETIC_FIELD_UNCALIBRATED。
   * @param { Callback<MagneticFieldUncalibratedResponse> } callback - 回调函数，需要取消订阅的回调函数，若无此参数，则取消订阅当前类型的所有回调函数。
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.off(type: SensorId.MAGNETIC_FIELD_UNCALIBRATED, callback?: Callback<MagneticFieldUncalibratedResponse>)
   */
  function off(type: SensorType.SENSOR_TYPE_ID_MAGNETIC_FIELD_UNCALIBRATED, callback?: Callback<MagneticFieldUncalibratedResponse>): void;

  /**
   * 取消订阅方向传感器数据。off取消订阅必须与on订阅成对出现。
   *
   * > **说明**：
   * >
   * > 从API version 8 开始支持，从API version 9 开始废弃，建议使用[sensor.on.ORIENTATION]
   * > {@link sensor.off(type: SensorId.ORIENTATION, callback?: Callback<OrientationResponse>)}
   * > 替代。
   *
   * @param { SensorType.SENSOR_TYPE_ID_ORIENTATION } type - 要取消订阅的方向传感器类型为SENSOR_TYPE_ID_ORIENTATION。
   * @param { Callback<OrientationResponse> } callback - 回调函数，需要取消订阅的回调函数，若无此参数，则取消订阅当前类型的所有回调函数。
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.off(type: SensorId.ORIENTATION, callback?: Callback<OrientationResponse>)
   */
  function off(type: SensorType.SENSOR_TYPE_ID_ORIENTATION, callback?: Callback<OrientationResponse>): void;

  /**
   * 取消订阅计步传感器数据。off取消订阅必须与on订阅成对出现。
   *
   * > **说明**：
   * >
   * > 从API version 8 开始支持，从API version 9 开始废弃，建议使用[sensor.on.PEDOMETER]
   * > {@link sensor.off(type: SensorId.PEDOMETER, callback?: Callback<PedometerResponse>)}
   * > 替代。
   *
   * @permission ohos.permission.ACTIVITY_MOTION
   * @param { SensorType.SENSOR_TYPE_ID_PEDOMETER } type - 要取消订阅的计步传感器类型为SENSOR_TYPE_ID_PEDOMETER。
   * @param { Callback<PedometerResponse> } callback - 回调函数，需要取消订阅的回调函数，若无此参数，则取消订阅当前类型的所有回调函数。
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.off(type: SensorId.PEDOMETER, callback?: Callback<PedometerResponse>)
   */
  function off(type: SensorType.SENSOR_TYPE_ID_PEDOMETER, callback?: Callback<PedometerResponse>): void;

  /**
   * 取消订阅计步检测传感器数据。off取消订阅必须与on订阅成对出现。
   *
   * > **说明**：
   * >
   * > 从API version 8 开始支持，从API version 9 开始废弃，建议使用[sensor.on.PEDOMETER_DETECTION]
   * > {@link sensor.off(type: SensorId.PEDOMETER_DETECTION, callback?: Callback<PedometerDetectionResponse>)}
   * > 替代。
   *
   * @permission ohos.permission.ACTIVITY_MOTION
   * @param { SensorType.SENSOR_TYPE_ID_PEDOMETER_DETECTION } type - 要取消订阅的计步检测传感器类型为SENSOR_TYPE_ID_PEDOMETER_DETECTION。
   * @param { Callback<PedometerDetectionResponse> } callback - 回调函数，需要取消订阅的回调函数，若无此参数，则取消订阅当前类型的所有回调函数。
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.off(type: SensorId.PEDOMETER_DETECTION, callback?: Callback<PedometerDetectionResponse>)
   */
  function off(type: SensorType.SENSOR_TYPE_ID_PEDOMETER_DETECTION, callback?: Callback<PedometerDetectionResponse>): void;

  /**
   * 取消订阅接近光传感器数据。off取消订阅必须与on订阅成对出现。
   *
   * > **说明**：
   * >
   * > 从API version 8 开始支持，从API version 9 开始废弃，建议使用[sensor.on.PROXIMITY]
   * > {@link sensor.off(type: SensorId.PROXIMITY, callback?: Callback<ProximityResponse>)}
   * > 替代。
   *
   * @param { SensorType.SENSOR_TYPE_ID_PROXIMITY } type - 要取消订阅的接近光传感器类型为SENSOR_TYPE_ID_PROXIMITY。
   * @param { Callback<ProximityResponse> } callback - 回调函数，需要取消订阅的回调函数，若无此参数，则取消订阅当前类型的所有回调函数。
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.off(type: SensorId.PROXIMITY, callback?: Callback<ProximityResponse>)
   */
  function off(type: SensorType.SENSOR_TYPE_ID_PROXIMITY, callback?: Callback<ProximityResponse>): void;

  /**
   * 取消订阅旋转矢量传感器数据。off取消订阅必须与on订阅成对出现。
   *
   * > **说明**：
   * >
   * > 从API version 8 开始支持，从API version 9 开始废弃，建议使用[sensor.on.ROTATION_VECTOR]
   * > {@link sensor.off(type: SensorId.ROTATION_VECTOR, callback?: Callback<RotationVectorResponse>)}
   * > 替代。
   *
   * @param { SensorType.SENSOR_TYPE_ID_ROTATION_VECTOR } type - 要取消订阅的旋转矢量传感器类型为SENSOR_TYPE_ID_ROTATION_VECTOR。
   * @param { Callback<RotationVectorResponse> } callback - 回调函数，需要取消订阅的回调函数，若无此参数，则取消订阅当前类型的所有回调函数。
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.off(type: SensorId.ROTATION_VECTOR, callback?: Callback<RotationVectorResponse>)
   */
  function off(type: SensorType.SENSOR_TYPE_ID_ROTATION_VECTOR, callback?: Callback<RotationVectorResponse>): void;

  /**
   * 取消订阅有效运动传感器数据。off取消订阅必须与on订阅成对出现。
   *
   * > **说明**：
   * >
   * > 从API version 8 开始支持，从API version 9 开始废弃，建议使用[sensor.on.SIGNIFICANT_MOTION]
   * > {@link sensor.off(type: SensorId.SIGNIFICANT_MOTION, callback?: Callback<SignificantMotionResponse>)}
   * > 替代。
   *
   * @param { SensorType.SENSOR_TYPE_ID_SIGNIFICANT_MOTION } type - 要取消订阅的有效运动传感器类型为SENSOR_TYPE_ID_SIGNIFICANT_MOTION。
   * @param { Callback<SignificantMotionResponse> } callback - 回调函数，需要取消订阅的回调函数，若无此参数，则取消订阅当前类型的所有回调函数。
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.off(type: SensorId.SIGNIFICANT_MOTION, callback?: Callback<SignificantMotionResponse>)
   */
  function off(type: SensorType.SENSOR_TYPE_ID_SIGNIFICANT_MOTION, callback?: Callback<SignificantMotionResponse>): void;

  /**
   * 取消订阅佩戴检测传感器数据。off取消订阅必须与on订阅成对出现。
   *
   * > **说明**：
   * >
   * > 从API version 8 开始支持，从API version 9 开始废弃，建议使用[sensor.on.WEAR_DETECTION]
   * > {@link sensor.off(type: SensorId.WEAR_DETECTION, callback?: Callback<WearDetectionResponse>)}
   * > 替代。
   *
   * @param { SensorType.SENSOR_TYPE_ID_WEAR_DETECTION } type - 要取消订阅的佩戴检测传感器类型为SENSOR_TYPE_ID_WEAR_DETECTION。
   * @param { Callback<WearDetectionResponse> } callback - 回调函数，需要取消订阅的回调函数，若无此参数，则取消订阅当前类型的所有回调函数。
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.off(type: SensorId.WEAR_DETECTION, callback?: Callback<WearDetectionResponse>)
   */
  function off(type: SensorType.SENSOR_TYPE_ID_WEAR_DETECTION, callback?: Callback<WearDetectionResponse>): void;

  /**
   * 指示传感器信息。
   *
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   * @since 23 static
   */
  interface Sensor {
    /**
     * 传感器名称，标识传感器的类型和型号。
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 9 dynamic
     * @since 23 static
     */
    sensorName:string;

    /**
     * 传感器厂商名称，标识传感器的制造商。
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 9 dynamic
     * @since 23 static
     */
    vendorName:string;

    /**
     * 传感器固件版本号，标识传感器固件的当前版本。
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 9 dynamic
     * @since 23 static
     */
    firmwareVersion:string;

    /**
     * 传感器硬件版本号，标识传感器硬件的当前版本。
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 9 dynamic
     * @since 23 static
     */
    hardwareVersion:string;

    /**
     * 传感器类型ID，对应[SensorId]{@link sensor.SensorId}枚举值。
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 9 dynamic
     * @since 23 static
     */
    sensorId:int;

    /**
     * 传感器最大测量范围。单位：取决于具体传感器类型（如加速度传感器为m/s²）。
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 9 dynamic
     * @since 23 static
     */
    maxRange:double;

    /**
     * 传感器最小采样周期。单位：ns（纳秒）。
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 9 dynamic
     * @since 23 static
     */
    minSamplePeriod:long;

    /**
     * 传感器最大采样周期。单位：ns（纳秒）。
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 9 dynamic
     * @since 23 static
     */
    maxSamplePeriod:long;

    /**
     * 传感器精度。单位：取决于具体传感器类型。
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 9 dynamic
     * @since 23 static
     */
    precision:double;

    /**
     * 传感器估计功耗。单位：mA（毫安）。
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 9 dynamic
     * @since 23 static
     */
    power:double;

    /**
     * 传感器索引，同一类型传感器可能有多个实例，通过sensorIndex区分。
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 19 dynamic
     * @since 23 static
     */
    sensorIndex?: int;

    /**
     * 设备ID。-1表示本地设备，其它值表示远程设备。
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 19 dynamic
     * @since 23 static
     */
    deviceId?: int;

    /**
     * 设备名称，标识传感器的来源设备。
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 19 dynamic
     * @since 23 static
     */
    deviceName?: string;

    /**
     * 是否为本地传感器。true表示本地传感器，false表示非本地传感器（即远程设备上的传感器）。默认值：true。
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 19 dynamic
     * @since 23 static
     */
    isLocalSensor?: boolean;

    /**
     * 是否为模拟传感器。true表示模拟传感器，false表示真实传感器。默认值：false。
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 23 dynamic&static
     */
    isMockSensor?: boolean;
  }

  /**
   * 获取指定传感器类型的属性信息。使用callback异步回调。
   *
   * @param { SensorId } type - 指定传感器类型。
   * @param { AsyncCallback<Sensor> } callback - 回调函数，异步返回指定传感器的属性信息。
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
   * 获取指定类型的传感器信息。使用Promise异步回调。
   *
   * @param { SensorId } type - 传感器类型。
   * @returns { Promise<Sensor> } 使用异步方式返回传感器信息。
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
   * 获取指定类型的传感器信息，使用同步方式返回结果。
   *
   * @param { SensorId } type - 传感器类型。
   * @returns { Sensor } 使用同步方式返回传感器信息。
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
   * 同步获取指定设备和类型的传感器信息。如果存在外设且未指定设备ID，获取到的传感器将是所有符合指定传感器类型的本地和外设传感器。如果不存在外设，则仅获取本地的传感器。
   *
   * @param { SensorId } type - 指定传感器类型。
   * @param { int } [deviceId] - 设备ID，默认为查询本地设备，默认值为-1，表示本地设备，设备ID需通过
   *     [getSensorList]{@link sensor.getSensorList(callback: AsyncCallback<Array<Sensor>>)}查询或者监听设备上下线接口
   *     [sensorStatusChange]{@link sensor.on_sensorStatusChange}获取。
   * @returns { Array<Sensor> } 传感器属性列表。
   * @syscap SystemCapability.Sensors.Sensor
   * @since 19 dynamic
   * @since 23 static
   */
  function getSingleSensorByDeviceSync(type: SensorId, deviceId?: int): Array<Sensor>;

  /**
   * 获取设备上的所有传感器信息。使用callback异步回调。如果需要同步获取传感器列表，请使用getSensorListSync。
   *
   * @param { AsyncCallback<Array<Sensor>> } callback - 回调函数，异步返回传感器属性列表。
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
   * 获取设备上的所有传感器信息。使用Promise异步回调。
   *
   * @returns { Promise<Array<Sensor>> } Promise对象，使用异步方式返回传感器属性列表。每个Sensor对象包含传感器的类型ID、名称、版本、厂商、最大范围、分辨率、功率等属性信息。
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
   * 获取设备上的所有传感器信息，使用同步方式返回结果。
   *
   * @returns { Array<Sensor> } 使用同步方式返回传感器属性列表。
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 12 dynamic
   * @since 23 static
   */
  function getSensorListSync(): Array<Sensor>;

  /**
   * 同步获取设备的所有传感器信息。getSensorListByDeviceSync返回设备上所有传感器信息，getSingleSensorByDeviceSync返回指定单个传感器信息。
   *
   * @param { int } [deviceId] - 设备ID，默认为查询本地设备，默认值为-1，表示本地设备，设备ID需通过
   *     [getSensorList]{@link sensor.getSensorList(callback: AsyncCallback<Array<Sensor>>)}查询或者监听设备上下线接口
   *     [sensorStatusChange]{@link sensor.on_sensorStatusChange}获取。
   * @returns { Array<Sensor> } 传感器属性列表。
   * @syscap SystemCapability.Sensors.Sensor
   * @since 19 dynamic
   * @since 23 static
   */
  function getSensorListByDeviceSync(deviceId?: int): Array<Sensor>;

  /**
   * 设置地磁响应对象，用于描述指定地理位置的地磁场信息。
   *
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamic
   * @since 23 static
   */
  interface GeomagneticResponse {
    /**
     * 地磁场X方向分量（北分量）。单位：nT（纳特斯拉）。
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    x: double;

    /**
     * 地磁场Y方向分量（东分量）。单位：nT（纳特斯拉）。
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    y: double;

    /**
     * 地磁场Z方向分量（垂直分量）。单位：nT（纳特斯拉）。
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    z: double;

    /**
     * 磁倾角，即地球磁场线与水平面的夹角。单位：°（度）。
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    geomagneticDip: double;

    /**
     * 磁偏角，即地磁北方向与正北方向在水平面上的角度。单位：°（度）。
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    deflectionAngle: double;

    /**
     * 水平磁场强度，即地磁场在水平面上的总强度。单位：nT（纳特斯拉）。
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    levelIntensity: double;

    /**
     * 总磁场强度，即地磁场三维空间的总强度。单位：nT（纳特斯拉）。
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    totalIntensity: double;
  }

  /**
   * 指示地理位置，用于传入经纬度和海拔信息以计算地磁场。
   *
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamic
   * @since 23 static
   */
  interface LocationOptions {
    /**
     * 纬度。取值范围：[-90, 90]。单位：°（度）。
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    latitude: double;

    /**
     * 经度。取值范围：[-180, 180]。单位：°（度）。
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    longitude: double;

    /**
     * 海拔高度。单位：m（米）。
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    altitude: double;
  }

  /**
   * 获取地球上特定位置的地磁场。使用callback异步回调。
   *
   * > **说明**：
   * >
   * > 从API version 8 开始支持，从API version 9 开始废弃，建议使用
   * > [sensor.getGeomagneticInfo]
   * > {@link sensor.getGeomagneticInfo(locationOptions: LocationOptions, timeMillis: long, callback: AsyncCallback<GeomagneticResponse>)}
   * > 替代。
   *
   * @param { LocationOptions } locationOptions - 地理位置。
   * @param { number } timeMillis - 表示获取磁偏角的时间，单位：ms（毫秒）。
   * @param { AsyncCallback<GeomagneticResponse> } callback - 异步返回磁场信息。
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.getGeomagneticInfo(locationOptions: LocationOptions, timeMillis: long, callback: AsyncCallback<GeomagneticResponse>)
   */
  function getGeomagneticField(locationOptions: LocationOptions, timeMillis: number, callback: AsyncCallback<GeomagneticResponse>): void;

  /**
   * 获取地球上特定位置的地磁场。使用Promise异步回调。
   *
   * > **说明**：
   * >
   * > 从API version 8 开始支持，从API version 9 开始废弃，建议使用
   * > [sensor.getGeomagneticInfo]{@link sensor.getGeomagneticInfo(locationOptions: LocationOptions, timeMillis: long)}替
   * > 代。
   *
   * @param { LocationOptions } locationOptions - 地理位置。
   * @param { number } timeMillis - 表示获取磁偏角的时间，单位：ms（毫秒）。
   * @returns { Promise<GeomagneticResponse> } 使用异步方式返回磁场信息。
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.getGeomagneticInfo(locationOptions: LocationOptions, timeMillis: long)
   */
  function getGeomagneticField(locationOptions: LocationOptions, timeMillis: number): Promise<GeomagneticResponse>;

  /**
   * 获取某时刻地球上特定位置的地磁场信息。使用callback异步回调。
   *
   * @param { LocationOptions } locationOptions - 地理位置，包括经度、纬度和海拔高度。
   * @param { long } timeMillis - 获取磁偏角的时间，unix时间戳，表示自1970-01-01 00:00:00 UTC以来的毫秒数。单位：ms（毫秒）。取值范围：正整数。
   * @param { AsyncCallback<GeomagneticResponse> } callback - 回调函数，异步返回地磁场信息。
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
   * 获取某时刻地球上特定位置的地磁场信息。使用Promise异步回调。
   *
   * @param { LocationOptions } locationOptions - 地理位置，包括经度、纬度和海拔高度。
   * @param { long } timeMillis - 获取磁偏角的时间，unix时间戳，表示自1970-01-01 00:00:00 UTC以来的毫秒数。单位：ms（毫秒）。取值范围：正整数。
   * @returns { Promise<GeomagneticResponse> } Promise对象，使用异步方式返回地磁场信息。
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
   * 根据气压值获取设备所在的海拔高度。使用callback异步回调。
   *
   * > **说明**：
   * >
   * > 从API version 8 开始支持，从API version 9 开始废弃，建议使用
   * > [sensor.getDeviceAltitude]{@link sensor.getDeviceAltitude(seaPressure: double, currentPressure: double, callback: AsyncCallback<double>)}
   * > 替代。
   *
   * @param { number } seaPressure - 表示海平面气压值，单位：hPa（百帕）。
   * @param { number } currentPressure - 表示设备所在高度的气压值，单位：hPa（百帕）。
   * @param { AsyncCallback<number> } callback - 异步返回设备所在的海拔高度，单位：m（米）。
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.getDeviceAltitude(seaPressure: double, currentPressure: double, callback: AsyncCallback<double>)
   */
  function getAltitude(seaPressure: number, currentPressure: number, callback: AsyncCallback<number>): void;

  /**
   * 根据气压值获取设备所在的海拔高度。使用Promise异步回调。
   *
   * > **说明**：
   * >
   * > 从API version 8 开始支持，从API version 9 开始废弃，建议使用
   * > [sensor.getDeviceAltitude]{@link sensor.getDeviceAltitude(seaPressure: double, currentPressure: double)}替代。
   *
   * @param { number } seaPressure - 表示海平面气压值，单位：hPa（百帕）。
   * @param { number } currentPressure - 表示设备所在高度的气压值，单位：hPa（百帕）。
   * @returns { Promise<number> } 使用异步方式返回设备所在的海拔高度，单位：m（米）。
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.getDeviceAltitude(seaPressure: double, currentPressure: double)
   */
  function getAltitude(seaPressure: number, currentPressure: number): Promise<number>;

  /**
   * 根据气压值获取海拔高度。使用callback异步回调。
   *
   * @param { double } seaPressure - 海平面气压值，单位：hPa（百帕）。
   * @param { double } currentPressure - 指定的气压值，单位：hPa（百帕）。
   * @param { AsyncCallback<double> } callback - 回调函数，异步返回指定的气压值对应的海拔高度，单位：m（米）。
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
   * 根据气压值获取海拔高度。使用Promise异步回调。
   *
   * @param { double } seaPressure - 海平面气压值，单位：hPa（百帕）。
   * @param { double } currentPressure - 指定的气压值，单位：hPa（百帕）。
   * @returns { Promise<double> } Promise对象，使用异步方式返回指定的气压值对应的海拔高度，单位：m（米）。
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
   * 根据倾斜矩阵计算地磁倾斜角。使用callback异步回调。
   *
   * > **说明**：
   * >
   * > 从API version 8 开始支持，从API version 9 开始废弃，建议使用
   * > [sensor.getInclination]{@link sensor.getInclination(inclinationMatrix: Array<double>, callback: AsyncCallback<double>)}
   * > 替代。
   *
   * @param { Array<number> } inclinationMatrix - 表示倾斜矩阵。
   * @param { AsyncCallback<number> } callback - 异步返回地磁倾斜角，单位：rad（弧度）。
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.getInclination(inclinationMatrix: Array<double>, callback: AsyncCallback<double>)
   */
  function getGeomagneticDip(inclinationMatrix: Array<number>, callback: AsyncCallback<number>): void;

  /**
   * 根据倾斜矩阵计算地磁倾斜角。使用Promise异步回调。
   *
   * > **说明**：
   * >
   * > 从API version 8 开始支持，从API version 9 开始废弃，建议使用
   * > [sensor.getInclination]{@link sensor.getInclination(inclinationMatrix: Array<double>)}替代。
   *
   * @param { Array<number> } inclinationMatrix - 表示倾斜矩阵。
   * @returns { Promise<number> } 使用异步方式返回地磁倾斜角，单位：rad（弧度）。
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.getInclination(inclinationMatrix: Array<double>)
   */
  function getGeomagneticDip(inclinationMatrix: Array<number>): Promise<number>;

  /**
   * 根据倾斜矩阵计算地磁倾角。使用callback异步回调。
   *
   * @param { Array<double> } inclinationMatrix - 倾斜矩阵。
   * @param { AsyncCallback<double> } callback - 回调函数，异步返回地磁倾角，单位：rad（弧度）。
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
   * 根据倾斜矩阵计算地磁倾角。使用Promise异步回调。
   *
   * @param { Array<double> } inclinationMatrix - 倾斜矩阵。
   * @returns { Promise<double> } Promise对象，使用异步方式返回地磁倾斜角，单位：rad（弧度）。
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
   * 计算两个旋转矩阵之间的角度变化。使用callback异步回调。
   *
   * @param { Array<double> } currentRotationMatrix - 当前旋转矩阵。
   * @param { Array<double> } preRotationMatrix - 相对旋转矩阵。
   * @param { AsyncCallback<Array<double>> } callback - 回调函数，异步返回绕z、x、y轴方向的旋转角度，单位：°（度）。
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
   * 得到两个旋转矩阵之间的角度变化。使用Promise异步回调。
   *
   * @param { Array<double> } currentRotationMatrix - 当前旋转矩阵。
   * @param { Array<double> } preRotationMatrix - 相对旋转矩阵。
   * @returns { Promise<Array<double>> } Promise对象，使用异步方式返回绕z、x、y轴方向的旋转角度，单位：°（度）。
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
   * 将旋转矢量转换为旋转矩阵。使用callback异步回调。
   *
   * > **说明**：
   * >
   * > 从API version 8 开始支持，从API version 9 开始废弃，建议使用
   * > [sensor.getRotationMatrix]{@link sensor.getRotationMatrix(rotationVector: Array<double>, callback: AsyncCallback<Array<double>>)}
   * > 替代。
   *
   * @param { Array<number> } rotationVector - 表示旋转矢量。
   * @param { AsyncCallback<Array<number>> } callback - 异步返回旋转矩阵。
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.getRotationMatrix(rotationVector: Array<double>, callback: AsyncCallback<Array<double>>)
   */
  function createRotationMatrix(rotationVector: Array<number>, callback: AsyncCallback<Array<number>>): void;

  /**
   * 将旋转矢量转换为旋转矩阵。使用Promise异步回调。
   *
   * > **说明**：
   * >
   * > 从API version 8 开始支持，从API version 9 开始废弃，建议使用
   * > [sensor.getRotationMatrix]{@link sensor.getRotationMatrix(rotationVector: Array<double>)}替代。
   *
   * @param { Array<number> } rotationVector - 表示旋转矢量。
   * @returns { Promise<Array<number>> } 使用异步方式返回旋转矩阵。
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.getRotationMatrix(rotationVector: Array<double>)
   */
  function createRotationMatrix(rotationVector: Array<number>): Promise<Array<number>>;

  /**
   * 根据旋转矢量获取旋转矩阵。使用callback异步回调。
   *
   * @param { Array<double> } rotationVector - 旋转矢量。
   * @param { AsyncCallback<Array<double>> } callback - 回调函数，异步返回3*3旋转矩阵。
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
   * 根据旋转矢量获取旋转矩阵。使用Promise异步回调。
   *
   * @param { Array<double> } rotationVector - 旋转矢量。
   * @returns { Promise<Array<double>> } Promise对象，使用异步方式返回旋转矩阵。
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
   * 设置坐标选项对象，用于指定坐标系的变换方向。
   *
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamic
   * @since 23 static
   */
  interface CoordinatesOptions {
    /**
     * x坐标方向，用于指定旋转矩阵变换在x轴的方向。
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    x: int;

    /**
     * y坐标方向，用于指定旋转矩阵变换在y轴的方向。
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    y: int;
  }

  /**
   * 旋转提供的旋转矩阵，使其可以以不同的方式表示坐标系。使用callback异步回调。
   *
   * > **说明**：
   * >
   * > 从API version 8 开始支持，从API version 9 开始废弃，建议使用
   * > [sensor.transformRotationMatrix]
   * > {@link sensor.transformRotationMatrix(inRotationVector: Array<double>, coordinates: CoordinatesOptions, callback: AsyncCallback<Array<double>>)}
   * > 替代。
   *
   * @param { Array<number> } inRotationVector - 表示旋转矩阵。
   * @param { CoordinatesOptions } coordinates - 表示坐标系方向。
   * @param { AsyncCallback<Array<number>> } callback - 异步返回转换后的旋转矩阵。
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.transformRotationMatrix(inRotationVector: Array<double>, coordinates: CoordinatesOptions, callback: AsyncCallback<Array<double>>)
   */
  function transformCoordinateSystem(inRotationVector: Array<number>, coordinates: CoordinatesOptions,
    callback: AsyncCallback<Array<number>>): void;

  /**
   * 旋转提供的旋转矩阵，使其可以以不同的方式表示坐标系。使用Promise异步回调。
   *
   * > **说明**：
   * >
   * > 从API version 8 开始支持，从API version 9 开始废弃，建议使用
   * > [sensor.transformRotationMatrix]{@link sensor.transformRotationMatrix(inRotationVector: Array<double>, coordinates: CoordinatesOptions)}
   * > 替代。
   *
   * @param { Array<number> } inRotationVector - 表示旋转矩阵。
   * @param { CoordinatesOptions } coordinates - 表示坐标系方向。
   * @returns { Promise<Array<number>> } 使用异步方式返回转换后的旋转矩阵。
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.transformRotationMatrix(inRotationVector: Array<double>, coordinates: CoordinatesOptions)
   */
  function transformCoordinateSystem(inRotationVector: Array<number>, coordinates: CoordinatesOptions): Promise<Array<number>>;

  /**
   * 根据指定坐标系映射旋转矩阵。使用callback异步回调。
   *
   * @param { Array<double> } inRotationVector - 旋转矩阵。
   * @param { CoordinatesOptions } coordinates - 指定坐标系方向。
   * @param { AsyncCallback<Array<double>> } callback - 回调函数，异步返回映射后的旋转矩阵。
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
   * 根据指定坐标系映射旋转矩阵。使用Promise异步回调。
   *
   * @param { Array<double> } inRotationVector - 旋转矩阵。
   * @param { CoordinatesOptions } coordinates - 指定坐标系方向。
   * @returns { Promise<Array<double>> } Promise对象，使用异步方式返回转换后的旋转矩阵。
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
   * 将旋转矢量转换为四元数。使用callback异步回调。
   *
   * > **说明**：
   * >
   * > 从API version 8 开始支持，从API version 9 开始废弃，建议使用
   * > [sensor.getQuaternion]{@link sensor.getQuaternion(rotationVector: Array<double>, callback: AsyncCallback<Array<double>>)}
   * > 替代。
   *
   * @param { Array<number> } rotationVector - 表示旋转矢量。
   * @param { AsyncCallback<Array<number>> } callback - 异步返回四元数。
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.getQuaternion(rotationVector: Array<double>, callback: AsyncCallback<Array<double>>)
   */
  function createQuaternion(rotationVector: Array<number>, callback: AsyncCallback<Array<number>>): void;

  /**
   * 将旋转矢量转换为四元数。使用Promise异步回调。
   *
   * > **说明**：
   * >
   * > 从API version 8 开始支持，从API version 9 开始废弃，建议使用
   * > [sensor.getQuaternion]{@link sensor.getQuaternion(rotationVector: Array<double>)}替代。
   *
   * @param { Array<number> } rotationVector - 表示旋转矢量。
   * @returns { Promise<Array<number>> } 使用异步方式返回四元数。
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.getQuaternion(rotationVector: Array<double>)
   */
  function createQuaternion(rotationVector: Array<number>): Promise<Array<number>>;

  /**
   * 根据旋转向量计算归一化四元数。使用callback异步回调。
   *
   * @param { Array<double> } rotationVector - 旋转矢量。
   * @param { AsyncCallback<Array<double>> } callback - 回调函数，异步返回归一化四元数。
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
   * 根据旋转向量计算归一化四元数。使用Promise异步回调。
   *
   * @param { Array<double> } rotationVector - 旋转矢量。
   * @returns { Promise<Array<double>> } Promise对象，使用异步方式返回归一化四元数。
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
   * 根据旋转矩阵计算设备的方向。使用callback异步回调。
   *
   * > **说明**：
   * >
   * > 从API version 8 开始支持，从API version 9 开始废弃，建议使用
   * > [sensor.getOrientation]{@link sensor.getOrientation(rotationMatrix: Array<double>, callback: AsyncCallback<Array<double>>)}
   * > 替代。
   *
   * @param { Array<number> } rotationMatrix - 表示旋转矩阵。
   * @param { AsyncCallback<Array<number>> } callback - 异步返回围绕z、x、y轴方向的旋转角度，单位：°（度）。
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.getOrientation(rotationMatrix: Array<double>, callback: AsyncCallback<Array<double>>)
   */
  function getDirection(rotationMatrix: Array<number>, callback: AsyncCallback<Array<number>>): void;

  /**
   * 根据旋转矩阵计算设备的方向。使用Promise异步回调。
   *
   * > **说明**：
   * >
   * > 从API version 8 开始支持，从API version 9 开始废弃，建议使用
   * > [sensor.getOrientation]{@link sensor.getOrientation(rotationMatrix: Array<double>)}替代。
   *
   * @param { Array<number> } rotationMatrix - 表示旋转矩阵。
   * @returns { Promise<Array<number>> } 使用异步方式返回围绕z、x、y轴方向的旋转角度，单位：°（度）。
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.getOrientation(rotationMatrix: Array<double>)
   */
  function getDirection(rotationMatrix: Array<number>): Promise<Array<number>>;

  /**
   * 根据旋转矩阵计算设备方向。使用callback异步回调。
   *
   * @param { Array<double> } rotationMatrix - 旋转矩阵。
   * @param { AsyncCallback<Array<double>> } callback - 回调函数，异步返回围绕z、x、y轴方向的旋转角度，单位：°（度）。
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
   * 根据旋转矩阵计算设备的方向。使用Promise异步回调。
   *
   * @param { Array<double> } rotationMatrix - 旋转矩阵。
   * @returns { Promise<Array<double>> } Promise对象，使用异步方式返回围绕z、x、y轴方向的旋转角度，单位：°（度）。
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
   * 设置旋转矩阵响应对象，用于描述旋转矩阵和倾斜矩阵的计算结果。
   *
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamic
   * @since 23 static
   */
  interface RotationMatrixResponse {
    /**
     * 旋转矩阵，长度为9的一维数组，表示设备在三维空间中的旋转状态。
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    rotation: Array<double>;

    /**
     * 倾斜矩阵，长度为9的一维数组，表示地磁倾斜变换矩阵。
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    inclination: Array<double>
  }

  /**
   * 根据重力矢量和地磁矢量计算旋转矩阵。使用callback异步回调。
   *
   * > **说明**：
   * >
   * > 从API version 8 开始支持，从API version 9 开始废弃，建议使用
   * > [sensor.getRotationMatrix]{@link sensor.getRotationMatrix(gravity: Array<double>,
   * geomagnetic: Array<double>, callback: AsyncCallback<RotationMatrixResponse>)}
   * > 替代。
   *
   * @param { Array<number> } gravity - 表示重力向量。
   * @param { Array<number> } geomagnetic - 表示地磁矢量。
   * @param { AsyncCallback<RotationMatrixResponse> } callback - 异步返回旋转矩阵。
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.getRotationMatrix(gravity: Array<double>, geomagnetic: Array<double>, callback: AsyncCallback<RotationMatrixResponse>)
   */
  function createRotationMatrix(gravity: Array<number>, geomagnetic: Array<number>, callback: AsyncCallback<RotationMatrixResponse>): void;

  /**
   * 根据重力矢量和地磁矢量计算旋转矩阵。使用Promise异步回调。
   *
   * > **说明**：
   * >
   * > 从API version 8 开始支持，从API version 9 开始废弃，建议使用
   * > [sensor.getRotationMatrix]{@link sensor.getRotationMatrix(gravity: Array<double>, geomagnetic: Array<double>)}替代。
   *
   * @param { Array<number> } gravity - 表示重力向量。
   * @param { Array<number> } geomagnetic - 表示地磁矢量。
   * @returns { Promise<RotationMatrixResponse> } 使用异步方式返回旋转矩阵。
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.getRotationMatrix(gravity: Array<double>, geomagnetic: Array<double>)
   */
  function createRotationMatrix(gravity: Array<number>, geomagnetic: Array<number>,): Promise<RotationMatrixResponse>;

  /**
   * 根据重力矢量和地磁矢量计算旋转矩阵。使用callback异步回调。
   *
   * @param { Array<double> } gravity - 重力矢量。
   * @param { Array<double> } geomagnetic - 地磁矢量。
   * @param { AsyncCallback<RotationMatrixResponse> } callback - 回调函数，异步返回旋转矩阵。
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
   * 根据重力矢量和地磁矢量计算旋转矩阵。使用Promise异步回调。
   *
   * @param { Array<double> } gravity - 重力向量。
   * @param { Array<double> } geomagnetic - 地磁矢量。
   * @returns { Promise<RotationMatrixResponse> } Promise对象，使用异步方式返回旋转矩阵。RotationMatrixResponse对象包含设备的旋转矩阵和倾斜矩阵，可用于计算设备的姿态和方向
   *     信息。
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
   * 设置传感器上报频率及传感器选择参数。
   *
   * @syscap SystemCapability.Sensors.Sensor
   * @atomicservice [since 11]
   * @since 8 dynamic
   * @since 23 static
   */
  interface Options {
    /**
     * 用于设置传感器数据上报的时间间隔。默认值：200000000ns（即200ms）。单位：ns（纳秒）。取值范围需参考各传感器的minSamplePeriod和maxSamplePeriod，可通过
     * [getSingleSensor]{@link sensor.getSingleSensor(type: SensorId, callback: AsyncCallback<Sensor>)}查询。建议根据实际业务需求设置合理
     * 的上报频率，取值越小上报越频繁。当设置频率大于最大值时以最大值上报数据，小于最小值时以最小值上报数据。
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
     * 传感器传入设置参数，可指定deviceId、sensorIndex，用于多传感器场景下选择目标传感器。
     *
     * 从API version 19开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @atomicservice
     * @since 19 dynamic
     * @since 23 static
     */
    sensorInfoParam?: SensorInfoParam;
  }

  /**
   * 传感器上报频率模式，提供预定义的频率档位，方便开发者快速设置常用的上报频率。
   *
   * @syscap SystemCapability.Sensors.Sensor
   * @unionmember { 'game' } 游戏模式，用于指定传感器上报频率。频率值：20000000ns（即20ms），适用于对数据延迟敏感的游戏类应用。该频率被设置在硬件支持的频率范围内时会生效，值固定为'game'字符串。
   * @unionmember { 'ui' } UI模式，用于指定传感器上报频率。频率值：60000000ns（即60ms），适用于对数据更新有中等要求的UI交互类应用。该频率被设置在硬件支持的频率范围内时会生效，值固定为'ui'字符串。
   * @unionmember { 'normal' } 普通模式，用于指定传感器上报频率。频率值：200000000ns（即200ms），适用于对数据更新频率要求不高的常规应用。该频率被设置在硬件支持的频率范围内时会生效，值固定为'normal
   *     '字符串。
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  type SensorFrequency = 'game' | 'ui' | 'normal';

  /**
   * 表示要订阅或取消订阅的传感器类型。
   *
   * > **说明**：
   * >
   * > 从API version 8 开始支持，从API version 9 开始废弃，建议使用[sensor.SensorId]{@link sensor.SensorId}替代。
   *
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.SensorId
   */
  enum SensorType {
    /**
     * 加速度传感器。
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead sensor.SensorId#ACCELEROMETER
     */
    SENSOR_TYPE_ID_ACCELEROMETER = 1,

    /**
     * 陀螺仪传感器。
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead sensor.SensorId#GYROSCOPE
     */
    SENSOR_TYPE_ID_GYROSCOPE = 2,

    /**
     * 环境光传感器。
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead sensor.SensorId#AMBIENT_LIGHT
     */
    SENSOR_TYPE_ID_AMBIENT_LIGHT = 5,

    /**
     * 磁场传感器。
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead sensor.SensorId#MAGNETIC_FIELD
     */
    SENSOR_TYPE_ID_MAGNETIC_FIELD = 6,

    /**
     * 气压计传感器。
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead sensor.SensorId#BAROMETER
     */
    SENSOR_TYPE_ID_BAROMETER = 8,

    /**
     * 霍尔传感器。
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead sensor.SensorId#HALL
     */
    SENSOR_TYPE_ID_HALL = 10,

    /**
     * 接近光传感器。
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead sensor.SensorId#PROXIMITY
     */
    SENSOR_TYPE_ID_PROXIMITY = 12,

    /**
     * 湿度传感器。
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead sensor.SensorId#HUMIDITY
     */
    SENSOR_TYPE_ID_HUMIDITY = 13,

    /**
     * 方向传感器。
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead sensor.SensorId#ORIENTATION
     */
    SENSOR_TYPE_ID_ORIENTATION = 256,

    /**
     * 重力传感器。
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead sensor.SensorId#GRAVITY
     */
    SENSOR_TYPE_ID_GRAVITY = 257,

    /**
     * 线性加速度传感器。
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead sensor.SensorId#LINEAR_ACCELEROMETER
     */
    SENSOR_TYPE_ID_LINEAR_ACCELERATION = 258,

    /**
     * 旋转矢量传感器。
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead sensor.SensorId#ROTATION_VECTOR
     */
    SENSOR_TYPE_ID_ROTATION_VECTOR = 259,

    /**
     * 环境温度传感器。
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead sensor.SensorId#AMBIENT_TEMPERATURE
     */
    SENSOR_TYPE_ID_AMBIENT_TEMPERATURE = 260,

    /**
     * 未校准磁场传感器。
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead sensor.SensorId#MAGNETIC_FIELD_UNCALIBRATED
     */
    SENSOR_TYPE_ID_MAGNETIC_FIELD_UNCALIBRATED = 261,

    /**
     * 未校准陀螺仪传感器。
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead sensor.SensorId#GYROSCOPE_UNCALIBRATED
     */
    SENSOR_TYPE_ID_GYROSCOPE_UNCALIBRATED = 263,

    /**
     * 有效运动传感器。
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead sensor.SensorId#SIGNIFICANT_MOTION
     */
    SENSOR_TYPE_ID_SIGNIFICANT_MOTION = 264,

    /**
     * 计步检测传感器。
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead sensor.SensorId#PEDOMETER_DETECTION
     */
    SENSOR_TYPE_ID_PEDOMETER_DETECTION = 265,

    /**
     * 计步传感器。
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead sensor.SensorId#PEDOMETER
     */
    SENSOR_TYPE_ID_PEDOMETER = 266,

    /**
     * 心率传感器。
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead sensor.SensorId#HEART_RATE
     */
    SENSOR_TYPE_ID_HEART_RATE = 278,

    /**
     * 佩戴检测传感器。
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead sensor.SensorId#WEAR_DETECTION
     */
    SENSOR_TYPE_ID_WEAR_DETECTION = 280,

    /**
     * 未校准加速度传感器。
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead sensor.SensorId#ACCELEROMETER_UNCALIBRATED
     */
    SENSOR_TYPE_ID_ACCELEROMETER_UNCALIBRATED = 281
  }

  /**
   * 传感器数据的精度挡位。
   *
   * @syscap SystemCapability.Sensors.Sensor
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  enum SensorAccuracy {
    /**
     * 传感器数据不可信，精度挡位最低，数据可靠性无法保证。
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    ACCURACY_UNRELIABLE = 0,

    /**
     * 传感器低挡位精度，数据精度较低，仅适用于粗略估算场景。
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    ACCURACY_LOW = 1,

    /**
     * 传感器中挡位精度，数据精度中等，适用于一般应用场景。
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    ACCURACY_MEDIUM = 2,

    /**
     * 传感器高挡位精度，数据精度较高，适用于对精度要求严格的场景。
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    ACCURACY_HIGH = 3
  }

  /**
   * 传感器数据的时间戳与精度信息基类，所有传感器Response类型均继承于此。
   *
   * @syscap SystemCapability.Sensors.Sensor
   * @atomicservice [since 11]
   * @since 8 dynamic
   * @since 23 static
   */
  interface Response {
    /**
     * 传感器数据上报的时间戳。从设备开机开始计时到上报数据的时间，单位：ns（纳秒）。
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @atomicservice [since 11]
     * @since 8 dynamic
     * @since 23 static
     */
    timestamp: long;

    /**
     * 传感器数据上报的精度挡位值，表示当前上报数据的可信程度。
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    accuracy: SensorAccuracy;
  }

  /**
   * 加速度传感器数据，继承于[Response]{@link sensor.Response}。
   *
   * @syscap SystemCapability.Sensors.Sensor
   * @atomicservice [since 11]
   * @since 8 dynamic
   * @since 23 static
   */
  interface AccelerometerResponse extends Response {
    /**
     * 施加在设备x轴方向的加速度。单位：m/s²；取值为实际上报物理量。
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @atomicservice [since 11]
     * @since 8 dynamic
     * @since 23 static
     */
    x: double;

    /**
     * 施加在设备y轴方向的加速度。单位：m/s²；取值为实际上报物理量。
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @atomicservice [since 11]
     * @since 8 dynamic
     * @since 23 static
     */
    y: double;

    /**
     * 施加在设备z轴方向的加速度。单位：m/s²；取值为实际上报物理量。
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @atomicservice [since 11]
     * @since 8 dynamic
     * @since 23 static
     */
    z: double;
  }

  /**
   * 线性加速度传感器数据，继承于[Response]{@link sensor.Response}。
   *
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamic
   * @since 23 static
   */
  interface LinearAccelerometerResponse extends Response {
    /**
     * 施加在设备x轴方向的线性加速度（排除重力分量）。单位：m/s²。
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    x: double;

    /**
     * 施加在设备y轴方向的线性加速度（排除重力分量）。单位：m/s²。
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    y: double;

    /**
     * 施加在设备z轴方向的线性加速度（排除重力分量）。单位：m/s²。
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    z: double;
  }

  /**
   * 未校准加速度传感器数据，继承于[Response]{@link sensor.Response}。
   *
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamic
   * @since 23 static
   */
  interface AccelerometerUncalibratedResponse extends Response {
    /**
     * 施加在设备x轴方向未校准的加速度。单位：m/s²。
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    x: double;

    /**
     * 施加在设备y轴方向未校准的加速度。单位：m/s²。
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    y: double;

    /**
     * 施加在设备z轴方向未校准的加速度。单位：m/s²。
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    z: double;

    /**
     * 施加在设备x轴方向未校准的加速度偏量（估计的加速度偏差）。单位：m/s²。
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    biasX: double;

    /**
     * 施加在设备y轴方向未校准的加速度偏量（估计的加速度偏差）。单位：m/s²。
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    biasY: double;

    /**
     * 施加在设备z轴方向未校准的加速度偏量（估计的加速度偏差）。单位：m/s²。
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    biasZ: double;
  }

  /**
   * 重力传感器数据，继承于[Response]{@link sensor.Response}。
   *
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamic
   * @since 23 static
   */
  interface GravityResponse extends Response {
    /**
     * 施加在设备x轴方向的重力加速度。单位：m/s²。
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    x: double;

    /**
     * 施加在设备y轴方向的重力加速度。单位：m/s²。
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    y: double;

    /**
     * 施加在设备z轴方向的重力加速度。单位：m/s²。
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    z: double;
  }

  /**
   * 方向传感器数据，继承于[Response]{@link sensor.Response}。
   *
   * @syscap SystemCapability.Sensors.Sensor
   * @atomicservice [since 11]
   * @since 8 dynamic
   * @since 23 static
   */
  interface OrientationResponse extends Response {
    /**
     * 设备围绕Z轴的旋转角度，即方位角。单位：°（度）；取值范围：[0, 360]。
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @atomicservice [since 11]
     * @since 8 dynamic
     * @since 23 static
     */
    alpha: double;

    /**
     * 设备围绕X轴的旋转角度，即俯仰角。单位：°（度）；取值范围：[-180, 180]。
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @atomicservice [since 11]
     * @since 8 dynamic
     * @since 23 static
     */
    beta: double;

    /**
     * 设备围绕Y轴的旋转角度，即翻转角。单位：°（度）；取值范围：[-90, 90]。
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @atomicservice [since 11]
     * @since 8 dynamic
     * @since 23 static
     */
    gamma: double;
  }

  /**
   * 旋转矢量传感器数据，继承于[Response]{@link sensor.Response}。
   *
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamic
   * @since 23 static
   */
  interface RotationVectorResponse extends Response {
    /**
     * 旋转矢量的x轴分量，表示设备旋转状态在x轴方向的投影。
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    x: double;

    /**
     * 旋转矢量的y轴分量，表示设备旋转状态在y轴方向的投影。
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    y: double;

    /**
     * 旋转矢量的z轴分量，表示设备旋转状态在z轴方向的投影。
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    z: double;

    /**
     * 旋转矢量的标量分量，描述设备相对于某个参考方向的旋转状态。单位：rad（弧度）。
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    w: double;
  }

  /**
   * 陀螺仪传感器数据，继承于[Response]{@link sensor.Response}。
   *
   * @syscap SystemCapability.Sensors.Sensor
   * @atomicservice [since 11]
   * @since 8 dynamic
   * @since 23 static
   */
  interface GyroscopeResponse extends Response {
    /**
     * 设备x轴方向的旋转角速度。单位：rad/s（弧度/秒）；取值为实际上报物理量。
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @atomicservice [since 11]
     * @since 8 dynamic
     * @since 23 static
     */
    x: double;

    /**
     * 设备y轴方向的旋转角速度。单位：rad/s（弧度/秒）；取值为实际上报物理量。
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @atomicservice [since 11]
     * @since 8 dynamic
     * @since 23 static
     */
    y: double;

    /**
     * 设备z轴方向的旋转角速度。单位：rad/s（弧度/秒）；取值为实际上报物理量。
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @atomicservice [since 11]
     * @since 8 dynamic
     * @since 23 static
     */
    z: double;
  }

  /**
   * 未校准陀螺仪传感器数据，继承于[Response]{@link sensor.Response}。
   *
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamic
   * @since 23 static
   */
  interface GyroscopeUncalibratedResponse extends Response {
    /**
     * 设备x轴方向未校准的旋转角速度。单位：rad/s（弧度/秒）。
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    x: double;

    /**
     * 设备y轴方向未校准的旋转角速度。单位：rad/s（弧度/秒）。
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    y: double;

    /**
     * 设备z轴方向未校准的旋转角速度。单位：rad/s（弧度/秒）。
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    z: double;

    /**
     * 设备x轴方向未校准的旋转角速度偏量（估计的角速度偏差）。单位：rad/s（弧度/秒）。
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    biasX: double;

    /**
     * 设备y轴方向未校准的旋转角速度偏量（估计的角速度偏差）。单位：rad/s（弧度/秒）。
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    biasY: double;

    /**
     * 设备z轴方向未校准的旋转角速度偏量（估计的角速度偏差）。单位：rad/s（弧度/秒）。
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    biasZ: double;
  }

  /**
   * 有效运动传感器数据，继承于[Response]{@link sensor.Response}。
   *
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamic
   * @since 23 static
   */
  interface SignificantMotionResponse extends Response {
    /**
     * 表示剧烈运动程度。取值范围：1（检测到有效运动），表示设备在三个物理轴（x、y和z）上存在大幅度运动时上报为1。
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    scalar: double;
  }

  /**
   * 接近光传感器数据，继承于[Response]{@link sensor.Response}。
   *
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamic
   * @since 23 static
   */
  interface ProximityResponse extends Response {
    /**
     * 可见物体与设备显示器的接近程度。取值范围：0表示接近（物体靠近设备），大于0表示远离（物体远离设备）。
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    distance: double;
  }

  /**
   * 环境光传感器数据，继承于[Response]{@link sensor.Response}。
   *
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamic
   * @since 23 static
   */
  interface LightResponse extends Response {
    /**
     * 环境光强度。单位：lux（勒克斯）。
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    intensity: double;

    /**
     * 色温。单位：K（开尔文）。可选参数，如果该参数不支持则返回固定值（固定值由传感器自定义），支持则返回正常数值。
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 12 dynamic
     * @since 23 static
     */
    colorTemperature?: double;

    /**
     * 红外亮度。单位：cd/m²（坎德拉每平方米）。可选参数，如果该参数不支持则返回固定值（固定值由传感器自定义），支持则返回正常数值。
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 12 dynamic
     * @since 23 static
     */
    infraredLuminance?: double;
  }

  /**
   * 霍尔传感器数据，继承于[Response]{@link sensor.Response}。
   *
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamic
   * @since 23 static
   */
  interface HallResponse extends Response {
    /**
     * 霍尔开关状态，表示设备周围是否存在磁力吸引。取值范围：0（无磁力吸引，霍尔开关断开）或大于0（有磁力吸引，霍尔开关闭合）。
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    status: double;
  }

  /**
   * 磁场传感器数据，继承于[Response]{@link sensor.Response}。
   *
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamic
   * @since 23 static
   */
  interface MagneticFieldResponse extends Response {
    /**
     * x轴方向的环境磁场强度。单位：μT（微特斯拉）。
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    x: double;

    /**
     * y轴方向的环境磁场强度。单位：μT（微特斯拉）。
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    y: double;

    /**
     * z轴方向的环境磁场强度。单位：μT（微特斯拉）。
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    z: double;
  }

  /**
   * 未校准磁场传感器数据，继承于[Response]{@link sensor.Response}。
   *
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamic
   * @since 23 static
   */
  interface MagneticFieldUncalibratedResponse extends Response {
    /**
     * x轴方向未校准的环境磁场强度。单位：μT（微特斯拉）。
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    x: double;

    /**
     * y轴方向未校准的环境磁场强度。单位：μT（微特斯拉）。
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    y: double;

    /**
     * z轴方向未校准的环境磁场强度。单位：μT（微特斯拉）。
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    z: double;

    /**
     * x轴方向未校准的环境磁场强度偏量（估计的磁场偏差）。单位：μT（微特斯拉）。
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    biasX: double;

    /**
     * y轴方向未校准的环境磁场强度偏量（估计的磁场偏差）。单位：μT（微特斯拉）。
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    biasY: double;

    /**
     * z轴方向未校准的环境磁场强度偏量（估计的磁场偏差）。单位：μT（微特斯拉）。
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    biasZ: double;
  }

  /**
   * 计步传感器数据，继承于[Response]{@link sensor.Response}。
   *
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamic
   * @since 23 static
   */
  interface PedometerResponse extends Response {
    /**
     * 用户的行走步数。单位：步。
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    steps: double;
  }

  /**
   * 湿度传感器数据，继承于[Response]{@link sensor.Response}。
   *
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamic
   * @since 23 static
   */
  interface HumidityResponse extends Response {
    /**
     * 环境的相对湿度。单位：%（百分比），表示环境的相对湿度百分比。
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    humidity: double;
  }

  /**
   * 计步检测传感器数据，继承于[Response]{@link sensor.Response}。
   *
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamic
   * @since 23 static
   */
  interface PedometerDetectionResponse extends Response {
    /**
     * 计步检测标量。取值范围：1（检测到计步事件，表示用户产生了计步行走的动作）或0（未检测到计步事件，表示用户没有发生运动）。
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    scalar: double;
  }

  /**
   * 温度传感器数据，继承于[Response]{@link sensor.Response}。
   *
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamic
   * @since 23 static
   */
  interface AmbientTemperatureResponse extends Response {
    /**
     * 环境温度。单位：℃（摄氏度）。
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    temperature: double;
  }

  /**
   * 气压计传感器数据，继承于[Response]{@link sensor.Response}。
   *
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamic
   * @since 23 static
   */
  interface BarometerResponse extends Response {
    /**
     * 大气压力值。单位：hPa（百帕）。
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    pressure: double;
  }

  /**
   * 心率传感器数据，继承于[Response]{@link sensor.Response}。
   *
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamic
   * @since 23 static
   */
  interface HeartRateResponse extends Response {
    /**
     * 用户的心率数值。单位：bpm（beats per minute，每分钟心跳次数）。
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    heartRate: double;
  }

  /**
   * 佩戴检测传感器数据，继承于[Response]{@link sensor.Response}。
   *
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamic
   * @since 23 static
   */
  interface WearDetectionResponse extends Response {
    /**
     * 设备佩戴状态。取值范围：0（未佩戴）或1（已佩戴）。
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    value: double;
  }

  /**
   * 颜色传感器数据，继承于[Response]{@link @ohos.sensor:sensor.Response}。用于表示颜色传感器上报的响应数据，包含光照强度和色温信息。
   *
   * @syscap SystemCapability.Sensors.Sensor
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  interface ColorResponse extends Response {
    /**
     * 表示光的强度。单位：勒克斯（lux）。取值范围：取值为实际上报物理量，由硬件传感器决定。典型室内环境光强度约为300-500 lux，户外阳光可达10000 lux以上。
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    lightIntensity: double;
    /**
     * 表示色温。单位：开尔文（K）。取值范围：取值为实际上报物理量，由硬件传感器决定。典型值：暖白光约2700-3000K，正白光约4000-5000K，冷白光约6500K以上。
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    colorTemperature: double;
  }

  /**
   * 吸收比率传感器数据，继承于[Response]{@link @ohos.sensor:sensor.Response}。用于表示吸收比率传感器上报的响应数据，包含电磁波吸收率信息。
   *
   * @syscap SystemCapability.Sensors.Sensor
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  interface SarResponse extends Response {
    /**
     * 表示具体的吸收率。单位：W/kg。取值范围：取值为实际上报物理量，由硬件传感器决定。
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    absorptionRatio: double;
  }

  /**
   * 融合压力传感器数据，继承于[Response]{@link sensor.Response}。
   *
   * @syscap SystemCapability.Sensors.Sensor
   * @since 22 dynamic
   * @since 23 static
   */
  interface FusionPressureResponse extends Response {
    /**
     * 融合压力值，表示施加在融合压力传感器上的压力值百分比。单位：%（百分比）。
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 22 dynamic
     * @since 23 static
     */
    fusionPressure: double;
  }

  /**
   * 监听传感器上线下线状态的变化，callback返回传感器状态事件数据。适用于需要感知传感器设备动态上下线的场景，如远程传感器连接或断开时自动更新传感器列表或订阅状态。
   *
   * @param { 'sensorStatusChange' } type - 固定传入'sensorStatusChange'，状态监听固定参数。
   * @param { Callback<SensorStatusEvent> } callback - 回调函数，异步上报的传感器事件数据SensorStatusEvent。
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 19 dynamic
   */
  function on(type: 'sensorStatusChange', callback: Callback<SensorStatusEvent>): void;

  /**
   * 取消监听传感器上线下线状态的变化。当不再需要感知传感器上下线状态时调用此接口取消监听。off取消监听必须与on监听成对出现。
   *
   * @param { 'sensorStatusChange' } type - 固定传入'sensorStatusChange'，状态监听固定参数。
   * @param { Callback<SensorStatusEvent> } [callback] - 回调函数，需要取消订阅的回调函数，若无此参数，则取消订阅当前类型的所有回调函数。
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
   * 设备状态变化事件数据，用于描述传感器上下线事件的信息。
   *
   * @syscap SystemCapability.Sensors.Sensor
   * @since 19 dynamic
   * @since 23 static
   */
  interface SensorStatusEvent {
    /**
     * 事件发生的时间戳。从设备开机开始计时到事件发生的时间。单位：ms（毫秒）。
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 19 dynamic
     * @since 23 static
     */
    timestamp: long;

    /**
     * 传感器类型ID，对应[SensorId]{@link sensor.SensorId}枚举值。
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 19 dynamic
     * @since 23 static
     */
    sensorId: int;

    /**
     * 传感器索引，同一类型传感器可能有多个实例，通过sensorIndex区分。
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 19 dynamic
     * @since 23 static
     */
    sensorIndex: int;

    /**
     * 传感器是否上线。true表示传感器上线，false表示传感器下线。
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 19 dynamic
     * @since 23 static
     */
    isSensorOnline: boolean;

    /**
     * 设备ID。-1表示本地设备，其它值表示远程设备。
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 19 dynamic
     * @since 23 static
     */
    deviceId: int;

    /**
     * 设备名称，标识传感器的来源设备。
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @since 19 dynamic
     * @since 23 static
     */
    deviceName: string;
  }

  /**
   * 传感器传入设置参数，多传感器情况下通过deviceId、sensorIndex控制指定传感器。
   *
   * @syscap SystemCapability.Sensors.Sensor
   * @atomicservice
   * @since 19 dynamic
   * @since 23 static
   */
  interface SensorInfoParam {
    /**
     * 指定目标传感器所属设备的ID。默认值：-1（表示本地设备）。可通过[sensor.on('sensorStatusChange')]{@link sensor.on_sensorStatusChange}或
     * [getSensorList]{@link sensor.getSensorList(callback: AsyncCallback<Array<Sensor>>)}获取远程设备ID。
     *
     * @syscap SystemCapability.Sensors.Sensor
     * @atomicservice
     * @since 19 dynamic
     * @since 23 static
     */
    deviceId?: int;

    /**
     * 指定目标传感器的索引，同一类型传感器可能有多个实例。默认值：0（表示设备上的默认传感器）。其它传感器索引需通过
     * [getSensorList]{@link sensor.getSensorList(callback: AsyncCallback<Array<Sensor>>)}或
     * [sensor.on('sensorStatusChange')]{@link sensor.on_sensorStatusChange}获取。
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