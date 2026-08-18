/*
 * Copyright (c) 2026 Huawei Device Co., Ltd.
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
 * @file 动作感知能力
 * @kit MultimodalAwarenessKit
 */
import type { Callback } from "./@ohos.base";
/**
 * **motion**本模块提供对用户手势识别、设备姿态监听等感知能力，适用于需要根据用户手势或动作进行响应的交互场景，如握持手、设备拾起等，帮助应用提供更自然的交互体验和精准的场景感知。
 *
 * @syscap SystemCapability.MultimodalAwareness.Motion
 * @since 15 dynamic
 * @since 23 static
 */

declare namespace motion {
  /**
   * 触控操作手状态信息。
   *
   * @syscap SystemCapability.MultimodalAwareness.Motion
   * @since 15 dynamic
   * @since 23 static
   */
  export enum OperatingHandStatus {
    /**
     * 表示未识别。
     *
     * @syscap SystemCapability.MultimodalAwareness.Motion
     * @since 15 dynamic
     * @since 23 static
     */
    UNKNOWN_STATUS = 0,
    /**
     * 表示触控操作手是左手。
     *
     * @syscap SystemCapability.MultimodalAwareness.Motion
     * @since 15 dynamic
     * @since 23 static
     */
    LEFT_HAND_OPERATED = 1,
    /**
     * 表示触控操作手是右手。
     *
     * @syscap SystemCapability.MultimodalAwareness.Motion
     * @since 15 dynamic
     * @since 23 static
     */
    RIGHT_HAND_OPERATED = 2
  }

  /**
   * 握持手状态信息，表示握持手状态变化感知事件的结果。订阅事件后，返回当前握持手状态信息。
   *
   * @syscap SystemCapability.MultimodalAwareness.Motion
   * @since 20 dynamic
   * @since 23 static
   */
  export enum HoldingHandStatus {
    /**
     * 表示未握持。
     *
     * @syscap SystemCapability.MultimodalAwareness.Motion
     * @since 20 dynamic
     * @since 23 static
     */
    NOT_HELD = 0,
    /**
     * 表示左手握持。
     *
     * @syscap SystemCapability.MultimodalAwareness.Motion
     * @since 20 dynamic
     * @since 23 static
     */
    LEFT_HAND_HELD = 1,
    /**
     * 表示右手握持。
     *
     * @syscap SystemCapability.MultimodalAwareness.Motion
     * @since 20 dynamic
     * @since 23 static
     */
    RIGHT_HAND_HELD = 2,
    /**
     * 表示双手握持。
     *
     * @syscap SystemCapability.MultimodalAwareness.Motion
     * @since 20 dynamic
     * @since 23 static
     */
    BOTH_HANDS_HELD = 3,
    /**
     * 表示未识别。
     *
     * @syscap SystemCapability.MultimodalAwareness.Motion
     * @since 20 dynamic
     * @since 23 static
     */
    UNKNOWN_STATUS = 16
  }

  /**
    * 拾取事件枚举。
    *
    * @syscap SystemCapability.MultimodalAwareness.Motion
    * @systemapi
    * @stagemodelonly
    * @since 26.0.0 dynamic&static
    */
  export enum PickupEvent {
    /**
      * 表示检测到拾取动作（设备被抬起）。
      *
      * @syscap SystemCapability.MultimodalAwareness.Motion
      * @systemapi
      * @stagemodelonly
      * @since 26.0.0 dynamic&static
      */
    PICKED_UP = 0
  }

  /**
    * 旋转事件枚举。
    *
    * @syscap SystemCapability.MultimodalAwareness.Motion
    * @systemapi
    * @stagemodelonly
    * @since 26.0.0 dynamic&static
    */
  export enum RotateEvent {
    /**
      * 表示设备有旋转动作，但旋转幅度不足以改变当前方向，方向保持与之前一致。
      *
      * @syscap SystemCapability.MultimodalAwareness.Motion
      * @systemapi
      * @stagemodelonly
      * @since 26.0.0 dynamic&static
      */
    UNCHANGED = -1,
    /**
      * 表示设备竖直放置。
      *
      * @syscap SystemCapability.MultimodalAwareness.Motion
      * @systemapi
      * @stagemodelonly
      * @since 26.0.0 dynamic&static
      */
    UPRIGHT = 0,
    /**
      * 表示设备向左旋转。
      *
      * @syscap SystemCapability.MultimodalAwareness.Motion
      * @systemapi
      * @stagemodelonly
      * @since 26.0.0 dynamic&static
      */
    LEFT = 1,
    /**
      * 表示设备倒置。
      *
      * @syscap SystemCapability.MultimodalAwareness.Motion
      * @systemapi
      * @stagemodelonly
      * @since 26.0.0 dynamic&static
      */
    INVERTED = 2,
    /**
      * 表示设备向右旋转。
      *
      * @syscap SystemCapability.MultimodalAwareness.Motion
      * @systemapi
      * @stagemodelonly
      * @since 26.0.0 dynamic&static
      */
    RIGHT = 3
  }
  
  /**
    * 传感器检测到的物理方向枚举。
    *
    * @syscap SystemCapability.MultimodalAwareness.Motion
    * @systemapi
    * @stagemodelonly
    * @since 26.0.0 dynamic&static
    */
  export enum PhysicalOrientation {
    /**
      * 表示竖直。
      *
      * @syscap SystemCapability.MultimodalAwareness.Motion
      * @systemapi
      * @stagemodelonly
      * @since 26.0.0 dynamic&static
      */
    UPRIGHT = 0,
    /**
      * 表示向左。
      *
      * @syscap SystemCapability.MultimodalAwareness.Motion
      * @systemapi
      * @stagemodelonly
      * @since 26.0.0 dynamic&static
      */
    LEFT = 1,
    /**
      * 表示物理方向倒置。
      *
      * @syscap SystemCapability.MultimodalAwareness.Motion
      * @systemapi
      * @stagemodelonly
      * @since 26.0.0 dynamic&static
      */
    INVERTED = 2,
    /**
      * 表示向右。
      *
      * @syscap SystemCapability.MultimodalAwareness.Motion
      * @systemapi
      * @stagemodelonly
      * @since 26.0.0 dynamic&static
      */
    RIGHT = 3,
    /**
      * 表示正面朝上。
      *
      * @syscap SystemCapability.MultimodalAwareness.Motion
      * @systemapi
      * @stagemodelonly
      * @since 26.0.0 dynamic&static
      */
    FACE_UP = 4,
    /**
      * 表示正面朝下。
      *
      * @syscap SystemCapability.MultimodalAwareness.Motion
      * @systemapi
      * @stagemodelonly
      * @since 26.0.0 dynamic&static
      */
    FACE_DOWN = 5
  }

  /**
    * 由智能算法计算出的逻辑方向枚举。
    *
    * @syscap SystemCapability.MultimodalAwareness.Motion
    * @systemapi
    * @stagemodelonly
    * @since 26.0.0 dynamic&static
    */
  export enum LogicalOrientation {
    /**
      * 表示方向未知或无法确定（例如非握持状态）。
      *
      * @syscap SystemCapability.MultimodalAwareness.Motion
      * @systemapi
      * @stagemodelonly
      * @since 26.0.0 dynamic&static
      */
    UNKNOWN = -1,
    /**
      * 表示竖直。
      *
      * @syscap SystemCapability.MultimodalAwareness.Motion
      * @systemapi
      * @stagemodelonly
      * @since 26.0.0 dynamic&static
      */
    UPRIGHT = 0,
    /**
      * 表示向左。
      *
      * @syscap SystemCapability.MultimodalAwareness.Motion
      * @systemapi
      * @stagemodelonly
      * @since 26.0.0 dynamic&static
      */
    LEFT = 1,
    /**
      * 表示逻辑方向倒置。
      *
      * @syscap SystemCapability.MultimodalAwareness.Motion
      * @systemapi
      * @stagemodelonly
      * @since 26.0.0 dynamic&static
      */
    INVERTED = 2,
    /**
      * 表示向右。
      *
      * @syscap SystemCapability.MultimodalAwareness.Motion
      * @systemapi
      * @stagemodelonly
      * @since 26.0.0 dynamic&static
      */
    RIGHT = 3
  }

  /**
   * 悬浮手动作枚举。
   *
   * @syscap SystemCapability.MultimodalAwareness.Motion
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  export enum HoverHandAction {
    /**
     * 表示悬浮手进入检测区域。
     *
     * @syscap SystemCapability.MultimodalAwareness.Motion
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    DOWN = 0,
    /**
     * 表示悬浮手离开检测区域。
     *
     * @syscap SystemCapability.MultimodalAwareness.Motion
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    UP = 1
  }

  /**
    * 智能旋转传感器事件的基本数据结构。该事件包含传感器检测到的物理方向和由智能算法计算得出的逻辑方向。
    *
    * @syscap SystemCapability.MultimodalAwareness.Motion
    * @systemapi
    * @stagemodelonly
    * @since 26.0.0 dynamic&static
    */
  interface SmartRotateEvent {
    /**
      * 重力传感器报告的物理方向。
      *
      * @syscap SystemCapability.MultimodalAwareness.Motion
      * @systemapi
      * @stagemodelonly
      * @since 26.0.0 dynamic&static
      */
    physicalOrientation: PhysicalOrientation;
    /**
      * 智能算法调整后的逻辑方向。当智能算法无法确定方向时，该字段可能为空或不返回。
      *
      * @syscap SystemCapability.MultimodalAwareness.Motion
      * @systemapi
      * @stagemodelonly
      * @since 26.0.0 dynamic&static
      */
    logicalOrientation?: LogicalOrientation;
  }

  /**
   * 悬浮手矩形检测区域的基本数据结构。
   *
   * @syscap SystemCapability.MultimodalAwareness.Motion
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  export interface HoverHandDetectionArea {
    /**
     * 矩形区域的左边界，单位为px，该参数应为整数，取值范围为：[-2147483648,2147483647]。
     *
     * @syscap SystemCapability.MultimodalAwareness.Motion
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    left: int;

    /**
     * 矩形区域的上边界，单位为px，该参数应为整数，取值范围为：[-2147483648,2147483647]。
     *
     * @syscap SystemCapability.MultimodalAwareness.Motion
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    top: int;

    /**
     * 矩形区域的宽度，单位为px，该参数应为整数，取值范围为：[1,2147483647]。
     *
     * @syscap SystemCapability.MultimodalAwareness.Motion
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    width: int;

    /**
     * 矩形区域的高度，单位为px，该参数应为整数，取值范围为：[1,2147483647]。
     *
     * @syscap SystemCapability.MultimodalAwareness.Motion
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    height: int;
  }

  /**
   * 订阅触控操作手感知事件。系统通过触控屏传感器采集用户触控数据，结合手势识别算法判断当前操作手是左手还是右手。适用于手势交付、单双手操作适配等场景，
   * <br>通过识别用户的触控操作手状态优化界面布局和交互方式。建议在使用完毕后调用off()取消订阅以释放资源，避免多余的性能功耗开销。
   * <br>相关方法：off('operatingHandChanged')：取消订阅触控操作手感知事件。
   *
   * 如果设备不支持此功能，将返回801错误码。
   *
   * @permission ohos.permission.ACTIVITY_MOTION [since 15 - 19]
   * @permission ohos.permission.ACTIVITY_MOTION 或 ohos.permission.DETECT_GESTURE [since 20]
   * @param { string } type - 事件类型。固定传入'operatingHandChanged'，表示操作手状态变化。
   * @param { Callback<OperatingHandStatus> } callback - 回调函数，返回操作手状态信息。
   * @throws { BusinessError } 201 - Permission denied. An attempt was made to subscribe operatingHandChanged
   *     <br> event forbidden by permission: ohos.permission.ACTIVITY_MOTION 或 ohos.permission.DETECT_GESTURE.
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
   * 取消订阅触控操作手感知事件。若未调用on()就调用off()，该方法会抛出异常。相关方法：on('operatingHandChanged')：订阅触控操作手感知事件。
   *
   * @permission ohos.permission.ACTIVITY_MOTION [since 15 - 19]
   * @permission ohos.permission.ACTIVITY_MOTION 或 ohos.permission.DETECT_GESTURE [since 20]
   * @param { string } type - 事件类型。固定传入'operatingHandChanged'，表示操作手状态变化。
   * @param { Callback<OperatingHandStatus> } [callback] - 回调函数，返回操作手状态信息。需要取消监听的回调函数，需与订阅时传入的回调函数一致。
   *     <br>若不填，则取消当前监听该事件的所有回调函数。
   * @throws { BusinessError } 201 - Permission denied. An attempt was made to unsubscribe operatingHandChanged
   *     <br> event forbidden by permission: ohos.permission.ACTIVITY_MOTION 或 ohos.permission.DETECT_GESTURE.
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
   * 获取最新触控操作手状态。该方法直接返回最新的操作手状态，无需订阅事件即可调用。
   *
   * @permission ohos.permission.ACTIVITY_MOTION [since 15 - 19]
   * @permission ohos.permission.ACTIVITY_MOTION 或 ohos.permission.DETECT_GESTURE [since 20]
   * @returns { OperatingHandStatus } 返回触控操作手状态信息。
   * @throws { BusinessError } 201 - Permission denied. An attempt was made to get the recent operating hand
   *     <br> status forbidden by permission: ohos.permission.ACTIVITY_MOTION 或 ohos.permission.DETECT_GESTURE.
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
   * 订阅握持手状态变化感知事件。系统通过传感器数据，结合识别算法判断当前握持手是左手还是右手。适用于阅读应用、视频播放等需要根据用户握持手状态调整界面布局或功能的场景。
   * <br>建议在使用完毕后调用off()取消订阅以释放资源，避免多余的性能功耗开销。相关方法：off('holdingHandChanged')：取消订阅握持手状态变化感知事件。
   *
   * @permission ohos.permission.DETECT_GESTURE
   * @param { string } type - 事件类型，固定传入'holdingHandChanged'，表示握持手状态变化。
   * @param { Callback<HoldingHandStatus> } callback - 回调函数，返回握持手状态信息。
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
   * 取消订阅握持手状态变化感知事件。若未调用on()就调用off()，该方法会抛出异常。相关方法：on('holdingHandChanged')：订阅握持手状态变化感知事件。
   *
   * @permission ohos.permission.DETECT_GESTURE
   * @param { string } type - 事件类型，固定传入'holdingHandChanged'，表示握持手状态变化。
   * @param { Callback<HoldingHandStatus> } [callback] - 回调函数，返回握持手状态信息。需要取消监听的回调函数，需与订阅时传入的回调函数一致。
   *     <br>若不填，则取消当前监听该事件的所有回调函数。
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
   * 订阅触控操作手变化事件。
   *
   * @permission ohos.permission.ACTIVITY_MOTION 或 ohos.permission.DETECT_GESTURE
   * @param { Callback<OperatingHandStatus> } callback - 回调函数，返回操作手状态信息。
   * @throws { BusinessError } 201 - Permission denied. An attempt was made to subscribe operatingHandChanged
   *     <br> event forbidden by permission: ohos.permission.ACTIVITY_MOTION 或 ohos.permission.DETECT_GESTURE.
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
   * 取消订阅触控操作手变化事件。
   *
   * @permission ohos.permission.ACTIVITY_MOTION 或 ohos.permission.DETECT_GESTURE
   * @param { Callback<OperatingHandStatus> } [callback] - 回调函数，返回操作手状态信息。需要取消监听的回调函数，需与订阅时传入的回调函数一致。
   *     <br>若不填，则取消当前监听该事件的所有回调函数。
   * @throws { BusinessError } 201 - Permission denied. An attempt was made to unsubscribe operatingHandChanged
   *     <br> event forbidden by permission: ohos.permission.ACTIVITY_MOTION 或 ohos.permission.DETECT_GESTURE.
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
   * 订阅握持手状态变化事件。
   *
   * @permission ohos.permission.DETECT_GESTURE
   * @param { Callback<HoldingHandStatus> } callback - 回调函数，返回握持手状态信息。
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
   * 取消订阅握持手状态变化事件。
   *
   * @permission ohos.permission.DETECT_GESTURE
   * @param { Callback<HoldingHandStatus> } [callback] - 回调函数，返回握持手状态信息。需要取消监听的回调函数，需与订阅时传入的回调函数一致。
   *     <br>若不填，则取消当前监听该事件的所有回调函数。
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
   * 订阅拾起传感器事件。
   *
   * @param { Callback<PickupEvent> } callback - 回调函数，返回拾起状态。
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
   * 订阅旋转传感器事件。
   *
   * @param { Callback<RotateEvent> } callback - 回调函数，返回旋转方向。
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
   * 订阅智能旋转传感器事件。
   *
   * @param { Callback<SmartRotateEvent> } callback - 回调函数，返回智能旋转方向。
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
   * 取消订阅拾起传感器事件。
   *
   * @param { Callback<PickupEvent> } [callback] - 要注销的回调函数。若不填，则取消该拾起事件的所有回调。
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
   * 取消订阅旋转传感器事件。
   *
   * @param { Callback<RotateEvent> } [callback] - 要注销的回调函数。若不填，则取消该旋转事件的所有回调。
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
   * 取消订阅智能旋转传感器事件。
   *
   * @param { Callback<SmartRotateEvent> } [callback] - 要注销的回调函数。若不填，则取消该智能旋转事件的所有回调。
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 31500001 - Service exception. Possible causes: 1. A system error, such as null pointer,
   *     <br> container-related exception; 2. N-API invocation exception, invalid N-API status.
   * @syscap SystemCapability.MultimodalAwareness.Motion
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function offSmartRotateChange(callback?: Callback<SmartRotateEvent>): void;

  /**
   * 订阅悬停手势事件，并立即开始5秒检测。
   *
   * @param { HoverHandDetectionArea } detectionArea - 悬停手势矩形检测区域。
   *     <br> 重复调用将覆盖之前设置的检测区域。
   *     <br> 若检测区域超出屏幕边界，默认检测重叠区域。
   * @param { Callback<HoverHandAction> } callback - 回调函数，返回悬停手势动作。
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
   * 订阅悬停手势事件，并立即开始检测。
   *
   * @param { HoverHandDetectionArea } detectionArea - 悬停手势矩形检测区域。
   *     <br> 重复调用将覆盖之前设置的检测区域。
   *     <br> 若检测区域超出屏幕边界，默认检测重叠区域。
   * @param { int } duration - 检测时长。单位：秒，取值范围为[1,10]的整数。
   *     <br> 时长到期后自动结束订阅，需重新调用以重启检测。
   *     <br> 悬停手势事件为高功耗事件，建议开发者根据需要设置时长。
   * @param { Callback<HoverHandAction> } callback - 回调函数，返回悬停手势动作。
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
   * 取消订阅悬停手势事件。
   *
   * @param { Callback<HoverHandAction> } [callback] - 要注销的回调函数。若不填，则取消该悬停手势事件的所有回调。
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
}
export default motion;
