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
 * Defines layout information for the expanded state.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 22]
 * @atomicservice
 * @since 12 dynamic
 */
export interface ExpandedRegionLayoutOptions {
    /**
     * Ratio of the primary area width to the expanded area width. The value can be a preset value of 
     * **PresetSplitRatio** or a custom value. The value range is (0, +∞). If a value less than or equal to 0 is passed,
     * the default value is used. This field takes effect only when **extra** is valid.
     * 
     * Default value: [PresetSplitRatio]{@link PresetSplitRatio}.LAYOUT_3V2
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform [since 22]
     * @atomicservice
     * @since 12 dynamic
     */
    horizontalSplitRatio?: number;
    /**
     * Ratio of the primary area height to the secondary area height. The value can be a preset value of 
     * **PresetSplitRatio** or a custom value. The value range is (0, +∞). If a value less than or equal to 0 is passed,
     * the default value is used. For example, when the value is 1.5, the primary area height is 1.5 times the secondary
     * area height (that is, a 3:2 ratio).
     * 
     * Default value: [PresetSplitRatio]{@link PresetSplitRatio}.LAYOUT_1V1
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform [since 22]
     * @atomicservice
     * @since 12 dynamic
     */
    verticalSplitRatio?: number;
    /**
     * Whether the expanded area runs through the entire component from top to bottom. The value **true** means the 
     * expanded area runs through the entire component, and **false** means the opposite. This field takes effect only 
     * when **extra** is valid.
     * 
     * Default value: **true**
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform [since 22]
     * @atomicservice
     * @since 12 dynamic
     */
    isExtraRegionPerpendicular?: boolean;
    /**
     * Position of the expanded area. The options are **TOP** (upper half) and **BOTTOM** (lower half). This field takes
     * effect when **isExtraRegionPerpendicular** is set to **false** and **extra** is valid.
     * 
     * Default value: `ExtraRegionPosition.TOP`
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
 * Defines layout information for the hover state.
 * 
 * > **NOTE**
 * >
 * > 1. In the hover state, the device has an avoidance area (the area near the crease where content may be invisible or
 * > restricted), and the impact of this area must be considered during layout calculation.
 * >
 * > 2. In hover mode, the upper half of the screen is the display area, and the lower half is the operation area.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 22]
 * @atomicservice
 * @since 12 dynamic
 */
export interface HoverModeRegionLayoutOptions {
    /**
     * Ratio of the primary area width to the expanded area width. The value can be a preset value from 
     * **PresetSplitRatio** or a custom value, with a value range of (0, +∞). If a value less than or equal to 0 is 
     * passed, the default value is used. This field takes effect when **extra** is valid and **showExtraRegion** is set
     * to **true**. "extra is valid" means that the **extra** parameter is passed to the **FoldSplitContainer** 
     * component.
     * 
     * Default value: [PresetSplitRatio]{@link PresetSplitRatio}.LAYOUT_3V2
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform [since 22]
     * @atomicservice
     * @since 12 dynamic
     */
    horizontalSplitRatio?: number;
    /**
     * Whether to display the expanded area when the foldable screen is in the hover state. The value **true** means to 
     * display the expanded area, and **false** means not to display it.
     * 
     * Default value: **false**
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform [since 22]
     * @atomicservice
     * @since 12 dynamic
     */
    showExtraRegion?: boolean;
    /**
     * Position information of the expanded area. The value can be **TOP** (upper area) or **BOTTOM** (lower area). This
     * field takes effect when **extra** is valid and **showExtraRegion** is set to **true**. "extra is valid" means 
     * that the **extra** parameter is passed to the **FoldSplitContainer** component.
     * 
     * Default value: `ExtraRegionPosition.TOP`
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
 * Defines the layout information for the folded state.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 22]
 * @atomicservice
 * @since 12 dynamic
 */
export interface FoldedRegionLayoutOptions {
    /**
     * Ratio of the primary area height to the secondary area height. The value can be a **PresetSplitRatio** preset 
     * value or a custom value. The value range is (0, +∞). If a value less than or equal to 0 is passed, the default 
     * value is used. This field takes effect only in the folded state layout. For example, when the value is 1.5, it 
     * indicates that the primary area height is 1.5 times the secondary area height (i.e., a 3:2 ratio).
     * 
     * Default value: [PresetSplitRatio]{@link PresetSplitRatio}.LAYOUT_1V1
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
     * 1:1 ratio, indicating that the primary area and secondary area are equal in size. When used for 
     * **verticalSplitRatio**, the height ratio of the upper and lower areas is 1:1. When used for 
     * **horizontalSplitRatio**, the width ratio of the left and right areas is 1:1.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform [since 22]
     * @atomicservice
     * @since 12 dynamic
     */
    LAYOUT_1V1 = 1,
    /**
     * 2:3 ratio, indicating that the primary area is approximately 0.667 times (2/3) the size of the secondary area, 
     * that is, the primary area occupies 2/5 and the secondary area occupies 3/5. When used for **verticalSplitRatio**,
     * the height ratio of the upper and lower areas is 2:3. When used for **horizontalSplitRatio**, the width ratio of 
     * the left and right areas is 2:3.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform [since 22]
     * @atomicservice
     * @since 12 dynamic
     */
    LAYOUT_2V3 = 0.6666666666666666,
    /**
     * 3:2 ratio, indicating that the primary area is 1.5 times the size of the secondary area, that is, the primary 
     * area occupies 3/5 and the secondary area occupies 2/5. When used for **verticalSplitRatio**, the height ratio of 
     * the upper and lower areas is 3:2. When used for **horizontalSplitRatio**, the width ratio of the left and right 
     * areas is 3:2.
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
 * Provides device or application information covering fold status, hover mode, application rotation, and window status 
 * type.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 22]
 * @atomicservice
 * @since 12 dynamic
 */
export interface HoverModeStatus {
    /**
     * Fold status of the device, including expanded, half-folded, and fully folded states.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform [since 22]
     * @atomicservice
     * @since 12 dynamic
     */
    foldStatus: display.FoldStatus;
    /**
     * Whether the app is currently in hover state. The value **true** indicates hover state, and **false** indicates 
     * non-hover state.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform [since 22]
     * @atomicservice
     * @since 12 dynamic
     */
    isHoverMode: boolean;
    /**
     * App rotation angle, in degrees.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform [since 22]
     * @atomicservice
     * @since 12 dynamic
     */
    appRotation: number;
    /**
     * Window mode, including full-screen, split-screen, and freeform window modes.
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
 * Defines an event handler for hover state changes.
 *
 * @param { HoverModeStatus } status - Status information when the foldable screen enters or exits hover mode.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 22]
 * @atomicservice
 * @since 12 dynamic
 */
export type OnHoverStatusChangeHandler = (status: HoverModeStatus) => void;
/**
 * The **FoldSplitContainer** component implements split-screen layout, providing region control for two-panel and three
 * -panel layouts on foldable screens in the expanded state (device fully unfolded), hover state (device half-folded), 
 * and folded state (device fully folded). It is suitable for responsive layout adaptation scenarios in foldable screen 
 * apps, helping developers implement intelligent split-panel layouts across multiple screen states and improving user 
 * experience. For details about fold status, see [display.FoldStatus]{@link @ohos.display:display.FoldStatus}.
 * 
 * > **NOTE**
 * >
 * > - When the window width is less than or equal to 600 vp, the split-screen layout is used by default. When the 
 * > window width is greater than 600 vp, an expanded area can be supported in addition to the top-bottom split. When 
 * > the window width is greater than 600 vp and the device is in landscape half-folded state, the hover state layout 
 * > can be triggered. In the hover state layout, the crease area is avoided and the expanded area cannot cross the 
 * > crease area. In the hover state, you can set not to display the expanded area. For details, see 
 * > [Examples](docroot://reference/apis-arkui/arkui-ts/ohos-arkui-advanced-FoldSplitContainer.md#examples).
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
     * Callback function for building the UI content of the primary area. This callback function has no parameters and 
     * no return value, and is invoked during component layout.
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
     * Callback function for building the UI content of the secondary area. This callback function has no parameters and
     * no return value, and is invoked during component layout.
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
     * Callback function for building the UI content of the expanded area. Pass this parameter when a three-column 
     * layout or an additional content area is needed. This parameter can be omitted when no expanded area is required. 
     * This callback function has no parameters and no return value. When not passed, no corresponding area is 
     * displayed.
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
     * Expanded state layout information, used to control whether the expanded area spans through, the area ratio, and 
     * the position in the expanded state of a foldable screen. The expanded area is supported when the window width is 
     * greater than 600 vp.
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
     * Hover state layout information, used to control whether the expanded area is displayed, the area ratio, and the 
     * position in the semi-folded hover state of a foldable screen. The hover state layout is triggered when the window
     * width is greater than 600 vp and the device is in landscape semi-folded state.
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
     * Folded state layout information, used to control the height ratio between the primary area and the secondary area
     * in the folded state of a foldable screen. This takes effect when the device is in the folded state. A split-
     * screen layout is used by default when the window width is less than or equal to 600 vp.
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
     * Parameters for setting animation effects. The value **null** indicates that animation is disabled.
     * 
     * Default value: **null**
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
     * Callback function triggered when the foldable screen enters or exits hover mode. When not passed, no callback is 
     * made for hover state changes.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform [since 22]
     * @atomicservice
     * @since 12 dynamic
     */
    onHoverStatusChange?: OnHoverStatusChangeHandler;
}
