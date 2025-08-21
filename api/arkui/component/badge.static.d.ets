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
 */
'use static';

/**
 * @file
 * @kit ArkUI
 * @arkts static
 */
import { ResourceColor, Length, Position, Resource, ResourceStr } from './units';
import { FontWeight } from './enums';
import { CommonMethod } from './common';
import { memo, ComponentBuilder } from './../stateManagement/runtime';
import { AttributeModifier, CommonMethod } from './common';
import { memo, ComponentBuilder } from './../stateManagement/runtime';
import { AttributeModifier, CommonMethod } from './common';
/**
 * Defines the badge position property.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 */
export declare enum BadgePosition {
    /**
     * The badge is displayed in the upper right corner of the parent component.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    RightTop,
    /**
     * The badge is vertically centered on the right of the parent component.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    Right,
    /**
     * The badge is vertically centered on the left of the parent component.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    Left
}
/**
 * BadgeStyle object
 *
 * @interface BadgeStyle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 */
export declare interface BadgeStyle {
    /**
     * Font color.
     *
     * @type { ?ResourceColor }
     * @default Color.White
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    color?: ResourceColor;
    /**
     * Text size.
     *
     * @type { ?(number | string) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    fontSize?: number | string;
    /**
     * Size of a badge.
     *
     * @type { ?(number | string) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    badgeSize?: number | string;
    /**
     * Badge color.
     *
     * @type { ?ResourceColor }
     * @default Color.Red
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    badgeColor?: ResourceColor;
    /**
     * Border color of the background.
     *
     * @type { ?ResourceColor }
     * @default Color.Red
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    borderColor?: ResourceColor;
    /**
     * Border width of the background.
     * This parameter cannot be set in percentage.
     * Unit: vp
     *
     * @type { ?Length }
     * @default 1
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    borderWidth?: Length;
    /**
     * Define the font weight of the badge.
     *
     * @type { ?(number | FontWeight | string) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    fontWeight?: number | FontWeight | string;
}
/**
 * Provides basic parameters for creating a badge.
 *
 * @interface BadgeParam
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 */
export declare interface BadgeParam {
    /**
     * Position to display the badge relative to the parent component.
     *
     * <p><strong>NOTE</strong>:
     * <br>With the Position type, percentage values are not supported.
     * <br>If an invalid value is set, the default value (0,0),
     * which indicates the upper left corner of the component, will be used.
     * <br>With the BadgePosition type, the position is mirrored based on the Direction property.
     * </p>
     *
     * @type { ?(BadgePosition | Position) }
     * @default BadgePosition.RightTop
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    position?: BadgePosition | Position;
    /**
     * Style of the badge, including the font color, font size, badge color, and badge size.
     *
     * @type { BadgeStyle }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    style: BadgeStyle;
}
/**
 * Inherits from BadgeParam and has all attributes of BadgeParam.
 *
 * @extends BadgeParam
 * @interface BadgeParamWithNumber
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 */
export declare interface BadgeParamWithNumber extends BadgeParam {
    /**
     * Number of notifications.
     *
     * <p><strong>NOTE</strong>:
     * <br>If the value is less than or equal to 0 and less than the value of maxCount, no badge is displayed.
     * <br>Value range: [-2147483648, 2147483647]
     * <br>If the value is out of the range,
     * it will be adjusted by adding or subtracting 4294967296 to bring it back within the range.
     * <br>If the value is not an integer, it is rounded off to the nearest integer.
     * </p>
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    count: number;
    /**
     * Maximum number of notifications. When the maximum number is reached, only maxCount+ is displayed.
     *
     * <p><strong>NOTE</strong>:
     * <br>Value range: [-2147483648, 2147483647]
     * <br>If the value is out of the range,
     * it will be adjusted by adding or subtracting 4294967296 to bring it back within the range.
     * <br>If the value is not an integer, it is rounded off to the nearest integer.
     * </p>
     *
     * @type { ?number }
     * @default 99
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    maxCount?: number;
}
/**
 * Inherits from BadgeParam and has all attributes of BadgeParam.
 *
 * @extends BadgeParam
 * @interface BadgeParamWithString
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 */
export declare interface BadgeParamWithString extends BadgeParam {
    /**
     * Text string of the prompt content.
     *
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    value: string;
}
export declare interface BadgeAttribute extends CommonMethod {
    /**
     * Set the attribute modifier
     *
     * @param { AttributeModifier<BadgeAttribute> | AttributeModifier<CommonMethod> | undefined } modifier
     * @returns { BadgeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    attributeModifier(modifier: AttributeModifier<BadgeAttribute> | AttributeModifier<CommonMethod> | undefined): this;
}
/**
 * Define BadgeParamWithString's property 'value' type
 *
 * @typedef { string | Resource } BadgeParamWithStringType
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 */
export type BadgeParamWithStringType = string | Resource;
/**
 * Define BadgeStyle's size-relative properties type
 *
 * @typedef { number | string | Resource } BadgeParamWithString
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 */
export type BadgeStyleSizeType = number | string | Resource;

/**
 * Defines Badge Component.
 *
 * @param { BadgeParamWithNumber | BadgeParamWithString } value
 * @param { function } [content_] - container
 * @returns { BadgeAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 */
@memo
@ComponentBuilder
export declare function Badge(
  value: BadgeParamWithNumber | BadgeParamWithString, 
  @memo
  content_?: () => void
): BadgeAttribute;
