/*
 * Copyright (c) 2021-2023 Huawei Device Co., Ltd.
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
 * @arkts 1.2
 */


import { ResourceColor, Length, Position } from "./units";
import { FontWeight } from "./enums";
import { CommonMethod, UICommonMethod, AttributeModifier } from "./common";
import { memo, ComponentBuilder } from "./../stateManagement/runtime";
/**
 * Defines the badge position property.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 20
 */
export declare enum BadgePosition {
    /**
     * The dot is displayed vertically centered on the right.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    RightTop,
    /**
     * Dots are displayed in the upper right corner.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    Right,
    /**
     * The dot is displayed in the left vertical center.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    Left
}
/**
 * BadgeStyle object
 *
 * @interface BadgeStyle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 20
 */
export declare interface BadgeStyle {
    /**
     * Text Color
     *
     * @type { ?ResourceColor }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    color?: ResourceColor;
    /**
     * Text size.
     *
     * @type { ?(number | string) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    fontSize?: number | string;
    /**
     * Size of a badge.
     *
     * @type { ?(number | string) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    badgeSize?: number | string;
    /**
     * Color of the badge.
     *
     * @type { ?ResourceColor }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    badgeColor?: ResourceColor;
    /**
     * Define the border color of the badge.
     *
     * @type { ?ResourceColor }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    borderColor?: ResourceColor;
    /**
     * Define the border width of the badge.
     *
     * @type { ?Length }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    borderWidth?: Length;
    /**
     * Define the font weight of the badge.
     *
     * @type { ?(number | FontWeight | string) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    fontWeight?: number | FontWeight | string;
}
/**
 * Defines the base param of badge.
 *
 * @interface BadgeParam
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 20
 */
export declare interface BadgeParam {
    /**
     * Set the display position of the prompt point.
     *
     * @type { ?(BadgePosition | Position) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    position?: BadgePosition | Position;
    /**
     * Defines the style of the Badge component, including the text color, size, dot color, and size.
     *
     * @type { BadgeStyle }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    style: BadgeStyle;
}
/**
 * Defines the badge param with count and maxCount.
 *
 * @extends BadgeParam
 * @interface BadgeParamWithNumber
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 20
 */
export declare interface BadgeParamWithNumber extends BadgeParam {
    /**
     * Set the number of reminder messages.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    count: number;
    /**
     * Maximum number of messages. If the number of messages exceeds the maximum, only maxCount+ is displayed.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    maxCount?: number;
}
/**
 * Defines the badge param with string value.
 *
 * @extends BadgeParam
 * @interface BadgeParamWithString
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 20
 */
export declare interface BadgeParamWithString extends BadgeParam {
    /**
     * Text string of the prompt content.
     *
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    value: string;
}
export declare interface BadgeAttribute extends CommonMethod {
    attributeModifier(modifier: AttributeModifier<BadgeAttribute> | AttributeModifier<CommonMethod> | undefined): this;
}
export declare interface UIBadgeAttribute extends UICommonMethod {
    @memo
    attributeModifier(modifier: AttributeModifier<BadgeAttribute> | AttributeModifier<CommonMethod> | undefined): this;
}

@memo
@ComponentBuilder
export declare function Badge(
    
    @memo
    content_?: () => void,
): UIBadgeAttribute