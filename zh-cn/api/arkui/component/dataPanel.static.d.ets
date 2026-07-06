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
import { ResourceColor, Length } from "./units";
import { CommonMethod, ContentModifier, CommonConfiguration, MultiShadowOptions } from './common';
import { Builder, ComponentBuilder, CustomBuilder, CustomBuilderT } from './builder';
import { AttributeModifier } from "./common";

/**
 * 数据面板的类型。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum DataPanelType {
    /**
     * Line Type
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    Line,
    /**
     * Line Rainbow
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    Circle
}
/**
 * 颜色断点类型，用于描述渐进色颜色断点。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface ColorStop {
    /**
     * 渐变色断点处的颜色值。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    color: ResourceColor;
    /**
     * 渐变色断点（0~1之间的比例值，若数据值小于0则置为0，若数据值大于1则置为1）。
     *
     * **说明：**
     *
     * 若传入字符串类型且内容为数字，则转换为对应的数值。
     *
     * 例如'10vp'转换为10，'10%'转换为0.1。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    offset: Length;
}
/**
 * 线性渐变颜色类。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare class LinearGradient {
    /**
     * 创建线性渐变颜色对象。
     *
     * @param { ColorStop[] } colorStops - 渐变颜色和渐变点。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    constructor(colorStops: ColorStop[]);
}

/**
 * DataPanelShadowOptions继承自[MultiShadowOptions]{@link MultiShadowOptions}，具有MultiShadowOptions的全部属性。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface DataPanelShadowOptions extends MultiShadowOptions {
    /**
     * 各数据段投影的颜色。
     * 默认值：与valueColors值相同
     * **说明：**
     * 若设置的投影颜色的个数少于数据段个数时，则显示的投影颜色的个数和设置的投影颜色个数一致。
     *
     * @default Consistent with valueColors
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    colors?: Array<ResourceColor | LinearGradient>;
}
/**
 * 数据面板选项。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface DataPanelOptions {
    /**
     * 数据值列表，最多包含9个数据，大于9个数据则取前9个数据。若数据值小于0则置为0。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    values: double[];
    /**
     * max大于0时，表示数据的最大值。
     * - max小于等于0时，max等于value数组各项的和，按比例显示。
     * 默认值：100。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    max?: double;
    /**
     * 数据面板的类型（不支持动态修改）。
     * 默认值：DataPanelType.Circle。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    type?: DataPanelType;
}

/**
* 开发者需要自定义class实现ContentModifier接口。继承自[CommonConfiguration]{@link CommonConfiguration}。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface DataPanelConfiguration extends CommonConfiguration<DataPanelConfiguration> {
    /**
     * 数据值列表，最多包含9个数据，大于9个数据则取前9个数据。若数据值小于0则置为0。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    values: double[];
    /**
     * DataPanel显示的最大值。
     *
     * 默认值：100。
     *
     * **说明：**
     *
     * 如果小于或等于0，maxValue将被设为values数组中所有项的总和，并按比例显示。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    maxValue: double;
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
export declare interface DataPanelAttribute extends CommonMethod {
    /**
     * 设置是否关闭数据占比图表旋转动效和投影效果。若未设置[trackShadow]{@link trackShadow}属性，则由该属性控制投影效果的开关，开启投影的效果为投影的默认效果。若设置了trackShadow属性，则由
     * trackShadow属性值控制投影效果的开关。
     *
     * @param { boolean | undefined } value
     * @returns { DataPanelAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default closeEffect(value: boolean | undefined): this;
    /**
     * 设置各数据段颜色。
     *
     * @param { Array<ResourceColor | LinearGradient> | undefined } value - 各数据段颜色，ResourceColor为纯色，LinearGradient为渐变色。默
     *     认渐变色，其九段数据段默认颜色：[{ color: '#F7CE00', offset: 0 }, { color: '#F99B11', offset: 1 }]、
     *     [{ color: '#F76223', offset: 0 }, { color: '#F2400A', offset: 1 }]、
     *     [{ color: '#F772AC', offset: 0 }, { color: '#E65392', offset: 1 }]、
     *     [{ color: '#A575EB', offset: 0 }, { color: '#A12DF7', offset: 1 }]、
     *     [{ color: '#7B79F7', offset: 0 }, { color: '#4B48F7', offset: 1 }]、
     *     [{ color: '#4B8AF3', offset: 0 }, { color: '#007DFF', offset: 1 }]、
     *     [{ color: '#73C1E6', offset: 0 }, { color: '#4FB4E3', offset: 1 }]、
     *     [{ color: '#A5D61D', offset: 0 }, { color: '#69D14F', offset: 1 }]、
     *     [{ color: '#A2A2B0', offset: 0 }, { color: '#8E8E93', offset: 1 }]<br/>设置undefined时恢复默认值。
     * @returns { DataPanelAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default valueColors(value: Array<ResourceColor | LinearGradient> | undefined): this;
    /**
     * 设置底板颜色。
     *
     * @param { ResourceColor | undefined } value - 底板颜色。<br/>默认值：'#08182431'，格式为十六进制ARGB值，前两位代表透明度。设置undefined时恢复默认值。
     * @returns { DataPanelAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default trackBackgroundColor(value: ResourceColor | undefined): this;
    /**
     * 设置圆环粗细。数据面板的类型为DataPanelType.Line时该属性不生效。
     *
     * @param { Length | undefined } value - 圆环粗细。<br/>默认值：24<br/>单位：vp<br/>设置字符串类型参数时，如果不指定单位，默认单位为px，例如'10'，等同于'10px'。
     *     <br/>**说明：**<br/>设置小于0的值时，按默认值显示。<br/>设置undefined时恢复默认值。<br/>请合理设置圆环粗细，当value大于圆环半径时，圆环粗细会自动设置为圆环半径的12%。如果
     *     value过大，圆环可能会消失。
     * @returns { DataPanelAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default strokeWidth(value: Length | undefined): this;
    /**
     * 设置投影样式。
     *
     * @param { DataPanelShadowOptions | undefined | null } value - 投影样式。<br/>**说明：** <br/>设置为null时，不开启投影。<br/>设置
     *     undefined时恢复默认投影样式。
     * @returns { DataPanelAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default trackShadow(value: DataPanelShadowOptions | undefined | null): this;
    /**
     * 定制DataPanel内容区的方法。
     *
     * @param { ContentModifier<DataPanelConfiguration> | undefined } modifier - 在DataPanel组件上，定制内容区的方法。<br/>modifier： 内
     *     容修改器，开发者需要自定义class实现ContentModifier接口。<br/>设置undefined时显示为默认内容。
     * @returns { DataPanelAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default contentModifier(modifier: ContentModifier<DataPanelConfiguration> | undefined): this;
    /**
     * 设置组件的动态属性。
     *
     * @param { AttributeModifier<DataPanelAttribute> | AttributeModifier<CommonMethod> | undefined } modifier
     * @returns { BadgeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default attributeModifier(modifier: AttributeModifier<DataPanelAttribute> | AttributeModifier<CommonMethod> | undefined): this;

    /**
     * 设置DataPanel选项。
     *
     * @param { DataPanelOptions } options - 创建DataPanel的选项。
     * @returns { DataPanelAttribute } 返回DataPanel属性的实例。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    default setDataPanelOptions(options: DataPanelOptions): this;
}
/**
 * 创建数据面板组件。
 *
 * @param { DataPanelOptions } options - 数据面板组件参数。
 * @returns { DataPanelAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
@ComponentBuilder
export declare function DataPanel(
    options: DataPanelOptions
): DataPanelAttribute;

/**
 * 定义DataPanel组件。
 *
 * @param { CustomBuilderT<DataPanelAttribute> } style - DataPanel属性实例。
 * @returns { DataPanelAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 staticonly
 * @noninterop
 */
@Builder
export declare function DataPanel(
    style: CustomBuilderT<DataPanelAttribute>,
): DataPanelAttribute;