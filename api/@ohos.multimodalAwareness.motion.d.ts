

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
import type { Callback } from "./@ohos.base";
/**
 * This module provides the capability to subscribe to report the action or motion.
 *
 * @namespace motion
 * @syscap SystemCapability.MultimodalAwarness.Motion
 * @since arkts{ '1.1':'15','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare namespace motion {
  /**
   * Enum for operating hand status.
   *
   * @enum { number } OperatingHandStatus
   * @syscap SystemCapability.MultimodalAwarness.Motion
   * @since arkts{ '1.1':'15','1.2':'20'}
   * @arkts 1.1&1.2
   */
  export enum OperatingHandStatus {
    /**
     * indicates nothing has been detected.
     *
     * @syscap SystemCapability.MultimodalAwarness.Motion
     * @since arkts{ '1.1':'15','1.2':'20'}
     * @arkts 1.1&1.2
     */
    UNKNOWN_STATUS = 0,
    /**
     * indicates the operating hand is left hand.
     *
     * @syscap SystemCapability.MultimodalAwarness.Motion
     * @since arkts{ '1.1':'15','1.2':'20'}
     * @arkts 1.1&1.2
     */
    LEFT_HAND_OPERATED = 1,
    /**
     * indicates the operating hand is right hand.
     *
     * @syscap SystemCapability.MultimodalAwarness.Motion
     * @since arkts{ '1.1':'15','1.2':'20'}
     * @arkts 1.1&1.2
     */
    RIGHT_HAND_OPERATED = 2
  }
  /**
   * Enum for holding hand status.
   *
   * @enum { number } HoldingHandStatus
   * @syscap SystemCapability.MultimodalAwareness.Motion
   * @since 20
   * @arkts 1.1&1.2
   */
  export enum HoldingHandStatus {
    /**
     * indicates not held has been detected.
     *
     * @syscap SystemCapability.MultimodalAwareness.Motion
     * @since 20
     * @arkts 1.1&1.2
     */
    NOT_HELD = 0,
    /**
     * indicates the holding hand is left hand.
     *
     * @syscap SystemCapability.MultimodalAwareness.Motion
     * @since 20
     * @arkts 1.1&1.2
     */
    LEFT_HAND_HELD = 1,
    /**
     * indicates the holding hand is right hand.
     *
     * @syscap SystemCapability.MultimodalAwareness.Motion
     * @since 20
     * @arkts 1.1&1.2
     */
    RIGHT_HAND_HELD = 2,
    /**
     * indicates the holding hands are both hands.
     *
     * @syscap SystemCapability.MultimodalAwareness.Motion
     * @since 20
     * @arkts 1.1&1.2
     */
    BOTH_HANDS_HELD = 3
  }
  /**
   * Subscribe to detect the operating hand changed event.
   * @permission ohos.permission.ACTIVITY_MOTION or ohos.permission.DETECT_GESTURE
   * @param { 'operatingHandChanged' } type - Indicates the event type.
   * @param { Callback<OperatingHandStatus> } callback - Indicates the callback for getting the event data.
   * @throws { BusinessError } 201 - Permission denied. An attempt was made to subscribe operatingHandChanged
   * <br> event forbidden by permission: ohos.permission.ACTIVITY_MOTION or ohos.permission.DETECT_GESTURE.
   * @throws { BusinessError } 401 - Parameter error. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported. Function can not work correctly due to limited
   * <br> device capabilities.
   * @throws { BusinessError } 31500001 - Service exception.
   * @throws { BusinessError } 31500002 - Subscribe Failed.
   * @syscap SystemCapability.MultimodalAwarness.Motion
   * @since arkts{ '1.1':'15','1.2':'20'}
   * @arkts 1.1&1.2
   */
  function on(type: 'operatingHandChanged', callback: Callback<OperatingHandStatus>): void;
  /**
   * Unsubscribe to detect the operating hand changed event.
   * @permission ohos.permission.ACTIVITY_MOTION or ohos.permission.DETECT_GESTURE
   * @param { 'operatingHandChanged' } type - Indicates the event type.
   * @param { Callback<OperatingHandStatus> } callback - Indicates the callback for getting the event data.
   * @throws { BusinessError } 201 - Permission denied. An attempt was made to unsubscribe operatingHandChanged
   * <br> event forbidden by permission: ohos.permission.ACTIVITY_MOTION or ohos.permission.DETECT_GESTURE.
   * @throws { BusinessError } 401 - Parameter error. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported. Function can not work correctly due to limited
   * <br> device capabilities.
   * @throws { BusinessError } 31500001 - Service exception.
   * @throws { BusinessError } 31500003 - Unsubscribe Failed.
   * @syscap SystemCapability.MultimodalAwarness.Motion
   * @since arkts{ '1.1':'15','1.2':'20'}
   * @arkts 1.1&1.2
   */
  function off(type: 'operatingHandChanged', callback?: Callback<OperatingHandStatus>): void;
  /**
   * Get the recent operating hand status.
   * @permission ohos.permission.ACTIVITY_MOTION or ohos.permission.DETECT_GESTURE
   * @returns { OperatingHandStatus } The result of operating hand status.
   * @throws { BusinessError } 201 - Permission denied. An attempt was made to get the recent operating hand
   * <br> status forbidden by permission: ohos.permission.ACTIVITY_MOTION or ohos.permission.DETECT_GESTURE.
   * @throws { BusinessError } 801 - Capability not supported. Function can not work correctly due to limited
   * <br> device capabilities.
   * @throws { BusinessError } 31500001 - Service exception.
   * @syscap SystemCapability.MultimodalAwarness.Motion
   * @since arkts{ '1.1':'15','1.2':'20'}
   * @arkts 1.1&1.2
   */
  function getRecentOperatingHandStatus(): OperatingHandStatus;
  /**
   * Subscribe to detect the holding hand changed event.
   * @permission ohos.permission.ACTIVITY_MOTION or ohos.permission.DETECT_GESTURE
   * @param { 'holdingHandChanged' } type - Indicates the event type.
   * @param { Callback<HoldingHandStatus> } callback - Indicates the callback for getting the event data.
   * @throws { BusinessError } 201 - Permission denied. An attempt was made to subscribe holdingHandChanged
   * <br> event forbidden by permission: ohos.permission.ACTIVITY_MOTION or ohos.permission.DETECT_GESTURE.
   * @throws { BusinessError } 801 - Capability not supported. Function can not work correctly due to limited
   * <br> device capabilities.
   * @throws { BusinessError } 31500001 - Service exception.
   * @throws { BusinessError } 31500002 - Subscribe Failed.
   * @syscap SystemCapability.MultimodalAwareness.Motion
   * @since 20
   * @arkts 1.1&1.2
   */
  function on(type: 'holdingHandChanged', callback: Callback<HoldingHandStatus>): void;
  /**
   * Unsubscribe to detect the holding hand changed event.
   * @permission ohos.permission.ACTIVITY_MOTION or ohos.permission.DETECT_GESTURE
   * @param { 'holdingHandChanged' } type - Indicates the event type.
   * @param { Callback<HoldingHandStatus> } callback - Indicates the callback for getting the event data.
   * @throws { BusinessError } 201 - Permission denied. An attempt was made to unsubscribe holdingHandChanged
   * <br> event forbidden by permission: ohos.permission.ACTIVITY_MOTION or ohos.permission.DETECT_GESTURE.
   * @throws { BusinessError } 801 - Capability not supported. Function can not work correctly due to limited
   * <br> device capabilities.
   * @throws { BusinessError } 31500001 - Service exception.
   * @throws { BusinessError } 31500003 - Unsubscribe Failed.
   * @syscap SystemCapability.MultimodalAwareness.Motion
   * @since 20
   * @arkts 1.1&1.2
   */
  function off(type: 'holdingHandChanged', callback?: Callback<HoldingHandStatus>): void;
  /**
   * Get the recent holding hand status.
   * @permission ohos.permission.ACTIVITY_MOTION or ohos.permission.DETECT_GESTURE
   * @returns { HoldingHandStatus } The result of holding hand status.
   * @throws { BusinessError } 201 - Permission denied. An attempt was made to get the recent holding hand
   * <br> status forbidden by permission: ohos.permission.ACTIVITY_MOTION or ohos.permission.DETECT_GESTURE.
   * @throws { BusinessError } 801 - Capability not supported. Function can not work correctly due to limited
   * <br> device capabilities.
   * @throws { BusinessError } 31500001 - Service exception.
   * @syscap SystemCapability.MultimodalAwareness.Motion
   * @since 20
   * @arkts 1.1&1.2
   */
  function getRecentHoldingHandStatus(): HoldingHandStatus;
}
export default motion;
