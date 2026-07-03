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
 * @file
 * @kit MultimodalAwarenessKit
 */

import type { Callback } from './@ohos.base';

/**
 * The **UserStatus** module, designed for user state awareness, empowers the system to perceive specific conditions of
 * users, such as determining their age group or recognizing environmental sounds, among other functions.
 *
 * @syscap SystemCapability.MultimodalAwareness.UserStatus
 * @since 20 dynamic
 * @since 23 static
 */
declare namespace userStatus {
  /**
   * Defines the user age group detection result.
   *
   * @syscap SystemCapability.MultimodalAwareness.UserStatus
   * @since 20 dynamic
   * @since 23 static
   * @deprecated since 24
   */
  export interface UserClassification {
    /**
     * User age group, for example, child or adult.
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @since 20 dynamic
     * @since 23 static
     * @deprecated since 24
     */
    ageGroup?: UserAgeGroup;

    /**
     * Confidence of the detection result. The value is a floating point number ranging from 0 to 1. A larger value 
     * indicates a higher confidence.
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @since 20 dynamic
     * @since 23 static
     * @deprecated since 24
     */
    confidence?: float;
  }

  /**
   * Enumerates the user age groups, for example, child or adult.
   *
   * @syscap SystemCapability.MultimodalAwareness.UserStatus
   * @since 20 dynamic
   * @since 23 static
   * @deprecated since 24
   */
  export enum UserAgeGroup {
    /**
     * Adult.
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @since 20 dynamic
     * @since 23 static
     * @deprecated since 24
     */
    OTHERS = 0,

    /**
     * Child.
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @since 20 dynamic
     * @since 23 static
     * @deprecated since 24
     */
    CHILD = 1
  }

  /**
   * Enables the age group detection function.
   * 
   * When the function is enabled, the application can recommend content based on the age group detection result.
   * 
   * > **NOTE**
   * >
   * > This API is supported only on some phones. Error code **801** is returned if it is called on unsupported phones.
   *
   * @param { 'userAgeGroupDetected' } type - Event type. The value **userAgeGroupDetected** indicates the event of
   *     enabling age group detection.
   * @param { Callback<UserClassification> } callback - Callback used to return the detection result.
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
   * Disables the age group detection function.
   * 
   * > **NOTE**
   * >
   * > This API is supported only on some phones. Error code **33900003** is returned if it is called on unsupported 
   * > phones.
   *
   * @param { 'userAgeGroupDetected' } type - Event type. The value **userAgeGroupDetected** indicates the event of
   *     enabling age group detection.
   * @param { Callback<UserClassification> } [callback] - Callback used to return the detection result.
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
   * Subscribe to age group detection feature.
   *
   * @param { Callback<UserClassification> } callback - Indicates the callback for getting the event data.
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
   * Unsubscribe to age group detection feature.
   *
   * @param { Callback<UserClassification> } [callback] - Indicates the callback for getting the event data.
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
   * Enumerates device types.
   *
   * @syscap SystemCapability.MultimodalAwareness.UserStatus
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  export enum DeviceType {  
    /**
     * Unknown device type.
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    UNKNOWN_TYPE = 0,

    /**
     * PC device.
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    PC = 0x0C,

    /**
     * Phone device.
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    PHONE = 0x0E,

    /**
     * Tablet device.
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    TABLET = 0x11
  }

  /**
   * Defines device information.
   *
   * @syscap SystemCapability.MultimodalAwareness.UserStatus
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  export interface DeviceInfo {  
    /**
     * Device ID.
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    deviceId: string;

    /**
     * Device network ID.
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    networkId: string;

    /**
     * Device name.
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    deviceName: string;

    /**
     * Device type.
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    deviceType: DeviceType;
  }

  /**
   * Enumerates user status detection features.
   *
   * @syscap SystemCapability.MultimodalAwareness.UserStatus
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  export enum UserStatusFeature {  
    /**
     * Gesture recognition feature (100ms reporting interval).
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    GESTURES_RECOGNITION = 5,

    /**
     * Anti-mistouch detection feature.
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    ANTI_MISTOUCH = 6,

    /**
     * Quick gesture recognition feature (20ms reporting interval).
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    QUICK_GESTURES_RECOGNITION = 7,

    /**
     * Face relative position recognition feature (100ms reporting interval).
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    FACE_RELATIVE_POSITION_RECOGNITION = 8,

    /**
     * Quick face relative position recognition feature (20ms reporting interval).
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    QUICK_FACE_RELATIVE_POSITION_RECOGNITION = 9,

    /**
     * Hand-eye coordination (attention) recognition feature.
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    HAND_GAZE_COORDINATION = 11,

    /**
     * User blowing status detection feature.
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    USER_BLOWING_STATUS = 12,

    /**
     * User mood detection feature.
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    USER_MOOD = 13,

    /**
     * Comfort reminder detection feature.
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    COMFORT_REMINDER = 15,

    /**
     * Environmental sound detection feature.
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    ENV_SOUND = 17,

    /**
     * External screen anti-mistouch detection feature.
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    EXT_SCREEN_ANTI_MISTOUCH = 19
  }

  /**
   * Enumerates user status atomic capabilities.
   *
   * @syscap SystemCapability.MultimodalAwareness.UserStatus
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  export enum UserStatusAtomicCap {  
    /**
     * Unknown atomic capability.
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    ATOMIC_UNKNOWN = 0,

    /**
     * Detects face position relative to screen.
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    FACE_RELATIVE_POSITION = 1,

    /**
     * Detects face number changes.
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    FACE_NUM_CHANGE = 2,

    /**
     * Detects user hand gestures.
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    GESTURE = 3,

    /**
     * Detects face angle relative to screen.
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    FACE_ANGLE = 4,

    /**
     * Detects sensor gravity data.
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    SENSOR_GRAVITY = 5,

    /**
     * Detects sensor gyroscope data.
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    SENSOR_GYROSCOPE = 6,

    /**
     * Detects sensor accelerometer data.
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    SENSOR_ACCELEROMETER = 7,

    /**
     * Detects sensor linear acceleration data.
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    SENSOR_LINEAR_ACCELERATION = 8,

    /**
     * Detects sensor rotation vector data.
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    SENSOR_ROTATION_VECTOR = 9,

    /**
     * Detects sensor orientation data.
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    SENSOR_ORIENTATION = 10,

    /**
     * Detects user blow data.
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    BLOWING_STATUS = 11,

    /**
     * Detects user emotion data.
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    MOOD_STATUS = 12,

    /**
     * Detects user ambient sound intensity.
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    ENV_SOUND = 13,

    /**
     * Detects user noise intensity.
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    NOISE_SOUND = 14,

    /**
     * Detects whether user is gazing at screen.
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    EYE_GAZE_SCREEN = 15
  }

  /**
   * Enumerates comfort reminder levels required for triggering specific alert ringtones.
   *
   * @syscap SystemCapability.MultimodalAwareness.UserStatus
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  export enum ReminderLevel {  
    /**
     * Weak reminder level.
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    WEAK_REMINDER = 0,

    /**
     * Normal reminder level.
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    NORMAL_REMINDER = 1
  }

  /**
   * Defines user status data.
   *
   * @syscap SystemCapability.MultimodalAwareness.UserStatus
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  export interface UserStatusData {  
    /**
     * User status detection feature type.
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    feature: UserStatusFeature;

    /**
     * Multi-stage detection states under a single perception feature.
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    status: string;

    /**
     * User status detection result.
     * The value `0` indicates success, and other values indicate failure.
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    result: int;

    /**
     * Business error code.
     * The value `0` indicates success, and other values indicate failure.
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    errCode: int;
  }

  /**
   * Defines user blow data.
   *
   * @syscap SystemCapability.MultimodalAwareness.UserStatus
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  export interface UserBlowData extends UserStatusData {  
    /**
     * Face position relative to screen.
     * The normalized coordinate system ranges from 0 to 640.
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    facePosition?: double[];

    /**
     * Blow strength level.
     * The value must be an integer within [1,12].
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    strengthLevel?: int;

    /**
     * Blow direction.
     * The value ranges from 0 to 2. 0: Not blowing, 1: Blowing from bottom mic, 2: Blowing from top mic.
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    blowDirection?: int;

    /**
     * User emotion level.
     * The value ranges from 0 to 5. 0: Very happy, 1: A little happy, 2: Calm,
     * 3: A little unhappy, 4: Angry, 5: Crying.
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    emotion?: int;

    /**
     * Whether user is gazing at screen.
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    isGazeStatus?: boolean;

    /**
     * Gravity acceleration of user motion status, in m/s².
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    gravityAcceleration?: double[];

    /**
     * Linear acceleration of user motion status, in m/s²..
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    linearAcceleration?: double[][];
  }

  /**
   * Defines user emotion data.
   *
   * @syscap SystemCapability.MultimodalAwareness.UserStatus
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  export interface UserEmotionData extends UserStatusData {  
    /**
     * User real-time emotion level.
     * The value ranges from 0 to 5. 0: Very happy, 1: A little happy, 2: Calm,
     * 3: A little unhappy, 4: Angry, 5: Crying.
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    emotionRealTime ?: int;

    /**
     * User emotion confidence.
     * The value ranges from 0 to 100. A larger value indicates a higher confidence.
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    confidence?: int;

    /**
     * Whether emotion data is real-time.
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    isRealTime?: boolean;

    /**
     * User non-real-time emotion level.
     * The value ranges from 0 to 5. 0: Very happy, 1: A little happy, 2: Calm,
     * 3: A little unhappy, 4: Angry, 5: Crying.
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    emotionNonRealTime ?: int[];

    /**
     * Gravity acceleration of user motion status, in m/s².
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    gravityAcceleration?: double[];

    /**
     * Linear acceleration of user motion status, in m/s².
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    linearAcceleration?: double[][];
  }

  /**
   * Defines comfort reminder data.
   *
   * @syscap SystemCapability.MultimodalAwareness.UserStatus
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  export interface ComfortReminderData extends UserStatusData {  
    /**
     * Fusion reminder data.
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    fusionReminderData: ReminderLevel;

    /**
     * Swing reminder data.
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    swingReminderData: ReminderLevel;

    /**
     * Event type.
     * The value ranges from 0 to 1. 0: Gaze event, 1: Ambient sound event..
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    eventType: int;
  }

  /**
   * Defines user face data.
   *
   * @syscap SystemCapability.MultimodalAwareness.UserStatus
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  export interface UserFacesData extends UserStatusData {  
    /**
     * User visual angle.
     * The value ranges from 0 to 90, in degrees.
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    visualAngle?: double[];

    /**
     * Angular velocity of user motion status, in rad/s.
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    angularVelocity?: double[];

    /**
     * Gravity acceleration of user motion status, in m/s².
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    gravityAcceleration?: double[];

    /**
     * Linear acceleration of user motion status, in m/s².
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    linearAcceleration?: double[][];

    /**
     * Azimuth of user motion status.
     * The value ranges from 0 to 360, in degrees.
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    azimuth?: double[];

    /**
     * Number of faces detected.
     * The value must be an integer within [0,3].
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    faceNum?: int;
  }

  /**
   * Defines user gesture data.
   *
   * @syscap SystemCapability.MultimodalAwareness.UserStatus
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  export interface UserGesturesData extends UserFacesData {  
    /**
     * Whether user hand exists.
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    isHandExist?: boolean;

    /**
     * Hand position relative to screen. 
     * The normalized coordinate system ranges from 0 to 640.
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    handPosition?: double[];

    /**
     * User dynamic gesture type.
     * The value ranges from 0 to 3. 0: Up, 1: Down, 2: Screen capture, 3: Release.
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    motionGesture?: int;

    /**
     * User static gesture type.
     * The value ranges from 0 to 3. 0: Palm, 1: Fist, 2: Scissors, 3: Finger heart.
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    handType?: int;

    /**
     * Angle between user gesture and screen directions.
     * The value ranges from 0 to 90, in degrees.
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    directionAngle?: double[];

    /**
     * Gesture speed, in frames per second (fps).
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    gestureSpeed?: double[];
  }

  /**
   * Defines user face angle data.
   *
   * @syscap SystemCapability.MultimodalAwareness.UserStatus
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  export interface UserFaceAngleData extends UserStatusData {  
    /**
     * Network ID of device that user head is facing.
     * The maximum length is 128.
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    hpeNetworkId: string;
  }

  /**
   * Subscribes to user status monitoring.
   *
   * @param { UserStatusFeature } featureId - Indicates the feature to be subscribed to.
   * @param { Callback<UserStatusData> } callback - Callback used to return user status data.
   * @param { DeviceInfo[] } [deviceInfo] - List of devices to enable user status monitoring.
   * @returns { int } Returns the registered callback ID.
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
   * Unsubscribes from user status monitoring.
   *
   * @param { UserStatusFeature } featureId - Indicates the feature to be unsubscribed from.
   * @param { Callback<UserStatusData> } [callback] - Callback used to return user status data.
   * @returns { int } Returns 0 if the operation succeeds; otherwise, returns a non-zero value.
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
   * Configures feature parameters.
   *
   * @param { UserStatusFeature } featureId - Feature to configure.
   * @param { string } detail - Detailed feature parameters in JSON format.
   * @returns { int } Returns 0 if the operation succeeds; otherwise, returns a non-zero value.
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
   * Queries device-supported atomic capabilities.
   *
   * @param { UserStatusAtomicCap[] } capabilities - List of atomic capabilities to query.
   * @returns { UserStatusAtomicCap[] } Returns the list of device-supported atomic capabilities.
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
