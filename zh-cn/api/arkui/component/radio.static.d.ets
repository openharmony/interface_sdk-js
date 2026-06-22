'use static'
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
 * 单选框，提供相应的用户交互选择项。
 * 
 * > **说明：**
 * >
 * > - 本模块同时支持ArkTS-Dyn、ArkTS-Sta。
 * >
 * > - API version 12开始，Radio选中默认样式由RadioIndicatorType.DOT变为RadioIndicatorType.TICK。
 * >
 * > -
 * >
 * > - 该组件默认有[margin]{@link CommonMethod#margin}间距，默认值为：{&nbsp;top: '14px',&nbsp;right: '14px',&nbsp;bottom: '14px',&
 * > nbsp;left: '14px' }。
 * 
 * ###### 子组件
 * 
 * 无
 *
 * @file
 * @kit ArkUI
 */
import { CommonMethod, ContentModifier, CommonConfiguration, Callback, Bindable } from './common';
import { CustomBuilder } from './builder';
import { ResourceColor } from './units';
import { ComponentBuilder } from './builder';
import { AttributeModifier, CommonMethod } from './common';
/**
 * 单选框的样式。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum RadioIndicatorType {
    /**
     * 选中样式为系统默认TICK图标。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    TICK = 0,
    /**
     * 选中样式为系统默认DOT图标。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    DOT = 1,
    /**
     * 选中样式为indicatorBuilder中的内容。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    CUSTOM = 2
}
/**
 * 单选框的信息。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface RadioOptions {
    /**
     * 当前单选框的所属群组名称，相同group的Radio只能有一个被选中。
     * 
     * **卡片能力（仅ArkTS-Dyn）：** 从API version 9开始，该接口支持在ArkTS卡片中使用。
     * 
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 11开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    group: string;
    /**
     * 当前单选框的值。 
     * 
     * **卡片能力（仅ArkTS-Dyn）：** 从API version 9开始，该接口支持在ArkTS卡片中使用。
     * 
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 11开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    value: string;
    /**
     * 配置单选框的选中样式。未设置时按照RadioIndicatorType.TICK进行显示。
     * 
     * **卡片能力（仅ArkTS-Dyn）：** 从API version 12开始，该接口支持在ArkTS卡片中使用。
     * 
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 12开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    indicatorType?: RadioIndicatorType;
    /**
     * 配置单选框的选中样式为自定义组件。自定义组件与Radio组件为中心点对齐显示。indicatorBuilder设置为undefined时，按照RadioIndicatorType.TICK进行显示。
     * 
     * **卡片能力（仅ArkTS-Dyn）：** 从API version 12开始，该接口支持在ArkTS卡片中使用。
     * 
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 12开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    indicatorBuilder?: CustomBuilder;
}
/**
 * 单选框的颜色。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface RadioStyle {
    /**
     * 开启状态底板颜色。
     * 
     * 默认值：`$r('sys.color.ohos_id_color_text_primary_activated')`
     *
     * @default #007DFF
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    checkedBackgroundColor?: ResourceColor;
    /**
     * 关闭状态描边颜色。
     * 
     * 默认值：`$r('sys.color.ohos_id_color_switch_outline_off')`
     *
     * @default #182431
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    uncheckedBorderColor?: ResourceColor;
    /**
     * 开启状态内部圆饼颜色。从API version 12开始，indicatorType设置为RadioIndicatorType.TICK和RadioIndicatorType.DOT时，支持修改内部颜色。
     * indicatorType设置为RadioIndicatorType.CUSTOM时，不支持修改内部颜色。
     * 
     * 默认值：`$r('sys.color.ohos_id_color_foreground_contrary')`
     *
     * @default #FFFFFF
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    indicatorColor?: ResourceColor;
}
/**
 * 单选框选中状态改变时触发的回调函数类型定义。
 *
 * @param { boolean } isChecked - 单选框的状态。<br/>值为true时，表示从未选中变为选中。值为false时，表示从选中变为未选中。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type OnRadioChangeCallback = (isChecked: boolean) => void;
/**
 * 除支持[通用属性]{@link common}外，还支持以下属性：
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface RadioAttribute extends CommonMethod {
    /**
     * 设置单选框的选中状态。与[checked]{@link checked}相比，isChecked参数新增了对undefined类型的支持。
     * 
     * 该属性支持Bindable双向绑定变量。
     *
     * @param { boolean | undefined | Bindable<boolean> } isChecked - 单选框的选中状态。<br/>默认值：false<br/>当isChecked的值为undefined
     *     时取默认值false。<br/>值为true时，单选框被选中。值为false时，单选框不被选中。
     * @returns { RadioAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default checked(isChecked: boolean | undefined | Bindable<boolean>): this;
    /**
     * 单选框选中状态改变时触发的回调。
     *
     * @param { OnRadioChangeCallback | undefined } callback - 单选框选中状态改变时触发该回调。<br/>当callback的值为undefined时，不使用回调函数。
     * @returns { RadioAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default onChange(callback: OnRadioChangeCallback | undefined): this;
    /**
     * 设置单选框选中状态和非选中状态的样式。 
     * 
     * 从API version 10开始，该接口支持在ArkTS组件中使用。
     *
     * @param { RadioStyle | undefined } [value] - 单选框选中状态和非选中状态的样式。 <br/> 未设置或设置undefined时，则按照RadioStyle中各参数的默认值配置。
     * @returns { RadioAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default radioStyle(value?: RadioStyle | undefined): this;
    /**
     * 定制Radio内容区的方法。与
     * [contentModifier](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-radio copy.md#contentmodifier12)<
     * sup>12+</sup>相比，modifier参数新增了对undefined类型的支持。
     *
     * @param { ContentModifier<RadioConfiguration> | undefined } modifier - 在Radio组件上，定制内容区的方法。<br/>modifier：内容修改器，开发者需
     *     要自定义class实现ContentModifier接口。<br/>当modifier的值为undefined时，不使用内容修改器。
     * @returns { RadioAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default contentModifier(modifier: ContentModifier<RadioConfiguration> | undefined): this;
    /**
     * 定制Radio属性区的方法。
     *
     * @param { AttributeModifier<RadioAttribute> | AttributeModifier<CommonMethod> | undefined } modifier - 在Radio组件上，定
     *     制属性区的方法。<br/>RadioAttribute表示
     *     [属性](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-radio.md#RadioAttribute)。<br/>CommonMethod表示
     *     [通用属性]{@link common}和[通用事件]{@link common}。<br/>modifier：属性修改器，开发者需要自定义class实现AttributeModifier接口。<br/>当
     *     modifier的值为undefined时，不使用属性修改器。
     * @returns { RadioAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default attributeModifier(modifier: AttributeModifier<RadioAttribute> | AttributeModifier<CommonMethod> | undefined): this;
}
/**
 * 开发者需要自定义class实现ContentModifier接口。继承自[CommonConfiguration]{@link CommonConfiguration}。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface RadioConfiguration extends CommonConfiguration<RadioConfiguration> {
    /**
     * 当前单选框的值。 
     * 
     * **卡片能力（仅ArkTS-Dyn）：** 从API version 9开始，该接口支持在ArkTS卡片中使用。
     * 
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 11开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    value: string;
    /**
     * 设置单选框的选中状态。
     * 
     * 默认值：false
     * 
     * 值为true时，单选框被选中。值为false时，单选框不被选中。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    checked: boolean;
    /**
     * 触发单选框选中状态变化。
     * 
     * 值为true时，表示从未选中变为选中。值为false时，表示从选中变为未选中。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    triggerChange: Callback<boolean>;
}

/**
 * Defines Radio Component.
 *
 * @param { RadioOptions } options - the options of Radio.
 * @param { CustomBuilder } [content_] - container
 * @returns { RadioAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
@ComponentBuilder
export declare function Radio(
    options: RadioOptions,
    content_?: CustomBuilder,
): RadioAttribute