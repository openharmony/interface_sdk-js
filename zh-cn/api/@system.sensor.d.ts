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
 * @system.sensor模块是面向轻量穿戴（Lite Wearable）设备的传感器数据订阅模块，提供对加速度、罗盘、距离、环境光、计步、气压计、心率、佩戴状态、设备方向及陀螺仪传感器的数据订阅与取消订阅能力。
 * 本模块帮助应用实时获取传感器数据变化通知，实现运动监测、健康追踪、环境感知、方向识别、屏幕自适应等功能。每种传感器提供subscribe/unsubscribe配对接口，佩戴状态传感器额外提供getOnBodyState单次查询接口。
 * 非轻量穿戴设备从API version 8起不再维护本模块，建议使用[@ohos.sensor]{@link @ohos.sensor:sensor}模块替代。
 * 本模块采用"订阅-取消订阅"模式：通过subscribe订阅数据，数据变化时回调上报；通过unsubscribe取消订阅。subscribe与unsubscribe需配对使用，同一应用对同一传感器多次subscribe仅最后一次生效。
 * 加速度传感器、设备方向传感器和陀螺仪传感器的subscribe支持通过interval配置回调频率，默认为"normal"（200ms/次）。
 * 所有接口均需硬件支持，仅支持真机调试。部分接口存在设备行为差异，具体见各接口说明。
 *
 * > **说明：**
 *
 * > - 模块维护策略：
 * > >     - 对于Lite Wearable设备类型，该模块长期维护，正常使用。
 * > >     - 对于支持该模块的其他设备类型，该模块从API version 8开始不再维护，建议使用新接口[@ohos.sensor]{@link @ohos.sensor:sensor}替代。
 * 
 * > - 该功能使用需要对应硬件支持，仅支持真机调试。
 * 
 * > - 建议在页面销毁时（即onDestroy回调中），取消数据订阅，避免不必要的性能开销。
 *
 * @file
 * @kit SensorServiceKit
 */

/**
 * 感应到加速度数据变化后的回调函数的响应对象，包含设备在x、y、z三轴方向上的加速度数据。
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
   * 施加在设备x轴的加速度。单位：m/s²。取值范围：取值为实际上报物理量，由硬件传感器决定。
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
   * 施加在设备y轴的加速度。单位：m/s²。取值范围：取值为实际上报物理量，由硬件传感器决定。
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
   * 施加在设备z轴的加速度。单位：m/s²。取值范围：取值为实际上报物理量，由硬件传感器决定。静止状态下z轴加速度约为9.8 m/s²（重力加速度）。
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
 * 用于设置加速度传感器订阅的参数，包括回调频率和回调函数。
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
   * 频率参数，加速度的回调函数执行频率。
   *
   * 默认值：'normal'。
   *
   * 可选值：
   *
   * -'game'：极高的回调频率，20ms/次，适用于游戏场景。
   *
   * -'ui'：较高的回调频率，60ms/次，适用于UI更新场景。
   *
   * -'normal'：普通的回调频率，200ms/次，适用于低功耗场景。
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
   * 当加速度传感器数据发生变化时的回调函数，回调参数为AccelerometerResponse对象。
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
   * 接口调用失败的回调函数。回调参数为(data: string, code: number)，其中data为错误信息，code为错误码。不填写时，接口调用失败无回调通知。
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
 * 罗盘数据改变后的回调函数的响应对象，包含设备面对的方向度数。
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
   * 设备面对的方向度数。单位：°（度）。取值范围：[0, 360)，0表示朝北。取值为实际上报物理量。
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
 * 用于设置罗盘传感器订阅的参数，包括回调函数。
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
   * 罗盘数据改变后触发的回调函数，回调参数为CompassResponse对象。
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
   * 接口调用失败的回调函数。回调参数为(data: string, code: number)，其中data为错误信息，code为错误码。不填写时，接口调用失败无回调通知。
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
 * 距离感应数据改变后的回调函数的响应对象，包含可见物体相对于设备显示屏的接近或远离状态数据。
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
   * 可见物体相对于设备显示屏的接近或远离状态。取值说明：0表示物体接近屏幕（近状态），大于0表示物体远离屏幕（远状态）。具体远状态数值由硬件传感器决定。
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
 * 用于设置距离传感器订阅的参数，包括回调函数。
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
   * 距离感应数据改变后调用的回调函数，回调参数为ProximityResponse对象。
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
   * 接口调用失败的回调函数。回调参数为(data: string, code: number)，其中data为错误信息，code为错误码。不填写时，接口调用失败无回调通知。
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
 * 光线感应数据改变后的回调函数的响应对象，包含环境光线强度数据。
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
   * 环境光线强度。单位：lux（勒克斯）。取值范围：取值为实际上报物理量，由硬件传感器决定。
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
 * 用于设置环境光传感器订阅的参数，包括回调函数。
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
   * 光线感应数据改变后的回调函数，回调参数为LightResponse对象。
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
   * 接口调用失败的回调函数。回调参数为(data: string, code: number)，其中data为错误信息，code为错误码。不填写时，接口调用失败无回调通知。
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
 * 计步传感器数据改变后的回调函数的响应对象，包含计步传感器重启后累计记录的步数数据。
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
   * 计步传感器重启后累计记录的步数。取值范围：大于等于0的整数，取值为实际上报物理量。传感器重启后步数从0重新开始累计。
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
 * 用于设置计步传感器订阅的参数，包括回调函数。
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
   * 计步传感器数据改变后的回调函数，回调参数为StepCounterResponse对象。
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
   * 接口调用失败的回调函数。回调参数为(data: string, code: number)，其中data为错误信息，code为错误码。不填写时，接口调用失败无回调通知。
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
 * 气压计传感器数据改变后的回调函数的响应对象，包含气压值数据。
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
   * 气压值。单位：Pa（帕斯卡）。取值范围：取值为实际上报物理量，由硬件传感器决定。标准大气压约为101325 Pa。
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
 * 用于设置气压计传感器订阅的参数，包括回调函数。
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
   * 气压计传感器数据改变后的回调函数，回调参数为BarometerResponse对象。
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
   * 接口调用失败的回调函数。回调参数为(data: string, code: number)，其中data为错误信息，code为错误码。不填写时，接口调用失败无回调通知。
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
 * 心率传感器数据改变后的回调函数的响应对象，包含心率值数据。
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
   * 心率值。单位：bpm（beats per minute，每分钟心跳次数）。取值范围：取值为实际上报物理量，由硬件传感器决定。正常成人静息心率约为60-100 bpm。
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
 * 用于设置心率传感器订阅的参数，包括回调函数。心率数据回调频率固定为5秒/次，不支持通过interval参数配置。
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
   * 心率传感器数据改变后的回调函数，回调参数为HeartRateResponse对象。回调频率固定为5s/次。
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
   * 接口调用失败的回调函数。回调参数为(data: string, code: number)，其中data为错误信息，code为错误码。不填写时，接口调用失败无回调通知。
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
 * 设备佩戴状态的响应对象，包含设备是否已佩戴的状态数据。
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
   * 是否已佩戴设备。取值说明：true表示已佩戴，false表示未佩戴。
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
 * 用于设置设备佩戴状态订阅的参数，包括回调函数。佩戴状态分为已佩戴和未佩戴两种。
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
   * 传感器所在设备佩戴状态改变后的回调函数，回调参数为OnBodyStateResponse对象。
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
   * 接口调用失败的回调函数。回调参数为(data: string, code: number)，其中data为错误信息，code为错误码。不填写时，接口调用失败无回调通知。
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
 * 获取传感器所在设备佩戴状态时的参数，包括回调函数。此接口为一次性获取，不会持续监听状态变化。
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
   * 接口调用成功的回调函数，回调参数为OnBodyStateResponse对象。
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
   * 接口调用失败的回调函数。回调参数为(data: string, code: number)，其中data为错误信息，code为错误码。不填写时，接口调用失败无回调通知。
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
   * 接口调用结束的回调函数。无论调用成功或失败，此回调都会被执行。不填写时，接口调用结束无回调通知。
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
 * 设备方向传感器数据变化后的回调函数的响应对象，包含设备方向的三个旋转角度数据。
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
   * 当设备坐标X/Y和地球X/Y重合时，绕着Z轴转动的夹角。单位：°（度）。取值范围：[0, 360)。
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
   * 当设备坐标Y/Z和地球Y/Z重合时，绕着X轴转动的夹角。单位：°（度）。取值范围：[-180, 180)。
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
   * 当设备X/Z和地球X/Z重合时，绕着Y轴转动的夹角。单位：°（度）。取值范围：[-90, 90)。
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
 * 用于设置设备方向传感器订阅的参数，包括回调频率和回调函数。
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
   * 频率参数，设备方向传感器的回调函数执行频率。
   *
   * 默认值：'normal'。
   *
   * 可选值：
   *
   * -'game'：极高的回调频率，20ms/次，适用于游戏场景。
   *
   * -'ui'：较高的回调频率，60ms/次，适用于UI更新场景。
   *
   * -'normal'：普通的回调频率，200ms/次，适用于低功耗场景。
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
   * 感应到设备方向传感器数据变化后的回调函数，回调参数为DeviceOrientationResponse对象。
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
   * 接口调用失败的回调函数。回调参数为(data: string, code: number)，其中data为错误信息，code为错误码。不填写时，接口调用失败无回调通知。
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
 * 陀螺仪传感器数据变化后的回调函数的响应对象，包含设备在x、y、z三轴方向的旋转角速度数据。
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
   * x轴的旋转角速度。单位：rad/s（弧度/秒）。取值范围：取值为实际上报物理量，由硬件传感器决定。
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
   * y轴的旋转角速度。单位：rad/s（弧度/秒）。取值范围：取值为实际上报物理量，由硬件传感器决定。
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
   * z轴的旋转角速度。单位：rad/s（弧度/秒）。取值范围：取值为实际上报物理量，由硬件传感器决定。
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
 * 用于设置陀螺仪传感器订阅的参数，包括回调频率和回调函数。
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
   * 频率参数，陀螺仪的回调函数执行频率。
   *
   * 默认值：'normal'。
   *
   * 可选值：
   *
   * -'game'：极高的回调频率，20ms/次，适用于游戏场景。
   *
   * -'ui'：较高的回调频率，60ms/次，适用于UI更新场景。
   *
   * -'normal'：普通的回调频率，200ms/次，适用于低功耗场景。
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
   * 感应到陀螺仪数据变化后的回调函数，回调参数为GyroscopeResponse对象。
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
   * 接口调用失败的回调函数。回调参数为(data: string, code: number)，其中data为错误信息，code为错误码。不填写时，接口调用失败无回调通知。
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
   * 订阅加速度传感器数据变化。通过回调函数获取设备在x、y、z三轴方向上的加速度数据，数据格式为AccelerometerResponse对象，包含x、y、z三个number类型字段。
   * <br>当开发者需要获取设备加速度信息以实现运动检测、摇一摇等功能时，使用此接口。
   * <br>调用此接口后，系统会按指定的回调频率上报加速度数据；针对同一个应用，多次调用时，会覆盖前面的调用效果，即仅最后一次调用生效。
   *
   * > **说明：**
   * >
   * > 除Lite Wearable外，从API version 8开始，建议使用
   * > [ACCELEROMETER]{@link @ohos.sensor:sensor.on(type: SensorType.SENSOR_TYPE_ID_ACCELEROMETER, callback: Callback<AccelerometerResponse>, options?: Options)}
   * > 替代。
   *
   * @permission ohos.permission.ACCELEROMETER
   * @param { subscribeAccelerometerOptions } options - 用于设置加速度传感器订阅的参数，包括回调频率和回调函数。
   * @syscap SystemCapability.Sensors.Sensor.Lite
   * @famodelonly
   * @since 3 dynamiconly
   * @deprecated since 8
   * @reserved ["liteWearable"]
   * @useinstead @ohos.sensor:sensor.on(type: SensorType.SENSOR_TYPE_ID_ACCELEROMETER, callback: Callback<AccelerometerResponse>, options?: Options)
   */
  static subscribeAccelerometer(options: subscribeAccelerometerOptions): void;

  /**
   * 取消订阅加速度传感器数据。调用后，加速度传感器的回调函数将不再触发。
   * <br>当开发者不再需要加速度数据时（如页面切换、应用退出），使用此接口取消订阅，以减少系统资源占用。
   * <br>调用此接口后，之前通过subscribeAccelerometer注册的回调函数将不再被触发。如需再次获取数据，需重新调用subscribeAccelerometer。
   *
   * > **说明：**
   * >
   * > 除Lite Wearable外，从API version 8开始，建议使用
   * > [ACCELEROMETER]{@link @ohos.sensor:sensor.off(type: SensorType.SENSOR_TYPE_ID_ACCELEROMETER, callback?: Callback<AccelerometerResponse>)}
   * > 替代。
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
   * 订阅罗盘传感器数据变化。通过回调函数获取设备面对的方向度数数据，数据格式为CompassResponse对象，包含direction字段。
   * <br>当开发者需要获取设备方向信息以实现导航、指南针等功能时，使用此接口。
   * <br>调用此接口后，系统会在罗盘数据变化时上报方向数据；针对同一个应用，多次调用时，会覆盖前面的调用效果，即仅最后一次调用生效。
   *
   * > **说明：**
   * >
   * > 除Lite Wearable外，从API version 8开始，建议使用
   * > [ORIENTATION]{@link @ohos.sensor:sensor.on(type: SensorType.SENSOR_TYPE_ID_ORIENTATION, callback: Callback<OrientationResponse>, options?: Options)}
   * > 替代。
   *
   * @param { SubscribeCompassOptions } options - 用于设置罗盘传感器订阅的参数，包括回调函数。
   * @syscap SystemCapability.Sensors.Sensor.Lite
   * @famodelonly
   * @since 3 dynamiconly
   * @deprecated since 8
   * @reserved ["liteWearable"]
   * @useinstead ohos.sensor/sensor.SensorId#ORIENTATION
   */
  static subscribeCompass(options: SubscribeCompassOptions): void;

  /**
   * 取消订阅罗盘传感器数据。调用后，罗盘传感器的回调函数将不再触发。
   * <br>当开发者不再需要罗盘数据时，使用此接口取消订阅。
   * <br>调用此接口后，之前通过subscribeCompass注册的回调函数将不再被触发。需先调用subscribeCompass订阅后，再调用此接口取消订阅，否则无效果。
   *
   * > **说明：**
   * >
   * > 除Lite Wearable外，从API version 8开始，建议使用
   * > [ORIENTATION]{@link @ohos.sensor:sensor.off(type: SensorType.SENSOR_TYPE_ID_ORIENTATION, callback?: Callback<OrientationResponse>)}
   * > 替代。
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
   * 订阅距离传感器数据变化。通过回调函数获取可见物体相对于设备显示屏的接近或远离状态数据，数据格式为ProximityResponse对象，包含distance字段。
   * <br>当开发者需要检测物体与设备屏幕的距离以实现通话时自动息屏、防误触等功能时，使用此接口。
   * <br>调用此接口后，系统会在距离传感器数据变化时上报数据；针对同一个应用，多次调用时，会覆盖前面的调用效果，即仅最后一次调用生效。
   *
   * > **说明：**
   * >
   * > 从 API version 3开始支持，从API version 8开始废弃。除Lite Wearable外，建议使用
   * > [PROXIMITY]{@link @ohos.sensor:sensor.on(type: SensorType.SENSOR_TYPE_ID_PROXIMITY, callback: Callback<ProximityResponse>, options?: Options)}
   * >  替代。
   *
   * @param { SubscribeProximityOptions } options - 用于设置距离传感器订阅的参数，包括回调函数。
   * @syscap SystemCapability.Sensors.Sensor.Lite
   * @famodelonly
   * @since 3 dynamiconly
   * @deprecated since 8
   * @reserved ["liteWearable"]
   * @useinstead ohos.sensor/sensor.SensorId#PROXIMITY
   */
  static subscribeProximity(options: SubscribeProximityOptions): void;

  /**
   * 取消订阅距离传感器数据。调用后，距离传感器的回调函数将不再触发。
   * <br>当开发者不再需要距离感应数据时，使用此接口取消订阅。
   * <br>调用此接口后，之前通过subscribeProximity注册的回调函数将不再被触发。需先调用subscribeProximity订阅后，再调用此接口取消订阅，否则无效果。
   *
   * > **说明：**
   * >
   * > 除Lite Wearable外，从API version 8开始，建议使用
   * > [PROXIMITY]{@link @ohos.sensor:sensor.off(type: SensorType.SENSOR_TYPE_ID_PROXIMITY, callback?: Callback<ProximityResponse>)}
   * >  替代。
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
   * 订阅环境光传感器数据变化。通过回调函数获取环境光线强度数据，数据格式为LightResponse对象，包含intensity字段，单位：lux（勒克斯）。
   * <br>当开发者需要获取环境光强度以实现屏幕亮度自动调节、环境光检测等功能时，使用此接口。
   * <br>再次调用时，会覆盖前一次调用效果，即仅最后一次调用生效。
   *
   * > **说明：**
   * >
   * > 除Lite Wearable外，从API version 8开始，建议使用
   * > [AMBIENT_LIGHT]{@link @ohos.sensor:sensor.on(type: SensorType.SENSOR_TYPE_ID_AMBIENT_LIGHT, callback: Callback<LightResponse>, options?: Options)}
   * > 替代。
   *
   * @param { SubscribeLightOptions } options - 当环境光传感器数据发生变化时调用。
   * @syscap SystemCapability.Sensors.Sensor.Lite
   * @famodelonly
   * @since 3 dynamiconly
   * @deprecated since 8
   * @reserved ["liteWearable"]
   * @useinstead ohos.sensor/sensor.SensorId#AMBIENT_LIGHT
   */
  static subscribeLight(options: SubscribeLightOptions): void;

  /**
   * 取消订阅环境光传感器数据。调用后，环境光传感器的回调函数将不再触发。
   * <br>当开发者不再需要环境光线数据时，使用此接口取消订阅。
   * <br>调用此接口后，之前通过subscribeLight注册的回调函数将不再被触发。需先调用subscribeLight订阅后，再调用此接口取消订阅，否则无效果。
   *
   * > **说明：**
   * >
   * > 除Lite Wearable外，从API version 8开始，建议使用
   * > [AMBIENT_LIGHT]{@link @ohos.sensor:sensor.off(type: SensorType.SENSOR_TYPE_ID_AMBIENT_LIGHT, callback?: Callback<LightResponse>)}
   * > 替代。
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
   * 订阅计步传感器数据变化。通过回调函数获取计步传感器重启后累计记录的步数数据，数据格式为StepCounterResponse对象，包含steps字段。
   * <br>当开发者需要获取用户步数以实现计步器、运动追踪、健康监测等功能时，使用此接口。
   * <br>调用此接口后，系统会在计步数据变化时上报数据；针对同一个应用，多次调用时，会覆盖前面的调用效果，即仅最后一次调用生效。
   *
   * > **说明：**
   * >
   * > 除Lite Wearable外，从API version 8开始，建议使用
   * > [PEDOMETER]{@link @ohos.sensor:sensor.on(type: SensorType.SENSOR_TYPE_ID_PEDOMETER, callback: Callback<PedometerResponse>, options?: Options)}
   * > 替代。
   *
   * @permission ohos.permission.ACTIVITY_MOTION
   * @param { SubscribeStepCounterOptions } options - 当步进计数器传感器数据发生变化时调用。
   * @syscap SystemCapability.Sensors.Sensor.Lite
   * @famodelonly
   * @since 3 dynamiconly
   * @deprecated since 8
   * @reserved ["liteWearable"]
   * @useinstead @ohos.sensor:sensor.on(type: SensorType.SENSOR_TYPE_ID_PEDOMETER, callback: Callback<PedometerResponse>, options?: Options)
   */
  static subscribeStepCounter(options: SubscribeStepCounterOptions): void;

  /**
   * 取消订阅计步传感器数据。调用后，计步传感器的回调函数将不再触发。
   * <br>当开发者不再需要计步数据时，使用此接口取消订阅。
   * <br>调用此接口后，之前通过subscribeStepCounter注册的回调函数将不再被触发。需先调用subscribeStepCounter订阅后，再调用此接口取消订阅，否则无效果。
   *
   * > **说明：**
   * >
   * > 除Lite Wearable外，从API version 8开始，建议使用
   * > [PEDOMETER]{@link @ohos.sensor:sensor.off(type: SensorType.SENSOR_TYPE_ID_PEDOMETER, callback?: Callback<PedometerResponse>)}
   * > 替代。
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
   * 订阅气压计传感器数据变化。通过回调函数获取气压值数据，数据格式为BarometerResponse对象，包含pressure字段，单位：Pa（帕斯卡）。
   * <br>当开发者需要获取气压信息以实现海拔估算、天气监测、室内导航等功能时，使用此接口。
   * <br>调用此接口后，系统会在气压数据变化时上报数据；针对同一个应用，多次调用时，会覆盖前面的调用效果，即仅最后一次调用生效。
   *
   * > **说明：**
   * >
   * > 除Lite Wearable外，从API version 8开始，建议使用
   * > [BAROMETER]{@link @ohos.sensor:sensor.on(type: SensorType.SENSOR_TYPE_ID_BAROMETER, callback: Callback<BarometerResponse>, options?: Options)}
   * > 替代。
   *
   * @param { SubscribeBarometerOptions } options - 当气压计传感器数据发生变化时调用。
   * @syscap SystemCapability.Sensors.Sensor.Lite
   * @famodelonly
   * @since 3 dynamiconly
   * @deprecated since 8
   * @reserved ["liteWearable"]
   * @useinstead @ohos.sensor:sensor.on(type: SensorType.SENSOR_TYPE_ID_BAROMETER, callback: Callback<BarometerResponse>, options?: Options)
   */
  static subscribeBarometer(options: SubscribeBarometerOptions): void;

  /**
   * 取消订阅气压计传感器数据。调用后，气压计传感器的回调函数将不再触发。
   * <br>当开发者不再需要气压数据时，使用此接口取消订阅。
   * <br>调用此接口后，之前通过subscribeBarometer注册的回调函数将不再被触发。需先调用subscribeBarometer订阅后，再调用此接口取消订阅，否则无效果。
   *
   * > **说明：**
   * >
   * > 除Lite Wearable外，从API version 8开始，建议使用
   * > [BAROMETER]{@link @ohos.sensor:sensor.off(type: SensorType.SENSOR_TYPE_ID_BAROMETER, callback?: Callback<BarometerResponse>)}
   * > 替代。
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
   * 订阅心率传感器数据变化。通过回调函数获取心率值数据，数据格式为HeartRateResponse对象，包含heartRate字段，单位：bpm（beats per minute，每分钟心跳次数），默认回调频率为5秒/次。
   * <br>当开发者需要获取用户心率数据以实现健康监测、运动强度评估等功能时，使用此接口。
   * <br>调用此接口后，系统会以5秒/次的频率上报心率数据；针对同一个应用，多次调用时，会覆盖前面的调用效果，即仅最后一次调用生效。
   *
   * > **说明：**
   * >
   * > 除Lite Wearable外，从API version 8开始，建议使用
   * > [HEART_RATE]{@link @ohos.sensor:sensor.on(type: SensorType.SENSOR_TYPE_ID_HEART_RATE, callback: Callback<HeartRateResponse>, options?: Options)}
   * > 替代。
   *
   * @permission ohos.permission.READ_HEALTH_DATA
   * @param { SubscribeHeartRateOptions } options - 当心率传感器数据发生变化时调用。
   * @syscap SystemCapability.Sensors.Sensor.Lite
   * @famodelonly
   * @since 3 dynamiconly
   * @deprecated since 8
   * @reserved ["liteWearable"]
   * @useinstead @ohos.sensor:sensor.on(type: SensorType.SENSOR_TYPE_ID_HEART_RATE, callback: Callback<HeartRateResponse>, options?: Options)
   */
  static subscribeHeartRate(options: SubscribeHeartRateOptions): void;

  /**
   * 取消订阅心率传感器数据。调用后，心率传感器的回调函数将不再触发。
   * <br>当开发者不再需要心率数据时，使用此接口取消订阅。
   * <br>调用此接口后，之前通过subscribeHeartRate注册的回调函数将不再被触发。需先调用subscribeHeartRate订阅后，再调用此接口取消订阅，否则无效果。
   *
   * > **说明：**
   * >
   * > 除Lite Wearable外，从API version 8开始，建议使用
   * > [HEART_RATE]{@link @ohos.sensor:sensor.off(type: SensorType.SENSOR_TYPE_ID_HEART_RATE, callback?: Callback<HeartRateResponse>)}
   * > 替代。
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
   * 订阅设备佩戴状态变化。通过回调函数获取设备是否已佩戴的状态数据，数据格式为OnBodyStateResponse对象，包含value字段（boolean类型）。
   * <br>当开发者需要检测可穿戴设备是否已被用户佩戴以实现佩戴状态检测、自动启停功能等功能时，使用此接口。
   * <br>调用此接口后，系统会在佩戴状态变化时上报数据；针对同一个应用，多次调用时，会覆盖前面的调用效果，即仅最后一次调用生效。
   *
   * > **说明：**
   * >
   * > 除Lite Wearable外，从API version 8开始，建议使用
   * > [WEAR_DETECTION]{@link @ohos.sensor:sensor.on(type: SensorType.SENSOR_TYPE_ID_WEAR_DETECTION, callback: Callback<WearDetectionResponse>, options?: Options)}
   * > 替代。
   *
   * @param { SubscribeOnBodyStateOptions } options - 当佩戴状态改变时调用。
   * @syscap SystemCapability.Sensors.Sensor.Lite
   * @famodelonly
   * @since 3 dynamiconly
   * @deprecated since 8
   * @reserved ["liteWearable"]
   * @useinstead @ohos.sensor:sensor.on(type: SensorType.SENSOR_TYPE_ID_WEAR_DETECTION, callback: Callback<WearDetectionResponse>, options?: Options)
   */
  static subscribeOnBodyState(options: SubscribeOnBodyStateOptions): void;

  /**
   * 取消订阅设备佩戴状态。调用后，佩戴状态的回调函数将不再触发。
   * <br>当开发者不再需要佩戴状态数据时，使用此接口取消订阅。
   * <br>调用此接口后，之前通过subscribeOnBodyState注册的回调函数将不再被触发。需先调用subscribeOnBodyState订阅后，再调用此接口取消订阅，否则无效果。
   *
   * > **说明：**
   * >
   * > 除Lite Wearable外，从API version 8开始，建议使用
   * > [WEAR_DETECTION]{@link @ohos.sensor:sensor.off(type: SensorType.SENSOR_TYPE_ID_WEAR_DETECTION, callback?: Callback<WearDetectionResponse>)}
   * > 替代。
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
   * 获取设备佩戴状态。此接口为一次性获取，不同于subscribeOnBodyState的持续订阅模式，仅返回当前时刻的佩戴状态。
   * <br>当开发者需要一次性获取设备当前佩戴状态（而非持续监听变化）时，使用此接口。
   * <br>调用此接口后，系统会通过success回调返回当前佩戴状态数据。此接口不会持续上报数据，仅返回一次结果。
   *
   * @param { GetOnBodyStateOptions } options - 获取传感器所在设备佩戴状态时调用。
   * @syscap SystemCapability.Sensors.Sensor.Lite
   * @famodelonly
   * @since 3 dynamiconly
   * @deprecated since 8
   * @reserved ["liteWearable"]
   * @useinstead ohos.sensor/sensor.SensorId#WEAR_DETECTION
   */
  static getOnBodyState(options: GetOnBodyStateOptions): void;

  /**
   * 订阅设备方向传感器数据变化。通过回调函数获取设备方向数据，数据格式为DeviceOrientationResponse对象，包含alpha、beta、gamma三个旋转角度字段，单位：°（度）。
   * <br>当开发者需要获取设备方向信息以实现屏幕旋转、游戏方向控制、AR/VR场景等功能时，使用此接口。
   * <br>针对同一个应用，多次调用时，会覆盖前面的调用效果，即仅最后一次调用生效；针对同一个方法内，不支持多次调用。
   *
   * > **说明：**
   * >
   * > 除Lite Wearable外，从API version 8开始，建议使用
   * > [ORIENTATION]{@link @ohos.sensor:sensor.on(type: SensorType.SENSOR_TYPE_ID_ORIENTATION, callback: Callback<OrientationResponse>, options?: Options)}
   * > 替代。
   *
   * @param { SubscribeDeviceOrientationOptions } options - 用于设置设备方向传感器订阅的参数，包括回调频率和回调函数。
   * @syscap SystemCapability.Sensors.Sensor.Lite
   * @famodelonly
   * @since 6 dynamiconly
   * @deprecated since 8
   * @reserved ["liteWearable"]
   * @useinstead @ohos.sensor:sensor.on(type: SensorType.SENSOR_TYPE_ID_ORIENTATION, callback: Callback<OrientationResponse>, options?: Options)
   */
  static subscribeDeviceOrientation(options: SubscribeDeviceOrientationOptions): void;

  /**
   * 取消订阅设备方向传感器数据。调用后，设备方向传感器的回调函数将不再触发。
   * <br>当开发者不再需要设备方向数据时，使用此接口取消订阅。
   * <br>调用此接口后，之前通过subscribeDeviceOrientation注册的回调函数将不再被触发。需先调用subscribeDeviceOrientation订阅后，再调用此接口取消订阅，否则无效果。
   *
   * > **说明：**
   * >
   * > 除Lite Wearable外，从API version 8开始，建议使用
   * > [ORIENTATION]{@link @ohos.sensor:sensor.off(type: SensorType.SENSOR_TYPE_ID_ORIENTATION, callback?: Callback<OrientationResponse>)}
   * > 替代。
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
   * 订阅陀螺仪传感器数据变化。通过回调函数获取设备在x、y、z三轴方向的旋转角速度数据，数据格式为GyroscopeResponse对象，包含x、y、z三个number类型字段，单位：rad/s（弧度/秒）。
   * <br>当开发者需要获取设备旋转角速度以实现手势识别、游戏操控、姿态追踪等功能时，使用此接口。
   * <br>针对同一个应用，多次点击调用时，会覆盖前面的调用效果，即仅最后一次调用生效；针对同一个方法内，不支持多次调用。
   *
   * > **说明：**
   * >
   * > 除Lite Wearable外，从API version 8开始，建议使用
   * > [GYROSCOPE]{@link @ohos.sensor:sensor.on(type: SensorType.SENSOR_TYPE_ID_GYROSCOPE, callback: Callback<GyroscopeResponse>, options?: Options)}
   * > 替代。
   *
   * @permission ohos.permission.GYROSCOPE
   * @param { SubscribeGyroscopeOptions } options - 用于设置陀螺仪传感器订阅的参数，包括回调频率和回调函数。
   * @syscap SystemCapability.Sensors.Sensor.Lite
   * @famodelonly
   * @since 6 dynamiconly
   * @deprecated since 8
   * @reserved ["liteWearable"]
   * @useinstead @ohos.sensor:sensor.on(type: SensorType.SENSOR_TYPE_ID_GYROSCOPE, callback: Callback<GyroscopeResponse>, options?: Options)
   */
  static subscribeGyroscope(options: SubscribeGyroscopeOptions): void;

  /**
   * 取消订阅陀螺仪传感器数据。调用后，陀螺仪传感器的回调函数将不再触发。
   * <br>当开发者不再需要陀螺仪数据时，使用此接口取消订阅。
   * <br>调用此接口后，之前通过subscribeGyroscope注册的回调函数将不再被触发。需先调用subscribeGyroscope订阅后，再调用此接口取消订阅，否则无效果。
   *
   * > **说明：**
   * >
   * > 除Lite Wearable外，从API version 8开始，建议使用
   * > [GYROSCOPE]{@link @ohos.sensor:sensor.off(type: SensorType.SENSOR_TYPE_ID_GYROSCOPE, callback?: Callback<GyroscopeResponse>)}
   * > 替代。
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