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
import { CommonShapeMethod, CommonMethod, AttributeModifier } from "./common";
import { ComponentBuilder, CustomBuilder, CustomBuilderT, Builder} from './builder';
import { Length, ColorMetrics, ResourceColor } from './units';

/**
 * 用于描述Circle组件绘制属性。
 *
 * @interface CircleOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface CircleOptions {
    /**
     * 宽度，取值范围≥0。<br/>默认值：0<br/>默认单位：vp<br/>异常值undefined、null、NaN和Infinity按照默认值处理。
     *
     * @type { ?Length }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    width?: Length;
    /**
     * 高度，取值范围≥0。<br/>默认值：0<br/>默认单位：vp<br/>异常值undefined、null、NaN和Infinity按照默认值处理。
     *
     * @type { ?Length }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    height?: Length;
}

/**
 * 圆形绘制组件属性。
 *
 * @extends CommonShapeMethod
 * @interface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface CircleAttribute extends CommonShapeMethod {
    /**
     * 设置Circle构造参数。
     *
     * @param { CircleOptions } [options] - Circle构造参数。
     * @returns { CircleAttribute } 返回CircleAttribute实例。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    default setCircleOptions(options?: CircleOptions): this;

    /**
     * 设置边框颜色，支持[attributeModifier](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-attribute-modifier.md#attributemodifier)动态设置属性方法，
     * 不设置时，默认边框透明度为0，即没有边框。
     *
     * @param { ResourceColor | ColorMetrics | undefined } value - 边框颜色。<br/>默认值：[Color](docroot://reference/apis-arkui/arkui-ts/ts-appendix-enums.md#color).Transparent<br/>异常值undefined和null按照默认值处理，
     *     NaN和Infinity按照[Color](docroot://reference/apis-arkui/arkui-ts/ts-appendix-enums.md#color).Black处理。
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    default stroke(value: ResourceColor | ColorMetrics| undefined): this;

    /**
     * 设置填充区域的颜色，支持[attributeModifier](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-attribute-modifier.md#attributemodifier)动态设置属性方法，
     * 异常值按照默认值处理。与通用属性foregroundColor同时设置时，后设置的属性生效。
     *
     * @param { ResourceColor | ColorMetrics| undefined } value - 填充区域颜色。<br/>默认值：[Color](docroot://reference/apis-arkui/arkui-ts/ts-appendix-enums.md#color).Black <br/>异常值undefined、null、NaN和Infinity按照默认值处理。
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    default fill(value: ResourceColor | ColorMetrics | undefined): this;

    /**
     * 调用attributeModifier。
     *
     * @param { AttributeModifier<CircleAttribute> | AttributeModifier<CommonMethod> | undefined } modifier
     * @returns { CircleAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default attributeModifier(modifier: AttributeModifier<CircleAttribute> | AttributeModifier<CommonMethod> | undefined): this;
}

/**
 * 用于绘制圆形的构造函数。
 *
 * @param { CircleOptions } [options] - 设置圆形尺寸。<br/>异常值undefined和null按照无效值处理，本次设置不生效。
 * @returns { CircleAttribute } Circle的属性。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
@ComponentBuilder
export declare function Circle(
    options?: CircleOptions
): CircleAttribute;

/**
 * 定义Circle组件。
 *
 * @param { CustomBuilderT<CircleAttribute> } style - Circle选项。
 * @returns { CircleAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 staticonly
 * @noninterop
 */
@Builder
export declare function Circle(
    style: CustomBuilderT<CircleAttribute>
): CircleAttribute;
