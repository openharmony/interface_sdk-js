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
import { CommonShapeMethod, AttributeModifier, CommonMethod } from "./common";
import { Length } from "./units";
import { ComponentBuilder, CustomBuilder, CustomBuilderT, Builder} from './builder';

/**
 * 设置圆角的宽度和高度。第一个参数是圆角的宽度，第二个参数是圆角的高度。
 *
 * @typedef { [Length, Length] } RadiusItem
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 staticonly
 */
export type RadiusItem = [
    Length,
    Length
];

/**
 * 用于描述Rect组件绘制属性。
 *
 * @interface RectOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface RectOptions {
    /**
     * 宽度，取值范围≥0。
     * 默认值：0
     * 默认单位：vp
     * 异常值undefined、null、NaN和Infinity按照默认值处理。
     *
     * Anonymous Object Rectification
     * @type { ?Length }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    width?: Length;
    /**
     * 高度，取值范围≥0。
     * 默认值：0
     * 默认单位：vp
     * 异常值undefined、null、NaN和Infinity按照默认值处理。
     *
     * Anonymous Object Rectification
     * @type { ?Length }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    height?: Length;
    /**
     * 圆角半径，支持分别设置四个角的圆角度数，取值范围≥0。
     * 该属性和radiusWidth/radiusHeight属性效果类似，在组合使用时优先于radiusWidth/radiusHeight生效。
     * 默认值：0
     * 默认单位：vp
     * 异常值undefined、null、NaN和Infinity按照默认值处理。
     *
     * Anonymous Object Rectification
     * @type { ?(Length | Array<RadiusItem>) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    radius?: Length | Array<RadiusItem>;
}

/**
 * 用于描述Rect绘制属性。
 *
 * @interface RoundedRectOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface RoundedRectOptions {
    /**
     * 宽度，取值范围≥0。
     * 默认值：0
     * 默认单位：vp
     * 异常值按照默认值处理。
     *
     * Anonymous Object Rectification
     * @type { ?Length }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    width?: Length;
    /**
     * 高度，取值范围≥0。
     * 默认值：0
     * 默认单位：vp
     * 异常值按照默认值处理。
     *
     * Anonymous Object Rectification
     * @type { ?Length }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    height?: Length;
    /**
     * 圆角宽度，取值范围≥0。
     * 默认值：0
     * 默认单位：vp
     * 异常值按照默认值处理。
     *
     * Anonymous Object Rectification
     * @type { ?Length }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    radiusWidth?: Length;
    /**
     * 圆角高度，取值范围≥0。
     * 默认值：0
     * 默认单位：vp
     * 异常值按照默认值处理。
     *
     * Anonymous Object Rectification
     * @type { ?Length }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    radiusHeight?: Length;
}

/**
 * 矩形绘制组件。
 *
 * @extends CommonShapeMethod
 * @interface RectAttribute
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface RectAttribute extends CommonShapeMethod {
    /**
     * 设置圆角的宽度，仅设置宽时宽高一致，支持
     * [attributeModifier](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-attribute-modifier.md#attributemodifier)
     * 动态设置属性方法。异常值按照默认值处理。
     *
     * @param { Length | undefined } value - 圆角的宽度，取值范围≥0。
     *     默认值：0
     *     默认单位：vp
     *     异常值undefined按照默认值处理。
     * @returns { RectAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default radiusWidth(value: Length | undefined): this;
    /**
     * 设置圆角的高度，仅设置高时宽高一致，支持
     * [attributeModifier](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-attribute-modifier.md#attributemodifier)
     * 动态设置属性方法。异常值按照默认值处理。
     *
     * @param { Length | undefined } value - 圆角的高度，取值范围≥0。
     *     默认值：0
     *     默认单位：vp
     *     异常值undefined按照默认值处理。
     * @returns { RectAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default radiusHeight(value: Length | undefined): this;
    /**
     * 设置圆角半径大小，取值范围≥0，支持
     * [attributeModifier](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-attribute-modifier.md#attributemodifier)
     * 动态设置属性方法。异常值按照默认值处理。
     *
     * @param { Length | Array<RadiusItem> | undefined } value - 圆角半径大小。
     *     默认值：0
     *     默认单位：vp
     *     异常值undefined和null按照[[0, 0], [0, 0], [0, 0], [0, 0]]处理。
     * @returns { RectAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default radius(value: Length | Array<RadiusItem> | undefined): this;
    /**
 	 * Set Rect options.
 	 *
 	 * @param { RectOptions | RoundedRectOptions } [options] - Rect constructor options
 	 * @returns { RectAttribute } Returns the instance of the RectAttribute.
 	 * @syscap SystemCapability.ArkUI.ArkUI.Full
 	 * @stagemodelonly
 	 * @since 26.0.0 staticonly
 	 */
 	default setRectOptions(options?: RectOptions | RoundedRectOptions): this;
    /**
     * Call attributeModifier.
     *
     * @param { AttributeModifier<RectAttribute> | AttributeModifier<CommonMethod> | undefined } modifier
     * @returns { RectAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default attributeModifier(modifier: AttributeModifier<RectAttribute> | AttributeModifier<CommonMethod> | undefined): this;
}

/**
 * 用于绘制矩形的构造函数。
 *
 * @param { RectOptions | RoundedRectOptions } [options] - Rect绘制属性。
     异常值undefined和null按照无效值处理，本次设置不生效。
 * @returns { RectAttribute } The attribute of the Rect
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
@ComponentBuilder
export declare function Rect(
    options?: RectOptions | RoundedRectOptions
): RectAttribute;

/**
 * Defines Rect Component.
 *
 * @param { CustomBuilderT<RectAttribute> } style - the callback to set up component's attributes.
 * @returns { RectAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 staticonly
 * @noninterop
 */
@Builder
export declare function Rect(
    style: CustomBuilderT<RectAttribute>,
): RectAttribute;
