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
 * 提供与本设备连接的机械设备的控制和交互能力。
 * 包括连接管理、控制和监控功能
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
   * 获取已连接的机械设备列表
   * @returns { MechInfo[] } 返回已连接的机械设备列表
   * @throws { BusinessError } 33300001 - Service exception.
   * @syscap SystemCapability.Mechanic.Core
   * @since 20 dynamic
   * @since 23 static
   */
  function getAttachedMechDevices(): MechInfo[];

  /**
   * 设置用户操作
   *
   * @permission ohos.permission.CONNECT_MECHANIC_HARDWARE
   * @param { Operation } operation 操作类型
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
   * 启用或禁用摄像机跟踪
   * @param { boolean } isEnabled 是否启用摄像机跟踪
   * @throws { BusinessError } 33300001 - Service exception.
   * @throws { BusinessError } 33300002 - Device not connected.
   * @throws { BusinessError } 33300003 - Feature not supported.
   * @syscap SystemCapability.Mechanic.Core
   * @since 20 dynamic
   * @since 23 static
   */
  function setCameraTrackingEnabled(isEnabled: boolean): void;

  /**
   * 获取相机跟踪状态
   * @returns { boolean } 返回是否启用摄像机跟踪
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
   * 设置相机跟踪布局
   * @param { 'trackingStateChange' } type Event type.
   * @param { Callback<TrackingEventInfo> } [callback] Callback used to return the tracking event information.
   * @throws { BusinessError } 33300001 - Service exception.
   * @syscap SystemCapability.Mechanic.Core
   * @since 20 dynamic
   */
  function off(type: 'trackingStateChange', callback?: Callback<TrackingEventInfo>): void;

  /**
   * 设置相机跟踪布局
   * @param { Callback<TrackingEventInfo> } [callback] Callback used to return the tracking event information.
   * @throws { BusinessError } 33300001 - Service exception.
   * @syscap SystemCapability.Mechanic.Core
   * @since 23 static
   */
  function offTrackingStateChange(callback?: Callback<TrackingEventInfo>): void;

  /**
   * 设置相机跟踪布局
   * @param { CameraTrackingLayout } trackingLayout 跟踪布局
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
   * 获取当前摄像头跟踪布局
   * @returns { CameraTrackingLayout } 返回当前布局
   * @throws { BusinessError } 33300001 - Service exception.
   * @throws { BusinessError } 33300002 - Device not connected.
   * @syscap SystemCapability.Mechanic.Core
   * @since 20 dynamic
   * @since 23 static
   */
  function getCameraTrackingLayout(): CameraTrackingLayout;

  /**
   * 将机械设备旋转到相对角度
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
   * 将机械设备旋转到绝对角度
   * @param { int } mechId 机械设备ID
   * @param { EulerAngles } angles 绝对角度位置
   * @param { int } duration 执行时间
   * @returns { Promise<Result> } 返回执行结果
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
   * @param { int } mechId 机械设备ID
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
   * @param { int } mechId 机械设备ID
   * @returns { RotationSpeed } 返回最大速度，只返回速度的绝对值
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
   * 以指定的速度旋转机械设备
   * @param { int } mechId 机械设备ID
   * @param { RotationSpeed } speed 旋转速度
   * @param { int } duration 执行时间
   * @returns { Promise<Result> } 返回执行结果
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
   * 停止转动
   * @param { int } mechId 机械设备ID
   * @returns { Promise<void> } 返回操作结果
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
   * 获取机械设备的当前角度
   * @param { int } mechId 机械设备ID
   * @returns { EulerAngles } 返回当前角度
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
   * @param { int } mechId 机械设备ID
   * @returns { RotationLimits } 最大旋转角度
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
   * 获取当前转轴状态
   * @param { int } mechId 机械设备ID
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
   * 以特定参数移动一个具身设备
   *
   * @param { int } mechId - 具身设备ID。
   *     <br>取值限定为整数。
   * @param { MoveParams } params - 移动参数。
   * @returns { Promise<Result> } 202 - 非系统应用
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 33300001 - Service exception.
   * @throws { BusinessError } 33300002 - Device not connected.
   * @throws { BusinessError } 33300003 - Feature not supported.
   * @syscap SystemCapability.Mechanic.Core
   * @systemapi
   * @since 26.0.0 dynamic&static
   */
  function move(mechId: int, params: MoveParams): Promise<Result>;

  /**
   * 以特定速度移动一个具身设备
   *
   * @param { int } mechId - 具身设备ID。
   *     <br>取值限定为整数。
   * @param { SpeedParams } params - 移动参数。
   * @param { int } duration - 移动时长，单位ms。
   *     <br>取值限定为整数。
   * @returns { Promise<Result> } 202 - 非系统应用
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 33300001 - Service exception.
   * @throws { BusinessError } 33300002 - Device not connected.
   * @throws { BusinessError } 33300003 - Feature not supported.
   * @syscap SystemCapability.Mechanic.Core
   * @systemapi
   * @since 26.0.0 dynamic&static
   */
  function moveBySpeed(mechId: int, params: SpeedParams, duration: int): Promise<Result>;

  /**
   * 以固定速度原地旋转
   *
   * @param { int } mechId - 具身设备ID。
   *     <br>取值限定为整数。
   * @param { double } angleSpeed - 角速度。
   * @param { int } duration - 转动时长，单位ms。
   *     <br>取值限定为整数。
   * @returns { Promise<Result> } 202 - 非系统应用
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 33300001 - Service exception.
   * @throws { BusinessError } 33300002 - Device not connected.
   * @throws { BusinessError } 33300003 - Feature not supported.
   * @syscap SystemCapability.Mechanic.Core
   * @systemapi
   * @since 26.0.0 dynamic&static
   */
  function turnBySpeed(mechId: int, angleSpeed: double, duration: int): Promise<Result>;

  /**
   * 判断是否支持某个动作
   *
   * @param { int } mechId - 具身设备ID。
   *     <br>取值限定为整数。
   * @param { ActionType } actionType - 动作序列类型。
   * @returns { boolean } 是否支持该特定动作
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 33300001 - Service exception.
   * @throws { BusinessError } 33300002 - Device not connected.
   * @syscap SystemCapability.Mechanic.Core
   * @systemapi
   * @since 26.0.0 dynamic&static
   */
  function isSupportAction(mechId: int, actionType: ActionType): boolean;

  /**
   * 执行一个动作序列
   *
   * @param { int } mechId - 具身设备ID。
   *     <br>取值限定为整数。
   * @param { ActionType } actionType - 动作序列类型。
   * @returns { Promise<Result> } 202 - 非系统应用
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 33300001 - Service exception.
   * @throws { BusinessError } 33300002 - Device not connected.
   * @throws { BusinessError } 33300003 - Feature not supported.
   * @syscap SystemCapability.Mechanic.Core
   * @systemapi
   * @since 26.0.0 dynamic&static
   */
  function doAction(mechId: int, actionType: ActionType): Promise<Result>;

  /**
   * 订阅具身设备事件回调
   *
   * @param { MechEventType[] } events - 订阅的事件列表。
   * @param { Callback<MechEvent> } callback - 事件回调函数。
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 33300001 - Service exception.
   * @throws { BusinessError } 33300002 - Device not connected.
   * @throws { BusinessError } 33300003 - Feature not supported.
   * @syscap SystemCapability.Mechanic.Core
   * @systemapi
   * @since 26.0.0 dynamic&static
   */
  function subscribe(events: MechEventType[], callback: Callback<MechEvent>): void;

  /**
   * 取消事件注册
   *
   * @param { MechEventType[] } events - 取消注册的事件列表。
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 33300001 - Service exception.
   * @throws { BusinessError } 33300002 - Device not connected.
   * @throws { BusinessError } 33300003 - Feature not supported.
   * @syscap SystemCapability.Mechanic.Core
   * @systemapi
   * @since 26.0.0 dynamic&static
   */
  function unSubscribe(events: MechEventType[]): void;

  /**
   * 判断当前设备是否支持某类设备的具身控制
   *
   * @param { MechDeviceType } [mechDeviceType]  - 关联的设备类型
   *     <br>默认值:如果未提供该参数，则代表所有类型设备，只要支持其中一种以上则返回支持
   * @returns { boolean } Returns whether control is supported.
   * @syscap SystemCapability.Mechanic.Core
   * @since 26.0.0 dynamic&static
   */
  function isControlSupported(mechDeviceType?: MechDeviceType): boolean;

  /**
   * 基于地址连接设备
   *
   * @permission ohos.permission.CONNECT_MECHANIC_HARDWARE
   * @param { AddressInfo } addrInfo - 地址信息。
   * @param { ConnectParam } params - 操作参数。
   * @returns { Promise<AttachStateChangeInfo> } Promise used to return the attach state change information.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 33300001 - Service exception.
   * @syscap SystemCapability.Mechanic.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function connectDevice(addrInfo: AddressInfo, params: ConnectParam): Promise<AttachStateChangeInfo>;

  /**
   * 基于具身设备ID断开设备
   *
   * @permission ohos.permission.CONNECT_MECHANIC_HARDWARE
   * @param { int } mechId - 具身设备ID。
   *     <br>取值限定为整数。
   * @returns { Promise<Result> } Promise used to return the execution result.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 33300001 - Service exception.
   * @syscap SystemCapability.Mechanic.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function disconnectDevice(mechId: int): Promise<Result>;

  /**
   * 机械设备信息
   * @typedef MechInfo
   * @syscap SystemCapability.Mechanic.Core
   * @since 20 dynamic
   * @since 23 static
   */
  export interface MechInfo {
    /**
     * 机械设备ID
     *
     * @type { int }
     * @syscap SystemCapability.Mechanic.Core
     * @since 20 dynamic
     * @since 23 static
     */
    mechId: int;


    /**
     * 机械设备类型
     *
     *
     * @type { MechDeviceType }
     * @syscap SystemCapability.Mechanic.Core
     * @since 20 dynamic
     * @since 23 static
     */
    mechDeviceType: MechDeviceType;

    /**
     * 机械设备名称
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
     * 偏航角，范围从-2π到2*π，以弧度为单位。
     *
     * @type { ?double }
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    yaw?: double;

    /**
     * 滚动角度，范围从-2π到2*π，以弧度为单位。
     *
     * @type { ?double }
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    roll?: double;

    /**
     * 俯仰角，范围从-2π到2*π，以弧度为单位。
     *
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
     * 偏航角，范围从-π到π，以弧度为单位。
     *
     * @type { ?double }
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    yaw?: double;

    /**
     * 滚动角，范围从-π到π，以弧度为单位。
     *
     * @type { ?double }
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    roll?: double;

    /**
     * 俯仰角，范围从-π到π，以弧度为单位。
     *
     * @type { ?double }
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    pitch?: double;
  }

  /**
   * 转速，负值表示顺时针旋转。正值表示逆时针旋转。
   * @typedef RotationSpeed
   * @syscap SystemCapability.Mechanic.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  export interface RotationSpeed {
    /**
     * 偏航速度，单位为弧度每秒。
     *
     * @type { ?double }
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    yawSpeed?: double;

    /**
     * 滚动速度，单位为弧度每秒。
     *
     * @type { ?double }
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    rollSpeed?: double;

    /**
     * 俯仰速度，单位为弧度每秒。
     *
     * @type { ?double }
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    pitchSpeed?: double;
  }


  /**
   * 相对于参考点的旋转角度限制
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
     * 是否启用偏航轴
     * @type { boolean }
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    yawEnabled: boolean;

    /**
     * 是否启用滚动轴
     * @type { boolean }
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    rollEnabled: boolean;

    /**
     * 是否使能俯仰轴
     * @type { boolean }
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    pitchEnabled: boolean;

    /**
     * 偏航轴是否限位
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
   * 旋转轴限位状态
   *
   *
   * @enum { int }
   * @syscap SystemCapability.Mechanic.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  export enum RotationAxisLimited {
    /**
     * 不限位
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    NOT_LIMITED = 0,

    /**
     * 负限位
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
   * 旋转轴状态变更信息
   * @typedef RotationAxesStateChangeInfo
   * @syscap SystemCapability.Mechanic.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  export interface RotationAxesStateChangeInfo {
    /**
     * 机械设备唯一ID
     *
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
    status: RotationAxesStatus;
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
     * 跟踪事件
     * @type { TrackingEvent } Tracking event.
     * @syscap SystemCapability.Mechanic.Core
     * @since 20 dynamic
     * @since 23 static
     */
    event: TrackingEvent;
  }

  /**
   * 设备吸附状态回调信息
   * @typedef AttachStateChangeInfo
   * @syscap SystemCapability.Mechanic.Core
   * @since 20 dynamic
   * @since 23 static
   */
  export interface AttachStateChangeInfo {

    /**
     * 吸附状态
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
    mechInfo: MechInfo;
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
   * 用户操作
   *
   *
   * @enum { int }
   * @syscap SystemCapability.Mechanic.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  export enum Operation {
    /**
     * 连接操作
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    CONNECT = 0,

    /**
     * 断开操作
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    DISCONNECT = 1
  }

  /**
   * 跟踪事件
   *
   *
   * @enum { int }
   * @syscap SystemCapability.Mechanic.Core
   * @since 20 dynamic
   * @since 23 static
   */
  export enum TrackingEvent {
    /**
     * 用户操作相机跟踪使能
     * @syscap SystemCapability.Mechanic.Core
     * @since 20 dynamic
     * @since 23 static
     */
    CAMERA_TRACKING_USER_ENABLED = 0,

    /**
     * 用户操作相机跟踪关闭
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
     * 障碍物导致终止
     *
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 26.0.0 dynamic&static
     */
    TERMINATE_OBSTACLE  = 4,

    /**
     * 悬崖导致终止
     *
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 26.0.0 dynamic&static
     */
    TERMINATE_CLIFF = 5,

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
     * 云台设备类型
     * @syscap SystemCapability.Mechanic.Core
     * @since 20 dynamic
     * @since 23 static
     */
    GIMBAL_DEVICE = 0,

    /**
     * 桌面云台
     *
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 26.0.0 dynamic&static
     */
    DESKTOP_GIMBAL_DEVICE = 1,

    /**
     * 轮式底座
     *
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 26.0.0 dynamic&static
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
     * 设备挂载
     * @syscap SystemCapability.Mechanic.Core
     * @since 20 dynamic
     * @since 23 static
     */
    ATTACHED = 0,

    /**
     * 设备卸载
     * @syscap SystemCapability.Mechanic.Core
     * @since 20 dynamic
     * @since 23 static
     */
    DETACHED = 1
  }

  /**
   * 相机跟踪布局
   *
   *
   * @enum { int }
   * @syscap SystemCapability.Mechanic.Core
   * @since 20 dynamic
   * @since 23 static
   */
  export enum CameraTrackingLayout {
    /**
     * 系统默认布局
     * @syscap SystemCapability.Mechanic.Core
     * @since 20 dynamic
     * @since 23 static
     */
    DEFAULT = 0,

    /**
     * 左侧布局
     * @syscap SystemCapability.Mechanic.Core
     * @since 20 dynamic
     * @since 23 static
     */
    LEFT = 1,

    /**
     * 中间布局
     * @syscap SystemCapability.Mechanic.Core
     * @since 20 dynamic
     * @since 23 static
     */
    MIDDLE = 2,

    /**
     * 右侧布局
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
   * 设备移动参数
   *
   * @syscap SystemCapability.Mechanic.Core
   * @systemapi
   * @since 26.0.0 dynamic&static
   */
  export interface MoveParams {
    /**
     * 移动距离。
     * 取值限定为整数。
     *
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 26.0.0 dynamic&static
     */
    distance: int;

    /**
     * 转动角度。
     *
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 26.0.0 dynamic&static
     */
    angle: double;

    /**
     * 速度档位。
     *
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 26.0.0 dynamic&static
     */
    speedGear?: SpeedGear;

    /**
     * 行进方式。
     *
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 26.0.0 dynamic&static
     */
    mode?: MarchingMode;
    }

  /**
   * 速度档位定义
   *
   * @syscap SystemCapability.Mechanic.Core
   * @systemapi
   * @since 26.0.0 dynamic&static
   */
  export enum SpeedGear {
    /**
     * 低速档定义
     *
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 26.0.0 dynamic&static
     */
    LOW_SPEED = 0,

    /**
     * 中速档定义，默认值即为中速
     *
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 26.0.0 dynamic&static
     */
    MIDDLE_SPEED = 1,

    /**
     * 高速档定义
     *
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 26.0.0 dynamic&static
     */
    HIGH_SPEED = 2
  }

  /**
   * 行进模式定义
   *
   * @syscap SystemCapability.Mechanic.Core
   * @systemapi
   * @since 26.0.0 dynamic&static
   */
  export enum MarchingMode {
    /**
     * 先转动再移动
     *
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 26.0.0 dynamic&static
     */
    TURN_THEN_MOVE = 0,

    /**
     * 边移动边转动
     *
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 26.0.0 dynamic&static
     */
    TURNING_MOVING = 1
  }

  /**
   * 速度控制参数
   *
   * @syscap SystemCapability.Mechanic.Core
   * @systemapi
   * @since 26.0.0 dynamic&static
   */
  export interface SpeedParams {
    /**
     * 转动或移动速度。
     * 取值限定为整数。
     *
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 26.0.0 dynamic&static
     */
    speed: int;

    /**
     * 转动角度。
     *
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 26.0.0 dynamic&static
     */
    angle: double;

    /**
     * 行进方式。
     *
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 26.0.0 dynamic&static
     */
    mode?: MarchingMode;
  }

  /**
   * 动作序列类型
   *
   * @syscap SystemCapability.Mechanic.Core
   * @systemapi
   * @since 26.0.0 dynamic&static
   */
  export enum ActionType {
    /**
     * 横竖屏旋转
     *
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 26.0.0 dynamic&static
     */
    LANDSCAPE_PORTRAIT_SWITCH = 0,

    /**
     * 巡桌模式
     *
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 26.0.0 dynamic&static
     */
    PATROL_MODE = 1,

    /**
     * 迎人模式
     *
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 26.0.0 dynamic&static
     */
    GREET_MODE = 2,

    /**
     * 仰头
     *
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 26.0.0 dynamic&static
     */
    HEAD_UP = 3,

    /**
     * 微抬
     *
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 26.0.0 dynamic&static
     */
    HEAD_UP_SLIGHTLY = 4,

    /**
     * 平视
     *
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 26.0.0 dynamic&static
     */
    EYE_LEVEL = 5,

    /**
     * 微低
     *
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 26.0.0 dynamic&static
     */
    HEAD_DOWN_SLIGHTLY = 6,

    /**
     * 下俯到底
     *
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 26.0.0 dynamic&static
     */
    HEAD_DOWN = 7,

    /**
     * 晃头
     *
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 26.0.0 dynamic&static
     */
    HEAD_WIGGLE = 8,

    /**
     * 点头
     *
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 26.0.0 dynamic&static
     */
    NOD = 9,

    /**
     * 摇头
     *
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 26.0.0 dynamic&static
     */
    HEAD_SHAKE = 10,

    /**
     * 开心动作
     *
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 26.0.0 dynamic&static
     */
    HAPPY = 1000,

    /**
     * 生气动作
     *
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 26.0.0 dynamic&static
     */
    ANGRY = 1001,

    /**
     * 悲伤动作
     *
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 26.0.0 dynamic&static
     */
    SAD = 1002,

    /**
     * 惊吓动作
     *
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 26.0.0 dynamic&static
     */
    SCARED = 1003,

    /**
     * 舞蹈动作
     *
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 26.0.0 dynamic&static
     */
    DANCE = 2000,

    /**
     * 卖萌动作
     *
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 26.0.0 dynamic&static
     */
    ACTING_CUTE = 2001,

    /**
     * 庆祝动作
     *
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 26.0.0 dynamic&static
     */
    CELEBRATE = 2002,

    /**
     * 唤醒动作
     *
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 26.0.0 dynamic&static
     */
    WAKEUP = 2003,

    /**
     * 休眠动作
     *
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 26.0.0 dynamic&static
     */
    SLEEP = 2004,

    /**
     * 低电量动作
     *
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 26.0.0 dynamic&static
     */
    LOW_POWER = 2005,

    /**
     * 思考中动作
     *
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 26.0.0 dynamic&static
     */
    THINKING = 2006
  }

  /**
   * 具身设备事件定义
   *
   * @syscap SystemCapability.Mechanic.Core
   * @systemapi
   * @since 26.0.0 dynamic&static
   */
  export enum MechEventType {
    /**
     * 吸附事件
     *
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 26.0.0 dynamic&static
     */
    DEVICE_ADSORBED = 0,

    /**
     * 未吸附事件
     *
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 26.0.0 dynamic&static
     */
    DEVICE_UNADSORBED = 1,

    /**
     * 移动中遇到悬崖
     *
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 26.0.0 dynamic&static
     */
    REACH_CLIFF = 2,

    /**
     * 移动中遇到障碍
     *
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 26.0.0 dynamic&static
     */
    REACH_OBSTACLE = 3,

    /**
     * 设备低电量
     *
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 26.0.0 dynamic&static
     */
    LOW_POWER = 4
  }

  /**
   * 具身设备事件定义
   *
   * @syscap SystemCapability.Mechanic.Core
   * @systemapi
   * @since 26.0.0 dynamic&static
   */
  export interface MechEvent {
    /**
     * 具身设备ID。
     * 取值限定为整数。
     *
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 26.0.0 dynamic&static
     */
    mechId: int;

    /**
     * 事件类型
     *
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 26.0.0 dynamic&static
     */
    event: MechEventType;
  }

  /**
   * 具身设备地址类型
   *
   * @syscap SystemCapability.Mechanic.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  export enum AddressType {
    /**
     * 具身设备蓝牙地址类型
     *
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    BLE_ADDR = 0
  }

  /**
   * 配件设备信息定义
   *
   * @syscap SystemCapability.Mechanic.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  export interface AddressInfo {
    /**
     * 配件设备地址。
     *
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    address: string;

    /**
     * 地址类型。
     *
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    addressType: AddressType;
  }

  /**
   * 连接参数定义
   *
   * @syscap SystemCapability.Mechanic.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  export interface ConnectParam {
    /**
     * 具身设备名称。
     *
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    deviceName?: string;

    /**
     * 当前设备标识。
     * 取值限定为整数。
     *
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    identifier?: int;

    /**
     * 发现设备时携带的数据
     * 数据必须符合以下格式：|类型|值|类型|值|。
     * 每个特定类型的value'len是预定义的长度
     * 支持的类型和版本如下表所示。
     * -----------------------------------------------------------------
     * 类型|值|值len |api级别
     * -----------------------------------------------------------------
     * 0x01 |三轴重力传感器值| 3Byte |26.0.0
     * -----------------------------------------------------------------
     * 0x02|MAC地址第1字节偏移|1字节|26.0.0
     * -----------------------------------------------------------------
     * 0x03 |配对广播|1字节|26.0.0
     * -----------------------------------------------------------------
     * 0x04 |目标设备标识|4字节|26.0.0
     * -----------------------------------------------------------------。
     *
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    custdata: string;
  }
}

export default mechanicManager;