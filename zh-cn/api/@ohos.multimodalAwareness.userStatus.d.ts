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
 * @file 用户状态感知
 * @kit MultimodalAwarenessKit
 */

import type { Callback } from './@ohos.base';

/**
 * 本模块提供用户状态感知能力，包括年龄群组检测，用户手势识别、人脸位姿识别、手眼协同检测、用户吹气状态检测、用户情绪检测、用户环境音检测等功能。
 * <br>适用于需要感知用户状态来优化交互体验的场景，能够帮助应用提供更自然、更个性化的用户体验。模块采用订阅/回调机制，通过底层传感器数据采集、
 * <br>特征提取和状态判断三个阶段实现用户状态检测，开发者可根据业务需求订阅相应的检测功能。
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
   * @param { string } type - 事件类型。type为“userAgeGroupDetected”，表示年龄群组检测功能。
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
   * @param { string } type - 事件类型。type为“userAgeGroupDetected”，表示年龄群组检测功能。
   * @param { Callback<UserClassification> } [callback] - 回调函数，返回检测结果。需要取消监听的回调函数，需与订阅时传入的回调函数一致。
   *     <br>若不填，则取消当前监听该事件的所有回调函数。
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
   * @param { Callback<UserClassification> } [callback] - 回调函数，返回检测结果。需要取消监听的回调函数，需与订阅时传入的回调函数一致。
   *     <br>若不填，则取消当前监听该事件的所有回调函数。
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
   * 表示设备类型。
   *
   * @syscap SystemCapability.MultimodalAwareness.UserStatus
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  export enum DeviceType {  
    /**
     * 表示设备类型未知。
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    UNKNOWN_TYPE = 0,

    /**
     * 表示PC设备。
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    PC = 0x0C,

    /**
     * 表示手机设备。
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    PHONE = 0x0E,

    /**
     * 表示平板设备。
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    TABLET = 0x11
  }

  /**
   * 表示设备信息。
   *
   * @syscap SystemCapability.MultimodalAwareness.UserStatus
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  export interface DeviceInfo {  
    /**
     * 表示设备ID。设备唯一标识符，用于标识和区分不同设备，字符串长度范围[0,64]。
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    deviceId: string;

    /**
     * 表示设备网络ID。用于设备组网和跨设备通信的唯一网络标识，字符串长度范围[0,64]。
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    networkId: string;

    /**
     * 表示设备名称。用户可自定义的设备显示名称，用于在界面中展示设备信息，字符串长度范围[0,64]。
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    deviceName: string;

    /**
     * 表示设备类型。
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    deviceType: DeviceType;
  }

  /**
   * 表示用户状态检测功能类型。
   *
   * @syscap SystemCapability.MultimodalAwareness.UserStatus
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  export enum UserStatusFeature {  
    /**
     * 表示用户手势识别功能（100ms上报间隔）。
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    GESTURES_RECOGNITION = 5,

    /**
     * 表示防误触检测功能。
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    ANTI_MISTOUCH = 6,

    /**
     * 表示用户快速手势识别功能（20ms上报间隔）。
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    QUICK_GESTURES_RECOGNITION = 7,

    /**
     * 表示人脸位姿识别功能（100ms上报间隔）。
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    FACE_RELATIVE_POSITION_RECOGNITION = 8,

    /**
     * 表示快速人脸位姿识别功能（20ms上报间隔）。
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    QUICK_FACE_RELATIVE_POSITION_RECOGNITION = 9,

    /**
     * 表示手眼协同检测功能。
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    HAND_GAZE_COORDINATION = 11,

    /**
     * 表示用户吹气状态检测功能。
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    USER_BLOWING_STATUS = 12,

    /**
     * 表示用户情绪检测功能。
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    USER_MOOD = 13,

    /**
     * 表示铃声舒适检测功能。
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    COMFORT_REMINDER = 15,

    /**
     * 表示环境音检测功能。
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    ENV_SOUND = 17,

    /**
     * 表示外屏防误触检测功能。
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    EXT_SCREEN_ANTI_MISTOUCH = 19
  }

  /**
   * 表示用户状态支持的原子化服务能力。
   *
   * @syscap SystemCapability.MultimodalAwareness.UserStatus
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  export enum UserStatusAtomicCap {  
    /**
     * 表示未知的原子化服务能力。
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    ATOMIC_UNKNOWN = 0,

    /**
     * 表示检测人脸相对于屏幕。
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    FACE_RELATIVE_POSITION = 1,

    /**
     * 表示检测人脸数量变化。
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    FACE_NUM_CHANGE = 2,

    /**
     * 表示检测用户手势。
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    GESTURE = 3,

    /**
     * 表示检测人脸相对于屏幕的角度。
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    FACE_ANGLE = 4,

    /**
     * 表示检测传感器重力数据。
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    SENSOR_GRAVITY = 5,

    /**
     * 表示检测传感器陀螺仪数据。
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    SENSOR_GYROSCOPE = 6,

    /**
     * 表示检测传感器加速度计数据。
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    SENSOR_ACCELEROMETER = 7,

    /**
     * 表示检测传感器线性加速度数据。
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    SENSOR_LINEAR_ACCELERATION = 8,

    /**
     * 表示检测传感器旋转矢量数据。
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    SENSOR_ROTATION_VECTOR = 9,

    /**
     * 表示检测传感器方向数据。
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    SENSOR_ORIENTATION = 10,

    /**
     * 表示检测用户吹气数据。
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    BLOWING_STATUS = 11,

    /**
     * 表示检测用户情绪数据。
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    MOOD_STATUS = 12,

    /**
     * 表示检测用户环境音强度。
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    ENV_SOUND = 13,

    /**
     * 表示检测用户噪音强度。
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    NOISE_SOUND = 14,

    /**
     * 表示检测用户是否注视屏幕。
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    EYE_GAZE_SCREEN = 15
  }

  /**
   * 表示提醒强度级别，触发提醒铃声时使用。
   *
   * @syscap SystemCapability.MultimodalAwareness.UserStatus
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  export enum ReminderLevel {
    /**
     * 表示弱提醒级别。
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    WEAK_REMINDER = 0,

    /**
     * 表示正常提醒级别。
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    NORMAL_REMINDER = 1
  }

  /**
   * 表示用户状态数据。
   *
   * @syscap SystemCapability.MultimodalAwareness.UserStatus
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  export interface UserStatusData {
    /**
     * 表示用户状态检测功能类型。
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    feature: UserStatusFeature;

    /**
     * 表示特定功能下的多阶段检测状态。该字符串取值已表明相应的检测状态，字符串最大长度是64。
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    status: string;

    /**
     * 表示用户状态检测结果。0表示成功，非0表示失败。
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    result: int;

    /**
     * 表示业务错误码。0表示成功，非0表示失败。
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    errCode: int;
  }

  /**
   * 表示用户吹气数据。
   *
   * @syscap SystemCapability.MultimodalAwareness.UserStatus
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  export interface UserBlowData extends UserStatusData {
    /**
     * 表示人脸相对于屏幕的坐标位置。数组长度为8，分别表示上下左右四个顶点的x、y坐标，归一化坐标系的取值范围是[0,640]。单位：px
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    facePosition?: double[];

    /**
     * 表示吹气力度。取值范围[1,12]。
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    strengthLevel?: int;

    /**
     * 表示吹气方向。取值范围[0,2]。0：未吹气，1：底部麦克风，2：顶部麦克风。
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    blowDirection?: int;

    /**
     * 表示用户情绪级别。取值范围[0,5]。0：非常愉悦，1：有点愉悦，2：平静，3：有点不愉悦，4：大怒，5：大哭。
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    emotion?: int;

    /**
     * 表示用户是否注视屏幕。取值范围[true,false]。
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    isGazeStatus?: boolean;

    /**
     * 表示当前状态下设备的重力加速度。数组长度为3，分别表示x、y、z三个方向的加速度分量，单位：m/s²。
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    gravityAcceleration?: double[];

    /**
     * 表示当前状态下设备的线性加速度。二维数组，外层表示多个点位的采样，内层为长度3的数组，分别表示x、y、z三个方向的加速度分量，单位：m/s²。
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    linearAcceleration?: double[][];
  }

  /**
   * 表示用户情绪数据。
   *
   * @syscap SystemCapability.MultimodalAwareness.UserStatus
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  export interface UserEmotionData extends UserStatusData {
    /**
     * 表示用户实时情绪级别。取值范围[0,5]。0：非常愉悦，1：有点愉悦，2：平静，3：有点不愉悦，4：大怒，5：大哭。
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    emotionRealTime ?: int;

    /**
     * 表示用户情绪置信度百分比。取值范围[0,100]。
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    confidence?: int;

    /**
     * 表示情绪数据是否为实时数据。取值范围[true,false]。
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    isRealTime?: boolean;

    /**
     * 表示用户非实时情绪级别。数组包含一段时间内采集的多个情绪值，每个元素取值范围[0,5]。0：非常愉悦，1：有点愉悦，2：平静，3：有点不愉悦，4：大怒，5：大哭。
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    emotionNonRealTime ?: int[];

    /**
     * 表示当前状态下设备的重力加速度。数组长度为3，分别表示x、y、z三个方向的加速度分量，单位：m/s²。
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    gravityAcceleration?: double[];

    /**
     * 表示当前状态下设备的线性加速度。二维数组，外层表示多个点位的采样，内层为长度3的数组，分别表示x、y、z三个方向的加速度分量，单位：m/s²。
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    linearAcceleration?: double[][];
  }

  /**
   * 表示舒适提醒数据。
   *
   * @syscap SystemCapability.MultimodalAwareness.UserStatus
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  export interface ComfortReminderData extends UserStatusData {
    /**
     * 表示综合检测后的提醒级别。
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    fusionReminderData: ReminderLevel;

    /**
     * 表示注视屏幕时提醒级别。
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    swingReminderData: ReminderLevel;

    /**
     * 表示事件类型。取值为0或1，0表示注视事件，1表示环境音事件。
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    eventType: int;
  }

  /**
   * 表示用户朝向屏幕相关的数据。
   *
   * @syscap SystemCapability.MultimodalAwareness.UserStatus
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  export interface UserFacesData extends UserStatusData {
    /**
     * 表示用户看屏幕的视角。取值范围[0,90]。单位：deg。
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    visualAngle?: double[];

    /**
     * 表示当前状态下设备的角速度。数组长度为3，分别表示绕x、y、z三个轴旋转的角速度分量，单位：rad/s。
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    angularVelocity?: double[];

    /**
     * 表示当前状态下设备的重力加速度。数组长度为3，分别表示x、y、z三个方向的加速度分量，单位：m/s²。
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    gravityAcceleration?: double[];

    /**
     * 表示当前状态下设备的线性加速度。二维数组，外层表示多个点位的采样，内层为长度3的数组，分别表示x、y、z三个方向的加速度分量，单位：m/s²。
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    linearAcceleration?: double[][];

    /**
     * 表示当前状态下设备的方位角。数组长度为3，分别表示偏航角（绕y轴）、俯仰角（绕x轴）和翻滚角（绕z轴），取值范围[0,360]。单位：deg。
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    azimuth?: double[];

    /**
     * 表示检测到的人脸数量。取值范围[0,3]。
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    faceNum?: int;
  }

  /**
   * 表示用户手势数据。
   *
   * @syscap SystemCapability.MultimodalAwareness.UserStatus
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  export interface UserGesturesData extends UserFacesData {
    /**
     * 表示用户手是否存在。取值范围[true,false]。
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    isHandExist?: boolean;

    /**
     * 表示手相对于屏幕的坐标位置。数组长度为8，分别表示上下左右四个顶点的x、y坐标，归一化坐标系的取值范围是[0,640]。
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    handPosition?: double[];

    /**
     * 表示用户动态手势类型。取值范围[0,3]。0：上翻，1：下翻，2：抓屏，3：释放。
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    motionGesture?: int;

    /**
     * 表示用户静态手势类型。取值范围[0,3]。0：掌型，1：拳型，2：剪刀，3：比心。
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    handType?: int;

    /**
     * 表示用户手势与屏幕方向的夹角。数组包含手势在多个维度的角度值，每个元素取值范围[0,90]，单位：deg。
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    directionAngle?: double[];

    /**
     * 表示手势速度。数组长度为2，第一个元素表示速度值，第二个元素为保留位（固定为0），单位：帧/秒。
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    gestureSpeed?: double[];
  }

  /**
   * 表示用户朝向角度数据。
   *
   * @syscap SystemCapability.MultimodalAwareness.UserStatus
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  export interface UserFaceAngleData extends UserStatusData {
    /**
     * 表示用户所面向的设备的网络ID。字符串长度范围[0,128]。
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    hpeNetworkId: string;
  }

  /**
   * 订阅用户状态监控，以获取用户状态数据。调用subscribe()后，必须在使用完毕后调用unsubscribe()取消订阅以释放回调资源，未调用unsubscribe()会导致回调资源泄漏，
   * <br>影响应用性能。建议先调用configure()配置功能参数，再调用subscribe()开始订阅。
   *
   * @param { UserStatusFeature } featureId - 表示用户状态检测功能类型。
   * @param { Callback<UserStatusData> } callback - 回调函数，用于接收用户状态数据。当订阅的用户状态数据更新时会被调用。
   * @param { DeviceInfo[] } [deviceInfo] - 表示要开启用户状态监控的设备列表。当featureId为HAND_GAZE_COORDINATION时需要输入有效且非空的deviceInfo信息，
   *     <br>否则影响功能使用；其他featureId可省略此参数。如果输入空、undefined或null，则认为没有传入实际值。
   * @returns { number } 返回注册的回调ID。唯一标识对应回调函数。
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
    deviceInfo?: DeviceInfo[]): number;

  /**
   * 取消订阅用户状态监控。与subscribe()方法成对使用，用于取消订阅回调并释放资源。必须在subscribe()之后调用，取消未订阅的featureId返回失败。
   * <br>建议在应用退出或不再需要监控时调用unsubscribe()。
   *
   * @param { UserStatusFeature } featureId - 表示要取消订阅的用户状态检测功能类型。对应subscribe时传入的featureId值。
   * @param { Callback<UserStatusData> } [callback] - 表示取消指定的callback回调函数。如果输入空、undefined或null，则取消featureId订阅的所有通知事件。
   * @returns { number } 返回执行结果。返回0表示操作成功，非零值表示操作失败。
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
  function unsubscribe(featureId: UserStatusFeature, callback?: Callback<UserStatusData>): number;

  /**
   * 配置功能参数。调用成功后，将更新指定功能的配置参数，影响后续该功能的检测行为，如检测灵敏度、采样频率、启用的检测项等。建议在subscribe()之前调用configure()配置功能参数，
   * <br>确保配置在订阅时生效。对于需要特定配置的功能（如USER_MOOD的实时/非实时模式），建议先configure()再subscribe()。
   *
   * @param { UserStatusFeature } featureId - 表示要配置的用户状态检测功能类型。
   * @param { string } detail - 配置参数，JSON格式字符串。包含params数组，每个参数包含description（参数名）和value（参数值数组）字段。
   *     <br>具体格式和取值参见下方detail定义说明表格。
   * @returns { number } 返回配置执行结果。返回0表示操作成功，非零值表示操作失败。
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 33900001 - Service exception. Possible causes:
   *     <br>1. System error, such as a null pointer and container-related exception.
   *     <br>2. Node-API invocation exception, such as invalid Node-API status.
   * @syscap SystemCapability.MultimodalAwareness.UserStatus
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function configure(featureId: UserStatusFeature, detail: string): number;

  /**
   * 查询设备支持的原子化服务能力。该方法通过底层接口判断是否支持指定的原子化服务能力，返回设备实际支持的能力列表。
   *
   * @param { UserStatusAtomicCap[] } capabilities - 表示要查询的原子化服务能力列表。
   * @returns { UserStatusAtomicCap[] } 返回设备支持的原子化服务能力列表。
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