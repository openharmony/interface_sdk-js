'use static';

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
 * @kit ArkUI
 * @arkts 1.2
 */

import display from '@ohos.display';
import window from '@ohos.window';
import { PropRef } from './arkui/stateManagement/decorator';
import { Component } from './arkui/component/customComponent';
import { BuilderParam, Builder } from './arkui/component/builder';
import { AnimateParam } from './arkui/component/common';

/**
 * RegionBuilder类型。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 staticonly
 */
@Builder
type RegionBuilder = () => void;

/**
 * 扩展区域位置信息。
 *
 * @enum { int }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export declare enum ExtraRegionPosition {
    /**
     * 扩展区域在组件上半区域。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    TOP = 1,
    /**
     * 扩展区域在组件下半区域。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    BOTTOM = 2
}
/**
 * 展开态布局信息。
 *
 * @interface ExpandedRegionLayoutOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export interface ExpandedRegionLayoutOptions {
    /**
     * 主要区域与扩展区域之间的宽度比例。此字段在extra有效时生效。
     *
     * @type { ?PresetSplitRatio }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    horizontalSplitRatio?: PresetSplitRatio;
    /**
     * 主要区域与次要区域之间的高度比例。
     *
     * @type { ?PresetSplitRatio }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    verticalSplitRatio?: PresetSplitRatio;
    /**
     * 设置为true时，扩展区域从上到下贯穿整个组件；设置为false时，扩展区域不贯穿整个组件。
     * 此字段仅在extra有效时生效。
     *
     * @type { ?boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    isExtraRegionPerpendicular?: boolean;
    /**
     * 扩展区域的位置信息。当isExtraRegionPerpendicular设置为false时，此字段生效。
     *
     * @type { ?ExtraRegionPosition }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    extraRegionPosition?: ExtraRegionPosition;
}
/**
 * 悬停态布局信息。
 *
 * @typedef HoverModeRegionLayoutOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export interface HoverModeRegionLayoutOptions {
    /**
     * 主要区域与扩展区域之间的宽度比例，当且仅当extra有效时此字段才生效。
     *
     * @type { ?PresetSplitRatio }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    horizontalSplitRatio?: PresetSplitRatio;
    /**
     * 可折叠屏幕在半折叠状态下是否显示扩展区域。设置为true时表示显示扩展区域，
     * 设置为false时表示不显示扩展区域。
     *
     * @type { ?boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    showExtraRegion?: boolean;
    /**
     * 扩展区域的位置信息，当且仅当showExtraRegion设置为true时此字段才生效。
     *
     * @type { ?ExtraRegionPosition }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    extraRegionPosition?: ExtraRegionPosition;
}
/**
 * 折叠态布局信息。
 *
 * @interface FoldedRegionLayoutOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export interface FoldedRegionLayoutOptions {
    /**
     * 主要区域与次要区域之间的高度比例。
     *
     * @type { ?PresetSplitRatio }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    verticalSplitRatio?: PresetSplitRatio;
}
/**
 * 区域比例。
 *
 * @enum { double }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum PresetSplitRatio {
  /**
   * 1:1比例。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  LAYOUT_1V1 = 1.0,
  /**
   * 2:3比例。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  LAYOUT_2V3 = 0.6666666666666666,
  /**
   * 3:2比例。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  LAYOUT_3V2 = 1.5,
}
/**
 * 设备或应用的折叠、旋转、窗口状态信息。
 *
 * @interface HoverModeStatus
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export interface HoverModeStatus {
    /**
     * 设备的折叠状态。
     *
     * @type { display.FoldStatus }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    foldStatus: display.FoldStatus;
    /**
     * app当前是否处于悬停态。设置为true时表示当前为悬停态，
     * 设置为false时表示当前为非悬停态。
     *
     * @type { boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    isHoverMode: boolean;
    /**
     * 应用旋转角度。
     *
     * @type { double }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    appRotation: double;
    /**
     * 窗口模式。
     *
     * @type { window.WindowStatusType }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    windowStatusType: window.WindowStatusType;
}
/**
 * onHoverStatusChange事件处理。
 *
 * @typedef { function } OnHoverStatusChangeHandler
 * @param { HoverModeStatus } status - 折叠屏进入或退出悬停模式时触发的回调函数。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export type OnHoverStatusChangeHandler = (status: HoverModeStatus) => void;
/**
 * 实现折叠屏二分栏、三分栏在展开态、悬停态以及折叠态的区域控制的分栏布局。
 *
 * @interface FoldSplitContainer
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
@Component
export declare struct FoldSplitContainer {
    /**
     * 主要区域回调函数。
     *
     * @type { RegionBuilder }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    @BuilderParam
    primary: RegionBuilder;
    /**
     * 次要区域回调函数。
     *
     * @type { RegionBuilder }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    @BuilderParam
    secondary: RegionBuilder;
    /**
     * 扩展区域回调函数，不传入的情况，没有对应区域。
     *
     * @type { ?RegionBuilder }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    @BuilderParam
    extra?: RegionBuilder;
    /**
     * 展开态布局信息。
     *
     * @type { ExpandedRegionLayoutOptions }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    @PropRef
    expandedLayoutOptions: ExpandedRegionLayoutOptions;
    /**
     * 悬停态布局信息。
     *
     * @type { HoverModeRegionLayoutOptions }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    @PropRef
    hoverModeLayoutOptions: HoverModeRegionLayoutOptions;
    /**
     * 折叠态布局信息。
     *
     * @type { FoldedRegionLayoutOptions }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    @PropRef
    foldedLayoutOptions: FoldedRegionLayoutOptions;
    /**
     * 设置动画效果相关的参数。
     *
     * @type { ?AnimateParam }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    @PropRef
    animationOptions?: AnimateParam;
    /**
     * 折叠屏进入或退出悬停模式时触发的回调函数。
     *
     * @type { ?OnHoverStatusChangeHandler }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    onHoverStatusChange?: OnHoverStatusChangeHandler;
	/**
     * 构造组件的方法。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 staticonly
     */
    @Builder
    build(): void;
}
