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
 * This module provides the capability to subscribe to report the user status.
 *
 * @namespace userStatus
 * @syscap SystemCapability.MultimodalAwareness.UserStatus
 * @since 20 dynamic
 * @since 23 static
 */
declare namespace userStatus {
  /**
   * Represents the classification result of the user based on age group,
   * including the detected category (e.g., child or adult) and the confidence score.
   *
   * @interface UserClassification
   * @syscap SystemCapability.MultimodalAwareness.UserStatus
   * @since 20 dynamic
   * @since 23 static
   */
  export interface UserClassification {
    /**
     * ageGroup
     *
     * @type  { ?UserAgeGroup }
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @since 20 dynamic
     * @since 23 static
     */
    ageGroup?: UserAgeGroup;

    /**
     * confidence for the detected ageGroup
     *
     * @type  { ?float }
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @since 20 dynamic
     * @since 23 static
     */
    confidence?: float;
  }

  /**
   * Represents the user's age group (e.g., child, adult).
   *
   * @enum { number } UserAgeGroup
   * @syscap SystemCapability.MultimodalAwareness.UserStatus
   * @since 20 dynamic
   * @since 23 static
   */
  export enum UserAgeGroup {
    /**
     * Indicates that the operator is not a child.
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @since 20 dynamic
     * @since 23 static
     */
    OTHERS = 0,

    /**
     * Indicates that the operator is a child.
     *
     * @syscap SystemCapability.MultimodalAwareness.UserStatus
     * @since 20 dynamic
     * @since 23 static
     */
    CHILD = 1
  }

  /**
   * Subscribe to age group detection feature.
   * @param { 'userAgeGroupDetected' } type - Indicates the event type.
   * @param { Callback<UserClassification> } callback - Indicates the callback for getting the event data.
   * @throws { BusinessError } 801 - Capability not supported. Function can not work correctly due to limited
   * <br> device capabilities.
   * @throws { BusinessError } 33900001 - Service exception. Possible causes:
   * <br>1. System error, such as a null pointer and container-related exception.
   * <br>2. Node-API invocation exception, such as invalid Node-API status.
   * @throws { BusinessError } 33900002 - Subscription failed. Possible causes:
   * <br>1. Callback registration failed.
   * <br>2. Failed to bind the native object to the JS wrapper.
   * <br>3. Node-API invocation exception, such as invalid Node-API status.
   * <br>4. IPC request exception.
   * @syscap SystemCapability.MultimodalAwareness.UserStatus
   * @since 20 dynamic
   * @since 23 static
   */
  function on(type: 'userAgeGroupDetected', callback: Callback<UserClassification>): void;

  /**
   * Unsubscribe to age group detection feature.
   * @param { 'userAgeGroupDetected' } type - Indicates the event type.
   * @param { Callback<UserClassification> } [callback] - Indicates the callback for getting the event data.
   * @throws { BusinessError } 801 - Capability not supported. Function can not work correctly due to limited
   * <br> device capabilities.
   * @throws { BusinessError } 33900001 - Service exception. Possible causes:
   * <br>1. System error, such as a null pointer and container-related exception.
   * <br>2. Node-API invocation exception, such as invalid Node-API status.
   * @throws { BusinessError } 33900003 - Unsubscription failed. Possible causes:
   * <br>1. Callback failure.
   * <br>2. Node-API invocation exception, such as invalid Node-API status.
   * <br>3. IPC request exception.
   * @syscap SystemCapability.MultimodalAwareness.UserStatus
   * @since 20 dynamic
   * @since 23 static
   */
  function off(type: 'userAgeGroupDetected', callback?: Callback<UserClassification>): void;

  /**
   * Subscribe to detect the user class ification event.
   * @permission  ohos.permission.DETECT_GESTURE
   * @param { Callback<UserClassification> } callback - Indicates the callback for getting the event data.
   * @throws { BusinessError } 201 - Permission denied. An attempt was made to subscribe holdingHandChanged
   *     <br> event forbidden by ohos.permission.DETECT_GESTURE.
   * @throws { BusinessError } 801 - Capability not supported. Function can not work correctly due to limited
   * <br> device capabilities.
   * @throws { BusinessError } 31500001 - Service exception.
   * @throws { BusinessError } 31500002 - Subscribe Failed.
   * @syscap SystemCapability.MultimodalAwareness.Motion
   * @since 23 static
   */
  function onUserAgeGroupDetected(callback: Callback<UserClassification>): void;
  /**
   * Unsubscribe from the holding hand changed event.
   * @permission  ohos.permission.DETECT_GESTURE
   * @param { Callback<UserClassification> } [callback] - Indicates the callback for getting the event data.
   * @throws { BusinessError } 201 - Permission denied. An attempt was made to unsubscribe holdingHandChanged
   *     <br> event forbidden by ohos.permission.DETECT_GESTURE.
   * @throws { BusinessError } 801 - Capability not supported. Function can not work correctly due to limited
   * <br> device capabilities.
   * @throws { BusinessError } 31500001 - Service exception.
   * @throws { BusinessError } 31500003 - Unsubscribe Failed.
   * @syscap SystemCapability.MultimodalAwareness.Motion
   * @since 23 static
   */
  function offUserAgeGroupDetected(callback?: Callback<UserClassification>): void;
}
export default userStatus;