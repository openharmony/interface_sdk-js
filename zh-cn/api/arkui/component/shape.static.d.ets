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
import { CommonMethod, PixelMap, AttributeModifier } from "./common";
import { ResourceColor, Length } from "./units";
import { Resource } from '../../global/resource';
import { LineCapStyle, LineJoinStyle } from "./enums";
import { ComponentBuilder, CustomBuilder, CustomBuilderT, Builder } from './builder';

/**
 * 用于描述Viewport的绘制属性。
 *
 * @interface ViewportRect
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface ViewportRect {
    /**
     * 形状视口起始点的水平坐标。
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
    x?: Length;
    /**
     * 形状视口起始点的垂直坐标。
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
    y?: Length;
    /**
     * 形状视口的宽度，取值范围≥0。
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
     * 形状视口的高度，取值范围≥0。
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
}

/**
 * 绘制组件的父组件，父组件中会描述所有绘制组件均支持的通用属性。
 *
 * 1、绘制组件使用Shape作为父组件，实现类似SVG的效果。
 *
 * 2、绘制组件单独使用，用于在页面上绘制指定的图形。
 *
 * @extends CommonMethod
 * @interface ShapeAttribute
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface ShapeAttribute extends CommonMethod {
    /**
     * 设置形状的视口。
     *
     * @param { ViewportRect | undefined } value - Viewport绘制属性。
     *     默认值：{}
     *     异常值undefined和null按照默认值处理。
     * @returns { ShapeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default viewPort(value: ViewportRect | undefined): this;
    /**
     * 设置边框颜色，支持
     * [attributeModifier](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-attribute-modifier.md#attributemodifier)
     * 动态设置属性方法，不设置时，默认边框透明度为0，即没有边框。
     *
     * @param { ResourceColor | undefined } value - 边框颜色。
     *     默认值：[Color](docroot://reference/apis-arkui/arkui-ts/ts-appendix-enums.md#color).Transparent
     *     异常值undefined和null按照默认值处理，NaN和Infinity按照
     *     [Color](docroot://reference/apis-arkui/arkui-ts/ts-appendix-enums.md#color).Black处理。
     * @returns { ShapeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default stroke(value: ResourceColor | undefined): this;
    /**
     * 设置填充区域的颜色，支持
     * [attributeModifier](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-attribute-modifier.md#attributemodifier)
     * 动态设置属性方法，异常值按照默认值处理。
     * 与通用属性foregroundColor同时设置时，后设置的属性生效。
     *
     * @param { ResourceColor | undefined } value - 填充区域颜色。
     *     默认值：[Color](docroot://reference/apis-arkui/arkui-ts/ts-appendix-enums.md#color).Black
     *     异常值undefined、null、NaN和Infinity按照默认值处理。
     * @returns { ShapeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default fill(value: ResourceColor | undefined): this;
    /**
     * 设置边框绘制起点的偏移量，支持
     * [attributeModifier](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-attribute-modifier.md#attributemodifier)
     * 动态设置属性方法。异常值按照默认值处理。
     *
     * @param { Length | undefined } value - 边框绘制起点的偏移量。
     *     默认值：0
     *     默认单位：vp
     *     异常值undefined和null按照默认值处理，NaN和Infinity会导致strokeDashArray失效。
     * @returns { ShapeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default strokeDashOffset(value: Length | undefined): this;
    /**
     * 设置边框间隙，支持
     * [attributeModifier](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-attribute-modifier.md#attributemodifier)
     * 动态设置属性方法。取值范围为≥0，异常值按照默认值处理。
     *
     * @param { Array<Length> | undefined } value - 定义Shape轮廓的虚线模式的数组，
     *     数组元素交替表示线段长度和间隙长度。
     *     默认值：[]（空数组）
     *     默认单位：vp
     *     异常值undefined和null按照默认值处理。
     *     说明：
     *     空数组：实线
     *     偶数多元素数组：数组元素按顺序循环，如[a, b, c, d]表示线段长度a->间隙长度b->线段长度c->间隙长度d->线段长度a->...
     *     奇数多元素数组：重复一次该数组元素，按偶数多元素数组的规则顺序循环，
     *     如[a, b, c]等效于[a, b, c, a, b, c]，表示线段长度a->间隙长度b->线段长度c->间隙长度a->线段长度b->间隙长度c->线段长度a->...
     * @returns { ShapeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default strokeDashArray(value: Array<Length> | undefined): this;
    /**
     * 设置边框端点绘制样式，支持
     * [attributeModifier](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-attribute-modifier.md#attributemodifier)
     * 动态设置属性方法。
     *
     * @param { LineCapStyle | undefined } value - 边框端点绘制样式。
     *     默认值：LineCapStyle.Butt
     *     异常值undefined、null、NaN和Infinity按照默认值处理。
     * @returns { ShapeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default strokeLineCap(value: LineCapStyle | undefined): this;
    /**
     * 设置边框拐角绘制样式，支持
     * [attributeModifier](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-attribute-modifier.md#attributemodifier)
     * 动态设置属性方法。
     *
     * @param { LineJoinStyle | undefined } value - 边框拐角绘制样式。
     *     默认值：LineJoinStyle.Miter
     *     异常值undefined、null、NaN和Infinity按照默认值处理。
     * @returns { ShapeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default strokeLineJoin(value: LineJoinStyle | undefined): this;
    /**
     * 设置斜接长度与边框宽度比值的极限值，支持
     * [attributeModifier](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-attribute-modifier.md#attributemodifier)
     * 动态设置属性方法。
     * 斜接长度表示外边框外边交点到内边交点的距离，边框宽度即strokeWidth属性的值。
     * 该属性取值需在strokeLineJoin属性取值LineJoinStyle.Miter时生效。
     *
     * 该属性的合法值范围应当大于等于1.0，当取值范围在[0,1)时按1.0处理，其余异常值按默认值处理。
     *
     * @param { Length | undefined } value - 斜接长度与边框宽度比值的极限值。
     *     默认值：4
     *     异常值undefined、null和NaN按照默认值处理，Infinity会导致stroke失效。
     * @returns { ShapeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default strokeMiterLimit(value: Length | undefined): this;
    /**
     * 设置边框透明度，支持
     * [attributeModifier](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-attribute-modifier.md#attributemodifier)
     * 动态设置属性方法。
     * 该属性的取值范围是[0.0, 1.0]，若给定值小于0.0，则取值为0.0；若给定值大于1.0，则取值为1.0。
     *
     * @param { double | string | Resource | undefined } value - 边框透明度。
     *     默认值：stroke接口设置的透明度。
     *     异常值NaN按0.0处理，undefined、null和Infinity按1.0处理。
     * @returns { ShapeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default strokeOpacity(value: double | string | Resource | undefined): this;
    /**
     * 设置填充区域透明度，支持
     * [attributeModifier](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-attribute-modifier.md#attributemodifier)
     * 动态设置属性方法。
     *
     * @param { double | string | Resource | undefined } value - 填充区域透明度。
     *     说明：
     *     number格式取值范围是[0.0, 1.0]，若给定值小于0.0，则取值为0.0；
     *     若给定值大于1.0，则取值为1.0，其余异常值按1.0处理。
     *     string格式支持number格式取值的字符串形式，取值范围与number格式相同。
     *     Resource格式支持系统资源或者应用资源中的字符串，取值范围和number格式相同。
     *     异常值NaN按0.0处理，undefined、null和Infinity按1.0处理。
     *     默认值：1.0
     * @returns { ShapeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default fillOpacity(value: double | string | Resource | undefined): this;
    /**
     * 设置边框宽度，支持
     * [attributeModifier](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-attribute-modifier.md#attributemodifier)
     * 动态设置属性方法。该属性若为string类型，暂不支持百分比，百分比按照1px处理。
     *
     * @param { Length | undefined } value - 边框宽度，取值范围≥0。
     *     默认值：1
     *     默认单位：vp
     *     异常值undefined、null和NaN按照默认值处理，Infinity按0处理。
     * @returns { ShapeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default strokeWidth(value: Length | undefined): this;
    /**
     * 设置是否开启抗锯齿效果，支持
     * [attributeModifier](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-attribute-modifier.md#attributemodifier)
     * 动态设置属性方法。
     *
     * @param { boolean | undefined } value - 是否开启抗锯齿效果。
     *     true：开启抗锯齿；false：关闭抗锯齿。
     *     默认值：true
     *     异常值undefined和null按照false处理。
     * @returns { ShapeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default antiAlias(value: boolean | undefined): this;
    /**
     * 设置网格效果。将图像分割为（row + 1）* (column + 1)的网格，
     * 每个网格交点坐标存储在数组中（每两个元素表示一个交点的x、y坐标）。
     * 通过数组value中的坐标值，重新定位网格顶点位置，实现图像局部扭曲。
     * 支持
     * [attributeModifier](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-attribute-modifier.md#attributemodifier)
     * 动态设置属性方法。
     *
     * > 说明：
     * >
     * > mesh只对shape传入pixelMap时生效，且效果作用于传入的pixelMap。
     * > 与[绘制模块](docroot://reference/apis-arkgraphics2d/arkts-apis-graphics-drawing.md)的
     * > [drawPixelMapMesh](docroot://reference/apis-arkgraphics2d/arkts-apis-graphics-drawing-Canvas.md#drawpixelmapmesh12)
     * > 效果一致，建议使用drawPixelMapMesh。
     *
     * @param { Array<double> | undefined } value - 长度（row + 1）* （column + 1）* 2的数组，
     *     记录扭曲后的位图各个顶点位置。
     *     设置异常值undefined时value按照空数组处理，设置空数组时column和row按0处理，value按空数组处理。
     * @param { int | undefined } column - mesh矩阵列数。
     *     设置异常值undefined时column和row按0处理，value按空数组处理。
     * @param { int | undefined } row - mesh矩阵行数。
     *     设置异常值undefined时column和row按0处理，value按空数组处理。
     * @returns { ShapeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default mesh(value: Array<double> | undefined, column: int | undefined, row: int | undefined): this;
    /**
     * Set Shape options.
     *
     * @param { PixelMap } [value] - Shape constructor options
     * @returns { ShapeAttribute } Returns the instance of the ShapeAttribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    default setShapeOptions(value?: PixelMap): this;
    /**
     * Call attributeModifier.
     *
     * @param { AttributeModifier<ShapeAttribute> | AttributeModifier<CommonMethod> | undefined } modifier
     * @returns { ShapeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default attributeModifier(modifier: AttributeModifier<ShapeAttribute> | AttributeModifier<CommonMethod> | undefined): this;
}

/**
 * 用于绘制Shape组件的构造函数。
 *
 * @param { PixelMap } [value] - 绘制目标，可将图形绘制在指定的PixelMap对象中，
     若未设置，则默认在当前绘制目标中进行绘制。
     异常值undefined和null按照无效值处理，本次设置不生效。
 * @param { CustomBuilder } [content_]
 * @returns { ShapeAttribute } The attribute of the Shape.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
@ComponentBuilder
export declare function Shape(
    value?: PixelMap,
    content_?: CustomBuilder,
): ShapeAttribute

/**
 * Defines Shape Component.
 *
 * @param { CustomBuilderT<ShapeAttribute> } style - the callback to set up component's attributes.
 * @param { CustomBuilder } [content_] - container
 * @returns { ShapeAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 staticonly
 * @noninterop
 */
@Builder
export declare function Shape(
    style: CustomBuilderT<ShapeAttribute>,
    content_?: CustomBuilder,
): ShapeAttribute;
