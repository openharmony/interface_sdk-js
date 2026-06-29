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
import { CommonMethod, CommonConfiguration, ContentModifier, MultiShadowOptions } from './common';
import { ResourceStr, Dimension, ResourceColor, Length } from "./units";
import { LinearGradient } from "./dataPanel";
import { Builder, ComponentBuilder, CustomBuilder, CustomBuilderT } from './builder';
import { AttributeModifier } from "./common";

/**
 * 数据量规图表选项。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export interface GaugeOptions {
    /**
     * 量规图的当前数据值，即图中指针指向位置。用于组件创建时量规图初始值的预置。
     *
     * 默认值：0
     *
     * **说明：**
     *
     * value不在min和max范围内时使用min作为默认值。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    value: double | undefined;
    /**
     * 当前数据段最小值。
     * 默认值：0。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    min?: double;
    /**
     * 当前数据段最大值。
     * 默认值：100。
     * <br>**说明：**
     * max小于min时使用默认值0和100。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    max?: double;
}
/**
 * GaugeShadowOptions继承自[MultiShadowOptions]{@link MultiShadowOptions}，具有MultiShadowOptions的全部属性。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface GaugeShadowOptions extends MultiShadowOptions {}
/**
 * 数据量规图表指针选项。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface GaugeIndicatorOptions {
    /**
     * 图标资源路径。
     *
     * **说明：**
     *
     * 不配置则使用系统默认样式，系统默认样式为三角形指针。
     *
     * 仅支持使用svg格式的图标，若使用其他格式，则使用默认的三角形样式指针。
     *
     * @default system style.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    icon?: ResourceStr;
    /**
     * 指针距离圆环外边的间距。(不支持百分比)。
     * 默认值：8vp。
     * <br>**说明：**
     * 对于默认的三角形样式指针，间距为黑色三角形到圆环外边的间距。
     *
     * @default 8vp
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    space?: Dimension;
}

/**
* 开发者需要自定义class实现ContentModifier接口。继承自[CommonConfiguration]{@link CommonConfiguration}。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface GaugeConfiguration extends CommonConfiguration<GaugeConfiguration> {
    /**
     * 当前数据值。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    value: double;
    /**
     * 当前数据段最小值。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    min: double;
    /**
     * 当前数据段最大值。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    max: double;
}
/**
 * 除支持[通用属性](docroot://reference/apis-arkui/arkui-ts/ts-component-general-attributes.md)外，还支持以下属性。
 *
 * 支持[通用事件](docroot://reference/apis-arkui/arkui-ts/ts-component-general-events.md)。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export declare interface GaugeAttribute extends CommonMethod {
    /**
     * 设置量规图的数据值。
     *
     * @param { double | undefined } value
     * @returns { GaugeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default value(value: double | undefined): this;
    /**
     * 设置起始角度位置。
     *
     * @param { double | undefined } angle
     * @returns { GaugeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default startAngle(angle: double | undefined): this;
    /**
     * 设置终止角度位置。起始角度和终止角度的差值过小时，会绘制出异常图像，请取合理的起始角度和终止角度。建议使用单色环改变Gauge的value参数实现数据值的调节，可通过定时器setTimeout进行数值的延迟加载。
     *
     * @param { double | undefined } angle
     * @returns { GaugeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default endAngle(angle: double | undefined): this;
    /**
     * 设置仪表的颜色。可以设置纯色和分段的渐变色。
     *
     * @param { ResourceColor | LinearGradient | Array<[ResourceColor | LinearGradient, double]> | undefined } colors -
     仪表组件的剖面颜色。
     * @returns { GaugeAttribute } 返回GaugeAttribute的实例。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default colors(colors: ResourceColor | LinearGradient | Array<[ResourceColor | LinearGradient, double]> | undefined): this;
    /**
     * 设置环形量规图的环形厚度。
     *
     * @param { Length | undefined } length
     * @returns { GaugeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default strokeWidth(length: Length | undefined): this;
  
    /**
     * 设置说明内容。
     *
     * @param { CustomBuilder | undefined | null } value - 说明内容。<br/>**说明：** <br/>@Builder中的内容由开发者自定义，建议使用文本或者图片。<br/>若自
     *     定义部分的宽高为百分比形式，则基准范围为圆环直径的44.4%*25.4%的矩形（图片为28.6%*28.6%），距离圆环底部0vp，左右居中。<br/>设置null则不显示内容。<br/>设置undefined等同于不
     *     设置。<br/>不设置则依赖是否设置数据最大最小值。<br/>若设置最大最小值或者只设置其中一个，则显示最大最小值。<br/>若未设置最大最小值，则不显示内容。<br/>最大最小值显示在圆环底部，位置不可移动，若圆环开
     *     口角度设置不恰当，存在圆环遮挡文字的情况。
     * @returns { GaugeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default description(value: CustomBuilder | undefined | null): this;
    /**
     * 设置阴影样式。
     *
     * @param { GaugeShadowOptions | undefined | null } value - 添加阴影效果，可以指定模糊半径、X轴和Y轴的偏移量。<br/>**说明：** <br/>阴影颜色与圆环颜色一致。
     *     <br/>设置null为不开启投影。<br/>设置undefined时恢复默认阴影效果。
     * @returns { GaugeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default trackShadow(value: GaugeShadowOptions | undefined | null): this;
    /**
     * 设置指针样式。
     *
     * @param { GaugeIndicatorOptions | undefined | null } value - 指针样式。<br/>**说明：** <br/>设置null则不显示指针。<br/>设置undefined则
     *     显示默认指针样式。
     * @returns { GaugeAttribute }  返回GaugeAttribute的实例。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default indicator(value: GaugeIndicatorOptions | undefined | null): this;
    /**
     * 设置隐私敏感。
     *
     * @param { boolean | undefined } isPrivacySensitiveMode - 设置隐私敏感。在隐私模式下，Gauge指针指向0位置，最大值最小值文本将被遮罩，量程显示灰色或底色。true表示打
     *     开隐私敏感，false表示关闭隐私敏感。<!--Del--><br/>需要在卡片中使用Gauge，并用[FormComponent]{@link form_component}组件设置
     *     [隐私遮罩](@link CommonMethod#obscured)属性，显示卡片时才有隐私遮罩效果。<!--DelEnd-->。
     * @returns { GaugeAttribute }  返回GaugeAttribute的实例。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default privacySensitive(isPrivacySensitiveMode: boolean | undefined): this;
    /**
     * 定制Gauge内容区的方法。
     *
     * @param { ContentModifier<GaugeConfiguration> | undefined } modifier - 在Gauge组件上定制内容区的方法。<br/>modifier：内容修改器，开发者需要
     *     自定义class实现ContentModifier接口。<br/>设置undefined时显示为默认内容。
     * @returns { GaugeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default contentModifier(modifier: ContentModifier<GaugeConfiguration> | undefined): this;
    /**
     * 设置组件的动态属性。
     *
     * @param { AttributeModifier<GaugeAttribute> | AttributeModifier<CommonMethod> | undefined } modifier
     * @returns { GaugeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default attributeModifier(modifier: AttributeModifier<GaugeAttribute> | AttributeModifier<CommonMethod> | undefined): this;

    /**
     * 设置Gauge选项。
     *
     * @param { GaugeOptions } options - 构建Gauge的选项。
     * @returns { GaugeAttribute } 返回Gauge属性的实例。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    default setGaugeOptions(options: GaugeOptions): this;
}
/**
 * 创建数据量规图表组件。
 *
 * @param { GaugeOptions } options - 数据量规图表组件参数。
 * @param { CustomBuilder } [content_]
 * @returns { GaugeAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
@ComponentBuilder
export declare function Gauge(
    options: GaugeOptions, 
    content_?: CustomBuilder
): GaugeAttribute;

/**
 * 定义Gauge组件。
 *
 * @param { CustomBuilderT<GaugeAttribute> } style - Gauge属性的实例。
 * @param { CustomBuilder } [content_] - 子组件。
 * @returns { GaugeAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 staticonly
 * @noninterop
 */
@Builder
export declare function Gauge(
    style: CustomBuilderT<GaugeAttribute>,
    content_?: CustomBuilder,
): GaugeAttribute;