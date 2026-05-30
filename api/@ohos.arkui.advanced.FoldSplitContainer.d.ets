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
 * Provides the position information of the extra region.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 22]
 * @atomicservice
 * @since 12 dynamic
 */
export declare enum ExtraRegionPosition {
    /**
     * The extra region is in the upper half of the component.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform [since 22]
     * @atomicservice
     * @since 12 dynamic
     */
    TOP = 1,
    /**
     * The extra region is in the lower half of the component.
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
 * Layout information for the expanded state.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 22]
 * @atomicservice
 * @since 12 dynamic
 */
export interface ExpandedRegionLayoutOptions {
    /**
     * Width ratio between the primary and extra regions. This setting takes effect only when **extra**
     * is effective.
     * The value should be an integer. Default value: {@link.PresetSplitRatio}.LAYOUT_3V2.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform [since 22]
     * @atomicservice
     * @since 12 dynamic
     */
    horizontalSplitRatio?: number;
    /**
     * Height ratio between the primary and extra regions.
     * The value range is all integers. Default value: {@link.PresetSplitRatio}.LAYOUT_1V1.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform [since 22]
     * @atomicservice
     * @since 12 dynamic
     */
    verticalSplitRatio?: number;
    /**
     * Whether the extra region extends perpendicularly through the entire component from top to bottom.
     * The value **true** means that the extra region extends perpendicularly through the entire component
     * from top to bottom, and **false** means the opposite. This setting takes effect only when **extra**
     * is effective.
     *
     * Default value: **true**.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform [since 22]
     * @atomicservice
     * @since 12 dynamic
     */
    isExtraRegionPerpendicular?: boolean;
    /**
     * Position information of the extra region. This setting takes effect only when
     * **isExtraRegionPerpendicular** is set to **false**.
     *
     * Default value: **ExtraRegionPosition.top**.
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
 * Layout information for the semi-folded state.
 *
 * > **NOTE**
 * >
 * > 1. In semi-folded state, the device contains an avoidance area, and layout calculations must account for
 * > the impact of this avoidance area on the overall layout.
 * > 2. In semi-folded mode, the upper screen is dedicated to content display, and the lower screen is
 * > reserved for interaction.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 22]
 * @atomicservice
 * @since 12 dynamic
 */
export interface HoverModeRegionLayoutOptions {
    /**
     * Width ratio between the primary and extra regions. This setting takes effect only when **extra**
     * is effective.
     * The value range is all integers. Default value: {@link.PresetSplitRatio}.LAYOUT_3V2.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform [since 22]
     * @atomicservice
     * @since 12 dynamic
     */
    horizontalSplitRatio?: number;
    /**
     * Whether to display the extra region in the half-folded state. The value **true** means to display
     * the extra region in the half-folded state, and **false** means the opposite.
     *
     * Default value: **false**.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform [since 22]
     * @atomicservice
     * @since 12 dynamic
     */
    showExtraRegion?: boolean;
    /**
     * Position information of the extra region. This setting takes effect only when **showExtraRegion**
     * is set to **true**.
     *
     * Default value: **ExtraRegionPosition.top**.
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
 * Provides the layout information of the folded state.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 22]
 * @atomicservice
 * @since 12 dynamic
 */
export interface FoldedRegionLayoutOptions {
    /**
     * Height ratio between the primary and extra regions.
     * The value range is all integers. Default value: {@link.PresetSplitRatio}.LAYOUT_1V1.
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
 * Enumerates the split ratios.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 22]
 * @atomicservice
 * @since 12 dynamic
 */
export declare enum PresetSplitRatio {
    /**
     * 1:1.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform [since 22]
     * @atomicservice
     * @since 12 dynamic
     */
    LAYOUT_1V1 = 1,
    /**
     * 2:3.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform [since 22]
     * @atomicservice
     * @since 12 dynamic
     */
    LAYOUT_2V3 = 0.6666666666666666,
    /**
     * 3:2.
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
 * Provides information about the device or application's folding, rotation, and window state.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 22]
 * @atomicservice
 * @since 12 dynamic
 */
export interface HoverModeStatus {
    /**
     * Fold status of the device.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform [since 22]
     * @atomicservice
     * @since 12 dynamic
     */
    foldStatus: display.FoldStatus;
    /**
     * Whether the application is in the hover state. The value **true** means that the application
     * is in the hover state, and **false** means the opposite.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform [since 22]
     * @atomicservice
     * @since 12 dynamic
     */
    isHoverMode: boolean;
    /**
     * Rotation angle of the application.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform [since 22]
     * @atomicservice
     * @since 12 dynamic
     */
    appRotation: number;
    /**
     * Window mode.
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
 * Implements a handler for the **onHoverStatusChange** event.
 *
 * @param { HoverModeStatus } status - Callback function triggered when the foldable device enters or exits
 *     the semi-folded state.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 22]
 * @atomicservice
 * @since 12 dynamic
 */
export type OnHoverStatusChangeHandler = (status: HoverModeStatus) => void;
/**
 * **FoldSplitContainer** is a layout container designed to manage regions for two-panel and three-panel
 * arrangements on a foldable device across various states, including the expanded state, the semi-folded state,
 * and the folded state.
 *
 * > **NOTE**
 * >
 * > By default, a two-panel layout is used when the window width is less than or equal to 600 vp.
 * > When the window width exceeds 600 vp, an extended area is supported alongside the top-bottom split layout.
 * > A semi-folded state layout can be triggered when the window width is greater than 600 vp and the device
 * > is in a horizontal, half-folded posture. In the semi-folded layout, visual avoidance for the screen
 * > crease area is applied, and the extended area cannot span across the crease. The extended area can also
 * > be configured not to display in the semi-folded state.
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
     * Callback function for the primary region.
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
     * Callback function for the extra region.
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
     * Callback function for the extra region. If this parameter is not provided,
     * there is no corresponding region.
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
     * Layout information for the expanded state.
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
     * Layout information for the semi-folded state.
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
     * Layout information for the folded state.
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
     * Animation settings. The value **null** indicates that the animation is disabled.
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
     * Callback function triggered when the foldable device enters or exits the semi-folded state.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform [since 22]
     * @atomicservice
     * @since 12 dynamic
     */
    onHoverStatusChange?: OnHoverStatusChangeHandler;
}
