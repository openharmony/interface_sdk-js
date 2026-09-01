/*
 * Copyright (c) 2024 Huawei Device Co., Ltd.
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

/**
 * ArcScrollBar的构造函数参数。
 *
 * > **说明：**
 * >
 * > ArcScrollBar与可滚动组件需通过scroller进行绑定后方能实现联动，且ArcScrollBar与可滚动组件仅限于一对一的绑定方式。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
declare interface ArcScrollBarOptions {

  /**
   * 可滚动组件的控制器，用于与可滚动组件进行绑定。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  scroller: Scroller;

  /**
   * 滚动条状态。<br/>默认值：BarState.Auto
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  state?: BarState;
}

/**
 * 弧形滚动条组件ArcScrollBar，适用于圆形屏幕等需要弧形滚动条的场景，用于配合可滚动组件使用，如[ArcList]{@link @ohos.arkui.ArcList}、
 * [List]{@link ./@internal/component/ets/list}、[Grid]{@link ./@internal/component/ets/grid}、
 * [Scroll]{@link ./@internal/component/ets/scroll}、[WaterFlow]{@link ./@internal/component/ets/water_flow}。
 *
 * > **说明：**
 * >
 * > - 未设置宽高时，ArcScrollBar采用父组件[LayoutConstraint]{@link ./arkui/FrameNode:LayoutConstraint}中的maxSize作为尺寸。若父组件存在可滚动组件，如
 * > [ArcList]{@link @ohos.arkui.ArcList}、[List]{@link ./@internal/component/ets/list}、
 * > [Grid]{@link ./@internal/component/ets/grid}、[Scroll]{@link ./@internal/component/ets/scroll}、
 * > [WaterFlow]{@link ./@internal/component/ets/water_flow}，建议设置ArcScrollBar宽高，否则尺寸可能为无穷大。
 * >
 * > - 该组件支持在Phone、PC/2in1、Tablet、TV、Wearable设备上使用。API version 22及以前版本，在Phone、PC/2in1、Tablet、TV上使用会编译告警，但可以正常运行。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 * @noninterop
 */
export interface ArcScrollBarInterface {

  /**
   * ArcScrollBar的构造函数。
   *
   * @param { ArcScrollBarOptions } options - ArcScrollBar的配置参数，用于指定绑定的可滚动组件控制器和滚动条状态。
   * @returns { ArcScrollBarAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  (options: ArcScrollBarOptions): ArcScrollBarAttribute;
}

/**
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 * @noninterop
 */
export declare class ArcScrollBarAttribute extends CommonMethod<ArcScrollBarAttribute> {}

/**
 * 定义ArcScrollBar组件实例。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 * @noninterop
 */
export declare const ArcScrollBarInstance: ArcScrollBarAttribute;

/**
 * 弧形滚动条组件ArcScrollBar，适用于圆形屏幕等需要弧形滚动条的场景，用于配合可滚动组件使用，如[ArcList]{@link @ohos.arkui.ArcList}、
 * [List]{@link ./@internal/component/ets/list}、[Grid]{@link ./@internal/component/ets/grid}、
 * [Scroll]{@link ./@internal/component/ets/scroll}、[WaterFlow]{@link ./@internal/component/ets/water_flow}。
 *
 * > **说明：**
 * >
 * > - 未设置宽高时，ArcScrollBar采用父组件[LayoutConstraint]{@link ./arkui/FrameNode:LayoutConstraint}中的maxSize作为尺寸。若父组件存在可滚动组件，如
 * > [ArcList]{@link @ohos.arkui.ArcList}、[List]{@link ./@internal/component/ets/list}、
 * > [Grid]{@link ./@internal/component/ets/grid}、[Scroll]{@link ./@internal/component/ets/scroll}、
 * > [WaterFlow]{@link ./@internal/component/ets/water_flow}，建议设置ArcScrollBar宽高，否则尺寸可能为无穷大。
 * >
 * > - 该组件支持在Phone、PC/2in1、Tablet、TV、Wearable设备上使用。API version 22及以前版本，在Phone、PC/2in1、Tablet、TV上使用会编译告警，但可以正常运行。
 *
 * ###### 子组件
 *
 * 不包含子组件。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @crossplatform
 * @atomicservice
 * @uicomponent
 * @since 18 dynamic
 * @noninterop
 */
export declare const ArcScrollBar: ArcScrollBarInterface;