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
import { Length } from "./units";
import { ComponentBuilder, CustomBuilder } from './builder';
import { ComponentBuilder, CustomBuilder, CustomBuilderT, Builder} from './builder';

/**
 * 坐标类型，第一个元素为x轴偏移量，第二个元素为y轴偏移量。
 *
 * @typedef { [Length, Length] } ShapePoint
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 staticonly
 */
export type ShapePoint = [
    Length,
    Length
];

/**
 * 用于描述Line组件绘制属性。
 *
 * @interface LineOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export interface LineOptions {
    /**
     * 宽度。<br/>值为异常值或缺省时按照自身内容需要的宽度处理。<br/>默认单位：vp
     *
     * @type { ?Length }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    width?: Length;
    /**
     * 高度。<br/>值为异常值或缺省时按照自身内容需要的高度处理。<br/>默认单位：vp
     *
     * @type { ?Length }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    height?: Length;
}

/**
 * 直线绘制组件属性。
 *
 * @extends CommonShapeMethod
 * @interface LineAttribute
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface LineAttribute extends CommonShapeMethod {
    /**
     * 设置直线起点坐标点（相对坐标），支持[attributeModifier](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-attribute-modifier.md#attributemodifier)动态设置属性方法，
     * 异常值按照默认值处理。
     *
     * @param { ShapePoint | undefined } value - 直线起点坐标点（相对坐标），单位vp。<br/>默认值：[0,&nbsp;0] <br/>异常值undefined和null按照默认值处理。
     * @returns { LineAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default startPoint(value: ShapePoint | undefined): this;
    /**
     * 设置直线终点坐标点（相对坐标），支持[attributeModifier](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-attribute-modifier.md#attributemodifier)动态设置属性方法，
     * 异常值按照默认值处理。
     *
     * @param { ShapePoint | undefined } value - 直线终点坐标点（相对坐标），单位vp。<br/>默认值：[0,&nbsp;0] <br/>异常值undefined和null按照默认值处理。
     * @returns { LineAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default endPoint(value: ShapePoint | undefined): this;
	/**
	 * 设置Line构造参数。
	 *
	 * @param { LineOptions } [options] - Line绘制区域。<br/>异常值undefined和null按照无效值处理，本次设置不生效。
	 * @returns { LineAttribute } 返回LineAttribute实例。
	 * @syscap SystemCapability.ArkUI.ArkUI.Full
	 * @stagemodelonly
	 * @since 26.0.0 staticonly
	 */
 	default setLineOptions(options?: LineOptions): this;
    /**
     * 调用attributeModifier。
     *
     * @param { AttributeModifier<LineAttribute> | AttributeModifier<CommonMethod> | undefined } modifier
     * @returns { LineAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default attributeModifier(modifier: AttributeModifier<LineAttribute> | AttributeModifier<CommonMethod> | undefined): this;
}

/**
 * 用于绘制直线的构造函数。
 *
 * @param { LineOptions } [options] - Line绘制区域。<br/>异常值undefined和null按照无效值处理，本次设置不生效。
 * @returns { LineAttribute } 直线的属性。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
@ComponentBuilder
export declare function Line(
    options?: LineOptions
): LineAttribute

/**
 * 定义Line组件。
 *
 * @param { CustomBuilderT<LineAttribute> } style - 设置组件属性的回调。
 * @returns { LineAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 staticonly
 * @noninterop
 */
@Builder
export declare function Line(
    style: CustomBuilderT<LineAttribute>
): LineAttribute;
