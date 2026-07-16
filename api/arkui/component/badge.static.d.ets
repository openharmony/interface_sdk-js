'use static';
/*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
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
import { ResourceColor, Length, Position, Resource, ResourceStr, LengthMetrics } from "./units";
import { FontWeight } from "./enums";
import { CommonMethod } from './common';
import { Builder, ComponentBuilder, CustomBuilder, CustomBuilderT } from './builder';
import { AttributeModifier } from "./common";

/**
 * Defines the badge position property.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum BadgePosition {
    /**
     * The badge is displayed in the upper right corner of the parent component.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    RightTop,
    /**
     * The badge is vertically centered on the right of the parent component.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    Right,
    /**
     * The badge is vertically centered on the left of the parent component.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    Left
}
/**
 * Describes the badge style. It includes the font color, font size, badge color, badge size, etc.
 *
 * > **NOTE**
 * >
 * > - When **borderWidth** is set to a value greater than 0 and **borderColor** is different from **badgeColor**, the
 * > badge is drawn before the border. Edge pixels are anti-aliased, which produces semi-transparent pixels. This causes
 * > the border in **badgeColor** to become visible at the four corners. To implement related scenarios, it is
 * > recommended that you use the [Text]{@link text} component with its
 * > [outline]{@link CommonMethod#outline(value: OutlineOptions)} attribute instead of the **Badge** component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface BadgeStyle {
    /**
     * Font color.
     * Default value: Color.White.
     *
     * @default Color.White
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    color?: ResourceColor;
    /**
     * Text size.
     * Default value: 10vp.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    fontSize?: double | ResourceStr;
    /**
     * Size of a badge.
     * Default value: 16vp.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    badgeSize?: double | ResourceStr;
    /**
     * Badge color.
     * Default value: Color.Red .
     *
     * @default Color.Red
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    badgeColor?: ResourceColor;
    /**
     * Border color of the background.
     * Default value: Color.Red.
     *
     * @default Color.Red
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    borderColor?: ResourceColor;
    /**
     * Baseplate stroke thickness. The percentage cannot be set. When the percentage is set, the default value is used.
     * Unit: vp. Default value: 1.
     *
     * @default 1
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    borderWidth?: Length;
    /**
     * Define the font weight of the badge.
     * Default value: FontWeight.Normal.
     * <br>Value range of the number type: [100, 900], with an interval of 100. A larger value indicates a thicker font.
     * If the number type is out of the value range, the default value 400 is used. The value of the string type must be a
     * string of values of the number type, for example, 400. The values of bold, bolter, lighter, regular, and medium
     * correspond to the corresponding enumerated values in FontWeight, respectively.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    fontWeight?: int | FontWeight | ResourceStr;
    /**
     * Outer border color of the background.
     * Default value: Color.White.
     *
     * @default Color.White
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 24 static
     */
    outerBorderColor?: ResourceColor;

    /**
     * Outer border width of the background.
     * Default value: 0 Unit: vp
     * The percentage cannot be set. When the percentage is set, the default value is used.
     *
     * @default 0
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 24 static
     */
    outerBorderWidth?: LengthMetrics;

    /**
     * Enable auto-avoidance for text in badge.
     * Default value: false.
     * <p><strong>NOTE</strong>:
     * 1. The avoidance effect is that the text of the corner mark extends to the interior of the component.
     * 2. When the width of the outer stroke is greater than 0, the extension start point of the corner mark is the inner
     * side of the outer stroke.
     * 3. When position is set to a specific coordinate value, corner marks are not avoided.
     *
     * @default false
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 24 static
     */
    enableAutoAvoidance?: boolean;
}
/**
 * Provides basic parameters for creating a badge.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface BadgeParam {
    /**
     * Position to display the badge relative to the parent component.
     * Default value: BadgePosition.RightTop.
     *
     * <p><strong>NOTE</strong>:
     * Percentage values are not supported for location types.
     * <br>If an invalid value is set, the default value (0, 0) is used.
     * Represents the upper left corner of the component, which will be used.
     * <br>When using the BadgePosition type, the location is mirrored based on the orientation attribute.
     * </p>
     *
     * @default BadgePosition.RightTop
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    position?: BadgePosition | Position;
    /**
     * Style of the badge, including the font color, font size, badge color, and badge size.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    style: BadgeStyle;
}
/**
 * Inherits from BadgeParam and has all attributes of BadgeParam.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface BadgeParamWithNumber extends BadgeParam {
    /**
     * Number of notifications.
     *
     * <p><strong>NOTE</strong>:
     * The value must be an integer within [-2147483648,2147483647]. Value constraint: If the value is out of the range,
     * 4294967296 is added or subtracted to ensure that the value is still in the range. If the value is not an integer,
     * the decimal part is rounded off and the integer part is taken. For example, 5 is taken in 5.5.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    count: int;
    /**
     * Maximum number of notifications. When the maximum number is reached, only maxCount+ is displayed.
     * <p><strong>NOTE</strong>:
     * Value range: [-2147483648, 2147483647]. Value constraint: If the value is out of the range, 4294967296 is added or
     * subtracted to ensure that the value is still in the range. If the value is not an integer, the decimal part is
     * rounded off and the integer part is taken. For example, 5 is taken in 5.5.. Default value: 99.
     *
     * @default 99
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    maxCount?: int;
}
/**
 * Inherits from BadgeParam and has all attributes of BadgeParam.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface BadgeParamWithString extends BadgeParam {
    /**
     * Text string of the prompt content.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    value: ResourceStr;
}
/**
 * Defines the Button component attributes.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export declare interface BadgeAttribute extends CommonMethod {
    /**
     * Set the attribute modifier
     *
     * @param { AttributeModifier<BadgeAttribute> | AttributeModifier<CommonMethod> | undefined } modifier
     * @returns { BadgeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default attributeModifier(modifier: AttributeModifier<BadgeAttribute> | AttributeModifier<CommonMethod> | undefined): this;

    /**
     * Set badge options.
     *
     * @param { BadgeParamWithNumber | BadgeParamWithString } value - badge constructor options
     * @returns { BadgeAttribute } Returns the instance of the BadgeAttribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    default setBadgeOptions(value: BadgeParamWithNumber | BadgeParamWithString): this;
}
/**
 * Defines Badge Component.
 *
 * @param { BadgeParamWithNumber | BadgeParamWithString } value - Markup component parameters of the numeric and
 *     character string types
 * @param { CustomBuilder } [content_] - Child component
 * @returns { BadgeAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
@ComponentBuilder
export declare function Badge(
    value: BadgeParamWithNumber | BadgeParamWithString, 
    content_?: CustomBuilder
): BadgeAttribute;

/**
 * Defines Badge Component.
 *
 * @param { CustomBuilderT<BadgeAttribute> } style - badge attribute instance
 * @param { CustomBuilder } [content_] - Child component
 * @returns { BadgeAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 staticonly
 * @noninterop
 */
@Builder
export declare function Badge(
    style: CustomBuilderT<BadgeAttribute>,
    content_?: CustomBuilder,
): BadgeAttribute;