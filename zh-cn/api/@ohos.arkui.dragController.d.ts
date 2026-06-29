/*
 * Copyright (c) 2023 Huawei Device Co., Ltd.
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
 * @kit ArkUI
 */

import type { AsyncCallback, BusinessError, Callback } from './@ohos.base';
import type unifiedDataChannel from './@ohos.data.unifiedDataChannel';

/**
 * 本模块提供发起主动拖拽的能力，当应用接收到触摸或长按等事件时可以主动发起拖拽的动作，并在其中携带拖拽信息。
 * 
 * > **说明：**
 * >
 * > - 本模块功能依赖UI的执行上下文，不可在[UI上下文不明确](docroot://ui/arkts-global-interface.md#ui上下文不明确)的地方使用，参见
 * > [UIContext]{@link @ohos.arkui.UIContext}说明。
 * >
 * > - 示例效果请以真机运行为准，当前 DevEco Studio预览器不支持。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 18]
 * @atomicservice [since 12]
 * @since 10 dynamic
 */
declare namespace dragController {

  /**
   * 拖拽开始和结束状态。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 18]
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  const enum DragStatus {

    /**
     * 拖拽已成功发起。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform [since 18]
     * @atomicservice [since 12]
     * @since 11 dynamic
     */
    STARTED = 0,

    /**
     * 拖拽结束。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform [since 18]
     * @atomicservice [since 12]
     * @since 11 dynamic
     */
    ENDED = 1
  }

  /**
   * 拖拽过程中监听到status改变时上报的数据。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 18]
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  interface DragAndDropInfo {

    /**
     * 当前拖拽状态（启动和结束）。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform [since 18]
     * @atomicservice [since 12]
     * @since 11 dynamic
     */
    status: DragStatus;

    /**
     * 当前状态所对应的拖拽事件。通过dragController发起的dragEvent仅支持获取result和behavior，且用于拖拽结束状态。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform [since 18]
     * @atomicservice [since 12]
     * @since 11 dynamic
     */
    event: DragEvent;

    /**
     * 设置拖拽事件额外信息，具体功能暂未实现。默认值为空。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform [since 18]
     * @atomicservice [since 12]
     * @since 11 dynamic
     */
    extraParams?: string;
  }

  /**
   * 监听状态改变，启动拖拽服务的对象。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 18]
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  interface DragAction {

    /**
     * 启动拖拽服务。使用Promise异步回调。
     *
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 100001 - Internal handling failed.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform [since 18]
     * @atomicservice [since 12]
     * @since 11 dynamic
     */
    startDrag(): Promise<void>;

    /**
     * 注册监听拖拽状态改变事件。
     *
     * @param { 'statusChange' } type for status changing
     * @param { Callback<DragAndDropInfo> } callback with drag event and status information
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform [since 18]
     * @atomicservice [since 12]
     * @since 11 dynamic
     */
    on(type: 'statusChange', callback: Callback<DragAndDropInfo>): void;

    /**
     * 取消注册监听拖拽状态改变事件。
     *
     * @param { 'statusChange' } type for status changing
     * @param { Callback<DragAndDropInfo> } callback with drag event and status information
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform [since 18]
     * @atomicservice [since 12]
     * @since 11 dynamic
     */
    off(type: 'statusChange', callback?: Callback<DragAndDropInfo>): void;
  }

  /**
   * 发起拖拽所需要的属性和拖拽时携带的信息。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 18]
   * @atomicservice [since 12]
   * @since 10 dynamic
   */
  interface DragInfo {

    /**
     * 设置启动拖拽时屏幕上触摸点的Id。取值范围为[0, 9]的整数。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform [since 18]
     * @atomicservice [since 12]
     * @since 10 dynamic
     */
    pointerId: number;

    /**
     * 设置拖拽过程中携带的数据。 
     * 
     * 默认值：空
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform [since 18]
     * @atomicservice [since 12]
     * @since 10 dynamic
     */
    data?: unifiedDataChannel.UnifiedData;

    /**
     * 设置拖拽事件额外信息，具体功能暂未实现。
     * 
     * 默认值：空
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform [since 18]
     * @atomicservice [since 12]
     * @since 10 dynamic
     */
    extraParams?: string;

    /**
     * 配置跟手点坐标。不配置时，左右居中，顶部向下偏移20%。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform [since 18]
     * @atomicservice [since 12]
     * @since 11 dynamic
     */
    touchPoint?: TouchPoint;

    /**
     * 设置拖拽过程中背板图处理模式及数量角标的显示。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform [since 18]
     * @atomicservice [since 12]
     * @since 11 dynamic
     */
    previewOptions?: DragPreviewOptions;

    /**
     * 设置在主动拖拽过程中由系统自动隐藏的组件uniqueId，支持传入单个uniqueId或数组。
     * 
     * 主动拖拽成功发起后，系统会在显示拖拽预览窗口前自动隐藏目标组件。
     * 
     * 若主动拖拽源本身也需要被隐藏，需要同时传入其uniqueId。
     * 
     * 组件的uniqueId可通过[UIContext.getFrameNodeById()]{@link @ohos.arkui.UIContext:UIContext#getFrameNodeById}
     * 配合[FrameNode.getUniqueId()]{@link FrameNode:FrameNode#getUniqueId}获取。
     * 
     * 开发者需要在拖拽结束回调中按需恢复组件显示状态。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    autoHideComponentUniqueIds?: int | int[];

    /**
     * 设置拖起方延迟提供数据。调用此方法向系统提供数据加载参数，而非直接传入完整的数据对象。当用户将数据拖拽至目标应用程序并释放时，系统将使用此参数从起拖方请求实际数据。与data同时设置时，dataLoadParams生效。
     * 
     * 默认值：空
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @atomicservice
     * @since 20 dynamic
     */
    dataLoadParams?: unifiedDataChannel.DataLoadParams;
  }

  /**
   * 拖拽相关的动效参数。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 18]
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  interface AnimationOptions {

    /**
     * 动画持续时间，单位为毫秒。
     * 
     * 默认值：1000
     * 
     * **说明：**
     * 
     * - 设置小于0的值时按0处理。
     * 
     * - 设置浮点型类型的值时，向下取整。例如，设置值为1.2，按照1处理。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform [since 18]
     * @atomicservice [since 12]
     * @since 11 dynamic
     */
    duration?: number;

    /**
     * 设置动画曲线。
     * 
     * 默认值：Curve.EaseInOut
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform [since 18]
     * @atomicservice [since 12]
     * @since 11 dynamic
     */
    curve?: Curve | ICurve;
  }

  /**
   * 拖拽背板的对象，在OnDrop和OnDragEnd回调中使用不生效。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 18]
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  export class DragPreview {

    /**
     * 设置背板蒙版颜色，在OnDrop和OnDragEnd回调中使用不生效，仅支持通过 
     * [getDragPreview()]{@link @ohos.arkui.UIContext:DragController#getDragPreview}方法获取到的
     * 对象上使用。
     *
     * @param { ResourceColor } color - 背板蒙版颜色。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform [since 18]
     * @atomicservice [since 12]
     * @since 11 dynamic
     */
    setForegroundColor(color: ResourceColor): void;

    /**
     * 设置背板蒙版颜色变化动效，在OnDrop和OnDragEnd回调中使用不生效，仅支持通过 
     * [getDragPreview()]{@link @ohos.arkui.UIContext:DragController#getDragPreview}方法获取到的
     * 对象上使用。
     *
     * @param { AnimationOptions } options - 动效参数。
     * @param { function } handler - 用于修改背板蒙版颜色等属性的回调方法。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform [since 18]
     * @atomicservice [since 12]
     * @since 11 dynamic
     */
    animate(options: AnimationOptions, handler: () =>void): void;
  }

  /**
   * 拖拽结束返回结果的回调。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamic
   */
  interface DragEventParam {

    /**
     * 拖拽事件信息，仅包括拖拽结果。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform [since 18]
     * @atomicservice [since 12]
     * @since 10 dynamic
     */
    event: DragEvent;

    /**
     * 设置拖拽事件额外信息，具体功能暂未实现。
     * 
     * 默认值：空
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform [since 18]
     * @atomicservice [since 12]
     * @since 10 dynamic
     */
    extraParams: string;
  }

  /**
   * Execute a drag event.
   * @param { CustomBuilder | DragItemInfo } custom - Object used for prompts displayed when the object is dragged.
   * @param { DragInfo } dragInfo - Information about the drag event.
   * @param { AsyncCallback<{ event: DragEvent, extraParams: string }> } callback - Callback function. If the operation
   *     is successful, **err** is **undefined** and **data** is the **DragEventParam** object obtained. Otherwise,
   *     **err** is an error object. [since 10 - 11]
   * @param { AsyncCallback<DragEventParam> } callback - Callback that contains the drag event information.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Internal handling failed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 18]
   * @atomicservice [since 12]
   * @since 10 dynamiconly
   * @deprecated since 18
   * @useinstead ohos.arkui.UIContext.DragController#executeDrag
   */
  function executeDrag(custom: CustomBuilder | DragItemInfo, dragInfo: DragInfo,
    callback: AsyncCallback<DragEventParam>): void;

  /**
   * 主动发起拖拽能力，传入拖拽发起后跟手效果所拖拽的对象以及携带拖拽信息。使用Promise异步回调。
   * 
   * > **说明：**
   * >
   * > 从API version 11开始，可以通过使用[UIContext]{@link @ohos.arkui.UIContext}中的
   * > [getDragController]{@link @ohos.arkui.UIContext:UIContext#getDragController}方法获取当前UI
   * > 上下文关联的[DragController]{@link @ohos.arkui.UIContext:DragController}对象。
   *
   * @param { CustomBuilder | DragItemInfo } custom - 拖拽发起后跟手效果所拖拽的对象。
   * @param { DragInfo } dragInfo - 拖拽信息。
   * @returns { Promise<{ event: DragEvent, extraParams: string }> } Promise used to return the result. [since 10 - 11]
   * @returns { Promise<DragEventParam> } A Promise with the drag event information. [since 12]
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Internal handling failed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 18]
   * @atomicservice [since 12]
   * @since 10 dynamiconly
   * @deprecated since 18
   * @useinstead ohos.arkui.UIContext.DragController#executeDrag
   */
  function executeDrag(custom: CustomBuilder | DragItemInfo, dragInfo: DragInfo): Promise<DragEventParam>;

  /**
   * 创建拖拽的Action对象，需要显式指定拖拽背板图（可多个），以及拖拽的数据，跟手点等信息；当通过一个已创建的 Action 对象发起的拖拽未结束时，无法再次创建新的 Action 对象，接口会抛出异常；
   * 当Action对象的生命周期结束后，注册在该对象上的回调函数会失效，因此需要在一个尽量长的作用域下持有该对象，并在每次发起拖拽前通过createDragAction返回新的对象覆盖旧值。
   * 
   * > **说明：**
   * >
   * > - 从API version 11开始，可以通过使用[UIContext]{@link @ohos.arkui.UIContext}中的
   * > [getDragController]{@link @ohos.arkui.UIContext:UIContext#getDragController}方法获取当前UI
   * > 上下文关联的[DragController]{@link @ohos.arkui.UIContext:DragController}对象。
   * >
   * > - 建议控制传递的拖拽背板数量，传递过多容易导致拖起的效率问题。
   *
   * @param { Array<CustomBuilder | DragItemInfo> } customArray - 拖拽发起后跟手效果所拖拽的对象。
   * @param { DragInfo } dragInfo - 拖拽信息。
   * @returns { DragAction } 创建拖拽Action对象，主要用于后面实现注册监听拖拽状态改变事件和启动拖拽服务。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Internal handling failed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 18]
   * @atomicservice [since 12]
   * @since 11 dynamiconly
   * @deprecated since 18
   * @useinstead ohos.arkui.UIContext.DragController#createDragAction
   */
  function createDragAction(customArray: Array<CustomBuilder | DragItemInfo>, dragInfo: DragInfo): DragAction;

  /**
   * 返回一个代表拖拽背板的对象。
   * 
   * > **说明：**
   * >
   * > 从API version 11开始，可以通过使用[UIContext]{@link @ohos.arkui.UIContext}中的
   * > [getDragController]{@link @ohos.arkui.UIContext:UIContext#getDragController}方法获取当前UI
   * > 上下文关联的[DragController]{@link @ohos.arkui.UIContext:DragController}对象。
   *
   * @returns { DragPreview } 一个代表拖拽背板的对象，提供背板样式设置的接口，在OnDrop和OnDragEnd回调中使用不生效。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 18]
   * @atomicservice [since 12]
   * @since 11 dynamiconly
   * @deprecated since 18
   * @useinstead ohos.arkui.UIContext.DragController#getDragPreview
   */
  function getDragPreview(): DragPreview;

  /**
   * 定义应用是否可以发起拖拽的枚举类型。仅在[onDragStart]{@link CommonMethod#onDragStart}调用时有效。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 18 dynamic
   */
  const enum DragStartRequestStatus {

    /**
     * 应用在准备数据阶段，无法发起拖拽。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @atomicservice
     * @since 18 dynamic
     */
    WAITING = 0,

    /**
     * 应用数据准备完成，可以发起拖拽。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @atomicservice
     * @since 18 dynamic
     */
    READY = 1
  }

  /**
   * 定义拖拽的悬停检测状态的枚举类型。
   * 默认系统配置下，如果没有触发CANCEL，状态报告如下：
   * 保持Hover-->500ms-->BEGIN-->100ms-->UPDATE-->100ms-->UPDATE-->100ms-->UPDATE-->100ms-->END
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  const enum DragSpringLoadingState {

    /**
     * 拖拽进入组件范围静止一段时间，被识别为悬停状态。此时允许进行一些悬停检测的准备操作。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 20 dynamic
     */
    BEGIN = 0,

    /**
     * Already in the spring loading state. The system periodically checks the user's hover status.
     * If the user remains stationary, it triggers an UPDATE state notification at regular intervals.
     * This state allows for UI effect refreshes to emphasize the hover state.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 20 dynamic
     */
    UPDATE = 1,

    /**
     * The entire spring loading state ends. The application can perform cleanup operations
     * and execute navigation or view switching actions when this state occurs.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 20 dynamic
     */
    END = 2,

    /**
     * After entering the BEGIN state, if the user moves out of the component range, exceeds the displacement
     * threshold, lifts the finger, or switches windows (pull out), the CANCEL state is triggered.
     * The application should restore the UI style and cancel any pending navigation or view switching actions.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 20 dynamic
     */
    CANCEL = 3
  }

  /**
   * 定义拖拽的悬停检测配置参数的接口。默认的配置参数通常已能满足需求。可以通过在绑定[onDragSpringLoading]{@link CommonMethod#onDragSpringLoading}时指定配置，或者通过在
   * BEGIN状态期间使用[updateConfiguration]{@link dragController.SpringLoadingContext#updateConfiguration}方法动态修改的方式以自定义该配置参数。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  interface DragSpringLoadingConfiguration {

    /**
     * 进入悬停检测BEGIN状态所需保持静止的时间，单位：ms。取值范围为[0, 2<sup>31</sup>-1]的整数。输入浮点数时只取整数部分。输入非法值（负数、null、undefined、NaN）时取默认值500。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 20 dynamic
     */
    stillTimeLimit?: number;

    /**
     * 进入悬停检测UPDATE状态后，更新通知的时间间隔，单位：ms。取值范围为[0, 2<sup>31</sup>-1]的整数。输入浮点数时只取整数部分。输入非法值（负数、null、undefined、NaN）时取默认值100。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 20 dynamic
     */
    updateInterval?: number;

    /**
     * 进入悬停检测UPDATE状态后，更新通知的最大次数。取值范围为[0, 2<sup>31</sup>-1]的整数。输入浮点数时只取整数部分。输入非法值（负数、null、undefined、NaN）时取默认值3。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 20 dynamic
     */
    updateNotifyCount?: number;

    /**
     * 从UPDATE状态到END状态的最长等待时间，单位：ms。取值范围为[0, 2<sup>31</sup>-1]的整数。输入浮点数时只取整数部分。输入非法值（负数、null、undefined、NaN）时取默认值100。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 20 dynamic
     */
    updateToFinishInterval?: number;
  }

  /**
   * 定义触发悬停检测时拖拽事件信息的接口。该接口提供了拖拽数据摘要和拖拽事件额外信息，应用程序可以据此决定是否响应悬停检测回调。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  interface SpringLoadingDragInfos {

    /**
     * 拖拽数据的摘要，默认为null。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 20 dynamic
     */
    dataSummary?: unifiedDataChannel.Summary;

    /**
     * 拖拽事件额外信息，默认为空字符串。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 20 dynamic
     */
    extraInfos?: string;
  }

  /**
   * 定义回调上下文信息的类，用于在悬停检测回调中传递给应用程序，使其能访问拖拽状态、动态刷新UI效果以及访问拖拽数据以确定是否处理拖拽操作。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 20 dynamic
   */
  class SpringLoadingContext {

    /**
     * 当前悬停检测的状态。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 20 dynamic
     */
    state: DragSpringLoadingState;

    /**
     * 在一次悬停检测流转中的回调通知次数，从0开始。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 20 dynamic
     */
    currentNotifySequence: number;

    /**
     * 拖拽信息，当悬停检测状态为CANCEL时缺失，为undefined时取[SpringLoadingDragInfos]{@link dragController.SpringLoadingDragInfos}默认值。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 20 dynamic
     */
    dragInfos?: SpringLoadingDragInfos;

    /**
     * 当前回调中的配置信息，当悬停检测状态为CANCEL时缺失，为undefined时取
     * [DragSpringLoadingConfiguration]{@link dragController.DragSpringLoadingConfiguration}默认值。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 20 dynamic
     */
    currentConfig?: DragSpringLoadingConfiguration;

    /**
     * 终止后续的悬停检测。本方法不会触发CANCEL状态通知，应用程序需要在执行本方法时进行状态清理。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 20 dynamic
     */
    abort(): void;

    /**
     * 更新悬停检测的配置，仅在悬停检测状态为BEGIN时生效。应用程序通常在绑定[onDragSpringLoading]{@link CommonMethod#onDragSpringLoading}时设置悬停检测配置或使用默认配
     * 置。该方法不会修改绑定时的原始配置，而是在后续悬停检测中更新动态的配置信息。请谨慎使用本方法，因为不同的拖拽数据类型可能需要不同的UX时间。
     *
     * @param { DragSpringLoadingConfiguration } config - 悬停检测配置。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 20 dynamic
     */
    updateConfiguration(config: DragSpringLoadingConfiguration): void;
  }
}

export default dragController;