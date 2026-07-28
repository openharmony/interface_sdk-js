/*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
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
 * @kit MultimodalAwarenessKit
 */
import type { Callback } from "./@ohos.base";
/**
 * The **motion** module provides the user motion awareness capabilities, including user gestures and actions.
 *
 * @syscap SystemCapability.MultimodalAwareness.Motion
 * @since 15 dynamic
 * @since 23 static
 */

declare namespace motion {
  /**
   * Defines the status of the operating hand.
   *
   * @syscap SystemCapability.MultimodalAwareness.Motion
   * @since 15 dynamic
   * @since 23 static
   */
  export enum OperatingHandStatus {
    /**
     * Unknown status.
     *
     * @syscap SystemCapability.MultimodalAwareness.Motion
     * @since 15 dynamic
     * @since 23 static
     */
    UNKNOWN_STATUS = 0,
    /**
     * Left hand in use.
     *
     * @syscap SystemCapability.MultimodalAwareness.Motion
     * @since 15 dynamic
     * @since 23 static
     */
    LEFT_HAND_OPERATED = 1,
    /**
     * Right hand in use.
     *
     * @syscap SystemCapability.MultimodalAwareness.Motion
     * @since 15 dynamic
     * @since 23 static
     */
    RIGHT_HAND_OPERATED = 2
  }

  /**
   * Represents the holding hand status. The holding hand status is returned if listening for holding hand status 
   * changes is enabled.
   *
   * @syscap SystemCapability.MultimodalAwareness.Motion
   * @since 20 dynamic
   * @since 23 static
   */
  export enum HoldingHandStatus {
    /**
     * No holding.
     *
     * @syscap SystemCapability.MultimodalAwareness.Motion
     * @since 20 dynamic
     * @since 23 static
     */
    NOT_HELD = 0,
    /**
     * Holding with the left hand.
     *
     * @syscap SystemCapability.MultimodalAwareness.Motion
     * @since 20 dynamic
     * @since 23 static
     */
    LEFT_HAND_HELD = 1,
    /**
     * Holding with the right hand.
     *
     * @syscap SystemCapability.MultimodalAwareness.Motion
     * @since 20 dynamic
     * @since 23 static
     */
    RIGHT_HAND_HELD = 2,
    /**
     * Holding with both hands.
     *
     * @syscap SystemCapability.MultimodalAwareness.Motion
     * @since 20 dynamic
     * @since 23 static
     */
    BOTH_HANDS_HELD = 3,
    /**
     * Unknown status.
     *
     * @syscap SystemCapability.MultimodalAwareness.Motion
     * @since 20 dynamic
     * @since 23 static
     */
    UNKNOWN_STATUS = 16
  }

  /**
   * Enum for pickup event.
   *
   * @syscap SystemCapability.MultimodalAwareness.Motion
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  export enum PickupEvent {
    /**
     * Indicates the pickup motion is detected(the device is being lifted).
     *
     * @syscap SystemCapability.MultimodalAwareness.Motion
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    PICKED_UP = 0
  }

  /**
   * Enum for rotate event.
   *
   * @syscap SystemCapability.MultimodalAwareness.Motion
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  export enum RotateEvent {
    /**
     * Indicates the device has rotated, but the movement is insufficient
     * to change the current orientation. The orientation remains the same as before.
     *
     * @syscap SystemCapability.MultimodalAwareness.Motion
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    UNCHANGED = -1,
    /**
     * Indicates the device is upright.
     *
     * @syscap SystemCapability.MultimodalAwareness.Motion
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    UPRIGHT = 0,
    /**
     * Indicates the device is rotated left.
     *
     * @syscap SystemCapability.MultimodalAwareness.Motion
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    LEFT = 1,
    /**
     * Indicates the device is inverted.
     *
     * @syscap SystemCapability.MultimodalAwareness.Motion
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    INVERTED = 2,
    /**
     * Indicates the device is rotated right.
     *
     * @syscap SystemCapability.MultimodalAwareness.Motion
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    RIGHT = 3
  }

  /**
   * Enum for physical orientation detected by the sensor.
   *
   * @syscap SystemCapability.MultimodalAwareness.Motion
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  export enum PhysicalOrientation {
    /**
     * Indicates upright.
     *
     * @syscap SystemCapability.MultimodalAwareness.Motion
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    UPRIGHT = 0,
    /**
     * Indicates left.
     *
     * @syscap SystemCapability.MultimodalAwareness.Motion
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    LEFT = 1,
    /**
     * Indicates the physical orientation is inverted.
     *
     * @syscap SystemCapability.MultimodalAwareness.Motion
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    INVERTED = 2,
    /**
     * Indicates right.
     *
     * @syscap SystemCapability.MultimodalAwareness.Motion
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    RIGHT = 3,
    /**
     * Indicates face up.
     *
     * @syscap SystemCapability.MultimodalAwareness.Motion
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    FACE_UP = 4,
    /**
     * Indicates face down.
     *
     * @syscap SystemCapability.MultimodalAwareness.Motion
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    FACE_DOWN = 5
  }

  /**
   * Enum for logical orientation calculated by smart algorithms.
   *
   * @syscap SystemCapability.MultimodalAwareness.Motion
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  export enum LogicalOrientation {

    /**
     * Indicates the orientation is unknown or cannot be determined(e.g., non-grip).
     *
     * @syscap SystemCapability.MultimodalAwareness.Motion
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    UNKNOWN = -1,
    /**
     * Indicates upright.
     *
     * @syscap SystemCapability.MultimodalAwareness.Motion
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    UPRIGHT = 0,
    /**
     * Indicates left.
     *
     * @syscap SystemCapability.MultimodalAwareness.Motion
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    LEFT = 1,
    /**
     * Indicates the logical orientation is inverted.
     *
     * @syscap SystemCapability.MultimodalAwareness.Motion
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    INVERTED = 2,
    /**
     * Indicates right.
     *
     * @syscap SystemCapability.MultimodalAwareness.Motion
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    RIGHT = 3
  }

  /**
   * Enum for hover hand actions.
   *
   * @syscap SystemCapability.MultimodalAwareness.Motion
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  export enum HoverHandAction {
    /**
     * Indicates the hover hand enters the detection area.
     *
     * @syscap SystemCapability.MultimodalAwareness.Motion
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    DOWN = 0,
    /**
     * Indicates the hover hand leaves the detection area.
     *
     * @syscap SystemCapability.MultimodalAwareness.Motion
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    UP = 1
  }

  /**
   * The basic data structure of the smart rotate sensor event.
   *
   * @syscap SystemCapability.MultimodalAwareness.Motion
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface SmartRotateEvent {
    /**
     * The physical orientation reported by the gravity sensor.
     *
     * @syscap SystemCapability.MultimodalAwareness.Motion
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    physicalOrientation: PhysicalOrientation;
    /**
     * The logical orientation adjusted by smart algorithms.
     *
     * @syscap SystemCapability.MultimodalAwareness.Motion
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    logicalOrientation?: LogicalOrientation;
  }

  /**
   * The basic data structure of the hover hand detection area.
   *
   * @syscap SystemCapability.MultimodalAwareness.Motion
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  export interface HoverHandDetectionArea {
    /**
     * Left boundary of the rectangle.
     * Unit: px. The value must be an integer within [-2147483648,2147483647].
     *
     * @syscap SystemCapability.MultimodalAwareness.Motion
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    left: int;

    /**
     * Top boundary of the rectangle.
     * Unit: px. The value must be an integer within [-2147483648,2147483647].
     *
     * @syscap SystemCapability.MultimodalAwareness.Motion
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    top: int;

    /**
     * Width of the rectangle.
     * Unit: px. The value must be an integer within [1,2147483647].
     *
     * @syscap SystemCapability.MultimodalAwareness.Motion
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    width: int;

    /**
     * Height of the rectangle.
     * Unit: px. The value must be an integer within [1,2147483647].
     *
     * @syscap SystemCapability.MultimodalAwareness.Motion
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    height: int;
  }

  /**
   * Subscribes to operating hand change events.
   * 
   * If the device does not support this function, error code 801 is returned.
   *
   * @permission ohos.permission.ACTIVITY_MOTION [since 15 - 19]
   * @permission ohos.permission.ACTIVITY_MOTION or ohos.permission.DETECT_GESTURE [since 20]
   * @param { 'operatingHandChanged' } type - Event type. This parameter has a fixed value of **operatingHandChanged**.
   * @param { Callback<OperatingHandStatus> } callback - Callback used to return the result.
   * @throws { BusinessError } 201 - Permission denied. An attempt was made to subscribe operatingHandChanged
   *     <br> event forbidden by permission: ohos.permission.ACTIVITY_MOTION or ohos.permission.DETECT_GESTURE.
   * @throws { BusinessError } 401 - Parameter error. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported. Function can not work correctly due to limited
   *     <br> device capabilities.
   * @throws { BusinessError } 31500001 - Service exception. Possible causes: 1. A system error, such as null pointer,
   *     container-related exception;
   *     <br> 2. N-API invocation exception, invalid N-API status.
   * @throws { BusinessError } 31500002 - Subscription failed. Possible causes: 1. Callback registration failure;
   *     <br> 2. Failed to bind native object to js wrapper; 3. N-API invocation exception, invalid N-API status; 4. IPC
   *     request exception.
   * @syscap SystemCapability.MultimodalAwareness.Motion
   * @since 15 dynamic
   */
  function on(type: 'operatingHandChanged', callback: Callback<OperatingHandStatus>): void;

  /**
   * Unsubscribes from operating hand change events.
   *
   * @permission ohos.permission.ACTIVITY_MOTION [since 15 - 19]
   * @permission ohos.permission.ACTIVITY_MOTION or ohos.permission.DETECT_GESTURE [since 20]
   * @param { 'operatingHandChanged' } type - Event type. This parameter has a fixed value of **operatingHandChanged**.
   * @param { Callback<OperatingHandStatus> } [callback] - Callback used to return the result.
   * @throws { BusinessError } 201 - Permission denied. An attempt was made to unsubscribe operatingHandChanged
   *     <br> event forbidden by permission: ohos.permission.ACTIVITY_MOTION or ohos.permission.DETECT_GESTURE.
   * @throws { BusinessError } 401 - Parameter error. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported. Function can not work correctly due to limited
   *     <br> device capabilities.
   * @throws { BusinessError } 31500001 - Service exception. Possible causes: 1. A system error, such as null pointer,
   *     container-related exception;
   *     <br> 2. N-API invocation exception, invalid N-API status.
   * @throws { BusinessError } 31500003 - Unsubscription failed. Possible causes: 1. Callback failure;
   *     <br> 2. N-API invocation exception, invalid N-API status; 3. IPC request exception.
   * @syscap SystemCapability.MultimodalAwareness.Motion
   * @since 15 dynamic
   */
  function off(type: 'operatingHandChanged', callback?: Callback<OperatingHandStatus>): void;

  /**
   * Obtains the latest operating hand status.
   *
   * @permission ohos.permission.ACTIVITY_MOTION [since 15 - 19]
   * @permission ohos.permission.ACTIVITY_MOTION or ohos.permission.DETECT_GESTURE [since 20]
   * @returns { OperatingHandStatus } Status of the operating hand.
   * @throws { BusinessError } 201 - Permission denied. An attempt was made to get the recent operating hand
   *     <br> status forbidden by permission: ohos.permission.ACTIVITY_MOTION or ohos.permission.DETECT_GESTURE.
   * @throws { BusinessError } 801 - Capability not supported. Function can not work correctly due to limited
   *     <br> device capabilities.
   * @throws { BusinessError } 31500001 - Service exception. Possible causes: 1. A system error, such as null pointer,
   *     container-related exception;
   *     <br> 2. N-API invocation exception, invalid N-API status.
   * @syscap SystemCapability.MultimodalAwareness.Motion
   * @since 15 dynamic
   * @since 23 static
   */
  function getRecentOperatingHandStatus(): OperatingHandStatus;

  /**
   * Enables listening for holding hand status changes.
   *
   * @permission ohos.permission.DETECT_GESTURE
   * @param { 'holdingHandChanged' } type - Event type. The value **holdingHandChanged** indicates the holding hand
   *     status change event.
   * @param { Callback<HoldingHandStatus> } callback - Callback used to return the holding hand status.
   * @throws { BusinessError } 201 - Permission denied. An attempt was made to subscribe holdingHandChanged
   *     <br> event forbidden by permission: ohos.permission.DETECT_GESTURE.
   * @throws { BusinessError } 801 - Capability not supported. Function can not work correctly due to limited
   *     <br> device capabilities.
   * @throws { BusinessError } 31500001 - Service exception. Possible causes: 1. A system error, such as null pointer,
   *     container-related exception;
   *     <br> 2. N-API invocation exception, invalid N-API status.
   * @throws { BusinessError } 31500002 - Subscription failed. Possible causes: 1. Callback registration failure;
   *     <br> 2. Failed to bind native object to js wrapper; 3. N-API invocation exception, invalid N-API status; 4. IPC
   *     request exception.
   * @syscap SystemCapability.MultimodalAwareness.Motion
   * @since 20 dynamic
   */
  function on(type: 'holdingHandChanged', callback: Callback<HoldingHandStatus>): void;

  /**
   * Disables listening for holding hand status changes.
   *
   * @permission ohos.permission.DETECT_GESTURE
   * @param { 'holdingHandChanged' } type - Event type. The value **holdingHandChanged** indicates the holding hand
   *     status change event.
   * @param { Callback<HoldingHandStatus> } [callback] - Callback to unregister. If this parameter is not passed, all
   *     callbacks for the holding hand status change event will be unregistered.
   * @throws { BusinessError } 201 - Permission denied. An attempt was made to unsubscribe holdingHandChanged
   *     <br> event forbidden by permission: ohos.permission.DETECT_GESTURE.
   * @throws { BusinessError } 801 - Capability not supported. Function can not work correctly due to limited
   *     <br> device capabilities.
   * @throws { BusinessError } 31500001 - Service exception. Possible causes: 1. A system error, such as null pointer,
   *     container-related exception;
   *     <br> 2. N-API invocation exception, invalid N-API status.
   * @throws { BusinessError } 31500003 - Unsubscription failed. Possible causes: 1. Callback failure;
   *     <br> 2. N-API invocation exception, invalid N-API status; 3. IPC request exception.
   * @syscap SystemCapability.MultimodalAwareness.Motion
   * @since 20 dynamic
   */
  function off(type: 'holdingHandChanged', callback?: Callback<HoldingHandStatus>): void;

  /**
   * Subscribe to detect the operating hand changed event.
   *
   * @permission ohos.permission.ACTIVITY_MOTION or ohos.permission.DETECT_GESTURE
   * @param { Callback<OperatingHandStatus> } callback - Indicates the callback for getting the event data.
   * @throws { BusinessError } 201 - Permission denied. An attempt was made to subscribe operatingHandChanged
   *     <br> event forbidden by permission: ohos.permission.ACTIVITY_MOTION or ohos.permission.DETECT_GESTURE.
   * @throws { BusinessError } 801 - Capability not supported. Function can not work correctly due to limited
   *     <br> device capabilities.
   * @throws { BusinessError } 31500001 - Service exception. Possible causes: 1. A system error, such as null pointer,
   *     container-related exception;
   *     <br> 2. N-API invocation exception, invalid N-API status.
   * @throws { BusinessError } 31500002 - Subscription failed. Possible causes: 1. Callback registration failure;
   *     <br> 2. Failed to bind native object to js wrapper; 3. N-API invocation exception, invalid N-API status; 4. IPC
   *     request exception.
   * @syscap SystemCapability.MultimodalAwareness.Motion
   * @since 23 static
   */
  function onOperatingHandChanged(callback: Callback<OperatingHandStatus>): void;
  /**
   * Unsubscribe from the operating hand changed event.
   *
   * @permission ohos.permission.ACTIVITY_MOTION or ohos.permission.DETECT_GESTURE
   * @param { Callback<OperatingHandStatus> } [callback] - Indicates the callback for getting the event data.
   * @throws { BusinessError } 201 - Permission denied. An attempt was made to unsubscribe operatingHandChanged
   *     <br> event forbidden by permission: ohos.permission.ACTIVITY_MOTION or ohos.permission.DETECT_GESTURE.
   * @throws { BusinessError } 801 - Capability not supported. Function can not work correctly due to limited
   *     <br> device capabilities.
   * @throws { BusinessError } 31500001 - Service exception. Possible causes: 1. A system error, such as null pointer,
   *     container-related exception;
   *     <br> 2. N-API invocation exception, invalid N-API status.
   * @throws { BusinessError } 31500003 - Unsubscription failed. Possible causes: 1. Callback failure;
   *     <br> 2. N-API invocation exception, invalid N-API status; 3. IPC request exception.
   * @syscap SystemCapability.MultimodalAwareness.Motion
   * @since 23 static
   */
  function offOperatingHandChanged(callback?: Callback<OperatingHandStatus>): void;
  /**
   * Subscribe to detect the holding hand changed event.
   *
   * @permission ohos.permission.DETECT_GESTURE
   * @param { Callback<HoldingHandStatus> } callback - Indicates the callback for getting the event data.
   * @throws { BusinessError } 201 - Permission denied. An attempt was made to subscribe holdingHandChanged
   *     <br> event forbidden by permission: ohos.permission.DETECT_GESTURE.
   * @throws { BusinessError } 801 - Capability not supported. Function can not work correctly due to limited
   *     <br> device capabilities.
   * @throws { BusinessError } 31500001 - Service exception.
   * @throws { BusinessError } 31500002 - Subscribe Failed.
   * @syscap SystemCapability.MultimodalAwareness.Motion
   * @since 23 static
   */
  function onHoldingHandChanged(callback: Callback<HoldingHandStatus>): void;
  /**
   * Unsubscribe from the holding hand changed event.
   *
   * @permission ohos.permission.DETECT_GESTURE
   * @param { Callback<HoldingHandStatus> } [callback] - Indicates the callback for getting the event data.
   * @throws { BusinessError } 201 - Permission denied. An attempt was made to unsubscribe holdingHandChanged
   *     <br> event forbidden by permission: ohos.permission.DETECT_GESTURE.
   * @throws { BusinessError } 801 - Capability not supported. Function can not work correctly due to limited
   *     <br> device capabilities.
   * @throws { BusinessError } 31500001 - Service exception.
   * @throws { BusinessError } 31500003 - Unsubscribe Failed.
   * @syscap SystemCapability.MultimodalAwareness.Motion
   * @since 23 static
   */
  function offHoldingHandChanged(callback?: Callback<HoldingHandStatus>): void;

  /**
   * Subscribe to pick up sensor event.
   *
   * @param { Callback<PickupEvent> } callback - The callback to receive pickup status.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited
   *     <br> device capabilities.
   * @throws { BusinessError } 31500001 - Service exception. Possible causes: 1. A system error, such as null pointer,
   *     <br> container-related exception; 2. N-API invocation exception, invalid N-API status.
   * @syscap SystemCapability.MultimodalAwareness.Motion
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function onPickupChange(callback: Callback<PickupEvent>): void;

  /**
   * Subscribe to rotate sensor event.
   *
   * @param { Callback<RotateEvent> } callback - The callback to receive rotate orientation.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited
   *     <br> device capabilities.
   * @throws { BusinessError } 31500001 - Service exception. Possible causes: 1. A system error, such as null pointer,
   *     <br> container-related exception; 2. N-API invocation exception, invalid N-API status.
   * @syscap SystemCapability.MultimodalAwareness.Motion
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function onRotateChange(callback: Callback<RotateEvent>): void;

  /**
   * Subscribe to smart rotate sensor event.
   *
   * @param { Callback<SmartRotateEvent> } callback - The callback to receive smart rotate orientations.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited
   *     <br> device capabilities.
   * @throws { BusinessError } 31500001 - Service exception. Possible causes: 1. A system error, such as null pointer,
   *     <br> container-related exception; 2. N-API invocation exception, invalid N-API status.
   * @syscap SystemCapability.MultimodalAwareness.Motion
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function onSmartRotateChange(callback: Callback<SmartRotateEvent>): void;

  /**
   * Subscribes to hover hand events and immediately starts detection for five seconds.
   *
   * @param { HoverHandDetectionArea } detectionArea - Rectangular detection area for hover hand.
   *     <br> Repeated calls will override the previously set detection area.
   *     <br> If the area exceeds the screen bounds, it defaults to detecting the overlap.
   * @param { Callback<HoverHandAction> } callback - Callback used to return hover hand action.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited
   *     <br> device capabilities.
   * @throws { BusinessError } 31500001 - Service exception. Possible causes: 1. A system error, such as null pointer,
   *     <br> container-related exception; 2. N-API invocation exception, invalid N-API status.
   * @throws { BusinessError } 31500002 - Subscription failed. Possible causes: 1. Callback registration failure;
   *     <br> 2. Failed to bind native object to js wrapper; 3. N-API invocation exception, invalid N-API status; 4. IPC
   *     <br> request exception.
   * @syscap SystemCapability.MultimodalAwareness.Motion
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function onHoverHandChange(detectionArea: HoverHandDetectionArea, callback: Callback<HoverHandAction>): void;

  /**
   * Subscribes to hover hand events and immediately starts detection.
   *
   * @param { HoverHandDetectionArea } detectionArea - Rectangular detection area for hover hand.
   *     <br> Repeated calls will override the previously set detection area.
   *     <br> If the area exceeds the screen bounds, it defaults to detecting the overlap.
   * @param { int } duration - Detection duration.
   *     <br> Unit: Seconds. The value must be an integer within [1,10].
   *     <br> Subscription ends automatically after duration expires. Call again to restart the detection.
   *     <br> Hover hand events are high power consumption events, developers are advised to set the duration as needed.
   * @param { Callback<HoverHandAction> } callback - Callback used to return hover hand action.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited
   *     <br> device capabilities.
   * @throws { BusinessError } 31500001 - Service exception. Possible causes: 1. A system error, such as null pointer,
   *     <br> container-related exception; 2. N-API invocation exception, invalid N-API status.
   * @throws { BusinessError } 31500002 - Subscription failed. Possible causes: 1. Callback registration failure;
   *     <br> 2. Failed to bind native object to js wrapper; 3. N-API invocation exception, invalid N-API status; 4. IPC
   *     <br> request exception.
   * @syscap SystemCapability.MultimodalAwareness.Motion
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function onHoverHandChange(
    detectionArea: HoverHandDetectionArea, duration: int, callback: Callback<HoverHandAction>): void;

  /**
   * Unsubscribe to hover hand event.
   *
   * @param { Callback<HoverHandAction> } [callback] - Callback used to return hover hand action.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 31500001 - Service exception. Possible causes: 1. A system error, such as null pointer,
   *     <br> container-related exception; 2. N-API invocation exception, invalid N-API status.
   * @throws { BusinessError } 31500003 - Unsubscription failed. Possible causes: 1. Callback failure;
   *     <br> 2. N-API invocation exception, invalid N-API status; 3. IPC request exception.
   * @syscap SystemCapability.MultimodalAwareness.Motion
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function offHoverHandChange(callback?: Callback<HoverHandAction>): void;

  /**
   * Unsubscribe to pick up sensor event.
   *
   * @param { Callback<PickupEvent> } [callback] - Callback used for pick up event unsubscription.
   *     <br> If this parameter is not specified, all callbacks of the pick up event are unsubscribed from.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 31500001 - Service exception. Possible causes: 1. A system error, such as null pointer,
   *     <br> container-related exception; 2. N-API invocation exception, invalid N-API status.
   * @syscap SystemCapability.MultimodalAwareness.Motion
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function offPickupChange(callback?: Callback<PickupEvent>): void;

  /**
   * Unsubscribe to rotate sensor event.
   *
   * @param { Callback<RotateEvent> } [callback] - Callback used for rotate event unsubscription.
   *     <br> If this parameter is not specified, all callbacks of the rotate event are unsubscribed from.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 31500001 - Service exception. Possible causes: 1. A system error, such as null pointer,
   *     <br> container-related exception; 2. N-API invocation exception, invalid N-API status.
   * @syscap SystemCapability.MultimodalAwareness.Motion
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function offRotateChange(callback?: Callback<RotateEvent>): void;

  /**
   * Unsubscribe to smart rotate sensor event.
   *
   * @param { Callback<SmartRotateEvent> } [callback] - Callback used for smart rotate event unsubscription.
   *     <br> If this parameter is not specified, all callbacks of the smart rotate event are unsubscribed from.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 31500001 - Service exception. Possible causes: 1. A system error, such as null pointer,
   *     <br> container-related exception; 2. N-API invocation exception, invalid N-API status.
   * @syscap SystemCapability.MultimodalAwareness.Motion
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function offSmartRotateChange(callback?: Callback<SmartRotateEvent>): void;
}
export default motion;
