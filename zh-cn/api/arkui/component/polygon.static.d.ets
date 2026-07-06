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
import { ShapePoint } from "./line";
import { ComponentBuilder, CustomBuilder, CustomBuilderT, Builder} from './builder';
import { Length } from './units';

/**
 * 用于描述Polygon组件绘制属性。
 *
 * @interface PolygonOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface PolygonOptions {
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
 * 多边形绘制组件属性。
 *
 * @extends CommonShapeMethod
 * @interface PolygonAttribute
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface PolygonAttribute extends CommonShapeMethod {
    /**
     * 设置多边形的顶点坐标列表，支持[attributeModifier](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-attribute-modifier.md#attributemodifier)动态设置属性方法。
     * 异常值按照默认值处理。
     *
     * @param { Array<ShapePoint> | undefined } value - 多边形的顶点坐标列表。使用时传入一个二维数组，每个子数组表示一个顶点的[x, y]坐标。
     *     <br/>默认值：[]（空数组）<br/>默认单位：vp <br/>异常值undefined和null按照默认值处理。
     * @returns { PolygonAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default points(value: Array<ShapePoint> | undefined): this;
	/**
	 * 设置Polygon构造参数。
	 *
	 * @param { PolygonOptions } [options] - Polygon绘制区域。<br/>异常值undefined和null按照无效值处理，本次设置不生效。
	 * @returns { PolygonAttribute } 返回PolygonAttribute实例。
	 * @syscap SystemCapability.ArkUI.ArkUI.Full
	 * @stagemodelonly
	 * @since 26.0.0 staticonly
	 */
 	default setPolygonOptions(options?: PolygonOptions): this;
    /**
     * 调用attributeModifier。
     *
     * @param { AttributeModifier<PolygonAttribute> | AttributeModifier<CommonMethod> | undefined } modifier
     * @returns { PolygonAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default attributeModifier(modifier: AttributeModifier<PolygonAttribute> | AttributeModifier<CommonMethod> | undefined): this;
}

/**
 * 用于绘制多边形的构造函数。
 *
 * @param { PolygonOptions } [options] - Polygon绘制区域。<br/>异常值undefined和null按照无效值处理，本次设置不生效。
 * @returns { PolygonAttribute } 多边形的属性。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
@ComponentBuilder
export declare function Polygon(
    options?: PolygonOptions
): PolygonAttribute

/**
 * 定义Polygon组件。
 *
 * @param { CustomBuilderT<PolygonAttribute> } style - 设置组件属性的回调。
 * @returns { PolygonAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 staticonly
 * @noninterop
 */
@Builder
export declare function Polygon(
    style: CustomBuilderT<PolygonAttribute>,
): PolygonAttribute;
