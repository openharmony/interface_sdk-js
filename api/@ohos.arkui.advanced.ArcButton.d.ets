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
 * @file Defines the arc button component
 * @kit ArkUI
 */

import { ColorMetrics, LengthMetrics } from '@ohos.arkui.node';

 /**
 * Describes the type of arc button.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @crossplatform
 * @atomicservice
 * @since 12
 */
export declare enum ArcButtonTypeMode {
    /**
     * The upper arc button is located above the circular screen.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Circle
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    TOP_EDGE = 0,
    /**
     * The bottom arc button is located below the circular screen.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Circle
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    BOTTOM_EDGE = 1
}

/**
 * Provides an arc button style.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @crossplatform
 * @atomicservice
 * @since 12
 */
export declare enum ArcButtonStyleMode {
    /**
     * Emphasis status, light style.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Circle
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    EMPHASIZED_LIGHT = 0,
    /**
     * Emphasis status, deep style.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Circle
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    EMPHASIZED_DEEP = 1,
    /**
     * Normal status, light style.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Circle
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    NORMAL_LIGHT = 2,
    /**
     * Normal status, deep style.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Circle
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    NORMAL_DEEP = 3
}
/**
 * Defines an arc button status.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @crossplatform
 * @atomicservice
 * @since 12
 */
export declare enum ArcButtonStatus {
    /**
     * Normal state.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Circle
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    NORMAL = 0,
    /**
     * Pressed state.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Circle
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    PRESSED = 1,
    /**
     * Disabled state.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Circle
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    DISABLED = 2
}
/**
 * Provides an arc button click effect status.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @crossplatform
 * @atomicservice
 * @since 12
 */
export declare enum ArkButtonClickEffectStyle {
    /**
     * Off click effect.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Circle
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    NONE = 0,
    /**
     * LIGHT.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Circle
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    LIGHT = 1,
    /**
     * MIDDLE.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Circle
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    MIDDLE = 2,
    /**
     * HEAVY.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Circle
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    HEAVY = 3
}
/**
 * Defines the arc button options.
 *
 * @interface CommonArcButtonOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @crossplatform
 * @atomicservice
 * @since 12
 */
interface CommonArcButtonOptions {
    /**
     * Describes the arc button type.
     *
     * @type { ?ArcButtonTypeMode }
     * @syscap SystemCapability.ArkUI.ArkUI.Circle
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    type?: ArcButtonTypeMode;
    /**
     * Describes the radius of the great arc.
     *
     * @type { ?LengthMetrics }
     * @syscap SystemCapability.ArkUI.ArkUI.Circle
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    width?: LengthMetrics;
    /**
     * Describes the height of the curved button.
     *
     * @type { ?LengthMetrics }
     * @syscap SystemCapability.ArkUI.ArkUI.Circle
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    height?: LengthMetrics;
    /**
     * Describes the arc button style mode.
     *
     * @type { ?ArcButtonStyleMode }
     * @syscap SystemCapability.ArkUI.ArkUI.Circle
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    styleMode?: ArcButtonStyleMode;
    /**
     * Describes the arc button status.
     *
     * @type { ?ArcButtonStatus }
     * @syscap SystemCapability.ArkUI.ArkUI.Circle
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    status?: ArcButtonStatus;
    /**
     * Describes the arc button displays text.
     *
     * @type { ?ResourceStr }
     * @syscap SystemCapability.ArkUI.ArkUI.Circle
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    resourceText?: ResourceStr;
    /**
     * Describes the arc button dynamic effect switch.
     *
     * @type { ?ArkButtonClickEffectStyle }
     * @syscap SystemCapability.ArkUI.ArkUI.Circle
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    touchEffect?: ArkButtonClickEffectStyle;
    /**
     * Describes the arc button background color.
     *
     * @type { ?ColorMetrics }
     * @syscap SystemCapability.ArkUI.ArkUI.Circle
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    backgroundColor?: ColorMetrics;
    /**
     * Describes the arc button shadow color.
     *
     * @type { ?ColorMetrics }
     * @syscap SystemCapability.ArkUI.ArkUI.Circle
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    shadowColor?: ColorMetrics;
    /**
     * Describes the arc button shadow switch.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Circle
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    shadowEnabled?: boolean;
    /**
     * Describes the arc button text size.
     *
     * @type { ?LengthMetrics }
     * @syscap SystemCapability.ArkUI.ArkUI.Circle
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    textSize?: LengthMetrics;
    /**
     * Describes the arc button text color.
     *
     * @type { ?ColorMetrics }
     * @syscap SystemCapability.ArkUI.ArkUI.Circle
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    textColor?: ColorMetrics;
    /**
     * Describes the arc button pressed text color.
     *
     * @type { ?ColorMetrics }
     * @syscap SystemCapability.ArkUI.ArkUI.Circle
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    pressedTextColor?: ColorMetrics;
    /**
     * Describes the arc button text style.
     *
     * @type { ?FontStyle }
     * @syscap SystemCapability.ArkUI.ArkUI.Circle
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    textStyle?: FontStyle;
    /**
     * Describes the arc button text family.
     *
     * @type { ?(string | Resource) }
     * @syscap SystemCapability.ArkUI.ArkUI.Circle
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    textFamily?: string | Resource;
    /**
     * Describes the arc button text margin.
     *
     * @type { ?LocalizedMargin }
     * @syscap SystemCapability.ArkUI.ArkUI.Circle
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    textMargin?: LocalizedMargin;
}
/**
 * The class for ArcButtonOptions.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @crossplatform
 * @atomicservice
 * @since 12
 */
export declare class ArcButtonOptions {
    /**
     * Describes Upper and Down arc button type.
     *
     * @type { ArcButtonTypeMode }
     * @syscap SystemCapability.ArkUI.ArkUI.Circle
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    type: ArcButtonTypeMode;
    /**
     * Describes the radius of the great arc.
     *
     * @type { LengthMetrics }
     * @syscap SystemCapability.ArkUI.ArkUI.Circle
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    width: LengthMetrics;
    /**
     * Describes the height of the curved button.
     *
     * @type { LengthMetrics }
     * @syscap SystemCapability.ArkUI.ArkUI.Circle
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    height: LengthMetrics;
    /**
     * Describes the controller for scrollable container.
     *
     * @type { ArcButtonStyleMode }
     * @syscap SystemCapability.ArkUI.ArkUI.Circle
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    styleMode: ArcButtonStyleMode;
    /**
     * Describes the arc button status.
     *
     * @type { ArcButtonStatus }
     * @syscap SystemCapability.ArkUI.ArkUI.Circle
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    status: ArcButtonStatus;
    /**
     * Describes the arc button displays text.
     *
     * @type { ResourceStr }
     * @syscap SystemCapability.ArkUI.ArkUI.Circle
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    resourceText: ResourceStr;
    /**
     * Describes the arc button dynamic effect switch.
     *
     * @type { ArkButtonClickEffectStyle }
     * @syscap SystemCapability.ArkUI.ArkUI.Circle
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    touchEffect: ArkButtonClickEffectStyle;
    /**
     * Describes the arc button background color.
     *
     * @type { ColorMetrics }
     * @syscap SystemCapability.ArkUI.ArkUI.Circle
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    backgroundColor: ColorMetrics;
    /**
     * Describes the arc button shadow color.
     *
     * @type { ColorMetrics }
     * @syscap SystemCapability.ArkUI.ArkUI.Circle
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    shadowColor: ColorMetrics;
    /**
     * Describes the arc button shadow switch.
     *
     * @type { boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Circle
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    shadowEnabled: boolean;
    /**
     * Describes the arc button text size.
     *
     * @type { LengthMetrics }
     * @syscap SystemCapability.ArkUI.ArkUI.Circle
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    textSize: LengthMetrics;
    /**
     * Describes the arc button text color.
     *
     * @type { ColorMetrics }
     * @syscap SystemCapability.ArkUI.ArkUI.Circle
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    textColor: ColorMetrics;
    /**
     * Describes the arc button pressed text color.
     *
     * @type { ColorMetrics }
     * @syscap SystemCapability.ArkUI.ArkUI.Circle
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    pressedTextColor: ColorMetrics;
    /**
     * Describes the arc button text style.
     *
     * @type { FontStyle }
     * @syscap SystemCapability.ArkUI.ArkUI.Circle
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    textStyle: FontStyle;
    /**
     * Describes the arc button text family.
     *
     * @type { (string | Resource) }
     * @syscap SystemCapability.ArkUI.ArkUI.Circle
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    textFamily: string | Resource;
    /**
     * Describes the arc button text margin.
     *
     * @type { LocalizedMargin }
     * @syscap SystemCapability.ArkUI.ArkUI.Circle
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    textMargin: LocalizedMargin;
    
    /**
     * Describes the arc button touch event.
     *
     * @type { ?Callback<TouchEvent> }
     * @syscap SystemCapability.ArkUI.ArkUI.Circle
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    touchCallback?: Callback<TouchEvent>;
    /**
     * Describes the arc button click event.
     *
     * @type { ?Callback<ClickEvent> }
     * @syscap SystemCapability.ArkUI.ArkUI.Circle
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    onClickEvent?: Callback<ClickEvent>;
    /**
     * Constructor of the CommonArcButtonOptions.
     *
     * @param { CommonArcButtonOptions } options
     * @syscap SystemCapability.ArkUI.ArkUI.Circle
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    constructor(options: CommonArcButtonOptions);
}
/**
 * Declare Component ArcButton
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @crossplatform
 * @atomicservice
 * @since 12
 */
export declare struct ArcButton {
    /**
     * Describes the arc button options.
     *
     * @type { ArcButtonOptions }
     * @syscap SystemCapability.ArkUI.ArkUI.Circle
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    @Require
    readonly options: ArcButtonOptions;
}
