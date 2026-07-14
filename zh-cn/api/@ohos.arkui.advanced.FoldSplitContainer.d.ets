a/*
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
   * 主要区域与扩展区域之间的宽度比例。此字段在extra有效时生效。
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
   * 主要区域与次要区域之间的高度比例。
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
   * 扩展区域的位置信息。当isExtraRegionPerpendicular设置为false时，此字段生效。
   * 
   * 默认值：ExtraRegionPosition.top
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
 * > 1.在悬停状态下，设备存在避让区域，布局计算时需考虑该区域的影响。
 * > > 2.在悬停模式下，屏幕上半部分为显示区域，下半部分为操作区域。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 22]
 * @atomicservice
 * @since 12 dynamic
 */
export interface HoverModeRegionLayoutOptions {
  /**
   * 主要区域与扩展区域之间的宽度比例。此字段在extra有效时生效。
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
   * 扩展区域的位置信息，当且仅当showExtraRegion设置为true时此字段才生效。
   * 
   * 默认值：ExtraRegionPosition.top
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
   * 主要区域与次要区域之间的高度比例。
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
   * 1:1比例。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice
   * @since 12 dynamic
   */
  LAYOUT_1V1 = 1,
  /**
   * 2:3比例。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice
   * @since 12 dynamic
   */
  LAYOUT_2V3 = 0.6666666666666666,
  /**
   * 3:2比例。
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
 * 设备或应用的折叠、旋转、窗口状态信息。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 22]
 * @atomicservice
 * @since 12 dynamic
 */
export interface HoverModeStatus {
  /**
   * 设备的折叠状态。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice
   * @since 12 dynamic
   */
  foldStatus: display.FoldStatus;
  /**
   * app当前是否处于悬停态。设置为true时表示当前为悬停态，设置为false时表示当前为非悬停态。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice
   * @since 12 dynamic
   */
  isHoverMode: boolean;
  /**
   * 应用旋转角度。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice
   * @since 12 dynamic
   */
  appRotation: number;
  /**
   * 窗口模式。
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
 * onHoverStatusChange事件处理。
 *
 * @param { HoverModeStatus } status - 折叠屏进入或退出悬停模式时触发的回调函数。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 22]
 * @atomicservice
 * @since 12 dynamic
 */
export type OnHoverStatusChangeHandler = (status: HoverModeStatus) => void;
/**
 * FoldSplitContainer分栏布局，实现折叠屏二分栏、三分栏在展开态、悬停态以及折叠态的区域控制。
 * 
 * > **说明：**
 * 
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
   * 主要区域回调函数。
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
   * 次要区域回调函数。
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
   * 扩展区域回调函数，不传入的情况，没有对应区域。
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
   * 展开态布局信息。
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
   * 悬停态布局信息。
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
   * 折叠态布局信息。
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
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice
   * @since 12 dynamic
   */
  @Prop
  animationOptions?: AnimateParam | null;
  /**
   * 折叠屏进入或退出悬停模式时触发的回调函数。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice
   * @since 12 dynamic
   */
  onHoverStatusChange?: OnHoverStatusChangeHandler;
}
