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
 * @kit MechanicKit
 */

import type { Callback } from './@ohos.base';

/**
 * Provides capabilities for controlling and interacting with mechanical devices connected to this device.
 * The capabilities cover connection management, control, and monitoring.
 *
 * @namespace mechanicManager
 * @syscap SystemCapability.Mechanic.Core
 * @since 20 dynamic
 * @since 23 static
 */
declare namespace mechanicManager {

  /**
   * Subscribes to device attachment state change events.
   * @param { 'attachStateChange' } type Event type.
   * @param { Callback<AttachStateChangeInfo> } callback Callback used to return the state change.
   * @throws { BusinessError } 33300001 - Service exception.
   * @syscap SystemCapability.Mechanic.Core
   * @since 20 dynamic
   */
  function on(type: 'attachStateChange', callback: Callback<AttachStateChangeInfo>): void;

  /**
   * Subscribes to device attachment state change events.
   * @param { Callback<AttachStateChangeInfo> } callback Callback used to return the state change.
   * @throws { BusinessError } 33300001 - Service exception.
   * @syscap SystemCapability.Mechanic.Core
   * @since 23 static
   */
  function onAttachStateChange(callback: Callback<AttachStateChangeInfo>): void;

  /**
   * Unsubscribes from device attachment state change events.
   * @param { 'attachStateChange' } type Event type.
   * @param { Callback<AttachStateChangeInfo> } [callback] Callback used to return the state change.
   * @throws { BusinessError } 33300001 - Service exception.
   * @syscap SystemCapability.Mechanic.Core
   * @since 20 dynamic
   */
  function off(type: 'attachStateChange', callback?: Callback<AttachStateChangeInfo>): void;

  /**
   * Unsubscribes from device attachment state change events.
   * @param { Callback<AttachStateChangeInfo> } [callback] Callback used to return the state change.
   * @throws { BusinessError } 33300001 - Service exception.
   * @syscap SystemCapability.Mechanic.Core
   * @since 23 static
   */
  function offAttachStateChange(callback?: Callback<AttachStateChangeInfo>): void;

  /**
   * Obtain the list of connected mechanical devices.
   * @returns { MechInfo[] } List of connected mechanical devices.
   * @throws { BusinessError } 33300001 - Service exception.
   * @syscap SystemCapability.Mechanic.Core
   * @since 20 dynamic
   * @since 23 static
   */
  function getAttachedMechDevices(): MechInfo[];

  /**
   * Sets a user operation.
   * @permission ohos.permission.CONNECT_MECHANIC_HARDWARE
   * @param { Operation } operation Operation type.
   * @param { string } mac MAC address.
   * @param { string } params Operation parameters.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 33300001 - Service exception.
   * @syscap SystemCapability.Mechanic.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  function setUserOperation(operation: Operation, mac: string, params: string): void;

  /**
   * Enables or disables camera tracking.
   * @param { boolean } isEnabled Whether to enable camera tracking.
   * @throws { BusinessError } 33300001 - Service exception.
   * @throws { BusinessError } 33300002 - Device not connected.
   * @throws { BusinessError } 33300003 - Feature not supported.
   * @syscap SystemCapability.Mechanic.Core
   * @since 20 dynamic
   * @since 23 static
   */
  function setCameraTrackingEnabled(isEnabled: boolean): void;

  /**
   * Checks whether camera tracking is enabled for this mechanical device.
   * @returns { boolean } Enabled status. The value true means that camera tracking is enabled, and false means
   * the opposite.
   * @throws { BusinessError } 33300001 - Service exception.
   * @throws { BusinessError } 33300002 - Device not connected.
   * @syscap SystemCapability.Mechanic.Core
   * @since 20 dynamic
   * @since 23 static
   */
  function getCameraTrackingEnabled(): boolean;

  /**
   * Subscribes to tracking events.
   * @param { 'trackingStateChange' } type Event type.
   * @param { Callback<TrackingEventInfo> } callback Callback used to return the tracking event information.
   * @throws { BusinessError } 33300001 - Service exception.
   * @syscap SystemCapability.Mechanic.Core
   * @since 20 dynamic
   */
  function on(type: 'trackingStateChange', callback: Callback<TrackingEventInfo>): void;

  /**
   * Subscribes to tracking events.
   * @param { Callback<TrackingEventInfo> } callback Callback used to return the tracking event information.
   * @throws { BusinessError } 33300001 - Service exception.
   * @syscap SystemCapability.Mechanic.Core
   * @since 23 static
   */
  function onTrackingStateChange(callback: Callback<TrackingEventInfo>): void;

  /**
   * Unsubscribes from tracking events.
   * @param { 'trackingStateChange' } type Event type.
   * @param { Callback<TrackingEventInfo> } [callback] Callback used to return the tracking event information.
   * @throws { BusinessError } 33300001 - Service exception.
   * @syscap SystemCapability.Mechanic.Core
   * @since 20 dynamic
   */
  function off(type: 'trackingStateChange', callback?: Callback<TrackingEventInfo>): void;

  /**
   * Unsubscribes from tracking events.
   * @param { Callback<TrackingEventInfo> } [callback] Callback used to return the tracking event information.
   * @throws { BusinessError } 33300001 - Service exception.
   * @syscap SystemCapability.Mechanic.Core
   * @since 23 static
   */
  function offTrackingStateChange(callback?: Callback<TrackingEventInfo>): void;

  /**
   * Sets the camera tracking layout for this mechanical device.
   * @param { CameraTrackingLayout } trackingLayout Camera tracking layout.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 33300001 - Service exception.
   * @throws { BusinessError } 33300002 - Device not connected.
   * @throws { BusinessError } 33300003 - Feature not supported.
   * @syscap SystemCapability.Mechanic.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  function setCameraTrackingLayout(trackingLayout: CameraTrackingLayout): void;

  /**
   * Obtains the camera tracking layout of this mechanical device.
   * @returns { CameraTrackingLayout } Camera tracking layout obtained.
   * @throws { BusinessError } 33300001 - Service exception.
   * @throws { BusinessError } 33300002 - Device not connected.
   * @syscap SystemCapability.Mechanic.Core
   * @since 20 dynamic
   * @since 23 static
   */
  function getCameraTrackingLayout(): CameraTrackingLayout;

  /**
   * Rotates a mechanical device to the relative angles.
   * @param { int } mechId ID of the mechanical device.
   * @param { RotationAngles } angles Relative angles.
   * @param { int } duration Rotation duration. Unit: millisecond.
   * @returns { Promise<Result> } Promise that return the execution result.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 33300001 - Service exception.
   * @throws { BusinessError } 33300002 - Device not connected.
   * @syscap SystemCapability.Mechanic.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  function rotate(mechId: int, angles: RotationAngles, duration: int): Promise<Result>;

  /**
   * Rotates a mechanical device to the absolute angles.
   * @param { int } mechId ID of the mechanical device.
   * @param { EulerAngles } angles Absolute angles.
   * @param { int } duration Rotation duration. Unit: millisecond.
   * @returns { Promise<Result> } Promise that return the execution result.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 33300001 - Service exception.
   * @throws { BusinessError } 33300002 - Device not connected.
   * @syscap SystemCapability.Mechanic.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  function rotateToEulerAngles(mechId: int, angles: EulerAngles, duration: int): Promise<Result>;

  /**
   * Obtains the maximum continuous rotation duration of a mechanical device.
   *
   * @param { int } mechId ID of the mechanical device.
   * @returns { int } Maximum rotation duration. Unit: millisecond.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 33300001 - Service exception.
   * @throws { BusinessError } 33300002 - Device not connected.
   * @syscap SystemCapability.Mechanic.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  function getMaxRotationTime(mechId: int): int;

  /**
   * Obtains the maximum rotation speed of a mechanical device.
   *
   * @param { int } mechId ID of the mechanical device.
   * @returns { RotationSpeed } Maximum speed. Only the absolute value of the speed is returned.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 33300001 - Service exception.
   * @throws { BusinessError } 33300002 - Device not connected.
   * @syscap SystemCapability.Mechanic.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  function getMaxRotationSpeed(mechId: int): RotationSpeed;

  /**
   * Rotates a mechanical device at the specified speed.
   * @param { int } mechId ID of the mechanical device.
   * @param { RotationSpeed } speed Rotation speed.
   * @param { int } duration Rotation duration. Unit: millisecond.
   * @returns { Promise<Result> } Promise that return the execution result.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 33300001 - Service exception.
   * @throws { BusinessError } 33300002 - Device not connected.
   * @syscap SystemCapability.Mechanic.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  function rotateBySpeed(mechId: int, speed: RotationSpeed, duration: int): Promise<Result>;

  /**
   * Stops a mechanical device from moving.
   * @param { int } mechId ID of the mechanical device.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 33300001 - Service exception.
   * @throws { BusinessError } 33300002 - Device not connected.
   * @syscap SystemCapability.Mechanic.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  function stopMoving(mechId: int): Promise<void>;

  /**
   * Obtains the current angles of a mechanical device.
   * @param { int } mechId ID of the mechanical device.
   * @returns { EulerAngles } Rotation angles.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 33300001 - Service exception.
   * @throws { BusinessError } 33300002 - Device not connected.
   * @syscap SystemCapability.Mechanic.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  function getCurrentAngles(mechId: int): EulerAngles;

  /**
   * Obtains the maximum rotation angles relative to the reference point for the specified mechanical device.
   *
   * @param { int } mechId ID of the mechanical device.
   * @returns { RotationLimits } Maximum rotation angles.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 33300001 - Service exception.
   * @throws { BusinessError } 33300002 - Device not connected.
   * @syscap SystemCapability.Mechanic.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  function getRotationLimits(mechId: int): RotationLimits;

  /**
   * Obtains the status of the rotation axes.
   * @param { int } mechId ID of the mechanical device.
   * @returns { RotationAxesStatus } Rotation axis status.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 33300001 - Service exception.
   * @throws { BusinessError } 33300002 - Device not connected.
   * @syscap SystemCapability.Mechanic.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  function getRotationAxesStatus(mechId: int): RotationAxesStatus;


  /**
   * Register a listener for axis state changes.
   * The status of the rotation axis changes dynamically, which needs to be monitored.
   *
   * @param { 'rotationAxesStatusChange' } type - Event type.
   * @param { Callback<RotationAxesStateChangeInfo> } callback - Rotate axis state changes callback.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 33300001 - Service exception.
   * @syscap SystemCapability.Mechanic.Core
   * @systemapi
   * @since 20 dynamic
   */
  function on(type: 'rotationAxesStatusChange', callback: Callback<RotationAxesStateChangeInfo>): void;

  /**
   * Register a listener for axis state changes.
   * The status of the rotation axis changes dynamically, which needs to be monitored.
   *
   * @param { Callback<RotationAxesStateChangeInfo> } callback - Rotate axis state changes callback.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 33300001 - Service exception.
   * @syscap SystemCapability.Mechanic.Core
   * @systemapi
   * @since 23 static
   */
  function onRotationAxesStatusChange(callback: Callback<RotationAxesStateChangeInfo>): void;

  /**
   * Unregister a listener for axis state changes.
   *
   * @param { 'rotationAxesStatusChange' } type - Event type.
   * @param { Callback<RotationAxesStateChangeInfo> } [callback] - Rotate axis state changes callback.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 33300001 - Service exception.
   * @syscap SystemCapability.Mechanic.Core
   * @systemapi
   * @since 20 dynamic
   */
  function off(type: 'rotationAxesStatusChange', callback?: Callback<RotationAxesStateChangeInfo>): void;

  /**
   * Unregister a listener for axis state changes.
   *
   * @param { Callback<RotationAxesStateChangeInfo> } [callback] - Rotate axis state changes callback.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 33300001 - Service exception.
   * @syscap SystemCapability.Mechanic.Core
   * @systemapi
   * @since 23 static
   */
  function offRotationAxesStatusChange(callback?: Callback<RotationAxesStateChangeInfo>): void;

  /**
   * Searching for a specified target.
   *
   * @param { TargetInfo } target - Target infomation.
   * @param { SearchParams } params - Parameters to use when searching.
   * @returns { Promise<SearchResult> } Promise that return the Search result.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 33300001 - Service exception.
   * @throws { BusinessError } 33300002 - Device not connected.
   * @throws { BusinessError } 33300003 - Feature not supported.
   * @throws { BusinessError } 33300004 - Camera not opened.
   * @syscap SystemCapability.Mechanic.Core
   * @systemapi
   * @since 21 dynamic
   * @since 23 static
   */
  function searchTarget(target: TargetInfo, params: SearchParams): Promise<SearchResult>;

  /**
   * Move a mechanical device with the specified parameters.
   *
   * @param { int } mechId - ID of the mechanical device.
   * @param { MoveParams } params - Parameters to use when moving.
   * @returns { Promise<Result> } Promise that returns the execution result.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 33300001 - Service exception.
   * @throws { BusinessError } 33300002 - Device not connected.
   * @throws { BusinessError } 33300003 - Feature not supported.
   * @syscap SystemCapability.Mechanic.Core
   * @systemapi
   * @since 24 dynamic&static
   */
  function move(mechId: int, params: MoveParams): Promise<Result>;

  /**
   * Move a mechanical device at the specified speed.
   *
   * @param { int } mechId - ID of the mechanical device.
   * @param { SpeedParams } params - Parameters to use when moving.
   * @param { int } duration - Duration of movement, in ms.
   * @returns { Promise<Result> } Promise that returns the execution result.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 33300001 - Service exception.
   * @throws { BusinessError } 33300002 - Device not connected.
   * @throws { BusinessError } 33300003 - Feature not supported.
   * @syscap SystemCapability.Mechanic.Core
   * @systemapi
   * @since 24 dynamic&static
   */
  function moveBySpeed(mechId: int, params: SpeedParams, duration: int): Promise<Result>;

  /**
   * Rotate in place according to the speed.
   *
   * @param { int } mechId - ID of the mechanical device.
   * @param { double } angleSpeed - angular velocity.
   * @param { int } duration - Duration of movement, unit ms.
   * @returns { Promise<Result> } Promise that returns the execution result.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 33300001 - Service exception.
   * @throws { BusinessError } 33300002 - Device not connected.
   * @throws { BusinessError } 33300003 - Feature not supported.
   * @syscap SystemCapability.Mechanic.Core
   * @systemapi
   * @since 24 dynamic&static
   */
  function turnBySpeed(mechId: int, angleSpeed: double, duration: int): Promise<Result>;

  /**
   * Check whether the specific action type is supported.
   *
   * @param { int } mechId - ID of the mechanical device.
   * @param { ActionType } actionType - Type of action sequence.
   * @returns { boolean } Indicates whether the action type is supported.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 33300001 - Service exception.
   * @throws { BusinessError } 33300002 - Device not connected.
   * @syscap SystemCapability.Mechanic.Core
   * @systemapi
   * @since 24 dynamic&static
   */
  function isSupportAction(mechId: int, actionType: ActionType): boolean;

  /**
   * Execute an action sequence.
   *
   * @param { int } mechId - ID of the mechanical device.
   * @param { ActionType } actionType - Type of action sequence.
   * @returns { Promise<Result> } Promise that returns the execution result.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 33300001 - Service exception.
   * @throws { BusinessError } 33300002 - Device not connected.
   * @throws { BusinessError } 33300003 - Feature not supported.
   * @syscap SystemCapability.Mechanic.Core
   * @systemapi
   * @since 24 dynamic&static
   */
  function doAction(mechId: int, actionType: ActionType): Promise<Result>;

  /**
   * Subscribe to the specified events.
   *
   * @param { MechEventType[] } events - Events to subscribe to.
   * @param { Callback<MechEvent> } callback - Callback of event.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 33300001 - Service exception.
   * @throws { BusinessError } 33300002 - Device not connected.
   * @throws { BusinessError } 33300003 - Feature not supported.
   * @syscap SystemCapability.Mechanic.Core
   * @systemapi
   * @since 24 dynamic&static
   */
  function subscribe(events: MechEventType[], callback: Callback<MechEvent>): void;

  /**
   * Unsubscribes the specified events.
   *
   * @param { MechEventType[] } events - Events to be unsubscribed.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 33300001 - Service exception.
   * @throws { BusinessError } 33300002 - Device not connected.
   * @throws { BusinessError } 33300003 - Feature not supported.
   * @syscap SystemCapability.Mechanic.Core
   * @systemapi
   * @since 24 dynamic&static
   */
  function unSubscribe(events: MechEventType[]): void;

  /**
   * Checks whether the current device supports embodied control for a specific type of device.
   *
   * @param { MechDeviceType } [mechDeviceType]  - Associated device type.
   *     <br>Default: If this parameter is not provided, it represents all device types. As long as one or more types
   * are supported, the result returned will be supported.
   * @returns { boolean } Returns whether embodied control is supported.
   * @syscap SystemCapability.Mechanic.Core
   * @since 26.0.0 dynamic&static
   */
  function isControlSupported(mechDeviceType?: MechDeviceType): boolean;

  /**
   * Mechanical device information.
   * @typedef MechInfo
   * @syscap SystemCapability.Mechanic.Core
   * @since 20 dynamic
   * @since 23 static
   */
  export interface MechInfo {
    /**
     * ID of the mechanical device.
     * @type { int }
     * @syscap SystemCapability.Mechanic.Core
     * @since 20 dynamic
     * @since 23 static
     */
    mechId: int;


    /**
     * Type of the mechanical device.
     * @type { MechDeviceType }
     * @syscap SystemCapability.Mechanic.Core
     * @since 20 dynamic
     * @since 23 static
     */
    mechDeviceType: MechDeviceType;

    /**
     * Name of the mechanical device.
     * @type { string }
     * @syscap SystemCapability.Mechanic.Core
     * @since 20 dynamic
     * @since 23 static
     */
    mechName: string;
  }


  /**
   * The rotion angles, relative to the current position.
   * @typedef RotationAngles
   * @syscap SystemCapability.Mechanic.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  export interface RotationAngles {
    /**
     * Yaw angle, ranging from -2*Math.PI to 2*Math.PI, measured in radians.
     * @type { ?double }
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    yaw?: double;

    /**
     * Roll angle, ranging from -2*Math.PI to 2*Math.PI, measured in radians.
     * @type { ?double }
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    roll?: double;

    /**
     * Pitch angle, ranging from -2*Math.PI to 2*Math.PI, measured in radians.
     * @type { ?double }
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    pitch?: double;
  }

  /**
   * Absolute euler angles relative to the home position.
   *
   * @typedef EulerAngles
   * @syscap SystemCapability.Mechanic.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  export interface EulerAngles {
    /**
     * Yaw angle, ranging from -Math.PI to Math.PI, measured in radians.
     * @type { ?double }
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    yaw?: double;

    /**
     * Roll angle, ranging from -Math.PI to Math.PI, measured in radians.
     * @type { ?double }
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    roll?: double;

    /**
     * Pitch angle, ranging from -Math.PI to Math.PI, measured in radians.
     * @type { ?double }
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    pitch?: double;
  }

  /**
   * Rotational speed. A negative value indicates a clockwise rotation, and a positive value indicates a
   * counterclockwise rotation.
   * @typedef RotationSpeed
   * @syscap SystemCapability.Mechanic.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  export interface RotationSpeed {
    /**
     * Yaw speed, measured in radians per second.
     * @type { ?double }
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    yawSpeed?: double;

    /**
     * Roll speed, measured in radians per second.
     * @type { ?double }
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    rollSpeed?: double;

    /**
     * Pitch speed, measured in radians per second.
     * @type { ?double }
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    pitchSpeed?: double;
  }


  /**
   * Rotation angle limits relative to the reference point.
   * @typedef RotationLimits
   * @syscap SystemCapability.Mechanic.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  export interface RotationLimits {
    /**
     * Maximum yaw rotation angles in the negative direction, ranging from -2*Math.PI to 0, measured in radians.
     * If the value is less than or equal to -2*Math.PI, there is no restriction.
     * @type { double }
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    negativeYawMax: double;

    /**
     * Maximum yaw rotation angles in the positive direction, ranging from 0 to 2*Math.PI, measured in radians.
     * If the value is greater than or equal to 2*Math.PI, there is no restriction.
     * @type { double }
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    positiveYawMax: double;

    /**
     * Maximum roll rotation angles in the negative direction, ranging from -2*Math.PI to 0, measured in radians.
     * If the value is less than or equal to -2*Math.PI, there is no restriction.
     * @type { double }
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    negativeRollMax: double;

    /**
     * Maximum roll rotation angles in the positive direction, ranging from 0 to 2*Math.PI, measured in radians.
     * If the value is greater than or equal to 2*Math.PI, there is no restriction.
     * @type { double }
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    positiveRollMax: double;

    /**
     * Maximum pitch rotation angles in the negative direction, ranging from -2*Math.PI to 0, measured in radians.
     * If the value is less than or equal to -2*Math.PI, there is no restriction.
     * @type { double }
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    negativePitchMax: double;

    /**
     * Maximum pitch rotation angles in the positive direction, ranging from 0 to 2*Math.PI, measured in radians.
     * If the value is greater than or equal to 2*Math.PI, there is no restriction.
     * @type { double }
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    positivePitchMax: double;
  }

  /**
   * Rotation axes status
   *
   * @typedef RotationAxesStatus
   * @syscap SystemCapability.Mechanic.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  export interface RotationAxesStatus {
    /**
     * Whether the yaw axis is enabled.
     * @type { boolean }
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    yawEnabled: boolean;

    /**
     * Whether the roll axis is enabled.
     * @type { boolean }
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    rollEnabled: boolean;

    /**
     * Whether the pitch axis is enabled.
     * @type { boolean }
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    pitchEnabled: boolean;

    /**
     * Whether the yaw axis is limited.
     * @type { ?RotationAxisLimited } RotationAxisLimited
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    yawLimited?: RotationAxisLimited;

    /**
     * Whether the roll axis is limited.
     * @type { ?RotationAxisLimited }
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    rollLimited?: RotationAxisLimited;

    /**
     * Whether the pitch axis is limited.
     * @type { ?RotationAxisLimited }
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    pitchLimited?: RotationAxisLimited;
  }

  /**
   * Enumerates the rotation axis limit states.
   * @enum { int }
   * @syscap SystemCapability.Mechanic.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  export enum RotationAxisLimited {
    /**
     * Not limited.
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    NOT_LIMITED = 0,

    /**
     * Negative limited.
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    NEGATIVE_LIMITED = 1,

    /**
     * Positive limited.
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    POSITIVE_LIMITED = 2
  }

  /**
   * Rotation axes state change information.
   * @typedef RotationAxesStateChangeInfo
   * @syscap SystemCapability.Mechanic.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  export interface RotationAxesStateChangeInfo {
    /**
     * ID of the mechanical device.
     * @type { int }
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    mechId: int;

    /**
     * Rotate axis status.
     * @type { RotationAxesStatus }
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    status: RotationAxesStatus,
  }

  /**
   * Tracking event callback info.
   *
   * @typedef TrackingEventInfo
   * @syscap SystemCapability.Mechanic.Core
   * @since 20 dynamic
   * @since 23 static
   */
  export interface TrackingEventInfo {
    /**
     * Tracking event.
     * @type { TrackingEvent } Tracking event.
     * @syscap SystemCapability.Mechanic.Core
     * @since 20 dynamic
     * @since 23 static
     */
    event: TrackingEvent;
  }

  /**
   * Callback information about the device attachment state change.
   * @typedef AttachStateChangeInfo
   * @syscap SystemCapability.Mechanic.Core
   * @since 20 dynamic
   * @since 23 static
   */
  export interface AttachStateChangeInfo {

    /**
     * Device attachment state.
     * @type { AttachState }
     * @syscap SystemCapability.Mechanic.Core
     * @since 20 dynamic
     * @since 23 static
     */
    state: AttachState;

    /**
     * Mechanical device information.
     * @type { MechInfo }
     * @syscap SystemCapability.Mechanic.Core
     * @since 20 dynamic
     * @since 23 static
     */
    mechInfo: MechInfo,
  }

  /**
   * Target information.
   *
   * @typedef TargetInfo
   * @syscap SystemCapability.Mechanic.Core
   * @systemapi
   * @since 21 dynamic
   * @since 23 static
   */
  export interface TargetInfo {
    /**
     * Target type.
     * @type { TargetType }
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    targetType: TargetType;
  }

  /**
   * Parameters for target searching.
   *
   * @typedef SearchParams
   * @syscap SystemCapability.Mechanic.Core
   * @systemapi
   * @since 21 dynamic
   * @since 23 static
   */
  export interface SearchParams {

    /**
     * Search direction.
     * @type { SearchDirection }
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    direction: SearchDirection;
  }

  /**
   * Search result.
   *
   * @typedef SearchResult
   * @syscap SystemCapability.Mechanic.Core
   * @systemapi
   * @since 21 dynamic
   * @since 23 static
   */
  export interface SearchResult {
    /**
     * Search result. Returns the number of targets found.0 means not found.
     * @type { int }
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    targetCount: int;
  }

  /**
   * Enumerates the user operations.
   * @enum { int }
   * @syscap SystemCapability.Mechanic.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  export enum Operation {
    /**
     * Connection operation.
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    CONNECT = 0,

    /**
     * Disconnection operation.
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    DISCONNECT = 1
  }

  /**
   * Enumerates the tracking events.
   * @enum { int }
   * @syscap SystemCapability.Mechanic.Core
   * @since 20 dynamic
   * @since 23 static
   */
  export enum TrackingEvent {
    /**
     * Camera tracking enabled by user.
     * @syscap SystemCapability.Mechanic.Core
     * @since 20 dynamic
     * @since 23 static
     */
    CAMERA_TRACKING_USER_ENABLED = 0,

    /**
     * Camera tracking disabled by user.
     * @syscap SystemCapability.Mechanic.Core
     * @since 20 dynamic
     * @since 23 static
     */
    CAMERA_TRACKING_USER_DISABLED = 1,

    /**
     * Camera tracking layout changed. You can call getCameraTrackingLayout to obtain the new layout.
     * @syscap SystemCapability.Mechanic.Core
     * @since 20 dynamic
     * @since 23 static
     */
    CAMERA_TRACKING_LAYOUT_CHANGED = 2
  }

  /**
   * Rotation execution results.
   *
   * @enum { int }
   * @syscap SystemCapability.Mechanic.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  export enum Result {
    /**
     * Rotation completed.
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    COMPLETED = 0,

    /**
     * Rotation was interrupted.
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    INTERRUPTED = 1,

    /**
     * Device reached limitation.
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    LIMITED = 2,

    /**
     * Rotation time out.
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    TIMEOUT = 3,

    /**
     * Rotation failed due to system error.
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    SYSTEM_ERROR = 100
  }

  /**
   * Enumerates the mechanical device types.
   * @enum { int }
   * @syscap SystemCapability.Mechanic.Core
   * @since 20 dynamic
   * @since 23 static
   */
  export enum MechDeviceType {
    /**
     * Gimbal device.
     * @syscap SystemCapability.Mechanic.Core
     * @since 20 dynamic
     * @since 23 static
     */
    GIMBAL_DEVICE = 0,

    /**
     * Desktop gimbal device.
     *
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 24 dynamic&static
     */
    DESKTOP_GIMBAL_DEVICE = 1,

    /**
     * Wheeled‑mounted base device.
     *
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 24 dynamic&static
     */
    WHEELED_BASE_DEVICE = 2
  }

  /**
   * Device attach states.
   *
   * @enum { int }
   * @syscap SystemCapability.Mechanic.Core
   * @since 20 dynamic
   * @since 23 static
   */
  export enum AttachState {

    /**
     * Device attached.
     * @syscap SystemCapability.Mechanic.Core
     * @since 20 dynamic
     * @since 23 static
     */
    ATTACHED = 0,

    /**
     * Device detached.
     * @syscap SystemCapability.Mechanic.Core
     * @since 20 dynamic
     * @since 23 static
     */
    DETACHED = 1
  }

  /**
   * Enumerates the camera tracking layouts.
   * @enum { int }
   * @syscap SystemCapability.Mechanic.Core
   * @since 20 dynamic
   * @since 23 static
   */
  export enum CameraTrackingLayout {
    /**
     * Default layout.
     * @syscap SystemCapability.Mechanic.Core
     * @since 20 dynamic
     * @since 23 static
     */
    DEFAULT = 0,

    /**
     * Left-side layout.
     * @syscap SystemCapability.Mechanic.Core
     * @since 20 dynamic
     * @since 23 static
     */
    LEFT = 1,

    /**
     * Middle layout.
     * @syscap SystemCapability.Mechanic.Core
     * @since 20 dynamic
     * @since 23 static
     */
    MIDDLE = 2,

    /**
     * Right-side layout.
     * @syscap SystemCapability.Mechanic.Core
     * @since 20 dynamic
     * @since 23 static
     */
    RIGHT = 3
  }

  /**
   * Target type.
   *
   * @enum { int }
   * @syscap SystemCapability.Mechanic.Core
   * @systemapi
   * @since 21 dynamic
   * @since 23 static
   */
  export enum TargetType {
    /**
     * human Face type.
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    HUMAN_FACE = 0
  }

  /**
   * Search direction.
   *
   * @enum { int }
   * @syscap SystemCapability.Mechanic.Core
   * @systemapi
   * @since 21 dynamic
   * @since 23 static
   */
  export enum SearchDirection {
    /**
     * System Default Direction.
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    DEFAULT = 0,

    /**
     * Leftward direction. Also indicates clockwise direction.
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    LEFTWARD = 1,

    /**
     * Rightward direction. Also indicates the counterclockwise direction.
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    RIGHTWARD = 2
  }

  /**
   * Parameters for moving the target.
   *
   * @syscap SystemCapability.Mechanic.Core
   * @systemapi
   * @since 24 dynamic&static
   */
  export interface MoveParams {
    /**
     * Moving distance, unit cm.
     *
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 24 dynamic&static
     */
    distance: int;

    /**
     * Turning angle, unit degree.
     *
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 24 dynamic&static
     */
    angle: double;

    /**
     * Speed gear.
     *
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 24 dynamic&static
     */
    speedGear?: SpeedGear;

    /**
     * Movement mode.
     *
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 24 dynamic&static
     */
    mode?: MarchingMode;
    }

  /**
   * Speed gear definition.
   *
   * @syscap SystemCapability.Mechanic.Core
   * @systemapi
   * @since 24 dynamic&static
   */
  export enum SpeedGear {
    /**
     * Low speed definition.
     *
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 24 dynamic&static
     */
    LOW_SPEED = 0,

    /**
     * Middle speed definition, default speed.
     *
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 24 dynamic&static
     */
    MIDDLE_SPEED = 1,

    /**
     * High speed definition.
     *
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 24 dynamic&static
     */
    HIGH_SPEED = 2
  }

  /**
   * Marching mode definition.
   *
   * @syscap SystemCapability.Mechanic.Core
   * @systemapi
   * @since 24 dynamic&static
   */
  export enum MarchingMode {
    /**
     * Turn first, then move.
     *
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 24 dynamic&static
     */
    TURN_THEN_MOVE = 0,

    /**
     * Move and rotate simultaneously.
     *
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 24 dynamic&static
     */
    TURNING_MOVING = 1
  }

  /**
   * Parameters for moving or turning at a speed.
   *
   * @syscap SystemCapability.Mechanic.Core
   * @systemapi
   * @since 24 dynamic&static
   */
  export interface SpeedParams {
    /**
     * Turning or moving speed, unit cm.
     *
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 24 dynamic&static
     */
    speed: int;

    /**
     * Turning angle, unit degree.
     *
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 24 dynamic&static
     */
    angle: double;

    /**
     * Movement mode.
     *
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 24 dynamic&static
     */
    mode?: MarchingMode;
  }

  /**
   * Type of action sequence.
   *
   * @syscap SystemCapability.Mechanic.Core
   * @systemapi
   * @since 24 dynamic&static
   */
  export enum ActionType {
    /**
     * Landscape-to-Portrait switching.
     *
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 24 dynamic&static
     */
    LANDSCAPE_PORTRAIT_SWITCH = 0,

    /**
     * Action of patrol on the ground.
     *
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 24 dynamic&static
     */
    PATROL_MODE = 1,

    /**
     * Action of greeting the owner.
     *
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 24 dynamic&static
     */
    GREET_MODE = 2,

    /**
     * Action of tilting head up.
     *
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 24 dynamic&static
     */
    HEAD_UP = 3,

    /**
     * Action of tilting head up slightly.
     *
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 24 dynamic&static
     */
    HEAD_UP_SLIGHTLY = 4,

    /**
     * Action of looking straight ahead.
     *
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 24 dynamic&static
     */
    EYE_LEVEL = 5,

    /**
     * Action of tilting head down slightly.
     *
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 24 dynamic&static
     */
    HEAD_DOWN_SLIGHTLY = 6,

    /**
     * Action of tilting head down completely.
     *
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 24 dynamic&static
     */
    HEAD_DOWN = 7,

    /**
     * Action of wiggling head.
     *
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 24 dynamic&static
     */
    HEAD_WIGGLE = 8,

    /**
     * Action of nodding.
     *
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 24 dynamic&static
     */
    NOD = 9,

    /**
     * Action of shaking head.
     *
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 24 dynamic&static
     */
    HEAD_SHAKE = 10,

    /**
     * Action of happy.
     *
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 24 dynamic&static
     */
    HAPPY = 1000,

    /**
     * Action of angry.
     *
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 24 dynamic&static
     */
    ANGRY = 1001,

    /**
     * Action of sad.
     *
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 24 dynamic&static
     */
    SAD = 1002,

    /**
     * Action of scared.
     *
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 24 dynamic&static
     */
    SCARED = 1003,

    /**
     * Action of dance.
     *
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 24 dynamic&static
     */
    DANCE = 2000,

    /**
     * Action of acting cute.
     *
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 24 dynamic&static
     */
    ACTING_CUTE = 2001,

    /**
     * Action of celebrate.
     *
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 24 dynamic&static
     */
    CELEBRATE = 2002,

    /**
     * Action of wakeup.
     *
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 24 dynamic&static
     */
    WAKEUP = 2003,

    /**
     * Action of sleep.
     *
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 24 dynamic&static
     */
    SLEEP = 2004,

    /**
     * Action of low power.
     *
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 24 dynamic&static
     */
    LOW_POWER = 2005,

    /**
     * Action of thinking.
     *
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 24 dynamic&static
     */
    THINKING = 2006
  }

  /**
   * Mechanic event definition.
   *
   * @syscap SystemCapability.Mechanic.Core
   * @systemapi
   * @since 24 dynamic&static
   */
  export enum MechEventType {
    /**
     * Mechanic device attached on base.
     *
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 24 dynamic&static
     */
    DEVICE_ADSORBED = 0,

    /**
     * Mechanic device detached from the base.
     *
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 24 dynamic&static
     */
    DEVICE_UNADSORBED = 1,

    /**
     * Mechanic device hits a cliff while moving.
     *
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 24 dynamic&static
     */
    REACH_CLIFF = 2,

    /**
     * Mechanic device hits an obstacle while moving.
     *
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 24 dynamic&static
     */
    REACH_OBSTACLE = 3,

    /**
     * Mechanic device is low on power.
     *
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 24 dynamic&static
     */
    LOW_POWER = 4
  }

  /**
   * Definition of Mechanic device event.
   *
   * @syscap SystemCapability.Mechanic.Core
   * @systemapi
   * @since 24 dynamic&static
   */
  export interface MechEvent {
    /**
     * ID of the mechanical device.
     *
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 24 dynamic&static
     */
    mechId: int;

    /**
     * Event type of this event.
     *
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 24 dynamic&static
     */
    event: MechEventType;
  }
}

export default mechanicManager;