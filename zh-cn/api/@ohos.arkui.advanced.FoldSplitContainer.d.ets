/*
* Copyright (C) 2024-2025 Huawei Device Co., Ltd.
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

/**
 * @file Defines FoldSplitContainer component.
 * @kit ArkUI
 */

import display from '@ohos.display';
import window from '@ohos.window';
import { Position, Size } from '@ohos.arkui.node';
import { Callback } from '@ohos.base';

/**
 * 扩展区域位置信息。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 22]
 * @atomicservice
 * @since 12 dynamic
 */
export declare enum ExtraRegionPosition {
  /**
   * 扩展区域在组件上半区域。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice
   * @since 12 dynamic
   */
  TOP = 1,
  /**
   * 扩展区域在组件下半区域。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice
   * @since 12 dynamic
   */
  BOTTOM = 2
}
/**
 * 展开态布局信息。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 22]
 * @atomicservice
 * @since 12 dynamic
 */
export interface ExpandedRegionLayoutOptions {
  /**
   * 主要区域宽度与扩展区域宽度的比值。取值可使用PresetSplitRatio预设值或自定义数值，取值范围为(0, +∞)，传入小于等于0的值时使用默认值。此字段在extra有效时生效。
   * 
   * 默认值：[PresetSplitRatio]{@link PresetSplitRatio}.LAYOUT_3V2
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice
   * @since 12 dynamic
   */
  horizontalSplitRatio?: number;
  /**
   * 主要区域高度与次要区域高度的比值。取值可使用PresetSplitRatio预设值或自定义数值，取值范围为(0, +∞)，传入小于等于0的值时使用默认值。例如：取值为1.5时，表示主要区域高度是次要区域高度的1.5倍（即3:2比例
   * ）。
   * 
   * 默认值：[PresetSplitRatio]{@link PresetSplitRatio}.LAYOUT_1V1
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice
   * @since 12 dynamic
   */
  verticalSplitRatio?: number;
  /**
   * 设置为true时，扩展区域从上到下贯穿整个组件；设置为false时，扩展区域不贯穿整个组件。此字段仅在extra有效时生效。
   * 
   * 默认值：true
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice
   * @since 12 dynamic
   */
  isExtraRegionPerpendicular?: boolean;
  /**
   * 扩展区域的位置信息，可选值为TOP（上半区域）或BOTTOM（下半区域）。当isExtraRegionPerpendicular设置为false且extra有效时此字段生效。
   * 
   * 默认值：`ExtraRegionPosition.TOP`
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice
   * @since 12 dynamic
   */
  extraRegionPosition?: ExtraRegionPosition;
}
/**
 * 悬停态布局信息。
 * 
 * > **说明：**
 * >
 * > 1. 在悬停状态下，设备存在避让区域（折痕附近的区域，该区域内容可能不可见或受限），布局计算时需考虑该区域的影响。
 * >
 * > 2. 在悬停模式下，屏幕上半部分为显示区域，下半部分为操作区域。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 22]
 * @atomicservice
 * @since 12 dynamic
 */
export interface HoverModeRegionLayoutOptions {
  /**
   * 主要区域宽度与扩展区域宽度的比值。取值可使用PresetSplitRatio预设值或自定义数值，取值范围为(0, +∞)，传入小于等于0的值时使用默认值。此字段在extra有效且showExtraRegion设置为true时生效。
   * extra有效是指FoldSplitContainer组件传入了extra参数。
   * 
   * 默认值：[PresetSplitRatio]{@link PresetSplitRatio}.LAYOUT_3V2
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice
   * @since 12 dynamic
   */
  horizontalSplitRatio?: number;
  /**
   * 可折叠屏幕在半折叠状态下是否显示扩展区域。设置为true时表示显示扩展区域，设置为false时表示不显示扩展区域。
   * 
   * 默认值：false
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice
   * @since 12 dynamic
   */
  showExtraRegion?: boolean;
  /**
   * 扩展区域的位置信息，可选值为TOP（上半区域）或BOTTOM（下半区域）。此字段在extra有效且showExtraRegion设置为true时生效。extra有效是指FoldSplitContainer组件传入了extra参数。
   * 
   * 默认值：`ExtraRegionPosition.TOP`
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice
   * @since 12 dynamic
   */
  extraRegionPosition?: ExtraRegionPosition;
}
/**
 * 折叠态布局信息。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 22]
 * @atomicservice
 * @since 12 dynamic
 */
export interface FoldedRegionLayoutOptions {
  /**
   * 主要区域高度与次要区域高度的比值。取值可使用PresetSplitRatio预设值或自定义数值，取值范围为(0, +∞)，传入小于等于0的值时使用默认值。此字段仅在折叠态布局下生效。例如：取值为1.5时，表示主要区域高度是次要区域
   * 高度的1.5倍（即3:2比例）。
   * 
   * 默认值：[PresetSplitRatio]{@link PresetSplitRatio}.LAYOUT_1V1
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice
   * @since 12 dynamic
   */
  verticalSplitRatio?: number;
}
/**
 * 区域比例。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 22]
 * @atomicservice
 * @since 12 dynamic
 */
export declare enum PresetSplitRatio {
  /**
   * 1:1比例，表示主要区域与次要区域尺寸相等。用于verticalSplitRatio时表示上下区域高度比为1:1，用于horizontalSplitRatio时表示左右区域宽度比为1:1。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice
   * @since 12 dynamic
   */
  LAYOUT_1V1 = 1,
  /**
   * 2:3比例，主要区域尺寸是次要区域的约0.667倍（2/3），即主要区域占2/5，次要区域占3/5。用于verticalSplitRatio时表示上下高度比为2:3，用于horizontalSplitRatio时表示左右宽度比为2
   * :3。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice
   * @since 12 dynamic
   */
  LAYOUT_2V3 = 0.6666666666666666,
  /**
   * 3:2比例，表示主要区域尺寸是次要区域的1.5倍，即主要区域占3/5，次要区域占2/5。用于verticalSplitRatio时表示上下高度比为3:2，用于horizontalSplitRatio时表示左右宽度比为3:2。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice
   * @since 12 dynamic
   */
  LAYOUT_3V2 = 1.5
}
/**
 * 设备或应用的折叠、悬停、旋转、窗口状态信息。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 22]
 * @atomicservice
 * @since 12 dynamic
 */
export interface HoverModeStatus {
  /**
   * 设备的折叠状态，包括展开、半折叠、完全折叠等状态。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice
   * @since 12 dynamic
   */
  foldStatus: display.FoldStatus;
  /**
   * 应用当前是否处于悬停态。值为true时表示当前为悬停态，值为false时表示当前为非悬停态。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice
   * @since 12 dynamic
   */
  isHoverMode: boolean;
  /**
   * 应用旋转角度，单位为度（degree）。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice
   * @since 12 dynamic
   */
  appRotation: number;
  /**
   * 窗口模式，包括全屏、分屏、自由窗口等模式。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice
   * @since 12 dynamic
   */
  windowStatusType: window.WindowStatusType;
}
/**
 * 悬停状态变化事件处理器。
 *
 * @param { HoverModeStatus } status - 折叠屏进入或退出悬停模式时的状态信息。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 22]
 * @atomicservice
 * @since 12 dynamic
 */
export type OnHoverStatusChangeHandler = (status: HoverModeStatus) => void;
/**
 * FoldSplitContainer分栏布局，实现折叠屏二分栏、三分栏在展开态（设备完全展开状态）、悬停态（设备半折叠状态）以及折叠态（设备完全折叠状态）的区域控制。适用于折叠屏应用的响应式布局适配场景，可帮助开发者实现多屏状态下的智
 * 能分栏布局，提升用户体验。折叠状态详情可参考[display.FoldStatus]{@link @ohos.display:display.FoldStatus}。
 * 
 * > **说明：**
 * >
 * > - 该组件从API version 12开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。
 * >
 * > - 窗口宽度小于等于600vp时默认使用二分栏，窗口宽度大于600vp时在上下分栏的同时可支持扩展区域，窗口宽度大于600vp且在横屏半折状态下可触发悬停态布局。悬停态布局时会增加折痕区的避让并且扩展区域不可以贯穿折痕区，悬停态可
 * > 设置不展示扩展区域，详情请参考[示例](docroot://reference/apis-arkui/arkui-ts/ohos-arkui-advanced-FoldSplitContainer.md#示例)。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 22]
 * @atomicservice
 * @since 12 dynamic
 */
@Component
export declare struct FoldSplitContainer {
  /**
   * 主要区域回调函数，用于构建主要区域的UI内容。回调函数无参数无返回值，在组件布局时被调用。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice
   * @since 12 dynamic
   */
  @BuilderParam
  primary: Callback<void>;
  /**
   * 次要区域回调函数，用于构建次要区域的UI内容。回调函数无参数无返回值，在组件布局时被调用。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice
   * @since 12 dynamic
   */
  @BuilderParam
  secondary: Callback<void>;
  /**
   * 扩展区域回调函数，用于构建扩展区域的UI内容。当需要实现三分栏布局或需要显示额外内容区域时传入此参数，不需要扩展区域时可省略此参数。回调函数无参数无返回值，不传入时没有对应区域。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice
   * @since 12 dynamic
   */
  @BuilderParam
  extra?: Callback<void>;
  /**
   * 展开态布局信息，用于控制折叠屏展开状态下扩展区域是否贯穿、区域比例和位置等。窗口宽度大于600vp时可支持扩展区域。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice
   * @since 12 dynamic
   */
  @Prop
  expandedLayoutOptions: ExpandedRegionLayoutOptions;
  /**
   * 悬停态布局信息，用于控制折叠屏半折悬停状态下是否显示扩展区域、区域比例和位置等。窗口宽度大于600vp且在横屏半折状态下可触发悬停态布局。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice
   * @since 12 dynamic
   */
  @Prop
  hoverModeLayoutOptions: HoverModeRegionLayoutOptions;
  /**
   * 折叠态布局信息，用于控制折叠屏折叠状态下的主要区域与次要区域的高度比例等。当设备处于折叠状态时生效，窗口宽度小于等于600vp时默认使用二分栏。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice
   * @since 12 dynamic
   */
  @Prop
  foldedLayoutOptions: FoldedRegionLayoutOptions;
  /**
   * 设置动画效果相关的参数，null表示关闭动效。
   * 
   * 默认值：null
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice
   * @since 12 dynamic
   */
  @Prop
  animationOptions?: AnimateParam | null;
  /**
   * 折叠屏进入或退出悬停模式时触发的回调函数。不传入时，不回调悬停状态变化。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice
   * @since 12 dynamic
   */
  onHoverStatusChange?: OnHoverStatusChangeHandler;
}