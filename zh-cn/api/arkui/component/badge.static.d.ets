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
 * 提示点显示位置。
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
 * Badge的样式。包括文本颜色、尺寸、字重、圆点颜色和尺寸等。
 *
 * > **说明：**
 * > > 当`borderWidth`大于0且`borderColor`与`badgeColor`颜色不一致时，先绘制角标，再绘制描边。由于边缘像素经过抗锯齿处理，抗锯齿产生半透明像素，四角会出现 `badgeColor` 颜色的描边
 * > 线。如需实现相关场景，建议使用[Text]{@link text}组件设置[outline]{@link CommonMethod#outline(value: OutlineOptions)}代替Badge组件。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface BadgeStyle {
    /**
     * 文本颜色。
     * 默认值：Color.White 。
     *
     * @default Color.White
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    color?: ResourceColor;
    /**
     * 文本大小。string类型仅支持number类型取值的字符串形式，可以附带单位，支持的单位有"px"、"vp"、"fp"、"lpx"，例如"10"、"10fp"，不附带单位时默认单位为"fp"。
     * 默认值：10vp。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    fontSize?: double | ResourceStr;
    /**
     * Badge的大小。string类型支持number类型取值的字符串形式，可以附带单位，，支持的单位有"px"、"vp"、"fp"、"lpx"，例如"16"、"16vp"，不附带单位时默认单位为"fp"。
     * 默认值：16vp。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    badgeSize?: double | ResourceStr;
    /**
     * Badge的颜色。
     * 默认值：Color.Red 。
     *
     * @default Color.Red
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    badgeColor?: ResourceColor;
    /**
     * 底板描边颜色。
     * 默认值：Color.Red 。
     *
     * @default Color.Red
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    borderColor?: ResourceColor;
    /**
     * 底板描边粗细,不支持设置百分比，当设置为百分比时，按照默认值处理。
     * 单位为：vp。默认值：1。
     *
     * @default 1
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    borderWidth?: Length;
    /**
     * 设置文本的字体粗细。
     * 默认值：FontWeight.Normal。
     * <br>number类型取值范围：[100,
     * 900]，取值间隔为100。取值越大，字体越粗。设置number类型在取值范围外时，按默认值400处理。string类型仅支持number类型取值的字符串形式，例如"400"，以及"bold"、"bolder"、"lighter"
     * 、"regular"、"medium"，分别对应FontWeight中相应的枚举值。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    fontWeight?: int | FontWeight | ResourceStr;
    /**
     * 底板外描边颜色。
     * 默认值：Color.White 。
     *
     * @default Color.White
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 24 static
     */
    outerBorderColor?: ResourceColor;

    /**
     * 底板外描边粗细。
     *
     * 默认值：0
     *
     * 单位：vp
     *
     * 不支持设置百分比，当设置为百分比时，按照默认值处理。
     *
     * @default 0
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 24 static
     */
    outerBorderWidth?: LengthMetrics;

    /**
     * 增加角标文本延伸显示时是否避让。
     * true表示避让，false表示不避让。
     * 默认值：false。
     * <br>**说明：**
     * 1. 避让效果为角标文本向组件内部延伸显示。
     * 2. 当外描边的宽度大于0时，角标的延伸起点为外描边的内侧。
     * 3. 当position设置为具体坐标值时，角标不进行避让处理。
     *
     * @default false
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 24 static
     */
    enableAutoAvoidance?: boolean;
}

/**
 * 包含用于创建Badge组件的基础参数。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface BadgeParam {
    /**
     * 设置提示点显示位置。
     * 默认值：BadgePosition.RightTop。
     * undefined
     * **说明：**
     * 对于位置类型，不支持百分比值。
     * <br>如果设置了无效值，则使用默认值（0,0）。
     * 表示组件的左上角，将使用。
     * <br>使用BadgePosition类型时，位置将基于方向属性进行镜像。
     *
     * @default BadgePosition.RightTop
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    position?: BadgePosition | Position;
    /**
     * Badge组件可设置样式，支持设置文本颜色、尺寸、圆点颜色和尺寸。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    style: BadgeStyle;
}

/**
 * BadgeParamWithNumber继承自[BadgeParam]{@link BadgeParam}，具有BadgeParam的全部属性。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface BadgeParamWithNumber extends BadgeParam {
    /**
     * 设置提醒消息数。
     * **说明：**
     * 当该值小于等于0且小于maxCount时不显示信息标记。
     * 取值应为[-2147483648,2147483647]内的整数。取值约束：超出范围时会加上或减去4294967296，使得值仍在范围内，非整数时会舍去小数部分取整数部分，如5.5取5。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    count: int;
    /**
     * 最大消息数，超过最大消息时仅显示maxCount+，如maxCount是99时，显示`99+`。
     * 取值范围：[-2147483648, 2147483647]。取值约束：超出范围时会加上或减去4294967296，使得值仍在范围内，非整数时会舍去小数部分取整数部分，如5.5取5。。默认值：99。
     *
     * @default 99
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    maxCount?: int;
}

/**
 * BadgeParamWithNumber继承自[BadgeParam]{@link BadgeParam}，具有BadgeParam的全部属性。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface BadgeParamWithString extends BadgeParam {
    /**
     * 提示内容的文本字符串。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    value: ResourceStr;
}

/**
 * 支持[通用属性](docroot://reference/apis-arkui/arkui-ts/ts-component-general-attributes.md)。
 *
 * 支持[通用事件](docroot://reference/apis-arkui/arkui-ts/ts-component-general-events.md)。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export declare interface BadgeAttribute extends CommonMethod {
    /**
     * 设置组件的动态属性。
     *
     * @param { AttributeModifier<BadgeAttribute> | AttributeModifier<CommonMethod> | undefined } modifier
     * @returns { BadgeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default attributeModifier(modifier: AttributeModifier<BadgeAttribute> | AttributeModifier<CommonMethod> | undefined): this;

    /**
     * 设置数字或者字符串类型的标记组件参数。
     *
     * @param { BadgeParamWithNumber | BadgeParamWithString } value - 数字、字符串类型的标记组件参数。
     * @returns { BadgeAttribute } Returns the instance of the BadgeAttribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    default setBadgeOptions(value: BadgeParamWithNumber | BadgeParamWithString): this;
}

/**
 * 根据数字或者字符串创建标记组件。
 *
 * @param { BadgeParamWithNumber | BadgeParamWithString } value - 数字、字符串类型的标记组件参数。
 * @param { CustomBuilder } [content_] - 子组件。
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
 * 定义Badge组件
 *
 * @param { CustomBuilderT<BadgeAttribute> } style - badge属性实例。
 * @param { CustomBuilder } [content_] - 子组件。
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