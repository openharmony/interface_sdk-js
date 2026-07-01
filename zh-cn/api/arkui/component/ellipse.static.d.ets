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
import { ComponentBuilder, CustomBuilder, CustomBuilderT, Builder} from './builder';
import { Length } from './units';

/**
 * 用于描述Ellipse组件绘制属性。
 *
 * @interface EllipseOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export interface EllipseOptions {
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
 * 椭圆绘制组件属性。
 * @extends CommonShapeMethod
 * @interface EllipseAttribute
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface EllipseAttribute extends CommonShapeMethod {
	/**
	 * 设置Ellipse构造参数。
	 *
	 * @param { EllipseOptions } [options] - 椭圆绘制尺寸。<br/>异常值undefined和null按照无效值处理，本次设置不生效。
	 * @returns { EllipseAttribute } 返回EllipseAttribute实例。
	 * @syscap SystemCapability.ArkUI.ArkUI.Full
	 * @stagemodelonly
	 * @since 26.0.0 staticonly
	 */
 	default setEllipseOptions(options?: EllipseOptions): this;
    /**
     * 调用attributeModifier。
     *
     * @param { AttributeModifier<EllipseAttribute> | AttributeModifier<CommonMethod> | undefined } modifier
     * @returns { EllipseAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default attributeModifier(modifier: AttributeModifier<EllipseAttribute> | AttributeModifier<CommonMethod> | undefined): this;
}

/**
 * 用于绘制椭圆的构造函数。
 *
 * @param { EllipseOptions } [options] - 椭圆绘制尺寸。<br/>异常值undefined和null按照无效值处理，本次设置不生效。
 * @returns { EllipseAttribute } 椭圆的属性。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
@ComponentBuilder
export declare function Ellipse(
    options?: EllipseOptions
): EllipseAttribute

/**
 * 定义Ellipse组件。
 *
 * @param { CustomBuilderT<EllipseAttribute> } style - 设置组件属性的回调。
 * @returns { EllipseAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 staticonly
 * @noninterop
 */
@Builder
export declare function Ellipse(
    style: CustomBuilderT<EllipseAttribute>
): EllipseAttribute;
