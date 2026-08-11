/*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
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
 * @file 用户状态感知
 * @kit MultimodalAwarenessKit
 */

import type { Callback } from './@ohos.base';

/**
 * 本模块提供用户状态感知能力，包括年龄群组检测等功能。
 *
 * @syscap SystemCapability.MultimodalAwareness.UserStatus
 * @since 20 dynamic
 * @since 23 static
 */
declare namespace userStatus {
  /**
   * 表示用户年龄群组分类检测结果。
   *
   * @syscap SystemCapability.MultimodalAwareness.UserStatus
   * @since 20 dynamic
   * @since 23 static
   * @deprecated since 24
   */
  export interface UserClassification {
    /**
     * 表示具体的年龄群组（例如，儿童、成人）。
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @since 20 dynamic
     * @since 23 static
     * @deprecated since 24
     */
    ageGroup?: UserAgeGroup;

    /**
     * 表示年龄群组检测结果的置信度，取值范围[0,1]的浮点数，数值越大代表置信度越高。
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @since 20 dynamic
     * @since 23 static
     * @deprecated since 24
     */
    confidence?: float;
  }

  /**
   * 表示用户具体的年龄分类群组，例如，儿童或成年人。
   *
   * @syscap SystemCapability.MultimodalAwareness.UserStatus
   * @since 20 dynamic
   * @since 23 static
   * @deprecated since 24
   */
  export enum UserAgeGroup {
    /**
     * 表示是成年人操作。
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @since 20 dynamic
     * @since 23 static
     * @deprecated since 24
     */
    OTHERS = 0,

    /**
     * 表示是儿童操作。
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @since 20 dynamic
     * @since 23 static
     * @deprecated since 24
     */
    CHILD = 1
  }

  /**
   * 订阅年龄群组检测功能。
   * 
   * 订阅成功后，可以获取用户年龄群组的分类结果，应用可根据此结果做相应的内容推荐。
   * 
   * > **说明：**
   * >
   * > 该接口仅在部分Phone中支持使用，当Phone设备不支持时返回801错误码。
   *
   * @param { 'userAgeGroupDetected' } type - 事件类型。type为“userAgeGroupDetected”，表示年龄群组检测功能。
   * @param { Callback<UserClassification> } callback - 回调函数，返回检测结果。
   * @throws { BusinessError } 801 - Capability not supported. Function can not work correctly due to limited
   *     <br> device capabilities.
   * @throws { BusinessError } 33900001 - Service exception. Possible causes:
   *     <br>1. System error, such as a null pointer and container-related exception.
   *     <br>2. Node-API invocation exception, such as invalid Node-API status.
   * @throws { BusinessError } 33900002 - Subscription failed. Possible causes:
   *     <br>1. Callback registration failed.
   *     <br>2. Failed to bind the native object to the JS wrapper.
   *     <br>3. Node-API invocation exception, such as invalid Node-API status.
   *     <br>4. IPC request exception.
   * @syscap SystemCapability.MultimodalAwareness.UserStatus
   * @since 20 dynamic
   * @deprecated since 24
   */
  function on(type: 'userAgeGroupDetected', callback: Callback<UserClassification>): void;

  /**
   * 取消订阅年龄群组检测功能。
   * 
   * > **说明：**
   * >
   * > 该接口仅在部分Phone中支持使用，当Phone设备不支持时返回33900003错误码。
   *
   * @param { 'userAgeGroupDetected' } type - 事件类型。type为“userAgeGroupDetected”，表示年龄群组检测功能。
   * @param { Callback<UserClassification> } [callback] - 回调函数，返回检测结果。需要取消监听的回调函数，需与订阅时传入的回调函数一致。若不填，则取消当前监听该事件的所有回调函数。
   * @throws { BusinessError } 801 - Capability not supported. Function can not work correctly due to limited
   *     <br> device capabilities.
   * @throws { BusinessError } 33900001 - Service exception. Possible causes:
   *     <br>1. System error, such as a null pointer and container-related exception.
   *     <br>2. Node-API invocation exception, such as invalid Node-API status.
   * @throws { BusinessError } 33900003 - Unsubscription failed. Possible causes:
   *     <br>1. Callback failure.
   *     <br>2. Node-API invocation exception, such as invalid Node-API status.
   *     <br>3. IPC request exception.
   * @syscap SystemCapability.MultimodalAwareness.UserStatus
   * @since 20 dynamic
   * @deprecated since 24
   */
  function off(type: 'userAgeGroupDetected', callback?: Callback<UserClassification>): void;

  /**
   * 订阅年龄群组检测功能。
   *
   * @param { Callback<UserClassification> } callback - 回调函数，返回检测结果。
   * @throws { BusinessError } 801 - Capability not supported. Function can not work correctly due to limited
   *     <br> device capabilities.
   * @throws { BusinessError } 33900001 - Service exception. Possible causes:
   *     <br>1. System error, such as a null pointer and container-related exception.
   *     <br>2. Node-API invocation exception, such as invalid Node-API status.
   * @throws { BusinessError } 33900002 - Subscription failed. Possible causes:
   *     <br>1. Callback registration failed.
   *     <br>2. Failed to bind the native object to the JS wrapper.
   *     <br>3. Node-API invocation exception, such as invalid Node-API status.
   *     <br>4. IPC request exception.
   * @syscap SystemCapability.MultimodalAwareness.UserStatus
   * @since 23 static
   * @deprecated since 24
   */
  function onUserAgeGroupDetected(callback: Callback<UserClassification>): void;

  /**
   * 取消订阅年龄群组检测功能。
   *
   * @param { Callback<UserClassification> } [callback] - 回调函数，返回检测结果。需要取消监听的回调函数，需与订阅时传入的回调函数一致。若不填，则取消当前监听该事件的所有回调函数。
   * @throws { BusinessError } 801 - Capability not supported. Function can not work correctly due to limited
   *     <br> device capabilities.
   * @throws { BusinessError } 33900001 - Service exception. Possible causes:
   *     <br>1. System error, such as a null pointer and container-related exception.
   *     <br>2. Node-API invocation exception, such as invalid Node-API status.
   * @throws { BusinessError } 33900003 - Unsubscription failed. Possible causes:
   *     <br>1. Callback failure.
   *     <br>2. Node-API invocation exception, such as invalid Node-API status.
   *     <br>3. IPC request exception.
   * @syscap SystemCapability.MultimodalAwareness.UserStatus
   * @since 23 static
   * @deprecated since 24
   */
  function offUserAgeGroupDetected(callback?: Callback<UserClassification>): void;

  /**
   * 设备类型枚举。
   *
   * @syscap SystemCapability.MultimodalAwareness.UserStatus
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  export enum DeviceType {  
    /**
     * 未知设备类型。
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    UNKNOWN_TYPE = 0,

    /**
     * PC设备。
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    PC = 0x0C,

    /**
     * 手机设备。
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    PHONE = 0x0E,

    /**
     * 平板设备。
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    TABLET = 0x11
  }

  /**
   * 设备信息。
   *
   * @syscap SystemCapability.MultimodalAwareness.UserStatus
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  export interface DeviceInfo {  
    /**
     * 设备ID。
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    deviceId: string;

    /**
     * 设备网络ID。
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    networkId: string;

    /**
     * 设备名称。
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    deviceName: string;

    /**
     * 设备类型。
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    deviceType: DeviceType;
  }

  /**
   * 用户状态检测特性枚举。
   *
   * @syscap SystemCapability.MultimodalAwareness.UserStatus
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  export enum UserStatusFeature {  
    /**
     * 手势识别特性（100ms上报间隔）。
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    GESTURES_RECOGNITION = 5,

    /**
     * 防误触检测特性。
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    ANTI_MISTOUCH = 6,

    /**
     * 快捷手势识别特性（20ms上报间隔）。
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    QUICK_GESTURES_RECOGNITION = 7,

    /**
     * 面部相对位置识别特性（100ms上报间隔）。
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    FACE_RELATIVE_POSITION_RECOGNITION = 8,

    /**
     * 快捷面部相对位置识别特性（20ms上报间隔）。
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    QUICK_FACE_RELATIVE_POSITION_RECOGNITION = 9,

    /**
     * 手眼协同（注意力）识别特性。
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    HAND_GAZE_COORDINATION = 11,

    /**
     * 用户吹气状态检测特性。
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    USER_BLOWING_STATUS = 12,

    /**
     * 用户情绪检测特性。
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    USER_MOOD = 13,

    /**
     * 舒适提醒检测特性。
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    COMFORT_REMINDER = 15,

    /**
     * 环境声音检测特性。
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    ENV_SOUND = 17,

    /**
     * 外屏防误触检测特性。
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    EXT_SCREEN_ANTI_MISTOUCH = 19
  }

  /**
   * 用户状态原子能力枚举。
   *
   * @syscap SystemCapability.MultimodalAwareness.UserStatus
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  export enum UserStatusAtomicCap {  
    /**
     * 未知原子能力。
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    ATOMIC_UNKNOWN = 0,

    /**
     * 检测面部相对于屏幕的位置。
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    FACE_RELATIVE_POSITION = 1,

    /**
     * 检测面部数量变化。
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    FACE_NUM_CHANGE = 2,

    /**
     * 检测用户手势。
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    GESTURE = 3,

    /**
     * 检测面部相对于屏幕的角度。
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    FACE_ANGLE = 4,

    /**
     * 检测传感器重力数据。
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    SENSOR_GRAVITY = 5,

    /**
     * 检测传感器陀螺仪数据。
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    SENSOR_GYROSCOPE = 6,

    /**
     * 检测传感器加速度计数据。
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    SENSOR_ACCELEROMETER = 7,

    /**
     * 检测传感器线性加速度数据。
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    SENSOR_LINEAR_ACCELERATION = 8,

    /**
     * 检测传感器旋转矢量数据。
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    SENSOR_ROTATION_VECTOR = 9,

    /**
     * 检测传感器方向数据。
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    SENSOR_ORIENTATION = 10,

    /**
     * 检测用户吹气数据。
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    BLOWING_STATUS = 11,

    /**
     * 检测用户情绪数据。
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    MOOD_STATUS = 12,

    /**
     * 检测用户环境声音强度。
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    ENV_SOUND = 13,

    /**
     * 检测用户噪声强度。
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    NOISE_SOUND = 14,

    /**
     * 检测用户是否正在注视屏幕。
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    EYE_GAZE_SCREEN = 15
  }

  /**
   * 触发特定提醒铃声所需的舒适提醒级别枚举。
   *
   * @syscap SystemCapability.MultimodalAwareness.UserStatus
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  export enum ReminderLevel {
    /**
     * 弱提醒级别。
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    WEAK_REMINDER = 0,

    /**
     * 普通提醒级别。
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    NORMAL_REMINDER = 1
  }

  /**
   * 用户状态数据。
   *
   * @syscap SystemCapability.MultimodalAwareness.UserStatus
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  export interface UserStatusData {
    /**
     * 用户状态检测特性类型。
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    feature: UserStatusFeature;

    /**
     * 单一感知特性下的多阶段检测状态。
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    status: string;

    /**
     * 用户状态检测结果。值为0表示成功，其他值表示失败。
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    result: int;

    /**
     * 业务错误码。值为0表示成功，其他值表示失败。
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    errCode: int;
  }

  /**
   * 用户吹气数据。
   *
   * @syscap SystemCapability.MultimodalAwareness.UserStatus
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  export interface UserBlowData extends UserStatusData {
    /**
     * 面部相对于屏幕的位置。归一化坐标系范围为0到640。
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    facePosition?: double[];

    /**
     * 吹气强度级别。取值范围为[1,12]的整数。
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    strengthLevel?: int;

    /**
     * 吹气方向。取值范围为0到2。0：未吹气，1：从底部麦克风吹气，2：从顶部麦克风吹气。
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    blowDirection?: int;

    /**
     * 用户情绪级别。取值范围为0到5。0：非常开心，1：有些开心，2：平静，3：有些不开心，4：生气，5：哭泣。
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    emotion?: int;

    /**
     * 用户是否正在注视屏幕。
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    isGazeStatus?: boolean;

    /**
     * 用户运动状态的重力加速度，单位：m/s²。
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    gravityAcceleration?: double[];

    /**
     * 用户运动状态的线性加速度，单位：m/s²。
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    linearAcceleration?: double[][];
  }

  /**
   * 用户情绪数据。
   *
   * @syscap SystemCapability.MultimodalAwareness.UserStatus
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  export interface UserEmotionData extends UserStatusData {
    /**
     * 用户实时情绪级别。取值范围为0到5。0：非常开心，1：有些开心，2：平静，3：有些不开心，4：生气，5：哭泣。
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    emotionRealTime ?: int;

    /**
     * 用户情绪置信度。取值范围为0到100，值越大表示置信度越高。
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    confidence?: int;

    /**
     * 情绪数据是否为实时数据。
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    isRealTime?: boolean;

    /**
     * 用户非实时情绪级别。取值范围为0到5。0：非常开心，1：有些开心，2：平静，3：有些不开心，4：生气，5：哭泣。
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    emotionNonRealTime ?: int[];

    /**
     * 用户运动状态的重力加速度，单位：m/s²。
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    gravityAcceleration?: double[];

    /**
     * 用户运动状态的线性加速度，单位：m/s²。
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    linearAcceleration?: double[][];
  }

  /**
   * 舒适提醒数据。
   *
   * @syscap SystemCapability.MultimodalAwareness.UserStatus
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  export interface ComfortReminderData extends UserStatusData {
    /**
     * 融合提醒数据。
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    fusionReminderData: ReminderLevel;

    /**
     * 摆动提醒数据。
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    swingReminderData: ReminderLevel;

    /**
     * 事件类型。取值范围为0到1。0：注视事件，1：环境声音事件。
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    eventType: int;
  }

  /**
   * 用户面部数据。
   *
   * @syscap SystemCapability.MultimodalAwareness.UserStatus
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  export interface UserFacesData extends UserStatusData {
    /**
     * 用户视角。取值范围为0到90，单位：度。
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    visualAngle?: double[];

    /**
     * 用户运动状态的角速度，单位：rad/s。
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    angularVelocity?: double[];

    /**
     * 用户运动状态的重力加速度，单位：m/s²。
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    gravityAcceleration?: double[];

    /**
     * 用户运动状态的线性加速度，单位：m/s²。
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    linearAcceleration?: double[][];

    /**
     * 用户运动状态的方位角。取值范围为0到360，单位：度。
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    azimuth?: double[];

    /**
     * 检测到的面部数量。取值范围为[0,3]的整数。
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    faceNum?: int;
  }

  /**
   * 用户手势数据。
   *
   * @syscap SystemCapability.MultimodalAwareness.UserStatus
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  export interface UserGesturesData extends UserFacesData {
    /**
     * 用户手部是否存在。
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    isHandExist?: boolean;

    /**
     * 手部相对于屏幕的位置。归一化坐标系范围为0到640。
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    handPosition?: double[];

    /**
     * 用户动态手势类型。取值范围为0到3。0：上滑，1：下滑，2：截屏，3：释放。
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    motionGesture?: int;

    /**
     * 用户静态手势类型。取值范围为0到3。0：手掌，1：握拳，2：剪刀，3：比心。
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    handType?: int;

    /**
     * 用户手势与屏幕方向之间的角度。取值范围为0到90，单位：度。
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    directionAngle?: double[];

    /**
     * 手势速度，单位：帧/秒（fps）。
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    gestureSpeed?: double[];
  }

  /**
   * 用户面部角度数据。
   *
   * @syscap SystemCapability.MultimodalAwareness.UserStatus
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  export interface UserFaceAngleData extends UserStatusData {
    /**
       * 用户头部朝向的设备网络ID。最大长度为128。
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    hpeNetworkId: string;
  }

  /**
   * 订阅用户状态监测。
   *
   * @param { UserStatusFeature } featureId - 表示要订阅的特性。
   * @param { Callback<UserStatusData> } callback - 回调函数，返回用户状态数据。
   * @param { DeviceInfo[] } [deviceInfo] - 启用用户状态监测的设备列表。
   * @returns { int } 返回已注册的回调ID。
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited
   *     <br> device capabilities.
   * @throws { BusinessError } 33900001 - Service exception. Possible causes:
   *     <br>1. System error, such as null pointer and container-related exception.
   *     <br>2. Node-API invocation exception, such as a invalid Node-API status.
   * @throws { BusinessError } 33900002 - Subscription failed. Possible causes:
   *     <br>1. Callback registration failed.
   *     <br>2. Failed to bind the native object to the JS wrapper.
   *     <br>3. Node-API invocation exception, such as invalid Node-API status.
   *     <br>4. IPC request exception.
   * @syscap SystemCapability.MultimodalAwareness.UserStatus
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function subscribe(featureId: UserStatusFeature, callback: Callback<UserStatusData>,
    deviceInfo?: DeviceInfo[]): int;

  /**
   * 取消订阅用户状态监测。
   *
   * @param { UserStatusFeature } featureId - 表示要取消订阅的特性。
   * @param { Callback<UserStatusData> } [callback] - 回调函数，返回用户状态数据。
   * @returns { int } 操作成功返回0，否则返回非0值。
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited
   *     <br> device capabilities.
   * @throws { BusinessError } 33900001 - Service exception. Possible causes:
   *     <br>1. System error, such as a null pointer and container-related exception.
   *     <br>2. Node-API invocation exception, such as invalid Node-API status.
   * @throws { BusinessError } 33900003 - Unsubscription failed. Possible causes:
   *     <br>1. Callback failure.
   *     <br>2. Node-API invocation exception, such as invalid Node-API status.
   *     <br>3. IPC request exception.
   * @syscap SystemCapability.MultimodalAwareness.UserStatus
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function unsubscribe(featureId: UserStatusFeature, callback?: Callback<UserStatusData>): int;

  /**
   * 配置特性参数。
   *
   * @param { UserStatusFeature } featureId - 要配置的特性。
   * @param { string } detail - JSON格式的详细特性参数。
   * @returns { int } 操作成功返回0，否则返回非0值。
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 33900001 - Service exception. Possible causes:
   *     <br>1. System error, such as a null pointer and container-related exception.
   *     <br>2. Node-API invocation exception, such as invalid Node-API status.
   * @syscap SystemCapability.MultimodalAwareness.UserStatus
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function configure(featureId: UserStatusFeature, detail: string): int;

  /**
   * 查询设备支持的原子能力。
   *
   * @param { UserStatusAtomicCap[] } capabilities - 要查询的原子能力列表。
   * @returns { UserStatusAtomicCap[] } 返回设备支持的原子能力列表。
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 33900001 - Service exception. Possible causes:
   *     <br>1. System error, such as a null pointer and container-related exception.
   *     <br>2. Node-API invocation exception, such as invalid Node-API status.
   * @syscap SystemCapability.MultimodalAwareness.UserStatus
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function queryCapabilities(capabilities: UserStatusAtomicCap[]): UserStatusAtomicCap[];
}
export default userStatus;