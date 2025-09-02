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
import { Position, Size } from '@ohos.arkui.node';
import { Callback } from '@ohos.base';

/**
 * Position enum of the extra region
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 * @noninterop
 */
export declare enum ExtraRegionPosition {
    /**
     * The extra region position is in the top.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    TOP = 1,
    /**
     * The extra region position is in the bottom.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    BOTTOM = 2
}
/**
 * The layout options for the container when the foldable screen is expanded.
 *
 * @interface ExpandedRegionLayoutOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 * @noninterop
 */
export interface ExpandedRegionLayoutOptions {
    /**
     * The ratio of the widths of two areas in the horizontal direction.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    horizontalSplitRatio?: number;
    /**
     * The ratio of the heights of two areas in the vertical direction.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    verticalSplitRatio?: number;
    /**
     * Does the extended area span from top to bottom within the container?
     *
     * @type { ?boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    isExtraRegionPerpendicular?: boolean;
    /**
     * Specify the position of the extra area when the extra area does not vertically span the container.
     *
     * @type { ?ExtraRegionPosition }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    extraRegionPosition?: ExtraRegionPosition;
}
/**
 * The layout options for the container when the foldable screen is in hover mode.
 *
 * @typedef HoverModeRegionLayoutOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 * @noninterop
 */
export interface HoverModeRegionLayoutOptions {
    /**
     * The ratio of the widths of two areas in the horizontal direction.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    horizontalSplitRatio?: number;
    /**
     * Does the foldable screen display an extra area when it's in the half-folded state?
     *
     * @type { ?boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    showExtraRegion?: boolean;
    /**
     * Specify the position of the extra area when the foldable screen is in the half-folded state.
     *
     * @type { ?ExtraRegionPosition }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    extraRegionPosition?: ExtraRegionPosition;
}
/**
 * The layout options for the container when the foldable screen is folded.
 *
 * @interface FoldedRegionLayoutOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 * @noninterop
 */
export interface FoldedRegionLayoutOptions {
    /**
     * The ratio of the heights of two areas in the vertical direction.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    verticalSplitRatio?: number;
}
/**
 * Preset split ratio.
 *
 * @interface PresetSplitRatioConstants
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 * @noninterop
 */
export interface PresetSplitRatioConstants {
  /**
   * 1:1
   *
   * @type { number }
   * @readonly
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  readonly LAYOUT_1V1: number;
  /**
   * 2:3
   *
   * @type { number }
   * @readonly
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  readonly LAYOUT_2V3: number;
  /**
   * 3:2
   *
   * @type { number }
   * @readonly
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  readonly LAYOUT_3V2: number;
}
/**
 * Defines PresetSplitRatio.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 * @noninterop
 */
export const PresetSplitRatio: PresetSplitRatioConstants;
/**
 * The status of hover mode.
 *
 * @interface HoverStatus
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 * @noninterop
 */
export interface HoverModeStatus {
    /**
     * The fold status of devices.
     *
     * @type { display.FoldStatus }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    foldStatus: display.FoldStatus;
    /**
     * Is the app currently in hover mode?
     * In hover mode, the upper half of the screen is used for display, and the lower half is used for operation.
     *
     * @type { boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    isHoverMode: boolean;
    /**
     * The angle of rotation applied.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    appRotation: number;
    /**
     * The status of window.
     *
     * @type { window.WindowStatusType }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    windowStatusType: window.WindowStatusType;
}
/**
 * The handler of onHoverStatusChange event
 *
 * @typedef { function } OnHoverStatusChangeHandler
 * @param { HoverModeStatus } status - The status of hover mode
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 * @noninterop
 */
export type OnHoverStatusChangeHandler = (status: HoverModeStatus) => void;
/**
 * Defines FoldSplitContainer container.
 *
 * @interface FoldSplitContainer
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 * @noninterop
 */
@Component
export declare struct FoldSplitContainer {
    /**
     * The builder function which will be rendered in the major region of container.
     *
     * @type { Callback<void> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    @BuilderParam
    primary: VoidCallback = () => {};
    /**
     * The builder function which will be rendered in the minor region of container.
     *
     * @type { Callback<void> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    @BuilderParam
    secondary: VoidCallback = () => {};
    /**
     * The builder function which will be rendered in the extra region of container.
     *
     * @type { ?Callback<void> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    @BuilderParam
    extra?: VoidCallback;
    /**
     * The layout options for the container when the foldable screen is expanded.
     *
     * @type { ExpandedRegionLayoutOptions }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    @PropRef
    expandedLayoutOptions: ExpandedRegionLayoutOptions;
    /**
     * The layout options for the container when the foldable screen is in hover mode.
     *
     * @type { HoverModeRegionLayoutOptions }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    @PropRef
    hoverModeLayoutOptions: HoverModeRegionLayoutOptions;
    /**
     * The layout options for the container when the foldable screen is folded.
     *
     * @type { FoldedRegionLayoutOptions }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    @PropRef
    foldedLayoutOptions: FoldedRegionLayoutOptions;
    /**
     * The animation options of layout
     *
     * @type { ?AnimateParam }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    @PropRef
    animationOptions?: AnimateParam;
    /**
     * The callback function that is triggered when the foldable screen enters or exits hover mode.
     * In hover mode, the upper half of the screen is used for display, and the lower half is used for operation.
     *
     * @type { ?OnHoverStatusChangeHandler }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    onHoverStatusChange?: OnHoverStatusChangeHandler;
}